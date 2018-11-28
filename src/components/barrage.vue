<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div class="comBox" id="barrage">
    <div class="box"></div>
    <el-input v-model.trim="inputValue" placeholder="请输入"></el-input>
    <el-button @click="btnClick">确定</el-button>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: 'barrage',
    data() {
      return {
        inputValue: ''
      }
    },
    created() {
    },
    mounted() {
      for (let i = 0;i<5;i++) {
        setTimeout(() => {
          console.log(i)
        },500)
      }
      {
        var k = 1;
      }
      {
        var k = 2;
      }
      console.log('k',k)
    },
    activated() {
    },
    deactivated() {
    },
    watch: {},
    methods: {
      btnClick() {
        var time = new Date().getTime()
        $('.box').append(`<span class="${time}">${this.inputValue}</span>`);
        this.$nextTick(() => {
          var width = $(`.${time}`).width();
          $(`.${time}`).css('color', '#f00').animate({left: `-${width}px`}, 4000, 'linear')
        })
      },
    }
  }
</script>

<style rel="stylesheet" lang="scss">
  #barrage {
    .box {
      position: relative;
      width: 400px;
      height: 400px;
      background: #ff9999;
      overflow: hidden;
      span {
        position: absolute;
        left: 400px;
        top: 0;
        white-space: nowrap;
      }
    }
  }
</style>
