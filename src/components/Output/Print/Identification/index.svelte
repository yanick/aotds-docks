<h1>ship name: <div class="fill"></div> </h1>

<div class="details">
  <h2>{ship_class}-class, {ship_type}</h2>
  <div class="reqs">
    <Cost {cost} />
    &nbsp;
    <Mass {mass} />
  </div>
</div>

<script>
  import Cost from '~C/Cost';
  import Mass from '~C/Mass';

export let ship_class;
export let ship_type;
  export let cost, mass = ( 0, 0 );
</script>

<style>
  h1 {
    width: 100%;
    display: flex;
    font-size: var(--font-scale-8);
  }
  h2 {
    font-size: var(--font-scale-7);
    flex: 1;
  }
  .fill {
    margin-left: 0.5em;
    display: inline-block;
    flex: 1;
    border-bottom: 1px solid black;
  }
  .details {
    display: flex;
    align-items: baseline;
  }
  .reqs {
    display: flex;
  }
</style>
