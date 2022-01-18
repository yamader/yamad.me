---
title: About
description: 山Dについて
---

<script>
  import Contacts from "$lib/contacts.md"
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
山Dは{#if year < 2005}まだ生まれていません．{:else}<strong>{year-2005}</strong>歳です．{/if}

## やったこと

[/something/](/something/)に書いてあるかもしれません．

## リンク

- GitHub: [@yamader](https://github.com/yamader)

<Contacts />

## 使える言語 (使えるとは言ってない)

- C
- D
- JavaScript/TypeScript (React/Vue/Svelte)
- Python

<details><summary class="h2">その他</summary>

### 環境

- デスクトップ環境 : dwm / fcitx-skk
- エディタ : SublimeText / Vim
- Twitter : TweetDeck / Twitter for Android
- キーボード : HHKB Professional HYBRID / HHKB Professional2

### ディストロ

- Gentoo Linux
- Debian GNU/Linux

### マシン

- Core 8500/DDR4 64G/GeForce 1070 Ti デスクトップ
- Core 1165G7/DDR4 16G/Iris Xe ラップトップ
- Ryzen 3100/DDR4 16G デスクトップ(サーバー)
- その他がらくた

</details>
