<script>
  let {
    class: classList = "",
    position = "topleft",
    colorBg = "white",
    colorLarge = "white",
    colorSmall = null,
  } = $props();
</script>

<div class={`background ${classList}`} style={`--colorBg: var(--${colorBg})`}>
  <div
    class={`arch relative ${position}`}
    style={`--color: var(--${colorLarge});`}
  >
    <div
      class={`arch absolute ${position}`}
      style={`--color: var(--${colorSmall});`}
    ></div>
  </div>
</div>

<style>
  .topleft {
    --gradient-position: 0% 0%;
    --gradient-angle: 90deg;
    border-radius: 0 0 100% 0;
  }

  .topright {
    --gradient-position: 100% 0%;
    --gradient-angle: 0deg;
    border-radius: 0 0 0 100%;
  }

  .bottomleft {
    --gradient-position: 0% 100%;
    --gradient-angle: 0deg;
    border-radius: 0 100% 0 0;
  }

  .bottomright {
    --gradient-position: 100% 100%;
    --gradient-angle: 90deg;
    border-radius: 100% 0 0 0;
  }

  div.background {
    background-color: var(--colorBg);
  }

  div.arch {
    /* background: var(--colorBg); */
    background-image: conic-gradient(
      from var(--gradient-angle) at var(--gradient-position),
      var(--color) 0deg,
      var(--color) 90deg,
      var(--colorBg) 90deg,
      var(--colorBg) 180deg,
      var(--color) 180deg,
      var(--color) 270deg,
      var(--colorBg) 270deg,
      var(--colorBg) 360deg
    );
    width: 100%;
    aspect-ratio: 1 / 1;
  }


  div.absolute {
    width: 50%;
  }

  div.absolute.topleft {
    left: 0;
    top: 0;
  }

  div.absolute.topright {
    right: 0;
    top: 0;
  }
  
  div.absolute.bottomleft {
    left: 0;
    bottom: 0;
  }

  div.absolute.bottomright {
    right: 0;
    bottom: 0;
  }
  
  
</style>
