<template>
  <div class="login-container">
    <mu-container class="demo-container is-stripe">
      <mu-row>
        <mu-col span="12">
          <div class="login-title">休闲一读Pwa注册</div>
        </mu-col>
      </mu-row>
    </mu-container>
    <!-- 表单 -->
    <mu-container>
      <mu-form
        ref="form"
        :model="validateForm"
        class="mu-demo-form"
        label-width="80px"
        label-position="left"
      >
        <mu-row gutter>
          <mu-col span="10" offset="1">
            <mu-form-item label="用户名" help-text="请输入2-8位字符" prop="username" :rules="usernameRules">
              <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
            </mu-form-item>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="10" offset="1">
            <mu-form-item label="密码" help-text="请输入2-12位字符" prop="password" :rules="passwordRules">
              <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
            </mu-form-item>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="10" offset="1">
            <mu-form-item
              label="确认密码"
              help-text="请输入2-12位字符"
              prop="ensurePassword"
              :rules="passwordRules"
            >
              <mu-text-field type="password" v-model="validateForm.ensurepassword" prop="password"></mu-text-field>
            </mu-form-item>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="10" offset="1">
            <mu-form-item prop="radio" label="性别">
              <mu-radio v-model="validateForm.radio" value="male" label="男"></mu-radio>
              <mu-radio v-model="validateForm.radio" value="female" label="女"></mu-radio>
            </mu-form-item>
          </mu-col>
        </mu-row>
         <mu-row gutter>
          <mu-col offset='6' span="6">
            <router-link class="login-span" to='/login'>已有账号,去登录</router-link>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col span="10">
            <mu-form-item>
              <mu-button full-width color="primary" @click="submit">注册</mu-button>
            </mu-form-item>
          </mu-col>
        </mu-row>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
function setState(store) {}

export default {
  name: "login",
  metaInfo: {
    title: "休闲一读注册界面",
    meta: [
      { name: "keywords", content: "休闲一读pwa" },
      {
        name: "description",
        content:
          "休闲一读pwa"
      }
    ]
  },
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 2, message: "用户名长度大于2" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 2 && val.length <= 12,
          message: "密码长度大于2小于12"
        }
      ],
      validateForm: {
        username: "",
        password: "",
        radio: "male",
        ensurepassword: ""
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
      });
    },
  },
  async asyncData({ store, route }) {
    setState(store);
  }
};
</script>

<style lang="stylus" scoped>
.login-title
  font-size: 20px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;

.login-container
  background: url('../static/img/bg.jpg');
  background-repeat: no-repeat;

.login-span
  color: #2196f3;
</style>
