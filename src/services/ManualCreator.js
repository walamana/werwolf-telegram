import { Manual } from "./ManualModel";
import ManualTemplate from "@/services/ManualTemplate";
import Rollen from "@/services/Rollen";
import {ReplaySubject} from "rxjs";
const Handlebars = require("handlebars")

const yaml = require("js-yaml")

Handlebars.registerHelper("list-number", function(s) {
    return parseInt(s) + 1
})

Handlebars.registerHelper("handleTemplate", function(root) {
    let template = Handlebars.compile(this.template)
    return template({
        root: root,
        local: this
    })
})
Handlebars.registerHelper("handlebars", function(root, options) {
    let template = Handlebars.compile(options.fn(root))
    return template({
        root: root,
        local: this
    })
})

Handlebars.registerHelper("handlebars", function(root, template, raw){
    return Handlebars.compile(template)(root)
})
Handlebars.registerHelper("count", function(context, shouldDo, options) {
    let ret = ""
    if(shouldDo){
        for(let i = 0; i < context; i++){
            ret += options.fn(this)
        }
    }else{
        ret = options.fn(this)
    }
    return ret;
})
Handlebars.registerHelper("is", function(property, value, options) {
    return property === value ? options.fn(this) : "";
})
Handlebars.registerHelper("gt", function(property, value, options) {
    return property > value ? options.fn(this) : "";
})

export default {
    currentVersion: 1,
    man: new Manual(),
    defaults: {},
    template: `### Vorlage wird geladen`,
    ready: new ReplaySubject(1),
    loadTemplates(){
        Promise.all([
            fetch("./assets/manual/template.md").then(res => res.text()),
            // fetch("./assets/manual/rollen.json").then(res => res.json()),
            fetch("./assets/manual/roles.yaml").then(res => res.text()),
            // fetch("./assets/manual/defaults.json").then(res => res.json()),
            fetch("./assets/manual/defaults.yaml").then(res => res.text()),
            fetch("./assets/manual/manual.yaml").then(res => res.text()),
        ]).then(results => {
            let template = results[0]
            let rollen = this.parseYAMLRoles(results[1]);
            let defaults = yaml.load(results[2])
            let manual = yaml.load(results[3])
            this.template = template
            Rollen.rollen = rollen
            this.defaults = defaults
            console.log(manual)
            this.man.apply(manual)
            this.updateRoleTemplates()
            this.ready.next()

            // let roles = yaml.load(results[3])
            // console.log(roles)
        })
    },
    parseYAMLRoles(yamlData){
        let parsed = yaml.load(yamlData)
        let roles = []
        for(let role in parsed){
            parsed[role].name = role
            roles.push(parsed[role])
        }
        return roles
    },
    loadModel(id) {
        if(id === "") return
        return fetch("http://localhost:8081/preset/" + id)
            .then(res => res.json())
            .then(man => {
                this.man.apply(man)
                this.updateRoleTemplates()
            })
    },
    createMarkdown(save) {
        if(save === undefined) save = true
        let template = Handlebars.compile(this.template)
        // this.updateRoleTemplates()                       // If roles get weird, uncomment this
        let context = this.createContext()

        if(save){
            this.saveToLocalStorage().then(done => {})
        }

        return template(context)
    },
    createContext(){
      return {
          model: this.man,
          rollen: {
              good: this.man.rollen.aktiviert.filter(r => r.attitude === Rollen.Attitude.GOOD),
              evil: this.man.rollen.aktiviert.filter(r => r.attitude === Rollen.Attitude.EVIL),
              unknown: this.man.rollen.aktiviert.filter(r => r.attitude === Rollen.Attitude.UNKNOWN),
          },
          defaults: this.defaults
      }
    },
    updateRoleTemplates(){
      for(let role of this.man.rollen.aktiviert){
          let updatedRole = Rollen.rollen.find(r => r.name === role.name)
          if(!updatedRole) continue
          role.template = updatedRole.template
          role.icon = updatedRole.icon
          role.score = updatedRole.score
          role.escalation = updatedRole.escalation
          for(let key in updatedRole.other){
              role.other[key] = {
                  name: updatedRole.other[key].name,
                  type: updatedRole.other[key].type,
                  value: role.other[key] ? role.other[key].value : updatedRole.other[key].value,
                  options: updatedRole.other[key].options
              }
          }
          if(role.name === "Der Seher")
              console.log(role)
      }
    },
    fixModel(){

    },
    loadFromLocalStorage(){
        let man = JSON.parse(localStorage.getItem("manual"))
        if(!man) return
        this.upgradeManual(man)
        this.man.apply(man)
    },
    saveToLocalStorage(){
        return new Promise(resolve => {
            localStorage.setItem("manual", JSON.stringify(this.man))
            resolve()
        })
    },
    checkForMistakes() {
        let man = this.man
        function checkRole(name){ return man.rollen.aktiviert.find(r => r.name === name)}
        let errors = []

        let amount = 0;
        let score = 0;
        for(let role of this.man.rollen.aktiviert){
            amount += role.amount
            score += role.score * role.amount
        }

        if(score <= -4) errors.push({level: 1, msg: "Das Spiel könnte zu schwer sein."})
        if(score >= 4) errors.push({level: 1, msg: "Das Spiel könnte zu leicht sein."})
        if(amount <= 5) errors.push({level: 1, msg: "Es sind etwas wenig Rollen (" + amount + ")."})

        let jaegerIncluded = this.man.rollen.aktiviert.find(r => r.name === "Der Jäger")
        let jaegerhundIncluded = this.man.rollen.aktiviert.find(r => r.name === "Der Jägerhund")
        if(jaegerhundIncluded && !jaegerIncluded){
            errors.push({level: 2, msg: "Der Jägerhund kann nicht ohne den Jäger verwendet werden."})
        }

        if(checkRole("Der Spanner")){
            errors.push({level: 1, msg: "Der Spanner: Im Regelwerk ist noch nicht deutlich geklärt, welche Figuren sich in der Nacht zuhause befinden."})
        }


        return errors
    },
    scoreColorAlt(score, worst, best){
        if(!worst) worst = -6
        if(!best) best = 6
        let y = (1/(best - worst)) * score - (worst / (best - worst))
        y = Math.min(Math.max(y, 0), 1);

        return `hsla(${200 * y}, 100%, 50%, 0.5)`
    },
    scoreColor(score, worst, best, invert){
        if(invert === undefined) invert = false
        if(!worst) worst = -4
        if(!best) best = 4
        let color = score >= 0 ? 100 : 0
        let base = score >= 0 ? best : worst

        return `hsla(${color}, 100%, 50%, ${(0.25 + 0.25 * (score/base))})`
    },
    calculateColor(value, low, high){
        if(!low) low = -6
        if(!high) high = 6
        let y = (1/(high - low)) * value - (low / (high - low))
        y = Math.min(Math.max(y, 0), 1);

        return `hsla(${200 * y}, 100%, 50%, 0.5)`
    },
    upgradeManual(man){
        if(man.version < this.currentVersion) throw new Error("Cannot downgrade to lower version!")

        // man

    }
}