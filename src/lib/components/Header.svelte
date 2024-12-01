<script>
  import Fluff from "./Fluff.svelte";
  import Tile from "./Tile.svelte";
</script>

<div>
<Fluff> 
  <Tile class="tablet" />
  <Tile class="tablet" />
</Fluff>

<header>
  <!-- 
  d m m d d
  d m m d d
  -->
  <Tile class="desktop"/>
  <Tile class="mobile" position="topright" />
  <Tile class="mobile" position="topleft "/>
  <Tile class="desktop"/>
  <Tile class="desktop"/>

  <Tile class="desktop"/>
  <Tile class="mobile" position="bottomright "/>
  <Tile class="mobile" />
  <Tile class="desktop"/>
  <Tile class="desktop"/>
</header>

<Fluff> 
  <Tile class="tablet" />
  <Tile class="tablet" />
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