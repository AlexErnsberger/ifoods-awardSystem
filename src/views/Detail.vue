<template>
  <div id="reward-detail">
      <div class="container">
        <div class="row">
          <section class="col-md-4 reward-count">
            <h3>今日矿池金额</h3>
            <img src="../assets/img/u41.png">
            <h1>+876000<sub>IFOOD<span class="glyphicon glyphicon-arrow-up"></span></sub></h1>
          </section>
          <section class="col-md-8 reward-graphic">
            <div class="row">
              <div class="col-md-8">
                <h3>挖矿奖励 | 今日挖矿奖励：600<sub>IFOOD</sub></h3>
              </div>
              <div class="col-md-4">
                <button class="btn btn-primary btn-sm">7天内</button>
                <button class="btn btn-primary btn-sm">1个月内</button>
              </div>
            </div>
            <div class="reward-chart">
              <detail-echarts></detail-echarts>
            </div>
          </section>
        </div>
      </div>
      <div class="container reward-info ">
        <div class="row">
          <section class="col-md-3">
            <h3>昨日矿池奖励</h3>
            <h2>+1200<sub>IFOOD</sub></h2>
          </section>
          <section class="col-md-3">
            <h3>探针邀请总数</h3>
            <h2>已邀请<strong>6个</strong>探针设备</h2>
          </section>
          <section class="col-md-3">
            <h3>昨日探针邀请奖励</h3>
            <h2>+750<sub>IFOOD</sub></h2>
          </section>
          <section class="col-md-3">
            <h3>昨日城市合伙人奖励</h3>
            <h2>+6200<sub>IFOOD</sub></h2>
          </section>
        </div>
      </div>
  </div>
</template>

<script>
import DetailEcharts from '@/components/Echarts/DetailEcharts.vue'
export default {
  components:{
    DetailEcharts
  }
}
</script>

<style scoped>
h1,h2,h3{
  margin: 0px;
  padding: 15px ;
}
.container{
}
.container > .row{
  margin: 10px 0;
  background-color: #f2f2f2;
}
section+section{
  border-left: 10px solid #fff;
}
section{
  padding: 10px;
}
.row h3{
  font-weight: 600;
  font-style: normal;
  font-size: 1.4em;
  position: relative;
}
.row h3 sub{
  position: absolute;
  bottom:25px;
  margin-left:8px;
}

.reward-count img{
  max-width: 100%;
}
.reward-count h1{
  text-align: center;
  position: relative;
  color: #008000;
}
.reward-count h1 sub{
  position: absolute;
  font-size: .5em;
  font-weight: 600;
  bottom:25px;
  margin-left: 10px;
}
.reward-info h2{
  text-align: center;
  padding: 30px 0 30px 0;
  color: black;
  font-size: 2em;
  font-weight: 600;
  position: relative;
}
.reward-info h2 sub{
  position: absolute;
  bottom:40px;
  font-size: .6em;
  margin-left: 10px;
}
.reward-info section:nth-of-type(2) h2{
  font-size: 1.2em;
}
.reward-info section:nth-of-type(2) h2 strong{
  font-size: 1.8em;
}
.reward-graphic .reward-chart{
  padding: 0px 100px;
}
</style>
