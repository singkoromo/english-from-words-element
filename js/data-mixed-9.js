/**
 * data-mixed-9.js — 学術英語（第2弾）
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── 学術英語（研究・論文）───────────────
  {word:"abduction",     meaning:"誘拐・仮説推論",               etymology:"ab（離れて）+ duct（導く）+ ion（行為）", category:"Academic", level:2},
  {word:"abstraction",   meaning:"抽象化・概念",                 etymology:"ab（離れて）+ tract（引く）+ ion（行為）",category:"Academic", level:2},
  {word:"acuity",        meaning:"鋭敏さ・明晰さ",               etymology:"acu（尖った）+ ity（状態）",              category:"Academic", level:3},
  {word:"affiliation",   meaning:"所属・提携",                   etymology:"af（〜に）+ filiat（息子）+ ion（行為）→親子関係を結ぶ",category:"Academic",level:2},
  {word:"agglomerate",   meaning:"集塊・凝集する",               etymology:"ag（〜に）+ glomerate（塊）",            category:"Academic", level:3},
  {word:"algorithm",     meaning:"アルゴリズム・計算手順",         etymology:"algorismus（al-Khwarizmi の名前から）",   category:"Academic", level:2},
  {word:"analogy",       meaning:"類推・アナロジー",              etymology:"ana（似た）+ logy（論理）",              category:"Academic", level:2},
  {word:"anomaly",       meaning:"異常・例外",                   etymology:"an（否定）+ omal（法則）+ y（状態）",    category:"Academic", level:2},
  {word:"assertion",     meaning:"主張・断言",                   etymology:"assert（主張する）+ ion（行為）",         category:"Academic", level:2},
  {word:"asymmetry",     meaning:"非対称性",                     etymology:"a（否定）+ symmetry（対称性）",          category:"Academic", level:2},
  {word:"attrition",     meaning:"消耗・摩耗",                   etymology:"at（〜に）+ trit（すり減らす）+ ion（行為）",category:"Academic",level:3},
  {word:"axiom",         meaning:"公理・自明の理",               etymology:"axia（価値）+ om（〜のもの）",            category:"Academic", level:3},
  {word:"bifurcation",   meaning:"二分岐・分裂",                 etymology:"bi（二つ）+ furc（又）+ ation（行為）",  category:"Academic", level:3},
  {word:"calibrate",     meaning:"較正する・調整する",             etymology:"caliber（口径）+ ate（する）",           category:"Academic", level:2},
  {word:"catalyst",      meaning:"触媒・きっかけ",               etymology:"cata（下に）+ lyst（解く）",             category:"Academic", level:2},
  {word:"causality",     meaning:"因果関係",                     etymology:"caus（原因）+ ality（状態）",            category:"Academic", level:2},
  {word:"codify",        meaning:"法典化する・体系化する",          etymology:"cod（法典）+ ify（〜にする）",            category:"Academic", level:3},
  {word:"cohort",        meaning:"コホート・同期集団",             etymology:"co（共に）+ hort（囲い）",              category:"Academic", level:2},
  {word:"collation",     meaning:"照合・整理",                   etymology:"col（共に）+ lat（運ぶ）+ ion（行為）",  category:"Academic", level:3},
  {word:"compilation",   meaning:"編集・まとめ",                 etymology:"com（共に）+ pil（積む）+ ation（行為）", category:"Academic", level:2},
  {word:"complement",    meaning:"補完するもの・補う",             etymology:"com（完全に）+ plement（満たす）",        category:"Academic", level:2},
  {word:"conflate",      meaning:"混同する・合体させる",           etymology:"con（共に）+ flate（吹く）",             category:"Academic", level:3},
  {word:"conjecture",    meaning:"推測・憶測",                   etymology:"con（共に）+ jectur（投げる）",          category:"Academic", level:2},
  {word:"consensus",     meaning:"合意・コンセンサス",             etymology:"con（共に）+ sens（感じる）+ us（状態）", category:"Academic", level:2},
  {word:"contingent",    meaning:"偶発的な・〜次第の",             etymology:"con（共に）+ tingent（触れる）",          category:"Academic", level:2},
  {word:"correlation",   meaning:"相関関係",                     etymology:"co（共に）+ relat（結ぶ）+ ion（行為）",  category:"Academic", level:2},
  {word:"corollary",     meaning:"当然の結果・系（数学）",          etymology:"coroll（花冠）→おまけについてくるもの",   category:"Academic", level:3},
  {word:"culminate",     meaning:"頂点に達する・最高潮になる",      etymology:"culmin（頂点）+ ate（する）",            category:"Academic", level:2},
  {word:"deductive",     meaning:"演繹的な",                     etymology:"de（下に）+ duct（導く）+ ive（〜な）",  category:"Academic", level:2},
  {word:"differential",  meaning:"差異の・微分の",                etymology:"differ（異なる）+ ential（〜の）",        category:"Academic", level:2},
  {word:"diffuse",       meaning:"拡散する・散布する",             etymology:"dif（異なる方向に）+ fuse（注ぐ）",       category:"Academic", level:2},
  {word:"discourse",     meaning:"談話・論説",                   etymology:"dis（離れて）+ course（流れ）",           category:"Academic", level:2},
  {word:"discrepancy",   meaning:"不一致・食い違い",              etymology:"dis（否定）+ crepancy（割れ音）",        category:"Academic", level:2},
  {word:"dissertation",  meaning:"博士論文",                     etymology:"dis（離れて）+ sert（つなぐ）+ ation（行為）→詳しく述べる",category:"Academic",level:2},
  {word:"divergence",    meaning:"分岐・相違",                   etymology:"di（離れて）+ verg（傾く）+ ence（状態）",category:"Academic", level:2},
  {word:"domain",        meaning:"領域・分野",                   etymology:"domin（支配）+ ain（〜のもの）",          category:"Academic", level:2},
  {word:"dualism",       meaning:"二元論",                       etymology:"du（二）+ alism（主義）",               category:"Academic", level:3},
  {word:"dynamics",      meaning:"力学・動態",                   etymology:"dynam（力）+ ics（学問）",               category:"Academic", level:2},
  {word:"empirical",     meaning:"経験的な・実証的な",             etymology:"empir（経験）+ ical（〜の）",            category:"Academic", level:2},
  {word:"epistemology",  meaning:"認識論",                       etymology:"episteme（知識）+ logy（学問）",         category:"Academic", level:3},
  {word:"equilibrium",   meaning:"均衡・平衡状態",               etymology:"equi（等しい）+ librium（重さ）",         category:"Academic", level:2},
  {word:"extrapolate",   meaning:"外挿する・推定する",             etymology:"extra（外に）+ polate（磨く）→延長する", category:"Academic", level:3},
  {word:"falsify",       meaning:"偽造する・反証する",             etymology:"fals（偽の）+ ify（〜にする）",          category:"Academic", level:2},
  {word:"framework",     meaning:"枠組み・フレームワーク",          etymology:"frame（枠）+ work（作業）",              category:"Academic", level:1},
  {word:"generalize",    meaning:"一般化する",                   etymology:"general（一般的な）+ ize（する）",        category:"Academic", level:1},
  {word:"heuristic",     meaning:"発見的学習の・試行錯誤的な",      etymology:"heurist（見つける）+ ic（〜の）",         category:"Academic", level:3},
  {word:"holistic",      meaning:"全体論的な",                   etymology:"hol（全体）+ istic（〜な）",             category:"Academic", level:2},
  {word:"implication",   meaning:"含意・影響",                   etymology:"implic（折り込む）+ ation（行為）",       category:"Academic", level:2},
  {word:"inductive",     meaning:"帰納的な",                     etymology:"in（中に）+ duct（導く）+ ive（〜な）",  category:"Academic", level:2},
  {word:"inference",     meaning:"推論・結論",                   etymology:"in（中に）+ fer（運ぶ）+ ence（状態）",   category:"Academic", level:2},
  {word:"interdisciplinary",meaning:"学際的な",                 etymology:"inter（間に）+ disciplinary（学問の）",   category:"Academic", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
