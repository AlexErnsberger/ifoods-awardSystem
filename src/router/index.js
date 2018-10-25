import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Login from '@/views/Login'
import Detail from '@/components/RewardDetail/Detail'
import Record from '@/components/RewardRecord/Record'
import RewardHome from '@/views/RewardHome'
import * as RC from '@/constant/routepath.js'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: RC.ROUTER_PATH._ROOT,
      name: 'login',
      component: Login,
      alias: RC.ROUTER_PATH._LOGIN,
      meta: {
        title: RC.PAGE_TITLE._LOGIN
      }
    },
    {
      path: RC.ROUTER_PATH._HOME,
      name: 'rewardHome',
      component: RewardHome,
      children: [
        {
          path: RC.ROUTER_PATH._HOME_CHILD_DETAIL,
          name: 'Detail',
          component: Detail,
          meta: {
            title: RC.PAGE_TITLE._HOME
          }
        },
        {
          path: RC.ROUTER_PATH._HOME_CHILD_RECORDS,
          name: 'Record',
          component: Record,
          meta: {
            title: RC.PAGE_TITLE._HOME_RECORDS
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  let path = to.path
  if (path === RC.ROUTER_PATH._LOGIN) {
    next()
    return
  }
  if (store.getters.isLogin) {
    if (path === RC.ROUTER_PATH._ROOT || to.matched.length === 0) {
      next({
        path: RC.ROUTER_PATH._HOME_DEFAULT
      })
    } else {
      next()
    }
  } else {
    next({
      path: RC.ROUTER_PATH._ROOT
    })
  }
})
export default router
