<template>
<div class="container">
  <div class="home-error">
    <div class="home-error-i">
      <i class="iconfont icon-error"></i>
    </div>
    <div class="home-error-msg">
      {{$t('homeError.msg')}}
    </div>
    <div class="home-error-btn">
      <!-- <button class="btn btn-primary" @click="reGet">刷新</button> -->
      <loading-button :loading="loading" :disabled="disabled" @click="reGet" style="width:120px;">{{$t('homeError.refresh')}}</loading-button>
    </div>
  </div>
</div>
</template>

<script>
import LoadingButton from '@/components/Base/LoadingButton.vue'
export default {
  props: {
    loading: Boolean,
    disabled: Boolean
  },
  components: {
    LoadingButton
  },
  methods: {
    reGet () {
      this.$emit('try-again')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-error{
  width: 300px;height: 200px;
  margin: 120px auto;
  background:#fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
  border-radius: 6px;
  &-i, &-msg, &-btn{
    text-align: center;
  }
  &-i{
    i{
      font-size: 5rem;
    }
  }
  &-msg{
    font-size: 1.6rem;
    line-height: 4;
  }
}
</style>
