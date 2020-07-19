<div class="ship-item">
    <slot />

    <div class="mass">{ mass }</div>
    <div class="cost">{ cost }</div>
</div>

<script>
  export let mass;
  export let cost;
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
  .mass:after { content: url("/mass.svg"); width: 0.75em; display:
  inline-block; margin-left: 0.5em; }
</style>
