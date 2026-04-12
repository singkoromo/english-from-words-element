/**
 * data-suffix-12.js — 接尾語補充4（-dom, -ing）
 */
(function(){
  var d = [
  // ── -dom（領域・状態・地位） ──────────────────
  {word:"dukedom",     meaning:"公爵領・公爵の地位",    etymology:"duke（公爵）+ dom（領域）",          suffix:"-dom", level:3},
  {word:"earldom",     meaning:"伯爵の地位・伯爵領",    etymology:"earl（伯爵）+ dom（領域）",           suffix:"-dom", level:3},
  {word:"fandom",      meaning:"ファン界・ファン文化",   etymology:"fan（ファン）+ dom（領域）",          suffix:"-dom", level:2},
  {word:"saintdom",    meaning:"聖人の状態",            etymology:"saint（聖人）+ dom（状態）",          suffix:"-dom", level:3},
  {word:"thraldom",    meaning:"束縛・奴隷状態",         etymology:"thrall（奴隷）+ dom（状態）",        suffix:"-dom", level:3},
  {word:"princedom",   meaning:"王子の地位・小国",       etymology:"prince（王子）+ dom（領域）",        suffix:"-dom", level:3},
  {word:"heathendom",  meaning:"異教徒の世界",          etymology:"heathen（異教徒）+ dom（領域）",      suffix:"-dom", level:3},
  {word:"christendom", meaning:"キリスト教世界",        etymology:"christen（キリスト教の）+ dom（領域）",suffix:"-dom", level:3},
  {word:"nerddom",     meaning:"オタク文化・ナード界",   etymology:"nerd（オタク）+ dom（領域）",         suffix:"-dom", level:2},
  {word:"geekdom",     meaning:"ギーク文化・ギーク界",   etymology:"geek（ギーク）+ dom（領域）",         suffix:"-dom", level:2},
  {word:"villadom",    meaning:"郊外住宅地帯の文化",     etymology:"villa（別荘）+ dom（領域）",         suffix:"-dom", level:3},
  {word:"sheepdom",    meaning:"羊のような従順な世界",   etymology:"sheep（羊）+ dom（領域）",            suffix:"-dom", level:3},
  {word:"statedom",    meaning:"国家の地位",            etymology:"state（国家）+ dom（状態）",          suffix:"-dom", level:3},
  {word:"gangdom",     meaning:"ギャング界",             etymology:"gang（一団）+ dom（領域）",          suffix:"-dom", level:3},
  {word:"hipsterdom",  meaning:"ヒップスター文化",       etymology:"hipster（ヒップスター）+ dom（領域）",suffix:"-dom", level:3},
  {word:"puppydom",    meaning:"子犬の時期",             etymology:"puppy（子犬）+ dom（状態）",         suffix:"-dom", level:2},
  {word:"serfdom",     meaning:"農奴制度",               etymology:"serf（農奴）+ dom（状態）",          suffix:"-dom", level:3},
  {word:"coxcombdom",  meaning:"うぬぼれ屋の世界",       etymology:"coxcomb（うぬぼれ屋）+ dom（領域）", suffix:"-dom", level:3},
  {word:"beggarsdom",  meaning:"乞食の世界",             etymology:"beggar（乞食）+ dom（領域）",        suffix:"-dom", level:3},
  {word:"hackerdom",   meaning:"ハッカー文化・ハッカー界",etymology:"hacker（ハッカー）+ dom（領域）",    suffix:"-dom", level:2},
  {word:"rankdom",     meaning:"一般大衆の世界",          etymology:"rank（一般の）+ dom（領域）",        suffix:"-dom", level:3},

  // ── -ing（動名詞・形容詞・現在分詞） ──────────────────
  {word:"reading",     meaning:"読書・読むこと",          etymology:"read（読む）+ ing（動名詞）",        suffix:"-ing", level:0},
  {word:"writing",     meaning:"書くこと・著作",          etymology:"writ（書く）+ ing（動名詞）",        suffix:"-ing", level:0},
  {word:"thinking",    meaning:"考えること・思考",         etymology:"think（考える）+ ing（動名詞）",     suffix:"-ing", level:0},
  {word:"working",     meaning:"働くこと・作業",           etymology:"work（働く）+ ing（動名詞）",        suffix:"-ing", level:0},
  {word:"building",    meaning:"建物・建設",              etymology:"build（建てる）+ ing（動名詞）",     suffix:"-ing", level:0},
  {word:"running",     meaning:"走ること・経営",           etymology:"run（走る）+ ing（動名詞）",         suffix:"-ing", level:0},
  {word:"walking",     meaning:"歩くこと",               etymology:"walk（歩く）+ ing（動名詞）",        suffix:"-ing", level:0},
  {word:"swimming",    meaning:"水泳",                    etymology:"swim（泳ぐ）+ ing（動名詞）",        suffix:"-ing", level:0},
  {word:"speaking",    meaning:"話すこと・スピーチ",       etymology:"speak（話す）+ ing（動名詞）",       suffix:"-ing", level:0},
  {word:"listening",   meaning:"聞くこと",               etymology:"listen（聞く）+ ing（動名詞）",      suffix:"-ing", level:0},
  {word:"caring",      meaning:"思いやりのある・世話",      etymology:"care（気にかける）+ ing（形容詞）",  suffix:"-ing", level:1},
  {word:"exciting",    meaning:"わくわくする・刺激的な",    etymology:"excit（興奮させる）+ ing（形容詞）", suffix:"-ing", level:1},
  {word:"boring",      meaning:"退屈な",                  etymology:"bore（退屈させる）+ ing（形容詞）",  suffix:"-ing", level:1},
  {word:"amazing",     meaning:"驚くべき・素晴らしい",      etymology:"amaz（驚かせる）+ ing（形容詞）",   suffix:"-ing", level:1},
  {word:"promising",   meaning:"有望な・見込みのある",      etymology:"promis（約束する）+ ing（形容詞）",  suffix:"-ing", level:2},
  {word:"demanding",   meaning:"要求の厳しい・きつい",      etymology:"demand（要求する）+ ing（形容詞）",  suffix:"-ing", level:2},
  {word:"rewarding",   meaning:"やりがいのある・割に合う",   etymology:"reward（報いる）+ ing（形容詞）",   suffix:"-ing", level:2},
  {word:"confusing",   meaning:"混乱させる・わかりにくい",   etymology:"confus（混乱させる）+ ing（形容詞）",suffix:"-ing", level:1},
  {word:"surprising",  meaning:"驚くべき・意外な",          etymology:"surpris（驚かせる）+ ing（形容詞）", suffix:"-ing", level:1},
  {word:"inspiring",   meaning:"刺激的な・鼓舞する",        etymology:"inspir（鼓舞する）+ ing（形容詞）",  suffix:"-ing", level:2},
  {word:"refreshing",  meaning:"さわやかな・気持ちいい",     etymology:"refresh（生き返らせる）+ ing（形容詞）",suffix:"-ing", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
