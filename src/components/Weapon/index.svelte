<ShipItem {cost} {mass}>

<div class="remove" on:click={remove}>X</div>

<Field label="weapon type">
<select bind:value={weapon_type}>
    <option>beam</option>
</select>
</Field>

<Field label="weapon class">
<select bind:value={weapon_class}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
</Field>

<Field label="arcs">
    <select bind:value={nbr_arcs}>
        {#each arc_options[weapon_class]||[] as nbr_arcs (nbr_arcs)}
        <option>{nbr_arcs}</option>
        {/each}
    </select>
</Field>


<svg width="60px" height="60px">
{#each all_arcs as arc (arc)}
    <Arc {arc} radius={30} 
        active={arcs.includes(arc)}
        on:click={()=>click_arc(arc)}
    />
{/each}
    <circle cx="30" cy="30" r="15" />

    
</svg>

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
    import dux from '~/dux';


    const all_arcs = [ 'FS', 'F', 'FP', 'AP', 'A', 'AS' ];

    export let weapon_type;
    export let weapon_class;
    export let id;
    export let arcs = [];
    export let cost;
    export let mass;
    export let ship_change = getContext('ship_change') || ( () => {} );

    let arc_options = {
        1: [ 6],
        2: [ 3, 6 ],
        3: [ 1, 2, 3, 4, 5, 6, 'broadside' ],
        4: [ 1, 2, 3, 4, 5, 6, 'broadside' ]
    };

    let nbr_arcs = 6;
    $: console.log(weapon_class);
    $: nbr_arcs = arc_options[weapon_class][0];

    $: console.log({arcs,nbr_arcs})

    $: if ( arcs.length !== nbr_arcs ) {
        if( nbr_arcs === 'broadside' ) {
            arcs = all_arcs.filter( arc => arc.length === 1 )
        }
        else{

        let first_index = all_arcs.findIndex( arc => arcs[0] );
        if( first_index === -1 ) first_index = 0;

        const new_arcs = [];

        _.range(nbr_arcs).forEach( i => {
            new_arcs.push( all_arcs[first_index] )
            first_index = ( first_index + 1 ) % all_arcs.length;
        });

        arcs = new_arcs;
        }
    }

    const click_arc = (first_arc) => {
        if( nbr_arcs === 'broadside' ) return;

        let first_index = all_arcs.findIndex( arc => arc === first_arc );

        const new_arcs = [];

        _.range(nbr_arcs).forEach( i => {
            new_arcs.push( all_arcs[first_index] );
            first_index = ( first_index + 1 ) % all_arcs.length;
        });

        arcs = new_arcs;
        
    }

    let i = 1;
    $: if(weapon_class) i = 1;

    let cache = '';
    $: cache = arcs.join(":");

    const remove = () => ship_change( dux.actions.remove_weapon(id) );

    $: ship_change( dux.actions.set_weapon({
      id, weapon_class, weapon_type, arcs: cache.split(":")
    }));

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

.arc {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
}

.add-weapon {
    display: block;
}

circle {
    fill: white;
}

.remove {
    width: 1em;
    flex: 0;
    color: white;
    background-color: black;
    border-radius: 0.5em;
    height: 1em;
}

</style>
