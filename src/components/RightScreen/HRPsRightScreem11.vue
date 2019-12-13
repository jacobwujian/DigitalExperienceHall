<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 5%;top: 14%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc1" width="1200px" height="500px" v-if="flag">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightScreem',
  data () {
    return {
      flag: false,
      imgsrc1: require('../../assets/HRPsRight1101.png'),
      imgsrcMain: require('../../assets/toleft.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.flag = true
    }, 1000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain11') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain11'
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
    background: url(../../assets/HRPsRight11.png) no-repeat;
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
