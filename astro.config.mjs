// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
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
        weights: ['400'],
        styles: ['normal'],
        unicodeRange: ['U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'],
        subsets: ['latin']
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
        weights: ['500', '700'],
        styles: ['normal'],
        unicodeRange: ['U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'],
        subsets: ['latin'],
      },
    ],
  },
})
