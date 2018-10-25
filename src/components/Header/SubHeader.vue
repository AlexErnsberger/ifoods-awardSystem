<template>
<header id="subHeader">
  <template v-if="rewardInfo">
    <div class="container">
      <div class="row">
        <template v-if="content==='detail'">
          <div class="col-md-6 col-xs-12">
            <p>{{$t('home.header.allAward')}}{{rewardInfo.totalReward}}<sub>{{$t('home.header.unit')}}</sub></p>
            <p>{{$t('home.header.ystdAward')}}{{rewardInfo.miningCount}}<sub>{{$t('home.header.unit')}}</sub></p>
          </div>
          <div class="col-md-6 col-xs-12 ">
            <a href="#" @click.prevent="$emit('viewRecord')">{{$t('home.header.page.checkRecord')}}</a>
          </div>
        </template>
        <template v-if="content==='record'">
          <div class="col-md-6 col-xs-12">
            <a href="#" @click.prevent="$emit('goHome')">{{$t('home.header.page.homePage')}}</a>
            <p>—— {{$t('home.header.page.checkRecord')}}</p>
          </div>
          <div class="col-md-6 col-xs-12 ">
            <p>{{$t('home.header.allAward')}}{{rewardInfo.totalReward}}<sub>{{$t('home.header.unit')}}</sub></p>
          </div>
        </template>
      </div>
    </div>
  </template>
</header>
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

<style scoped>
#subHeader {
  height: 50px;
  font-size: 1.2em;
  font-weight: 600;
  color: #fff;
  background: #666;
  padding: 15px 0px;
}

#subHeader p {
  display: inline-block;
  position: relative;
}

#subHeader p sub {
  font-size: .6em;
  position: absolute;
  margin-left: 8px;
  bottom: 10px;
}

#subHeader p+p {
  margin-left: 5em;
}

#subHeader a {
  text-decoration: none;
  color: inherit;
}

.row>div:nth-of-type(2) {
  text-align: right;
}

@media only screen and (max-width:768px) {
  header {
    height: 5rem;
  }

  #subHeader {
    height: 80px;
  }

  .row>div:nth-of-type(2) {
    text-align: left;
  }
}
</style>
