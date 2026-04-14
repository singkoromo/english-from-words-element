/**
 * data-root-15.js — 語根データ（-magn-, -medi-, -memor-, -migr-, -min-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -magn-/-maj-/-max-（大きい・偉大な） ──────────────────
  {word:"magnify",       meaning:"拡大する・誇張する",           etymology:"magn（大きい）+ ify（〜にする）",          root:"-magn-", level:1, pos:"動詞"},
  {word:"magnificent",   meaning:"壮大な・素晴らしい",           etymology:"magn（大きい）+ ificent（〜な）",          root:"-magn-", level:1, pos:"形容詞"},
  {word:"magnitude",     meaning:"大きさ・規模",                etymology:"magn（大きい）+ itude（状態）",           root:"-magn-", level:2, pos:"名詞"},
  {word:"major",         meaning:"主要な・専攻する",             etymology:"maj（大きい）+ or（比較）",              root:"-magn-", level:0, pos:"形容詞・動詞"},
  {word:"major",         meaning:"メジャー・主要",               etymology:"maj（大きい）+ or（〜なもの）",           root:"-magn-", level:0, pos:"名詞"},
  {word:"maximum",       meaning:"最大・最大値",                 etymology:"max（最も大きい）+ imum（〜のもの）",     root:"-magn-", level:1, pos:"名詞"},
  {word:"magnanimous",   meaning:"度量の大きい・寛大な",          etymology:"magn（大きい）+ animous（心）",           root:"-magn-", level:3, pos:"形容詞"},
  {word:"magnate",       meaning:"大物・有力者",                 etymology:"magn（大きい）+ ate（人）",              root:"-magn-", level:3, pos:"名詞"},
  {word:"magnum opus",   meaning:"代表作・最高傑作",              etymology:"magnum（大きい）+ opus（作品）",          root:"-magn-", level:3, pos:"名詞"},
  {word:"majestic",      meaning:"威厳のある・雄大な",            etymology:"maj（大きい）+ estic（〜な）",            root:"-magn-", level:2, pos:"動詞・形容詞"},
  {word:"majority",      meaning:"多数派・過半数",               etymology:"major（主要な）+ ity（状態）",            root:"-magn-", level:1, pos:"名詞"},
  {word:"magnification", meaning:"拡大・倍率",                  etymology:"magnify（拡大する）+ ation（行為）",      root:"-magn-", level:2, pos:"名詞"},
  {word:"megalomaniac",  meaning:"誇大妄想患者",                 etymology:"mega（大きい）+ mania（狂気）+ ac（人）", root:"-magn-", level:3, pos:"名詞"},
  {word:"magniloquent",  meaning:"大げさな・誇大な言葉の",        etymology:"magni（大きい）+ loquent（話す）",        root:"-magn-", level:3, pos:"形容詞"},

  // ── -medi-（中間・中央） ──────────────────
  {word:"medium",        meaning:"中間・媒体",                  etymology:"medi（中間）+ um（〜のもの）",            root:"-medi-", level:0, pos:"名詞"},
  {word:"median",        meaning:"中央値・中間の",               etymology:"medi（中間）+ an（〜の）",               root:"-medi-", level:2, pos:"名詞・形容詞"},
  {word:"mediate",       meaning:"仲介する・調停する",            etymology:"medi（中間）+ ate（する）",              root:"-medi-", level:2, pos:"動詞"},
  {word:"medieval",      meaning:"中世の",                       etymology:"medi（中間）+ eval（時代）",             root:"-medi-", level:2, pos:"形容詞"},
  {word:"mediocre",      meaning:"平凡な・凡庸な",               etymology:"medi（中間）+ ocre（山）→平均的な山",    root:"-medi-", level:2, pos:"形容詞"},
  {word:"media",         meaning:"メディア・媒体",               etymology:"medi（中間）+ a（複数）",               root:"-medi-", level:0, pos:"名詞"},
  {word:"immediate",     meaning:"即座の・直接の",               etymology:"im（否定）+ medi（中間）+ ate（〜な）→間がない",root:"-medi-",level:0, pos:"形容詞"},
  {word:"remedy",        meaning:"治療薬・解決策",               etymology:"re（再び）+ medi（中間）+ y→治す",       root:"-medi-", level:1, pos:"名詞"},
  {word:"mediation",     meaning:"調停・仲介",                   etymology:"mediate（調停する）+ ion（行為）",        root:"-medi-", level:2, pos:"名詞"},
  {word:"Mediterranean", meaning:"地中海の",                    etymology:"medi（中間）+ terr（陸）+ anean（の）→陸の中の海",root:"-medi-",level:2, pos:"形容詞"},
  {word:"intermediary",  meaning:"仲介者・中間の",               etymology:"inter（間に）+ medi（中間）+ ary（人）", root:"-medi-", level:3, pos:"名詞・形容詞"},
  {word:"mediocrity",    meaning:"平凡さ・凡庸",                 etymology:"mediocre（平凡な）+ ity（状態）",         root:"-medi-", level:2, pos:"名詞"},
  {word:"multimedia",    meaning:"マルチメディア",               etymology:"multi（多くの）+ media（媒体）",          root:"-medi-", level:1, pos:"名詞"},
  {word:"remedial",      meaning:"補習の・矯正の",               etymology:"remedy（治療）+ ial（〜の）",             root:"-medi-", level:2, pos:"形容詞"},

  // ── -memor-（覚える・記憶） ──────────────────
  {word:"memory",        meaning:"記憶・思い出",                 etymology:"memor（覚える）+ y（状態）",              root:"-memor-", level:0, pos:"名詞"},
  {word:"memorable",     meaning:"記憶に残る・印象的な",          etymology:"memor（覚える）+ able（できる）",         root:"-memor-", level:1, pos:"動詞・形容詞"},
  {word:"commemorate",   meaning:"記念する・追悼する",            etymology:"com（共に）+ memor（覚える）+ ate（する）",root:"-memor-",level:2, pos:"動詞"},
  {word:"memorial",      meaning:"記念碑・追悼の",               etymology:"memor（覚える）+ ial（〜の）",            root:"-memor-", level:1, pos:"名詞・形容詞"},
  {word:"memorize",      meaning:"暗記する",                     etymology:"memor（覚える）+ ize（する）",            root:"-memor-", level:1, pos:"動詞"},
  {word:"memoir",        meaning:"回想録・記録",                 etymology:"memor（覚える）→ フランス語 mémoire",     root:"-memor-", level:2, pos:"名詞"},
  {word:"memorandum",    meaning:"覚書・メモ",                   etymology:"memor（覚える）+ andum（〜のもの）",      root:"-memor-", level:2, pos:"名詞"},
  {word:"immemorial",    meaning:"遠い昔からの・太古の",          etymology:"im（否定）+ memorial（記念の）→記憶を超えた",root:"-memor-",level:3, pos:"形容詞"},
  {word:"commemoration", meaning:"記念・追悼",                   etymology:"commemorate（記念する）+ ion（行為）",    root:"-memor-", level:2, pos:"名詞"},
  {word:"memorabilia",   meaning:"記念品・思い出の品々",          etymology:"memor（覚える）+ abilia（〜のもの）",     root:"-memor-", level:3, pos:"名詞"},
  {word:"remember",      meaning:"思い出す・覚えている",           etymology:"re（再び）+ member（覚える）",            root:"-memor-", level:0, pos:"動詞"},
  {word:"amnesia",       meaning:"記憶喪失",                     etymology:"a（否定）+ mnes（記憶）+ ia（症状）",    root:"-memor-", level:2, pos:"名詞"},

  // ── -migr-（移動する・移住する） ──────────────────
  {word:"migrate",       meaning:"移住する・移動する",            etymology:"migr（移動する）+ ate（する）",           root:"-migr-", level:1, pos:"動詞"},
  {word:"immigrant",     meaning:"移民（入国する）",              etymology:"im（中に）+ migr（移動する）+ ant（人）", root:"-migr-", level:1, pos:"名詞"},
  {word:"emigrate",      meaning:"（他国へ）移住する",             etymology:"e（外に）+ migr（移動する）+ ate（する）",root:"-migr-", level:2, pos:"動詞"},
  {word:"emigrant",      meaning:"移民（出国する）",              etymology:"e（外に）+ migr（移動する）+ ant（人）", root:"-migr-", level:2, pos:"名詞"},
  {word:"transmigrate",  meaning:"転生する・移住する",            etymology:"trans（超えて）+ migr（移動する）+ ate（する）",root:"-migr-",level:3, pos:"動詞"},
  {word:"migration",     meaning:"移住・移動",                   etymology:"migrate（移住する）+ ion（行為）",        root:"-migr-", level:1, pos:"名詞"},
  {word:"immigration",   meaning:"入国・移民（入国）",             etymology:"immigrate（入国する）+ ion（行為）",      root:"-migr-", level:1, pos:"名詞"},
  {word:"migratory",     meaning:"渡り鳥の・移動性の",           etymology:"migrate（移動する）+ ory（性質）",        root:"-migr-", level:2, pos:"形容詞"},
  {word:"emigration",    meaning:"出国・移民（出国）",             etymology:"emigrate（出国する）+ ion（行為）",       root:"-migr-", level:2, pos:"名詞"},
  {word:"remigrate",     meaning:"帰国する・再移住する",           etymology:"re（再び）+ migrate（移住する）",         root:"-migr-", level:3, pos:"動詞"},

  // ── -min-（小さい・突き出る・脅かす） ──────────────────
  {word:"minute",        meaning:"分・細かい",                   etymology:"min（小さい）+ ute（〜の）",              root:"-min-", level:0, pos:"名詞・形容詞"},
  {word:"minor",         meaning:"未成年者・小さい方の",          etymology:"min（小さい）+ or（比較）",              root:"-min-", level:0, pos:"名詞・形容詞"},
  {word:"minimum",       meaning:"最小・最低限",                  etymology:"min（最も小さい）+ imum（〜のもの）",     root:"-min-", level:0, pos:"名詞"},
  {word:"minister",      meaning:"大臣・牧師・奉仕する",          etymology:"min（小さい）+ ister（人）→仕える人",    root:"-min-", level:1, pos:"名詞・動詞"},
  {word:"diminish",      meaning:"減少する・小さくなる",           etymology:"di（離れて）+ min（小さい）+ ish（〜する）",root:"-min-",level:2, pos:"動詞"},
  {word:"minimize",      meaning:"最小化する",                   etymology:"minim（最小）+ ize（する）",              root:"-min-", level:1, pos:"動詞"},
  {word:"eminent",       meaning:"著名な・卓越した",              etymology:"e（外に）+ min（突き出る）+ ent（〜な）", root:"-min-", level:2, pos:"形容詞"},
  {word:"imminent",      meaning:"差し迫った・切迫した",           etymology:"im（上に）+ min（突き出る）+ ent（〜な）",root:"-min-", level:2, pos:"形容詞"},
  {word:"prominent",     meaning:"際立った・有名な",              etymology:"pro（前に）+ min（突き出る）+ ent（〜な）",root:"-min-",level:2, pos:"形容詞"},
  {word:"minority",      meaning:"少数派・少数",                 etymology:"minor（小さい）+ ity（状態）",            root:"-min-", level:1, pos:"名詞"},
  {word:"miniature",     meaning:"miniature・ミニチュア",         etymology:"min（小さい）+ iature（〜のもの）",       root:"-min-", level:1, pos:"名詞"},
  {word:"diminutive",    meaning:"小さい・縮小形の",              etymology:"diminish（減少する）+ utive（性質）",     root:"-min-", level:2, pos:"形容詞"},
  {word:"ominous",       meaning:"不吉な・縁起の悪い",            etymology:"omin（予兆）+ ous（〜な）",              root:"-min-", level:2, pos:"形容詞"},
  {word:"nominal",       meaning:"名目上の・わずかな",            etymology:"nomin（名前）+ al（〜の）",              root:"-min-", level:2, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
