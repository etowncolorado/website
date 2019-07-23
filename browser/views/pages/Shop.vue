<script>
  import Title from '@/mixins/Title.js'

  export default {    
    mixins: [
      Title
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
