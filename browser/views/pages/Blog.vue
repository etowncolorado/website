<script>
  import Title from '@/mixins/Title.js'

  export default {    
    mixins: [
      Title
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
