<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <el-button type="primary" class="backToIndex" @click="$router.push('/')">回到首页</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  provide: {
    provideObj: {
      name: 'p111',
      age: '111'
    }
  },
};
</script>

<style rel="stylesheet" lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  .backToIndex {
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 9999;
  }
}
[v-cloak] {
  display: none;
}
</style>
