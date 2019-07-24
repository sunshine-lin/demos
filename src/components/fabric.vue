<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--fabric组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="fabric" class="comBox">
        <canvas id="canvas" width="800" height="600"></canvas>
        <canvas id="canvas2" width="800" height="600"></canvas>
    </div>
</template>

<script>
    import {fabric} from 'fabric'

    export default {
        name: 'fabric',
        props: {},
        components: {},
        data() {
            return {
                timer: null
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            window.clearInterval(this.timer)
            var canvas = new fabric.Canvas('canvas');

            // 方形
            var rect = new fabric.Rect({
                top: 100,
                left: 100,
                width: 100,
                height: 100,
                fill: 'red',
                angle: 30
            });

            // 圆形
            var circle = new fabric.Circle({
                top: 200,
                left: 200,
                radius: 100,
                fill: 'green'
            });
            // canvas.add(circle);

            // 三角形
            var triangle = new fabric.Triangle({
                top: 100,
                left: 300,
                width: 100,
                height: 200,
                fill: 'blue'
            });
            // canvas.add(triangle);

            // path 路径
            var path = new fabric.Path('M 500 0 L 600 300 L 550 400 z');
            path.set({
                left: 500,
                top: 100,
                opacity: 0.3
            });
            canvas.add(path);

            // set  + get
            // rect.set({strokeWidth: 5, stroke: 'rgba（100,200,200,0.5）', fill: '#f99'})
            // rect.set({scaleX: 2, scaleY: 3, angle: 30, flipX: 500});
            // console.log(rect.get('width'))
            // setTimeout(() => {
            //     rect.set({left: 200, top: 300})
            //     canvas.renderAll(); // 需要重画
            // }, 3000)

            // 动画 animate
            rect.animate({'angle': '+=360', 'left': '+=300'}, {
                duration: 3000,
                onChange: canvas.renderAll.bind(canvas),
                easing: fabric.util.ease.easeOutCubic,
            })

            // 图片 + 颜色过滤器
            fabric.Image.fromURL(require('./images/logo.png'), (oImg) => {
                oImg.left = 400;
                oImg.top = 100;
                oImg.angle = 10;
                oImg.filters.push(new fabric.Image.filters.Grayscale())
                oImg.filters.push(new fabric.Image.filters.Sepia())
                oImg.filters.push(new fabric.Image.filters.Brightness({brightness: 0.3}))
                oImg.applyFilters()
                canvas.add(oImg);
            })

            // 颜色转换
            var color = new fabric.Color('#f55');
            console.log(color.toHex())
            console.log(color.toRgb())
            console.log(color.toRgba())

            // 渐变
            var circle = new fabric.Circle({
                left: 300,
                top: 300,
                radius: 100
            })
            circle.setGradient('fill', {
                x1: 0,  // 这是个属性决定了渐变的路线
                y1: 0,
                x2: circle.width,
                y2: 0,
                colorStops: {
                    0: 'blue',
                    0.2: 'orange',
                    0.4: 'yellow',
                    0.6: 'green',
                    0.8: 'cyan',
                    1: 'red',
                }
            })
            // canvas.add(circle)

            // 文本
            var text = new fabric.Text(`this is\na multiline\ntext\naligned right!`, {
                left: 100,
                top: 100,
                fontFamily: 'Comic Sans',
                fontSize: 40,
                fill: '#f99',
                fontWeight: 800,
                overline: true,    //textDecoration三种 underline linethrough overline
                shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
                stroke: '#c3bfbf',
                strokeWidth: 3,
                textAlign: 'right',
                lineHeight: 1.5,
                textBackgroundColor: 'green',
            });
            canvas.add(text);

            // 事件
            // canvas.on('mouse:down', function(options) {
            //     console.log(options.e.clientX, options.e.clientY);
            // });
            canvas.on('after:render',()=>{
                console.log('after:render')
            })
            text.on('selected', function(options) {
               console.log('selected',arguments)
            }).on('moving', function(ev) {
               // console.log('moving',ev)
               console.log('moving',ev.e.offsetX,ev.e.offsetY)
            }).on('scaling', function(options) {
               console.log('scaling',arguments)
            }).on('rotating', function(options) {
               console.log('rotating',arguments)
            }).on('added', function(options) {
               console.log('added')
            });

            // group 群组
            var rect = new fabric.Rect({
                width: 100,
                height: 100,
                fill: 'red'
            })
            var circle = new fabric.Circle({
                radius: 30,
                fill: 'blue'
            })
            var ellipse = new fabric.Ellipse({
               rx: 30,
                ry: 100,
                fill: 'red'
            })
            var group = new fabric.Group([rect,circle,ellipse],{
                left: 100,
                top: 100,
                angle: 30,
            })
            canvas.add(group);
            group.item(0).set('fill','green');
            group.item(1).set('fill','yellow');
            group.add(new fabric.Path(`M 0 0 L 100 100 L 200 100 z`))
            group.set({     // 可以设定整个group的属性
                left: 50,
                top: 50,
                angle: 45,
                scaleX: 1.2,
                scaleY: 2,
            })
            // 获取组对象
            console.log(111111,group.getObjects())
            console.log(canvas.toDataURL()) // 默认png格式
            console.log('rect',rect.toJSON())
            // toJSON
           /* angle: 0
            backgroundColor: ""     // 文字背景
            clipTo: null
            fill: "green"
            fillRule: "nonzero"
            flipX: false
            flipY: false
            globalCompositeOperation: "source-over"
            height: 100
            left: -50.5
            opacity: 1
            originX: "left"
            originY: "top"
            paintFirst: "fill"
            rx: 0   // 椭圆的x半径
            ry: 0
            scaleX: 1
            scaleY: 1
            shadow: null
            skewX: 0
            skewY: 0
            stroke: null
            strokeDashArray: null
            strokeDashOffset: 0
            strokeLineCap: "butt"
            strokeLineJoin: "miter"
            strokeMiterLimit: 4
            strokeWidth: 1
            top: -50.5
            transformMatrix: null
            type: "rect"
            version: "3.3.0"
            visible: true
            width: 100*/
            console.log('toSVG',rect.toSVG())

            // 绘画
            var canvas2 = new fabric.Canvas('canvas2')
            canvas2.isDrawingMode = false;   // isDrawingMode => true 为可绘画状态，现在的绘画状态模式会漂移;
            canvas2.freeDrawingBrush.color = '#f99';
            canvas2.freeDrawingBrush.width = '4';
            // canvas2.toDataURL()      // 绘画完 isDrawingMode转为false 使用这个方法把canvas转为base64格式 传给后端
            // setTimeout(()=>{
            //     canvas2.isDrawingMode = false
            // },5000)

            // 锁定对象
            var rect = new fabric.Rect({
                width: 100,
                height: 100,
                hasControls: false, // 这三项实现全锁
                lockMovementX: true,
                lockMovementY: true,
                stroke: 'red',
                strokeWidth: 3,
                strokeDashArray:[2,2]   // 虚线
            })

            // 设置画布背景
            canvas2.setBackgroundImage(require('./images/logo.png'))
            // canvas2.add(rect)

            var line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: 'black', objectCaching: false });
            line.path[0][1] = 100;
            line.path[0][2] = 100;

            line.path[1][1] = 200;
            line.path[1][2] = 200;

            line.path[1][3] = 300;
            line.path[1][4] = 100;
            // canvas2.add(line)

            // 利用sin正弦函数 制作动态的水波
            var line2 = null;
            var num = 0;
            function run (num) {
                var str = 'M 0 200 ';
                for (let i = num;i<80 + num;i+=0.1) {
                    var y = Math.sin(i)*5 + 100;
                    console.log(y)
                    str += `L ${(i-num)*10} ${y} `
                }
                line2 = new fabric.Path(str + 'L 800 200 z')
                line2.setGradient('fill', {
                    x1: 0,  // 这是个属性决定了渐变的路线
                    y1: 0,
                    x2: 0,
                    y2: circle.height,
                    colorStops: {
                        0: '#87CEFA',
                        1: '#00BFFF',
                    }
                });
                canvas2.add(line2)
            }
            this.timer = setInterval(()=>{
                num += 0.2;
                canvas2.clear();
                run(num)
            },10)
        },
        activated() {

        },
        deactivated() {
        },
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #fabric {
        background: gray;

        canvas {
            background: white;
            border: 1px solid #ddd;
        }
    }
</style>
