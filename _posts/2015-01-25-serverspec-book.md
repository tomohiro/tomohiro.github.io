---
layout: post
title: 『Serverspec』 読んだ
---

本書の著者である宮下剛輔([@mizzy](https://github.com/mizzy)) さんから贈って頂きました。
ありがとうございます。

<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4873117097/tomohiro.t-22/ref=nosim/" name="amazletlink" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51P6qVOPALL._SL160_.jpg" alt="Serverspec" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4873117097/tomohiro.t-22/ref=nosim/" name="amazletlink" target="_blank">Serverspec</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 15.01.25</div></div><div class="amazlet-detail">宮下 剛輔 <br />オライリージャパン <br />売り上げランキング: 5,011<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4873117097/tomohiro.t-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>


Serverspec は構文の簡易さと導入の敷居の低さにより，Ruby にそこまであかるくないエンジニアも利用しているケースも多々あると思うが，そういった人々は例えば `spec_helper.rb` を必要に応じてカスタマイズすることがスムーズにできないというところで歯がゆい思いをしていることだろう。

本書では全体を通して内部の実装の細かいところの解説が充実しており，また第6章に関しては Pry を利用したトラブルシューティングなどの具体例があり，先述したような人たちが現場での Serverspec の使い方を一段上にできる非常に実用的な本になっている。


### 力強いメッセージ

本書の中では第4章の「コントリビュートする際の心構え」が特に印象深い。GitHub などで公開されているプロジェクトの中にはコントリビューティング・ガイドラインが設けられているケースも少なくないが，そこに貢献したい人はどのような心構えでのぞめばいいのかまで教えてくれるのはほとんどないように思う。(それこそ初心者にとっては[半年ROMれ](http://dic.nicovideo.jp/a/%E5%8D%8A%E5%B9%B4rom)みたいな怖さを感じることもある)

> 筆者は自分で使うためにServerspecを開発しているのであり、他人のために開発しているのではありません。同様に他の方も、Serverspecを拡張する場合は、自分のために拡張を行ってください。他人のためとか考える必要はありません。
- p.116 | 4章 Serverspec 内部の詳細

> とはいえ、筆者はそれほど作法にはうるさくありませんので、お気軽にプルリクエストを送ってください。- p.116 | 4章 Serverspec 内部の詳細

私は Serverspec に対する過去の数少ないコントリビュート経験を思い出しながらこの部分を読んでいた。

Serverspec は2013年3月24日に[発表](http://mizzy.org/blog/2013/03/24/3/)されたのだが，職場ですぐに評価を始めて，社内SNSの日記でふり返ったところ3月29日には本番環境に向けて Serverspec によるテストを実施していたらしい。
基本的にはサーバ仕様に関する手順書ベースのチェックシートから Serverspec のテストケースに変換していくのだが，まだ出た当初だということもあり完全に変換することができない状態であった。

そのような状態であったので "テストを書く→機能が足りないことに気づく→Pull Request を送る→取り込んでリリースしてもらう→テストを書く..." といった流れで，sudo のパスワードを環境変数SUDO_PASSWORD で指定できる機能であるとか，標準出力の結果を正規表現でチェックするマッチャなどの Pull Request を取り込んでもらい，業務がスムーズに進んだ思い出がある。

> 筆者自身、他の OSS プロダクトにプルリクエストを送ることがあります。それに対して長い間何もレスポンスがなかったり、マージされてもなかなかリリースされなかったり、という状況は、プルリクエストを送る側としてはあまり好ましくはありません。プルリクエストを送ってくださる方の気持ちを考え、不便を強いないよう、できる限り早くマージしてリリースするよう努めています。 - p.13-14 | 1章 Servspec の紹介

こうした力強く，かつ温かみのあるメッセージが散りばめられており，貢献したいと考えている人を後押ししてくれるような解説が書かれているのは，作者本人による著書ならではだと感じるし，なにより Serverspec の発展を願うひとりのツール利用者としてもとても嬉しい。

### Serverspec Snippets in Atom

ちなみに今回は，私が作成した Atom 向けのスニペットツール [serverspec-snippets](https://atom.io/packages/serverspec-snippets) が第5章「他ツールとの連携」(p.125-126) にて紹介されたということで本書を頂けることになりました。ありがとうございました。
そして Atom ユーザで Serverspec をご利用するエンジニアの方々にお使い頂けると嬉しいです。

- [serverspec-snippets | Atom Packages](https://atom.io/packages/serverspec-snippets)
- [Tomohiro/atom-serverspec-snippets | GitHub](https://github.com/Tomohiro/atom-serverspec-snippets)
