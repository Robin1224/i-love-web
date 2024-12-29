<script>
  import TileArch from "./TileArch.svelte";
  import TileHorizontal from "./TileHorizontal.svelte";
  import Title from "./Title.svelte";
</script>

<header>

  <!-- 
  d t m m t d d
  d t m m t d d
  d t m m t d d
  -->

  <Title />

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
  <TileHorizontal class="mobile" colorTop="white" colorBottom="black" />
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

<style>
  header {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 430px) {
  }

  @media only screen and (min-width: 992px) {
  }

</style>