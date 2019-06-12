<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState('files', ['files']),

    methods: {
      create () {
        
      }
    }
  }
</script>

<template>
  <div>
    <div :class="$style.header">
      <div>explorer</div>
      <div @click="create">+</div>
    </div>

    <div v-for="file in files" :key="file.key">
      {{ file.name }}
    </div>
  </div>
</template>

<style module>
  .header {
    display: flex;
    padding: 6px 12px;
    justify-content: space-between;
  }
</style>


