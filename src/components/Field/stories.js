import Component from './index.svelte';
import BasicStory from './BasicStory.svelte';

import '../../../public/global.css';

export default {
    title: 'Field'
};

export const basic = () => ({
    Component: BasicStory,
});
