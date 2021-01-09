<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
  <!--js组件用途
    使用document.scrollingElement 控制窗体滚动高度 解决了最外围的body滚动问题
    使用wavesurfer.js显示mp3 audio音频的波形图
  -->
  <div id="js" class="comBox">
    <!--<ul class="scrollingElement">-->
    <!--<li class="item" v-for="item in 100" :key="item">{{item}}</li>-->
    <!--<li @click="btnClick('toTop')">回到顶部</li>-->
    <!--</ul>-->
    <div id="waveform"></div>
    <el-button type="primary" @click="btnClick('Notification')">Notification</el-button>
    <el-button type="primary" @click="btnClick('provideChange')">provideChange</el-button>
    <div :title="str">{{str2}}</div>
    <div id="list">
      <div id="aaa">aaa</div>
      <ul id="bbb" @click="weituoClick">
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
    </div>
    <input-container
      @focus="containerFocus"
      @change="containerChange"
      v-bind="user"
      aaa="aaaa"
      bbb="bbbb"
      type="password"
    >
      <template v-slot:header>Header content1112222</template>
      <template v-slot:label2>4444</template>
    </input-container>
    <div
      v-html="`<span style='color: #f00'>v-html</span>`"
      :style="inputValue && `font-size: 20px;`"
      :class="[inputValue && 'aaa','bbb']"
    ></div>
    <template v-if="inputValue">
      <div>v-if</div>
    </template>
    <template v-show="inputValue">
      <div>v-show</div>
    </template>

    <!-- <template v-for="(item,index) of list">
          <div :key="index" @click="itemClick(item,$event)">{{item}}</div>
    </template>-->
    <ul style="height: 200px;overflow: auto;" @scroll="scroll"  @click="itemClick">
      <li v-for="(item,index) of 100" :key="index">{{item}}</li>
    </ul>
    <div @click.self="$alert('123','3333')">
      out
      <span @click.stop="inClick">in</span>
    </div>
    <div>
      <el-button @click="show = !show" :disabled="btnDisabled" type="primary">Toggle</el-button>
    </div>

    <transition
      name="fade" appear mode="out-in"
      @enter="enter"
      @leave="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="show" class="hello" key="key1">hello</p>
        <p v-if="!show" class="hello" style="background: blue" key="key2">hello</p>
    </transition>
     <!-- <transition mode="out-in"
      name="fade" appear
      @enter="enter"
      @leave="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
    
    </transition> -->
    <transition appear
   enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight fast"
    v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled">
    <p v-show="show" class="hello">hello</p>
    </transition>
    <p v-show="show" class="hello animated tada infinite delay-2s">hello</p>
     <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
     <transition-group name="list" tag="p">
    <span v-for="item in items" :key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
  <transition-group tag="ul" name="ul" class="ul">
    <li v-for="item in list" :key="item"
    class="li-item">{{item}}</li>
  </transition-group>
  <list></list>
  <g-input aaa.prop="aaaa"></g-input>
  </div>
</template>

