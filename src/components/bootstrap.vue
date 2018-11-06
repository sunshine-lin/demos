<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--bootstrapCom组件用途
    props:
    events:
    slots:
    use:
  -->
    <div class="bootstrapCom">
      <a v-for="(item,index) in 20" :key="`a_${index}`" style="margin-left: 10px;"
         :href="`#id_${item}`" >{{item}}</a>
      <ul class="box">
        <li v-for="(item,index) in 20" :key="`li_${index}`"
        :id="`id_${item}`">{{item}}</li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: 'bootstrapCom',
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
          btnClick () {
            document.getElementById('tab3').scrollIntoView({
              behavior: "smooth"
            })
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    @import '../assets/scss/main.scss';

    .bootstrapCom {
      /*width: 80%;*/
      /*border: 1px solid #f00;*/
      /*display: flex;*/
      /*justify-content: space-evenly;*/
      /*div{*/
        /*width: 100px;*/
        /*background: #f99;*/
        /*border: 1px solid #ddd;*/
      /*}*/
      .box{
        scroll-behavior: smooth;
        height: 300px;
        overflow-y: auto;
        li{
          line-height: 30px;
          border: 1px solid #ddd;
        }
      }
    }
</style>
