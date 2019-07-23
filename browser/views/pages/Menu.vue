<script>
  import title from '@/mixins/title.js'

  export default {    
    mixins: [
      title
    ],

    created () {
      this.setTitle('e|town - menu')
    }
  }
</script>

<template>
  <div>
    <h1>This is a menu page</h1>
  </div>
</template>
