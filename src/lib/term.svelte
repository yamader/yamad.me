<script lang="ts">
  import type { Exec } from "$lib/window.svelte"
  import { onMount } from "svelte"
  import Window from "$lib/window.svelte"

  let exec: Exec
  export let termOpen

  onMount(() => termOpen = exec("open"))
</script>

<Window bind:exec>
  <div class="term">
    wip
  </div>
</Window>

<style lang="scss">
  .term {
    display: flex;
    min-width: 100%;
    min-height: 100%;
    flex-direction: column;
    background: #000;
  }
</style>
