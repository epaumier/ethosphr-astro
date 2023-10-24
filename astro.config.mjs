import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sanity from '@sanity/astro';

export default defineConfig({
  site: "https://www.ethosphr.com",
  integrations: [
    tailwind(),
    mdx(),
    sanity({
      projectId: 'xdmq2grj',
      dataset: 'production',
      apiVersion: '2021-10-21',
      useCdn: true,
    }),
  ],
  redirects: {
    '/': '/fr/home/'
  }
});
