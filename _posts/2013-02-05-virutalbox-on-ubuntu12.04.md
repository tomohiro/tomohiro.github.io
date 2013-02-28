---
layout: post
title: Ubuntu 12.04 に VirtualBox 4.2 をインストール
---


以下の目的で VirtualBox 4.2 をインストールする必要があったので，手順を調査した。

1. Vagrant を使用するためには VirtualBox 4.2 が必要
2. Ubuntu 12.04 のソフトウェアセンターで提供されている VirtualBox ではバージョンが古い

結論: virtualbox.org のリポジトリを追加して，そこからインストールすれば良い。

```sh
$ wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
$ sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian precise contrib" >> /etc/apt/sources.list'
$ sudo apt-get update
$ sudo apt-get install virtualbox-4.2
```
