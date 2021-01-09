<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <!--
    css 通过  position: sticky; 来实现
  -->
    <div class="comBox" id="navCom">
      <div class="pageTitle">页面标题123123</div>
      <div class="box">
        <p class="title">标题1111</p>
        <p v-for="(item,index) in 50" :key="`p_${index}`"
           style="line-height: 30px;border-bottom: 1px solid #ddd;">{{item}}</p>
      </div>
      <div class="box">
        <p class="title">标题2222</p>
        <p v-for="(item,index) in 50" :key="`p_${index}`"
           style="line-height: 30px;border-bottom: 1px solid #ddd;">{{item}}</p>
      </div>
      <div>
        <el-table
                :data="tableData"
                style="width: 100%">
          <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="address"
                  label="地址">
          </el-table-column>
        </el-table>
      </div>
      <div class="bottomTitle">页面底部123123</div>
    </div>
</template>

<script>
  import $ from 'jquery';
    export default {
        name: 'navCom',
        data() {
            return {
              activeIndex: '1',
              activeIndex2: '1',
              scrolltop: 0,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        created() {
        },
        mounted() {

        },
        activated() {
//          $('#navCom').on('scroll',(ev)=>{
//            // console.log($('#navCom .el-menu').position().top)
//            this.scrolltop = ev.target.scrollTop;
//          })
        },
        deactivated() {
        },
        watch: {
//          scrolltop (newVal,oldVal) {
//              if (newVal > oldVal) {
//                $('#navCom .el-menu').css({position: 'absolute'})
//              } else {
//                if (newVal > 60) {
//                  $("#navCom .el-menu").css({position: 'fixed'});
//                }
//              }
//          }
        },
        methods: {
          handleSelect(key, keyPath) {
            // console.log(key, keyPath);
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    #navCom {
      overflow: auto;
      .pageTitle{
        position: sticky;
        top: 0;
        z-index: 11;
        font-size: 20px;
        line-height: 40px;
        background: #3eb1ff;
      }
      .bottomTitle{
        position: sticky;
        bottom: 0;
        font-size: 20px;
        line-height: 40px;
        background: #3eb1ff;
      }
      .el-menu {
        /*width: 100%;*/
      }
      .box{
        .title{
          position: sticky;
          top: 40px;
          z-index: 12;
          background: #f99;
        }
      }
    }
</style>
