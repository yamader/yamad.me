import { createEffect, createSignal, onMount, type JSX, type Signal } from "solid-js"
import { createMutable } from "solid-js/store"
import styles from "./index.module.css"

export default function Window(props: {
  children?: JSX.Element
  activeSignal?: Signal<boolean>
  title?: string
  fill?: boolean
  initw?: number
  inith?: number
  initx?: number
  inity?: number
}) {
  const {
    activeSignal = createSignal(true),
    initw = 480,
    inith = 320,
    initx = 125,
    inity = 125,
  } = props
  const [active, setActive] = activeSignal

  const w = createMutable({
    w: initw,
    h: inith,
    x: initx,
    y: inity,
    grab: false,
    grabX: 0,
    grabY: 0,
  })

  createEffect(() => {
    if (active()) {
      w.x = window.scrollX + initx
      w.y = window.scrollY + inity
    }
  })

  onMount(() => {
    document.addEventListener("mousemove", e => {
      if (w.grab) {
        w.x = Math.max(0, e.clientX - w.grabX)
        w.y = Math.max(0, e.clientY - w.grabY)
      }
    })
    document.addEventListener("mouseup", () => {
      w.grab = false
    })
  })

  return (
    <div
      class={`fixed blur ${styles.window}`}
      classList={{ [styles.active!]: active() }}
      style={{
        width: w.w + "px",
        height: w.h + "px",
        left: w.x + "px",
        top: w.y + "px",
      }}
      tabIndex={0}>
      <div class={styles.vv}>
        <div class={styles.hh} />
        <div class={styles.vv} />
        <div class={styles.hh} />
      </div>
      <div class={styles.mid}>
        <div class={styles.hh} />
        <div class={styles.nav}>
          <div
            onMouseDown={e => {
              w.grab = true
              // @ts-ignore wtf
              ;[w.grabX, w.grabY] = [e.offsetX || e.layerX, e.offsetY || e.layerY]
            }}
            style={{ flex: 1 }}>
            {props.title}
          </div>
          <div>
            <button class={styles.btn} onClick={() => setActive(false)}>
              &times;
            </button>
          </div>
        </div>
        <div class={styles.content} style={props.fill ? { background: "#111" } : {}}>
          {props.children}
        </div>
        <div class={styles.hh} />
      </div>
      <div class={styles.vv}>
        <div class={styles.hh} />
        <div class={styles.vv} />
        <div class={styles.hh} />
      </div>
    </div>
  )
}
