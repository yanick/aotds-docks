<div class="ship-sheet">
  <Identification {...ship.general} />

  <Weapons weapons={ship.weaponry.weapons} />

  <div class="section-2">
  <Hull structure={ship.structure}
    ship_mass={ship.general.mass} />

  <Systems
    firecons={ship.weaponry.firecons.nbr}
    screens={ship.structure.screens}
  />
</div>

  <MainSystems
    ftl={ship.ftl.type}
    engine={ship.engine.rating}
  />

</div>

<script>
  import _ from 'lodash';

  import Identification from './Identification';
  import MainSystems from './MainSystems';
  import Hull from './Hull';
  import Weapons from './Weapons';
  import Systems from './Systems';

  export let ship;

</script>

<style>
.ship-sheet {
  width: 4.25in;
  height: 5.5in;
  border: 1px solid black;
  padding: 1em;
}

.section-2 {
  display: flex;
  align-items: start;
}



</style>
