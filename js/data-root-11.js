/**
 * data-root-11.js — 語根データ（-fid-, -fin-, -firm-, -flex-, -flu-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -fid-（信じる・信頼する） ──────────────────
  {word:"confident",     meaning:"自信のある・確信した",         etymology:"con（完全に）+ fid（信じる）+ ent（〜な）", root:"-fid-", level:1, pos:"動詞・形容詞"},
  {word:"confide",       meaning:"打ち明ける・信頼する",         etymology:"con（共に）+ fide（信じる）",             root:"-fid-", level:2, pos:"動詞"},
  {word:"fidelity",      meaning:"忠実さ・高忠実度",            etymology:"fid（信じる）+ elity（状態）",            root:"-fid-", level:2, pos:"名詞"},
  {word:"faith",         meaning:"信仰・信頼",                  etymology:"fid（信じる）→ faith",                   root:"-fid-", level:0, pos:"名詞"},
  {word:"infidel",       meaning:"不信者・異教徒",               etymology:"in（否定）+ fidel（信じる）",             root:"-fid-", level:3, pos:"名詞"},
  {word:"perfidy",       meaning:"背信・裏切り",                etymology:"per（完全に）+ fidy（信頼を）→信頼を壊す", root:"-fid-", level:3, pos:"名詞"},
  {word:"affidavit",     meaning:"宣誓供述書",                  etymology:"af（〜に）+ fid（信じる）+ avit（証明）", root:"-fid-", level:3, pos:"名詞"},
  {word:"diffident",     meaning:"自信がない・内気な",           etymology:"dif（否定）+ fid（信じる）+ ent（〜な）", root:"-fid-", level:3, pos:"形容詞"},
  {word:"fiduciary",     meaning:"信任の・受託者の",             etymology:"fid（信じる）+ uciary（〜の）",           root:"-fid-", level:3, pos:"形容詞"},
  {word:"confidential",  meaning:"秘密の・機密の",              etymology:"confident（自信のある）+ ial（〜の）",     root:"-fid-", level:2, pos:"形容詞"},
  {word:"perfidious",    meaning:"不誠実な・裏切りの",           etymology:"perfidy（背信）+ ous（〜な）",            root:"-fid-", level:3, pos:"形容詞"},
  {word:"bona fide",     meaning:"誠実な・真正の",              etymology:"bona（良い）+ fide（信義）",              root:"-fid-", level:2, pos:"形容詞"},
  {word:"defiance",      meaning:"反抗・挑戦",                  etymology:"de（否定）+ fiance（信頼）",              root:"-fid-", level:2, pos:"名詞"},
  {word:"self-confident",meaning:"自信に満ちた",               etymology:"self（自分）+ confident（自信のある）",   root:"-fid-", level:1, pos:"形容詞"},

  // ── -fin-（終わり・限界・目的） ──────────────────
  {word:"finish",        meaning:"終わる・完了する",             etymology:"fin（終わり）+ ish（する）",              root:"-fin-", level:0, pos:"動詞"},
  {word:"final",         meaning:"最終の・決定的な",             etymology:"fin（終わり）+ al（〜の）",               root:"-fin-", level:0, pos:"形容詞"},
  {word:"define",        meaning:"定義する・明確にする",          etymology:"de（完全に）+ fine（限界）→境界を引く",  root:"-fin-", level:1, pos:"動詞"},
  {word:"confine",       meaning:"閉じ込める・限定する",          etymology:"con（完全に）+ fine（限界）",             root:"-fin-", level:2, pos:"動詞"},
  {word:"infinite",      meaning:"無限の",                       etymology:"in（否定）+ finite（限りある）",          root:"-fin-", level:1, pos:"形容詞"},
  {word:"finite",        meaning:"有限の・限りある",              etymology:"fin（終わり）+ ite（〜の）",             root:"-fin-", level:2, pos:"形容詞・動詞"},
  {word:"refine",        meaning:"精製する・洗練する",            etymology:"re（再び）+ fine（限界）→純化する",       root:"-fin-", level:2, pos:"動詞"},
  {word:"affinity",      meaning:"親和性・親しみ",               etymology:"af（〜に）+ fin（終わり）+ ity（状態）→境界が接している",root:"-fin-",level:2, pos:"名詞"},
  {word:"finality",      meaning:"終局性・決定性",               etymology:"final（最終の）+ ity（状態）",            root:"-fin-", level:3, pos:"名詞"},
  {word:"indefinite",    meaning:"不明確な・無期限の",            etymology:"in（否定）+ definite（明確な）",          root:"-fin-", level:2, pos:"形容詞"},
  {word:"infinitesimal", meaning:"無限小の・極めて小さい",        etymology:"infinite（無限の）+ simal（〜の程度）",   root:"-fin-", level:3, pos:"形容詞"},
  {word:"definition",    meaning:"定義・意味",                   etymology:"define（定義する）+ ition（行為）",       root:"-fin-", level:0, pos:"名詞"},
  {word:"finesse",       meaning:"巧妙さ・技巧",                 etymology:"fine（細かい）+ esse（状態）",            root:"-fin-", level:3, pos:"名詞"},
  {word:"infinitude",    meaning:"無限性",                       etymology:"infinite（無限の）+ ude（状態）",         root:"-fin-", level:3, pos:"名詞"},
  {word:"confines",      meaning:"境界・範囲",                   etymology:"con（共に）+ fines（限界）",              root:"-fin-", level:2, pos:"名詞"},

  // ── -firm-（固い・強固な） ──────────────────
  {word:"firm",          meaning:"会社・固い・固める",            etymology:"firm（固い）",                           root:"-firm-", level:0, pos:"名詞・形容詞・動詞"},
  {word:"confirm",       meaning:"確認する・承認する",            etymology:"con（完全に）+ firm（固める）",           root:"-firm-", level:1, pos:"動詞"},
  {word:"affirm",        meaning:"断言する・肯定する",            etymology:"af（〜に）+ firm（固める）",              root:"-firm-", level:2, pos:"動詞"},
  {word:"infirm",        meaning:"虚弱な・病弱な",               etymology:"in（否定）+ firm（固い）",               root:"-firm-", level:2, pos:"形容詞"},
  {word:"firmament",     meaning:"天空・大空",                   etymology:"firm（固い）+ ament（〜のもの）",         root:"-firm-", level:3, pos:"名詞"},
  {word:"affirmation",   meaning:"肯定・断言",                   etymology:"affirm（断言する）+ ation（行為）",       root:"-firm-", level:2, pos:"名詞"},
  {word:"confirmation",  meaning:"確認・裁可",                   etymology:"confirm（確認する）+ ation（行為）",      root:"-firm-", level:1, pos:"名詞"},
  {word:"infirmary",     meaning:"病院・医務室",                  etymology:"infirm（虚弱な）+ ary（場所）",          root:"-firm-", level:2, pos:"名詞"},
  {word:"infirmity",     meaning:"虚弱・病気",                   etymology:"infirm（虚弱な）+ ity（状態）",          root:"-firm-", level:3, pos:"名詞"},
  {word:"reaffirm",      meaning:"再確認する",                   etymology:"re（再び）+ affirm（断言する）",          root:"-firm-", level:2, pos:"動詞"},
  {word:"affirmative",   meaning:"肯定的な・肯定の返答",          etymology:"affirm（断言する）+ ative（〜な）",       root:"-firm-", level:2, pos:"形容詞・名詞"},

  // ── -flex-/-flect-（曲げる・反射する） ──────────────────
  {word:"flex",          meaning:"曲げる・伸縮する",             etymology:"flex（曲げる）",                         root:"-flex-", level:1, pos:"動詞"},
  {word:"reflect",       meaning:"反射する・反省する",            etymology:"re（後ろへ）+ flect（曲げる）",           root:"-flex-", level:1, pos:"動詞"},
  {word:"inflect",       meaning:"語形変化させる・曲げる",        etymology:"in（中に）+ flect（曲げる）",             root:"-flex-", level:3, pos:"動詞"},
  {word:"deflect",       meaning:"それらせる・曲げる",            etymology:"de（下に）+ flect（曲げる）",            root:"-flex-", level:2, pos:"動詞"},
  {word:"flexible",      meaning:"柔軟な・融通のきく",            etymology:"flex（曲げる）+ ible（できる）",          root:"-flex-", level:1, pos:"形容詞・動詞"},
  {word:"reflex",        meaning:"反射・反応",                   etymology:"re（後ろへ）+ flex（曲げる）",            root:"-flex-", level:2, pos:"名詞"},
  {word:"genuflect",     meaning:"膝をつく・服従する",            etymology:"genu（膝）+ flect（曲げる）",            root:"-flex-", level:3, pos:"動詞"},
  {word:"circumflex",    meaning:"曲折アクセント",               etymology:"circum（周囲に）+ flex（曲げる）",        root:"-flex-", level:3, pos:"名詞"},
  {word:"inflexible",    meaning:"柔軟性のない・頑固な",          etymology:"in（否定）+ flexible（柔軟な）",          root:"-flex-", level:2, pos:"形容詞"},
  {word:"reflection",    meaning:"反射・反省・映像",              etymology:"reflect（反射する）+ ion（行為）",        root:"-flex-", level:1, pos:"名詞"},
  {word:"reflexive",     meaning:"再帰的な・反射的な",            etymology:"reflex（反射）+ ive（性質）",             root:"-flex-", level:2, pos:"形容詞"},
  {word:"inflexion",     meaning:"語形変化・語尾変化",            etymology:"inflect（曲げる）+ ion（行為）",          root:"-flex-", level:3, pos:"名詞"},
  {word:"deflection",    meaning:"偏向・たわみ",                 etymology:"deflect（それらせる）+ ion（行為）",       root:"-flex-", level:3, pos:"名詞"},

  // ── -flu-/-flux-（流れる） ──────────────────
  {word:"flow",          meaning:"流れる・流れ",                 etymology:"flu（流れる）→ flow",                    root:"-flu-", level:0, pos:"動詞・名詞"},
  {word:"fluid",         meaning:"液体・流動的な",               etymology:"flu（流れる）+ id（〜の性質）",           root:"-flu-", level:1, pos:"名詞・形容詞"},
  {word:"influence",     meaning:"影響・影響を与える",            etymology:"in（中に）+ flu（流れる）+ ence（状態）→中に流れ込む",root:"-flu-",level:0, pos:"名詞・動詞"},
  {word:"fluent",        meaning:"流ちょうな・滑らかな",          etymology:"flu（流れる）+ ent（〜な）",              root:"-flu-", level:1, pos:"形容詞"},
  {word:"affluent",      meaning:"豊かな・裕福な",               etymology:"af（〜に）+ flu（流れる）→豊かに流れる",  root:"-flu-", level:2, pos:"形容詞"},
  {word:"influx",        meaning:"流入・殺到",                   etymology:"in（中に）+ flux（流れ）",               root:"-flu-", level:2, pos:"名詞"},
  {word:"flux",          meaning:"流れ・変動・フラックス",         etymology:"flux（流れ）",                           root:"-flu-", level:2, pos:"名詞"},
  {word:"fluctuate",     meaning:"変動する・揺れ動く",            etymology:"flu（流れる）+ ctuate（〜する）",         root:"-flu-", level:2, pos:"動詞"},
  {word:"superfluous",   meaning:"余分な・不必要な",              etymology:"super（超えて）+ flu（流れる）+ ous（〜な）→溢れる",root:"-flu-",level:3, pos:"形容詞"},
  {word:"confluence",    meaning:"合流点・集結",                  etymology:"con（共に）+ flu（流れる）+ ence（状態）", root:"-flu-", level:3, pos:"名詞"},
  {word:"effluent",      meaning:"排水・放流液",                  etymology:"ef（外に）+ flu（流れる）+ ent（〜もの）", root:"-flu-", level:3, pos:"名詞"},
  {word:"reflux",        meaning:"逆流・還流",                   etymology:"re（後ろへ）+ flux（流れ）",              root:"-flu-", level:3, pos:"名詞"},
  {word:"melt",          meaning:"溶ける・溶かす",               etymology:"flu（流れる）→meltan（溶ける）",          root:"-flu-", level:0, pos:"動詞"},
  {word:"flush",         meaning:"赤くなる・勢いよく流す",         etymology:"flu（流れる）+ sh（勢い）",               root:"-flu-", level:1, pos:"動詞"},
  {word:"fluvial",       meaning:"川の・河流の",                  etymology:"fluv（川・流れ）+ ial（〜の）",           root:"-flu-", level:3, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
