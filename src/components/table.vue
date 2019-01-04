<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--table组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="tableCom" class="comBox">
        <table width="600px">
            <caption>表格标题</caption>
            <colgroup>
                <col class="column1" width="50px">
                <col class="column2" width="200px">
                <col class="column3" width="100px">
                <col class="column4" width="200px">
            </colgroup>
            <thead>
            <tr>
                <th>Countries</th>
                <th>Capitals</th>
                <th>Population</th>
                <th>Language</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>USA</td>
                <td>Washington D.C.</td>
                <td>309 million</td>
                <td>English</td>
            </tr>
            <tr>
                <td>Sweden</td>
                <td>Stockholm</td>
                <td>9 million</td>
                <td>Swedish</td>
            </tr>
            <span>123145</span>
            </tbody>
            <tbody>
            <tr>
                <td>USA</td>
                <td>Washington D.C.</td>
                <td>309 million</td>
                <td>English</td>
            </tr>
            <tr>
                <td>Sweden</td>
                <td>Stockholm</td>
                <td>9 million</td>
                <td>Swedish</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>汇总1</td>
                <td>汇总2</td>
                <td>汇总3</td>
                <td>汇总4</td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'tableCom',
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
    #tableCom {
        table th,table td{
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
</style>
