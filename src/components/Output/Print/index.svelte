<div>
  <Identification {...ship.general} />

  <Weapons weapons={ship.weaponry.weapons} />

  <Armour armour={ship.structure.armour} />
  <Integrity
    rating={ship.structure.hull.rating}
    advanced={ship.structure.hull.advanced}
    ship_mass={ship.general.mass}
  />

  <MainSystems
    ftl={ship.ftl.type}
    engine={ship.engine.rating}
  />

</div>

<script>
  import Identification from './Identification';
  import Integrity from './Hull/Integrity';
  import Armour from './Hull/Armour';
  import MainSystems from './MainSystems';
  import Weapons from './Weapons';
  export let ship;

</script>

<style>
div {
  width: 4.25in;
  height: 5.5in;
  border: 1px solid black;
  padding: 1em;
}
</style>
