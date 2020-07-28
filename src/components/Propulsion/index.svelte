
<Section label="propulsion">

    <Engine {...engine} on:change_engine />

    <Ftl {...ftl} on:change_ftl />

</Section>

<script>
    import Ftl from '../Ftl/index.svelte';
    import Engine from '../Engine/index.svelte';
    import Section from '../Section/index.svelte';

    export let ftl = {};
    export let engine = {};

</script>
