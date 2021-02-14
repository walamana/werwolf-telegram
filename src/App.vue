<template>


  <div id="mainContent">

    <a href="https://github.com/walamana/werwolf-telegram" style="position: fixed; top: 0; left: 0" class="printHide">
      <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_white_ffffff.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1">
    </a>

    <div id="previewContainer">
      <manual-preview id="preview" ref="preview"/>
    </div>


    <i id="settingsToggle" :class="{dark: !menuVisible}"  class="material-icons" @click="menuVisible = !menuVisible">menu</i>
    <div :class="{visible: menuVisible}" class="settings">

      <h2 style="margin-left: 20px">Einstellungen</h2>

<!--       1. Einführung -->
      <collapsible-div title="1. Einführung" icon="info_outline" second-option="visibility" @option="scrollTo(1)">


        <input type="checkbox"><label>Einführungstext</label>

      </collapsible-div>


<!--       2. Zeitlicher Ablauf des Spiels -->
      <collapsible-div title="2. Zeitlicher Ablauf des Spiels" icon="alarm" second-option="visibility" @option="scrollTo(2)">
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_nacht1"> Uhr Beginn der Nacht Teil 1<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_ende_rollen_nacht1"> Uhr Entscheidung der Nachtrollen<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_nacht2"> Uhr Beginn der Nacht Teil 2<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_ende_rollen_nacht2"> Uhr Entscheidung der Sondernachtrollen<br><span class="helptext">Die Hexe, der infizierte Wolf, ...</span><br><br>
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_tag"> Uhr Beginn des Tags<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_plaedoyer_klaeger"> Uhr Beginn der Plädoyers der Kläger<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_plaedoyer_angeklagte"> Uhr Beginn der Plädoyers der Angeklagten<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_beginn_abstimmung"> Uhr Beginn der Abstimmung<br>
        <input class="times" type="text" v-model="man.zeiten.zeit_ende_abstimmung"> Uhr Ende der Abstimmung<br>
      </collapsible-div>


<!--      3. Grundlegende Regeln-->
      <collapsible-div title="3. Grundlegende Regeln" icon="subject" second-option="visibility" @option="scrollTo(3)">
        <input type="checkbox" @click.stop v-model="man.grundlegende_regeln.reden_ausserhalb_des_spiels"/><label>Reden außerhalb des Spiels erlaubt<br><span class="helptext">Über Geschehnisse des Spielverlaufs</span></label><br>
        <input type="checkbox" @click.stop v-model="man.grundlegende_regeln.eindeutige_beweise"/><label>Eindeutige Beweise erlaubt<br><span class="helptext">Screenshots, Weiterleitungen, ...</span></label><br>
      </collapsible-div>


<!--      4. Justiz in der Dorfgemeinschaft-->
      <collapsible-div title="4. Justiz in der Dorfgemeinschaft" icon="gavel" second-option="visibility" @option="scrollTo(4)">
        <input type="checkbox" @click.stop v-model="man.justiz.unschuldsvermutung"/><label>Unschuldsvermutung <br><span class="helptext">Keine Abstimmung bei lediglich einem Angeklagten</span></label><br>
<!--        <input checked type="checkbox" @click.stop v-model="man.justiz.geteiltes_plaedoyer"/><label>Geteiltes Plädoyer <br><span class="helptext">Erste Hälfte Kläger, letzte Hälfte Angeklagte</span></label><br>-->
      </collapsible-div>


