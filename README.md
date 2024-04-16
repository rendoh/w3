# 社内勉強会用サンプル3

https://rendoh.github.io/w3/

Rapierを試す

## MEMO

- @dimforge/rapier3d@0.12.0はViteでサンプル通り実装しビルドするとエラーで動かない
  - devでは問題なし
  - @dimforge/rapier3d@0.11.2では問題なし
  - 該当のissue: https://github.com/dimforge/rapier.js/issues/257
  - @dimforge/rapier3d-compat@0.12.0は0.12系でも問題なし
    - ESM integration ではなくなるので `vite-plugin-wasm` は不要
- Contact Force Eventの振る舞いにバグがある様子: https://github.com/dimforge/rapier.js/issues/261
  - @0.11.2では問題なし
