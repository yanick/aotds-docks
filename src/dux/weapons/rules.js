
export function weapon_cost_mass(weapon){
    let cost = 0;
    let mass = 0;

    if( weapon.weapon_type === 'beam' ) {
        return beam_cost_mass(weapon);
    }


    return { cost, mass };
}

const is_broadside = arcs => {
    if( arcs.length !== 4 ) return false;

    // that'd be A or F
    return !arcs.some( a => a.length === 1 );
}

function beam_cost_mass({weapon_class, arcs}) {
    let mass;
    if( weapon_class === 1 ) {
        mass = 1;
    }

    if( weapon_class == 2 ) {
        mass = 2 + (arcs.length > 3 ? 1 : 0);
    }


    if( weapon_class == 3 ) {
        mass = 4;

        if( is_broadside(arcs) ) {
            mass += 2;
        }
        else {
            mass += arcs.length - 1;
        }
    }

    if( weapon_class == 4 ) {
        mass = 8;

        if( is_broadside(arcs) ) {
            mass += 4;
        }
        else {
            mass += 2*(arcs.length - 1);
        }
    }

    return {
        mass, cost: 3 * mass 
    }


}
