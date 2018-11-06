<template>
  <div class="comBox" id="indexCom">
    <el-row>
      <el-col v-for="(item,index) in routerList" :key="`router_${index}`"
              :xs="8" :sm="6" :md="4" :lg="3" :xl="2" class="colItem">
        <router-link :to="{name: item.name}" >{{item.text}}</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'indexCom',
  data () {
    return {
        routerList: [
            {text: '锚点滚动',name: 'anchor'},
            {text: '表格边框大小',name: 'elTable'},
            {text: '百度地图',name: 'baiduMap'},
            {text: 'echarts图表',name: 'echarts'},
            {text: '页面滚动平滑',name: 'bootstrap'},
            {text: '滚动条美化',name: 'happyScroll'},
            {text: '二维码带图片',name: 'qrCode'},
            {text: '复制黏贴',name: 'copy'},
            {text: '导航栏悬浮',name: 'nav'},
            {text: 'wbr英文换行',name: 'wbr'},
            {text: '购物车动画',name: 'shoppingCart'},
        ]
    }
  }
}
</script>

<style lang="scss">
  #indexCom{
    padding: 30px;
    background: #f2f2f2;
    .colItem{
      font-size: 16px;
      line-height: 2em;
      text-align: center;
      border: 1px solid #ddd;
      background: #fff;
      margin-bottom: 15px;
    }
  }
</style>
