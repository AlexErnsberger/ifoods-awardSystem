<template>
<section id="reward-table">
  <!-- <template v-if="rewardRecords && rewardRecords.length>0"> -->
  <template v-if="true">
    <div class="container">
      <table class="table  table-bordered table-hover" >
        <thead>
          <tr>
            <th scope="col">{{$t('homeRecord.table.awardType')}}</th>
            <th scope="col">{{$t('homeRecord.table.awardTime')}}</th>
            <th scope="col">{{$t('homeRecord.table.awardMoney')}}</th>
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
      this._http.getAllRewards(this, {pageNum: this.current}, (res) => {
        let data = res.data
        this.rewardRecords = data.data.list
        this.total = data.data.totalNum
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
          return this.$t('awardType.first')
        case 2:
          return this.$t('awardType.second')
        case 3:
          return this.$t('awardType.third')
        case 4:
          return this.$t('awardType.fourth')
        case 5:
          return this.$t('awardType.fifth')
        case 6:
          return this.$t('awardType.sixth')
        case 7:
          return this.$t('awardType.seventh')
        default:
          return this.$t('awardType.default')
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
