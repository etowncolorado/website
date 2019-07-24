// Vendor
import Vuex from 'vuex'
import Vue from 'vue'

// Project
import Screen from '@/support/screen/Screen.js'

// Config
Vue.use(Vuex)

// Store
export default new Vuex.Store({
  modules: {
    screen: Screen
  },

  state: () => ({
    pages: [
      { path: '/', label: 'About' },
      { path: '/menu', label: 'Menu' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' },
      { path: '/shop', label: 'Shop' },
    ]
  }),

  getters: {
    isCompact: (state) => {
      return state.screen.width < 800
    }
  },

  mutations: {

  },

  actions: {

  }
})
