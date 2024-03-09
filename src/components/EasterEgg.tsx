import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import Launcher from "~/apps/Launcher"

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

export default component$(() => {
  const cur = useSignal(0)
  const easter = useSignal(false)

  useVisibleTask$(() => {
    console.log("%cこんにちは!", "color: red; font-size: 8em; font-weight: bold;")

    document.addEventListener("keydown", e => {
      if (e.key == command[cur.value++]) {
        if (cur.value == command.length) {
          easter.value = true
          cur.value = 0
        }
      } else {
        cur.value = 0
      }
    })
  })

  return <Launcher launchSignal={easter} />
})
