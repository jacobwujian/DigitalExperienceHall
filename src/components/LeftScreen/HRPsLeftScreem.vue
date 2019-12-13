<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div id="monthData1" :style="{width: '40px', height: '40px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 52.3%;top: 22%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 80px;height: 80px;">
        <el-button size="medium" @click="goPage('HRPsLeft01')" :style="{color: button1}">组织管理</el-button>
      </div>
    </div>
    <div id="monthData2" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 62.5%;top: 29%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs02')" :style="{color: button2}">员工管理</el-button>
      </div>
    </div>
    <div id="monthData3" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 67.5%;top: 45%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs03')" :style="{color: button3}">薪资管理</el-button>
      </div>
    </div>
    <div id="monthData4" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 67.5%;top: 65%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs04')" :style="{color: button4}">社保福利</el-button>
      </div>
    </div>
    <div id="monthData5" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 62.3%;top: 79.5%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs05')" :style="{color: button5}">假勤管理</el-button>
      </div>
    </div>
    <div id="monthData6" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 51.7%;top: 87%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs06')" :style="{color: button6}">共享服务</el-button>
      </div>
    </div>
    <div id="monthData7" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 32.5%;top: 22%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs07')" :style="{color: button7}">目标绩效</el-button>
      </div>
    </div>
    <div id="monthData8" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 22%;top: 29%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs08')" :style="{color: button8}">人才发展</el-button>
      </div>
    </div>
    <div id="monthData9" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15.5%;top: 45%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs09')" :style="{color: button9}">组织发展</el-button>
      </div>
    </div>
    <div id="monthData10" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 15%;top: 64.5%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs10')" :style="{color: button10}">培训学习</el-button>
      </div>
    </div>
    <div id="monthData11" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 22%;top: 81%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs11')" :style="{color: button11}">招聘管理</el-button>
      </div>
    </div>
    <div id="monthData12" :style="{width: '50px', height: '50px'}"></div>
    <div class="monthData" style="position: absolute;z-index: 99999; left: 32%;top: 87%; color: red">
      <div style="position: absolute; left: 60px; top: 2px;width: 100px;height: 90px;">
        <el-button size="medium" @click="gopage('HRPs12')" :style="{color: button12}">企业文化</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mid',
  data () {
    return {
      button1: 'white',
      button2: 'white',
      button3: 'white',
      button4: 'white',
      button5: 'white',
      button6: 'white',
      button7: 'white',
      button8: 'white',
      button9: 'white',
      button10: 'white',
      button11: 'white',
      button12: 'white',
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
      if (page === 'HRPs') {
        // 2左
        this.$router.push({
          path: '/HRPs'
        })
      } else if (page === 'HRPsLeft01') {
        // 2right
        this.$router.push({
          path: '/HRPsLeft01'
        })
      } else if (page === 'HRPsMain01') {
        this.$router.push({
          path: '/HRPsMain01'
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
    font-size: 25px
  }
  .img{
    background-size: 100% 100%;
    background-attachment:fixed
  }
</style>
