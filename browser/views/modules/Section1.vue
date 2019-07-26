<template>
  <header :class="$style.container">
    <section :class="$style.content">
      <h1 :class="$style.title">
        A relaxing environment with great food, great drinks and great people.
      </h1>

      <p :class="$style.text">
        For over 10 years e|town has been providing a warm and inviting place where delicious meals are prepared, and friends and family gather. With a passion for pure flavor, we create a menu of diverse, approachable, ingredient-driven plates prepared from scratch.
      </p>
    </section>

    <figure :class="$style.image">
      <img src="@/assets/images/overhead-plate.png" alt="Beautiful plate of food made at Etown.">
    </figure>
  </header>
</template>

<style module>
  .container {
    /* layout */
    display: flex;
    justify-content: center;
  }

  .content {
    /* position */
    transform: translate(2rem);

    /* layout */
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
    box-sizing: border-box;
    display: flex;
    width: 28rem;
  }

  .title {
    /* layout */
    margin-bottom: 0;
    margin-top: -0.375rem;

    /* position */
    position: relative;

    /* typography */
    letter-spacing: 0.0625rem;
    line-height: 2.75rem;
    font-family: 'Sentinel SSm A', 'Sentinel SSm B', serif;
    font-weight: 300;
    font-size: 2rem;
  }

  .title:after {
    /* graphics */
    background: #c02727;
    content: ' ';

    /* position */
    position: absolute;
    bottom: 0.75rem;
    width: 0.125rem;
    left: -2.25rem;
    top: 0.5rem;
  }

  .text {
    /* layout */
    margin-bottom: 2.5rem;
    margin-left: 0.25rem;
    margin-top: 0.75rem;

    /* typography */
    letter-spacing: 0.015625rem;
    line-height: 1.375rem;
    font-weight: 300;
    font-size: 0.75rem;
  }

  .image {
    /* layout */
    text-align: right;
    margin: 0;
    width: 28rem;

    /* typography */
    line-height: 0;
  }

  .image img {
    /* layout */
    margin-right: -3rem;
    width: 26rem;
  }
</style>
