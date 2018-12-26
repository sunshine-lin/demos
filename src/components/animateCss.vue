<!-- created by sunshine-lin in 2018.10.10 -->
<template>
  <div class="comBox" id="animateCss">
    <el-button @click="btnClick">animte</el-button>
    <div>
      <transition name="animateClass" appear
                  enter-active-class="animated tada fast infinite"
                  leave-active-class="animated bounceOutRight faster">
        <el-button class="btn" type="primary" v-show="visible">按钮</el-button>
      </transition>
    </div>
    <el-button @click="list.push(list.length + 1)">add</el-button>
    <el-button @click="list.pop()">delete</el-button>
    <el-button @click="shuffClick">shuff</el-button>

    <!--<ul>-->
      <!--<transition-group tag="ul" name="flip-list">-->
      <transition-group enter-active-class="animated lightSpeedIn fast" tag="ul"
                        leave-active-class="animated lightSpeedOut faster">
        <li v-for="(item,index) in list" :key="`li_${index}`" class="item">{{item}}
        <el-button icon="el-icon-delete" @click="list.splice(index,1)">删除</el-button></li>
      </transition-group>
      <!--</transition-group>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import 'animate.css';

  export default {
    name: 'animateCss',
    data() {
      return {
        visible: true,
        list: [1, 2, 3, 4, 5, 6]
      }
    },
    created() {
    },
    mounted() {
    },
    activated() {
    },
    deactivated() {
    },
    watch: {},
    methods: {
      btnClick() {
        this.visible = !this.visible;
      },
      shuffClick () {
        this.list = this._.shuffle(this.list)
      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
  #animateCss {
    ul {
      width: 200px;
    }
    .item {
      line-height: 3em;
      border-bottom: 1px solid #ddd;
      background: #f99;
    }
    .btn {
      /*animation-duration: 0.5s;*/
      /*animation-delay: 2s;*/
      /*animation-iteration-count: infinite;*/
    }
    .flip-list-move {
      transition: transform 1s;
    }
  }
</style>
