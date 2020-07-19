<ShipItem {cost} {mass}>
    <Field label="firecons">
    <input type="number" bind:value={nbr} />
    </Field>
</ShipItem>

<script>
import { createEventDispatcher } from 'svelte';
import ShipItem from '~C/ShipItem';
import Field from '~C/Field';

    export let nbr, cost, mass = (0,0,0);

    const dispatch = createEventDispatcher();
    $: dispatch( 'change_firecons', nbr); 

</script>

<style>
</style>
