<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="navCom">
      <div class="box">
        <p v-for="(item,index) in 2" :key="`p_${index}`"
           style="line-height: 30px;border-bottom: 1px solid #ddd;">{{item}}</p>
      </div>
      <transition name="el-zoom-in-top">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>

      </transition>
      <div class="box">
        <p v-for="(item,index) in 30" :key="`p_${index}`"
           style="line-height: 30px;border-bottom: 1px solid #ddd;">{{item}}</p>
      </div>

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
            }
        },
        created() {
        },
        mounted() {

        },
        activated() {
          $('#navCom').on('scroll',(ev)=>{
            console.log($('#navCom .el-menu').position().top)
            this.scrolltop = ev.target.scrollTop;
          })
        },
        deactivated() {
        },
        watch: {
          scrolltop (newVal,oldVal) {
              if (newVal > oldVal) {
                $('#navCom .el-menu').css({position: 'absolute'})
              } else {
                if (newVal > 60) {
                  $("#navCom .el-menu").css({position: 'fixed'});
                }
              }
          }
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    #navCom {
      position: relative;
      overflow: auto;
      /*padding-top: 60px;*/
      .el-menu {
        position: absolute;
        /*left: 0;*/
        /*top: 0;*/
        width: 100%;
      }
      .box{
        position: absolute;
        width: 100%;
        /*padding-top: 60px;*/
      }
    }
</style>
