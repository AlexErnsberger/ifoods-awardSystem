<template>
<nav>
  <ul class="pagination ">
    <li :class="{'disabled': current == 1}"><a href="#" @click="setCurrent(current - 1)"> « </a></li>
    <li :class="{'disabled': current == 1}"><a href="#" @click="setCurrent(1)"> {{$t('home.record.sep.homePage')}} </a></li>
    <li v-for="(p,index) in grouplist" :class="{'active': current == p.val}" :key="index">
      <a href="#" @click="setCurrent(p.val)"> {{ p.text }} </a>
    </li>
    <li :class="{'disabled': current == page}"><a href="#" @click="setCurrent(page)"> {{$t('home.record.sep.endPage')}} </a></li>
    <li :class="{'disabled': current == page}"><a href="#" @click="setCurrent(current + 1)"> »</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    total: { // 数据总条数
      type: Number,
      default: 0
    },
    display: { // 每页显示条数
      type: Number,
      default: 10
    },
    currentPage: { // 当前页码
      type: Number,
      default: 1
    },
    pagegroup: { // 分页条数
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () { // 总页数
      return Math.ceil(this.total / this.display)
    },
    grouplist: function () { // 获取分页页码
      let len = this.page
      let temp = []
      let list = []
      let count = Math.floor(this.pagegroup / 2)
      let center = this.current
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({
            text: this.page - len,
            val: this.page - len
          })
        }
        return temp
      }
      while (len--) {
        temp.push(this.page - len)
      }
      let idx = temp.indexOf(center)
      if (idx < count) {
        center = center + count - idx
      }
      if (this.current > this.page - count) {
        center = this.page - count
      }
      temp = temp.splice(center - count - 1, this.pagegroup)
      do {
        let t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pagegroup) {
        if (this.current > count + 1) {
          list.unshift({
            text: '...',
            val: list[0].val - 1
          })
        }
        if (this.current < this.page - count) {
          list.push({
            text: '...',
            val: list[list.length - 1].val + 1
          })
        }
      }
      return list
    }
  },
  methods: {
    setCurrent: function (idx) {
      if (this.current !== idx && idx > 0 && idx < this.page + 1) {
        this.current = idx
        this.$emit('pagechange', this.current)
      }
    }
  }
}
</script>

<style scoped>
.pagination {
  display: table;
  margin: 0 auto;
  height: 3em;
}

.pagination li {
  color: #666;
}

.pagination li:hover {
  background: #000;
  color: #fff;
}

.pagination li a {
  display: block;
  padding: .4em .6em 0 .6em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  font-size: 1em;
  line-height: 1.2em;
  text-decoration: none
}

.pagination li a:active {
  background: #000;
  color: #fff;
}
</style>
