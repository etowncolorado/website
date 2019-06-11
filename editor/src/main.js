import { auth } from './auth.js'
import { sync } from 'vuex-router-sync'
import router from './router.js'
import server from './server.js'
import store from './store.js'
import Vue from 'vue'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

auth(store, router, server)
sync(store, router)

const app = new Vue({
  render: (h) => h('router-view'),
  router,
  store,
})

app.$mount('#app')