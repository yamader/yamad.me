import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex(mdsvexConfig)
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      onError: "continue",
    },
    trailingSlash: "always",
  },
}
