<!-- Created by xxxxx on xxxx/xx/xx -->
<template>
    <!--nodeEmailer组件用途
    props:
    events: 
    slots:
    use:
  -->
    <div id="nodeEmailer" class="comBox">
        <el-button @click="sendEmail" type="primary">sendEmail</el-button>
        <div>{{arr}}</div>
        <el-button @click="btnClick('push')" type="primary">push</el-button>
        <el-button @click="btnClick('pop')" type="primary">pop</el-button>
        <el-button @click="btnClick('reverse')" type="primary">reverse</el-button>
        <el-button @click="btnClick('reduce')" type="primary">reduce</el-button>
        <el-button @click="btnClick('generator')" type="primary">generator</el-button>
    </div>
</template>

<script>
//    var emailjs = require("emailjs");
    //    import nodemailer from 'nodemailer';
//        import emailjs from 'emailjs';
    export default {
        name: 'nodeEmailer',
        props: {},
        components: {},
        data() {
            return {
                server: null,
                arr: [0,1,2,3,4,5],
                genRes: null,
            }
        },
        computed: {},
        watch: {},
        created() {
            this.genRes = this.gen();
        },
        mounted() {

//            function* gen2() {
//                yield 1;
//                yield 2;
//                yield 3;
//            }
//
//            let g = gen2();
//            console.log(g.next());
//            console.log(g.next());
//            console.log(g.next());

//            this.emailjs = require("emailjs/email.js");
//            var nodemailer = require("nodemailer");
//            var dns = require("dns");
//            console.log('dns', dns)
//            console.log('emailjs', emailjs)
//            console.log('nodemailer', nodemailer)
//            this.emailjs.server.connect({
//                user: "18072887831@163.com",
//                password: "sqm123456",
//                host: "smtp.163.com",
//                ssl: true
//            });
//            this.server  = email.server.connect({
//                user:    "1187181555@163.com",      // 你的QQ用户
//                password:"sqm123456",           // 注意，不是QQ密码，而是刚才生成的授权码
//                host:    "smtp.163.com",         // 主机，不改
//                ssl:     true                   // 使用ssl
//            });
//            const dns = require('dns');
//            console.log('dns',dns)
        },
        activated() {
        },
        deactivated() {
        },
        methods: {
            gen:function *() {
                for (var i = 0;i<20;i++) {
                    yield i;
                }
            },
            btnClick (from) {
                switch (from) {
                    case 'push':
                        this.arr.push(this.arr.length);
                        break;
                    case 'pop':
                        this.arr.pop()
                        break;
                    case 'reverse':
                        this.arr.reverse()
                        break;
                    case 'reduce':
                        var sum = this.arr.reduce((sum,cur,index,arr)=>{
                            console.log('index',index)
                            return sum + cur
                        })
                        console.log('sum',sum);
                        break;
                    case 'generator':
                        var num = this.genRes.next().value;
                        if (num == 10) {
                            this.genRes.throw()
                            console.log(this.genRes.return())
                        }
                        console.log(num)
                        break;
                }
            },
            truth (val) {
                if (val) {
                    if (typeof(val) === 'object') {
                        if (JSON.stringify(val) === '[]' || JSON.stringify(val) === '{}') {
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        return true
                    }
                } else if (val == 0) {
                    return true
                } else {
                    return false;
                }
            },
            sendEmail() {



// "Generator { }"
//                var emailjs = require("emailjs");
//                console.log('emailjs', emailjs);
//                var server = emailjs.server.connect({
//                    user: "18072887831@163.com",
//                    password: "sqm123456",
//                    host: "smtp.163.com",
//                    ssl: true
//                });

//开始发送邮件
//                emailjs.server.send({
//                    text: "邮件内容1",       //邮件内容
//                    from: "823088244@qq.com",        //谁发送的
//                    to: "18072887831@163.com",       //发送给谁的
//                    subject: "邮件主题1"          //邮件主题
//                }, function (err, message) {
//                    //回调函数
//                    console.log(err || message);
//                });

            }
        }
    }
</script>

<style rel="stylesheet" lang="scss" scoped>

    #nodeEmailer {

    }
</style>
