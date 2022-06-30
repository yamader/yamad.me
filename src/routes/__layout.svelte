<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/env"
  import "../app.scss"

  const navLinks: { path: string, name: string }[] = [
    { path: "/", name: "Top" },
    { path: "/about/", name: "About" },
    { path: "/something/", name: "Something" },
  ]

  // Konami Code

  if(browser) {
    const command = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ]
    let cur = 0

    addEventListener("keydown", e => {
      if (e.key === command[cur++]) {
        if (cur === command.length) {
          for (let i = 0; i < 2; ++i) alert("そのうち何か作ります")
          while (true) alert("逮捕")
        }
      } else {
        cur = 0
      }
    })
  }
</script>

<div class="container">
  <header>
    <nav class="headerNav">
      <ul class="headerLinks">
        {#each navLinks as { path, name }}
          <li>
            <a sveltekit:prefetch class:active={$page.url.pathname === path} href="{path}">{name}</a>
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

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

  // Container

  .container {
    display: flex;
    max-width: 960px;
    margin: 32px auto;
    padding: 16px 32px;
    flex-direction: column;
    border: 4px solid;
    border-radius: 8px;

    @include mqUp(lg) {
      margin: 0;
      border: none;
      border-radius: 0;
    }

    @include mqUp(sm) {
      padding: 5%;
    }

    & > hr {
      width: 90%;

      @include mqUp(md) {
        width: 100%;
      }
    }
  }

  // Header

  .headerNav {
    display: flex;
    margin: 1rem auto;
  }

  .headerLinks {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    font-weight: bold;
    list-style: none;

    &::before {
      content: "<";
      margin-right: 1.2em;
      @include mqUp(md) {
        display: none;
      }
    }
    &::after {
      content: ">";
      margin-left: 1.2em;
      @include mqUp(md) {
        display: none;
      }
    }

    li > a {
      display: inline-block;
      min-width: 4em;
      color: $c-text;
      text-align: center;
      text-decoration: none;

      &:hover, &.active {
        color: $c-link;
        text-decoration: underline;
      }

      @include mqUp(sm) {
        min-width: 0;
      }
    }

    li + li::before {
      margin: 0 .8em;
      content: "|";
    }
  }

  // Main

  main {
    margin-bottom: 2em;
    padding: 0 10%;

    @include mqUp(md) {
      padding: 0;
    }
  }

  // Footer

  .copyright {
    display: block;
    margin: 1em 0;
    color: $c-dimText;
    font-weight: bold;
    text-align: center;
  }
</style>
