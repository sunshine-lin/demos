<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--scrollSnap组件用途
    props:
    events:
    slots:
    use:
  -->
    <div id="scrollSnap" class="comBox">
        <div class="scroll-x">
            <img src="./images/logo.png" alt="">
            <img src="./images/meinv.jpg" alt="">
        </div>
        <div>{{sidebar}}</div>
        <el-button type="primary" @click="sidebar = !sidebar">按钮</el-button>
    </div>
</template>

<script>
    export default {
        name: 'scrollSnap',
        props: {
            sidebar: ''
        },
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
          
        },
        mounted() {
        },
        activated() {
        },
        deactivated() {
        },
            beforeRouteLeave (to,from,next) {
            if (this.sidebar) {
                next(false)
            } else {
                next()
            }

        },
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #scrollSnap {
        .scroll-x {
            width: 300px;
            scroll-snap-type: x mandatory;
            white-space: nowrap;
            overflow: auto;
        }
        .scroll-x img {
            scroll-snap-align: center;
        }
    }
</style>
