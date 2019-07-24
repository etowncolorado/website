<script>
  import Links1 from '@/views/components/Links1.vue'

  export default {
    components: {
      Links1
    }
  }
</script>

<template>
  <main :class="$style.root">
    <section :class="[$style.column, $style.content]">
      <h1 :class="$style.title">A relaxing environment with great food, great drinks and great people.</h1>
      <p :class="$style.text">For over 10 years e|town has been providing a warm and inviting place where delicious meals are prepared, and friends and family gather. With a passion for pure flavor, we create a menu of diverse, approachable, ingredient-driven plates prepared from scratch.</p>
    </section>

    <figure :class="[$style.column, $style.figure]">
      <img :class="$style.image" src="@/assets/images/overhead-plate.png" alt="Beautiful plate of food.">
    </figure>
  </main>
</template>


<style module>
  .root {
    color: var(--foreground-color);
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
  }

  .column {
    width: 28rem;
    box-sizing: border-box;
  }

  .content {
    transform: translate(2rem);
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 2rem;
    margin-top: -0.375rem;
    font-weight: 300;
    line-height: 2.75rem;
    font-family: "Sentinel SSm A", "Sentinel SSm B", serif;
    letter-spacing: 0.0625rem;
    position: relative;
    margin-bottom: 0;
    /* max-width: none; */
    /* margin-left: 0; */
    /* margin-right: 0; */
    /* text-align: left; */
  }

  .title:after {
    /* display: none; */
    top: 0.5rem;
    left: -2.25rem;
    width: 0.125rem;
    bottom: 0.75rem;
    content: " ";
    position: absolute;
    background: var(--accent-color);
  }

  .text {
    font-weight: 200;
    font-size: 0.75rem;
    line-height: 1.375rem;
    letter-spacing: 0.015625rem;
    /* text-align: left; */
    /* max-width: 85%; */
    margin-top: 0.75rem;
    margin-left: 0.25rem;
    /* margin-right: 0; */
    margin-bottom: 2.5rem;
    font-family: "Montserrat", sans-serif;
  }

  .figure {
    margin: 0;
    text-align: right;
    line-height: 0;
  }

  .image {
    width: 26rem;
    margin-right: -3rem;
  }
</style>
