<template>
  <div class="bgColor" :style="'height:'+fullHeight+'px;'">
    <div class="bgColor" style="position: absolute; left: 395px; top: 20px;">
      <video loop :src="movie_src" controls="controls" :style="{width: '800px', height: '650px'}" :autoplay="autoplay">
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightScreem',
  data () {
    return {
      autoplay: true,
      movie_src: '',
      imgsrcMain: require('../../assets/toleft.png'),
      imgsrcBack: require('../../assets/back.png'),
      fullHeight: document.documentElement.clientHeight
    }
  },
  mounted: function () {
    this.movie_src = '../../../static/HRPsRightVideo06.mp4'
  },
  methods: {
    next: function () {
    },
    goPage (page) {
      console.log(page)
      if (page === 'HRPsMain06') {
        // 中屏
        this.$router.push({
          path: '/HRPsMain06'
        })
      } else {
        this.$router.push({
          path: '/HRPs'
        })
      }
    }
  },
  watch: {
    fullHeight (val) { // 监控浏览器高度变化
      this.fullHeight = val
    }
  }
}
</script>

<style scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/Computer.jpg) no-repeat;
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
