// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入css reset.css 重置原始样式 iconfont字体图标
import '@/assets/css/reset.css'
import '@/assets/css/common_pc.scss'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 引入配置 全局配置 公共组件 自定义过滤器 自定义命令 全局方法
import '@/assets/vue/axios.js'
import '@/assets/vue/config.js'
// import '@/assets/vue/globalComonents.js'
import '@/assets/vue/filters.js'
import '@/assets/vue/directives.js'
// import '@/assets/vue/prototype.js

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
