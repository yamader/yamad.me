import { component$ } from "@builder.io/qwik"
import Window from "~/components/Window"

export default component$(() => {
  return (
    <Window>
      <p>
        インターネットをいつも
        <br />
        綺麗に使っていただき
        <br />
        ありがとうございます。
      </p>
    </Window>
  )
})
