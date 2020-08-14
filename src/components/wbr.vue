<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="demoCom">
        <div class="box box1">
          CanvasRenderingContext2D.globalCompositeOperation
        </div>
      <div class="box box2">
        Canvas<wbr>Rendering<wbr>Context2D<wbr>.global<wbr>Composite<wbr>Operation
      </div>
      <van-button type="default">默认按钮</van-button>
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
          var obj1 = {
            x: 3,
            y: 4,
            arr: [1,2,3],
            get r () {
              return Math.sqrt(this.x*this.x + this.y*this.y)
            },
            set r (newVal) {
              console.log('newVal',newVal)
              var oldVal = Math.sqrt(this.x*this.x + this.y*this.y);
              var ratio = newVal/oldVal
              this.x *= ratio;
              this.y *= ratio;
              console.log(this.x,this.y)
            }
          }
          console.log(obj1.r)
          try {
             obj1.r = 6;
          } catch (error) {
            console.log(error)
          }
          console.log(Object.getOwnPropertyDescriptor(obj1,'r'))
          console.log(Object.getOwnPropertyDescriptor(obj1,'x'))
          var bool = Object.defineProperty(obj1,'x',{
            value: 7,
            writable: false,
            enumerable: true,
            configurable: true,
          })
          var bool2 = Object.defineProperty(obj1,'arr',{
            writable: true,
          })
          console.log('arr',Object.getOwnPropertyDescriptor(obj1,'arr'))
          obj1.arr = [2]
          console.log('arr222',obj1.arr)
          console.log('bool',bool)
            try {
             obj1.x = 8;
          } catch (error) {
            console.log(error)
          }
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
