<template>
<div class="bgColor" :style="'height:'+fullHeight+'px;'">
  <div id="mainDriver" :style="{width: '350px', height: '350px'}"></div>
  <div id="mainDriver1" :style="{width: '130px', height: '130px'}"></div>
  <div id="mainDriver2" :style="{width: '130px', height: '130px'}"></div>
  <div id="mainDriver3" :style="{width: '130px', height: '130px'}"></div>
  <div id="mainDriver4" :style="{width: '130px', height: '130px'}"></div>
  <div id="mainDriver5" :style="{width: '150px', height: '150px'}"></div>
  <div id="mainDriver6" :style="{width: '150px', height: '150px'}"></div>
  <div id="mainTargetDriver" :style="{width: '150px', height: '150px'}"></div>
  <div id="constructor" :style="{width: '150px', height: '150px'}"></div>
  <div id="lineTable" :style="{width: '350px', height: '150px'}"></div>
  <div class="fontNum">
    <span>{{reve}}</span>
  </div>
  <div class="fontNum2">
    <span>35335.08</span>
  </div>
  <div class="TimeClass">
    {{ timer | formatDate }}
  </div>
  <div class="TimeClass2">
    {{ '财务数据统计截止时间: ' + yearMonth }}
  </div>
  <div class="mainTarget">
    <span>财务关键指标</span>
  </div>
  <div class="mainAccount">
    <span>收入利润构成-万元</span>
  </div>
  <div class="canUse">
    <span style="margin-left: -36%">
      {{'可用资金量'}}
    </span><br>
    <span style="font-size: 22px; font-weight: bolder;color: rgb(87, 117, 85)">
      {{'32562万元'}}
    </span>
  </div>
  <div class="canUse2">
    <span style="margin-left: -15%">
      {{'本月到期债务'}}
    </span><br>
    <span style="font-size: 22px; font-weight: bolder;color: rgb(70, 162, 214)">
      {{'2562万元'}}
    </span>
  </div>
  <div id="useImp" :style="{width: '350px', height: '150px'}"></div>
  <div class="useImp" style="position: absolute;z-index: 99999; left: 8%;top: 60%; color: white">
    <span>{{'财政资金使用情况'}}</span>
  </div>
  <div class="detail" style="position: absolute;z-index: 99999; left: 2.3%;top: 70.1%; color: rgb(44, 118, 217);width: 260px;height: 40px">
      <span style="font-size: 12px; font-weight: bolder; position: absolute;left: 0;top:0">*总额: 123,456,721</span>
      <span style="font-size: 12px; font-weight: bolder; position: absolute;left: 50%;top:0">*总额: 23,421,223</span><br>
      <span style="font-size: 12px; font-weight: bolder; position: absolute;left: 0;bottom:0">·未用: 23,212</span>
      <span style="font-size: 12px; font-weight: bolder; position: absolute;left: 50%;bottom:0">·即将到期: 232,212</span>
  </div>
  <div id="psnHr" :style="{width: '205px', height: '205px'}"></div>
  <div style="position:absolute; left: 83%;bottom: 21%; color: white;z-index:99999;font-weight: bolder;font-size: 15px">
    <span>
      {{'职工总数: ' + psnAccount}}
    </span>
  </div>
  <div class="moveTable">
    <move-table></move-table>
  </div>
  <div id="monthData" :style="{width: '350px', height: '250px'}"></div>
  <div class="monthData" style="position: absolute;z-index: 99999; left: 10%;top: 86%; color: red">
    <span>{{''}}</span>
     <div style="position: absolute; left: 80px; top: 5px;width: 1000px;height: 90px;">
       <el-button style="position: absolute;left: 30px;top:9px" size="medium" @click="addMonth(1)">一月</el-button>
       <el-button style="position: absolute;left: 120px;top:4px" size="medium" @click="addMonth(2)">二月</el-button>
       <el-button  style="position: absolute;left: 220px;top:1px" size="medium" @click="addMonth(3)">三月</el-button>
       <el-button  style="position: absolute;left: 315px;top:-3px" size="medium" @click="addMonth(4)">四月</el-button>
       <el-button  style="position: absolute;left: 423px;top:-9px" size="medium" @click="addMonth(5)">五月</el-button>
       <el-button   style="position: absolute;left: 525px;top:-16px" size="medium" @click="addMonth(6)">六月</el-button>
       <el-button style="position: absolute;left: 640px;top:-16px" size="medium" @click="addMonth(7)">七月</el-button>
       <el-button style="position: absolute;left: 740px;top:-16px" size="medium" @click="addMonth(8)">八月</el-button>
       <el-button style="position: absolute;left: 850px;top:-12px" size="medium" @click="addMonth(9)">九月</el-button>
       <el-button style="position: absolute;left: 948px;top: -8px" size="medium" @click="addMonth(10)">十月</el-button>
       <el-button style="position: absolute;left: 1060px;top: -4px" size="medium" @click="addMonth(11)">十一月</el-button>
       <el-button style="position: absolute;left: 1180px;top: 6px" size="medium" @click="addMonth(12)">十二月</el-button>
      </div>
  </div>
  <div id="toLeft" :style="{width: '105px', height: '105px'}"></div>
    <div class="toLeft" style="position: absolute;z-index: 99999; left: 0%;top: 45%; color: red">
      <div style="position: absolute; left: 0px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcLeft" @click="goPage('Left')" width="80px" height="80px">
       </div>
    </div>
  <div id="toRight" :style="{width: '105px', height: '105px'}"></div>
    <div class="toRight" style="position: absolute;z-index: 99999; right: 0%;top: 50%; color: red">
      <div style="position: absolute; right: 80px; top: 15px;width: 10px;height: 10px;">
        <img :src="imgsrcRight" @click="goPage('Right')" width="80px" height="80px">
      </div>
    </div>
  <div id="fresh" :style="{width: '105px', height: '105px'}"></div>
  <div class="fresh" style="position: absolute;z-index: 99999; left: 3%;top: 80%; color: red">
    <div style="position: absolute; left: 0px; top: 5px;width: 10px;height: 10px;">
      <img :src="imgsrcFresh" @click="fresh()" width="80px" height="80px">
    </div>
  </div>
  <div id="backTo" :style="{width: '105px', height: '105px'}"></div>
  <div class="backTo" style="position: absolute;z-index: 99999; left: 10%;top: 80%; color: red">
    <div style="position: absolute; left: 1600px; top: 9px;width: 10px;height: 10px;">
      <img :src="imgsrcBack" @click="goPage('')" width="80px" height="80px">
    </div>
  </div>
