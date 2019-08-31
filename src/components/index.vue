<template>
    <div class="comBox" id="indexCom">
        <el-row>
            <el-col v-for="(item,index) in routerList" :key="`router_${index}`" :title="item.text"
                    :xs="8" :sm="6" :md="4" :lg="3" :xl="2" class="colItem">
                <router-link :to="{name: item.name}">{{item.text}}</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'indexCom',
        data() {
            return {
                routerList: [
                    {text: '其他杂项', name: 'others'},
                    {text: '锚点滚动', name: 'anchor'},
                    {text: '表格边框大小', name: 'elTable'},
                    {text: '百度地图', name: 'baiduMap'},
                    {text: 'echarts图表', name: 'echarts'},
                    {text: '页面滚动平滑', name: 'bootstrap'},
                    {text: '滚动条美化', name: 'happyScroll'},
                    {text: '二维码带图片', name: 'qrCode'},
                    {text: '复制黏贴', name: 'copy'},
                    {text: '导航栏悬浮', name: 'nav'},
                    {text: 'wbr英文换行', name: 'wbr'},
                    {text: '购物车动画', name: 'shoppingCart'},
                    {text: 'cookie', name: 'cookie'},
                    {text: 'animateApi', name: 'animateApi'},
                    {text: 'el-scrollbar', name: 'elScrollbar'},
                    {text: 'css3-var', name: 'css3Var'},
                    {text: 'drag', name: 'drag'},
                    {text: '正则表达式', name: 'regex'},
                    {text: '弹幕', name: 'barrage'},
                    {text: 'animate.css', name: 'animateCss'},
                    {text: 'css', name: 'css'},
                    {text: 'grid', name: 'grid'},
                    {text: 'table', name: 'table'},
                    {text: 'html', name: 'html'},
                    {text: 'canvas', name: 'canvas'},
                    {text: 'map', name: 'map'},
                    {text: 'requestAnimationFrame', name: 'requestAnimationFrame'},
                    {text: 'defineproperty', name: 'defineproperty'},
                    {text: 'nodeEmailer', name: 'nodeEmailer'},
                    {text: 'canvasBg', name: 'canvasBg'},
                    {text: 'scrollSnap', name: 'scrollSnap'},
                    {text: 'js', name: 'js'},
                    {text: 'elementUI', name: 'elementUI'},
                    {text: 'previewImage', name: 'previewImage'},
                    {text: 'vuex', name: 'vuex'},
                    {text: 'file', name: 'file'},
                    {text: '防抖和节流', name: 'debounce'},
                    {text: 'fabric', name: 'fabric'},
                ]
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>
    @import '../assets/scss/main.scss';

    #indexCom {
        padding: 30px;
        background: #f2f2f2;
        .colItem {
            font-size: 16px;
            line-height: 2em;
            text-align: center;
            border: 1px solid #ddd;
            background: #fff;
            margin-bottom: 15px;
            @extend %ellipsis;
        }
    }
</style>
