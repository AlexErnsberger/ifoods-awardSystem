<template>
<div id="ifood-home">
  <!-- <transition name="slide-fade" mode="out-in"> -->
  <template v-if="$store.state.loading || rewardInfo ">
    <div class="container">
      <div class="home-mining">
        <div class="mining-count home-module">
          <div class="home-module-title">{{$t('homeDetail.todayPoolMoney')}}</div>
          <div class="mining-count-image">
            <img src="@/assets/img/map.png">
            </div>
            <div class="mining-count-data">
              <span class="mining-count-data-number">1000000</span>
              <span class="mining-count-data-unit">{{$t('unit')}}</span>
            </div>
          </div>
          <div class="mining-award home-module">
            <div class="home-module-title">
              <!-- <span class="mining-award-title">{{$t('homeDetail.grapic.miningAward')}} | {{$t('homeDetail.grapic.todayMiningAward')}}{{rewardInfo.todayMiningCount}}</span> -->
              {{$t('homeDetail.grapic.miningAward')}}
              <!-- <span class="mining-award-title">{{$t('unit')}}</span> -->
            </div>

            <!-- <template v-if="undefined">
                    <button class="btn btn-primary btn-sm" @click="checkRewardInfo">{{$t('homeDetail.grapic.checkWeek')}}</button>
                    <button class="btn btn-primary btn-sm" @click="checkRewardInfo(31)">{{$t('homeDetail.grapic.checkMonth')}}</button>
                </template> -->
            <div class="mining-award-chart">
              <!-- <detail-echarts :xData="graphic_x" :yData="graphic_y"></detail-echarts> -->
              <detail-echarts></detail-echarts>
            </div>
          </div>
        </div>

        <div class="home-award">
          <div class="home-module home-award-module ">
            <div class="home-module-title">{{$t('homeDetail.ystdPoolAward')}}</div>
            <div class="home-award-data">
              <span><strong>+1200</strong></span>
              <span class="home-award-unit">{{$t('unit')}}</span>
            </div>
          </div>
          <div class="home-module home-award-module ">
            <div class="home-module-title">{{$t('homeDetail.suprobe.inviteCount')}}</div>
            <div class="home-award-data">
              <span>{{$t('homeDetail.suprobe.invited')}}<strong>6{{$t('homeDetail.suprobe.unit')}}</strong>{{$t('homeDetail.suprobe.equip')}}</span>
            </div>
            <div class="home-award-data">
              <span>{{$t('homeDetail.suprobe.level2Count')}}<strong>12{{$t('homeDetail.suprobe.unit')}}</strong></span>
            </div>
          </div>
          <div class="home-module home-award-module ">
            <div class="home-module-title">{{$t('homeDetail.invitedAward.ystd')}}</div>
            <div class="home-award-data">
              <span>{{$t('homeDetail.invitedAward.suprobe')}}<strong>+550</strong></span>
              <span class="home-award-unit">{{$t('unit')}}</span>
            </div>
            <div class="home-award-data">
              <span>{{$t('homeDetail.invitedAward.level2')}}<strong>+750</strong></span>
              <span class="home-award-unit">{{$t('unit')}}</span>
            </div>
          </div>
          <template v-if='rewardInfo.isPartner'>
            <div class="home-module home-award-module ">
              <div class="home-module-title">{{$t('homeDetail.ystdPartnerAward')}}</div>
              <div class="home-award-data">
                <span>+6200</span>
                <span class="home-award-unit">{{$t('unit')}}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
  </template>
  <template v-else>
    <no-data @try-again="reTry" :loading="loading" :disabled="loading"></no-data>
  </template>
  <!-- </transition> -->
</div>
</template>

<script>
import DetailEcharts from '@/components/Home/DetailEcharts.vue'
import NoData from '@/components/Error/NoData.vue'
export default {
  components: {
    DetailEcharts,
    NoData
  },
  data () {
    return {
      graphicData: null,
      graphic_x: null,
      graphic_y: null,
      loading: false
    }
  },
  computed: {
    rewardInfo () {
      if (this.$store.state.rewardInfo) {
        return this.$store.getters.getRewardInfo
      }
    }
  },
  mounted () {
    this.getRewardInfo()
    this.getDailyReward()
  },
  methods: {
    getRewardInfo () {
      this._http.getRewardInfo(this, (res) => {
        let data = res.data
        this.$store.commit('setRewardInfo', data.data)
        this.$store.state.loading = false
      })
    },
    getDailyReward () {
      this._http.getDailyReward(this, (res) => {
        let data = res.data
        if (res.data.data.length > 0) {
          this.graphicData = data.data
        }
      })
    },
    formatterTimes () {
      this.graphic_x = this.graphicData.map((data) => {
        if (data.dataTime) {
          let timeStr = data.dataTime.subString(4)
          let shortStr = Number(timeStr) + ''
          return shortStr.splice(2, 0, '月') + '日'
        }
      })
      if (this.graphic_x && this.graphic_x.length > 0) {
        this.graphic_x[this.graphic_x - 1] = '今天'
      }
      this.graphic_y = this.graphicData.map((data) => {
        if (data.rewardCount) {
          return Number(data.rewardCount)
        }
      })
    },
    reTry () {
      this.loading = true
      this.getRewardInfo().then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-mining {
  margin-top: 20px;
  @include clearfix;

  .mining-count {
    float: left;
    width: 435px;
    height: 360px;

    &-image {
      img {
        max-width: 100%;
      }
    }

    &-data {
      text-align: center;
      color: #008000;

      &-number {
        font-size: 4rem;
      }

      &-unit {
        font-size: 2rem;
        padding: 0 1rem;
      }
    }
  }

  .mining-award {
    float: right;
    width: 685px;
    height: 360px;

    &-chart {
      text-align: center;
    }
  }
}
</style><style lang="scss" scoped>
.home-award {
  margin-top: 20px;
  @include clearfix;

  &-module {
    float: left;
    width: 270px;
    height: 180px;

    &+& {
      margin-left: 20px;
    }
  }

  &-data {
    margin-top: 10px;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  &-unit {
    font-size: .9rem;
    padding: 0 1rem;
  }
}
</style><style scoped>
.home-module {
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
}

.home-module-title {
  font-size: 2rem;
  padding: 1rem 0;
}
</style>