<!-- 在主操作界面上设计按钮 可以在几个页面之间来回切换 不影响 交互屏的使用-->
</div>
</template>

<script>
import MoveTable from './MoveTable'
export default {
  name: 'Leader',
  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '年' + MM + '月' + d + '日 ' + h + ':' + m + ':' + s
    }
  },
  components: {
    MoveTable
  },
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      imgsrcLeft: require('../../assets/toleft.png'),
      imgsrcRight: require('../../assets/toright.png'),
      imgsrcFresh: require('../../assets/Fresh.png'),
      imgsrcBack: require('../../assets/back.png'),
      reve: 0,
      timer: '',
      yearMonth: '',
      TotalContro: 20,
      PsnConfig: 20,
      PsnAdd: 20,
      PsnLeave: 20,
      PsnHappy: 20,
      psnAccount: 35980
    }
  },
  created () {
    this.initWebSocket()
  },
  mounted () {
    this.drawDriver()
    this.getReve()
    this.drawEcharts()
    var _this = this
    this.timer = setInterval(function () {
      _this.timer = new Date() // 修改数据date
    }, 1000)
    var year = new Date().getFullYear()
    var month = new Date().getMonth() + 1
    this.yearMonth = year + '年' + month + '月'
    this.drawPsnHr()
  },
  methods: {
    fresh () {
      var _this = this
      _this.$router.go(0)
    },
    drawDriver () {
      var _this = this
      var myChart = this.$echarts.init(document.getElementById('mainDriver'))
      var myChart1 = this.$echarts.init(document.getElementById('mainDriver1'))
      var myChart2 = this.$echarts.init(document.getElementById('mainDriver2'))
      var myChart3 = this.$echarts.init(document.getElementById('mainDriver3'))
      var myChart4 = this.$echarts.init(document.getElementById('mainDriver4'))

      var option = {
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 3
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 25, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5
            },
            title: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 10,
                fontStyle: 'italic',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5,
              formatter: '人工成本总额管控{value}%',
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
              }
            },
            data: [{value: _this.TotalContro, name: ''}]
          }
        ]
      }
      var option1 = {
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 1
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 1,
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5
            },
            title: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 8,
                fontStyle: 'italic',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5,
              formatter: '人员配置率{value}%',
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
              }
            },
            data: [{value: _this.PsnConfig, name: ''}]
          }
        ]
      }
      var option2 = {
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 1
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 1,
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5
            },
            title: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 8,
                fontStyle: 'italic',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5,
              formatter: '人员流失率{value}‰',
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
              }
            },
            data: [{value: _this.PsnLeave, name: ''}]
          }
        ]
      }
      var option3 = {
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 1
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 1,
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5
            },
            title: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 8,
                fontStyle: 'italic',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5,
              formatter: '净增员率{value}‰',
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
              }
            },
            data: [{value: _this.PsnAdd, name: ''}]
          }
        ]
      }
      var option4 = {
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '100%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 1
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 5, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 1,
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5
            },
            title: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 8,
                fontStyle: 'italic',
                color: '#fff'
                // shadowColor: '#fff', // 默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              // shadowColor: '#fff', // 默认透明
              // shadowBlur: 5,
              formatter: '员工满意度{value}%',
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 10
              }
            },
            data: [{value: _this.PsnHappy, name: ''}]
          }
        ]
      }
      myChart.setOption(option, true)
      myChart1.setOption(option1, true)
      myChart2.setOption(option2, true)
      myChart3.setOption(option3, true)
      myChart4.setOption(option4, true)
    },
    getReve () {
      const _this = this
      setInterval(() => {
        const num = (Math.random() * 100).toFixed(2) - 0
        const pre = parseFloat((parseFloat('1191385.68').toFixed(2) - 0 - num).toString()).toFixed(2) - 0
        _this.reve = pre
      }, 2000)
    },
    drawEcharts () {
      var useImp = this.$echarts.init(document.getElementById('useImp'))
      var optionsUse = {
        xAxis: { // 直角坐标系grid中的x轴,
          // 一般情况下单个grid组件最多只能放上下两个x轴,
          // 多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
          type: 'value', // 坐标轴类型,分别有：
          // 'value'-数值轴；'category'-类目轴;
          // 'time'-时间轴;'log'-对数轴
          splitLine: {show: false}, // 坐标轴在 grid 区域中的分隔线
          axisLabel: {show: false}, // 坐标轴刻度标签
          axisTick: {show: false}, // 坐标轴刻度
          axisLine: {show: false}// 坐标轴轴线
        },
        yAxis: {
          type: 'category',
          axisTick: {show: false},
          axisLine: {show: false},
          axisLabel: {
            color: 'black',
            fontSize: 36
          },
          data: ['']// 类目数据，在类目轴（type: 'category'）中有效。
          // 如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [// 系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: '%', // 系列名称
            type: 'bar', // 柱状、条形图
            barWidth: 19, // 柱条的宽度,默认自适应
            data: [80], // 系列中数据内容数组
            label: { // 图形上的文本标签
              show: true,
              position: 'right', // 标签的位置
              offset: [0, -30], // 标签文字的偏移，此处表示向上偏移40
              formatter: '{c}{a}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: 'rgb(70, 162, 214)', // 标签字体颜色
              fontSize: 24 // 标签字号
            },
            itemStyle: {// 图形样式
              normal: { // normal 图形在默认状态下的样式;
                // emphasis图形在高亮状态下的样式
                barBorderRadius: 10, // 柱条圆角半径,单位px.
                // 此处统一设置4个角的圆角大小;
                // 也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
                color: 'rgb(70, 162, 214)'
              }
            },
            zlevel: 1// 柱状图所有图形的 zlevel 值,
            // zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: '进度条背景',
            type: 'bar',
            barGap: '-100%', // 不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            // 并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 19,
            color: 'rgba(128, 128, 128, 0.1)',
            data: [100, 100, 100],
            itemStyle: {
              normal: {
                barBorderRadius: 10
              }
            }
          }
        ]
      }
      useImp.setOption(optionsUse, true)
      var myChart5 = this.$echarts.init(document.getElementById('mainDriver5'))
      var myChart6 = this.$echarts.init(document.getElementById('mainDriver6'))
      var lineOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [820, 430, 901, 1700, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          name: '收入趋势'
        }],
        legend: {
          data: ['收入趋势'],
          x: '40px',
          y: '100px',
          textStyle: {
            color: 'red'
          }
        }
      }
      var lineOption1 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          data: [820, 430, 901, 1700, 1600, 1840, 2600],
          type: 'line',
          smooth: true,
          name: '利润趋势'
        }],
        legend: {
          data: ['利润趋势'],
          x: '40px',
          y: '100px',
          textStyle: {
            color: 'red'
          }
        }
      }
      myChart5.setOption(lineOption, true)
      myChart6.setOption(lineOption1, true)
      var lineTable = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          show: false,
          data: ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7']
        }],
        yAxis: [{
          type: 'value',
          show: false
        }],
        series: [{
          name: 'SA服务',
          type: 'line',
          stack: '总量',
          smooth: true,
          areaStyle: {
            normal: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'red' },
                { offset: 0.5, color: 'pink' },
                { offset: 1, color: 'black' }
              ])
            }
          }, // 填充区域样式
          lineStyle: {
            color: 'rgb(87, 117, 85)',
            width: 1
          }, // 线条的样式
          itemStyle: {
            color: 'rgb(70, 162, 214)',
            opacity: 0 // 为0不会绘制图形拐点消失
          }, // 拐点的样式
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '等号',
          type: 'line',
          stack: '总量',
          smooth: true,
          areaStyle: {
            normal: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'red' },
                { offset: 0.5, color: 'pink' },
                { offset: 1, color: 'black' }
              ])
            }
          }, // 填充区域样式
          lineStyle: {
            color: 'rgb(87, 117, 85)',
            width: 1
          }, // 线条的样式
          itemStyle: {
            color: 'rgb(87, 117, 85)',
            opacity: 0 // 为0不会绘制图形拐点消失
          }, // 拐点的样式
          data: [220, 182, 191, 234, 290, 330, 310]
        }]
      }
      var lineTableCon = this.$echarts.init(document.getElementById('lineTable'))
      lineTableCon.setOption(lineTable, true)
      var mainTargetDriver = this.$echarts.init(document.getElementById('mainTargetDriver'))
      var constructor = this.$echarts.init(document.getElementById('constructor'))
      var mainTarget = {
        color: ['#00aced', '#ffab00', '#2bc38f', '#b0cd3b', '#dc6263', '#4b70c6', '#e6b9b8', '#b4b8ca', '#ffeada', '#8064a2'],
        series: [
          {
            name: '',
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['45%', '55%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: function (params, ticket, callback) {
                  var name = params.data.name
                  var arr = name.split(':')
                  var percent = params.percent
                  var str = arr[0] + '占比\n' + percent + '%'
                  return str
                },
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 30.41,
                name: '01:30.41亿',
                label: {
                  normal: {
                    fontSize: 18,
                    color: '#585F6E',
                    fontWeight: 'bolder'
                  }
                },
                itemStyle: {
                  normal: {
                    shadowColor: 'rgba(34,192,245,0.8)',
                    shadowBlur: 10
                  }
                }
              },
              {
                value: 10.75,
                name: '02:10.75亿'
              }
            ]
          }
        ]
      }
      var mainTargetConstr = {
        color: ['#00aced', '#ffab00', '#2bc38f', '#8064a2', '#b0cd3b', '#dc6263', '#4b70c6', '#e6b9b8', '#b4b8ca', '#ffeada'],
        series: [
          {
            name: '',
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['45%', '55%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: function (params, ticket, callback) {
                  var name = params.data.name
                  var arr = name.split(':')
                  var percent = params.percent
                  var str = arr[0] + '占比\n' + percent + '%'
                  return str
                },
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 30.41,
                name: '01:30.41亿'
              },
              {
                value: 10.75,
                name: '02:10.75亿'
              },
              {
                value: 10.75,
                name: '03:10.75亿'
              },
              {
                value: 10.75,
                name: '04:10.75亿'
              }
            ]
          }
        ]
      }
      constructor.setOption(mainTargetConstr, true)
      constructor.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0})
      constructor.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          constructor.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index})
        }
      })
      constructor.on('mouseout', function (e) {
        index = e.dataIndex
        constructor.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex})
      })
      setInterval(function () {
        mainTarget.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        mainTargetDriver.setOption(mainTarget, true)
        mainTargetDriver.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0})
      }, 2000)
      var index = 0
      mainTargetDriver.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          mainTargetDriver.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index})
        }
      })
      mainTargetDriver.on('mouseout', function (e) {
        index = e.dataIndex
        mainTargetDriver.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex})
      })
    },
    drawPsnHr () {
      var psnHr = this.$echarts.init(document.getElementById('psnHr'))
      var option = {
        series: [
          {
            name: '人员类型',
            type: 'pie',
            radius: ['50%', '34%'],
            color: ['#00FFFF', '#FEBE12', '#44EAB1', '#7BDD43', '#EBEC2F', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 5,
                lineStyle: {
                  width: 2
                }
              }
            },
            label: {
              normal: {
                formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                rich: {
                  b: {
                    fontSize: 10,
                    color: '#12EABE',
                    align: 'left',
                    padding: 4
                  },
                  hr: {
                    borderColor: '#12EABE',
                    width: '100%',
                    borderWidth: 2,
                    height: 0
                  },
                  d: {
                    fontSize: 10,
                    color: '#fff',
                    align: 'left',
                    padding: 4
                  },
                  c: {
                    fontSize: 10,
                    color: '#fff',
                    align: 'left',
                    padding: 4
                  }
                }
              }
            },
            data: [{
              value: 100,
              name: '管理类'
            },
            {
              value: 800,
              name: '工作类'
            }]
          }
        ]
      }
      psnHr.setOption(option, true)
    },
    goPage (page) {
      console.log(page)
      if (page === 'Left') {
        // 中屏
        this.$router.push({
          path: '/Left'
        })
      } else if (page === 'Right') {
        //
        this.$router.push({
          path: '/Right'
        })
      } else {
        // 左屏
        this.$router.push({
          path: '/'
        })
      }
    },
    addMonth (type) {
      var _this = this
      switch (type) {
        case 1:
          _this.TotalContro = 99.8
          _this.PsnConfig = 99
          _this.PsnAdd = 11
          _this.PsnLeave = 6
          _this.PsnHappy = 48
          _this.psnAccount = 35980
          break
        case 2:
          _this.TotalContro = 8
          _this.PsnConfig = 94
          _this.PsnAdd = 4
          _this.PsnLeave = 5
          _this.PsnHappy = 80
          _this.psnAccount = 36129
          break
        case 3:
          _this.TotalContro = 12
          _this.PsnConfig = 95
          _this.PsnAdd = 13
          _this.PsnLeave = 4
          _this.PsnHappy = 56
          _this.psnAccount = 36087
          break
        case 4:
          _this.TotalContro = 20
          _this.PsnConfig = 97
          _this.PsnAdd = 33
          _this.PsnLeave = 8
          _this.PsnHappy = 80
          _this.psnAccount = 36409
          break
        case 5:
          _this.TotalContro = 31
          _this.PsnConfig = 100
          _this.PsnAdd = 35
          _this.PsnLeave = 5
          _this.PsnHappy = 56
          _this.psnAccount = 37309
          break
        case 6:
          _this.TotalContro = 42
          _this.PsnConfig = 100
          _this.PsnAdd = 31
          _this.PsnLeave = 25
          _this.PsnHappy = 60
          _this.psnAccount = 38449
          break
        case 7:
          _this.TotalContro = 54
          _this.PsnConfig = 97
          _this.PsnAdd = 3
          _this.PsnLeave = 39
          _this.PsnHappy = 47
          _this.psnAccount = 38649
          break
        case 8:
          _this.TotalContro = 63
          _this.PsnConfig = 99
          _this.PsnAdd = 43
          _this.PsnLeave = 23
          _this.PsnHappy = 70
          _this.psnAccount = 37249
          break
        case 9:
          _this.TotalContro = 70
          _this.PsnConfig = 100
          _this.PsnAdd = 34
          _this.PsnLeave = 20
          _this.PsnHappy = 56
          _this.psnAccount = 37949
          break
        case 10:
          _this.TotalContro = 78
          _this.PsnConfig = 99
          _this.PsnAdd = 23
          _this.PsnLeave = 30
          _this.PsnHappy = 50
          _this.psnAccount = 38449
          break
        case 11:
          _this.TotalContro = 86
          _this.PsnConfig = 98
          _this.PsnAdd = 13
          _this.PsnLeave = 21
          _this.PsnHappy = 56
          _this.psnAccount = 38149
          break
        case 12:
          _this.TotalContro = 93.4
          _this.PsnConfig = 98
          _this.PsnAdd = 7
          _this.PsnLeave = 10
          _this.PsnHappy = 30
          _this.psnAccount = 37829
          break
        default:
          _this.TotalContro = 93.4
          _this.PsnConfig = 98
          _this.PsnAdd = 7
          _this.PsnLeave = 10
          _this.PsnHappy = 30
          _this.psnAccount = 37829
          break
      }
      // 发送操作指令给中屏
      const obj = {
        type: 'OpenMonth',
        num: type
      }
      this.websocket.send(JSON.stringify(obj))
      this.drawDriver()
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
      // 此屏相当于操作屏 不做接收数据处理
      // // 客户端接收服务端数据时触发
      // vm.websocket.onmessage = function (evt) {
      //   const obj = JSON.parse(evt.data)
      //   if (obj.type === 'Mid') {
      //     // vm.$router.push({
      //     //   path: '/Leader'
      //     // })
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
      // 通信发生错误时触发
      vm.websocket.onerror = function () { // 如果请求出错则再次连接
        vm.initWebSocket()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bgColor{
    background: pink;
    overflow: hidden;
    background: url(../../assets/Driver.jpeg) repeat-x;
    background-size: 100% 100%;
    background-attachment:fixed;
  }
  #mainDriver{
    z-index: 99999;
    //margin: 17% auto;
    position: absolute;
    left: 39%;
    top:26%;
  }
  #mainDriver1{         //人员配置率
    z-index: 99999;
    /*margin: 15% 25% 25%;*/
    position: absolute;
    left: 65%;
    top: 28%;
  }
  #mainDriver4{         //员工满意度
    z-index: 99999;
    /*margin: 15% 65% 25%;*/
    position: absolute;
    left: 65%;
    top: 50%;
  }
  #mainDriver2{         //人员流失率
    z-index: 99999;
    /*margin: 25% 25% 25%;*/
    position: absolute;
    left: 28%;
    top: 50%;
  }
  #mainDriver3{       //净增员率
    z-index: 99999;
    /*margin: 25% 65% 25%;*/
    position: absolute;
    left: 28%;
    top: 28%;
  }
  #mainDriver5{
    z-index: 99999;
    /*margin: 35% 25%;*/
    position: absolute;
    left: 28%;
    top: 63%;
  }
  #mainDriver6{
    z-index: 99999;
    /*margin: 35% 25%;*/
    position: absolute;
    left: 65%;
    top: 63%;
  }
  @font-face {
    font-family: 'UnidreamLED';
    src:url(../../assets/UnidreamLED/UnidreamLED.eot); /***兼容ie9***/
    src:url(../../assets/UnidreamLED/UnidreamLED.eot?#iefix)format('embedded-opentype'), /***兼容ie6-ie8***/
    url('../../assets/UnidreamLED/UnidreamLED.woff') format('woff'),
    local('UnidreamLED'), url("../../assets/UnidreamLED/UnidreamLED.woff");/***默认使用本地的***/
  }
  .fontNum{             //营业收入
    z-index: 99999;
    position: absolute;
    left: 30%;
    top: 8%;
    font-size: 64px;
    color: rgb(70, 162, 214);
  }
  .fontNum2{            //利润总额
    z-index: 99999;
    position: absolute;
    left: 57%;
    top: 8%;
    font-size: 64px;
    color: rgb(70, 162, 214);
  }
  .fontNum span{
    font-family: UnidreamLED;
  }
  .fontNum2 span{
    font-family: UnidreamLED;
  }
  .TimeClass {        //时间戳
    color: white;
    position: absolute;
    z-index: 99999;
    left: 7%;
    top: 65px;
  }
  .TimeClass2 {       //时间戳
    color: white;
    position: absolute;
    z-index: 99999;
    left: 77%;
    top: 65px;
  }
  #mainTargetDriver{    //01占比
    position: absolute;
    z-index: 99999;
    left: 2%;
    top: 15%;
  }
  #constructor{   //01占比
    position: absolute;
    z-index: 99999;
    left: 13%;
    top: 15%;
  }
  .mainTarget{    //财务关键指标
    position: absolute;
    z-index: 99999;
    left: 3%;
    top: 15%;
    color: #f0f0f0;
    font-size: 14px;
  }
  .mainAccount{     //收入利润构成
    position: absolute;
    z-index: 99999;
    left: 13%;
    top: 15%;
    color: #f0f0f0;
    font-size: 14px;
  }
  #lineTable{       //折线图
    position: absolute;
    z-index: 99999;
    left: 0.2%;
    top: 38%;
  }
  .canUse{          //可用资金量
    position: absolute;
    z-index: 99999;
    left: 5%;
    top: 37%;
    color: beige;
    font-size: 14px;
    font-weight: 900;
  }
  .canUse2{         //本月到期债务
    position: absolute;
    z-index: 99999;
    left: 15%;
    top: 37%;
    color: beige;
    font-size: 14px;
    font-weight: 900;
  }
  #useImp{        //
    position: absolute;
    z-index: 99999;
    left: 0;
    top: 55%;
    color: beige;
    font-size: 14px;
    font-weight: 900;
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
  #toLeft{        //
      position: absolute;
      z-index: 99999;
      left: 0;
      top: 55%;
      color: beige;
      font-size: 14px;
      font-weight: 900;
    }
  #toRight{        //
      position: absolute;
      z-index: 99999;
      left: 0;
      top: 55%;
      color: beige;
      font-size: 14px;
      font-weight: 900;
    }
  #fresh{        //
    position: absolute;
    z-index: 99999;
    left: 0;
    top: 5%;
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
  #psnHr{         //工作类
    position: absolute;
    z-index: 99999;
    left: 80%;
    top: 53%;
  }
  .moveTable{     //排名
    position: absolute;
    z-index: 99999;
    left: 78.5%;
    top: 7%
  }
  /deep/ .el-button{
   background: rgba(255, 255, 255, 0);
   color: #00d4ff;
   border: 0
  }
</style>