<!--      5. Rollen in der Dorfgemeinschaft-->
      <collapsible-div :collapsed="false" title="5. Rollen in der Dorfgemeinschaft" icon="person_outline" second-option="visibility" @option="scrollTo(5)">
        <h3>Balancing:</h3>
        <div class="balancings">
          <div class="headers">
            <span class="header">Anzahl</span>
            <span class="header">Schwierigkeit <i class="material-icons" v-tooltip="'Böse Rollen verringern diesen Wert. Für ein faires Spiel sollte die Zahl um 0 liegen.'">info_outline</i></span>
            <span class="header">Verteilung <i class="material-icons" v-tooltip="'Auf einen Werwolf kommen x gutgesinnte Figuren.'">info_outline</i></span>
            <span class="header">Eskalation <i class="material-icons" v-tooltip="'Um so höher dieser Wert ist, um so eskalativ kann die Runde sein, also um so mehr Ereignisse / Tode können geschehen'">info_outline</i></span>
          </div>
          <div class="body">
            <div class="item">
              <span class="amount-roles">{{amountRoles()}}</span>
            </div>
            <div class="item">
              <span class="amount-roles" :style="{ background: scoreColorAlt(totalScore())}">{{totalScore()}}</span>
              <span class="description" >{{difficulty()}}</span>
            </div>
            <div class="item">
              <span class="amount-roles distribution-score" :style="{ background: calculateColor(distributionScore(), 1.5, 3)}">{{distributionScore()}}</span>
            </div>
            <div class="item">
              <span class="amount-roles" :style="{ background: calculateColor(-escalationScore(), -10, 10)}">{{escalationScore()}}</span>
            </div>
          </div>
        </div>
        <div style="padding: 10px; display: flex; align-items: center">
          <div style="width: 10px; height: 10px; background: hsla(200, 100%, 50%, 0.5); margin-right: 10px; border-radius: 5px"></div><span style="margin-right: 20px; font-size: 14px; opacity: 0.7">Zu leicht</span>
          <div style="width: 10px; height: 10px; background: hsla(100, 100%, 50%, 0.5); margin-right: 10px; border-radius: 5px"></div><span style="margin-right: 20px; font-size: 14px; opacity: 0.7">Gut balanciert</span>
          <div style="width: 10px; height: 10px; background: hsla(0, 100%, 50%, 0.5); margin-right: 10px; border-radius: 5px"></div><span style="margin-right: 20px; font-size: 14px; opacity: 0.7">Zu schwer</span>
        </div>
        <br>
        <input checked type="checkbox" @click.stop v-model="man.rollen.rollenuebersicht"/><label>Rollenübersicht anzeigen</label><br>
        <input checked type="checkbox" @click.stop v-model="man.rollen.rollenuebersicht_amount"/><label>Anzahl in Rollenüberischt berücksichtigen</label><br>
        <h3>Aktivierte Rollen:</h3>
        <i v-if="this.man.rollen.aktiviert.length === 0">Keine Rollen hinzugefügt!</i>
        <div class="roles-list">
          <collapsible-div
              v-for="(role, index) in activatedRolesSorted"
              :title="roleTitle(role)"
              :img="roleIcon(role)"
              second-option="delete"
              @option="removeRole(index)">
            <input @input="rerender" min="1" type="number" v-model.number="role.amount"> <label>Anzahl</label><br>

