<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="demoCom">
      <div id="container" style="width:500px;height:500px;"></div>
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
          let map = new BMap.Map("container");
          let point = new BMap.Point(116.404, 39.915);
          map.centerAndZoom(point, 15);
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
    }
</style>
