import { sveltekit } from "@sveltejs/kit/vite"
import type { UserConfig } from "vite"

const config: UserConfig = {
  plugins: [sveltekit()],
  assetsInclude: ["**/*.tgz"],
}

export default config
