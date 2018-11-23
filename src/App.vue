<template>
<div id="app">
  <Header></Header>
  <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view />
  <!-- </transition> -->
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SubHeader from '@/components/Header/SubHeader.vue'
export default {
  components: {
    Header,
    SubHeader
  },
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
