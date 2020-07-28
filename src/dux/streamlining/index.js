import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

const dux = new Updux({
    initial: {
        type: 'none',
        cost: 0,
        mass: 0,
    },
});

const set_streamlining = action('set_streamlining',payload());

dux.addMutation(set_streamlining, type => u({type}) );

const set_streamlining_cost_mass = action('set_streamlining_cost_mass',payload());

dux.addMutation( set_streamlining_cost_mass, reqs => u(reqs) );

export default dux.asDux;
