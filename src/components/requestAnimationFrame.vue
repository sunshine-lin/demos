<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--requestAnimationFrame组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="requestAnimationFrame" class="comBox">
        requestAnimationFrame
    </div>
</template>

<script>
    export default {
        name: 'requestAnimationFrame',
        props: {},
        components: {},
        data() {
            return {
                progress: 1,
                raf: null,
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            this.step()
//            this.raf = window.requestAnimationFrame(this.step);
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            step () {
                this.progress += 1;
                console.log('progress',this.progress);
                if (this.progress == 40) {
                    // 取消动画
                    window.cancelAnimationFrame(this.raf);
                } else if (this.progress < 60) {
                    window.requestAnimationFrame(this.step);
                }
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #requestAnimationFrame {

    }
</style>
