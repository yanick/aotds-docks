<div>
  {#each rows as row (row)}
    <div class="row">
      {#each row as item (item)}
        <div class="cell">
          {#if item}
            <img src="icons/crew-star.svg" alt="crew loss threshold" />
          {/if}
        </div>
      {/each}
    </div>
  {/each}

</div>

<script>
  import { ceil } from '~/dux/utils';

  export let ship_mass = 0;
  export let rating = 0;
  export let advanced = false;

  let nbr_rows;
  $: nbr_rows = advanced ? 3 : 4;

  let cells;
  $: cells = Array(rating).fill(false);

  let dcp;
  $: dcp= ceil(ship_mass/20);

  $: cells = divide(cells, dcp).map(
    g => {
      g[g.length-1] = true;
      return g;
    }
  ).flat();

  function divide(list, divider) {
    if( divider <= 1 ) return [ list ];

    let div = list.length / divider;
    const mod = list.length % divider;

    if(mod) div++;

    return [
      list.slice(0,div),
      ...divide( list.slice(div), divider-1 )
    ]
  }

  let rows = [];
  $: rows = divide( cells, nbr_rows );


</script>

<style>
  .row {
  }
.cell {
  display: inline-block;
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  border: 1px solid black;
}
  img {
    width: 1em;
  }
</style>
