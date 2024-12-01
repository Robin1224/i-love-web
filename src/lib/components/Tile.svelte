<script>
  let { class: classList = "", position = "topleft" } = $props();
</script>

<div class={`${classList} ${position}`}></div>

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
    background: rgb(35, 9, 175);
    background: radial-gradient(
      var(--gradient-position),
      red 70.65%,
      #00000000 50%
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
