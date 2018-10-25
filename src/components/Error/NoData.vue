<template>
<div class="container text-center">
  <section>
    <div class="row">
      <img src="@/assets/img/badrequest.png">
      </div>
      <div class="row">
        <span>{{$t('home.error.msg')}}</span>
      </div>
      <div class="row">
        <!-- <button class="btn btn-primary" @click="reGet">刷新</button> -->
        <loading-button :loading="loading" :disabled="disabled" @click="reGet">{{$t('home.error.refresh')}}</loading-button>
      </div>
  </section>
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

<style scoped>
img {
  max-width: 100%;
}

.container {
  padding: 40px 0;
}

section {
  width: 30%;
  margin: auto;
  background: #f2f2f2;
  padding: 2%;
}

.row {
  padding: 25px 0 0 0;
}

.row img {
  width: 50px;
  height: 50px;
}

.row span {
  font-size: 1.2em;
  font-weight: 600;
}

.row button {
  width: 30%;
}
</style>
