<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--defineproperty组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="defineproperty" class="comBox">
        defineproperty
    </div>
</template>

<script>
    export default {
        name: 'defineproperty',
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
            var obj = {};
            Object.defineProperty(obj,'name', {
                enumerable: false,
                configurable: false,
                writable: true,
                value: "zhangsan"
            })
            Object.defineProperty(obj,'arr', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: [1,2,3]
            })
            var newValue = 22;
            // 数据描述符和存取描述符不能混合使用 就是value不能跟get跟set同时使用
            // 注意：当使用了getter或setter方法，不允许使用writable和value这两个属性
            // 对象属性赋值时 先是set 再是get
            Object.defineProperty(obj,'age', {
                enumerable: true,
                configurable: true,
                get () {
                    return newValue
                },
                set (newVal) {
                    newValue = newVal;
                }
            })
            // 是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为false。
            obj.arr.push(4);
            obj.age = 34;
            Object.freeze(obj)
//            var obj2 = Object.freeze(obj);
//            obj2.name = 'zhangsan11';
//            obj.name = 'zhangsan11';
//            // console.log('obj',obj)
//            // console.log('obj2',obj2)
            var obj3 = {name: '12345'}
            // console.log('Object.entries()',Object.entries(obj3))
            var map3 = new Map(Object.entries(obj3));
            // console.log('map3',map3)
        },
        activated() {
        },
        deactivated() {
        },
        methods: {}
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #defineproperty {

    }
</style>
