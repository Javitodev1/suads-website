<script lang="ts">
  import FormField from './components/FormField.svelte'
  import FormButton from './components/FormButton.svelte'

  interface Props {

  }

  let {}: Props = $props()

  let email = ''
</script>

<form class="w-full">
  <FormField bindValue={email} name="email" label="Correo Electronico" type="email"/>
  <FormButton value="hablemos"/>
</form>