<!--            Properties-->
            <template v-for="prop in role.other">

              <template v-if="prop.type === 'number'">
                <input @input="rerender" min="1" type="number" v-model.number="prop.value"> <label>{{ prop.name }}</label><br>
              </template>
              <template v-if="prop.type === 'time'">
                <input @input="rerender" class="times" type="text"  v-model="prop.value"> Uhr <label>{{ prop.name }}</label><br>
              </template>
              <template v-if="prop.type === 'toggle'">
                <input @input="rerender" type="checkbox" @click.stop  v-model="prop.value"><label>{{ prop.name }}</label><br>
              </template>
              <template v-if="prop.type === 'option'">
                <span>{{ prop.name }}:<br></span>
                <template v-for="option in prop.options">
                  <input
                      :value="option"
                      type="radio"
                      @click.stop
                      v-model="prop.value"
                      />
                  <label>{{ option }}</label><br>
                </template>
              </template>

            </template>
          </collapsible-div>
        </div>
        <h3>Alle Rollen Rollen:</h3>

        <collapsible-div class="collapse-container" title="Böse Gesinnung" icon="thumb_down">
          <role-card
              @add-role="addRole(role)"
              v-for="(role, index) in rolesEvil" :role="role"/>
        </collapsible-div>

        <collapsible-div class="collapse-container"  title="Gute Gesinnung" icon="thumb_up">
          <role-card
              @add-role="addRole(role)"
              v-for="(role, index) in rolesGood" :role="role"/>
        </collapsible-div>

        <collapsible-div class="collapse-container"  title="Unbekannte Gesinnung" icon="help_outlined">
          <role-card
              @add-role="addRole(role)"
              v-for="(role, index) in rolesUnknown" :role="role"/>
        </collapsible-div>

        <collapsible-div class="collapse-container">
          <template #header>
            <input checked type="checkbox" @click.stop v-model="man.rollen.buergermeister.aktiv"/>
            <strong class="title">Der Bürgermeister</strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          <input class="times" type="text" v-model="man.rollen.buergermeister.stimme">x Gewichtung der Stimme<br><br>
          <span>Nach dem Tod des Bürgermeisters:<br></span>
          <input value="0" type="radio" @click.stop v-model="man.rollen.buergermeister.neuwahl"/><label>Nichts</label><br>
          <input value="1" type="radio" @click.stop v-model="man.rollen.buergermeister.neuwahl"/><label>Neuwahlen<br><span class="helptext">Das Dorf bestimmt den neuen Bürgermeister</span></label><br>
          <input value="2" name="b_neuwahlen" type="radio" @click.stop v-model="man.rollen.buergermeister.neuwahl"/><label>Übergabe<br><span class="helptext">Der ehemalige Bürgermeister bestimmt den neuen Bürgermeister</span></label><br><br>


        </collapsible-div>
      </collapsible-div>




<!--      6. Spielgruppen - Sondergruppen-->
      <collapsible-div title="6. Spielgruppen - Sondergruppen" icon="group" second-option="visibility" @option="scrollTo(6)">

        <h3>Verfügbare Gruppen:</h3>
        <collapsible-div>
          <template #header>
            <input checked type="checkbox" @click.stop disabled/>
            <strong class="title">Dorfgruppe</strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          <input checked type="checkbox" @click.stop v-model="man.spielgruppen.dorfgemeinde.nachtaktiv"/><label>Können in der Nacht kommunizieren</label><br>
        </collapsible-div>

        <collapsible-div :disabled="true">
          <template #header>
            <input checked type="checkbox" @click.stop disabled/>
            <strong class="title">Werwolf-Gruppe</strong>
          </template>
        </collapsible-div>

        <collapsible-div>
          <template #header>
            <input
                v-model="man.spielgruppen.jaeger_gruppe.aktiv"
                :disabled="!jaegergruppeEnabled()"
                type="checkbox"
                @click.stop/>
            <strong class="title">Jäger-Gruppe<span v-if="!jaegergruppeEnabled()" class="helptext"><br>Der Jäger und der Jägerhund müssen vorhanden sein!</span></strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          <input checked type="checkbox" @click.stop v-model="man.spielgruppen.jaeger_gruppe.tagaktiv"/><label>Können am Tag kommunizieren</label><br>
          <input checked type="checkbox" @click.stop v-model="man.spielgruppen.jaeger_gruppe.siegesbedingung"/><label>Siegesbedingung: Letzte Überlebende sein</label><br>
        </collapsible-div>

        <collapsible-div>
          <template #header>
            <input
                v-model="man.spielgruppen.liebespaar_gruppe.aktiv"
                :checked="checkRole('Der Amor') && man.spielgruppen.liebespaar_gruppe.aktiv"
                type="checkbox"
                @click.stop/>
            <strong class="title">Liebespaar-Gruppe<span v-if="!checkRole('Der Amor')" class="helptext"><br>Der Amor muss vorhanden sein!</span></strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          <input checked type="checkbox" @click.stop v-model="man.spielgruppen.liebespaar_gruppe.tagaktiv"/><label>Können am Tag kommunizieren</label><br>
        </collapsible-div>

        <collapsible-div>
          <template #header>
            <input v-model="man.spielgruppen.gute_geister.aktiv" type="checkbox" @click.stop/>
            <strong class="title">Gruppe der guten Geister</strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.gute_geister.kommunizieren">. <label>Tag</label> einem Spieler eine Nachricht senden<br>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.gute_geister.aufdecken">. <label>Tag</label> die Rolle eines Spielers aufdecken<br>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.gute_geister.raten">. <label>Tag</label> die Rolle eines Spielers raten<br>
        </collapsible-div>

        <collapsible-div>
          <template #header>
            <input v-model="man.spielgruppen.boese_geister.aktiv" type="checkbox" @click.stop/>
            <strong class="title">Gruppe der bösen Geister</strong>
            <div class="icons">
              <i class="material-icons icon toggle" @click="toggle">keyboard_arrow_down</i>
            </div>
          </template>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.boese_geister.kommunizieren">. <label>Tag</label> einem Spieler eine Nachricht senden<br>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.boese_geister.aufdecken">. <label>Tag</label> die Rolle eines Spielers aufdecken<br>
          Können jeden<input min="0" type="number" v-model.number="man.spielgruppen.boese_geister.raten">. <label>Tag</label> die Rolle eines Spielers raten<br>
        </collapsible-div>

      </collapsible-div>
      <br>


      <!--      Fehler überprüfen -->
      <collapsible-div
          title="Fehler überprüfen"
          icon="warning_outline"
          :style="errorContainerColor()">

        <div class="error-list" style="margin-top: 10px;">
          <div class="error" v-for="error in errors" :class="errorClasses(error)">
            <i class="material-icons icon">{{errorIcon(error)}}</i>
            <span class="msg" v-html="error.msg.replaceAll('\n', '<br>').replaceAll('\t', '<span class=\'tabs\'></span>')"></span>

          </div>
          <div v-if="errors.length === 0" class="error verbose">
            <span class="msg">Alles einwandfrei!</span>

          </div>
        </div>
        <h3>Zusammenfassung:</h3>
        <div class="summary error-list">
          <div class="error verbose" v-for="error in summary()">
            <span class="msg" v-html="error.msg.replaceAll('\n', '<br>').replaceAll('\t', '<span class=\'tabs\'></span>')"></span>
          </div>
        </div>

      </collapsible-div>
