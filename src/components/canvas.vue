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
            this.drawShadow(ctx);
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
                for (let i = 0;i<10;i++) {
                    ctx.fillStyle = `rgba(255,0,0,${i/10})`;
                    ctx.fillRect(i * 30, 0, (i+1)*30, 100);
                    ctx.fill();
                }
            },
            // 直线
            drawLine(ctx) {
                ctx.lineWidth = 10;
                var lineCapArr = ['butt','round','square'];
                var lineJoinArr = ['miter','round', 'bevel'];
                lineCapArr.forEach((item,index) => {
                    ctx.lineCap = item;
                    ctx.lineJoin = lineJoinArr[index];
                    ctx.beginPath();
                    ctx.moveTo(100*index + 10,300);
                    ctx.lineTo(100*index + 50,350);
                    ctx.lineTo(100*index + 80,300);
                    ctx.stroke()
                })

            },
            // 虚线
            drawDash(ctx) {
                let offset = 0;
                setInterval(()=>{
                    offset--
                    ctx.clearRect(0,0,400,400)
                    ctx.beginPath()
                    ctx.setLineDash([4, 2]);
                    ctx.lineDashOffset = offset;
                    ctx.strokeRect(10,10, 100, 100);
                },100)
            },
            // 直向渐变
            drawLinearGradient(ctx) {
                var lingrad = ctx.createLinearGradient(0,0,150,150);
                lingrad.addColorStop(0, '#00ABEB');
                lingrad.addColorStop(0.5, '#fff');
                lingrad.addColorStop(0.5, '#26C000');
                lingrad.addColorStop(1, '#fff');
                ctx.fillStyle = lingrad;
                ctx.fillRect(0,0,150,150);
            },
            // 径向渐变
            drawLinearGradient(ctx) {
                // createRadialGradient(x1, y1, r1, x2, y2, r2)
                // createRadialGradient 方法接受 6 个参数，
                // 前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
                var radgrad = ctx.createRadialGradient(75,75,0,75,75,75);
                radgrad.addColorStop(0, 'blue');
                radgrad.addColorStop(0.5, 'green');
                radgrad.addColorStop(0.8, 'pink');
                radgrad.addColorStop(0.9, 'black');
                radgrad.addColorStop(1, 'rgba(0,0,0,0)')
                ctx.fillStyle = radgrad;
                ctx.fillRect(0,0,150,150);
            },
            // 图案样式
            drawPatterns(ctx) {
                var img = new Image();
                img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
                img.onload = function() {
                    // 创建图案
                    var ptrn  = ctx.createPattern(img,'repeat')
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
                ctx.fillRect(50,50,100,100);
                ctx.fillText("Sample String", 5, 30);
            },
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #canvasCom {
        padding: 20px;
        #tutorial {
            outline: 2px solid #ddd;
        }
    }
</style>
