/**
 * data-prefix-23.js — 接頭語補充13（cata-, circum-, equi-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── cata-（下に・完全に・反対に） ──────────────────
  {word:"catacomb",        meaning:"地下墓所・地下霊廟",           etymology:"cata（下に）+ comb（空洞・穴）",                    prefix:"cata-", level:2},
  {word:"cataclysmic",     meaning:"壊滅的な・大変動の",           etymology:"cata（下に）+ clysmic（洗う・流れ）→ 洗い流す",    prefix:"cata-", level:2},
  {word:"catamaran",       meaning:"双胴船・カタマラン",           etymology:"cata（連結）+ maran（丸太）→ 結んだ丸太",          prefix:"cata-", level:2},
  {word:"catachresis",     meaning:"語の誤用・修辞上の転用",       etymology:"cata（反対に）+ chresis（使用）",                   prefix:"cata-", level:3},
  {word:"cataplexy",       meaning:"情動脱力発作・突然の筋力脱力", etymology:"cata（下に）+ plexy（打つ・麻痺）",                 prefix:"cata-", level:3},
  {word:"cataphract",      meaning:"重装甲騎兵・全身鎧の兵士",     etymology:"cata（完全に）+ phract（囲む・守る）",              prefix:"cata-", level:3},
  {word:"catarrhal",       meaning:"カタル性の・粘膜炎の",         etymology:"cata（下に）+ rrhal（流れる）→ 流れ落ちる",         prefix:"cata-", level:3},
  {word:"cataclastic",     meaning:"砕屑性の・岩石破砕による",     etymology:"cata（下に）+ clastic（砕いた）",                   prefix:"cata-", level:3},
  {word:"cataplectic",     meaning:"情動脱力発作の・脱力麻痺の",   etymology:"cata（下に）+ plectic（打つ）",                     prefix:"cata-", level:3},
  {word:"catabolize",      meaning:"異化する・分解代謝する",       etymology:"cata（下に）+ bolize（投げる）→ 分解する",          prefix:"cata-", level:3},
  {word:"catananche",      meaning:"カタナンセ（青い花）・強制草", etymology:"cata（下に）+ nanche（強制）",                      prefix:"cata-", level:3},
  {word:"cataphyll",       meaning:"鱗葉・退化葉",                 etymology:"cata（下に）+ phyll（葉）",                         prefix:"cata-", level:3},
  {word:"cataphoresis",    meaning:"電気泳動・陰極移動現象",       etymology:"cata（下に）+ phoresis（運搬）",                    prefix:"cata-", level:3},
  {word:"catatonically",   meaning:"緊張病的に・無反応に",         etymology:"cata（下に）+ tonically（緊張して）",               prefix:"cata-", level:3},
  {word:"catarchic",       meaning:"始まりの・創始の",             etymology:"cata（完全に）+ archic（支配する）",                prefix:"cata-", level:3},
  {word:"catadromous",     meaning:"降河性の（海で産卵する魚）",   etymology:"cata（下に）+ dromous（走る）",                     prefix:"cata-", level:3},

  // ── circum-（周囲に・まわりを） ──────────────────
  {word:"circumduction",   meaning:"回旋運動・円運動",             etymology:"circum（周囲に）+ duction（引く・動かす）",         prefix:"circum-", level:3},
  {word:"circumsolar",     meaning:"太陽を周回する・太陽周辺の",   etymology:"circum（周囲に）+ solar（太陽の）",                 prefix:"circum-", level:3},
  {word:"circumscription", meaning:"制限・境界線設定",             etymology:"circum（周囲に）+ scription（書く）→ 囲み書く",    prefix:"circum-", level:3},
  {word:"circumvolution",  meaning:"回転・渦巻き・湾曲",           etymology:"circum（周囲に）+ volution（回る）",                prefix:"circum-", level:3},
  {word:"circumlunar",     meaning:"月を周回する",                 etymology:"circum（周囲に）+ lunar（月の）",                   prefix:"circum-", level:3},
  {word:"circumfluent",    meaning:"周囲を流れる・取り囲む",       etymology:"circum（周囲に）+ fluent（流れる）",                prefix:"circum-", level:3},
  {word:"circumjacent",    meaning:"周囲にある・近接している",     etymology:"circum（周囲に）+ jacent（横たわる）",              prefix:"circum-", level:3},
  {word:"circumrotate",    meaning:"回転する・軸を中心に回る",     etymology:"circum（周囲に）+ rotate（回転する）",              prefix:"circum-", level:3},
  {word:"circumlocutory",  meaning:"回りくどい・遠回しの",         etymology:"circum（周囲に）+ locutory（話す）",                prefix:"circum-", level:3},
  {word:"circumvolve",     meaning:"回転させる・旋回する",         etymology:"circum（周囲に）+ volve（回る）",                   prefix:"circum-", level:3},
  {word:"circumambience",  meaning:"周囲の環境・取り巻く雰囲気",   etymology:"circum（周囲に）+ ambience（環境）",                prefix:"circum-", level:3},
  {word:"circumplanetary", meaning:"惑星を周回する",               etymology:"circum（周囲に）+ planetary（惑星の）",             prefix:"circum-", level:3},
  {word:"circumstellar",   meaning:"恒星を周囲に持つ・星周の",     etymology:"circum（周囲に）+ stellar（星の）",                 prefix:"circum-", level:3},
  {word:"circumferential", meaning:"円周の・外周に沿った",         etymology:"circum（周囲に）+ ferential（運ぶ）",               prefix:"circum-", level:2},
  {word:"circumspection",  meaning:"注意深さ・慎重さ",             etymology:"circum（周囲に）+ spection（見る）→ 周りをよく見る",prefix:"circum-", level:3},
  {word:"circumambulate",  meaning:"歩き回る・周囲を歩く",         etymology:"circum（周囲に）+ ambulate（歩く）",                prefix:"circum-", level:3},

  // ── equi-（等しい・均等な） ──────────────────
  {word:"equiform",        meaning:"均一形の・同形の",             etymology:"equi（等しい）+ form（形）",                        prefix:"equi-", level:3},
  {word:"equipotent",      meaning:"等価の・同等の能力を持つ",     etymology:"equi（等しい）+ potent（力のある）",                prefix:"equi-", level:3},
  {word:"equipotential",   meaning:"等電位の・等ポテンシャルの",   etymology:"equi（等しい）+ potential（潜在力）",               prefix:"equi-", level:3},
  {word:"equimolar",       meaning:"等モルの・同じモル数の",       etymology:"equi（等しい）+ molar（モルの）",                   prefix:"equi-", level:3},
  {word:"equipollent",     meaning:"同等の力を持つ・等力の",       etymology:"equi（等しい）+ pollent（力）",                     prefix:"equi-", level:3},
  {word:"equiangular",     meaning:"等角の・すべての角が等しい",   etymology:"equi（等しい）+ angular（角の）",                   prefix:"equi-", level:2},
  {word:"equilinear",      meaning:"等線形の・均等な線の",         etymology:"equi（等しい）+ linear（線の）",                    prefix:"equi-", level:3},
  {word:"equiponderant",   meaning:"等重量の・均衡している",       etymology:"equi（等しい）+ ponderant（重さ）",                 prefix:"equi-", level:3},
  {word:"equimultiple",    meaning:"等倍数の",                     etymology:"equi（等しい）+ multiple（倍数の）",                prefix:"equi-", level:3},
  {word:"equicrural",      meaning:"等脚の・二等辺の",             etymology:"equi（等しい）+ crural（脚の）",                    prefix:"equi-", level:3},
  {word:"equidensity",     meaning:"等密度の",                     etymology:"equi（等しい）+ density（密度）",                   prefix:"equi-", level:3},
  {word:"equifinality",    meaning:"等目的性・異なる経路での同一結果",etymology:"equi（等しい）+ finality（最終性）",             prefix:"equi-", level:3},
  {word:"equitability",    meaning:"公平性・均等性",               etymology:"equi（等しい）+ tability（状態）",                  prefix:"equi-", level:2},
  {word:"equidistant",     meaning:"等距離の・等しく離れた",       etymology:"equi（等しい）+ distant（距離のある）",             prefix:"equi-", level:1},
  {word:"equivocal",       meaning:"あいまいな・二義的な",         etymology:"equi（等しく）+ vocal（声・意味）→ 二つの意味を持つ",prefix:"equi-", level:2},
  {word:"equanimity",      meaning:"平静心・落ち着き",             etymology:"equi（等しく）+ animity（心・精神）",               prefix:"equi-", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
