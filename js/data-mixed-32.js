/**
 * data-mixed-32.js — 混合データ（テクノロジー・環境・ビジネス・医学・文化の頻出語）
 * 形式: { word, meaning, etymology, category, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [

  // ── テクノロジー・IT ──────────────────
  {word:"algorithm",         meaning:"アルゴリズム・手順",           etymology:"al-Khwarizmi（数学者名）→計算手順",                  category:"IT",    level:3, pos:"名詞"},
  {word:"encryption",        meaning:"暗号化",                       etymology:"en（中に）+ crypt（隠す）+ ion（行為）",               category:"IT",    level:5, pos:"名詞"},
  {word:"bandwidth",         meaning:"帯域幅・情報処理能力",         etymology:"band（帯域）+ width（幅）",                           category:"IT",    level:5, pos:"名詞"},
  {word:"latency",           meaning:"遅延・潜伏期間",               etymology:"latent（潜在する）+ cy（状態）",                      category:"IT",    level:5, pos:"名詞"},
  {word:"virtualization",    meaning:"仮想化",                       etymology:"virtual（仮想の）+ ization（化）",                    category:"IT",    level:6, pos:"名詞"},
  {word:"blockchain",        meaning:"ブロックチェーン",             etymology:"block（ブロック）+ chain（鎖）→連鎖する記録",          category:"IT",    level:5, pos:"名詞"},
  {word:"cybersecurity",     meaning:"サイバーセキュリティ",         etymology:"cyber（コンピュータの）+ security（安全）",             category:"IT",    level:4, pos:"名詞"},
  {word:"biometrics",        meaning:"生体認証",                     etymology:"bio（生命）+ metrics（測定）",                        category:"IT",    level:5, pos:"名詞"},
  {word:"interoperability",  meaning:"相互運用性",                   etymology:"inter（間）+ operable（動く）+ ity（性質）",           category:"IT",    level:7, pos:"名詞"},
  {word:"scalability",       meaning:"スケーラビリティ・拡張性",     etymology:"scale（規模）+ ability（できる）",                     category:"IT",    level:6, pos:"名詞"},
  {word:"repository",        meaning:"リポジトリ・貯蔵庫",           etymology:"re（再び）+ posit（置く）+ ory（場所）",               category:"IT",    level:6, pos:"名詞"},
  {word:"middleware",        meaning:"ミドルウェア",                 etymology:"middle（中間）+ ware（製品）",                        category:"IT",    level:6, pos:"名詞"},
  {word:"firmware",          meaning:"ファームウェア",               etymology:"firm（固定された）+ ware（製品）",                     category:"IT",    level:5, pos:"名詞"},
  {word:"debugging",         meaning:"デバッグ・バグ修正",           etymology:"de（除く）+ bug（虫→エラー）+ ing（行為）",            category:"IT",    level:3, pos:"名詞"},
  {word:"iteration",         meaning:"反復・イテレーション",         etymology:"iter（再び）+ ation（行為）",                         category:"IT",    level:5, pos:"名詞"},

  // ── 環境・サステナビリティ ──────────────────
  {word:"sustainability",    meaning:"持続可能性",                   etymology:"sustain（持続する）+ ability（できる）",               category:"環境",  level:4, pos:"名詞"},
  {word:"renewable",         meaning:"再生可能な",                   etymology:"re（再び）+ new（新しく）+ able（できる）",             category:"環境",  level:3, pos:"形容詞"},
  {word:"conservation",      meaning:"保護・保全",                   etymology:"con（共に）+ serv（保つ）+ ation（行為）",             category:"環境",  level:4, pos:"名詞"},
  {word:"mitigation",        meaning:"緩和・軽減",                   etymology:"miti（やわらかい）+ gate（する）+ ion（行為）",         category:"環境",  level:5, pos:"名詞"},
  {word:"biodegradable",     meaning:"生分解性の",                   etymology:"bio（生命）+ degrad（分解）+ able（できる）",           category:"環境",  level:5, pos:"形容詞"},
  {word:"reforestation",     meaning:"再植林",                       etymology:"re（再び）+ forest（森）+ ation（行為）",              category:"環境",  level:6, pos:"名詞"},
  {word:"sequestration",     meaning:"隔離・差し押さえ",             etymology:"sequester（隔離する）+ ation（行為）",                 category:"環境",  level:6, pos:"名詞"},
  {word:"biomass",           meaning:"バイオマス",                   etymology:"bio（生命）+ mass（質量）",                           category:"環境",  level:5, pos:"名詞"},
  {word:"resilient",         meaning:"回復力のある・弾力的な",       etymology:"resilire（跳ね返る）+ ent（〜の）",                    category:"環境",  level:5, pos:"動詞・形容詞"},

  // ── ビジネス・経営 ──────────────────
  {word:"entrepreneur",      meaning:"起業家",                       etymology:"entre（間に）+ prend（取る）+ eur（人）→リスクを取る人", category:"ビジネス", level:4, pos:"名詞"},
  {word:"accountability",    meaning:"説明責任",                     etymology:"account（説明）+ ability（できる）",                   category:"ビジネス", level:4, pos:"名詞"},
  {word:"scalable",          meaning:"拡張可能な",                   etymology:"scale（規模）+ able（できる）",                        category:"ビジネス", level:3, pos:"形容詞"},
  {word:"synergy",           meaning:"相乗効果",                     etymology:"syn（共に）+ ergon（働き）→共に働く力",                category:"ビジネス", level:3, pos:"名詞"},
  {word:"pivot",             meaning:"方向転換する・ピボット",       etymology:"pivot（旋回軸）→事業の方向転換",                       category:"ビジネス", level:3, pos:"動詞・名詞"},
  {word:"disruption",        meaning:"混乱・革新的変化",             etymology:"dis（離して）+ rupt（破る）+ ion（状態）",             category:"ビジネス", level:3, pos:"名詞"},
  {word:"monetize",          meaning:"収益化する",                   etymology:"moneta（貨幣）+ ize（する）",                          category:"ビジネス", level:3, pos:"動詞"},
  {word:"logistics",         meaning:"物流・ロジスティクス",         etymology:"logistique（補給）→計画的な物資管理",                  category:"ビジネス", level:3, pos:"名詞"},
  {word:"procurement",       meaning:"調達・購買",                   etymology:"pro（代わりに）+ cure（世話する）+ ment（行為）",       category:"ビジネス", level:5, pos:"名詞"},
  {word:"stakeholder",       meaning:"利害関係者",                   etymology:"stake（賭け金）+ holder（保持者）",                    category:"ビジネス", level:4, pos:"名詞"},
  {word:"benchmark",         meaning:"基準・目標値",                 etymology:"bench（作業台）+ mark（印）→基準となる目印",           category:"ビジネス", level:3, pos:"名詞"},
  {word:"outsourcing",       meaning:"外部委託",                     etymology:"out（外へ）+ sourc（源）+ ing→外部を源として活用",      category:"ビジネス", level:3, pos:"名詞"},

  // ── 医学・健康 ──────────────────
  {word:"immunotherapy",     meaning:"免疫療法",                     etymology:"immuno（免疫）+ therapy（治療）",                     category:"医学",  level:7, pos:"名詞"},
  {word:"morbidity",         meaning:"罹患率・病気の状態",           etymology:"morbid（病的な）+ ity（状態）",                       category:"医学",  level:6, pos:"名詞"},
  {word:"mortality",         meaning:"死亡率・死すべき性質",         etymology:"mort（死）+ ality（性質）",                           category:"医学",  level:5, pos:"名詞"},
  {word:"oncology",          meaning:"腫瘍学",                       etymology:"onco（腫瘍）+ logy（学）",                            category:"医学",  level:6, pos:"名詞"},
  {word:"hematology",        meaning:"血液学",                       etymology:"hemato（血）+ logy（学）",                            category:"医学",  level:7, pos:"名詞"},
  {word:"prophylactic",      meaning:"予防的な・コンドーム",         etymology:"pro（前に）+ phylact（守る）+ ic（〜の）",             category:"医学",  level:6, pos:"形容詞・名詞"},
  {word:"comorbidity",       meaning:"併存疾患",                     etymology:"co（共に）+ morbid（病的な）+ ity（状態）",            category:"医学",  level:7, pos:"名詞"},
  {word:"hypochondria",      meaning:"心気症",                       etymology:"hypo（下の）+ chondria（軟骨）→肋骨下部への不安",      category:"医学",  level:5, pos:"名詞"},
  {word:"nostalgia",         meaning:"郷愁・ノスタルジア",           etymology:"nostos（帰還）+ algos（痛み）→故郷への痛み",            category:"医学",  level:3, pos:"名詞"},

  // ── 文化・社会 ──────────────────
  {word:"renaissance",       meaning:"ルネサンス・文芸復興",         etymology:"re（再び）+ naiss（生まれる）→再生・復活",              category:"文化",  level:3, pos:"名詞"},
  {word:"cosmopolitan",      meaning:"国際的な・世界市民",           etymology:"cosmo（世界）+ politan（市民）",                      category:"文化",  level:6, pos:"形容詞・名詞"},
  {word:"diaspora",          meaning:"離散・ディアスポラ",           etymology:"dia（散らして）+ speirein（まく）",                    category:"文化",  level:5, pos:"名詞"},
  {word:"indigenous",        meaning:"先住民の・固有の",             etymology:"indi（中に）+ gena（生まれた）→その地に生まれた",       category:"文化",  level:4, pos:"形容詞"},
  {word:"folklore",          meaning:"民俗・伝承",                   etymology:"folk（民衆）+ lore（知識）",                          category:"文化",  level:3, pos:"名詞"},
  {word:"zeitgeist",         meaning:"時代精神",                     etymology:"Zeit（時代）+ Geist（精神）→ドイツ語から借用",         category:"文化",  level:6, pos:"名詞"},
  {word:"iconoclast",        meaning:"偶像破壊者・革新者",           etymology:"eikon（像）+ klast（壊す）→伝統を打ち壊す人",          category:"文化",  level:6, pos:"名詞"},
  {word:"polyglot",          meaning:"多言語話者",                   etymology:"poly（多い）+ glot（言語）",                          category:"文化",  level:5, pos:"名詞"},
  {word:"serendipity",       meaning:"偶然の幸運",                   etymology:"Serendip（スリランカの古名）→偶然の良い発見",           category:"文化",  level:6, pos:"名詞"},
  {word:"schadenfreude",     meaning:"他人の不幸を喜ぶ感情",         etymology:"Schaden（損害）+ Freude（喜び）→ドイツ語から借用",      category:"文化",  level:5, pos:"名詞"},

  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
