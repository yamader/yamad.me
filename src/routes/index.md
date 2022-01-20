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

## Donate

- Bitcoin : `bc1qyq8mdpl3qk6s5y98jsjzcvrkz9cmjcvpf75dhs`
- 干し芋 : [amazon.co.jp](https://wish.dyama.net)

<details><summary class="h2">PGP public key</summary>

特に鍵サーバーとかには上げてないです．
[/pub.asc](/pub.asc)からでも取得できます．

Fingerprint :
```
0E3E 1098 B312 9A37 AFE6  A5CF 596E 6A41 B551 7736
```

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEYWqh9hYJKwYBBAHaRw8BAQdAftm3F9L5BEDmEWFwbC7yXq2qXO7QxYaDydrZ
Ag0rlNG0FFlhbWFEIDxtZUBkeWFtYS5uZXQ+iJQEExYKADwWIQQOPhCYsxKaN6/m
pc9ZbmpBtVF3NgUCYWqh9gIbAQULCQgHAgMiAgEGFQoJCAsCBBYCAwECHgcCF4AA
CgkQWW5qQbVRdzZwBwD/YLj2tz1RvQxmhB0wQQFbHB1DWK2kyu0bjXw4lyR5UVoB
APbulFzvYMZ5e2IG9J9Y6+78adeBxFw3j/eNR0x3P5cMuDMEYWqiCxYJKwYBBAHa
Rw8BAQdAFgEPg9RkUsWI4wfANDHz08Nd7pAjuyu20PFtepEo202I9QQYFgoAJhYh
BA4+EJizEpo3r+alz1luakG1UXc2BQJhaqILAhsCBQkDwmcAAIEJEFluakG1UXc2
diAEGRYKAB0WIQSrEGCxqVN9fOEkQAdP0HEW+5HykgUCYWqiCwAKCRBP0HEW+5Hy
kgb8AP4q6/Sc+5dZuZFan7V6e5cla2t7RwkTHG6ZDCl97MJQGwD+K3yZFab1gkKX
EjxYGiZ8NKKFIrkMNXfAbwCCup1f8g91fQD/ZhB8KfHVQLbgkCNWBDPn0ssu61Ql
HAfGbV6cCaddScUBAKdWyZu3v/8lFHZESD7SrbX/7Yazazd3bg0GpLIoiz8AuDgE
YWqiHxIKKwYBBAGXVQEFAQEHQKo56Vn1ndqdfuwakecwXetK11iWZ2dae6HlYkXm
lMMPAwEIB4h+BBgWCgAmFiEEDj4QmLMSmjev5qXPWW5qQbVRdzYFAmFqoh8CGwwF
CQPCZwAACgkQWW5qQbVRdzbPoAD+MSY/emf41PzAVZd5L8GShMXYy1DUBC4/bSjP
fEhezrEA/2c4iREREFzr4BD+4LPv/2Gq2tHYtFSIjG3LmcAfCsMIuDMEYWqiLRYJ
KwYBBAHaRw8BAQdA9ec2Szu13x4h4R0E6Nz0n6ed/W3iJ/VMWuQykwgHD7KIfgQY
FgoAJhYhBA4+EJizEpo3r+alz1luakG1UXc2BQJhaqItAhsgBQkB4TOAAAoJEFlu
akG1UXc2zWoA/iQVgxPCp/MDv/NiD4OjHIEpJYc0XG2B9JzKNUxPdfDnAP451UT9
v2EDj1V+GXzxr4dV22ZIgDziBh5gvIlwJu3kDw==
=EWSU
-----END PGP PUBLIC KEY BLOCK-----
```

</details>
