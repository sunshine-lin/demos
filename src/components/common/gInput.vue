<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
  <!--gInput组件用途
    props:
    events: 
    slots:
    use:
  -->
  <label :id="id">
      <slot name="label" v-bind:label="label">
            <span class="label">账号--{{provideObj.name}} --{{provideObj.age}}</span>
      </slot>
    <input :type="type" placeholder="请输入" :value="value" @input="input" @focus="focus" @change="change" />
  </label>
</template>

<script>

    export default {
        inheritAttrs: false,
        name: 'gInput',
        inject: ['provideObj'],
        props: {
            value: '',
            label: '',
            aaa: '',
            bbb: '',
            name:'',
            age: '',
            id: '',
            type: {
                type: String,
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['text', 'password'].indexOf(value) !== -1
                },
                default: 'text'
            }
        },
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
             // console.log('$parent ',this.$parent.$attrs)
             // console.log('props2',this.$props)
        },
        deactivated() {
        },
        methods: {
            input (ev) {
                this.$emit('input',ev.target.value)
            },
            focus (ev) {
                this.$emit('focus')
            },
            change (ev) {
                this.$emit('change',ev.target.value)
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
@import "../../assets/scss/main.scss";

#gInput {
}
</style>