<script>
import _ from 'lodash'
//    import '@/assets/js/wavesurfer.min.js';
import gInput from "./common/gInput";
import Container from "./common/container";
import $ from "jquery";
export default {
  name: "js",
  props: {},
  components: {
    gInput,
    inputContainer: Container
  },
  data() {
    return {
       items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10,
      btnDisabled: false,
      show: true,
      list: ["aa", "bb", "cc"],
      user: {
        name: "zhangsan",
        age: 44
      },
      inputValue: "",
      str2: "",
      str:
        "大连房价阿嗯啊大连房价奥斯卡了几分的卡垃圾袋发拉卡世纪东方垃圾地方来啊大分类进"
    };
  },
  computed: {},
  watch: {},
  created() {
    var flag = true;
    flag && this.fun1();
    // // console.log(33333);
    // // console.log(_)
  },
  mounted() {
    var a = "333";
    // // console.log(a instanceof String);
    // // console.log(typeof a);
    // // console.log(a.slice(1));
    this.str2 = this.str.slice(0, 10) + "..." + this.str.slice(-5);
    // // console.log(document.scrollingElement.scrollTop);
    var encodeData = btoa(123456);
    var decodeData = atob(encodeData);
    // // console.log(decodeData);

    //            var wavesurfer = WaveSurfer.create({
    //                container: '#waveform'
    //            });
    //            wavesurfer.load('//image.zhangxinxu.com/audio/zxx.mp3');
    var paramsString = "q=URLUtils.searchParams&topic=api&topic=api"; // location.search.slice(1)
    var searchParams = new URLSearchParams(paramsString);
    // // console.log("searchParams", searchParams.getAll("topic"));
    $("#list").on("mouseenter", () => {
      var timer = setTimeout(function() {
        $("#bbb").show();
      }, 300);
      $("#list").on("mouseleave", () => {
        clearTimeout(timer);
        $("#bbb").hide();
      });
    });
  },
  activated() {
    // 实现 深拷贝
    var obj = {name: 'zhangsan',age: 11,like: {book: '红楼梦'}}
    // function deepClone (o,newObj) {
    //   debugger
    //   for (var k in o) {
    //     if (typeof o[k] !== 'object') {
    //       newObj[k] = o[k]
    //     } else {
    //       var newObj2 = {};
    //       newObj[k] = newObj2;
    //       deepClone(o[k],newObj2)
    //     }
    //   }
    //   return newObj
    // }
    var obj3 = this.deepClone(obj,{})
    obj.like.book = "西游记"
    console.log('obj3',obj3)
    // 函数柯里化 实现单参数传参，逐层嵌套
    var fn1 = function (a,b) {
      return a +b
    }
    var curry  = function (fn) {
      return function (x) {
        return function (y) {
          return fn(x,y)
        }
      }
    }
    var curryFun = curry(fn1)
    
    console.log(curryFun(1)(5))
    // // console.log('process',process.env.NODE_ENV)
    var num = 1;
    var arr = [5, 1, 3, 6, 2, 4, 111, 22, 9];
    // // console.log("arr", arr);
    // // console.log(arr.length >> 1);
    // 冒泡排序
    // for (let i = 0;i<arr.length;i++) {
    //     for (let j = 0;j<arr.length - i - 1;j++) {
    //         if (arr[i] > arr[j]) {
    //             [arr[i],arr[j]] = [arr[j],arr[i]]
    //         }
    //     }
    // }
    // // // console.log('冒泡排序',arr)
    // 选择排序
    // for (let i = 0;i<arr.length;i++) {
    //     let minIndex = 0;
    //     for (let j = i + 1;j<arr.length;j++) {
    //         if (arr[j] < arr[i]) {
    //             minIndex = j
    //         }
    //     }
    //     minIndex && ([arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]);
    // }
    // // // console.log('选择排序',arr)
    // 插入排序
    // arr = [5,1,3]
    // for (let i = 1;i<arr.length;i++) {
    //     var cur = arr[i]
    //     for (let j = i - 1;j >=0;j--) {
    //         if (j - 1 >= 0) {
    //             if (arr[i] < arr[j] && (arr[i] > arr[j-1])) {
    //                 arr.splice(i,1)
    //                 arr.splice(j,0,cur)
    //                 // [arr[i],arr[j]] = [arr[j],arr[i]];
    //             }
    //         } else {
    //             if (arr[i] < arr[j]) {
    //                 arr.splice(i,1)
    //                 arr.splice(j,0,cur)
    //                 // [arr[i],arr[j]] = [arr[j],arr[i]]
    //             }
    //         }
    //     }
    //     // // console.log('arr',arr)
    // }
    // // // console.log('插入排序',arr)
    // 快速排序
    for (let i = 1; i < arr.length; i++) {}
    // // console.log(this.$myMethod())
  },
  deactivated() {},
  methods: {
    sum (n) {
      return function (n) {
        return n
      }
    },
    weituoClick() {
      // // console.log(arguments)
    },
    scroll() {
      // // console.log("sssss");
    },
    inClick() {
      alert(111);
    },
    ulClick(ev) {
      // // console.log("ulClick", ev);
    },
    itemClick(ev) {
      // // console.log('ev',ev.target.innerText)
      // console.log('ev',ev)
      // // // console.log('ev',ev.target.innerText)
    },
    containerFocus() {
      // // console.log("containerFocus");
    },
    containerChange(val) {
      this.inputValue = val;
      // // console.log("containerChange", val);
    },
    fun1() {
      // // console.log("fun1");
    },
     randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
     add: function () {
       this.list.push(this.nextNum++)
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
       this.list.splice(this.list.length - 1,1)
      this.items.splice(this.randomIndex(), 1)
    },
    btnClick(from) {
      switch (from) {
        case "toTop":
          document.scrollingElement.scrollTop = 0;
          break;
        case "provideChange":
          // // console.log(this.$root);
          // this.$root.$provide.provideObj.age++
          break;
        case "Notification":
          Notification.requestPermission().then(function(res) {
            // // console.log(res);
            if (res !== "granted") return;

            var notice = new Notification("这是一个通知", {
              dir: "auto",
              body: "通知的内容",
              tag: "div",
              icon: "//image.zhangxinxu.com/image/study/s/s128/mm1.jpg",
              data: "datadata123", // 用来传参
              vibrate: [200, 100, 200],
              renotify: true,
              silent: false,
              sticky: false
            });
            setTimeout(function() {
              notice.close();
            }, 2000);
            notice.onclick = function() {
              // // console.log("点击了通知:" + notice.data);
              notice.close();
            };
            // result可能是是granted, denied, 或default.
          });
          break;
      }
    },
    beforeEnter: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      this.btnDisabled = true;
      // ...
    },
    afterEnter: function(el) {
       this.btnDisabled = false;
      // // console.log('afterEnter')
      // ...
    },
    enterCancelled: function(el) {
      // ...
       // // console.log('enterCancelled')
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      done();
    },
    afterLeave: function(el) {
      this.btnDisabled = false;
       // // console.log('afterLeave')
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
       // // console.log('leaveCancelled')
      // ...
    }
  }
};
</script>

<style rel="stylesheet" lang="scss" scoped>
#js {
}
#list {
  width: 200px;
  line-height: 2em;
  position: relative;
  background: yellow;
  #bbb {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 200px;
    display: none;
    background: red;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.hello {
  display: inline-block;
  width: 200px;
  line-height: 100px;
  background: #f00;
}
.list-item {
   transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
.ul{
  width: 300px;
}
.li-item{
  font-size: 20px;
  line-height: 3em;
  border-bottom: 1px solid #ddd;
  background: #f99;
}
.ul-enter-active,.ul-leave-active{
   transition: all 1s;
}
.ul-enter,.ul-leave-to{
    opacity: 0;
  transform: translateX(-100%);
}
</style>
