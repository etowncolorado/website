import Vue from 'vue'

export const files = (store, server) => {
  const files = server.database().ref('/files')

  store.registerModule('files', {
    namespaced: true,

    state: {},

    mutations: {
      // add (state, file) {
      //   Vue.set(state, file.key, {
      //     ...file.value,
      //     local: 
      //   })
      // },

      remove (state, key) {
        Vue.delete(state, key)
      }
    },

    actions: {
      create (_, file) {
        files.push({
          name: file,
          
        })
      }
    }
  })

  files.on('child_added',
    (snap) => {
      // store.commit('files/add', {
      //   key: snap.key,
      //   value: {snap.val()
      // })
    }
  )

  files.on('child_removed',
    (snap) => store.commit('files/remove', snap.key)
  )
}