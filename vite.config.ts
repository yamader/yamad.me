import type { UserConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

const config: UserConfig = {
  plugins: [sveltekit()],
  assetsInclude: ["**/*.tgz"],
}

export default config
