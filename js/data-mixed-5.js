/**
 * data-mixed-5.js — GRE頻出語（第2弾）
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── GRE頻出語（高度な語彙）A〜G ───────────────
  {word:"abate",         meaning:"和らぐ・減少する",             etymology:"a（〜に）+ bate（打つ）→勢いを打ち消す",  category:"GRE", level:3, pos:"動詞"},
  {word:"abscond",       meaning:"逃げる・こっそり去る",          etymology:"abs（離れて）+ cond（隠す）",             category:"GRE", level:3, pos:"動詞"},
  {word:"acerbic",       meaning:"辛辣な・刺々しい",             etymology:"acer（鋭い）+ bic（〜な）",              category:"GRE", level:3, pos:"形容詞"},
  {word:"acrimony",      meaning:"辛辣さ・とげとげしさ",          etymology:"acri（鋭い）+ mony（状態）",              category:"GRE", level:3, pos:"名詞"},
  {word:"adulation",     meaning:"過度の賛美・おべっか",          etymology:"adul（媚びる）+ ation（行為）",           category:"GRE", level:3, pos:"名詞"},
  {word:"adumbrate",     meaning:"おぼろげに示す・スケッチする",   etymology:"ad（〜に）+ umbr（影）+ ate（する）→影を描く",category:"GRE",level:3, pos:"動詞"},
  {word:"alacrity",      meaning:"機敏さ・快活さ",               etymology:"alacr（機敏な）+ ity（状態）",            category:"GRE", level:3, pos:"名詞"},
  {word:"amalgamate",    meaning:"合併する・混ぜ合わせる",         etymology:"amalgam（合金）+ ate（する）",            category:"GRE", level:3, pos:"動詞"},
  {word:"ameliorate",    meaning:"改善する・よくする",            etymology:"amelior（より良い）+ ate（する）",        category:"GRE", level:3, pos:"動詞"},
  {word:"anachronism",   meaning:"時代錯誤",                     etymology:"ana（後ろへ）+ chron（時）+ ism（主義）",category:"GRE", level:3, pos:"名詞"},
  {word:"antithesis",    meaning:"対義・正反対",                 etymology:"anti（反対）+ thesis（置く）",            category:"GRE", level:3, pos:"名詞"},
  {word:"arcane",        meaning:"秘密の・難解な",               etymology:"arca（箱）+ ane（〜な）→秘密の箱",       category:"GRE", level:3, pos:"形容詞"},
  {word:"arduous",       meaning:"困難な・骨の折れる",            etymology:"ardu（険しい）+ ous（〜な）",             category:"GRE", level:3, pos:"形容詞・動詞"},
  {word:"assiduity",     meaning:"勤勉・精励",                   etymology:"assidu（熱心な）+ ity（状態）",           category:"GRE", level:3, pos:"名詞"},
  {word:"astute",        meaning:"抜け目のない・機敏な",           etymology:"astu（都市）+ te→都会的な賢さ",          category:"GRE", level:3, pos:"形容詞"},
  {word:"avarice",       meaning:"強欲・金銭欲",                 etymology:"avar（貪欲な）+ ice（状態）",             category:"GRE", level:3, pos:"名詞"},
  {word:"bellicose",     meaning:"好戦的な・けんか早い",           etymology:"belli（戦争）+ cose（〜な）",             category:"GRE", level:3, pos:"形容詞"},
  {word:"bombastic",     meaning:"大げさな・誇大な",              etymology:"bomb（爆弾）+ astic（〜な）→爆発的な言葉",category:"GRE",level:3, pos:"形容詞"},
  {word:"cacophony",     meaning:"不協和音・騒音",               etymology:"caco（悪い）+ phony（音）",              category:"GRE", level:3, pos:"名詞"},
  {word:"capricious",    meaning:"気まぐれな・移り気な",           etymology:"capr（ヤギ）+ icious（〜な）→ヤギのように飛び跳ねる",category:"GRE",level:3, pos:"形容詞"},
  {word:"castigate",     meaning:"厳しく批判する・罰する",         etymology:"castus（純粋な）+ ig（〜に）+ ate（する）→純化する",category:"GRE",level:3, pos:"動詞"},
  {word:"chicanery",     meaning:"詭弁・ごまかし",               etymology:"chicane（策略）+ ry（行為）",             category:"GRE", level:3, pos:"名詞"},
  {word:"churlish",      meaning:"無礼な・意地悪な",              etymology:"churl（農奴）+ ish（〜な）",              category:"GRE", level:3, pos:"形容詞"},
  {word:"clemency",      meaning:"寛大さ・温情",                 etymology:"clem（穏やかな）+ ency（状態）",          category:"GRE", level:3, pos:"名詞"},
  {word:"cogent",        meaning:"説得力のある・論理的な",         etymology:"co（共に）+ gent（導く）→まとめて導く",  category:"GRE", level:3, pos:"動詞・形容詞"},
  {word:"complaisant",   meaning:"人のいい・快活な",              etymology:"com（共に）+ plais（喜ばせる）+ ant（〜な）",category:"GRE",level:3, pos:"形容詞"},
  {word:"convoluted",    meaning:"複雑な・入り組んだ",             etymology:"con（共に）+ volut（回る）+ ed（〜な）",   category:"GRE", level:3, pos:"形容詞"},
  {word:"corpulent",     meaning:"肥満した",                     etymology:"corp（体）+ ulent（〜に満ちた）",         category:"GRE", level:3, pos:"形容詞"},
  {word:"craven",        meaning:"臆病な・卑怯な",               etymology:"crav（臆病）+ en（〜な）",               category:"GRE", level:3, pos:"形容詞"},
  {word:"cupidity",      meaning:"貪欲・強欲",                   etymology:"cupid（欲望）+ ity（状態）",              category:"GRE", level:3, pos:"名詞"},
  {word:"debacle",       meaning:"大失敗・崩壊",                 etymology:"de（下に）+ bacle（棒）→棒が外れて崩壊",  category:"GRE", level:3, pos:"名詞"},
  {word:"deleterious",   meaning:"有害な・損害を与える",           etymology:"delete（削除する）+ rious（〜な）",       category:"GRE", level:3, pos:"形容詞・動詞"},
  {word:"demagogue",     meaning:"扇動政治家",                   etymology:"demo（民衆）+ agogue（導く）",            category:"GRE", level:3, pos:"名詞"},
  {word:"desiccate",     meaning:"乾燥させる・乾枯らせる",         etymology:"de（完全に）+ sicc（乾いた）+ ate（する）",category:"GRE",level:3, pos:"動詞"},
  {word:"diaphanous",    meaning:"透き通った・薄い",              etymology:"dia（通じて）+ phan（見える）+ ous（〜な）",category:"GRE",level:3, pos:"形容詞"},
  {word:"didactic",      meaning:"教訓的な・教授的な",             etymology:"didact（教える）+ ic（〜の）",            category:"GRE", level:3, pos:"形容詞"},
  {word:"dilettante",    meaning:"素人愛好家・好事家",             etymology:"dilettare（楽しむ）→ 愛好家",             category:"GRE", level:3, pos:"名詞"},
  {word:"dissonance",    meaning:"不協和音・不一致",              etymology:"dis（否定）+ son（音）+ ance（状態）",    category:"GRE", level:3, pos:"名詞"},
  {word:"duplicity",     meaning:"二枚舌・欺まん",               etymology:"duplic（二重の）+ ity（状態）",           category:"GRE", level:3, pos:"名詞"},
  {word:"ebullient",     meaning:"沸き立つような・熱狂的な",       etymology:"e（外に）+ bull（沸く）+ ient（〜な）",  category:"GRE", level:3, pos:"形容詞"},
  {word:"eccentric",     meaning:"風変わりな・奇妙な",            etymology:"ec（外に）+ centr（中心）+ ic（〜の）",  category:"GRE", level:2, pos:"形容詞"},
  {word:"enervate",      meaning:"衰弱させる・弱らせる",           etymology:"e（外に）+ nerv（神経）+ ate（する）→神経を抜く",category:"GRE",level:3, pos:"動詞"},
  {word:"equivocal",     meaning:"あいまいな・二義的な",           etymology:"equi（等しい）+ voc（声）+ al（〜の）",   category:"GRE", level:3, pos:"形容詞"},
  {word:"erudite",       meaning:"博学な・学識のある",             etymology:"e（外に）+ rude（未熟な）+ ite→非常に鍛えられた",category:"GRE",level:3, pos:"形容詞・動詞"},
  {word:"esoteric",      meaning:"難解な・秘教的な",              etymology:"eso（内側の）+ ter（比較）+ ic（〜の）",  category:"GRE", level:3, pos:"形容詞"},
  {word:"exacerbate",    meaning:"悪化させる",                   etymology:"ex（外に）+ acer（鋭い）+ bate（する）",  category:"GRE", level:3, pos:"動詞"},
  {word:"excoriate",     meaning:"激しく非難する・皮をむく",       etymology:"ex（外に）+ cori（皮）+ ate（する）",     category:"GRE", level:3, pos:"動詞"},
  {word:"execrable",     meaning:"忌まわしい・最悪の",            etymology:"ex（外に）+ secr（呪う）+ able（〜な）",  category:"GRE", level:3, pos:"形容詞"},
  {word:"exigent",       meaning:"緊急の・要求が多い",            etymology:"exig（要求する）+ ent（〜な）",           category:"GRE", level:3, pos:"形容詞"},
  {word:"fecund",        meaning:"多産な・肥沃な",               etymology:"fec（生む）+ und（〜な）",               category:"GRE", level:3, pos:"形容詞"},
  {word:"felicitous",    meaning:"適切な・巧みな",               etymology:"felic（幸福な）+ ious（〜な）",           category:"GRE", level:3, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
