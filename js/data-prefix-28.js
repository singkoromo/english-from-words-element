/**
 * data-prefix-28.js — 接頭語補充18（mal-, syn-, de-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── mal-（悪・不良・不正） ──────────────────
  {word:"malversation",         meaning:"汚職・公金横領",                  etymology:"mal（悪）+ versation（行為）",                    prefix:"mal-", level:3},
  {word:"malconduct",           meaning:"不正行為・不品行",                etymology:"mal（悪）+ conduct（行為）",                      prefix:"mal-", level:2},
  {word:"malinvestment",        meaning:"過剰投資・誤った投資配分",        etymology:"mal（悪）+ investment（投資）",                   prefix:"mal-", level:3},
  {word:"malinterpretation",    meaning:"誤解釈・間違った解釈",            etymology:"mal（悪）+ interpretation（解釈）",               prefix:"mal-", level:2},
  {word:"malorientation",       meaning:"見当識障害・方向感覚の喪失",      etymology:"mal（悪）+ orientation（方向）",                  prefix:"mal-", level:3},
  {word:"malapprehension",      meaning:"誤解・不正確な理解",              etymology:"mal（悪）+ apprehension（理解）",                 prefix:"mal-", level:3},
  {word:"malrepresentation",    meaning:"虚偽表示・誤った表現",            etymology:"mal（悪）+ representation（表現）",               prefix:"mal-", level:3},
  {word:"malperformance",       meaning:"不完全な遂行・粗末な実行",        etymology:"mal（悪）+ performance（遂行）",                  prefix:"mal-", level:2},
  {word:"malcoordination",      meaning:"協調不良・動作不調整",            etymology:"mal（悪）+ coordination（協調）",                 prefix:"mal-", level:3},
  {word:"maltransport",         meaning:"輸送障害・搬送異常",              etymology:"mal（悪）+ transport（輸送）",                    prefix:"mal-", level:3},
  {word:"malresponsiveness",    meaning:"反応不全・応答障害",              etymology:"mal（悪）+ responsiveness（反応性）",             prefix:"mal-", level:3},
  {word:"malcommunication",     meaning:"コミュニケーション不全",          etymology:"mal（悪）+ communication（伝達）",                prefix:"mal-", level:2},
  {word:"malappreciation",      meaning:"不当評価・正しく評価しないこと",  etymology:"mal（悪）+ appreciation（評価）",                 prefix:"mal-", level:3},

  // ── syn-（共に・同時・一緒に） ──────────────────
  {word:"syncretism",           meaning:"習合主義・異なる信仰の融合",      etymology:"syn（共に）+ cretism（混合）",                    prefix:"syn-", level:3},
  {word:"syndicate",            meaning:"シンジケート・企業連合",          etymology:"syn（共に）+ dicate（言明する）",                 prefix:"syn-", level:2},
  {word:"synecdoche",           meaning:"提喩・部分で全体を表す修辞法",    etymology:"syn（共に）+ ecdoche（受け取ること）",            prefix:"syn-", level:3},
  {word:"synesthesia",          meaning:"共感覚・感覚の交差",              etymology:"syn（共に）+ esthesia（感覚）",                   prefix:"syn-", level:3},
  {word:"syngamy",              meaning:"配偶子融合・受精",                etymology:"syn（共に）+ gamy（婚姻・融合）",                 prefix:"syn-", level:3},
  {word:"syntagm",              meaning:"連辞・統語的連鎖",                etymology:"syn（共に）+ tagm（配列）",                       prefix:"syn-", level:3},
  {word:"syntropy",             meaning:"シントロピー・秩序への傾向",      etymology:"syn（共に）+ tropy（向かうこと）",                prefix:"syn-", level:3},
  {word:"synkaryon",            meaning:"合核・融合した細胞核",            etymology:"syn（共に）+ karyon（核）",                       prefix:"syn-", level:3},
  {word:"synclinal",            meaning:"向斜の・岩層が下向きに湾曲した",  etymology:"syn（共に）+ clinal（傾いた）",                   prefix:"syn-", level:3},
  {word:"syneresis",            meaning:"離漿・ゲルから液体が分離すること",etymology:"syn（共に）+ eresis（取ること）",                 prefix:"syn-", level:3},
  {word:"synoptic",             meaning:"概観的な・全体を俯瞰した",        etymology:"syn（共に）+ optic（見ること）",                  prefix:"syn-", level:2},
  {word:"syntactic",            meaning:"統語論的な・文法構造の",          etymology:"syn（共に）+ tactic（配置）",                     prefix:"syn-", level:2},
  {word:"synchrocyclotron",     meaning:"シンクロサイクロトロン（粒子加速器）",etymology:"syn（共に）+ chrocyclotron（サイクロトロン）",prefix:"syn-", level:3},

  // ── de-（除去・下降・逆転） ──────────────────
  {word:"debrief",              meaning:"任務後の報告を受ける・聞き取る",  etymology:"de（完全に）+ brief（報告）",                     prefix:"de-", level:2},
  {word:"decentralize",         meaning:"分権化する・権力を分散させる",   etymology:"de（離す）+ centralize（中央集権化）",            prefix:"de-", level:2},
  {word:"decipher",             meaning:"解読する・暗号を解く",            etymology:"de（逆）+ cipher（暗号）",                        prefix:"de-", level:2},
  {word:"decommission",         meaning:"廃止する・退役させる",            etymology:"de（除去）+ commission（任務・就役）",            prefix:"de-", level:2},
  {word:"decompose",            meaning:"分解する・腐敗する",              etymology:"de（逆）+ compose（組み合わせる）",               prefix:"de-", level:1},
  {word:"deconstruct",          meaning:"脱構築する・分解して分析する",    etymology:"de（逆）+ construct（構築する）",                 prefix:"de-", level:2},
  {word:"decontaminate",        meaning:"除染する・汚染を除去する",        etymology:"de（除去）+ contaminate（汚染する）",             prefix:"de-", level:2},
  {word:"deforest",             meaning:"森林を伐採する・森を破壊する",    etymology:"de（除去）+ forest（森林）",                      prefix:"de-", level:1},
  {word:"demystify",            meaning:"神秘性を取り除く・謎を解く",      etymology:"de（除去）+ mystify（神秘化する）",               prefix:"de-", level:2},
  {word:"deprive",              meaning:"奪う・剥奪する",                  etymology:"de（除去）+ prive（個人の）",                     prefix:"de-", level:1},
  {word:"delegate",             meaning:"委任する・代表として派遣する",    etymology:"de（離す）+ legate（使節）",                      prefix:"de-", level:1},
  {word:"deescalate",           meaning:"段階的に緩和する・緊張を下げる", etymology:"de（逆）+ escalate（段階的に上げる）",            prefix:"de-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
