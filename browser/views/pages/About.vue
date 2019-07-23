<script>
  import Section1 from '@/views/modules/Section1.vue'
  import Title from '@/mixins/Title.js'

  export default {   
    mixins: [
      Title,
    ],

    components: {
      Section1,
    },

    created () {
      this.setTitle('e|town')
    },
  }
</script>

<template>
  <section>
    <section-1 />
  </section>
</template>
