import { z } from 'astro/zod'

export const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  company: z.string().nonempty(),
  phone: z.string(),
  website: z.string(),
  servicio: z.string(),
  message: z.string(),
})