<template>

  <div class="container" :style="{height: containerHeight() + 'px'}" :class="{collapsed: isCollapsed, noTransition: noTransition}" @resize="onResize">

    <div class="header" @click="toggle" ref="header">
      <slot name="header" v-if="$slots['header']"></slot>
      <template v-else>
        <img v-if="img" :src="img"/>
        <i v-else class="material-icons" style="display: inline-block; width: 40px; opacity: 0.5">{{icon}}</i>
        <strong class="title">{{title}}</strong>
        <div class="icons">
          <i class="material-icons icon" v-if="secondOption" @click.capture.stop="$emit('option')">{{secondOption}}</i>
          <i class="material-icons icon toggle">keyboard_arrow_down</i>
        </div>
      </template>
    </div>
    <div class="content" ref="content">
      <slot></slot>
    </div>


  </div>

</template>

<script>
export default {
  name: "CollapsibleDiv",
  props: {
    title: String,
    collapsed: {
      type: Boolean,
      default: true
    },
    disabled: false,
    icon: "",
    img: "",
    secondOption: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      isCollapsed: this.collapsed,
      headerHeight: 0,
      contentHeight: 0,
      resizeObserver: null,
      mutationObserver: null,
      noTransition: false
    }
  },
  mounted() {
    this.headerHeight = this.$refs["header"].clientHeight
    this.contentHeight = this.$refs["content"].clientHeight

    this.resizeObserver = new ResizeObserver(entries => {
      this.noTransition = true
      for(let entry of entries){
        if(entry.target.classList.contains("header")){
          this.headerHeight = entry.target.clientHeight
        }else{
          this.contentHeight = entry.target.clientHeight
        }
      }
      setTimeout(() => {
        this.noTransition = false
      }, 110)
    })
    this.resizeObserver.observe(this.$refs["content"])
    this.resizeObserver.observe(this.$refs["header"])
  },
  methods: {
    toggle(){
      if(this.disabled) return;
      this.isCollapsed = !this.isCollapsed
    },
    containerHeight() {
      return this.isCollapsed ? this.headerHeight : this.headerHeight + this.contentHeight
      // return 0
    },
  }
}
</script>

<style lang="less">

.container{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 300ms height cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &.noTransition{
    transition: 000ms height cubic-bezier(0.25, 1, 0.5, 1);
  }

  .header{
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    background: rgb(26, 31, 44);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    user-select: none;
    position: relative;
    overflow: hidden;
    z-index: 1;

    img{
      position: relative;
      margin-left: -10px;
      display: inline-block;
      height: 45px;
      //width: 40px;
      flex-shrink: 0;
      margin-right: 25px;
      //border: 2px solid hsla(247, 63%, 8%, 0.3);
      //background: hsla(247, 63%, 16%, 0.3);
    }

    & > i{
      flex-shrink: 0;
    }

    .title{
      width: 100%;
      padding: 15px 0;
    }
    .icons{
      flex-shrink: 0;
      height: 100%;

      .icon{
        display: inline-flex;
        align-items: center;
        height: 100%;
        padding: 0 13px;
        transition: 200ms all;
        &:not(.toggle):hover{
          background: rgba(255, 255, 255, 0.1);
        }
        &.toggle{
          transform: rotate(180deg);
        }
      }

    }

  }
  .content{
    z-index: 0;
    padding: 10px 20px 20px;
    border-top: none;
    border-bottom: none;
  }

  &.collapsed .header .icon.toggle{
    transform: rotate(0deg);
  }
}

</style>