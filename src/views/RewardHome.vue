<template>
<div id="ifoods-home-page">
  <sub-header @viewRecord="checkAwardRecord" @goHome="goAwardHome"></sub-header>
  <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view></router-view>
  <!-- </transition> -->
</div>
</template>

<script>
import SubHeader from '@/components/Header/SubHeader.vue'
export default {
  components: {
    SubHeader
  },
  methods: {
    checkAwardRecord () {
      this.$store.commit('setSubHeaderFlag', this._RC._HOME_CHILD_RECORDS)
      this.$router.push(this._RC._HOME_RECORDS)
    },
    goAwardHome () {
      this.$store.commit('setSubHeaderFlag', this._RC._HOME_CHILD_DETAIL)
      this.$router.push(this._RC._HOME_DEFAULT)
    }
  }
}
</script>

<style scoped>

</style>
