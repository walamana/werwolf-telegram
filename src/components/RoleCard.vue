<template>
  <collapsible-div>
    <template #header>
      <img :src="roleIcon(role)"/>
      <strong class="title">{{role.score + ' | ' + role.name}}</strong>
      <div class="icons">
        <i class="material-icons icon" @click.capture.stop="$emit('add-role')">add</i>
        <i class="material-icons icon toggle">keyboard_arrow_down</i>
      </div>
    </template>
    <div class="split">
      <div class="image" :style="{backgroundImage: 'url(' + roleIcon(role) + ')'}"></div>
      <div class="side">
        <h3 style="font-weight: 700">{{role.name}}</h3>
        <p>Bewertung: <span class="amount-roles" :style="{ background: scoreColor(role.score, -8, 8)}">{{role.score}}</span></p>
        <p>Eskalationsfaktor: <span class="amount-roles" :style="{ background: scoreColor(-role.escalation, -5, 0)}">{{role.escalation}}</span></p>
        <span class="description">{{template}}</span>
      </div>
    </div>
  </collapsible-div>
</template>

<script>
import Rollen from "../services/Rollen";
import CollapsibleDiv from "./CollapsibleDiv";
import ManualCreator from "../services/ManualCreator";

export default {
name: "RoleCard",
  props: {
    role: Object
  },
  components: {
    CollapsibleDiv,
  },
  emits: ["add-role"],
  data() {
    return {
      template: ""
    }
  },
  methods: {
    roleIcon(role){
      return "./assets/roles/" + role.icon + ".png"
    },
    scoreColor(score, worst, best){ return ManualCreator.scoreColor(score, worst, best) },
    calculateColor(score, low, high){ return ManualCreator.calculateColor(score, low, high) }
  },
  mounted() {
    this.template = Rollen.renderTemplate(this.role)
  }
}
</script>

<style scoped lang="less">

.container .content{
  padding: 0;
}

.description::first-letter{
  text-transform: capitalize;
}

.description{
  overflow-wrap: anywhere;
  text-align: justify;
}

.split{
  display: flex;
  .image{
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
    margin-top: 20px;
    margin-right: 20px;
  }
  .side{
    width: 100%;
  }

  @media(max-width: 510px){
    flex-wrap: wrap;
    .image{
      width: 100%;
      height: 100px;
    }
  }
}
</style>