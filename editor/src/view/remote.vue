<script>
  export default {
    props: ['data'],

    watch: {
      data: 'update'
    },

    mounted () {
      this.document = this.$el.contentDocument
      this.update(this.data)
    },

    methods: {
      update (value) {
        this.$el.src = this.$el.src
        this.document.open()
        this.document.write(value)
        this.document.close()
      }
    }
  }
</script>

<template>
  <iframe src="javascript:void(0);"></iframe>
</template>
