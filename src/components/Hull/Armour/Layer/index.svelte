<Field label={ `layer ${layer}` }>
    <input type="number" min="0" bind:value={rating} />
</Field>


<script>
  import { createEventDispatcher} from 'svelte';

    import dux from '~/dux/structure/armour';

    import ShipItem from '~C/ShipItem/index.svelte';
    import Field from '~C/Field/index.svelte';

    export let layer = 1;
    export let rating = 0;

    const dispatch = createEventDispatcher();

    $: dispatch( 'ship_change',
        dux.actions.set_armour_layer({layer,rating})
    );

</script>

<style>
  input {
    width: 5em;
  }
  </style>
