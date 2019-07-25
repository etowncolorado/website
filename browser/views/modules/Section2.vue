<template>
  <main :class="$style.root">
    <section :class="[$style.column, $style.content]">
      <h1 :class="$style.title">
        A Colorado favorite located in the heart of Edwards, Colorado.
      </h1>

      <p :class="$style.text">
        With a passion for consistently delicious cuisine, prepared with love by amazing people,served in an environment that makes our guests feel welcome dressed up or winding down.
      </p>
    </section>

    <figure :class="[$style.column, $style.figure]">
      <img :class="$style.image" src="@/assets/images/drinking-by-the-fire.png" alt="Friends drinking outside of Etown in the cold by a fire.">
    </figure>
  </main>
</template>


<style module>
  .root {
    color: var(--foreground-color);
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    background-image: url('@/assets/images/avon.png');
    background-color: rgba(0,0,0,0.8);
    padding-top: 4.75rem;
    padding-bottom: 5.25rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-blend-mode: multiply;
  }

  .column {
    width: 28rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .content {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
  }

  .content:after {
    /* display: none; */
    top: 0;
    left: 0;
    width: 0.125rem;
    bottom: 0;
    content: " ";
    position: absolute;
    background: var(--accent-color);
  }

  .title {
    font-size: 2rem;
    margin-top: -3rem;
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
    width: 100%;
    height: auto;
    /* margin-right: -3rem; */
  }
</style>
