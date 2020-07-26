import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

import screens from './screens';
import armour from './armour';

const dux = new Updux({
    initial: {
      mass: 0,
      cost: 0,
      hull: {
        rating: 1,
        advanced: false,
        cost: 2,
        mass: 1,
      }
    },
    subduxes: {
        screens,
        armour,
    }
})

export default dux.asDux;
