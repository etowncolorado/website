export const auth = (store, router, server) => {
  store.registerModule('auth', {
    namespaced: true,
  
    state: {
      user: null
    },

    getters: {
      admin ({ user }) {
        return user ? /.*@etowncolorado.com$/.test(user.email) : false
      }
    },

    mutations: {
      LOGIN (state, user) {
        state.user = user
      },
  
      LOGOUT (state) {
        state.user = null
      }
    }
  })

  router.beforeEach(
    (route, _, next) => {
      const admin = store.getters['auth/admin']

      if (route.path === '/login') {
        return admin ? next('/') : next()
      }

      const guarded = route.matched.some(
        (record) => record.meta.auth
      )

      if (!admin && guarded) {
        return next('/login')
      }

      return next()
    }
  )

  server.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        store.commit('auth/LOGIN', {
          name: user.displayName,
          email: user.email
        })
        router.push('/')
      } else {
        store.commit('auth/LOGOUT')
        router.push('/login')
      }
    }
  )
}