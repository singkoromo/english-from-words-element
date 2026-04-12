/**
 * data-prefix-19.js — 接頭語補充9（homo-, bi-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── homo-（同じ・同種） ──────────────────
  {word:"homologize",     meaning:"相同性を示す・対応関係を証明する",etymology:"homo（同じ）+ logize（説明する）",             prefix:"homo-", level:3},
  {word:"homeobox",       meaning:"ホメオボックス（遺伝子制御領域）",etymology:"homo（同じ）+ eobox（調節配列）",              prefix:"homo-", level:3},
  {word:"homocysteine",   meaning:"ホモシステイン（アミノ酸）",   etymology:"homo（同じ）+ cysteine（システイン）",           prefix:"homo-", level:3},
  {word:"homoerotic",     meaning:"同性への性的欲求に関する",      etymology:"homo（同じ・同性）+ erotic（性愛の）",          prefix:"homo-", level:2},
  {word:"homotopy",       meaning:"ホモトピー（位相数学）",       etymology:"homo（同じ）+ topy（場所）",                    prefix:"homo-", level:3},
  {word:"homorganic",     meaning:"同器官発音の（音声学）",       etymology:"homo（同じ）+ organic（器官の）",               prefix:"homo-", level:3},
  {word:"homozygosity",   meaning:"ホモ接合性",                   etymology:"homo（同じ）+ zygosity（接合状態）",            prefix:"homo-", level:3},
  {word:"homocyclic",     meaning:"単環式の・同種環構造の",       etymology:"homo（同じ）+ cyclic（環状の）",                prefix:"homo-", level:3},
  {word:"homoousian",     meaning:"同質論の（キリスト教神学）",   etymology:"homo（同じ）+ ousian（本質）",                  prefix:"homo-", level:3},
  {word:"homothermal",    meaning:"恒温の・体温が一定の",         etymology:"homo（同じ）+ thermal（熱の）",                 prefix:"homo-", level:3},
  {word:"homoplasy",      meaning:"同型相似・収斂進化による類似",  etymology:"homo（同じ）+ plasy（形成）",                   prefix:"homo-", level:3},
  {word:"homoscedastic",  meaning:"等分散の（統計学）",           etymology:"homo（同じ）+ scedastic（散らばり）",           prefix:"homo-", level:3},
  {word:"homochromy",     meaning:"保護色・環境に合わせた体色",   etymology:"homo（同じ）+ chromy（色）",                    prefix:"homo-", level:3},
  {word:"homoeroticism",  meaning:"同性愛的感情・同性への性的欲求",etymology:"homo（同じ・同性）+ eroticism（性愛主義）",    prefix:"homo-", level:2},
  {word:"homologue",      meaning:"相同体・対応する器官や遺伝子",  etymology:"homo（同じ）+ logue（言葉・対応）",             prefix:"homo-", level:3},
  {word:"homoplastic",    meaning:"同型移植の・同種整形外科の",   etymology:"homo（同じ）+ plastic（形成の）",               prefix:"homo-", level:3},
  {word:"homopolymer",    meaning:"単一重合体",                   etymology:"homo（同じ）+ polymer（重合体）",               prefix:"homo-", level:3},
  {word:"homothermy",     meaning:"恒温性・体温維持能力",         etymology:"homo（同じ）+ thermy（熱・温度）",              prefix:"homo-", level:3},

  // ── bi-（2・二） ──────────────────
  {word:"bicentennial",   meaning:"200周年の・200周年記念",       etymology:"bi（2）+ centennial（100周年の）",              prefix:"bi-", level:2},
  {word:"bicultural",     meaning:"二文化の・二つの文化を持つ",   etymology:"bi（2）+ cultural（文化の）",                   prefix:"bi-", level:2},
  {word:"biennial",       meaning:"2年ごとの・2年に1度の",        etymology:"bi（2）+ ennial（年）",                        prefix:"bi-", level:2},
  {word:"bifocal",        meaning:"二焦点の・遠近両用の",         etymology:"bi（2）+ focal（焦点の）",                      prefix:"bi-", level:2},
  {word:"bigamy",         meaning:"重婚・二重結婚",               etymology:"bi（2）+ gamy（結婚）",                        prefix:"bi-", level:2},
  {word:"bimetallic",     meaning:"二金属の・複本位制の",         etymology:"bi（2）+ metallic（金属の）",                   prefix:"bi-", level:2},
  {word:"bimodal",        meaning:"二峰性の・二様式の",           etymology:"bi（2）+ modal（様式の）",                      prefix:"bi-", level:2},
  {word:"bivalent",       meaning:"二価の・二重染色体の",         etymology:"bi（2）+ valent（価・力）",                     prefix:"bi-", level:3},
  {word:"biome",          meaning:"生物群系・バイオーム",         etymology:"bi（生命）+ ome（全体系）",                     prefix:"bi-", level:2},
  {word:"bipolar",        meaning:"双極の・二極性の",             etymology:"bi（2）+ polar（極の）",                       prefix:"bi-", level:1},
  {word:"bilaterally",    meaning:"双方向に・両側的に",           etymology:"bi（2）+ laterally（側面的に）",               prefix:"bi-", level:2},
  {word:"bichrome",       meaning:"二色の・二色刷りの",           etymology:"bi（2）+ chrome（色）",                        prefix:"bi-", level:2},
  {word:"biaxial",        meaning:"二軸の・二軸性の",             etymology:"bi（2）+ axial（軸の）",                       prefix:"bi-", level:3},
  {word:"bicameral",      meaning:"二院制の・両院制の",           etymology:"bi（2）+ cameral（部屋の・議院の）",            prefix:"bi-", level:2},
  {word:"biconvex",       meaning:"両凸の・両面凸レンズの",       etymology:"bi（2）+ convex（凸の）",                      prefix:"bi-", level:2},
  {word:"bidirectional",  meaning:"双方向の・両方向の",           etymology:"bi（2）+ directional（方向の）",               prefix:"bi-", level:1},
  {word:"biohazard",      meaning:"生物学的危険物・バイオハザード",etymology:"bi（生命）+ hazard（危険）",                    prefix:"bi-", level:1},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
