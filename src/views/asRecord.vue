<template>
  <div class="as-record">
    <sub-header @view="goAwardHome">
      <span slot="nav">{{$t('subHeader.page.homePage')}}</span>
      <span>—— {{$t('subHeader.page.checkRecord')}}</span>
    </sub-header>
    <record></record>
    <loading-page v-if="$store.getters.getLoading"></loading-page>
  </div>
</template>

<script>
import SubHeader from '@/components/Header/SubHeader.vue'
import Record from '@/components/Record/Record.vue'
import LoadingPage from '@/components/Base/LoadingPage'
export default {
  components: {
    SubHeader,
    Record,
    LoadingPage
  },
  mounted () {
    this.$store.commit('setLoading', true)
  },
  methods: {
    goAwardHome () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
.as-record{
  position: relative;
}
</style>
