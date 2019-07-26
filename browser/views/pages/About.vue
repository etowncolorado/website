<template>
  <main>
    <section-1/>
    <section-2/>
    <section-3/>
  </main>
</template>

<script>
  import Section1 from '@/views/modules/Section1.vue'
  import Section2 from '@/views/modules/Section2.vue'
  import Section3 from '@/views/modules/Section3.vue'
  import Title from '@/mixins/Title.js'

  export default {   
    mixins: [
      Title,
    ],

    components: {
      Section1,
      Section2,
      Section3,
    },

    created () {
      this.setTitle('e|town')
    },
  }
</script>