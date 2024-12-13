// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { Site } from './src/lib/constants/config';
import { modifiedTime, readingTime } from './src/lib/utils/remarks.mjs';
import pagefind from "astro-pagefind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-news.paulapplegate.com", // Enclosed in quotes
  base: "/", // Enclosed in quotes
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [tailwind(), mdx(), sitemap(), pagefind()],
  experimental: {
    responsiveImages: true,
  },
});