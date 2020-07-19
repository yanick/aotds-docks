import tap from 'tap';
import { weapon_cost_mass } from './rules';

const cases = [
    [{
        weapon_type: "beam",
        weapon_class: 2,
        arcs: [ 'AP', 'A', 'AF' ]
    },{
        cost: 6,
        mass: 2,
    }
    ],
    [{
        weapon_type: "beam",
        weapon_class: 1,
        arcs: [ 'AP', 'A', 'AF' ]
    },{
        mass: 1,
        cost: 3,
    }
    ],
    [{ weapon_type: "beam", weapon_class: 3, arcs: [ 'AP', 'A', 'AF' ] },{ mass: 6, cost: 18, } ],
    [{ weapon_type: "beam", weapon_class: 4, arcs: [ 'AP', 'A', 'AF' ] },{ mass: 12, cost: 36, } ],
]

cases.forEach( ([weapon,expected]) => 
tap.match( 
    weapon_cost_mass(weapon), expected, JSON.stringify(weapon) ) );
