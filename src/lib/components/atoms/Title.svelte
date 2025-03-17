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
    line-height: 1.4;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;

    align-items: center;

    position: absolute;
    top: 2vw;
    left: 1vw;

    z-index: 1;
  }

  span {
    margin-bottom: -3vw;
  }

  /* I */
  span.title-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    color: var(--black);
  }

  /* Heart */
  h1 :global(svg) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    height: 15vw;
    transform: translateY(-1.5vw) translateX(2vw);
    width: auto;
  }

  /* Web */
  span.title-2 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    color: var(--white);
  }

  @media only screen and (min-width: 430px) {
    h1 {
      font-size: 11vw;
      line-height: 1.4;
      top: 0;
      left: 0;
    }

    /* Heart */
    h1 :global(svg) {
      height: 8.5vw;
      transform: translateY(0) translateX(2vw);
    }
  }

  @media only screen and (min-width: 992px) {
    h1 {
      font-size: 7vw;
    }

    /* Heart */
    h1 :global(svg) {
      height: 5.3vw;
      transform: translateY(0.3vw) translateX(1vw);
    }
  }
</style>
