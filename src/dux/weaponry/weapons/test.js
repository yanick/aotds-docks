import dux from ".";
import tap from "tap";

const state = dux.upreducer(dux.actions.add_weapon("beam"))([]);
tap.equal(state[0].arcs.length, 6, "default beam is all arcs");
