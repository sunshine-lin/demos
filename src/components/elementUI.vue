<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--elementUI组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="elementUI" class="comBox">
        <el-input v-model="inputValue" type="password" placeholder="请输入内容" show-password></el-input>
    </div>
</template>

<script>
    export default {
        name: 'elementUI',
        props: {},
        components: {},
        data() {
            return {
                inputValue: ''
            }
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
    #elementUI {

    }
</style>
