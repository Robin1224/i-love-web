<script>
  import InkText from "$lib/components/atoms/InkText.svelte";

  let { onanimationend, class: className, container = $bindable() } = $props();
</script>

<header bind:this={container} class="ink-container">
  <InkText tag="p" text="Projects" blurStrength={0.15} blurOffset={0.16} {onanimationend} class={className}/>
  <InkText text="Go back" color="var(--red-ink)" blurStrength={0.1} blurOffset={0.12} href="/" {onanimationend} class={className}/>
  <InkText tag="p" text="Projects" blurStrength={0.15} blurOffset={0.16} {onanimationend} class={className}/>
  <InkText tag="h1" text="Projects" color="var(--green-ink)" blurStrength={0.1} blurOffset={0.12} {onanimationend} class={className}/>
  {#each Array(7) as _}
    <InkText tag="p" text="Projects" blurStrength={0.15} blurOffset={0.16} {onanimationend} class={className}/>
  {/each}
</header>

<style>
  header {
    background-color: white;
    width: max-content;
    display: block;
    transform: translateX(-10vw);
  }

  .animation {
    animation: fade-in 3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  header :global(p > span),
  header :global(h1 > span),
  header :global(h2 > span),
  header :global(h3 > span),
  header :global(h4 > span),
  header :global(h5 > span),
  header :global(h6 > span),
  header :global(a > span) {
    font-size: 3vw !important;
  }
</style>