<!--      Exportieren-->
      <collapsible-div title="Exportieren" icon="save" :collapsed="false">

        <button @click="exportMarkdown">Markdown herunterladen</button>
        <button @click="exportJSON">JSON-Konfiguration herunterladen</button>
        <button @click="print">Drucken</button>
        <button @click="loadStandard">Standard laden</button>
      </collapsible-div>
    </div>


  </div>

  <div class="background" v-lazy-load="bgImg">
    <div style="background: linear-gradient(135deg, rgba(3,8,15,0.9) 0%,rgba(27,25,45,1) 100%); width: 100%;height: 100%"/>
  </div>



</template>

<script>
import ManualPreview from './components/ManualPreview.vue'
import ManualCreator from "./services/ManualCreator"
import CollapsibleDiv from "@/components/CollapsibleDiv";
import InputField from "@/components/input/InputField";
import Button from "@/components/input/Button";
import Rollen from "@/services/Rollen";
import LazyLoadImage from "@/directives/LazyLoadImage";
import { saveAs, File } from "file-saver"
import RoleCard from "./components/RoleCard";
import {Manual} from "./services/ManualModel";
import Tooltip from "./directives/Tooltip";

export default {
  name: 'App',
  directives: {
    "lazy-load": LazyLoadImage,
    "tooltip": Tooltip
  },
  components: {
    Tooltip,
    RoleCard,
    Button,
    InputField,
    CollapsibleDiv,
    ManualPreview
  },
  data() {
    return {
      allRoles: [
          // {"name": "", "amount": 0, "score": 0, "template": "", "attitude": "evil"},
          // {"name": "", "amount": 0, "score": 0, "template": "", "attitude": "good"},
          // {"name": "", "amount": 0, "score": 0, "template": "", "attitude": "unknown"},
      ],
      man: ManualCreator.man,
      menuVisible: true,
      bgImg: "https://vignette.wikia.nocookie.net/callofduty/images/e/e1/Werewolf_DOTN_BO4.jpg/revision/latest/scale-to-width-down/2000?cb=20181219195834",
      errors: [],
    }
  },
  mounted() {
    let self = this
    ManualCreator.ready.subscribe((v) => {
      this.allRoles = Rollen.rollen
      document.querySelectorAll("input").forEach(el => {
        el.addEventListener("input", ev => {
          this.rerender()
        })
      })

      let parts = window.location.pathname.split("/")
      if(parts.length === 2 && parts[1] !== ""){
        ManualCreator.loadModel(parts[1]).then(man => {
          this.rerender()
        })
      }
    })

    ManualCreator.loadFromLocalStorage()
    ManualCreator.loadTemplates()
  },
  computed: {
    activatedRolesSorted() {
      const allRoleNames = this.allRoles.map(r => r.name)
      return this.man.rollen.aktiviert.sort((r1, r2) => {
        let i1 = allRoleNames.findIndex(name => name === r1.name)
        let i2 = allRoleNames.findIndex(name => name === r2.name)
        return i1 - i2
      })
    },
    rolesGood() { return this.allRoles.filter(r => r.attitude === "good")},
    rolesEvil() { return this.allRoles.filter(r => r.attitude === "evil")},
    rolesUnknown() { return this.allRoles.filter(r => r.attitude === "unknown")},
  },
  methods: {
    scrollTo(index){
      this.$refs["preview"].scrollTo(index)
    },
    roleTitle(role){
      return '(' + role.amount + ') ' + role.name
    },
    roleIcon(role){
      return "./assets/roles/" + role.icon + ".png"
    },
    roleAttitude(role){
      if(role.attitude === Rollen.Attitude.EVIL) return "thumb_down_outline"
      if(role.attitude === Rollen.Attitude.GOOD) return "thumb_up"
      if(role.attitude === Rollen.Attitude.UNKNOWN) return "help_outline"
    },
    addRole(role){
      let existingRole = this.man.rollen.aktiviert.find(r => r.name === role.name)
      if(existingRole){
        existingRole.amount++;
        // ManualCreator.man.rollen.aktiviert.find(r => r.name === role.name).amount++;
      }else{
        role.amount = 1
        this.man.rollen.aktiviert.push(role)
        // console.log(this.man.rollen.aktiviert)
      }
      this.rerender()
    },
    removeRole(index){
      this.man.rollen.aktiviert.splice(index, 1)
      this.rerender()
    },
    amountRoles(){
      let amount = 0;
      for(let role of this.man.rollen.aktiviert){
        amount += role.amount
      }
      return amount
    },
    totalScore(){
      let score = 0;
      for(let role of this.man.rollen.aktiviert){
        score += role.score * role.amount
      }
      return score
    },
    // Returns 1 good : x evil
    distributionScore(){
      let evil = 0;
      for(let role of this.man.rollen.aktiviert){
        if(role.attitude === "evil") evil += role.amount;
      }
      return floorAt((this.amountRoles() - evil) / evil, 2)
    },
    escalationScore(){
      let escalation = 0;
      for(let role of this.man.rollen.aktiviert){
        escalation += role.escalation * role.amount
      }
      return escalation
    },
    scoreColor(score){ return this.calculateColor(score, -4, 4) },
    scoreColorAlt(score){ return ManualCreator.scoreColorAlt(score) },
    difficulty(){
      if(this.totalScore() >= 4) return "Sehr Leicht"
      if(this.totalScore() >= 2) return "Leicht"
      if(this.totalScore() > -2 && this.totalScore() < 2) return "Normal"
      if(this.totalScore() <= -4) return "Schwer"
      if(this.totalScore() <= -2) return "Medium"
    },
    rerender(){
      this.errors = ManualCreator.checkForMistakes()
      setTimeout(() => {
        this.$refs["preview"].render()
      }, 100)
    },
    errorIcon(error){
      if(error.level === 1) return "warning"
      if(error.level === 2) return "error"
    },
    errorClasses(error){
      if(error.level === 0) return "verbose"
      if(error.level === 1) return "warning"
      if(error.level === 2) return "issue"
    },
    errorContainerColor(){
      if(this.errors.find(e => e.level >= 2)) return {background: 'rgba(255,106,106, 0.05)'}
      if(this.errors.find(e => e.level >= 1)) return {background: 'rgba(233,165,57,0.05)' }
    },
    exportPdf(){
      let el = document.getElementById("preview")
    },
    exportMarkdown(){
      saveAs(new Blob([ManualCreator.createMarkdown()], {type: "text/plain;charset=utf-8"}), "Regelwerk.md")
    },
    exportJSON(){
      saveAs(new Blob([JSON.stringify(this.man)], {type: "text/plain;charset=utf-8"}), "manual.json")
    },
    print(){
      // document.querySelector("#app").classList.add("print")
      window.print()
      // document.querySelector("#app").classList.remove("print")
    },
    summary(){
      let summary = []
      function tabs(amount){
        let text = ""
        for(let i = 0; i < amount; i++){
          text += "\t"
        }
        return text
      }
      function getSummary(obj, level){
        for(let key in obj){
          if(key === "template") continue
          if(key === "aktiviert") {
            summary.push({msg: tabs(level) + "Aktivierte Rollen:"})
            for(let role of obj[key]){
              summary.push({msg: tabs(level + 1) + "(" + role.amount + ") " + role.name})
              for(let other in role.other){
                summary.push({msg: tabs(level + 2) + role.other[other].name + ": " + role.other[other].value})
              }
            }
          }else if(typeof obj[key] === "object"){
            if(Object.keys(obj[key]).length === 0) continue
            if(obj[key].aktiv !== undefined && obj[key].aktiv === false) continue
            summary.push({msg: tabs(level) + key + ":"})
            getSummary(obj[key], level+1)
          }else{
            if(key === "aktiv") continue
            summary.push({msg: tabs(level) + key + ": " + obj[key]})
          }
        }
      }
      getSummary(this.man, 0)
      return summary
    },
    loadStandard(){
      this.man.apply(new Manual())
      console.log(new Manual())
    },


    checkRole(name){ return this.man.rollen.aktiviert.find(r => r.name === name)},
    jaegergruppeEnabled(){ return this.checkRole("Der Jäger") && this.checkRole("Der Jägerhund")},
    calculateColor(value, low, high){ return ManualCreator.calculateColor(value, low, high) }
  },
}

