---
title: YamaD.me
description: 山Dのウェブサイト
noTitleFormat: true
---

<script context="module">
  import contacts from "$lib/contacts.json"
</script>

# YamaD

## ようこそ

なんとここは山Dのホームページです．
[SvelteKit](https://kit.svelte.dev) / [mdsvex](https://mdsvex.com) / [$\KaTeX$](https://katex.org) で構築しています．

**New :**
最近流行りのIPFSに置いてみました．

- ゲートウェイに[cloudflare-ipfs.com](https://www.cloudflare.com/distributed-web-gateway/)を使用 : [ipfs.yamad.me](https://ipfs.yamad.me)

## Contacts

<ul>
  {#each contacts as { name, disp, content }}
    <li>{name} : <a href={content} target="_blank" rel="external">{disp}</a></li>
  {/each}
</ul>

## PGP Public Key

[/pub.asc](/pub.asc)，WKD，CERTから取得できます．ご入用の際にどうぞ．

```
% gpg --fetch-keys https://yamad.me/pub.asc
もしくは
% gpg --locate-keys me(at)dyama.net
```

Fingerprint ([master key](openpgp4fpr:0E3E1098B3129A37AFE6A5CF596E6A41B5517736)) :

```
0E3E 1098 B312 9A37 AFE6  A5CF 596E 6A41 B551 7736
```
