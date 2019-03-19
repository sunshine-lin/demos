<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--vuex组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="vuex" class="comBox">
        <div>{{countAlias}}</div>
        <div>{{countPlusLocalState}}</div>
        <div>{{count1}}</div>
        <div>{{countGet}}</div>
        <el-button @click="btnClick('add')">增加</el-button>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'vuex1',
        props: {},
        components: {},
        data() {
            return {
                localCount: 22
            }
        },
        computed: {
            ...mapState({
                count1: state => state.count,
                countAlias: 'count',
                countPlusLocalState(state) {
                    return this.localCount
                }
            }),
            ...mapGetters([
                'countGet',
            ])
        },
        watch: {},
        created() {
        },
        mounted() {

        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            btnClick(from) {
                switch (from) {
                    case 'add':
                        this.$store.commit('increment')
                        break;
                }
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #vuex {

    }
</style>
