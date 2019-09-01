// 定义一个混入对象
import Vue from 'vue'
Vue.mixin({
    created: function () {
        this.hello()
      },
      methods: {
        hello: function () {
          console.log('hello from mixin!')
        }
      }
})