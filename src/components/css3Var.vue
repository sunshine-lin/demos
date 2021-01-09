<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="css3Var">
        <!--css3Var-->
      <!--<div class="box" id="box" style="color: var(&#45;&#45;color)">-->
        <!--阿里的风景阿里的风景阿里的风景-->
      <!--</div>-->
      <!--<el-button @click="btnClick" style="color: var(&#45;&#45;color)">改变字体颜色</el-button>-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <el-color-picker v-model="themeColor" @change="colorChange"></el-color-picker>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: 'css3Var',
        data() {
            return {
              activeIndex: '1',
              themeColor: '#409EFF',
            }
        },
        created() {
        },
        mounted() {
          let html = document.getElementsByTagName('html')[0];
          // 获取 --color CSS 变量值
          var cssVarColor = getComputedStyle(html).getPropertyValue('--color');
          // console.log(cssVarColor);
          $.smartScroll = function(container, selectorScrollable) {
            // 如果没有滚动容器选择器，或者已经绑定了滚动时间，忽略
            if (!selectorScrollable || container.data('isBindScroll')) {
              return;
            }

            // 是否是搓浏览器
            // 自己在这里添加判断和筛选
            var isSBBrowser;

            var data = {
              posY: 0,
              maxscroll: 0
            };

            // 事件处理
            container.on({
              touchstart: function (event) {
                var events = event.touches[0] || event;

                // 先求得是不是滚动元素或者滚动元素的子元素
                var elTarget = $(event.target);

                if (!elTarget.length) {
                  return;
                }

                var elScroll;

                // 获取标记的滚动元素，自身或子元素皆可
                if (elTarget.is(selectorScrollable)) {
                  elScroll = elTarget;
                } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
                  elScroll = null;
                }

                if (!elScroll) {
                  return;
                }

                // 当前滚动元素标记
                data.elScroll = elScroll;

                // 垂直位置标记
                data.posY = events.pageY;
                data.scrollY = elScroll.scrollTop();
                // 是否可以滚动
                data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
              },
              touchmove: function (event) {
                // 如果不足于滚动，则禁止触发整个窗体元素的滚动
                if (data.maxscroll <= 0 || isSBBrowser) {
                  // 禁止滚动
                  event.preventDefault();
                }
                // 滚动元素
                var elScroll = data.elScroll;
                // 当前的滚动高度
                var scrollTop = elScroll.scrollTop();

                // 现在移动的垂直位置，用来判断是往上移动还是往下
                var events = event.touches[0] || event;
                // 移动距离
                var distanceY = events.pageY - data.posY;

                if (isSBBrowser) {
                  elScroll.scrollTop(data.scrollY - distanceY);
                  elScroll.trigger('scroll');
                  return;
                }

                // 上下边缘检测
                if (distanceY > 0 && scrollTop == 0) {
                  // 往上滑，并且到头
                  // 禁止滚动的默认行为
                  event.preventDefault();
                  return;
                }

                // 下边缘检测
                if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
                  // 往下滑，并且到头
                  // 禁止滚动的默认行为
                  event.preventDefault();
                  return;
                }
              },
              touchend: function () {
                data.maxscroll = 0;
              }
            });

            // 防止多次重复绑定
            container.data('isBindScroll', true);
          };
        },
        activated() {
        },
        deactivated() {
        },
        watch: {},
        methods: {
          colorChange (val) {
            let html = document.getElementsByTagName('html')[0];
            html.style.setProperty('--theme', val);
//            let elMenu = document.getElementsByClassName('el-menu')[0];
          },
          btnClick () {
            let box = document.getElementById('box');
            let html = document.getElementsByTagName('html')[0];
            box.style.setProperty('--color', '#000');
            html.style.setProperty('--color', 'gray');
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">

    #css3Var {
      /*background: var(--bodyBg);*/
      .box{
        color: var(--红色);
        background: var(--未定义,#abcdef);
      }
      .el-menu{
        background: var(--theme,#fff);
      }
    }
</style>
