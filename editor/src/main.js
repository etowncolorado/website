import Vue from 'vue'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

const view = require.context('@/view/', true, /\.vue$/)
view.keys().forEach(
  (path) => Vue.component(
    path.slice(0, -4).split('/').pop(),
    view(path).default
  )
)

export const app = new Vue({
  render (h) {
    return h('app')
  }
})

app.$mount('#app')
