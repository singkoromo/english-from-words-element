/**
 * data-prefix-21.js — 接頭語補充11（arch-, se-, super-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── arch-（主要な・最上位の・古い） ──────────────────
  {word:"archivist",      meaning:"古文書管理者・文書保管員",     etymology:"arch（古い・主要な）+ ivist（管理者）",             prefix:"arch-", level:2},
  {word:"archon",         meaning:"長官・行政官（古代ギリシャ）", etymology:"arch（支配する）+ on（者）",                        prefix:"arch-", level:3},
  {word:"archpriest",     meaning:"首席司祭・大司祭",             etymology:"arch（主要な）+ priest（司祭）",                    prefix:"arch-", level:2},
  {word:"archdeacon",     meaning:"大執事・副主教",               etymology:"arch（主要な）+ deacon（執事）",                    prefix:"arch-", level:3},
  {word:"archdiocese",    meaning:"大教区・大司教区",             etymology:"arch（主要な）+ diocese（教区）",                   prefix:"arch-", level:3},
  {word:"archfiend",      meaning:"大悪魔・首魔",                 etymology:"arch（最上位の）+ fiend（悪魔）",                   prefix:"arch-", level:3},
  {word:"archcritic",     meaning:"最大の批判者・首席批評家",     etymology:"arch（主要な）+ critic（批評家）",                  prefix:"arch-", level:3},
  {word:"archvillain",    meaning:"大悪人・主犯格の悪役",         etymology:"arch（主要な）+ villain（悪人）",                   prefix:"arch-", level:2},
  {word:"archmage",       meaning:"大魔法使い・魔法長",           etymology:"arch（主要な）+ mage（魔法使い）",                  prefix:"arch-", level:2},
  {word:"archconservative",meaning:"極保守的な人物",              etymology:"arch（最上位の）+ conservative（保守的な）",        prefix:"arch-", level:2},
  {word:"archheresy",     meaning:"大異端・最重大な異端",         etymology:"arch（最上位の）+ heresy（異端）",                  prefix:"arch-", level:3},
  {word:"archenemy",      meaning:"宿敵・最大の敵",               etymology:"arch（主要な）+ enemy（敵）",                       prefix:"arch-", level:1},
  {word:"archdemon",      meaning:"大悪魔・上位悪霊",             etymology:"arch（主要な）+ demon（悪魔）",                     prefix:"arch-", level:2},
  {word:"archmaster",     meaning:"大師匠・名人",                 etymology:"arch（主要な）+ master（師匠）",                    prefix:"arch-", level:2},
  {word:"archtraitor",    meaning:"大反逆者・最悪の裏切り者",     etymology:"arch（主要な）+ traitor（裏切り者）",               prefix:"arch-", level:3},
  {word:"archrogue",      meaning:"大悪漢・首悪",                 etymology:"arch（最上位の）+ rogue（悪漢）",                   prefix:"arch-", level:3},
  {word:"archschemer",    meaning:"大策略家・首謀者",             etymology:"arch（主要な）+ schemer（策略家）",                 prefix:"arch-", level:3},

  // ── se-（離れて・分けて・脇に） ──────────────────
  {word:"sever",          meaning:"断ち切る・切断する",           etymology:"se（離れて）+ ver（縛る）→ 縛りを離す",            prefix:"se-", level:1},
  {word:"sedate",         meaning:"落ち着いた・鎮静する",         etymology:"se（離れて）+ date（与える）→ 感情を取り除く",      prefix:"se-", level:2},
  {word:"sedulous",       meaning:"勤勉な・粘り強い",             etymology:"se（離れて）+ dulous（欺きなく）→ 誠実な",          prefix:"se-", level:3},
  {word:"seclude",        meaning:"隔離する・引きこもらせる",     etymology:"se（離れて）+ clude（閉める）",                     prefix:"se-", level:2},
  {word:"serenity",       meaning:"穏やかさ・平静",               etymology:"se（離れて）+ rene（晴れた）→ 嵐を離れた状態",     prefix:"se-", level:2},
  {word:"servile",        meaning:"奴隷的な・卑屈な",             etymology:"se（低く）+ rvile（奴隷の）",                       prefix:"se-", level:3},
  {word:"serene",         meaning:"穏やかな・清澄な",             etymology:"se（離れて）+ rene（乾いた・晴れた）",              prefix:"se-", level:2},
  {word:"sediment",       meaning:"沈殿物・堆積物",               etymology:"se（離れて）+ diment（座る）→ 沈み込む",           prefix:"se-", level:2},
  {word:"seduction",      meaning:"誘惑・魅了",                   etymology:"se（離れて）+ duction（引く）→ 引き離す",           prefix:"se-", level:2},
  {word:"selfish",        meaning:"利己的な・自己中心的な",       etymology:"se（自分）+ lfish（自身の利益）",                   prefix:"se-", level:0},
  {word:"seminal",        meaning:"先駆的な・独創的な",           etymology:"se（種から）+ minal（種子）→ 種の",                 prefix:"se-", level:3},
  {word:"sentinel",       meaning:"歩哨・番人",                   etymology:"se（注意して）+ ntinel（感じる）→ 見張る",          prefix:"se-", level:2},
  {word:"seclusive",      meaning:"隠遁的な・孤立を好む",         etymology:"se（離れて）+ clusive（閉める）",                   prefix:"se-", level:3},
  {word:"seismic",        meaning:"地震の・大きな影響を持つ",     etymology:"se（揺れ）+ ismic（地震の）",                       prefix:"se-", level:2},
  {word:"severance",      meaning:"分離・切断・解雇",             etymology:"se（離れて）+ verance（縛り）→ 切断",              prefix:"se-", level:2},
  {word:"seclusion",      meaning:"隔離・孤立・引きこもり",       etymology:"se（離れて）+ clusion（閉める）",                   prefix:"se-", level:2},
  {word:"sedentary",      meaning:"座りがちな・定住性の",         etymology:"se（安定して）+ dentary（座る）→ 定住した",         prefix:"se-", level:2},

  // ── super-（超・上位・過剰） ──────────────────
  {word:"superhero",       meaning:"スーパーヒーロー・超人的英雄", etymology:"super（超）+ hero（英雄）",                         prefix:"super-", level:0},
  {word:"superpower",      meaning:"超大国・超能力",               etymology:"super（超）+ power（力・国力）",                    prefix:"super-", level:1},
  {word:"supercomputer",   meaning:"スーパーコンピュータ",         etymology:"super（超）+ computer（コンピュータ）",             prefix:"super-", level:1},
  {word:"superhuman",      meaning:"超人的な・人間を超えた",       etymology:"super（超）+ human（人間）",                        prefix:"super-", level:1},
  {word:"supercharged",    meaning:"過給された・超充電された",     etymology:"super（超）+ charged（充電された）",                prefix:"super-", level:2},
  {word:"superconductor",  meaning:"超伝導体",                     etymology:"super（超）+ conductor（導体）",                    prefix:"super-", level:3},
  {word:"superposition",   meaning:"重ね合わせ・重畳",             etymology:"super（上に）+ position（位置）",                   prefix:"super-", level:3},
  {word:"superannuated",   meaning:"老朽化した・定年退職した",     etymology:"super（超えた）+ annuated（年）→ 年齢を超えた",    prefix:"super-", level:3},
  {word:"supercell",       meaning:"スーパーセル（大型嵐雲）",     etymology:"super（超）+ cell（細胞・基本単位）",               prefix:"super-", level:3},
  {word:"supernova",       meaning:"超新星・超新星爆発",           etymology:"super（超）+ nova（新星）",                         prefix:"super-", level:2},
  {word:"superstar",       meaning:"スーパースター・大スター",     etymology:"super（超）+ star（星・有名人）",                   prefix:"super-", level:0},
  {word:"supertanker",     meaning:"超大型タンカー",               etymology:"super（超）+ tanker（タンカー）",                   prefix:"super-", level:2},
  {word:"supervillain",    meaning:"大悪役・スーパービラン",       etymology:"super（超）+ villain（悪役）",                      prefix:"super-", level:1},
  {word:"supertax",        meaning:"超過税・特別付加税",           etymology:"super（超）+ tax（税金）",                          prefix:"super-", level:2},
  {word:"superorganism",   meaning:"超個体・集合体生命",           etymology:"super（超）+ organism（生物）",                     prefix:"super-", level:3},
  {word:"superabundance",  meaning:"過剰・非常に豊富な状態",       etymology:"super（超）+ abundance（豊富）",                    prefix:"super-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
