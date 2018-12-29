<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="grid" class="comBox">
        <div class="gridBox container">
          <div class="item" v-for="(item,index) in 12" :key="index">{{item}}</div>
            <!--<div class="putao">putao</div>-->
            <!--<div class="longxia">longxia</div>-->
            <!--<div class="yangyu">yangyu</div>-->
            <!--<div class="xigua">xigua</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'grid',
        data() {
            return {}
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
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>
    #grid {
      .gridBox{

        width: 60%;
        height: 400px;
        margin: 50px auto 0;
        outline: 2px solid #000;
        display: grid;
        /*grid-template-columns: 80px auto 100px;*/
        /*grid-template-columns: repeat(3,auto);*/
        /*grid-template-columns: repeat(3,1fr);*/
        /*grid-template-rows: 25% 100px auto 60px;*/
        /*grid-template-rows: repeat(4,auto);*/
        /*grid-template-areas:*/
          /*"葡萄 葡萄 葡萄"*/
          /*"龙虾 养鱼 养鱼"*/
          /*"龙虾 养鱼 养鱼"*/
          /*"西瓜 西瓜 西瓜";*/

      /* 简写 */
        /*<!--grid-template:-->*/
          /*<!--"葡萄 葡萄 葡萄" 1fr-->*/
          /*<!--"龙虾 养鱼 养鱼" 1fr-->*/
          /*<!--"龙虾 养鱼 养鱼" 1fr-->*/
          /*<!--"西瓜 西瓜 西瓜" 1fr-->*/
        /*<!--/300px 200px 200px;-->*/
        grid: repeat(4,100px)/repeat(3,200px);
        /*grid-column-gap: 10px;*/
        /*grid-row-gap: 15px;*/
        grid-gap: 15px 10px;
        /*justify-content指定了网格元素的水平分布方式。此属性仅在网格总宽度小于grid容器宽度时候有效果*/
        /*justify-content: space-evenly;*/
        /*align-content: space-evenly;*/
        /* 简写 */
        /*place-content: space-evenly center;*/
        grid-auto-columns: 100px;
        grid-auto-rows: 100px;
        div{
          /*justify-self: stretch ;*/
          /*align-self: stretch ;*/
          place-items: stretch stretch;
          background: #f99;

        }
      }
      .putao { grid-area: 葡萄; }
      .longxia { grid-area: 龙虾; }
      .yangyu { grid-area: 养鱼; }
      .xigua { grid-area: 西瓜; }
      .item{
        background: #f99;
      }

    }
</style>
