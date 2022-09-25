<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import "../app.scss"

  const navLinks = [
    { path: "/", name: "Top" },
    { path: "/about/", name: "About" },
    { path: "/something/", name: "Something" },
  ]
  const navLinksExt = [
    { url: "https://seppuku.club", name: "Blog" },
  ]

  const term = import("$lib/term.svelte")
  const kyle = import("$lib/kyle.svelte")

  let termOpen: () => void
  let kyleOpen: () => void

  if(browser) {
    // Random kyle
    if(Math.random() < .2) {
      kyle.then(k => {
        console.log(k)
      })
    }

    // Konami Code
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
      if(e.key === command[cur++]) {
        if(cur === command.length) {
          kyleOpen()
          cur = 0
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
          <a class:active={$page.url.pathname === path} href="{path}">{name}</a>
        </li>
        {/each}
        {#each navLinksExt as { url, name }}
        <li>
          <a href="{url}" target="_blank" rel="external">{name}</a>
        </li>
        {/each}
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

{#await term then { default: Term }}
<Term bind:termOpen />
{/await}

{#await kyle then { default: Kyle }}
<Kyle bind:kyleOpen />
{/await}

<style lang="scss">
  @import "../styles/helpers.scss";
  @import "../styles/variables.scss";

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

  main {
    margin-bottom: 2em;
    padding: 0 10%;
    @include mqUp(md) {
      padding: 0;
    }
  }

  .copyright {
    display: block;
    margin: 1em 0;
    color: $c-dimText;
    font-weight: bold;
    text-align: center;
  }
</style>
