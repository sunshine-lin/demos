<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="others">
        <el-button type="primary">登录中{{'.'.repeat(repeatNum)}}</el-button>
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
      <ul>
        <li><data value="3967381398">迷你番茄酱</data></li>
        <li><data value="3967381399">巨无霸番茄酱</data></li>
        <li><data value="3967381400">超级巨无霸番茄酱</data></li>
      </ul>
      <span>40px</span>
      <small>单独small </small>

      <p>Type the following in the Run dialog: <kbd>cmd</kbd><br />Then click the OK button.</p>

      <span style="font-size:30px;">大字体<small>小字体<small>小小字体<small>小小小字体<small>小小小小字体</small></small></small></small></span>
      <audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
             controls="controls" volume="0.3">
        Your browser does not support the <code>audio</code> element.
      </audio>
      <base target="_blank">
      <iframe id="Example2"
              title="Example2"
              width="400"
              height="300"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://www.baidu.com"></iframe>
      <label>Choose a browser from this list:
        <input list="browsers" name="myBrowser" /></label>
      <datalist id="browsers">
        <option value="Chrome"/>
        <option value="Firefox"/>
        <option value="Internet Explorer"/>
        <option value="Opera"/>
        <option value="Safari"/>
      </datalist>
      <form action="test.php" method="post">
        <fieldset>
          <legend>Title</legend>
          <input type="radio" id="radio"> <label for="radio">Click me</label>
        </fieldset>
      </form>
      <p>Heat the oven to <meter min="200" max="500"
                                 value="350">350 degrees</meter>.</p>
      <progress value="70" max="100">70 %</progress>
    <div class="mapBox"></div>
    <a href="http://www.baidu.com"></a>
    <a href="http://www.sina.com.cn"></a>
    <span class="book">书剑恩仇录</span>
    <span class="book">神雕侠侣</span>
    <div class="clipPath">文字被clip掉了 看不到了看不到了看不到了</div>
    <div
      class="overflowBox"
    >阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232 阿什顿发阿发阿道夫阿道夫阿发阿什顿发按时 2</div>
    <div class="outlineBox"></div>
    <div
      class="overflowBox"
    >阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232阿道夫阿发恩爱232 阿什顿发阿发阿道夫阿道夫阿发阿什顿发按时 什顿发按时 什顿发按时 什顿发按时 什顿发按时 什顿发按时 什顿发按时 2</div>
    <el-button type="primary" @click="print">print</el-button>
    <div id="printArea" :style="printStyleObj">printAreaprintAreaprintAreaprintAreaprintArea</div>
    <div id="createElement"></div>
    <el-button type="primary" @click="btnClick('createElement')">createElement</el-button>
    <el-button type="primary" @click.once="btnClick('insertRule')">insertRule</el-button>
    <el-button type="primary" @click.once="btnClick('deleteRule')">deleteRule</el-button>
    <div id="counterBox" style="color: #f00">
      <div>counter</div>
      <div>counter</div>
      <div>counter</div>
    </div>
        <div class="email">
            <a href="mailto:1187181555@qq.com?subject=主题1&body=内容1">send mail</a>
        </div>
        <el-date-picker
                v-model="dateValueRange"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
        @change="changeCallBack($event,'dateRange')">
        </el-date-picker>
        <el-input v-model="dateDistance" readonly placeholder="多少天"></el-input>
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'static/lib/js/jquery.PrintArea.min.js';
export default {
  name: "others",
  data() {
    return {
      repeatNum: 1,
      timer: null,
      number: 10,
      imgBoxStyle: {
        width: "200px",
        height: "200px"
      },
      printStyleObj: {},
        dateValueRange: [],
        dateDistance: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.repeatNum++;
      if (this.repeatNum === 4) {
        this.repeatNum = 1;
      }
    }, 300);
    let [x, y] = [1, 2];
    console.log(x, y);
    for (let i = 0; i < 5; i++) {
      [x, y] = [y, x + y];
      //            console.log(x,y)
    }
    // 数组互换
    let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    [arr[0], arr[2]] = [arr[2], arr[0]];
    console.log(arr);
    // es6 字符串遍历
    let str = "abcdefg";
    for (let w of str) {
      //            console.log(w)
    }

    function* helloWorldGenerator() {
      yield "hello";
      yield "world";
      return "ending";
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
        }, 2000);
      } else {
        //                    await console.log(222)
      }
    }

    a1(5).then(() => {
      //                console.log(333)
    });
    console.log(document.styleSheets[0].cssRules[0].cssText)
    console.log(getComputedStyle(document.querySelector('#counterBox'),null))
     var s = document.styleSheets[document.styleSheets.length - 1];
      console.log('获取月份最后一天',(new Date(2011,1,0)).getDate())
      console.log('获取月份最后一天2',(new Date(2011,2,0)).getDate())
      console.log('获取月份最后一天3',(new Date()).getMonth() + 1);
  },
  activated() {
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      static nicheng() {
        return console.log("zs");
      }
      into() {
        console.log(`我的名字${this.name}，年纪${this.age}也不小了`);
      }
    }
    var zhangsan = new Person("张三", 33);

    zhangsan.into();
    Person.nicheng();
  },
  deactivated() {},
  watch: {
    inputValue(newval, oldVal) {
      console.log("newval,oldVal", newval, oldVal);
    },
    inputValue2(newval, oldVal) {
      console.log("newval,oldVal", newval, oldVal);
    }
  },
  methods: {
      changeCallBack (val,from) {
          switch (from) {
              case 'dateRange':
                  if (val) {
                    var d = new Date(val[1]).getTime() - new Date(val[0]).getTime();
                      this.dateDistance = d/(1000*60*60*24)
                  }
                  break;
          }
      },
    btnClick(from) {
      switch (from) {
        case "createElement":
          var span = `<span>adlfjaldfjadflj</span>`;
          $("#createElement").append(span);
          break;
        case "insertRule":
            console.log('insertRule');
            var rule = "#counterBox { font-size: 36px }";
            var styleSheetList = document.styleSheets[0];
            styleSheetList.insertRule(rule, 0);
            console.log('document.styleSheets[0]',document.styleSheets[0])
          break;
        case "deleteRule":
            console.log('deleteRule');
            var styleSheetList = document.styleSheets[0];
            styleSheetList.deleteRule(0);
          break;
      }
    },
    print() {
      var link = `<link rel="stylesheet" href="static/lib/css/print.css" media="print">`;
      $("head").prepend(link);
      // this.printStyleObj = {
      //   color: "#f00",
      //   fontSize: '40px',
      // };
      setTimeout(() => {
        $("#printArea").printArea();
        //  $('head').find('link').eq(0).remove()
        $("head")
          .find("link")
          .eq(0)
          .remove();
        // this.printStyleObj = {};
      }, 500);
    },
    ulClick(from, ev) {
      console.log(ev.target.dataset.index);
      console.log("from,ev", from, ev);
    },
    change(from, ev) {
      console.log("from,ev", from, ev);
    }
  }
};
</script>

