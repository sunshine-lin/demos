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
    }
  ]
})
