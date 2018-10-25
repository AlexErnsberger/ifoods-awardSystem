<template>
<div class="form-group input">
  <input
      class="form-control"
      :id="id"
      :type="type"
      :maxlength="maxlength"
      :value="currentValue"
      :clearable="clearable"
      @input="handleInput"
      ref="input">
  <a href="#" v-if="currentValue&&clearable" @click.prevent="handleClear">
    <img src="../../assets/img/clearInput.png">
  </a>
</div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxlength: {
      type: String
    },
    id: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput (event) {
      let value = event.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.$emit('on-change', event)
    },
    setCurrentValue (value) {
      if (this.currentValue === value) return
      this.currentValue = value
    },
    handleClear () {
      const e = {
        target: {
          value: ''
        }
      }
      this.$emit('input', '')
      this.setCurrentValue('')
      this.$emit('on-change', e)
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
}

a {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: none;
  font-size: 0;
  border: 9px solid transparent;
}

.input:hover a {
  display: inline-block;
}
</style>
