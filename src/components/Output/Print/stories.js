import Print from './index.svelte';
import sample from './sample';

export default {
    title: "printouts"
};

export const basic = () => ({
    Component: Print,
    props: {
        ship: sample
    }
});
