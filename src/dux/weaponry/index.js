import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

import weapons from './weapons';
import adfc from './adfc';

const dux = new Updux({
    initial: {
        firecons: {
            nbr: 0, cost: 0, mass: 0
        }
    },
    subduxes: {
        weapons,
        adfc,
    }
})

export default dux.asDux;
