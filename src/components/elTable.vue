<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--elTable
    props:
    events:
    slots:
    use:
  -->
    <div id="elTableCom" class="comBox">
        <el-table v-if="tableShow" :data="tableData3" ref="table"
                  height="250"
                  border
                  style="width: 80%"
        @header-dragend="headerDragend">
            <el-table-column v-for="(item,index) in optionList" :key="`table_${index}`"
                             :prop="item.value" :label="item.label" :min-width="item.width">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import $ from 'jquery';
    import Sortable from 'sortablejs';

    export default {
        name: 'elTableCom',
        props: {},
        components: {},
        data() {
            return {
                tableShow: true,
                optionList: [
                    {label: '日期', value: 'date', width: 'auto'},
                    {label: '姓名', value: 'name', width: 'auto'},
                    {label: '地址', value: 'address', width: 'auto'},
                ],
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        computed: {},
        watch: {
            optionList: {
                handler(newVal, oldVal) {

//                    localStorage.setItem(`${this.$router.name}optionList`,JSON.stringify(newVal))
                },
                deep: true
            }
        },
        created() {
        },
        mounted() {
            $('.el-table__header-wrapper tr th').attr('draggable',true)
            $('.el-table__header-wrapper tr th').on('dragstart',(ev)=>{
                // console.log(ev.target)
            })
            $('.el-table__header-wrapper tr th').on('dragover',(ev)=>{
                ev.preventDefault()
            })
            $('.el-table__header-wrapper tr th').on('drop',(ev)=>{
                // console.log(ev.target)
            })
//            $('.el-table__header-wrapper').on('mouseup', (ev) => {
//                setTimeout(() => {
////                    var tempArr = [];
//                    var tempObj = {};
//                    $('.el-table__header-wrapper th').each((i, ele) => {
////                        var obj = {};
//                        if ($(ele).text()) {
//                            tempObj[$(ele).text()] = $(ele).width();
//                        }
//                    })
////                    var widthArr = tempArr.slice(0, -1)
////                    widthArr.forEach((item, index) => {
////                        this.optionList[index].width = item;
////                    })
//                    this.optionList.forEach((item,index)=>{
//                        item.width = tempObj[item.label]
//                    })
//                }, 500)
//            })
            this.sortable();

        },
        updated() {
//            this.$nextTick(()=>{
            setTimeout(()=>{
//                this.sortable();
            },500)

//            })
        },
        activated() {
//            if (localStorage.hasOwnProperty(`${this.$router.name}optionList`)) {
//                this.optionList = JSON.parse(localStorage.getItem(`${this.$router.name}optionList`))
//            }
        },
        deactivated() {
        },
        methods: {
            sortable() {
                var _this = this;
                var ele = $('.el-table__header tr')[0];
                Sortable.create(ele, {
                    sort: true,
                    onEnd: function (evt) {
                        [_this.optionList[evt.newIndex], _this.optionList[evt.oldIndex]] = [_this.optionList[evt.oldIndex], _this.optionList[evt.newIndex]];
                        _this.tableShow = false;
                        setTimeout(() => {
                            _this.tableShow = true;
                        }, 0)
                    }
                })
            },
            // 当拖动表头改变了列的宽度的时候会触发该事件	newWidth, oldWidth, column, event
            headerDragend (newWidth, oldWidth, column, event) {
                // console.log('newWidth, oldWidth, column, event',newWidth, oldWidth, column, event)

                this.optionList.map(item =>{
                    if (item.value === column.property) {
                        return item.width = newWidth
                    }
                })
                // console.log('this.optionList',this.optionList)
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    #elTableCom {

    }
</style>
