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
  }
</style>
