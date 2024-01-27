import { component$, useContext } from "@builder.io/qwik"
import { easterCtx } from "../EasterEgg"
import "./style.css"

export default component$(() => {
  const easter = useContext(easterCtx)

  return (
    <div class="term">
      <div>hello!</div>
    </div>
  )
})
