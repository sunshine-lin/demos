<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="shoppingCart" class="comBox">
        <div id="start">
            <div class="flyItem">
                <div class="flyItemInner"></div>
            </div>
        </div>
        <div id="end">{{totalNum}}</div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'shoppingCart',
        data() {
            return {
                totalNum: 0
            }
        },
        created() {
        },
        mounted() {
            $('#start').on('click', () => {
                var offsetX = $('#end').offset().left - $('#start').offset().left;
                var offsetY = $('#end').offset().top - $('#start').offset().top;
                $('.flyItem').css({
                    display: 'block',
                    transition: `transform 0.5s`,
                    'transition-timing-function': 'linear',
                    transform: `translateX(${offsetX}px)`,
                });
                $('.flyItem').find('.flyItemInner').css({
                    transition: `transform 0.5s`,
                    'transition-timing-function': 'cubic-bezier(.55,0,.85,.36)',
                    transform: `translateY(${offsetY}px)`,
                });
                setTimeout(() => {
                    this.totalNum += 1;
//                    flyItem.remove();
                    $('.flyItem').css({
                        display: '',
                        transition: `none`,
                        transform: `translateX(0)`
                    })
                    $('.flyItemInner').css({
                        transition: `none`,
                        transform: `translateY(0)`,
                    })
                }, 500)
            })
        },
        activated() {
        },
        deactivated() {
        },
        watch: {},
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss">
    #shoppingCart {
        position: relative;
    }

    #start {
        position: absolute;
        left: 200px;
        top: 100px;
        width: 100px;
        height: 100px;
        background: #f99;
    }

    #end {
        position: absolute;
        right: 200px;
        bottom: 100px;
        width: 100px;
        height: 100px;
        background: cadetblue;
    }

    .flyItem, .flyItemInner{
        width: 100%;
        height: 100%;
    }

    .flyItemInner {
        background: #f99;
        opacity: 0.5;
    }
    #end{
        font-size: 40px;
        line-height: 100px;
        color: #fff;
        text-align: center;
    }

</style>
