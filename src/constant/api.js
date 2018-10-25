const BASE_URL = 'http://39.106.203.100:8080'

const REQUEST_URL = {
  _LOGIN: '/user/login', /** 登陆验证 */
  _LOGOUT: '/user/logout', /** 登出 */
  _GET_REWARDINFO: '/reward/user/info', /** 获取奖励信息 */
  _GET_RECORDS_WEEK: '/reward/time/mining', /** 获取一周/月内的奖励记录 */
  _GET_RECORDS_ALL: '/reward/time' /** 获取所有奖励记录 */
}

const RETURN_CODE = {
  _SUCCESS: '0000', /** 成功 */
  _TOOFREQUENTREQUESTS: '0005', /** 您的操作过于频繁请稍候重试 */
  _ERRORVCODE: '100013',
  _ERRPRPASSWORD: '100017',
  _NOTREGISTER: '100019'
}
const RETURN_MSG = {
  _SUCCESS: 'SUCCESS',
  _TOOFREQUENTREQUESTS: '您的操作过于频繁请稍候重试',
  _ERRORVCODE: '验证码错误',
  _ERRPRPASSWORD: '账号密码错误',
  _NOTREGISTER: '该手机号未注册'
}

export default {
  BASE_URL,
  REQUEST_URL,
  RETURN_CODE,
  RETURN_MSG
}
