<template>
<button class="btn btn-primary" @click="handleClick" :type="type" :disabled="disabled">
    <img src="@/assets/img/loading.png" :class="['load-loop',{show:loading}]">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    disabled: Boolean,
    type: {
      default: 'button',
      validator (value) {
        let btnType = ['button', 'submit', 'reset']
        for (let i = 0; i < btnType.length; i++) {
          if (btnType[i] === value) {
            return true
          }
        }
        return false
      }
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
.show {
  display: inline;
}

button {
  /* position: relative; */
  background-color: #169BD5;
  border: 1px solid transparent;
  position: relative;
}

button:hover {
  background-color: #19aff0;
  border: 1px solid transparent;
}

button img {
  display: none;
  animation: ani-load-loop 1s linear infinite;
  vertical-align: middle;
  line-height: 1.5;
  position: absolute;
  top: 22%;
}

button span {}

img+span {
  margin-left: 4px;
}

@keyframes ani-load-loop {
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
