<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--js组件用途
    使用document.scrollingElement 控制窗体滚动高度 解决了最外围的body滚动问题
    使用wavesurfer.js显示mp3 audio音频的波形图
    -->
    <div id="js" class="comBox">
        <!--<ul class="scrollingElement">-->
            <!--<li class="item" v-for="item in 100" :key="item">{{item}}</li>-->
            <!--<li @click="btnClick('toTop')">回到顶部</li>-->
        <!--</ul>-->
        <div id="waveform"></div>
        <el-button type="primary" @click="btnClick('Notification')">Notification</el-button>
    </div>
</template>

<script>
//    import '@/assets/js/wavesurfer.min.js';
    export default {
        name: 'js',
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
            var flag = true;
            flag && this.fun1();
            console.log(33333)
        },
        mounted() {
            console.log(document.scrollingElement.scrollTop)
            var encodeData = btoa(123456);
            var decodeData = atob(encodeData);
            console.log(decodeData)

//            var wavesurfer = WaveSurfer.create({
//                container: '#waveform'
//            });
//            wavesurfer.load('//image.zhangxinxu.com/audio/zxx.mp3');
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            fun1 () {
                console.log('fun1')
            },
            btnClick (from) {
                switch (from) {
                    case 'toTop':
                        document.scrollingElement.scrollTop = 0
                        break;
                    case 'Notification':
                        Notification.requestPermission().then(function(res) {
                            console.log(res)
                            if (res !== 'granted') return;

                            var notice = new Notification('这是一个通知', {
                                dir: 'auto',
                                body: '通知的内容',
                                tag: 'div',
                                icon: '//image.zhangxinxu.com/image/study/s/s128/mm1.jpg',
                                data: 'datadata123',        // 用来传参
                                vibrate: [200, 100, 200],
                                renotify: true,
                                silent: false,
                                sticky: false,
                            })
                            setTimeout(function () {
                                notice.close()
                            },2000)
                            notice.onclick = function () {
                                console.log('点击了通知:' + notice.data);
                                notice.close()
                            }
                            // result可能是是granted, denied, 或default.
                        });
                        break;
                }
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #js {

    }
</style>
