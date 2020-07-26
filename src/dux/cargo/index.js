import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

const dux = new Updux({
    initial: {
        space: 0,
        cost: 0,
        mass: 0,
    },
});

const set_cargo = action('set_cargo',payload());

dux.addMutation(set_cargo, space => () => ({
    space,
    cost: 0,
    mass: space,
}));

export default dux.asDux;
