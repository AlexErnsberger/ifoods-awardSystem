<template>
<section id="reward-table">
  <!-- <template v-if="rewardRecords && rewardRecords.length>0"> -->
  <template v-if="true">
    <div class="container">
      <table class="table  table-bordered table-hover" >
        <thead>
          <tr>
            <th scope="col">{{$t('home.record.table.awardType')}}</th>
            <th scope="col">{{$t('home.record.table.awardTime')}}</th>
            <th scope="col">{{$t('home.record.table.awardMoney')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in rewardRecords" :key="index">
            <td>{{record.rewardType | typeFormatter}}</td>
            <td>{{record.dateTime | dateFormatter}}</td>
            <td>{{record.rewardCount | priceFromatter}}</td>
          </tr>
        </tbody>
      </table>
      <!-- <template v-if="total > 10"> -->
      <template v-if="true">
        <page-sep :total="total" :current-page='current' @pagechange="pagechange"></page-sep>
      </template>
    </div>
  </template>
  <template v-else>
    <no-data :loading="loading" :disabled="loading" @try-again="refreshPage"></no-data>
  </template>
</section>
</template>

<script>
import PageSep from './PageSep.vue'
import NoData from '@/components/Error/NoData.vue'
export default {
  components: {
    PageSep,
    NoData
  },
  data () {
    return {
      total: 0, // 记录总条数
      display: 10, // 每页显示条数
      current: 1, // 当前的页数
      rewardRecords: null,
      loading: false
    }
  },
  mounted () {
    this.getAllRewards()
  },
  methods: {
    getAllRewards () {
      return this.$http.post(this._Api.REQUEST_URL._GET_RECORDS_ALL, {
        pageNum: this.current
      }).then((res) => {
        let data = res.data
        if (data.code === this._Api.RETURN_CODE._SUCCESS) {
          this.rewardRecords = data.data.list
          this.total = data.data.totalNum
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    pagechange (currentPage) {
      this.current = currentPage
      this.getAllRewards()
    },
    refreshPage () {
      this.loading = true
      this.getAllRewards().then(() => {
        this.loading = false
      })
    }
  },
  filters: {
    typeFormatter (value) {
      switch (value) {
        case 1:
          return this._Global.REWARD_TYPE._FIRST
        case 2:
          return this._Global.REWARD_TYPE._SECOND
        case 3:
          return this._Global.REWARD_TYPE._THIRD
        case 4:
          return this._Global.REWARD_TYPE._FOURTH
        case 5:
          return this._Global.REWARD_TYPE._FIFTH
        case 6:
          return this._Global.REWARD_TYPE._SIXTH
        case 7:
          return this._Global.REWARD_TYPE._SEVENTH
        default:
          return this._Global.REWARD_TYPE._DEFAULT
      }
    },
    dateFormatter (value) {
      let s = value + ''
      let year = s.substring(0, 4)
      console.log(year)
      let month = s.substring(4, 6)
      console.log(month)
      let day = s.substring(6)
      console.log(day)
      return year + '/' + month + '/' + day
    },
    priceFromatter (value) {
      return '+' + value + '.00' + ' IFOOD'
    }
  }
}
</script>

<style lang="scss" scoped>
table{
  margin-top: 20px;
  border-collapse: separate;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
  background: #fff;
  overflow: hidden;
  thead{
    tr{
      th{
        border: none;
        text-align: center;
      }
    }
  }
  tbody{
    tr{
      td{
        border: none;
        text-align: center;
      }
    }
  }
}

/* table thead {
  color: #fff;
  background-color: #666;
} */
</style>
