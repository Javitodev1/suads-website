<script>
  export let id;
  export let bindValue;
  export let placeholder = "Leave a comment...";
</script>

<div class="relative z-0 w-full mb-5 group">
  <textarea
    {id}
    bind:value={bindValue}
    rows="4"
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder={placeholder}
  ></textarea>
</div>
