import Updux from "updux";
import { action, payload } from "ts-action";
import u from "updeep";

const dux = new Updux({
    initial: {
        rating: 0,
        cost: 0,
        mass: 0,
    },
})

dux.addMutation( action( 'set_adfc', payload() ), rating => 
    u({ rating, mass: 2 * rating, cost: 8 * rating })
);

export default dux.asDux;
