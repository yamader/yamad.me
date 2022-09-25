<script lang="ts">
  import type { Exec } from "$lib/window.svelte"

  import { onMount } from "svelte"
  import Window from "$lib/window.svelte"

  let exec: Exec

  export let termOpen

  onMount(() => termOpen = exec("open"))
</script>

<Window bind:exec>
  ここには何もないようだ……
</Window>
