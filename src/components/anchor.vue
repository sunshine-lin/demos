<template>
  <div class="comBox" id="anchorCom">
    <div>
      <el-radio-group v-model="radioValue">
        <el-radio-button
          v-for="n in 10"
          :key="`radio_${n}`"
          :label="n"
          @click.native="btnClick('hash',n)"
        ></el-radio-button>
      </el-radio-group>
    </div>
    <div id="box" @scroll="boxScroll">
      <p v-for="n in 10" :id="'p' + n" :key="n">{{n}}</p>
    </div>
    <h3>Table of Contents</h3>
    <ol>
      <li>
        <a href="#p1">Jump to the first paragraph!</a>
      </li>
      <li>
        <a href="#p2">Jump to the second paragraph!</a>
      </li>
      <li>
        <a href="#nowhere">
          This link goes nowhere,
          because the target doesn't exist.
        </a>
      </li>
    </ol>

    <h3>My Fun Article</h3>
    <p id="p1">
      You can target
      <i>this paragraph</i> using a
      URL fragment. Click on the link above to try out!
    </p>
    <p id="p2">
      This is
      <i>another paragraph</i>, also accessible
      from the links above. Isn't that delightful?
    </p>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "anchorCom",
  data() {
    return {
      top: "",
      radioValue: 1,
      radioList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      animateSW: true,
      onceSW: true,
      scrollTopArr: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollTopArr = this.getScrollTopList();
    });
  },
  methods: {
    btnClick(from, item) {
      switch (from) {
        case "hash":
          if (this.animateSW) {
            this.animateSW = false;
            var parentTop = $("#box").position().top;
            var childTop =
              $("#p" + item).position().top + $("#box").scrollTop();
            var top = childTop - parentTop;
            $("#box").animate({ scrollTop: top }, () => {
              this.animateSW = true;
              this.radioValue = item;
            });
          }
          break;
      }
    },
    // 监听高度
    boxScroll(ev) {
      var scrollTop = ev.target.scrollTop;
      for (let i = 0; i < this.scrollTopArr.length; i++) {
        var min = (this.scrollTopArr[i] + this.scrollTopArr[i - 1]) / 2;
        var max = (this.scrollTopArr[i] + this.scrollTopArr[i + 1]) / 2;
        // 做第一个特殊处理
        if (scrollTop < this.scrollTopArr[1] / 2) {
          this.radioValue = this.radioList[0];
          i = this.scrollTopArr.length;
        }
        if (scrollTop >= min && scrollTop < max) {
          this.radioValue = this.radioList[i];
        }
      }
    },
    // 获取scrollTop 数组
    getScrollTopList() {
      var arr = [];
      for (let i = 0; i < this.radioList.length; i++) {
        arr.push($("#p" + (i + 1)).position().top);
      }
      return arr;
    }
  }
};
</script>

<style rel="stylesheet" lang="scss">
#anchorCom {
  #box {
    position: relative;
    height: 400px;
    overflow-y: auto;
    p {
      height: 100px;
      background: #f99;
      border: 1px solid #ddd;
    }
  }
  p:target {
    background-color: gold;
  }
}
</style>
