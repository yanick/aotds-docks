<Section label="hull">

<ShipItem {cost} {mass} >
    <Field label="integrity">
        <input
            bind:value={rating}
            type="number" {min} {max} />
    </Field>
</ShipItem>


<Screens {...screens} on:set_screens />

<Armour {armour} on:ship_change />

</Section>

<script>
    import { createEventDispatcher } from 'svelte';

    import Section from '~C/Section';
    import Field from '~C/Field';
    import ShipItem from '~C/ShipItem';
    import Screens from './Screens';
    import Armour from './Armour';

    export let cost, mass, ship_mass, rating, screens, armour = (
        0, 0, 10, 1, [], []
    );

    let min, max;
  $: min = Math.ceil(ship_mass / 10);
  $: max = ship_mass;

const dispatch = createEventDispatcher();

    $: dispatch( 'change_hull', { rating } );

</script>

<style>
</style>
