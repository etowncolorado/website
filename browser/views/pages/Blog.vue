<script>
  import title from '@/mixins/title.js'

  export default {    
    mixins: [
      title
    ],

    created () {
      this.setTitle('e|town - blog')
    }
  }
</script>

<template>
  <div>
    <h1>This is a blog page</h1>
  </div>
</template>
