<div class="layers">
  {#each armour as layer (layer)}
    <div class="layer">
      {#each _.range(layer.rating) as i (i) }
        <div class="cell">
        </div>
      {/each}
    </div>
  {/each}

</div>

<script>
  import _ from 'lodash';

  export let armour = [];

  $: console.log(armour);
</script>

<style>
.cell {
  display: inline-block;
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  border: 1px solid black;
  border-radius: 0.5em;
}
  .layers {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
