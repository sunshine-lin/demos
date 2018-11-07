<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--cookie组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div class="cookie">
        cookie
    </div>
</template>

<script>
    import $ from 'jquery';
    import 'static/lib/js/jquery.cookie.min'
    export default {
        name: 'cookie',
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
//            $.cookie('name1',111);
            $.cookie.raw = true; // 默认为false，读取和写入时候自动进行编码和解码（使用encodeURIComponent编码，使用decodeURIComponent解码），关闭这个功能，请设置为true。
            $.cookie.json = true;// 默认为false，读取和写入时候支持json 不需要JSON.stringify
            $.cookie('name2', {name: '张三'}, { expires: 7 });
            $.cookie('name3', '333', { expires: 7, path: '/' });
            console.log($.cookie('name3'))
            console.log($.cookie())
            console.log($.removeCookie('name1'))        // 删除存在的cookie 返回true 否则返回false
            $.removeCookie('name3', { path: '/' }); // => true
            $.cookie('name', 'value', { domain: 'weber.pub' });     // 创建cookie所在网页所拥有的域名
            $.cookie('name', 'value', { secure: true }); // secure默认是false，如果为true，cookie的传输协议需为https；
        },
        activated() {
        },
        deactivated() {
        },
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss">
    .cookie {

    }
</style>
