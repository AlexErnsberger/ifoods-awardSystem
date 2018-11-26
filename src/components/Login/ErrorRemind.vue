<template>
<div :class={show:error}>
  <img src="../../assets/img/error.png">
  <span>{{error}}</span>
</div>
</template>

<script>
export default {
  props: {
    error: String
  }
}
</script>

<style scoped>
.show {
  display: block
}

div {
  display: none;
  text-align: center;
  background: #f2f2f2;
  border-radius: 6px;
  padding: .3em 0;
}

div span {
  color: black;
  font-weight: 600;
}

div img {
  vertical-align: -2.5px;
}
</style>
