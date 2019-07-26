<template>
  <section :class="$style.container">
    <figure :class="$style.quote">
      <blockquote :class="$style.quote">
        <p :class="$style.text">Atmosphere is always lively, happy hour is on point, and I've always had an amazing meal with wonderful service.</p>
      </blockquote>

      <figcaption>
        <address :class="$style.citation">
          <a :class="$style.author" href="/">Taylor P.</a> Avon, Colorado
        </address>
      </figcaption>
    </figure>
  </section>
</template>

<style module>
  .container {
    /* layout */
    padding-bottom: 4.5rem;
    padding-top: 5.125rem;
  }

  .quote {
    /* layout */
    margin: 0;
  }

  .text {
    /* layout */
    font-size: 33px;
    margin: 0 auto;
    width: 42rem;

    /* typography */
    letter-spacing: .01875rem;
    line-height: 2.75rem;
    font-family: 'Sentinel SSm A', 'Sentinel SSm B', serif;
    font-weight: 300;
    text-align: center;
  }

  .text:before {
    content: '\201C';
  }

  .text:after {
    content: '\201D';
  }

  .citation {
    /* layout */
    padding-top: 3rem;

    /* position */
    position: relative;

    /* typography */
    text-align: center;
  }

  .citation:before {
    /* graphics */
    background-color: #c02727;
    content: ' ';
    
    /* position */
    transform: translate(-50%);
    position: absolute;
    height: 0.125rem;
    width: 3rem;
    left: 50%;
    top: 1.5rem;
  }

  .author {
    /* layout */
    margin-right: 0.125rem;
    margin-left: 0.75rem;

    /* typography */
    text-decoration: none;
    font-weight: 900;
    font-style: normal;
    font-size: 0.8125rem;
    color: inherit;
  }
</style>