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
    </div>
</template>

<script>
    export default {
        name: 'scrollSnap',
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
        },
        activated() {
        },
        deactivated() {
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
