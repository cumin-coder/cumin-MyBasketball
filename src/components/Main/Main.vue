<template>
  <div>
    <router-view></router-view>
    <Tabbar v-model="active" active-color="#6495ED" route>
      <TabbarItem icon="live" to="/share">分享中心</TabbarItem>
      <TabbarItem icon="manager" to="/profile">个人中心</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'index',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      active: '/share'
    }
  }
}
</script>

<style scoped>

</style>
