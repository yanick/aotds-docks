import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";
import _ from 'lodash';

const dux = new Updux({
    initial: [],
});

const set_armour_nbr_layers = action('set_armour_nbr_layers',payload());

dux.addMutation( set_armour_nbr_layers, nbr_layers => state => {
    if( state.length > nbr_layers ) state = state.slice(0,nbr_layers);

    if( state.length < nbr_layers ) {
        state = [ state, _.times( nbr_layers - state.length, () => [] ) ].flat();
    }

    state = u.map( (el,i) => ({layer: i +1, rating: 0, cost: 0, mass: 0, ...el }), state);

    return state;
});

dux.addMutation(
    action('set_armour_layer', payload()),
    ({layer, rating}) => u.map(
        u.if(_.matches({layer}), u({
            rating,
            cost: 2 * layer * rating,
            mass: 2 * rating,
        })) 
    )
);

export default dux.asDux;
