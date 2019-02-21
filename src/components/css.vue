<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div id="cssCom" class="comBox">
    <img src="./images/meinv.jpg" alt="美女" class="filter"
    :style="`filter:${`${filterStyle.label}(${rangeValue?(rangeValue +'%') : filterStyle.value})`}`">
    <el-slider v-model="rangeValue"></el-slider>
    <el-select v-model="filterStyle"
               default-first-option
               filterable clearable placeholder="请选择" value-key="value"
               @change="selectChange">
      <span slot="prefix">
        <i class="el-icon-search el-input__icon"></i>
      </span>
      <el-option
        v-for="item in filterList" :key="item.value"
        :label="`${item.label}(${item.value})`" :value="item">
      </el-option>
    </el-select>
    <!-- text-combine-upright 文字竖向排列显示 -->
    <div class="text-combine-uprightBox">
      <p lang="zh-Hant">民國<span class="num">105</span
      >年<span class="num">4</span
      >月<span class="num">29</span>日</p>
    </div>
    <div class="text-decoration">
      红色波浪形下划线
    </div>
    <div class="text-overflow" style="width:100px">   暗地里附近奥if静安寺路口的附近阿里山的风景阿斯兰的积分   </div>
    <div class="text-transform">Iam is My favorite things</div>
    <span class="scale">scale</span>
    <div class="underlineBox">实现下划线动画</div>
    <!--伪类-->
    <a href="#1" class="link">www.baidu.com</a>
    <a href="#233" class="link">www.baidu.com</a>
    <a href="#333" class="link">www.baidu.com</a>
    <a href="./images/logo.png" download>downloadImage</a>
    <div class="gradientBox"></div>
    <div class="fit-content">
      1234
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cssCom',
    data() {
      return {
        filterStyle: {},
        rangeValue: '',
        filterList: [
          {label: 'blur', value: '5px'},
          {label: 'brightness', value: '0.4'},
          {label: 'contrast', value: '200%'},
          {label: 'drop-shadow', value: 'drop-shadow(16px 16px 20px #000)'},
          {label: 'grayscale', value: '50%'},
          {label: 'hue-rotate', value: '90deg'},
          {label: 'invert', value: '75%'},
          {label: 'opacity', value: '25%'},
          {label: 'saturate', value: '30%'},
          {label: 'sepia', value: '60%'},
        ],
          num: -50
      }
    },
    created() {
    },
    mounted() {
        this.setColor();
    },
    activated() {
    },
    deactivated() {
    },
    watch: {},
    methods: {
      selectChange (val) {
        console.log(val)
        if (val === 'brightness') {

        }
      },
        setColor () {
          this.num += 2;
          if (this.num == 100) {
              this.num = -50;
          }
          document.querySelector('.gradientBox').style = `background: linear-gradient(60deg,#000 0%,#000 ${this.num}%, #D1D5E6 ${this.num}%,white ${this.num + 5}%,#D1D5E6 ${this.num + 10}%,#000 ${this.num + 15}%,#000)`
            window.requestAnimationFrame(()=>{
                this.setColor()
            })
        }
    }
  }
</script>

<style rel="stylesheet" lang="scss" scoped>
  #cssCom {
    .filter {
      /*filter: filter(5px);*/
      /*filter: brightness(0.4);*/
      /*filter: contrast(200%);*/
      /*filter: drop-shadow(16px 16px 20px #000);*/
      /*filter: grayscale(50%);*/
      /*filter: hue-rotate(90deg);*/
      /*filter: invert(75%);*/
      /*filter: opacity(25%);*/
      /*filter: saturate(30%);*/
      /*filter: sepia(60%);*/
    }
    .text-combine-uprightBox{
      writing-mode: vertical-rl; font: 24px serif;
      .num{
        text-combine-upright: all;
      }
    }
    .text-decoration:hover{
      text-decoration: underline wavy red;       /*红色波浪形下划线*/
    }
    .text-overflow{
      border: 1px solid red;
      white-space: pre;
      white-space: normal;
      color: #000;
      /*text-wrap: none;*/
      /*overflow: hidden;*/
      /*text-overflow: clip;*/
      text-overflow: "…";
      text-overflow: fade(5%);
      &:first-letter{
        font-size: 30px;
      }
      &::selection {
        color: gold;
        background: red;
      }
    }
    .text-transform{
      text-transform: uppercase;
      text-transform: lowercase;
      text-transform: capitalize;
      text-shadow: 5px 5px 5px black;
    }
    .scale{
      display: inline-block;
      /*position: absolute;*/
      color: #f00;
      transform: scale(0.8);
    }
    .underlineBox{
      text-decoration: red underline wavy;
      line-height: 50px;
    }
  }
  @viewport {
    zoom: 2;
  }
  .link{
    &:link{
      color: #17f3ff;
    }
    &:visited{
      color: red;
    }
    &:hover{
      color: yellow;
    }
    &:active {
      color: green;
    }

  }
  .gradientBox{
    width: 200px;
    height: 50px;
    outline: 1px solid #ddd;
    /*background: linear-gradient(45deg,0% #fff, 40% #000 , 60% #000 100% #fff);*/
    /*background: linear-gradient(45deg,#000 0%, #000 40%, #D1D5E6 45%,white 50%,#D1D5E6 55%,#000 60%,#000);*/
    /*animation: colorGradient 2s infinite;*/
  }
  /*@keyframes colorGradient {*/
    /*0% {*/
      /*background: linear-gradient(45deg,#000 0%, #000 0%, #D1D5E6 5%,white 10%,#D1D5E6 15%,#000 20%,#000)*/
    /*}*/
    /*20% {*/
      /*background: linear-gradient(45deg,#000 0%, #000 0%, #D1D5E6 25%,white 30%,#D1D5E6 35%,#000 40%,#000)*/
    /*}*/
    /*100% {*/
      /*background: linear-gradient(45deg,#000 0%, #000 70%, #D1D5E6 75%,white 80%,#D1D5E6 95%,#000 100%,#000)*/
    /*}*/
  /*}*/
  .fit-content{
    width: fit-content;
    background: #f99;
  }
</style>
