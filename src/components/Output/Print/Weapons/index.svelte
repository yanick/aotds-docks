<div class="weapons">

  <div class="beams">
  {#each beams as beam}
    <Beam {...beam} />
  {/each}
  </div>


</div>

<script>
  import Beam from './Beam';
  export let weapons = [];

  let beams = [];
  $: beams = weapons.filter( ({ weapon_type }) => weapon_type === 'beam' );

</script>

<style>
  div {
    margin-bottom: 2em;
  }
  .beams {
    display: flex;
    justify-content: space-evenly;
  }
</style>
