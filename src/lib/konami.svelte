<script lang="ts">
  import Window from "$lib/window.svelte"
  import { onMount } from "svelte"
  import type { Exec } from "$lib/window.svelte"
  let exec: Exec
  export let konamiOpen
  onMount(() => konamiOpen = exec("open"))
</script>

<Window bind:exec>
  ここには何もないようだ……
</Window>
