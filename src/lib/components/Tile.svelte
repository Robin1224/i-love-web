<script>
  let { class: classList = "", } = $props();
</script>

<div class={classList}>

</div>

<style>
  div {
    background: rgb(35,9,175);
    background: linear-gradient(37deg, rgba(35,9,175,1) 0%, rgba(68,29,253,1) 50%, rgba(32,9,175,1) 100%);
    width: 50vw;
    height: 50vw;
  }

  @media only screen and (min-width: 430px) {
    div {
      width: 25vw;
      height: 25vw;
    }
  }

  @media only screen and (min-width: 992px) {
    div {
      width: 14.2857vw;
      height: 14.2857vw;
    }
  }
</style>