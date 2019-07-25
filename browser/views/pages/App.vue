<script>
  import Screen from '@/support/screen/Screen.vue'
  import Nav1 from '@/views/modules/Nav1.vue'
  import Nav2 from '@/views/modules/Nav2.vue'

  export default {
    components: {
      Screen,
      Nav1,
      Nav2,
    },
  }
</script>

<template>
  <span :class="[$theme.light, $typography.antialias, $typography.fonts]">
    <Screen/>
    <Nav1/>
    <RouterView/>
    <Nav2 :class="$style.footer"/>
  </span>
</template>

<style src="@/design/reset.css"></style>
<style module="$typography" src="@/design/typography.css"></style>
<style module="$theme" src="@/design/themes.css"></style>
<style module>
  .root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .footer {
    flex: 1;
  }
</style>
