/**
 * data-prefix-16.js — 接頭語補充6（tri-, ambi-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── tri-（3・三） ──────────────────
  {word:"tricolor",       meaning:"三色の・三色旗",              etymology:"tri（3）+ color（色）",                        prefix:"tri-", level:1},
  {word:"tricorn",        meaning:"三角帽子",                    etymology:"tri（3）+ corn（角）",                         prefix:"tri-", level:2},
  {word:"trigonometry",   meaning:"三角法・三角測量",            etymology:"tri（3）+ gono（角）+ metry（測定）",           prefix:"tri-", level:2},
  {word:"trillion",       meaning:"1兆",                        etymology:"tri（3）+ million（100万）→100万の3乗",         prefix:"tri-", level:1},
  {word:"tripartite",     meaning:"三者間の・三部に分かれた",    etymology:"tri（3）+ partite（分割された）",               prefix:"tri-", level:2},
  {word:"triplet",        meaning:"三つ子・三つ組み",            etymology:"tri（3）+ plet（折り重なり）",                  prefix:"tri-", level:1},
  {word:"trivial",        meaning:"些細な・取るに足らない",      etymology:"tri（3）+ via（道）→三叉路で起きる雑談",        prefix:"tri-", level:1},
  {word:"tribunal",       meaning:"裁判所・法廷",                etymology:"tri（3）+ bunal（長・支配者）→三人の裁判官",    prefix:"tri-", level:2},
  {word:"tributary",      meaning:"支流・支川",                  etymology:"tri（3の意から）+ butary（与える）→本流に注ぐ", prefix:"tri-", level:2},
  {word:"trichotomy",     meaning:"三分法・三区分",              etymology:"tri（3）+ chotomy（切ること）",                 prefix:"tri-", level:3},
  {word:"trilateral",     meaning:"三辺の・三者間の",            etymology:"tri（3）+ lateral（側面）",                    prefix:"tri-", level:2},
  {word:"triumvirate",    meaning:"三頭政治・三人組",            etymology:"tri（3）+ umvir（男・支配者）+ ate（状態）",    prefix:"tri-", level:3},
  {word:"triptych",       meaning:"三連祭壇画・三連作",          etymology:"tri（3）+ ptych（折り畳み）",                   prefix:"tri-", level:3},
  {word:"trifoliate",     meaning:"三葉の・三枚の葉を持つ",      etymology:"tri（3）+ foliate（葉の）",                    prefix:"tri-", level:3},
  {word:"triplicate",     meaning:"三部作成の・三通の",          etymology:"tri（3）+ plicate（折り畳む）",                 prefix:"tri-", level:2},
  {word:"trioxide",       meaning:"三酸化物",                    etymology:"tri（3）+ oxide（酸化物）",                    prefix:"tri-", level:2},
  {word:"trivalent",      meaning:"三価の・三原子価の",          etymology:"tri（3）+ valent（価・力）",                    prefix:"tri-", level:3},
  {word:"trifocal",       meaning:"三焦点の・三焦点レンズ",      etymology:"tri（3）+ focal（焦点の）",                    prefix:"tri-", level:2},
  {word:"triennial",      meaning:"3年ごとの・3年に1度の",       etymology:"tri（3）+ ennial（年）",                       prefix:"tri-", level:2},
  {word:"trinomial",      meaning:"三項式・三名法の",            etymology:"tri（3）+ nomial（名前・項）",                  prefix:"tri-", level:3},

  // ── ambi-（両方・周囲） ──────────────────
  {word:"ambidexterity",  meaning:"両手利き・両用巧みさ",        etymology:"ambi（両方）+ dexterity（器用さ）",             prefix:"ambi-", level:2},
  {word:"ambiversion",    meaning:"両向性・外向と内向の中間",    etymology:"ambi（両方）+ version（向き）",                 prefix:"ambi-", level:3},
  {word:"ambisexual",     meaning:"両性の・両性愛の",            etymology:"ambi（両方）+ sexual（性の）",                  prefix:"ambi-", level:2},
  {word:"ambiguously",    meaning:"曖昧に・不明確に",            etymology:"ambi（両方）+ iguously（導く）→二方向に導く",   prefix:"ambi-", level:2},
  {word:"ambilateral",    meaning:"両側の・双側の",              etymology:"ambi（両方）+ lateral（側の）",                 prefix:"ambi-", level:3},
  {word:"ambiophony",     meaning:"両耳音響・立体音響再生",      etymology:"ambi（両方・周囲）+ phony（音・音響）",          prefix:"ambi-", level:3},
  {word:"ambisyllabic",   meaning:"両音節帰属の（音声学）",      etymology:"ambi（両方）+ syllabic（音節の）",              prefix:"ambi-", level:3},
  {word:"ambivalence",    meaning:"相反する感情・両価感情",      etymology:"ambi（両方）+ valence（価・力）",               prefix:"ambi-", level:2},
  {word:"ambition",       meaning:"野心・向上心",                etymology:"ambi（周囲に）+ ition（行くこと）→票を求め歩く", prefix:"ambi-", level:0},
  {word:"ambilocal",      meaning:"両系居住の（人類学）",        etymology:"ambi（両方）+ local（場所の）",                 prefix:"ambi-", level:3},
  {word:"ambipolar",      meaning:"両極性の（物理・電気）",      etymology:"ambi（両方）+ polar（極の）",                   prefix:"ambi-", level:3},
  {word:"ambiregnal",     meaning:"二重統治の・両王国の",        etymology:"ambi（両方）+ regnal（王の・統治の）",           prefix:"ambi-", level:3},
  {word:"ambichronous",   meaning:"時間的に両方向の",            etymology:"ambi（両方）+ chronous（時間の）",              prefix:"ambi-", level:3},
  {word:"ambilineal",     meaning:"双系的な（父系・母系両方）",  etymology:"ambi（両方）+ lineal（系統の）",               prefix:"ambi-", level:3},
  {word:"ambifix",        meaning:"両置辞・前後に付く接辞",      etymology:"ambi（両方）+ fix（付けること）",               prefix:"ambi-", level:3},
  {word:"ambiloquent",    meaning:"二通りに解釈できる言い方の",  etymology:"ambi（両方）+ loquent（話す）",                 prefix:"ambi-", level:3},
  {word:"ambisinister",   meaning:"両手とも不器用な",            etymology:"ambi（両方）+ sinister（左手の・不器用な）",    prefix:"ambi-", level:3},
  {word:"ambisonic",      meaning:"全方位音響の・立体音響の",    etymology:"ambi（周囲・両方）+ sonic（音の）",             prefix:"ambi-", level:2},
  {word:"ambitendency",   meaning:"相反する傾向・両向き衝動",    etymology:"ambi（両方）+ tendency（傾向）",               prefix:"ambi-", level:3},
  {word:"ambiequal",      meaning:"両等価の・双方向に等しい",    etymology:"ambi（両方）+ equal（等しい）",                prefix:"ambi-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
