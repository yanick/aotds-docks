<label> needle weapon</label>
<Arcs selected={arcs} on:click_arc={({detail}) => click_arc(detail)} />

<script>
  import {getContext } from 'svelte';
    import Arcs from '../Arcs';
    import dux from '~/dux';
  import { createEventDispatcher } from 'svelte';
  
    const all_arcs = [ 'FS', 'F', 'FP', 'AP', 'A', 'AS' ];

    export let arcs = ['F'];
    export let ship_change = getContext('ship_change') || ( () => {} );

    const click_arc = (arc) => {
      if( arcs[0] === arc ) return;
      arcs = [ arc ];
    }

    const dispatch = createEventDispatcher();
    let cache;
    $: cache = arcs.join(":");

    $: dispatch( 'change', {
      arcs: cache.split(":"),
    })
</script>

<style>
.arc {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
}

  </style>

