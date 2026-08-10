import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import decap from "@jee-r/astro-decap-cms";
import decapConfig from "./decap.config.mjs";
import astropodConfig from "./.astropod/astropod.config.json";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: astropodConfig.link,
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
    mdx(),
    sitemap(),
    decap({
      config: decapConfig(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
