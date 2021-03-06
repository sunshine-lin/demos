// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入css reset.css 重置原始样式 iconfont字体图标
import '@/assets/css/reset.css'
import '@/assets/css/common_pc.scss'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 全局引入vue-happy-scroll
import HappyScroll from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)

// 引入配置 全局配置 公共组件 自定义过滤器 自定义命令 全局方法
import '@/assets/vue/axios.js'
import '@/assets/vue/config.js'
import '@/assets/vue/globalComponents.js'
import '@/assets/vue/filters.js'
import '@/assets/vue/directives.js'
import '@/assets/vue/prototype.js'
import '@/assets/vue/polyfill.js'
// import '@/assets/vue/mixins.js'
import globalData from '@/assets/vue/globalData.js'
import MyPlugin from '@/assets/plugins/MyPlugin'
Vue.use(MyPlugin)
// 引入打印
// import VueHtmlToPaper from 'vue-html-to-paper';
// import 'static/lib/js/jquery.min.js';
// import 'static/lib/js/jquery.PrintArea.min.js';

const options = {
  name: '_blank',
  // specs: [
  //   'fullscreen=yes',
  //   'titlebar=yes',
  //   'scrollbars=yes'
  // ],
  // styles: [
  //   'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
  //   'https://unpkg.com/kidlat-css/css/kidlat.css'
  // ]
}

// Vue.use(VueHtmlToPaper,options);
import 'animate.css'
import '@/assets/js/wavesurfer.min.js';
// import vConsole from 'vconsole'; 
// if (process.env.NODE_ENV === 'development') {
//   new vConsole()
// }
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
new Vue({
  el: '#app',
  router,
    store,
    // data: {
    //     globalData,
    // },
    computed: {
        globalData:{
          get: function () {
                return globalData
            }

        },
    },
  components: { App },
  template: '<App/>'
})
