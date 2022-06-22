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
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
    ]
    let cur = 0

    addEventListener("keydown", e => {
      if(e.key == command[cur++]) {
        if(cur == command.length) {
          for(let i=0; i<2; ++i) alert("そのうち何か作ります")
          while(true) alert("逮捕")
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
      max-width: 100%;
    }

    & > hr {
      margin: 0.8rem auto;
      width: 80%;

      @include mqUp(lg) {
        width: 95%;
      }

      @include mqUp(md) {
        width: 100%;
      }
    }
  }

  // Header

  .headerNav {
    display: flex;
    margin: 1rem auto;
    user-select: none;
  }

  .headerLinks {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 2em;

    &::before {
      margin: auto 1.5em auto 0;
      content: "->";

      @include mqUp(md) {
        display: none;
      }
    }

    &::after {
      margin: auto 0 auto 1.5em;
      content: "<-";

      @include mqUp(md) {
        display: none;
      }
    }

    li > a {
      display: inline-block;
      min-width: 6em;
      color: $c-text;
      text-align: center;
      text-decoration: none;

      &:hover, &:active, &.active {
        font-weight: bolder;
        text-decoration: underline;
      }

      @include mqUp(md) {
        min-width: 4em;
      }

      @include mqUp(sm) {
        min-width: 0;
      }
    }

    li + li::before {
      margin: 0 1em;
      content: "|";

      @include mqUp(md) {
        margin: 0 .8em;
      }

      @include mqUp(xs) {
        margin: 0 .2em;
      }
    }
  }

  // Main

  main {
    margin-bottom: 2rem;
    padding: 0 15%;

    @include mqUp(md) {
      padding: 0 5%;
    }

    @include mqUp(sm) {
      padding: 0;
    }
  }

  // Footer

  .copyright {
    display: block;
    margin: 1em;
    color: $c-dimText;
    font-weight: bold;
    text-align: center;
  }
</style>
