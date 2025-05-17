<script>
  export let id
  export let options = []
  export let bindValue
</script>

<div class="relative z-0 w-full mb-5 group">
  <select
    {id}
    bind:value={bindValue}
    class="text-neutral-400 border-0 border-b-2 border-neutral-500 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option>-- Selecciona en que servicio estas interesado --</option>
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
</div>
