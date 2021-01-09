<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox"
         id="echartsCom">
        <div id="barBox"
             style="width: 600px;height:400px;"></div>
        <div id="chinaMap"
             style="width: 600px;height:400px;"></div>
        <!-- <div id="map" style="width: 600px;height:400px;"></div> -->
    </div>
</template>

<script>
import 'static/lib/js/china2.js'
import echarts from 'echarts';
import $ from 'jquery';
export default {
    name: 'echartsCom',
    data() {
        return {}
    },
    created() {
    },
    mounted() {
        this.setBar();
        this.setChina();
    },
    activated() {
    },
    deactivated() {
    },
    watch: {},
    methods: {
        setBar() {
          // console.log('window.devicePixelRatio',window.devicePixelRatio)
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('barBox'),{
              devicePixelRatio: 1
            });
            //
            //          // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        setChina() {
            var chart = echarts.init(document.getElementById('chinaMap'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'china'
                }]
            });
        }

    }
}
</script>

<style rel="stylesheet" lang="scss">
#echartsCom {
}
</style>
