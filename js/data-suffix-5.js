/**
 * data-suffix-5.js — 接尾語データ（-esque, -oid, -phyte, -cide, -gamy等）
 * 形式: { word, meaning, etymology, suffix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -esque（〜風の・〜のような） ──────────────────
  {word:"picturesque",   meaning:"絵のように美しい",          etymology:"picture（絵）+ esque（〜風の）",            suffix:"-esque", level:2},
  {word:"grotesque",     meaning:"グロテスクな・奇怪な",      etymology:"grotto（洞窟）+ esque（〜風の）",           suffix:"-esque", level:2},
  {word:"kafkaesque",    meaning:"カフカ風の・不条理な",      etymology:"Kafka（カフカ）+ esque（〜風の）",          suffix:"-esque", level:3},
  {word:"arabesque",     meaning:"アラベスク（装飾模様）",    etymology:"Arabic（アラビアの）+ esque（〜風の）",     suffix:"-esque", level:2},
  {word:"romanesque",    meaning:"ロマネスク様式の",          etymology:"Roman（ローマの）+ esque（〜風の）",        suffix:"-esque", level:2},
  {word:"statuesque",    meaning:"彫像のような",              etymology:"statue（彫像）+ esque（〜風の）",           suffix:"-esque", level:2},
  {word:"burlesque",     meaning:"バーレスク・滑稽な作品",    etymology:"burla（冗談）+ esque（〜風の）",            suffix:"-esque", level:3},
  {word:"humoresque",    meaning:"ユーモレスク（音楽）",      etymology:"humor（ユーモア）+ esque（〜風の）",        suffix:"-esque", level:3},
  {word:"romanticesque", meaning:"ロマンチック風の",          etymology:"romantic（ロマンチックな）+ esque（〜風の）",suffix:"-esque", level:3},
  {word:"moresque",      meaning:"ムーア様式の",              etymology:"Moor（ムーア人）+ esque（〜風の）",         suffix:"-esque", level:3},
  {word:"gardenesque",   meaning:"自然風景式庭園の",          etymology:"garden（庭園）+ esque（〜風の）",           suffix:"-esque", level:3},
  {word:"soldieresque",  meaning:"軍人風の",                  etymology:"soldier（軍人）+ esque（〜風の）",          suffix:"-esque", level:3},
  {word:"clownesque",    meaning:"道化師風の",                etymology:"clown（道化師）+ esque（〜風の）",          suffix:"-esque", level:3},
  {word:"operaesque",    meaning:"オペラ風の",                etymology:"opera（オペラ）+ esque（〜風の）",          suffix:"-esque", level:3},

  // ── -oid（〜に似た・〜形の） ──────────────────
  {word:"humanoid",      meaning:"人間に似た存在・ヒューマノイド",etymology:"human（人間）+ oid（〜に似た）",        suffix:"-oid", level:1},
  {word:"android",       meaning:"アンドロイド・人型ロボット", etymology:"andro（人）+ oid（〜に似た）",             suffix:"-oid", level:1},
  {word:"asteroid",      meaning:"小惑星",                    etymology:"aster（星）+ oid（〜に似た）",             suffix:"-oid", level:1},
  {word:"spheroid",      meaning:"回転楕円体",                etymology:"sphere（球）+ oid（〜に似た）",            suffix:"-oid", level:2},
  {word:"ovoid",         meaning:"卵形の",                    etymology:"ovo（卵）+ oid（〜の形）",                suffix:"-oid", level:2},
  {word:"trapezoid",     meaning:"台形・不等辺四辺形",         etymology:"trapeze（台形）+ oid（〜の形）",           suffix:"-oid", level:2},
  {word:"paranoid",      meaning:"偏執症的な・パラノイアの",   etymology:"para（異常な）+ noid（精神）",             suffix:"-oid", level:2},
  {word:"thyroid",       meaning:"甲状腺の",                  etymology:"thyreo（盾形）+ oid（〜に似た）",          suffix:"-oid", level:2},
  {word:"crystalloid",   meaning:"晶質の・結晶状の",          etymology:"crystal（結晶）+ oid（〜に似た）",         suffix:"-oid", level:3},
  {word:"factoid",       meaning:"事実に見せかけた偽情報",     etymology:"fact（事実）+ oid（〜に似た）",            suffix:"-oid", level:3},
  {word:"alkaloid",      meaning:"アルカロイド",              etymology:"alkali（アルカリ）+ oid（〜に似た）",      suffix:"-oid", level:3},
  {word:"steroid",       meaning:"ステロイド",                etymology:"stero（固体）+ oid（〜に似た）",           suffix:"-oid", level:2},
  {word:"mongoloid",     meaning:"蒙古人種の（歴史的分類）",   etymology:"Mongol（モンゴル）+ oid（〜に似た）",      suffix:"-oid", level:3},
  {word:"rhomboid",      meaning:"斜方形の",                  etymology:"rhomb（菱形）+ oid（〜の形）",            suffix:"-oid", level:3},
  {word:"planetoid",     meaning:"小惑星",                    etymology:"planet（惑星）+ oid（〜に似た）",          suffix:"-oid", level:2},

  // ── -phyte（植物・生物体） ──────────────────
  {word:"epiphyte",      meaning:"着生植物・気生植物",         etymology:"epi（上に）+ phyte（植物）",               suffix:"-phyte", level:3},
  {word:"halophyte",     meaning:"塩生植物",                  etymology:"halo（塩）+ phyte（植物）",               suffix:"-phyte", level:3},
  {word:"hydrophyte",    meaning:"水生植物",                  etymology:"hydro（水）+ phyte（植物）",              suffix:"-phyte", level:3},
  {word:"xerophyte",     meaning:"乾燥地植物",                etymology:"xero（乾燥）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"neophyte",      meaning:"初心者・新参者",             etymology:"neo（新しい）+ phyte（育つもの）",        suffix:"-phyte", level:2},
  {word:"lithophyte",    meaning:"岩生植物",                  etymology:"litho（岩）+ phyte（植物）",              suffix:"-phyte", level:3},
  {word:"cryophyte",     meaning:"雪氷植物",                  etymology:"cryo（寒冷）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"geophyte",      meaning:"地中植物",                  etymology:"geo（土地）+ phyte（植物）",              suffix:"-phyte", level:3},
  {word:"aerophyte",     meaning:"気生植物",                  etymology:"aero（空気）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"saprophyte",    meaning:"腐生植物",                  etymology:"sapro（腐敗）+ phyte（植物）",            suffix:"-phyte", level:3},
  {word:"orophyte",      meaning:"山地植物",                  etymology:"oro（山）+ phyte（植物）",               suffix:"-phyte", level:3},
  {word:"mesophyte",     meaning:"中生植物",                  etymology:"meso（中間）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"phanerophyte",  meaning:"高木植物（地上植物）",       etymology:"phanero（見える）+ phyte（植物）",        suffix:"-phyte", level:3},
  {word:"therophyte",    meaning:"一年生植物",                etymology:"thero（夏）+ phyte（植物）",             suffix:"-phyte", level:3},

  // ── -cide（殺すもの・殺すこと） ──────────────────
  {word:"homicide",      meaning:"殺人",                      etymology:"homo（人）+ cide（殺す）",                suffix:"-cide", level:2},
  {word:"suicide",       meaning:"自殺",                      etymology:"sui（自分）+ cide（殺す）",               suffix:"-cide", level:1},
  {word:"genocide",      meaning:"大量虐殺・ジェノサイド",    etymology:"geno（種族）+ cide（殺す）",              suffix:"-cide", level:2},
  {word:"herbicide",     meaning:"除草剤",                    etymology:"herbi（草）+ cide（殺す）",               suffix:"-cide", level:2},
  {word:"pesticide",     meaning:"農薬・殺虫剤",               etymology:"pest（害虫）+ cide（殺す）",              suffix:"-cide", level:1},
  {word:"infanticide",   meaning:"嬰児殺し",                  etymology:"infant（乳児）+ cide（殺す）",            suffix:"-cide", level:3},
  {word:"regicide",      meaning:"国王殺し",                  etymology:"regi（王）+ cide（殺す）",               suffix:"-cide", level:3},
  {word:"fratricide",    meaning:"兄弟殺し・同士討ち",         etymology:"fratri（兄弟）+ cide（殺す）",            suffix:"-cide", level:3},
  {word:"bactericide",   meaning:"殺菌剤",                    etymology:"bacteria（細菌）+ cide（殺す）",          suffix:"-cide", level:2},
  {word:"fungicide",     meaning:"殺菌剤・抗真菌剤",           etymology:"fungi（菌類）+ cide（殺す）",             suffix:"-cide", level:2},
  {word:"matricide",     meaning:"母殺し",                    etymology:"matri（母）+ cide（殺す）",               suffix:"-cide", level:3},
  {word:"patricide",     meaning:"父殺し",                    etymology:"patri（父）+ cide（殺す）",               suffix:"-cide", level:3},
  {word:"vermicide",     meaning:"駆虫剤",                    etymology:"vermi（虫）+ cide（殺す）",               suffix:"-cide", level:3},
  {word:"virucide",      meaning:"ウイルス殺滅剤",             etymology:"virus（ウイルス）+ cide（殺す）",          suffix:"-cide", level:3},
  {word:"spermicide",    meaning:"殺精子剤",                  etymology:"sperm（精子）+ cide（殺す）",             suffix:"-cide", level:3},
  {word:"arachnicide",   meaning:"殺ダニ剤",                  etymology:"arachni（クモ）+ cide（殺す）",           suffix:"-cide", level:3},
  {word:"parasiticde",   meaning:"殺寄生虫剤",                etymology:"parasit（寄生虫）+ cide（殺す）",          suffix:"-cide", level:3},

  // ── -gamy（婚姻・生殖） ──────────────────
  {word:"monogamy",      meaning:"一夫一婦制",                etymology:"mono（一つ）+ gamy（婚姻）",              suffix:"-gamy", level:2},
  {word:"polygamy",      meaning:"多妻婚・複婚",               etymology:"poly（多くの）+ gamy（婚姻）",            suffix:"-gamy", level:2},
  {word:"bigamy",        meaning:"重婚",                      etymology:"bi（二つ）+ gamy（婚姻）",               suffix:"-gamy", level:2},
  {word:"exogamy",       meaning:"族外婚",                    etymology:"exo（外の）+ gamy（婚姻）",              suffix:"-gamy", level:3},
  {word:"endogamy",      meaning:"族内婚",                    etymology:"endo（内の）+ gamy（婚姻）",             suffix:"-gamy", level:3},
  {word:"misogamy",      meaning:"結婚嫌い",                  etymology:"miso（嫌い）+ gamy（婚姻）",             suffix:"-gamy", level:3},
  {word:"hypergamy",     meaning:"高階層との婚姻",             etymology:"hyper（上の）+ gamy（婚姻）",            suffix:"-gamy", level:3},
  {word:"agamy",         meaning:"無婚姻・無配偶生殖",         etymology:"a（否定）+ gamy（婚姻）",               suffix:"-gamy", level:3},
  {word:"allogamy",      meaning:"他家受粉",                  etymology:"allo（他の）+ gamy（生殖）",             suffix:"-gamy", level:3},
  {word:"autogamy",      meaning:"自家受粉",                  etymology:"auto（自分）+ gamy（生殖）",             suffix:"-gamy", level:3},
  {word:"cryptogamy",    meaning:"隠花植物（胞子植物）",       etymology:"crypto（隠れた）+ gamy（生殖）",         suffix:"-gamy", level:3},
  {word:"heterogamy",    meaning:"異形配偶子生殖",             etymology:"hetero（異なる）+ gamy（生殖）",         suffix:"-gamy", level:3},
  {word:"isogamy",       meaning:"同形配偶子生殖",             etymology:"iso（等しい）+ gamy（生殖）",            suffix:"-gamy", level:3},
  {word:"oogamy",        meaning:"卵配偶子生殖",              etymology:"oo（卵）+ gamy（生殖）",                suffix:"-gamy", level:3},
  ];
  if(typeof window !== 'undefined' && window.VOCAB_DATA) window.VOCAB_DATA.push(...d);
  else if(typeof module !== 'undefined') module.exports = d;
})();
