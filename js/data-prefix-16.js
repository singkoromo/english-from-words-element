/**
 * data-prefix-14.js — 接頭語データ（for-, with-, after-）各語
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── for-（離れて・禁止・完全に ―古英語接頭語） ──────────────────
  {word:"forbid",      meaning:"禁じる・禁止する",         etymology:"for（禁止）+ bid（命じる）",                prefix:"for-", level:3, pos:"動詞"},
  {word:"forget",      meaning:"忘れる",                  etymology:"for（離れて）+ get（把握する）→把握を失う",  prefix:"for-", level:1, pos:"動詞"},
  {word:"forgive",     meaning:"許す・赦す",               etymology:"for（完全に）+ give（与える）→完全に与える", prefix:"for-", level:1, pos:"動詞"},
  {word:"forsake",     meaning:"見捨てる・放棄する",       etymology:"for（離れて）+ sake（争う）→追い払う",      prefix:"for-", level:5, pos:"動詞"},
  {word:"forgo",       meaning:"断念する・〜なしで済ます", etymology:"for（離れて）+ go（行く）→諦めて去る",       prefix:"for-", level:5, pos:"動詞"},
  {word:"forbear",     meaning:"自制する・こらえる",       etymology:"for（完全に）+ bear（耐える）",             prefix:"for-", level:5, pos:"動詞"},
  {word:"forswear",    meaning:"誓って断つ・放棄を誓う",   etymology:"for（完全に）+ swear（誓う）",              prefix:"for-", level:6, pos:"動詞・名詞"},
  {word:"forfeit",     meaning:"没収される・失う",         etymology:"for（外に）+ fait（行為）←古フランス語",    prefix:"for-", level:5, pos:"動詞・名詞"},
  {word:"forlorn",     meaning:"寂しい・見捨てられた",     etymology:"for（完全に）+ lorn（失われた）",           prefix:"for-", level:5, pos:"形容詞"},
  {word:"forsworn",    meaning:"偽りの誓いをした",         etymology:"for（完全に）+ sworn（誓った）",            prefix:"for-", level:6, pos:"形容詞"},
  {word:"forbearance", meaning:"自制・忍耐・寛容",         etymology:"forbear（耐える）+ ance（状態）",           prefix:"for-", level:6, pos:"名詞"},
  {word:"forthright",  meaning:"率直な・真っ直ぐな",       etymology:"forth（前に）+ right（まっすぐ）",          prefix:"for-", level:5, pos:"形容詞"},
  {word:"forthcoming", meaning:"近づいている・協力的な",   etymology:"forth（前に）+ coming（来る）",             prefix:"for-", level:5, pos:"動詞・形容詞"},
  {word:"fortify",     meaning:"強化する・要塞化する",     etymology:"fort（強い）+ ify（〜にする）",             prefix:"for-", level:5, pos:"動詞"},
  {word:"formidable",  meaning:"恐るべき・手ごわい",       etymology:"form（形）+ idable（恐ろしい）←ラテン語",   prefix:"for-", level:5, pos:"名詞・形容詞"},

  // ── with-（反対・後ろに・引き离す ―古英語接頭語） ─────────────────────
  {word:"withdraw",    meaning:"引き出す・撤退する",       etymology:"with（後ろに）+ draw（引く）",              prefix:"with-", level:3, pos:"動詞"},
  {word:"withstand",   meaning:"耐える・持ちこたえる",     etymology:"with（反対に）+ stand（立つ）",             prefix:"with-", level:5, pos:"動詞"},
  {word:"withhold",    meaning:"差し控える・隠す",         etymology:"with（後ろに）+ hold（保つ）",              prefix:"with-", level:5, pos:"動詞"},
  {word:"within",      meaning:"〜の中に・以内に",         etymology:"with（〜の中に）+ in（中）",                prefix:"with-", level:1, pos:"副詞"},
  {word:"without",     meaning:"〜なしで・外に",           etymology:"with（〜に対して）+ out（外）",             prefix:"with-", level:1, pos:"名詞・副詞"},
  {word:"withdrawal",  meaning:"撤退・引き出し・禁断症状", etymology:"withdraw（引く）+ al（行為）",              prefix:"with-", level:5, pos:"名詞"},
  {word:"withering",   meaning:"しなびさせる・痛烈な",     etymology:"wither（しぼむ）+ ing（〜の）",             prefix:"with-", level:5, pos:"動詞・形容詞"},

  // ── after-（後に・続いて） ─────────────────────
  {word:"aftermath",   meaning:"後遺症・余波・結果",       etymology:"after（後に）+ math（草刈り）→刈り取り後",  prefix:"after-", level:5, pos:"名詞"},
  {word:"afterthought",meaning:"後から思いついたこと",     etymology:"after（後に）+ thought（考え）",            prefix:"after-", level:5, pos:"名詞"},
  {word:"aftershock",  meaning:"余震・後遺症",             etymology:"after（後に）+ shock（衝撃）",              prefix:"after-", level:5, pos:"名詞"},
  {word:"afterlife",   meaning:"来世・死後の世界",         etymology:"after（後に）+ life（生命）",               prefix:"after-", level:3, pos:"名詞"},
  {word:"aftermath",   meaning:"後遺症・余波",             etymology:"after（後に）+ math（草刈り）",             prefix:"after-", level:5, pos:"名詞"},
  {word:"aftertaste",  meaning:"後味・余韻",               etymology:"after（後に）+ taste（味）",                prefix:"after-", level:5, pos:"名詞"},
  {word:"afterword",   meaning:"後書き・あとがき",         etymology:"after（後に）+ word（言葉）",               prefix:"after-", level:5, pos:"名詞"},
  {word:"aftereffect", meaning:"後遺症・副作用",           etymology:"after（後に）+ effect（効果）",             prefix:"after-", level:5, pos:"名詞"},
  {word:"afternoon",   meaning:"午後",                    etymology:"after（後に）+ noon（正午）",               prefix:"after-", level:2, pos:"名詞"},

  // ── down-（下に・減少・否定） ─────────────────────
  {word:"download",    meaning:"ダウンロードする",         etymology:"down（下に）+ load（積む）",                prefix:"down-", level:1, pos:"動詞"},
  {word:"downgrade",   meaning:"格下げする・降格",         etymology:"down（下に）+ grade（等級）",               prefix:"down-", level:3, pos:"動詞・名詞"},
  {word:"downfall",    meaning:"没落・失脚",               etymology:"down（下に）+ fall（落ちる）",              prefix:"down-", level:5, pos:"名詞"},
  {word:"downplay",    meaning:"軽視する・重要性を低める", etymology:"down（下に）+ play（演じる）",              prefix:"down-", level:5, pos:"動詞"},
  {word:"downsize",    meaning:"規模を縮小する",           etymology:"down（下に）+ size（規模）",                prefix:"down-", level:5, pos:"動詞"},
  {word:"downright",   meaning:"まったくの・徹底した",     etymology:"down（完全に）+ right（正確）",             prefix:"down-", level:5, pos:"形容詞"},
  {word:"downside",    meaning:"マイナス面・欠点",         etymology:"down（下の）+ side（側面）",                prefix:"down-", level:3, pos:"名詞"},
  {word:"downturm",    meaning:"下落・悪化",               etymology:"down（下に）+ turn（回る）",                prefix:"down-", level:5, pos:"名詞"},
  {word:"downbeat",    meaning:"陰鬱な・悲観的な",         etymology:"down（下の）+ beat（拍子）",                prefix:"down-", level:5, pos:"形容詞"},
  {word:"downstream",  meaning:"下流の・川下に",           etymology:"down（下に）+ stream（流れ）",              prefix:"down-", level:3, pos:"形容詞・副詞"},
  {word:"downward",    meaning:"下向きの・下方に",         etymology:"down（下に）+ ward（方向）",                prefix:"down-", level:3, pos:"形容詞・副詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
