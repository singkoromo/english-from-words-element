/**
 * data-suffix-12.js — 接尾語データ（-ance/-ence, -ency/-ancy, -ity, -ment, -ism, -ize）
 * 形式: { word, meaning, etymology, suffix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [

  // ── -ance/-ence（状態・性質・行為） ──────────────────
  {word:"abundance",         meaning:"豊富・大量",                   etymology:"ab（完全に）+ und（波）+ ance（状態）→溢れんばかりの状態",  suffix:"-ance",   level:1, pos:"名詞"},
  {word:"brilliance",        meaning:"輝き・才気",                   etymology:"brill（光る）+ iance（状態）",                       suffix:"-ance",   level:2, pos:"名詞"},
  {word:"compliance",        meaning:"服従・遵守",                   etymology:"com（共に）+ ply（満たす）+ ance（行為）",            suffix:"-ance",   level:2, pos:"名詞"},
  {word:"elegance",          meaning:"優雅さ・上品さ",               etymology:"eleg（選ぶ）+ ance（状態）",                         suffix:"-ance",   level:1, pos:"名詞"},
  {word:"exuberance",        meaning:"溢れるような元気・豊かさ",     etymology:"ex（外へ）+ uber（豊か）+ ance（状態）",               suffix:"-ance",   level:3, pos:"名詞"},
  {word:"fragrance",         meaning:"芳香・香り",                   etymology:"fragr（香る）+ ance（状態）",                        suffix:"-ance",   level:1, pos:"名詞"},
  {word:"grievance",         meaning:"不満・苦情",                   etymology:"griev（重荷）+ ance（状態）",                        suffix:"-ance",   level:2, pos:"名詞"},
  {word:"ignorance",         meaning:"無知・無学",                   etymology:"ignor（知らない）+ ance（状態）",                     suffix:"-ance",   level:1, pos:"名詞"},
  {word:"insolence",         meaning:"傲慢・無礼",                   etymology:"in（否定）+ soler（慣れている）+ ance（状態）",        suffix:"-ance",   level:3, pos:"名詞"},
  {word:"radiance",          meaning:"輝き・光彩",                   etymology:"radi（光）+ ance（状態）",                           suffix:"-ance",   level:2, pos:"名詞"},
  {word:"resonance",         meaning:"共鳴・反響",                   etymology:"re（再び）+ son（音）+ ance（状態）",                 suffix:"-ance",   level:2, pos:"名詞"},
  {word:"surveillance",      meaning:"監視・監督",                   etymology:"sur（上から）+ veill（見る）+ ance（行為）",           suffix:"-ance",   level:2, pos:"名詞"},
  {word:"tolerance",         meaning:"寛容・耐性",                   etymology:"toler（耐える）+ ance（状態）",                      suffix:"-ance",   level:1, pos:"名詞"},
  {word:"turbulence",        meaning:"乱気流・動乱",                 etymology:"turb（乱す）+ ulence（激しさ）",                      suffix:"-ance",   level:2, pos:"名詞"},
  {word:"vigilance",         meaning:"警戒・用心",                   etymology:"vigil（起きている）+ ance（状態）",                   suffix:"-ance",   level:2, pos:"名詞"},
  {word:"ambivalence",       meaning:"相反する感情・両価性",         etymology:"ambi（両方）+ val（価値）+ ence（状態）",              suffix:"-ence",   level:2, pos:"名詞"},
  {word:"benevolence",       meaning:"善意・博愛",                   etymology:"bene（良い）+ vol（意志）+ ence（状態）",             suffix:"-ence",   level:2, pos:"名詞"},
  {word:"competence",        meaning:"能力・適性",                   etymology:"com（共に）+ pete（求める）+ ence（状態）",            suffix:"-ence",   level:1, pos:"名詞"},
  {word:"confidence",        meaning:"自信・信頼",                   etymology:"con（共に）+ fid（信じる）+ ence（状態）",             suffix:"-ence",   level:0, pos:"名詞"},
  {word:"consequence",       meaning:"結果・重要性",                 etymology:"con（共に）+ sequ（続く）+ ence（状態）",              suffix:"-ence",   level:1, pos:"名詞"},
  {word:"deference",         meaning:"敬意・服従",                   etymology:"de（下に）+ fer（運ぶ）+ ence（状態）→従うこと",       suffix:"-ence",   level:3, pos:"名詞"},
  {word:"defiance",          meaning:"反抗・挑戦",                   etymology:"de（離れて）+ fi（信頼）+ ance（状態）→信頼を壊すこと", suffix:"-ance",   level:2, pos:"名詞"},
  {word:"diligence",         meaning:"勤勉・努力",                   etymology:"di（徹底的に）+ lig（選ぶ）+ ence（状態）",            suffix:"-ence",   level:1, pos:"名詞"},
  {word:"eminence",          meaning:"卓越・傑出",                   etymology:"e（外に）+ min（突き出る）+ ence（状態）",             suffix:"-ence",   level:3, pos:"名詞"},
  {word:"prevalence",        meaning:"普及・流行",                   etymology:"pre（前に）+ val（力）+ ence（状態）",                 suffix:"-ence",   level:2, pos:"名詞"},

  // ── -ency/-ancy（状態・傾向） ──────────────────
  {word:"emergency",         meaning:"緊急事態",                     etymology:"e（外に）+ merg（潜る）+ ency（状態）→突然浮かび上がる事態", suffix:"-ency",   level:0, pos:"名詞"},
  {word:"efficiency",        meaning:"効率・能率",                   etymology:"ef（外に）+ fic（する）+ iency（状態）",               suffix:"-ency",   level:1, pos:"名詞"},
  {word:"urgency",           meaning:"緊急性",                       etymology:"urg（押す）+ ency（状態）",                           suffix:"-ency",   level:1, pos:"名詞"},
  {word:"contingency",       meaning:"偶発性・予備",                 etymology:"con（共に）+ ting（触れる）+ ency（状態）",             suffix:"-ency",   level:2, pos:"名詞"},
  {word:"frequency",         meaning:"頻度・周波数",                 etymology:"frequ（多い）+ ency（状態）",                          suffix:"-ency",   level:1, pos:"名詞"},
  {word:"proficiency",       meaning:"熟達・習熟",                   etymology:"pro（前に）+ fic（する）+ iency（状態）",               suffix:"-ency",   level:2, pos:"名詞"},
  {word:"sufficiency",       meaning:"十分さ",                       etymology:"suf（下から）+ fic（する）+ iency（状態）",             suffix:"-ency",   level:2, pos:"名詞"},
  {word:"dependency",        meaning:"依存・従属",                   etymology:"de（下に）+ pend（ぶら下がる）+ ency（状態）",          suffix:"-ency",   level:1, pos:"名詞"},
  {word:"consistency",       meaning:"一貫性",                       etymology:"con（共に）+ sist（立つ）+ ency（状態）",              suffix:"-ency",   level:1, pos:"名詞"},
  {word:"redundancy",        meaning:"冗長性・余剰",                 etymology:"re（再び）+ und（波）+ ancy（状態）→溢れること",        suffix:"-ancy",   level:2, pos:"名詞"},
  {word:"vacancy",           meaning:"空き・欠員",                   etymology:"vac（空の）+ ancy（状態）",                           suffix:"-ancy",   level:1, pos:"名詞"},
  {word:"complacency",       meaning:"自己満足",                     etymology:"com（完全に）+ plac（喜ばせる）+ ency（状態）",         suffix:"-ency",   level:2, pos:"名詞"},
  {word:"buoyancy",          meaning:"浮力・陽気さ",                 etymology:"bouy（浮く）+ ancy（状態）",                          suffix:"-ancy",   level:2, pos:"名詞"},
  {word:"discrepancy",       meaning:"相違・矛盾",                   etymology:"dis（離れて）+ crep（鳴る）+ ancy（状態）",            suffix:"-ancy",   level:2, pos:"名詞"},
  {word:"supremacy",         meaning:"最高権力・優位",               etymology:"supreme（最高の）+ acy（状態）",                       suffix:"-ancy",   level:2, pos:"名詞"},

  // ── -ity（状態・性質・程度） ──────────────────
  {word:"agility",           meaning:"機敏さ・俊敏性",               etymology:"agil（素早い）+ ity（性質）",                         suffix:"-ity",    level:1, pos:"名詞"},
  {word:"audacity",          meaning:"大胆さ・厚かましさ",           etymology:"audac（大胆な）+ ity（性質）",                        suffix:"-ity",    level:2, pos:"名詞"},
  {word:"brevity",           meaning:"簡潔さ・短さ",                 etymology:"brev（短い）+ ity（性質）",                           suffix:"-ity",    level:2, pos:"名詞"},
  {word:"captivity",         meaning:"捕囚・監禁",                   etymology:"capt（捕まえる）+ ivity（状態）",                     suffix:"-ity",    level:2, pos:"名詞"},
  {word:"dexterity",         meaning:"器用さ・巧みさ",               etymology:"dexter（右手）+ ity（性質）→右手を使う器用さ",          suffix:"-ity",    level:2, pos:"名詞"},
  {word:"elasticity",        meaning:"弾力性・柔軟性",               etymology:"elastic（弾力的な）+ ity（性質）",                    suffix:"-ity",    level:2, pos:"名詞"},
  {word:"enormity",          meaning:"巨大さ・凶悪さ",               etymology:"e（外に）+ norm（規範）+ ity（状態）→規範を超えた状態", suffix:"-ity",    level:2, pos:"名詞"},
  {word:"ferocity",          meaning:"凶暴さ・猛烈さ",               etymology:"feroc（野生の）+ ity（性質）",                        suffix:"-ity",    level:2, pos:"名詞"},
  {word:"flexibility",       meaning:"柔軟性",                       etymology:"flex（曲がる）+ ibility（できる状態）",                suffix:"-ity",    level:1, pos:"名詞"},
  {word:"fragility",         meaning:"脆弱性・壊れやすさ",           etymology:"fragil（壊れやすい）+ ity（状態）",                    suffix:"-ity",    level:1, pos:"名詞"},
  {word:"hostility",         meaning:"敵意・敵対",                   etymology:"hostil（敵の）+ ity（状態）",                         suffix:"-ity",    level:1, pos:"名詞"},
  {word:"humility",          meaning:"謙虚さ",                       etymology:"humil（低い）+ ity（状態）",                          suffix:"-ity",    level:1, pos:"名詞"},
  {word:"immunity",          meaning:"免疫・免責",                   etymology:"im（否定）+ mun（義務）+ ity（状態）→義務を免れること", suffix:"-ity",    level:1, pos:"名詞"},
  {word:"longevity",         meaning:"長命・長寿",                   etymology:"long（長い）+ ev（時代）+ ity（性質）",                suffix:"-ity",    level:2, pos:"名詞"},
  {word:"mobility",          meaning:"移動性・流動性",               etymology:"mobil（動く）+ ity（性質）",                          suffix:"-ity",    level:1, pos:"名詞"},
  {word:"modesty",           meaning:"謙虚さ・慎み",                 etymology:"modes（適度な）+ ty（状態）",                          suffix:"-ity",    level:1, pos:"名詞"},
  {word:"obscurity",         meaning:"不明瞭さ・無名",               etymology:"obscur（暗い）+ ity（状態）",                         suffix:"-ity",    level:2, pos:"名詞"},
  {word:"originality",       meaning:"独創性",                       etymology:"original（原始の）+ ity（性質）",                     suffix:"-ity",    level:1, pos:"名詞"},
  {word:"permeability",      meaning:"透過性",                       etymology:"permeable（通り抜けられる）+ ity（性質）",             suffix:"-ity",    level:3, pos:"名詞"},
  {word:"productivity",      meaning:"生産性",                       etymology:"product（生産物）+ ivity（性質）",                    suffix:"-ity",    level:1, pos:"名詞"},
  {word:"scarcity",          meaning:"不足・希少性",                 etymology:"scarce（乏しい）+ ity（状態）",                       suffix:"-ity",    level:1, pos:"名詞"},
  {word:"sincerity",         meaning:"誠実さ",                       etymology:"sincer（純粋な）+ ity（性質）",                       suffix:"-ity",    level:1, pos:"名詞"},
  {word:"volatility",        meaning:"揮発性・変動性",               etymology:"volat（飛ぶ）+ ility（性質）",                        suffix:"-ity",    level:2, pos:"名詞"},
  {word:"vulnerability",     meaning:"脆弱性・弱点",                 etymology:"vulner（傷）+ ability（できる）→傷つきやすさ",          suffix:"-ity",    level:1, pos:"名詞"},
  {word:"atrocity",          meaning:"残虐行為・残酷さ",             etymology:"atros（残酷な）+ ity（性質）",                        suffix:"-ity",    level:2, pos:"名詞"},

  // ── -ism（主義・思想・行動様式） ──────────────────
  {word:"cynicism",          meaning:"冷笑主義・シニシズム",         etymology:"kyno（犬）+ icism（主義）→犬のような生き方を説いた哲学", suffix:"-ism",    level:2, pos:"名詞"},
  {word:"fatalism",          meaning:"宿命論",                       etymology:"fatal（運命の）+ ism（主義）",                        suffix:"-ism",    level:2, pos:"名詞"},
  {word:"hedonism",          meaning:"快楽主義",                     etymology:"hedone（快楽）+ ism（主義）",                         suffix:"-ism",    level:2, pos:"名詞"},
  {word:"idealism",          meaning:"理想主義",                     etymology:"ideal（理想）+ ism（主義）",                          suffix:"-ism",    level:1, pos:"名詞"},
  {word:"jingoism",          meaning:"排外的愛国主義",               etymology:"jingo（好戦的な）+ ism（主義）",                      suffix:"-ism",    level:3, pos:"名詞"},
  {word:"materialism",       meaning:"唯物論・物質主義",             etymology:"material（物質）+ ism（主義）",                       suffix:"-ism",    level:2, pos:"名詞"},
  {word:"nepotism",          meaning:"縁故主義",                     etymology:"nepos（甥）+ ism（主義）→身内優遇の慣行",             suffix:"-ism",    level:2, pos:"名詞"},
  {word:"obscurantism",      meaning:"反啓蒙主義",                   etymology:"obscur（暗い）+ antism（主義）→知識の普及を妨げること", suffix:"-ism",    level:3, pos:"名詞"},
  {word:"pacifism",          meaning:"平和主義",                     etymology:"pacif（平和）+ ism（主義）",                          suffix:"-ism",    level:1, pos:"名詞"},
  {word:"relativism",        meaning:"相対主義",                     etymology:"relative（相対的な）+ ism（主義）",                   suffix:"-ism",    level:2, pos:"名詞"},
  {word:"skepticism",        meaning:"懐疑主義",                     etymology:"skeptik（考える）+ ism（主義）",                      suffix:"-ism",    level:2, pos:"名詞"},
  {word:"stoicism",          meaning:"禁欲主義・ストア哲学",         etymology:"stoa（ポルティコ）→ストア学派の哲学",                  suffix:"-ism",    level:2, pos:"名詞"},
  {word:"tokenism",          meaning:"形式的配慮",                   etymology:"token（象徴）+ ism（主義）→名目だけの多様性",          suffix:"-ism",    level:2, pos:"名詞"},
  {word:"universalism",      meaning:"普遍主義",                     etymology:"universal（普遍の）+ ism（主義）",                    suffix:"-ism",    level:2, pos:"名詞"},
  {word:"vandalism",         meaning:"破壊行為",                     etymology:"Vandal（ゲルマン部族名）+ ism→無秩序な破壊",           suffix:"-ism",    level:1, pos:"名詞"},

  // ── -ize/-ise（〜にする・〜化する） ──────────────────
  {word:"crystallize",       meaning:"結晶化する・明確になる",       etymology:"crystal（結晶）+ ize（する）",                        suffix:"-ize",    level:2, pos:"動詞"},
  {word:"democratize",       meaning:"民主化する",                   etymology:"democracy（民主主義）+ ize（する）",                   suffix:"-ize",    level:1, pos:"動詞"},
  {word:"digitalize",        meaning:"デジタル化する",               etymology:"digital（デジタル）+ ize（する）",                    suffix:"-ize",    level:1, pos:"動詞"},
  {word:"glamorize",         meaning:"魅力的に見せる",               etymology:"glamour（魅力）+ ize（する）",                        suffix:"-ize",    level:2, pos:"動詞"},
  {word:"homogenize",        meaning:"均質化する",                   etymology:"homo（同じ）+ gen（生む）+ ize（する）",               suffix:"-ize",    level:2, pos:"動詞"},
  {word:"immunize",          meaning:"免疫をつける",                 etymology:"immune（免疫の）+ ize（する）",                        suffix:"-ize",    level:1, pos:"動詞"},
  {word:"legitimize",        meaning:"正当化する",                   etymology:"legitim（合法の）+ ize（する）",                      suffix:"-ize",    level:2, pos:"動詞"},
  {word:"memorialize",       meaning:"記念する・追悼する",           etymology:"memorial（記念の）+ ize（する）",                     suffix:"-ize",    level:2, pos:"動詞"},
  {word:"neutralize",        meaning:"中和する・無力化する",         etymology:"neutral（中立の）+ ize（する）",                      suffix:"-ize",    level:1, pos:"動詞"},
  {word:"optimize",          meaning:"最適化する",                   etymology:"optim（最良の）+ ize（する）",                        suffix:"-ize",    level:1, pos:"動詞"},
  {word:"polarize",          meaning:"二極化する・偏光させる",       etymology:"polar（極の）+ ize（する）",                          suffix:"-ize",    level:2, pos:"動詞"},
  {word:"revolutionize",     meaning:"革命を起こす・一変させる",     etymology:"revolution（革命）+ ize（する）",                     suffix:"-ize",    level:1, pos:"動詞"},
  {word:"sanitize",          meaning:"殺菌する・浄化する",           etymology:"sanit（健康）+ ize（する）",                          suffix:"-ize",    level:1, pos:"動詞"},
  {word:"specialize",        meaning:"専門化する",                   etymology:"special（特別の）+ ize（する）",                      suffix:"-ize",    level:1, pos:"動詞"},
  {word:"traumatize",        meaning:"精神的外傷を与える",           etymology:"trauma（傷）+ ize（する）",                           suffix:"-ize",    level:1, pos:"動詞"},
  {word:"urbanize",          meaning:"都市化する",                   etymology:"urban（都市の）+ ize（する）",                        suffix:"-ize",    level:1, pos:"動詞"},
  {word:"visualize",         meaning:"視覚化する・想像する",         etymology:"visual（視覚の）+ ize（する）",                        suffix:"-ize",    level:1, pos:"動詞"},
  {word:"weaponize",         meaning:"兵器化する",                   etymology:"weapon（武器）+ ize（する）",                         suffix:"-ize",    level:2, pos:"動詞"},

  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
