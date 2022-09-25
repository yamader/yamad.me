<!--
  Thanks to:
    https://svelte.dev/repl/7d674cc78a3a44beb2c5a9381c7eb1a9?version=3.29.7
-->

<script context="module" lang="ts">
  export type Event =
    | "buttonClose"
  export type Code =
    | "open"
    | "close"
  export type Exec = (code: Code) => (...args: any[]) => void | Promise<void>
</script>

<script lang="ts">
  const max = Math.max
  const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

  let mount   = false
  let visible = false
  let moving  = false
  let posx    = 100
  let posy    = 100

  export let handler = (event: Event) => {
    switch(event) {
      case "buttonClose": return () => {
        exec("close")()
      }
    }
  }

  export const exec: Exec = code => {
    switch(code) {
      case "open": return async (open = true) => {
        if(!visible && open) {
          mount = true
          await sleep(10) // svelte.tickじゃダメだった
          visible = true
        }
      }
      case "close": return async () => {
        if(visible) {
          visible = false
          await sleep(250)
          mount = false
        }
      }
    }
  }

  const mousedown = () => {
    if(visible) moving = true
  }
  const mouseup = () => {
    if(visible) {
      posx = max(0, posx)
      posy = max(0, posy)
      moving = false
    }
  }
  const mousemove = (e: MouseEvent) => {
    if(visible && moving) {
      posx += e.movementX
      posy += e.movementY
    }
  }
</script>

{#if mount}
<section class="window acrylic" class:visible style="top: {max(0, posy)}px; left: {max(0, posx)}px">
  <nav class="nav">
    <div class="bar" on:mousedown={mousedown}></div>
    <div>
      <div on:click={handler("buttonClose")}>
        <!-- https://fontawesome.com/search?q=circle-xmark&o=r&m=free&s=solid -->
        <svg class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </div>
    </div>
  </nav>
  <div class="content">
    <slot />
  </div>
</section>
{/if}

<!-- <svelte:window on:mouseup on:mousemove /> -->
<svelte:window on:mouseup={mouseup} on:mousemove={mousemove} />

<style lang="scss">
  @import "../styles/helpers.scss";

  .window {
    width: 1024px;
    height: 640px;
    position: absolute;

    opacity: 0;
    transform: scale(.9);
    transition: opacity .25s,
                transform .25s;
    &.visible {
      opacity: 1;
      transform: scale(1);
    }

    .nav {
      display: flex;
      height: 28px;
      justify-content: space-between;
      align-items: center;
      user-select: none;

      .bar {
        width: 100%;
        height: 100%;
        cursor: move;
      }

      .button {
        width: 16px;
        height: 16px;
        margin: 6px 8px 6px 0;
        cursor: auto;
      }
    }

    .content {
      width: calc(100% - 16px);
      height: calc(100% - 36px);
      margin: 0 auto;
      background: #000;
      border: solid .5px rgba(255, 255, 255, .25);
      border-radius: 8px;
    }
  }
</style>
