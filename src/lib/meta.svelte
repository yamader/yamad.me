<script lang="ts">
  import { page } from "$app/stores"

  export let title         : string = "${title}"
  export let description   : string = "YamaD's website"
  export let author        : string = "YamaD"
  export let noRobots      : bool   = false
  export let noTitleFormat : bool   = false

  const destTitle = title + (noTitleFormat ? "" : " | yamad.me")
</script>

<svelte:head>
  <title>{destTitle}</title>
  <meta name="description"  content="{description}" />
  <meta name="author"       conetnt="{author}" />
  <!-- <meta name="keywords"     content="山D,YamaD" /> -->
  <meta name="robots"       content="{noRobots ? "none" : "all"}" />

  <meta name="twitter:card"     content="summary" />
  <meta name="twitter:site"     content="@_yamader" />
  <meta name="twitter:creator"  content="@_yamader" />

  <meta property="og:title"       content="{destTitle}" />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://yamad.me{$page.url.pathname}" />
  <meta property="og:image"       content="https://yamad.me/icon.png" />
  <meta property="og:description" content="{description}" />
  <meta property="og:site_name"   content="yamad.me" />
</svelte:head>
