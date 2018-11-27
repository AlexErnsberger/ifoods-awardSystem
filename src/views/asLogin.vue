<template>
<section id="login-block">
  <div class="container">
    <div class="row">
      <div class="login-content col-md-6 col-md-offset-6">
        <form @submit.prevent="submit" novalidate="true">
          <fieldset>
            <legend>{{$t('login.title')}}</legend>
            <section class="form-group">
              <label for="phoneNumber" class="text-left">{{$t('login.phoneNum')}}</label>
              <Input type="text" id="phoneNumber"  v-model="userPhoneNum" maxlength="11" clearable />
              </section>
              <section class="form-group">
                <label for="password">{{$t('login.password')}}</label>
                <Input type="password" id="password"   v-model="password" />
              </section>
                <!-- <section class="form-group">
                <label for="vertifycode">{{$t('login.vertifyCode')}}</label>
                <div class="row">
                  <div class="col-md-4">
                    <input type="text" id="vertifycode" class="form-control" placeholder="" maxlength="4" v-model="vcode" >
                  </div>
                  <div class="col-md-4">
                    <identify-code :identifyCode="identifyCode"></identify-code>
                  </div>
                  <div class="col-md-4">
                    <a href="#" @click="">{{$t('login.refreshVCode')}}</a>
                  </div>
                </div>
              </section> -->
                <section>
                  <error-remind :error="errorMsg"></error-remind>
                </section>
                <section class="form-group">
                  <!-- <button type="submit" class="btn btn-primary" :disabled="loading">
                  <img src="@/assets/img/loading.png" :class="['load-loop',{show:loading}]">
                  <span>{{$t('login.loginbtn')}}</span>
                </button> -->
                  <loading-button type='submit' :disabled="loading" :loading="loading" ref="loginbtn">{{$t('login.loginbtn')}}</loading-button>
                  <a href="https://www.ifoodschain.com/#/download/" target="_blank">{{$t('login.notice')}}</a>
                </section>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import LoadingButton from '@/components/Base/LoadingButton.vue'
import ErrorRemind from '@/components/Login/ErrorRemind.vue'
import Input from '@/components/Login/Input.vue'
export default {
  components: {
    LoadingButton,
    ErrorRemind,
    Input
  },
  data () {
    return {
      identifyCode: '',
      userPhoneNum: null,
      password: null,
      encodePassword: null,
      vcode: null,
      errorMsg: null,
      loading: false
    }
  },
  methods: {
    // 提交按钮
    submit () {
      if (!this.testify()) return
      this.loading = true
      this.testifyUserInfo()
    },
    // 账号密码验证
    testifyUserInfo () {
      this._http.login(this, {
        phone: this.userPhoneNum,
        password: require('js-sha256').sha256(this.password)
      }, (res) => {
        // vuex存储
        this.$store.commit('setUserInfo', this.userPhoneNum)
        this.$store.commit('setToken', res.headers.ifession)
        // 路由跳转
        this.loading = false
        this.$router.push({name: 'home'})
      }, (res) => {
        this.errorMsg = res.data.msg
        this.identifyCode = ''
        this.loading = false
      })
    },
    /**
     * JS验证
     */
    testify () {
      if (!this.userPhoneNum || !this.password) {
        this.errorMsg = this.$t('loginError.empty')
        this.identifyCode = ''
        return false
      }
      // if(this.vcode !== this.identifyCode) {
      //   this.errorMsg = '验证码错误，请重新输入'
      //   this.identifyCode = ''
      //   return false
      // }
      return true
    }
    // clearError(){
    //   this.errorMsg = null
    // }
  }
}
</script>

<style scoped>
#login-block {
  background: url('../assets/img/background.jpg') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
}

.login-content {
  padding: 100px 50px;
  overflow: hidden;
}

form {
  color: #fff;
  background-color: rgba(190, 190, 190, 0.5);
  padding: 50px 100px;
  border-radius: 6px;
}

form fieldset legend {
  color: inherit;
  border: none;
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
}

form fieldset label {
  font-size: 1.2em;
}

form fieldset section:nth-of-type(3) a {
  display: block;
  line-height: 34px;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

}

form fieldset section:last-of-type {
  padding: 10px 0 0;
}

form fieldset section:last-of-type button {
  width: 100%;
  font-weight: 600;
  font-size: 1.2em;
  line-height: 1.4;
}

/* form fieldset section:last-of-type button img{
    animation: ani-load-loop 1s linear infinite;
    position: absolute;
    display: none;
    top:30%;
    left:33%;
  } */
form fieldset section:last-of-type a {
  display: block;
  color: #fff;
  padding: 1em 0;
  text-align: center;
  text-decoration: none;
  font-size: .9em;
  font-weight: 600;
}

.show {
  display: block
}

@media only screen and (max-width:768px) {
  form {
    padding: 20px 30px;
  }
}

/* @keyframes ani-load-loop {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  } */
</style>
