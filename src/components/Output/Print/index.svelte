<div>
  <Identification {...ship.general} />
  <Integrity
    rating={ship.structure.hull.rating}
    advanced={ship.structure.hull.advanced}
    ship_mass={ship.general.mass}
  />
</div>

<script>
  import Identification from './Identification';
  import Integrity from './Hull/Integrity';
  export let ship;

</script>

<style>
div {
  width: 4.25in;
  height: 5.5in;
  border: 1px solid black;
  padding: 1em;
}
</style>
