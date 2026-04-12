/**
 * data-prefix-34.js — 接頭語補充46（bio-, hyper-, poly-, pro-, ab-, ad-, per-, micro-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── bio-（生命・生物） ──────────────────
  {word:"bioaccumulation", meaning:"生物蓄積",                   etymology:"bio（生命）+ accumulation（蓄積）",            prefix:"bio-", level:2},
  {word:"biocompatible",   meaning:"生体適合性の",               etymology:"bio（生命）+ compatible（適合する）",          prefix:"bio-", level:2},
  {word:"bioremediation",  meaning:"生物浄化・バイオレメディエーション", etymology:"bio（生命）+ remediation（浄化）",    prefix:"bio-", level:3},
  {word:"biosecurity",     meaning:"生物安全保障",               etymology:"bio（生命）+ security（安全）",               prefix:"bio-", level:2},
  {word:"bioavailability", meaning:"生物学的利用能",             etymology:"bio（生命）+ availability（利用可能性）",     prefix:"bio-", level:3},
  {word:"biogeography",    meaning:"生物地理学",                 etymology:"bio（生命）+ geography（地理学）",             prefix:"bio-", level:2},
  {word:"biopolymer",      meaning:"生体高分子",                 etymology:"bio（生命）+ polymer（高分子）",              prefix:"bio-", level:3},
  {word:"biostimulant",    meaning:"生物刺激剤",                 etymology:"bio（生命）+ stimulant（刺激剤）",            prefix:"bio-", level:3},
  {word:"biofilm",         meaning:"生物膜・バイオフィルム",      etymology:"bio（生命）+ film（膜）",                     prefix:"bio-", level:2},

  // ── hyper-（超えて・過度に） ──────────────────
  {word:"hypermobility",   meaning:"過剰な可動性・関節過弛緩",   etymology:"hyper（過度に）+ mobility（可動性）",         prefix:"hyper-", level:2},
  {word:"hyperactivity",   meaning:"多動性・過活動",              etymology:"hyper（過度に）+ activity（活動）",           prefix:"hyper-", level:1},
  {word:"hyperlipidemia",  meaning:"高脂血症",                   etymology:"hyper（過度に）+ lipidemia（脂質血症）",      prefix:"hyper-", level:3},
  {word:"hyperconnected",  meaning:"超接続された",               etymology:"hyper（超えて）+ connected（接続された）",    prefix:"hyper-", level:1},
  {word:"hypercompetition", meaning:"超競争",                    etymology:"hyper（超えて）+ competition（競争）",        prefix:"hyper-", level:2},
  {word:"hypercognition",  meaning:"超認知・過剰認知",            etymology:"hyper（超えて）+ cognition（認知）",          prefix:"hyper-", level:3},
  {word:"hyperproduction", meaning:"過剰生産",                   etymology:"hyper（過度に）+ production（生産）",         prefix:"hyper-", level:2},

  // ── poly-（多い・複数） ──────────────────
  {word:"polyrhythm",      meaning:"ポリリズム・多声リズム",       etymology:"poly（多い）+ rhythm（リズム）",              prefix:"poly-", level:2},
  {word:"polypharmacy",    meaning:"多剤服用",                    etymology:"poly（多い）+ pharmacy（薬）",               prefix:"poly-", level:2},
  {word:"polycystic",      meaning:"多嚢胞性の",                  etymology:"poly（多い）+ cystic（嚢胞の）",              prefix:"poly-", level:2},
  {word:"polyploidy",      meaning:"倍数性",                     etymology:"poly（多い）+ ploidy（染色体数）",            prefix:"poly-", level:3},
  {word:"polymorphism",    meaning:"多形性・多態性",              etymology:"poly（多い）+ morphism（形態）",              prefix:"poly-", level:2},
  {word:"polypeptide",     meaning:"ポリペプチド",                etymology:"poly（多い）+ peptide（ペプチド）",           prefix:"poly-", level:2},
  {word:"polycultural",    meaning:"多文化の",                    etymology:"poly（多い）+ cultural（文化的な）",          prefix:"poly-", level:1},

  // ── pro-（前に・支持して） ──────────────────
  {word:"proactive",       meaning:"積極的な・先手を打つ",        etymology:"pro（前に）+ active（活動的な）",             prefix:"pro-", level:1},
  {word:"provisional",     meaning:"暫定的な・仮の",              etymology:"pro（前に）+ visional（見ること）",           prefix:"pro-", level:2},
  {word:"profuse",         meaning:"大量の・豊富な",              etymology:"pro（前に）+ fuse（注ぐ）",                  prefix:"pro-", level:2},
  {word:"propitious",      meaning:"好都合な・吉兆の",            etymology:"pro（前に）+ pitious（恵みを与える）",        prefix:"pro-", level:3},
  {word:"prodigal",        meaning:"放蕩な・浪費的な",            etymology:"pro（前に）+ digal（追い払う）",              prefix:"pro-", level:2},
  {word:"prolific",        meaning:"多産の・多作の",              etymology:"pro（前に）+ lific（作る）",                  prefix:"pro-", level:2},

  // ── ab-（離れて・から） ──────────────────
  {word:"abscissa",        meaning:"横座標・横軸",               etymology:"ab（離れて）+ scissa（切る）",                prefix:"ab-", level:3},
  {word:"abstruse",        meaning:"難解な・深遠な",              etymology:"ab（離れて）+ struse（押し隠す）",            prefix:"ab-", level:3},
  {word:"ablation",        meaning:"切除・消融",                  etymology:"ab（離れて）+ lation（運ぶ）",               prefix:"ab-", level:2},
  {word:"abscond",         meaning:"逃亡する・こっそり逃げる",    etymology:"ab（離れて）+ scond（隠れる）",               prefix:"ab-", level:2},
  {word:"abstemious",      meaning:"節制した・禁欲的な",          etymology:"ab（離れて）+ stemious（酒）",               prefix:"ab-", level:3},

  // ── ad-（向かって・近づいて） ──────────────────
  {word:"adroit",          meaning:"巧みな・器用な",              etymology:"ad（向かって）+ droit（右・正しい）",          prefix:"ad-", level:2},
  {word:"adulation",       meaning:"過度の賞賛・お世辞",          etymology:"ad（向かって）+ ulation（しっぽを振る）",     prefix:"ad-", level:3},
  {word:"admonish",        meaning:"戒める・警告する",             etymology:"ad（向かって）+ monish（警告する）",          prefix:"ad-", level:2},
  {word:"adumbrate",       meaning:"かすかに示す・概略を述べる",  etymology:"ad（向かって）+ umbrate（影を作る）",         prefix:"ad-", level:3},
  {word:"adulterate",      meaning:"粗悪物を混ぜる・不純にする",  etymology:"ad（向かって）+ ulterate（変質させる）",      prefix:"ad-", level:2},

  // ── per-（通じて・完全に） ──────────────────
  {word:"perfunctory",     meaning:"おざなりの・形式的な",        etymology:"per（通じて）+ functory（機能する）",         prefix:"per-", level:2},
  {word:"perjury",         meaning:"偽証・偽証罪",               etymology:"per（完全に）+ jury（誓う）",                 prefix:"per-", level:2},
  {word:"perdition",       meaning:"永遠の滅び・地獄",            etymology:"per（完全に）+ dition（失う）",              prefix:"per-", level:3},
  {word:"perambulate",     meaning:"歩き回る・巡回する",          etymology:"per（通じて）+ ambulate（歩く）",             prefix:"per-", level:2},
  {word:"pernicious",      meaning:"有害な・致命的な",            etymology:"per（完全に）+ nicious（害を与える）",        prefix:"per-", level:2},

  // ── micro-（小さい・微小） ──────────────────
  {word:"microbiota",      meaning:"常在微生物叢",               etymology:"micro（小さい）+ biota（生物群）",            prefix:"micro-", level:2},
  {word:"microplastics",   meaning:"マイクロプラスチック",         etymology:"micro（小さい）+ plastics（プラスチック）",   prefix:"micro-", level:1},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
