<div class="mass">
  <Field label="ship tonnage">
    <input
      value={$ship.general.mass}
      on:change={change_tonnage}
      type="number"
      min="10"
      max="300" />
    <span class="mass_symbol"></span>

    <div class="note" class:warning={!within_budget}>
      {#if within_budget}
        mass unused: {mass_unused}
      {:else}excessive mass: {-mass_unused}{/if}
    </div>
  </Field>
</div>

<div class="cost">
  <Field label="cost">
    <span class="cost">{$ship.general.cost}</span></Field>
</div>

<script>
  import { getContext } from "svelte";
  import Field from "~C/Field";

  export let ship = getContext("ship");

  const change_tonnage = ({ target: { value } }) =>
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
  input {
    width: 5em;
  }
  .mass_symbol:after {
    content: url(mass.svg);
    width: 0.75em;
    display: inline-block;
    margin-left: 0.5em;
  }
  .warning {
    color: red;
  }
  .note {
    font-size: smaller;
  }

  .mass {
    grid-column: 2;
  }
  div.cost {
    grid-column: 3;
  }
  span.cost:after {
    content: '\00A4';
    margin-left: 0.5em;
  }
</style>
