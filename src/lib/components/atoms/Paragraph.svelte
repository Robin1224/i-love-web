<script>
  let {
    ref = $bindable(),
    children,
    maxWidth = "32rem",
    totalPadding = 20,
    scrollable = false,
  } = $props();

  const paddingLeft = Math.random() * totalPadding;
  const paddingRight = totalPadding - paddingLeft;
</script>

<div bind:this={ref} style={`width: min(calc(100% - ${totalPadding}vw), ${maxWidth}); margin: 1rem ${paddingRight}vw 0 ${paddingLeft}vw; ${scrollable ? "overflow-x: scroll;" : ""}`}>
  {@render children()}
</div>

<style>
  div {
    height: fit-content;
    background-color: var(--bg);
    display: flex;
    line-height: 1.2;
    gap: 1.2rem;
    flex-direction: column;
    opacity: 0;
    position: relative;
  }
</style>