<div>
<h2>{label}</h2>
  <hr/>
</div>

<slot />

<script>
    export let label;
</script>

<style>
  div {
    display: flex;
    grid-column: 1 / span 3 !important;
    align-items: baseline;
    gap: 1em;
  }
  hr {
    flex: 1;
    heigth: 0px;
  }
  </style>
