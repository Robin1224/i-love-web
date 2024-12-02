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
    width: 50vw;
    height: 50vw;
  }

  @media only screen and (min-width: 430px) {
    div {
      width: 25vw;
      height: 25vw;
    }
  }

  @media only screen and (min-width: 992px) {
    div {
      width: 14.2857vw;
      height: 14.2857vw;
    }
  }
</style>
