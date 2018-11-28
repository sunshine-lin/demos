<!-- created by sunshine-lin in 2018.10.10 -->
<template>
    <div class="comBox" id="regex">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model.trim="ruleForm.name" placeholder="请输入汉字，9个字符内"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="username">
          <el-input v-model.trim="ruleForm.username" placeholder="请输入账号，只能是字母、数字和下划线"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model.trim="ruleForm.pwd"
                    :type="pwdSee?'text':'password'"
                    placeholder="请输入密码，长度6位以上">
            <i class="el-icon-view" slot="suffix"  v-show="ruleForm.pwd"
               :style="pwdSee?'color: #409EFF;':''"
            @click="pwdSee = !pwdSee"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model.trim="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model.trim="ruleForm.phone" placeholder="请输入手机" :maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="数字" prop="number">
          <el-input v-model.trim="ruleForm.number" placeholder="请输入数字" :maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: 'regex',
        data() {
            return {
              pwdSee: false,
              ruleForm: {
                name: '',
                username: '',
                pwd: '',
                email: '',
                phone: '',
                number: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
              rules: {
                name: [
                  { required: true, message: '请输入姓名', trigger: 'blur' },
                  {pattern: /^[\u4e00-\u9fa5]{2,9}$/,message: '请输入汉字', trigger: 'blur' },
                ],
                username: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  {pattern: /^\w+$/,message: '请输入字母、数字和下划线', trigger: 'blur' },
                ],
                pwd: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  {pattern: /^.{6,20}$/,message: '请输入6位以上密码', trigger: 'blur' },
                ],
                email: [
                  { required: false, message: '请输入邮箱', trigger: 'blur' },
                  {pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message: '请输入正确的邮箱格式', trigger: 'blur' },
                ],
                phone: [
                  { required: false, message: '请输入手机', trigger: 'blur' },
                  { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
                  {pattern: /^1[3-9]\d{9}$/,message: '请输入正确的手机格式', trigger: 'blur' },
                ],
                number: [
                  { required: false, message: '请输入数字', trigger: 'blur' },
                  {pattern: /(^\d+$)|(^\d+\.\d{1,2}$)/,message: '请输入数字(小数点不能超过3位)', trigger: 'blur' },
                ],
                region: [
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                  { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                  { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                  { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                  { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                  { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
              }
            }
        },
        created() {
        },
        mounted() {
          console.log(/industr(?:y|ies)/.test('industry'))

          let str = "2018-11-28";
//          let re = /(\d+)(-)/g;
          let re = /-/g;
          str = str.replace(re, function($0, $1, $2){
            // 第一个参数：$0（母亲)
            // 第二个参数：$1（第一个孩子）
            // 第三个参数：$2 (第二个孩子)
            console.log("$0：" + $0); // 2018- 以及 11-
            console.log("$1：" + $1); // 2018 以及 11
            console.log("$2：" + $2); // - 以及 -
            return '.';
          });
          console.log(str); // 2018.11.28

        },
        activated() {
        },
        deactivated() {
        },
        watch: {},
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
    }
</script>

<style rel="stylesheet" lang="scss">
    #regex {
      padding: 30px;
      .el-form{
        width: 500px;
        .el-icon-view{
          font-size: 20px;
        }
      }
    }
</style>
