<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--file组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="file" class="comBox">
        <form method="POST" enctype="multipart/form-data" class="form-horizontal" id="upload">
            <label class="fileLabel">
                请选择
                <input id="file1" type="file" name="file1" accept="image/*">
            </label>
        </form>
        <div v-for="(item,index) in fileList" :key="index"
             class="item">
            <img :src="item.src" :alt="item.name">
        </div>
        <el-button @click="btnClick">上传</el-button>
    </div>
</template>

<script>
    export default {
        name: 'file',
        props: {},
        components: {},
        data() {
            return {
                fileList: [],
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            var _this = this;
            $('#file1').on('change', function (ev) {
                // console.log(ev.target.files,typeof(ev.target.files) )
                var arr = [];
                var files = ev.target.files
                for (let i = 0;i<files.length;i++) {
                    var reader = new FileReader(); //新建FileReader对象
                    reader.readAsDataURL(files[i]); //读取为base64
                    //以下代码可以删除
                    reader.onloadstart = function(){
                        // console.log('start');  //开始读取
                    };
                    reader.onprogress = function(e){
                        //这个是定时触发的事件，文件较大的时候较明显
                        // var p = '已完成：' + Math.round(e.loaded / e.total * 100) + '%' ;
                        // $(".file_upload").find(".progress").html(p);
                        // console.log('uploading');  //文件较大，就会出现多个uploading
                    };
                    reader.onabort = function(){
                        // console.log('abort'); //用作取消上传功能
                    };
                    reader.onerror = function(){
                        // console.log('error'); //文件读取出错的时候触发，暂模拟不出
                    };
                    reader.onload = function(){
                        // console.log('load complete'); //完成
                    };
                    reader.onloadend = function (e) {
                        var dataURL = reader.result;
                        // console.log('dataURL',dataURL)
                    };
                    var item = files[i];
                    var URL = window.URL || window.webkitURL;
                    var imgURL = URL.createObjectURL(files[i]);
                    item.src = imgURL;
                    arr.push(item)
                }
                _this.fileList = arr;
            })
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            btnClick () {
                var ele = $('#upload')[0]
                var formData = new FormData(ele);
                // console.log('formData',formData)
                // console.log(formData.get("file1"))
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #file {
        .fileLabel{
            float: left;
        }
        #file1{

            display: none;
        }
        .item {
            float: left;
            width: 100px;
            height: 100px;
            margin-left: 30px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