function floorAt(num, decimal){
  let f = Math.pow(10, decimal)
  return Math.floor(num * f) / f
}
</script>

<style lang="less">

//.tippy-box{
//  font-family: "Open Sans", sans-serif;
//  background-color: #333;
//}

//.tooltip {
//  font-family: "Open Sans", sans-serif;
//  color: white;
//  border-radius: 4px;
//  font-size: 14px;
//  transition: opacity 100ms;
//  opacity: 0;
//  z-index: 10000;
//  max-width: 200px;
//  position: relative;
//  padding-top: 10px;
//
//
//  &.enter{
//    opacity: 1;
//  }
//  &.exit{
//    opacity: 0;
//  }
//
//  span{
//    display: block;
//    padding: 5px 10px;
//    background-color: #333;
//    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
//    border-radius: 2px;
//  }
//
//  .triangle{
//    content: "";
//    display: block;
//    position: absolute;
//    top: 0;
//    left: calc(50% - 10px);
//    width: 0;
//    height: 0;
//
//    border-left: 10px solid transparent;
//    border-right: 10px solid transparent;
//
//    border-bottom: 10px solid #333;
//  }
//}

html, body{
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
#app {
  display: block;
  background: #19181f;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #ffffff;
}

#previewContainer{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview{
  --size: 750px;
  --padding-side: 60px;
  --padding-tb: 30px;
  width: calc(var(--size) - 2 * var(--padding-side));
  height: calc(var(--size) * (7/5) - 2 * var(--padding-tb));
  padding: var(--padding-tb) var(--padding-side) 60px;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  flex-shrink: 0;
  position: relative;

  @media(max-height: 1080px){
    height: calc(100% - var(--padding-tb) - 60px);
    margin: 0;
    border-radius: 0;
  }
  @media(max-width: 800px){
    width: calc(100% - var(--padding-side) * 2);
  }
  @media(max-width: 600px){
    width: calc(100% - 16px * 2);
    padding: var(--padding-tb) 16px 60px;
  }
}

