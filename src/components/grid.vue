<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="grid" class="comBox">
        <div class="gridBox container">
            <span class="item"
                 v-for="(item,index) in numList"
                 :key="index">{{item}}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'grid',
    data() {
        return {
            numList: []
        }
    },
    created() {
    },
    mounted() {
    },
    activated() {
        var arr = [];
        for (var i = 1;i<26;i++) {
            arr.push(i)
        }
        this.numList = this._.shuffle(arr)
    },
    deactivated() {
    },
    watch: {},
    methods: {}
}
</script>

<style rel="stylesheet" lang="scss" scoped>
#grid {
    .gridBox {
        // height: 400px;
        height: 100%;
        margin: 50px auto 0;
        // outline: 2px solid #000;
        display: grid;
        grid-gap: 5px 10px;
        // grid-template-columns: repeat(auto-fill, 200px);
        // grid-template-columns: 200px 1fr minmax(300px, 2fr);
        grid-template-columns: repeat(5,100px);
        grid-auto-rows: 100px;
        grid-template-areas:
            ". header  header"
            "sidebar content content";
            // justify-items:stretch;
            // align-items: stretch;
            align-content: center;
            justify-content: center;
        .item {
            background: #f99;
            text-align: center;
            line-height: 100px;
            font-size: 40px;
        }
        .sidebar {
            grid-area: sidebar;
            color: #0f0;
        }

        .content {
            grid-area: content;
        }

        .header {
            grid-area: header;
        }
    }
}
</style>
