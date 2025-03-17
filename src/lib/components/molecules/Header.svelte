<script>
  import TileArch from "$lib/components/atoms/TileArch.svelte";
  import TileHorizontal from "$lib/components/atoms/TileHorizontal.svelte";
  import Title from "$lib/components/atoms/Title.svelte";
</script>

<header class="tile-grid">

  <!-- 
  d t m m t d d
  d t m m t d d
  d t m m t d d
  -->

  <!-- <Title /> -->

  <!-- Row 1 -->
  <TileArch class="desktop" position="bottomleft" colorBg="red" colorLarge="black" />
  <TileArch class="tablet" position="bottomright" colorBg="blue" colorLarge="black" />
  <TileArch class="mobile" position="bottomright" colorBg="yellow" colorLarge="black" colorSmall="red" />
  <TileArch class="mobile" position="topright" colorBg="red" colorLarge="black"/>
  <TileArch class="tablet" position="bottomleft" colorBg="black" colorLarge="blue" />
  <TileArch class="desktop" position="topleft" colorBg="black" colorLarge="white" />
  <TileArch class="desktop" position="bottomright" colorBg="yellow" colorLarge="black" />

  <!-- Row 2 -->
  <TileArch class="desktop" position="topright" colorBg="blue" colorLarge="black" />
  <TileArch class="tablet" position="topright" colorBg="black" colorLarge="white" colorSmall="white" />
  <TileArch class="mobile" position="topright" colorBg="blue" colorLarge="black" colorSmall="white" />
  <div class="relative">
    <TileHorizontal class="mobile" colorTop="white" colorBottom="black" />
    <Title />
  </div>
  <TileArch class="tablet" position="bottomleft" colorBg="blue" colorLarge="white" colorSmall="black" />
  <TileArch class="desktop" position="bottomright" colorBg="black" colorLarge="red" />
  <TileArch class="desktop" position="bottomleft" colorBg="blue" colorLarge="black" />

  <!-- Row 3 -->
  <TileArch class="desktop" position="bottomright" colorBg="yellow" colorLarge="black" />
  <TileArch class="tablet" position="bottomright" colorBg="black" colorLarge="red" />
  <TileArch class="mobile" position="topright" colorBg="black" colorLarge="blue" />
  <TileArch class="mobile" position="bottomright" colorBg="white" colorLarge="black" />
  <TileArch class="tablet" position="topright" colorBg="black" colorLarge="red" />
  <TileArch class="desktop" position="bottomright" colorBg="red" colorLarge="white" />
  <TileArch class="desktop" position="topleft" colorBg="black" colorLarge="white" />
</header>