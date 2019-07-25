<template>
  <main :class="$system.container">
    <section :class="[$style.column, $style.content]">
      <h1 :class="[$typography.style1, $style.title]">
        A relaxing environment with great food, great drinks and great people.
      </h1>

      <p :class="[$typography.style2, $style.text]">
        For over 10 years e|town has been providing a warm and inviting place where delicious meals are prepared, and friends and family gather. With a passion for pure flavor, we create a menu of diverse, approachable, ingredient-driven plates prepared from scratch.
      </p>
    </section>

    <figure :class="[$style.column, $style.figure]">
      <img :class="$style.image" src="@/assets/images/overhead-plate.png" alt="Beautiful plate of food made at Etown.">
    </figure>
  </main>
</template>

<style module="$system" src="@/design/system.css"></style>
<style module="$typography" src="@/design/typography.css"></style>
<style module>
  .column {
    width: 28rem;
    box-sizing: border-box;
  }

  .content {
    display: flex;
    transform: translate(2rem);
    padding-left: 2rem;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    position: relative;
    margin-top: -0.375rem;
    margin-bottom: 0;
  }

  .title:after {
    top: 0.5rem;
    left: -2.25rem;
    width: 0.125rem;
    bottom: 0.75rem;
    content: " ";
    position: absolute;
    background: var(--accent-color);
  }

  .text {
    margin-top: 0.75rem;
    margin-left: 0.25rem;
    margin-bottom: 2.5rem;
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
