export default {
  created () {
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