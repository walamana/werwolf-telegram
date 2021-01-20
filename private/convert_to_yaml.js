
const fs = require("fs")
const yaml = require("js-yaml")

const manualDir = __dirname + "/../public/assets/manual"
const rollenText = fs.readFileSync(manualDir + "/rollen.json", "utf-8")

const rollen = JSON.parse(rollenText)
let newRoles = {}
for(let role of rollen){
    newRoles[role.name] = role
    delete newRoles[role.name].name
}

fs.writeFileSync(manualDir + "/roles.yaml", yaml.dump(newRoles), "utf-8")
