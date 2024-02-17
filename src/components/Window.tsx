import {
  $,
  Slot,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useStyles$,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik"
import { useCSSTransition } from "qwik-transition"

const dur = 250

export default component$(
  ({
    active = useSignal(true),
    title,
    initw = 480,
    inith = 320,
    initx = 125,
    inity = 125,
    fill = true,
  }: {
    active?: Signal<boolean>
    title?: string
    initw?: number
    inith?: number
    initx?: number
    inity?: number
    fill?: boolean
  }) => {
    useStyles$(styles)

    const w = useStore({
      grab: false,
      w: initw,
      h: inith,
      x: initx,
      y: inity,
      dx: 0,
      dy: 0,
    })

    useOnDocument(
      "mousemove",
      $(e => {
        if (w.grab) {
          w.x = Math.max(0, e.pageX - w.dx)
          w.y = Math.max(0, e.pageY - w.dy)
        }
      }),
    )

    useOnDocument(
      "mouseup",
      $(() => (w.grab = false)),
    )

    useVisibleTask$(({ track }) => {
      if (track(active)) {
        w.x = window.scrollX + initx
        w.y = window.scrollY + inity
      }
    })

    const { stage, shouldMount } = useCSSTransition(active, {
      timeout: dur,
      transitionOnAppear: true,
    })

    return (
      shouldMount.value && (
        <div
          class={"abs blur window" + (stage.value == "enterTo" ? " active" : "")}
          style={{ width: w.w, height: w.h, left: w.x, top: w.y }}
          tabIndex={0}>
          <div class="vv">
            <div class="hh" />
            <div class="vv" />
            <div class="hh" />
          </div>
          <div class="f1 mid">
            <div class="hh" />
            <div class="nav">
              <div
                class="f1"
                onMouseDown$={e => {
                  w.grab = true
                  // @ts-ignore wtf
                  ;[w.dx, w.dy] = [e.offsetX || e.layerX, e.offsetY || e.layerY]
                }}>
                {title}
              </div>
              <div>
                <button class="btn" onClick$={() => (active.value = false)}>
                  &times;
                </button>
              </div>
            </div>
            <div class="f1 content" style={fill ? { background: "#111" } : {}}>
              <Slot />
            </div>
            <div class="hh" />
          </div>
          <div class="vv">
            <div class="hh" />
            <div class="vv" />
            <div class="hh" />
          </div>
        </div>
      )
    )
  },
)

const styles = `
  .f1 { flex: 1; }
  .hh { width: 100%; height: .2rem; }
  .vv { width: .2rem; height: 100%; }

  .window {
    display: flex;
    background: #333a;
    border: 1px solid #6666;
    border-radius: .5rem;
    overflow: hidden;
    transition: transform ${dur}ms,
                opacity ${dur}ms;

    transform: scale(.9);
    opacity: 0;
    &.active {
      transform: scale(1);
      opacity: 1;
    }
  }

  .mid {
    display: flex;
    flex-direction: column;
  }

  .nav {
    display: flex;
    margin-bottom: .2rem;
    line-height: .9;
    font-size: .9em;
    user-select: none;
  }

  .btn {
    border: none;
    border-radius: .5em;
    background: transparent;
    color: white;

    &:hover {
      background: #fff4;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    border-radius: .3rem;
    overflow: auto;
  }
`
