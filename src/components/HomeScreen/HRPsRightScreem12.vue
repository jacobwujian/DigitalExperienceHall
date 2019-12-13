<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData" :style="{width: '105px', height: '105px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 0%;top: 50%; color: red">
      <div style="position: absolute; left: 0px; top: 5px;width: 10px;height: 10px;">
        <img :src="imgsrcMain" @click="goPage('HRPsMain12')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute; right: 120px; bottom:80px;width: 1px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPs')" width="80px" height="80px">
      </div>
    </div>
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
