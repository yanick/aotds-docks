<div>
  <Arcs selected={arcs} size="40">
    <text x="50%" y="50%" >
    {weapon_class}
    </text>
  </Arcs>
</div>

<script>
  import Arcs from '~C/Weapon/Arcs';
  export let weapon_class = 1;
  export let arcs = [];
</script>

<style>
  div :global(path) {
  }
  div :global(path:hover) {
    fill: white;
  }
  div :global(path.active:hover) {
    fill: black;
  }
  text {
    text-anchor: middle;
    dominant-baseline: central;
    font-size: var(--font-scale-10);
  }
</style>
