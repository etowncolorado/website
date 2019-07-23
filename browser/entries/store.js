import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [
      { path: '/', label: 'About' },
      { path: '/menu', label: 'Menu' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' },
      { path: '/shop', label: 'Shop' },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
