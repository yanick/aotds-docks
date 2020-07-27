import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";
import { weapon_cost_mass } from '../../weapons/rules';

const add_weapon = action('add_weapon', payload());
const remove_weapon = action('remove_weapon', payload());

const uu = transform => state => transform(state)(state)

const with_reqs = uu( weapon => u(weapon_cost_mass(weapon)));

const dux = new Updux({
    initial: [],
})

const weapon_initial = {
    beam: { weapon_type: "beam", weapon_class: 1, arcs: ['F'] },
    submunition: { 
        weapon_type: "submunition", arcs: ['F'] },
    pds: { weapon_type: 'pds' },
    scattergun: { weapon_type: 'scattergun' },
    needle: { weapon_type: 'needle', arcs: ['F'] },
};

dux.addMutation( add_weapon, (type) => state => {
    const id = 1 + Math.max( 0, ... state.map(({id})=>id) );
    return [ ...state, { ...with_reqs(weapon_initial[type]), id }];
});

dux.addMutation( remove_weapon, id => state => 
    state.filter( w => w.id !== id )
);

const set_weapon = action('set_weapon',payload());

dux.addMutation(
    set_weapon, payload => u.map( u.if( _.matches({id: payload.id}), 
        state => with_reqs(u(payload,state)) )
    )
);

export default dux.asDux;
