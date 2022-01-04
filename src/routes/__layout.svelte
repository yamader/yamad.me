<script lang="ts">
  import "../app.css"
</script>

<div class="container flex flex-col">
  <header class="w-full">
    <nav>
      <ul class="flex list-none">
        <li>
          <a svelte:prefetch href="/">Top</a>
        </li>
        <li>
          <a svelte:prefetch href="/about/">About</a>
        </li>
      </ul>
    </nav>
  </header>
  <main class="">
    <slot />
  </main>
  <footer class="">
    <small class="inline-block mx-2 my-4 font-bold text-gray-600"
    >Copyright &copy; 2020-{new Date().getFullYear()} YamaD</small>
  </footer>
</div>
