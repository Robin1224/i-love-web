<script>
  import { onNavigate } from '$app/navigation';
  import InkText from "$lib/components/molecules/InkText.svelte";

  let container;
  let animating = $state(false);

  onNavigate((navigation) => {
    return new Promise((resolve) => {
      animating = true;
      container.addEventListener('animationend', resolve);
    });
  });
</script>

<div bind:this={container}>
  {#each Array(6) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}

  <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} text="Frontend Web Developer" color="rgb(0, 255, 40)" />

  {#each Array(6) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}

  <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} href="/projects" text="Projects" color="rgb(255, 102, 0)" />
  
  {#each Array(21) as _}
    <InkText onanimationend={() => animating = false} class={animating ? 'animation' : ''} />
  {/each}
</div>

<style>
  div {
    background-color: white;
    filter: contrast(50);
    mix-blend-mode: darken;
    line-height: 3rem;
    height: 100vh;
    overflow: hidden;
  }
</style>