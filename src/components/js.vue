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
            btnClick (from) {
                switch (from) {
                    case 'toTop':
                        document.scrollingElement.scrollTop = 0
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
