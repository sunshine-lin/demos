<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="demoCom" class="comBox">
        <div id="box"></div>
    </div>
</template>

<script>
    export default {
        name: 'demoCom',
        data() {
            return {}
        },
        created() {
        },
        mounted() {

        },
        activated() {
            var start = null;
            var element = document.getElementById('box');
            function step(timestamp = new Date().getTime()) {
                if (!start) start = timestamp;
                var progress = timestamp - start;
                console.log(progress)
                element.style.left = Math.min(progress / 10, 400) + 'px';
                if (progress < 4000) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        },
        deactivated() {
        },
        watch: {},
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>
    #demoCom {
        position: relative;
        #box{
            width: 50px;
            height: 50px;
            background: #f99;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>
