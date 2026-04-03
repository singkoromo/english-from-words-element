/**
 * data-root-4.js — 語根データ（-phil-, -phob-, -gen-, -morph-, -chron-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -phil-（愛する・好む） ─────────────────────
  {word:"philosophy",    meaning:"哲学",                  etymology:"phil（愛する）+ sophy（知恵）",            root:"-phil-", level:1},
  {word:"Philadelphia",  meaning:"フィラデルフィア",      etymology:"phil（愛する）+ adelphia（兄弟）",        root:"-phil-", level:0},
  {word:"bibliophile",   meaning:"愛書家",                etymology:"biblio（本）+ phile（愛する人）",          root:"-phil-", level:2},
  {word:"anglophile",    meaning:"英国愛好家",            etymology:"Anglo（英国）+ phile（愛する人）",         root:"-phil-", level:2},
  {word:"cinephile",     meaning:"映画愛好家",            etymology:"cine（映画）+ phile（愛する人）",          root:"-phil-", level:2},
  {word:"philanthropist",meaning:"慈善家",                etymology:"phil（愛する）+ anthrop（人間）+ ist",     root:"-phil-", level:2},
  {word:"philanthropy",  meaning:"慈善・博愛",            etymology:"phil（愛する）+ anthropy（人間）",         root:"-phil-", level:2},
  {word:"philharmonic",  meaning:"音楽愛好の・フィルハーモニー",etymology:"phil（愛する）+ harmonic（和音）",   root:"-phil-", level:2},
  {word:"philology",     meaning:"文献学・語源学",        etymology:"phil（愛する）+ logy（言葉）",             root:"-phil-", level:3},
  {word:"technophile",   meaning:"テクノロジー愛好家",    etymology:"techno（技術）+ phile（愛する人）",        root:"-phil-", level:2},
  {word:"philatelist",   meaning:"切手収集家",            etymology:"phil（愛する）+ atel（免税）+ ist",        root:"-phil-", level:3},
  {word:"philosophical", meaning:"哲学的な・達観した",    etymology:"philosoph（哲学）+ ical（〜の）",          root:"-phil-", level:2},
  {word:"pedophile",     meaning:"小児性愛者",            etymology:"ped（子ども）+ ophile（愛する人）",        root:"-phil-", level:2},
  {word:"audiophile",    meaning:"音響マニア",            etymology:"audio（音）+ phile（愛する人）",           root:"-phil-", level:2},
  {word:"oenophile",     meaning:"ワイン愛好家",          etymology:"oeno（ワイン）+ phile（愛する人）",        root:"-phil-", level:3},

  // ── -phob-（恐れる・嫌悪する） ────────────────
  {word:"phobia",        meaning:"恐怖症",                etymology:"phob（恐れる）+ ia（状態）",               root:"-phob-", level:1},
  {word:"agoraphobia",   meaning:"広場恐怖症",            etymology:"agora（広場）+ phobia（恐怖症）",          root:"-phob-", level:2},
  {word:"claustrophobia",meaning:"閉所恐怖症",            etymology:"claustro（閉じた）+ phobia（恐怖症）",     root:"-phob-", level:2},
  {word:"xenophobia",    meaning:"外国人嫌悪",            etymology:"xeno（外国）+ phobia（恐怖症）",           root:"-phob-", level:2},
  {word:"homophobia",    meaning:"同性愛嫌悪",            etymology:"homo（同性愛）+ phobia（恐怖症）",         root:"-phob-", level:2},
  {word:"hydrophobia",   meaning:"水恐怖症・狂犬病",      etymology:"hydro（水）+ phobia（恐怖症）",            root:"-phob-", level:2},
  {word:"technophobia",  meaning:"テクノロジー恐怖症",    etymology:"techno（技術）+ phobia（恐怖症）",         root:"-phob-", level:2},
  {word:"photophobia",   meaning:"光恐怖症",              etymology:"photo（光）+ phobia（恐怖症）",            root:"-phob-", level:2},
  {word:"nyctophobia",   meaning:"暗所恐怖症",            etymology:"nycto（夜）+ phobia（恐怖症）",            root:"-phob-", level:3},
  {word:"acrophobia",    meaning:"高所恐怖症",            etymology:"acro（高い）+ phobia（恐怖症）",           root:"-phob-", level:2},
  {word:"arachnophobia", meaning:"クモ恐怖症",            etymology:"arachno（クモ）+ phobia（恐怖症）",        root:"-phob-", level:2},
  {word:"ophidiophobia", meaning:"ヘビ恐怖症",            etymology:"ophidio（ヘビ）+ phobia（恐怖症）",        root:"-phob-", level:3},
  {word:"islamophobia",  meaning:"イスラム嫌悪",          etymology:"islam（イスラム）+ phobia（恐怖症）",      root:"-phob-", level:2},
  {word:"hydrophobic",   meaning:"疎水性の",              etymology:"hydro（水）+ phobic（恐れる）",            root:"-phob-", level:2},
  {word:"pathophobia",   meaning:"病気恐怖症",            etymology:"patho（病気）+ phobia（恐怖症）",          root:"-phob-", level:3},

  // ── -gen-（生む・起源・種類） ─────────────────
  {word:"generate",      meaning:"生み出す・発生させる",  etymology:"gen（生む）+ erate（〜する）",             root:"-gen-", level:1},
  {word:"genetic",       meaning:"遺伝の",                etymology:"genet（起源）+ ic（〜の）",                root:"-gen-", level:1},
  {word:"genre",         meaning:"ジャンル・種類",        etymology:"gen（種類）+ re（〜のもの）",              root:"-gen-", level:1},
  {word:"genesis",       meaning:"起源・始まり",          etymology:"gen（生む）+ esis（行為）",                root:"-gen-", level:2},
  {word:"genius",        meaning:"天才・才能",            etymology:"gen（生む）+ ius（〜する精神）",           root:"-gen-", level:1},
  {word:"generous",      meaning:"寛大な・気前の良い",    etymology:"gen（生む）+ erous（性質）",               root:"-gen-", level:1},
  {word:"genuine",       meaning:"本物の・真正の",        etymology:"gen（生む）+ uine（〜の性質）",            root:"-gen-", level:1},
  {word:"gender",        meaning:"性別・ジェンダー",      etymology:"gen（生む）+ der（〜のもの）",             root:"-gen-", level:0},
  {word:"oxygen",        meaning:"酸素",                  etymology:"oxy（酸）+ gen（生む）",                   root:"-gen-", level:1},
  {word:"hydrogen",      meaning:"水素",                  etymology:"hydro（水）+ gen（生む）",                 root:"-gen-", level:1},
  {word:"nitrogen",      meaning:"窒素",                  etymology:"nitro（硝石）+ gen（生む）",               root:"-gen-", level:1},
  {word:"pathogen",      meaning:"病原体",                etymology:"patho（病気）+ gen（生む）",               root:"-gen-", level:2},
  {word:"homogeneous",   meaning:"均一の",                etymology:"homo（同じ）+ gen（生む）+ eous（性質）",  root:"-gen-", level:2},
  {word:"heterogeneous", meaning:"不均一の",              etymology:"hetero（異なる）+ gen（生む）+ eous",      root:"-gen-", level:2},
  {word:"congenital",    meaning:"先天性の",              etymology:"con（共に）+ gen（生む）+ ital（〜の）",   root:"-gen-", level:2},
  {word:"progeny",       meaning:"子孫・後代",            etymology:"pro（前に）+ gen（生む）+ y",              root:"-gen-", level:2},
  {word:"regenerate",    meaning:"再生する",              etymology:"re（再び）+ gen（生む）+ erate（〜する）", root:"-gen-", level:2},
  {word:"degenerate",    meaning:"退化する・堕落する",    etymology:"de（下に）+ gen（生む）+ erate（〜する）", root:"-gen-", level:2},
  {word:"indigenous",    meaning:"土着の・固有の",        etymology:"indige（生まれた）+ nous（〜の）",         root:"-gen-", level:2},
  {word:"genealogy",     meaning:"系譜学・家系",          etymology:"gen（生む）+ ealogy（研究）",              root:"-gen-", level:2},
  {word:"ingenious",     meaning:"独創的な・巧妙な",      etymology:"in（中に）+ gen（生む）+ ious（性質）",    root:"-gen-", level:2},

  // ── -morph-（形・形態） ────────────────────────
  {word:"morphology",    meaning:"形態学",                etymology:"morph（形）+ logy（学）",                  root:"-morph-", level:2},
  {word:"metamorphosis", meaning:"変態・変容",            etymology:"meta（変化）+ morph（形）+ osis（状態）",  root:"-morph-", level:2},
  {word:"amorphous",     meaning:"無定形の・不明確な",    etymology:"a（否定）+ morph（形）+ ous（性質）",      root:"-morph-", level:2},
  {word:"polymorphous",  meaning:"多形の",                etymology:"poly（多くの）+ morph（形）+ ous（性質）", root:"-morph-", level:3},
  {word:"anthropomorphic",meaning:"擬人化した",           etymology:"anthrop（人間）+ morph（形）+ ic（〜の）", root:"-morph-", level:2},
  {word:"dimorphism",    meaning:"二形性",                etymology:"di（二つ）+ morph（形）+ ism（状態）",     root:"-morph-", level:3},
  {word:"morpheme",      meaning:"形態素",                etymology:"morph（形）+ eme（最小単位）",             root:"-morph-", level:3},
  {word:"isomorphic",    meaning:"同形の",                etymology:"iso（等しい）+ morph（形）+ ic（〜の）",   root:"-morph-", level:3},
  {word:"geomorphology", meaning:"地形学",                etymology:"geo（大地）+ morph（形）+ logy（学）",     root:"-morph-", level:3},
  {word:"pseudomorphism",meaning:"擬形",                  etymology:"pseudo（偽の）+ morph（形）+ ism",         root:"-morph-", level:3},
  {word:"morphogenesis", meaning:"形態形成",              etymology:"morph（形）+ genesis（起源）",             root:"-morph-", level:3},
  {word:"morphic",       meaning:"形態の",                etymology:"morph（形）+ ic（〜の）",                  root:"-morph-", level:3},
  {word:"theromorphic",  meaning:"獣形の",                etymology:"thero（獣）+ morph（形）+ ic（〜の）",     root:"-morph-", level:3},

  // ── -chron-（時間） ───────────────────────────
  {word:"chronology",    meaning:"年表・時系列",          etymology:"chron（時間）+ logy（学）",                root:"-chron-", level:2},
  {word:"chronicle",     meaning:"年代記・記録する",      etymology:"chron（時間）+ icle（〜に関する）",        root:"-chron-", level:2},
  {word:"synchronize",   meaning:"同期させる",            etymology:"syn（共に）+ chron（時間）+ ize（〜する）",root:"-chron-", level:1},
  {word:"anachronism",   meaning:"時代錯誤",              etymology:"ana（逆に）+ chron（時間）+ ism（状態）",  root:"-chron-", level:3},
  {word:"asynchronous",  meaning:"非同期の",              etymology:"a（否定）+ syn（共に）+ chron（時間）+ ous",root:"-chron-", level:2},
  {word:"chronic",       meaning:"慢性の",                etymology:"chron（時間）+ ic（〜の）",                root:"-chron-", level:1},
  {word:"chronometer",   meaning:"精密時計",              etymology:"chron（時間）+ meter（測る）",             root:"-chron-", level:2},
  {word:"synchronous",   meaning:"同期の",                etymology:"syn（共に）+ chron（時間）+ ous（〜の）",  root:"-chron-", level:2},
  {word:"diachronic",    meaning:"通時的な",              etymology:"dia（通じて）+ chron（時間）+ ic（〜の）", root:"-chron-", level:3},
  {word:"synchronicity", meaning:"共時性",                etymology:"syn（共に）+ chron（時間）+ icity（性質）",root:"-chron-", level:3},
  {word:"chronobiology", meaning:"時間生物学",            etymology:"chron（時間）+ bio（生命）+ logy（学）",   root:"-chron-", level:3},
  {word:"geochronology", meaning:"地質年代学",            etymology:"geo（大地）+ chron（時間）+ logy（学）",   root:"-chron-", level:3},
  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
