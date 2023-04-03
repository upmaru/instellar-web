import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    syntaxHighlight: 'shiki'
  },
  adapter: cloudflare()
});