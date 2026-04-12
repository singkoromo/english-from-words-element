/**
 * data-suffix-13.js — 接尾語補充5（-ward, -hood）
 */
(function(){
  var d = [
  // ── -ward（方向・向き） ──────────────────
  {word:"eastward",    meaning:"東へ・東向きの",           etymology:"east（東）+ ward（方向）",           suffix:"-ward", level:1},
  {word:"westward",    meaning:"西へ・西向きの",           etymology:"west（西）+ ward（方向）",           suffix:"-ward", level:1},
  {word:"northward",   meaning:"北へ・北向きの",           etymology:"north（北）+ ward（方向）",          suffix:"-ward", level:1},
  {word:"southward",   meaning:"南へ・南向きの",           etymology:"south（南）+ ward（方向）",          suffix:"-ward", level:1},
  {word:"seaward",     meaning:"海へ・海の方向への",        etymology:"sea（海）+ ward（方向）",            suffix:"-ward", level:2},
  {word:"skyward",     meaning:"空へ・上方へ",             etymology:"sky（空）+ ward（方向）",            suffix:"-ward", level:2},
  {word:"windward",    meaning:"風上の・風に向かって",      etymology:"wind（風）+ ward（方向）",           suffix:"-ward", level:2},
  {word:"leeward",     meaning:"風下の・風下へ",           etymology:"lee（風下）+ ward（方向）",          suffix:"-ward", level:3},
  {word:"sunward",     meaning:"太陽の方へ",               etymology:"sun（太陽）+ ward（方向）",          suffix:"-ward", level:2},
  {word:"landward",    meaning:"陸地の方へ",               etymology:"land（陸）+ ward（方向）",           suffix:"-ward", level:2},
  {word:"leftward",    meaning:"左へ・左方向への",          etymology:"left（左）+ ward（方向）",           suffix:"-ward", level:1},
  {word:"rightward",   meaning:"右へ・右方向への",          etymology:"right（右）+ ward（方向）",          suffix:"-ward", level:1},
  {word:"afterward",   meaning:"その後・後で",              etymology:"after（後）+ ward（方向）",          suffix:"-ward", level:0},
  {word:"toward",      meaning:"〜に向かって",              etymology:"to（〜へ）+ ward（方向）",           suffix:"-ward", level:0},
  {word:"thereafter",  meaning:"その後・それ以降",          etymology:"there（そこ）+ after（後）+ ward（方向）",suffix:"-ward", level:2},
  {word:"froward",     meaning:"反抗的な・従わない",         etymology:"fro（離れて）+ ward（方向）",        suffix:"-ward", level:3},
  {word:"shoreward",   meaning:"岸の方へ",                 etymology:"shore（岸）+ ward（方向）",          suffix:"-ward", level:2},
  {word:"groundward",  meaning:"地面の方へ",               etymology:"ground（地面）+ ward（方向）",       suffix:"-ward", level:2},
  {word:"starward",    meaning:"星の方へ",                  etymology:"star（星）+ ward（方向）",           suffix:"-ward", level:2},
  {word:"cityward",    meaning:"都市の方へ",               etymology:"city（都市）+ ward（方向）",         suffix:"-ward", level:2},

  // ── -hood（状態・時期・集団） ──────────────────
  {word:"boyhood",     meaning:"少年時代",                 etymology:"boy（少年）+ hood（時期）",          suffix:"-hood", level:1},
  {word:"girlhood",    meaning:"少女時代",                 etymology:"girl（少女）+ hood（時期）",         suffix:"-hood", level:1},
  {word:"priesthood",  meaning:"聖職・聖職者集団",          etymology:"priest（聖職者）+ hood（状態）",     suffix:"-hood", level:3},
  {word:"knighthood",  meaning:"騎士の地位・騎士道",        etymology:"knight（騎士）+ hood（状態）",      suffix:"-hood", level:2},
  {word:"sisterhood",  meaning:"姉妹関係・女性の絆",        etymology:"sister（姉妹）+ hood（集団）",       suffix:"-hood", level:2},
  {word:"motherhood",  meaning:"母性・母であること",         etymology:"mother（母）+ hood（状態）",        suffix:"-hood", level:1},
  {word:"fatherhood",  meaning:"父性・父であること",         etymology:"father（父）+ hood（状態）",        suffix:"-hood", level:1},
  {word:"widowhood",   meaning:"未亡人の状態",              etymology:"widow（未亡人）+ hood（状態）",      suffix:"-hood", level:2},
  {word:"statehood",   meaning:"州の地位・国家の状態",       etymology:"state（州・国家）+ hood（状態）",   suffix:"-hood", level:3},
  {word:"selfhood",    meaning:"自己・アイデンティティ",     etymology:"self（自己）+ hood（状態）",         suffix:"-hood", level:3},
  {word:"godhood",     meaning:"神性・神の状態",            etymology:"god（神）+ hood（状態）",            suffix:"-hood", level:3},
  {word:"womanhood",   meaning:"女性であること・女性期",      etymology:"woman（女性）+ hood（状態）",       suffix:"-hood", level:2},
  {word:"victimhood",  meaning:"被害者の状態",              etymology:"victim（被害者）+ hood（状態）",     suffix:"-hood", level:3},
  {word:"sainthood",   meaning:"聖人の状態",               etymology:"saint（聖人）+ hood（状態）",        suffix:"-hood", level:3},
  {word:"adulthood",   meaning:"成年・大人の時期",          etymology:"adult（大人）+ hood（時期）",        suffix:"-hood", level:1},
  {word:"widhood",     meaning:"妻であること",              etymology:"wid（妻）+ hood（状態）",            suffix:"-hood", level:3},
  {word:"monkhood",    meaning:"修道士であること",           etymology:"monk（修道士）+ hood（状態）",       suffix:"-hood", level:3},
  {word:"wifehood",    meaning:"妻であること",              etymology:"wife（妻）+ hood（状態）",           suffix:"-hood", level:2},
  {word:"orphanhood",  meaning:"孤児の状態",               etymology:"orphan（孤児）+ hood（状態）",       suffix:"-hood", level:3},
  {word:"bachelorhood",meaning:"独身男性の状態",            etymology:"bachelor（独身男性）+ hood（状態）",suffix:"-hood", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
