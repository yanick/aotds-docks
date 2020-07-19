import tap from 'tap';

import ship, { actions } from '.';

ship.dispatch( actions.set_ship_mass(100));

ship.dispatch( actions.set_ftl('standard'));

tap.match(
    ship.getState(),
    { 
        ship_type: { mass: 100 },
        ftl: { type: 'standard', cost: 20, mass: 10 },
    },
    'standard ftl drive'
);

