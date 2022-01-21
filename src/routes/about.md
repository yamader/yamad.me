---
title: About
description: 山Dについて
---

<script context="module">
  import contacts from "$lib/contacts.json"
  const links = [
    { name: "GitHub", disp: "@yamader", content: "https://github.com/yamader" },
    ...contacts,
  ]
</script>

<script>
  const birthYear = 2005
  let year = new Date().getFullYear()
</script>

<style lang="scss">
  .yearNum {
    width: 8em;
    margin: 0 .5em;
    padding: .5em;
  }
</style>

# About

## 自己紹介

実は某市立高専電子科の2年生です．
パソコンは最近始めたばっかりです．

いわゆる低レイヤに興味があります．

## 年齢

西暦<input type=number bind:value={year} class="yearNum" />年において，
山Dは{#if year < birthYear}まだ生まれていません．{:else}<strong>{year-birthYear}</strong>歳です．{/if}
{#if (year-birthYear) >= 200}おそらく死んでいます．{/if}

## やったこと

[/something/](/something/)に書いてあるかもしれません．

## リンク

<ul>
  {#each links as { name, disp, content }}
    <li>{name} : <a href={content} target="_blank" rel="external">{disp}</a></li>
  {/each}
</ul>

## 使える言語 (使えるとは言ってない)

- C
- D
- JavaScript / TypeScript (React/Vue/Svelte)
- Python

<details><summary class="h2">その他</summary>

### 環境

- デスクトップ環境 : dwm / fcitx-skk
- エディタ : SublimeText / Vim
- キーボード : HHKB Professional HYBRID / HHKB Professional2
- Twitter : TweetDeck / Twitter for Android

### ディストロ

- Gentoo Linux
- Debian GNU/Linux

### マシン

- Core 8500 / DDR4 64G / GeForce 1070 Ti デスクトップ
- Core 1165G7 / DDR4 16G / Iris Xe ラップトップ
- Ryzen 3100 / DDR4 16G デスクトップ(サーバー)
- その他がらくた

</details>
