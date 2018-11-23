<template>
<div class="sub-header">
  <div class="container">
    <template v-if="content==='detail'">
      <div class="sub-header-nav">
        <a href="#" @click.prevent="$emit('viewRecord')">{{$t('home.header.page.checkRecord')}}</a>
      </div>
      <div class="sub-header-info">
        <template v-if="rewardInfo">
          <span >{{$t('home.header.allAward')}}{{rewardInfo.totalReward}}</span>
          <span class="sub-header-info-unit">{{$t('home.header.unit')}}</span>
          <span >{{$t('home.header.ystdAward')}}{{rewardInfo.miningCount}}</span>
          <span class="sub-header-info-unit">{{$t('home.header.unit')}}</span>
        </template>
      </div>
    </template>
    <template v-if="content==='record'">
      <div class="sub-header-nav">
        <a href="#" @click.prevent="$emit('goHome')">{{$t('home.header.page.homePage')}}</a>
        <span> —— {{$t('home.header.page.checkRecord')}}</span>
      </div>
      <div class="sub-header-info">
        <!-- <span >{{$t('home.header.allAward')}}{{rewardInfo.totalReward}}</span>
          <span class="ifood-unit">{{$t('home.header.unit')}}</span> -->
      </div>
    </template>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      rewardInfo: 'getRewardInfo',
      content: 'getSubHeaderFlag'
    })
  }
}
</script>

<style lang="scss" scoped>
.sub-header {
  font-size: 1.4rem;
  color: $subheader-font-color;
  background: $subheader-bg-color;
  @include fix-align($height: 50px);

  &-nav {
    float: left;
  }

  &-info {
    float: right;

    &-unit {
      font-size: .6rem;
      padding-right: 2rem;
    }
  }

  a {
    color: inherit;
    @include removeDefault-a;
  }
}
</style>
