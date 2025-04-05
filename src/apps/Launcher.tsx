import { type Signal } from "solid-js"
import Window from "~/components/Window"

export default function Launcher(props: { activeSignal: Signal<boolean> }) {
  return (
    <Window activeSignal={props.activeSignal}>
      <p>hello!</p>
    </Window>
  )
}
