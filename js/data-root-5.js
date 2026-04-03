/**
 * data-root-5.js — 語根データ（-loc-, -mot-/-mov-, -nat-, -nom-/-nym-, -pend-/-pens-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -loc-（場所） ─────────────────────────────
  {word:"local",         meaning:"地元の・局所的な",      etymology:"loc（場所）+ al（〜の）",                  root:"-loc-", level:0},
  {word:"location",      meaning:"場所・位置",            etymology:"loc（場所）+ ation（状態）",               root:"-loc-", level:0},
  {word:"locate",        meaning:"場所を突き止める",      etymology:"loc（場所）+ ate（〜する）",               root:"-loc-", level:1},
  {word:"relocate",      meaning:"移転する・再配置する",  etymology:"re（再び）+ loc（場所）+ ate（〜する）",   root:"-loc-", level:1},
  {word:"allocate",      meaning:"割り当てる・配分する",  etymology:"al（〜に）+ loc（場所）+ ate（〜する）",   root:"-loc-", level:2},
  {word:"dislocate",     meaning:"脱臼させる・混乱させる",etymology:"dis（離れて）+ loc（場所）+ ate（〜する）",root:"-loc-", level:2},
  {word:"locomotive",    meaning:"機関車・移動力",        etymology:"loco（場所）+ motive（動く）",             root:"-loc-", level:1},
  {word:"locality",      meaning:"地域・場所",            etymology:"loc（場所）+ ality（性質）",               root:"-loc-", level:2},
  {word:"locale",        meaning:"現場・場所",            etymology:"loc（場所）+ ale（〜のもの）",             root:"-loc-", level:2},
  {word:"localize",      meaning:"局所化する",            etymology:"loc（場所）+ alize（〜にする）",           root:"-loc-", level:2},
  {word:"colocate",      meaning:"同じ場所に置く",        etymology:"co（共に）+ loc（場所）+ ate（〜する）",   root:"-loc-", level:2},
  {word:"circumlocution",meaning:"回りくどい表現",        etymology:"circum（周囲に）+ loc（場所）+ ution",     root:"-loc-", level:3},
  {word:"colloquial",    meaning:"口語的な・会話体の",    etymology:"col（共に）+ loqu（話す）+ ial（〜の）",   root:"-loc-", level:2},
  {word:"eloquent",      meaning:"雄弁な",                etymology:"e（外に）+ loqu（話す）+ ent（〜している）",root:"-loc-", level:2},
  {word:"soliloquy",     meaning:"独り言・独白",          etymology:"soli（一人）+ loqu（話す）+ y",            root:"-loc-", level:3},

  // ── -mot-/-mov-（動く・動かす） ───────────────
  {word:"move",          meaning:"動く・引っ越す",        etymology:"mov（動く）+ e",                           root:"-mot-", level:0},
  {word:"motive",        meaning:"動機・目的",            etymology:"mot（動く）+ ive（傾向）",                 root:"-mot-", level:1},
  {word:"motion",        meaning:"動き・運動",            etymology:"mot（動く）+ ion（状態）",                 root:"-mot-", level:0},
  {word:"motor",         meaning:"モーター・原動力",      etymology:"mot（動く）+ or（〜するもの）",            root:"-mot-", level:0},
  {word:"emotion",       meaning:"感情・感動",            etymology:"e（外に）+ motion（動き）",                root:"-mot-", level:0},
  {word:"motivate",      meaning:"動機づける",            etymology:"mot（動く）+ ivate（〜にする）",           root:"-mot-", level:1},
  {word:"promote",       meaning:"促進する・昇進させる",  etymology:"pro（前に）+ mot（動く）+ e",              root:"-mot-", level:1},
  {word:"remote",        meaning:"遠い・リモートの",      etymology:"re（後ろに）+ mot（動く）+ e",             root:"-mot-", level:0},
  {word:"commotion",     meaning:"騒動・大騒ぎ",          etymology:"com（共に）+ motion（動き）",              root:"-mot-", level:2},
  {word:"demotion",      meaning:"降格・格下げ",          etymology:"de（下に）+ motion（動き）",               root:"-mot-", level:2},
  {word:"locomotion",    meaning:"移動・運動",            etymology:"loco（場所）+ motion（動き）",             root:"-mot-", level:2},
  {word:"immovable",     meaning:"動かせない・不変の",    etymology:"im（否定）+ mov（動く）+ able（できる）",  root:"-mot-", level:2},
  {word:"movement",      meaning:"動き・運動",            etymology:"mov（動く）+ ement（結果）",               root:"-mot-", level:0},
  {word:"emotional",     meaning:"感情的な",              etymology:"emot（感情）+ ional（〜の）",              root:"-mot-", level:0},
  {word:"demotivate",    meaning:"やる気をなくさせる",    etymology:"de（否定）+ motivate（動機づける）",       root:"-mot-", level:1},
  {word:"automotive",    meaning:"自動車の",              etymology:"auto（自動）+ mot（動く）+ ive（〜の）",   root:"-mot-", level:1},
  {word:"promote",       meaning:"宣伝する",              etymology:"pro（前に）+ mot（動く）",                 root:"-mot-", level:1},
  {word:"removal",       meaning:"除去・排除",            etymology:"re（再び）+ mov（動く）+ al（行為）",      root:"-mot-", level:1},

  // ── -nat-（生まれる・本来の） ─────────────────
  {word:"nature",        meaning:"自然・本質",            etymology:"nat（生まれる）+ ure（結果）",             root:"-nat-", level:0},
  {word:"natural",       meaning:"自然の・本来の",        etymology:"nat（生まれる）+ ural（〜の）",            root:"-nat-", level:0},
  {word:"nation",        meaning:"国家",                  etymology:"nat（生まれる）+ ion（状態）",             root:"-nat-", level:0},
  {word:"native",        meaning:"土着の・生まれつきの",  etymology:"nat（生まれる）+ ive（〜の）",             root:"-nat-", level:0},
  {word:"innate",        meaning:"生まれつきの・先天的な",etymology:"in（中に）+ nat（生まれる）+ e",           root:"-nat-", level:2},
  {word:"natal",         meaning:"出生の",                etymology:"nat（生まれる）+ al（〜の）",              root:"-nat-", level:2},
  {word:"prenatal",      meaning:"出生前の・胎児の",      etymology:"pre（前に）+ natal（出生の）",             root:"-nat-", level:2},
  {word:"postnatal",     meaning:"出生後の",              etymology:"post（後に）+ natal（出生の）",            root:"-nat-", level:2},
  {word:"naturalize",    meaning:"帰化させる・自然化する",etymology:"natural（自然の）+ ize（〜にする）",       root:"-nat-", level:2},
  {word:"supernatural",  meaning:"超自然的な",            etymology:"super（超えて）+ natural（自然の）",       root:"-nat-", level:1},
  {word:"nationality",   meaning:"国籍・国民性",          etymology:"nation（国家）+ ality（性質）",            root:"-nat-", level:1},
  {word:"naturalistic",  meaning:"自然主義的な",          etymology:"natural（自然の）+ istic（〜の）",         root:"-nat-", level:2},
  {word:"denaturalize",  meaning:"帰化を取り消す",        etymology:"de（否定）+ naturalize（帰化）",           root:"-nat-", level:3},
  {word:"neonatal",      meaning:"新生児の",              etymology:"neo（新しい）+ natal（出生の）",           root:"-nat-", level:2},

  // ── -nom-/-nym-（名前・法則） ─────────────────
  {word:"name",          meaning:"名前・名付ける",        etymology:"nom（名前）+ e",                          root:"-nom-", level:0},
  {word:"nominate",      meaning:"指名する・推薦する",    etymology:"nom（名前）+ inate（〜する）",             root:"-nom-", level:2},
  {word:"synonym",       meaning:"同義語",                etymology:"syn（共に）+ onym（名前）",                root:"-nom-", level:1},
  {word:"antonym",       meaning:"反義語",                etymology:"ant（反対）+ onym（名前）",                root:"-nom-", level:1},
  {word:"pseudonym",     meaning:"偽名・ペンネーム",      etymology:"pseudo（偽の）+ nym（名前）",              root:"-nom-", level:2},
  {word:"anonymous",     meaning:"匿名の",                etymology:"an（否定）+ onym（名前）+ ous（〜の）",    root:"-nom-", level:1},
  {word:"homonym",       meaning:"同音異義語",            etymology:"homo（同じ）+ nym（名前）",                root:"-nom-", level:2},
  {word:"acronym",       meaning:"頭字語（例：NASA）",    etymology:"acro（頂点）+ nym（名前）",                root:"-nom-", level:1},
  {word:"eponym",        meaning:"名称の元になった人",    etymology:"epi（上に）+ onym（名前）",                root:"-nom-", level:3},
  {word:"taxonomy",      meaning:"分類学",                etymology:"tax（秩序）+ nomy（法則）",                root:"-nom-", level:2},
  {word:"astronomy",     meaning:"天文学",                etymology:"astro（星）+ nomy（法則）",                root:"-nom-", level:1},
  {word:"economy",       meaning:"経済・節約",            etymology:"eco（家）+ nomy（法則）",                  root:"-nom-", level:0},
  {word:"autonomy",      meaning:"自治・自律",            etymology:"auto（自分）+ nomy（法則）",               root:"-nom-", level:2},
  {word:"gastronomy",    meaning:"美食学・料理術",        etymology:"gastro（胃）+ nomy（法則）",               root:"-nom-", level:2},
  {word:"nominal",       meaning:"名目上の・わずかな",    etymology:"nom（名前）+ inal（〜の）",                root:"-nom-", level:2},
  {word:"denomination",  meaning:"宗派・単位・名称",      etymology:"de（下に）+ nomin（名前）+ ation（行為）", root:"-nom-", level:2},
  {word:"binomial",      meaning:"二項式",                etymology:"bi（二つ）+ nomin（名前）+ al（〜の）",    root:"-nom-", level:2},

  // ── -pend-/-pens-（ぶら下がる・重さを量る） ──
  {word:"depend",        meaning:"依存する・頼る",        etymology:"de（下に）+ pend（ぶら下がる）",           root:"-pend-", level:0},
  {word:"suspend",       meaning:"中断する・ぶら下げる",  etymology:"sus（下に）+ pend（ぶら下がる）",          root:"-pend-", level:1},
  {word:"spend",         meaning:"費やす・使う",          etymology:"s（外に）+ pend（重さを量る）",            root:"-pend-", level:0},
  {word:"append",        meaning:"付け加える",            etymology:"ap（〜に）+ pend（ぶら下がる）",           root:"-pend-", level:2},
  {word:"independent",   meaning:"独立した",              etymology:"in（否定）+ depend（依存する）+ ent（〜の）",root:"-pend-", level:0},
  {word:"pension",       meaning:"年金・ペンション",      etymology:"pens（重さを量る）+ ion（状態）",          root:"-pend-", level:1},
  {word:"compensate",    meaning:"補償する",              etymology:"com（共に）+ pens（量る）+ ate（〜する）", root:"-pend-", level:2},
  {word:"expense",       meaning:"費用・経費",            etymology:"ex（外に）+ pens（量る）+ e",              root:"-pend-", level:1},
  {word:"dispense",      meaning:"分配する・調合する",    etymology:"dis（離れて）+ pens（量る）+ e",           root:"-pend-", level:2},
  {word:"indispensable", meaning:"不可欠な",              etymology:"in（否定）+ dispens（分配）+ able（できる）",root:"-pend-", level:2},
  {word:"pending",       meaning:"保留の・未解決の",      etymology:"pend（ぶら下がる）+ ing（〜している）",    root:"-pend-", level:1},
  {word:"pendulum",      meaning:"振り子",                etymology:"pend（ぶら下がる）+ ulum（小さい）",       root:"-pend-", level:1},
  {word:"appendix",      meaning:"虫垂・付録",            etymology:"ap（〜に）+ pend（ぶら下がる）+ ix",      root:"-pend-", level:1},
  {word:"propensity",    meaning:"傾向・性向",            etymology:"pro（前に）+ pens（傾く）+ ity（性質）",   root:"-pend-", level:3},
  {word:"compendium",    meaning:"概説・要覧",            etymology:"com（共に）+ pend（量る）+ ium（〜のもの）",root:"-pend-", level:3},
  {word:"stipend",       meaning:"生活費・奨学金",        etymology:"sti（固定した）+ pend（量る）",            root:"-pend-", level:2},
  {word:"expenditure",   meaning:"支出・経費",            etymology:"ex（外に）+ pend（量る）+ iture（結果）",  root:"-pend-", level:2},
  {word:"impending",     meaning:"差し迫った・切迫した",  etymology:"im（中に）+ pend（ぶら下がる）+ ing",      root:"-pend-", level:2},
  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
