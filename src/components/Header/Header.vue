<template>
<header>
  <div class="container">
    <div class="row">
      <a class="logo col-xs-12 col-md-6 text-left" href="#">
          <img src="../../assets/img/logo.png">
          <h2>{{$t('header.title')}}</h2>
        </a>
      <transition name="slide-fade" mode="out-in">
        <template v-if="isLogin">
          <div class="userinfo col-xs-12 col-md-6">
            <p>{{userInfo}} <a class="" href="#" @click.prevent="logout">{{$t('header.logout')}}</a></p>
          </div>
        </template>
      </transition>
    </div>
  </div>
</header>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$http.post(this._Api.REQUEST_URL._LOGOUT).then((res) => {
        let data = res.data
        if (data.code === this._Api.RETURN_CODE._SUCCESS) {
          this.$store.commit('setUserInfo', null)
          this.$router.push(this._RC._ROOT)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    isLogin () {
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style scoped>
header {
  height: 80px;
  background: #f2f2f2;
}

header .logo,
header .userinfo {
  padding: 20px 0px;
}

header .logo>img {
  width: 86px;
  height: 40px;
}

header .logo>h2 {
  display: inline-block;
  margin: 0;
  padding: 0 .5em;
  vertical-align: middle;
  font-weight: 600;
  font-size: 2em;
  font-style: normal;
  color: #666;
}

header .userinfo {
  text-align: right;
}

header .userinfo p {
  display: inline-block;
  font-weight: 600;
  font-size: 1.5em;
  font-style: normal;
  color: #666;
  margin: 0;
  padding: 0;
  line-height: 40px;
}

header .userinfo p a {
  text-decoration: none;
  color: inherit;
}

@media only screen and (max-width:768px) {
  header {
    height: 8rem;
  }

  header .userinfo {
    text-align: center;
  }

  header .logo,
  header .userinfo {
    padding: 0px;
  }
}
</style>
