/**
 * data-root-30.js — 語根データ（-lect-, -soph-, -nounce/-nunci-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -lect-（選ぶ・集める・読む） ──────────────────
  {word:"collect",      meaning:"集める・収集する",         etymology:"col（共に）+ lect（集める）",                  root:"-lect-", level:0, pos:"動詞"},
  {word:"select",       meaning:"選ぶ・選択する",           etymology:"se（分けて）+ lect（選ぶ）",                  root:"-lect-", level:1, pos:"動詞"},
  {word:"elect",        meaning:"選挙する・選ぶ",           etymology:"e（外に）+ lect（選ぶ）",                     root:"-lect-", level:1, pos:"動詞"},
  {word:"election",     meaning:"選挙・選択",               etymology:"elect（選ぶ）+ ion（行為）",                  root:"-lect-", level:1, pos:"名詞"},
  {word:"intellect",    meaning:"知性・理性",               etymology:"inter（間に）+ lect（選ぶ・読む）",           root:"-lect-", level:2, pos:"名詞"},
  {word:"intellectual", meaning:"知識人・知的な",           etymology:"intellect（知性）+ ual（〜の）",              root:"-lect-", level:2, pos:"名詞・形容詞"},
  {word:"neglect",      meaning:"無視する・怠慢",           etymology:"neg（否定）+ lect（選ぶ）→選ばない",          root:"-lect-", level:2, pos:"動詞・名詞"},
  {word:"recollect",    meaning:"思い出す・再び集める",     etymology:"re（再び）+ col（共に）+ lect（集める）",      root:"-lect-", level:2, pos:"動詞"},
  {word:"eclectic",     meaning:"折衷的な・多様な",         etymology:"ec（外から）+ lect（選ぶ）+ ic",              root:"-lect-", level:3, pos:"形容詞"},
  {word:"predilection", meaning:"好み・偏愛",               etymology:"pre（前に）+ di（完全に）+ lect（選ぶ）+ ion", root:"-lect-", level:3, pos:"名詞"},
  {word:"dialect",      meaning:"方言・地域語",             etymology:"dia（通じて）+ lect（言葉）",                 root:"-lect-", level:2, pos:"名詞"},

  // ── -soph-（賢い・知恵） ──────────────────
  {word:"philosophy",   meaning:"哲学",                    etymology:"philo（愛する）+ soph（知恵）+ y",             root:"-soph-", level:1, pos:"名詞"},
  {word:"philosopher",  meaning:"哲学者",                  etymology:"philo（愛する）+ soph（知恵）+ er",            root:"-soph-", level:1, pos:"名詞"},
  {word:"sophisticated",meaning:"洗練された・高度な",      etymology:"sophist（屁理屈師）+ icated（〜された）",      root:"-soph-", level:2, pos:"形容詞"},
  {word:"sophomore",    meaning:"大学2年生・中級者",        etymology:"sopho（賢い）+ more（愚かな）←賢いが未熟",    root:"-soph-", level:1, pos:"名詞"},
  {word:"sophistry",    meaning:"詭弁・こじつけ",           etymology:"sophist（詭弁家）+ ry（状態）",               root:"-soph-", level:3, pos:"名詞"},
  {word:"sophist",      meaning:"詭弁家・ソフィスト",       etymology:"soph（賢い）+ ist（〜の人）",                 root:"-soph-", level:3, pos:"名詞"},
  {word:"theosophy",    meaning:"神智学",                  etymology:"theo（神）+ soph（知恵）+ y",                 root:"-soph-", level:3, pos:"名詞"},

  // ── -nounce/-nunci-（告げる・宣言する） ──────────────────
  {word:"announce",     meaning:"発表する・知らせる",       etymology:"an（〜に）+ nounce（告げる）",                root:"-nounce-", level:1, pos:"動詞"},
  {word:"announcement", meaning:"発表・お知らせ",           etymology:"announce（知らせる）+ ment（行為）",          root:"-nounce-", level:1, pos:"名詞"},
  {word:"pronounce",    meaning:"発音する・宣告する",       etymology:"pro（前に）+ nounce（告げる）",               root:"-nounce-", level:1, pos:"動詞"},
  {word:"pronunciation",meaning:"発音",                   etymology:"pronounce（発音する）+ iation（行為）",       root:"-nounce-", level:1, pos:"名詞"},
  {word:"denounce",     meaning:"非難する・告発する",       etymology:"de（下に）+ nounce（告げる）",                root:"-nounce-", level:2, pos:"動詞"},
  {word:"renounce",     meaning:"放棄する・断念する",       etymology:"re（後ろに）+ nounce（告げる）",              root:"-nounce-", level:2, pos:"動詞"},
  {word:"enunciate",    meaning:"明確に発音する・宣言する", etymology:"e（外に）+ nunci（告げる）+ ate",              root:"-nounce-", level:3, pos:"動詞"},
  {word:"annunciation", meaning:"受胎告知・告知",           etymology:"an（〜に）+ nunci（告げる）+ ation",          root:"-nounce-", level:3, pos:"名詞"},
  {word:"denunciation", meaning:"非難・告発",               etymology:"denounce（告発する）+ iation（行為）",        root:"-nounce-", level:3, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
