<script>
  let {
    id,
    name,
    label,
    type = 'text',
    bindValue = $bindable(),
    placeholder = ' ',
    fontClass = 'text-md font-body',
    colorClass = 'text-neutral-200 border-neutral-600 focus:border-primary-450',
  } = $props()
</script>

<div class="relative z-0 w-full mb-5 group">
  <input
    type={type}
    name={name}
    id={id}
    class="{fontClass} {colorClass} block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
    placeholder={placeholder}
    required
  />
  <label
    for={id}
    class="peer-focus:font-medium absolute text-neutral-400 font-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-450 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >{label}</label
  >
</div>