#mainContent{
  display: flex;
  position: relative;
  height: 100vh;
  z-index: 1;
  justify-content: space-between;

  @media(max-width: 1700px){
    justify-content: center;
  }
}

.settings{
  display: block;
  flex-direction: column;
  width: 700px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  background: #13111c;
  flex-shrink: 0;
  z-index: 10;

  .container .header{
    flex-shrink: 0;
  }
  & > .container{
    border-left: none;
  }

  .description{
    display: inline-block;
    opacity: 0.8;
  }

  @media(max-width: 1700px){
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 700px;
    transition: 250ms transform;
    transform: translateX(100%);
    z-index: 10;
    &.visible{
      transform: translateX(0);
    }
  }
}

#settingsToggle{
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  font-size: 32px;
  opacity: 0.8;
  cursor: pointer;
  z-index: 100;
  user-select: none;
  transition: 250ms color;
  @media(max-width: 800px){
    &.dark{
      color: #212121;
    }
  }
  @media(max-width: 1700px){
    display: block;
  }
}

.balancings{
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .headers{
    display: flex;
    .header{
      flex-shrink: unset !important;
      padding: 5px;
      width: 100%;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      border-bottom: none;

      i{
        font-size: 16px;
        margin-left: 6px;
        opacity: 0.5;
      }
    }
  }
  .body{
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    .item{
      padding: 10px 0 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .description{
        margin-top: 5px;
      }
    }
  }
}

