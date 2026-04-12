/**
 * data-prefix-18.js — 接頭語補充8（pseudo-, bene-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── pseudo-（偽・疑似） ──────────────────
  {word:"pseudoallele",   meaning:"擬似対立遺伝子",              etymology:"pseudo（偽・疑似）+ allele（対立遺伝子）",       prefix:"pseudo-", level:3},
  {word:"pseudobulb",     meaning:"偽球茎・蘭などの肥大茎",      etymology:"pseudo（偽）+ bulb（球根）",                    prefix:"pseudo-", level:3},
  {word:"pseudocarp",     meaning:"偽果・偽の果実",              etymology:"pseudo（偽）+ carp（果実）",                    prefix:"pseudo-", level:3},
  {word:"pseudocereal",   meaning:"擬似穀物（そば・キヌアなど）",etymology:"pseudo（偽）+ cereal（穀物）",                  prefix:"pseudo-", level:2},
  {word:"pseudoepigraph", meaning:"偽書・作者不詳の書物",        etymology:"pseudo（偽）+ epigraph（書物・碑文）",          prefix:"pseudo-", level:3},
  {word:"pseudoknot",     meaning:"擬似結び目（RNA構造）",       etymology:"pseudo（疑似）+ knot（結び目）",               prefix:"pseudo-", level:3},
  {word:"pseudopodium",   meaning:"偽足・アメーバの突起",        etymology:"pseudo（偽）+ podium（足）",                    prefix:"pseudo-", level:3},
  {word:"pseudosphere",   meaning:"偽球面・擬球面",              etymology:"pseudo（偽）+ sphere（球）",                    prefix:"pseudo-", level:3},
  {word:"pseudoscalar",   meaning:"擬スカラー（物理学）",        etymology:"pseudo（疑似）+ scalar（スカラー量）",          prefix:"pseudo-", level:3},
  {word:"pseudocide",     meaning:"自殺偽装・偽の死",            etymology:"pseudo（偽）+ cide（殺す・死）",               prefix:"pseudo-", level:3},
  {word:"pseudoarthrosis",meaning:"偽関節・骨折不癒合",          etymology:"pseudo（偽）+ arthrosis（関節）",              prefix:"pseudo-", level:3},
  {word:"pseudonymous",   meaning:"偽名の・ペンネームを使う",    etymology:"pseudo（偽）+ onymous（名前の）",              prefix:"pseudo-", level:2},
  {word:"pseudomorphism", meaning:"偽形・外形が変化した鉱物",    etymology:"pseudo（偽）+ morphism（形態）",               prefix:"pseudo-", level:3},
  {word:"pseudoscorpion", meaning:"偽サソリ・コブトガリダニ",    etymology:"pseudo（偽）+ scorpion（サソリ）",              prefix:"pseudo-", level:3},
  {word:"pseudopatient",  meaning:"偽患者・実験のための患者役",  etymology:"pseudo（偽）+ patient（患者）",                 prefix:"pseudo-", level:2},
  {word:"pseudovector",   meaning:"擬ベクトル（物理学）",        etymology:"pseudo（疑似）+ vector（ベクトル）",            prefix:"pseudo-", level:3},
  {word:"pseudohistory",  meaning:"偽史・作り話の歴史",          etymology:"pseudo（偽）+ history（歴史）",                 prefix:"pseudo-", level:2},
  {word:"pseudopalate",   meaning:"偽口蓋・偽の上顎",            etymology:"pseudo（偽）+ palate（口蓋・上顎）",           prefix:"pseudo-", level:3},
  {word:"pseudologue",    meaning:"病的虚言者・慢性的嘘つき",    etymology:"pseudo（偽）+ logue（話す・語る）",             prefix:"pseudo-", level:3},

  // ── bene-（良い・善） ──────────────────
  {word:"benefaction",    meaning:"善行・慈善行為",              etymology:"bene（良い）+ faction（行為・作ること）",       prefix:"bene-", level:2},
  {word:"benevolently",   meaning:"慈悲深く・温かく",            etymology:"bene（良い）+ volently（望む）",               prefix:"bene-", level:2},
  {word:"beneficially",   meaning:"有益に・役立つように",        etymology:"bene（良い）+ ficially（行う）",               prefix:"bene-", level:2},
  {word:"benefactress",   meaning:"女性の恩人・女性の寄付者",    etymology:"bene（良い）+ factress（行う女性）",            prefix:"bene-", level:2},
  {word:"beneficiation",  meaning:"選鉱・鉱石の選別精製",       etymology:"bene（良い）+ ficiation（行うこと）",           prefix:"bene-", level:3},
  {word:"benignity",      meaning:"優しさ・慈悲深さ",            etymology:"bene（良い）+ gnity（生まれ持つ性質）",         prefix:"bene-", level:3},
  {word:"benison",        meaning:"祝福・神の恵み",              etymology:"bene（良い）+ son（音・声）→良い言葉",          prefix:"bene-", level:3},
  {word:"benevolency",    meaning:"善意・博愛心",                etymology:"bene（良い）+ volency（望む意志）",             prefix:"bene-", level:2},
  {word:"benignantly",    meaning:"優しく・慈悲深く",            etymology:"bene（良い）+ gnantly（性質）",                prefix:"bene-", level:3},
  {word:"beneplacito",    meaning:"ご随意に・お任せして（音楽）",etymology:"bene（良い）+ placito（喜ばせる）",            prefix:"bene-", level:3},
  {word:"benefice",       meaning:"聖職禄・教会の収入付き職位",  etymology:"bene（良い）+ fice（行為・仕事）",              prefix:"bene-", level:3},
  {word:"benedicite",     meaning:"恵みを与えよ（典礼の祈り）",  etymology:"bene（良い）+ dicite（言え・命じよ）",          prefix:"bene-", level:3},
  {word:"benefiting",     meaning:"恩恵を受けている・利益を得る",etymology:"bene（良い）+ fitting（適合する）",            prefix:"bene-", level:1},
  {word:"benignly",       meaning:"優しく・穏やかに",            etymology:"bene（良い）+ gnly（生まれ持つ性質）",          prefix:"bene-", level:2},
  {word:"beneficed",      meaning:"聖職禄を持つ・収入付き職を持つ",etymology:"bene（良い）+ ficed（行為の）",              prefix:"bene-", level:3},
  {word:"benigness",      meaning:"温厚さ・穏やかさ",            etymology:"bene（良い）+ gnness（性質）",                 prefix:"bene-", level:3},
  {word:"benedictal",     meaning:"祝福の・祝福に関する",        etymology:"bene（良い）+ dictal（言葉の）",               prefix:"bene-", level:3},
  {word:"benefactorship", meaning:"恩人の地位・後援者の立場",   etymology:"bene（良い）+ factorship（行う人の地位）",      prefix:"bene-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
