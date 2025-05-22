<script>
  let {
    ref = $bindable(),
    maxWidth = "32rem",
    totalPadding = 20,
  } = $props();

  const paddingLeft = Math.random() * totalPadding;
  const paddingRight = totalPadding - paddingLeft;
</script>

<div class="container" bind:this={ref} style={`width: min(calc(100% - ${totalPadding}vw), ${maxWidth}); margin: 1rem ${paddingRight}vw 0 ${paddingLeft}vw;`}>
  <span>What's your favourite color?</span>
  <div class="radio-container">
    <label for="green2">
      <input type="radio" name="demo2" id="green2" checked />
      Green
    </label>
    <label for="blue2">
      <input type="radio" name="demo2" id="blue2" />
      Blue
    </label>
    <label for="yellow2">
      <input type="radio" name="demo2" id="yellow2" />
      Yellow
    </label>
    <div class="highlight"></div>
  </div>
</div>

<style>
  .container {
    height: fit-content;
    background-color: var(--red);
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    opacity: 0;
  }

  .radio-container {
    display: flex;
    gap: 1rem;
  }

  label, span {
    color: #ffffff;
    mix-blend-mode: difference;
    width: fit-content;
    height: fit-content;
    z-index: 2;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  input {
    display: none;
  }
</style>
