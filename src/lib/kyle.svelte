<script lang="ts">
  let mount = false

  export const kyleOpen = () => {
    mount = true
  }
</script>

{#if mount}
<div>
</div>
{/if}
