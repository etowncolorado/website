<script>
  import { editor } from 'monaco-editor'

  export default {
    mounted () {
      document.addEventListener('keydown',
        (event) => {
          if (event.metaKey && event.keyCode === 83) {
            console.log('save')
            event.preventDefault()
            return false
          }
        }
      )

      this.editor = editor.create(this.$el, {
        value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
        language: "javascript",
        // lineNumbers: "off",
        theme: "vs-dark",
        minimap: {
          enabled: false
        }
      })
    },

    render (h) {
      return h('div')
    }
  }
</script>
