<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div class="comBox" id="barrage">
    <div class="box"></div>
    <el-input v-model.trim="inputValue" placeholder="请输入"></el-input>
    <el-button @click="btnClick2">open</el-button>
    <el-button @click="btnClick">确定</el-button>
    <a href="javascript:void 0" @click="$alert('123','1234')">aaaaaa</a>
    <a href="javascript:void 0" @click="$alert('123','1234')">bbbbb</a>
    <label id="htmlEle" for="ccc">htmlEle</label>
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
      document.getElementById('htmlEle').className = 'aaaa'
      document.getElementById('htmlEle').htmlFor = 'bbbb'
      // $('#htmlEle').attr('for','123')
      for (let i = 0;i<5;i++) {
        setTimeout(() => {
          // console.log(i)
        },500)
      }
      {
        var k = 1;
      }
      {
        var k = 2;
      }
      // console.log('k',k)
     
    },
    activated() {
      const PI = 3.14;
      // PI = 3.15
      // console.log('PI',PI)
     // console.log(/\d+?a/.test('123a'))
      // var arr = [(x*x) for(x in [1,2,3,4]){return x%2 === 0}]
      var  arr = [1,3,2,6,4]
      // console.log(arr.sort((x,y)=>y-x))
    },
    deactivated() {
    },
    watch: {},
    methods: {
      btnClick() {
        window.close()
        var time = new Date().getTime()
        $('.box').append(`<span class="${time}">${this.inputValue}</span>`);
        this.$nextTick(() => {
          var width = $(`.${time}`).width();
          $(`.${time}`).css('color', '#f00').animate({left: `-${width}px`}, 4000, 'linear')
        })
      },
      btnClick2() {
          window.open('','qrcode','channelmode=yes,height=100, width=400, top=300, left=200, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
        
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
