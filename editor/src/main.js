import router from '@/router.js'
import store from '@/store.js'
import Vue from 'vue'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

const views = require.context('@/views/', true, /\.vue$/)

views.keys().forEach(
  (path) => Vue.component(
    path.slice(0, -4).split('/').pop(),
    views(path).default
  )
)

const app = new Vue({
  render: (h) => h('app'),
  router,
  store,
})

app.$mount('#app')

export default app