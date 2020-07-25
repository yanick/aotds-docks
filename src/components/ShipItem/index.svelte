<div class="ship-item">
    <slot />

    <div class="mass" bind:this={mass_el}>{ mass }</div>
    <div class="cost" bind:this={cost_el}>{ cost }</div>
</div>

<script>
  import { tick } from 'svelte';

  export let mass;
  export let cost;

  let mass_el;
  let cost_el;

  const update_el = async (el) => {
    if(!el) return;
    el.classList.remove('updated');
    void el.offsetWidth;
    el.classList.add('updated');
  }

  $: update_el( mass_el, mass );
  $: update_el( cost_el, cost );

</script>

<style>
  .ship-item {
    display: flex;
  }

    .ship-item :global(> *) {
        flex: 1;
    }

  .cost,.mass { width: 4em; flex: inherit; }
  img {
    width: 0.75em;
  }
  .cost:after { content: '\00A4'; margin-left: 0.5em; }
  .mass:after { content: url(mass.svg); width: 0.75em; display:
  inline-block; margin-left: 0.5em; }

  :global(.updated) {
    animation-name: update;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }

@keyframes update {
  0%   {color:inherit; font-weight: inherit;}
  20% {color:red; font-weight: bold;}
  80% {color:red; font-weight: bold;}
  100% {color:inherit; font-weight: inherit; }
}

</style>
