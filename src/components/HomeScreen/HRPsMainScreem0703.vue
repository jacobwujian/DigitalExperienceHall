<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="toLeft" :style="{width: '105px', height: '105px'}"></div>
    <div class="toLeft" style="position: absolute;z-index: 99999; left: 5%;top: 45%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcLeft" @click="goPage('HRPsMain0702')" width="80px" height="80px">
      </div>
    </div>
    <div id="toRight" :style="{width: '105px', height: '105px'}"></div>
    <div class="toRight" style="position: absolute;z-index: 99999; left: 20%;top: 50%; color: red">
      <div style="position: absolute; left: 1100px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcRight" @click="goPage('HRPsMain0704')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute; right: 120px; bottom:80px;width: 10px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPsMain07')" width="80px" height="80px">
      </div>
    </div>
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15%;top: 23%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc1" width="300px" height="530px" v-if="flag1">
      </div>
    </div>
    <div id="monthData2" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 38%;top: 23%; color: red">
      <div style="position: absolute; left: 0px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc2" width="300px" height="530px" v-if="flag2">
      </div>
    </div>
    <div id="monthData3" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 65%;top: 5%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc3" width="350px" height="550px" v-if="flag3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      imgsrc1: require('../../assets/HRPsMain070301.png'),
      imgsrc2: require('../../assets/HRPsMain070302.png'),
      imgsrc3: require('../../assets/HRPsMain070303.png'),
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
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
    setTimeout(function () {
      _this.flag3 = true
    }, 3000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain0702') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain0702'
        })
      } else if (page === 'HRPsMain0704') {
        //
        this.$router.push({
          path: '/HRPsMain0704'
        })
      } else {
        // 左屏
        this.$router.push({
          path: '/HRPsMain07'
        })
      }
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
    background: url(../../assets/HRPsMain0703.png) no-repeat;
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
