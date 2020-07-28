<Section label="carrier">
  <ShipItem {cost} {mass} >
    <Field label="bays">
      <input type="number" min="0" bind:value={bays} />
    </Field>
  </ShipItem>

  {#each squadrons as squad (squad.id)}
    <Squadron {...squad} />  
  {/each}

</Section>

<script>
  import {getContext } from 'svelte';

  import Section from "~C/Section/index.svelte";
  import Field from "~C/Field/index.svelte";
  import ShipItem from "~C/ShipItem/index.svelte";
  import Squadron from './Squadron';
  import dux from '~/dux/carrier';

  export let bays = 0; 
  export let squadrons = [];
  export let cost = 0;
  export let mass = 0;
  export let ship_change = getContext('ship_change') || ( () => {} );

  $: ship_change( dux.actions.set_carrier_bays(bays) );

</script>

<style>
div {
  background-color: red;
}
</style>
