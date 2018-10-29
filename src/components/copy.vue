<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="copyCom">
        <el-input type="textarea" placeholder="请输入" v-model="textareaValue"
        @select.native="inputSelect"></el-input>
    </div>
</template>

<script>
    export default {
        name: 'copyCom',
        data() {
            return {
              textareaValue: ''
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
          inputSelect (ev) {
            var val = ev.target.value;
            var msg = val.substr(ev.target.selectionStart,ev.target.selectionEnd);
            this.$message({
              message: msg
            })
            console.log(ev)
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    #copyCom {
    }
</style>
