<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 5%;top: 10%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 550px;">
        <img :src="imgsrc1" width="300px" height="500px" v-if="flag">
      </div>
    </div>
    <div id="monthData2" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 28%;top: 10%; color: red">
      <div style="position: absolute; left: 0px; top: 30px;width: 150px;height: 550px;">
        <img :src="imgsrc2" width="300px" height="500px" v-if="flag1">
      </div>
    </div>
    <div id="monthData3" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 51%;top: 10%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 550px;">
        <img :src="imgsrc3" width="300px" height="500px" v-if="flag1">
      </div>
    </div>
    <div id="monthData4" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 74%;top: 10%; color: red">
      <div style="position: absolute; left: 0px; top: 30px;width: 150px;height: 550px;">
        <img :src="imgsrc4" width="300px" height="500px" v-if="flag2">
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
      flag1: false,
      flag2: false,
      imgsrc1: require('../../assets/HRPsRight0401.png'),
      imgsrc2: require('../../assets/HRPsRight0402.png'),
      imgsrc3: require('../../assets/HRPsRight0403.png'),
      imgsrc4: require('../../assets/HRPsRight0404.png'),
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
    setTimeout(function () {
      _this.flag1 = true
    }, 2000)
    setTimeout(function () {
      _this.flag2 = true
    }, 3000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain04') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain04'
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
    background: url(../../assets/HRPsRight04.png) no-repeat;
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
