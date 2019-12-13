<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 16%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show1()" :style="{color: button1}">我的团队</el-button>
      </div>
    </div>
    <div id="monthData2" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 28%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show2()" :style="{color: button2}">下属档案</el-button>
      </div>
    </div>
    <div id="monthData3" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 40%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show3()" :style="{color: button3}">部门请假</el-button>
      </div>
    </div>
    <div id="monthData4" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 51%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show4()" :style="{color: button4}">部门加班</el-button>
      </div>
    </div>
    <div id="monthData5" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 62.5%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show5()" :style="{color: button5}">部门排班</el-button>
      </div>
    </div>
    <div id="monthData6" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 23.5%;top: 75%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="show6()" :style="{color: button6}">团队目标</el-button>
      </div>
    </div>
    <div id="monthData7" :style="{width: '50px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 32%;top: 11%; color: red">
      <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
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
    <div class="monthData" style="position: absolute;z-index: 99999; left: 42%;top: 5%; color: red">
      <div style="position: absolute; left: 80px; top: 5px;width: 200px;height: 600px;">
        <img :src="imgsrc4" width="350px" height="650px" :style="{ display: visibleImg4}">
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
      imgsrc0: require('../../assets/show.png'),
      imgsrc1: require('../../assets/Mid0101.png'),
      imgsrc2: require('../../assets/Mid0102.png'),
      imgsrc3: require('../../assets/Mid0103.png'),
      imgsrc4: require('../../assets/Mid0104.png'),
      imgsrc5: require('../../assets/Mid0105.png'),
      imgsrc6: require('../../assets/Mid0106.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight (val) { // 监控浏览器高度变化
      this.fullHeight = val
    }
  },
  methods: {
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
    background: url(../../assets/MidLeft.jpg) no-repeat;
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
