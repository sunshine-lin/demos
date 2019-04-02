<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--animteApi组件用途
    props:
    events:
    slots:
    use:
  -->
    <div class="animteApi">
        <!--<el-table :data="tableData" ref="table" id="table"-->
                  <!--@mouseenter.native="mouseenterTable"-->
                  <!--@mouseleave.native="mouseleaveTable"-->
                  <!--style="width: 600px" height="200px" stripe>-->
            <!--<el-table-column prop="date" label="日期" width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="name" label="姓名" width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="address" label="地址"></el-table-column>-->
        <!--</el-table>-->
        <el-button type="primary">增加</el-button>
        <div class="textBox" v-roll="50">
            <span class="text">这里打分卡地方垃圾地方可垃圾诶阿萨德离开房间爱上了对方！！</span>
        </div>
        <div class="textBox" v-roll="70">
            <span class="text">ladsjf ladjf lasdjf alsdjf alsdjf adf asf ！！</span>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'animteApi',
        props: {},
        components: {},
        data() {
            return {
                animateApi: null,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎4',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎5',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎6',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎7',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎8',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            var str = 'translateY(0px)';
            setTimeout(()=>{
                str = 'translateY(152px)';
//                this.animate(str);
            },5000);
//            this.animate(str);
//            this.animateText();
        },
        activated() {

        },
        deactivated() {
        },
        methods: {
            animate (str) {
                this.animateApi = document.querySelector('.el-table__body').animate([
                    // keyframes
                    {transform: str},
                    {transform: 'translateY(-100%)'}
                ], {
                    // timing options
                    duration: 5000,
                    iterations: Infinity,
                })
            },
            animateText (speed = 50) {
                var boxLength = $('.textBox').width();
                var textLength = $('.text').width();
                document.querySelector('.text').animate([
                    {transform: `translateX(0px)`},
                    {transform: `translateX(-${textLength}px)`},
                ], {
                    duration: textLength*1000 / speed,
                    iterations: 1,
                });
                setTimeout(()=>{
                    document.querySelector('.text').animate([
                        {transform: `translateX(${boxLength}px)`},
                        {transform: `translateX(-${textLength}px)`},
                    ], {
                        duration: (boxLength + textLength)*1000 / speed,
                        iterations: Infinity,
                    })
                },textLength*1000 / speed)
            },
            mouseenterTable() {
                this.animateApi.pause()
            },
            mouseleaveTable() {
                this.animateApi.play()
            },
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    .animteApi {
        .el-table__body-wrapper {
            overflow: hidden;
        }
        .el-table__body {
            /*position: absolute;*/
            /*left: 0;*/
            /*top: 100%;*/
        }
    }
    .textBox{
        border: 1px solid #ddd;
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        line-height: 30px;
        height: 50px;
        .text{

            color: #ff9999;
        }
    }


</style>
