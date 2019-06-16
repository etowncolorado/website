<script>
  export default {
    props: {
      files: {
        type: Array,
        required: true
      },

      active: {
        type: [Array, Number, String]
      }
    }
  }
</script>

<template>
  <div>
    <div>
      <tabs
        tab="file-tab"
        v-bind:active="active"
        v-bind:items="files"
        v-on="$listeners"
      />
      <button @click="$emit('create')">new</button>
    </div>
    <div>code</div>
  </div>
</template>

