<template>

  <div>
    <div class="container" :class="classContainer">
      <span class="label" v-if="label">{{ label }}</span>
      <input
          v-model="value"
          :type="type"
          @focusin="isFocused = true"
          @focusout="isFocused = false"
          @keyup.enter="$emit('submit', value)"
          @change="$emit('change', value)"
          ref="input">
      <div class="background"></div>
    </div>
    <div class="error-container" v-if="error">
      <i class="material-icons">error</i> <span class="error-text">  {{ error }}  </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "InputField",
  emits: ["submit", "change"],
  props: {
    type: String,
    label: String,
    value: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isFocused: false,
    }
  },
  computed: {
    classContainer() {
      return {
        "has-input": this.isFocused || this.value !== "",
        focused: this.isFocused,
        error: this.error
      }
    }
  },
  methods: {
    focus(){
      this.$refs.input.focus()
    }
  }
}
</script>

<style scoped lang="less">

.container{
  position: relative;
  margin: 20px 10px 10px;
  font-size: 16px;

  .label{
    position: absolute;
    top: calc(50% - 17px);
    left: 13px;
    z-index: 2;
    color: #818181;
    background: #ffffff;
    pointer-events: none;
    padding: 5px 7px;
    transition: all 200ms;
    transform-origin: left center;
  }

  input{
    position: relative;
    box-shadow: none;
    border: 0;
    padding: 20px 10px;
    min-width: 300px;
    font-size: 16px;
    z-index: 1;
    background: transparent;
  }

  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #c1c1c1;
    z-index: 0;
    border-radius: 5px;
    transition: all 100ms;
  }

  &.focused {
    .label{
      color: var(--color-primary);
    }
    .background{
      top: -1px;
      left: -1px;
      border: 3px solid var(--color-primary);
    }
  }
  &.has-input{
    .label{
      top: -14px;
      font-size: 12px;
    }
  }
  &.error{
    .label{
      color: var(--color-error);
    }
    .background{
      border: 2px solid var(--color-error);
    }
  }
}

.error-container{
  display: flex;
  align-items: center;
  color: var(--color-error);
  text-align: left;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding-left: 4px;

  i{
    font-size: 18px;
  }
  span{
    margin-left: 6px;
  }
}


</style>