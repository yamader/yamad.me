<script lang="ts">
  import "../app.css"
</script>

<div class="container flex flex-col">
  <header class="">
  </header>
  <main class="">
    <slot />
  </main>
  <footer class="">
    <small>&copy; 2020-{new Date().getFullYear()} YamaD</small>
  </footer>
</div>
