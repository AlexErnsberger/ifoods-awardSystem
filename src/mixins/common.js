
export default{
  methods: {
    // 奖励信息获取
    getRewardInfo () {
      return this.$http.post(this._Api.REQUEST_URL._GET_REWARDINFO).then((res) => {
        let info = res.data
        if (info.code === this._Api.RETURN_CODE._SUCCESS && info.msg === this._Api.RETURN_MSG._SUCCESS) {
          this.$store.commit('setRewardInfo', info.data)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
