<script lang="ts">
  let value = new Date().getFullYear()
  $: delta = value - 2005
</script>

<p>
  西暦<input type="number" bind:value />年において，山Dは{#if delta < 0}
    まだ生まれていません。{:else}<strong>{delta}</strong>歳です。{/if}{#if delta >= 200}
    おそらく死んでいます。
  {/if}
</p>

<style>
  input {
    width: 6em;
    margin: 0 0.3em;
  }
</style>
