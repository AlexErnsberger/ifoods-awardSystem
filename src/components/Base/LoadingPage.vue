<template>
  <div id="ifoods-loading">
    <img src="/static/img/spin.svg">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#ifoods-loading{
  position: absolute;
  z-index: 1;
  left: 0;top: 0;right: 0;bottom: 0;
  background-color: rgba(255, 255, 255,0.8);
  display: flex;
  align-items: center; justify-content: center;
  img{
    width: 64px;height: 64px;
  }
}
</style>
