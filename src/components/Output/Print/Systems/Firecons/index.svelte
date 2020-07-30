  <div>
    {#each _.range(firecons) as firecon }
      <img class="firecon" src="icons/firecon.svg" alt="firecon" />
    {/each}
  </div>

  <script>
    export let firecons = 0;
  </script>

  <style>
    div {
      display: flex;
      gap: 0.5em;
    }
  img.firecon {
    width: 1em;
  }
</style>
