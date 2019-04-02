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
Vue.directive('roll', function (el, binding) {
    setTimeout(() => {
        // p => parent c => child
        let p = el;
        let c = el.firstElementChild;
        let pWidth = el.offsetWidth;
        let cWidth = c.offsetWidth;
        let h = getComputedStyle(c,null).getPropertyValue('line-height');
        if (cWidth <= pWidth) return;
        p.style.minHeight = h;  // 避免设置子元素absolute 父元素高度塌陷
        p.style.position = 'relative';
        c.style.position = 'absolute';
        let speed = binding.value || 50;
        c.animate([
            {transform: `translateX(0px)`},
            {transform: `translateX(-${cWidth}px)`},
        ], {
            duration: cWidth * 1000 / speed,
            iterations: 1,
        });
        setTimeout(() => {
            c.animate([
                {transform: `translateX(${pWidth}px)`},
                {transform: `translateX(-${cWidth}px)`},
            ], {
                duration: (pWidth + cWidth) * 1000 / speed,
                iterations: Infinity,
            })
        }, cWidth * 1000 / speed)
    }, 1000)
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
        let wrapper = $(el);
        let dialog = $(el.childNodes[0]);
        let header = $(el.childNodes[0].childNodes[0]);
        header.on('mouseenter', function (ev) {
            header.css('cursor', 'move')
        });
        header.on('mousedown', function (ev) {
            if (ev.target.className !== 'el-dialog__header') {
                return
            }
            let initX = ev.offsetX;
            let initY = ev.offsetY;
            wrapper.on('mousemove', function (event) {
                event.preventDefault();
                let left = event.pageX - initX;
                let top = event.pageY - initY;
                let maxW = wrapper.width() - dialog.width();
                let maxH = wrapper.height() - dialog.height();
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
        let wrapper = $(el);
        wrapper.on('mousedown', function (ev) {
            // index主页面 短信悬浮窗
            if (binding.modifiers.msgBox) {
                if (!(['yiyifont yiyi-type', 'iconBox'].indexOf(ev.target.className) > -1)) {
                    return
                }
            }
            let initX = ev.offsetX;
            let initY = ev.offsetY;
            $(document).on('mousemove', function (event) {
                event.preventDefault();
                let left = event.pageX - initX;
                let top = event.pageY - initY;
                let maxW = $('#app').width() - wrapper.width();
                let maxH = $('#app').height() - wrapper.height();
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
