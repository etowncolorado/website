export default (store, server) => {
  const files = server.database().ref('/files')

  store.registerModule('finder', {
    namespaced: true,

    state: {
      files: []
    },

    getters: {
      find (state) {
        return (key) => {
          return state.files.find(
            (file) => file.key === key
          )
        }
      }
    },

    mutations: {
      add (state, file) {
        state.files.push(file)
      },

      remove (state, key) {
        state.files = state.files.filter(
          (file) => file.key !== key
        )
      }
    },

    actions: {
      create (context, name) {
        files.push({ name })
      },

      trash (context, key) {
        files.child(key).set(null)
      }
    }
  })

  files.on('child_added',
    (snap) => {
      store.commit('finder/add', {
        key: snap.key,
        ...snap.val(),
      })
    }
  )

  files.on('child_removed',
    (snap) => store.commit('finder/remove', snap.key)
  )
}