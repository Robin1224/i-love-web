<script>
  import PageHeader from "$lib/components/molecules/PageHeader.svelte";
  import { onNavigate } from '$app/navigation';

  let animating = $state(false);
  let container;

  onNavigate((navigation) => {
    return new Promise((resolve) => {
      animating = true;
      container.addEventListener('animationend', resolve);
    });
  });
</script>

<PageHeader bind:container={container} onanimationend={() => animating = false} class={animating ? 'animation' : ''}/>

<style>
</style>