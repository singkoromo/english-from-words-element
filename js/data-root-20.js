/**
 * data-root-20.js — 語根データ（-quer-, -rect-, -reg-, -rupt-, -scrib-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -quer-/-quest-/-quir-（求める・尋ねる） ──────────────────
  {word:"question",        meaning:"質問・疑問",                 etymology:"quest（求める）+ ion（行為）",                 root:"-quest-", level:0, pos:"名詞"},
  {word:"request",         meaning:"要求する・頼む",             etymology:"re（再び）+ quest（求める）",                 root:"-quest-", level:0, pos:"動詞"},
  {word:"require",         meaning:"必要とする・要求する",        etymology:"re（再び）+ quire（求める）",                 root:"-quir-", level:1, pos:"動詞"},
  {word:"inquire",         meaning:"尋ねる・調査する",            etymology:"in（中に）+ quire（求める）",                 root:"-quir-", level:2, pos:"動詞"},
  {word:"acquire",         meaning:"習得する・取得する",          etymology:"ac（〜に）+ quire（求める）",                 root:"-quir-", level:1, pos:"動詞"},
  {word:"query",           meaning:"質問・疑問・問い合わせ",      etymology:"quer（尋ねる）+ y",                           root:"-quer-", level:2, pos:"名詞"},
  {word:"conquer",         meaning:"征服する・克服する",          etymology:"con（完全に）+ quer（求める）→完全に求める",   root:"-quer-", level:2, pos:"動詞"},
  {word:"conquest",        meaning:"征服・占領",                 etymology:"con（完全に）+ quest（求める）",               root:"-quest-", level:2, pos:"名詞"},
  {word:"inquest",         meaning:"審問・死因審査",             etymology:"in（中に）+ quest（求める）→内部調査",          root:"-quest-", level:3, pos:"名詞"},
  {word:"requisite",       meaning:"必要な・必要条件",           etymology:"re（再び）+ quis（求める）+ ite（〜の）",      root:"-quir-", level:2, pos:"形容詞・名詞"},

  // ── -rect-（真っすぐ・正しい） ──────────────────
  {word:"correct",         meaning:"正しい・訂正する",           etymology:"cor（完全に）+ rect（真っすぐ）",             root:"-rect-", level:0, pos:"形容詞・動詞"},
  {word:"direct",          meaning:"直接の・指揮する",           etymology:"di（完全に）+ rect（真っすぐ）",              root:"-rect-", level:0, pos:"形容詞・動詞"},
  {word:"erect",           meaning:"直立の・建設する",           etymology:"e（外に）+ rect（真っすぐ）",                 root:"-rect-", level:2, pos:"形容詞・動詞"},
  {word:"rectangle",       meaning:"長方形",                    etymology:"rect（真っすぐ）+ angle（角度）",              root:"-rect-", level:0, pos:"名詞"},
  {word:"rectify",         meaning:"修正する・是正する",          etymology:"rect（正しい）+ ify（する）",                 root:"-rect-", level:2, pos:"動詞"},
  {word:"rectitude",       meaning:"誠実さ・公正さ",             etymology:"rect（正しい）+ itude（状態）",               root:"-rect-", level:3, pos:"名詞"},
  {word:"director",        meaning:"取締役・監督",               etymology:"direct（指揮する）+ or（人）",                root:"-rect-", level:1, pos:"名詞"},
  {word:"indirect",        meaning:"間接的な・遠回しの",          etymology:"in（否定）+ direct（直接の）",                root:"-rect-", level:1, pos:"形容詞"},
  {word:"resurrection",    meaning:"復活・復興",                 etymology:"re（再び）+ surr（立つ）+ ection（行為）",     root:"-rect-", level:2, pos:"名詞"},
  {word:"insurrection",    meaning:"反乱・暴動",                 etymology:"in（中で）+ surr（立つ）+ ection（行為）",     root:"-rect-", level:3, pos:"名詞"},

  // ── -reg-/-roy-/-rig-（王・支配する） ──────────────────
  {word:"regulate",        meaning:"規制する・調整する",          etymology:"reg（支配する）+ ulate（する）",              root:"-reg-", level:1, pos:"動詞"},
  {word:"region",          meaning:"地域・地方",                 etymology:"reg（支配する）+ ion（場所）→支配地域",        root:"-reg-", level:1, pos:"名詞"},
  {word:"regime",          meaning:"政権・体制",                 etymology:"reg（支配する）+ ime（〜の状態）",             root:"-reg-", level:2, pos:"名詞"},
  {word:"regal",           meaning:"王のような・堂々とした",      etymology:"reg（王）+ al（〜の）",                       root:"-reg-", level:2, pos:"形容詞"},
  {word:"reign",           meaning:"統治する・君臨する",          etymology:"reg（王）+ n→王として統治する",               root:"-reg-", level:2, pos:"動詞"},
  {word:"regular",         meaning:"規則的な・定期的な",          etymology:"reg（支配する）+ ular（〜の）",               root:"-reg-", level:0, pos:"形容詞"},
  {word:"irregular",       meaning:"不規則な・変則的な",          etymology:"ir（否定）+ regular（規則的な）",             root:"-reg-", level:1, pos:"形容詞"},
  {word:"regent",          meaning:"摂政・支配者",               etymology:"reg（王）+ ent（人）",                        root:"-reg-", level:3, pos:"名詞"},
  {word:"sovereign",       meaning:"主権者・最高権力者の",        etymology:"sover（上に）+ reg（支配する）→上に支配する",  root:"-reg-", level:2, pos:"名詞・形容詞"},
  {word:"royal",           meaning:"王族の・王立の",             etymology:"roy（王）+ al（〜の）",                       root:"-roy-", level:1, pos:"形容詞"},

  // ── -rupt-（破る・壊す） ──────────────────
  {word:"rupture",         meaning:"破裂・決裂",                 etymology:"rupt（破る）+ ure（行為）",                   root:"-rupt-", level:2, pos:"名詞"},
  {word:"disrupt",         meaning:"混乱させる・途絶させる",      etymology:"dis（離れて）+ rupt（破る）",                 root:"-rupt-", level:2, pos:"動詞"},
  {word:"interrupt",       meaning:"中断する・割り込む",          etymology:"inter（間に）+ rupt（破る）",                 root:"-rupt-", level:1, pos:"動詞"},
  {word:"corrupt",         meaning:"腐敗した・汚職の",           etymology:"cor（完全に）+ rupt（破る）",                 root:"-rupt-", level:2, pos:"形容詞"},
  {word:"erupt",           meaning:"噴火する・爆発する",          etymology:"e（外に）+ rupt（破る）",                     root:"-rupt-", level:1, pos:"動詞"},
  {word:"abrupt",          meaning:"突然の・素っ気ない",          etymology:"ab（離れて）+ rupt（破る）",                  root:"-rupt-", level:2, pos:"形容詞"},
  {word:"bankrupt",        meaning:"破産した",                  etymology:"bank（銀行）+ rupt（壊れた）",                root:"-rupt-", level:1, pos:"形容詞"},
  {word:"disruption",      meaning:"混乱・断絶",                 etymology:"disrupt（混乱させる）+ ion（行為）",           root:"-rupt-", level:2, pos:"名詞"},
  {word:"corruption",      meaning:"腐敗・汚職",                etymology:"corrupt（腐敗させる）+ ion（行為）",           root:"-rupt-", level:2, pos:"名詞"},
  {word:"irruption",       meaning:"侵入・突入",                 etymology:"ir（中に）+ rupt（破る）+ ion（行為）",        root:"-rupt-", level:3, pos:"名詞"},

  // ── -scrib-/-script-（書く） ──────────────────
  {word:"describe",        meaning:"説明する・描写する",          etymology:"de（完全に）+ scribe（書く）",                root:"-scrib-", level:0, pos:"動詞"},
  {word:"subscribe",       meaning:"定期購読する・同意する",      etymology:"sub（下に）+ scribe（書く）→署名する",        root:"-scrib-", level:1, pos:"動詞"},
  {word:"prescribe",       meaning:"処方する・規定する",          etymology:"pre（前に）+ scribe（書く）→前もって書く",     root:"-scrib-", level:2, pos:"動詞"},
  {word:"inscribe",        meaning:"刻み込む・献辞を書く",        etymology:"in（中に）+ scribe（書く）",                  root:"-scrib-", level:2, pos:"動詞"},
  {word:"transcribe",      meaning:"書き写す・転写する",          etymology:"trans（横断して）+ scribe（書く）",            root:"-scrib-", level:2, pos:"動詞"},
  {word:"script",          meaning:"台本・手書き文字",            etymology:"script（書かれたもの）",                      root:"-script-", level:1, pos:"名詞"},
  {word:"manuscript",      meaning:"原稿・写本",                 etymology:"manu（手）+ script（書かれた）",               root:"-script-", level:2, pos:"名詞"},
  {word:"inscription",     meaning:"碑文・刻まれた文字",          etymology:"inscribe（刻む）+ tion（行為）",               root:"-script-", level:2, pos:"名詞"},
  {word:"description",     meaning:"説明・記述",                 etymology:"describe（説明する）+ tion（行為）",           root:"-script-", level:1, pos:"名詞"},
  {word:"prescription",    meaning:"処方箋・規定",               etymology:"prescribe（処方する）+ tion（行為）",          root:"-script-", level:2, pos:"名詞"},
  {word:"circumscribe",    meaning:"制限する・囲む",              etymology:"circum（周囲を）+ scribe（書く）→周りに線を引く",root:"-scrib-",level:3, pos:"動詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
