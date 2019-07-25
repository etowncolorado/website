<script>
  import Section1 from '@/views/modules/Section1.vue'
  import Section2 from '@/views/modules/Section2.vue'
  import Title from '@/mixins/Title.js'

  export default {   
    mixins: [
      Title,
    ],

    components: {
      Section1,
      Section2,
    },

    created () {
      this.setTitle('e|town')
    },
  }
</script>

<template>
  <section>
    <section-1 />
    <section-2 :class="$theme.dark" />
  </section>
</template>

<style module="$theme" src="@/design/themes.css"></style>
