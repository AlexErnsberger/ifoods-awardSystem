import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {
    userInfo: '',
    token: '',
    isLogin: false,
    rewardInfo: null
  },
  getters: {
    isLogin (state) {
      return state.isLogin
    }
  },
  mutations: {
    setUserInfo (state, data) {
      if (data) {
        state.userInfo = data
        state.isLogin = true
      } else if (data === null) {
        state.useInfo = ''
        state.token = ''
        state.isLogin = false
      }
    },
    setToken (state, data) {
      state.token = data
    },
    setRewardInfo (state, data) {
      state.rewardInfo = data
    }
  },
  // 持久化
  plugins: [vuexLocal.plugin]
})
