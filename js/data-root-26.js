/**
 * data-root-26.js — 語根データ（-cred-, -greg-, -luc-/lum-, -memor-, -numer-, -plac-, -poten-, -rupt-, -sol-, -termin-, -vers-/vert-, -vol-/volu-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [

  // ── -cred-（信じる） ──────────────────
  {word:"credential",        meaning:"資格証明書・信任状",           etymology:"cred（信じる）+ ential（〜のもの）",                 root:"-cred-",    level:1},
  {word:"credit",            meaning:"信用・単位・クレジット",       etymology:"cred（信じる）+ it（〜すること）",                   root:"-cred-",    level:0},
  {word:"credible",          meaning:"信頼できる・信憑性のある",     etymology:"cred（信じる）+ ible（できる）",                     root:"-cred-",    level:1},
  {word:"credulous",         meaning:"信じやすい・だまされやすい",   etymology:"cred（信じる）+ ulous（傾向がある）",                root:"-cred-",    level:2},
  {word:"creed",             meaning:"信条・信仰箇条",               etymology:"cred（信じる）+ d（〜のもの）",                      root:"-cred-",    level:2},
  {word:"creditor",          meaning:"債権者",                       etymology:"cred（信じる）+ itor（する人）",                    root:"-cred-",    level:2},
  {word:"incredible",        meaning:"信じられない・素晴らしい",     etymology:"in（否定）+ cred（信じる）+ ible（できる）",          root:"-cred-",    level:0},
  {word:"incredulous",       meaning:"信じない・懐疑的な",           etymology:"in（否定）+ cred（信じる）+ ulous（傾向）",          root:"-cred-",    level:2},
  {word:"discredit",         meaning:"信用を傷つける",               etymology:"dis（否定）+ cred（信じる）+ it",                   root:"-cred-",    level:2},
  {word:"credulity",         meaning:"信じやすさ・お人よし",         etymology:"cred（信じる）+ ulity（性質）",                     root:"-cred-",    level:3},
  {word:"accreditation",     meaning:"認定・公式承認",               etymology:"ac（〜に）+ cred（信じる）+ itation（行為）",        root:"-cred-",    level:2},
  {word:"credence",          meaning:"信頼・信用",                   etymology:"cred（信じる）+ ence（状態）",                      root:"-cred-",    level:3},
  {word:"miscreant",         meaning:"悪人・無法者",                 etymology:"mis（悪く）+ cred（信じる）+ ant（人）→信念を持たない者", root:"-cred-", level:3},

  // ── -greg-（群れ・集まり） ──────────────────
  {word:"gregarious",        meaning:"社交的な・群れを好む",         etymology:"greg（群れ）+ arious（性質がある）",                 root:"-greg-",    level:2},
  {word:"aggregate",         meaning:"合計・集合体",                 etymology:"ag（〜へ）+ greg（群れ）+ ate（する）",              root:"-greg-",    level:2},
  {word:"congregation",      meaning:"会衆・集会",                   etymology:"con（共に）+ greg（群れ）+ ation（行為）",           root:"-greg-",    level:2},
  {word:"segregate",         meaning:"分離する・隔離する",           etymology:"se（離れて）+ greg（群れ）+ ate（する）",            root:"-greg-",    level:2},
  {word:"egregious",         meaning:"ひどい・際立って悪い",         etymology:"e（外に）+ greg（群れ）+ ious（〜な）→群れから飛び出た", root:"-greg-", level:3},
  {word:"congregate",        meaning:"集まる・会合する",             etymology:"con（共に）+ greg（群れ）+ ate（する）",             root:"-greg-",    level:2},
  {word:"disaggregate",      meaning:"分解する・分散させる",         etymology:"dis（分離）+ ag（〜へ）+ greg（群れ）+ ate（する）", root:"-greg-",    level:3},

  // ── -luc-/-lum-（光） ──────────────────
  {word:"lucid",             meaning:"明晰な・わかりやすい",         etymology:"luc（光）+ id（〜の状態）",                         root:"-luc-",     level:2},
  {word:"illuminate",        meaning:"照らす・明らかにする",         etymology:"il（〜に）+ lumin（光）+ ate（する）",               root:"-lum-",     level:1},
  {word:"luminous",          meaning:"輝く・発光する",               etymology:"lumin（光）+ ous（〜な）",                          root:"-lum-",     level:2},
  {word:"translucent",       meaning:"半透明の",                     etymology:"trans（通して）+ luc（光）+ ent（〜の）",            root:"-luc-",     level:2},
  {word:"elucidate",         meaning:"明確にする・解明する",         etymology:"e（外に）+ luc（光）+ idate（させる）",              root:"-luc-",     level:2},
  {word:"luminary",          meaning:"著名人・発光体",               etymology:"lumin（光）+ ary（もの）",                          root:"-lum-",     level:3},
  {word:"illustrious",       meaning:"著名な・輝かしい",             etymology:"il（〜に）+ lustr（光）+ ious（〜な）",              root:"-lum-",     level:3},
  {word:"luster",            meaning:"光沢・輝き",                   etymology:"lustr（光る）+ er（もの）",                         root:"-luc-",     level:2},
  {word:"pellucid",          meaning:"澄み切った・明快な",           etymology:"per（完全に）+ luc（光）+ id（〜の状態）",           root:"-luc-",     level:3},
  {word:"luminescence",      meaning:"発光・ルミネセンス",           etymology:"lumin（光）+ escence（なりつつある状態）",           root:"-lum-",     level:3},
  {word:"luminosity",        meaning:"光度・輝度",                   etymology:"lumin（光）+ osity（性質）",                        root:"-lum-",     level:3},
  {word:"bioluminescence",   meaning:"生物発光",                     etymology:"bio（生命）+ lumin（光）+ escence（発光）",          root:"-lum-",     level:3},
  {word:"lucent",            meaning:"光輝く・透明な",               etymology:"luc（光）+ ent（〜の）",                            root:"-luc-",     level:3},

  // ── -memor-（記憶） ──────────────────
  {word:"memory",            meaning:"記憶・思い出",                 etymology:"memor（記憶）+ y（状態）",                          root:"-memor-",   level:0},
  {word:"memorize",          meaning:"暗記する",                     etymology:"memor（記憶）+ ize（する）",                        root:"-memor-",   level:0},
  {word:"memorial",          meaning:"記念碑・記念の",               etymology:"memor（記憶）+ ial（〜の）",                        root:"-memor-",   level:1},
  {word:"commemorate",       meaning:"記念する・祝う",               etymology:"com（共に）+ memor（記憶）+ ate（する）",            root:"-memor-",   level:2},
  {word:"memorandum",        meaning:"覚書・メモ",                   etymology:"memor（記憶）+ andum（すべきもの）",                 root:"-memor-",   level:1},
  {word:"memoir",            meaning:"回顧録・手記",                 etymology:"memor（記憶）+ ir（〜のもの）",                     root:"-memor-",   level:2},
  {word:"memorable",         meaning:"忘れられない・記憶に値する",   etymology:"memor（記憶）+ able（できる）",                     root:"-memor-",   level:1},
  {word:"immemorial",        meaning:"記憶にない大昔の",             etymology:"im（否定）+ memor（記憶）+ ial（〜の）",             root:"-memor-",   level:3},
  {word:"memorabilia",       meaning:"記念品・思い出の品",           etymology:"memor（記憶）+ abilia（値するもの）",               root:"-memor-",   level:2},
  {word:"reminisce",         meaning:"懐かしく思い出す",             etymology:"re（再び）+ min（思う）+ isce（始める）→記憶が戻る", root:"-memor-",   level:2},
  {word:"reminiscence",      meaning:"回想・追憶",                   etymology:"re（再び）+ min（思う）+ iscence（始まり）",         root:"-memor-",   level:3},

  // ── -numer-（数） ──────────────────
  {word:"numeral",           meaning:"数字・数詞",                   etymology:"numer（数）+ al（〜の）",                           root:"-numer-",   level:1},
  {word:"numerous",          meaning:"多数の",                       etymology:"numer（数）+ ous（〜な）",                          root:"-numer-",   level:1},
  {word:"enumerate",         meaning:"列挙する・数え上げる",         etymology:"e（外に）+ numer（数）+ ate（する）",                root:"-numer-",   level:2},
  {word:"innumerable",       meaning:"数えきれない・無数の",         etymology:"in（否定）+ numer（数）+ able（できる）",            root:"-numer-",   level:2},
  {word:"numerology",        meaning:"数秘術",                       etymology:"numer（数）+ logy（学）",                          root:"-numer-",   level:2},
  {word:"numerical",         meaning:"数の・数値の",                 etymology:"numer（数）+ ical（〜の）",                         root:"-numer-",   level:1},
  {word:"innumerate",        meaning:"数が苦手な",                   etymology:"in（否定）+ numer（数）+ ate（〜の状態）",           root:"-numer-",   level:3},
  {word:"supernumerary",     meaning:"定員超過の・余剰の",           etymology:"super（超えた）+ numer（数）+ ary（〜の）",          root:"-numer-",   level:3},

  // ── -plac-（喜ばせる・なだめる） ──────────────────
  {word:"placate",           meaning:"なだめる・機嫌をとる",         etymology:"plac（喜ばせる）+ ate（する）",                     root:"-plac-",    level:2},
  {word:"placid",            meaning:"穏やかな・温和な",             etymology:"plac（喜ばせる）+ id（〜の状態）",                   root:"-plac-",    level:2},
  {word:"complacent",        meaning:"自己満足な",                   etymology:"com（完全に）+ plac（喜ばせる）+ ent（〜な）",        root:"-plac-",    level:2},
  {word:"implacable",        meaning:"なだめられない・容赦ない",     etymology:"im（否定）+ plac（喜ばせる）+ able（できる）",        root:"-plac-",    level:3},
  {word:"placebo",           meaning:"プラセボ・偽薬",               etymology:"plac（喜ばせる）+ ebo（〜するだろう）→喜ばせるもの", root:"-plac-",    level:2},
  {word:"complacency",       meaning:"自己満足",                     etymology:"com（完全に）+ plac（喜ばせる）+ ency（状態）",      root:"-plac-",    level:2},
  {word:"displace",          meaning:"置き換える・移動させる",       etymology:"dis（離して）+ place（場所）→場所を変える",          root:"-plac-",    level:1},
  {word:"appease",           meaning:"なだめる・鎮める",             etymology:"ap（〜に）+ pais（喜ばせる）+ e（する）",            root:"-plac-",    level:2},

  // ── -poten-（力・能力） ──────────────────
  {word:"potent",            meaning:"強力な・効果的な",             etymology:"poten（力）+ t（〜の）",                            root:"-poten-",   level:2},
  {word:"potential",         meaning:"潜在能力・可能性",             etymology:"poten（力）+ tial（〜の）",                         root:"-poten-",   level:1},
  {word:"impotent",          meaning:"無力な・力のない",             etymology:"im（否定）+ poten（力）+ t（〜の）",                 root:"-poten-",   level:2},
  {word:"omnipotent",        meaning:"全能の",                       etymology:"omni（すべて）+ poten（力）+ t（〜の）",             root:"-poten-",   level:2},
  {word:"potentate",         meaning:"権力者・大君主",               etymology:"poten（力）+ tate（者）",                           root:"-poten-",   level:3},
  {word:"omnipotence",       meaning:"全能・万能",                   etymology:"omni（すべて）+ poten（力）+ ce（状態）",            root:"-poten-",   level:2},
  {word:"impotence",         meaning:"無力・無能力",                 etymology:"im（否定）+ poten（力）+ ce（状態）",               root:"-poten-",   level:2},
  {word:"plenipotentiary",   meaning:"全権大使・全権の",             etymology:"pleni（完全な）+ poten（力）+ tiary（〜の）",        root:"-poten-",   level:3},
  {word:"potency",           meaning:"効力・力",                     etymology:"poten（力）+ cy（状態）",                           root:"-poten-",   level:2},

  // ── -rupt-（破る・壊す） ──────────────────
  {word:"rupture",           meaning:"破裂・断絶",                   etymology:"rupt（破る）+ ure（状態・行為）",                   root:"-rupt-",    level:2},
  {word:"corrupt",           meaning:"腐敗した・汚職の",             etymology:"cor（完全に）+ rupt（破る）",                       root:"-rupt-",    level:1},
  {word:"interrupt",         meaning:"遮る・中断する",               etymology:"inter（間に）+ rupt（破る）",                       root:"-rupt-",    level:0},
  {word:"erupt",             meaning:"噴火する・爆発する",           etymology:"e（外に）+ rupt（破る）",                           root:"-rupt-",    level:1},
  {word:"disrupt",           meaning:"混乱させる・妨害する",         etymology:"dis（離して）+ rupt（破る）",                       root:"-rupt-",    level:1},
  {word:"bankrupt",          meaning:"破産した",                     etymology:"bank（銀行）+ rupt（破る）",                        root:"-rupt-",    level:1},
  {word:"abrupt",            meaning:"突然の・無愛想な",             etymology:"ab（から）+ rupt（破る）→突然切れた",               root:"-rupt-",    level:2},
  {word:"irruption",         meaning:"侵入・突入",                   etymology:"ir（中に）+ rupt（破る）+ ion（行為）",              root:"-rupt-",    level:3},
  {word:"disruption",        meaning:"混乱・断絶",                   etymology:"dis（離して）+ rupt（破る）+ ion（行為）",           root:"-rupt-",    level:1},
  {word:"eruption",          meaning:"噴火・発疹",                   etymology:"e（外に）+ rupt（破る）+ ion（行為）",              root:"-rupt-",    level:1},
  {word:"corruption",        meaning:"腐敗・汚職",                   etymology:"cor（完全に）+ rupt（破る）+ ion（状態）",           root:"-rupt-",    level:1},

  // ── -sol-（太陽・一人・慰める） ──────────────────
  {word:"solitary",          meaning:"孤独な・一人の",               etymology:"sol（一人）+ itary（〜の）",                        root:"-sol-",     level:1},
  {word:"solitude",          meaning:"孤独・孤立",                   etymology:"sol（一人）+ itude（状態）",                        root:"-sol-",     level:2},
  {word:"solo",              meaning:"独奏・単独の",                 etymology:"sol（一人）+ o（単独）",                            root:"-sol-",     level:0},
  {word:"isolate",           meaning:"孤立させる・隔離する",         etymology:"insula（島）→ sol（一人）+ ate（する）",             root:"-sol-",     level:1},
  {word:"desolate",          meaning:"荒廃した・寂しい",             etymology:"de（完全に）+ sol（一人）+ ate（〜の状態）",          root:"-sol-",     level:2},
  {word:"console",           meaning:"慰める・コンソール",           etymology:"con（共に）+ sol（慰める）+ e（する）",              root:"-sol-",     level:1},
  {word:"consolation",       meaning:"慰め・慰安",                   etymology:"con（共に）+ sol（慰める）+ ation（行為）",          root:"-sol-",     level:2},
  {word:"solstice",          meaning:"至（夏至・冬至）",             etymology:"sol（太陽）+ stice（立つ）→太陽が止まる日",          root:"-sol-",     level:2},
  {word:"solar",             meaning:"太陽の",                       etymology:"sol（太陽）+ ar（〜の）",                           root:"-sol-",     level:1},
  {word:"parasol",           meaning:"パラソル・日傘",               etymology:"para（防ぐ）+ sol（太陽）",                         root:"-sol-",     level:1},
  {word:"inconsolable",      meaning:"慰めようがない",               etymology:"in（否定）+ con（共に）+ sol（慰める）+ able（できる）", root:"-sol-", level:3},
  {word:"solipsism",         meaning:"独我論",                       etymology:"sol（一人）+ ips（自分）+ ism（主義）",              root:"-sol-",     level:3},

  // ── -termin-（終わり・境界） ──────────────────
  {word:"terminal",          meaning:"末期の・端末・終着駅",         etymology:"termin（終わり）+ al（〜の）",                      root:"-termin-",  level:1},
  {word:"terminate",         meaning:"終わらせる・解雇する",         etymology:"termin（終わり）+ ate（する）",                     root:"-termin-",  level:1},
  {word:"determine",         meaning:"決定する・解明する",           etymology:"de（完全に）+ termin（境界）+ e（する）→限定する",   root:"-termin-",  level:1},
  {word:"exterminate",       meaning:"根絶する・皆殺しにする",       etymology:"ex（外に）+ termin（境界）+ ate（する）→外に追い出す", root:"-termin-", level:2},
  {word:"interminable",      meaning:"終わりのない・果てしない",     etymology:"in（否定）+ termin（終わり）+ able（できる）",        root:"-termin-",  level:2},
  {word:"termination",       meaning:"終了・終結",                   etymology:"termin（終わり）+ ation（行為）",                   root:"-termin-",  level:1},
  {word:"predetermined",     meaning:"あらかじめ決められた",         etymology:"pre（前に）+ de（完全に）+ termin（境界）+ ed（〜された）", root:"-termin-", level:2},
  {word:"indeterminate",     meaning:"不確定な・曖昧な",             etymology:"in（否定）+ de（完全に）+ termin（境界）+ ate（〜の）", root:"-termin-", level:3},
  {word:"terminus",          meaning:"終着駅・終点",                 etymology:"termin（終わり）+ us（名詞語尾）",                  root:"-termin-",  level:2},
  {word:"terminological",    meaning:"用語の・術語の",               etymology:"termin（境界・名前）+ ology（学）+ ical（〜の）",    root:"-termin-",  level:3},

  // ── -vers-/-vert-（回る・向く） ──────────────────
  {word:"diverse",           meaning:"多様な",                       etymology:"di（異なる方向へ）+ vers（回る）+ e（〜の）",         root:"-vers-",    level:1},
  {word:"universe",          meaning:"宇宙・全世界",                 etymology:"uni（一つ）+ vers（回る）+ e（〜の）→一つにまとまった世界", root:"-vers-", level:0},
  {word:"convert",           meaning:"変換する・改宗させる",         etymology:"con（完全に）+ vert（回す）",                       root:"-vert-",    level:1},
  {word:"divert",            meaning:"そらす・気分転換させる",       etymology:"di（離れて）+ vert（回す）",                        root:"-vert-",    level:2},
  {word:"revert",            meaning:"元に戻る",                     etymology:"re（再び）+ vert（回す）",                          root:"-vert-",    level:2},
  {word:"invert",            meaning:"逆にする・反転させる",         etymology:"in（逆に）+ vert（回す）",                          root:"-vert-",    level:2},
  {word:"pervert",           meaning:"ゆがめる・変態者",             etymology:"per（完全に歪めて）+ vert（回す）",                  root:"-vert-",    level:2},
  {word:"avert",             meaning:"そらす・防ぐ",                 etymology:"a（離れて）+ vert（回す）",                         root:"-vert-",    level:2},
  {word:"introvert",         meaning:"内向的な人",                   etymology:"intro（内側へ）+ vert（回す）",                     root:"-vert-",    level:1},
  {word:"extrovert",         meaning:"外向的な人",                   etymology:"extro（外側へ）+ vert（回す）",                     root:"-vert-",    level:1},
  {word:"versatile",         meaning:"多才な・用途が広い",           etymology:"vers（回る）+ atile（傾向がある）",                  root:"-vers-",    level:2},
  {word:"controversy",       meaning:"論争・議論",                   etymology:"contra（反対に）+ vers（回る）+ y（状態）",          root:"-vers-",    level:2},
  {word:"adversity",         meaning:"逆境・苦難",                   etymology:"ad（〜に）+ vers（向く）+ ity（状態）→対立する状態", root:"-vers-",    level:2},
  {word:"anniversary",       meaning:"記念日",                       etymology:"anni（年）+ vers（回る）+ ary（〜の）→年が回る日",   root:"-vers-",    level:0},
  {word:"subvert",           meaning:"転覆させる・弱体化させる",     etymology:"sub（下から）+ vert（回す）",                       root:"-vert-",    level:3},

  // ── -vol-/-volu-（意志・丸める） ──────────────────
  {word:"volunteer",         meaning:"ボランティア・自発的に行う",   etymology:"vol（意志）+ unteer（する人）",                     root:"-vol-",     level:0},
  {word:"voluntary",         meaning:"自発的な・任意の",             etymology:"vol（意志）+ untary（〜の性質）",                   root:"-vol-",     level:1},
  {word:"involuntary",       meaning:"無意識の・不本意な",           etymology:"in（否定）+ vol（意志）+ untary（〜の）",            root:"-vol-",     level:2},
  {word:"evolve",            meaning:"進化する・発展する",           etymology:"e（外へ）+ volv（回る）+ e（する）",                 root:"-volu-",    level:1},
  {word:"revolve",           meaning:"回転する・公転する",           etymology:"re（再び）+ volv（回る）+ e（する）",                root:"-volu-",    level:1},
  {word:"devolve",           meaning:"委譲する・退化する",           etymology:"de（下へ）+ volv（回る）+ e（する）",                root:"-volu-",    level:3},
  {word:"revolution",        meaning:"革命・回転",                   etymology:"re（再び）+ volu（回る）+ tion（行為）",             root:"-volu-",    level:1},
  {word:"evolution",         meaning:"進化・発展",                   etymology:"e（外へ）+ volu（回る）+ tion（過程）",              root:"-volu-",    level:1},
  {word:"involve",           meaning:"関与する・含む",               etymology:"in（中に）+ volv（巻く）+ e（する）",                root:"-volu-",    level:0},
  {word:"volume",            meaning:"体積・音量・巻",               etymology:"volu（巻く）+ me（もの）→巻物",                      root:"-volu-",    level:0},
  {word:"convoluted",        meaning:"複雑に絡み合った",             etymology:"con（共に）+ volu（巻く）+ ted（〜された）",          root:"-volu-",    level:3},
  {word:"malevolent",        meaning:"悪意のある",                   etymology:"male（悪い）+ vol（意志）+ ent（〜の）",             root:"-vol-",     level:3},
  {word:"benevolent",        meaning:"慈悲深い・善意の",             etymology:"bene（良い）+ vol（意志）+ ent（〜の）",             root:"-vol-",     level:2},
  {word:"voluminous",        meaning:"膨大な・たっぷりした",         etymology:"volu（巻く）+ min（〜の）+ ous（〜な）",             root:"-volu-",    level:3},

  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