.roles-list{
  display: flex;
  flex-direction: column;

}

.amount-roles{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  width: 12px;
  height: 20px;
  border-radius: 14px;
  margin: 0 10px;
  background: rgba(255, 255, 255, 0.3);
  transition: 400ms background-color;

  &.distribution-score{
    min-width: 20px;
    width: auto;
  }
}

.collapse-container .content > .container{
  &:first-child{
    border-radius: 4px 4px 0 0;
  }
  &:last-child{
    border-radius: 0 0 4px 4px;
  }
}

.container .header .title{
  width: 100%;
  padding: 15px 0;
}
.helptext{
  font-size: 14px;
  opacity: 0.5;
}

input{
  background: rgba(94, 160, 186, 0.3);
  margin: 5px;
  padding: 5px 0 5px 10px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &[type=number]{
    width: 30px;
  }
  &[type=checkbox]{
    margin-right: 20px;
  }
  &.times{
    width: 35px;
    padding: 5px;
  }
}

.error-list{
  border: 1px solid rgba(255, 255, 255, 0.1);
  .error{
    display: flex;
    align-items: center;
    font-family: monospace;
    font-size: 14px;
    padding: 6px 10px;
    .icon{
      width: 30px;
      font-size: 16px;
      flex-shrink: 0;
    }
    .tabs{
      display: inline-block;
      width: 20px
    }
    &:not(:last-child){
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    &.verbose { background: rgba(120, 120, 120, 0.1); color: rgba(200, 200, 200, 0.9);}
    &.warning { background: rgba(133, 102, 69, 0.1); color: rgba(234, 181, 124, 0.9);}
    &.issue   { background: rgba(133, 69, 69 , 0.1); color: rgba(234, 124, 124, 0.9);}
  }
}

.background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

strong{
  font-weight: 600;
}

button{
  margin: 10px;
}

@media print {
  background: white;
  html, body, #app {
    background: white;
  }

  #mainContent, #app {
    height: auto;
  }

  #app {
    overflow: auto;
  }

  .printHide{
    display: none;
  }

  .settings {
    display: none;
  }

  #preview {
    margin: 0;
    width: auto;
    height: 100%;
    padding: 30px 30px;
    box-shadow: none;
    overflow-y: auto;

    &.container {
      display: block;
      background: transparent;
    }
  }


  #previewContainer{
    display: block;
  }

  .background {
    display: none;
  }

  table {
    page-break-after: always;
  }

  #settingsToggle{
    display: none;
  }

  p {
    display: block;
    page-break-before: auto;
  }
}
</style>
