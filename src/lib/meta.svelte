<script lang="ts">
  export let title         : string   = '"${title}"'
  export let description   : string   = "YamaD's website"
  export let author        : string   = "YamaD"
  export let noRobots      : boolean  = false
  export let noTitleFormat : boolean  = false

  const destTitle = title + (noTitleFormat ? "" : " | YamaD.me")
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  <meta name="author"       content="{author}" />
  {#if noRobots}<meta name="robots" content="none" />{/if}
  <meta name="twitter:card" content="summary" />
  <meta property="og:image" content="https://yamad.me/icon.png" />
</svelte:head>
