/**
 * data-root-18.js — 語根データ（-pass-, -path-, -pel-, -pet-, -plex-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -pass-/-pac-（歩く・通る） ──────────────────
  {word:"pass",            meaning:"通過する・合格する・パス",   etymology:"pass（通る）→ラテン語passus（歩み）",          root:"-pass-", level:1, pos:"動詞・名詞"},
  {word:"surpass",         meaning:"超える・上回る",             etymology:"sur（上を）+ pass（通る）",                   root:"-pass-", level:5, pos:"動詞"},
  {word:"bypass",          meaning:"迂回する・バイパス",         etymology:"by（そばを）+ pass（通る）",                  root:"-pass-", level:3, pos:"動詞・名詞"},
  {word:"trespass",        meaning:"不法侵入する・罪を犯す",     etymology:"tres（超えて）+ pass（通る）",                root:"-pass-", level:5, pos:"動詞"},
  {word:"compass",         meaning:"羅針盤・範囲・取り囲む",     etymology:"com（完全に）+ pass（歩く）→周囲を歩く",      root:"-pass-", level:3, pos:"名詞・動詞"},
  {word:"impasse",         meaning:"行き詰まり・袋小路",         etymology:"im（否定）+ pass（通る）→通れない",            root:"-pass-", level:6, pos:"名詞"},
  {word:"overpass",        meaning:"高架橋・跨線橋",             etymology:"over（上を）+ pass（通る）",                  root:"-pass-", level:3, pos:"名詞"},
  {word:"passport",        meaning:"パスポート・旅券",           etymology:"pass（通る）+ port（港）→港を通る証明",        root:"-pass-", level:1, pos:"名詞"},
  {word:"password",        meaning:"パスワード・合言葉",         etymology:"pass（通る）+ word（言葉）",                  root:"-pass-", level:1, pos:"名詞"},
  {word:"passage",         meaning:"通路・文章の一節・通過",     etymology:"pass（通る）+ age（行為）",                   root:"-pass-", level:3, pos:"名詞"},

  // ── -path-/-pathy-（感情・病気・苦しみ） ──────────────────
  {word:"sympathy",        meaning:"同情・共感",                 etymology:"sym（共に）+ pathy（感情）",                  root:"-path-", level:3, pos:"名詞"},
  {word:"empathy",         meaning:"感情移入・共感",             etymology:"em（内に）+ pathy（感情）",                   root:"-path-", level:3, pos:"名詞"},
  {word:"apathy",          meaning:"無関心・無気力",             etymology:"a（否定）+ pathy（感情）",                    root:"-path-", level:5, pos:"名詞"},
  {word:"antipathy",       meaning:"嫌悪・反感",                 etymology:"anti（反対）+ pathy（感情）",                 root:"-path-", level:5, pos:"名詞"},
  {word:"pathology",       meaning:"病理学",                    etymology:"path（病気）+ ology（学問）",                 root:"-path-", level:5, pos:"名詞"},
  {word:"pathological",    meaning:"病的な・病理学の",           etymology:"pathology（病理学）+ al（〜の）",              root:"-path-", level:6, pos:"形容詞"},
  {word:"psychopath",      meaning:"精神病質者・サイコパス",      etymology:"psycho（心）+ path（病気）",                  root:"-path-", level:5, pos:"名詞"},
  {word:"sociopath",       meaning:"社会病質者",                 etymology:"socio（社会）+ path（病気）",                 root:"-path-", level:5, pos:"名詞"},
  {word:"telepathy",       meaning:"テレパシー・精神感応",        etymology:"tele（遠く）+ pathy（感情）",                 root:"-path-", level:5, pos:"名詞"},
  {word:"osteopath",       meaning:"整骨師",                    etymology:"osteo（骨）+ path（治療）",                   root:"-path-", level:6, pos:"名詞"},

  // ── -pel-/-puls-（押す・駆り立てる） ──────────────────
  {word:"compel",          meaning:"強制する・余儀なくさせる",    etymology:"com（完全に）+ pel（押す）",                  root:"-pel-", level:5, pos:"動詞"},
  {word:"expel",           meaning:"追放する・除名する",         etymology:"ex（外に）+ pel（押す）",                     root:"-pel-", level:5, pos:"動詞"},
  {word:"propel",          meaning:"推進する・駆り立てる",        etymology:"pro（前に）+ pel（押す）",                    root:"-pel-", level:5, pos:"動詞"},
  {word:"repel",           meaning:"撃退する・反発する",         etymology:"re（後ろに）+ pel（押す）",                   root:"-pel-", level:5, pos:"動詞"},
  {word:"impel",           meaning:"駆り立てる・促す",           etymology:"im（中に）+ pel（押す）",                     root:"-pel-", level:6, pos:"動詞"},
  {word:"dispel",          meaning:"払い散らす・消し去る",        etymology:"dis（離れて）+ pel（押す）",                  root:"-pel-", level:5, pos:"動詞"},
  {word:"impulse",         meaning:"衝動・推進力",               etymology:"im（中に）+ puls（押す）+ e",                 root:"-puls-", level:5, pos:"名詞"},
  {word:"compulsory",      meaning:"強制的な・義務的な",         etymology:"com（完全に）+ puls（押す）+ ory（〜の）",     root:"-puls-", level:5, pos:"形容詞"},
  {word:"repulsive",       meaning:"反発する・不快な",           etymology:"re（後ろに）+ puls（押す）+ ive（〜の）",      root:"-puls-", level:5, pos:"動詞・形容詞"},
  {word:"propulsion",      meaning:"推進・推進力",               etymology:"propel（推進する）+ sion（行為）",             root:"-puls-", level:5, pos:"名詞"},

  // ── -pet-/-pit-（求める・急ぐ） ──────────────────
  {word:"compete",         meaning:"競争する・張り合う",         etymology:"com（共に）+ pete（求める）",                  root:"-pet-", level:3, pos:"動詞・名詞"},
  {word:"competent",       meaning:"有能な・適格な",             etymology:"com（共に）+ pet（求める）+ ent（〜な）",      root:"-pet-", level:3, pos:"形容詞"},
  {word:"appetite",        meaning:"食欲・欲求",                 etymology:"ap（〜に）+ pet（求める）+ ite",              root:"-pet-", level:3, pos:"名詞"},
  {word:"petition",        meaning:"請願・訴願",                 etymology:"pet（求める）+ ition（行為）",                root:"-pet-", level:5, pos:"名詞"},
  {word:"impetuous",       meaning:"衝動的な・無鉄砲な",         etymology:"im（中に）+ pet（急ぐ）+ uous（〜な）",        root:"-pet-", level:6, pos:"形容詞"},
  {word:"perpetual",       meaning:"永続的な・絶え間ない",        etymology:"per（完全に）+ pet（求める）+ ual（〜の）",    root:"-pet-", level:5, pos:"形容詞"},
  {word:"repeat",          meaning:"繰り返す・反復する",         etymology:"re（再び）+ pet（求める）+ at",               root:"-pet-", level:1, pos:"動詞"},
  {word:"repetition",      meaning:"繰り返し・反復",             etymology:"repeat（繰り返す）+ ition（行為）",            root:"-pet-", level:4, pos:"名詞"},
  {word:"centripetal",     meaning:"求心性の",                  etymology:"centri（中心）+ pet（向かう）+ al（〜の）",    root:"-pet-", level:6, pos:"形容詞"},

  // ── -plex-/-plic-（折る・絡む） ──────────────────
  {word:"complex",         meaning:"複雑な・コンプレックス",      etymology:"com（共に）+ plex（折る）→折り重なった",       root:"-plex-", level:3, pos:"形容詞・名詞"},
  {word:"complexity",      meaning:"複雑さ",                    etymology:"complex（複雑な）+ ity（状態）",               root:"-plex-", level:4, pos:"名詞"},
  {word:"perplex",         meaning:"困惑させる・当惑させる",      etymology:"per（完全に）+ plex（絡む）",                 root:"-plex-", level:5, pos:"動詞"},
  {word:"duplex",          meaning:"二重の・二世帯住宅",         etymology:"du（二）+ plex（折る）→二重に折った",          root:"-plex-", level:5, pos:"形容詞・名詞"},
  {word:"implicate",       meaning:"関与させる・暗示する",        etymology:"im（中に）+ plic（折る）+ ate（する）",        root:"-plic-", level:5, pos:"動詞"},
  {word:"explicit",        meaning:"明確な・露骨な",             etymology:"ex（外に）+ plic（折る）+ it→広げた",          root:"-plic-", level:5, pos:"形容詞"},
  {word:"implicit",        meaning:"暗黙の・絶対的な",           etymology:"im（中に）+ plic（折る）+ it→折り込まれた",    root:"-plic-", level:5, pos:"形容詞"},
  {word:"replicate",       meaning:"複製する・再現する",         etymology:"re（再び）+ plic（折る）+ ate（する）",        root:"-plic-", level:5, pos:"動詞"},
  {word:"complicate",      meaning:"複雑にする",                etymology:"com（共に）+ plic（折る）+ ate（する）",       root:"-plic-", level:3, pos:"動詞"},
  {word:"application",     meaning:"応用・申請・アプリ",          etymology:"ap（〜に）+ plic（折る）+ ation（行為）",      root:"-plic-", level:2, pos:"名詞"},
  {word:"multiplication",  meaning:"掛け算・増加・増殖",         etymology:"multi（多く）+ plic（折る）+ ation→何度も折る",root:"-plic-", level:4, pos:"名詞"},
  {word:"supplicate",      meaning:"嘆願する・哀訴する",         etymology:"sup（下に）+ plic（折る）→ひれ伏す",          root:"-plic-", level:6, pos:"動詞"},

  // ── -plor-（探る・叫ぶ） ──────────────────
  {word:"explore",         meaning:"探検する・調査する",         etymology:"ex（外に）+ plore（探る）",                   root:"-plor-", level:3, pos:"動詞"},
  {word:"implore",         meaning:"哀願する・懇願する",         etymology:"im（中に）+ plore（叫ぶ）",                   root:"-plor-", level:5, pos:"動詞"},
  {word:"deplore",         meaning:"嘆く・遺憾に思う",           etymology:"de（下に）+ plore（叫ぶ）",                   root:"-plor-", level:5, pos:"動詞・名詞"},
  {word:"exploration",     meaning:"探検・調査",                 etymology:"explore（探検する）+ tion（行為）",            root:"-plor-", level:4, pos:"名詞"},
  {word:"explorative",     meaning:"探索的な・調査の",           etymology:"explore（探検する）+ ative（〜の）",           root:"-plor-", level:5, pos:"形容詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
