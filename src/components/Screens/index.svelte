
<input type="button" value="add screen" on:click={() => add_screen()} />
<input type="button" value="add advanced screen" 
    on:click={ () => add_screen(true) }/>

<ShipItem cost="10" mass="10">
    { nbr_regular } { nbr_advanced }
</ShipItem>

<script>
    import { createEventDispatcher } from 'svelte';

    import Section from '~C/Section';
    import Field from '~C/Field';
    import ShipItem from '~C/ShipItem';

    export let screens = [];

    $: if( !Array.isArray(screens) ) screens = [];

    let nbr_regular, nbr_advanced;
    $: {
        nbr_regular = screens.filter( ({advanced}) => !advanced ).length;
        nbr_advanced = screens.length - nbr_regular;
    }

    const dispatch = createEventDispatcher();
    const add_screen = (advanced) => {
    console.log(advanced); return dispatch( 'add_screen', advanced ); };

</script>
