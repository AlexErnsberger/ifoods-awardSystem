<template>
<div id="myChart" class="chart-content"></div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  props: {
    // 背景色
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    // 柱状图色
    color: {
      type: String,
      default: '#4f81bd'
    },
    // 表头
    title: {
      type: Object,
      default: function () {
        return {
          show: false
        }
      }
    },
    legend: {
      type: Object,
      default: function () {
        return {
          orient: 'vertical', // 'vertical'
          x: 'right', // 'center' | 'left' | {number},
          y: 'top', // 'center' | 'bottom' | {number}
          data: ['IFOOD']
        }
      }
    },
    xData: {
      type: Array,
      default: function () {
        return ['9月23日', '9月24日', '9月25日', '9月26日', '9月27日', '9月28日', '今天']
      }
    },
    yData: {
      type: Array,
      default: function () {
        return [800, 600, 700, 100, 300, 800, 600]
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: this.backgroundColor,
        color: this.color,
        title: this.title,
        legend: this.legend,
        tooltip: {},
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            lineStyle: {
              color: '#909090'
            }
          },
          axisTick: {
            interval: 0
          },
          axisLabel: {
            interval: 0
          },
          // axisLabel: {
          //   formatter: function (value) {
          //     return '月'+'日'
          //   }
          // },
          data: this.xData
        }],
        yAxis: [{
          type: 'value',
          boundaryGap: [0, 0.1],
          axisLabel: {
            interval: 0
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#909090',
              type: 'solid',
              width: 1
            }
          }
        }],
        series: [{
          name: 'IFOOD',
          type: 'bar',
          barWidth: '20',
          data: this.yData
        }]
      })
    }
  }
}
</script>

<style>
.chart-content {
  border: 1px solid #b6b6b6;
  background-clip: border-box;
}

@media only screen and (min-width:768px) {
  #myChart {
    width: 50rem;
    height: 25rem;
  }
}

@media only screen and (max-width:768px) {
  #myChart {
    width: 34rem;
    height: 24rem;
  }
}
</style>
