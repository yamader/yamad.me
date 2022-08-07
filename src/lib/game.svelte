<!--
  Thanks to:
  - https://svelte.dev/repl/62235b43f41948d4bd2b03221668a246?version=3.31.0
-->

<script lang="ts">
  import Window from "$lib/window.svelte"
  import { onMount } from "svelte"
  import type { Exec } from "$lib/window.svelte"
  let exec: Exec
  export let gameOpen
  onMount(() => gameOpen = exec("open"))
</script>

<svelte:options accessors />

<Window bind:exec>
  ここには何もないようだ……
</Window>
