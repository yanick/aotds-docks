<script>
    import { setContext } from 'svelte';

    import shipStore from './stores/ship';

    import Ftl from './components/Ftl/index.svelte';
    import Engine from './components/Engine/index.svelte';
  import Identification from './components/Identification.svelte';

    const ship = shipStore();

    setContext('ship',ship);

    let ship_name = $ship.ship_type.name;

    const change_name = event => ship.dispatch(
        ship.actions.set_name( event.target.value) );

const change_mass = ({target: {value}}) =>
ship.dispatch(ship.actions.set_ship_mass(parseInt(value)));

</script>

<main>

  Potato?
    <Identification />

    ship class: <input value={$ship.ship_type.name} on:change={change_name} />

    <input type="number" value={$ship.ship_type.mass} on:change={change_mass} />


    <Ftl />

    <Engine />

</main>

<style>
</style>
