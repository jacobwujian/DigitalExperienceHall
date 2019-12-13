<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="toLeft" :style="{width: '105px', height: '105px'}"></div>
    <div class="toLeft" style="position: absolute;z-index: 99999; left: 0%;top: 45%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcLeft" @click="goPage('HRPsLeft08')" width="80px" height="80px">
      </div>
    </div>
    <div id="toRight" :style="{width: '105px', height: '105px'}"></div>
    <div class="toRight" style="position: absolute;z-index: 99999; right: 0%;top: 50%; color: red">
      <div style="position: absolute; right: 80px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcRight" @click="goPage('HRPsRight08')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute;right: 120px; bottom:80px;width: 10px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPs')" width="80px" height="80px">
      </div>
    </div>
    <div id="talent" :style="{width: '105px', height: '105px'}"></div>
    <div class="talent" style="position: absolute;z-index: 99999; left: 5%;top: 35%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrctalent" @click="show()" width="120px" height="80px">
      </div>
    </div>
    <div id="ninePine" :style="{width: '105px', height: '105px'}"></div>
    <div class="ninePine" style="position: absolute;z-index: 99999; left: 5%;top: 10%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcNinePine" @click="show1()" width="120px" height="80px">
      </div>
    </div>
    <div id="monthData4" :style="{width: '850px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 25%;top: 0%; color: red">
      <div style="position: absolute; left: 20px; top: 0px;width: 200px;height: 500px;">
        <img :src="imgsrc1" width="800px" height="710px" :style="{ display: visibleImg1}">
      </div>
    </div>
    <div id="monthData5" :style="{width: '850px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 10%;top: 5%; color: red">
      <div style="position: absolute; left: 20px; top: 5px;width: 200px;height: 500px;">
        <img :src="imgsrc2" width="1200px" height="650px" :style="{ display: visibleImg2}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      visibleImg1: 'none',
      visibleImg2: '',
      imgsrctalent: require('../../assets/HRPsMain0803.png'),
      imgsrcNinePine: require('../../assets/HRPsMain0804.png'),
      imgsrc1: require('../../assets/HRPsMain0802.png'),
      imgsrc2: require('../../assets/HRPsMain0801.png'),
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    show1 () {
      var _this = this
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = ''
    },
    show () {
      var _this = this
      _this.visibleImg1 = ''
      _this.visibleImg2 = 'none'
    },
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft08') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft08'
        })
      } else if (page === 'HRPsRight08') {
        //
        this.$router.push({
          path: '/HRPsRight08'
        })
      } else {
        // 左屏
        this.$router.push({
          path: '/HRPs'
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
    background: url(../../assets/HRPsMain08.png) no-repeat;
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
