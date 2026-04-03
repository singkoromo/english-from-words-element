/**
 * data-mixed-4.js — TOEFL頻出語（第2弾）
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── TOEFL頻出語（D〜G） ───────────────
  {word:"debate",        meaning:"討論する・議論",               etymology:"de（完全に）+ bate（打つ）→打ち合う",     category:"TOEFL", level:1},
  {word:"deduce",        meaning:"推論する・演繹する",            etymology:"de（下に）+ duce（導く）",               category:"TOEFL", level:2},
  {word:"demonstrate",   meaning:"実証する・デモをする",           etymology:"de（完全に）+ monstr（示す）+ ate（する）",category:"TOEFL", level:1},
  {word:"depict",        meaning:"描写する・描く",               etymology:"de（完全に）+ pict（描く）",              category:"TOEFL", level:2},
  {word:"derive",        meaning:"導き出す・由来する",             etymology:"de（離れて）+ rive（川）→流れから引く",   category:"TOEFL", level:2},
  {word:"detect",        meaning:"検出する・発見する",             etymology:"de（離れて）+ tect（覆う）→覆いを取る",  category:"TOEFL", level:1},
  {word:"deteriorate",   meaning:"悪化する・劣化する",            etymology:"deterior（より悪い）+ ate（する）",        category:"TOEFL", level:2},
  {word:"deviate",       meaning:"逸脱する・外れる",              etymology:"de（離れて）+ via（道）+ ate（する）",    category:"TOEFL", level:2},
  {word:"diminish",      meaning:"減少する・小さくなる",           etymology:"di（離れて）+ min（小さい）+ ish（する）", category:"TOEFL", level:2},
  {word:"discriminate",  meaning:"差別する・識別する",             etymology:"dis（離れて）+ crimin（区別）+ ate（する）",category:"TOEFL",level:2},
  {word:"disseminate",   meaning:"普及させる・広める",            etymology:"dis（離れて）+ semin（種）+ ate（する）→種をまく",category:"TOEFL",level:2},
  {word:"distinct",      meaning:"明確な・独特の",               etymology:"di（離れて）+ stinct（刺す）→刺して区別する",category:"TOEFL",level:1},
  {word:"diversity",     meaning:"多様性",                       etymology:"di（離れて）+ vers（回る）+ ity（状態）", category:"TOEFL", level:1},
  {word:"dominant",      meaning:"支配的な・優勢な",              etymology:"domin（支配する）+ ant（〜な）",          category:"TOEFL", level:2},
  {word:"dynamic",       meaning:"動的な・精力的な",              etymology:"dynam（力）+ ic（〜の）",               category:"TOEFL", level:1},
  {word:"elaborate",     meaning:"詳細に述べる・精巧な",          etymology:"e（完全に）+ labor（労働）+ ate（する）", category:"TOEFL", level:2},
  {word:"eliminate",     meaning:"排除する・取り除く",             etymology:"e（外に）+ limin（境界）+ ate（する）→境界外へ",category:"TOEFL",level:1},
  {word:"emerge",        meaning:"出現する・浮かび上がる",          etymology:"e（外に）+ merge（沈む）",               category:"TOEFL", level:1},
  {word:"emphasize",     meaning:"強調する",                     etymology:"em（中に）+ phas（見せる）+ ize（する）", category:"TOEFL", level:1},
  {word:"endorse",       meaning:"支持する・承認する",             etymology:"en（中に）+ dorse（背中）→後ろから支える",category:"TOEFL",level:2},
  {word:"enhance",       meaning:"高める・強化する",              etymology:"en（中に）+ hance（高さ）→高さを増す",   category:"TOEFL", level:1},
  {word:"enormous",      meaning:"巨大な・莫大な",               etymology:"e（外に）+ norm（規範）+ ous（〜な）→規範外",category:"TOEFL",level:1},
  {word:"equivalent",    meaning:"同等の・等価物",               etymology:"equi（等しい）+ val（価値）+ ent（〜な）",category:"TOEFL",level:2},
  {word:"establish",     meaning:"設立する・確立する",             etymology:"estab（固める）+ lish（する）",           category:"TOEFL", level:0},
  {word:"evaluate",      meaning:"評価する",                     etymology:"e（外に）+ valu（価値）+ ate（する）",    category:"TOEFL", level:1},
  {word:"evolve",        meaning:"進化する・発展する",             etymology:"e（外に）+ volv（回る）→展開する",        category:"TOEFL", level:1},
  {word:"expedite",      meaning:"迅速に進める",                  etymology:"ex（外に）+ ped（足）+ ite（する）→足かせを取る",category:"TOEFL",level:3},
  {word:"exploit",       meaning:"利用する・開発する",             etymology:"ex（外に）+ ploit（折る）→折りたたんで引き出す",category:"TOEFL",level:2},
  {word:"fluctuate",     meaning:"変動する",                     etymology:"flu（流れる）+ ctu（〜する）+ ate（する）",category:"TOEFL",level:2},
  {word:"facilitate",    meaning:"促進する・容易にする",           etymology:"facil（容易な）+ itate（する）",          category:"TOEFL", level:2},
  {word:"fundamental",   meaning:"基本的な・根本的な",             etymology:"fund（基礎）+ amental（〜の）",          category:"TOEFL", level:1},
  {word:"generate",      meaning:"生み出す・発生させる",           etymology:"gen（生む）+ er（する）+ ate（〜にする）",category:"TOEFL",level:1},
  {word:"globalize",     meaning:"グローバル化する",               etymology:"global（世界的な）+ ize（する）",         category:"TOEFL", level:1},
  {word:"gradual",       meaning:"段階的な・徐々の",              etymology:"grad（歩む）+ ual（〜の）",              category:"TOEFL", level:1},
  {word:"hypothesis",    meaning:"仮説",                         etymology:"hypo（下に）+ thesis（置く）",            category:"TOEFL", level:2},
  {word:"identical",     meaning:"同一の・まったく同じ",           etymology:"ident（同じ）+ ical（〜の）",            category:"TOEFL", level:1},
  {word:"illustrate",    meaning:"説明する・例示する",             etymology:"il（中に）+ lustr（光を当てる）+ ate（する）",category:"TOEFL",level:1},
  {word:"implement",     meaning:"実施する・道具",                etymology:"im（中に）+ plement（満たす）",          category:"TOEFL", level:2},
  {word:"imply",         meaning:"示唆する・暗示する",             etymology:"im（中に）+ ply（折る）→含み折る",       category:"TOEFL", level:1},
  {word:"inhibit",       meaning:"抑制する・妨げる",              etymology:"in（中に）+ hibit（持つ）→中に閉じ込める",category:"TOEFL",level:2},
  {word:"integrate",     meaning:"統合する・組み込む",             etymology:"integr（整数・完全な）+ ate（する）",     category:"TOEFL", level:2},
  {word:"interpret",     meaning:"解釈する・通訳する",             etymology:"inter（間に）+ pret（価格）→仲介する",   category:"TOEFL", level:1},
  {word:"investigate",   meaning:"調査する・研究する",             etymology:"in（中に）+ vestig（足跡）+ ate（する）→足跡をたどる",category:"TOEFL",level:1},
  {word:"justify",       meaning:"正当化する",                   etymology:"just（正しい）+ ify（〜にする）",         category:"TOEFL", level:1},
  {word:"manipulate",    meaning:"操作する・巧みに扱う",           etymology:"mani（手）+ pul（満たす）+ ate（する）",  category:"TOEFL", level:2},
  {word:"methodology",   meaning:"方法論",                       etymology:"method（方法）+ ology（学問）",          category:"TOEFL", level:2},
  {word:"minimize",      meaning:"最小化する",                   etymology:"minim（最小）+ ize（する）",              category:"TOEFL", level:1},
  {word:"modify",        meaning:"修正する・変更する",             etymology:"modi（方法）+ fy（〜にする）",           category:"TOEFL", level:1},
  {word:"monitor",       meaning:"監視する・モニター",             etymology:"monit（警告する）+ or（人・もの）",       category:"TOEFL", level:1},
  {word:"necessitate",   meaning:"必要とする",                   etymology:"necess（必要）+ itate（する）",          category:"TOEFL", level:2},
  ];
  if(typeof window !== 'undefined' && window.VOCAB_DATA) window.VOCAB_DATA.push(...d);
  else if(typeof module !== 'undefined') module.exports = d;
})();
