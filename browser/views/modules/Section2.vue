<script>
  import Divider1 from '@/views/components/Divider1.vue'

  export default {
    components: {
      Divider1,
    },
  }
</script>


<template>
  <main :class="[$system.container, $style.root]">
    <section :class="[$style.column, $style.content]">
      <h1 :class="[$typography.style1, $style.title]">
        A Colorado favorite located in the heart of Edwards, Colorado.
      </h1>

      <p :class="[$typography.style2, $style.text]">
        With a passion for consistently delicious cuisine, prepared with love by amazing people,served in an environment that makes our guests feel welcome dressed up or winding down.
      </p>
    </section>

    <Divider1/>

    <figure :class="[$style.column, $style.figure]">
      <img :class="$style.image" src="@/assets/images/drinking-by-the-fire.png" alt="Friends drinking outside of Etown in the cold by a fire.">
    </figure>
  </main>
</template>

<style module="$typography" src="@/design/typography.css"></style>
<style module="$system" src="@/design/system.css"></style>
<style module>
  .root {
    flex-direction: row-reverse;
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
    flex-direction: column;
    justify-content: center;
  }

  .title {
    position: relative;
    margin-top: -3rem;
    margin-bottom: 0;
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
    width: 100%;
    height: auto;
  }
</style>
