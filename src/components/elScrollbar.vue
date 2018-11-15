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
  }
</style>
