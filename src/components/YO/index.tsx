import { component$, useComputed$, useSignal } from "@builder.io/qwik"
import styles from "./style.module.css"

const YO = component$(() => {
  const year = useSignal(new Date().getFullYear().toString())
  const delta = useComputed$(() => Number(year.value) - 2005)

  return (
    <p>
      西暦
      <input type="number" class={styles.year} bind:value={year} />
      年において，山Dは
      {delta.value < 0 ? (
        <>まだ生まれていません。</>
      ) : (
        <>
          <strong>{delta.value}</strong>歳です。
        </>
      )}
      {delta.value >= 200 && <>おそらく死んでいます。</>}
    </p>
  )
})

export default YO
