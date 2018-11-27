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
    getUserInfo (state) {
      return state.userInfo
    },
    getToken (state) {
      return state.token
    },
    getRewardInfo (state) {
      return state.rewardInfo
    },
    getLanguage (state) {
      return state.language
    },
    getLoading (state) {
      return state.loading
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
    },
    setLanguage (state, data) {
      state.language = data
    },
    setLoading (state, data) {
      state.loading = data
    }
  },
  // 持久化
  plugins: [vuexSession.plugin]
})
