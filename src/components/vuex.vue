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
        <div>{{obj.age}}</div>
        <div>store.state.a - {{$store.state.a.count}}</div>
        <div>store.state.b - {{$store.state.b.count}}</div>
        <el-button @click="btnClick('add')">增加</el-button>
        <el-button @click="btnClick('addAsync')">异步增加</el-button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'vuex',
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
                obj: 'obj',
                countPlusLocalState(state) {
                    return this.localCount
                }
            }),
            ...mapGetters([
                'countGet',
            ]),

        },
        watch: {},
        created() {
        },
        mounted() {

        },
        activated() {
            // console.log(11111,this.truthy(0))
        },
        deactivated() {
        },
        methods: {
            ...mapMutations([
                'increment',
            ]),
            ...mapActions([
                'incrementAsync',
            ]),
            btnClick(from) {
                switch (from) {
                    case 'add':
                        this.increment({num: 200})
                        break;
                    case 'addAsync':
//                        this.$store.dispatch('incrementAsync',{num: this.localCount++})
                        this.incrementAsync({num: this.localCount++})
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
