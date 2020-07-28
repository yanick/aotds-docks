<ShipItem { cost } { mass }>
  <div>

  <Field label="screens">
    <input type="number" bind:value={standard} min="0" />
  </Field>

  <Field label="advanced screens">
    <input type="number" bind:value={advanced} min="0" />
  </Field>
</div>

</ShipItem>

<script>
    import { createEventDispatcher } from 'svelte';

    import Section from '~C/Section';
    import Field from '~C/Field';
    import ShipItem from '~C/ShipItem';

    export let cost = 0;
    export let mass = 0;
    export let standard = 0;
    export let advanced = 0;

    let nbr_regular, nbr_advanced;

    const dispatch = createEventDispatcher();

    $: dispatch( 'set_screens', { standard, advanced } );
</script>

<style>
  input {
    width: 3em;
  }
  div {
    display: flex;
    gap: 2em;
  }
  </style>
