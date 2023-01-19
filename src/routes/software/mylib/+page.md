---
title: mylib
description: オレオレライブラリ
---

<script>
  import logger from "./logger.png"
</script>

# mylib : オレオレライブラリ

完全に自分用に作っています。
仕様はコロコロ変わるし機能も貧弱なので，参考程度に……。

- [GitHub](https://github.com/yamader/mylib)

## 目次

- [C++](#c)
- [D](#d)
- [TypeScript](#typescript)

## C++

### [argparse.hh](https://github.com/yamader/mylib/tree/master/cxx/argparse.hh): コマンドライン引数解析

```c++
auto main(int argc, char* argv[]) -> int {"{"}
  Args args{"{"}argc, argv{"}"};
  args.def_flag("help", "--help", "-h");
  args.def("file", "--file", "-f");
  args.parse();

  if(args["help"].flag()) {"{"}
    cout {"<<"} "This is the help.\n";
    return 0;
  {"}"}

  auto fpath = args["file"].str();
  ...
```

### [logger.hh](https://github.com/yamader/mylib/tree/master/cxx/logger.hh): ロガー

![logger]({logger})

### [nullstream.hh](https://github.com/yamader/mylib/tree/master/cxx/nullstream.hh): 虚無stream

```c++
NullStream() {"<<"} u8"虚無へ出力"s;
```

## D

### [cstr.d](https://github.com/yamader/mylib/tree/master/d/cstr.d): Cっぽいやつ

具体的には`strlen(3)`らへんとか。

### [dyns.d](https://github.com/yamader/mylib/tree/master/d/dyns.d): 可変サイズのフィールドを持つクラス

使い方はunittest見てください。

### [reflection.d](https://github.com/yamader/mylib/tree/master/d/reflection.d): ランタイム時のリフレクション

```d
struct S {"{"} int i; {"}"}
S s;
s.set("i", 123);
```

### [utils.d](https://github.com/yamader/mylib/tree/master/d/utils.d): 雑多

これがあると若干コードの量が減るかなーって感じのやつ。

## TypeScript

### [interleave.ts](https://github.com/yamader/mylib/tree/master/ts/interleave.ts): flattenする

~~いつ使うねん。~~

```ts
// [1, 10, 100, 2, 20, 200, 3, 30, 4, 5]
interleave([1, 2, 3, 4, 5],
           [10, 20, 30],
           [100, 200])
```

### [sleep.ts](https://github.com/yamader/mylib/tree/master/ts/sleep.ts): sleep()

ブラウザでも`node:timers/promises`が使えたらなぁ……。
