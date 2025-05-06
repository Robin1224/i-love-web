<script>
  const {
    text = "Robin van der Heijden",
    color = "black",
    href = null,
    onanimationend = () => {},
    class: className = ""
  } = $props();
  const characters = text.split("");
</script>

{#snippet letters(char)}
  <span
    onanimationend={onanimationend}
    class={className}
    style="transform: 
    rotate({Math.random() * 10 - 5}deg) 
    scale({Math.random() * 0.15 + 1}) 
    translate({Math.random() * 2}px, {Math.random() * 2}px); 
    filter: blur({Math.random() * 0.3 + 0.2}rem);"
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
  a {
    display: inline;
    font-family: "Delegate TM", Courier, monospace;
    word-break: break-all;
    /* line-height: 0.9; */
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    animation: fade-in 3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  p > span,
  a > span {
    /* margin-right: -1.9rem; */
    width: fit-content;
    display: inline-block;
    font-size: 4rem;
    transition: filter 0.5s ease-in-out;
  }

  p:hover > span,
  a:hover > span {
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
