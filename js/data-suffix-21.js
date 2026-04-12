/**
 * data-suffix-21.js — 接尾語補充13（-pathy, -ance, -cide）
 */
(function(){
  var d = [
  // ── -pathy（病気・感情・療法） ──────────────────
  {word:"retinopathy",    meaning:"網膜症・網膜疾患",       etymology:"retino（網膜）+ pathy（疾患）",            suffix:"-pathy", level:3},
  {word:"vasculopathy",   meaning:"血管障害",               etymology:"vasculo（血管）+ pathy（疾患）",           suffix:"-pathy", level:3},
  {word:"coagulopathy",   meaning:"凝固障害",               etymology:"coagulo（凝固）+ pathy（疾患）",           suffix:"-pathy", level:3},
  {word:"encephalopathy", meaning:"脳症・脳障害",           etymology:"encephalo（脳）+ pathy（疾患）",           suffix:"-pathy", level:3},
  {word:"arthropathy",    meaning:"関節症・関節疾患",       etymology:"arthro（関節）+ pathy（疾患）",            suffix:"-pathy", level:3},
  {word:"hepatopathy",    meaning:"肝臓疾患",               etymology:"hepato（肝臓）+ pathy（疾患）",            suffix:"-pathy", level:3},
  {word:"enteropathy",    meaning:"腸疾患・腸障害",         etymology:"entero（腸）+ pathy（疾患）",              suffix:"-pathy", level:3},
  {word:"myelopathy",     meaning:"脊髄障害",               etymology:"myelo（脊髄）+ pathy（疾患）",             suffix:"-pathy", level:3},
  {word:"mastopathy",     meaning:"乳腺疾患",               etymology:"masto（乳房）+ pathy（疾患）",             suffix:"-pathy", level:3},
  {word:"ophthalmopathy", meaning:"眼疾患・眼障害",         etymology:"ophthalmo（眼）+ pathy（疾患）",           suffix:"-pathy", level:3},
  {word:"fetopathy",      meaning:"胎児疾患",               etymology:"feto（胎児）+ pathy（疾患）",              suffix:"-pathy", level:3},
  {word:"pleuropathy",    meaning:"胸膜疾患",               etymology:"pleuro（胸膜）+ pathy（疾患）",            suffix:"-pathy", level:3},
  {word:"lymphopathy",    meaning:"リンパ疾患",             etymology:"lympho（リンパ）+ pathy（疾患）",          suffix:"-pathy", level:3},
  {word:"dermopathy",     meaning:"皮膚疾患",               etymology:"dermo（皮膚）+ pathy（疾患）",             suffix:"-pathy", level:3},
  {word:"cytopathy",      meaning:"細胞障害",               etymology:"cyto（細胞）+ pathy（疾患）",              suffix:"-pathy", level:3},

  // ── -ance（状態・性質・行為） ──────────────────
  {word:"allegiance",     meaning:"忠誠・忠義",             etymology:"allegian（主君に従う）+ ce（状態）",       suffix:"-ance", level:2},
  {word:"endurance",      meaning:"忍耐・耐久力",           etymology:"endur（耐える）+ ance（状態）",            suffix:"-ance", level:2},
  {word:"governance",     meaning:"統治・ガバナンス",       etymology:"govern（統治する）+ ance（状態）",         suffix:"-ance", level:2},
  {word:"insurance",      meaning:"保険・保証",             etymology:"insur（保証する）+ ance（行為）",          suffix:"-ance", level:1},
  {word:"maintenance",    meaning:"維持・保守",             etymology:"mainten（保つ）+ ance（行為）",            suffix:"-ance", level:2},
  {word:"substance",      meaning:"物質・実質",             etymology:"sub（下）+ stan（立つ）+ ce（状態）",      suffix:"-ance", level:1},
  {word:"utterance",      meaning:"発言・発声",             etymology:"utter（発する）+ ance（行為）",            suffix:"-ance", level:2},
  {word:"vigilance",      meaning:"警戒・用心",             etymology:"vigil（警戒する）+ ance（状態）",          suffix:"-ance", level:3},
  {word:"inheritance",    meaning:"相続・遺産",             etymology:"inherit（相続する）+ ance（行為）",        suffix:"-ance", level:2},
  {word:"admittance",     meaning:"入場許可・入学許可",     etymology:"admit（認める）+ ance（状態）",            suffix:"-ance", level:2},
  {word:"consonance",     meaning:"調和・一致",             etymology:"con（共に）+ son（音）+ ance（状態）",     suffix:"-ance", level:3},
  {word:"countenance",    meaning:"顔つき・表情",           etymology:"conten（収める）+ ance（状態）",           suffix:"-ance", level:3},
  {word:"acceptance",     meaning:"受け入れ・承認",         etymology:"accept（受け入れる）+ ance（行為）",       suffix:"-ance", level:1},

  // ── -cide（殺すもの・殺害） ──────────────────
  {word:"algicide",       meaning:"藻類駆除剤",             etymology:"alg（藻）+ cide（殺す）",                 suffix:"-cide", level:3},
  {word:"acaricide",      meaning:"ダニ駆除剤",             etymology:"acar（ダニ）+ icide（殺す）",             suffix:"-cide", level:3},
  {word:"biocide",        meaning:"生物農薬・殺生物剤",     etymology:"bio（生物）+ cide（殺す）",               suffix:"-cide", level:2},
  {word:"larvicide",      meaning:"幼虫駆除剤",             etymology:"larv（幼虫）+ icide（殺す）",             suffix:"-cide", level:3},
  {word:"molluscicide",   meaning:"軟体動物駆除剤",         etymology:"mollusc（軟体動物）+ icide（殺す）",      suffix:"-cide", level:3},
  {word:"nematicide",     meaning:"線虫駆除剤",             etymology:"nemat（線虫）+ icide（殺す）",            suffix:"-cide", level:3},
  {word:"rodenticide",    meaning:"殺鼠剤・ネズミ駆除剤",  etymology:"rodent（げっ歯動物）+ icide（殺す）",     suffix:"-cide", level:2},
  {word:"termiticide",    meaning:"シロアリ駆除剤",         etymology:"termit（シロアリ）+ icide（殺す）",       suffix:"-cide", level:3},
  {word:"formicide",      meaning:"アリ駆除剤",             etymology:"formic（アリ）+ icide（殺す）",           suffix:"-cide", level:3},
  {word:"aphicide",       meaning:"アブラムシ駆除剤",       etymology:"aphid（アブラムシ）+ icide（殺す）",      suffix:"-cide", level:3},
  {word:"ovicide",        meaning:"卵駆除剤",               etymology:"ov（卵）+ icide（殺す）",                 suffix:"-cide", level:3},
  {word:"silvicide",      meaning:"森林駆除剤・除木剤",     etymology:"silva（森）+ cide（殺す）",               suffix:"-cide", level:3},
  {word:"pediculicide",   meaning:"シラミ駆除剤",           etymology:"pedicul（シラミ）+ icide（殺す）",        suffix:"-cide", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
