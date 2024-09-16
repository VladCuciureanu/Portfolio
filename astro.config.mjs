// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://vlad.cuciureanu.net",
  integrations: [mdx(), sitemap(), tailwind(), preact()],
});
