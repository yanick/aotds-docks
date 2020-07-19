import Updux from 'updux';
import  { action, payload } from 'ts-action';
import u from 'updeep';
import { createSelector } from 'reselect';

const set_engine = action('set_engine',payload());
const set_drive_reqs = action('set_drive_reqs',payload());

const dux = new Updux({
    initial: {
                mass: 1,
                cost: 2,
                rating: 1,
    }
});

dux.addMutation(set_engine, engine => u(engine));
dux.addMutation(set_drive_reqs, rate => u(rate));

export function calc_drive_reqs(ship_mass,rating,advanced=false) {
    const mass = Math.ceil(rating * 0.05 * ship_mass);
    const cost = mass * ( advanced ? 3 : 2 );

    return { mass, cost };
}

export default dux.asDux;
