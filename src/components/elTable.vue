<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--elTable组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="elTableCom" class="comBox">
        <el-table
                :data="tableData3"
                height="250"
                border
                style="width: 80%">
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
                    localStorage.setItem(`${this.$router.name}optionList`,JSON.stringify(newVal))
                },
                deep: true
            }
        },
        created() {
        },
        mounted() {
            $('.el-table__header-wrapper').on('mouseup', (ev) => {
                setTimeout(() => {
                    var tempArr = []
                    $('.el-table__header-wrapper th').each((i, ele) => {
                        tempArr.push($(ele).width())
                    })
                    var widthArr = tempArr.slice(0, -1)
                    widthArr.forEach((item, index) => {
                        this.optionList[index].width = item;
                    })
                    console.log(widthArr, this.optionList)
                }, 500)
            })

        },
        activated () {
            if (localStorage.hasOwnProperty(`${this.$router.name}optionList`)) {
                this.optionList = JSON.parse(localStorage.getItem(`${this.$router.name}optionList`))
            }
        },
        deactivated() {
        },
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss">
    #elTableCom {

    }
</style>
