import { action } from '@storybook/addon-actions';

import Carrier from './index.svelte';

export default {
    title: 'Carrier',
};

export const basic = () => ({
    Component: Carrier,
    props: {
        bays: 3,
        squadrons: [
            { id: 1, type: "standard", ftl: false, nbr_fighters: 6 },
            { id: 2, type: "fast", ftl: false, nbr_fighters: 6 },
            { id: 3, type: "none", ftl: false, nbr_fighters: 6 },
        ],
        ship_change: action('ship_change'),
    },
})
