<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="demoCom">
        <div class="box box1">
          CanvasRenderingContext2D.globalCompositeOperation
        </div>
      <div class="box box2">
        Canvas<wbr>Rendering<wbr>Context2D<wbr>.global<wbr>Composite<wbr>Operation
      </div>
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
        width: 100px;
        height:100px;
        border: 1px solid #ddd;
        background: #f99;
        /*word-break: break-all;*/
      }
      .box1{
        word-break: break-all;
      }
      .box2{
        animation: resize 3s infinite both alternate;
      }

    }
  @keyframes resize  {
    0% {width: 100px;}
    100% {width: 300px;}
  }
</style>
