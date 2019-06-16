import server from '@/server.js'
import finder from '@/finder.js'
import router from '@/router.js'
import store from '@/store.js'
import Vue from 'vue'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

const view = require.context('@/view/', true, /\.vue$/)
view.keys().forEach(
  (path) => Vue.component(
    path.slice(0, -4).split('/').pop(),
    view(path).default
  )
)

finder(store, server)

export const app = new Vue({
  store,
  router,
  render (h) {
    return h('app')
  }
})

app.$mount('#app')
