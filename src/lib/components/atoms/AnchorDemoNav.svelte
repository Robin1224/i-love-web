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
  <div class="navigation">
    <span class="logo">LOGO</span>
    <span class="home">Home</span>
    <span class="about">About</span>
    <span class="contact">Contact</span>
    <span class="blog">Blog</span>
    <div class="highlight"></div>
  </div>
  <a href="https://codepen.io/robin1224/pen/zxxgGbx">Nav menu - Codepen link</a>
</div>

<style>
  .container {
    height: fit-content;
    background-color: var(--red);
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    opacity: 0;
    overflow-x: scroll;
  }

  .navigation {
    padding: 0.3rem;
    display: flex
  }

  .logo {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  span {
    color: #ffffff;
    mix-blend-mode: difference;
    width: fit-content;
    height: fit-content;
    z-index: 2;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
  }

  a {
    justify-self: flex-end;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  .highlight {
    position: absolute;
    position-anchor: --demo-nav-anchor;
    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
    height: anchor-size(height);
    background-color: transparent;
    z-index: 1;
    transition: 0.2s ease-in-out;
    transform: translateY(-0.2rem);
  }

  .home {
    background-color: var(--green);
  }

  .about:hover, .contact:hover, .blog:hover {
    background-color: var(--green);
  }

  @supports (position-anchor: --demo-nav-anchor) {
    .highlight {
      background-color: var(--green);
    }

    .home {
      background-color: transparent;
      anchor-name: --demo-nav-anchor;
    }

    .about:hover, .contact:hover, .blog:hover {
      background-color: transparent;
      anchor-name: --demo-nav-anchor;
    }
  }
</style>
