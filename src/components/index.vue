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
        ]
    }
  }
}
</script>

<style lang="scss">
  #indexCom{
    .colItem{
      font-size: 16px;
      line-height: 2em;
      text-align: center;
      border: 1px solid #ddd;
    }
  }
</style>
