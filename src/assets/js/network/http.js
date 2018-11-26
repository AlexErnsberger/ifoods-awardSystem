import axios from '@/assets/js/network/axios'
import Is from 'is_js'

let pullRequest = function (scope, url, params, success, fail) {
  return axios.post(url, params).then((res) => {
    let data = res.data
    if (data.code === '0000' && data.msg === 'SUCCESS') {
      if (Is.function(success)) {
        success.call(scope, res)
      }
    } else {
      if (Is.function(fail)) {
        fail.call(scope, res)
      }
    }
  }).catch((e) => {
    console.log(e)
  })
}

// 登录
let login = function (scope, params, success, fail) {
  return pullRequest(scope, '/user/login', params, success, fail)
}

// 注销
let logout = function (scope, success, fail) {
  return pullRequest(scope, '/user/logout', {}, success, fail)
}

// 获得用户探针奖励的详细信息
let getRewardInfo = function (scope, success, fail) {
  return pullRequest(scope, '/reward/user/info', {}, success, fail)
}

// 以天为单位获得用户的挖矿奖励
let getDailyReward = function (scope, success, fail) {
  return pullRequest(scope, '/reward/time/mining', {}, success, fail)
}

// 以时间戳为单位获得用户的所有奖励
let getAllRewards = function (scope, params, success, fail) {
  return pullRequest(scope, '/reward/time', params, success, fail)
}

export default {
  login, logout, getRewardInfo, getDailyReward, getAllRewards
}
