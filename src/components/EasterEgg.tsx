import {
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik"
import Term from "./Term"

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

export const easterCtx = createContextId<Signal<boolean>>("easter")

export default component$(() => {
  const cur = useSignal(0)
  const easter = useSignal(false)
  useContextProvider(easterCtx, easter)

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

  return easter.value && <Term />
})
