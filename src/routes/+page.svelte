<script>
  import { onNavigate } from '$app/navigation';
  import InkText from "$lib/components/atoms/InkText.svelte";

  let container;
  let animating = $state(false);

  onNavigate((navigation) => {
    return new Promise((resolve) => {
      animating = true;
      container.addEventListener('animationend', resolve);
    });
  });
</script>

<div bind:this={container} class="ink-container">
  {#each Array(6) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}

  <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} text="Frontend Web Developer" color="var(--green-ink)" />

  {#each Array(6) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}

  <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} href="/projects" text="Projects" color="var(--red-ink)" />
  
  {#each Array(21) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}
</div>

<style>
  div {
    background-color: white;
    line-height: 3rem;
    height: 100vh;
    overflow: hidden;
  }
</style>