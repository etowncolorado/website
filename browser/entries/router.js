import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/blog',
      component: () => import('@/views/pages/Blog.vue')
    },
    {
      path: '/contact',
      component: () => import('@/views/pages/Contact.vue')
    },
    {
      path: '/menu',
      component: () => import('@/views/pages/Menu.vue')
    },
    {
      path: '/shop',
      component: () => import('@/views/pages/Shop.vue')
    },
    {
      path: '/',
      component: () => import('@/views/pages/About.vue')
    },
    {
      path: '*',
      component: () => import('@/views/errors/404.vue')
    }
  ]
})
