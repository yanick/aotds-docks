<ShipItem {cost} {mass}>
  <Field label="ADFC">
    <input type="number" bind:value={rating} />
  </Field>
</ShipItem>

  <script>
  import get from 'lodash/get';
  import ShipItem from '~C/ShipItem/index.svelte';
  import Field from '~C/Field/index.svelte';
  import dux from '~/dux';

  import {getContext } from 'svelte';

  export let rating = 0;
  export let cost = 0;
  export let mass = 0;
  export let ship_change = getContext('ship_change') || ( () => {} );

  $: ship_change( dux.actions.set_adfc(rating));

  </script>

  <style>
  div { display: flex }
  </style>
