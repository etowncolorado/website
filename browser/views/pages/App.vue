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

    created () {
      console.log(this.$system)
    }
  }
</script>

<template>
  <span class="light">
    <Screen/>
    <Nav1/>
    <RouterView/>
    <Nav2 :class="$style.footer"/>
  </span>
</template>

<style src="@/design/system.scss" lang="scss"></style>
<style src="@/design/system.css" module="$system"></style>
<style src="@/design/themes.css" module="$themes"></style>
<style module>
  /* container from "@/design/system.css"; */

  .root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .footer {
    flex: 1;
  }
</style>
