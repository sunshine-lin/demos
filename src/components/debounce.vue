<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--debounce组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="debounce" class="comBox">
        debounce
    </div>
</template>

<script>
    export default {
        name: 'debounce',
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
            var _this = this;
            // $(window).on('resize',_this.debounce(_this.log,1000))
            // $(window).on('resize',_this.delay(_this.log,1000))
            // $(window).on('mousewheel',_this.debounce(_this.log,1000))
            $(window).on('mousewheel',_this.delay(_this.log,1000))
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            log () {
                console.log(222)
            },
            debounce (fn,wait) {
                let timeout = null;
                return function () {
                    (timeout !== null) && clearTimeout(timeout);
                    timeout = setTimeout(fn,wait);
                }
            },
            delay (fn,wait) {
                let sw = true;
                return function () {
                    if(!sw) return;
                    sw = false;
                    setTimeout(function () {
                        fn();
                        sw = true;
                    },wait);
                }
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #debounce {

    }
</style>
