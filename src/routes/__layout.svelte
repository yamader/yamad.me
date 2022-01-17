<script lang="ts">
  import "../app.scss"
</script>

<header>
  <nav class="headerNav">
    <ul>
      <li>
        <a svelte:prefetch href="/">Top</a>
      </li>
      <li>
        <a svelte:prefetch href="/about/">About</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <small class="copyright"
    >Copyright &copy; 2020-{new Date().getFullYear()} YamaD</small
  >
</footer>
