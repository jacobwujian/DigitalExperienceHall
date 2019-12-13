<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
  </div>
</template>

<script>
export default {
  name: 'RightScreem',
  data () {
    return {
      imgsrcMain: require('../../assets/toleft.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain12') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain12'
        })
      } else {
        this.$router.push({
          path: '/HRPs'
        })
      }
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
    background: url(../../assets/HRPsRight12.png) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed
  }
  #backTo{        //
  position: absolute;
    z-index: 99999;
    left: 0;
    top: 5%;
    color: beige;
    font-size: 14px;
    font-weight: 900;
  }
</style>
