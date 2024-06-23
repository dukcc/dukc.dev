import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), swup({
    theme: ["overlay", {
      direction: "to-top"
    }],
    containers: ["#swup"],
    preload: {
      hover: false
    }
  }), mdx()],
  output: "static",
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});