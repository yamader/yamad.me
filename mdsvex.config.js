import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

export default {
  extensions: [".svx", ".md"],
  smartypants: {
    dashes: "oldschool",
  },
  layout: {
    _: "./src/mdlayout.svelte",
  },
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
}
