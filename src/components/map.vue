<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="mapCom" class="comBox">
      <map name="imgMap" class="map" id="imgMap">
        <area shape="rect" coords="20,20,80,80" href="#rect" alt="矩形" class="rect" title="12345">
        <area shape="circle" coords="200,50,50" href="#circle" alt="圆形">
        <area shape="poly" coords="150,100,200,120,180,130,190,180,150,150,100,160,140,120,100,110" href="#poly" alt="多边形">
      </map>
      <img src="./images/timg.jpg" alt="" width="400px" height="400px" usemap="#imgMap">
      <a href="#a">aaaa    <a href="#b">bbbbb</a></a>

    </div>
</template>

<script>
    export default {
        name: 'mapCom',
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

<style rel="stylesheet" lang="scss" scoped>
    #mapCom {
      .rect{
        outline: 2px solid #ff9999;
      }
    }
</style>
