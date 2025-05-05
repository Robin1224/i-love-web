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

<div bind:this={container} class={animating ? 'animation' : ''}>
  {#each Array(6) as _}
    <InkText />
  {/each}

  <InkText text="Frontend Developer" color="rgb(0, 255, 40)" />

  {#each Array(6) as _}
    <InkText />
  {/each}

  <InkText href="/projects" text="Projects" color="rgb(255, 102, 0)" />
  
  {#each Array(21) as _}
    <InkText />
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

  .animation {
    animation: fade-out 3s ease-in-out;
  }

@keyframes fade-out {
  0% {
    filter: contrast(50);
  }
  20% {
    filter: contrast(10);
  }
  100% {
    filter: contrast(0);
  }
}
</style>