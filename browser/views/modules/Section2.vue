<template>
  <section :class="$style.container">
    <section :class="$style.content">
      <h2 :class="$style.title">
        A Colorado favorite located in the heart of Edwards, Colorado.
      </h2>

      <p :class="$style.text">
        With a passion for consistently delicious cuisine, prepared with love by amazing people,served in an environment that makes our guests feel welcome dressed up or winding down.
      </p>

      <a :class="$style.button" href="/">
        Learn more
      </a>
    </section>

    <figure :class="$style.image">
      <img src="@/assets/images/drinking-by-the-fire.png" alt="Friends drinking outside of Etown in the cold by a fire.">
    </figure>
  </section>
</template>

<style module>
  .container {
    /* layout */
    justify-content: center;
    flex-direction: row-reverse;
    padding-bottom: 5.25rem;
    padding-top: 4.75rem;
    display: flex;

    /* graphics */
    background-blend-mode: multiply;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url('@/assets/images/avon.png');
    background-color: rgba(0,0,0,0.8);
    background-size: cover;

    /* typography */
    color: #fff;
  }

  .content {
    /* layout */
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 2rem;
    display: flex;
    width: 28rem;

    /* position */
    position: relative;
  }

  /* red line divider */
  .content:before {
    /* graphics */
    background-color: #c02727;
    content: ' ';
        
    /* layout */
    width: 0.125rem;

    /* position */
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
  }

  .title {
    /* layout */
    margin-bottom: 0;
    margin-top: -0.5rem;

    /* typography */
    letter-spacing: 0.0625rem;
    line-height: 2.75rem;
    font-family: 'Sentinel SSm A', 'Sentinel SSm B', serif;
    font-weight: 300;
    font-size: 2rem;
  }

  .text {
    /* layout */
    margin-bottom: 2.5rem;
    margin-left: 0.175rem;
    margin-top: 0.75rem;
    flex: 1;

    /* typography */
    letter-spacing: 0.015625rem;
    line-height: 1.375rem;
    font-weight: 300;
    font-size: 0.75rem;
  }

  .button {
    /* font-size: 12px;
    line-height: 2px;
    width: auto;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 2px;
    letter-spacing: 1px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    border-radius: 0;
    justify-content: center; */

    /* graphics */
    border: 2px solid #c02727;

    /* layout */
    align-self: flex-start;
    padding: 0.75rem 1.875rem;

    /* typography */
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 900;
    font-size: 0.75rem;
    color: inherit;
  }

  .image {
    /* layout */
    box-sizing: border-box;
    padding: 0 2rem;
    margin: 0;
    width: 28rem;

    /* typography */
    line-height: 0;
    text-align: right;
  }

  .image img {
    /* typography */
    height: auto;
    width: 100%;
  }
</style>
