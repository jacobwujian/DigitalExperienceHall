<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
<!--    <div class="heart"></div>-->
<!--    <div class="heart HeartClass"></div>-->
<!--    <div class="heart HeartClass2"></div>-->
<!--    <div class="heart HeartClass3"></div>-->
<!--    <div class="heart HeartClass4"></div>-->
    <div id="monthData" :style="{width: '105px', height: '105px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; right: 0%;top: 50%; color: red">
      <div style="position: absolute; right: 80px; top: 5px;width: 10px;height: 10px;">
        <img :src="imgsrcMain" @click="goPage('HRPsMain07')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute; right: 120px; bottom:80px;width: 10px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPs')" width="80px" height="80px">
      </div>
    </div>
    <div id="monthData1" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 14%;top: 54%; color: red">
      <div style="position: absolute; left: 100px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="goPage('HRPsLeft0701')">指标填报</el-button>
      </div>
    </div>
    <div id="monthData2" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 15%;top: 42%; color: red">
      <div style="position: absolute; left: 350px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="goPage('HRPsLeft0702')">指标审核</el-button>
      </div>
    </div>
    <div id="monthData3" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 18%;top: 54%; color: red">
      <div style="position: absolute; left: 550px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="goPage('HRPsLeft0703')">考核评分</el-button>
      </div>
    </div>
    <div id="monthData4" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 20.5%;top: 42%; color: red">
      <div style="position: absolute; left: 750px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="goPage('HRPsLeft0704')">结果审核</el-button>
      </div>
    </div>
    <div id="monthData5" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 24%;top: 54%; color: red">
      <div style="position: absolute; left: 950px; top: 5px;width: 10px;height: 10px;">
        <el-button size="medium" @click="goPage('HRPsLeft0705')">结果发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      imgsrcMain: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain07') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain07'
        })
      } else if (page === 'HRPsLeft0701') {
        //
        this.$router.push({
          path: '/HRPsLeft0701'
        })
      } else if (page === 'HRPsLeft0702') {
        //
        this.$router.push({
          path: '/HRPsLeft0702'
        })
      } else if (page === 'HRPsLeft0703') {
        //
        this.$router.push({
          path: '/HRPsLeft0703'
        })
      } else if (page === 'HRPsLeft0704') {
        //
        this.$router.push({
          path: '/HRPsLeft0704'
        })
      } else if (page === 'HRPsLeft0705') {
        //
        this.$router.push({
          path: '/HRPsLeft0705'
        })
      } else {
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
    background: url(../../assets/HRPsLeft07.png) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed
  }
  .heart {
    animation: beat 4s infinite;
    -webkit-animation: beat 4s infinite;
    width: 200px;
    height: 200px;
    filter:drop-shadow(0px 0px 20px rgb(255,20,20));
    background: url(../../assets/Title.png) no-repeat;
    background-size: 200px;
    position: relative;
    top: 300px;
    left: 270px;
    transform: rotate(45deg);
    z-index: 99999;
  }
  .heart:before {
    left: -20px;
  }
  .heart::after {
    left: 0px;
    top: -20px;
  }
  @keyframes beat {
    0% {
      transform: rotate(90deg);
      opacity: 1;
    }
    25% {
      transform: rotate(180deg);
      opacity: 1;
    }
    75% {
      transform: rotate(270deg);
      opacity: 1;
    }
    100%{
      transform: rotate(330deg);
      opacity: 1;
    }
  }
  .HeartClass{
    margin-left: 13%;
    margin-top: -17%;
    position: relative;
  }
  .HeartClass2{
    margin-left: 25%;
    margin-top: -25%;
    position: relative;
  }
  .HeartClass3{
    margin-left: 30%;
    position: relative;
  }
  .HeartClass4{
    margin-left: 60%;
    position: relative;
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
