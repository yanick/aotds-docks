<div>
{#if label}
<label>{label}</label>
{/if}
<slot>
<input type="text" {placeholder} {value} on:change />
</slot>
</div>

<script>
    export let label = "";
    export let value = "";
    export let placeholder;
</script>

<style>
  div > :global(*) {
    margin-left: 1em;
  }
  div > label {
    margin-left: 0em;
  }
label {
    font-size: var(--font-scale-8);
    font-weight: lighter;
    font-family: Dosis;
    color:  var(--indigo-dye);
}
</style>
