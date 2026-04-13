/**
 * data-prefix-12.js — 接頭語データ（amphi-, apo-, crypto-, narco-, osteo-, physio-, pyro-, stereo-, theo-, techno-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── amphi-（両方・両側・周囲） ──────────────────
  {word:"amphibian",         meaning:"両生類・両用の",             etymology:"amphi（両方）+ bian（生命）",                  prefix:"amphi-",  level:1},
  {word:"amphibious",        meaning:"両生の・水陸両用の",          etymology:"amphi（両方）+ bious（生命）",                 prefix:"amphi-",  level:2},
  {word:"amphitheater",      meaning:"円形競技場・野外劇場",        etymology:"amphi（周囲）+ theater（劇場）",               prefix:"amphi-",  level:2},
  {word:"amphora",           meaning:"両耳壺・アンフォラ",          etymology:"amphi（両方）+ phora（運ぶもの）",             prefix:"amphi-",  level:3},
  {word:"amphipathic",       meaning:"両親媒性の",                 etymology:"amphi（両方）+ pathic（感じる）",              prefix:"amphi-",  level:3},
  {word:"amphiprotic",       meaning:"両性子性の",                 etymology:"amphi（両方）+ protic（プロトンの）",           prefix:"amphi-",  level:3},
  {word:"amphibole",         meaning:"角閃石（鉱物）",             etymology:"amphi（両義）+ bole（投げる）",               prefix:"amphi-",  level:3},
  {word:"amphictyony",       meaning:"古代ギリシャの部族同盟",      etymology:"amphi（周囲）+ ctyony（居住者）",              prefix:"amphi-",  level:3},

  // ── apo-（離れて・から） ──────────────────
  {word:"apocalypse",        meaning:"黙示録・大惨事",             etymology:"apo（離れて）+ calypse（覆う）→覆いを取る",    prefix:"apo-",    level:2},
  {word:"apostle",           meaning:"使徒・伝道者",               etymology:"apo（離れて）+ stle（送る）",                  prefix:"apo-",    level:2},
  {word:"apology",           meaning:"謝罪・弁明",                 etymology:"apo（離れて）+ logy（言葉）→離れた言葉",        prefix:"apo-",    level:1},
  {word:"apostrophe",        meaning:"アポストロフィ・修辞的呼格",  etymology:"apo（離れて）+ strophe（転回）",               prefix:"apo-",    level:2},
  {word:"apocryphal",        meaning:"真偽不明の・外典の",          etymology:"apo（離れて）+ cryptal（隠れた）",             prefix:"apo-",    level:3},
  {word:"apostasy",          meaning:"背教・棄教",                 etymology:"apo（離れて）+ stasy（立つ）",                 prefix:"apo-",    level:3},
  {word:"apoptosis",         meaning:"アポトーシス・細胞死",        etymology:"apo（離れて）+ ptosis（落ちる）",              prefix:"apo-",    level:3},
  {word:"apotheosis",        meaning:"神格化・最高の達成",          etymology:"apo（完全に）+ theosis（神化）",               prefix:"apo-",    level:3},
  {word:"apogee",            meaning:"遠地点・最高点",             etymology:"apo（離れて）+ gee（地球）",                   prefix:"apo-",    level:3},
  {word:"apostate",          meaning:"背教者・棄教者",             etymology:"apo（離れて）+ state（立つ）",                 prefix:"apo-",    level:3},
  {word:"aphorism",          meaning:"格言・金言",                 etymology:"apo（離れて）+ horism（区切り）",              prefix:"apo-",    level:2},
  {word:"apoplexy",          meaning:"脳卒中・卒倒",               etymology:"apo（離れて）+ plexy（打つ）",                 prefix:"apo-",    level:3},

  // ── crypto-（隠れた・秘密の） ──────────────────
  {word:"cryptography",      meaning:"暗号学・暗号作成術",          etymology:"crypto（隠れた）+ graphy（書くこと）",          prefix:"crypto-", level:2},
  {word:"cryptocurrency",    meaning:"暗号通貨",                  etymology:"crypto（秘密）+ currency（通貨）",              prefix:"crypto-", level:2},
  {word:"cryptic",           meaning:"謎めいた・難解な",            etymology:"crypto（隠れた）+ ic（〜の）",                 prefix:"crypto-", level:2},
  {word:"cryptology",        meaning:"暗号学",                    etymology:"crypto（隠れた）+ logy（学問）",               prefix:"crypto-", level:2},
  {word:"crypt",             meaning:"地下納骨堂・暗室",            etymology:"crypto（隠れた）から",                        prefix:"crypto-", level:2},
  {word:"encrypt",           meaning:"暗号化する",                 etymology:"en（中に）+ crypto（隠す）→暗号化",            prefix:"crypto-", level:2},
  {word:"decrypt",           meaning:"復号する・解読する",          etymology:"de（元に）+ crypto（隠す）→暗号を解く",        prefix:"crypto-", level:2},
  {word:"cryptogram",        meaning:"暗号文・暗号記号",            etymology:"crypto（隠れた）+ gram（書かれたもの）",        prefix:"crypto-", level:2},
  {word:"cryptozoology",     meaning:"未確認動物学",               etymology:"crypto（隠れた）+ zoology（動物学）",           prefix:"crypto-", level:3},
  {word:"cryptographer",     meaning:"暗号技術者",                 etymology:"crypto（隠れた）+ grapher（書く人）",           prefix:"crypto-", level:2},
  {word:"cryptanalysis",     meaning:"暗号解読",                  etymology:"crypto（隠れた）+ analysis（分析）",            prefix:"crypto-", level:3},
  {word:"cryptic crossword", meaning:"クリプティッククロスワード",   etymology:"crypto（隠れた）+ ic（〜の）",                 prefix:"crypto-", level:3},

  // ── narco-（眠り・麻痺） ──────────────────
  {word:"narcotic",          meaning:"麻酔薬・麻薬",               etymology:"narco（眠り）+ tic（〜の）",                   prefix:"narco-",  level:2},
  {word:"narcissism",        meaning:"自己愛・ナルシシズム",        etymology:"Narcissus（ナルキッソス）から",                 prefix:"narco-",  level:2},
  {word:"narcosis",          meaning:"麻酔状態・昏迷",             etymology:"narco（眠り）+ sis（状態）",                   prefix:"narco-",  level:3},
  {word:"narcolepsy",        meaning:"ナルコレプシー・居眠り病",    etymology:"narco（眠り）+ lepsy（発作）",                 prefix:"narco-",  level:3},
  {word:"narcissist",        meaning:"自己愛主義者",               etymology:"narcissism（自己愛）から",                     prefix:"narco-",  level:2},
  {word:"narcotize",         meaning:"麻酔をかける・麻痺させる",    etymology:"narco（眠り）+ tize（〜にする）",               prefix:"narco-",  level:3},
  {word:"narco-state",       meaning:"麻薬国家",                  etymology:"narco（麻薬）+ state（国家）",                  prefix:"narco-",  level:2},
  {word:"narcoanesthesia",   meaning:"麻薬麻酔",                  etymology:"narco（眠り）+ anesthesia（麻酔）",             prefix:"narco-",  level:3},

  // ── osteo-（骨） ──────────────────
  {word:"osteoporosis",      meaning:"骨粗鬆症",                  etymology:"osteo（骨）+ porosis（穴が多い）",              prefix:"osteo-",  level:2},
  {word:"osteology",         meaning:"骨学",                      etymology:"osteo（骨）+ logy（学問）",                    prefix:"osteo-",  level:3},
  {word:"osteoarthritis",    meaning:"変形性関節炎",               etymology:"osteo（骨）+ arthritis（関節炎）",             prefix:"osteo-",  level:3},
  {word:"osteocyte",         meaning:"骨細胞",                    etymology:"osteo（骨）+ cyte（細胞）",                    prefix:"osteo-",  level:3},
  {word:"osteopathy",        meaning:"骨療法・整骨術",             etymology:"osteo（骨）+ pathy（治療）",                   prefix:"osteo-",  level:3},
  {word:"osteopath",         meaning:"整骨医",                    etymology:"osteo（骨）+ path（病気）",                    prefix:"osteo-",  level:2},
  {word:"ossify",            meaning:"骨化する・硬化する",          etymology:"ossi（骨）+ fy（〜にする）",                   prefix:"osteo-",  level:3},
  {word:"osteomalacia",      meaning:"骨軟化症",                  etymology:"osteo（骨）+ malacia（軟化）",                 prefix:"osteo-",  level:3},
  {word:"osteoblast",        meaning:"骨芽細胞",                  etymology:"osteo（骨）+ blast（芽）",                     prefix:"osteo-",  level:3},
  {word:"osteoclast",        meaning:"破骨細胞",                  etymology:"osteo（骨）+ clast（壊す）",                   prefix:"osteo-",  level:3},

  // ── physio-（自然・身体・生理） ──────────────────
  {word:"physiology",        meaning:"生理学",                    etymology:"physio（自然・身体）+ logy（学問）",            prefix:"physio-", level:2},
  {word:"physiological",     meaning:"生理学的な",                 etymology:"physio（身体）+ logical（〜の）",              prefix:"physio-", level:2},
  {word:"physiologist",      meaning:"生理学者",                   etymology:"physio（身体）+ logist（専門家）",             prefix:"physio-", level:2},
  {word:"physiotherapy",     meaning:"理学療法",                   etymology:"physio（身体）+ therapy（治療）",              prefix:"physio-", level:2},
  {word:"physiognomy",       meaning:"人相学・顔つき",             etymology:"physio（自然）+ gnomy（知る）",                prefix:"physio-", level:3},
  {word:"physics",           meaning:"物理学",                    etymology:"physio（自然）+ ics（学問）",                  prefix:"physio-", level:1},
  {word:"physical",          meaning:"物理的な・身体的な",          etymology:"physio（自然）+ cal（〜の）",                  prefix:"physio-", level:0},
  {word:"physician",         meaning:"内科医・医師",               etymology:"physio（自然・治す）+ ian（人）",               prefix:"physio-", level:1},
  {word:"physique",          meaning:"体格・体形",                 etymology:"physio（身体）から",                          prefix:"physio-", level:2},
  {word:"physiochemical",    meaning:"生理化学的な",               etymology:"physio（生理）+ chemical（化学的）",            prefix:"physio-", level:3},

  // ── pyro-（火） ──────────────────
  {word:"pyromania",         meaning:"放火癖",                    etymology:"pyro（火）+ mania（狂気）",                    prefix:"pyro-",   level:2},
  {word:"pyromaniac",        meaning:"放火狂",                    etymology:"pyro（火）+ maniac（狂人）",                   prefix:"pyro-",   level:2},
  {word:"pyrotechnics",      meaning:"花火術・火工品",             etymology:"pyro（火）+ technics（技術）",                 prefix:"pyro-",   level:2},
  {word:"pyrite",            meaning:"黄鉄鉱・愚者の黄金",         etymology:"pyro（火）+ ite（鉱石）",                      prefix:"pyro-",   level:2},
  {word:"pyroclastic",       meaning:"火砕の・火山砕屑の",          etymology:"pyro（火）+ clastic（砕けた）",                prefix:"pyro-",   level:3},
  {word:"pyrometer",         meaning:"高温計",                    etymology:"pyro（火）+ meter（測定器）",                  prefix:"pyro-",   level:3},
  {word:"pyrolysis",         meaning:"熱分解",                    etymology:"pyro（火）+ lysis（分解）",                    prefix:"pyro-",   level:3},
  {word:"pyrogen",           meaning:"発熱物質",                  etymology:"pyro（火）+ gen（生む）",                      prefix:"pyro-",   level:3},
  {word:"pyroclasm",         meaning:"火山爆発",                  etymology:"pyro（火）+ clasm（割れる）",                  prefix:"pyro-",   level:3},
  {word:"pyroelectric",      meaning:"焦電気の",                  etymology:"pyro（火）+ electric（電気）",                 prefix:"pyro-",   level:3},

  // ── stereo-（立体・固体・三次元） ──────────────────
  {word:"stereotype",        meaning:"固定観念・ステレオタイプ",    etymology:"stereo（固定）+ type（型）",                   prefix:"stereo-", level:1},
  {word:"stereo",            meaning:"ステレオ音響",               etymology:"stereo（立体）から",                          prefix:"stereo-", level:0},
  {word:"stereophonic",      meaning:"立体音響の",                 etymology:"stereo（立体）+ phonic（音の）",               prefix:"stereo-", level:2},
  {word:"stereoscope",       meaning:"立体鏡",                    etymology:"stereo（立体）+ scope（見る器具）",             prefix:"stereo-", level:2},
  {word:"stereoscopic",      meaning:"立体的な",                  etymology:"stereo（立体）+ scopic（見る）",               prefix:"stereo-", level:2},
  {word:"stereochemistry",   meaning:"立体化学",                  etymology:"stereo（立体）+ chemistry（化学）",            prefix:"stereo-", level:3},
  {word:"stereoisomer",      meaning:"立体異性体",                 etymology:"stereo（立体）+ isomer（異性体）",             prefix:"stereo-", level:3},
  {word:"stereotypical",     meaning:"ステレオタイプ的な",          etymology:"stereo（固定）+ typical（典型的な）",           prefix:"stereo-", level:2},
  {word:"stereotyped",       meaning:"固定化した・ありきたりの",    etymology:"stereo（固定）+ typed（型にはまった）",         prefix:"stereo-", level:2},
  {word:"stereograph",       meaning:"立体写真",                  etymology:"stereo（立体）+ graph（書く・描く）",           prefix:"stereo-", level:2},

  // ── theo-（神） ──────────────────
  {word:"theology",          meaning:"神学",                      etymology:"theo（神）+ logy（学問）",                     prefix:"theo-",   level:2},
  {word:"theological",       meaning:"神学的な",                   etymology:"theo（神）+ logical（〜の）",                  prefix:"theo-",   level:2},
  {word:"theologian",        meaning:"神学者",                    etymology:"theo（神）+ logian（学者）",                   prefix:"theo-",   level:2},
  {word:"theocracy",         meaning:"神政政治",                  etymology:"theo（神）+ cracy（支配）",                    prefix:"theo-",   level:2},
  {word:"atheism",           meaning:"無神論",                    etymology:"a（否定）+ theo（神）+ ism（主義）",            prefix:"theo-",   level:2},
  {word:"atheist",           meaning:"無神論者",                   etymology:"a（否定）+ theo（神）+ ist（者）",             prefix:"theo-",   level:2},
  {word:"monotheism",        meaning:"一神教",                    etymology:"mono（一つ）+ theo（神）+ ism（主義）",         prefix:"theo-",   level:2},
  {word:"polytheism",        meaning:"多神教",                    etymology:"poly（多い）+ theo（神）+ ism（主義）",         prefix:"theo-",   level:2},
  {word:"pantheism",         meaning:"汎神論",                    etymology:"pan（全て）+ theo（神）+ ism（主義）",          prefix:"theo-",   level:2},
  {word:"theist",            meaning:"有神論者",                   etymology:"theo（神）+ ist（者）",                        prefix:"theo-",   level:2},
  {word:"theodicy",          meaning:"神義論・弁神論",             etymology:"theo（神）+ dicy（正義）",                     prefix:"theo-",   level:3},
  {word:"theocentric",       meaning:"神中心的な",                 etymology:"theo（神）+ centric（中心）",                  prefix:"theo-",   level:3},

  // ── techno-（技術・技能） ──────────────────
  {word:"technology",        meaning:"技術・科学技術",             etymology:"techno（技術）+ logy（学問）",                  prefix:"techno-", level:0},
  {word:"technological",     meaning:"技術的な",                   etymology:"techno（技術）+ logical（〜の）",               prefix:"techno-", level:1},
  {word:"technologist",      meaning:"技術者・工学者",             etymology:"techno（技術）+ logist（専門家）",              prefix:"techno-", level:2},
  {word:"technique",         meaning:"技法・テクニック",            etymology:"techno（技術）+ ique（方法）",                  prefix:"techno-", level:1},
  {word:"technical",         meaning:"技術的な・専門的な",          etymology:"techno（技術）+ ical（〜の）",                  prefix:"techno-", level:1},
  {word:"technician",        meaning:"技術者・技官",               etymology:"techno（技術）+ cian（人）",                    prefix:"techno-", level:1},
  {word:"technocracy",       meaning:"技術官僚支配",               etymology:"techno（技術）+ cracy（支配）",                 prefix:"techno-", level:2},
  {word:"technocrat",        meaning:"技術官僚",                   etymology:"techno（技術）+ crat（支配者）",                prefix:"techno-", level:2},
  {word:"biotechnology",     meaning:"バイオテクノロジー",          etymology:"bio（生命）+ techno（技術）+ logy（学問）",      prefix:"techno-", level:2},
  {word:"nanotechnology",    meaning:"ナノテクノロジー",            etymology:"nano（極小）+ techno（技術）+ logy（学問）",     prefix:"techno-", level:2},
  {word:"technophile",       meaning:"技術愛好家",                 etymology:"techno（技術）+ phile（愛好者）",               prefix:"techno-", level:2},
  {word:"technophobe",       meaning:"技術嫌い・技術恐怖症の人",    etymology:"techno（技術）+ phobe（嫌いな人）",             prefix:"techno-", level:2},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
