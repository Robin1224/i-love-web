<script>
  import Heart from "$lib/icons/Heart.svelte";
</script>

<h1>
  <span class="title-1">I</span>
  <Heart />
  <span class="title-2">WEB</span>
</h1>

<style>
  h1 {
    font-family: Cooper Hewitt;
    font-weight: bold;
    font-size: 20vw;

    position: absolute;
  }

  /* I */
  span.title-1 {
    position: absolute;
    top: 52.5vw;
    left: 53vw;

    color: var(--black);
  }

  /* Heart */
  h1 :global(svg) {
    position: absolute;

    top: 54.5vw;
    left: 63vw;

    height: 16vw;
    width: auto;
  }

  /* Web */
  span.title-2 {
    position: absolute;
    top: 77.5vw;
    left: 53vw;

    color: var(--white);
  }

  @media only screen and (min-width: 430px) {
    h1 {
      font-size: 11vw;
    }

    /* I */
    span.title-1 {
      top: 25.75vw;
      left: 51.5vw;
    }

    /* Heart */
    h1 :global(svg) {
      top: 27vw;
      left: 56.5vw;

      height: 8.5vw;
    }

    /* Web */
    span.title-2 {
      top: 38vw;
      left: 51.5vw;
    }
  }

  @media only screen and (min-width: 992px) {
    h1 {
      font-size: 7vw;
    }

    /* I */
    span.title-1 {
      top: 14.35vw;
      left: 42.5vw;
    }

    /* Heart */
    h1 :global(svg) {
      top: 15.2vw;
      left: 45.5vw;

      height: 5.4vw;
    }

    /* Web */
    span.title-2 {
      top: 21.45vw;
      left: 42.5vw;
    }
  }
</style>
