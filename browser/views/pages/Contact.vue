<script>
  import title from '@/mixins/title.js'

  export default {    
    mixins: [
      title
    ],

    created () {
      this.setTitle('e|town - contact')
    }
  }
</script>

<template>
  <div>
    <h1>This is a contact page</h1>
  </div>
</template>
