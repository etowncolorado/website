<script>
  import Links2 from '@/views/components/Links2.vue'
  import Form1 from '@/views/components/Form1.vue'

  export default {
    components: {
      Links2,
      Form1,
    }
  }
</script>

<template>
  <footer :class="[$theme.dark, $style.root]">
    <section :class="$style.section">
      <form-1 :class="$style.column"/>
      <links-2 :class="$style.column"/>
    </section>

    <section :class="$style.section">
      <div :class="$style.column">
        Facebook
      </div>

      <div :class="$style.column">
        Contacts
      </div>
    </section>
  </footer>
</template>

<style module="$theme" src="@/design/themes.css"></style>
<style module>
  .root {
    color: var(--foreground-color);
    padding-top: 3rem;
    padding-bottom: 4rem;
    background-color: var(--background-color);
  }

  .section {
    display: flex;
    justify-content: center;
  }

  .column {
    width: 28rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }
</style>