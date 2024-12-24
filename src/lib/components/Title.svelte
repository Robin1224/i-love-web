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

  span.title-1 {
    position: absolute;
    top: 52.5vw;
    left: 53vw;

    color: var(--black);
  }

  h1 :global(svg) {
    position: absolute;

    top: 54.5vw;
    left: 63vw;

    height: 16vw;
    width: auto;
  }

  span.title-2 {
    position: absolute;
    top: 77.5vw;
    left: 53vw;

    color: var(--white);
  }
</style>