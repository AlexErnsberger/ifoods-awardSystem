<template>
<div class="sub-header">
  <div class="container">
    <div class="sub-header-nav">
      <a href="#" @click.prevent="$emit('view')">
        <slot name="nav"></slot>
      </a>
      <slot></slot>
    </div>
    <div class="sub-header-info">
      <template v-if="rewardInfo">
        <slot name="info" :rewardInfo = "rewardInfo"></slot>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    rewardInfo () {
      return this.$store.getters.getRewardInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-header {
  font-size: 1.4rem;
  color: $subheader-font-color;
  background: $subheader-bg-color;
  @include fix-align($height: 50px);

  &-nav {
    float: left;

    a {
      color: inherit;
      @include removeDefault-a;
    }
  }

  &-info {
    float: right;

    &-unit {
      font-size: .6rem;
      padding-right: 2rem;
    }
  }

}
</style>
