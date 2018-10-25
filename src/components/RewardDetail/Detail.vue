<template>
<div id="reward-detail">
  <transition name="slide-fade" mode="out-in">
    <template v-if="rewardInfo">
      <div class="container">
        <div class="row">
          <section class="col-md-4 col-xs-12 reward-count">
            <h3>{{$t('home.detail.todayPoolMoney')}}</h3>
            <img src="@/assets/img/map.png">
            <h1>1000000<sub>{{$t('home.detail.unit')}}</sub></h1>
          </section>
          <section class="col-md-8 col-xs-12 reward-graphic">
            <div class="row">
              <div class="col-md-8 col-xs-12">
                <h3>{{$t('home.detail.grapic.miningAward')}} | {{$t('home.detail.grapic.todayMiningAward')}}{{rewardInfo.todayMiningCount}}<sub>{{$t('home.detail.unit')}}</sub></h3>
              </div>
              <template v-if="undefined">
                <div class="col-md-4 col-xs-12">
                  <button class="btn btn-primary btn-sm" @click="checkRewardInfo">{{$t('home.detail.grapic.checkWeek')}}</button>
                  <button class="btn btn-primary btn-sm" @click="checkRewardInfo(31)">{{$t('home.detail.grapic.checkMonth')}}</button>
                </div>
              </template>
            </div>
            <div class="reward-chart">
              <!-- <detail-echarts :xData="graphic_x" :yData="graphic_y"></detail-echarts> -->
              <detail-echarts></detail-echarts>
            </div>
          </section>
        </div>
        <div class="row reward-info">
          <section class="col-md-3 col-xs-12">
            <h3>{{$t('home.detail.list.ystdPoolAward')}}</h3>
            <h2>+1200<sub>{{$t('home.detail.unit')}}</sub></h2>
          </section>
          <section class="col-md-3 col-xs-12">
            <h3>{{$t('home.detail.list.suprobe.inviteCount')}}</h3>
            <h4>{{$t('home.detail.list.suprobe.invited')}}<strong>6{{$t('home.detail.list.suprobe.unit')}}</strong>{{$t('home.detail.list.suprobe.equip')}}</h4>
            <h4>{{$t('home.detail.list.suprobe.level2Count')}}<strong>12{{$t('home.detail.list.suprobe.unit')}}</strong></h4>
          </section>
          <section class="col-md-3 col-xs-12">
            <h3>{{$t('home.detail.list.invitedAward.ystd')}}</h3>
            <h4>{{$t('home.detail.list.invitedAward.suprobe')}}<strong>+550</strong><sub>{{$t('home.detail.unit')}}</sub></h4>
            <h4>{{$t('home.detail.list.invitedAward.level2')}}<strong>+750</strong><sub>{{$t('home.detail.unit')}}</sub></h4>
          </section>
          <template v-if='rewardInfo.isPartner'>
            <section class="col-md-3 col-xs-12">
              <h3>{{$t('home.detail.list.ystdPartnerAward')}}</h3>
              <h2>+6200<sub>{{$t('home.detail.unit')}}</sub></h2>
            </section>
          </template>
        </div>
      </div>
    </template>
    <template v-else>
      <no-data @try-again="reTry" :loading="loading" :disabled="loading"></no-data>
    </template>
  </transition>
</div>
</template>

<script>
import DetailEcharts from './DetailEcharts.vue'
import NoData from '@/components/Error/NoData.vue'
import Mix from '@/mixins'
export default {
  components: {
    DetailEcharts,
    NoData
  },
  mixins: [Mix],
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
    this.getDailyReward()
  },
  methods: {
    getDailyReward () {
      this.$http.post(this._Api.REQUEST_URL._GET_RECORDS_WEEK).then((res) => {
        let data = res.data
        if (data.code === this._Api.RETURN_CODE._SUCCESS && data.msg === this._Api.RETURN_MSG._SUCCESS) {
          if (data.data.length > 0) {
            this.graphicData = data.data
          }
        }
      }).catch((err) => {
        console.log(err)
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

<style scoped>
h1,
h2,
h3 {
  margin: 0px;
  padding: 15px;
}

.container>.row {
  margin: 10px 0 0 0;
}

section {
  padding: 10px;
  height: 360px;
}

.reward-count,
.reward-graphic,
.reward-info section {
  background-color: #f2f2f2;
}

section+section {
  border-left: 10px solid #fff;
}

.row h3 {
  font-weight: 600;
  font-style: normal;
  font-size: 1.4em;
  position: relative;
}

.row h3 sub {
  position: absolute;
  bottom: 25px;
  margin-left: 8px;
}

.reward-count img {
  max-width: 100%;
}

.reward-count h1 {
  text-align: center;
  position: relative;
  color: #008000;
}

.reward-count h1 sub {
  position: absolute;
  font-size: .5em;
  font-weight: 600;
  bottom: 25px;
  margin-left: 10px;
}

.reward-info section {
  height: 180px;
}

.reward-info h2 {
  text-align: center;
  padding: 30px 0 30px 0;
  font-weight: 600;
}

.reward-info h4 {
  text-align: left;
  padding: 10px 0 10px 0;
}

.reward-info h2,
h4 {
  color: black;
  position: relative;
}

.reward-info h2 sub {
  position: absolute;
  bottom: 45%;
  font-size: .6em;
  margin-left: 10px;
}

.reward-info h4 sub {
  font-weight: 600;
  font-size: .8em;
  position: absolute;
  bottom: 50%;
  margin-left: 5px;
}

.reward-info h4 strong {
  font-size: 1.4em;
  line-height: .1em;
}

.reward-graphic .reward-chart {
  padding: 0px 100px;
}

@media only screen and (max-width:768px) {

  h1,
  h2,
  h3 {
    padding: 15px 0px;
  }

  .container {
    padding: 0px;
  }

  .container>.row {
    margin: 0px;
    background-color: #fff;
  }

  .container .row section {
    margin: 10px 0px;
    border: none;
    background-color: #f2f2f2;
  }

  .reward-graphic .reward-chart {
    padding: 10px 10px;
  }

  .reward-graphic .row {
    margin-right: 0px;
  }
}
</style>