<style rel="stylesheet" lang="scss">
#others {
  .el-button {
    text-align: left;
    width: 100px;
  }
  .box {
    color: #f00;
  }
  .imgBox {
    background: radial-gradient(#fff, #f00);
    /*filter: blur(3px);*/
  }
  .mapBox {
    width: 640px;
    height: 400px;
    outline: 1px solid #ddd;
    filter: brightness(50%) blur(1px) hue-rotate(180deg);
    background: {
      image: url("images/world2.jpg");
      size: 100% 100%;
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
  a:before {
    content: attr(href);
    background: #46abf2;
  }
  .book {
    &::before {
      content: "<<";
    }
    &::after {
      content: ">>";
    }
  }
  .clipPath {
    width: 100px;
    height: 80px;
    text-align: center;
    line-height: 100px;
    background: #f00;
    clip-path: polygon(0 0, 100% 0%, 50% 50%, 100% 100%, 0% 100%);
  }
  .overflowBox {
    width: 100px;
    outline: 10px solid #ddd;
    overflow-wrap: break-word;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .outlineBox {
    margin: 100px;
    width: 200px;
    height: 200px;
    // outline-color: #f00;
    // outline-width: 20px;
    // outline-style: solid;
    // outline-style: inset;
    // outline-radius: 10px;

    // 类似outline-radius
    border-radius: 1px;
    box-shadow: 0 0 0 10px #cd0000;
    background: #46abf2;
    animation: zizhuan 3000ms linear infinite;
    position: relative;
  }
  @keyframes zizhuan {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  counter-reset: section;
  #counterBox{
    // counter-reset: section;
    &::before{
      content: counter(section);
      counter-increment: section;
      input[list="browsers"]{
        -webkit-appearance: none;   /* google */
        -moz-appearance: none;  /* firefox */
        appearance: none;       /* IE */
      }
    }
  }
}
</style>
