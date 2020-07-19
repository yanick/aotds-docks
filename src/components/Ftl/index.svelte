<script>
    import { createEventDispatcher } from 'svelte';

    import ShipItem from '../ShipItem/index.svelte';
    import Field from '../Field/index.svelte';

    export let type = 'none';
    export let cost = 0;
    export let mass = 0;

    const dispatch = createEventDispatcher();

    const change = () => dispatch( 'change_ftl', type );

    const types = [ 'none', 'standard', 'advanced' ];


</script>

<ShipItem {mass} {cost}>
    <Field label="FTL drive">

    {#each types as t (t)}
        <label><input type="radio" bind:group={type} value={t} 
            on:change={change} /> {t} </label>
    {/each}
    </Field>
</ShipItem>

<style>
label {
    display: inline;
    margin-right: 1em;
}
</style>
