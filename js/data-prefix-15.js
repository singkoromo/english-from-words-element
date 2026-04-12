/**
 * data-prefix-15.js — 接頭語補充5（multi-, non-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── multi-（多くの・複数の） ──────────────────
  {word:"multipurpose",      meaning:"多目的の・多用途の",           etymology:"multi（多くの）+ purpose（目的）",                   prefix:"multi-", level:1},
  {word:"multifunction",     meaning:"多機能の",                     etymology:"multi（多くの）+ function（機能）",                  prefix:"multi-", level:1},
  {word:"multitude",         meaning:"多数・群衆",                   etymology:"multi（多くの）+ tude（状態・名詞化）",               prefix:"multi-", level:2},
  {word:"multilateral",      meaning:"多国間の・多角的な",           etymology:"multi（多くの）+ lateral（側の）",                   prefix:"multi-", level:2},
  {word:"multiethnic",       meaning:"多民族の",                     etymology:"multi（多くの）+ ethnic（民族の）",                  prefix:"multi-", level:2},
  {word:"multiplicity",      meaning:"多様性・多数",                 etymology:"multi（多くの）+ plicity（折り重なること）",           prefix:"multi-", level:3},
  {word:"multistorey",       meaning:"多階建ての",                   etymology:"multi（多くの）+ storey（階）",                      prefix:"multi-", level:1},
  {word:"multiparty",        meaning:"多党制の",                     etymology:"multi（多くの）+ party（政党）",                     prefix:"multi-", level:2},
  {word:"multiracial",       meaning:"多人種の",                     etymology:"multi（多くの）+ racial（人種の）",                  prefix:"multi-", level:1},
  {word:"multicolored",      meaning:"多色の・色彩豊かな",           etymology:"multi（多くの）+ colored（色の付いた）",              prefix:"multi-", level:0},
  {word:"multiform",         meaning:"多様な形の・多形の",           etymology:"multi（多くの）+ form（形）",                        prefix:"multi-", level:2},
  {word:"multilevel",        meaning:"多層の・複数レベルの",         etymology:"multi（多くの）+ level（水準・階層）",               prefix:"multi-", level:2},
  {word:"multivitamin",      meaning:"マルチビタミン",               etymology:"multi（多くの）+ vitamin（ビタミン）",               prefix:"multi-", level:0},
  {word:"multichannel",      meaning:"多チャンネルの",               etymology:"multi（多くの）+ channel（チャンネル）",              prefix:"multi-", level:1},
  {word:"multimodal",        meaning:"マルチモーダルの・複合様式の", etymology:"multi（多くの）+ modal（様式の）",                   prefix:"multi-", level:2},
  {word:"multimillion",      meaning:"数百万の・多額の",             etymology:"multi（多くの）+ million（百万）",                   prefix:"multi-", level:1},
  {word:"multitasking",      meaning:"マルチタスキング・並行作業",   etymology:"multi（多くの）+ tasking（作業）",                   prefix:"multi-", level:1},
  {word:"multiplatform",     meaning:"マルチプラットフォームの",     etymology:"multi（多くの）+ platform（プラットフォーム）",       prefix:"multi-", level:2},
  {word:"multifamily",       meaning:"集合住宅の・多世帯の",         etymology:"multi（多くの）+ family（家族）",                    prefix:"multi-", level:1},
  {word:"multiverse",        meaning:"多元宇宙・マルチバース",       etymology:"multi（多くの）+ verse（uni の反対：多宇宙）",        prefix:"multi-", level:2},

  // ── non-（否定・〜でない） ──────────────────
  {word:"nonverbal",         meaning:"非言語の・言葉を使わない",     etymology:"non（否定）+ verbal（言語の）",                      prefix:"non-", level:1},
  {word:"noncompliant",      meaning:"非準拠の・従わない",           etymology:"non（否定）+ compliant（従順な）",                   prefix:"non-", level:2},
  {word:"noncommittal",      meaning:"曖昧な・態度を保留した",       etymology:"non（否定）+ committal（確約する）",                 prefix:"non-", level:2},
  {word:"nonrenewable",      meaning:"再生不可能な・枯渇性の",       etymology:"non（否定）+ renewable（再生可能な）",               prefix:"non-", level:1},
  {word:"nonaligned",        meaning:"非同盟の・中立の",             etymology:"non（否定）+ aligned（同盟した）",                   prefix:"non-", level:2},
  {word:"nonbeliever",       meaning:"非信者・無宗教者",             etymology:"non（否定）+ believer（信者）",                      prefix:"non-", level:1},
  {word:"nonconductor",      meaning:"絶縁体・不導体",               etymology:"non（否定）+ conductor（導体）",                     prefix:"non-", level:2},
  {word:"nonplussed",        meaning:"당惑した・途方に暮れた",       etymology:"non（否定）+ plus（さらに進む）→どうにもならない",     prefix:"non-", level:3},
  {word:"nontoxic",          meaning:"無毒の・毒性のない",           etymology:"non（否定）+ toxic（毒性の）",                       prefix:"non-", level:1},
  {word:"nonprofit",         meaning:"非営利の・利益を目的としない", etymology:"non（否定）+ profit（利益）",                        prefix:"non-", level:1},
  {word:"nonbinding",        meaning:"拘束力のない・任意の",         etymology:"non（否定）+ binding（拘束する）",                   prefix:"non-", level:2},
  {word:"nonissue",          meaning:"問題にならないこと",           etymology:"non（否定）+ issue（問題・争点）",                   prefix:"non-", level:2},
  {word:"nonlinear",         meaning:"非線形の",                     etymology:"non（否定）+ linear（線形の）",                      prefix:"non-", level:2},
  {word:"nondisclosure",     meaning:"非開示・守秘",                 etymology:"non（否定）+ disclosure（開示）",                    prefix:"non-", level:2},
  {word:"nonrefundable",     meaning:"返金不可の",                   etymology:"non（否定）+ refundable（返金可能な）",              prefix:"non-", level:1},
  {word:"nonstandard",       meaning:"標準外の・規格外の",           etymology:"non（否定）+ standard（標準）",                      prefix:"non-", level:1},
  {word:"nondescript",       meaning:"平凡な・特徴のない",           etymology:"non（否定）+ descript（描写された）→描写しにくい",    prefix:"non-", level:3},
  {word:"nonfatal",          meaning:"致命的でない・死亡しない",     etymology:"non（否定）+ fatal（致命的な）",                     prefix:"non-", level:1},
  {word:"nonessential",      meaning:"必須でない・不要な",           etymology:"non（否定）+ essential（必須の）",                   prefix:"non-", level:1},
  {word:"nongovernmental",   meaning:"非政府の・民間の",             etymology:"non（否定）+ governmental（政府の）",                prefix:"non-", level:1},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
