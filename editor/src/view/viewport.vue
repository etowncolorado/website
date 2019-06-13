<script>
  import { rollup } from 'rollup/dist/rollup.browser.es.js'
  import virtual from 'rollup-plugin-virtual'
  import { debounce } from 'lodash'

  console.log(
    JSON.stringify({
      foo: 'bar',
      biz () {
        console.log('here')
      }
    })
  )

  export default {
    props: ['file'],

    data () {
      return {
        output: 'output',
        files: {
          'log.js': `export const log = (value) => console.log(value)`,
          'about.js': `import { log } from '../log.js'\nlog("render about")\nreturn 'foo'`,
          'contact.js': `console.log("render contact");`,
        }
      }
    },

    computed: {
      path () {
        return this.file + '.js'
      },

      code () {
        return this.files[this.path]
      }
    },

    mounted () {
      this.compile()
    },

    methods: {
      write: debounce(
        function (event) {
          this.files[this.path] = event.target.value
          this.compile()
        },
        500
      ),

      compile () {
        rollup({
          input: 'about.js',
          plugins: [
            virtual(this.files)
          ]
        }).then(
          (bundle) => bundle.generate({ format: 'cjs' })
        ).then(
          (result) => result.output[0].code
        ).then(
          (code) => new Function(code)
        ).then(
          (method) => this.output = method()
        )
      }
    }
  }
</script>

<template>
  <div :class="$style.viewport">
    <h1>Viewport: {{ file }}</h1>
    <textarea cols="30" rows="10" :value="code" @input="write"></textarea>
    <div>{{ output }}</div>
  </div>
</template>

<style module>
  .viewport {
    background: orange;
  }
</style>

