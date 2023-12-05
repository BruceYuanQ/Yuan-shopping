import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Cart from '@/views/layout/cart'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import User from '@/views/layout/user'

import store from '@/store'
// 路由懒加载 快捷键 多行选中：shift+alt 右跳：ctrl+>
const Login = () => import('@/views/login')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const Prodetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const Myorder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/cart', component: Cart },
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchList', component: SearchList },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    { path: '/prodetail/:id', component: Prodetail }
  ]
})

// 全局前置导航守卫
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
