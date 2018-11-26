// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './language'
import Constant from './constant/constant'
import {ROUTER_PATH} from './constant/routepath'
import http from '@/assets/js/network/http'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/transition.css'

Vue.config.productionTip = false
Vue.prototype._Global = Constant
Vue.prototype._RC = ROUTER_PATH
Vue.prototype._http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
