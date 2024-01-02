---
layout: ~/layouts/Layout.astro
realTitle: YamaD.me
---

# YamaD.me

## ようこそ

- なんとここは山Dのホームページです。
- [Astro](https://astro.build/)で構築しています。
- [w3m](http://w3m.sourceforge.net/)からでも閲覧できます。
- ソースコードは[ここ](src.tgz)から取得できます。
- IPFS版もあります: [ipfs.yamad.me](ipns://ipfs.yamad.me/)

## Hyperlinks

| Tag       | href                                                                                                    |
|:--------- |:------------------------------------------------------------------------------------------------------- |
| Email     | <a href="https://me.dyama.net" target="_blank">me(at)dyama.net</a>                                      |
| Twitter   | <a href="https://twitter.com/i/user/1097491547602313216" target="_blank" rel="noreferrer">@_yamader</a> |
| Fediverse | <a href="https://msk.seppuku.club/@yamad" target="_blank">@yamad<span>@</span>msk.seppuku.club</a>      |
| GitHub    | <a href="https://github.com/yamader" target="_blank" rel="noreferrer">yamader</a>                       |
| Discord   | <a href="https://discord.com/users/542656442876952586" target="_blank" rel="noreferrer">YamaD#0142</a>  |
| Telegram  | <a href="https://t.me/yama_d" target="_blank" rel="noreferrer">yama_d</a>                               |

## OpenPGP Public Key

ご入用の際にどうぞ。
オフ会等で随時交換できます。

[Master key](openpgp4fpr:0E3E1098B3129A37AFE6A5CF596E6A41B5517736) fingerprint:
```
0E3E 1098 B312 9A37 AFE6  A5CF 596E 6A41 B551 7736
```

入手方法:
- HTTP: [pub.asc](pub.asc)
- Web Key Directory(direct)
- DNS CERT record

```
% gpg --fetch-keys https://yamad.me/pub.asc
もしくは
% gpg --locate-keys me(at)dyama.net
```
