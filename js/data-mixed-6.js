/**
 * data-mixed-6.js — SAT頻出語
 * 形式: { word, meaning, etymology, category, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── SAT頻出語 ───────────────
  {word:"abridge",       meaning:"要約する・短縮する",            etymology:"a（〜に）+ bridge（橋）→橋渡しを縮める",  category:"SAT", level:2},
  {word:"abstain",       meaning:"控える・自制する",              etymology:"abs（離れて）+ tain（持つ）→持ち続けない",category:"SAT", level:2},
  {word:"acclaim",       meaning:"称賛する・歓声を上げる",         etymology:"ac（〜に）+ claim（叫ぶ）",               category:"SAT", level:2},
  {word:"accolade",      meaning:"称賛・賞賛",                   etymology:"ac（〜に）+ colade（首）→首にかける勲章",  category:"SAT", level:2},
  {word:"adamant",       meaning:"断固とした・頑固な",            etymology:"adam（征服されない）+ ant（〜な）",        category:"SAT", level:2},
  {word:"adept",         meaning:"熟達した・達人",               etymology:"ad（〜に）+ ept（適する）",              category:"SAT", level:2},
  {word:"admonish",      meaning:"訓戒する・警告する",            etymology:"ad（〜に）+ monish（警告する）",           category:"SAT", level:2},
  {word:"adversity",     meaning:"逆境・困難",                   etymology:"ad（〜に）+ vers（反対）+ ity（状態）",   category:"SAT", level:2},
  {word:"aesthetic",     meaning:"美的な・審美的な",              etymology:"aesth（感じる）+ etic（〜の）",           category:"SAT", level:2},
  {word:"affable",       meaning:"愛想がよい・感じのいい",          etymology:"af（〜に）+ fabl（話す）+ e（できる）",   category:"SAT", level:2},
  {word:"aggregate",     meaning:"集合・合計する",               etymology:"ag（〜に）+ greg（群れ）+ ate（する）",   category:"SAT", level:2},
  {word:"aloof",         meaning:"よそよそしい・冷淡な",           etymology:"a（〜に）+ loof（風上）→離れた",         category:"SAT", level:2},
  {word:"altruistic",    meaning:"利他的な",                     etymology:"altru（他人）+ istic（〜な）",            category:"SAT", level:2},
  {word:"ambivalent",    meaning:"矛盾した感情を持つ",             etymology:"ambi（両方）+ val（価値）+ ent（〜な）", category:"SAT", level:2},
  {word:"amend",         meaning:"修正する・改正する",             etymology:"a（〜に）+ mend（改善する）",             category:"SAT", level:1},
  {word:"amiable",       meaning:"親切な・好感の持てる",           etymology:"am（愛する）+ iable（できる）",           category:"SAT", level:2},
  {word:"amorphous",     meaning:"不定形の・漠然とした",           etymology:"a（否定）+ morph（形）+ ous（〜な）",    category:"SAT", level:3},
  {word:"auspicious",    meaning:"縁起のよい・幸先のよい",          etymology:"aus（鳥）+ spic（見る）+ ious（〜な）→鳥占いで吉",category:"SAT",level:3},
  {word:"banal",         meaning:"陳腐な・ありきたりの",           etymology:"banal（封建的義務）→平凡な",              category:"SAT", level:3},
  {word:"benevolent",    meaning:"慈悲深い・善意のある",           etymology:"bene（善い）+ vol（意志）+ ent（〜な）",  category:"SAT", level:2},
  {word:"blatant",       meaning:"露骨な・あからさまな",           etymology:"blat（鳴く）+ ant（〜な）",              category:"SAT", level:2},
  {word:"candid",        meaning:"率直な・正直な",                etymology:"cand（白い）+ id（〜の）",               category:"SAT", level:2},
  {word:"candor",        meaning:"率直さ・誠実さ",               etymology:"cand（白い）+ or（状態）",               category:"SAT", level:2},
  {word:"capricious",    meaning:"気まぐれな",                   etymology:"capr（ヤギ）+ icious（〜な）",            category:"SAT", level:3},
  {word:"censure",       meaning:"非難する・批判する",             etymology:"cens（評価する）+ ure（行為）→否定的評価",category:"SAT", level:2},
  {word:"circumspect",   meaning:"慎重な・用心深い",              etymology:"circum（周囲を）+ spect（見る）",         category:"SAT", level:3},
  {word:"clandestine",   meaning:"秘密の・内密の",               etymology:"clam（秘密）+ destine（定められた）",      category:"SAT", level:3},
  {word:"coerce",        meaning:"強制する・強いる",              etymology:"co（共に）+ erce（閉じ込める）",          category:"SAT", level:2},
  {word:"compel",        meaning:"強いる・余儀なくさせる",          etymology:"com（完全に）+ pel（駆る）",              category:"SAT", level:2},
  {word:"complacent",    meaning:"自己満足の・のんきな",            etymology:"com（完全に）+ plac（喜ばせる）+ ent（〜な）",category:"SAT",level:2},
  {word:"conciliate",    meaning:"和解させる・なだめる",           etymology:"con（共に）+ cili（まつげ）+ ate（する）→目を細めて見る",category:"SAT",level:3},
  {word:"condescend",    meaning:"見下す・恩着せがましく振る舞う",  etymology:"con（完全に）+ de（下に）+ scend（登る）→降りてくる",category:"SAT",level:3},
  {word:"conjecture",    meaning:"推測・憶測する",               etymology:"con（共に）+ jectur（投げる）",           category:"SAT", level:2},
  {word:"conspicuous",   meaning:"目立つ・顕著な",               etymology:"con（完全に）+ spicuous（見える）",       category:"SAT", level:2},
  {word:"contempt",      meaning:"軽蔑・侮辱",                   etymology:"con（完全に）+ tempt（試す）→完全に否定",  category:"SAT", level:2},
  {word:"contentious",   meaning:"論争好きな・争いの的な",          etymology:"con（共に）+ tent（つかむ）+ ious（〜な）",category:"SAT",level:3},
  {word:"contrite",      meaning:"悔い改めた・後悔した",            etymology:"con（完全に）+ trite（すり減った）",       category:"SAT", level:3},
  {word:"controversy",   meaning:"論争・議論",                   etymology:"contro（反対に）+ vers（回る）+ y（状態）",category:"SAT",level:2},
  {word:"credulous",     meaning:"信じやすい・だまされやすい",       etymology:"cred（信じる）+ ulous（傾向がある）",     category:"SAT", level:3},
  {word:"cryptic",       meaning:"謎めいた・難解な",              etymology:"crypt（隠れた）+ ic（〜の）",            category:"SAT", level:2},
  {word:"cynical",       meaning:"冷笑的な・皮肉な",              etymology:"cynic（犬のような）+ al（〜の）",         category:"SAT", level:2},
  {word:"dauntless",     meaning:"勇敢な・恐れを知らない",          etymology:"daunt（おじけづく）+ less（〜がない）",   category:"SAT", level:2},
  {word:"debilitate",    meaning:"弱らせる・衰弱させる",            etymology:"de（否定）+ bilit（強い）+ ate（する）", category:"SAT", level:3},
  {word:"decorum",       meaning:"礼儀正しさ・品位",              etymology:"decor（飾り）+ um（状態）",              category:"SAT", level:3},
  {word:"defer",         meaning:"延期する・従う",               etymology:"de（離れて）+ fer（運ぶ）→運んで先延ばし",category:"SAT", level:2},
  {word:"deference",     meaning:"尊重・敬意",                   etymology:"defer（従う）+ ence（状態）",            category:"SAT", level:3},
  {word:"deride",        meaning:"嘲笑する",                     etymology:"de（否定）+ ride（笑い）→嘲る",          category:"SAT", level:3},
  {word:"despondent",    meaning:"意気消沈した",                  etymology:"de（下に）+ spond（約束する）+ ent（〜な）",category:"SAT",level:3},
  {word:"deter",         meaning:"思いとどまらせる・妨げる",        etymology:"de（離れて）+ ter（脅す）",              category:"SAT", level:2},
  {word:"devious",       meaning:"遠回りの・策略的な",             etymology:"de（離れて）+ via（道）+ ous（〜な）",   category:"SAT", level:2},
  {word:"diligence",     meaning:"勤勉さ・熱心さ",               etymology:"dil（好む）+ ig（選ぶ）+ ence（状態）",   category:"SAT", level:1},
  ];
  if(typeof window !== 'undefined' && window.VOCAB_DATA) window.VOCAB_DATA.push(...d);
  else if(typeof module !== 'undefined') module.exports = d;
})();
