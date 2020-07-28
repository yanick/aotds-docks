<ShipItem {cost} {mass} >
  <Field label={`squadron ${id}`}>
    <select bind:value={type}>
      {#each types as type (type)}
        <option>{type}</option> 
      {/each}
    </select>
  </Field>
</ShipItem>

<script>
  import {getContext } from 'svelte';

  import Section from "~C/Section/index.svelte";
  import Field from "~C/Field/index.svelte";
  import ShipItem from "~C/ShipItem/index.svelte";
  import dux from '~/dux/carrier';
  import squadron_types from '~/dux/carrier/squadron_types';

  const types = squadron_types.map( ({type}) => type );

  export let id = 1;
  export let type = "standard";
  export let ftl = false; 
  export let cost =0;
  export let mass = 0;

  export let ship_change = getContext('ship_change') || ( () => {} );

  $: ship_change( dux.actions.set_squadron({ id, type, }) );

</script>

<style>
div {
  background-color: red;
}
</style>
