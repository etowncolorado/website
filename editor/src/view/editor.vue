<script>
  export default {
    components: {
      monaco: () => import('./monaco.vue'),
      explorer: () => import('./explorer.vue')
    }
  }
</script>

<template>
  <div :class="$style.editor">
    <div>
      <explorer />
    </div>

    <div :class="$style.viewport">
      <div :class="$style.tabs">
        <div>Tab</div>
        <div>Tab</div>
        <div>Tab</div>
      </div>

      <monaco :class="$style.monaco" />
    </div>
  </div>
</template>

<style module>
  body {
    margin: 0;
    overflow: hidden;
  }

  .editor {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
  }

  .viewport {
    display: flex;
    flex-direction: column;
  }

  .monaco {
    flex: 1;
  }
</style>
