const fs = require("fs")
const yaml = require("js-yaml")

const manualDir = __dirname + "/../public/assets/manual"

const defaultsText = fs.readFileSync(manualDir + "/defaults.json", "utf-8")

fs.writeFileSync(manualDir + "/defaults.yaml", yaml.dump(JSON.parse(defaultsText)), "utf-8")