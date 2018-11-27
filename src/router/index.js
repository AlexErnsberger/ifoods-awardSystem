import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/asLogin'
import asHome from '@/views/asHome'
import asRecord from '@/views/asRecord'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: '探针检测奖励查询-登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: asHome,
      meta: {
        title: '探针检测奖励查询-主页'
      }
    },
    {
      path: '/record',
      name: 'record',
      component: asRecord,
      meta: {
        title: '探针检测奖励查询-奖励记录'
      }
    }
  ]
})

// 设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
