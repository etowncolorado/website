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
        script: '',
        result: 'output',
        files: {
          'log.js': `export const log = (value) => console.log(value)`,
          'about.js': `import { log } from '../log.js'\nlog("render about")`,
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
      },

      input () {
        return {
          input: 'about.js',
          plugins: [
            virtual(this.files)
          ]
        }
      },

      output () {
        return {
          format: 'cjs'
        }
      }
    },

    mounted () {
      this.compile()
    },

    methods: {
      write: debounce(
        function (code) {
          this.files[this.path] = code
          this.compile()
        },
        500
      ),

      async compile () {
        var bundle = await rollup(this.input)
        var result = await bundle.generate(this.output)
        var code = result.output[0].code
        var script = new Function('module', 'exports', code)
        var context = { exports: {} }
        script(context, context.exports)
        this.result = context.exports.render()
        this.script = code
      }
    }
  }
</script>

<template>
  <div :class="$style.viewport">
    <h1>Viewport: {{ file }}</h1>
    <monaco :class="$style.input" :value="code" lang="javascript" :name="path" @save="write" />
    <remote :data="result"/>
    <div>{{ script }}</div>
  </div>
</template>

<style module>
  .viewport {
    background: orange;
  }

  .input {
    width: 600px;
    height: 400px;
  }
</style>

