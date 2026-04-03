/**
 * data-mixed-7.js — IELTS頻出語
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── IELTS頻出語（学術・一般）───────────────
  {word:"accessible",    meaning:"アクセスしやすい・利用可能な",  etymology:"ac（〜に）+ cess（行く）+ ible（できる）", category:"IELTS", level:1},
  {word:"accommodate",   meaning:"収容する・適応する",            etymology:"ac（〜に）+ commoda（都合よい）+ te（する）",category:"IELTS",level:1},
  {word:"accumulate",    meaning:"蓄積する・積み重なる",           etymology:"ac（〜に）+ cumul（積み重ね）+ ate（する）",category:"IELTS",level:2},
  {word:"accuracy",      meaning:"正確さ・精度",                 etymology:"accur（正確な）+ acy（状態）",            category:"IELTS", level:1},
  {word:"achieve",       meaning:"達成する・成し遂げる",           etymology:"a（〜に）+ chieve（頭）→頂点に達する",   category:"IELTS", level:0},
  {word:"acquisition",   meaning:"習得・獲得",                   etymology:"acquir（獲得する）+ ition（行為）",       category:"IELTS", level:2},
  {word:"adjacent",      meaning:"隣接した・近くの",              etymology:"ad（〜に）+ jacent（横たわる）",          category:"IELTS", level:2},
  {word:"administer",    meaning:"管理する・運営する",             etymology:"ad（〜に）+ minister（奉仕する）",        category:"IELTS", level:2},
  {word:"adopt",         meaning:"採用する・養子にする",           etymology:"ad（〜に）+ opt（選ぶ）",               category:"IELTS", level:1},
  {word:"affect",        meaning:"影響を与える・感情",             etymology:"af（〜に）+ fect（する）→作用する",       category:"IELTS", level:0},
  {word:"aggregate",     meaning:"集合体・合計",                 etymology:"ag（〜に）+ greg（群れ）+ ate（する）",   category:"IELTS", level:2},
  {word:"allocate",      meaning:"割り当てる・配分する",           etymology:"al（〜に）+ loc（場所）+ ate（する）",    category:"IELTS", level:2},
  {word:"ambiguous",     meaning:"あいまいな・二義的な",           etymology:"ambi（両方）+ guous（動く）",            category:"IELTS", level:2},
  {word:"analyze",       meaning:"分析する",                     etymology:"ana（分けて）+ lyze（解く）",            category:"IELTS", level:0},
  {word:"apparent",      meaning:"明らかな・外見上の",             etymology:"ap（〜に）+ par（見える）+ ent（〜な）",  category:"IELTS", level:1},
  {word:"approach",      meaning:"アプローチ・近づく",             etymology:"ap（〜に）+ proach（近い）",             category:"IELTS", level:0},
  {word:"appropriate",   meaning:"適切な・ふさわしい",             etymology:"ap（〜に）+ propriate（自分のもの）",     category:"IELTS", level:1},
  {word:"approximate",   meaning:"おおよそ・近似する",             etymology:"ap（〜に）+ proximate（近い）",          category:"IELTS", level:2},
  {word:"aspect",        meaning:"側面・局面",                   etymology:"a（〜に）+ spect（見る）",               category:"IELTS", level:1},
  {word:"assess",        meaning:"評価する・査定する",             etymology:"as（〜に）+ sess（座る）→横に座って評価する",category:"IELTS",level:2},
  {word:"assume",        meaning:"仮定する・引き受ける",           etymology:"as（〜に）+ sume（取る）",               category:"IELTS", level:1},
  {word:"attribute",     meaning:"〜のせいにする・属性",           etymology:"at（〜に）+ tribute（割り当てる）",        category:"IELTS", level:2},
  {word:"benefit",       meaning:"利益・恩恵・役立つ",             etymology:"bene（善い）+ fit（作る）",              category:"IELTS", level:0},
  {word:"capacity",      meaning:"能力・容量",                   etymology:"capac（取る）+ ity（状態）",              category:"IELTS", level:1},
  {word:"category",      meaning:"カテゴリー・範疇",              etymology:"categor（述べる）+ y（状態）",            category:"IELTS", level:1},
  {word:"circumstance",  meaning:"状況・事情",                   etymology:"circum（周囲を）+ stance（立つ）",        category:"IELTS", level:1},
  {word:"coherent",      meaning:"一貫した・論理的な",             etymology:"co（共に）+ her（くっつく）+ ent（〜な）",category:"IELTS",level:2},
  {word:"coincide",      meaning:"一致する・同時に起こる",          etymology:"co（共に）+ incide（落ちる）",            category:"IELTS", level:2},
  {word:"commence",      meaning:"始まる・開始する",               etymology:"com（完全に）+ mence（始める）",          category:"IELTS", level:2},
  {word:"complex",       meaning:"複雑な・複合体",               etymology:"com（共に）+ plex（折る）",              category:"IELTS", level:1},
  {word:"component",     meaning:"構成要素・部品",               etymology:"com（共に）+ ponent（置く）",            category:"IELTS", level:2},
  {word:"comprise",      meaning:"〜から成る・含む",              etymology:"com（完全に）+ prise（取る）",            category:"IELTS", level:2},
  {word:"concede",       meaning:"認める・譲歩する",              etymology:"con（共に）+ cede（行く）",              category:"IELTS", level:2},
  {word:"concept",       meaning:"概念・考え",                   etymology:"con（共に）+ cept（取る）",              category:"IELTS", level:1},
  {word:"consequence",   meaning:"結果・重要性",                 etymology:"con（共に）+ sequent（続く）+ ce（状態）", category:"IELTS", level:1},
  {word:"constitute",    meaning:"構成する・制定する",             etymology:"con（共に）+ stitute（立てる）",          category:"IELTS", level:2},
  {word:"constraint",    meaning:"制約・束縛",                   etymology:"con（共に）+ strain（縛る）+ t",          category:"IELTS", level:2},
  {word:"contemporary",  meaning:"現代の・同時代の",               etymology:"con（共に）+ tempor（時）+ ary（〜の）",  category:"IELTS", level:2},
  {word:"context",       meaning:"文脈・状況",                   etymology:"con（共に）+ text（織る）",              category:"IELTS", level:1},
  {word:"controversy",   meaning:"論争・議論",                   etymology:"contro（反対に）+ vers（回る）+ y",       category:"IELTS", level:2},
  {word:"convey",        meaning:"伝える・運ぶ",                  etymology:"con（共に）+ vey（運ぶ）",               category:"IELTS", level:1},
  {word:"cooperate",     meaning:"協力する",                     etymology:"co（共に）+ operate（作用する）",         category:"IELTS", level:1},
  {word:"coordinate",    meaning:"調整する・協調させる",           etymology:"co（共に）+ ordinat（順序）+ e（する）",  category:"IELTS", level:2},
  {word:"criteria",      meaning:"基準・判断基準",               etymology:"criter（判断する）+ ia（複数）",          category:"IELTS", level:2},
  {word:"crucial",       meaning:"重要な・決定的な",              etymology:"cruc（十字）+ ial（〜の）→交差点での決断",category:"IELTS",level:1},
  {word:"cycle",         meaning:"サイクル・周期",               etymology:"cycl（輪）+ e",                        category:"IELTS", level:0},
  {word:"debate",        meaning:"討論・議論する",               etymology:"de（完全に）+ bate（打つ）",              category:"IELTS", level:1},
  {word:"decline",       meaning:"断る・衰退する",               etymology:"de（下に）+ cline（傾く）",              category:"IELTS", level:1},
  {word:"dedicate",      meaning:"捧げる・専念する",              etymology:"de（完全に）+ dicate（宣言する）",        category:"IELTS", level:2},
  {word:"distribution",  meaning:"分配・流通",                   etymology:"dis（離れて）+ tribut（与える）+ ion",    category:"IELTS", level:1},
  {word:"domain",        meaning:"領域・ドメイン",                etymology:"domin（支配）+ ain（〜のもの）",          category:"IELTS", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
