<script>
  import { editor, Uri } from 'monaco-editor'
  import { debounce } from 'lodash'
  // import server from '@/server.js'

  export default {
    props: ['value'],

    beforeCreate () {
      this.model = editor.createModel('', 'javascript')
    },

    watch: {
      value: {
        immediate: true,
        handler (value) {
          this.model.setValue(value)
        }
      }
    },

    mounted () {
      document.addEventListener('keydown', this.keydown)

      this.editor = editor.create(this.$el, {
        model: this.model,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        }
      })
    },

    destroyed () {
      this.model.dispose()
      this.editor.dispose()
      document.removeEventListener('keydown', this.keydown)
    },

    methods: {
      keydown (event) {
        if (event.metaKey && event.keyCode === 83) {
          this.$emit('save', this.model.getValue())
          event.preventDefault()
          return false
        }
      }
    }
  }
</script>

<template>
  <pre />
</template>

