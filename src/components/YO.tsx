import { createSignal } from "solid-js"

export default function YO() {
  const [year, setYear] = createSignal(new Date().getFullYear())
  const delta = () => Math.floor(year() - 2005)

  return (
    <p>
      西暦
      <input
        type="number"
        value={year()}
        onInput={e => setYear(Number(e.currentTarget.value))}
        style={{
          width: "6em",
          margin: "0 .3em",
        }}
      />
      年において，山Dは
      {delta() < 0 ? (
        <>まだ生まれていません。</>
      ) : year() == 114514 ? (
        <>イキスギです。</>
      ) : (
        <>
          <strong>{delta()}</strong>歳です。
        </>
      )}
      {delta() >= 200 && <>おそらく死んでいます。</>}
    </p>
  )
}
