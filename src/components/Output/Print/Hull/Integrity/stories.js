import Component from '.';

export default {
    title: "printouts/hull/integrity"
};

export const basic = () => ({
    Component,
    props: {
        ship_mass: 50,
        rating: 14,
        advanced: false,
    }
});

export const advanced = () => ({
    Component,
    props: {
        ship_mass: 50,
        rating: 14,
        advanced: true,
    }
});
