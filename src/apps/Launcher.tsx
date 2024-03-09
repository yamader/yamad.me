import { component$, type Signal } from "@builder.io/qwik"
import Window from "~/components/Window"

export default component$(({ launchSignal }: { launchSignal: Signal<boolean> }) => {
  return (
    <Window active={launchSignal}>
      <p>hello!</p>
    </Window>
  )
})
