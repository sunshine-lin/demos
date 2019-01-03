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
          {label: 'drop-shadow', value: 'drop-shadow(16px 16px 20px blue)'},
          {label: 'grayscale', value: '50%'},
          {label: 'hue-rotate', value: '90deg'},
          {label: 'invert', value: '75%'},
          {label: 'opacity', value: '25%'},
          {label: 'saturate', value: '30%'},
          {label: 'sepia', value: '60%'},
        ]
      }
    },
    created() {
    },
    mounted() {
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
      /*filter: drop-shadow(16px 16px 20px blue);*/
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
      color: blue;
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
</style>
