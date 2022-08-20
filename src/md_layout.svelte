<script>
  import Meta from "$lib/meta.svelte"

  /// @ts-ignore
  export let title
  /// @ts-ignore
  export let description
  /// @ts-ignore
  export let noRobots
  /// @ts-ignore
  export let noTitleFormat
</script>

<Meta {...{
  /// @ts-ignore
  title, description, noRobots, noTitleFormat
}} />

<slot />
