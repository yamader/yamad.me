---
title: About
description: 山Dについて
---

<script>
  const birthYear = 2005
  let value = new Date().getFullYear()
</script>

<style lang="scss">
  .yearNum {
    width: 8em;
    margin: 0 .5em;
    padding: .5em;
  }
</style>

# About

## # 自己紹介

`YamaD` もしくは `山D`

実は某市立高専電子科の3年生です。いわゆる低レイヤに興味があります。

<p>
  西暦<input type="number" class="yearNum" bind:value />年において，山Dは{#if value < birthYear}
    まだ生まれていません。{:else}
    <strong>{value - birthYear}</strong>歳です。{/if}{#if value - birthYear >= 200}
    おそらく死んでいます。{/if}
</p>

## # やったこと

[/something/](/something/)に書いてあるかもしれません。

## # 使える言語・技術 (使えるとは言ってない)

- D : 普段はDを使っています
- C / C++ : たまに使います
- $\LaTeX$ : レポート課題で使います
- OCaml : たまに書きます
- Zig / Nim : 最近始めました


- Btrfs : いろいろ便利な機能があって重宝しています
- GnuPG : 適当に運用しています

## # 宗派

- ディストロ : Gentoo (OpenRC)
- デスクトップ環境 : dwm / fcitx-skk
- エディタ : SublimeText / Vim
- キーボード : HHKB
- Twitter : TweetDeck / Twitter for Android

## # マシン

- デスクトップ : Core 8500 / DDR4 128G / GeForce 1070 Ti
- ラップトップ : Core 1165G7 / DDR4 16G / Iris Xe
- サーバー : Ryzen 3100 / DDR4 16G
- 漬物石 : Core 7500 / DDR4 20G / HD 630
- ネタ枠 : PowerPC 970 / DDR 1G / GeForce FX 5200 Ultra
- その他がらくた
