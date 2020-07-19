<ShipItem {cost} {mass}>

<div>
<Field label="thrust rating">
    <input type="number" bind:value={ rating }
        min="0" max="20" step="1" />
</Field>

<label><input type="checkbox" bind:checked={advanced} /> advanced</label>
</div>

</ShipItem>


<script>
    import Field from '~C/Field';
    import ShipItem from '~C/ShipItem';
    import { createEventDispatcher } from 'svelte';

    export let cost;
    export let mass;
    export let advanced = false;
    export let rating = 0;

    const dispatch = createEventDispatcher();

console.log(advanced);
    $: dispatch( 'change_engine', { rating, advanced } );

</script>

<style>
div {
    display: flex;
    align-items: end;
}
label { margin-left: 2em; }
</style>
