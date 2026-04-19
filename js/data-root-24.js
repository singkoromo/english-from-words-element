/**
 * data-root-24.js — 語根データ（-numer-, -par-, -plac-, -prob-/-prov-, -spir-, -trib-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -numer-（数） ──────────────────
  {word:"number",            meaning:"数・番号",                  etymology:"numer（数）+ ber",                             root:"-numer-", level:1, pos:"名詞"},
  {word:"numeral",           meaning:"数字・数を表す",             etymology:"numer（数）+ al（〜の）",                      root:"-numer-", level:5, pos:"名詞・動詞"},
  {word:"numerous",          meaning:"多数の・たくさんの",          etymology:"numer（数）+ ous（〜の）",                     root:"-numer-", level:3, pos:"形容詞"},
  {word:"enumerate",         meaning:"数え上げる・列挙する",        etymology:"e（外に）+ numer（数）+ ate（〜する）",         root:"-numer-", level:5, pos:"動詞"},
  {word:"innumerable",       meaning:"無数の・数えきれない",        etymology:"in（否定）+ numer（数）+ able（できる）",       root:"-numer-", level:5, pos:"形容詞"},
  {word:"numerate",          meaning:"数が読める・計算できる",      etymology:"numer（数）+ ate（〜の）",                     root:"-numer-", level:5, pos:"動詞"},
  {word:"numerology",        meaning:"数秘術",                    etymology:"numer（数）+ logy（学問）",                    root:"-numer-", level:7, pos:"名詞"},
  {word:"numerator",         meaning:"分子（数学）",               etymology:"numer（数）+ ator（〜するもの）",              root:"-numer-", level:5, pos:"名詞"},
  {word:"numerical",         meaning:"数値の・数字の",             etymology:"numer（数）+ ical（〜の）",                    root:"-numer-", level:5, pos:"形容詞"},
  {word:"supernumerary",     meaning:"定員超過の・余分な",          etymology:"super（超える）+ numer（数）+ ary（〜の）",    root:"-numer-", level:7, pos:"形容詞"},

  // ── -par-/-pair-（等しい・準備する） ──────────────────
  {word:"pair",              meaning:"一対・ペア",                 etymology:"par（等しい）+ ir（〜もの）",                  root:"-par-",   level:1, pos:"名詞"},
  {word:"parity",            meaning:"同等・等価",                 etymology:"par（等しい）+ ity（状態）",                   root:"-par-",   level:5, pos:"名詞"},
  {word:"compare",           meaning:"比較する",                  etymology:"com（共に）+ par（等しい）+ e→等しく並べる",    root:"-par-",   level:3, pos:"動詞"},
  {word:"prepare",           meaning:"準備する・用意する",          etymology:"pre（前に）+ par（用意する）+ e",              root:"-par-",   level:1, pos:"動詞"},
  {word:"repair",            meaning:"修理する・直す",             etymology:"re（再び）+ pair（等しくする）",               root:"-par-",   level:3, pos:"動詞"},
  {word:"disparate",         meaning:"本質的に異なる",             etymology:"dis（離れて）+ par（等しい）+ ate（〜の）",    root:"-par-",   level:6, pos:"動詞"},
  {word:"disparity",         meaning:"格差・不平等",               etymology:"dis（離れて）+ par（等しい）+ ity（状態）",    root:"-par-",   level:5, pos:"名詞"},
  {word:"comparable",        meaning:"匹敵する・比較できる",        etymology:"com（共に）+ par（等しい）+ able（できる）",   root:"-par-",   level:5, pos:"動詞"},
  {word:"incomparable",      meaning:"比類のない・無類の",          etymology:"in（否定）+ compare（比較する）+ able",        root:"-par-",   level:5, pos:"形容詞"},
  {word:"apparent",          meaning:"明らかな・外見上の",          etymology:"ap（〜に）+ par（見える）+ ent（〜の）",       root:"-par-",   level:5, pos:"形容詞"},
  {word:"transparent",       meaning:"透明な・明白な",             etymology:"trans（通して）+ par（見える）+ ent（〜の）",  root:"-par-",   level:3, pos:"形容詞"},

  // ── -plac-（喜ばせる・落ち着かせる） ──────────────────
  {word:"placate",           meaning:"なだめる・慰める",            etymology:"plac（喜ばせる）+ ate（〜する）",              root:"-plac-",  level:6, pos:"動詞"},
  {word:"placid",            meaning:"穏やかな・平静な",            etymology:"plac（落ち着く）+ id（〜の）",                 root:"-plac-",  level:5, pos:"形容詞"},
  {word:"placebo",           meaning:"プラセボ・偽薬",             etymology:"plac（喜ばせる）+ ebo（未来）→喜ばせるだろう",  root:"-plac-",  level:5, pos:"名詞"},
  {word:"complacent",        meaning:"自己満足の・無頓着な",        etymology:"com（完全に）+ plac（喜ぶ）+ ent（〜の）",     root:"-plac-",  level:5, pos:"形容詞"},
  {word:"implacable",        meaning:"なだめられない・執念深い",    etymology:"im（否定）+ plac（喜ばせる）+ able（できる）", root:"-plac-",  level:6, pos:"形容詞"},
  {word:"please",            meaning:"喜ばせる・〜してください",    etymology:"pleas（喜ばせる）+ e",                        root:"-plac-",  level:1, pos:"動詞・形容詞"},
  {word:"pleasant",          meaning:"楽しい・心地よい",            etymology:"pleas（喜ばせる）+ ant（〜な）",               root:"-plac-",  level:1, pos:"形容詞"},
  {word:"pleasure",          meaning:"喜び・楽しみ",               etymology:"pleas（喜ばせる）+ ure（状態）",               root:"-plac-",  level:3, pos:"名詞"},
  {word:"complacency",       meaning:"自己満足・慢心",             etymology:"com（完全に）+ plac（喜ぶ）+ ency（状態）",    root:"-plac-",  level:5, pos:"名詞"},
  {word:"displease",         meaning:"不快にさせる",               etymology:"dis（否定）+ please（喜ばせる）",              root:"-plac-",  level:5, pos:"動詞"},

  // ── -prob-/-prov-（試す・証明する） ──────────────────
  {word:"probe",             meaning:"探る・調査する",             etymology:"prob（試す）+ e",                             root:"-prob-",  level:5, pos:"動詞"},
  {word:"probable",          meaning:"ありそうな・可能性の高い",    etymology:"prob（試す）+ able（できる）",                  root:"-prob-",  level:3, pos:"形容詞"},
  {word:"probability",       meaning:"確率・可能性",               etymology:"prob（試す）+ ability（能力）",                root:"-prob-",  level:6, pos:"名詞"},
  {word:"problem",           meaning:"問題・課題",                 etymology:"pro（前に）+ blem（投げる）→前に投げられたもの",root:"-prob-",  level:1, pos:"名詞"},
  {word:"approbation",       meaning:"承認・是認",                 etymology:"ap（〜に）+ prob（試す）+ ation（行為）",      root:"-prob-",  level:6, pos:"名詞"},
  {word:"reprobate",         meaning:"堕落した人・非難する",        etymology:"re（再び）+ prob（試す）+ ate（〜する）→落第する", root:"-prob-", level:6, pos:"名詞・動詞"},
  {word:"prove",             meaning:"証明する",                  etymology:"prov（試す）+ e",                             root:"-prov-",  level:1, pos:"動詞"},
  {word:"proof",             meaning:"証拠・証明",                 etymology:"prov（試す）+ f",                             root:"-prov-",  level:3, pos:"名詞"},
  {word:"approve",           meaning:"承認する・賛成する",          etymology:"ap（〜に）+ prov（試す）+ e",                 root:"-prov-",  level:3, pos:"動詞"},
  {word:"improve",           meaning:"改善する・向上する",          etymology:"im（中に）+ prov（試す）+ e",                 root:"-prov-",  level:3, pos:"動詞"},
  {word:"disprove",          meaning:"反証する・否定する",          etymology:"dis（否定）+ prove（証明する）",               root:"-prov-",  level:5, pos:"動詞"},
  {word:"reprove",           meaning:"叱る・非難する",             etymology:"re（再び）+ prove（試す）→再試験",             root:"-prov-",  level:6, pos:"動詞"},

  // ── -spir-（呼吸する・息吹く） ──────────────────
  {word:"spirit",            meaning:"精神・魂・霊",               etymology:"spir（息）+ it（〜のもの）",                   root:"-spir-",  level:3, pos:"名詞"},
  {word:"inspire",           meaning:"鼓舞する・吸い込む",          etymology:"in（中に）+ spir（息）+ e→息を吹き込む",       root:"-spir-",  level:3, pos:"動詞"},
  {word:"expire",            meaning:"期限が切れる・息を吐く",      etymology:"ex（外に）+ spir（息）+ e",                   root:"-spir-",  level:5, pos:"動詞"},
  {word:"aspire",            meaning:"熱望する・志す",             etymology:"as（〜に）+ spir（息）+ e→息を吐きかける",     root:"-spir-",  level:5, pos:"動詞"},
  {word:"perspire",          meaning:"汗をかく",                  etymology:"per（通して）+ spir（息）+ e",                 root:"-spir-",  level:5, pos:"動詞"},
  {word:"conspire",          meaning:"共謀する・陰謀を企てる",      etymology:"con（共に）+ spir（息）+ e→同じ息を吸う",      root:"-spir-",  level:5, pos:"動詞"},
  {word:"respire",           meaning:"呼吸する",                  etymology:"re（再び）+ spir（息）+ e",                   root:"-spir-",  level:6, pos:"動詞"},
  {word:"transpire",         meaning:"起こる・蒸散する",            etymology:"trans（通して）+ spir（息）+ e",               root:"-spir-",  level:6, pos:"動詞"},
  {word:"inspiration",       meaning:"インスピレーション・霊感",    etymology:"in（中に）+ spir（息）+ ation（行為）",        root:"-spir-",  level:4, pos:"名詞"},
  {word:"respiration",       meaning:"呼吸",                      etymology:"re（再び）+ spir（息）+ ation（行為）",        root:"-spir-",  level:5, pos:"名詞"},
  {word:"spiritual",         meaning:"精神的な・霊的な",            etymology:"spir（息・精神）+ itual（〜の）",              root:"-spir-",  level:5, pos:"形容詞"},
  {word:"conspiracy",        meaning:"陰謀・共謀",                 etymology:"con（共に）+ spir（息）+ acy（状態）",         root:"-spir-",  level:5, pos:"名詞"},

  // ── -trib-（与える・割り当てる） ──────────────────
  {word:"tribute",           meaning:"贈り物・賛辞・貢物",          etymology:"trib（与える）+ ute（行為）",                  root:"-trib-",  level:5, pos:"名詞"},
  {word:"contribute",        meaning:"貢献する・寄付する",          etymology:"con（共に）+ trib（与える）+ ute（〜する）",   root:"-trib-",  level:3, pos:"動詞"},
  {word:"distribute",        meaning:"配布する・配給する",          etymology:"dis（広く）+ trib（与える）+ ute（〜する）",   root:"-trib-",  level:3, pos:"動詞"},
  {word:"attribute",         meaning:"〜のせいにする・属性",        etymology:"at（〜に）+ trib（与える）+ ute（〜する）",    root:"-trib-",  level:5, pos:"動詞・名詞"},
  {word:"retribute",         meaning:"報いる・応報する",            etymology:"re（返して）+ trib（与える）+ ute（〜する）",  root:"-trib-",  level:6, pos:"動詞"},
  {word:"contribution",      meaning:"貢献・寄付",                 etymology:"con（共に）+ trib（与える）+ ution（行為）",   root:"-trib-",  level:4, pos:"名詞"},
  {word:"distribution",      meaning:"配布・流通",                 etymology:"dis（広く）+ trib（与える）+ ution（行為）",   root:"-trib-",  level:5, pos:"名詞"},
  {word:"retribution",       meaning:"天罰・応報",                 etymology:"re（返して）+ trib（与える）+ ution（行為）",  root:"-trib-",  level:5, pos:"名詞"},
  {word:"tributary",         meaning:"支流・貢を納める",            etymology:"trib（与える）+ uary（〜の）",                 root:"-trib-",  level:5, pos:"名詞・動詞"},
  {word:"tribunal",          meaning:"裁判所・審判",               etymology:"trib（人々に与える）+ unal（〜の場所）",        root:"-trib-",  level:5, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
