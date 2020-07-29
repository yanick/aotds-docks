import Component from '.';

export default {
    title: "printouts/weapons"
};

export const basic = () => ({
    Component,
    props: {
    "weapons": [
      {
        "weapon_type": "submunition",
        "arcs": [
          "F"
        ],
        "mass": 1,
        "cost": 3,
        "id": 1
      },
      {
        "weapon_type": "beam",
        "weapon_class": "2",
        "arcs": [
          "A",
          "AS",
          "FS"
        ],
        "mass": 2,
        "cost": 6,
        "id": 2
      }, ]
    }
})
