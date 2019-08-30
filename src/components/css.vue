<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div id="cssCom">
    <header class="pageHeader">pageHeader</header>
    <section class="main">
      <img
        src="./images/meinv.jpg"
        alt="美女"
        class="filter"
        :style="`filter:${`${filterStyle.label}(${rangeValue?(rangeValue +'%') : filterStyle.value})`}`"
      />
      <el-slider v-model="rangeValue"></el-slider>
      <el-select
        v-model="filterStyle"
        default-first-option
        filterable
        clearable
        placeholder="请选择"
        value-key="value"
        @change="selectChange"
      >
        <span slot="prefix">
          <i class="el-icon-search el-input__icon"></i>
        </span>
        <el-option
          v-for="item in filterList"
          :key="item.value"
          :label="`${item.label}(${item.value})`"
          :value="item"
        ></el-option>
      </el-select>
      <!-- text-combine-upright 文字竖向排列显示 -->
      <div class="text-combine-uprightBox">
        <p lang="zh-Hant">
          民國
          <span class="num">105</span>年
          <span class="num">4</span>月
          <span class="num">29</span>日
        </p>
      </div>
      <div class="text-decoration">红色波浪形下划线</div>
      <div class="text-overflow" style="width:100px">暗地里附近奥if静安寺路口的附近阿里山的风景阿斯兰的积分</div>
      <div class="text-transform">Iam is My favorite things</div>
      <span class="scale">scale</span>
      <div class="underlineBox">实现下划线动画</div>
      <!--伪类-->
      <a href="#1" class="link">www.baidu.com</a>
      <a href="#233" class="link">www.baidu.com</a>
      <a href="#333" class="link">www.baidu.com</a>
      <a href="./images/logo.png" download>downloadImage</a>
      <div class="gradientBox"></div>
      <div class="fit-content">1234</div>
      <div class="yugutuBox">
        <ul class="yugutu">
          <li>111</li>
          <li>2222</li>
          <li>3333</li>
        </ul>
      </div>小标题1
      <!-- <div class="pageFooter">pageFooter</div> -->
      <div class="scss">
        <div class="scss-l">scss-l</div>
        <div class="scss-r">
          scss-r
          <span class="title">123123</span>
        </div>
        <div class="title">titletitle</div>
      </div>
      <img src="static/images/logo.png" alt class="logoImg" />
      <div class="borderRadius"></div>
      <div class="centerMiddle">
        <div>水平垂直居中1</div>
      </div>
      <div class="linear-gradient"></div>
      <div class="radial-gradient"></div>
      <div class="border-radius"></div>
      <div class="border-1px"></div>
      <div class="skew">
        <p>111</p>
        <p>222</p>
        <p>333</p>
      </div>
      <div class="h-v-center">
        <div>水平垂直居中啊啊啊啊</div>
      </div>
      <div class="flex">
        <div class="left">
          <p v-for="item in 100" :key="item">item</p>
        </div>
        <div class="right">right</div>
      </div>
      <div class="fi fi-doc">
        <div class="fi-content">doc</div>
      </div>
      <div class="fi fi-pdf">
        <div class="fi-content">pdf</div>
      </div>
    </section>
    <footer>
      footer
      <span class="iconfont">&#xe602;</span>
      <span class="iconfont icon-weixiuon"></span>

      <svg
        v-for="item in iconList"
        :key="`svg-${item}`"
        aria-hidden="true"
        style="fill: #f00;width:100px;height:100px;"
      >
        <use :xlink:href="item" />
      </svg>
    </footer>
  </div>
</template>

