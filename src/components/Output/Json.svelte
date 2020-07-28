<aside transition:fly={{x: 2000, opacity: 1}}>
    <div>
      <input type="button" class="button small red" value="close"
        on:click={close}/>
    </div>
  <pre><code>{json}</code></pre>
</aside>

<script>
  export let ship = {};
  let json;
  $: json = JSON.stringify(ship,null,2);

    import { fly } from 'svelte/transition';
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
    background-color: rgb(254, 218, 184);
    position: absolute;
    height: 80vh;
    max-width: 80%;
    min-width: 80%;
    z-index: 200;

    padding: 1em;
    border: 3px solid var(--indigo-dye);
    border-radius: 1em;
    right: 0px;
    border-right: 0px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    top: 6em;
    font-size: var(--font-scale-11);
  }
</style>
