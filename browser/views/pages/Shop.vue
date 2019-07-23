<script>
  import title from '@/mixins/title.js'

  export default {    
    mixins: [
      title
    ],

    created () {
      this.setTitle('e|town - shop')
    }
  }
</script>

<template>
  <div>
    <h1>This is a shop page</h1>
  </div>
</template>
