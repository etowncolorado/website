<script>
  import Title from '@/mixins/Title.js'

  export default {    
    mixins: [
      Title
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
