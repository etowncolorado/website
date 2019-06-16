<script>
  export default {
    props: {
      tab: {
        type: String,
        required: true
      },

      items: {
        type: Array,
        required: true
      },

      active: {
        type: [Array, Number, String],
        default () {
          return []
        }
      }
    },

    computed: {
      $active () {
        return Array.isArray(this.active) ? this.active : [this.active]
      }
    },

    methods: {
      isActive (item) {
        return !!this.$active.find(
          (key) => key === item.key
        )
      }
    }
  }
</script>

<template>
  <div v-bind:class="$style.module">
    <component
      v-bind:is="tab"
      v-for="item in items"
      v-bind:isActive="isActive(item)"
      v-bind:item="item"
      v-bind:key="item.key"
      v-on="$listeners"
    />
  </div>
</template>

<style module>
  .module {
    display: flex;
  }
</style>


