<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div id="grid"
         class="comBox">
        <div class="gridBox container">
            <span class="item"
                 v-for="(item,index) in 6"
                 :key="index">{{item}}</span>
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
    .gridBox {
        height: 400px;
        margin: 50px auto 0;
        outline: 2px solid #000;
        display: grid;
        grid-gap: 5px 10px;
        // grid-template-columns: repeat(auto-fill, 200px);
        // grid-template-columns: 200px 1fr minmax(300px, 2fr);
        grid-template-columns: 200px 1fr 100px;
        grid-template-rows: repeat(2, 50px);
        grid-template-areas:
            ". header  header"
            "sidebar content content";
            // justify-items:stretch;
            // align-items: stretch;
            align-content: center;
        .item {
            background: #f99;
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
