<script>
  // import { editor, Uri } from 'monaco-editor'
  // import { debounce } from 'lodash'
  // import server from '@/server.js'

  export default {
    // mounted () {
    //   this.file = server.database().ref('/files/-Lh5vVcXWH-hHuIZHPwE')

    //   document.addEventListener('keydown',
    //     (event) => {
    //       if (event.metaKey && event.keyCode === 83) {
    //         this.file.child('value').set(
    //           this.model.getValue()
    //         )
    //         event.preventDefault()
    //         return false
    //       }
    //     }
    //   )

    //   this.file.once('value',
    //     (snap) => {
    //       var data = snap.val()

    //       this.model = editor.createModel(
    //         data.value,
    //         data.lang,
    //         monaco.Uri.file('/' + data.name)
    //       )

    //       this.editor.setModel(this.model)
    //     }
    //   )

    //   this.editor = editor.create(this.$el, {
    //     theme: 'vs-dark',
    //     minimap: {
    //       enabled: false
    //     }
    //   })

    //   this.editor.onDidChangeModelContent(
    //     debounce(this.update, 750)
    //   )
    // },

    // destroyed () {
    //   this.model.dispose()
    //   this.editor.dispose()
    // },

    // methods: {
    //   update (event) {
    //     console.log(event)
    //   }
    // }
  }
</script>

<template>
  <pre />
</template>

