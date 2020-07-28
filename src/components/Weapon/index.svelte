<ShipItem {cost} {mass}>

  <div class="weapon_row">
<div class="remove" on:click={remove}>X</div>


<svelte:component this={weapon_component[weapon_type]} {...weapon}
    on:change={update}/>
</div>
</ShipItem>

<script>
  import {getContext } from 'svelte';

    import Arc from '../Weapons/Arc.svelte';
    import { weapon_cost_mass } from '../../dux/weapons/rules.js';
    import fp from 'lodash/fp';
    import _ from 'lodash';
    import { createEventDispatcher } from 'svelte';
    import ShipItem from '~C/ShipItem';
    import Field from '~C/Field';
    import Beam from './Beam';
    import Submunition from './Submunition';
    import PointDefenceSystem from './PointDefenceSystem';
    import Scattergun from './Scattergun';
    import Needle from './Needle';
    import dux from '~/dux';

  const weapon_component = {
    beam: Beam,
    'submunition': Submunition,
    'pds': PointDefenceSystem,
    scattergun: Scattergun,
    needle: Needle,
  };

    export let weapon = {};
    export let id;
    export let cost;
    export let mass;
    export let ship_change = getContext('ship_change') || ( () => {} );

    let weapon_type = weapon.weapon_type;

    const remove = () => ship_change( dux.actions.remove_weapon(id) );


  const update = ({detail}) => {
    ship_change( dux.actions.set_weapon({
      id, weapon_type, ...detail
    }) );
  }
</script>

<style>

.weapon {
    display: flex;
    align-items: center;
}

.weapon > * {
    margin-right: 2em;
}

.arcs {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 6em;
}


.arc input {
  margin: 0px;
}


.arc.F {
  grid-column: 2 / span 2;
  grid-row: 1;
}

.arc.FS {
  grid-column: 1;
  grid-row: 1 / span 2;
}

.arc.FP {
  grid-column: 4;
  grid-row: 1 / span 2;
}

.arc.AS {
  grid-column: 1;
  grid-row: 3 / span 2;
}

.arc.AP {
  grid-column: 4;
  grid-row: 3 / span 2;
}

.arc.A {
  grid-column: 2 / span 2;
  grid-row: 4;
}

.add-weapon {
    display: block;
}

.remove {
    width: 1em;
    flex: 0;
    color: white;
    background-color: black;
    border-radius: 0.5em;
    height: 1em;
}
  .weapon_row {
    display: flex;
    gap: 2em;
    align-items: center;
  }

</style>
