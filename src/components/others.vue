<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="others">
        <el-button type="primary">登录中{{'.'.repeat(repeatNum)}}</el-button>
      <div v-once>日期：{{dateToFormat(new Date().getTime())}}</div>
    </div>
</template>

<script>
    export default {
        name: 'others',
        data() {
            return {
              repeatNum: 1,
              timer: null,
            }
        },
        created() {
        },
        mounted() {
          clearInterval(this.timer)
          this.timer = setInterval(()=>{
            this.repeatNum ++
            if (this.repeatNum === 4) {
              this.repeatNum = 1;
            }
          },300)
          let [x,y] = [1,2];
          console.log(x,y)
          for (let i =0;i<5;i++) {
            [x,y] = [y,x+y];
//            console.log(x,y)
          }
          // 数组互换
          let arr = [{a:1},{b:2},{c:3}];
          [arr[0],arr[2]] = [arr[2],arr[0]];
          console.log(arr)
          // es6 字符串遍历
          let str = 'abcdefg';
          for (let w of str) {
//            console.log(w)
          }

          function* helloWorldGenerator() {
            yield 'hello';
            yield 'world';
            return 'ending';
          }

          var hw = helloWorldGenerator();
          console.log(hw.next().value)
          console.log(hw.next().value)
          console.log(hw.next().value)
          async function a1(x) {
            if (x == 5) {
              return await setTimeout(()=>{
                console.log(111)
              },2000)
            } else {
              await console.log(222)
            }
          }
          a1(5).then(()=>{
            console.log(333)
          })
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
    #others {
      .el-button{
        text-align: left;
        width: 100px;
      }
    }
</style>
