
<svg width="60px" height="60px">
{#each all_arcs as arc (arc)}
    <Arc {arc} radius={30} 
        active={selected.includes(arc)}
        on:click={()=>click_arc(arc)}
    />
{/each}
    <circle cx="30" cy="30" r="15" />
</svg>

<script>
  import Arc from '../../Weapons/Arc.svelte';
  import { createEventDispatcher } from 'svelte';

    const all_arcs = [ 'FS', 'F', 'FP', 'AP', 'A', 'AS' ];

    export let selected = [];

  const dispatch = createEventDispatcher();

  const click_arc = arc => dispatch('click_arc',arc);

</script>

<style>
circle {
    fill: white;
}
</style>
