import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  routes,
  mode: 'history'
})