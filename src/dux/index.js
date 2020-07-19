import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";
import { createSelector } from "reselect";

import ftl from "./ftl";
import engine, { calc_drive_reqs } from "./engine";
import weaponry from './weaponry';
import { calc_ftl_reqs } from "./ftl/rules";
import { calc_ship_req } from "./utils";
import { candidate_ship_types } from './ship_types';

const set_ship_mass = action("set_ship_mass", payload());
const set_name = action("set_name", payload());

const set_ship_reqs = action("set_ship_reqs", payload());
const set_hull = action("set_hull", payload());

const set_ship_type = action('set_ship_type',payload());

const reset = action('reset' );

const initial = {
    general: {
      ship_class: "",
      name: "",
      ship_type: "",
      mass: 10,
      used_mass: 0,
      cost: 10,
    },
    structure: {
      mass: 0,
      cost: 0,
      hull: {
        rating: 1,
        advanced: false,
        cost: 2,
        mass: 1,
      },
      screens: [],
    },
  };

const dux = new Updux({
  subduxes: { ftl, engine, weaponry, },
  initial
});

const add_screen = action( 'add_screen', payload() );


dux.addMutation(add_screen, advanced => u.updateIn( 'structure.screens', state => {
    return [ ...(state||[]), { advanced } ]
}));


dux.addMutation( reset, () => () => initial );

dux.addMutation(set_hull, ({rating}) => (state) => {
  return u.updateIn("structure.hull", {
    cost: 2 * rating,
    rating,
    mass: rating,
  })(state);
});
dux.addMutation(set_ship_mass, (mass) => u.updateIn("general", { mass }));
dux.addMutation(set_name, (name) => u.updateIn("general", { name }));

dux.addMutation( action('set_ship_class',payload() ),
    ship_class => u.updateIn('general',{ship_class})
);

dux.addMutation(set_ship_reqs, ({ cost, mass: used_mass }) =>
  u.updateIn("general", { cost, used_mass })
);

// set ship's req
dux.addSubscription((store) =>
  createSelector(calc_ship_req, (reqs) => store.dispatch(set_ship_reqs(reqs)))
);

dux.addSubscription((store) => 
    createSelector(
        store => store.general.mass,
        store => store.general.ship_type,
        (mass,type) => {
            const candidates = candidate_ship_types(mass,false);
            console.log({candidates});
            if( candidates.length === 0 ) return;

            if( candidates.find( ({name}) => name === type ) ) return;

            store.dispatch(
                store.actions.set_ship_type( 
                    candidates[0].name
                )
            )
                
        }
    )
);

dux.addMutation(set_ship_type, type => u.updateIn('general.ship_type',type) );

dux.addSubscription((store) =>
  createSelector(
    [(ship) => ship.general.mass, (ship) => ship.ftl.type],
    (ship_mass, type) =>
      store.dispatch(ftl.actions.set_ftl_reqs(calc_ftl_reqs(type,ship_mass)))
  )
);

dux.addSubscription((store) =>
  createSelector(
    [
      (ship) => ship.general.mass,
      (ship) => ship.engine.rating,
      (ship) => ship.engine.advanced,
    ],
    (ship_mass, rating, advanced) =>
      store.dispatch(
        dux.actions.set_drive_reqs(calc_drive_reqs(ship_mass, rating, advanced))
      )
  )
);

const calc_firecons_reqs = (nbr) => ({
  cost: 4 * nbr,
  mass: nbr,
});

const set_firecons = action("set_firecons", payload());
dux.addMutation(set_firecons, (nbr) =>
  u.updateIn("weaponry.firecons", {
    nbr,
    ...calc_firecons_reqs(nbr),
  })
);

export default dux.asDux;

export const actions = dux.actions;
