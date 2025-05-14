<script>
  let {
    class: classList = "",
    position = "topleft",
    colorBg = "white",
    colorLarge = "white",
    colorSmall = null,
  } = $props();
</script>

<div class={`background ${classList}`} style={`--colorBg: var(--${colorBg});`}>
  <div
    class={`arch relative ${position}`}
    style={`--color: var(--${colorLarge});`}
  >
    {#if (colorSmall)}
      <div
        class={`arch absolute ${position}`}
        style={`--color: var(--${colorSmall});`}
      ></div>
    {/if}
  </div>
</div>

<style>
  :root {
    --animation-duration: 2s;
    --easing-function: cubic-bezier(0.66, 0.1, 0.34, 0.9);
  }

  .topleft {
    --gradient-position: 0% 0%;
    --gradient-angle: 90deg;
    border-radius: 0 0 100% 0;
    animation: animate-in-tl-br var(--animation-duration) var(--easing-function) forwards;
  }


  .topright {
    --gradient-position: 100% 0%;
    --gradient-angle: 0deg;
    border-radius: 0 0 0 100%;
    animation: animate-in-tr-bl var(--animation-duration) var(--easing-function) forwards;
  }

  .bottomleft {
    --gradient-position: 0% 100%;
    --gradient-angle: 0deg;
    border-radius: 0 100% 0 0;
    animation: animate-in-tr-bl var(--animation-duration) var(--easing-function) forwards;
  }

  .bottomright {
    --gradient-position: 100% 100%;
    --gradient-angle: 90deg;
    border-radius: 100% 0 0 0;
    animation: animate-in-tl-br var(--animation-duration) var(--easing-function) forwards;
  }

  div.background {
    transition: --horizontal-position 0.5s cubic-bezier(0.85, 0.09, 0.15, 0.91);
    animation: animate-in-horizontal var(--animation-duration) var(--easing-function) forwards;
    --horizontal-position: 0%;
    background: var(--colorBg);
    background: linear-gradient(
      0deg,
      var(--black) 0%,
      var(--black) var(--horizontal-position),
      var(--colorBg) var(--horizontal-position),
      var(--colorBg) 100%
    );
  }

  div.arch {
    /* transition: --gradient-angle 0.5s cubic-bezier(0.85, 0.09, 0.15, 0.91); */
    background: var(--colorBg);
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
   /* In */

  @keyframes animate-in-horizontal {
    0% {
      --horizontal-position: 100%;
    }
    50% {
      --horizontal-position: 0%;
    }
    100% {
      --horizontal-position: 0%;
    }
  }

  @keyframes animate-in-tl-br {
    0% {
      opacity: 0;
      --gradient-angle: 180deg;
    }
    50% {
      opacity: 0;
      --gradient-angle: 180deg;
    }
    51% {
      opacity: 1;
      --gradient-angle: 180deg;
    }
    100% {
      opacity: 1;
      --gradient-angle: 90deg;
    }
  }

  @keyframes animate-in-tr-bl {
    0% {
      opacity: 0;
      --gradient-angle: 90deg;
    }
    50% {
      opacity: 0;
      --gradient-angle: 90deg;
    }
    51% {
      opacity: 1;
      --gradient-angle: 90deg;
    }
    100% {
      opacity: 1;
      --gradient-angle: 0deg;
    }
  }

  /* Out */

  @keyframes animate-out-horizontal {
    0% {
      --horizontal-position: 0%;
    }
    50% {
      --horizontal-position: 0%;
    }
    100% {
      --horizontal-position: 100%;
    }
  }

  @keyframes animate-out-tl-br {
    0% {
      opacity: 1;
      --gradient-angle: 90deg;
    }
    50% {
      opacity: 1;
      --gradient-angle: 180deg;
    }
    51% {
      opacity: 0;
      --gradient-angle: 180deg;
    }
    100% {
      opacity: 0;
      --gradient-angle: 180deg;
    }
  }

  @keyframes animate-out-tr-bl {
    0% {
      opacity: 1;
      --gradient-angle: 0deg;
    }
    50% {
      opacity: 1;
      --gradient-angle: 90deg;
    }
    51% {
      opacity: 0;
      --gradient-angle: 90deg;
    }
    100% {
      opacity: 0;
      --gradient-angle: 90deg;
    }
  }
  
  @property --gradient-angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  @property --horizontal-position {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }
</style>
