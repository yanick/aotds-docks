const ship_types = [
  { name: "Scout", mass: [4, 10], abbrev: "SC" },
  { name: "Courier", mass: [4, 10], abbrev: "SC" },
  { name: "Corvette", mass: [8, 16], abbrev: "CT" },
  { name: "Frigate", mass: [14, 28], abbrev: "FF" },
  { name: "Destroyer", mass: [24, 36], abbrev: "DD" },
  { name: "Heavy Destroyer", mass: [30, 40], abbrev: "DH" },
  { name: "Light Cruiser", mass: [40, 60], abbrev: "CL" },
  { name: "Patrol", mass: [50, 70], abbrev: "CE" },
  { name: "Escort Cruiser", mass: [50, 70], abbrev: "CE" },
  { name: "Heavy Cruiser", mass: [60, 90], abbrev: "CA" },
  { name: "Battlecruiser", mass: [80, 110], abbrev: "BC" },
  { name: "Battleship", mass: [100, 140], abbrev: "BB" },
  { name: "Heavy Battleship", mass: [120, 160], abbrev: "BDN" },
  { name: "Dreadnought", mass: [140, 180], abbrev: "DN" },
  { name: "Superdreadnought", mass: [160, 300], abbrev: "SDN" },
  { name: "Escort Carrier", mass: [60, 140], abbrev: "CVE", carrier: true },
  { name: "Light Carrier", mass: [120, 180], abbrev: "CVL", carrier: true },
  { name: "Heavy Carrier", mass: [160, 300], abbrev: "CVH", carrier: true },
  { name: "Attack Carrier", mass: [150, 300], abbrev: "CVA", carrier: true },
];

export function candidate_ship_types(mass = 0, carrier = false) {
    console.log(mass);
  return ship_types.filter((c) => carrier == !!c.carrier).filter((c) => c.mass[0] <= mass).filter((c) => c.mass[1] >= mass);
}
