<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--canvasCom组件用途
    props:
    events:
    slots:
    use:
  -->
    <div id="canvasCom" class="comBox">

        <canvas id="tutorial" width="150" height="150">
            <!-- 如不支持 则显示 -->
            <span>对不起，你的浏览器不支持canvas</span>
        </canvas>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'canvasCom',
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            var tutorial = document.querySelector('#tutorial');
            // 需要用js方法设置宽高 css无效
            tutorial.width = '400';
            tutorial.height = '400';
            // 判断是否支持获取上下文
            if (!tutorial.getContext) return;
            var ctx = tutorial.getContext('2d');
//            this.drawRect(ctx)
//            this.drawPath(ctx)
//            this.drawSmile(ctx)
//            this.drawArc(ctx)
//            this.drawQuadraticCurveTo(ctx)
//            this.drawBezierCurveTo(ctx)
//            this.drawWaveAnimate(ctx);
//            this.drawColors(ctx);
//            this.drawLine(ctx);
//            this.drawDash(ctx);
//            this.drawLinearGradient(ctx);
//            this.drawRadialGradient(ctx);
//            this.drawPatterns(ctx);
//            this.drawShadow(ctx);
//            this.drawText(ctx);
//            this.drawImage(ctx);
//            this.drawImagSlicing(ctx);
//            this.drawSaveRestore(ctx);
//            this.drawTransform(ctx);
//            this.drawClip(ctx);
//            this.drawClip2(ctx);
            this.drawClipImage(ctx);


        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            // 绘制矩形
            drawRect(ctx) {
                ctx.fillStyle = "blue";
                ctx.fillRect(25, 25, 100, 100);
                ctx.clearRect(45, 45, 60, 60)
                ctx.strokeRect(50, 50, 50, 50);
            },
            // 绘制矩形
            drawSmile(ctx) {
                ctx.beginPath();
                ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
                ctx.moveTo(110, 75);     // moveTo 等于说是抬笔 去下个地方再落笔；如果没有moveTo则是连笔画
                ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
                ctx.moveTo(65, 65);
                ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
                ctx.moveTo(95, 65);
                ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
                ctx.stroke();
            },
            // 绘制路径
            drawPath(ctx) {
                ctx.beginPath();
                ctx.moveTo(75, 50);
                ctx.lineTo(100, 75);
                ctx.lineTo(100, 25);
                ctx.closePath();        // 闭合是必要的
                ctx.strokeStyle = 'red';
                ctx.stroke();
                ctx.fillStyle = 'green';
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(175, 150);
                ctx.lineTo(200, 175);
                ctx.lineTo(200, 125);
                ctx.closePath();        // 闭合是必要的
                ctx.strokeStyle = 'red';
                ctx.stroke();
                ctx.fillStyle = 'green';
                ctx.fill();
            },
            // 绘制圆弧
            drawArc(ctx) {
                // 弧度=(Math.PI/180)*角度。
                ctx.beginPath();
                ctx.arc(200, 200, 100, 0, (Math.PI / 180) * 180, false); // 默认 false为顺时针 true为逆时针
                ctx.stroke();
                ctx.closePath();
            },
            // 绘制二次贝塞尔曲线
            drawQuadraticCurveTo(ctx) {
                ctx.beginPath();
                ctx.moveTo(75, 25);
                ctx.quadraticCurveTo(25, 25, 25, 62.5);
                ctx.quadraticCurveTo(25, 100, 50, 100);
                ctx.quadraticCurveTo(50, 120, 30, 125);
                ctx.quadraticCurveTo(60, 120, 65, 100);
                ctx.quadraticCurveTo(125, 100, 125, 62.5);
                ctx.quadraticCurveTo(125, 25, 75, 25);
                ctx.stroke();
            },
            // 绘制三次贝塞尔曲线
            drawBezierCurveTo(ctx) {
                ctx.beginPath();
                ctx.moveTo(75, 40);
                ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                ctx.fill();
            },
            // 利用三次贝塞尔曲线 绘制波浪
            drawWave(ctx, y1, y2, fillStyle, x1, x2) {
                ctx.beginPath();
                ctx.moveTo(0, 400);
                ctx.lineTo(0, 200);
//                ctx.moveTo(0,200);
                ctx.bezierCurveTo(x1, y1, x2, y2, 400, 200);
                ctx.lineTo(400, 400);
                ctx.closePath();
//                ctx.stroke();
                ctx.fillStyle = fillStyle;
                ctx.fill();
            },
            // 波浪 动画
            drawWaveAnimate(ctx) {
                var y1 = 50, y2 = 350, x1 = 0, x2 = 200;
                var _this = this;
                var sign = 1;
                var xSign = 1;
                var my_gradient = ctx.createLinearGradient(0, 400, 0, 100);
                my_gradient.addColorStop(0, "#3399FF");
                my_gradient.addColorStop(1, "white");
                setInterval(function () {
                    ctx.clearRect(0, 0, 400, 400)
                    y1 += sign;
                    y2 -= sign;
                    x1 += xSign;
                    x2 += xSign;
                    if (y1 >= 350 || y1 <= 50) {
                        sign = -sign;
                    }
                    if (x1 >= 200 || x1 <= 0) {
                        xSign = -xSign;
                    }
                    _this.drawWave(ctx, y1, y2, my_gradient, x1, x2)
                }, 10)
            },
            // 颜色
            drawColors(ctx) {
                for (let i = 0; i < 10; i++) {
                    ctx.fillStyle = `rgba(255,0,0,${i / 10})`;
                    ctx.fillRect(i * 30, 0, (i + 1) * 30, 100);
                    ctx.fill();
                }
            },
            // 直线
            drawLine(ctx) {
                ctx.lineWidth = 10;
                var lineCapArr = ['butt', 'round', 'square'];
                var lineJoinArr = ['miter', 'round', 'bevel'];
                lineCapArr.forEach((item, index) => {
                    ctx.lineCap = item;
                    ctx.lineJoin = lineJoinArr[index];
                    ctx.beginPath();
                    ctx.moveTo(100 * index + 10, 300);
                    ctx.lineTo(100 * index + 50, 350);
                    ctx.lineTo(100 * index + 80, 300);
                    ctx.stroke()
                })

            },
            // 虚线
            drawDash(ctx) {
                let offset = 0;
                setInterval(() => {
                    offset--
                    ctx.clearRect(0, 0, 400, 400)
                    ctx.beginPath()
                    ctx.setLineDash([4, 2]);
                    ctx.lineDashOffset = offset;
                    ctx.strokeRect(10, 10, 100, 100);
                }, 100)
            },
            // 直向渐变
            drawLinearGradient(ctx) {
                var lingrad = ctx.createLinearGradient(0, 0, 150, 150);
                lingrad.addColorStop(0, '#00ABEB');
                lingrad.addColorStop(0.5, '#fff');
                lingrad.addColorStop(0.5, '#26C000');
                lingrad.addColorStop(1, '#fff');
                ctx.fillStyle = lingrad;
                ctx.fillRect(0, 0, 150, 150);
            },
            // 径向渐变
            drawLinearGradient(ctx) {
                // createRadialGradient(x1, y1, r1, x2, y2, r2)
                // createRadialGradient 方法接受 6 个参数，
                // 前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
                var radgrad = ctx.createRadialGradient(75, 75, 0, 75, 75, 75);
                radgrad.addColorStop(0, 'blue');
                radgrad.addColorStop(0.5, 'green');
                radgrad.addColorStop(0.8, 'pink');
                radgrad.addColorStop(0.9, 'black');
                radgrad.addColorStop(1, 'rgba(0,0,0,0)')
                ctx.fillStyle = radgrad;
                ctx.fillRect(0, 0, 150, 150);
            },
            // 图案样式
            drawPatterns(ctx) {
                var img = new Image();
                img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
                img.onload = function () {
                    // 创建图案
                    var ptrn = ctx.createPattern(img, 'repeat')
                    ctx.fillStyle = ptrn;
                    ctx.fillRect(0, 0, 400, 400);
                }
            },
            // 阴影
            drawShadow(ctx) {
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.font = "30px Times New Roman";
                ctx.fillStyle = "Black";
                ctx.fillRect(50, 50, 100, 100);
                ctx.fillText("Sample String", 5, 30);
            },
            // 阴影
            drawText(ctx) {
                ctx.font = "20px 微软雅黑";
                ctx.textAlign = "left";
                ctx.textBaseline = "alphabetic";
                ctx.direction = "rtl";
                var text = ctx.measureText("Hello world"); // TextMetrics object
                console.log(text.width)
                ctx.fillStyle = '#f00';
                ctx.fillText("Hello world", 10, 50, text.width);
                ctx.textBaseline = "top";
                ctx.strokeText("Hello world2", 200, 50, 150);
            },
            // 图像
            drawImage(ctx) {
                var img = new Image();
//                img.src = require('./images/logo.png');
                img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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';
                img.onload = function () {
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            ctx.drawImage(img, 50 * i, 50 * j, 50, 50);
                        }
                    }
                }
            },
            // 图像切片 drawImage(image, sx, sy,sWidth, sHeight, dx, dy, dWidth, dHeight)
            // 用来多张图片 合成的作用
            drawImagSlicing(ctx) {
                var img = new Image();
                img.src = require('./images/meinv.jpg');
                img.onload = function () {
                    // img.width img.height来获取高度长度 避免长宽失真
                    ctx.drawImage(img, 0, 0, 400, 400);
                    ctx.drawImage(img, 0, 0, 400, 400, 100, 100, 100, 100);
                }
            },
            // 状态save 跟 restore
            drawSaveRestore(ctx) {
                // save() 为保存状态 包括颜色配置等 类似
                ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
                ctx.save()
                ctx.fillStyle = '#f00';
                ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
                ctx.save()
                ctx.fillStyle = '#FFF'       // 再次改变颜色配置
                ctx.globalAlpha = 0.5;
                ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
                ctx.restore();               // 重新加载之前的颜色状态
                ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
                ctx.restore();               // 加载默认颜色配置
                ctx.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形
            },
            // 变形 transform
            drawTransform(ctx) {
//                ctx.translate(100,100);
//                ctx.rotate(Math.PI*2/8);
//                ctx.scale(2,3);
//                ctx.fillRect(0, 0, 25, 25);
                // setTransform 类似css3中transform的skew
                ctx.setTransform(1, 0, 1, 1, -20, -20);
                ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
                ctx.resetTransform() // 等于ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.fillRect(50, 50, 100, 100);
            },
            // 裁切 clip
            drawClip(ctx) {
//              ctx.fillRect(0,0,150,150);
                ctx.translate(75,75);

                // Create a circular clipping path
                ctx.beginPath();
                ctx.arc(0,0,60,0,Math.PI*2,true);
                ctx.clip();

                // draw background
                var lingrad = ctx.createLinearGradient(0,-75,0,75);
                lingrad.addColorStop(0, '#232256');
                lingrad.addColorStop(1, '#143778');

                ctx.fillStyle = lingrad;
                ctx.fillRect(-75,-75,150,150);

                // draw stars
                for (var j=1;j<50;j++){
                    ctx.save();
                    ctx.fillStyle = '#fff';
                    ctx.translate(75-Math.floor(Math.random()*150),
                        75-Math.floor(Math.random()*150));
                    this.drawStar(ctx,Math.floor(Math.random()*4)+2);
                    ctx.restore();
                }
            },
            // 裁切 图像
            drawClipImage (ctx) {
                var _this = this;
                var img = new Image();
                img.src = require('./images/meinv.jpg');
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, 400, 400)
                }
                $('#tutorial').on('mousedown',function (ev){
                    var initX = ev.offsetX;
                    var initY = ev.offsetY;
                    $(document).on('mousemove',function (ev2){
                        _this.drawClip2(ctx,initX,initY,ev2.offsetX,ev2.offsetY,img)
                    })
                    $(document).on('mouseup',function(){
                        $(document).off('mousemove')
                    })
                })
            },
            drawClip2 (ctx,initX,initY,moveX,moveY,img) {
                ctx.clearRect(0,0,400,400);
                ctx.save()
                ctx.beginPath()
//                ctx.lineWidth = 50;
//                ctx.strokeStyle = 'rgba(0,0,0,0.5)';
                ctx.rect(initX,initY,moveX-initX,moveY-initY);
                ctx.strokeText((moveX - initX) + ' , ' + (moveY-initY), initX + 10,initY - 10);
                ctx.stroke()
                ctx.clip();
                ctx.drawImage(img, 0, 0, 400, 400);
                ctx.restore()
            },
            drawStar(ctx,r){
                ctx.save();
                ctx.beginPath()
                ctx.moveTo(r,0);
                for (var i=0;i<9;i++){
                    ctx.rotate(Math.PI/5);
                    if(i%2 == 0) {
                        ctx.lineTo((r/0.525731)*0.200811,0);
                    } else {
                        ctx.lineTo(r,0);
                    }
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #canvasCom {
        padding: 20px;
        /*background: url(./images/meinv.jpg) no-repeat 20px 20px;*/
        /*background-size: 400px 400px;*/
        #tutorial {
            outline: 2px solid #ddd;
        }
    }
</style>
