<Header />
<main>
  <input class="reset" type="button" value="reset" on:click={reset} />

  <ShipSpecs />
  <Propulsion
    ftl={$ship.ftl}
    engine={$ship.engine}
    on:change_ftl={change_ftl}
    on:change_engine={change_engine} />

  <Hull
    ship_mass={$ship.general.mass}
    {...$ship.structure.hull}
    on:change_hull={change_hull}
    screens={$ship.structure.screens}
    armour={$ship.structure.armour}
    on:set_screens={set_screens}
    on:ship_change={ship_dispatch} />

  <Section label="weaponry">
    <Firecons
      {...$ship.weaponry.firecons}
      on:change_firecons={change_firecons} />

    <ADFC {...$ship.weaponry.adfc} />

    <AddWeapon />

    {#each weapons as weapon (weapon.id)}
      <Weapon {weapon} id={weapon.id} cost={weapon.cost} mass={weapon.mass} />
    {/each}

  </Section>

  <Section label="misc">
    <Cargo {...$ship.cargo} on:set_cargo={ship_dispatch} />
    <Streamlining {...$ship.streamlining} />
  </Section>

  <Carrier {...$ship.carrier} />

</main>

<script>
  import { setContext } from "svelte";

  import Header from './Header';
  import shipStore from "~/stores/ship";

  import ShipSpecs from './ShipSpecs/index.svelte';
  import ShipItem from "./ShipItem/index.svelte";
  import Field from "./Field/index.svelte";
  import Hull from "./Hull.svelte";
  import Firecons from "./Firecons.svelte";
  import Propulsion from "./Propulsion/index.svelte";
  import Section from "~C/Section";
  import Weapon from "~C/Weapon";
  import Cargo from "~C/Cargo/index.svelte";
  import Streamlining from "~C/Streamlining/index.svelte";
  import Carrier from "~C/Carrier";
  import ADFC from "~C/Weaponry/ADFC";
  import AddWeapon from "~C/Weaponry/AddWeapon";

  const ship = shipStore();

  setContext("ship", ship);

  let ship_name = $ship.general.name;

  const change_name = (event) =>
    ship.dispatch(ship.actions.set_name(event.target.value));

  const change_mass = ({ target: { value } }) =>
    ship.dispatch(ship.actions.set_ship_mass(parseInt(value)));

  const add_weapon = () => ship.dispatch.add_weapon();

  const change_ftl = ({ detail }) => ship.dispatch.set_ftl(detail);
  const change_engine = ({ detail }) => ship.dispatch.set_engine(detail);
  const change_hull = ({ detail }) => ship.dispatch.set_hull(detail);
  const change_firecons = ({ detail }) => ship.dispatch.set_firecons(detail);
  const change_weapon = ({ detail }) => ship.dispatch.set_weapon(detail);

  let weapons = [];
  $: console.log(weapons);
  $: weapons = $ship.weaponry.weapons;

  const reset = ship.dispatch.reset;

  const set_screens = ({ detail }) => ship.dispatch.set_screens(detail);

  const ship_dispatch = ({ detail }) => ship.dispatch(detail);

  setContext("ship_change", ship.dispatch);
</script>

<style>
  main {
    display: grid;
    width: 60em;
    grid-template-columns: 4fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
  }

  main :global(> *) {
    grid-column: 1;
  }

  input.reset {
    grid-column: 2;
  }
</style>
