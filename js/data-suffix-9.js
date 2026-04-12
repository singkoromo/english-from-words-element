/**
 * data-suffix-9.js — 接尾語補充1（-ible, -sion）
 */
(function(){
  var d = [
  // ── -ible（できる・可能） ──────────────────
  {word:"flexible",      meaning:"柔軟な・曲げられる",        etymology:"flex（曲げる）+ ible（できる）",              suffix:"-ible", level:1},
  {word:"visible",       meaning:"見える・目に見える",         etymology:"vis（見る）+ ible（できる）",                 suffix:"-ible", level:1},
  {word:"possible",      meaning:"可能な・できる",             etymology:"pos（置く）+ ible（できる）",                 suffix:"-ible", level:0},
  {word:"terrible",      meaning:"恐ろしい・ひどい",           etymology:"terr（恐怖）+ ible（状態）",                  suffix:"-ible", level:0},
  {word:"sensible",      meaning:"分別のある・合理的な",        etymology:"sens（感じる）+ ible（できる）",              suffix:"-ible", level:1},
  {word:"responsible",   meaning:"責任がある",                 etymology:"respons（応答）+ ible（できる）",             suffix:"-ible", level:1},
  {word:"accessible",    meaning:"近づきやすい・利用しやすい",  etymology:"access（近づく）+ ible（できる）",            suffix:"-ible", level:2},
  {word:"audible",       meaning:"聞こえる・可聴の",           etymology:"aud（聞く）+ ible（できる）",                 suffix:"-ible", level:2},
  {word:"credible",      meaning:"信用できる",                 etymology:"cred（信じる）+ ible（できる）",              suffix:"-ible", level:2},
  {word:"edible",        meaning:"食べられる",                 etymology:"ed（食べる）+ ible（できる）",                suffix:"-ible", level:2},
  {word:"eligible",      meaning:"資格がある・適格な",          etymology:"eleg（選ぶ）+ ible（できる）",               suffix:"-ible", level:2},
  {word:"feasible",      meaning:"実行可能な・実現可能な",      etymology:"fais（する）+ ible（できる）",                suffix:"-ible", level:2},
  {word:"legible",       meaning:"読みやすい・判読できる",      etymology:"leg（読む）+ ible（できる）",                 suffix:"-ible", level:2},
  {word:"reversible",    meaning:"逆にできる・元に戻せる",      etymology:"revers（逆にする）+ ible（できる）",          suffix:"-ible", level:2},
  {word:"divisible",     meaning:"割り切れる・分けられる",      etymology:"divis（分ける）+ ible（できる）",             suffix:"-ible", level:2},
  {word:"convertible",   meaning:"変換できる・転換可能な",      etymology:"convert（変換する）+ ible（できる）",         suffix:"-ible", level:2},
  {word:"permissible",   meaning:"許可される・許容できる",      etymology:"permiss（許可）+ ible（できる）",             suffix:"-ible", level:3},
  {word:"irresistible",  meaning:"抵抗できない・魅力的な",      etymology:"ir（否定）+ resist（抵抗）+ ible（できる）",  suffix:"-ible", level:3},
  {word:"invincible",    meaning:"無敵の・征服できない",         etymology:"in（否定）+ vinc（征服）+ ible（できる）",    suffix:"-ible", level:3},
  {word:"indestructible",meaning:"破壊できない・不滅の",        etymology:"in（否定）+ destruct（破壊）+ ible（できる）",suffix:"-ible", level:3},
  {word:"fallible",      meaning:"誤りを犯しやすい",           etymology:"fall（誤る）+ ible（しやすい）",              suffix:"-ible", level:3},
  {word:"forcible",      meaning:"力ずくの・強制的な",          etymology:"forc（力）+ ible（できる）",                  suffix:"-ible", level:2},
  {word:"gullible",      meaning:"だまされやすい",             etymology:"gull（だます）+ ible（しやすい）",            suffix:"-ible", level:2},
  {word:"horrible",      meaning:"恐ろしい・ひどい",           etymology:"horr（震える）+ ible（状態）",                suffix:"-ible", level:1},
  {word:"susceptible",   meaning:"影響を受けやすい",           etymology:"suscept（受け取る）+ ible（しやすい）",       suffix:"-ible", level:3},
  {word:"digestible",    meaning:"消化できる・理解しやすい",    etymology:"digest（消化する）+ ible（できる）",          suffix:"-ible", level:2},

  // ── -sion（行為・状態・結果） ──────────────────
  {word:"tension",       meaning:"緊張・張力",                 etymology:"tens（伸ばす）+ sion（状態）",                suffix:"-sion", level:1},
  {word:"mission",       meaning:"使命・任務",                 etymology:"miss（送る）+ sion（行為）",                  suffix:"-sion", level:1},
  {word:"permission",    meaning:"許可・承認",                 etymology:"permiss（許す）+ sion（行為）",               suffix:"-sion", level:1},
  {word:"discussion",    meaning:"議論・討論",                 etymology:"discuss（議論する）+ sion（行為）",           suffix:"-sion", level:1},
  {word:"conclusion",    meaning:"結論・終わり",               etymology:"conclus（締める）+ sion（結果）",             suffix:"-sion", level:1},
  {word:"decision",      meaning:"決定・決断",                 etymology:"decis（切る）+ sion（行為）",                 suffix:"-sion", level:0},
  {word:"extension",     meaning:"延長・拡張",                 etymology:"extens（伸ばす）+ sion（行為）",              suffix:"-sion", level:1},
  {word:"explosion",     meaning:"爆発",                       etymology:"explos（爆発する）+ sion（行為）",            suffix:"-sion", level:1},
  {word:"confusion",     meaning:"混乱・困惑",                 etymology:"confus（混ぜる）+ sion（状態）",              suffix:"-sion", level:1},
  {word:"invasion",      meaning:"侵略・侵攻",                 etymology:"invas（入り込む）+ sion（行為）",             suffix:"-sion", level:2},
  {word:"diversion",     meaning:"転換・気晴らし",             etymology:"divers（そらす）+ sion（行為）",              suffix:"-sion", level:2},
  {word:"revision",      meaning:"改訂・修正",                 etymology:"revis（見直す）+ sion（行為）",               suffix:"-sion", level:2},
  {word:"suspension",    meaning:"停止・中断・懸架",            etymology:"suspens（ぶら下げる）+ sion（状態）",         suffix:"-sion", level:2},
  {word:"illusion",      meaning:"錯覚・幻想",                 etymology:"illus（欺く）+ sion（状態）",                 suffix:"-sion", level:2},
  {word:"aggression",    meaning:"攻撃性・侵略",               etymology:"aggress（攻撃する）+ sion（行為）",           suffix:"-sion", level:2},
  {word:"depression",    meaning:"憂鬱・不況",                 etymology:"depress（押し下げる）+ sion（状態）",         suffix:"-sion", level:2},
  {word:"recession",     meaning:"景気後退・後退",             etymology:"recess（引き下がる）+ sion（行為）",          suffix:"-sion", level:2},
  {word:"succession",    meaning:"継承・連続",                 etymology:"success（続く）+ sion（行為）",               suffix:"-sion", level:3},
  {word:"concession",    meaning:"譲歩・特許",                 etymology:"concess（譲る）+ sion（行為）",               suffix:"-sion", level:3},
  {word:"impression",    meaning:"印象・感銘",                 etymology:"impress（印をつける）+ sion（状態）",         suffix:"-sion", level:1},
  {word:"obsession",     meaning:"強迫観念・とりつき",          etymology:"obsess（とりつく）+ sion（状態）",            suffix:"-sion", level:2},
  {word:"submission",    meaning:"服従・提出",                 etymology:"submiss（下に置く）+ sion（行為）",           suffix:"-sion", level:2},
  {word:"transgression", meaning:"違反・罪",                   etymology:"transgress（越える）+ sion（行為）",          suffix:"-sion", level:3},
  {word:"possession",    meaning:"所有・財産",                 etymology:"possess（所有する）+ sion（状態）",           suffix:"-sion", level:1},
  {word:"expansion",     meaning:"拡大・膨張",                 etymology:"expans（広げる）+ sion（行為）",              suffix:"-sion", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
