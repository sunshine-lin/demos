<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--htmlCom组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="htmlCom" class="comBox">
        <a href="images/timg.jpg" download="下载图片" class="download">download</a>
        <abbr title="Laugh Out Loud">LOL</abbr>
        <!--缩写-->
        <abbr title="1234">LOL</abbr>
        More information can be found in <cite>[ISO-0000]</cite>.、
        <details class="details" open>
            <summary>这是摘要1</summary>
            <p>这里具体描述，标签相对随意，例如这里使用的&lt;p&gt;标签。</p>
        </details>
        <details open>
            <p>如果&lt;summary&gt;缺省，则会自动补上，文案是“详细信息”。</p>
        </details>
        <details class="details">
            <summary>展开</summary>
            <div class="more">
                <p>这里具体描述，标签相对随意，例如这里使用的&lt;p&gt;标签。</p>
            </div>
        </details>
        <fieldset>
            <legend align="center">标题</legend>
            <input type="search" placeholder="请输入">
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: 'htmlCom',
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
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #htmlCom {
        details {
            width: fit-content;
        }
        summary{
            user-select: none;
            outline: none;
        }
        /*details ::-webkit-details-marker {*/
            /*!*direction: ltr;*!*/
            /*color: green;*/
            /*margin-left: 1em;*/
        /*}*/
        /*details ::-moz-list-bullet {*/
            /*direction: ltr;*/
            /*color: gray;*/
            /*margin-left: 1em;*/
        /*}*/

        /* 隐藏默认三角 */
        details ::-webkit-details-marker {
            display: none;
        }
        details ::-moz-list-bullet {
            font-size: 0;
        }
        /*summary::before {*/
            /*content: '1111';*/
            /*position: absolute;*/
            /*width: 1em; height: 1em;*/
            /*margin: .2em 0 0 .5ch;*/
            /*background: url(./arrow-on.svg) no-repeat;*/
            /*background-size: 100% 100%;*/
            /*transition: transform .2s;*/
        /*}*/
        [open] .more {
            display: block;
        }
        .download:focus{
            position: absolute;
            transform: scale(2.0);
            transition: transform 1s;
        }

        fieldset {
            border:0;
            border-top:1px dashed #ccc;
        }
        legend {
            color: #999;
            /* for IE */
            background-color: #fff;
        }

    }
</style>
