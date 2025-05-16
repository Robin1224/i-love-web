<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import { onMount } from "svelte";
</script>

<div class="no-js">
  <h1>robin van der heijden</h1>
  <h2>creative frontend developer</h2>
  <a href="/projects">projects</a>
  <a href="/blog">blog</a>
</div>

  <DraggableBox element="header" --color="#0000ff" --width={`${Math.random() * 60 + 5}vw`} --height={`${Math.random() * 60 + 5}vh`} --align="start">
    <h1>robin van der heijden</h1>
  </DraggableBox>

  <DraggableBox element="section" --color="#ff0000" --width={`${Math.random() * 60 + 5}vw`} --height={`${Math.random() * 60 + 5}vh`} --align="start">
    <h2>creative frontend developer</h2>
  </DraggableBox>

  <DraggableBox element="article" --color="#ffff00" --width={`${Math.random() * 60 + 5}vw`} --height={`${Math.random() * 60 + 5}vh`} --align="end">
    <a href="/projects">projects</a>
  </DraggableBox>

  <DraggableBox element="header" --color="#00ff00" --width={`${Math.random() * 60 + 5}vw`} --height={`${Math.random() * 60 + 5}vh`} --align="end">
    <a href="/blog">blog</a>
  </DraggableBox>

<style>
  h1, h2, h3, a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  /* :global(body) {
    filter: contrast(50);
  } */
</style>