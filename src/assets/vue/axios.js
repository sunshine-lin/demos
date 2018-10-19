import axios from 'axios'
import Vue from 'vue'
/*
*   设置axios的baseURL 全局通用 Vue添加全局方法axios
* */

axios.defaults.baseURL = '/api';
axios.defaults.maxContentLength = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.timeout = 5000;
Vue.prototype.axios = axios;

