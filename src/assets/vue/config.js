/**
 * vue全局配置
 */
import Vue from 'vue'

// 取消 Vue 所有的日志与警告
Vue.config.silent = false;

// 允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.devtools = false;

// 设置为 true 以在浏览器开发工具中启用对组件初始化，渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API的浏览器上。
Vue.config.performance = true;

// 来关闭生产模式下给出的提示 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
