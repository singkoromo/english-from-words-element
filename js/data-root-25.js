/**
 * data-root-25.js — 語根データ（-terr-, -turb-, -val-/-vail-, -viv-/-vit-, -voc-/-vocat-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -terr-（大地・恐怖） ──────────────────
  {word:"territory",         meaning:"領土・地域",                 etymology:"terr（大地）+ itory（〜の場所）",               root:"-terr-",  level:1, pos:"名詞"},
  {word:"terrain",           meaning:"地形・地帯",                 etymology:"terr（大地）+ ain（〜の）",                    root:"-terr-",  level:2, pos:"名詞"},
  {word:"terrestrial",       meaning:"地球の・陸生の",             etymology:"terr（大地）+ estrial（〜の）",                root:"-terr-",  level:2, pos:"形容詞"},
  {word:"terrarium",         meaning:"テラリウム・爬虫類飼育箱",   etymology:"terr（大地）+ arium（〜の場所）",              root:"-terr-",  level:2, pos:"名詞"},
  {word:"Mediterranean",     meaning:"地中海の",                  etymology:"medi（中間）+ terr（大地）+ anean（〜の）",     root:"-terr-",  level:2, pos:"形容詞"},
  {word:"subterranean",      meaning:"地下の",                    etymology:"sub（下の）+ terr（大地）+ anean（〜の）",      root:"-terr-",  level:2, pos:"形容詞"},
  {word:"extraterrestrial",  meaning:"地球外の・宇宙人",            etymology:"extra（外の）+ terr（大地）+ estrial（〜の）",  root:"-terr-",  level:2, pos:"形容詞・名詞"},
  {word:"terror",            meaning:"恐怖・テロ",                 etymology:"terr（怖がらせる）+ or（状態）",               root:"-terr-",  level:1, pos:"名詞"},
  {word:"terrible",          meaning:"恐ろしい・ひどい",            etymology:"terr（怖がらせる）+ ible（〜の）",              root:"-terr-",  level:0, pos:"形容詞"},
  {word:"terrify",           meaning:"怖がらせる・震え上がらせる",  etymology:"terr（怖がらせる）+ ify（〜にする）",           root:"-terr-",  level:1, pos:"動詞"},
  {word:"terrific",          meaning:"すばらしい・ものすごい",      etymology:"terr（怖がらせる）+ ific（〜な）",              root:"-terr-",  level:1, pos:"形容詞"},
  {word:"terrorist",         meaning:"テロリスト",                 etymology:"terror（恐怖）+ ist（〜の人）",                root:"-terr-",  level:1, pos:"名詞"},
  {word:"deter",             meaning:"思いとどまらせる・阻止する",  etymology:"de（離れて）+ ter（怖がらせる）",               root:"-terr-",  level:2, pos:"動詞"},
  {word:"deterrent",         meaning:"抑止力・抑止する",            etymology:"deter（阻止する）+ rent（〜の）",               root:"-terr-",  level:2, pos:"名詞・動詞"},

  // ── -turb-（乱す・かき回す） ──────────────────
  {word:"disturb",           meaning:"乱す・邪魔する",             etymology:"dis（離れて）+ turb（乱す）",                  root:"-turb-",  level:1, pos:"動詞"},
  {word:"turbulent",         meaning:"乱れた・激動の",             etymology:"turb（乱す）+ ulent（〜な）",                  root:"-turb-",  level:2, pos:"形容詞"},
  {word:"turbulence",        meaning:"乱気流・騒乱",               etymology:"turb（乱す）+ ulence（状態）",                 root:"-turb-",  level:2, pos:"名詞"},
  {word:"perturb",           meaning:"不安にさせる・乱す",          etymology:"per（完全に）+ turb（乱す）",                  root:"-turb-",  level:3, pos:"動詞"},
  {word:"turbine",           meaning:"タービン",                  etymology:"turb（回転する）+ ine（〜のもの）",             root:"-turb-",  level:2, pos:"名詞"},
  {word:"disturbing",        meaning:"不安を起こす・不穏な",        etymology:"disturb（乱す）+ ing（〜の）",                 root:"-turb-",  level:1, pos:"動詞・形容詞"},
  {word:"disturbance",       meaning:"妨害・騒乱",                 etymology:"disturb（乱す）+ ance（状態）",                root:"-turb-",  level:2, pos:"名詞"},
  {word:"imperturbable",     meaning:"冷静な・動じない",            etymology:"im（否定）+ perturb（乱す）+ able（できる）",   root:"-turb-",  level:3, pos:"形容詞"},
  {word:"turbid",            meaning:"濁った・混乱した",            etymology:"turb（乱す）+ id（〜の）",                     root:"-turb-",  level:3, pos:"形容詞"},
  {word:"turmoil",           meaning:"騒乱・混乱",                 etymology:"turb（乱す）+ moil（混乱）",                   root:"-turb-",  level:2, pos:"名詞"},

  // ── -val-/-vail-（価値・力） ──────────────────
  {word:"value",             meaning:"価値・評価する",             etymology:"val（価値）+ ue",                             root:"-val-",   level:0, pos:"名詞・動詞"},
  {word:"valid",             meaning:"有効な・正当な",             etymology:"val（力・価値）+ id（〜の）",                  root:"-val-",   level:2, pos:"形容詞"},
  {word:"validate",          meaning:"有効にする・立証する",        etymology:"val（価値）+ idate（〜する）",                 root:"-val-",   level:2, pos:"動詞"},
  {word:"validity",          meaning:"有効性・妥当性",             etymology:"val（価値）+ idity（状態）",                   root:"-val-",   level:2, pos:"名詞"},
  {word:"valor",             meaning:"勇敢さ・武勇",               etymology:"val（力）+ or（状態）",                        root:"-val-",   level:2, pos:"名詞"},
  {word:"evaluate",          meaning:"評価する",                  etymology:"e（外に）+ val（価値）+ uate（〜する）",        root:"-val-",   level:1, pos:"動詞"},
  {word:"equivalent",        meaning:"同等の・相当する",            etymology:"equi（等しい）+ val（価値）+ ent（〜の）",     root:"-val-",   level:2, pos:"形容詞・動詞"},
  {word:"available",         meaning:"利用できる・入手できる",      etymology:"a（〜に）+ vail（価値）+ able（できる）",      root:"-vail-",  level:0, pos:"動詞"},
  {word:"prevail",           meaning:"普及する・勝る",             etymology:"pre（前に）+ vail（力）",                      root:"-vail-",  level:2, pos:"動詞"},
  {word:"avail",             meaning:"役立つ・利益",               etymology:"a（〜に）+ vail（価値）",                      root:"-vail-",  level:2, pos:"動詞・名詞"},
  {word:"invaluable",        meaning:"非常に価値のある",            etymology:"in（否定）+ val（価値）+ uable（できる）",     root:"-val-",   level:2, pos:"動詞"},
  {word:"devalue",           meaning:"価値を下げる",               etymology:"de（減じる）+ value（価値）",                  root:"-val-",   level:2, pos:"動詞"},
  {word:"valiant",           meaning:"勇敢な・勇気ある",            etymology:"val（力）+ iant（〜の）",                      root:"-val-",   level:2, pos:"形容詞・動詞"},

  // ── -viv-/-vit-（生きる・命） ──────────────────
  {word:"vital",             meaning:"生命の・不可欠な",            etymology:"vit（生命）+ al（〜の）",                      root:"-vit-",   level:1, pos:"形容詞"},
  {word:"vitality",          meaning:"生命力・活力",               etymology:"vit（生命）+ ality（状態）",                   root:"-vit-",   level:2, pos:"名詞"},
  {word:"vitamin",           meaning:"ビタミン",                   etymology:"vit（生命）+ amin（アミン）",                  root:"-vit-",   level:1, pos:"名詞"},
  {word:"revive",            meaning:"蘇る・復活させる",            etymology:"re（再び）+ viv（生きる）+ e",                 root:"-viv-",   level:1, pos:"動詞"},
  {word:"survive",           meaning:"生き残る・乗り越える",        etymology:"sur（上で）+ viv（生きる）+ e",                root:"-viv-",   level:1, pos:"動詞"},
  {word:"vivid",             meaning:"鮮やかな・生き生きした",      etymology:"viv（生きる）+ id（〜の）",                    root:"-viv-",   level:1, pos:"形容詞"},
  {word:"vivacious",         meaning:"活発な・明るい",             etymology:"viv（生きる）+ acious（〜な）",                root:"-viv-",   level:2, pos:"形容詞"},
  {word:"vivify",            meaning:"活気づける・生き生きさせる",  etymology:"viv（生きる）+ ify（〜にする）",               root:"-viv-",   level:3, pos:"動詞"},
  {word:"convivial",         meaning:"陽気な・宴会好きな",          etymology:"con（共に）+ viv（生きる）+ ial（〜の）",       root:"-viv-",   level:3, pos:"形容詞"},
  {word:"revival",           meaning:"復活・再興",                 etymology:"re（再び）+ viv（生きる）+ al（行為）",         root:"-viv-",   level:2, pos:"名詞"},
  {word:"survivor",          meaning:"生存者・生き残り",            etymology:"sur（上で）+ viv（生きる）+ or（人）",          root:"-viv-",   level:1, pos:"名詞"},
  {word:"vivisection",       meaning:"生体解剖",                  etymology:"vivi（生きた）+ section（切り取り）",           root:"-viv-",   level:3, pos:"名詞"},
  {word:"vitalize",          meaning:"活性化する",                 etymology:"vit（生命）+ alize（〜にする）",               root:"-vit-",   level:2, pos:"動詞"},

  // ── -voc-/-vocat-（呼ぶ・声） ──────────────────
  {word:"voice",             meaning:"声・意見",                  etymology:"voc（声）+ e",                                root:"-voc-",   level:0, pos:"名詞"},
  {word:"vocal",             meaning:"声の・口数の多い",            etymology:"voc（声）+ al（〜の）",                        root:"-voc-",   level:1, pos:"形容詞"},
  {word:"vocabulary",        meaning:"語彙・単語力",               etymology:"voc（言葉）+ abulary（集まり）",               root:"-voc-",   level:1, pos:"名詞"},
  {word:"vocation",          meaning:"天職・使命感",               etymology:"vocat（呼ぶ）+ ion（行為）",                   root:"-vocat-", level:2, pos:"名詞"},
  {word:"vocational",        meaning:"職業の・職業訓練の",          etymology:"vocat（呼ぶ）+ ional（〜の）",                 root:"-vocat-", level:2, pos:"形容詞"},
  {word:"advocate",          meaning:"擁護する・支持者",            etymology:"ad（〜に）+ vocat（呼ぶ）+ e→呼び寄せる",      root:"-vocat-", level:2, pos:"動詞・名詞"},
  {word:"evoke",             meaning:"呼び起こす・引き出す",        etymology:"e（外に）+ voc（呼ぶ）+ e",                   root:"-voc-",   level:2, pos:"動詞"},
  {word:"invoke",            meaning:"呼び求める・祈願する",        etymology:"in（〜に）+ voc（呼ぶ）+ e",                  root:"-voc-",   level:2, pos:"動詞"},
  {word:"provoke",           meaning:"挑発する・怒らせる",          etymology:"pro（前に）+ voc（呼ぶ）+ e",                 root:"-voc-",   level:2, pos:"動詞"},
  {word:"revoke",            meaning:"取り消す・廃止する",          etymology:"re（返して）+ voc（呼ぶ）+ e",                root:"-voc-",   level:2, pos:"動詞"},
  {word:"convoke",           meaning:"召集する",                  etymology:"con（共に）+ voc（呼ぶ）+ e",                 root:"-voc-",   level:3, pos:"動詞"},
  {word:"irrevocable",       meaning:"取り消せない・不変の",        etymology:"ir（否定）+ revoc（取り消す）+ able（できる）", root:"-voc-",   level:3, pos:"形容詞"},
  {word:"equivocate",        meaning:"曖昧に話す・ごまかす",        etymology:"equi（等しい）+ voc（声）+ ate（〜する）",     root:"-voc-",   level:3, pos:"動詞"},
  {word:"vociferous",        meaning:"声高に叫ぶ・騒々しい",        etymology:"voci（声）+ fer（運ぶ）+ ous（〜の）",         root:"-voc-",   level:3, pos:"動詞・形容詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
