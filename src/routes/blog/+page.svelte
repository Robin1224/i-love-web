<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import { onMount } from "svelte";
  import { utils, stagger } from "animejs";
  import { onNavigate } from "$app/navigation";

  let backRef;
  let articleRef;
  const animationSpeed = 100;

  onMount(() => {
    let elements = [backRef, articleRef];

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });
  });

  onNavigate((navigation) => {
    let elements = [articleRef, backRef];

    return new Promise((resolve) => {
      utils.set(elements, {
        opacity: 0,
        delay: stagger(animationSpeed),
        onComplete: resolve,
      });
    });
  });
</script>

<DraggableBox
  bind:ref={articleRef}
  element="section"
  --color="#ffff00"
  --width={`${Math.random() * 10 + 30}vw`}
  --height={`${Math.random() * 10 + 25}vh`}
  --align="end"
>
<p>21 May 2025</p>
  <a href="/blog/anchor-radio-inputs">css-only anchor() based radio selector animation</a>
</DraggableBox>

<DraggableBox
  bind:ref={backRef}
  element="section"
  x={9}
  y={15}
  --color="#00ff00"
  --width={`${Math.random() * 3 + 20}vw`}
  --height={`${Math.random() * 2 + 15}vh`}
  --align="end"
>
  <a href="/">back to home</a>
</DraggableBox>

<style>
  a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }
</style>