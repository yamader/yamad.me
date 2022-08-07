<!--
  Thanks to:
  - https://svelte.dev/repl/62235b43f41948d4bd2b03221668a246?version=3.31.0
-->

<script lang="ts">
  import Window from "$lib/window.svelte"
  import { onMount } from "svelte"
  export let windowOpen
  let window
  onMount(() => windowOpen = window.exec("open"))
</script>

<svelte:options accessors />

<Window bind:this={window}>
  ここには何もないようだ……
</Window>
