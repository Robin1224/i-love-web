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
    <label for="green4">
      <input type="radio" name="demo4" id="green4" checked />
      Green
    </label>
    <label for="blue4">
      <input type="radio" name="demo4" id="blue4" />
      Blue
    </label>
    <label for="yellow4">
      <input type="radio" name="demo4" id="yellow4" />
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
    --highlight-color: var(--green);
  }

  .highlight {
    position: absolute;
    position-anchor: --demo4-anchor;
    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
    height: anchor-size(height);
    background-color: var(--highlight-color);
    transition: 0.3s ease-in-out;
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
    anchor-name: --demo4-anchor;
  }

  .radio-container:has(label:nth-of-type(1) > input:checked) {
    --highlight-color: var(--green);
  }

  .radio-container:has(label:nth-of-type(2) > input:checked) {
    --highlight-color: var(--blue);
  }

  .radio-container:has(label:nth-of-type(3) > input:checked) {
    --highlight-color: var(--yellow);
  }
</style>
