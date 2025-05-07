<script>
  const {
    text = "Robin van der Heijden",
    color = "black",
    href = null,
    onanimationend = () => {},
    class: className = "",
    tag = "p",
    blurStrength = 0.3,
    blurOffset = 0.2,
  } = $props();
  const characters = text.split("");
</script>

{#snippet letters(char)}
  <span
    {onanimationend}
    class={className}
    style="transform: 
    rotate({Math.random() * 10 - 5}deg) 
    scale({Math.random() * 0.15 + 1}) 
    translate({Math.random() * 2}px, {Math.random() * 2}px); 
    filter: blur({Math.random() * blurStrength + blurOffset}rem);"
    >{#if char === " "}
      {@html "&nbsp;"}
    {:else}
      {char}
    {/if}
  </span>
{/snippet}

{#if href}
  <a {href} style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </a>
{:else if tag === "h1"}
  <h1 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h1>
{:else if tag === "h2"}
  <h2 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h2>
{:else if tag === "h3"}
  <h3 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h3>
{:else if tag === "h4"}
  <h4 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h4>
{:else if tag === "h5"}
  <h5 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h5>
{:else if tag === "h6"}
  <h6 style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </h6>
{:else}
  <p style="color: {color}">
    {#each characters as char}
      {@render letters(char)}
    {/each}
    &nbsp; &nbsp;
  </p>
{/if}

<style>
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline;
    word-break: break-all;
    /* line-height: 0.9; */
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    animation: fade-in 3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  p > span,
  a > span,
  h1 > span,
  h2 > span,
  h3 > span,
  h4 > span,
  h5 > span,
  h6 > span {
    /* margin-right: -1.9rem; */
    width: fit-content;
    display: inline-block;
    font-size: 4rem;
    transition: filter 0.5s ease-in-out;
  }

  p:hover > span,
  a:hover > span,
  h1:hover > span,
  h2:hover > span,
  h3:hover > span,
  h4:hover > span,
  h5:hover > span,
  h6:hover > span {
    filter: blur(0rem) !important;
  }

  .animation {
    animation: fade-out 3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
</style>
