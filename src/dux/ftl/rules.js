export function calc_ftl_reqs(type,ship_mass) {
    if(type==="none") return { cost: 0, mass: 0 };

    const mass = Math.ceil(ship_mass / 10);

    return {
        mass,
        cost: mass * ( type === 'advanced' ? 3 : 2 ),
    }
}
