<template>

</template>

<script>
import {createPopper} from "@popperjs/core";
import tippy from "tippy.js"
import 'tippy.js/dist/tippy.css';

export default {
  name: "tooltip",
  mounted(el, binding) {
    init(el, binding)
  },
  updated(el, binding) {
  }
}

function init(el, binding){

  let timeout = null
  let tooltip = null

  el.style.cursor = "pointer";

  tippy(el, {
    content: binding.value.toString(),
    hideOnClick: false,
  })


  // el.addEventListener("mouseenter", ev => {
  //   if(!timeout){
  //     timeout = setTimeout(() => {
  //       timeout = null
  //       if(!tooltip){
  //         tooltip = document.createElement("div")
  //         tooltip.classList.add("tooltip")
  //
  //         tooltip.innerHTML = `<div class="triangle"></div><span>${binding.value}</span>`
  //
  //         document.body.appendChild(tooltip)
  //
  //         createPopper(el, tooltip, {
  //           placement: "bottom",
  //           modifiers: [
  //             {
  //               name: "offset",
  //               options: {
  //                 offset: [0, 4]
  //               }
  //             }
  //           ]
  //         })
  //         console.log("Entering")
  //         tooltip.classList.add("enter")
  //       }
  //     }, 500)
  //   }
  // })
  //
  // el.addEventListener("mouseleave", ev => {
  //   clearTimeout(timeout)
  //   timeout = null
  //   if(tooltip){
  //     tooltip.classList.add("exit")
  //     setTimeout(() => {
  //       tooltip.remove()
  //       tooltip = null
  //     }, 100)
  //   }
  // })

}

</script>
