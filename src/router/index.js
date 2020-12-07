import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  const token = document.cookie.split('=')[1]
  /**
   * 当 token 没值时，无论跳转到哪个页面都强制跳转到登陆页面
   */
  if (to.path !== '/login' && !token) {
    next('/login')
  }
  /**
   * 当 token 有值时，如果手动修改地址栏跳转到登录页，就会被强制跳转到主页
   */
  if (to.path === '/login' && token) {
    next('/home')
  }
  // 无论怎样都放行
  next()
})

export default router
