<template>
<div>
  <Header></Header>
  <router-view />
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SubHeader from '@/components/Header/SubHeader.vue'
export default {
  components: {
    Header,
    SubHeader
  },
  name: 'App'
}
</script>

<style lang="scss" scoped>
</style>
