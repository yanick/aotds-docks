<div class="main_systems">

  {#if ftl !== "none" }
    <img class="ftl" src="icons/ftl-drive.svg" alt="ftl drive" />
  {/if}

  {#if engine > 0}
    <div class="thrust">{engine}</div>
  {/if}

  <img class="internal" src="icons/internal-systems.svg" alt="internal systems"/>
  </div>

<script>
  export let ftl = 'none';
  export let engine = 0;

</script>

<style>
  .thrust {
    background-image: url(icons/standard-drive.svg);
    width: 2em;
    background-size: 2em;
    background-repeat: no-repeat;
    height: 2em;
    line-height: 2em;
    text-align: center;
  }
.main_systems {
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-evenly;
  margin-top: 1em;
}
  img.ftl { height: 2em; }
  img.internal {
    height: 2em;
  }
</style>
