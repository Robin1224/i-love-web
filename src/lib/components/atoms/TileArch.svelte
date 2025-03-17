<script>
  let {
    class: classList = "",
    position = "topleft",
    colorBg = "white",
    colorLarge = "white",
    colorSmall = colorLarge,
  } = $props();
</script>

<div
  class={`${classList} ${position}`}
  style={`--colorBg: var(--${colorBg}); --colorLarge: var(--${colorLarge}); --colorSmall: var(--${colorSmall})`}
></div>

<style>
  .topleft {
    --gradient-position: at 0% 0%;
  }

  .topright {
    --gradient-position: at 100% 0%;
  }

  .bottomleft {
    --gradient-position: at 0% 100%;
  }

  .bottomright {
    --gradient-position: at 100% 100%;
  }

  div {
    background: var(--colorBg);
    background: radial-gradient(
      var(--gradient-position),
      var(--colorSmall) 35.175%,
      var(--colorLarge) 35.525%,
      var(--colorLarge) 70.65%,
      var(--colorBg) 70.85%
    );
    width: 100%;
    aspect-ratio: 1 / 1;
  }
</style>
