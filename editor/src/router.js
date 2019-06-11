import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: () => import('@/view/editor.vue') }
    // {
    //   component: () => import('@/view/login.vue'),
    //   path: '/login',
    // },
    // {
    //   component: () => import('@/view/home.vue'),
    //   meta: { auth: true },
    //   path: '/',
    //   children: [
    //     {
    //       path: '*',
    //       component: () => import('@/view/home.vue'),
    //     }
    //   ]
    // }
  ]
})
