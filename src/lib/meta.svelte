<script lang="ts">
  export let title         : string   = '"${title}"'
  export let description   : string   = "YamaD's website"
  export let noRobots      : boolean  = false
  export let noTitleFormat : boolean  = false

  const destTitle = title + (noTitleFormat ? "" : " | YamaD.me")
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  {#if noRobots}<meta name="robots" content="none" />{/if}
  <meta name="twitter:card" content="summary" />
  <meta property="og:image" content="https://yamad.me/icon.png" />
  <meta property="og:title" content="{title}" />
</svelte:head>
