/**
 * data-root-22.js — 語根データ（-secu-, -sent-, -serv-, -sist-, -spec-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -secu-/-sec-（切る・追う） ──────────────────
  {word:"section",         meaning:"区分・切片・部門",            etymology:"sec（切る）+ tion（行為）",                   root:"-sec-", level:0, pos:"名詞"},
  {word:"segment",         meaning:"区分・部分",                 etymology:"seg（切る）+ ment（行為）",                   root:"-sec-", level:1, pos:"名詞"},
  {word:"sector",          meaning:"部門・扇形・区域",            etymology:"sec（切る）+ tor（場所）",                    root:"-sec-", level:1, pos:"名詞"},
  {word:"bisect",          meaning:"二等分する",                 etymology:"bi（二つ）+ sect（切る）",                    root:"-sec-", level:2, pos:"動詞"},
  {word:"dissect",         meaning:"解剖する・分析する",          etymology:"dis（離れて）+ sect（切る）",                 root:"-sec-", level:2, pos:"動詞"},
  {word:"intersect",       meaning:"交差する・横切る",            etymology:"inter（間で）+ sect（切る）",                 root:"-sec-", level:2, pos:"動詞"},
  {word:"secant",          meaning:"割線・セカント",              etymology:"sec（切る）+ ant（〜の）",                    root:"-sec-", level:3, pos:"名詞"},
  {word:"insect",          meaning:"昆虫",                      etymology:"in（中を）+ sect（切る）→切り込みがある体",    root:"-sec-", level:0, pos:"名詞"},
  {word:"resect",          meaning:"切除する",                  etymology:"re（再び）+ sect（切る）",                    root:"-sec-", level:3, pos:"動詞"},
  {word:"transect",        meaning:"横断する・横断面",            etymology:"trans（横断して）+ sect（切る）",              root:"-sec-", level:3, pos:"動詞・名詞"},

  // ── -sent-/-sens-（感じる） ──────────────────
  {word:"sense",           meaning:"感覚・感じる",               etymology:"sens（感じる）+ e",                           root:"-sens-", level:0, pos:"名詞・動詞"},
  {word:"sensitive",       meaning:"敏感な・繊細な",              etymology:"sens（感じる）+ itive（〜な）",               root:"-sens-", level:1, pos:"形容詞"},
  {word:"sensible",        meaning:"賢明な・感知できる",          etymology:"sens（感じる）+ ible（できる）",              root:"-sens-", level:1, pos:"形容詞・動詞"},
  {word:"consent",         meaning:"同意する・承諾",              etymology:"con（共に）+ sent（感じる）",                 root:"-sent-", level:1, pos:"動詞・名詞"},
  {word:"dissent",         meaning:"異議を唱える・反対意見",      etymology:"dis（離れて）+ sent（感じる）",               root:"-sent-", level:2, pos:"動詞・名詞"},
  {word:"resent",          meaning:"憤る・不快に思う",            etymology:"re（再び）+ sent（感じる）",                  root:"-sent-", level:2, pos:"動詞・名詞"},
  {word:"assent",          meaning:"同意する",                  etymology:"as（〜に）+ sent（感じる）",                  root:"-sent-", level:2, pos:"動詞"},
  {word:"sentiment",       meaning:"感情・意見",                 etymology:"sent（感じる）+ iment（状態）",               root:"-sent-", level:2, pos:"名詞"},
  {word:"sentimental",     meaning:"感傷的な",                  etymology:"sentiment（感情）+ al（〜の）",               root:"-sent-", level:2, pos:"形容詞"},
  {word:"sensation",       meaning:"感覚・大評判",               etymology:"sens（感じる）+ ation（行為）",               root:"-sens-", level:1, pos:"名詞"},
  {word:"sensory",         meaning:"感覚の・知覚の",             etymology:"sens（感じる）+ ory（〜の）",                 root:"-sens-", level:2, pos:"形容詞"},
  {word:"insensitive",     meaning:"無神経な・鈍感な",            etymology:"in（否定）+ sensitive（敏感な）",             root:"-sens-", level:2, pos:"形容詞"},

  // ── -serv-（守る・仕える） ──────────────────
  {word:"serve",           meaning:"仕える・奉仕する",            etymology:"serv（仕える）+ e",                           root:"-serv-", level:0, pos:"動詞"},
  {word:"service",         meaning:"サービス・奉仕",              etymology:"serv（仕える）+ ice（行為）",                  root:"-serv-", level:0, pos:"名詞"},
  {word:"preserve",        meaning:"保存する・守る",              etymology:"pre（前に）+ serv（守る）+ e",                root:"-serv-", level:1, pos:"動詞"},
  {word:"reserve",         meaning:"予約する・保有する",          etymology:"re（後ろに）+ serv（守る）+ e→取っておく",     root:"-serv-", level:1, pos:"動詞"},
  {word:"observe",         meaning:"観察する・守る",              etymology:"ob（〜に）+ serv（守る）+ e→注意を向ける",     root:"-serv-", level:1, pos:"動詞"},
  {word:"conserve",        meaning:"保護する・節約する",          etymology:"con（完全に）+ serv（守る）+ e",              root:"-serv-", level:2, pos:"動詞"},
  {word:"deserve",         meaning:"〜に値する・当然受けるべき",   etymology:"de（完全に）+ serv（仕える）+ e",             root:"-serv-", level:1, pos:"動詞・名詞"},
  {word:"servile",         meaning:"卑屈な・奴隷の",             etymology:"serv（仕える）+ ile（〜の）",                 root:"-serv-", level:3, pos:"形容詞"},
  {word:"subservient",     meaning:"従順な・役立つ",              etymology:"sub（下に）+ serv（仕える）+ ient（〜な）",    root:"-serv-", level:3, pos:"形容詞・動詞"},
  {word:"reservoir",       meaning:"貯水池・蓄え",               etymology:"reserv（取っておく）+ oir（場所）",            root:"-serv-", level:2, pos:"名詞"},

  // ── -sist-（立つ・留まる） ──────────────────
  {word:"exist",           meaning:"存在する",                  etymology:"ex（外に）+ sist（立つ）",                    root:"-sist-", level:0, pos:"動詞"},
  {word:"insist",          meaning:"主張する・強調する",          etymology:"in（中に）+ sist（立つ）→立場を保つ",          root:"-sist-", level:1, pos:"動詞"},
  {word:"consist",         meaning:"構成される・成り立つ",        etymology:"con（共に）+ sist（立つ）",                   root:"-sist-", level:1, pos:"動詞"},
  {word:"persist",         meaning:"持続する・固執する",          etymology:"per（完全に）+ sist（立つ）",                 root:"-sist-", level:2, pos:"動詞"},
  {word:"resist",          meaning:"抵抗する・耐える",            etymology:"re（反対に）+ sist（立つ）",                  root:"-sist-", level:1, pos:"動詞"},
  {word:"assist",          meaning:"助ける・援助する",            etymology:"as（〜に）+ sist（立つ）→横に立つ",            root:"-sist-", level:1, pos:"動詞"},
  {word:"subsist",         meaning:"生存する・暮らす",            etymology:"sub（下で）+ sist（立つ）",                   root:"-sist-", level:2, pos:"動詞"},
  {word:"desist",          meaning:"やめる・思いとどまる",        etymology:"de（離れて）+ sist（立つ）",                  root:"-sist-", level:3, pos:"動詞"},
  {word:"resistance",      meaning:"抵抗・抵抗力",               etymology:"resist（抵抗する）+ ance（状態）",             root:"-sist-", level:1, pos:"名詞"},
  {word:"consistency",     meaning:"一貫性・整合性",              etymology:"consist（成り立つ）+ ency（状態）",            root:"-sist-", level:2, pos:"名詞"},

  // ── -spec-/-spic-/-spect-（見る） ──────────────────
  {word:"inspect",         meaning:"検査する・調べる",            etymology:"in（中を）+ spect（見る）",                   root:"-spec-", level:1, pos:"動詞"},
  {word:"expect",          meaning:"期待する・予期する",          etymology:"ex（外を）+ pect（見る）→外を見る",            root:"-spec-", level:0, pos:"動詞"},
  {word:"respect",         meaning:"尊重する・尊敬",              etymology:"re（再び）+ spect（見る）→見直す",             root:"-spec-", level:0, pos:"動詞・名詞"},
  {word:"prospect",        meaning:"見通し・展望・採掘する",      etymology:"pro（前を）+ spect（見る）",                  root:"-spec-", level:2, pos:"名詞・動詞"},
  {word:"retrospect",      meaning:"回想・振り返り",              etymology:"retro（後ろを）+ spect（見る）",               root:"-spec-", level:2, pos:"名詞"},
  {word:"suspect",         meaning:"疑う・容疑者",               etymology:"su（下を）+ spect（見る）→下から見る",         root:"-spec-", level:1, pos:"名詞"},
  {word:"spectacular",     meaning:"壮観な・見事な",              etymology:"spect（見る）+ acular（〜の）",               root:"-spec-", level:1, pos:"形容詞"},
  {word:"conspicuous",     meaning:"目立つ・明白な",              etymology:"con（完全に）+ spic（見る）+ uous（〜な）",    root:"-spic-", level:2, pos:"動詞・形容詞"},
  {word:"auspicious",      meaning:"幸先の良い・縁起のよい",      etymology:"aus（鳥）+ spic（見る）+ ious（〜な）→鳥占い",root:"-spic-", level:3, pos:"形容詞"},
  {word:"circumspect",     meaning:"慎重な・用心深い",            etymology:"circum（周りを）+ spect（見る）",             root:"-spec-", level:3, pos:"形容詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
