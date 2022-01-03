<script>
  import Meta from "$lib/meta.svelte"

  export let title
  export let description
  export let author
  export let noRobots
  export let noTitleFormat
</script>

<Meta { ...{ title, description, author, noRobots, noTitleFormat } } />

<slot />
