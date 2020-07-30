<div>
  {#each _.range(standard) as i }
    <img src="icons/screen.svg" alt="screen" />
  {/each}
  {#each _.range(advanced) as i }
    <img src="icons/screen-advanced.svg" alt="advanced screen" />
  {/each}

</div>

<script>
  import _ from 'lodash';

  export let standard = 0;
  export let advanced = 0;
</script>

<style>
  img {
    width: 1em;
  }
  div {
    display: flex;
    gap: 0.5em;
  }
</style>
