<div class="identification">

    <Field label="ship class" value={general.ship_class}
        on:change={change_class} />

    <Field label="ship type">
      <select value={ship_type} on:change={change_ship_type}>
      {#each ship_types as type (type)}
        <option>{type}</option>
        {/each}
      </select>
    </Field>

</div>

<script>
  import { getContext } from 'svelte';

  import Field from './Field/index.svelte';
  import { candidate_ship_types } from '~/dux/ship_types';

  export let ship = getContext('ship');
  let general;
  $: general = $ship.general;

  const change_class = (event) => ship.dispatch(
    ship.actions.set_ship_class(event.target.value)
  );

  let ship_type;
  $: ship_type = $ship.general.ship_type;

    const change_ship_type = ({ target: {value}}) =>
        ship.dispatch.set_ship_type(value);

  let ship_types;
  $: ship_types = candidate_ship_types($ship.general.mass,false).map(
    ({name}) => name
  );

</script>

<style>
.identification {
    grid-column: span 3;
    display: flex;
    justify-content: space-around;
}
</style>
