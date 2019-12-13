<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'"></div>
</template>

<script>
export default {
  name: 'RightScreem',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight (val) { // 监控浏览器高度变化
      this.fullHeight = val
    }
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/rightScreen.png) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed
  }
</style>
