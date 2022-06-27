---
title: About
description: 山Dについて
---

<script>
  import contacts from "$lib/contacts.json"
  const links = [
    { name: "GitHub", disp: "@yamader", content: "https://github.com/yamader" },
    ...contacts,
  ]
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

<ul>
  {#each links as { name, disp, content }}
    <li>{name} : <a href={content} target="_blank" rel="external">{disp}</a></li>
  {/each}
</ul>

## # 使える言語・技術 (使えるとは言ってない)

- D : 普段はDを使っています
- Zig / Nim : 最近始めました
- C / C++ : 必要に迫られたときに使います
- $\LaTeX$ / SATySFi : レポート等で使います
- JavaScript / TypeScript : Web関連やアプリ開発で使います
- Python : 電卓の代わりに使います
- OCaml : たまに書きます
- Go : たまに書きます


- Docker / k8s : 自宅鯖やラズパイクラスタの運用に利用しています
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
