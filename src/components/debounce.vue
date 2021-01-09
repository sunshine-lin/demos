<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--debounce组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="debounce" class="comBox">
        <input type="text" id="input" placeholder="请输入">
    </div>
</template>

<script>
    export default {
        name: 'debounce',
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
            var _this = this;
            // $(window).on('resize',_this.delay(_this.log,1000))
            $(window).on('mousewheel',_this.delay(_this.log,1000))
            // $('#input').on('input',_this.debounce(function () {
            //     // console.log($(this).val())
            // },500))
            $('#input').on('input',_this.throttle(function () {
                // console.log($(this).val())
            },1000))
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            debounce2 (ev) {
                // console.log('ev',ev.target.value)
                // console.log(this.debounce)
                this.debounce(function (ev) {
                    // console.log(ev.target.value)
                },500)
            },
            log (ev) {
                // console.log($(ev).val())
            },
            // debounce (fn,wait) {
            //     var timeout = null;
            //     return function () {
            //         var that = this;
            //         timeout && clearTimeout(timeout);
            //         timeout = setTimeout(function () {
            //             fn.apply(that,arguments)
            //         },wait);
            //     }
            // },
            delay (fn,delay) {
                var timeout = null;
                return function () {
                    var that = this;
                    if (!timeout) {
                         fn.apply(that,arguments)
                         timeout = setTimeout(function () {
                             timeout = null;
                         },delay)
                    }
                    
                }
            },
            inputChange (ev) {
                this.debounce(function () {
                    // console.log(ev.target.value)
                },500)
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #debounce {

    }
</style>
