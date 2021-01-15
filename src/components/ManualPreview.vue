<template>

    <div id="preview" class="container" v-html="manualHtml">



    </div>
    
</template>

<script>
import * as showdown from "showdown"
import ManualCreator from "@/services/ManualCreator";

export default {
  name: "ManualPreview",
  data(){
    return {
      manualHtml: "<h2><i>Vorlage wird geladen...</i></h2>"
    }
  },
  mounted() {
    ManualCreator.ready.subscribe((v) => {
      this.render()
    })
  },
  methods: {
    render(){
      let converter = new showdown.Converter({
        tables: true
      })
      let text = ManualCreator.createMarkdown()
      this.manualHtml = converter.makeHtml(text)
      // console.log("Rerendered", text)
    },
    scrollTo(index){
      let el = document.getElementById("preview").querySelectorAll("h2")[index - 1]
      if(el)
        el.scrollIntoView({
          behavior: "smooth"
        })
    },
  }
}
</script>

<style lang="less">

h1 {
  text-align: center;
  font-size: 60px;
  font-weight: 800;
}

h2{
  font-weight: 600;
  margin-top: 40px;
}

h3, h4, h5{
  font-weight: 400;
}

p{
  font-size: 16px;
  line-height: 24px;
}


#preview.container {
  display: inline-block;
  background: #ffffff;
  color: #212121;
  overflow-y: auto;


  table {
    width: 100%;
    border-spacing: 0;
    th{
      font-weight: 600;
    }
    td, th{
      padding: 10px 6px;
      //border-right: 1px solid #cacaca;
      border-bottom: 1px solid #919191;
      &:first-child{
        //border-left: 1px solid #cacaca;
      }
    }
    td:nth-child(1){
      width: 20%;
    }
    td:nth-child(2){
      width: 40%;
    }
    td:nth-child(3){
      width: 30%;
    }
    thead{
      tr th{
        border-top: 2px solid #000000;
        border-bottom: 2px solid #000000;
      }
    }


    ul{
      margin: 0 auto;
      padding: 0;
      width: 60%;
      text-align: left;
      li{
        margin-bottom: 6px;
      }
    }
  }

  .material-icons.day { color: #efb62d; }
  .material-icons.dayend { color: #b16412; }
  .material-icons.night { color: #345eb0; }
}


</style>