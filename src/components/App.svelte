<Header />

  <nav>
    <input class="reset button small red" type="button"  value="reset" on:click={reset} />

    <div class="spacer" />
    <input type="button" class="button small notes" value="notes" on:click={toggle_notes} />

    <ul class="button-group">
    <input type="button" class="button small green" value="editor"
      on:click={() => set_output(null)} />
    <input type="button" class="button small green" value="json"
      on:click={() => set_output('json')} />
    <input type="button" class="button small green" value="print"
      on:click={() => set_output('print')} />
    </ul>
  </nav>

{#if show_notes}
<Notes show={show_notes} on:close={toggle_notes} />
{/if}

{#if output === 'json'}
  <OutputJson ship={$ship}
    on:close={() => set_output(null)}/>
  {:else if output === 'print' }
    <Print ship={$ship} />
{:else}

<main>

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
    cargo={$ship.cargo}
    streamlining={$ship.streamlining}
    on:set_cargo={ship_dispatch}
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

  <Carrier {...$ship.carrier} />


</main>
  <footer>
    Written by <a href="https://twitter.com/yenzie">Yanick Champoux</a>.
    Code available on <a
      href="https://github.com/yanick/aotds-shipyard">Github</a>
  </footer>

{/if}
<script>
  import { setContext } from "svelte";

  import Header from './Header';
  import shipStore from "~/stores/ship";
  import OutputJson from './Output/Json.svelte';
  import Print from './Output/Print';

  import ShipSpecs from './ShipSpecs/index.svelte';
  import Notes from './Notes';
  import ShipItem from "./ShipItem/index.svelte";
  import Field from "./Field/index.svelte";
  import Hull from "./Hull";
  import Firecons from "./Firecons.svelte";
  import Propulsion from "./Propulsion/index.svelte";
  import Section from "~C/Section";
  import Weapon from "~C/Weapon";
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

  let show_notes = false;
  const toggle_notes = () => show_notes = !show_notes;

  let output = null;

  const set_output = value => output = value;

</script>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 14em 8em;
    width: 60em;
    margin-left: auto;
    margin-right: auto;
  }

  nav {
    grid-column: 1 / span 3 !important;
    display: flex;
    width: 60em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }

  nav .spacer {
    flex: 1;
  }


  :global(main > *) {
    grid-column: 1;
  }

  input.reset {
    grid-column: 2;
  }

  footer {
    width: var(--main-width);
    margin: 0 auto;
    text-align: right;
  }

  .notes {
    margin-right: 2em;
  }
</style>
