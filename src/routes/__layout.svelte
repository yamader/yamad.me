<script lang="ts">
  import { page } from "$app/stores"
  import "../app.scss"

  const navLinks = [
    { path: "/", name: "Top" },
    { path: "/about/", name: "About" },
    { path: "/something/", name: "Something" },
  ]
</script>

<div class="container">
  <header>
    <nav class="headerNav">
      <ul class="headerLinks">
        {#each navLinks as { path, name }}
          <li>
            <a svelte:prefetch class:active={$page.url.pathname === path} href="{path}">{name}</a>
          </li>
        {/each}
        <li>
          <a href="https://seppuku.club" rel="external">Blog</a>
        </li>
      </ul>
    </nav>
  </header>

  <hr />

  <main>
    <slot />
  </main>

  <hr />

  <footer>
    <small class="copyright">Copyright &copy; 2020-{new Date().getFullYear()} YamaD</small>
  </footer>
</div>
