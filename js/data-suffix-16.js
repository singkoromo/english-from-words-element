/**
 * data-suffix-16.js — 接尾語補充8（-ism, -ly, -ate）
 */
(function(){
  var d = [
  // ── -ism（主義・信条・状態） ──────────────────
  {word:"atheism",        meaning:"無神論",               etymology:"a（否定）+ the（神）+ ism（主義）",         suffix:"-ism", level:2},
  {word:"feminism",       meaning:"フェミニズム・女性主義", etymology:"femin（女性）+ ism（主義）",               suffix:"-ism", level:2},
  {word:"humanism",       meaning:"人文主義・人道主義",    etymology:"human（人間）+ ism（主義）",               suffix:"-ism", level:2},
  {word:"liberalism",     meaning:"自由主義",              etymology:"liber（自由）+ al + ism（主義）",          suffix:"-ism", level:2},
  {word:"modernism",      meaning:"現代主義",              etymology:"modern（現代）+ ism（主義）",              suffix:"-ism", level:2},
  {word:"pacifism",       meaning:"平和主義",              etymology:"pacif（平和にする）+ ism（主義）",         suffix:"-ism", level:2},
  {word:"pluralism",      meaning:"多元主義",              etymology:"plur（多数）+ al + ism（主義）",          suffix:"-ism", level:3},
  {word:"populism",       meaning:"ポピュリズム・大衆主義", etymology:"popul（人々）+ ism（主義）",              suffix:"-ism", level:2},
  {word:"rationalism",    meaning:"合理主義",              etymology:"rational（理性）+ ism（主義）",            suffix:"-ism", level:3},
  {word:"romanticism",    meaning:"ロマン主義",            etymology:"romantic（ロマンチック）+ ism（主義）",    suffix:"-ism", level:2},
  {word:"secularism",     meaning:"世俗主義",              etymology:"secular（世俗の）+ ism（主義）",           suffix:"-ism", level:3},
  {word:"stoicism",       meaning:"禁欲主義・ストア哲学",  etymology:"Stoic（ストア哲学）+ ism（主義）",         suffix:"-ism", level:3},
  {word:"terrorism",      meaning:"テロリズム・恐怖政治",  etymology:"terror（恐怖）+ ism（主義・行為）",        suffix:"-ism", level:2},
  {word:"utilitarianism", meaning:"功利主義",              etymology:"utilitar（有用性）+ ian + ism（主義）",    suffix:"-ism", level:3},
  {word:"vegetarianism",  meaning:"菜食主義",              etymology:"vegetar（菜食）+ ian + ism（主義）",       suffix:"-ism", level:2},
  {word:"Buddhism",       meaning:"仏教",                  etymology:"Buddh（仏陀）+ ism（宗教・主義）",         suffix:"-ism", level:1},
  {word:"imperialism",    meaning:"帝国主義",              etymology:"imperial（帝国の）+ ism（主義）",          suffix:"-ism", level:3},

  // ── -ly（副詞形成） ──────────────────────────
  {word:"firmly",         meaning:"しっかりと・断固として", etymology:"firm（固い）+ ly（副詞）",                suffix:"-ly",  level:1},
  {word:"gently",         meaning:"優しく・穏やかに",       etymology:"gentle（優しい）+ ly（副詞）",             suffix:"-ly",  level:0},
  {word:"boldly",         meaning:"大胆に・堂々と",         etymology:"bold（大胆な）+ ly（副詞）",              suffix:"-ly",  level:1},
  {word:"deeply",         meaning:"深く・心から",           etymology:"deep（深い）+ ly（副詞）",                suffix:"-ly",  level:0},
  {word:"calmly",         meaning:"穏やかに・冷静に",       etymology:"calm（穏やかな）+ ly（副詞）",            suffix:"-ly",  level:1},
  {word:"widely",         meaning:"広く・大いに",           etymology:"wide（広い）+ ly（副詞）",                suffix:"-ly",  level:0},
  {word:"rarely",         meaning:"めったに～しない",        etymology:"rare（まれな）+ ly（副詞）",              suffix:"-ly",  level:1},
  {word:"softly",         meaning:"柔らかく・静かに",       etymology:"soft（柔らかい）+ ly（副詞）",            suffix:"-ly",  level:0},
  {word:"strongly",       meaning:"強く・力強く",           etymology:"strong（強い）+ ly（副詞）",              suffix:"-ly",  level:0},
  {word:"nearly",         meaning:"ほぼ・もう少しで",       etymology:"near（近い）+ ly（副詞）",                suffix:"-ly",  level:0},
  {word:"harshly",        meaning:"厳しく・荒々しく",       etymology:"harsh（厳しい）+ ly（副詞）",             suffix:"-ly",  level:1},
  {word:"freely",         meaning:"自由に・気軽に",         etymology:"free（自由な）+ ly（副詞）",              suffix:"-ly",  level:0},
  {word:"kindly",         meaning:"親切に・どうか",         etymology:"kind（親切な）+ ly（副詞）",              suffix:"-ly",  level:0},
  {word:"loudly",         meaning:"大声で・騒々しく",       etymology:"loud（大きな声の）+ ly（副詞）",          suffix:"-ly",  level:0},
  {word:"truly",          meaning:"本当に・真に",           etymology:"true（真実の）+ ly（副詞）",              suffix:"-ly",  level:0},
  {word:"slowly",         meaning:"ゆっくりと",             etymology:"slow（遅い）+ ly（副詞）",                suffix:"-ly",  level:0},

  // ── -ate（動詞・形容詞形成） ──────────────────
  {word:"educate",        meaning:"教育する",              etymology:"educ（導く）+ ate（動詞）",               suffix:"-ate", level:1},
  {word:"locate",         meaning:"位置を特定する",         etymology:"loc（場所）+ ate（動詞）",                suffix:"-ate", level:1},
  {word:"isolate",        meaning:"孤立させる・隔離する",   etymology:"insul（島）+ ate（動詞）",                suffix:"-ate", level:1},
  {word:"motivate",       meaning:"動機づける",             etymology:"motiv（動機）+ ate（動詞）",              suffix:"-ate", level:1},
  {word:"narrate",        meaning:"語る・物語る",           etymology:"narr（語る）+ ate（動詞）",               suffix:"-ate", level:2},
  {word:"navigate",       meaning:"航海する・操縦する",     etymology:"navig（船で渡る）+ ate（動詞）",          suffix:"-ate", level:1},
  {word:"originate",      meaning:"起源を持つ・生じる",     etymology:"origin（起源）+ ate（動詞）",             suffix:"-ate", level:2},
  {word:"radiate",        meaning:"放射する・輝く",         etymology:"radi（光線）+ ate（動詞）",               suffix:"-ate", level:2},
  {word:"regulate",       meaning:"規制する・調整する",     etymology:"regul（規則）+ ate（動詞）",              suffix:"-ate", level:1},
  {word:"simulate",       meaning:"模擬する・シミュレートする",etymology:"simul（似せる）+ ate（動詞）",          suffix:"-ate", level:2},
  {word:"stimulate",      meaning:"刺激する・促進する",     etymology:"stimul（刺激）+ ate（動詞）",             suffix:"-ate", level:2},
  {word:"terminate",      meaning:"終わらせる・終了する",   etymology:"termin（端・終わり）+ ate（動詞）",       suffix:"-ate", level:2},
  {word:"tolerate",       meaning:"耐える・容認する",       etymology:"toler（我慢する）+ ate（動詞）",          suffix:"-ate", level:2},
  {word:"medicate",       meaning:"薬で治療する",           etymology:"medic（薬・医療）+ ate（動詞）",          suffix:"-ate", level:2},
  {word:"recreate",       meaning:"再創造する・気晴らしをする",etymology:"re（再び）+ creat（作る）+ ate（動詞）",suffix:"-ate", level:2},
  {word:"placate",        meaning:"なだめる・怒りを鎮める", etymology:"plac（なだめる）+ ate（動詞）",           suffix:"-ate", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
