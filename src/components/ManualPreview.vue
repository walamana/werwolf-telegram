<template>

  <div id="preview" class="container">

    <div v-html="manualHtml">



    </div>


    <v-style v-if="style === 'font'">
      h1, h2{
        font-family: "Averia Serif Libre", sans-serif;
      }
      h4{ font-style: italic; }
    </v-style>
    <v-style v-if="style === 'brown'">
      h1, h2{
        font-family: "Averia Serif Libre", sans-serif;
      }
      h4{ font-style: italic; }
      #preview.container, html, body, #app{
        background: #f0e9dd;
      }
      #preview.container h1, #preview.container h2{
        color: #865921;
        text-decoration: underline dashed;
      }
      #preview.container h3, #preview.container h4, #preview.container h5, #preview.container p{
        color: #121212;
      }
    </v-style>
    <v-style v-if="style === 'blue_dark'">
      h1, h2{
        font-family: "Averia Serif Libre", sans-serif;
      }
      h4{ font-style: italic; }
      #preview.container, html, body, #app{
        background: #040417;
        color: #ffffff;
      }
      #preview.container h1, #preview.container h2{
        color: #f2f5ff;
        text-decoration: underline dashed;
      }
      h2{
        margin-top: 60px;
        margin-bottom: 40px;
      }
      table thead tr th{
        border-color: #d8defa;
      }

      table td, table th{
        border-color: #cdd6ff44;
      }

    </v-style>

  </div>
    
</template>

<script>
import * as showdown from "showdown"
import ManualCreator from "@/services/ManualCreator";
import VStyle from "@/components/VStyle"

export default {
  name: "ManualPreview",
  components: {
    VStyle
  },
  data(){
    return {
      manualHtml: "<h2><i>Vorlage wird geladen...</i></h2>",
      style: "default"
    }
  },
  mounted() {
    ManualCreator.ready.subscribe((v) => {
      this.render()
    })
  },
  methods: {
    render(save){
      let converter = new showdown.Converter({
        tables: true
      })
      let text = ManualCreator.createMarkdown(save)
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
  color: #121212;
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
  .material-icons.night { color: #4275d9; }
  .material-icons.night2 { color: #8937d2; }
}



</style>
