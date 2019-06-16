<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },

      isActive: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      $class () {
        return {
          [this.$style.module]: true,
          [this.$style.active]: this.isActive,
        }
      }
    },

    methods: {
      emit (event) {
        this.$emit(event, this.item.key, this.isActive)
      }
    }
  }
</script>

<template>
  <div
    v-bind:class="$class"
    v-on:click="emit('select')"
  >
    {{ item.name }}
    <span
      v-bind:class="$style.close"
      v-on:click.stop="emit('close')"
    >
      &times;
    </span>
  </div>
  
</template>

<style module>
  .module {
    cursor: default;
    padding: var(--space-1) var(--space-2) var(--space-1) var(--space-3);
    background: var(--color-3);
    user-select: none;
  }

  .module + .module {
    border-left: 1px solid var(--color-2);
  }

  .close {
    color: var(--color-1);
    opacity: 0;
    display: inline-block;
    margin-left: var(--space-1);
  }

  .module:hover .close {
    opacity: 1;
  }

  .active {
    color: blue;
  }
</style>


