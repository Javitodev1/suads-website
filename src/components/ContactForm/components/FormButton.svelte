<script lang="ts">
  interface Props {
    value: string
    textClasses?: string
    onsubmit?: () => void
  }

  let { value, textClasses, onsubmit }: Props = $props()
</script>

<input
  type="submit"
  class="{textClasses} focus:ring-4 focus:outline-none rounded-lg w-full sm:w-auto px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
  {value}
  {onsubmit}
/>
