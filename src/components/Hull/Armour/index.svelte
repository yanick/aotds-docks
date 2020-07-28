<ShipItem {cost} {mass} >

<div>

<div class="nbr_layers">
<Field label="armour layers">
    <input type="number" min="0" bind:value={nbr_layers} />
</Field>
</div>

<div class="layers">
    {#each armour as layer ( layer.layer )}
        <Layer {...layer} on:ship_change/>
    {/each}
</div>


</div>

</ShipItem>

<script>
  import { createEventDispatcher} from 'svelte';

    import ShipItem from '~C/ShipItem/index.svelte';
    import Field from '~C/Field/index.svelte';
    import Layer from './Layer/index.svelte';
    import dux from '~/dux/structure/armour';
    import _ from 'lodash';

    export let armour = [];
    export let cost = 0;
    export let mass = 0;

    $: cost = _.sum( _.map( armour, 'cost' ) );
    $: mass = _.sum( _.map( armour, 'mass' ) );

    let nbr_layers = armour.length;

    const dispatch = createEventDispatcher();

    $: dispatch( 'ship_change', dux.actions.set_armour_nbr_layers(nbr_layers) );

</script>

<style>
    .layers {
        display: flex;

    }

    input {
      width: 5em;
    }

</style>
