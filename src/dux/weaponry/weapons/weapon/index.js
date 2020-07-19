import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";
import { weapon_cost_mass } from '../../../weapons/rules';

const uu = transform => state => transform(state)(state)

const with_reqs = uu( weapon => u(weapon_cost_mass(weapon)));

const initial = with_reqs({
        weapon_type: 'beam',
        weapon_class: 1,
    });

console.log(initial);

const dux = new Updux({
    initial
});

const set_weapon = action('set_weapon',payload());

dux.addMutation(
    set_weapon, payload => u.if( s => s.id === payload.id, 
        state => with_reqs(u(payload,state))
    )
)

export default dux.asDux;
