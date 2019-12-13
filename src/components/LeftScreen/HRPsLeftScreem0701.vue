<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 5%;top: 15%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc1" width="1000px" height="550px" v-if="flag1">
      </div>
    </div>
    <div id="monthData2" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 72%;top: 5%; color: red">
      <div style="position: absolute; left: 0px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc2" width="300px" height="550px" v-if="flag">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      flag: false,
      flag1: false,
      imgsrc1: require('../../assets/HRPsLeft070101.png'),
      imgsrc2: require('../../assets/HRPsLeft070102.png'),
      imgsrcMain: require('../../assets/toright.png'),
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
      _this.flag = true
    }, 2000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft0702') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft0702'
        })
      } else {
        this.$router.push({
          path: '/HRPsLeft07'
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
    background: url(../../assets/HRPsLeft0701.png) no-repeat;
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
