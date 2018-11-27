import Axios from 'axios'
import Api from '../../../../static/config.js'
import Qs from 'qs'
import store from '@/store'

let instance = Axios.create({
  method: 'post',
  baseURL: Api.baseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (params) {
    return Qs.stringify(params)
  }],
  timeout: 10000
})

instance.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers['IFESSION'] = store.state.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.defaults.retry = 4
instance.defaults.retryDelay = 1000

instance.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  let config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)
  // Set the letiable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0
  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }
  // Increase the retry count
  config.__retryCount += 1
  // Create new promise to handle exponential backoff
  let backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })
  // Return the promise in which recalls Axios to retry the request
  return backoff.then(function () {
    return Axios(config)
  })
})

export default instance
