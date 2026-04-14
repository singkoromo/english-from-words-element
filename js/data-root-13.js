/**
 * data-root-13.js — 語根データ（-grav-, -hab-, -her-, -jud-, -junct-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -grav-（重い・重力） ──────────────────
  {word:"gravity",       meaning:"重力・重大さ",                etymology:"grav（重い）+ ity（状態）",               root:"-grav-", level:1, pos:"名詞"},
  {word:"grave",         meaning:"重大な・墓",                  etymology:"grav（重い）→ 重大な",                   root:"-grav-", level:1, pos:"形容詞・名詞"},
  {word:"aggravate",     meaning:"悪化させる・憤慨させる",        etymology:"ag（〜に）+ grav（重い）+ ate（する）",  root:"-grav-", level:2, pos:"動詞"},
  {word:"gravitate",     meaning:"引き付けられる・重力に従う",   etymology:"grav（重い）+ itate（する）",             root:"-grav-", level:2, pos:"動詞・名詞"},
  {word:"gravitation",   meaning:"引力・重力",                  etymology:"gravitate（引き付けられる）+ ion（行為）", root:"-grav-", level:2, pos:"名詞"},
  {word:"gravid",        meaning:"妊娠した",                    etymology:"grav（重い）+ id（〜な）",               root:"-grav-", level:3, pos:"形容詞"},
  {word:"gravitas",      meaning:"威厳・重厚さ",                etymology:"grav（重い）+ itas（状態）",              root:"-grav-", level:3, pos:"名詞"},
  {word:"engrave",       meaning:"刻む・彫刻する",               etymology:"en（中に）+ grave（刻む）",              root:"-grav-", level:2, pos:"動詞"},
  {word:"grief",         meaning:"悲しみ・悲嘆",                etymology:"grav（重い）→ 重い心 → grief",           root:"-grav-", level:1, pos:"名詞"},
  {word:"grieve",        meaning:"悲しむ・嘆く",                etymology:"grief（悲しみ）→ grieve",                root:"-grav-", level:1, pos:"動詞"},
  {word:"gravestone",    meaning:"墓石",                        etymology:"grave（墓）+ stone（石）",               root:"-grav-", level:1, pos:"名詞"},
  {word:"aggravation",   meaning:"悪化・苛立ち",                etymology:"aggravate（悪化させる）+ ion（行為）",    root:"-grav-", level:2, pos:"名詞"},
  {word:"gravitational", meaning:"重力の",                      etymology:"gravitation（重力）+ al（〜の）",         root:"-grav-", level:2, pos:"形容詞"},
  {word:"gravimetry",    meaning:"重力測定",                    etymology:"grav（重い）+ imetry（測定）",            root:"-grav-", level:3, pos:"名詞"},

  // ── -hab-/-hib-（持つ・保つ・住む） ──────────────────
  {word:"habit",         meaning:"習慣・癖",                    etymology:"hab（持つ）+ it（〜のもの）→習慣を持つ", root:"-hab-", level:0, pos:"名詞"},
  {word:"habitat",       meaning:"生息地・生育環境",             etymology:"hab（住む）+ itat（〜の場所）",           root:"-hab-", level:1, pos:"名詞"},
  {word:"inhabit",       meaning:"住む・生息する",               etymology:"in（中に）+ hab（住む）+ it（する）",     root:"-hab-", level:1, pos:"動詞"},
  {word:"inhibit",       meaning:"抑制する・禁止する",           etymology:"in（中に）+ hib（持つ）+ it（する）",     root:"-hab-", level:2, pos:"動詞"},
  {word:"exhibit",       meaning:"展示する・示す",               etymology:"ex（外に）+ hib（持つ）+ it（する）",     root:"-hab-", level:1, pos:"動詞"},
  {word:"prohibit",      meaning:"禁止する",                    etymology:"pro（前に）+ hib（持つ）+ it（する）→前で持ち止める",root:"-hab-",level:1, pos:"動詞"},
  {word:"rehabilitation",meaning:"リハビリ・社会復帰",           etymology:"re（再び）+ habilis（適した）+ ation（行為）",root:"-hab-",level:2, pos:"名詞"},
  {word:"habitual",      meaning:"習慣的な",                    etymology:"habit（習慣）+ ual（〜の）",              root:"-hab-", level:2, pos:"形容詞"},
  {word:"habitable",     meaning:"居住可能な",                  etymology:"habit（住む）+ able（できる）",           root:"-hab-", level:2, pos:"形容詞"},
  {word:"cohabit",       meaning:"同棲する",                    etymology:"co（共に）+ habit（住む）",              root:"-hab-", level:2, pos:"動詞"},
  {word:"habitation",    meaning:"居住・住居",                  etymology:"habitat（生息地）+ ion（状態）",          root:"-hab-", level:2, pos:"名詞"},
  {word:"exhibitor",     meaning:"展示者・出展者",               etymology:"exhibit（展示する）+ or（人）",           root:"-hab-", level:2, pos:"名詞"},
  {word:"inhibition",    meaning:"抑制・制止",                  etymology:"inhibit（抑制する）+ ion（行為）",        root:"-hab-", level:2, pos:"名詞"},
  {word:"prohibitive",   meaning:"禁止的な・法外な",             etymology:"prohibit（禁止する）+ ive（性質）",       root:"-hab-", level:3, pos:"形容詞"},

  // ── -her-/-hes-（くっつく・固守する） ──────────────────
  {word:"adhere",        meaning:"くっつく・固守する",           etymology:"ad（〜に）+ here（くっつく）",            root:"-her-", level:2, pos:"動詞"},
  {word:"cohere",        meaning:"結合する・一貫している",        etymology:"co（共に）+ here（くっつく）",            root:"-her-", level:3, pos:"動詞"},
  {word:"inhere",        meaning:"本来備わっている",              etymology:"in（中に）+ here（くっつく）",            root:"-her-", level:3, pos:"動詞"},
  {word:"adherent",      meaning:"支持者・くっついている",         etymology:"adhere（くっつく）+ ent（人・もの）",     root:"-her-", level:3, pos:"名詞・動詞"},
  {word:"coherent",      meaning:"一貫した・まとまりのある",       etymology:"cohere（結合する）+ ent（〜な）",        root:"-her-", level:2, pos:"形容詞・動詞"},
  {word:"inherent",      meaning:"固有の・生来の",               etymology:"inhere（本来備わる）+ ent（〜な）",       root:"-her-", level:2, pos:"形容詞"},
  {word:"hesitate",      meaning:"ためらう・躊躇する",            etymology:"hes（くっつく）+ itate（する）→止まってしまう",root:"-her-",level:1, pos:"名詞・動詞"},
  {word:"adhesive",      meaning:"接着剤・くっつく",              etymology:"adhere（くっつく）+ ive（性質）",         root:"-her-", level:2, pos:"名詞・動詞"},
  {word:"cohesion",      meaning:"結合・凝集",                  etymology:"cohere（結合する）+ sion（状態）",         root:"-her-", level:3, pos:"名詞"},
  {word:"adhesion",      meaning:"付着・癒着",                  etymology:"adhere（くっつく）+ sion（状態）",         root:"-her-", level:3, pos:"名詞"},
  {word:"cohesive",      meaning:"結合した・団結した",            etymology:"cohesion（結合）+ ive（性質）",           root:"-her-", level:2, pos:"形容詞"},
  {word:"incoherent",    meaning:"支離滅裂な",                  etymology:"in（否定）+ coherent（一貫した）",         root:"-her-", level:2, pos:"形容詞"},
  {word:"hesitation",    meaning:"ためらい・躊躇",               etymology:"hesitate（ためらう）+ ion（行為）",       root:"-her-", level:1, pos:"形容詞・名詞"},

  // ── -jud-/-jur-（判断する・誓う） ──────────────────
  {word:"judge",         meaning:"裁判官・判断する",             etymology:"jud（判断する）+ ge（人）",              root:"-jud-", level:0, pos:"名詞・動詞"},
  {word:"justice",       meaning:"正義・裁判",                  etymology:"jus（法）+ tice（状態）",                root:"-jud-", level:1, pos:"名詞"},
  {word:"jury",          meaning:"陪審員",                      etymology:"jur（誓う）+ y（集合）",                 root:"-jud-", level:1, pos:"名詞"},
  {word:"prejudice",     meaning:"偏見・先入観",                etymology:"pre（前に）+ judice（判断）",            root:"-jud-", level:1, pos:"名詞"},
  {word:"adjudicate",    meaning:"判決を下す・裁定する",          etymology:"ad（〜に）+ judicate（判断する）",        root:"-jud-", level:3, pos:"動詞"},
  {word:"judicial",      meaning:"司法の・裁判の",              etymology:"judici（判断する）+ al（〜の）",          root:"-jud-", level:2, pos:"形容詞"},
  {word:"judgment",      meaning:"判断・判決",                  etymology:"judge（判断する）+ ment（結果）",         root:"-jud-", level:1, pos:"名詞"},
  {word:"justify",       meaning:"正当化する",                  etymology:"just（正しい）+ ify（〜にする）",         root:"-jud-", level:1, pos:"動詞"},
  {word:"injustice",     meaning:"不正義・不公平",               etymology:"in（否定）+ justice（正義）",            root:"-jud-", level:1, pos:"名詞"},
  {word:"jurisdiction",  meaning:"管轄権・裁判権",              etymology:"juris（法）+ diction（言う）",            root:"-jud-", level:3, pos:"名詞"},
  {word:"perjury",       meaning:"偽証",                        etymology:"per（完全に）+ jury（誓い）→誓いを破る", root:"-jud-", level:3, pos:"名詞"},
  {word:"judicious",     meaning:"賢明な・分別のある",           etymology:"judici（判断する）+ ous（〜な）",         root:"-jud-", level:3, pos:"形容詞・動詞"},
  {word:"adjudge",       meaning:"裁定する・認定する",           etymology:"ad（〜に）+ judge（裁判する）",           root:"-jud-", level:3, pos:"動詞"},
  {word:"miscarriage of justice",meaning:"冤罪・裁判の誤り",    etymology:"mis（誤った）+ carriage（運搬）+ justice（正義）",root:"-jud-",level:2, pos:"名詞"},

  // ── -junct-（結合する・接合する） ──────────────────
  {word:"junction",      meaning:"接合点・交差点",              etymology:"junct（結合する）+ ion（結果）",          root:"-junct-", level:1, pos:"名詞"},
  {word:"adjunct",       meaning:"付属物・補助",                etymology:"ad（〜に）+ junct（結合する）",           root:"-junct-", level:3, pos:"名詞"},
  {word:"conjunction",   meaning:"接続詞・結合",                etymology:"con（共に）+ junction（接合）",           root:"-junct-", level:2, pos:"名詞"},
  {word:"injunction",    meaning:"差し止め命令・禁止令",          etymology:"in（中に）+ junction（命令）",           root:"-junct-", level:3, pos:"名詞"},
  {word:"disjunction",   meaning:"分離・切断",                  etymology:"dis（離れて）+ junction（接合）",         root:"-junct-", level:3, pos:"名詞"},
  {word:"subjugate",     meaning:"征服する・支配下に置く",        etymology:"sub（下に）+ jug（くびき）+ ate（する）",root:"-junct-", level:3, pos:"動詞"},
  {word:"join",          meaning:"加わる・繋ぐ",                etymology:"junct（結合する）→ join",                root:"-junct-", level:0, pos:"動詞"},
  {word:"joint",         meaning:"関節・共同の",                etymology:"join（繋ぐ）+ t（〜のもの）",             root:"-junct-", level:0, pos:"名詞・形容詞"},
  {word:"conjunct",      meaning:"結合した・連接",               etymology:"con（共に）+ junct（結合する）",          root:"-junct-", level:3, pos:"形容詞・名詞"},
  {word:"juncture",      meaning:"接続点・重大な時機",           etymology:"junct（結合する）+ ure（結果）",          root:"-junct-", level:3, pos:"名詞"},
  {word:"disjunctive",   meaning:"選択的な・分離の",             etymology:"dis（離れて）+ junctive（結合する）",      root:"-junct-", level:3, pos:"形容詞"},
  {word:"conjunctive",   meaning:"結合の・接続詞の",             etymology:"con（共に）+ junctive（結合する）",        root:"-junct-", level:3, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
