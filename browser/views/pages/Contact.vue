<script>
  import Title from '@/mixins/Title.js'

  export default {    
    mixins: [
      Title
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
