<template>
<div class="bgColor" :style="'height:'+fullHeight+'px;'">
 <div id="monthData1" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 16%; color: red">
     <div style="position: absolute; left: 90px; top: 6px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show1()" :style="{color: button1}">信息修改</el-button>
     </div>
  </div>
 <div id="monthData2" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 24.5%;top: 28%; color: red">
     <div style="position: absolute; left: 90px; top: 3px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show2()" :style="{color: button2}">请休假</el-button>
     </div>
  </div>
 <div id="monthData3" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 40%; color: red">
     <div style="position: absolute; left: 90px; top: 6px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show3()" :style="{color: button3}">证明开具</el-button>
     </div>
  </div>
 <div id="monthData4" :style="{width: '1000px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 19%;top: 51%; color: red">
     <div style="position: absolute; left: 110px; top: 6px;width: 300px;height: 90px;">
        <el-button size="medium" @click="show4()" :style="{color: button4}">任职资格证书</el-button>
     </div>
  </div>
 <div id="monthData5" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 62.5%; color: red">
     <div style="position: absolute; left: 90px; top: 8px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show5()" :style="{color: button5}">员工祝福</el-button>
     </div>
  </div>
 <div id="monthData6" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 75%; color: red">
     <div style="position: absolute; left: 90px; top: 8px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show6()" :style="{color: button6}">工资理财</el-button>
     </div>
  </div>
 <div id="monthData7" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 32%;top: 11%; color: red">
     <div style="position: absolute; left: 125px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc0" width="80px" height="550px" :style="{ display: visibleImg0}">
     </div>
  </div>
 <div id="monthData8" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc1" width="350px" height="650px" :style="{ display: visibleImg1}">
     </div>
  </div>
 <div id="monthData9" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc2" width="350px" height="650px" :style="{ display: visibleImg2}">
     </div>
  </div>
 <div id="monthData10" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc3" width="350px" height="650px" :style="{ display: visibleImg3}">
     </div>
  </div>
 <div id="monthData11" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 18%; color: red">
     <div style="position: absolute; left: 80px; top: 15px;width: 200px;height: 500px;">
       <img :src="imgsrc4" width="650px" height="450px" :style="{ display: visibleImg4}">
     </div>
  </div>
 <div id="monthData12" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc5" width="350px" height="650px" :style="{ display: visibleImg5}">
     </div>
  </div>
 <div id="monthData13" :style="{width: '50px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
     <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
       <img :src="imgsrc6" width="350px" height="650px" :style="{ display: visibleImg6}">
     </div>
  </div>
  <div id="toLeft" :style="{width: '105px', height: '105px'}"></div>
  <div class="toLeft" style="position: absolute;z-index: 99999; left: 0%;top: 40%; color: red">
    <div style="position: absolute; left: 0px; top: 5px;width: 10px;height: 10px;">
      <img :src="imgsrcLeft" @click="goPage('NormalLeft')" width="80px" height="80px">
    </div>
  </div>
  <div id="toRight" :style="{width: '105px', height: '105px'}"></div>
  <div class="toRight" style="position: absolute;z-index: 99999; right: 0%;top: 40%; color: red">
    <div style="position: absolute; right: 80px; top: 15px;width: 10px;height: 10px;">
      <img :src="imgsrcRight" @click="goPage('NormalRight')" width="80px" height="80px">
    </div>
  </div>
  <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
  <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
    <div style="position: absolute; right: 120px; bottom:80px;width: 10px;height: 10px;">
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
      button5: 'white',
      button6: 'white',
      visibleImg0: 'none',
      visibleImg1: 'none',
      visibleImg2: 'none',
      visibleImg3: 'none',
      visibleImg4: 'none',
      visibleImg5: 'none',
      visibleImg6: 'none',
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrc0: require('../../assets/show.png'),
      imgsrc1: require('../../assets/Normal0201.png'),
      imgsrc2: require('../../assets/Normal0202.png'),
      imgsrc3: require('../../assets/Normal0203.png'),
      imgsrc4: require('../../assets/Normal0204.png'),
      imgsrc5: require('../../assets/Normal0205.png'),
      imgsrc6: require('../../assets/Normal0206.png'),
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
      if (page === 'NormalLeft') {
        // 2左
        this.$router.push({
          path: '/NormalLeft'
        })
      } else if (page === 'NormalRight') {
        // 2right
        this.$router.push({
          path: '/NormalRight'
        })
      } else {
        // 2右
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
      _this.visibleImg5 = 'none'
      _this.visibleImg6 = 'none'
      _this.button1 = 'red'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'white'
      _this.button5 = 'white'
      _this.button6 = 'white'
    },
    show2 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = ''
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = 'none'
      _this.visibleImg5 = 'none'
      _this.visibleImg6 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'red'
      _this.button3 = 'white'
      _this.button4 = 'white'
      _this.button5 = 'white'
      _this.button6 = 'white'
    },
    show3 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = ''
      _this.visibleImg4 = 'none'
      _this.visibleImg5 = 'none'
      _this.visibleImg6 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'red'
      _this.button4 = 'white'
      _this.button5 = 'white'
      _this.button6 = 'white'
    },
    show4 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = ''
      _this.visibleImg5 = 'none'
      _this.visibleImg6 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'red'
      _this.button5 = 'white'
      _this.button6 = 'white'
    },
    show5 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = 'none'
      _this.visibleImg5 = ''
      _this.visibleImg6 = 'none'
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'white'
      _this.button5 = 'red'
      _this.button6 = 'white'
    },
    show6 () {
      var _this = this
      _this.visibleImg0 = ''
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
      _this.visibleImg4 = 'none'
      _this.visibleImg5 = 'none'
      _this.visibleImg6 = ''
      _this.button1 = 'white'
      _this.button2 = 'white'
      _this.button3 = 'white'
      _this.button4 = 'white'
      _this.button5 = 'white'
      _this.button6 = 'red'
    }
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/NormalMain.jpg) no-repeat;
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
