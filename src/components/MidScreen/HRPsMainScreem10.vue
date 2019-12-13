<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '650px', height: '250px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 28%;top: 10%; color: red">
      <div style="position: absolute; left: 5px; top: 10px;width: 150px;height: 500px;">
        <img :src="imgsrc1" width="900px" height="550px" v-if="flag1">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftScreem',
  data () {
    return {
      flag1: false,
      imgsrc1: require('../../assets/HRPsMain1001.png'),
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.flag1 = true
    }, 1000)
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft10') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft10'
        })
      } else if (page === 'HRPsRight10') {
        //
        this.$router.push({
          path: '/HRPsRight10'
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
    background: url(../../assets/HRPsMain10.png) no-repeat;
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
