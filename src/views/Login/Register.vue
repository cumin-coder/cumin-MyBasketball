<template>
  <div class="register-container">
    <Form @submit="onSubmit" autocomplete="off" ref="formRef">
      <Field
        v-model="form.username"
        name="username"
        placeholder="用户名"
        maxlength="16"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: patternMinLength, message: '最小6个以上的字符' },
          { validator: onUsernameBlur, message: '用户名已重复' }
        ]"
      />
      <Field
        v-model="form.password"
        type="password"
        name="password"
        placeholder="密码"
        maxlength="12"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: patternMinLength, message: '最小6位数以上的密码' },
          { validator: onPassword, message: '两次密码不一致' },
        ]"
      />
      <Field
        v-model="form.confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="确认密码"
        maxlength="12"
        :rules="[
          { required: true, message: '请确认密码' },
          { pattern: patternMinLength, message: '最小6位数以上的密码' },
          { validator: onConfirmPassword, message: '两次密码不一致' }
        ]"
      />
      <Field
        v-model="form.email"
        type="email"
        name="email"
        placeholder="QQ邮箱"
        maxlength="18"
        :rules="[
          { required: true, message: '请填写QQ邮箱' },
          { validator, message: '请输入正确的QQ邮箱号' },
          { validator: onEmailBlur, message: 'QQ邮箱号已重复' }
        ]"
      />
      <Field
        v-model="form.code"
        type="code"
        name="code"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        size="large"
        @click-input="onCodeClickInput"
      >
        <template #button>
          <Button
            v-if="isShowButton"
            size="mini"
            type="primary"
            native-type="button"
            :color="isSendCode ? '#FF6347' : '#3CB371'"
            :disabled="isDisabled"
            @click="sendCode"
          >
            {{ isSendCode ? '倒计时(' + codeTime + ')' : `发送验证码` }}
          </Button>
        </template>
      </Field>
      <div style="margin: 16px;">
        <Button round block type="info" native-type="submit" color="#6495ED">
          注册
        </Button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, Button, Toast } from 'vant'
import { $getCode, $register, $userIsExist, $emailIsExist } from '@/network/register'
export default {
  name: 'Register',
  components: {
    Form,
    Field,
    Button
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        code: ''
      },
      isSendCode: false, // 是否是发送中状态
      isDisabled: true, // 是否是启动状态
      codeTime: 5, // 倒计时时间
      timer: null,
      patternMinLength: /^.{6,}$/,
      isShowButton: false // 是否显示 “发送验证码” 按钮
    }
  },
  methods: {
    // 重置表单
    onResetForm () {
      this.form.username = ''
      this.form.password = ''
      this.form.confirmPassword = ''
      this.form.email = ''
      this.form.code = ''
      // 隐藏 “发送验证码按钮”
      this.isShowButton = false
    },
    // 点击验证码输入框时触发
    onCodeClickInput () {
      this.isShowButton = true
    },
    onEmailBlur (value) {
      // 验证此邮箱是否（重复）可用
      return this.emailIsExist(value).then(res => {
        this.isDisabled = !res
        return res
      })
    },
    onUsernameBlur (value) {
      // 验证此用户名是否（重复）可用
      return this.userIsExist(value).then(res => res)
    },
    onPassword (value) {
      if (this.form.confirmPassword.length === 0) return
      return this.form.confirmPassword === value
    },
    onConfirmPassword (value) {
      this.onPassword(this.form.password === value)
      return this.form.password === value
    },
    // QQ邮箱匹配
    validator (value) {
      const status = /[1-8]\d{7,10}@qq\.com$/.test(value)
      return status
    },
    onSubmit (values) {
      // 注册账号
      this.registerAccount(values)
    },
    // 请求验证码
    sendCode () {
      // 验证码倒计时
      this.countDown()
      // 请求邮箱验证码
      this.getEmailCode()
    },
    countDown () {
      // 倒计时
      this.isSendCode = true
      this.isDisabled = true
      this.timer = setInterval(() => {
        this.codeTime--
        if (this.codeTime === 0) {
          clearInterval(this.timer)
          // 将定时器的时间重置
          this.isSendCode = false
          this.isDisabled = false
          this.codeTime = 5
        }
      }, 1000)
    },
    /**
     * 网络请求
     */
    async getEmailCode () {
      await $getCode(this.form.email)
    },
    async registerAccount (data) {
      const result = await $register(data)
      const {status, msg} = result.data
      if (status) {
        Toast.success(msg)
        this.$emit('targetActiveName', 'login')
        // 重置整个表单
        this.onResetForm()
      } else {
        Toast.fail(msg)
      }
    },
    async userIsExist (username) {
      const result = await $userIsExist(username)
      return result.data.status === 0
    },
    async emailIsExist (email) {
      const result = await $emailIsExist(email)
      return result.data.status === 0
    }
  }
}
</script>

<style lang="less" scoped>
  .register-container{
    padding: 30px 50px 0 50px;
  }
</style>
