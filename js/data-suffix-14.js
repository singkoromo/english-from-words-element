/**
 * data-suffix-14.js — 接尾語補充6（-ship, -age）
 */
(function(){
  var d = [
  // ── -ship（状態・技能・関係） ──────────────────
  {word:"ownership",       meaning:"所有権・オーナーシップ",  etymology:"own（所有する）+ ship（状態）",           suffix:"-ship", level:1},
  {word:"worship",         meaning:"礼拝・崇拝",             etymology:"worth（価値）+ ship（状態）",            suffix:"-ship", level:2},
  {word:"hardship",        meaning:"苦難・困難",              etymology:"hard（厳しい）+ ship（状態）",           suffix:"-ship", level:2},
  {word:"kinship",         meaning:"親族関係・絆",            etymology:"kin（親族）+ ship（関係）",              suffix:"-ship", level:2},
  {word:"fellowship",      meaning:"仲間意識・親交",          etymology:"fellow（仲間）+ ship（状態）",           suffix:"-ship", level:2},
  {word:"internship",      meaning:"インターンシップ・研修",   etymology:"intern（研修生）+ ship（状態）",         suffix:"-ship", level:1},
  {word:"citizenship",     meaning:"市民権・国籍",            etymology:"citizen（市民）+ ship（状態）",          suffix:"-ship", level:2},
  {word:"championship",    meaning:"選手権・優勝",            etymology:"champion（優勝者）+ ship（状態）",       suffix:"-ship", level:1},
  {word:"apprenticeship",  meaning:"見習い期間・弟子奉公",    etymology:"apprentice（見習い）+ ship（状態）",     suffix:"-ship", level:3},
  {word:"companionship",   meaning:"仲間関係・交友",          etymology:"companion（仲間）+ ship（状態）",        suffix:"-ship", level:2},
  {word:"workmanship",     meaning:"職人技・技量",            etymology:"workman（職人）+ ship（技能）",          suffix:"-ship", level:3},
  {word:"statesmanship",   meaning:"政治家的手腕",            etymology:"statesman（政治家）+ ship（技能）",      suffix:"-ship", level:3},
  {word:"seamanship",      meaning:"航海術・船員技術",         etymology:"seaman（船員）+ ship（技能）",          suffix:"-ship", level:3},
  {word:"penmanship",      meaning:"書道・文字を書く技術",     etymology:"penman（書き手）+ ship（技能）",         suffix:"-ship", level:3},
  {word:"horsemanship",    meaning:"馬術・騎馬技術",          etymology:"horseman（騎手）+ ship（技能）",         suffix:"-ship", level:3},
  {word:"gamesmanship",    meaning:"試合術・駆け引き",         etymology:"gamesman（ゲームの達人）+ ship（技能）", suffix:"-ship", level:3},
  {word:"guardianship",    meaning:"後見人の地位・保護",       etymology:"guardian（後見人）+ ship（状態）",       suffix:"-ship", level:3},
  {word:"censorship",      meaning:"検閲・検閲制度",           etymology:"censor（検閲官）+ ship（状態）",        suffix:"-ship", level:3},
  {word:"dictatorship",    meaning:"独裁政治・独裁政権",        etymology:"dictator（独裁者）+ ship（状態）",      suffix:"-ship", level:2},
  {word:"professorship",   meaning:"教授職・教授の地位",        etymology:"professor（教授）+ ship（状態）",       suffix:"-ship", level:3},

  // ── -age（行為・集合・状態） ──────────────────
  {word:"marriage",   meaning:"結婚・婚姻",               etymology:"marri（結婚する）+ age（行為・状態）",    suffix:"-age", level:0},
  {word:"passage",    meaning:"通路・通過・一節",           etymology:"pass（通る）+ age（行為）",              suffix:"-age", level:1},
  {word:"package",    meaning:"小包・パッケージ",           etymology:"pack（荷造りする）+ age（行為）",         suffix:"-age", level:0},
  {word:"damage",     meaning:"損害・ダメージ",             etymology:"dam（損害）+ age（状態）",               suffix:"-age", level:1},
  {word:"storage",    meaning:"貯蔵・ストレージ",           etymology:"stor（蓄える）+ age（状態）",            suffix:"-age", level:1},
  {word:"mileage",    meaning:"マイル数・走行距離",          etymology:"mile（マイル）+ age（集合）",            suffix:"-age", level:2},
  {word:"spillage",   meaning:"こぼれること・流出",          etymology:"spill（こぼれる）+ age（行為）",         suffix:"-age", level:2},
  {word:"breakage",   meaning:"破損・割れ",                 etymology:"break（壊す）+ age（行為）",             suffix:"-age", level:2},
  {word:"linkage",    meaning:"連結・結びつき",              etymology:"link（結ぶ）+ age（状態）",              suffix:"-age", level:2},
  {word:"drainage",   meaning:"排水・排水設備",             etymology:"drain（排水する）+ age（状態）",         suffix:"-age", level:2},
  {word:"pillage",    meaning:"略奪・略奪品",               etymology:"pill（略奪する）+ age（行為）",           suffix:"-age", level:3},
  {word:"postage",    meaning:"郵便料金",                   etymology:"post（郵便）+ age（費用）",              suffix:"-age", level:1},
  {word:"wreckage",   meaning:"難破・残骸",                 etymology:"wreck（難破する）+ age（状態）",          suffix:"-age", level:2},
  {word:"dosage",     meaning:"投与量・用量",               etymology:"dose（一回分の投与）+ age（状態）",       suffix:"-age", level:2},
  {word:"footage",    meaning:"フィート数・映像フィルム",     etymology:"foot（フィート）+ age（集合）",           suffix:"-age", level:2},
  {word:"parentage",  meaning:"家柄・両親の出自",           etymology:"parent（親）+ age（状態）",              suffix:"-age", level:3},
  {word:"garbage",    meaning:"ゴミ・廃棄物",               etymology:"garb（食べ物の切れ端）+ age（集合）",    suffix:"-age", level:0},
  {word:"courage",    meaning:"勇気・勇敢さ",               etymology:"cor（心）+ age（状態）",                 suffix:"-age", level:1},
  {word:"luggage",    meaning:"手荷物・荷物",               etymology:"lug（重く引きずる）+ age（集合）",        suffix:"-age", level:1},
  {word:"ravage",     meaning:"荒廃させる・破壊",            etymology:"rav（奪う）+ age（行為）",               suffix:"-age", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
