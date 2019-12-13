<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 5%;top: 23%; color: red">
      <div style="position: absolute; left: 5px; top: 30px;width: 150px;height: 500px;">
        <img :src="imgsrc2" width="300px" height="530px" v-if="flag2">
      </div>
    </div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 38%;top: 0%; color: red">
        <img :src="imgsrc3" width="600px" height="820px" v-if="flag3">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      flag2: false,
      flag3: false,
      imgsrc2: require('../../assets/HRPsLeft070302.png'),
      imgsrc3: require('../../assets/HRPsLeft070303.png'),
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.flag2 = true
    }, 1000)
    setTimeout(function () {
      _this.flag3 = true
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
      } else if (page === 'HRPsLeft0704') {
        //
        this.$router.push({
          path: '/HRPsLeft0704'
        })
      } else {
        // 左屏
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
    background: url(../../assets/HRPsLeft0703.png) no-repeat;
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
