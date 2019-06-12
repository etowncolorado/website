export const files = (store, server) => {
  const files = server.database().ref('/files')

  store.registerModule('files', {
    namespaced: true,

    state: {
      files: []
    },

    getters: {
      file (state) {
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
    }
  })

  files.on('child_added',
    (snap) => {
      store.commit('files/add', {
        key: snap.key,
        ...snap.val(),
      })
    }
  )

  files.on('child_removed',
    (snap) => store.commit('files/remove', snap.key)
  )
}