<div>
  <Armour armour={structure.armour} />
  <Integrity
    rating={structure.hull.rating}
    advanced={structure.hull.advanced}
    {ship_mass}
  />
</div>

<script>
  import Integrity from './Integrity';
  import Armour from './Armour';

  export let structure = {};
  export let ship_mass = 0;
</script>
