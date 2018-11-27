import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'

Vue.use(VueI18n)

export default new VueI18n({
  locale: store.getters.getLanguage || 'zh',
  fallbackLocale: 'en',
  messages: {
    'zh': require('./chinese')
  }
})
