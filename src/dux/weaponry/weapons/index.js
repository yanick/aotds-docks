import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

import weapon from './weapon';

const add_weapon = action('add_weapon');
const remove_weapon = action('remove_weapon', payload());

const dux = new Updux({
    initial: [],
    subduxes: { '*': weapon }
})

dux.addMutation( add_weapon, () => state => {
    const id = 1 + Math.max( 0, ... state.map(({id})=>id) );
    return [ ...state, { ...weapon.initial, id }];
});

dux.addMutation( remove_weapon, id => state => 
    state.filter( w => w.id !== id )
);

export default dux.asDux;
