/**
 * data-prefix-13.js — 接頭語補充3（post-, counter-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── post-（後に・後の） ──────────────────
  {word:"postdate",          meaning:"後の日付を付ける・事後に生じる",etymology:"post（後に）+ date（日付）",                         prefix:"post-", level:2},
  {word:"postseason",        meaning:"ポストシーズン・レギュラーシーズン後",etymology:"post（後に）+ season（シーズン）",             prefix:"post-", level:1},
  {word:"postnatal",         meaning:"産後の・出生後の",             etymology:"post（後に）+ natal（出生の）",                      prefix:"post-", level:2},
  {word:"postoperative",     meaning:"術後の・手術後の",             etymology:"post（後に）+ operative（手術の）",                  prefix:"post-", level:2},
  {word:"postcode",          meaning:"郵便番号",                     etymology:"post（郵便）+ code（コード）",                       prefix:"post-", level:0},
  {word:"postdoc",           meaning:"ポスドク・博士研究員",         etymology:"post（後に）+ doc（doctorate 博士号）",              prefix:"post-", level:2},
  {word:"postcolonial",      meaning:"ポストコロニアルの・脱植民地の",etymology:"post（後に）+ colonial（植民地の）",                prefix:"post-", level:2},
  {word:"postfix",           meaning:"後ろに付ける・接尾辞",         etymology:"post（後に）+ fix（固定する）",                      prefix:"post-", level:2},
  {word:"postpaid",          meaning:"後払いの・料金前払い済みの",   etymology:"post（後に）+ paid（払われた）",                     prefix:"post-", level:1},
  {word:"postwar",           meaning:"戦後の",                       etymology:"post（後に）+ war（戦争）",                          prefix:"post-", level:1},
  {word:"postponement",      meaning:"延期・先送り",                 etymology:"post（後に）+ ponement（置くこと）",                  prefix:"post-", level:1},
  {word:"postpartum",        meaning:"産後の・分娩後の",             etymology:"post（後に）+ partum（出産）",                       prefix:"post-", level:2},
  {word:"postulate",         meaning:"仮定する・公理・前提",         etymology:"post（後に・求める）+ ulate（動詞化）→要求する",      prefix:"post-", level:3},
  {word:"posthumously",      meaning:"死後に・遺作として",           etymology:"posthumous（死後の）+ ly（副詞化）",                  prefix:"post-", level:2},
  {word:"postdoctoral",      meaning:"博士号取得後の",               etymology:"post（後に）+ doctoral（博士の）",                   prefix:"post-", level:2},
  {word:"postbox",           meaning:"郵便ポスト・郵便受け",         etymology:"post（郵便）+ box（箱）",                            prefix:"post-", level:0},
  {word:"postmark",          meaning:"消印・郵便の消印を押す",       etymology:"post（郵便）+ mark（印）",                          prefix:"post-", level:1},
  {word:"postprandial",      meaning:"食後の",                       etymology:"post（後に）+ prandial（食事の）",                   prefix:"post-", level:3},
  {word:"postmaster",        meaning:"郵便局長",                     etymology:"post（郵便）+ master（長・管理者）",                  prefix:"post-", level:1},
  {word:"posttraumatic",     meaning:"心的外傷後の（PTSD の）",      etymology:"post（後に）+ traumatic（外傷的な）",                prefix:"post-", level:2},
  {word:"postcardinal",      meaning:"後枢機卿の・後ろの",           etymology:"post（後に）+ cardinal（枢機卿・基本的な）",          prefix:"post-", level:3},

  // ── counter-（反対に・対抗して） ──────────────────
  {word:"countermeasure",    meaning:"対抗策・対抗手段",             etymology:"counter（反対に）+ measure（手段）",                  prefix:"counter-", level:2},
  {word:"counterargument",   meaning:"反論・対抗議論",               etymology:"counter（反対に）+ argument（議論）",                 prefix:"counter-", level:2},
  {word:"counterclockwise",  meaning:"反時計回りの",                 etymology:"counter（反対に）+ clockwise（時計回りに）",           prefix:"counter-", level:1},
  {word:"counterforce",      meaning:"対抗力・反撃力",               etymology:"counter（反対に）+ force（力）",                      prefix:"counter-", level:2},
  {word:"counteroffer",      meaning:"カウンターオファー・逆提案",   etymology:"counter（反対に）+ offer（申し出）",                  prefix:"counter-", level:2},
  {word:"counterrevolution", meaning:"反革命",                       etymology:"counter（反対に）+ revolution（革命）",               prefix:"counter-", level:2},
  {word:"counterweight",     meaning:"釣り合いおもり・対抗力",       etymology:"counter（反対に）+ weight（重さ）",                   prefix:"counter-", level:2},
  {word:"countersign",       meaning:"副署する・合言葉",             etymology:"counter（共に）+ sign（署名する）",                   prefix:"counter-", level:3},
  {word:"counterspy",        meaning:"二重スパイ・対スパイ",         etymology:"counter（反対に）+ spy（スパイ）",                    prefix:"counter-", level:2},
  {word:"counterpoint",      meaning:"対位法・対照する要素",         etymology:"counter（反対に）+ point（点）→対立する音",           prefix:"counter-", level:3},
  {word:"counterexample",    meaning:"反例",                         etymology:"counter（反対に）+ example（例）",                    prefix:"counter-", level:2},
  {word:"counterproposal",   meaning:"対案・逆提案",                 etymology:"counter（反対に）+ proposal（提案）",                  prefix:"counter-", level:2},
  {word:"counterstrike",     meaning:"反撃する・逆襲",               etymology:"counter（反対に）+ strike（打つ）",                   prefix:"counter-", level:1},
  {word:"counterpart",       meaning:"対応するもの・相手方",         etymology:"counter（対に）+ part（部分）→対になる部分",           prefix:"counter-", level:1},
  {word:"counterfactual",    meaning:"反事実の・事実と反する仮定",   etymology:"counter（反対に）+ factual（事実の）",                prefix:"counter-", level:3},
  {word:"countertop",        meaning:"カウンタートップ・調理台の表面",etymology:"counter（台）+ top（上面）",                        prefix:"counter-", level:1},
  {word:"counterbid",        meaning:"対抗入札・競り上げる",         etymology:"counter（反対に）+ bid（入札する）",                  prefix:"counter-", level:2},
  {word:"counterproductive", meaning:"逆効果の・生産性を下げる",     etymology:"counter（反対に）+ productive（生産的な）",           prefix:"counter-", level:2},
  {word:"counternarrative",  meaning:"対抗言説・反物語",             etymology:"counter（反対に）+ narrative（物語）",                prefix:"counter-", level:3},
  {word:"countercyclical",   meaning:"景気循環に逆行する",           etymology:"counter（反対に）+ cyclical（循環的な）",             prefix:"counter-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
