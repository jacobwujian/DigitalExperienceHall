<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'"></div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/leftScreen.png) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed
  }
</style>
