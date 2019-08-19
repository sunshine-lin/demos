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
    <div :title="str">{{str2}}</div>
    <div id="list">
      <div id="aaa">aaa</div>
      <ul id="bbb">
          <li>01</li>
          <li>02</li>
          <li>03</li>
      </ul>
    </div>
  </div>
</template>

<script>
//    import '@/assets/js/wavesurfer.min.js';
import $ from "jquery";
export default {
  name: "js",
  props: {},
  components: {},
  data() {
    return {
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
    console.log(33333);
  },
  mounted() {
    var a = "333";
    console.log(a.slice(1));
    this.str2 = this.str.slice(0, 10) + "..." + this.str.slice(-5);
    console.log(document.scrollingElement.scrollTop);
    var encodeData = btoa(123456);
    var decodeData = atob(encodeData);
    console.log(decodeData);

    //            var wavesurfer = WaveSurfer.create({
    //                container: '#waveform'
    //            });
    //            wavesurfer.load('//image.zhangxinxu.com/audio/zxx.mp3');
    var paramsString = "q=URLUtils.searchParams&topic=api&topic=api"; // location.search.slice(1)
    var searchParams = new URLSearchParams(paramsString);
    console.log("searchParams", searchParams.getAll("topic"));
    $("#list").on("mouseenter", () => {
      var timer = setTimeout(function() {
        $("#bbb").show();
      }, 300);
      $("#list").on("mouseleave", () => {
        clearTimeout(timer)
        $("#bbb").hide();
      });
    });
  },
  activated() {
    var num = 1;
    var arr = [5, 1, 3, 6, 2, 4, 111, 22, 9];
    console.log("arr", arr);
    console.log(arr.length >> 1);
    // 冒泡排序
    // for (let i = 0;i<arr.length;i++) {
    //     for (let j = 0;j<arr.length - i - 1;j++) {
    //         if (arr[i] > arr[j]) {
    //             [arr[i],arr[j]] = [arr[j],arr[i]]
    //         }
    //     }
    // }
    // console.log('冒泡排序',arr)
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
    // console.log('选择排序',arr)
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
    //     console.log('arr',arr)
    // }
    // console.log('插入排序',arr)
    // 快速排序
    for (let i = 1; i < arr.length; i++) {}
  },
  deactivated() {},
  methods: {
    fun1() {
      console.log("fun1");
    },
    btnClick(from) {
      switch (from) {
        case "toTop":
          document.scrollingElement.scrollTop = 0;
          break;
        case "Notification":
          Notification.requestPermission().then(function(res) {
            console.log(res);
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
              console.log("点击了通知:" + notice.data);
              notice.close();
            };
            // result可能是是granted, denied, 或default.
          });
          break;
      }
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
</style>
