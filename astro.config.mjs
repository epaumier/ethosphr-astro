import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ethosphr.com",
  integrations: [
    tailwind(),
    mdx(),
    alpinejs()
  ],
  redirects: {
    '/': '/fr/home/'
  }
});