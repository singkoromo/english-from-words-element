/**
 * data-root-9.js — 語根データ（-clud-, -cogn-, -cord-, -corp-, -cosm-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -clud-/-clus-（閉じる・含む） ──────────────────
  {word:"include",       meaning:"含む・含める",               etymology:"in（中に）+ clude（閉じる）",             root:"-clud-", level:0, pos:"動詞"},
  {word:"exclude",       meaning:"除外する・締め出す",          etymology:"ex（外に）+ clude（閉じる）",             root:"-clud-", level:1, pos:"動詞"},
  {word:"conclude",      meaning:"結論を出す・終わる",          etymology:"con（完全に）+ clude（閉じる）",          root:"-clud-", level:1, pos:"動詞"},
  {word:"preclude",      meaning:"妨げる・不可能にする",        etymology:"pre（前に）+ clude（閉じる）",            root:"-clud-", level:3, pos:"動詞"},
  {word:"seclude",       meaning:"隔離する・引きこもる",        etymology:"se（離れて）+ clude（閉じる）",           root:"-clud-", level:3, pos:"動詞"},
  {word:"occlude",       meaning:"閉塞する・遮断する",          etymology:"oc（〜に）+ clude（閉じる）",            root:"-clud-", level:3, pos:"動詞"},
  {word:"recluse",       meaning:"世捨て人・隠遁者",           etymology:"re（後ろに）+ cluse（閉じた）",           root:"-clud-", level:3, pos:"名詞"},
  {word:"inclusive",     meaning:"包括的な",                   etymology:"in（中に）+ clus（閉じる）+ ive（性質）", root:"-clud-", level:2, pos:"形容詞"},
  {word:"exclusive",     meaning:"排他的な・独占的な",          etymology:"ex（外に）+ clus（閉じる）+ ive（性質）", root:"-clud-", level:1, pos:"形容詞"},
  {word:"conclusion",    meaning:"結論・終結",                 etymology:"con（完全に）+ clusion（閉じること）",    root:"-clud-", level:0, pos:"名詞"},
  {word:"exclusion",     meaning:"除外・排除",                 etymology:"ex（外に）+ clusion（閉じること）",       root:"-clud-", level:2, pos:"名詞"},
  {word:"inclusion",     meaning:"包含・含むこと",              etymology:"in（中に）+ clusion（閉じること）",       root:"-clud-", level:2, pos:"名詞"},
  {word:"seclusion",     meaning:"隔離・孤立",                 etymology:"se（離れて）+ clusion（閉じること）",     root:"-clud-", level:3, pos:"名詞"},
  {word:"occlusion",     meaning:"閉塞・遮断",                 etymology:"oc（〜に）+ clusion（閉じること）",      root:"-clud-", level:3, pos:"名詞"},
  {word:"inconclusive",  meaning:"決定的でない・不完全な",      etymology:"in（否定）+ conclusive（決定的な）",      root:"-clud-", level:2, pos:"形容詞"},
  {word:"foreclose",     meaning:"抵当権を実行する",           etymology:"fore（前に）+ close（閉じる）",          root:"-clud-", level:3, pos:"動詞"},
  {word:"enclose",       meaning:"囲む・同封する",              etymology:"en（中に）+ close（閉じる）",            root:"-clud-", level:1, pos:"動詞"},
  {word:"disclose",      meaning:"明かす・開示する",            etymology:"dis（否定）+ close（閉じる）",           root:"-clud-", level:2, pos:"動詞"},

  // ── -cogn-/-gnos-（知る・認識する） ──────────────────
  {word:"recognize",     meaning:"認識する・認める",            etymology:"re（再び）+ cogn（知る）+ ize（する）",  root:"-cogn-", level:0, pos:"動詞"},
  {word:"cognition",     meaning:"認知・認識",                 etymology:"cogn（知る）+ ition（行為）",            root:"-cogn-", level:2, pos:"名詞"},
  {word:"cognitive",     meaning:"認知的な",                   etymology:"cogn（知る）+ itive（性質）",            root:"-cogn-", level:2, pos:"形容詞"},
  {word:"incognito",     meaning:"正体を隠して・匿名で",        etymology:"in（否定）+ cognito（知られた）",         root:"-cogn-", level:2, pos:"名詞"},
  {word:"cognizant",     meaning:"気づいている・知っている",    etymology:"cogn（知る）+ izant（〜な状態）",         root:"-cogn-", level:3, pos:"動詞"},
  {word:"diagnosis",     meaning:"診断",                       etymology:"dia（通じて）+ gnosis（知ること）",       root:"-cogn-", level:2, pos:"名詞"},
  {word:"prognosis",     meaning:"予後・予測",                 etymology:"pro（前に）+ gnosis（知ること）",         root:"-cogn-", level:2, pos:"名詞"},
  {word:"agnostic",      meaning:"不可知論者",                 etymology:"a（否定）+ gnostic（知る）",             root:"-cogn-", level:3, pos:"名詞"},
  {word:"cognoscenti",   meaning:"通人・鑑識眼のある人々",      etymology:"cogn（知る）+ oscenti（〜する人）",       root:"-cogn-", level:3, pos:"名詞"},
  {word:"precognition",  meaning:"予知・前知識",               etymology:"pre（前に）+ cognition（認知）",         root:"-cogn-", level:3, pos:"名詞"},
  {word:"metacognition", meaning:"メタ認知",                   etymology:"meta（超えて）+ cognition（認知）",       root:"-cogn-", level:3, pos:"名詞"},
  {word:"recognition",   meaning:"認識・認定",                 etymology:"recognize（認識する）+ ion（行為）",      root:"-cogn-", level:1, pos:"名詞"},
  {word:"cognate",       meaning:"同語源の・同族語",           etymology:"co（共に）+ gnate（生まれた）",           root:"-cogn-", level:3, pos:"形容詞・名詞"},
  {word:"ignorance",     meaning:"無知・知らないこと",          etymology:"i（否定）+ gnor（知る）+ ance（状態）",  root:"-cogn-", level:1, pos:"名詞"},

  // ── -cord-（心・合意・弦） ──────────────────
  {word:"record",        meaning:"記録する・録音する",          etymology:"re（再び）+ cord（心）→心に刻む",        root:"-cord-", level:0, pos:"動詞"},
  {word:"accord",        meaning:"合意する・一致する",          etymology:"ac（〜に）+ cord（心）→心が合う",        root:"-cord-", level:2, pos:"動詞"},
  {word:"discord",       meaning:"不和・不一致",               etymology:"dis（否定）+ cord（心）→心が合わない",   root:"-cord-", level:2, pos:"名詞"},
  {word:"concord",       meaning:"和合・協調",                 etymology:"con（共に）+ cord（心）→心を合わせる",   root:"-cord-", level:3, pos:"名詞"},
  {word:"cordial",       meaning:"心からの・温かい",            etymology:"cord（心）+ ial（〜の）",               root:"-cord-", level:2, pos:"形容詞"},
  {word:"core",          meaning:"核心・中心",                 etymology:"cor（心・中心）→ core",                  root:"-cord-", level:0, pos:"名詞"},
  {word:"courage",       meaning:"勇気",                       etymology:"cor（心）+ age（状態）→心の持ち方",      root:"-cord-", level:0, pos:"名詞"},
  {word:"encourage",     meaning:"励ます・勇気づける",          etymology:"en（〜にする）+ courage（勇気）",        root:"-cord-", level:0, pos:"動詞"},
  {word:"discourage",    meaning:"落胆させる",                 etymology:"dis（否定）+ courage（勇気）",           root:"-cord-", level:1, pos:"動詞"},
  {word:"accordance",    meaning:"一致・調和",                 etymology:"accord（合意する）+ ance（状態）",        root:"-cord-", level:2, pos:"名詞"},
  {word:"concordance",   meaning:"一致・用語索引",              etymology:"concord（和合）+ ance（状態）",          root:"-cord-", level:3, pos:"名詞"},
  {word:"cordially",     meaning:"心から・温かく",              etymology:"cordial（心からの）+ ly（〜に）",         root:"-cord-", level:2, pos:"名詞・動詞"},
  {word:"discordant",    meaning:"不調和の・矛盾した",          etymology:"discord（不和）+ ant（〜な）",           root:"-cord-", level:3, pos:"形容詞"},
  {word:"cordate",       meaning:"心形の（植物の葉）",          etymology:"cord（心）+ ate（〜の形）",              root:"-cord-", level:3, pos:"名詞"},

  // ── -corp-/-cor-（体・物体） ──────────────────
  {word:"corporation",   meaning:"企業・法人",                 etymology:"corp（体）+ oration（行為）→法人体",     root:"-corp-", level:1, pos:"名詞"},
  {word:"corpse",        meaning:"死体・遺体",                 etymology:"corp（体）+ se→体（死んだ）",            root:"-corp-", level:1, pos:"名詞"},
  {word:"corporal",      meaning:"肉体の・上等兵",             etymology:"corp（体）+ oral（〜の）",              root:"-corp-", level:2, pos:"形容詞・名詞"},
  {word:"corporate",     meaning:"企業の・法人の",             etymology:"corp（体）+ orate（〜の）",             root:"-corp-", level:1, pos:"形容詞"},
  {word:"corpulent",     meaning:"肥満した・太った",           etymology:"corp（体）+ ulent（〜に満ちた）",        root:"-corp-", level:3, pos:"形容詞"},
  {word:"incorporate",   meaning:"合併する・組み込む",          etymology:"in（中に）+ corp（体）+ orate（する）", root:"-corp-", level:2, pos:"動詞"},
  {word:"corpus",        meaning:"全集・コーパス",              etymology:"corp（体）+ us（〜の集合）",             root:"-corp-", level:3, pos:"名詞"},
  {word:"corporeal",     meaning:"肉体的な・物質的な",          etymology:"corp（体）+ oreal（〜の）",             root:"-corp-", level:3, pos:"形容詞"},
  {word:"corpuscle",     meaning:"血球・微粒子",               etymology:"corp（体）+ uscle（小さい）",           root:"-corp-", level:3, pos:"名詞"},
  {word:"habeas corpus", meaning:"人身保護令状",               etymology:"habeas（持つ）+ corpus（体）",           root:"-corp-", level:3, pos:"名詞"},
  {word:"incorporeal",   meaning:"非物質的な",                 etymology:"in（否定）+ corporeal（肉体的な）",      root:"-corp-", level:3, pos:"形容詞"},
  {word:"corporeality",  meaning:"物質性・実体性",              etymology:"corporeal（肉体的な）+ ity（状態）",     root:"-corp-", level:3, pos:"名詞"},

  // ── -cosm-（世界・宇宙） ──────────────────
  {word:"cosmos",        meaning:"宇宙・秩序",                 etymology:"cosm（世界）+ os（〜の）",               root:"-cosm-", level:2, pos:"名詞"},
  {word:"cosmopolitan",  meaning:"国際的な・世界市民の",        etymology:"cosmo（世界）+ polis（都市）+ tan（人）", root:"-cosm-", level:2, pos:"形容詞"},
  {word:"cosmology",     meaning:"宇宙論",                     etymology:"cosmo（宇宙）+ logy（学問）",            root:"-cosm-", level:3, pos:"名詞"},
  {word:"microcosm",     meaning:"縮図・小宇宙",               etymology:"micro（小さい）+ cosm（世界）",          root:"-cosm-", level:2, pos:"名詞"},
  {word:"macrocosm",     meaning:"大宇宙・巨視的な世界",        etymology:"macro（大きい）+ cosm（世界）",          root:"-cosm-", level:2, pos:"名詞"},
  {word:"cosmetics",     meaning:"化粧品・美容術",              etymology:"cosm（秩序）+ etics（技術）→整える技術",  root:"-cosm-", level:1, pos:"名詞"},
  {word:"cosmic",        meaning:"宇宙の・巨大な",              etymology:"cosm（宇宙）+ ic（〜の）",               root:"-cosm-", level:1, pos:"形容詞"},
  {word:"cosmopolite",   meaning:"世界市民",                   etymology:"cosmo（世界）+ polite（市民）",          root:"-cosm-", level:3, pos:"名詞"},
  {word:"cosmography",   meaning:"宇宙誌",                     etymology:"cosmo（宇宙）+ graphy（記述）",          root:"-cosm-", level:3, pos:"名詞"},
  {word:"cosmonaut",     meaning:"宇宙飛行士（ロシア）",        etymology:"cosmo（宇宙）+ naut（船乗り）",          root:"-cosm-", level:2, pos:"名詞"},
  {word:"cosmogony",     meaning:"宇宙起源論",                  etymology:"cosmo（宇宙）+ gony（生成）",            root:"-cosm-", level:3, pos:"名詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
