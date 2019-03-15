<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--previewImage组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="previewImage" class="comBox">
        <div>{{num}}</div>
        <div>
            <div class="imgBox" @click="btnClick('previewImage',$event)">
                <img src="./images/meinv.jpg" alt="">
            </div>
        </div>
        <el-dialog
                :visible.sync="previewImageVisible"
                :width="`${srcWidth}%`"
@closed="dialogClosed"
        >
            <div @mousewheel="mousewheel">
                <img :src="imgSrc" alt="" :style="`width: 100%`">
            </div>
        </el-dialog>
    </div>
</template>

<script>
    var vm = {
        name: 'previewImage',
        props: {},
        components: {},
        data() {
            return {
                num: this.getNum(),
                previewImageVisible: false,
                imgSrc: '',
                srcWidth: 50,
            }
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
            getNum() {
                return '12345'
            },
            mousewheel($event) {
                console.log($event.deltaY)
                // 放大
                if ($event.deltaY < 0) {
                    if (this.srcWidth <= 30) {
                        this.srcWidth = 30;
                    } else {
                        this.srcWidth += 5
                    }

                }
                // 缩小
                if ($event.deltaY > 0) {
                    if (this.srcWidth >= 80) {
                        this.srcWidth = 80;
                    } else {
                        this.srcWidth -= 5
                    }

                }
            },
            btnClick(from, row) {
                switch (from) {
                    case 'previewImage':
                        console.log(row)
                        this.previewImageVisible = true;
                        this.imgSrc = row.target.currentSrc;
                        break;
                }
            },
            dialogClosed() {
                this.srcWidth = 50;
            },
        }
    }
    export default vm
</script>

<style rel="stylesheet" lang="scss">

    #previewImage {
        .imgBox {
            width: 200px;
            height: 200px;
        }
        .el-dialog__header {
            padding: 0 !important;
        }
        .el-dialog__body {
            padding: 0 !important;
        }
        .el-dialog {
            margin: 0 !important;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: fit-content;
        }
    }

</style>
