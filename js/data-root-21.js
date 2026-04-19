/**
 * data-root-21.js — 語根データ（-rid-, -sacr-, -sal-, -sci-, -sequ-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -rid-/-ris-（笑う） ──────────────────
  {word:"ridiculous",      meaning:"馬鹿げた・滑稽な",           etymology:"ridic（笑う）+ ulous（〜な）",                 root:"-rid-", level:4, pos:"形容詞"},
  {word:"ridicule",        meaning:"嘲笑・馬鹿にする",           etymology:"ridic（笑う）+ ule（行為）",                  root:"-rid-", level:5, pos:"名詞・動詞"},
  {word:"deride",          meaning:"あざ笑う・嘲る",             etymology:"de（下に）+ ride（笑う）",                    root:"-rid-", level:5, pos:"名詞・動詞"},
  {word:"derision",        meaning:"嘲笑・嘲り",                 etymology:"deride（あざ笑う）+ ion（行為）",              root:"-rid-", level:6, pos:"名詞"},
  {word:"derisive",        meaning:"嘲笑的な・ばかにした",        etymology:"deride（あざ笑う）+ ive（〜な）",              root:"-rid-", level:6, pos:"形容詞"},
  {word:"risible",         meaning:"笑うべき・こっけいな",        etymology:"ris（笑う）+ ible（できる）",                 root:"-ris-", level:6, pos:"名詞・形容詞"},

  // ── -sacr-/-sanct-（神聖な） ──────────────────
  {word:"sacred",          meaning:"神聖な・聖なる",             etymology:"sacr（神聖な）+ ed（〜された）",               root:"-sacr-", level:3, pos:"形容詞・動詞"},
  {word:"sacrifice",       meaning:"犠牲にする・捧げる",          etymology:"sacr（神聖な）+ fice（作る）→神に捧げる",      root:"-sacr-", level:3, pos:"動詞"},
  {word:"sacrament",       meaning:"秘跡・聖礼典",               etymology:"sacr（神聖な）+ ament（行為）",               root:"-sacr-", level:5, pos:"名詞"},
  {word:"sacrilege",       meaning:"冒涜・神聖を汚すこと",        etymology:"sacr（神聖な）+ lege（盗む）",                root:"-sacr-", level:6, pos:"名詞"},
  {word:"sanctuary",       meaning:"聖域・避難所",               etymology:"sanct（神聖な）+ uary（場所）",               root:"-sanct-", level:5, pos:"名詞"},
  {word:"sanctify",        meaning:"神聖にする・清める",          etymology:"sanct（神聖な）+ ify（する）",                root:"-sanct-", level:5, pos:"動詞"},
  {word:"sanction",        meaning:"制裁・認可",                 etymology:"sanct（神聖な）+ ion（行為）→認める",          root:"-sanct-", level:5, pos:"名詞"},
  {word:"sanctimonious",   meaning:"偽善的な・信心深いふりをする",etymology:"sancti（神聖な）+ monious（〜な）",            root:"-sanct-", level:6, pos:"形容詞・動詞"},
  {word:"consecrate",      meaning:"神聖にする・聖別する",        etymology:"con（完全に）+ secr（神聖な）+ ate（する）",   root:"-sacr-", level:6, pos:"動詞"},
  {word:"desecrate",       meaning:"冒涜する・汚す",              etymology:"de（否定）+ secr（神聖な）+ ate（する）",      root:"-sacr-", level:6, pos:"動詞"},

  // ── -sal-/-sult-（跳ぶ・塩） ──────────────────
  {word:"assault",         meaning:"暴行・攻撃する",             etymology:"as（〜に）+ sault（跳ぶ）→跳びかかる",        root:"-sal-", level:5, pos:"名詞・動詞"},
  {word:"result",          meaning:"結果・結果として生じる",      etymology:"re（戻る）+ sult（跳ぶ）→跳ね返る",           root:"-sal-", level:1, pos:"名詞・動詞"},
  {word:"insult",          meaning:"侮辱する・無礼",             etymology:"in（上に）+ sult（跳ぶ）→跳びかかる",          root:"-sal-", level:3, pos:"動詞・名詞"},
  {word:"exult",           meaning:"大喜びする・歓喜する",        etymology:"ex（外に）+ ult（跳ぶ）→外へ跳ぶ",            root:"-sal-", level:6, pos:"動詞"},
  {word:"salute",          meaning:"挨拶する・敬礼する",          etymology:"sal（健康・塩）+ ute（する）→健康を祈る",      root:"-sal-", level:3, pos:"動詞"},
  {word:"salary",          meaning:"給料・俸給",                 etymology:"sal（塩）+ ary（〜のもの）→塩で払う報酬",      root:"-sal-", level:3, pos:"名詞"},
  {word:"saline",          meaning:"塩水の・塩分を含む",          etymology:"sal（塩）+ ine（〜の）",                      root:"-sal-", level:5, pos:"形容詞・動詞"},

  // ── -sci-（知る） ──────────────────
  {word:"science",         meaning:"科学・学問",                 etymology:"sci（知る）+ ence（状態）",                   root:"-sci-", level:1, pos:"名詞"},
  {word:"conscience",      meaning:"良心・道義心",               etymology:"con（共に）+ sci（知る）+ ence（状態）",       root:"-sci-", level:5, pos:"名詞"},
  {word:"conscious",       meaning:"意識のある・気づいている",    etymology:"con（共に）+ sci（知る）+ ous（〜な）",        root:"-sci-", level:3, pos:"動詞"},
  {word:"unconscious",     meaning:"無意識の・気絶した",          etymology:"un（否定）+ conscious（意識のある）",          root:"-sci-", level:3, pos:"形容詞"},
  {word:"omniscient",      meaning:"全知の・何でも知っている",    etymology:"omni（すべて）+ sci（知る）+ ent（〜な）",     root:"-sci-", level:6, pos:"形容詞・動詞"},
  {word:"prescient",       meaning:"先見の明がある",              etymology:"pre（前に）+ sci（知る）+ ent（〜な）",        root:"-sci-", level:6, pos:"動詞"},
  {word:"nescient",        meaning:"無知の",                    etymology:"ne（否定）+ sci（知る）+ ent（〜な）",         root:"-sci-", level:6, pos:"形容詞"},
  {word:"omniscience",     meaning:"全知・全知全能",              etymology:"omni（すべて）+ sci（知る）+ ence（状態）",    root:"-sci-", level:6, pos:"名詞"},

  // ── -sequ-/-secut-（続く・従う） ──────────────────
  {word:"sequence",        meaning:"順序・連続・数列",            etymology:"sequ（続く）+ ence（状態）",                  root:"-sequ-", level:3, pos:"名詞"},
  {word:"consequence",     meaning:"結果・影響・重要性",          etymology:"con（共に）+ sequ（続く）+ ence（状態）",      root:"-sequ-", level:3, pos:"名詞"},
  {word:"subsequent",      meaning:"その後の・続いて起きる",      etymology:"sub（後ろに）+ sequ（続く）+ ent（〜な）",     root:"-sequ-", level:5, pos:"形容詞・動詞"},
  {word:"sequential",      meaning:"連続した・順次の",            etymology:"sequence（順序）+ ial（〜の）",               root:"-sequ-", level:5, pos:"形容詞"},
  {word:"obsequious",      meaning:"ご機嫌取りの・媚びへつらう",   etymology:"ob（〜に向かって）+ sequ（従う）+ ious（〜な）",root:"-sequ-",level:6, pos:"形容詞・名詞"},
  {word:"prosecute",       meaning:"起訴する・遂行する",          etymology:"pro（前に）+ secut（続く）+ e",               root:"-secut-", level:5, pos:"動詞"},
  {word:"persecute",       meaning:"迫害する・悩ます",            etymology:"per（完全に）+ secut（続く）→追い続ける",      root:"-secut-", level:5, pos:"動詞"},
  {word:"execute",         meaning:"実行する・処刑する",          etymology:"ex（外に）+ secut（続く）→やり遂げる",         root:"-secut-", level:3, pos:"動詞"},
  {word:"consecutive",     meaning:"連続した・引き続く",          etymology:"con（共に）+ secut（続く）+ ive（〜な）",      root:"-secut-", level:5, pos:"形容詞・動詞"},
  {word:"ensue",           meaning:"続いて起こる・結果として生じる",etymology:"en（中に）+ sue（続く）",                   root:"-sequ-", level:5, pos:"動詞"},

  // ── -simil-/-simul-（似た・同時に） ──────────────────
  {word:"similar",         meaning:"似ている・類似した",          etymology:"simil（似た）+ ar（〜の）",                   root:"-simil-", level:2, pos:"動詞・形容詞"},
  {word:"simulate",        meaning:"模擬する・シミュレートする",    etymology:"simul（似た）+ ate（する）",                  root:"-simul-", level:5, pos:"動詞"},
  {word:"simultaneous",    meaning:"同時の・同時に起こる",         etymology:"simul（同時に）+ taneous（〜な）",             root:"-simul-", level:5, pos:"形容詞・動詞"},
  {word:"assimilate",      meaning:"同化する・吸収する",           etymology:"as（〜に）+ simil（似た）+ ate（する）",       root:"-simil-", level:5, pos:"動詞"},
  {word:"dissimilar",      meaning:"異なる・相違がある",           etymology:"dis（否定）+ similar（似た）",                root:"-simil-", level:5, pos:"動詞"},
  {word:"resemblance",     meaning:"類似・似ていること",           etymology:"re（再び）+ sembl（似た）+ ance（状態）",      root:"-simil-", level:5, pos:"名詞"},
  {word:"semblance",       meaning:"外見・みせかけ・類似",         etymology:"sembl（似た）+ ance（状態）",                 root:"-simil-", level:6, pos:"名詞"},
  {word:"verisimilitude",  meaning:"真実らしさ・もっともらしさ",    etymology:"veri（真実）+ simil（似た）+ tude（状態）",    root:"-simil-", level:7, pos:"名詞"},

  // ── -sol-（太陽・慰める・一人） ──────────────────
  {word:"solar",           meaning:"太陽の",                    etymology:"sol（太陽）+ ar（〜の）",                     root:"-sol-", level:3, pos:"形容詞"},
  {word:"solitude",        meaning:"孤独・独居",                 etymology:"sol（一人）+ itude（状態）",                  root:"-sol-", level:5, pos:"名詞"},
  {word:"console",         meaning:"慰める・コンソール",          etymology:"con（完全に）+ sole（慰める）",               root:"-sol-", level:5, pos:"動詞・名詞"},
  {word:"solitary",        meaning:"孤独な・一人の",             etymology:"sol（一人）+ itary（〜の）",                  root:"-sol-", level:5, pos:"形容詞"},
  {word:"parasol",         meaning:"日傘",                      etymology:"para（防ぐ）+ sol（太陽）→太陽を防ぐ",        root:"-sol-", level:5, pos:"名詞"},
  {word:"solstice",        meaning:"至（夏至・冬至）",            etymology:"sol（太陽）+ stice（立つ）→太陽が止まる",     root:"-sol-", level:6, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
