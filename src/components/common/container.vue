<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
  <!--gInput组件用途
    props:
    events: 
    slots:
    use:
  -->
  <div class="container">
      <slot name="header"></slot>
    <g-input id="ccc" label="名称3" v-model="inputValue" v-on="$listeners" v-bind="$attrs" ref="gInput">
        <template #:label="{label}">
            <span style="color:#f00">{{label}}</span>
        </template>
    </g-input>
  </div>
</template>

<script>
import gInput from '@/components/common/gInput';
    export default {
        inheritAttrs: false,
        name: 'container',
        props: {
            value: '',
            label: ''
        },
        components: {
              gInput,
        },
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            console.log('this.$refs.gInput',this.$refs.gInput)
            console.log('listeners',this.$listeners)
        },
        activated() {
            console.log('attrs1',this.$attrs)
        },
        deactivated() {
        },
        methods: {
            input (ev) {
                this.$emit('input',ev.target.value)
            },
            focus (ev) {
                this.$emit('focus')
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
@import "../../assets/scss/main.scss";
.container{
    border: 2px solid #ddd;
    width: fit-content;
}

</style>
