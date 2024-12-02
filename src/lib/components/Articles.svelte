<script>
  import Fluff from "./Fluff.svelte";
  import TileArch from "./TileArch.svelte";
  import TileHorizontal from "./TileHorizontal.svelte";
</script>

<div>
<Fluff> 
  <TileArch class="tablet" />
  <TileArch class="tablet" />
  <TileArch class="tablet" />
  <TileArch class="tablet" />
</Fluff>

<main>

  <!-- 
  d m m d d
  d m m d d
  -->

  <!-- Row 1 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="topright" colorBg="red" colorLarge="yellow" colorSmall="yellow" />
  <TileArch class="mobile" position="topright" colorBg="yellow" colorLarge="red" colorSmall="red"/>
  <TileArch class="desktop" colorBg="red"/>
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 2 -->
  <TileArch class="desktop" colorBg="red" />
  <TileHorizontal class="mobile" colorTop="red" colorBottom="white" />
  <TileArch class="mobile" position="bottomleft" colorBg="black" colorLarge="red" colorSmall="white"/>
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 3 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="bottomright" colorBg="white" colorLarge="black" colorSmall="blue" />
  <TileHorizontal class="mobile" colorTop="black" colorBottom="blue" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 4 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="topleft" colorBg="yellow" colorLarge="black" colorSmall="black" />
  <TileArch class="mobile" position="bottomright" colorBg="red" colorLarge="black" colorSmall="black" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />
</main>

<Fluff> 
  <TileArch class="tablet" />
  <TileArch class="tablet" />
  <TileArch class="tablet" />
  <TileArch class="tablet" />
</Fluff>
</div>

<style>
  div, main {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 430px) {
    main {
      width: 50vw;
    }
  }

  @media only screen and (min-width: 992px) {
    main {
      width: 71.4285714286vw;
    }
  }
</style>