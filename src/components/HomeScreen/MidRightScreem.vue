<template>
<div class="bgColor" :style="'height:'+fullHeight+'px;'">
 <div id="monthData1" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 26%; color: red">
     <div style="position: absolute; left: 90px; top: 6px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show1()" :style="{color: button1}">人数趋势</el-button>
     </div>
  </div>
 <div id="monthData2" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 38%; color: red">
     <div style="position: absolute; left: 90px; top: 12px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show2()" :style="{color: button2}">流动预计</el-button>
     </div>
  </div>
 <div id="monthData3" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 51%; color: red">
     <div style="position: absolute; left: 90px; top: 14px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show3()" :style="{color: button3}">结构分析</el-button>
     </div>
  </div>
 <div id="monthData4" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 22.5%;top: 64%; color: red">
     <div style="position: absolute; left: 90px; top: 16px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show4()" :style="{color: button4}">嵌入式分析</el-button>
     </div>
  </div>
 <div id="monthData5" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 32%;top: 11%; color: red">
     <div style="position: absolute; left: 125px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc0" width="80px" height="550px" :style="{ display: visibleImg0}">
     </div>
  </div>
 <div id="monthData6" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc1" width="350px" height="650px" :style="{ display: visibleImg1}">
     </div>
  </div>
 <div id="monthData7" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc2" width="350px" height="650px" :style="{ display: visibleImg2}">
     </div>
  </div>
 <div id="monthData8" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc3" width="350px" height="650px" :style="{ display: visibleImg3}">
     </div>
  </div>
 <div id="monthData9" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc4" width="350px" height="650px" :style="{ display: visibleImg4}">
     </div>
  </div>
  <div id="monthData" :style="{width: '105px', height: '105px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 0%;top: 40%; color: red">
    <div style="position: absolute; left: 0px; top: 5px;width: 10px;height: 10px;">
      <img :src="imgsrcMid" @click="goPage('Mid')" width="80px" height="80px">
    </div>
  </div>
  <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
  <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
    <div style="position: absolute; right: 120px; bottom: 80px;width: 10px;height: 10px;">
      <img :src="imgsrcBack" @click="goPage('')" width="80px" height="80px">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MidLeft',
  data () {
    return {
      button1: 'white',
      button2: 'white',
      button3: 'white',
      button4: 'white',
      visibleImg0: 'none',
      visibleImg1: 'none',
      visibleImg2: 'none',
      visibleImg3: 'none',
      visibleImg4: 'none',
      imgsrcMid: require('../../assets/toleft.png'),
      imgsrc0: require('../../assets/show.png'),
      imgsrc1: require('../../assets/Mid0301.png'),
      imgsrc2: require('../../assets/Mid0302.png'),
      imgsrc3: require('../../assets/Mid0303.png'),
      imgsrc4: require('../../assets/Mid0304.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight (val) { // 监控浏览器高度变化
      this.fullHeight = val
    }
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'Mid') {
        // 2中屏
        this.$router.push({
          path: '/Mid'
        })
      } else {
        // 2中屏
        this.$router.push({
          path: '/'
        })
      }
    },
    show1 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = ''
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = 'none'
      _this.button1 = 'red'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'white'
    },
    show2 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = ''
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'red'
      _this.button3 = 'white'
      _this.button4 = 'white'
    },
    show3 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = ''
      _this.visibleImg4 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'red'
      _this.button4 = 'white'
    },
    show4 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = ''
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'red'
    }
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/MidRight.jpg) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed
  }
  #monthData{        //
    position: absolute;
    z-index: 99999;
    left: 0;
    top: 55%;
    color: beige;
    font-size: 14px;
    font-weight: 900;
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
  /deep/ .el-button{
   background: rgba(255, 255, 255, 0);
   border: 0;
   font-size: 30px
  }
  .img{
    background-size: 100% 100%;
    background-attachment:fixed
  }
</style>
