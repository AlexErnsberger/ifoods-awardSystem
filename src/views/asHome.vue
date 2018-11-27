<template>
  <div class="as-home">
    <sub-header @view="checkAwardRecord">
      <span slot="nav">{{$t('subHeader.page.checkRecord')}}</span>
      <div slot="info" slot-scope="slotProps">
        <span >{{$t('subHeader.allAward')}}{{slotProps.totalReward}}</span>
        <span class="sub-header-info-unit">{{$t('unit')}}</span>
        <span >{{$t('subHeader.ystdAward')}}{{slotProps.miningCount}}</span>
        <span class="sub-header-info-unit">{{$t('unit')}}</span>
      </div>
    </sub-header>
    <detail></detail>
    <loading-page v-if="$store.getters.getLoading"></loading-page>
  </div>
</template>

<script>
import SubHeader from '@/components/Header/SubHeader'
import Detail from '@/components/Home/Detail'
import LoadingPage from '@/components/Base/LoadingPage'
export default {
  components: {
    SubHeader,
    Detail,
    LoadingPage
  },
  mounted () {
    this.$store.commit('setLoading', true)
  },
  methods: {
    checkAwardRecord () {
      this.$router.push({name: 'record'})
    }
  }
}
</script>

<style lang="scss" scoped>
.as-home{
  position: relative;
}
</style>
