<script>
  let { children } = $props();
</script>

<div>
  {@render children()}
</div>

<style>
  div {
    width: 25vw;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 992px) {
    div {
      width: 14.2857vw;
    }
  }
</style>