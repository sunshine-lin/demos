import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "*",
            name: "notFound",
            meta: {requireAuth: false, title: "未找到该页面"},
            component: () => import('@/components/notFound')
        },
        {
            path: '/',
            name: 'index',
            meta: {requireAuth: false, title: "首页"},
            component: () => import("@/components/index.vue")
        },
        {
            path: '/anchor',
            name: 'anchor',
            meta: {requireAuth: false, title: "锚点滚动"},
            component: () => import('@/components/anchor')
        },
        {
            path: '/elTable',
            name: 'elTable',
            meta: {requireAuth: false, title: "锚点滚动"},
            component: () => import('@/components/elTable')
        },
        {
            path: '/baiduMap',
            name: 'baiduMap',
            meta: {requireAuth: false, title: "百度地图"},
            component: () => import('@/components/baiduMap')
        },
        {
            path: '/echarts',
            name: 'echarts',
            meta: {requireAuth: false, title: "echarts图表"},
            component: () => import('@/components/echarts')
        },
        {
            path: '/bootstrap',
            name: 'bootstrap',
            meta: {requireAuth: false, title: "bootstrap"},
            component: () => import('@/components/bootstrap')
        },
        {
            path: '/happyScroll',
            name: 'happyScroll',
            meta: {requireAuth: false, title: "happyScroll"},
            component: () => import('@/components/happyScroll')
        },
        {
            path: '/qrCode',
            name: 'qrCode',
            meta: {requireAuth: false, title: "qrCode"},
            component: () => import('@/components/qrCode')
        },
        {
            path: '/copy',
            name: 'copy',
            meta: {requireAuth: false, title: "copy"},
            component: () => import('@/components/copy')
        },
        {
            path: '/nav',
            name: 'nav',
            meta: {requireAuth: false, title: "nav"},
            component: () => import('@/components/nav')
        },
        {
            path: '/wbr',
            name: 'wbr',
            meta: {requireAuth: false, title: "wbr"},
            component: () => import('@/components/wbr')
        },
        {
            path: '/shoppingCart',
            name: 'shoppingCart',
            meta: {requireAuth: false, title: "shoppingCart"},
            component: () => import('@/components/shoppingCart')
        },
        {
            path: '/cookie',
            name: 'cookie',
            meta: {requireAuth: false, title: "cookie"},
            component: () => import('@/components/cookie')
        },
        {
            path: '/animateApi',
            name: 'animateApi',
            meta: {requireAuth: false, title: "animateApi"},
            component: () => import('@/components/animateApi')
        },
        {
            path: '/elScrollbar',
            name: 'elScrollbar',
            meta: {requireAuth: false, title: "elScrollbar"},
            component: () => import('@/components/elScrollbar')
        },
        {
            path: '/css3Var',
            name: 'css3Var',
            meta: {requireAuth: false, title: "css3Var"},
            component: () => import('@/components/css3Var')
        },
        {
            path: '/drag',
            name: 'drag',
            meta: {requireAuth: false, title: "drag"},
            component: () => import('@/components/drag')
        },
        {
            path: '/regex',
            name: 'regex',
            meta: {requireAuth: false, title: "regex"},
            component: () => import('@/components/regex')
        },
        {
            path: '/barrage',
            name: 'barrage',
            meta: {requireAuth: false, title: "barrage"},
            component: () => import('@/components/barrage')
        },
        {
            path: '/others',
            name: 'others',
            meta: {requireAuth: false, title: "others"},
            component: () => import('@/components/others')
        },
        {
            path: '/animateCss',
            name: 'animateCss',
            meta: {requireAuth: false, title: "animateCss"},
            component: () => import('@/components/animateCss')
        },
        {
            path: '/css',
            name: 'css',
            meta: {requireAuth: false, title: "css"},
            component: () => import('@/components/css')
        },
        {
            path: '/grid',
            name: 'grid',
            meta: {requireAuth: false, title: "grid"},
            component: () => import('@/components/grid')
        },
        {
            path: '/table',
            name: 'table',
            meta: {requireAuth: false, title: "table"},
            component: () => import('@/components/table')
        },
        {
            path: '/html',
            name: 'html',
            meta: {requireAuth: false, title: "html"},
            component: () => import('@/components/html')
        },
        {
            path: '/canvas',
            name: 'canvas',
            meta: {requireAuth: false, title: "canvas"},
            component: () => import('@/components/canvas')
        },
        {
            path: '/map',
            name: 'map',
            meta: {requireAuth: false, title: "map"},
            component: () => import('@/components/map')
        },
        {
            path: '/requestAnimationFrame',
            name: 'requestAnimationFrame',
            meta: {requireAuth: false, title: "requestAnimationFrame"},
            component: () => import('@/components/requestAnimationFrame')
        },
        {
            path: '/defineproperty',
            name: 'defineproperty',
            meta: {requireAuth: false, title: "defineproperty"},
            component: () => import('@/components/defineproperty')
        },
        {
            path: '/nodeEmailer',
            name: 'nodeEmailer',
            meta: {requireAuth: false, title: "nodeEmailer"},
            component: () => import('@/components/nodeEmailer')
        },
        {
            path: '/canvasBg',
            name: 'canvasBg',
            meta: {requireAuth: false, title: "canvasBg"},
            component: () => import('@/components/canvasBg')
        },
        {
            path: '/scrollSnap',
            name: 'scrollSnap',
            alias: '/alias/abc/cde',
            props: { default: true, sidebar: false },
            meta: {requireAuth: false, title: "scrollSnap"},
            component: () => import('@/components/scrollSnap')
        },
        {
            path: '/js',
            name: 'js',
            meta: {requireAuth: false, title: "js"},
            component: () => import('@/components/js')
        },
        {
            path: '/elementUI',
            name: 'elementUI',
            meta: {requireAuth: false, title: "elementUI"},
            component: () => import('@/components/elementUI')
        },
        {
            path: '/previewImage',
            name: 'previewImage',
            meta: {requireAuth: false, title: "previewImage"},
            component: () => import('@/components/previewImage')
        },
        {
            path: '/vuex',
            name: 'vuex',
            meta: {requireAuth: false, title: "vuex"},
            component: () => import('@/components/vuex')
        },
        {
            path: '/file',
            name: 'file',
            meta: {requireAuth: false, title: "file"},
            component: () => import('@/components/file')
        },
        {
            path: '/debounce',
            name: 'debounce',
            meta: {requireAuth: false, title: "debounce"},
            component: () => import('@/components/debounce')
        },
        {
            path: '/fabric',
            name: 'fabric',
            meta: {requireAuth: false, title: "fabric"},
            component: () => import('@/components/fabric')
        },
    ]
})
router.beforeEach((to, from, next) => {
    next()
})
router.beforeResolve((to,from,next) => {
    next()
})
router.afterEach ((to,from)=> {
    Vue.nextTick(()=>{
        document.querySelector('title').innerHTML = to.meta.title;
    })
})

export default router
