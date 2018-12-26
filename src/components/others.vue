<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="others">
        <el-button type="primary">登录中{{'.'.repeat(repeatNum)}}</el-button>
<<<<<<< HEAD
        <div v-once>日期：{{dateToFormat(new Date().getTime())}}</div>

            <ul :list="list" :style="styleObj" @click.self.prevent="ulClick('ul',$event)">
                <!--<template slot-scope="$list">-->
                <li v-for="n in list" style="border-bottom: 1px solid #ddd"
                    :data-indexNum="n">{{n}}
                </li>
                <!--</template>-->
            </ul>

        <!--@change="change('input',$event)"-->
        <input type="text" v-model.lazy="inputValue2" placeholder="请输入">
        <el-input v-model.lazy="inputValue"></el-input>
=======
      <div v-once>日期：{{dateToFormat(new Date().getTime())}}</div>
      <div class="box22">{{number}}</div>
      <div class="imgBox" :style="imgBoxStyle">
        <!--<img src="./images/timg.jpg" alt="">-->
      </div>
      <div class="mapBox"></div>
      <a href="http://www.baidu.com"></a>
      <a href="http://www.sina.com.cn"></a>
      <span class="book">书剑恩仇录</span>
      <span class="book">神雕侠侣</span>
      <div class="clipPath">
        文字被clip掉了 看不到了看不到了看不到了
      </div>
>>>>>>> c1bb7c52e7a61ac38b7f3d929687b9d563ad397b
    </div>
</template>

<script>
    export default {
        name: 'others',
        data() {
            return {
<<<<<<< HEAD
                repeatNum: 1,
                timer: null,
                list: 3,
                styleObj: {
                    fontSize: '16px',
                    color: '#f99',
                    lineHeight: '3em',
                    textAlign: 'center',
                    width: '300px',


                },
                inputValue: '',
                inputValue2: '',
=======
              repeatNum: 1,
              timer: null,
              number: 10,
              imgBoxStyle:{
                width: '200px',
                height: '200px',
              }
>>>>>>> c1bb7c52e7a61ac38b7f3d929687b9d563ad397b
            }
        },
        beforeCreate () {
          console.log('beforeCreate')
        },
        created() {
<<<<<<< HEAD
            console.log('globalData',this.$root.globalData)
            console.log('globalData',this.$root.globalData.age)
            this.$root.globalData.age +=1;
            console.log('globalData',this.$root.globalData.age)
        },
        mounted() {
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.repeatNum++
                if (this.repeatNum === 4) {
                    this.repeatNum = 1;
                }
            }, 300)
            let [x, y] = [1, 2];
            console.log(x, y)
            for (let i = 0; i < 5; i++) {
                [x, y] = [y, x + y];
=======
          console.log('created')
        },
        beforeMount () {
          console.log('beforeMount')
        },
        mounted() {
          console.log('mounted')
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
>>>>>>> c1bb7c52e7a61ac38b7f3d929687b9d563ad397b
//            console.log(x,y)
            }
            // 数组互换
            let arr = [{a: 1}, {b: 2}, {c: 3}];
            [arr[0], arr[2]] = [arr[2], arr[0]];
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
//            console.log(hw.next().value)
//            console.log(hw.next().value)
//            console.log(hw.next().value)
//
            async function a1(x) {
                if (x == 5) {
                    return await setTimeout(() => {
//                        console.log(111)
                    }, 2000)
                } else {
//                    await console.log(222)
                }
            }

            a1(5).then(() => {
//                console.log(333)
            })
        },
        activated() {
          class Person {
            constructor (name,age) {
              this.name = name;
              this.age = age;
            }
            static nicheng () {
              return console.log('zs')
            }
            into () {
              console.log(`我的名字${this.name}，年纪${this.age}也不小了`)
            }
          }
          var zhangsan = new Person('张三',33)

          zhangsan.into()
          Person.nicheng()
        },
        deactivated() {
        },
        watch: {
            inputValue (newval,oldVal) {
                console.log('newval,oldVal',newval,oldVal)
            },
            inputValue2 (newval,oldVal) {
                console.log('newval,oldVal',newval,oldVal)
            }
        },
        methods: {
            ulClick(from, ev) {
                console.log(ev.target.dataset.index)
                console.log('from,ev', from, ev)
            },
            change(from, ev) {
                console.log('from,ev', from, ev)
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>
    #others {
<<<<<<< HEAD
        .el-button {
            text-align: left;
            width: 100px;
        }
=======
      .el-button{
        text-align: left;
        width: 100px;
      }
      .box{
        color: #f00;
      }
      .imgBox{
        background: radial-gradient(#fff,#f00);
        /*filter: blur(3px);*/
      }
      .mapBox{
        width: 640px;
        height: 400px;
        outline: 1px solid #ddd;
        filter: brightness(50%) blur(1px) hue-rotate(180deg);
        background: {
          image: url('images/world2.jpg');
          size:  100% 100%;
          repeat: repeat-x;
          position-x: 5px;
        }
        animation: move 10s infinite linear;
      }
      @keyframes move {
        0% {
          background-position-x: 0px;
        }
        100% {
          background-position-x: 640px;
        }
      }
      a:before{
        content: attr(href);
        background: #46abf2;
      }
      .book{
        &::before{
          content: '<<'
        }
        &::after{
          content: '>>'
        }
      }
      .clipPath{
        width: 100px;
        height: 80px;
        text-align: center;
        line-height: 100px;
        background: #f00;
        clip-path: polygon(0 0,100% 0%, 50% 50%, 100% 100%, 0% 100%);
      }
>>>>>>> c1bb7c52e7a61ac38b7f3d929687b9d563ad397b
    }
</style>
