<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData" :style="{width: '105px', height: '105px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 0%;top: 50%; color: red">
      <div style="position: absolute; left: 0px; top: 5px;width: 10px;height: 10px;">
        <img :src="imgsrcMain" @click="goPage('HRPsMain0704')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute; right: 120px; bottom:80px;width: 10px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPsMain07')" width="80px" height="80px">
      </div>
    </div>
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 25%;top: 10%; color: red">
      <div style="position: absolute; left: 5px; top: 10px;width: 150px;height: 500px;">
        <img :src="imgsrc1" width="900px" height="550px" v-if="flag1">
      </div>
    </div>
    <div id="monthData2" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 55%;top: 50%; color: red">
      <div style="position: absolute; left: 0px; top: 50px;width: 150px;height: 500px;">
        <img :src="imgsrc2" width="200px" height="150px" v-if="flag2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightScreem',
  data () {
    return {
      flag2: false,
      flag1: false,
      imgsrc1: require('../../assets/HRPsMain070501.png'),
      imgsrc2: require('../../assets/HRPsMain070502.png'),
      imgsrcMain: require('../../assets/toleft.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.flag1 = true
    }, 1000)
    setTimeout(function () {
      _this.flag2 = true
    }, 2000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain0704') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain0704'
        })
      } else {
        this.$router.push({
          path: '/HRPsMain07'
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
    background: url(../../assets/HRPsMain0705.png) no-repeat;
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
