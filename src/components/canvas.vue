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
            var y1 = 50,y2 = 350;
            var _this = this;
            var sign = 1;
            var my_gradient=ctx.createLinearGradient(0,400,0,100);
            my_gradient.addColorStop(0,"#3399FF");
            my_gradient.addColorStop(1,"white");
            setInterval(function () {
                ctx.clearRect(0,0,400,400)
                y1 += sign;
                y2 -= sign;
                if (y1 >= 350 || y1 <= 50) {
                    sign = -sign;
                }
                _this.drawWave(ctx,y1,y2,my_gradient)
//
            },10)

        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            // 绘制矩形
            drawRect (ctx) {
                ctx.fillStyle = "blue";
                ctx.fillRect(25, 25, 100, 100);
                ctx.clearRect(45, 45, 60, 60)
                ctx.strokeRect(50, 50, 50, 50);
            },
            // 绘制矩形
            drawSmile (ctx) {
                ctx.beginPath();
                ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
                ctx.moveTo(110,75);     // moveTo 等于说是抬笔 去下个地方再落笔；如果没有moveTo则是连笔画
                ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
                ctx.moveTo(65,65);
                ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
                ctx.moveTo(95,65);
                ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
                ctx.stroke();
            },
            // 绘制路径
            drawPath (ctx) {
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
            drawArc (ctx) {
                // 弧度=(Math.PI/180)*角度。
                ctx.beginPath();
                ctx.arc(200, 200, 100, 0,(Math.PI/180)*180,false); // 默认 false为顺时针 true为逆时针
                ctx.stroke();
                ctx.closePath();
            },
            // 绘制二次贝塞尔曲线
            drawQuadraticCurveTo (ctx) {
                ctx.beginPath();
                ctx.moveTo(75,25);
                ctx.quadraticCurveTo(25,25,25,62.5);
                ctx.quadraticCurveTo(25,100,50,100);
                ctx.quadraticCurveTo(50,120,30,125);
                ctx.quadraticCurveTo(60,120,65,100);
                ctx.quadraticCurveTo(125,100,125,62.5);
                ctx.quadraticCurveTo(125,25,75,25);
                ctx.stroke();
            },
            // 绘制三次贝塞尔曲线
            drawBezierCurveTo (ctx) {
                ctx.beginPath();
                ctx.moveTo(75,40);
                ctx.bezierCurveTo(75,37,70,25,50,25);
                ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
                ctx.bezierCurveTo(20,80,40,102,75,120);
                ctx.bezierCurveTo(110,102,130,80,130,62.5);
                ctx.bezierCurveTo(130,62.5,130,25,100,25);
                ctx.bezierCurveTo(85,25,75,37,75,40);
                ctx.fill();
            },
            // 利用三次贝塞尔曲线 绘制波浪
            drawWave (ctx,y1,y2,fillStyle) {
                ctx.beginPath();
                ctx.moveTo(0,400);
                ctx.lineTo(0,200);
//                ctx.moveTo(0,200);
                ctx.bezierCurveTo(175,y1,225,y2,400,200);
                ctx.lineTo(400,400);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = fillStyle;
                ctx.fill();
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
