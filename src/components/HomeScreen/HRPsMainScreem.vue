<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '40px', height: '40px'}"></div>
    <div  style="position: absolute;z-index: 99999; left: 52.3%;top: 22.5%;">
      <div style="position: absolute; left: 65px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain01')" style="color:white;font-size: 4vh">组织管理</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 62.5%;top: 29%; ">
      <div style="position: absolute; left: 69px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain02')"  style="color:white;font-size: 4vh">员工管理</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 67.5%;top: 45%; ">
      <div style="position: absolute; left: 66px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain03')"  style="color:white;font-size: 4vh">薪资管理</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 67.5%;top: 65%; ">
      <div style="position: absolute; left: 65px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain04')"  style="color:white;font-size: 4vh">社保福利</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 62.3%;top: 79.5%; ">
      <div style="position: absolute; left: 60px; top: 7px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain05')"  style="color:white;font-size: 4vh">假勤管理</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 51.7%;top: 87%; ">
      <div style="position: absolute; left: 65px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain06')"  style="color:white;font-size: 4vh">共享服务</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 32.5%;top: 22%; ">
      <div style="position: absolute; left: 63px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain07')"  style="color:white;font-size: 4vh">目标绩效</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 22%;top: 29%; ">
      <div style="position: absolute; left: 64px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain08')"  style="color:white;font-size: 4vh">人才发展</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 15.5%;top: 45%; ">
      <div style="position: absolute; left: 70px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain09')"  style="color:white;font-size: 4vh">组织发展</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 15%;top: 64.5%; ">
      <div style="position: absolute; left: 70px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain10')"  style="color:white;font-size: 4vh">培训学习</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 22%;top: 81%; ">
      <div style="position: absolute; left: 60px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain11')"  style="color:white;font-size: 4vh">招聘管理</el-button>
      </div>
    </div>
    <div  style="position: absolute;z-index: 99999; left: 32%;top: 87%; ">
      <div style="position: absolute; left: 70px; top: 2px;width: 132px;height: 43px;">
        <el-button size="medium" @click="goPage('HRPsMain12')"  style="color:white;font-size: 4vh">企业文化</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mid',
  data () {
    return {
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
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
      if (page === 'HRPsLeft') {
        // 2左
        this.$router.push({
          path: '/HRPsLeft'
        })
      } else if (page === 'HRPsRight') {
        // 2right
        this.$router.push({
          path: '/HRPsRight'
        })
      } else if (page === 'HRPsMain01') {
        this.$router.push({
          path: '/HRPsMain01'
        })
      } else if (page === 'HRPsMain02') {
        this.$router.push({
          path: '/HRPsMain02'
        })
      } else if (page === 'HRPsMain03') {
        this.$router.push({
          path: '/HRPsMain03'
        })
      } else if (page === 'HRPsMain04') {
        this.$router.push({
          path: '/HRPsMain04'
        })
      } else if (page === 'HRPsMain05') {
        this.$router.push({
          path: '/HRPsMain05'
        })
      } else if (page === 'HRPsMain06') {
        this.$router.push({
          path: '/HRPsMain06'
        })
      } else if (page === 'HRPsMain07') {
        this.$router.push({
          path: '/HRPsMain07'
        })
      } else if (page === 'HRPsMain08') {
        this.$router.push({
          path: '/HRPsMain08'
        })
      } else if (page === 'HRPsMain09') {
        this.$router.push({
          path: '/HRPsMain09'
        })
      } else if (page === 'HRPsMain10') {
        this.$router.push({
          path: '/HRPsMain10'
        })
      } else if (page === 'HRPsMain11') {
        this.$router.push({
          path: '/HRPsMain11'
        })
      } else if (page === 'HRPsMain12') {
        this.$router.push({
          path: '/HRPsMain12'
        })
      } else {
        // 2右
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/HRPsMain.jpg) no-repeat;
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
   font-size: 23px;
  }
  .img{
    background-size: 100% 100%;
    background-attachment:fixed
  }
</style>
