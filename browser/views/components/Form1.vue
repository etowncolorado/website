<template>
  <form :class="$style.root" action="">
    <label for="">Sign up for our newsletter</label>
    <input type="text" placeholder="name@email.com">
    <input type="submit" value="Sign up">
  </form>
</template>

<style module>
  .root {
    color: inherit;
  }
</style>

