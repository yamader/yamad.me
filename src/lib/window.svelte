<!--
  Thanks to:
  - https://svelte.dev/repl/7d674cc78a3a44beb2c5a9381c7eb1a9?version=3.29.7
-->

<script lang="ts">
  type Event =
    | "buttonClose"
  type Code =
    | "close"
  const max = Math.max
  const sleep = ms => new Promise(res => setTimeout(res, ms))

  const mousedown = () => {
    if(visible) moving = true
  }
  const mouseup = () => {
    if(visible) moving = false
  }
  const mousemove = e => {
    if(visible && moving) {
      posx += e.movementX
      posy += e.movementY
    }
  }

  let mount = false
  let visible = false
  let posx = 100
  let posy = 100
  let moving = false

  export const exec = (code: Code) => {
    switch(code) {
      case "open": return async (open = true) => {
        if(!visible && open) {
          mount = true
          await sleep(1) // tickじゃダメだった
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

  export let handler = (event: Event) => {
    switch(event) {
      case "buttonClose": return () => {
        exec("close")()
      }
    }
  }
</script>

{#if mount}
  <section class="window acrylic" class:visible style="top: {max(0, posy)}px; left: {max(0, posx)}px">
    <nav class="nav">
      <div class="bar" on:mousedown={mousedown}></div>
      <div>
        <div on:click={handler("buttonClose")}>
          <svg class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
          </svg>
        </div>
      </div>
    </nav>
    <div class="content">
      <slot />
    </div>
  </section>
{/if}

<svelte:window on:mouseup={mouseup} on:mousemove={mousemove} />

<style lang="scss">
  @import "../styles/helpers.scss";

  .window {
    width: 1024px;
    height: 640px;
    position: absolute;

    opacity: 0;
    transform: scale(.8);
    transition: opacity .25s,
                transform .25s;
    &.visible {
      opacity: 1;
      transform: scale(1);
    }

    .nav {
      display: flex;
      height: 16px;
      margin: 4px 6px 8px;
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
