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
</Fluff>

<header>

  <!-- 
  d m m d d
  d m m d d
  -->

  <!-- Row 1 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="bottomright" colorBg="yellow" colorLarge="black" colorSmall="red" />
  <TileArch class="mobile" position="topright" colorBg="red" colorLarge="black" colorSmall="black "/>
  <TileArch class="desktop" colorBg="red"/>
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 2 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="topright" colorBg="blue" colorLarge="black" colorSmall="white" />
  <TileHorizontal class="mobile" colorTop="white" colorBottom="black" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />

  <!-- Row 3 -->
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="mobile" position="topright" colorBg="black" colorLarge="blue" colorSmall="blue" />
  <TileArch class="mobile" position="bottomright" colorBg="white" colorLarge="black" colorSmall="black" />
  <TileArch class="desktop" colorBg="red" />
  <TileArch class="desktop" colorBg="red" />
</header>

<Fluff> 
  <TileArch class="tablet" />
  <TileArch class="tablet" />
  <TileArch class="tablet" />
</Fluff>
</div>

<style>
  div, header {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 430px) {
    header {
      width: 50vw;
    }
  }

  @media only screen and (min-width: 992px) {
    header {
      width: 71.4285714286vw;
    }
  }
</style>