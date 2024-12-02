<script>
  let { class: classList = "", position = "topleft", colorBg = "white", colorLarge = "white", colorSmall = "white" } = $props();
</script>

<div class={`${classList} ${position}`} style={`--colorBg: var(--${colorBg}); --colorLarge: var(--${colorLarge}); --colorSmall: var(--${colorSmall})`}></div>

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
      var(--colorSmall) 35.325%,
      var(--colorLarge) 35.625%,
      var(--colorLarge) 70.65%,
      var(--colorBg) 70.85%
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
