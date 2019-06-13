<script>
  export default {
    props: ['selection'],

    data () {
      return {
        items: ['about', 'contact', 'log']
      }
    },

    methods: {
      select (value) {

      }
    }
  }
</script>

<template>
  <div :class="$style.explorer">
    <div :class="$style.header">
      <div>explorer</div>
    </div>

    <div :class="$style.list">
      <div
        v-for="item in items"
        v-text="item"
        :class="item === selection && $style.item"
        :key="item"
        @click="$emit('select', item)"
      />
    </div>
  </div>
</template>

<style module>
  .explorer {
    width: 200px;
    background: green;
  }

  .header {
    display: flex;
    padding: 6px 12px;
    justify-content: space-between;
  }

  .list {
    padding: 20px;
    user-select: none;
  }

  .item {
    color: blue;
  }
</style>


