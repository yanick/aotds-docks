<div class="ship_cost">
<div>
  <label>Ship tonnage</label>
  <input
    value={$ship.general.mass}
    on:change={change_tonnage}
    type="number" min="10" max="300" />
  <div>

  <div class="note" class:warning={!within_budget}>
    {#if within_budget}
    mass unused: { mass_unused }
  {:else}
    excessive mass: { -mass_unused }

    {/if}
  </div>

</div>
</div>

<div>
  <label>Ship cost</label>
  <div>{$ship.general.cost}</div>
</div>
  </div>

<script>
  import { getContext } from 'svelte';

  export let ship = getContext('ship');

  const change_tonnage =
  ({target: {value}}) =>
  ship.dispatch(ship.actions.set_ship_mass(parseInt(value)));

  let mass_unused;
  $: mass_unused = $ship.general.mass - $ship.general.used_mass;

  let within_budget = true;

  $: within_budget = mass_unused >= 0;

</script>

<style>
  .ship_cost {
    display: flex;
    grid-column: span 3;
    justify-content: space-around;
  }
  .warning {
    color: red;
  }
  .note {
    font-size: smaller;
  }
</style>
