import mdx from "@astrojs/mdx"
import solid from "@astrojs/solid-js"
import { defineConfig, passthroughImageService } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"

export default defineConfig({
  site: "https://yamad.me",
  trailingSlash: "always",
  scopedStyleStrategy: "class",
  build: { inlineStylesheets: "never" },
  image: { service: passthroughImageService() },
  markdown: {
    shikiConfig: { theme: "monokai" },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx(), solid()],
  vite: {
    css: { transformer: "lightningcss" },
    // build: { cssMinify: "lightningcss" },
  },
})
