import { createApp } from 'vue'
import App from './App.vue'



String.prototype.replaceAll = function(str, repl){
    return this.replace(new RegExp(str, "g"), repl)
}

createApp(App).mount('#app')

