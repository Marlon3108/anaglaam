// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://anaglaam.vercel.app',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
