---
title: About
description: 山Dについて
---

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

## # 自己紹介

`YamaD` もしくは `山D`

実は某市立高専電子科の3年生です．
いわゆる低レイヤに興味があります．

西暦<input type=number bind:value={year} class="yearNum" />年において，
山Dは{#if year < birthYear}まだ生まれていません{:else}<strong>{year - birthYear}</strong>歳です{/if}．
{#if (year - birthYear) >= 200}おそらく死んでいます．{/if}

## # やったこと

[/something/](/something/)に書いてあるかもしれません．

## # リンク

- E-mail  : <a href="https://me.dyama.net" target="_blank">me(at)dyama.net</a>
- Twitter : <a href="https://twitter.com/_yamader" target="_blank">@_yamader</a>
- Misskey : <a href="https://msk.seppuku.club/@yamad" target="_blank">@yamad@msk.seppuku.club</a>
- Discord : <a href="https://discord.com/users/542656442876952586" target="_blank">YamaD#0142</a>
- GitHub  : <a href="https://github.com/yamader" target="_blank">@yamader</a>

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
- その他がらくた
