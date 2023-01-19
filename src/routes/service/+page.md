---
title: Service
description: サービス
---

<script>
  export let data
</script>

# Service

<ul class="tree">
  {#each data.entries as entry}
  <li>
    <div class="node"><a href="{entry}">{entry}</a></div>
  </li>
  {/each}
</ul>

<style lang="scss">
  @import "../../styles/tree.scss";
</style>
