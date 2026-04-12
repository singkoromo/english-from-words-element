/**
 * data-suffix-18.js — 接尾語補充10（-scope, -cracy, -archy）
 */
(function(){
  var d = [
  // ── -scope（観察・見る機器） ──────────────────
  {word:"cystoscope",     meaning:"膀胱鏡",                etymology:"cysto（膀胱）+ scope（観察器）",           suffix:"-scope", level:3},
  {word:"hysteroscope",   meaning:"子宮鏡",                etymology:"hystero（子宮）+ scope（観察器）",         suffix:"-scope", level:3},
  {word:"proctoscope",    meaning:"直腸鏡",                etymology:"procto（肛門・直腸）+ scope（観察器）",   suffix:"-scope", level:3},
  {word:"colonoscope",    meaning:"大腸内視鏡",            etymology:"colon（大腸）+ scope（観察器）",           suffix:"-scope", level:3},
  {word:"rhinoscope",     meaning:"鼻鏡",                  etymology:"rhino（鼻）+ scope（観察器）",             suffix:"-scope", level:3},
  {word:"gastroscope",    meaning:"胃鏡・胃内視鏡",        etymology:"gastro（胃）+ scope（観察器）",            suffix:"-scope", level:3},
  {word:"fluoroscope",    meaning:"蛍光透視鏡",            etymology:"fluoro（蛍光）+ scope（観察器）",          suffix:"-scope", level:3},
  {word:"helioscope",     meaning:"太陽観察器",            etymology:"helio（太陽）+ scope（観察器）",           suffix:"-scope", level:2},
  {word:"chronoscope",    meaning:"時間測定器",            etymology:"chrono（時間）+ scope（測定器）",          suffix:"-scope", level:2},
  {word:"fetoscope",      meaning:"胎児鏡",                etymology:"feto（胎児）+ scope（観察器）",            suffix:"-scope", level:3},
  {word:"thermoscope",    meaning:"温度計・熱指示器",       etymology:"thermo（熱）+ scope（指示器）",           suffix:"-scope", level:2},
  {word:"otoscope",       meaning:"耳鏡",                  etymology:"oto（耳）+ scope（観察器）",              suffix:"-scope", level:3},
  {word:"dermoscope",     meaning:"皮膚鏡",                etymology:"dermo（皮膚）+ scope（観察器）",           suffix:"-scope", level:3},
  {word:"angioscope",     meaning:"血管鏡",                etymology:"angio（血管）+ scope（観察器）",           suffix:"-scope", level:3},
  {word:"sigmoidoscope",  meaning:"S状結腸鏡",             etymology:"sigmoid（S字形）+ scope（観察器）",        suffix:"-scope", level:3},
  {word:"bioscope",       meaning:"生体観察装置・古い映写機",etymology:"bio（生命）+ scope（観察器）",            suffix:"-scope", level:2},

  // ── -cracy（支配・政体） ──────────────────────
  {word:"nomocracy",      meaning:"法治政体・法律による支配",etymology:"nomo（法律）+ cracy（支配）",             suffix:"-cracy", level:3},
  {word:"mobocracy",      meaning:"暴民政治・群衆支配",    etymology:"mob（群衆）+ cracy（支配）",              suffix:"-cracy", level:3},
  {word:"timocracy",      meaning:"名誉政体・財産政体",    etymology:"timo（名誉・価値）+ cracy（支配）",       suffix:"-cracy", level:3},
  {word:"neocracy",       meaning:"新支配階級による統治",  etymology:"neo（新しい）+ cracy（支配）",            suffix:"-cracy", level:3},
  {word:"geniocracy",     meaning:"知的エリートによる支配", etymology:"genio（才知）+ cracy（支配）",            suffix:"-cracy", level:3},
  {word:"biocracy",       meaning:"生命・自然原理による統治",etymology:"bio（生命）+ cracy（支配）",             suffix:"-cracy", level:3},
  {word:"ethnocracy",     meaning:"民族支配・民族優位政体", etymology:"ethno（民族）+ cracy（支配）",            suffix:"-cracy", level:3},
  {word:"logocracy",      meaning:"言葉による支配",         etymology:"logo（言葉）+ cracy（支配）",            suffix:"-cracy", level:3},
  {word:"expertocracy",   meaning:"専門家支配",             etymology:"expert（専門家）+ cracy（支配）",         suffix:"-cracy", level:3},
  {word:"pedantocracy",   meaning:"衒学者による支配",       etymology:"pedant（衒学者）+ cracy（支配）",         suffix:"-cracy", level:3},
  {word:"xenocracy",      meaning:"外国人による統治",       etymology:"xeno（外来・外国）+ cracy（支配）",       suffix:"-cracy", level:3},
  {word:"pantisocracy",   meaning:"全員平等の統治",         etymology:"panto（全て）+ iso（等しい）+ cracy（支配）",suffix:"-cracy",level:3},
  {word:"idiotocracy",    meaning:"愚者による支配",         etymology:"idiot（愚者）+ cracy（支配）",            suffix:"-cracy", level:3},
  {word:"hagiocracy",     meaning:"聖人・聖職者による統治", etymology:"hagio（聖なる）+ cracy（支配）",          suffix:"-cracy", level:3},
  {word:"mediocracy",     meaning:"凡庸な人々による支配",   etymology:"medio（中間・平凡）+ cracy（支配）",      suffix:"-cracy", level:3},
  {word:"ergocracy",      meaning:"労働者階級による支配",   etymology:"ergo（仕事・労働）+ cracy（支配）",       suffix:"-cracy", level:3},

  // ── -archy（統治・支配形態） ──────────────────
  {word:"synarchy",       meaning:"共同統治",               etymology:"syn（共に）+ archy（統治）",              suffix:"-archy", level:3},
  {word:"demarchy",       meaning:"無作為選出による統治",   etymology:"dem（人民）+ archy（統治）",              suffix:"-archy", level:3},
  {word:"nomarchy",       meaning:"ノモス（行政区）の統治", etymology:"nomo（地区）+ archy（統治）",             suffix:"-archy", level:3},
  {word:"autarchy",       meaning:"自給自足・専制統治",     etymology:"auto（自己）+ archy（統治）",             suffix:"-archy", level:3},
  {word:"cryptarchy",     meaning:"秘密支配・隠れた政府",   etymology:"crypto（隠れた）+ archy（統治）",         suffix:"-archy", level:3},
  {word:"phylarchy",      meaning:"部族の首長制",           etymology:"phylo（部族）+ archy（統治）",            suffix:"-archy", level:3},
  {word:"squirarchy",     meaning:"地主階級の支配",         etymology:"squir（地主）+ archy（統治）",            suffix:"-archy", level:3},
  {word:"hexarchy",       meaning:"六分統治",               etymology:"hex（六）+ archy（統治）",               suffix:"-archy", level:3},
  {word:"pentarchy",      meaning:"五人統治・五国体制",     etymology:"penta（五）+ archy（統治）",              suffix:"-archy", level:3},
  {word:"ochlocracy",     meaning:"暴民政治（重複回避：-archy文脈で使用）",etymology:"ochlo（群衆）+ archy（支配）",suffix:"-archy",level:3},
  {word:"noocracy",       meaning:"理性・知性による統治",   etymology:"noo（知性・心）+ archy（統治）",          suffix:"-archy", level:3},
  {word:"timarchy",       meaning:"名誉を重んじる支配体制", etymology:"tima（名誉）+ archy（統治）",             suffix:"-archy", level:3},
  {word:"exarchy",        meaning:"総督府・外部代理統治",   etymology:"ex（外）+ archy（統治）",                suffix:"-archy", level:3},
  {word:"chiliarchy",     meaning:"千人隊長の統治",         etymology:"chili（千）+ archy（統治）",              suffix:"-archy", level:3},
  {word:"septarchy",      meaning:"七王国制",               etymology:"sept（七）+ archy（統治）",              suffix:"-archy", level:3},
  {word:"decarchy",       meaning:"十人統治・十人委員会",   etymology:"dec（十）+ archy（統治）",               suffix:"-archy", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
