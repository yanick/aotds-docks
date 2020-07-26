<ShipItem {cost} {mass}>
  <Field label="cargo">
    <input type="number" min="0" bind:value={space}/>
  </Field>
</ShipItem>

  <script>
  import get from 'lodash/get';
  import ShipItem from '~C/ShipItem/index.svelte';
  import Field from '~C/Field/index.svelte';
  import dux from '~/dux/cargo';

  import {getContext, createEventDispatcher} from 'svelte';

  const ship = getContext('ship');

  export let space = 0;
  export let cost = 0;
  export let mass = 0;

  const dispatch = createEventDispatcher();
  $: dispatch( 'set_cargo', dux.actions.set_cargo( space ) );

  </script>

  <style>
  input {
    width: 5em;
  }
  </style>
