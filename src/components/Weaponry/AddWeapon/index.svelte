
<Field label="weapon type">
<select bind:value={weapon_type}>
    <option>beam</option>
    <option value="submunition">submunition pack</option>
    <option value="pds">point defence system</option>
    <option>scattergun</option>
    <option value="needle">needle weapon</option>
</select>

<input type="button" value="add weapon" on:click={ add_weapon }/>

</Field>

<script>
  import Field from '~C/Field';
  import {getContext } from 'svelte';
  import dux from '~/dux';

  export let weapon_type = "beam";
  export let ship_change = getContext('ship_change') || ( () => {} );

  const add_weapon = () => ship_change( dux.actions.add_weapon(weapon_type) );
</script>
