
<svg width="{size}px" height="{size}px">
{#each all_arcs as arc (arc)}
  <Arc {arc} radius={size/2}
        active={selected.includes(arc)}
        on:click={()=>click_arc(arc)}
    />
{/each}
    <circle cx="50%" cy="50%" r={size /3} />
    <slot />
</svg>

<script>
  import Arc from '../../Weapons/Arc.svelte';
  import { createEventDispatcher } from 'svelte';

    const all_arcs = [ 'FS', 'F', 'FP', 'AP', 'A', 'AS' ];

    export let selected = [];
  export let size = 60;

  const dispatch = createEventDispatcher();

  const click_arc = arc => dispatch('click_arc',arc);

</script>

<style>
circle {
    fill: white;
}
</style>
