---
title: About
description: 山Dについて
---

<script>
  let year = new Date().getFullYear()
</script>

<style lang="scss">
  input.yearNum {
    width: 6em;
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

## 使う言語 (使えるとは言ってない)

- C
- D
- JavaScript/TypeScript (React/Vue/Svelte)
- Python

## 使うディストロ

- Gentoo Linux
- Debian GNU/Linux

## マシン

- Core 8500/DDR4 64G/GeForce 1070 Ti デスクトップ
- Core 1165G7/DDR4 16G/Iris Xe ラップトップ
- Ryzen 3100/DDR4 16G デスクトップ(サーバー)
- その他がらくた

## 環境

- デスクトップ環境 : dwm / fcitx-skk
- エディタ : SublimeText / Vim
- Twitter : TweetDeck / Twitter for Android
- キーボード : HHKB Professional HYBRID / HHKB Professional2

## その他リンク

- GitHub: [@yamader](https://github.com/yamader)
- Twitter: [@_yamader](https://twitter.com/_yamader)
