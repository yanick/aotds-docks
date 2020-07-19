export default {
    title: 'FTL Drive'
};

import Component from '.';
import shipStore from '../../stores/ship.js';

export const basic = () => ({
    Component,
    props: {
        ship: shipStore()
    }
});
