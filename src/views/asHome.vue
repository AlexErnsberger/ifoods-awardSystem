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
  </div>
</template>

<script>
import SubHeader from '@/components/Header/SubHeader.vue'
import Detail from '@/components/Home/Detail.vue'
export default {
  components: {
    SubHeader,
    Detail
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
