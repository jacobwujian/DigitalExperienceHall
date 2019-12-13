<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="toLeft" :style="{width: '105px', height: '105px'}"></div>
    <div class="toLeft" style="position: absolute;z-index: 99999; left: 0%;top: 45%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcLeft" @click="goPage('HRPsLeft07')" width="80px" height="80px">
      </div>
    </div>
    <div id="toRight" :style="{width: '105px', height: '105px'}"></div>
    <div class="toRight" style="position: absolute;z-index: 99999; right: 0%;top: 50%; color: red">
      <div style="position: absolute; right: 80px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcRight" @click="goPage('HRPsRight07')" width="80px" height="80px">
      </div>
    </div>
    <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
    <div class="backTo" style="position: absolute;z-index: 99999; right: 0%;bottom: 0%; color: red">
      <div style="position: absolute; right: 120px; bottom: 80px;width: 10px;height: 10px;">
        <img :src="imgsrcBack" @click="goPage('HRPs')" width="80px" height="80px">
      </div>
    </div>
    <div id="monthData1" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 10%;top: 38%; color: red">
      <div style="position: absolute; left: 510px; top: 15px;width: 100px;height: 100px;">
        <img class="touming1" :src="imgsrcFirst" @click="goPage('HRPsMain0701')" width="250px" height="80px">
      </div>
    </div>
    <div id="monthData2" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 5%;top: 44%; color: red">
      <div style="position: absolute; left: 840px; top: 15px;width: 10px;height: 10px;">
        <img class="touming2" :src="imgsrcSecond" @click="goPage('HRPsMain0702')" width="160px" height="250px">
      </div>
    </div>
    <div id="monthData3" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 9%;top: 68%; color: red">
      <div style="position: absolute; left: 670px; top: 5px;width: 10px;height: 10px;">
        <img class="touming3" :src="imgsrcThird" @click="goPage('HRPsMain0703')" width="250px" height="160px">
      </div>
    </div>
    <div id="monthData4" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 7.5%;top: 68.5%; color: red">
      <div style="position: absolute; left: 450px; top: 5px;width: 10px;height: 10px;">
        <img class="touming4" :src="imgsrcFourth" @click="goPage('HRPsMain0704')" width="240px" height="195px">
      </div>
    </div>
    <div id="monthData5" :style="{width: '105px', height: '105px'}"></div>
    <div class="mothData" style="position: absolute;z-index: 99999; left: 9.5%;top: 39%; color: red">
      <div style="position: absolute; left: 390px; top: 5px;width: 10px;height: 10px;">
        <img class="touming5" :src="imgsrcFifth" @click="goPage('HRPsMain0705')" width="140px" height="270px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      imgsrcFirst: require('../../assets/HRPsMain07001.png'),
      imgsrcSecond: require('../../assets/HRPsMain07002.png'),
      imgsrcThird: require('../../assets/HRPsMain07003.png'),
      imgsrcFourth: require('../../assets/HRPsMain07004.png'),
      imgsrcFifth: require('../../assets/HRPsMain07005.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft07') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft07'
        })
      } else if (page === 'HRPsRight07') {
        //
        this.$router.push({
          path: '/HRPsRight07'
        })
      } else if (page === 'HRPsMain0701') {
        //
        this.$router.push({
          path: '/HRPsMain0701'
        })
      } else if (page === 'HRPsMain0702') {
        //
        this.$router.push({
          path: '/HRPsMain0702'
        })
      } else if (page === 'HRPsMain0703') {
        //
        this.$router.push({
          path: '/HRPsMain0703'
        })
      } else if (page === 'HRPsMain0704') {
        //
        this.$router.push({
          path: '/HRPsMain0704'
        })
      } else if (page === 'HRPsMain0705') {
        //
        this.$router.push({
          path: '/HRPsMain0705'
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
  .touming1{
    -webkit-animation: toum 3s linear infinite;
    animation: toum 3s linear infinite;
  }
  @-webkit-keyframes toum {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }
  .touming2{
    -webkit-animation: toum 2s linear infinite;
    animation: toum 2s linear infinite;
  }
  @-webkit-keyframes toum {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }
  .touming3{
    -webkit-animation: toum 4s linear infinite;
    animation: toum 4s linear infinite;
  }
  @-webkit-keyframes toum {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }
  .touming4{
    -webkit-animation: toum 3.5s linear infinite;
    animation: toum 3.5s linear infinite;
  }
  @-webkit-keyframes toum {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }
  .touming5{
    -webkit-animation: toum 2.5s linear infinite;
    animation: toum 2.5s linear infinite;
  }
  @-webkit-keyframes toum {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.5;
    }
  }
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/HRPsMain07.png) no-repeat;
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
    color: white;
  }
</style>
