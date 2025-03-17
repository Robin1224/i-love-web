<script>
  let {
    class: classList = "",
    colorTop = "white",
    colorBottom = "white",
  } = $props();
</script>

<div
  class={classList}
  style={`--colorTop: var(--${colorTop}); --colorBottom: var(--${colorBottom});`}
></div>

<style>
  div {
    background: var(--colorTop);
    background: linear-gradient(
      0deg,
      var(--colorBottom) 49.8%,
      var(--colorTop) 50%
    );
    width: 100%;
    aspect-ratio: 1 / 1;
  }
</style>
