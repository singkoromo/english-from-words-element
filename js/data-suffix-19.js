/**
 * data-suffix-19.js — 接尾語補充11（-less, -fy, -ity）
 */
(function(){
  var d = [
  // ── -less（…のない） ──────────────────────────
  {word:"powerless",      meaning:"無力な・力のない",       etymology:"power（力）+ less（ない）",                suffix:"-less", level:1},
  {word:"joyless",        meaning:"喜びのない・楽しみのない",etymology:"joy（喜び）+ less（ない）",                suffix:"-less", level:1},
  {word:"motionless",     meaning:"動きのない・静止した",   etymology:"motion（動き）+ less（ない）",             suffix:"-less", level:1},
  {word:"painless",       meaning:"苦痛のない・無痛の",     etymology:"pain（苦痛）+ less（ない）",               suffix:"-less", level:1},
  {word:"nameless",       meaning:"名前のない・無名の",     etymology:"name（名前）+ less（ない）",               suffix:"-less", level:1},
  {word:"aimless",        meaning:"目標のない・当てのない", etymology:"aim（目標）+ less（ない）",               suffix:"-less", level:1},
  {word:"fearless",       meaning:"恐れのない・大胆な",     etymology:"fear（恐れ）+ less（ない）",               suffix:"-less", level:1},
  {word:"limitless",      meaning:"限りのない・無限の",     etymology:"limit（限界）+ less（ない）",              suffix:"-less", level:1},
  {word:"shapeless",      meaning:"形のない・不定形の",     etymology:"shape（形）+ less（ない）",               suffix:"-less", level:1},
  {word:"weightless",     meaning:"無重力の・重さのない",   etymology:"weight（重さ）+ less（ない）",             suffix:"-less", level:1},
  {word:"worthless",      meaning:"無価値の・役に立たない", etymology:"worth（価値）+ less（ない）",              suffix:"-less", level:1},
  {word:"harmless",       meaning:"害のない・無害な",       etymology:"harm（害）+ less（ない）",                suffix:"-less", level:0},
  {word:"guiltless",      meaning:"罪のない・無実の",       etymology:"guilt（罪）+ less（ない）",               suffix:"-less", level:2},
  {word:"breathless",     meaning:"息のきれた・息をのむ",   etymology:"breath（息）+ less（ない）",              suffix:"-less", level:1},
  {word:"faultless",      meaning:"欠点のない・完璧な",     etymology:"fault（欠点）+ less（ない）",             suffix:"-less", level:2},

  // ── -fy（～にする・～化する） ──────────────────
  {word:"purify",         meaning:"浄化する・純化する",     etymology:"pur（清純）+ fy（～にする）",              suffix:"-fy",  level:1},
  {word:"modify",         meaning:"修正する・変更する",     etymology:"mod（方式）+ ify（～にする）",             suffix:"-fy",  level:1},
  {word:"pacify",         meaning:"なだめる・平和にする",   etymology:"pac（平和）+ ify（～にする）",             suffix:"-fy",  level:2},
  {word:"specify",        meaning:"明記する・指定する",     etymology:"spec（種類）+ ify（～にする）",            suffix:"-fy",  level:1},
  {word:"testify",        meaning:"証言する・立証する",     etymology:"test（証人）+ ify（～にする）",            suffix:"-fy",  level:2},
  {word:"codify",         meaning:"成文化する・体系化する", etymology:"cod（法典）+ ify（～にする）",             suffix:"-fy",  level:2},
  {word:"fortify",        meaning:"強化する・要塞化する",   etymology:"fort（強さ）+ ify（～にする）",            suffix:"-fy",  level:2},
  {word:"glorify",        meaning:"称賛する・美化する",     etymology:"glori（栄光）+ fy（～にする）",           suffix:"-fy",  level:2},
  {word:"gratify",        meaning:"満足させる・喜ばせる",   etymology:"grat（喜び）+ ify（～にする）",            suffix:"-fy",  level:2},
  {word:"intensify",      meaning:"強化する・激化する",     etymology:"intens（激しい）+ ify（～にする）",        suffix:"-fy",  level:2},
  {word:"beautify",       meaning:"美化する・きれいにする", etymology:"beaut（美しい）+ ify（～にする）",         suffix:"-fy",  level:1},
  {word:"deify",          meaning:"神格化する・崇拝する",   etymology:"dei（神）+ fy（～にする）",               suffix:"-fy",  level:3},
  {word:"diversify",      meaning:"多様化する・分散する",   etymology:"divers（様々な）+ ify（～にする）",        suffix:"-fy",  level:2},
  {word:"horrify",        meaning:"恐怖させる・ぞっとさせる",etymology:"horr（恐怖）+ ify（～にする）",           suffix:"-fy",  level:2},
  {word:"solidify",       meaning:"固める・凝固させる",     etymology:"solid（固体）+ ify（～にする）",           suffix:"-fy",  level:2},

  // ── -ity（抽象的な性質・状態） ──────────────────
  {word:"possibility",    meaning:"可能性",                 etymology:"possibil（できる）+ ity（性質）",          suffix:"-ity", level:1},
  {word:"sensitivity",    meaning:"敏感さ・感受性",         etymology:"sensitiv（感じやすい）+ ity（性質）",      suffix:"-ity", level:2},
  {word:"stability",      meaning:"安定性・安定",           etymology:"stabil（安定した）+ ity（性質）",          suffix:"-ity", level:1},
  {word:"complexity",     meaning:"複雑さ",                 etymology:"complex（複雑な）+ ity（性質）",           suffix:"-ity", level:2},
  {word:"productivity",   meaning:"生産性",                 etymology:"productiv（生産的な）+ ity（性質）",       suffix:"-ity", level:2},
  {word:"solidarity",     meaning:"連帯・団結",             etymology:"solidar（連帯した）+ ity（性質）",         suffix:"-ity", level:2},
  {word:"opportunity",    meaning:"機会・チャンス",         etymology:"opportun（好都合な）+ ity（状態）",        suffix:"-ity", level:1},
  {word:"responsibility", meaning:"責任・責務",             etymology:"responsibil（応答できる）+ ity（性質）",   suffix:"-ity", level:1},
  {word:"prosperity",     meaning:"繁栄・成功",             etymology:"prosper（繁栄する）+ ity（状態）",         suffix:"-ity", level:2},
  {word:"objectivity",    meaning:"客観性",                 etymology:"objectiv（客観的な）+ ity（性質）",        suffix:"-ity", level:2},
  {word:"capability",     meaning:"能力・才能",             etymology:"capabil（できる）+ ity（性質）",           suffix:"-ity", level:1},
  {word:"visibility",     meaning:"可視性・視認性",         etymology:"visibil（見える）+ ity（性質）",           suffix:"-ity", level:2},
  {word:"personality",    meaning:"個性・人格",             etymology:"personal（個人の）+ ity（性質）",          suffix:"-ity", level:1},
  {word:"formality",      meaning:"形式・慣例",             etymology:"formal（形式の）+ ity（性質）",           suffix:"-ity", level:2},
  {word:"flexibility",    meaning:"柔軟性・融通",           etymology:"flexibil（曲げられる）+ ity（性質）",      suffix:"-ity", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
