import {Subject} from "rxjs";


const focus = new Subject();

console.log("hey")

export default {
    subjet: focus,
    focus(el, text){
        focus.next({
            type: "focus",
            el: el,
            text: text,
        })
    },
    hide(){
        focus.next({ type: "hide" })
    }
}