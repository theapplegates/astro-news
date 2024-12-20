import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/lib/config";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import pagefind from "astro-pagefind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
    // Used for all `<Image />` and `<Picture />` components unless overridden
    experimentalLayout: 'responsive',
     },
  experimental: {
    responsiveImages: true,
  },
  site: "https://astro-news.paulapplegate.com",
  base: "/",
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [tailwind(), mdx(), sitemap(), pagefind()],
  experimental: {
    responsiveImages: true,
  },
});
