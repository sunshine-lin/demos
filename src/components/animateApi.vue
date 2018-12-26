<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--animteApi组件用途
    props:
    events:
    slots:
    use:
  -->
    <div class="animteApi">
      <el-table  :data="tableData" ref="table" id="table"
                 @mouseenter.native="mouseenterTable"
                 @mouseleave.native="mouseleaveTable"
        style="width: 600px" height="200px"  stripe>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <el-button type="primary">增加</el-button>
    </div>
</template>

<script>
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
              },{
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
        watch: {},
        created() {
        },
        mounted() {
          this.animateApi = document.querySelector('.el-table__body').animate([
            // keyframes
            { transform: 'translateY(152px)' },
            { transform: 'translateY(-100%)' }
          ], {
            // timing options
            duration: 10000,
            iterations: Infinity
          });
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
          mouseenterTable () {
            this.animateApi.pause()
          },
          mouseleaveTable () {
            this.animateApi.play()
          },
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    .animteApi {
      .el-table__body-wrapper{
        overflow: hidden;
      }
      .el-table__body{
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 100%;*/
      }
    }


</style>
