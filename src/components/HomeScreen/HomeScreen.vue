<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div class="heart"></div>
    <div class="heart HeartClass"></div>
    <div class="heart HeartClass2"></div>
    <div class="heart HeartClass3"></div>
    <div class="Leader" @click="goPage('Leader')"><span>{{'高层领导'}}</span></div>
    <div class="Mid" @click="goPage('Mid')"><span>{{'中层干部'}}</span></div>
    <div class="HRPs" @click="goPage('HRPs')"><span>{{'HR人员 '}}</span></div>
    <div class="Normal" @click="goPage('Normal')"><span>{{'普通员工'}}</span></div>
  </div>
</template>
<script>
export default{
  name: 'Login',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  watch: {
    fullHeight (val) { // 监控浏览器高度变化
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
  mounted () {
    this.get_bodyHeight()
  },
  created () {
    this.initWebSocket()
  },
  methods: {
    get_bodyHeight () { // 动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    goPage (page) {
      console.log(page)
      if (page === 'Leader') {
        // 中屏
        const obj = {
          type: 'Mid',
          num: 1
        }
        this.websocket.send(obj)
        this.$router.push({
          path: '/Leader'
        })
      } else if (page === 'Mid') {
        // 左屏
        const obj = {
          type: 'Mid',
          num: 1
        }
        console.log(obj)
        this.$router.push({
          path: '/Mid'
        })
      } else if (page === 'Normal') {
        // 左屏
        const obj = {
          type: 'Normal',
          num: 1
        }
        console.log(obj)
        this.$router.push({
          path: '/Normal'
        })
      } else {
        // HRPs
        this.$router.push({
          path: '/HRPs'
        })
      }
    },
    // 初始化websocket
    initWebSocket () {
      const vm = this
      // 创建一个websocket连接
      vm.websocket = new WebSocket('ws://localhost:8010/webSocket')
      // 看下websocket到底是什么  打印见下文
      console.log(vm.websocket)

      // websocket建立连接时会触发此方法
      vm.websocket.onopen = function () {
        // console.log('websocket onopen')
        vm.isSocket = true
      }
      // // 客户端接收服务端数据时触发
      // vm.websocket.onmessage = function (evt) {
      //   const obj = JSON.parse(evt.data)
      //   if (obj.type === 'Mid') {
      //     vm.$router.push({
      //       path: '/Leader'
      //     })
      //   }
      //   // switch (obj.Command) {
      //   //   case '8801':
      //   //     vm.fullscreenLoading = false
      //   //     if (obj.code === 0) { // 抓拍成功
      //   //       vm.photograph = obj.Body.photoUrl
      //   //       vm.getRecordInfo()
      //   //       vm.$message.success(obj.Msg)
      //   //     } else {
      //   //       vm.code = 1
      //   //       vm.$message.error(obj.Msg)
      //   //     }
      //   //     break
      //   //   case '8300':
      //   //     // vm.$alert('发送成功！', '提示', {
      //   //     //   confirmButtonText: '确定'
      //   //     // })
      //   //     vm.$message.success(obj.Msg)
      //   //     vm.selectTempId = null
      //   //     vm.textSend = ''
      //   //     break
      //   //   default :
      //   //     // vm.$alert('失败！', '提示', {
      //   //     //   confirmButtonText: '确定'
      //   //     // })
      //   //     vm.$message.error(obj.Msg)
      //   //     vm.selectTempId = null
      //   //     vm.textSend = ''
      //   //     vm.photograph = ''
      //   //     break
      //   // }
      // }
      // 通信发生错误时触发 重新连接
      vm.websocket.onerror = function () { // 如果请求出错则再次连接
        vm.initWebSocket()
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/homeImg.jpeg) no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed;
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
    top: 150px;
    left: 300px;
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
    margin-left: 20%;
    margin-top: -20%;
    position: relative;
  }
  .HeartClass2{
    margin-left: 40%;
    margin-top: -7%;
    position: relative;
  }
  .HeartClass3{
    margin-left: 60%;
    position: relative;
  }
  .Leader{
    height: 20px;
    width: 150px;
    position: absolute;
    top: 36%;
    left: 18%;
    font-size: 30px;
    color: white;
    z-index: 99999;
  }
  .Leader:hover{
    cursor: pointer;
  }
  .Mid{
    height: 20px;
    width: 150px;
    position: absolute;
    top: 17.5%;
    left:37%;
    font-size: 30px;
    color: white;
    z-index: 99999;
  }
  .Mid:hover{
    cursor: pointer;
  }
  .HRPs{
    height: 20px;
    width: 150px;
    position: absolute;
    top: 25%;
    left: 57%;
    font-size: 30px;
    color: white;
    z-index: 99999;
  }
  .HRPs:hover{
    cursor: pointer;
  }
  .Normal{
    height: 20px;
    width: 150px;
    position: absolute;
    top: 46%;
    left: 77%;
    font-size: 30px;
    color: white;
    z-index: 99999;
  }
  .Normal:hover{
    cursor: pointer;
  }
</style>
