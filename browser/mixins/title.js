export default {
  created () {
    console.log('asdf')
    if ('title' in this.$options) {
      this.setTitle(this.$options.title)
    }
  },

  methods: {
    setTitle (value) {
      document.title = value
    }
  }
}