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
  <span>What's your favourite food?</span>
  <div class="radio-container">
    <label for="spaghetti">
      <input type="radio" name="food" id="spaghetti" checked />
      Spaghetti
    </label>
    <label for="pizza">
      <input type="radio" name="food" id="pizza" />
      Pizza
    </label>
    <label for="salad">
      <input type="radio" name="food" id="salad" />
      Salad
    </label>
    <label for="burger">
      <input type="radio" name="food" id="burger" />
      Burger
    </label>
    <div class="highlight"></div>
  </div>
  <a href="https://codepen.io/robin1224/pen/vEOBjXz">Codepen link</a>
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
    flex-direction: column;
    gap: 0.5rem;
  }

  label,
  span {
    color: #ffffff;
    mix-blend-mode: difference;
    width: fit-content;
    height: fit-content;
    z-index: 2;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    justify-self: flex-end;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  input {
    appearance: none;
    background-color: transparent;
		margin: 0;
		font: inherit;
		width: 1.15rem;
		height: 1.15rem;
		border: 0.15rem solid var(--green);
		border-radius: 9999px;
		transform: translateY(-0.08rem);
  }

  .highlight {
    position: absolute;
    position-anchor: --demo-food-anchor;
    left: anchor(left);
    top: anchor(top);
    width: calc(anchor-size(width) - 0.2rem);
    height: calc(anchor-size(height) - 0.2rem);
    background-color: var(--yellow);
    z-index: 1;
    transition: 0.1s ease-in-out;
    transform: translateY(-0.2rem);
    border-radius: 9999px;
  }

  input:checked {
    anchor-name: --demo-food-anchor;
  }
</style>
