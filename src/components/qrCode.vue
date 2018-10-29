<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--qrCodeCom组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div class="qrCodeCom">
        <vue-qr text="Hello world!" :size="300" :margin="15"
                    :autoColor="false" colorDark="#000" colorLight="#fff"
                :bgSrc="bgSrc" backgroundDimming="rgba(0,0,0,0.5)"
                        :logoSrc="require('static/images/logo.png')" logoMargin="10"
                logoCornerRadius="20" whiteMargin></vue-qr>
    </div>
</template>

<script>
  import VueQr from 'vue-qr'
  export default {
    name: 'qrCodeCom',
    props: {},
    components: {
      VueQr
    },
    data() {
      return {
        bgSrc: require('static/images/bg.png'),
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
    methods: {}
  }
</script>

<style rel="stylesheet" lang="scss">

    .qrCodeCom {
        background: #f2f2f2;
    }
</style>
