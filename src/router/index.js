import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import components from "./components";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "notFound",
      meta: {requireAuth: false, title: "未找到该页面"},
      component: components.notFound
    },
    {
      path: '/',
      name: 'index',
      meta: {requireAuth: false, title: "首页"},
      component: components.index
    },
    {
      path: '/anchor',
      name: 'anchor',
      meta: {requireAuth: false, title: "锚点滚动"},
      component: components.anchor
    },
    {
      path: '/elTable',
      name: 'elTable',
      meta: {requireAuth: false, title: "锚点滚动"},
      component: components.elTable
    },
    {
      path: '/baiduMap',
      name: 'baiduMap',
      meta: {requireAuth: false, title: "百度地图"},
      component: components.baiduMap
    },
    {
      path: '/echarts',
      name: 'echarts',
      meta: {requireAuth: false, title: "echarts图表"},
      component: components.echarts
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      meta: {requireAuth: false, title: "bootstrap"},
      component: components.bootstrap
    },
    {
      path: '/happyScroll',
      name: 'happyScroll',
      meta: {requireAuth: false, title: "happyScroll"},
      component: components.happyScroll
    },
    {
      path: '/qrCode',
      name: 'qrCode',
      meta: {requireAuth: false, title: "qrCode"},
      component: components.qrCode
    },
    {
      path: '/copy',
      name: 'copy',
      meta: {requireAuth: false, title: "copy"},
      component: components.copy
    },
    {
      path: '/nav',
      name: 'nav',
      meta: {requireAuth: false, title: "nav"},
      component: components.nav
    },
    {
      path: '/wbr',
      name: 'wbr',
      meta: {requireAuth: false, title: "wbr"},
      component: components.wbr
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      meta: {requireAuth: false, title: "shoppingCart"},
      component: components.shoppingCart
    },
    {
      path: '/cookie',
      name: 'cookie',
      meta: {requireAuth: false, title: "cookie"},
      component: components.cookie
    },
    {
      path: '/animateApi',
      name: 'animateApi',
      meta: {requireAuth: false, title: "animateApi"},
      component: components.animateApi
    },
    {
      path: '/elScrollbar',
      name: 'elScrollbar',
      meta: {requireAuth: false, title: "elScrollbar"},
      component: components.elScrollbar
    },
    {
      path: '/css3Var',
      name: 'css3Var',
      meta: {requireAuth: false, title: "css3Var"},
      component: components.css3Var
    },
    {
      path: '/drag',
      name: 'drag',
      meta: {requireAuth: false, title: "drag"},
      component: components.drag
    },
    {
      path: '/regex',
      name: 'regex',
      meta: {requireAuth: false, title: "regex"},
      component: components.regex
    },
    {
      path: '/barrage',
      name: 'barrage',
      meta: {requireAuth: false, title: "barrage"},
      component: components.barrage
    },
    {
      path: '/others',
      name: 'others',
      meta: {requireAuth: false, title: "others"},
      component: components.others
    },
    {
      path: '/animateCss',
      name: 'animateCss',
      meta: {requireAuth: false, title: "animateCss"},
      component: components.animateCss
    },
    {
      path: '/css',
      name: 'css',
      meta: {requireAuth: false, title: "css"},
      component: components.css
    },
  ]
})
