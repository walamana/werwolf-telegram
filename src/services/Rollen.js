
const Handlebars = require("handlebars")
import ManualCreator from "./ManualCreator";


const Attitude = {
    GOOD: "good",
    EVIL: "evil",
    UNKNOWN: "unknown"
}

export default {
    Attitude,
    rollen: [],
    renderTemplate(role){
        return Handlebars.compile(role.template)({
            root: ManualCreator.createContext()
        })
    }

}