import Vue from 'vue'

export default (store, server) => {
  const database = server.database()
  const files = database.ref('/files')
  const data = database.ref('/data')

  store.registerModule('finder', {
    namespaced: true,

    state: {
      files: {},
      data: {}
    },

    getters: {
      //
    },

    mutations: {
      watch (state, files) {
        for (var key in files) {
          Vue.set(state.files, key, { ...files[key] })
        }
      },

      ignore (state, key) {
        Vue.delete(state.files, key)
      },

      write (state, data) {
        for (var key in data) {
          Vue.set(state.data, key, data[key])
        }
      },

      clear (state, keys) {
        Vue.delete(state.data, key)
      }
    }
  })

  var load = (ref, create, remove) => {
    ref.once('value',
      (snap) => {
        var data = snap.val()

        store.commit(`finder/${create}`, data)

        snap.ref.on('child_added',
          (snap) => snap.ref.on('value', write)
        )

        var write = (snap) => {
          if (data[snap.key]) {
            return data[snap.key] = null
          }

          if (snap.val() === null) {
            return store.commit(`finder/${remove}`, snap.key)
          }

          store.commit(`finder/${create}`, {
            [snap.key]: snap.val()
          })
        }
      }
    )
  }

  load(data, 'write', 'clear')
  load(files, 'watch', 'ignore')
}