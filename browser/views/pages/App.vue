<template>
  <span :class='[$style.page, $style.fonts]'>
    <screen/>
    <header-1/>
    <router-view/>
    <footer-1 :class="$style.footer"/>
  </span>
</template>

<script>
  import Header1 from '@/views/modules/Header1.vue'
  import Footer1 from '@/views/modules/Footer1.vue'
  import Screen from '@/support/screen/Screen.vue'

  export default {
    components: {
      Header1,
      Footer1,
      Screen,
    },
  }
</script>

<style>
  html {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }
</style>

<style module>
  .page {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .fonts {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: normal;
    text-rendering: optimizeLegibility;
    font-feature-settings:"kern" 1;
    font-feature-settings: "liga" off;
    font-feature-settings: "dlig" off;
    font-feature-settings: "tnum" off;
    font-feature-settings: "onum" off;
    font-feature-settings: "ss01" off;
  }

  .footer {
    flex: 1;
  }
</style>
