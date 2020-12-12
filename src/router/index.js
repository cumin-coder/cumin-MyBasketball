import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/components/Main/Main'
import Share from '@/views/Share/Share'
import Profile from '@/views/Profile/Profile'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    path: '/main',
    component: Main,
    redirect: '/share',
    children: [
      {
        path: '/share',
        component: Share
      },
      {
        path: '/profile',
        component: Profile
      }
    ]
  }

]

const router = new Router({
  routes,
  mode: 'history'
})

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
