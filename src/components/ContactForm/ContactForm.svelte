<script lang="ts">
  import FormField from "./components/FormField.svelte";
  import SelectField from "./components/SelectField.svelte";
  import TextareaField from "./components/TextareaField.svelte";
  import FormButton from "./components/FormButton.svelte";

  let firstName = "";
  let lastName = "";
  let phone = "";
  let email = "";
  let service = "";
  let message = "";
  let website = "";
  
  const services = [
    "Publicidad en Instagram y Facebook",
    "Publicidad en Google Ads",
    "Diseño web",
    "Desarrollo web",
    "Diseño gráfico",
    "Branding estratégico y posicionamiento de marca",
    "Optimización de funnels de conversión",
    "Adquisición y conversión de clientes"
  ];
</script>

<form class="w-full">
  <div class="grid md:grid-cols-2 md:gap-6">
    <FormField name="name" label="Nombre" bindValue={firstName} />
    <FormField name="company" label="Empresa" bindValue={lastName} />
  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <FormField name="phone" label="Teléfono" type="tel" bindValue={phone} />
    <FormField name="email" label="Correo Electrónico" type="email" bindValue={email} />
  </div>

  <FormField name="website" label="Sitio Web" bindValue={website} />
  <SelectField id="service" bindValue={service} options={services} />
  <TextareaField id="message" bindValue={message} placeholder="Mensaje"/>

  <FormButton value="Submit" />
</form>
