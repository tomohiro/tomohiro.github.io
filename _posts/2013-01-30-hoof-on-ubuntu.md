---
layout: post
title: Ubuntu 版 Pow として Hoof を導入した
---

Ubuntu でも Pow on OSX のように簡単に Rack アプリケーションにアクセスしたいので探したところ，Hoof という gem を発見したので早速導入してみた。

[pyromaniac/hoof · GitHub](https://github.com/pyromaniac/hoof) 

Ubuntu のバージョンは 12.04 LTS を使用した。

### Install

RubyGems として公開されているので `gem install hoof` すれば良いらしいが，global な gem 環境を汚したくないので [bundlizer](https://github.com/Tomohiro/bundlizer) でインストールする。

```sh
$ bundlizer install hoof
```

Hoof をネットワークの設定に追加して起動する

```sh
$ hoof install
$ hoof start
```

`nsswtich.conf` に `hoof` を追加

```sh
$ vi /etc/nsswitch.conf
hosts:          files mdns4_minimal [NOTFOUND=return] dns mdns4 hoof
```

Rack アプリケーションを Hoof で動くようにする(Gemfile に unicorn が追加されるので bundle も実行)

```
$ cd /path/to/myapp/
$ hoof init
$ bundle
```

`hoof init` すると Pow のように `$HOME/.hoof` 以下にシンボリックリンクが作成される。

ブラウザを再起動してアクセスして動作を確認

http://myapp.dev


### その他

ヘルプを見る

```sh
$ hoof help
Tasks:
  hoof help [TASK]         # Describe available tasks or one specific task
  hoof init [NAME]         # Initializes hoof for app in current directory
  hoof install [TARGET]    # Redirects http ports to hoof default ports with iptables
  hoof restart             # Restarts hoof daemon
  hoof start               # Starts hoof daemon
  hoof status              # Lists hoof applications
  hoof stop                # Stops hoof daemon
  hoof uninstall [TARGET]  # Destroys hoof iptables redirecting rules
```

Rack アプリの稼動状況を確認する

```sh
$ hoof status
  3814  myapp                [running]
```

あと，プロキシ環境下で動いている場合は `.dev` をプロキシを経由しないように設定に追加するのを忘れずに
