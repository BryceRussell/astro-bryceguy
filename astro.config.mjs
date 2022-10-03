import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  root: './demo',
  srcDir: './demo/src',
  //integrations: [tailwind()],
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["astro-json-element", "astro-xelement"],
    },
  },
});