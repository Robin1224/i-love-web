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
    <label for="green3">
      <input type="radio" name="demo3" id="green3" checked />
      Green
    </label>
    <label for="blue3">
      <input type="radio" name="demo3" id="blue3" />
      Blue
    </label>
    <label for="yellow3">
      <input type="radio" name="demo3" id="yellow3" />
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

  .highlight {
    position: absolute;
    position-anchor: --demo3-anchor;
    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
    height: anchor-size(height);
    background-color: var(--green);
  }

  label, span {
    color: #ffffff;
    mix-blend-mode: difference;
    width: fit-content;
    height: fit-content;
    z-index: 1;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  input {
    display: none;
  }

  label:has(input:checked) {
    anchor-name: --demo3-anchor;
  }
</style>
