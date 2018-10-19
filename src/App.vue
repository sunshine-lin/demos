<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style rel="stylesheet" lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
