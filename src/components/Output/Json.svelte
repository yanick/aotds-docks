<aside transition:fade>
  <pre><code>{json}</code></pre>
</aside>

<script>
  export let ship = {};
  let json;
  $: json = JSON.stringify(ship,null,2);

    import { fly, fade } from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');
</script>

<style>
  pre {
    font-family: monospace;
    font-size: var(--font-scale-9);
    overflow: scroll;
    height: 90%;

  }
  div {
  text-align: right;
  }
  aside {

    padding: 1em;
    border: 3px solid var(--indigo-dye);
    border-radius: 1em;
    font-size: var(--font-scale-11);
  }
</style>
