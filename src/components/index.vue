<template>
  <div class="comBox" id="indexCom">
    <el-row :gutter="10">
      <el-col v-for="(item,index) in routerList" :key="`router_${index}`"
              :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
        <router-link :to="{name: item.name}">{{item.text}}</router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #indexCom{

  }
</style>
