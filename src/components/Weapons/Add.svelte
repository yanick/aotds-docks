<input class="add-weapon" type="button" value="add" 
    on:click={add} />

<div class="weapon">

<select bind:value={weapon_type}>
    <option>beam</option>
</select>

<select bind:value={weapon_class}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>

<select bind:value={nbr_arcs}>
{#each arc_options[weapon_class] as opt (opt)}
    <option>{opt}</option>
{/each}
</select>

<svg width="60px" height="60px">
{#each arcs as arc (arc)}
    <Arc {arc} radius={30} 
        active={selected_arc[arc]}
        on:click={()=>click_arc(arc)}
    />
{/each}
    <circle cx="30" cy="30" r="15" />

    
</svg>

    <div>{weapon.cost}</div>
    <div>{weapon.mass}</div>

</div>

<script>
    let weapon_type = 'beam';
    let weapon_class = 1;
    let nbr_arcs = 6;
    $: nbr_arcs = arc_options[weapon_class][0];

    import Arc from './Arc.svelte';
    import { weapon_cost_mass } from '../../dux/weapons/rules.js';

    const arcs = [
        'FS', 'F', 'FP', 'AP', 'A', 'AS'
    ];

    import fp from 'lodash/fp';
    import _ from 'lodash';
    import { createEventDispatcher } from 'svelte';

    let arc_options = {
        1: [ 6],
        2: [ 3, 6 ],
        3: [ 1, 2, 3, 4, 5, 6, 'broadside' ],
        4: [ 1, 2, 3, 4, 5, 6, 'broadside' ]
    };

    let selected_arc = Object.fromEntries(
        arcs.map( arc => [ arc, false ] )
    );

    const nbr_selected_arcs = () => Object.values(selected_arc).filter( 
        x => x ).length;

    $: if ( nbr_selected_arcs() !== nbr_arcs ) {
        if( nbr_arcs === 'broadside' ) {
            const new_arcs = {};
            arcs.forEach( arc => new_arcs[arc] = true );
            new_arcs.A = false;
            new_arcs.F = false;
            selected_arc = new_arcs;
        }
        else{

        let first_index = arcs.findIndex( arc => selected_arc[arc] );
        if( first_index === -1 ) first_index = 0;

        const new_arcs = {};
        arcs.forEach( arc => new_arcs[arc] = false );

        _.range(nbr_arcs).forEach( i => {
            new_arcs[ arcs[first_index] ] = true;
            first_index = ( first_index + 1 ) % arcs.length;
        });

        selected_arc = new_arcs;
        }
    }

    const click_arc = (first_arc) => {
        if( nbr_arcs === 'broadside' ) return;

        let first_index = arcs.findIndex( arc => arc === first_arc );

        const new_arcs = {};
        arcs.forEach( arc => new_arcs[arc] = false );

        _.range(nbr_arcs).forEach( i => {
        console.log(first_index);
        console.log(selected_arc);
            new_arcs[ arcs[first_index] ] = true;
            first_index = ( first_index + 1 ) % arcs.length;
        });

        selected_arc = new_arcs;
        
    }

    let weapon = {};
    $: weapon= {
        weapon_type,
        weapon_class,
        arcs,
        ...weapon_cost_mass({ weapon_type, weapon_class, arcs: arcs.filter(
        arc => selected_arc[arc]
        ) })
    };

    const dispatch = createEventDispatcher();

    const add = () => {
        dispatch('add_weapon', weapon);
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

</style>
