import type { PageServerLoad } from "./$types"
import { readdir } from "node:fs/promises"
import { join } from "node:path"

export const load: PageServerLoad = async ({ url }) => {
  const res = await readdir(join("src/routes", url.pathname))
  const entries = res.filter(name => !name.startsWith("+"))
  return { entries }
}
