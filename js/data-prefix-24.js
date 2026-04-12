/**
 * data-prefix-24.js — 接頭語補充14（trans-, en-, ex-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── trans-（超えて・横断して・変化して） ──────────────────
  {word:"transnational",   meaning:"多国籍の・国境を越えた",       etymology:"trans（超えて）+ national（国の）",                 prefix:"trans-", level:2},
  {word:"transatlantic",   meaning:"大西洋横断の",                 etymology:"trans（横断して）+ atlantic（大西洋）",              prefix:"trans-", level:1},
  {word:"transgender",     meaning:"性別を越えた・性自認が異なる", etymology:"trans（超えて）+ gender（性別）",                   prefix:"trans-", level:1},
  {word:"transliterate",   meaning:"音訳する・文字を置き換える",   etymology:"trans（変えて）+ literate（文字）",                 prefix:"trans-", level:3},
  {word:"transmission",    meaning:"伝達・送信・変速機",           etymology:"trans（超えて）+ mission（送る）",                  prefix:"trans-", level:1},
  {word:"transfix",        meaning:"釘付けにする・貫く",           etymology:"trans（通して）+ fix（固定する）",                  prefix:"trans-", level:2},
  {word:"transpire",       meaning:"起こる・発散する",             etymology:"trans（通して）+ spire（息をする）",                prefix:"trans-", level:2},
  {word:"transpose",       meaning:"置き換える・転置する",         etymology:"trans（超えて）+ pose（置く）",                     prefix:"trans-", level:2},
  {word:"transect",        meaning:"横断する・断面を作る",         etymology:"trans（横断して）+ sect（切る）",                   prefix:"trans-", level:3},
  {word:"transcontinental",meaning:"大陸横断の",                   etymology:"trans（横断して）+ continental（大陸の）",           prefix:"trans-", level:2},
  {word:"transience",      meaning:"儚さ・一時性",                 etymology:"trans（超えて）+ ience（行く）→ すぐに過ぎ去る",   prefix:"trans-", level:3},
  {word:"transmogrify",    meaning:"変形させる・奇妙に変える",     etymology:"trans（変えて）+ mogrify（変形する）",              prefix:"trans-", level:3},
  {word:"transgression",   meaning:"違反・越境・罪",               etymology:"trans（超えて）+ gression（歩く）",                 prefix:"trans-", level:2},
  {word:"transcendence",   meaning:"超越・卓越",                   etymology:"trans（超えて）+ cendence（登る）",                 prefix:"trans-", level:2},
  {word:"translucence",    meaning:"半透明性・透過性",             etymology:"trans（通して）+ lucence（光）",                    prefix:"trans-", level:2},

  // ── en-（中に・〜にする・作る） ──────────────────
  {word:"encircle",        meaning:"取り囲む・包囲する",           etymology:"en（中に）+ circle（円・囲む）",                    prefix:"en-", level:1},
  {word:"endure",          meaning:"耐える・続く",                 etymology:"en（完全に）+ dure（硬い・続く）",                  prefix:"en-", level:1},
  {word:"entrust",         meaning:"委ねる・任せる",               etymology:"en（中に）+ trust（信頼）",                         prefix:"en-", level:1},
  {word:"envision",        meaning:"心に描く・想像する",           etymology:"en（中に）+ vision（見ること）",                    prefix:"en-", level:2},
  {word:"encode",          meaning:"符号化する・暗号化する",       etymology:"en（中に）+ code（記号・規則）",                    prefix:"en-", level:1},
  {word:"enlist",          meaning:"入隊する・賛同を求める",       etymology:"en（中に）+ list（名簿）→ 名簿に加える",            prefix:"en-", level:1},
  {word:"enlighten",       meaning:"啓発する・明らかにする",       etymology:"en（〜にする）+ lighten（明るくする）",             prefix:"en-", level:1},
  {word:"encounter",       meaning:"遭遇する・出会う",             etymology:"en（中に）+ counter（向かい合う）",                 prefix:"en-", level:0},
  {word:"endanger",        meaning:"危険にさらす",                 etymology:"en（中に）+ danger（危険）",                        prefix:"en-", level:1},
  {word:"entangle",        meaning:"絡ませる・もつれさせる",       etymology:"en（中に）+ tangle（絡む）",                        prefix:"en-", level:1},
  {word:"entrench",        meaning:"塹壕に入れる・定着させる",     etymology:"en（中に）+ trench（溝・塹壕）",                    prefix:"en-", level:2},
  {word:"encapsulate",     meaning:"要約する・カプセルに収める",   etymology:"en（中に）+ capsulate（カプセル）",                 prefix:"en-", level:2},
  {word:"endow",           meaning:"寄付する・才能を与える",       etymology:"en（完全に）+ dow（与える）",                       prefix:"en-", level:2},
  {word:"entice",          meaning:"誘惑する・引きつける",         etymology:"en（中に）+ tice（火・引きつける）",                prefix:"en-", level:2},
  {word:"engross",         meaning:"夢中にさせる・独占する",       etymology:"en（完全に）+ gross（大きな）→ すべて占める",       prefix:"en-", level:2},

  // ── ex-（外に・完全に・以前の） ──────────────────
  {word:"excavate",        meaning:"掘削する・発掘する",           etymology:"ex（外に）+ cavate（穴）→ 穴を掘り出す",           prefix:"ex-", level:1},
  {word:"exert",           meaning:"発揮する・努力する",           etymology:"ex（外に）+ ert（つなぐ・力を出す）",               prefix:"ex-", level:1},
  {word:"explicit",        meaning:"明示的な・明確な",             etymology:"ex（外に）+ plicit（折る）→ 広げて見せる",          prefix:"ex-", level:2},
  {word:"exploit",         meaning:"活用する・搾取する",           etymology:"ex（外に）+ ploit（折る・広げる）",                 prefix:"ex-", level:2},
  {word:"expire",          meaning:"期限が切れる・息を引き取る",   etymology:"ex（外に）+ pire（息をする）",                      prefix:"ex-", level:1},
  {word:"exhibit",         meaning:"展示する・示す",               etymology:"ex（外に）+ hibit（保つ・持つ）",                   prefix:"ex-", level:1},
  {word:"execute",         meaning:"実行する・処刑する",           etymology:"ex（外に）+ ecute（追う）→ 完全に追いかける",       prefix:"ex-", level:1},
  {word:"external",        meaning:"外部の・外側の",               etymology:"ex（外の）+ ternal（外側の）",                      prefix:"ex-", level:0},
  {word:"evacuate",        meaning:"避難させる・立ち退かせる",     etymology:"ex（外に）+ vacuate（空にする）",                   prefix:"ex-", level:1},
  {word:"exemplify",       meaning:"例証する・具体例を示す",       etymology:"ex（外に）+ emplify（例を出す）",                   prefix:"ex-", level:2},
  {word:"exude",           meaning:"にじみ出る・発散する",         etymology:"ex（外に）+ ude（汗をかく）",                       prefix:"ex-", level:2},
  {word:"exhilarate",      meaning:"活気づける・元気にする",       etymology:"ex（完全に）+ hilarate（明るくする）",              prefix:"ex-", level:2},
  {word:"extravagant",     meaning:"浪費する・過度な",             etymology:"ex（外に）+ travagant（さまよう）→ 外れた",         prefix:"ex-", level:2},
  {word:"exacerbate",      meaning:"悪化させる・激化する",         etymology:"ex（完全に）+ acerbate（苦くする）",                prefix:"ex-", level:3},
  {word:"expatriate",      meaning:"国外追放する・海外在住者",     etymology:"ex（外に）+ patriate（故国）→ 故国を離れた",        prefix:"ex-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
