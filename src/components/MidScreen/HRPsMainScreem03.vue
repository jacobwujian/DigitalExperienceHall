<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
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
      fullHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    goPage (page) {
      console.log(page)
      if (page === 'HRPsLeft03') {
        // 中屏
        this.$router.push({
          path: '/HRPsLeft03'
        })
      } else if (page === 'HRPsRight03') {
        //
        this.$router.push({
          path: '/HRPsRight03'
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
    background: url(../../assets/HRPsMain03.png) no-repeat;
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
