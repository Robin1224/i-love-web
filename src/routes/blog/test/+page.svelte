<script>
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { utils, stagger } from "animejs";

  import Paragraph from "$lib/components/atoms/Paragraph.svelte";

  let supported = $state(false);

  let windowRef;
  let backRef;
  let titleRef;
  let supportRef;

  let elements = $state([backRef, titleRef, supportRef]);
  let reversedElements = $derived(elements.reverse());

  const animationSpeed = 70;

  onMount(() => {
    supported = windowRef.CSS.supports("position-anchor: --my-anchor");

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });

    $effect(() => {
      if (supported) {
        utils.set(supportRef, {
          opacity: 1,
        });
      }
    });
  });

  onNavigate((navigation) => {
    return new Promise((resolve) => {
      utils.set(reversedElements, {
        opacity: 0,
        delay: stagger(animationSpeed),
        onComplete: resolve,
      });
    });
  });
</script>

<svelte:window bind:this={windowRef} />

<div class="back-button" bind:this={backRef}>
  <a href="/blog"> back to blog </a>
</div>

<div class="title" bind:this={titleRef}>
  <h1>css-only anchor() based radio selector animation</h1>
</div>

{#if !supported}
  <Paragraph bind:ref={supportRef} --bg="var(--red)">
    <h2>
      Your browser doesn't support the anchor positioning API! Demos on this
      page will not work properly.
    </h2>
  </Paragraph>
{/if}

<Paragraph bind:ref={[...elements]} --bg="var(--red)">
  <h2>
    Your browser doesn't support the anchor positioning API! Demos on this
    page will not work properly.
  </h2>
</Paragraph>


<style>
  a,
  p,
  h1,
  pre {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  h2 {
    color: #ffffff;
    mix-blend-mode: difference;
  }

  span {
    display: inline;
    width: fit-content;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .back-button {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 120px;
    width: max(200px, 20vw);
    background-color: var(--green);
    margin-left: 5vw;
    margin-top: 5vh;
    opacity: 0;
  }

  .title {
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 8vh;
    left: 13vw;
    background-color: var(--red);
    opacity: 0;
  }

  h1 {
    font-size: 1rem;
  }

  .highlight {
    background-color: var(--red);
  }
</style>
