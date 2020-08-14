/**
 * vue全局配置
 */
import Vue from 'vue'
if (process.env.NODE_ENV === 'development') {
  Vue.config.silent = false
} else {
  Vue.config.silent = true
}
// 取消 Vue 所有的日志与警告
Vue.config.silent = false;

// 允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.devtools = false;

// 设置为 true 以在浏览器开发工具中启用对组件初始化，渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API的浏览器上。
Vue.config.performance = true;

// 来关闭生产模式下给出的提示 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm, info) {
  console.error('errorHandler',err)
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
Vue.config.warnHandler = function (msg, vm, trace) {
  console.warn('warn',msg)
  // `trace` 是组件的继承关系追踪
}