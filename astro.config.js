import mdx from "@astrojs/mdx"
import svelte from "@astrojs/svelte"
import qwikdev from "@qwikdev/astro"
import { defineConfig, passthroughImageService } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"

export default defineConfig({
  trailingSlash: "always",
  scopedStyleStrategy: "class",
  build: { inlineStylesheets: "never" },
  image: { service: passthroughImageService() },
  markdown: {
    shikiConfig: { theme: "monokai" },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx(), svelte(), qwikdev()],
  vite: {
    css: { transformer: "lightningcss" },
    // build: { cssMinify: "lightningcss" },
  },
})
