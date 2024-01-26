import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"

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

  useVisibleTask$(() => {
    document.addEventListener("keydown", e => {
      if (e.key == command[cur.value++]) {
        if (cur.value == command.length) {
          alert("Easter Egg!")
          cur.value = 0
        }
      } else {
        cur.value = 0
      }
    })
  })

  return <div />
})
