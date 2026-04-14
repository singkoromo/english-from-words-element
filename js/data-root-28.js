/**
 * data-root-28.js — 語根データ（-gest-, -fug-, -later-, -lun-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -gest-（運ぶ・持ち込む） ──────────────────
  {word:"gesture",      meaning:"身振り・ジェスチャー",     etymology:"gest（運ぶ）+ ure（行為）→体で伝える",        root:"-gest-", level:1},
  {word:"suggest",      meaning:"提案する・示唆する",       etymology:"sug（下から）+ gest（運ぶ）→下から持ち込む",  root:"-gest-", level:1},
  {word:"suggestion",   meaning:"提案・示唆",               etymology:"suggest（提案する）+ ion（行為）",             root:"-gest-", level:1},
  {word:"digest",       meaning:"消化する・要約",           etymology:"di（分けて）+ gest（運ぶ）→分解して運ぶ",      root:"-gest-", level:2},
  {word:"digestion",    meaning:"消化・消化作用",           etymology:"digest（消化する）+ ion（行為）",             root:"-gest-", level:2},
  {word:"ingest",       meaning:"摂取する・飲み込む",       etymology:"in（中に）+ gest（運ぶ）",                    root:"-gest-", level:2},
  {word:"congestion",   meaning:"渋滞・混雑・充血",         etymology:"con（共に）+ gest（運ぶ）+ ion→詰め込む",      root:"-gest-", level:2},
  {word:"gestation",    meaning:"妊娠期間・熟成",           etymology:"gest（運ぶ）+ ation（期間）→育んで運ぶ",       root:"-gest-", level:3},
  {word:"belligerent",  meaning:"好戦的な・交戦中の",       etymology:"belli（戦争）+ ger（行う）+ ent（〜の）",      root:"-gest-", level:3},
  {word:"exaggerate",   meaning:"誇張する",                etymology:"ex（外に）+ aggerat（積み重ねる）+ e",         root:"-gest-", level:2},

  // ── -fug-（逃げる・避ける） ──────────────────
  {word:"fugitive",     meaning:"逃亡者・逃げる",           etymology:"fug（逃げる）+ itive（〜の人）",              root:"-fug-", level:2},
  {word:"refuge",       meaning:"避難所・逃げ場",           etymology:"re（再び）+ fug（逃げる）+ e→逃げ込む",       root:"-fug-", level:2},
  {word:"refugee",      meaning:"難民・避難民",             etymology:"refuge（避難）+ ee（〜の人）",                root:"-fug-", level:2},
  {word:"centrifugal",  meaning:"遠心力の",                etymology:"centri（中心）+ fug（逃げる）+ al",            root:"-fug-", level:3},
  {word:"subterfuge",   meaning:"言い逃れ・策略",           etymology:"subter（下に）+ fug（逃げる）+ e",             root:"-fug-", level:3},
  {word:"fugue",        meaning:"遁走曲・フーガ",           etymology:"fug（逃げる）+ ue←ラテン語fuga",              root:"-fug-", level:3},
  {word:"febrifuge",    meaning:"解熱剤",                  etymology:"febri（熱）+ fug（逃がす）+ e",               root:"-fug-", level:3},

  // ── -later-（側・横） ──────────────────
  {word:"lateral",      meaning:"側面の・横方向の",         etymology:"later（側）+ al（〜の）",                     root:"-later-", level:2},
  {word:"bilateral",    meaning:"両側の・二国間の",         etymology:"bi（二つ）+ later（側）+ al（〜の）",          root:"-later-", level:2},
  {word:"unilateral",   meaning:"一方的な",                etymology:"uni（一つ）+ later（側）+ al（〜の）",         root:"-later-", level:2},
  {word:"multilateral", meaning:"多国間の・多角的な",       etymology:"multi（多くの）+ later（側）+ al（〜の）",     root:"-later-", level:2},
  {word:"collateral",   meaning:"担保・付随的な",           etymology:"col（共に）+ later（側）+ al（〜の）",         root:"-later-", level:3},
  {word:"equilateral",  meaning:"等辺の",                  etymology:"equi（等しい）+ later（側）+ al（〜の）",      root:"-later-", level:2},
  {word:"dilate",       meaning:"拡張する・広がる",         etymology:"di（分けて）+ late（広げる）+ e",              root:"-later-", level:3},

  // ── -lun-（月） ──────────────────
  {word:"lunar",        meaning:"月の・月に関する",         etymology:"lun（月）+ ar（〜の）",                       root:"-lun-", level:1},
  {word:"lunatic",      meaning:"狂気の・精神に異常な",     etymology:"lun（月）+ atic（〜の）→月が狂気を引き起こす", root:"-lun-", level:2},
  {word:"lunacy",       meaning:"狂気・精神異常",           etymology:"lun（月）+ acy（状態）",                      root:"-lun-", level:2},
  {word:"lune",         meaning:"三日月形",                etymology:"lun（月）+ e",                                root:"-lun-", level:3},
  {word:"lunula",       meaning:"爪の半月・三日月形の部分", etymology:"lun（月）+ ula（小さい）",                    root:"-lun-", level:3},
  {word:"sublunary",    meaning:"月下の・地球上の",         etymology:"sub（下の）+ lun（月）+ ary（〜の）",          root:"-lun-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
