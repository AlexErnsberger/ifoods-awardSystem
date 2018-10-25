<template>
  <section id="reward-table">
    <div class="container">
      <table class="table  table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">奖励类型</th>
            <th scope="col">奖励时间</th>
            <th scope="col">奖励金额</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <page-sep :total="total" :current-page='current' @pagechange="pagechange" ></page-sep>
    </div>
  </section>
</template>

<script>
import PageSep from '@/components/PageSep/PageSep.vue'
export default {
  components:{
    PageSep
  },
  data(){
    return {
      total: 150,     // 记录总条数
      display: 10,   // 每页显示条数
      current: 1   // 当前的页数
    }
  },
  methods: {
     pagechange:function(currentPage){
       console.log(currentPage);
       // ajax请求, 向后台发送 currentPage, 来获取对应的数据

     }
   }
}
</script>

<style scoped>
.container{
  padding: 20px;
}
table thead{
  color: #fff;
  background-color: #666;
}
</style>
