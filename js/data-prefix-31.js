/**
 * data-prefix-31.js — 接頭語補充35（endo-, ecto-, con-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── endo-（内側・内部） ──────────────────
  {word:"endoscopy",       meaning:"内視鏡検査",                 etymology:"endo（内側）+ scopy（観察）",                  prefix:"endo-", level:1},
  {word:"endothelium",     meaning:"内皮・内皮細胞層",            etymology:"endo（内側）+ thelium（乳頭状突起）",          prefix:"endo-", level:3},
  {word:"endochondral",    meaning:"軟骨内の",                   etymology:"endo（内側）+ chondral（軟骨の）",             prefix:"endo-", level:3},
  {word:"endocannabinoid", meaning:"内因性カンナビノイド",        etymology:"endo（内側）+ cannabinoid（大麻成分）",        prefix:"endo-", level:3},
  {word:"endoplasmic",     meaning:"内形質の",                   etymology:"endo（内側）+ plasmic（形質の）",              prefix:"endo-", level:2},
  {word:"endotoxin",       meaning:"内毒素",                     etymology:"endo（内側）+ toxin（毒素）",                  prefix:"endo-", level:2},
  {word:"endocannibalism", meaning:"内部共食い行為",              etymology:"endo（内側）+ cannibalism（共食い）",          prefix:"endo-", level:3},
  {word:"endothelioma",    meaning:"内皮腫",                     etymology:"endo（内側）+ thelioma（腫瘍）",              prefix:"endo-", level:3},
  {word:"endoluminal",     meaning:"管腔内の",                   etymology:"endo（内側）+ luminal（管腔の）",              prefix:"endo-", level:3},
  {word:"endovascular",    meaning:"血管内の",                   etymology:"endo（内側）+ vascular（血管の）",             prefix:"endo-", level:2},
  {word:"endogenous",      meaning:"内因性の・体内で生成される",  etymology:"endo（内側）+ genous（生まれる）",             prefix:"endo-", level:2},
  {word:"endodontics",     meaning:"歯内療法学",                 etymology:"endo（内側）+ dontics（歯の治療）",            prefix:"endo-", level:3},

  // ── ecto-（外側・外部） ──────────────────
  {word:"ectodermis",      meaning:"外皮・外層",                 etymology:"ecto（外側）+ dermis（皮膚）",                 prefix:"ecto-", level:2},
  {word:"ectotherm",       meaning:"外温動物・変温動物",          etymology:"ecto（外側）+ therm（熱）",                   prefix:"ecto-", level:2},
  {word:"ectoparasitic",   meaning:"体外寄生の",                 etymology:"ecto（外側）+ parasitic（寄生の）",            prefix:"ecto-", level:2},
  {word:"ectoplasmic",     meaning:"外形質の",                   etymology:"ecto（外側）+ plasmic（形質の）",              prefix:"ecto-", level:2},
  {word:"ectomere",        meaning:"外割球",                     etymology:"ecto（外側）+ mere（部分）",                   prefix:"ecto-", level:3},
  {word:"ectodomain",      meaning:"細胞外ドメイン",              etymology:"ecto（外側）+ domain（領域）",                 prefix:"ecto-", level:3},
  {word:"ectocervix",      meaning:"子宮頸部外側",               etymology:"ecto（外側）+ cervix（子宮頸部）",             prefix:"ecto-", level:3},
  {word:"ectoloph",        meaning:"外側稜",                     etymology:"ecto（外側）+ loph（稜・尾根）",              prefix:"ecto-", level:3},
  {word:"ectopterygoid",   meaning:"外翼状骨",                   etymology:"ecto（外側）+ pterygoid（翼状の）",            prefix:"ecto-", level:3},
  {word:"ectochorial",     meaning:"絨毛膜外層の",               etymology:"ecto（外側）+ chorial（絨毛膜の）",            prefix:"ecto-", level:3},
  {word:"ectoenzyme",      meaning:"細胞外酵素",                 etymology:"ecto（外側）+ enzyme（酵素）",                 prefix:"ecto-", level:2},
  {word:"ectomorphic",     meaning:"外胚葉型体型の",              etymology:"ecto（外側）+ morphic（形の）",               prefix:"ecto-", level:2},

  // ── con-（共に・完全に） ──────────────────
  {word:"congregate",      meaning:"集合する・群れる",            etymology:"con（共に）+ gregate（群れる）",               prefix:"con-", level:1},
  {word:"confound",        meaning:"混乱させる・当惑させる",      etymology:"con（完全に）+ found（注ぎ込む）",             prefix:"con-", level:2},
  {word:"condescend",      meaning:"見下す・恩着せがましくする",  etymology:"con（完全に）+ descend（降りる）",             prefix:"con-", level:2},
  {word:"consternation",   meaning:"驚愕・狼狽",                 etymology:"con（完全に）+ sternation（倒す）",            prefix:"con-", level:3},
  {word:"contiguous",      meaning:"隣接する・接触している",      etymology:"con（共に）+ tiguous（触れる）",              prefix:"con-", level:2},
  {word:"convalescence",   meaning:"回復期・快復",               etymology:"con（完全に）+ valescence（強くなる）",        prefix:"con-", level:2},
  {word:"conflagration",   meaning:"大火災・大混乱",              etymology:"con（完全に）+ flagration（炎）",              prefix:"con-", level:3},
  {word:"contrite",        meaning:"悔恨の・深く後悔した",        etymology:"con（完全に）+ trite（すり減らす）",           prefix:"con-", level:2},
  {word:"condone",         meaning:"許す・大目に見る",            etymology:"con（完全に）+ done（与える）",               prefix:"con-", level:2},
  {word:"conjecture",      meaning:"推測・憶測",                 etymology:"con（共に）+ jectur（投げる）",               prefix:"con-", level:2},
  {word:"consummate",      meaning:"完璧な・完成する",            etymology:"con（完全に）+ summate（最高にする）",         prefix:"con-", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
