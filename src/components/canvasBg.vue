<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--canvasBg组件用途
    props:
    events:
    slots:
    use:
  -->
    <div id="canvasBg" class="comBox">
        <!--@mouseenter="canvasMouseenter"
        @mousemove="canvasMousemove"
        @mouseleave="canvasMouseleave"-->
        <canvas id="canvas" width="150" height="150">
            <!-- 如不支持 则显示 -->
            <span>对不起，你的浏览器不支持canvas</span>
        </canvas>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'canvasBg',
        props: {},
        components: {},
        data() {
            return {
                posArr: [],
                randomArr: [],
                randomArrInit: [],
                mouseX: null,
                mouseY: null,
            }
        },
        computed: {},
        watch: {},
        created() {

        },
        mounted() {
            var canvas = document.querySelector('#canvas');
            // 需要用js方法设置宽高 css无效
            var container = document.querySelector('#canvasBg');
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            var canvas = document.querySelector('#canvas');
            // 判断是否支持获取上下文
            if (!canvas.getContext) return;
            var ctx = canvas.getContext('2d');
            // 初始化 posArr randomArr
            for (let i = 0; i < 60; i++) {
                var obj = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 10 + 10,
                };
                var obj2 = {
                    rx: Math.random() * (Math.random() > 0.5 ? 1 : -1),
                    ry: Math.random() * (Math.random() > 0.5 ? 1 : -1),
                };
                this.posArr.push(obj);
                this.randomArr.push(obj2);
            }
            this.randomArrInit = JSON.parse(JSON.stringify(this.randomArr));
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            this.drawBg(ctx, canvas);
            this.drawAnimation(ctx, canvas);
            // 鼠标事件
            $('#canvas').on('mouseenter',(ev)=>{
                this.mouseX = ev.offsetX;
                this.mouseY = ev.offsetY;
                $(document).on('mousemove',(event)=>{
                    this.mouseX = event.offsetX;
                    this.mouseY = event.offsetY;
                })
            })
            $('#canvas').on('mouseleave',(ev)=>{
                $('#canvas').off('mouseenter')
                this.mouseX = null;
                this.mouseY = null;
            })
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            // 绘制状态帧
            drawBg(ctx, canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0, length = this.posArr.length; i < length; i++) {
                    // 绘制圆
                    ctx.beginPath();
                    ctx.arc(this.posArr[i].x, this.posArr[i].y, this.posArr[i].r, 0, Math.PI * 2);
                    ctx.fill();
                    // 绘制鼠标线
                    if (this.mouseX && this.mouseY) {
                        var mouseAbsNum = Math.sqrt((this.posArr[i].x - this.mouseX) ** 2 + (this.posArr[i].y - this.mouseY) ** 2)
                        if (mouseAbsNum < 300) {
                            ctx.moveTo(this.posArr[i].x, this.posArr[i].y);
                            ctx.lineTo(this.mouseX, this.mouseY);
                            ctx.stroke();
                            // 处理鼠标影响范围内的randomArr
                            if (mouseAbsNum < 100) {
                                this.$set(this.randomArr[i],'rx',0);
                                this.$set(this.randomArr[i],'ry',0);
                            } else {
                                this.$set(this.randomArr[i],'rx',(this.mouseX - this.posArr[i].x)/50);
                                this.$set(this.randomArr[i],'ry',(this.mouseY - this.posArr[i].y)/50);
                            }
                        } else {
                            this.randomArr[i].rx = this.randomArrInit[i].rx;
                            this.randomArr[i].ry = this.randomArrInit[i].ry;
//                            this.$set(this.randomArr[i],'rx',this.randomArrInit[i].rx);
//                            this.$set(this.randomArr[i],'ry',this.randomArrInit[i].ry);
                        }
                    } else {
                        this.randomArr = JSON.parse(JSON.stringify(this.randomArrInit));
                    }
                    // 绘制圆与圆之间的连接线
                    for (let j = 0; j < length; j++) {
                        if (i === j) continue;
                        ctx.beginPath();
                        var absNum = Math.sqrt((this.posArr[i].x - this.posArr[j].x) ** 2 + (this.posArr[i].y - this.posArr[j].y) ** 2)
                        if (absNum < 300) {
                            ctx.moveTo(this.posArr[i].x, this.posArr[i].y);
                            ctx.lineTo(this.posArr[j].x, this.posArr[j].y);
                            ctx.stroke();
                        }
                    }
                }
            },
            // 绘制动画
            drawAnimation(ctx, canvas) {
                var arr = [];
                for (let i = 0, length = this.posArr.length; i < length; i++) {
                    var obj = this.posArr[i];
                    obj.x += this.randomArr[i].rx;
                    obj.y += this.randomArr[i].ry;
                    // 处理边界
                    if (obj.x > canvas.width + obj.r) {
                        obj.x = -obj.r;
                    }
                    if (obj.y > canvas.height + obj.r) {
                        obj.y = -obj.r;
                    }
                    if (obj.x < -obj.r) {
                        obj.x = canvas.width + obj.r;
                    }
                    if (obj.y < -obj.r) {
                        obj.y = canvas.height + obj.r;
                    }
                    arr.push(obj)
                }
                this.posArr = arr;
                this.drawBg(ctx, canvas);
                window.requestAnimationFrame(() => {
                    this.drawAnimation(ctx, canvas)
                })
            },
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #canvasBg {
        font-size: 0;
    }
</style>
