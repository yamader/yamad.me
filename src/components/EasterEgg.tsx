import { createSignal, lazy, onMount } from "solid-js"

declare global {
  var _easter_init: boolean
}

const command = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export default function EasterEgg() {
  const [cur, setCur] = createSignal(0)
  const [easter, setEaster] = createSignal(false)
  const [load, setLoad] = createSignal(false)

  onMount(() => {
    if (globalThis._easter_init) return
    globalThis._easter_init = true

    console.log("%cこんにちは!", "color: red; font-size: 8em; font-weight: bold;")

    document.addEventListener("keydown", e => {
      if (e.key == command[cur()]) {
        setCur(cur => cur + 1)
        if (cur() > command.length / 2) setLoad(true)
        if (cur() == command.length) {
          setEaster(true)
          setCur(0)
        }
      } else {
        setCur(0)
      }
    })
  })

  const Launcher = lazy(() => import("~/apps/Launcher"))
  return <>{load() && <Launcher activeSignal={[easter, setEaster]} />}</>
}
