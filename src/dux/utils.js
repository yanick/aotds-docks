import fp from 'lodash/fp';

const expand_cost_mass = (obj={}) => ([
    fp.pick(['cost','mass'],obj),
    ...Object.values(obj || {}).filter( val => typeof val === 'object' ).map(
        val => expand_cost_mass(val)
    )
]);

export function calc_ship_req(ship) {

    console.log(ship);
    let { general, ...rest } = ship;

    //if(!general) general = {};

    const items = fp.flow(
        expand_cost_mass,
        fp.flattenDeep,
        fp.filter(fp.has('cost'))
    )({
        ...rest,
         cost: general.mass, mass: 0
    })

    return {
        mass: fp.sumBy('mass',items),
        cost: fp.sumBy('cost',items),
    }
}
