import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import _ from 'lodash';
import { createSelector } from "reselect";

import squadron_types from './squadron_types';

const uu = transform => state => transform(state)(state);

const dux = new Updux({
    initial: {
        bays: 0,
        cost: 0,
        mass: 0,
        squadrons: [],
    },
});

const set_squadron = action('set_squadron',payload());

dux.addMutation(set_squadron, ({id,type}) => u({ squadrons: u.map(
    u.if(_.matches({id}), u({type, cost: 6 * _.find(squadron_types,{type}).cost, mass: 6 }))
)}));

const set_carrier_bays = action('set_carrier_bays', payload() );

dux.addMutation( set_carrier_bays, bays => state => {
    state = u({ 
        bays, 
        mass: 1.5*6*bays,
        cost: 3 * 1.5 * 6 * bays,
    })(state);

    if( state.squadrons.length > bays ) {
        state = u({
            squadrons: squadrons => squadrons.slice(0,bays)
        }, state) 
    }

    if( state.squadrons.length < bays ) {
        state = u({
            squadrons: squadrons => [ ...squadrons, ..._.times(
                bays - state.squadrons.length, i => ({
                    id: 1 + i + state.squadrons.length,
                    cost: 6 * squadron_types[0].cost,
                    mass: 6,
                    type: squadron_types[0].type,
                })
            )] }, state) 
    }

    return state;

});


export default dux.asDux;
