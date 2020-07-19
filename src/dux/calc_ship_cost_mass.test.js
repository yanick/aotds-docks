import tap from "tap";

import { calc_ship_req } from "./utils";

const sample = {
  general: {
    mass: 10,
    used_mass: 0,
    cost: 10,
  },
  ftl: {
    cost: 4,
    mass: 2,
  },
  structure: {
    hull: {
      cost: 2,
      mass: 1,
    },
  },
};

tap.same(
  calc_ship_req(sample),
  {
    cost: 16,
    mass: 3,
  },
  "sample ship"
);
