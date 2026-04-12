/**
 * data-suffix-22.js — 接尾語補充14（-ence, -ary, -ery, -itude, -ious, -ology, -ful）
 */
(function(){
  var d = [
  // ── -ence（状態・性質） ──────────────────────
  {word:"adherence",      meaning:"固守・遵守",             etymology:"adher（くっつく）+ ence（状態）",          suffix:"-ence", level:3},
  {word:"coherence",      meaning:"一貫性・まとまり",       etymology:"coher（くっつく）+ ence（状態）",          suffix:"-ence", level:3},
  {word:"concurrence",    meaning:"同意・同時発生",         etymology:"concurr（共に走る）+ ence（状態）",        suffix:"-ence", level:3},
  {word:"correspondence", meaning:"通信・一致",             etymology:"correspond（一致する）+ ence（状態）",     suffix:"-ence", level:2},
  {word:"deference",      meaning:"敬意・服従",             etymology:"defer（尊重する）+ ence（状態）",          suffix:"-ence", level:3},
  {word:"deterrence",     meaning:"抑止・阻止",             etymology:"deter（思いとどまらせる）+ ence（状態）",  suffix:"-ence", level:3},
  {word:"equivalence",    meaning:"同等・等価",             etymology:"equival（同等の）+ ence（状態）",          suffix:"-ence", level:3},
  {word:"occurrence",     meaning:"発生・出来事",           etymology:"occur（起こる）+ ence（状態）",            suffix:"-ence", level:2},
  {word:"preference",     meaning:"好み・優先",             etymology:"prefer（好む）+ ence（状態）",             suffix:"-ence", level:1},
  {word:"reverence",      meaning:"崇敬・深い敬意",         etymology:"rever（崇める）+ ence（状態）",            suffix:"-ence", level:2},
  {word:"sentience",      meaning:"感覚・知覚能力",         etymology:"sentient（感覚のある）+ ce（状態）",       suffix:"-ence", level:3},

  // ── -ary（形容詞・名詞形成） ──────────────────
  {word:"beneficiary",    meaning:"受益者・受遺者",         etymology:"benefici（恩恵）+ ary（人・関連する）",    suffix:"-ary", level:3},
  {word:"complementary",  meaning:"補完的な・補足の",       etymology:"complement（補完）+ ary（形容詞）",        suffix:"-ary", level:2},
  {word:"contemporary",   meaning:"現代の・同時代の",       etymology:"con（共に）+ tempor（時）+ ary（形容詞）", suffix:"-ary", level:2},
  {word:"dietary",        meaning:"食事の・規定食の",       etymology:"diet（食事）+ ary（形容詞）",              suffix:"-ary", level:2},
  {word:"disciplinary",   meaning:"規律の・懲戒の",         etymology:"disciplin（規律）+ ary（形容詞）",         suffix:"-ary", level:3},
  {word:"documentary",    meaning:"文書の・記録映画",       etymology:"document（文書）+ ary（関連する）",        suffix:"-ary", level:2},
  {word:"imaginary",      meaning:"想像の・架空の",         etymology:"imagin（想像する）+ ary（形容詞）",        suffix:"-ary", level:1},
  {word:"intermediary",   meaning:"仲介者・中間の",         etymology:"intermedi（中間）+ ary（人・形容詞）",     suffix:"-ary", level:3},
  {word:"monetary",       meaning:"金銭の・通貨の",         etymology:"monet（貨幣）+ ary（形容詞）",             suffix:"-ary", level:2},
  {word:"subsidiary",     meaning:"補助の・子会社",         etymology:"subsidi（補助）+ ary（形容詞）",           suffix:"-ary", level:3},

  // ── -ery（場所・行為・状態） ──────────────────
  {word:"bravery",        meaning:"勇敢さ・勇気",           etymology:"brave（勇敢な）+ ry（状態）",              suffix:"-ery", level:1},
  {word:"drapery",        meaning:"カーテン・布地",         etymology:"drape（布をかける）+ ry（場所・状態）",    suffix:"-ery", level:2},
  {word:"eatery",         meaning:"飲食店・食堂",           etymology:"eat（食べる）+ ery（場所）",              suffix:"-ery", level:1},
  {word:"embroidery",     meaning:"刺繍・刺繍品",           etymology:"embroider（刺繍する）+ y（行為）",         suffix:"-ery", level:2},
  {word:"forgery",        meaning:"偽造・模造品",           etymology:"forge（偽造する）+ ry（行為）",            suffix:"-ery", level:2},
  {word:"greenery",       meaning:"草木・緑の植物",         etymology:"green（緑）+ ery（集合・状態）",           suffix:"-ery", level:1},
  {word:"imagery",        meaning:"映像・イメージの使用",   etymology:"image（像）+ ry（集合体）",               suffix:"-ery", level:2},
  {word:"jewelry",        meaning:"宝石類・アクセサリー",   etymology:"jewel（宝石）+ ry（集合）",               suffix:"-ery", level:1},
  {word:"livery",         meaning:"お仕着せ・制服",         etymology:"liver（自由に与える）+ y（行為）",         suffix:"-ery", level:3},
  {word:"artillery",      meaning:"砲兵隊・大砲",           etymology:"artill（技術）+ ery（集合・行為）",        suffix:"-ery", level:2},

  // ── -itude（状態・性質） ──────────────────────
  {word:"certitude",      meaning:"確信・確実性",           etymology:"cert（確かな）+ itude（状態）",            suffix:"-itude", level:3},
  {word:"decrepitude",    meaning:"老衰・弱体化",           etymology:"decrepit（老衰した）+ ude（状態）",        suffix:"-itude", level:3},
  {word:"habitude",       meaning:"習慣・慣行",             etymology:"habit（習慣）+ ude（状態）",               suffix:"-itude", level:3},
  {word:"ineptitude",     meaning:"不適切・無能",           etymology:"inept（不適切な）+ itude（状態）",         suffix:"-itude", level:3},
  {word:"lassitude",      meaning:"疲労・倦怠感",           etymology:"lassus（疲れた）+ itude（状態）",          suffix:"-itude", level:3},
  {word:"platitude",      meaning:"陳腐な言葉・決まり文句", etymology:"plat（平ら）+ itude（状態）",              suffix:"-itude", level:3},
  {word:"quietude",       meaning:"静寂・平和",             etymology:"quiet（静かな）+ ude（状態）",             suffix:"-itude", level:3},
  {word:"solitude",       meaning:"孤独・独居",             etymology:"sol（一人）+ itude（状態）",               suffix:"-itude", level:2},
  {word:"verisimilitude", meaning:"真実らしさ・本物らしさ", etymology:"verisimil（真実に似た）+ itude（状態）",   suffix:"-itude", level:3},
  {word:"necessitude",    meaning:"必要性・窮乏",           etymology:"necessit（必要）+ ude（状態）",            suffix:"-itude", level:3},

  // ── -ious（形容詞：…の性質を持つ） ─────────────
  {word:"amphibious",     meaning:"両生の・水陸両用の",     etymology:"amphi（両方）+ bi（生命）+ ous（形容詞）", suffix:"-ious", level:2},
  {word:"cautious",       meaning:"慎重な・用心深い",       etymology:"caut（気をつける）+ ious（形容詞）",       suffix:"-ious", level:1},
  {word:"conscious",      meaning:"意識的な・意識のある",   etymology:"con（共に）+ sci（知る）+ ous（形容詞）",  suffix:"-ious", level:1},
  {word:"delicious",      meaning:"おいしい・楽しい",       etymology:"delic（喜び）+ ious（形容詞）",           suffix:"-ious", level:0},
  {word:"ferocious",      meaning:"獰猛な・激しい",         etymology:"feroc（野生の）+ ious（形容詞）",          suffix:"-ious", level:2},
  {word:"gracious",       meaning:"品格ある・寛大な",       etymology:"grati（恵み）+ ous（形容詞）",             suffix:"-ious", level:2},
  {word:"meticulous",     meaning:"几帳面な・細心の注意を払う",etymology:"metu（恐れ）+ icul + ous（形容詞）",   suffix:"-ious", level:3},
  {word:"precious",       meaning:"貴重な・大切な",         etymology:"preti（価値）+ ous（形容詞）",             suffix:"-ious", level:1},
  {word:"suspicious",     meaning:"疑わしい・不審な",       etymology:"suspect（疑う）+ ious（形容詞）",          suffix:"-ious", level:1},

  // ── -ology（学問・研究） ──────────────────────
  {word:"cosmetology",    meaning:"美容学・化粧品学",       etymology:"cosmet（装飾）+ ology（学問）",            suffix:"-ology", level:2},
  {word:"deontology",     meaning:"義務論・倫理学",         etymology:"deon（義務）+ ology（学問）",              suffix:"-ology", level:3},
  {word:"genealogy",      meaning:"系譜学・家系研究",       etymology:"geneal（家系）+ ology（学問）",            suffix:"-ology", level:2},
  {word:"kinesiology",    meaning:"運動学・身体運動学",     etymology:"kinesi（運動）+ ology（学問）",            suffix:"-ology", level:3},
  {word:"mycology",       meaning:"菌類学・きのこ学",       etymology:"myco（菌類）+ ology（学問）",              suffix:"-ology", level:3},

  // ── -ful（…に満ちた） ──────────────────────────
  {word:"artful",         meaning:"巧みな・ずる賢い",       etymology:"art（技術）+ ful（満ちた）",               suffix:"-ful",   level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
