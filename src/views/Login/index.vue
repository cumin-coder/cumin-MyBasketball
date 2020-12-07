<template>
  <div>
    <tabs
      v-model="activeName"
      color="#6495ED"
      title-active-color="#6495ED"
      :animated="true"
      :swipeable="true"
    >
<!--登录-->
      <tab title="登录" name="login">
        <Login></Login>
      </tab>
<!--注册-->
      <tab title="注册" name="register">
        <Register @targetActiveName="targetActiveName"></Register>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vant'
// 登录组件
import Login from './Login'
// 注册组件
import Register from './Register'

export default {
  name: 'index',
  components: {
    Tabs,
    Tab,
    Login,
    Register
  },
  data () {
    return {
      activeName: 'login'
    }
  },
  methods: {
    targetActiveName (newActiveName) {
      this.activeName = newActiveName
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>

</style>
