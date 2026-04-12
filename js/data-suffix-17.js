/**
 * data-suffix-17.js — 接尾語補充9（-esque, -phyte, -gamy）
 */
(function(){
  var d = [
  // ── -esque（…風の・…に似た） ──────────────────
  {word:"futuresque",     meaning:"未来的な・未来風の",     etymology:"future（未来）+ esque（風の）",            suffix:"-esque", level:2},
  {word:"labyrinthesque", meaning:"迷宮のような",           etymology:"labyrinth（迷宮）+ esque（風の）",         suffix:"-esque", level:3},
  {word:"dreamesque",     meaning:"夢のような",             etymology:"dream（夢）+ esque（風の）",              suffix:"-esque", level:2},
  {word:"heroesque",      meaning:"英雄的な・英雄風の",     etymology:"hero（英雄）+ esque（風の）",             suffix:"-esque", level:2},
  {word:"ghostesque",     meaning:"幽霊のような",           etymology:"ghost（幽霊）+ esque（風の）",            suffix:"-esque", level:2},
  {word:"cliffesque",     meaning:"崖のような・壮大な",     etymology:"cliff（崖）+ esque（風の）",              suffix:"-esque", level:2},
  {word:"monkesque",      meaning:"修道士風の",             etymology:"monk（修道士）+ esque（風の）",           suffix:"-esque", level:2},
  {word:"circusesque",    meaning:"サーカス風の",           etymology:"circus（サーカス）+ esque（風の）",       suffix:"-esque", level:2},
  {word:"saintesque",     meaning:"聖人のような",           etymology:"saint（聖人）+ esque（風の）",            suffix:"-esque", level:2},
  {word:"priestesque",    meaning:"聖職者のような",         etymology:"priest（聖職者）+ esque（風の）",         suffix:"-esque", level:2},
  {word:"mazeesque",      meaning:"迷路のような",           etymology:"maze（迷路）+ esque（風の）",             suffix:"-esque", level:2},
  {word:"mountainesque",  meaning:"山岳的な・山のような",   etymology:"mountain（山）+ esque（風の）",           suffix:"-esque", level:2},
  {word:"cathedrallesque",meaning:"大聖堂のような壮大な",   etymology:"cathedral（大聖堂）+ esque（風の）",      suffix:"-esque", level:3},
  {word:"filmesque",      meaning:"映画的な・映画風の",     etymology:"film（映画）+ esque（風の）",             suffix:"-esque", level:2},
  {word:"operaesque",     meaning:"オペラ風の・大げさな",   etymology:"opera（オペラ）+ esque（風の）",          suffix:"-esque", level:2},
  {word:"theatresque",    meaning:"演劇的な・劇場風の",     etymology:"theatre（劇場）+ esque（風の）",          suffix:"-esque", level:2},

  // ── -phyte（植物・生育体） ──────────────────────
  {word:"bryophyte",      meaning:"蘚苔類（コケ植物）",     etymology:"bryo（コケ）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"pteridophyte",   meaning:"シダ植物",               etymology:"pterido（翼・シダ）+ phyte（植物）",      suffix:"-phyte", level:3},
  {word:"tracheophyte",   meaning:"維管束植物",             etymology:"tracheo（管）+ phyte（植物）",            suffix:"-phyte", level:3},
  {word:"spermatophyte",  meaning:"種子植物",               etymology:"spermat（種）+ phyte（植物）",            suffix:"-phyte", level:3},
  {word:"charophyte",     meaning:"車軸藻類",               etymology:"charo（美しい）+ phyte（植物）",          suffix:"-phyte", level:3},
  {word:"chlorophyte",    meaning:"緑藻類",                 etymology:"chloro（緑）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"rhodophyte",     meaning:"紅藻類",                 etymology:"rhodo（赤・バラ）+ phyte（植物）",        suffix:"-phyte", level:3},
  {word:"phaeophyte",     meaning:"褐藻類",                 etymology:"phaeo（褐色）+ phyte（植物）",            suffix:"-phyte", level:3},
  {word:"xanthophyte",    meaning:"黄緑藻類",               etymology:"xantho（黄色）+ phyte（植物）",           suffix:"-phyte", level:3},
  {word:"chrysophyte",    meaning:"黄金色藻類",             etymology:"chryso（金）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"cyanophyte",     meaning:"シアノバクテリア・藍藻", etymology:"cyano（青）+ phyte（植物様生物）",        suffix:"-phyte", level:3},
  {word:"myxophyte",      meaning:"粘液藻・粘菌様植物",     etymology:"myxo（粘液）+ phyte（植物）",             suffix:"-phyte", level:3},
  {word:"euglenophyte",   meaning:"ユーグレナ藻類",         etymology:"eugleno（ユーグレナ）+ phyte（植物）",    suffix:"-phyte", level:3},
  {word:"dinophyte",      meaning:"渦鞭毛藻類",             etymology:"dino（渦巻く）+ phyte（植物）",           suffix:"-phyte", level:3},
  {word:"pyrrophyte",     meaning:"火炎藻類・渦鞭毛藻",     etymology:"pyrro（火）+ phyte（植物）",              suffix:"-phyte", level:3},
  {word:"microphyte",     meaning:"微小植物・微細藻",       etymology:"micro（小さい）+ phyte（植物）",          suffix:"-phyte", level:2},

  // ── -gamy（婚姻・交配形態） ──────────────────
  {word:"trigamy",        meaning:"三重婚",                 etymology:"tri（三）+ gamy（婚姻）",                 suffix:"-gamy", level:3},
  {word:"syngamy",        meaning:"配偶子合体・接合",       etymology:"syn（一緒）+ gamy（交配）",               suffix:"-gamy", level:3},
  {word:"hologamy",       meaning:"全配偶子接合",           etymology:"holo（全体）+ gamy（交配）",              suffix:"-gamy", level:3},
  {word:"geitonogamy",    meaning:"近隣花受粉・同株他花受粉",etymology:"geitono（隣人）+ gamy（交配）",           suffix:"-gamy", level:3},
  {word:"karyogamy",      meaning:"核融合・核接合",         etymology:"karyo（核）+ gamy（融合・接合）",         suffix:"-gamy", level:3},
  {word:"plasmogamy",     meaning:"細胞質融合",             etymology:"plasmo（細胞質）+ gamy（融合）",          suffix:"-gamy", level:3},
  {word:"dichogamy",      meaning:"雌雄異熟",               etymology:"dicho（二つに分かれた）+ gamy（成熟）",   suffix:"-gamy", level:3},
  {word:"cleistogamy",    meaning:"閉鎖花受粉",             etymology:"kleisto（閉じた）+ gamy（受粉）",         suffix:"-gamy", level:3},
  {word:"xenogamy",       meaning:"他家受粉・異株交配",     etymology:"xeno（外来）+ gamy（交配）",              suffix:"-gamy", level:3},
  {word:"amphigamy",      meaning:"有性生殖（両性配偶子）", etymology:"amphi（両方）+ gamy（交配）",             suffix:"-gamy", level:3},
  {word:"pantagamy",      meaning:"乱婚制・集団婚",         etymology:"panta（全て）+ gamy（婚姻）",             suffix:"-gamy", level:3},
  {word:"protandry",      meaning:"雄性先熟（雄が先に成熟）",etymology:"proto（先）+ andr（雄）+ y（状態）",     suffix:"-gamy", level:3},
  {word:"protogyny",      meaning:"雌性先熟（雌が先に成熟）",etymology:"proto（先）+ gyn（雌）+ y（状態）",      suffix:"-gamy", level:3},
  {word:"anemogamy",      meaning:"風媒受粉",               etymology:"anemo（風）+ gamy（交配）",               suffix:"-gamy", level:3},
  {word:"hydrogamy",      meaning:"水媒受粉",               etymology:"hydro（水）+ gamy（交配）",               suffix:"-gamy", level:3},
  {word:"entomogamy",     meaning:"虫媒受粉",               etymology:"entomo（昆虫）+ gamy（交配）",            suffix:"-gamy", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
