/**
 * data-prefix-20.js — 接頭語補充10（com-, neo-, ultra-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── com-（共に・完全に） ──────────────────
  {word:"commerce",       meaning:"商業・通商",                   etymology:"com（共に）+ merce（取引する）",                    prefix:"com-", level:1},
  {word:"community",      meaning:"地域社会・共同体",             etymology:"com（共に）+ unity（一体）",                        prefix:"com-", level:0},
  {word:"commemorate",    meaning:"記念する・追悼する",           etymology:"com（共に）+ memorate（記憶する）",                  prefix:"com-", level:2},
  {word:"comprise",       meaning:"構成する・含む",               etymology:"com（共に）+ prise（取る）",                        prefix:"com-", level:2},
  {word:"comply",         meaning:"従う・応じる",                 etymology:"com（完全に）+ ply（折る・従う）",                  prefix:"com-", level:1},
  {word:"component",      meaning:"構成要素・部品",               etymology:"com（共に）+ ponent（置く）",                       prefix:"com-", level:1},
  {word:"compress",       meaning:"圧縮する・凝縮する",           etymology:"com（完全に）+ press（押す）",                      prefix:"com-", level:1},
  {word:"compulsory",     meaning:"強制的な・義務的な",           etymology:"com（完全に）+ pulsory（駆り立てる）",              prefix:"com-", level:2},
  {word:"compatible",     meaning:"両立できる・互換性のある",     etymology:"com（共に）+ patible（感じる・耐える）",            prefix:"com-", level:2},
  {word:"comprehensive",  meaning:"包括的な・総合的な",           etymology:"com（完全に）+ prehensive（取る・理解する）",       prefix:"com-", level:2},
  {word:"compendium",     meaning:"要覧・概要・便覧",             etymology:"com（共に）+ pendium（重さ・釣り合い）",            prefix:"com-", level:3},
  {word:"commend",        meaning:"推薦する・称賛する",           etymology:"com（完全に）+ mend（委ねる）",                     prefix:"com-", level:2},
  {word:"contemplate",    meaning:"熟考する・瞑想する",           etymology:"com（共に）+ templum（神殿・観察の場）",            prefix:"com-", level:2},
  {word:"concede",        meaning:"認める・譲歩する",             etymology:"com（完全に）+ cede（行く・譲る）",                 prefix:"com-", level:2},
  {word:"concur",         meaning:"同意する・同時に起こる",       etymology:"com（共に）+ cur（走る・流れる）",                  prefix:"com-", level:2},
  {word:"confound",       meaning:"混乱させる・当惑させる",       etymology:"com（完全に）+ found（注ぐ・混ぜる）",              prefix:"com-", level:2},
  {word:"convoluted",     meaning:"複雑な・難解な",               etymology:"com（共に）+ voluted（巻かれた）",                  prefix:"com-", level:3},

  // ── neo-（新しい・近代の） ──────────────────
  {word:"neocortex",       meaning:"新皮質（大脳の最外層）",      etymology:"neo（新しい）+ cortex（皮質）",                     prefix:"neo-", level:3},
  {word:"neocolonialism",  meaning:"新植民地主義",                etymology:"neo（新しい）+ colonialism（植民地主義）",          prefix:"neo-", level:2},
  {word:"neodarwinism",    meaning:"新ダーウィニズム",            etymology:"neo（新しい）+ darwinism（ダーウィン主義）",        prefix:"neo-", level:3},
  {word:"neofascism",      meaning:"ネオファシズム",              etymology:"neo（新しい）+ fascism（ファシズム）",              prefix:"neo-", level:2},
  {word:"neoliberalism",   meaning:"新自由主義",                  etymology:"neo（新しい）+ liberalism（自由主義）",             prefix:"neo-", level:2},
  {word:"neocapitalism",   meaning:"新資本主義",                  etymology:"neo（新しい）+ capitalism（資本主義）",             prefix:"neo-", level:3},
  {word:"neoimperialism",  meaning:"新帝国主義",                  etymology:"neo（新しい）+ imperialism（帝国主義）",            prefix:"neo-", level:2},
  {word:"neoromanticism",  meaning:"新ロマン主義",                etymology:"neo（新しい）+ romanticism（ロマン主義）",          prefix:"neo-", level:3},
  {word:"neoteny",         meaning:"幼形成熟・幼体成熟",          etymology:"neo（新しい）+ teny（伸びる・長さ）",               prefix:"neo-", level:3},
  {word:"neofuturism",     meaning:"ネオフューチャリズム",        etymology:"neo（新しい）+ futurism（未来主義）",               prefix:"neo-", level:3},
  {word:"neoorthodox",     meaning:"新正統主義の",                etymology:"neo（新しい）+ orthodox（正統の）",                 prefix:"neo-", level:3},
  {word:"neoimpressionism",meaning:"新印象派",                    etymology:"neo（新しい）+ impressionism（印象派）",            prefix:"neo-", level:3},
  {word:"neopositivism",   meaning:"新実証主義",                  etymology:"neo（新しい）+ positivism（実証主義）",             prefix:"neo-", level:3},
  {word:"neorealist",      meaning:"新写実主義者の",              etymology:"neo（新しい）+ realist（現実主義者）",              prefix:"neo-", level:2},
  {word:"neoromantic",     meaning:"新ロマン主義の",              etymology:"neo（新しい）+ romantic（ロマン主義の）",           prefix:"neo-", level:2},
  {word:"neogothic",       meaning:"新ゴシック様式の",            etymology:"neo（新しい）+ gothic（ゴシックの）",               prefix:"neo-", level:2},
  {word:"neoconservatism", meaning:"新保守主義",                  etymology:"neo（新しい）+ conservatism（保守主義）",           prefix:"neo-", level:2},

  // ── ultra-（超・極限） ──────────────────
  {word:"ultramarine",     meaning:"群青色・濃い青色",            etymology:"ultra（超えた）+ marine（海）→ 海の向こうの色",     prefix:"ultra-", level:2},
  {word:"ultrawide",       meaning:"超広角の・超幅広の",          etymology:"ultra（超）+ wide（広い）",                         prefix:"ultra-", level:1},
  {word:"ultrathin",       meaning:"超薄型の",                    etymology:"ultra（超）+ thin（薄い）",                         prefix:"ultra-", level:1},
  {word:"ultracompact",    meaning:"超小型の",                    etymology:"ultra（超）+ compact（小型の）",                    prefix:"ultra-", level:2},
  {word:"ultradense",      meaning:"超高密度の",                  etymology:"ultra（超）+ dense（密な）",                        prefix:"ultra-", level:2},
  {word:"ultrashort",      meaning:"超短い・超短波の",            etymology:"ultra（超）+ short（短い）",                        prefix:"ultra-", level:2},
  {word:"ultrarich",       meaning:"超富裕層の",                  etymology:"ultra（超）+ rich（裕福な）",                       prefix:"ultra-", level:1},
  {word:"ultraportable",   meaning:"超携帯性の・極めて軽量な",    etymology:"ultra（超）+ portable（携帯できる）",               prefix:"ultra-", level:2},
  {word:"ultrarapid",      meaning:"超高速の",                    etymology:"ultra（超）+ rapid（速い）",                        prefix:"ultra-", level:2},
  {word:"ultraradical",    meaning:"超過激な・急進的な",          etymology:"ultra（超）+ radical（急進的な）",                  prefix:"ultra-", level:2},
  {word:"ultraefficient",  meaning:"超高効率の",                  etymology:"ultra（超）+ efficient（効率的な）",                prefix:"ultra-", level:2},
  {word:"ultraclean",      meaning:"超清潔な・極めて清潔な",      etymology:"ultra（超）+ clean（清潔な）",                      prefix:"ultra-", level:1},
  {word:"ultraprecise",    meaning:"超精密な",                    etymology:"ultra（超）+ precise（精密な）",                    prefix:"ultra-", level:2},
  {word:"ultraspecialized",meaning:"超専門化した",                etymology:"ultra（超）+ specialized（専門化した）",            prefix:"ultra-", level:3},
  {word:"ultramicroscope", meaning:"超顕微鏡",                    etymology:"ultra（超）+ microscope（顕微鏡）",                 prefix:"ultra-", level:3},
  {word:"ultramarathon",   meaning:"ウルトラマラソン・超長距離走", etymology:"ultra（超）+ marathon（マラソン）",                 prefix:"ultra-", level:1},
  {word:"ultrasensitive",  meaning:"超高感度の・極めて敏感な",    etymology:"ultra（超）+ sensitive（敏感な）",                  prefix:"ultra-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
