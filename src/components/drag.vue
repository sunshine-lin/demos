<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="drag">
        <div id="dragBox">
            <div class="item" :data-index="index"
            v-for="(item,index) in arr" :key="index">{{item}}</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'drag',
        data() {
            return {
                arr: [1,2,3,4]
            }
        },
        created() {

        },
        mounted() {
            $('.item').attr('draggable',true)
            $('.item').on('dragstart',(ev)=>{
                ev.originalEvent.dataTransfer.setData('ele',ev.target.dataset.index)
//                ev.originalEvent.dataTransfer.ele = ev.target;
                console.log(1111,ev.originalEvent.dataTransfer.getData('ele'))
            })
            $('.item').on('dragover',(ev)=>{
                ev.preventDefault()
            })
            $('.item').on('drop',(ev)=>{
                var oldIndex = ev.originalEvent.dataTransfer.getData('ele');
                var newIndex = ev.target.dataset.index;
                [this.arr[oldIndex],this.arr[newIndex]] = [this.arr[newIndex],this.arr[oldIndex]];
                this.$forceUpdate()
//                console.log(4444,ev.originalEvent.dataTransfer.getData('ele'))
//                $(ev.originalEvent.dataTransfer.getData('ele')).remove()
//                $(ev.target).insertBefore(ev.originalEvent.dataTransfer.getData('ele'))
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
    #drag {
        #dragBox{
            .item{
                width: 100px;
                height: 100px;
                outline: 1px solid #ddd;
            }
        }
    }
</style>
