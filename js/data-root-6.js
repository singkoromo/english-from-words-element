/**
 * data-root-6.js — 語根データ（-sci-, -sign-, -sol-, -tang-/-tact-, -tempor-, -ten-/-tain-, -tort-/-tors-, -tract-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -sci-（知る・知識） ────────────────────────
  {word:"science",       meaning:"科学",                  etymology:"sci（知る）+ ence（状態）",                root:"-sci-", level:1, pos:"名詞"},
  {word:"conscious",     meaning:"意識のある・気づいている",etymology:"con（共に）+ sci（知る）+ ous（〜の）",   root:"-sci-", level:3, pos:"動詞"},
  {word:"omniscient",    meaning:"全知の",                etymology:"omni（全て）+ sci（知る）+ ent（〜している）",root:"-sci-", level:5, pos:"形容詞"},
  {word:"prescient",     meaning:"先見の明のある",        etymology:"pre（前に）+ sci（知る）+ ent（〜している）",root:"-sci-", level:6, pos:"動詞"},
  {word:"conscience",    meaning:"良心",                  etymology:"con（共に）+ sci（知る）+ ence（状態）",   root:"-sci-", level:3, pos:"名詞"},
  {word:"unconscious",   meaning:"無意識の",              etymology:"un（否定）+ conscious（意識ある）",        root:"-sci-", level:3, pos:"形容詞"},
  {word:"subconscious",  meaning:"潜在意識の",            etymology:"sub（下に）+ conscious（意識ある）",       root:"-sci-", level:5, pos:"形容詞"},
  {word:"conscientious", meaning:"誠実な・良心的な",      etymology:"con（共に）+ sci（知る）+ entious（〜の）",root:"-sci-", level:5, pos:"形容詞"},
  {word:"nescient",      meaning:"無知な",                etymology:"ne（否定）+ sci（知る）+ ent（〜している）",root:"-sci-", level:6, pos:"形容詞"},
  {word:"omniscience",   meaning:"全知",                  etymology:"omni（全て）+ sci（知る）+ ence（状態）",  root:"-sci-", level:5, pos:"名詞"},

  // ── -sign-（符号・印・示す） ───────────────────
  {word:"sign",          meaning:"符号・標識・サインする",etymology:"sign（印）",                               root:"-sign-", level:1, pos:"名詞・動詞"},
  {word:"signal",        meaning:"信号・合図",            etymology:"sign（印）+ al（〜の）",                   root:"-sign-", level:1, pos:"名詞"},
  {word:"signature",     meaning:"署名・特徴",            etymology:"sign（印）+ ature（結果）",                root:"-sign-", level:3, pos:"名詞"},
  {word:"significant",   meaning:"重要な・意義深い",      etymology:"sign（印）+ ificant（作る〜）",            root:"-sign-", level:4, pos:"形容詞"},
  {word:"design",        meaning:"デザインする・意図する",etymology:"de（下に）+ sign（印）",                   root:"-sign-", level:1, pos:"動詞"},
  {word:"assign",        meaning:"割り当てる・配属する",  etymology:"as（〜に）+ sign（印）",                   root:"-sign-", level:3, pos:"動詞"},
  {word:"designate",     meaning:"指定する・指名する",    etymology:"de（下に）+ sign（印）+ ate（〜する）",    root:"-sign-", level:5, pos:"動詞"},
  {word:"consign",       meaning:"委託する・引き渡す",    etymology:"con（共に）+ sign（印）",                  root:"-sign-", level:5, pos:"動詞"},
  {word:"resign",        meaning:"辞任する",              etymology:"re（再び）+ sign（印）",                   root:"-sign-", level:3, pos:"動詞"},
  {word:"insignificant", meaning:"取るに足らない",        etymology:"in（否定）+ significant（重要な）",        root:"-sign-", level:6, pos:"形容詞"},
  {word:"signify",       meaning:"意味する・示す",        etymology:"sign（印）+ ify（〜にする）",              root:"-sign-", level:3, pos:"動詞"},
  {word:"signage",       meaning:"標識・看板類",          etymology:"sign（印）+ age（集合）",                  root:"-sign-", level:5, pos:"名詞"},
  {word:"ensign",        meaning:"旗・旗手",              etymology:"en（〜に）+ sign（印）",                   root:"-sign-", level:5, pos:"名詞"},

  // ── -sol-（太陽・一人・慰める） ───────────────
  {word:"solar",         meaning:"太陽の",                etymology:"sol（太陽）+ ar（〜の）",                  root:"-sol-", level:1, pos:"形容詞"},
  {word:"solo",          meaning:"独唱・単独で",          etymology:"sol（一人）+ o（〜のもの）",               root:"-sol-", level:1, pos:"名詞"},
  {word:"solitary",      meaning:"孤独な・一人の",        etymology:"sol（一人）+ itary（〜の）",               root:"-sol-", level:4, pos:"形容詞"},
  {word:"solitude",      meaning:"孤独・孤立",            etymology:"sol（一人）+ itude（状態）",               root:"-sol-", level:5, pos:"名詞"},
  {word:"console",       meaning:"慰める・コンソール",    etymology:"con（共に）+ sol（慰める）+ e",            root:"-sol-", level:3, pos:"動詞・名詞"},
  {word:"solstice",      meaning:"至（夏至・冬至）",      etymology:"sol（太陽）+ stice（立つ）",               root:"-sol-", level:5, pos:"名詞"},
  {word:"parasol",       meaning:"日傘",                  etymology:"para（防ぐ）+ sol（太陽）",                root:"-sol-", level:3, pos:"名詞"},
  {word:"soliloquy",     meaning:"独り言・独白",          etymology:"sol（一人）+ iloquy（話す）",              root:"-sol-", level:6, pos:"名詞"},
  {word:"solarize",      meaning:"太陽エネルギーを利用する",etymology:"solar（太陽の）+ ize（〜にする）",       root:"-sol-", level:5, pos:"動詞"},
  {word:"desolate",      meaning:"荒廃した・わびしい",    etymology:"de（完全に）+ sol（一人）+ ate（〜の）",   root:"-sol-", level:5, pos:"形容詞"},
  {word:"inconsolable",  meaning:"慰めようのない",        etymology:"in（否定）+ consolable（慰められる）",     root:"-sol-", level:5, pos:"形容詞"},
  {word:"consolidate",   meaning:"統合する・強化する",    etymology:"con（共に）+ solid（固い）+ ate（〜する）",root:"-sol-", level:5, pos:"動詞"},

  // ── -tang-/-tact-（触れる・接触） ────────────
  {word:"contact",       meaning:"接触・連絡する",        etymology:"con（共に）+ tact（触れる）",              root:"-tang-", level:1, pos:"名詞・動詞"},
  {word:"tangible",      meaning:"有形の・実体のある",    etymology:"tang（触れる）+ ible（できる）",           root:"-tang-", level:5, pos:"形容詞・動詞"},
  {word:"intact",        meaning:"無傷の・そのままの",    etymology:"in（否定）+ tact（触れる）",               root:"-tang-", level:5, pos:"形容詞"},
  {word:"intangible",    meaning:"無形の・つかみにくい",  etymology:"in（否定）+ tangible（有形の）",           root:"-tang-", level:5, pos:"形容詞"},
  {word:"tact",          meaning:"機転・如才なさ",        etymology:"tact（触れる・感じる）",                   root:"-tang-", level:5, pos:"名詞"},
  {word:"tactful",       meaning:"機転のきいた",          etymology:"tact（触れる）+ ful（〜に満ちた）",        root:"-tang-", level:5, pos:"形容詞"},
  {word:"tactile",       meaning:"触覚の・触れられる",    etymology:"tact（触れる）+ ile（できる）",            root:"-tang-", level:5, pos:"形容詞・動詞"},
  {word:"contagious",    meaning:"伝染性の",              etymology:"con（共に）+ tag（触れる）+ ious（性質）", root:"-tang-", level:3, pos:"形容詞"},
  {word:"contaminate",   meaning:"汚染する",              etymology:"con（共に）+ tamin（触れる）+ ate（〜する）",root:"-tang-", level:5, pos:"動詞"},
  {word:"contingent",    meaning:"偶発的な・依存した",    etymology:"con（共に）+ ting（触れる）+ ent（〜の）", root:"-tang-", level:6, pos:"形容詞"},
  {word:"tangentially",  meaning:"接線方向に・わずかに",  etymology:"tangential（接線の）+ ly（〜に）",         root:"-tang-", level:6, pos:"副詞"},

  // ── -tempor-（時間・時期） ────────────────────
  {word:"temporary",     meaning:"一時的な",              etymology:"tempor（時間）+ ary（〜の）",              root:"-tempor-", level:4, pos:"形容詞"},
  {word:"contemporary",  meaning:"現代の・同時代の",      etymology:"con（共に）+ tempor（時間）+ ary（〜の）", root:"-tempor-", level:4, pos:"形容詞"},
  {word:"temporal",      meaning:"時間の・一時的な",      etymology:"tempor（時間）+ al（〜の）",               root:"-tempor-", level:5, pos:"形容詞"},
  {word:"extemporaneous",meaning:"即興の",                etymology:"ex（外に）+ tempor（時間）+ aneous（〜の）",root:"-tempor-", level:7, pos:"形容詞"},
  {word:"tempo",         meaning:"テンポ・速さ",          etymology:"temp（時間）+ o（〜のもの）",              root:"-tempor-", level:1, pos:"名詞"},
  {word:"temperament",   meaning:"気質・気性",            etymology:"temper（調和）+ ament（状態）",            root:"-tempor-", level:5, pos:"名詞"},
  {word:"temperature",   meaning:"温度・気温",            etymology:"temper（調和）+ ature（結果）",            root:"-tempor-", level:2, pos:"名詞"},

  // ── -ten-/-tain-（保つ・持つ） ────────────────
  {word:"contain",       meaning:"含む・抑える",          etymology:"con（共に）+ tain（保つ）",                root:"-ten-", level:1, pos:"動詞"},
  {word:"maintain",      meaning:"維持する",              etymology:"main（手で）+ tain（保つ）",               root:"-ten-", level:3, pos:"動詞"},
  {word:"retain",        meaning:"保持する・覚えておく",  etymology:"re（再び）+ tain（保つ）",                 root:"-ten-", level:3, pos:"動詞"},
  {word:"attain",        meaning:"達成する・到達する",    etymology:"at（〜に）+ tain（保つ・達する）",         root:"-ten-", level:5, pos:"動詞"},
  {word:"obtain",        meaning:"得る",                  etymology:"ob（〜に向かって）+ tain（保つ）",         root:"-ten-", level:3, pos:"動詞"},
  {word:"sustain",       meaning:"持続させる・支える",    etymology:"sus（下から）+ tain（保つ）",              root:"-ten-", level:5, pos:"動詞"},
  {word:"abstain",       meaning:"控える",                etymology:"ab（離れて）+ stain（保つ）",              root:"-ten-", level:5, pos:"動詞"},
  {word:"detain",        meaning:"引き留める・拘留する",  etymology:"de（下に）+ tain（保つ）",                 root:"-ten-", level:5, pos:"動詞"},
  {word:"pertain",       meaning:"〜に属する・関係する",  etymology:"per（完全に）+ tain（保つ）",              root:"-ten-", level:5, pos:"動詞"},
  {word:"tenacious",     meaning:"粘り強い",              etymology:"ten（保つ）+ acious（性質）",              root:"-ten-", level:5, pos:"形容詞"},
  {word:"tenant",        meaning:"借家人・賃借人",        etymology:"ten（保つ）+ ant（〜している人）",          root:"-ten-", level:3, pos:"名詞"},
  {word:"tenure",        meaning:"任期・在職期間",        etymology:"ten（保つ）+ ure（結果）",                 root:"-ten-", level:5, pos:"名詞"},

  // ── -tract-（引く） ───────────────────────────
  {word:"attract",       meaning:"引き付ける",            etymology:"at（〜に）+ tract（引く）",                root:"-tract-", level:1, pos:"動詞"},
  {word:"distract",      meaning:"気を散らす",            etymology:"dis（離れて）+ tract（引く）",             root:"-tract-", level:3, pos:"動詞"},
  {word:"extract",       meaning:"抽出する",              etymology:"ex（外に）+ tract（引く）",                root:"-tract-", level:3, pos:"動詞"},
  {word:"subtract",      meaning:"引き算する",            etymology:"sub（下から）+ tract（引く）",             root:"-tract-", level:3, pos:"動詞"},
  {word:"contract",      meaning:"契約・収縮する",        etymology:"con（共に）+ tract（引く）",               root:"-tract-", level:3, pos:"名詞・動詞"},
  {word:"retract",       meaning:"撤回する・引っ込める",  etymology:"re（後ろに）+ tract（引く）",              root:"-tract-", level:5, pos:"動詞"},
  {word:"protract",      meaning:"長引かせる",            etymology:"pro（前に）+ tract（引く）",               root:"-tract-", level:6, pos:"動詞"},
  {word:"detract",       meaning:"損なう・そらす",        etymology:"de（離れて）+ tract（引く）",              root:"-tract-", level:5, pos:"名詞・動詞"},
  {word:"tractable",     meaning:"扱いやすい・従順な",    etymology:"tract（引く）+ able（できる）",            root:"-tract-", level:5, pos:"形容詞"},
  {word:"intractable",   meaning:"扱いにくい・難治の",    etymology:"in（否定）+ tractable（扱いやすい）",      root:"-tract-", level:6, pos:"形容詞"},
  {word:"abstract",      meaning:"抽象的な",              etymology:"ab（離れて）+ tract（引く）",              root:"-tract-", level:3, pos:"形容詞"},
  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
