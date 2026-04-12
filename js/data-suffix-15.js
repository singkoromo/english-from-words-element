/**
 * data-suffix-15.js — 接尾語補充7（-ure, -ist）
 */
(function(){
  var d = [
  // ── -ure（行為・状態・結果） ──────────────────
  {word:"pleasure",     meaning:"喜び・楽しみ",          etymology:"pleas（喜ばせる）+ ure（状態）",           suffix:"-ure", level:0},
  {word:"treasure",     meaning:"宝・財産",              etymology:"thesaur（宝庫）+ ure（状態）",            suffix:"-ure", level:0},
  {word:"measure",      meaning:"測定・手段",             etymology:"mens（測る）+ ure（行為）",               suffix:"-ure", level:0},
  {word:"feature",      meaning:"特徴・特集",             etymology:"fact（作る）+ ure（結果）",               suffix:"-ure", level:0},
  {word:"picture",      meaning:"絵・写真",              etymology:"pict（描く）+ ure（結果）",               suffix:"-ure", level:0},
  {word:"mixture",      meaning:"混合物・混合",           etymology:"mixt（混ぜた）+ ure（結果）",             suffix:"-ure", level:1},
  {word:"moisture",     meaning:"湿気・水分",             etymology:"moist（湿った）+ ure（状態）",            suffix:"-ure", level:1},
  {word:"pasture",      meaning:"牧草地・放牧",           etymology:"past（放牧する）+ ure（場所）",           suffix:"-ure", level:1},
  {word:"sculpture",    meaning:"彫刻・彫像",             etymology:"sculp（刻む）+ ure（結果）",              suffix:"-ure", level:1},
  {word:"signature",    meaning:"署名・特徴",             etymology:"sign（印をつける）+ ure（行為）",         suffix:"-ure", level:1},
  {word:"nurture",      meaning:"養育・育てる",           etymology:"nutr（養う）+ ure（行為）",               suffix:"-ure", level:1},
  {word:"venture",      meaning:"冒険・試み",             etymology:"ven（来る）+ ture（行為）",               suffix:"-ure", level:1},
  {word:"gesture",      meaning:"身振り・ジェスチャー",   etymology:"gest（運ぶ・行う）+ ure（行為）",         suffix:"-ure", level:1},
  {word:"posture",      meaning:"姿勢・体勢",             etymology:"pos（置く）+ ure（状態）",                suffix:"-ure", level:1},
  {word:"texture",      meaning:"質感・組織",             etymology:"text（織る）+ ure（結果）",               suffix:"-ure", level:2},
  {word:"structure",    meaning:"構造・建造物",           etymology:"struct（積む）+ ure（結果）",             suffix:"-ure", level:1},
  {word:"lecture",      meaning:"講義・説教",             etymology:"lect（読む）+ ure（行為）",               suffix:"-ure", level:1},
  {word:"capture",      meaning:"捕まえること・占領",     etymology:"cap（掴む）+ ure（行為）",                suffix:"-ure", level:1},
  {word:"manufacture",  meaning:"製造・製品",             etymology:"manu（手）+ fact（作る）+ ure（行為）",   suffix:"-ure", level:2},

  // ── -ist（…する人・主義者） ──────────────────
  {word:"violinist",    meaning:"バイオリン奏者",          etymology:"violin（バイオリン）+ ist（演奏者）",      suffix:"-ist", level:1},
  {word:"botanist",     meaning:"植物学者",               etymology:"botan（植物）+ ist（研究者）",            suffix:"-ist", level:2},
  {word:"economist",    meaning:"経済学者",               etymology:"econom（家計・経済）+ ist（専門家）",     suffix:"-ist", level:2},
  {word:"pharmacist",   meaning:"薬剤師",                 etymology:"pharmac（薬）+ ist（専門家）",            suffix:"-ist", level:2},
  {word:"therapist",    meaning:"療法士・セラピスト",      etymology:"therap（治療）+ ist（専門家）",           suffix:"-ist", level:2},
  {word:"dentist",      meaning:"歯科医",                 etymology:"dent（歯）+ ist（専門家）",               suffix:"-ist", level:1},
  {word:"columnist",    meaning:"コラムニスト",            etymology:"column（欄）+ ist（書く人）",             suffix:"-ist", level:2},
  {word:"extremist",    meaning:"過激主義者",              etymology:"extrem（極端）+ ist（主義者）",           suffix:"-ist", level:2},
  {word:"fundamentalist",meaning:"原理主義者",            etymology:"fundamental（根本）+ ist（主義者）",      suffix:"-ist", level:3},
  {word:"humanist",     meaning:"人文主義者・人道主義者",  etymology:"human（人間）+ ist（主義者）",            suffix:"-ist", level:2},
  {word:"modernist",    meaning:"現代主義者",              etymology:"modern（現代）+ ist（主義者）",           suffix:"-ist", level:2},
  {word:"pacifist",     meaning:"平和主義者",              etymology:"pacif（平和にする）+ ist（主義者）",      suffix:"-ist", level:2},
  {word:"abolitionist", meaning:"廃止論者・奴隷制反対者",  etymology:"abolit（廃止する）+ ion + ist（主張者）", suffix:"-ist", level:3},
  {word:"environmentalist",meaning:"環境主義者",          etymology:"environment（環境）+ al + ist（主義者）", suffix:"-ist", level:2},
  {word:"psychiatrist", meaning:"精神科医",               etymology:"psych（心）+ iatr（治療）+ ist（専門家）",suffix:"-ist", level:3},
  {word:"dermatologist",meaning:"皮膚科医",               etymology:"dermat（皮膚）+ log（学）+ ist（専門家）",suffix:"-ist", level:3},
  {word:"biologist",    meaning:"生物学者",               etymology:"bio（生命）+ log（学）+ ist（専門家）",   suffix:"-ist", level:1},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
