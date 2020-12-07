<template>
  <div class="login-container">
<!--    autocomplete：on开启 off关闭 （输入框的历史记录）-->
    <Form @submit="onSubmit" autocomplete="off">
      <Field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <Button
          round
          block
          type="info"
          native-type="submit"
          color="#6495ED"
        >
          登录
        </Button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, Button, Toast } from 'vant'
// 接口引入
import { $login } from '@/network/login'
export default {
  name: 'Login',
  components: {
    Form,
    Field,
    Button
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const result = await $login(values)
      const { msg, result: message, status } = result.data
      if (status) {
        Toast.success(msg)
        this.$Cookies.set('token', message.token, { expires: 1, path: '/login' })
        await this.$router.replace('/home')
      } else {
        Toast.success(msg)
      }
      // console.log(msg, message, status)
    }
  }
}
</script>

<style lang="less" scoped>
  .login-container{
    padding: 30px 50px 0 50px;
  }
</style>
