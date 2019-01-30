<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div class="comBox" id="demoCom">
    <ul class="box">
      <el-scrollbar >
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>`
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </el-scrollbar>
    </ul>
    <ul class="box2">
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
        <li>09</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>`
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demoCom',
    data() {
      return {}
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
    methods: {}
  }
</script>

<style rel="stylesheet" lang="scss">
  @import "../assets/scss/main.scss";
  #demoCom {
    .box{
      width: 300px;
      height: 300px;
      border: 1px solid #ddd;
      li{
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        line-height: 3em;
      }
      // 放在公共common_pc.scss中了
      /*.el-scrollbar,.el-scrollbar__wrap,.el-scrollbar__view{*/
          /*height: 100%;*/
        /*}*/
      /*.el-scrollbar__wrap {*/
        /*overflow-x: hidden;*/
      /*}*/
    }
    .box2{
      width: 300px;
      height: 300px;
      border: 1px solid #ddd;
      overflow-y: auto;
      @extend %scrollbar;
      /*&::-webkit-scrollbar {!*滚动条整体样式*!*/
        /*width: 10px;     !*高宽分别对应横竖滚动条的尺寸*!*/
        /*height: 10px;*/
      /*}*/
      /*&::-webkit-scrollbar-thumb {!*滚动条里面小方块*!*/
        /*border-radius: 10px;*/
        /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
        /*background: #c5c5c5;*/
      /*}*/
      /*&::-webkit-scrollbar-track {!*滚动条里面轨道*!*/
        /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
        /*border-radius: 10px;*/
        /*background: #fff;*/
      /*}*/
      li{
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        line-height: 3em;
        width: 600px;
      }
    }
  }
</style>
