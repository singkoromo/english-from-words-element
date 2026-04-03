/**
 * data-mixed-8.js — ビジネス英語（第2弾）
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── ビジネス英語（戦略・経営）───────────────
  {word:"acquisition",   meaning:"買収・習得",                  etymology:"acquir（獲得する）+ ition（行為）",        category:"Business", level:2},
  {word:"arbitrage",     meaning:"裁定取引",                    etymology:"arbitr（判定する）+ age（行為）",          category:"Business", level:3},
  {word:"benchmark",     meaning:"ベンチマーク・基準",            etymology:"bench（台）+ mark（印）",               category:"Business", level:1},
  {word:"brand equity",  meaning:"ブランドエクイティ・ブランド資産",etymology:"brand（ブランド）+ equity（資産）",      category:"Business", level:2},
  {word:"breakeven",     meaning:"損益分岐点",                  etymology:"break（折れる）+ even（平らな）",          category:"Business", level:2},
  {word:"bureaucracy",   meaning:"官僚制度・書類仕事",           etymology:"bureau（事務所）+ cracy（統治）",         category:"Business", level:2},
  {word:"capital",       meaning:"資本・首都",                  etymology:"capit（頭・主要）+ al（〜の）",           category:"Business", level:1},
  {word:"capitulate",    meaning:"降伏する・妥協する",            etymology:"capit（頭）+ ulate（する）→リストを提出する",category:"Business",level:3},
  {word:"catalyst",      meaning:"触媒・きっかけ",               etymology:"cata（下に）+ lyst（解く）",             category:"Business", level:2},
  {word:"collaborative", meaning:"協力的な・共同の",             etymology:"co（共に）+ labor（労働）+ ative（〜な）", category:"Business", level:2},
  {word:"commodity",     meaning:"商品・日用品",                 etymology:"commod（都合よい）+ ity（状態）",         category:"Business", level:2},
  {word:"competency",    meaning:"能力・適格性",                 etymology:"compet（競争する）+ ency（状態）",        category:"Business", level:2},
  {word:"compliance",    meaning:"コンプライアンス・法令遵守",    etymology:"comply（従う）+ ance（状態）",            category:"Business", level:2},
  {word:"concession",    meaning:"譲歩・利権",                  etymology:"con（共に）+ cession（行くこと）",         category:"Business", level:2},
  {word:"conglomerate",  meaning:"コングロマリット・複合企業",    etymology:"con（共に）+ glomerate（塊）",           category:"Business", level:3},
  {word:"contingency",   meaning:"不測の事態・偶発性",            etymology:"con（共に）+ tingency（触れる）",         category:"Business", level:3},
  {word:"convert",       meaning:"転換する・改宗する",            etymology:"con（共に）+ vert（回る）",              category:"Business", level:1},
  {word:"corporate",     meaning:"企業の・法人の",              etymology:"corp（体）+ orate（〜の）",              category:"Business", level:1},
  {word:"credibility",   meaning:"信頼性・信用",                etymology:"cred（信じる）+ ibil（できる）+ ity（状態）",category:"Business",level:2},
  {word:"deadline",      meaning:"締め切り",                    etymology:"dead（死んだ）+ line（線）→それ以上越えられない線",category:"Business",level:0},
  {word:"deficit",       meaning:"赤字・不足",                  etymology:"deficit（不足）→ラテン語",               category:"Business", level:2},
  {word:"delegation",    meaning:"委任・代表団",                etymology:"de（下に）+ leg（使者）+ ation（行為）",  category:"Business", level:2},
  {word:"deliverable",   meaning:"成果物・提出物",               etymology:"deliver（届ける）+ able（できる）",        category:"Business", level:2},
  {word:"demographics",  meaning:"人口統計学・人口構成",         etymology:"demo（民衆）+ graphics（記録）",          category:"Business", level:2},
  {word:"deployment",    meaning:"展開・配備",                  etymology:"de（下に）+ ploy（折る）+ ment（状態）",  category:"Business", level:2},
  {word:"depreciation",  meaning:"減価償却・価値の低下",          etymology:"de（下に）+ preci（価値）+ ation（行為）",category:"Business",level:2},
  {word:"derivatives",   meaning:"デリバティブ・派生商品",        etymology:"derive（由来する）+ atives（〜のもの）",   category:"Business", level:3},
  {word:"differentiate", meaning:"差別化する・区別する",          etymology:"different（異なる）+ iate（する）",        category:"Business", level:2},
  {word:"diligence",     meaning:"デューデリジェンス・勤勉",      etymology:"dil（好む）+ ig（選ぶ）+ ence（状態）",   category:"Business", level:2},
  {word:"disruptive",    meaning:"破壊的な・現状打破の",          etymology:"dis（離れて）+ rupt（破る）+ ive（性質）",category:"Business", level:2},
  {word:"diversify",     meaning:"多角化する・分散する",          etymology:"divers（様々な）+ ify（〜にする）",       category:"Business", level:2},
  {word:"dividend",      meaning:"配当・利益",                  etymology:"divid（分ける）+ end（〜のもの）",        category:"Business", level:2},
  {word:"downsizing",    meaning:"人員削減・縮小",               etymology:"down（下に）+ size（大きさ）+ ing",       category:"Business", level:2},
  {word:"durable",       meaning:"耐久性のある",                 etymology:"dur（続く）+ able（できる）",            category:"Business", level:2},
  {word:"economies of scale",meaning:"規模の経済",              etymology:"economy（経済）+ scale（規模）",          category:"Business", level:2},
  {word:"efficiency",    meaning:"効率性",                      etymology:"ef（外に）+ fic（する）+ iency（状態）",  category:"Business", level:1},
  {word:"entrepreneur",  meaning:"起業家",                      etymology:"entre（間に）+ preneur（取る）→仲介する", category:"Business", level:2},
  {word:"equity",        meaning:"株式・公平さ",                etymology:"equ（等しい）+ ity（状態）",              category:"Business", level:2},
  {word:"escalate",      meaning:"段階的に増大する・エスカレートする",etymology:"escal（はしご）+ ate（する）",         category:"Business", level:2},
  {word:"feasibility",   meaning:"実現可能性",                  etymology:"feasib（できる）+ ility（状態）",          category:"Business", level:2},
  {word:"fiscal",        meaning:"財政の・会計の",               etymology:"fisc（国庫）+ al（〜の）",              category:"Business", level:2},
  {word:"forecast",      meaning:"予測・予報する",               etymology:"fore（前に）+ cast（投げる）",            category:"Business", level:1},
  {word:"franchise",     meaning:"フランチャイズ・特権",          etymology:"franc（自由な）+ chise（特権）",          category:"Business", level:2},
  {word:"incentive",     meaning:"インセンティブ・動機",          etymology:"in（中に）+ cent（歌う）+ ive（〜もの）→やる気を起こす",category:"Business",level:1},
  {word:"infrastructure",meaning:"インフラ・基盤整備",            etymology:"infra（下に）+ structure（構造）",        category:"Business", level:1},
  {word:"innovation",    meaning:"革新・イノベーション",           etymology:"in（中に）+ nov（新しい）+ ation（行為）",category:"Business", level:1},
  {word:"insolvency",    meaning:"支払不能・破産",               etymology:"in（否定）+ solv（解く）+ ency（状態）",  category:"Business", level:3},
  {word:"integration",   meaning:"統合・垂直統合",               etymology:"integr（完全な）+ ation（行為）",         category:"Business", level:2},
  {word:"inventory",     meaning:"在庫・棚卸し",                etymology:"invent（発見する）+ ory（〜の場所）",      category:"Business", level:1},
  {word:"leverage",      meaning:"レバレッジ・影響力",            etymology:"lever（てこ）+ age（〜の効果）",          category:"Business", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
