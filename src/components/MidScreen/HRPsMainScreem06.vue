<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 4%;top: 19%; color: red">
      <div style="position: absolute; left: 100px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="show1()">访问量与服务量</el-button>
      </div>
    </div>
    <div id="monthData2" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 5%;top: 19%; color: red">
      <div style="position: absolute; left: 330px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="show2()">SSC服务评价</el-button>
      </div>
    </div>
    <div id="monthData3" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 6%;top: 19%; color: red">
      <div style="position: absolute; left: 550px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="show3()">HR流程绩效分析</el-button>
      </div>
    </div>
    <div id="monthData4" :style="{width: '850px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15%;top: 25%; color: red">
      <div style="position: absolute; left: 20px; top: 30px;width: 200px;height: 500px;">
        <img :src="imgsrc1" width="1000px" height="450px" :style="{ display: visibleImg1}">
      </div>
    </div>
    <div id="monthData5" :style="{width: '850px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15%;top: 25%; color: red">
      <div style="position: absolute; left: 20px; top: 30px;width: 200px;height: 500px;">
        <img :src="imgsrc2" width="1000px" height="450px" :style="{ display: visibleImg2}">
      </div>
    </div>
    <div id="monthData6" :style="{width: '850px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15%;top: 25%; color: red">
      <div style="position: absolute; left: 20px; top: 30px;width: 200px;height: 500px;">
        <img :src="imgsrc3" width="1000px" height="450px" :style="{ display: visibleImg3}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      visibleImg1: '',
      visibleImg2: 'none',
      visibleImg3: 'none',
      imgsrc1: require('../../assets/HRPsMain0601.png'),
      imgsrc2: require('../../assets/HRPsMain0602.png'),
      imgsrc3: require('../../assets/HRPsMain0603.png'),
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    show1 () {
      var _this = this
      _this.visibleImg1 = ''
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = 'none'
    },
    show2 () {
      var _this = this
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = ''
      _this.visibleImg3 = 'none'
    },
    show3 () {
      var _this = this
      _this.visibleImg1 = 'none'
      _this.visibleImg2 = 'none'
      _this.visibleImg3 = ''
    },
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft06') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft06'
        })
      } else if (page === 'HRPsRight06') {
        //
        this.$router.push({
          path: '/HRPsRight06'
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
    background: url(../../assets/HRPsMain06.png) no-repeat;
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
  /deep/ .el-button{
    background: rgba(255, 255, 255, 0);
    border: 0;
    font-size: 25px;
    color: white
  }
</style>
