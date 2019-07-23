// Vendor
import Vue from 'vue'

// Project
import design from '@/entries/design.js'
import router from '@/entries/router.js'
import store from '@/entries/store.js'
import App from '@/views/pages/App.vue'
import '@/designs/reset.css'

// Config
Vue.config.productionTip = false
Vue.prototype.$design = design

// Setup
export const render = (h) => h(App)
export const app = new Vue({ render, router, store })

// Module
export default app.$mount('#app')
