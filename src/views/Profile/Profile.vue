<template>
  <div class="profile-container">

    <div class="nav-bar">
      <NavBar title="个人中心"/>
    </div>
    <div class="cell-container">
      <Cell title="Cumin" is-link center title-style="fontWeight: bold; font-size: 18px">
        <VanImage
          width="4rem"
          height="4rem"
          round
          fit="cover"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607493782535&di=4ff50728bc2236821fda3b4e64264932&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk2%2FM0F%2FA6%2F76%2FZ1Dc81E86E0E177EcBED761cB6D244F754c.jpg"
        >
        </VanImage>
      </Cell>
      <Cell title="我赞过的" is-link icon="good-job"/>
      <Cell title="收藏集" is-link icon="star"/>
      <Button
        type="primary"
        block
        color="#CE5858"
        @click="onClickExit"
      >
        退出账号
      </Button>
    </div>
  </div>
</template>

<script>
import { Cell, NavBar, Image as VanImage, Button, Dialog } from 'vant'
export default {
  name: 'Profile',
  components: {
    Cell,
    NavBar,
    VanImage,
    Button
  },
  methods: {
    onClickExit () {
      Dialog.confirm({
        title: '确认退出?'
      })
        .then(() => {
          // 退出账号
          this.$Cookies.remove('token', { expires: 0, path: '/login' })
          this.$router.replace('/login')
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
  /deep/ .van-nav-bar__title {
    font-weight: bold;
  }
  /deep/ .van-nav-bar__content {
    box-shadow: 0px 0px 5px 1px #ccc;
  }
  /deep/ .van-button {
    margin-top: 20px;
  }
</style>
