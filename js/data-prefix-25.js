/**
 * data-prefix-25.js — 接頭語補充15（omni-, thermo-, chrono-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── omni-（全て・あらゆる） ──────────────────
  {word:"omnirange",        meaning:"全方位無線標識",                    etymology:"omni（全て）+ range（範囲）",                     prefix:"omni-", level:3},
  {word:"omnimax",          meaning:"全天球映像システム",                 etymology:"omni（全て）+ max（最大）",                       prefix:"omni-", level:2},
  {word:"omniform",         meaning:"あらゆる形を持つ",                   etymology:"omni（全て）+ form（形）",                        prefix:"omni-", level:2},
  {word:"omniscope",        meaning:"全方位観測装置",                     etymology:"omni（全て）+ scope（見る道具）",                 prefix:"omni-", level:3},
  {word:"omniarch",         meaning:"全支配者・絶対君主",                 etymology:"omni（全て）+ arch（支配者）",                    prefix:"omni-", level:3},
  {word:"omnipervasive",    meaning:"あらゆる所に浸透している",            etymology:"omni（全て）+ pervasive（浸透する）",             prefix:"omni-", level:3},
  {word:"omniresponsive",   meaning:"あらゆる刺激に反応する",             etymology:"omni（全て）+ responsive（反応する）",            prefix:"omni-", level:3},
  {word:"omnivision",       meaning:"全方位視覚・全視野",                 etymology:"omni（全て）+ vision（視覚）",                    prefix:"omni-", level:2},
  {word:"omniparity",       meaning:"全対称性・すべての等価性",            etymology:"omni（全て）+ parity（等価）",                   prefix:"omni-", level:3},
  {word:"omnimode",         meaning:"全モード対応の",                     etymology:"omni（全て）+ mode（方式）",                      prefix:"omni-", level:2},
  {word:"omnibenign",       meaning:"全善的な・純粋に善なる",              etymology:"omni（全て）+ benign（善意の）",                  prefix:"omni-", level:3},
  {word:"omnisubstantial",  meaning:"全物質に存在する",                   etymology:"omni（全て）+ substantial（実質的な）",           prefix:"omni-", level:3},
  {word:"omniabundant",     meaning:"あらゆる所に豊富に存在する",          etymology:"omni（全て）+ abundant（豊富な）",                prefix:"omni-", level:2},
  {word:"omnioptimal",      meaning:"あらゆる点で最適な",                 etymology:"omni（全て）+ optimal（最適な）",                 prefix:"omni-", level:3},
  {word:"omniatlas",        meaning:"全地図・包括的地図集",               etymology:"omni（全て）+ atlas（地図帳）",                   prefix:"omni-", level:2},

  // ── thermo-（熱・温度） ──────────────────
  {word:"thermoluminescence",   meaning:"熱ルミネセンス・加熱発光",       etymology:"thermo（熱）+ luminescence（発光）",              prefix:"thermo-", level:3},
  {word:"thermoforming",        meaning:"熱成形・加熱成形法",              etymology:"thermo（熱）+ forming（形成）",                   prefix:"thermo-", level:2},
  {word:"thermopile",           meaning:"熱電堆・サーモパイル",            etymology:"thermo（熱）+ pile（積み重ね）",                  prefix:"thermo-", level:3},
  {word:"thermophile",          meaning:"好熱性生物",                      etymology:"thermo（熱）+ phile（好む）",                     prefix:"thermo-", level:2},
  {word:"thermocline",          meaning:"水温躍層・温度躍層",              etymology:"thermo（熱）+ cline（傾斜）",                     prefix:"thermo-", level:3},
  {word:"thermolysis",          meaning:"熱分解",                          etymology:"thermo（熱）+ lysis（分解）",                     prefix:"thermo-", level:3},
  {word:"thermocoagulation",    meaning:"熱凝固・熱による凝固処置",        etymology:"thermo（熱）+ coagulation（凝固）",               prefix:"thermo-", level:3},
  {word:"thermoablation",       meaning:"熱焼灼・熱による組織除去",        etymology:"thermo（熱）+ ablation（除去）",                  prefix:"thermo-", level:3},
  {word:"thermoacoustic",       meaning:"熱音響の",                        etymology:"thermo（熱）+ acoustic（音響の）",                prefix:"thermo-", level:3},
  {word:"thermodegradation",    meaning:"熱劣化・熱による分解",            etymology:"thermo（熱）+ degradation（劣化）",               prefix:"thermo-", level:3},
  {word:"thermostable",         meaning:"耐熱性の・熱に安定な",            etymology:"thermo（熱）+ stable（安定な）",                  prefix:"thermo-", level:2},
  {word:"thermocontrol",        meaning:"温度制御",                        etymology:"thermo（熱）+ control（制御）",                   prefix:"thermo-", level:1},
  {word:"thermoset",            meaning:"熱硬化性樹脂（材料）",            etymology:"thermo（熱）+ set（固める）",                     prefix:"thermo-", level:2},
  {word:"thermophotovoltaic",   meaning:"熱光起電力の",                    etymology:"thermo（熱）+ photovoltaic（光起電力）",          prefix:"thermo-", level:3},
  {word:"thermohaline",         meaning:"熱塩循環の",                      etymology:"thermo（熱）+ haline（塩分の）",                  prefix:"thermo-", level:3},

  // ── chrono-（時間・時系列） ──────────────────
  {word:"chronogram",           meaning:"年代記号・数字を隠した銘文",      etymology:"chrono（時間）+ gram（書かれたもの）",            prefix:"chrono-", level:3},
  {word:"chronograph",          meaning:"クロノグラフ・精密時間計測器",    etymology:"chrono（時間）+ graph（書く・記録する）",         prefix:"chrono-", level:2},
  {word:"chronotype",           meaning:"概日型・朝型/夜型の体質",         etymology:"chrono（時間）+ type（型）",                      prefix:"chrono-", level:2},
  {word:"chronosequence",       meaning:"時間系列・年代配列",              etymology:"chrono（時間）+ sequence（順序）",                prefix:"chrono-", level:3},
  {word:"chronotope",           meaning:"時空間構造（文学・哲学概念）",    etymology:"chrono（時間）+ tope（場所）",                    prefix:"chrono-", level:3},
  {word:"chronopharmacology",   meaning:"時間薬理学",                      etymology:"chrono（時間）+ pharmacology（薬理学）",          prefix:"chrono-", level:3},
  {word:"chronostasis",         meaning:"時間停止錯覚",                    etymology:"chrono（時間）+ stasis（停止）",                  prefix:"chrono-", level:3},
  {word:"chronodisruption",     meaning:"概日リズムの乱れ",                etymology:"chrono（時間）+ disruption（混乱）",              prefix:"chrono-", level:3},
  {word:"chronopsychology",     meaning:"時間心理学",                      etymology:"chrono（時間）+ psychology（心理学）",            prefix:"chrono-", level:3},
  {word:"chronogeography",      meaning:"時間地理学",                      etymology:"chrono（時間）+ geography（地理学）",             prefix:"chrono-", level:3},
  {word:"chronobiotic",         meaning:"体内時計調整物質",                etymology:"chrono（時間）+ biotic（生物の）",                prefix:"chrono-", level:3},
  {word:"chronoecology",        meaning:"時間生態学",                      etymology:"chrono（時間）+ ecology（生態学）",               prefix:"chrono-", level:3},
  {word:"chronobiotics",        meaning:"概日リズム調整化合物群",          etymology:"chrono（時間）+ biotics（生体物質）",             prefix:"chrono-", level:3},
  {word:"chronoarchitecture",   meaning:"時間建築・時間的空間設計",        etymology:"chrono（時間）+ architecture（建築）",            prefix:"chrono-", level:3},
  {word:"chronostratigraphy",   meaning:"時代層序学",                      etymology:"chrono（時間）+ stratigraphy（層序学）",          prefix:"chrono-", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
