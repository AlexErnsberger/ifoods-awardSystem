import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default new Vuex.Store({
  state: {
    userInfo: '',
    token: '',
    rewardInfo: null,
    language: '',
    loading: false
  },
  getters: {
    getLanguage (state) {
      return state.language
    },
    getRewardInfo (state) {
      return state.rewardInfo
    },
    getToken (state) {
      return state.token
    }
  },
  mutations: {
    setUserInfo (state, data) {
      if (data) {
        state.userInfo = data
      } else if (data === null) {
        state.useInfo = ''
        state.token = ''
        state.rewardInfo = null
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
  plugins: [vuexSession.plugin]
})
