/**
 * vue公共组件js
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 11:03:08
 * @version $Id$
 */
import Vue from 'vue'

Vue.directive('my-directive', {
  bind: function () {
    //做绑定的准备工作
    //比如添加事件监听器，或是其他只需要执行一次的复杂操作
  },
  inserted: function () {
    //...
  },
  update: function () {
    //根据获得的新值执行对应的更新
    //对于初始值也会调用一次
  },
  componentUpdated: function () {
    //...
  },
  unbind: function () {
    //做清理操作
    //比如移除bind时绑定的事件监听器
  }
});
Vue.directive('drag', {
  bind(el, binding) {
    $(el).css('position', 'absolute')
    el.addEventListener('touchstart', (event) => {
      // for(let k in event.touches) {
      // }
    })
    if (binding.arg == 'bgColor') {
      $(el).css('background', binding.expression)
    } else {
      $(el).css('background', '#f99')
    }

    $(el).on('mousedown', (event) => {
      let x = event.offsetX;
      let y = event.offsetY;
      $(el).on('mousemove', ev => {
        el.style.left = ev.clientX - x + 'px';
        el.style.top = ev.clientY - y + 'px';
      })
    })
    $(document).on('mouseup', ev => {
      $(el).off('mousemove')
    })
  }
});

// 弹窗按住可移动
Vue.directive('dialogMove', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    var wrapper = $(el);
    var dialog = $(el.childNodes[0]);
    var header = $(el.childNodes[0].childNodes[0]);
    header.on('mouseenter', function (ev) {
      header.css('cursor', 'move')
    });
    header.on('mousedown', function (ev) {
      if (ev.target.className !== 'el-dialog__header') {
        return
      }
      var initX = ev.offsetX;
      var initY = ev.offsetY;
      wrapper.on('mousemove', function (event) {
        event.preventDefault();
        var left = event.pageX - initX;
        var top = event.pageY - initY;
        var maxW = wrapper.width() - dialog.width();
        var maxH = wrapper.height() - dialog.height();
        if (binding.expression) {
          if (left <= 0) {
            left = 0;
          } else if (left >= maxW) {
            left = maxW
          }
          if (top <= 0) {
            top = 0;
          } else if (top >= maxH) {
            top = maxH
          }
        }
        dialog.css({left: left, top: top, transform: 'none'})
      });
      wrapper.on('mouseup', function (event) {
        wrapper.off('mousemove')
      })
    })
  }
});
// 任意div
Vue.directive('move', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    var wrapper = $(el);
    wrapper.on('mousedown', function (ev) {
      // index主页面 短信悬浮窗
      if (binding.modifiers.msgBox) {
        if (!(['yiyifont yiyi-type', 'iconBox'].indexOf(ev.target.className) > -1)) {
          return
        }
      }
      var initX = ev.offsetX;
      var initY = ev.offsetY;
      $(document).on('mousemove', function (event) {
        event.preventDefault();
        var left = event.pageX - initX;
        var top = event.pageY - initY;
        var maxW = $('#app').width() - wrapper.width();
        var maxH = $('#app').height() - wrapper.height();
        if (left <= 0) {
          left = 0;
        } else if (left >= maxW) {
          left = maxW
        }
        if (top <= 0) {
          top = 0;
        } else if (top >= maxH) {
          top = maxH
        }
        wrapper.css({left: left, top: top, transform: 'none'})
      });
      $(document).on('mouseup', function (event) {
        $(document).off('mousemove')
      })
    })
  }
});
