
<Section label="propulsion">

    <Ftl {...ftl} on:change_ftl />

    <Engine {...engine} on:change_engine />

</Section>

<script>
    import Ftl from '../Ftl/index.svelte';
    import Engine from '../Engine/index.svelte';
    import Section from '../Section/index.svelte';

    export let ftl = {};
    export let engine = {};

</script>
