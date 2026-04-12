/**
 * data-prefix-11.js — 接頭語補充1（macro-, demi-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── macro-（大きい・長い・全体的な） ──────────────────
  {word:"macrostructure",    meaning:"大構造・マクロ構造",          etymology:"macro（大きい）+ structure（構造）",                prefix:"macro-", level:2},
  {word:"macroevolution",    meaning:"大進化・種を超えた進化",       etymology:"macro（大きい）+ evolution（進化）",                 prefix:"macro-", level:3},
  {word:"macroorganism",     meaning:"肉眼で見える生物",             etymology:"macro（大きい）+ organism（生物）",                  prefix:"macro-", level:2},
  {word:"macrophotography",  meaning:"マクロ写真・接写撮影",         etymology:"macro（大きい）+ photography（写真撮影）",            prefix:"macro-", level:2},
  {word:"macroanalysis",     meaning:"巨視的分析・大規模分析",       etymology:"macro（大きい）+ analysis（分析）",                  prefix:"macro-", level:3},
  {word:"macrofossil",       meaning:"大型化石・肉眼で見える化石",   etymology:"macro（大きい）+ fossil（化石）",                    prefix:"macro-", level:2},
  {word:"macrolevel",        meaning:"マクロレベル・大規模な水準",   etymology:"macro（大きい）+ level（水準）",                     prefix:"macro-", level:2},
  {word:"macroenvironment",  meaning:"外部環境・マクロ環境",         etymology:"macro（大きい）+ environment（環境）",               prefix:"macro-", level:2},
  {word:"macrocephalic",     meaning:"大頭症の・頭部が大きい",       etymology:"macro（大きい）+ cephalic（頭の）",                  prefix:"macro-", level:3},
  {word:"macrocycle",        meaning:"大環状化合物・長周期",         etymology:"macro（大きい）+ cycle（環・周期）",                  prefix:"macro-", level:3},
  {word:"macroeconomic",     meaning:"マクロ経済の",                 etymology:"macro（大きい）+ economic（経済の）",                 prefix:"macro-", level:1},
  {word:"macrobiotics",      meaning:"マクロビオティクス・長寿食法", etymology:"macro（大きい・長い）+ biotics（生命に関する）",      prefix:"macro-", level:2},
  {word:"macromolecule",     meaning:"高分子・巨大分子",             etymology:"macro（大きい）+ molecule（分子）",                  prefix:"macro-", level:2},
  {word:"macroscale",        meaning:"巨視的規模・大規模",           etymology:"macro（大きい）+ scale（規模）",                     prefix:"macro-", level:2},
  {word:"macroworld",        meaning:"マクロの世界・肉眼で見える世界",etymology:"macro（大きい）+ world（世界）",                   prefix:"macro-", level:1},
  {word:"macroclimate",      meaning:"大気候・広域気候",             etymology:"macro（大きい・広い）+ climate（気候）",              prefix:"macro-", level:2},
  {word:"macroinstruction",  meaning:"マクロ命令・複合命令",         etymology:"macro（大きい）+ instruction（命令）",               prefix:"macro-", level:3},
  {word:"macrofauna",        meaning:"大型動物群・肉眼で見える動物", etymology:"macro（大きい）+ fauna（動物群）",                   prefix:"macro-", level:3},
  {word:"macroflora",        meaning:"大型植物群・肉眼で見える植物", etymology:"macro（大きい）+ flora（植物群）",                   prefix:"macro-", level:3},
  {word:"macromutation",     meaning:"大突然変異・大規模な突然変異", etymology:"macro（大きい）+ mutation（突然変異）",               prefix:"macro-", level:3},
  {word:"macrostate",        meaning:"巨視的状態・マクロ状態",       etymology:"macro（大きい・全体的な）+ state（状態）",            prefix:"macro-", level:3},
  {word:"macrolinguistics",  meaning:"大言語学・言語の社会的研究",   etymology:"macro（大きい）+ linguistics（言語学）",              prefix:"macro-", level:3},
  {word:"macromarket",       meaning:"大市場・巨大市場",             etymology:"macro（大きい）+ market（市場）",                    prefix:"macro-", level:1},
  {word:"macropolicy",       meaning:"マクロ政策・大規模政策",       etymology:"macro（大きい）+ policy（政策）",                    prefix:"macro-", level:2},
  {word:"macrotrend",        meaning:"大きな潮流・マクロトレンド",   etymology:"macro（大きい）+ trend（傾向・潮流）",               prefix:"macro-", level:1},

  // ── demi-（半分・一部・準） ──────────────────
  {word:"demitone",          meaning:"半音・半音程",                 etymology:"demi（半分）+ tone（音）",                          prefix:"demi-", level:2},
  {word:"demiworld",         meaning:"裏社会・半世界",               etymology:"demi（半分）+ world（世界）→社会の周縁部",           prefix:"demi-", level:3},
  {word:"demiglaze",         meaning:"デミグラス（半分に詰めたソース）",etymology:"demi（半分）+ glaze（釉薬・つや）→煮詰めたソース", prefix:"demi-", level:2},
  {word:"demirelief",        meaning:"半浮き彫り",                   etymology:"demi（半分）+ relief（浮き彫り）",                   prefix:"demi-", level:3},
  {word:"demirep",           meaning:"評判が怪しい女性",             etymology:"demi（半分）+ rep（reputation 評判）",               prefix:"demi-", level:3},
  {word:"demimask",          meaning:"半仮面・目元だけの仮面",       etymology:"demi（半分）+ mask（仮面）",                         prefix:"demi-", level:2},
  {word:"demicanton",        meaning:"準カントン・スイスの半州",     etymology:"demi（半分）+ canton（州・地域）",                   prefix:"demi-", level:3},
  {word:"demibastion",       meaning:"半稜堡・半要塞",               etymology:"demi（半分）+ bastion（稜堡・要塞の突出部）",        prefix:"demi-", level:3},
  {word:"demilune",          meaning:"三日月形・半月形の防御工事",   etymology:"demi（半分）+ lune（月）→半月形",                    prefix:"demi-", level:3},
  {word:"demipique",         meaning:"半先尖鞍・軽騎兵用の鞍",      etymology:"demi（半分）+ pique（先端の尖り）",                  prefix:"demi-", level:3},
  {word:"demivierge",        meaning:"純潔を守る女性・半処女",       etymology:"demi（半分）+ vierge（フランス語：処女）",            prefix:"demi-", level:3},
  {word:"demifigure",        meaning:"半身像・上半身の彫刻",         etymology:"demi（半分）+ figure（形・人物像）",                 prefix:"demi-", level:2},
  {word:"demipension",       meaning:"半額宿泊・朝夕2食付き宿泊",   etymology:"demi（半分）+ pension（宿泊施設・年金）",             prefix:"demi-", level:2},
  {word:"demiglass",         meaning:"半光沢の・セミグロス",         etymology:"demi（半分）+ glass（光沢）",                        prefix:"demi-", level:2},
  {word:"demisuit",          meaning:"半スーツ・ハーフスーツ",       etymology:"demi（半分）+ suit（スーツ）",                       prefix:"demi-", level:1},
  {word:"demihero",          meaning:"準英雄・半英雄的人物",         etymology:"demi（半分）+ hero（英雄）",                         prefix:"demi-", level:2},
  {word:"demidozen",         meaning:"半ダース・6個",               etymology:"demi（半分）+ dozen（1ダース＝12）",                  prefix:"demi-", level:1},
  {word:"demisemitone",      meaning:"四分の一音",                   etymology:"demi（半分）+ semi（半分）+ tone（音）",              prefix:"demi-", level:3},
  {word:"demiofficial",      meaning:"半公式の・準公式の",           etymology:"demi（半分）+ official（公式の）",                   prefix:"demi-", level:2},
  {word:"demilitarize",      meaning:"非武装化する・軍備を縮小する", etymology:"demi（半分・除去）+ militarize（軍事化する）",        prefix:"demi-", level:2},
  {word:"demilife",          meaning:"半減期（放射性物質の）",       etymology:"demi（半分）+ life（寿命）→半分に減る期間",          prefix:"demi-", level:2},
  {word:"demicolumn",        meaning:"半円柱・壁付き半柱",           etymology:"demi（半分）+ column（円柱）",                       prefix:"demi-", level:3},
  {word:"demibarrier",       meaning:"半遮断・部分的な障壁",         etymology:"demi（半分）+ barrier（障壁）",                      prefix:"demi-", level:2},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
