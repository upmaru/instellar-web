import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
//  output: 'server',
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug]
  },
  vite: {
    plugins: [million.vite({ mode: 'react', server: true })]
  },
  // adapter: node({
  //   mode: "standalone"
  // })
});