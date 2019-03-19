import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import components from "./components";

Vue.use(Router)

const router = new Router({
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
        {
            path: '/grid',
            name: 'grid',
            meta: {requireAuth: false, title: "grid"},
            component: components.grid
        },
        {
            path: '/table',
            name: 'table',
            meta: {requireAuth: false, title: "table"},
            component: components.table
        },
        {
            path: '/html',
            name: 'html',
            meta: {requireAuth: false, title: "html"},
            component: components.html
        },
        {
            path: '/canvas',
            name: 'canvas',
            meta: {requireAuth: false, title: "canvas"},
            component: components.canvas
        },
        {
            path: '/map',
            name: 'map',
            meta: {requireAuth: false, title: "map"},
            component: components.map
        },
        {
            path: '/requestAnimationFrame',
            name: 'requestAnimationFrame',
            meta: {requireAuth: false, title: "requestAnimationFrame"},
            component: components.requestAnimationFrame
        },
        {
            path: '/defineproperty',
            name: 'defineproperty',
            meta: {requireAuth: false, title: "defineproperty"},
            component: components.defineproperty
        },
        {
            path: '/nodeEmailer',
            name: 'nodeEmailer',
            meta: {requireAuth: false, title: "nodeEmailer"},
            component: components.nodeEmailer
        },
        {
            path: '/canvasBg',
            name: 'canvasBg',
            meta: {requireAuth: false, title: "canvasBg"},
            component: components.canvasBg
        },
        {
            path: '/scrollSnap',
            name: 'scrollSnap',
            alias: '/alias/abc/cde',
            props: { default: true, sidebar: false },
            meta: {requireAuth: false, title: "scrollSnap"},
            component: components.scrollSnap
        },
    ]
})
router.beforeEach((to, from, next) => {
    console.log('beforeEach to',to)
    next()
})
router.beforeResolve((to,from,next) => {
    console.log('beforeResolve')
    next()
})
router.afterEach ((to,from)=> {
    Vue.nextTick(()=>{
        document.querySelector('title').innerHTML = to.meta.title;
    })
    console.log('afterEach')
})

export default router
