import Armour from './index.svelte';

export default {
    title: "Armour",
};

export const basic = () => ({
    Component: Armour,
    props: {
        armour: [
            { layer: 1, rating: 12, cost: 1, mass: 2 },
            { layer: 2, rating: 12, cost: 1, mass: 2 },
        ]
    },
    on: {
        ship_change: ({detail}) => console.log(detail)
    }
});
