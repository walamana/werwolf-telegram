<template>

</template>

<script>
export default {
  name: "lazy-load",
  mounted(el, binding) {
    doLazyLoad(el, binding.value)
  },
  updated(el, binding) {
    doLazyLoad(el, binding.value)
  }
}

function doLazyLoad(el, url){
  lazyLoadImage(url).then(() => {
    el.classList.add("lazy-loaded")
    if(el.nodeName === "IMG"){

    }else{
      el.style.backgroundImage = "url(" + url + ")"
    }
  })
}

function lazyLoadImage(url){
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function() {
      resolve()
    }
    img.onerror = function() {
      reject()
    }
    img.src = url
  })
}
</script>
