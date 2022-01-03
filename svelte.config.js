import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
    appDir: "app",
    prerender: {
      handleHttpError: "warn",
    },
  },
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex(mdsvexConfig),
  ],
}
