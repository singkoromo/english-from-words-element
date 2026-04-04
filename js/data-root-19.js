/**
 * data-root-19.js — 語根データ（-phor-, -plic-, -pon-, -port-, -pos-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -phor-/-pher-（運ぶ・持つ） ──────────────────
  {word:"metaphor",        meaning:"比喩・メタファー",           etymology:"meta（変えて）+ phor（運ぶ）→意味を運び変える",  root:"-phor-", level:2},
  {word:"euphoria",        meaning:"多幸感・幸福感",             etymology:"eu（良い）+ phoria（運ぶ）→良い状態を運ぶ",     root:"-phor-", level:2},
  {word:"periphery",       meaning:"周辺部・外縁",               etymology:"peri（周り）+ pher（運ぶ）+ y",               root:"-phor-", level:2},
  {word:"peripheral",      meaning:"周辺の・末梢的な",           etymology:"periphery（周辺）+ al（〜の）",                root:"-phor-", level:2},
  {word:"phosphorus",      meaning:"リン・燐光体",               etymology:"phos（光）+ phoros（運ぶ）→光を運ぶもの",      root:"-phor-", level:3},
  {word:"semaphore",       meaning:"腕木信号・手旗信号",         etymology:"sema（記号）+ phore（運ぶ）",                  root:"-phor-", level:3},
  {word:"dysphoria",       meaning:"不快感・気分不良",           etymology:"dys（悪い）+ phoria（状態）",                  root:"-phor-", level:3},
  {word:"metaphorical",    meaning:"比喩的な",                  etymology:"metaphor（比喩）+ ical（〜の）",               root:"-phor-", level:2},

  // ── -pon-/-pos-/-pound-（置く・位置する） ──────────────────
  {word:"compose",         meaning:"作曲する・構成する・落ち着かせる",etymology:"com（共に）+ pose（置く）",              root:"-pos-", level:1},
  {word:"oppose",          meaning:"反対する・対立する",         etymology:"op（反対に）+ pose（置く）",                  root:"-pos-", level:1},
  {word:"impose",          meaning:"課す・押しつける",           etymology:"im（上に）+ pose（置く）",                    root:"-pos-", level:2},
  {word:"dispose",         meaning:"処分する・配置する",         etymology:"dis（離れて）+ pose（置く）",                 root:"-pos-", level:2},
  {word:"expose",          meaning:"さらす・暴露する",           etymology:"ex（外に）+ pose（置く）",                    root:"-pos-", level:1},
  {word:"depose",          meaning:"退位させる・証言する",        etymology:"de（下に）+ pose（置く）",                    root:"-pos-", level:2},
  {word:"transpose",       meaning:"置き換える・転調する",        etymology:"trans（横断して）+ pose（置く）",             root:"-pos-", level:2},
  {word:"postpone",        meaning:"延期する",                  etymology:"post（後に）+ pon（置く）+ e",                root:"-pon-", level:1},
  {word:"component",       meaning:"構成要素・成分",             etymology:"com（共に）+ pon（置く）+ ent（〜のもの）",    root:"-pon-", level:1},
  {word:"proponent",       meaning:"支持者・提唱者",             etymology:"pro（前に）+ pon（置く）+ ent（人）",          root:"-pon-", level:2},
  {word:"exponent",        meaning:"指数・提唱者",               etymology:"ex（外に）+ pon（置く）+ ent（人）",           root:"-pon-", level:2},
  {word:"compound",        meaning:"複合の・化合物・混ぜる",      etymology:"com（共に）+ pound（置く）",                  root:"-pound-", level:2},
  {word:"expound",         meaning:"詳しく説明する",             etymology:"ex（外に）+ pound（置く）→外に出して示す",      root:"-pound-", level:3},
  {word:"impound",         meaning:"没収する・押収する",         etymology:"im（中に）+ pound（囲い）→囲いの中に入れる",   root:"-pound-", level:3},

  // ── -port-（運ぶ・港） ──────────────────
  {word:"transport",       meaning:"輸送する・運搬",             etymology:"trans（横断して）+ port（運ぶ）",              root:"-port-", level:1},
  {word:"import",          meaning:"輸入する・重要性",           etymology:"im（中に）+ port（運ぶ）",                    root:"-port-", level:1},
  {word:"export",          meaning:"輸出する",                  etymology:"ex（外に）+ port（運ぶ）",                    root:"-port-", level:1},
  {word:"support",         meaning:"支持する・支える",           etymology:"su（下から）+ port（運ぶ）→支える",            root:"-port-", level:0},
  {word:"report",          meaning:"報告する・報告書",           etymology:"re（戻る）+ port（運ぶ）→持ち帰る",            root:"-port-", level:0},
  {word:"deport",          meaning:"国外追放する",               etymology:"de（離れて）+ port（運ぶ）",                  root:"-port-", level:2},
  {word:"important",       meaning:"重要な・大切な",             etymology:"im（中に）+ port（運ぶ）+ ant（〜な）",        root:"-port-", level:0},
  {word:"portable",        meaning:"持ち運びできる",             etymology:"port（運ぶ）+ able（できる）",                root:"-port-", level:1},
  {word:"portfolio",       meaning:"ポートフォリオ・書類入れ",    etymology:"port（運ぶ）+ folio（紙）→紙を運ぶもの",       root:"-port-", level:2},
  {word:"portal",          meaning:"玄関・入り口・ポータルサイト",etymology:"port（港・扉）+ al（〜の）",                  root:"-port-", level:2},
  {word:"deportation",     meaning:"国外追放・強制送還",         etymology:"deport（追放する）+ ation（行為）",            root:"-port-", level:2},
  {word:"purport",         meaning:"主旨・〜と称する",           etymology:"pur（前に）+ port（運ぶ）→前面に出す",         root:"-port-", level:3},

  // ── -prim-/-prin-（最初・主要） ──────────────────
  {word:"primary",         meaning:"主要な・最初の",             etymology:"prim（最初）+ ary（〜の）",                   root:"-prim-", level:0},
  {word:"prime",           meaning:"主要な・最盛期・素数",        etymology:"prim（最初・最高）+ e",                       root:"-prim-", level:1},
  {word:"primitive",       meaning:"原始的な・未発達な",          etymology:"prim（最初）+ itive（〜な）",                 root:"-prim-", level:1},
  {word:"prior",           meaning:"以前の・優先する",           etymology:"pri（前）+ or（〜の比較級）",                 root:"-prim-", level:1},
  {word:"priority",        meaning:"優先事項・優先権",           etymology:"prior（以前の）+ ity（状態）",                root:"-prim-", level:1},
  {word:"principle",       meaning:"原則・原理・主義",           etymology:"prin（最初）+ ciple（取る）→最初に取るもの",   root:"-prin-", level:1},
  {word:"principal",       meaning:"主要な・校長・元本",          etymology:"prin（最初）+ cipal（取る）",                 root:"-prin-", level:1},
  {word:"primordial",      meaning:"原始的な・根本的な",          etymology:"prim（最初）+ ord（秩序）+ ial（〜の）",       root:"-prim-", level:3},
  {word:"supremacy",       meaning:"最高権威・覇権",             etymology:"su（上）+ prem（最初・最高）+ acy（状態）",    root:"-prim-", level:2},
  {word:"supreme",         meaning:"最高の・至上の",             etymology:"su（上）+ prem（最高）+ e",                   root:"-prim-", level:2},
  {word:"premier",         meaning:"首相・第一の",               etymology:"premier（ラテン語primus：最初の）",            root:"-prim-", level:2},
  {word:"premiere",        meaning:"初演・初上映",               etymology:"premier（最初の）+ e",                        root:"-prim-", level:2},

  // ── -prob-/-prov-（試す・証明する） ──────────────────
  {word:"prove",           meaning:"証明する・立証する",         etymology:"prob（試す）→ prove（英語）",                 root:"-prob-", level:0},
  {word:"approve",         meaning:"承認する・賛成する",         etymology:"ap（〜に）+ prove（証明する）",               root:"-prob-", level:1},
  {word:"improve",         meaning:"改善する・向上する",         etymology:"im（中に）+ prove（証明する）→より良くする",   root:"-prob-", level:0},
  {word:"prove",           meaning:"証明する・試す",             etymology:"pro（前に）+ ve（進む）",                     root:"-prob-", level:0},
  {word:"probable",        meaning:"ありそうな・確かな",          etymology:"prob（試す）+ able（できる）",                root:"-prob-", level:1},
  {word:"probe",           meaning:"探索する・調査する・探針",    etymology:"prob（試す）+ e",                             root:"-prob-", level:2},
  {word:"probation",       meaning:"試用期間・執行猶予",         etymology:"prob（試す）+ ation（行為）",                 root:"-prob-", level:2},
  {word:"reprobate",       meaning:"堕落した人・非難する",        etymology:"re（再び）+ prob（試す）+ ate→試して不合格",   root:"-prob-", level:3},
  {word:"approbation",     meaning:"承認・賛成",                 etymology:"ap（〜に）+ prob（試す）+ ation（行為）",      root:"-prob-", level:3},
  {word:"improbable",      meaning:"ありそうもない",              etymology:"im（否定）+ prob（試す）+ able（できる）",     root:"-prob-", level:2},
  {word:"disprove",        meaning:"反証する・誤りを証明する",    etymology:"dis（否定）+ prove（証明する）",               root:"-prob-", level:2},
  {word:"unproven",        meaning:"証明されていない・未実証の",   etymology:"un（否定）+ proven（証明された）",             root:"-prob-", level:2},
  ];
  if(typeof window !== 'undefined'){
    window.vocabData = (window.vocabData || []).concat(d);
  }
})();
