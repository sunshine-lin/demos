<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--happyScrollCom组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div class="happyScrollCom">
        <div class="container">
            <happy-scroll color="#ddd" size="8" :min-length-h="20" :min-length-v="20"
                          scroll-top="0" :hide-horizontal="false" :hide-vertical="false" resize
                          right bottom
                          @vertical-start="verticalStart"
                          @vertical-end="verticalEnd"
                          @horizontal-start="horizontalStart"
                          @horizontal-end="horizontalEnd">
                <ul class="box">
                    <li>010101010101010101010101010101010101010101010101010101010101</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                    <li>05</li>
                    <li>06</li>
                    <li>07</li>
                    <li>08</li>
                    <li>09</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                </ul>
            </happy-scroll>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'happyScrollCom',
    props: {},
    components: {
    },
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
      verticalStart (ev) {
        console.log(ev)
      },
      verticalEnd (ev) {
        console.log(ev)
      },
      horizontalStart (ev) {
        console.log(ev)
      },
      horizontalEnd (ev) {
        console.log(ev)
      },
    }
  }
</script>

<style rel="stylesheet" lang="scss">
    @import '../assets/scss/main.scss';

    .happyScrollCom {
        .container{
            width: 200px;
            height: 200px;
        }
        .box li{
            line-height: 20px;
            border-bottom: 1px solid #ddd;
        }
    }
</style>