<script>
import _ from "underscore";
import "css-file-icons/build/css-file-icons.css";
import "@/assets/iconfont/Unicode.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
export default {
  name: "cssCom",
  data() {
    return {
      filterStyle: {},
      rangeValue: "",
      filterList: [
        { label: "blur", value: "5px" },
        { label: "brightness", value: "0.4" },
        { label: "contrast", value: "200%" },
        { label: "drop-shadow", value: "drop-shadow(16px 16px 20px #000)" },
        { label: "grayscale", value: "50%" },
        { label: "hue-rotate", value: "90deg" },
        { label: "invert", value: "75%" },
        { label: "opacity", value: "25%" },
        { label: "saturate", value: "30%" },
        { label: "sepia", value: "60%" }
      ],
      num: -50,
      iconList: ["#icon-weixiuon", "#icon-weixiubeijing"]
    };
  },
  created() {},
  mounted() {
    console.log(window.performance);
    console.log("mounted", Date.now());
    this.$nextTick(function() {
      console.log("nextTick", Date.now());
    });
    var mountedS = Date.now();
    console.log("domComplete", window.performance.timing.domComplete);
    // console.log('cha',window.performance.timing.domComplete - mountedS)
    this.setColor();
    $(window).on("orientationchange", function(ev) {
      if (window.orientation === 0) {
        $(".pageHeader,.pageFooter").css({ position: "fixed" });
        $("#cssCom").css({ padding: "100px 0" });
      } else {
        $(".pageHeader,.pageFooter").css({ position: "static" });
        $("#cssCom").css({ padding: 0 });
      }
    });
  },
  activated() {},
  deactivated() {},
  watch: {},
  methods: {
    selectChange(val) {
      console.log(val);
      if (val === "brightness") {
      }
    },
    setColor() {
      this.num += 2;
      if (this.num == 100) {
        this.num = -50;
      }
      document.querySelector(
        ".gradientBox"
      ).style = `background: linear-gradient(60deg,#000 0%,#000 ${
        this.num
      }%, #D1D5E6 ${this.num}%,white ${this.num + 5}%,#D1D5E6 ${this.num +
        10}%,#000 ${this.num + 15}%,#000)`;
      window.requestAnimationFrame(() => {
        this.setColor();
      });
    }
  }
};
</script>

<style rel="stylesheet" lang="scss" scoped>
#cssCom {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  .main {
    flex: 1;
    // height: 300px;
    padding: 30px;
  }
  footer {
    position: sticky;
    bottom: 0;
    left: 0;
    height: 100px;
    background: pink;
  }
  .filter {
    /*filter: filter(5px);*/
    /*filter: brightness(0.4);*/
    /*filter: contrast(200%);*/
    /*filter: drop-shadow(16px 16px 20px #000);*/
    /*filter: grayscale(50%);*/
    /*filter: hue-rotate(90deg);*/
    /*filter: invert(75%);*/
    /*filter: opacity(25%);*/
    /*filter: saturate(30%);*/
    /*filter: sepia(60%);*/
  }
  .text-combine-uprightBox {
    writing-mode: vertical-rl;
    font: 24px serif;
    .num {
      text-combine-upright: all;
    }
  }
  .text-decoration:hover {
    text-decoration: underline wavy red; /*红色波浪形下划线*/
  }
  .text-overflow {
    border: 1px solid red;
    white-space: pre;
    white-space: normal;
    color: #000;
    /*text-wrap: none;*/
    /*overflow: hidden;*/
    /*text-overflow: clip;*/
    text-overflow: "…";
    text-overflow: fade(5%);
    &:first-letter {
      font-size: 30px;
    }
    &::selection {
      color: gold;
      background: red;
    }
  }
  .text-transform {
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;
    text-shadow: 5px 5px 5px black;
  }
  .scale {
    display: inline-block;
    /*position: absolute;*/
    color: #f00;
    transform: scale(0.8);
  }
  .underlineBox {
    text-decoration: red underline wavy;
    line-height: 50px;
  }
}
@viewport {
  zoom: 2;
}
.link {
  &:link {
    color: #17f3ff;
  }
  &:visited {
    color: red;
  }
  &:hover {
    color: yellow;
  }
  &:active {
    color: green;
  }
}
.gradientBox {
  width: 200px;
  height: 50px;
  outline: 1px solid #ddd;
  /*background: linear-gradient(45deg,0% #fff, 40% #000 , 60% #000 100% #fff);*/
  /*background: linear-gradient(45deg,#000 0%, #000 40%, #D1D5E6 45%,white 50%,#D1D5E6 55%,#000 60%,#000);*/
  /*animation: colorGradient 2s infinite;*/
}
/*@keyframes colorGradient {*/
/*0% {*/
/*background: linear-gradient(45deg,#000 0%, #000 0%, #D1D5E6 5%,white 10%,#D1D5E6 15%,#000 20%,#000)*/
/*}*/
/*20% {*/
/*background: linear-gradient(45deg,#000 0%, #000 0%, #D1D5E6 25%,white 30%,#D1D5E6 35%,#000 40%,#000)*/
/*}*/
/*100% {*/
/*background: linear-gradient(45deg,#000 0%, #000 70%, #D1D5E6 75%,white 80%,#D1D5E6 95%,#000 100%,#000)*/
/*}*/
/*}*/
.fit-content {
  width: fit-content;
  background: #f99;
}
.pageHeader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: #f99;
}

.pageFooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #f99;
}
.yugutuBox {
  display: inline-block;
  width: 200px;
  transform: rotate(-30deg);
  height: 200px;
  width: 200px;
  background: transparent;
  border-right: 2px solid #000;
  &:after {
    content: "小标题1";
  }
}
.yugutu li {
  width: 100%;
  text-align: right;
  color: #000;
  font-size: 20px;
  transform: rotate(30deg) translate(-14px, -30px);
  // background: #ddd;
  line-height: 3em;
  border-top: 1px solid #ddd;
}
.scss {
  width: 100%;
  height: 100px;
  > div {
    border: 3px solid #ddd;
  }
  &-l {
    float: left;
    color: blue;
    ~ .title {
      color: green;
    }
  }
  &-r {
    float: left;
    width: 100 / 3 + "%";
    color: red;
  }
  > .title {
    width: 50px;
  }
}
.logoImg {
  width: 100px;
  animation: a1 5s linear infinite;
}
@keyframes a1 {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.borderRadius {
  border: 1px solid #ddd;
  width: 200px;
  height: 200px;
  border-radius: 50px 100px 150px 500px;
}
// 水平垂直居中的一方方式
.centerMiddle {
  width: 400px;
  height: 200px;
  position: relative;
  color: blue;
  border: 10px solid rgba(0, 0, 0, 0.5);
  background: green;
  background-clip: content-box;
  border-radius: 10px;
  outline: 10px solid currentColor;
  box-shadow: 0 0 0 10px currentColor;
  > div {
    width: fit-content;
    height: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.linear-gradient {
  width: 400px;
  height: 20px;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #000;
  margin: 50px;
  margin-left: 20px;
  background: linear-gradient(
    -45deg,
    #d9cfbb 25%,
    #c3b393 0,
    #c3b393 50%,
    #d9cfbb 0,
    #d9cfbb 75%,
    #c3b393 0
  );
  background-size: 16px 16px;
  animation: panoramic 20s linear infinite;
}
@keyframes panoramic {
  to {
    background-position: 100% 0;
  }
}
.radial-gradient {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    50px circle at 100px 0,
    white 20%,
    blue 0,
    blue 100%
  );
}
.border-radius {
  width: 400px;
  height: 300px;
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 50px 100px/100px;
  // border-top-left-radius: 50px 100px;
  // border-top-right-radius: 100px 50px;
}
.border-1px {
  width: 100px;
  height: 100px;
}
@media (max-resolution: 2dppx) {
  .border-radius {
    background: red;
  }
}
@media (min-resolution: 2dppx) {
  .border-radius {
    background: yellow;
  }
}
.skew {
  width: 200px;
  height: 200px;
  background: pink;
  transform: skewX(-45deg);
  p {
    transform: skewX(45deg);
  }
}
.h-v-center {
  width: 200px;
  height: 200px;
  background: orange;
  // display: flex;
  // div{
  //   margin: auto;
  // }

  // &::after{
  //    content:'';
  //   display: inline-block;
  //   height: 100%;
  //   vertical-align: middle;
  // }
  // text-align: center;
  // >div{
  //   display: inline-block;
  // }

  // display: table;
  // > div {
  //   display: table-cell;
  //   text-align: center;
  //   vertical-align: middle;
  // }
}
.flex {
  width: 500px;
  height: 500px;
  outline: 1px solid #000;
  display: flex;
  .left {
    width: 100px;
    background: yellow;
    overflow-y: auto;
  }
  .right {
    flex: 1;
    background: orange;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
