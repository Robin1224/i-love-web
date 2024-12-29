<script>
  import TileArch from "./TileArch.svelte";
  import TileHorizontal from "./TileHorizontal.svelte";
</script>

<main>

  <!-- 
  d t m m t d d
  d t m m t d d
  d t m m t d d
  d t m m t d d
  -->

  <!-- <SectionTitle /> -->

  <!-- Row 1 -->
  <TileArch class="desktop" position="bottomleft" colorBg="red" colorLarge="black" colorSmall="black" />
  <TileArch class="tablet" position="bottomright" colorBg="black" colorLarge="yellow" colorSmall="yellow" />
  <TileArch class="mobile" position="topright" colorBg="red" colorLarge="yellow" colorSmall="yellow" />
  <TileArch class="mobile" position="topright" colorBg="yellow" colorLarge="red" colorSmall="red"/>
  <TileArch class="tablet" position="topleft" colorBg="black" colorLarge="yellow" colorSmall="yellow" />
  <TileArch class="desktop" position="topleft" colorBg="black" colorLarge="white" colorSmall="white" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 2 -->
  <TileArch class="desktop" colorBg="red" />
  <TileHorizontal class="tablet" colorTop="red" colorBottom="white" />
  <TileHorizontal class="mobile" colorTop="red" colorBottom="white" />
  <TileArch class="mobile" position="bottomleft" colorBg="black" colorLarge="red" colorSmall="white"/>
  <TileArch class="tablet" position="topright" colorBg="black" colorLarge="red" colorSmall="red" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 3 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="tablet" position="bottomleft" colorBg="black" colorLarge="blue" colorSmall="blue" />
  <TileArch class="mobile" position="bottomright" colorBg="white" colorLarge="black" colorSmall="blue" />
  <TileHorizontal class="mobile" colorTop="black" colorBottom="blue" />
  <TileHorizontal class="tablet" colorTop="black" colorBottom="blue" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 4 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="tablet" position="topright" colorBg="white" colorLarge="yellow" colorSmall="yellow" />
  <TileArch class="mobile" position="topleft" colorBg="yellow" colorLarge="black" colorSmall="black" />
  <TileArch class="mobile" position="bottomright" colorBg="red" colorLarge="black" colorSmall="black" />
  <TileArch class="tablet" position="bottomleft" colorBg="blue" colorLarge="white" colorSmall="white" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  @media only screen and (min-width: 430px) {
  }

  @media only screen and (min-width: 992px) {
  }
</style>