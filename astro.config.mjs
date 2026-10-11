// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.BASE_URL,
  base: '/',


  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), vue(), svelte(), mdx(), sitemap()]
});