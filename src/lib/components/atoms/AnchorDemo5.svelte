<script>
  let { ref = $bindable(), maxWidth = "32rem", totalPadding = 20 } = $props();

  const paddingLeft = Math.random() * totalPadding;
  const paddingRight = totalPadding - paddingLeft;
</script>

<div
  class="container"
  bind:this={ref}
  style={`width: min(calc(100% - ${totalPadding}vw), ${maxWidth}); margin: 1rem ${paddingRight}vw 0 ${paddingLeft}vw;`}
>
  <span>What's your favourite color?</span>
  <div class="radio-container">
    <label for="green5">
      <input type="radio" name="demo5" id="green5" checked />
      Green
    </label>
    <label for="blue5">
      <input type="radio" name="demo5" id="blue5" />
      Blue
    </label>
    <label for="yellow5">
      <input type="radio" name="demo5" id="yellow5" />
      Yellow
    </label>
    <div class="highlight"></div>
  </div>
  <a href="https://codepen.io/robin1224/pen/zxxgGbx">Codepen link</a>
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

  label,
  span {
    /* font-size: 1rem; */
    color: #ffffff;
    mix-blend-mode: difference;
    width: fit-content;
    height: fit-content;
    z-index: 2;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  a {
    justify-self: flex-end;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  input {
    display: none;
  }

  .highlight {
    position: absolute;
    position-anchor: --demo5-anchor;
    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
    height: anchor-size(height);
    background-color: var(--highlight-color);
    z-index: 1;
    transition: 0.3s ease-in-out;
    transform: translateY(-0.2rem);
  }

  label:has(input:checked) {
    anchor-name: --demo5-anchor;
  }

  label:nth-of-type(1):has(input:checked) {
    background-color: var(--green);
  }

  label:nth-of-type(2):has(input:checked) {
    background-color: var(--blue);
  }

  label:nth-of-type(3):has(input:checked) {
    background-color: var(--yellow);
  }

  @supports (position-anchor: --demo5-anchor) {
    .radio-container:has(label:nth-of-type(1) > input:checked) {
      --highlight-color: var(--green);
    }

    .radio-container:has(label:nth-of-type(2) > input:checked) {
      --highlight-color: var(--blue);
    }

    .radio-container:has(label:nth-of-type(3) > input:checked) {
      --highlight-color: var(--yellow);
    }

    label:nth-of-type(1):has(input:checked) {
      background-color: transparent;
    }

    label:nth-of-type(2):has(input:checked) {
      background-color: transparent;
    }

    label:nth-of-type(3):has(input:checked) {
      background-color: transparent;
    }
  }
</style>
