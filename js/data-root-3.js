/**
 * data-root-3.js — 語根データ（-cred-, -aud-, -vis-/-vid-, -sent-/-sens-, -ped-/-pod-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -cred-（信じる・信頼） ────────────────────
  {word:"credit",        meaning:"信用・クレジット",      etymology:"cred（信じる）+ it（〜のもの）",           root:"-cred-", level:1, pos:"名詞"},
  {word:"credible",      meaning:"信頼できる",            etymology:"cred（信じる）+ ible（できる）",           root:"-cred-", level:3, pos:"動詞"},
  {word:"incredible",    meaning:"信じられない・素晴らしい",etymology:"in（否定）+ credible（信頼できる）",     root:"-cred-", level:2, pos:"形容詞"},
  {word:"credential",    meaning:"資格証明・認定書",      etymology:"cred（信じる）+ ential（〜の）",          root:"-cred-", level:5, pos:"名詞"},
  {word:"creed",         meaning:"信条・教義",            etymology:"cred（信じる）+ d",                        root:"-cred-", level:5, pos:"名詞"},
  {word:"accredit",      meaning:"認定する・資格を与える",etymology:"ac（〜に）+ cred（信じる）+ it",          root:"-cred-", level:5, pos:"動詞"},
  {word:"discredit",     meaning:"信用を傷つける",        etymology:"dis（否定）+ credit（信用）",              root:"-cred-", level:5, pos:"動詞"},
  {word:"credulous",     meaning:"騙されやすい・信じやすい",etymology:"cred（信じる）+ ulous（性質）",          root:"-cred-", level:5, pos:"形容詞"},
  {word:"incredulous",   meaning:"信じない・疑い深い",    etymology:"in（否定）+ credulous（信じやすい）",     root:"-cred-", level:5, pos:"形容詞"},
  {word:"credulity",     meaning:"お人好し・信じやすさ",  etymology:"cred（信じる）+ ulity（性質）",            root:"-cred-", level:6, pos:"名詞"},
  {word:"creditor",      meaning:"債権者",                etymology:"cred（信じる）+ itor（〜する人）",         root:"-cred-", level:5, pos:"名詞"},
  {word:"credibility",   meaning:"信憑性・信頼性",        etymology:"credib（信頼できる）+ ility（性質）",      root:"-cred-", level:6, pos:"名詞"},
  {word:"accreditation", meaning:"認定・資格付与",        etymology:"ac（〜に）+ creditation（信じる）",        root:"-cred-", level:6, pos:"名詞"},

  // ── -aud-（聞く） ─────────────────────────────
  {word:"audio",         meaning:"音声・オーディオ",      etymology:"aud（聞く）+ io（〜のもの）",              root:"-aud-", level:1, pos:"名詞"},
  {word:"audience",      meaning:"観客・聴衆",            etymology:"aud（聞く）+ ience（〜する人々）",         root:"-aud-", level:1, pos:"名詞"},
  {word:"auditorium",    meaning:"講堂・観客席",          etymology:"aud（聞く）+ itorium（場所）",             root:"-aud-", level:4, pos:"名詞"},
  {word:"audible",       meaning:"聞こえる",              etymology:"aud（聞く）+ ible（できる）",              root:"-aud-", level:3, pos:"動詞"},
  {word:"audit",         meaning:"監査する・聴講する",    etymology:"aud（聞く）+ it（〜のもの）",              root:"-aud-", level:5, pos:"動詞"},
  {word:"auditory",      meaning:"聴覚の",                etymology:"aud（聞く）+ itory（〜の）",               root:"-aud-", level:5, pos:"形容詞"},
  {word:"audition",      meaning:"オーディション",        etymology:"aud（聞く）+ ition（行為）",               root:"-aud-", level:3, pos:"名詞"},
  {word:"inaudible",     meaning:"聞こえない",            etymology:"in（否定）+ audible（聞こえる）",          root:"-aud-", level:3, pos:"形容詞"},
  {word:"audiophile",    meaning:"音響マニア",            etymology:"aud（聞く）+ io（音）+ phile（愛好者）",   root:"-aud-", level:5, pos:"名詞"},
  {word:"audiovisual",   meaning:"視聴覚の",              etymology:"aud（聞く）+ io（音）+ visual（視覚）",    root:"-aud-", level:4, pos:"形容詞"},
  {word:"auditor",       meaning:"監査役・聴講者",        etymology:"aud（聞く）+ itor（〜する人）",            root:"-aud-", level:5, pos:"名詞"},
  {word:"obedient",      meaning:"従順な・従う",          etymology:"ob（〜に）+ aud（聞く）+ ient",           root:"-aud-", level:3, pos:"形容詞・名詞"},
  {word:"disobedient",   meaning:"不従順な",              etymology:"dis（否定）+ obedient（従順な）",          root:"-aud-", level:4, pos:"形容詞"},

  // ── -vis-/-vid-（見る） ───────────────────────
  {word:"vision",        meaning:"視力・ビジョン",        etymology:"vis（見る）+ ion（状態）",                 root:"-vis-", level:1, pos:"名詞"},
  {word:"visible",       meaning:"見える・目に見える",    etymology:"vis（見る）+ ible（できる）",              root:"-vis-", level:1, pos:"動詞"},
  {word:"television",    meaning:"テレビ",                etymology:"tele（遠くの）+ vision（見る）",           root:"-vis-", level:2, pos:"名詞"},
  {word:"evidence",      meaning:"証拠・証明",            etymology:"e（外に）+ vid（見る）+ ence（状態）",     root:"-vis-", level:3, pos:"名詞"},
  {word:"provide",       meaning:"提供する",              etymology:"pro（前に）+ vid（見る）+ e",              root:"-vis-", level:1, pos:"動詞"},
  {word:"visit",         meaning:"訪問する",              etymology:"vis（見る）+ it（行く）",                  root:"-vis-", level:1, pos:"動詞"},
  {word:"supervise",     meaning:"監督する",              etymology:"super（上に）+ vis（見る）+ e",            root:"-vis-", level:3, pos:"動詞"},
  {word:"revise",        meaning:"改訂する・修正する",    etymology:"re（再び）+ vis（見る）+ e",               root:"-vis-", level:3, pos:"動詞"},
  {word:"devise",        meaning:"考案する・遺贈する",    etymology:"de（完全に）+ vis（見る）+ e",             root:"-vis-", level:5, pos:"動詞"},
  {word:"video",         meaning:"ビデオ・映像",          etymology:"vid（見る）+ eo（〜のもの）",              root:"-vis-", level:1, pos:"名詞"},
  {word:"visual",        meaning:"視覚的な",              etymology:"vis（見る）+ ual（〜の）",                 root:"-vis-", level:3, pos:"形容詞"},
  {word:"invisible",     meaning:"見えない",              etymology:"in（否定）+ visible（見える）",            root:"-vis-", level:2, pos:"形容詞"},
  {word:"advisor",       meaning:"顧問・アドバイザー",    etymology:"ad（〜に）+ vis（見る）+ or（〜する人）",   root:"-vis-", level:3, pos:"名詞"},
  {word:"improvise",     meaning:"即興で行う",            etymology:"im（否定）+ pro（前に）+ vis（見る）+ e",  root:"-vis-", level:5, pos:"名詞"},
  {word:"envisage",      meaning:"想定する・心に描く",    etymology:"en（〜の中に）+ vis（見る）+ age",         root:"-vis-", level:5, pos:"動詞"},
  {word:"envision",      meaning:"心に描く・思い描く",    etymology:"en（〜の中に）+ vision（見る）",           root:"-vis-", level:5, pos:"動詞"},
  {word:"visionary",     meaning:"先見の明のある・幻想家",etymology:"vision（見る）+ ary（〜の）",              root:"-vis-", level:5, pos:"動詞・名詞"},
  {word:"providence",    meaning:"神の摂理・先見の明",    etymology:"pro（前に）+ vid（見る）+ ence",           root:"-vis-", level:5, pos:"名詞"},

  // ── -sent-/-sens-（感じる・感覚） ────────────
  {word:"sense",         meaning:"感覚・意味する",        etymology:"sens（感じる）+ e",                        root:"-sent-", level:1, pos:"名詞・動詞"},
  {word:"sensitive",     meaning:"敏感な・繊細な",        etymology:"sens（感じる）+ itive（傾向）",            root:"-sent-", level:3, pos:"形容詞"},
  {word:"sentence",      meaning:"文・判決",              etymology:"sent（感じる）+ ence（状態）",             root:"-sent-", level:1, pos:"名詞"},
  {word:"consent",       meaning:"同意する",              etymology:"con（共に）+ sent（感じる）",              root:"-sent-", level:3, pos:"動詞"},
  {word:"assent",        meaning:"賛成する",              etymology:"as（〜に）+ sent（感じる）",               root:"-sent-", level:5, pos:"動詞"},
  {word:"dissent",       meaning:"反対意見・異議",        etymology:"dis（離れて）+ sent（感じる）",            root:"-sent-", level:5, pos:"名詞"},
  {word:"resent",        meaning:"憤る・腹を立てる",      etymology:"re（再び）+ sent（感じる）",               root:"-sent-", level:3, pos:"動詞"},
  {word:"sensation",     meaning:"感覚・大反響",          etymology:"sens（感じる）+ ation（行為）",            root:"-sent-", level:3, pos:"名詞"},
  {word:"sensory",       meaning:"感覚の",                etymology:"sens（感じる）+ ory（〜の）",              root:"-sent-", level:5, pos:"形容詞"},
  {word:"sentiment",     meaning:"感情・意見",            etymology:"sent（感じる）+ iment（状態）",            root:"-sent-", level:5, pos:"名詞"},
  {word:"insensitive",   meaning:"無神経な・鈍感な",      etymology:"in（否定）+ sensitive（敏感な）",          root:"-sent-", level:5, pos:"形容詞"},
  {word:"hypersensitive",meaning:"過敏な",                etymology:"hyper（過度に）+ sensitive（敏感な）",     root:"-sent-", level:6, pos:"形容詞"},
  {word:"presentiment",  meaning:"予感・虫の知らせ",      etymology:"pre（前に）+ sentiment（感情）",           root:"-sent-", level:6, pos:"名詞"},
  {word:"sentimental",   meaning:"感傷的な",              etymology:"sentiment（感情）+ al（〜の）",            root:"-sent-", level:4, pos:"形容詞"},
  {word:"sentient",      meaning:"感覚のある・知覚できる",etymology:"sent（感じる）+ ient（〜している）",       root:"-sent-", level:5, pos:"動詞"},
  {word:"sensible",      meaning:"賢明な・感覚のある",    etymology:"sens（感じる）+ ible（できる）",           root:"-sent-", level:3, pos:"形容詞・動詞"},
  {word:"nonsense",      meaning:"ナンセンス・無意味",    etymology:"non（否定）+ sense（意味）",               root:"-sent-", level:1, pos:"名詞"},
  {word:"supersensitive",meaning:"超敏感な",              etymology:"super（超えて）+ sensitive（敏感な）",     root:"-sent-", level:7, pos:"形容詞"},

  // ── -ped-/-pod-（足） ─────────────────────────
  {word:"pedestrian",    meaning:"歩行者",                etymology:"ped（足）+ estrian（〜する人）",           root:"-ped-", level:3, pos:"名詞"},
  {word:"pedal",         meaning:"ペダル",                etymology:"ped（足）+ al（〜の）",                    root:"-ped-", level:1, pos:"名詞"},
  {word:"expedition",    meaning:"遠征・探検",            etymology:"ex（外に）+ ped（足）+ ition（行為）",     root:"-ped-", level:4, pos:"名詞"},
  {word:"impede",        meaning:"妨げる・邪魔する",      etymology:"im（中に）+ ped（足）+ e",                 root:"-ped-", level:5, pos:"動詞"},
  {word:"tripod",        meaning:"三脚",                  etymology:"tri（三つ）+ pod（足）",                   root:"-ped-", level:3, pos:"名詞"},
  {word:"podium",        meaning:"演壇・表彰台",          etymology:"pod（足・台）+ ium（場所）",               root:"-ped-", level:3, pos:"名詞"},
  {word:"centipede",     meaning:"ムカデ",                etymology:"centi（百）+ pede（足）",                  root:"-ped-", level:3, pos:"名詞"},
  {word:"millipede",     meaning:"ヤスデ",                etymology:"milli（千）+ pede（足）",                  root:"-ped-", level:5, pos:"名詞"},
  {word:"biped",         meaning:"二足動物",              etymology:"bi（二つ）+ ped（足）",                    root:"-ped-", level:5, pos:"名詞"},
  {word:"quadruped",     meaning:"四足動物",              etymology:"quadru（四つ）+ ped（足）",                root:"-ped-", level:5, pos:"名詞"},
  {word:"orthopedic",    meaning:"整形外科の",            etymology:"ortho（直す）+ ped（足）+ ic（〜の）",     root:"-ped-", level:5, pos:"形容詞"},
  {word:"impediment",    meaning:"障害・妨げ",            etymology:"im（中に）+ ped（足）+ iment（状態）",     root:"-ped-", level:5, pos:"名詞"},
  {word:"expedite",      meaning:"促進する・迅速にする",  etymology:"ex（外に）+ ped（足）+ ite",               root:"-ped-", level:5, pos:"動詞"},
  {word:"podiatrist",    meaning:"足病医",                etymology:"pod（足）+ iatrist（医者）",               root:"-ped-", level:6, pos:"名詞"},
  {word:"octopus",       meaning:"タコ",                  etymology:"octo（八つ）+ pus（足）",                  root:"-ped-", level:3, pos:"名詞"},
  {word:"platypus",      meaning:"カモノハシ",            etymology:"platy（平らな）+ pus（足）",               root:"-ped-", level:3, pos:"名詞"},
  {word:"antipodal",     meaning:"正反対の・対蹠地の",    etymology:"anti（反対）+ pod（足）+ al（〜の）",      root:"-ped-", level:6, pos:"形容詞"},
  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
