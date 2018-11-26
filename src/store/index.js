import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {ROUTER_PATH} from '@/constant/routepath.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {
    userInfo: '',
    token: '',
    isLogin: false,
    rewardInfo: null,
    language: '',
    subHeaderFlag: ROUTER_PATH._HOME_CHILD_DETAIL,
    loading: false
  },
  getters: {
    isLogin (state) {
      return state.isLogin
    },
    getLanguage (state) {
      return state.language
    },
    getRewardInfo (state) {
      return state.rewardInfo
    },
    getSubHeaderFlag (state) {
      return state.subHeaderFlag
    }
  },
  mutations: {
    setUserInfo (state, data) {
      if (data) {
        state.userInfo = data
      } else if (data === null) {
        state.useInfo = ''
        state.token = ''
        state.isLogin = false
        state.subHeaderFlag = ROUTER_PATH._HOME_CHILD_DETAIL
        state.rewardInfo = null
      }
    },
    setToken (state, data) {
      state.token = data
    },
    setRewardInfo (state, data) {
      state.rewardInfo = data
    },
    setLogin (state, data) {
      state.isLogin = data
    },
    setSubHeaderFlag (state, data) {
      state.subHeaderFlag = data
    }
  },
  // 持久化
  plugins: [vuexLocal.plugin]
})
