/**
 * Created by linzy on 2018/2/25.
 */

// 系统首页
// const publicityPage = resolve => require([ '@/components/publicityPage/publicityPage.vue';
import index from "@/components/index.vue";

import anchor from "@/components/anchor.vue";
import elTable from "@/components/elTable.vue";
import baiduMap from "@/components/baiduMap.vue";
import echarts from "@/components/echarts.vue";
import bootstrap from "@/components/bootstrap.vue";
import happyScroll from "@/components/happyScroll.vue";
import qrCode from "@/components/qrCode.vue";
import copy from "@/components/copy.vue";
import nav from "@/components/nav.vue";
import wbr from "@/components/wbr.vue";
import shoppingCart from "@/components/shoppingCart.vue";
import cookie from "@/components/cookie.vue";
import animateApi from "@/components/animateApi.vue";
import elScrollbar from "@/components/elScrollbar.vue";
import css3Var from "@/components/css3Var.vue";
import drag from "@/components/drag.vue";
import regex from "@/components/regex.vue";
import barrage from "@/components/barrage.vue";
// import others from "@/components/others.vue";
const others = () => import("@/components/others.vue");
const animateCss = () => import("@/components/animateCss.vue");
const css = () => import("@/components/css.vue");
export default {
  index,
  anchor,
  elTable,
  baiduMap,
  echarts,
  bootstrap,
  happyScroll,
  qrCode,
  copy,
  nav,
  wbr,
  shoppingCart,
  cookie,
  animateApi,
  elScrollbar,
  css3Var,
  drag,
  regex,
  barrage,
  others,
  animateCss,
  css,
};
