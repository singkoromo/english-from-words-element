/**
 * data-prefix-29.js — 接頭語補充19（ob-, proto-, mega-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── ob-（向かって・反対・強意） ──────────────────
  {word:"obligation",           meaning:"義務・責務",                      etymology:"ob（向かって）+ ligation（縛ること）",            prefix:"ob-", level:1},
  {word:"obligatory",           meaning:"義務的な・強制的な",              etymology:"ob（向かって）+ ligatory（縛る）",                prefix:"ob-", level:2},
  {word:"observatory",          meaning:"天文台・観測所",                  etymology:"ob（向かって）+ servatory（観察する場所）",       prefix:"ob-", level:1},
  {word:"obsessive",            meaning:"強迫的な・頭から離れない",        etymology:"ob（向かって）+ sessive（座ること）",             prefix:"ob-", level:2},
  {word:"objectify",            meaning:"客体化する・物扱いにする",        etymology:"ob（向かって）+ jectify（投げること）",           prefix:"ob-", level:2},
  {word:"obloquy",              meaning:"悪評・非難・公の批判",            etymology:"ob（反対）+ loquy（話すこと）",                   prefix:"ob-", level:3},
  {word:"obscenity",            meaning:"わいせつ・不品行",                etymology:"ob（反対）+ scenity（品格）",                     prefix:"ob-", level:2},
  {word:"oblong",               meaning:"長方形の・縦長の",                etymology:"ob（向かって）+ long（長い）",                    prefix:"ob-", level:1},
  {word:"objurgate",            meaning:"激しく非難する・叱責する",        etymology:"ob（向かって）+ jurgate（法で訴える）",           prefix:"ob-", level:3},
  {word:"obscurity",            meaning:"不明瞭・無名・暗さ",              etymology:"ob（覆って）+ scurity（覆い隠すこと）",           prefix:"ob-", level:2},
  {word:"obfuscation",          meaning:"難読化・意図的な不明瞭化",        etymology:"ob（向かって）+ fuscation（暗くすること）",       prefix:"ob-", level:3},
  {word:"obovate",              meaning:"卵倒形の・倒卵形の（植物学）",    etymology:"ob（逆）+ ovate（卵形の）",                       prefix:"ob-", level:3},

  // ── proto-（最初の・原始的な） ──────────────────
  {word:"protomartyr",          meaning:"最初の殉教者",                    etymology:"proto（最初）+ martyr（殉教者）",                 prefix:"proto-", level:3},
  {word:"protoceratops",        meaning:"プロトケラトプス（恐竜）",        etymology:"proto（最初）+ ceratops（角のある顔）",           prefix:"proto-", level:2},
  {word:"protobiont",           meaning:"原始生物・最初の生命体",          etymology:"proto（最初）+ biont（生物体）",                  prefix:"proto-", level:3},
  {word:"protocluster",         meaning:"原始銀河団",                      etymology:"proto（最初）+ cluster（集団）",                  prefix:"proto-", level:3},
  {word:"protofascism",         meaning:"原初ファシズム・初期全体主義",    etymology:"proto（最初）+ fascism（ファシズム）",            prefix:"proto-", level:3},
  {word:"protohuman",           meaning:"原人・初期人類",                  etymology:"proto（最初）+ human（人間）",                    prefix:"proto-", level:2},
  {word:"protobird",            meaning:"原始鳥類・鳥類の祖先",            etymology:"proto（最初）+ bird（鳥）",                       prefix:"proto-", level:2},
  {word:"protonation",          meaning:"プロトン化・陽子付加（化学）",    etymology:"proto（最初・陽子）+ nation（付加）",             prefix:"proto-", level:3},
  {word:"protogalactic",        meaning:"原始銀河の",                      etymology:"proto（最初）+ galactic（銀河の）",               prefix:"proto-", level:3},
  {word:"protocultural",        meaning:"文化以前の・原始文化の",          etymology:"proto（最初）+ cultural（文化の）",               prefix:"proto-", level:3},
  {word:"protohistoric",        meaning:"有史以前と歴史時代の境界期の",   etymology:"proto（最初）+ historic（歴史的な）",             prefix:"proto-", level:3},
  {word:"protooncogene",        meaning:"原がん遺伝子",                    etymology:"proto（最初）+ oncogene（がん遺伝子）",           prefix:"proto-", level:3},

  // ── mega-（大きな・百万・巨大） ──────────────────
  {word:"megastructure",        meaning:"巨大構造物",                      etymology:"mega（巨大）+ structure（構造物）",               prefix:"mega-", level:2},
  {word:"megatrend",            meaning:"メガトレンド・巨大な社会的潮流",  etymology:"mega（巨大）+ trend（傾向）",                     prefix:"mega-", level:2},
  {word:"megapixel",            meaning:"メガピクセル・100万画素",         etymology:"mega（百万）+ pixel（画素）",                     prefix:"mega-", level:1},
  {word:"megaplatform",         meaning:"巨大プラットフォーム",            etymology:"mega（巨大）+ platform（基盤）",                  prefix:"mega-", level:2},
  {word:"megashift",            meaning:"社会の巨大な変化・大転換",        etymology:"mega（巨大）+ shift（変化）",                     prefix:"mega-", level:2},
  {word:"megacluster",          meaning:"超銀河団・巨大集積",              etymology:"mega（巨大）+ cluster（集団）",                   prefix:"mega-", level:3},
  {word:"megabrand",            meaning:"超有名ブランド",                  etymology:"mega（巨大）+ brand（ブランド）",                 prefix:"mega-", level:1},
  {word:"megatransaction",      meaning:"超大型取引",                      etymology:"mega（巨大）+ transaction（取引）",               prefix:"mega-", level:2},
  {word:"megaformat",           meaning:"超大判フォーマット",              etymology:"mega（巨大）+ format（形式・判型）",              prefix:"mega-", level:2},
  {word:"megachain",            meaning:"大規模チェーン店",                etymology:"mega（巨大）+ chain（連鎖・チェーン）",           prefix:"mega-", level:1},
  {word:"megavolcano",          meaning:"超巨大火山",                      etymology:"mega（巨大）+ volcano（火山）",                   prefix:"mega-", level:2},
  {word:"megasport",            meaning:"超大型スポーツイベント",          etymology:"mega（巨大）+ sport（スポーツ）",                 prefix:"mega-", level:1},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
