// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    imageService: 'cloudflare',
  }),

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:fs/promises', 'node:path', 'node:url', 'node:crypto'],
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Bebas Neue',
        cssVariable: '--font-bebas-neue',
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
        weights: ['500', '700'],
      },
    ],
  },
})
