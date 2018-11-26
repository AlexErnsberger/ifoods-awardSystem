<template>
<div class="ifoods-header">
  <div class="container">
    <div class="header-logo ">
      <img src="../../assets/img/logo.png">
      <span>{{$t('header.title')}}</span>
    </div>
    <template v-if="isLogin">
      <div class="header-nav">
        <div class="nav-user dropdown">
          <div class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i class="iconfont icon-user"></i>
            <!-- <span>{{userInfo}}</span> -->
          </div>
          <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="logout">{{$t('header.logout')}}</a></li>
          </ul>
          <!-- <span @click.prevent="logout">{{$t('header.logout')}}</span> -->
        </div>
      </div>
    </template>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    logout () {
      this._http.logout(this, (res) => {
        this.$store.commit('setUserInfo', null)
        this.$router.push(this._RC._ROOT)
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

<style lang="scss" scoped>
.ifoods-header {
  font-size: 2rem;
  height: 80px;
  padding-top: 20px;
  background: #fff;
  color: $header-font-color;

  .header-logo {
    float: left;

    img {
      width: 86px;
      height: 40px;
    }

    span {
      font-size: inherit;
      color: inherit;
      vertical-align: middle;
    }
  }

  .header-nav {
    float: right;

    .nav-user {
      i {
        font-size: 3rem;
      }
    }
  }
}
</style>
