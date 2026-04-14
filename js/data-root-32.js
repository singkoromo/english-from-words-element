/**
 * data-root-26.js — 語根データ（-log/-logue-, -phon-, -chrom-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -log/-logue-（言葉・論理・学問） ──────────────────
  {word:"dialogue",    meaning:"対話・会話",               etymology:"dia（間に）+ logue（言葉）",                root:"-log-", level:1, pos:"名詞"},
  {word:"monologue",   meaning:"独り言・独白",             etymology:"mono（一人）+ logue（言葉）",               root:"-log-", level:1, pos:"名詞"},
  {word:"catalogue",   meaning:"目録・カタログ",           etymology:"cata（下に）+ logue（言葉・整理）",          root:"-log-", level:1, pos:"名詞"},
  {word:"epilogue",    meaning:"エピローグ・終章",         etymology:"epi（後に）+ logue（言葉）",                root:"-log-", level:2, pos:"名詞"},
  {word:"prologue",    meaning:"序章・プロローグ",         etymology:"pro（前に）+ logue（言葉）",                root:"-log-", level:2, pos:"名詞"},
  {word:"analogue",    meaning:"類似物・アナログ",         etymology:"ana（沿って）+ logue（言葉）",              root:"-log-", level:2, pos:"名詞"},
  {word:"travelogue",  meaning:"旅行記・旅行映画",         etymology:"travel（旅行）+ logue（語り）",             root:"-log-", level:2, pos:"名詞"},
  {word:"logic",       meaning:"論理・論法",               etymology:"log（論理）+ ic（〜の）",                   root:"-log-", level:1, pos:"名詞"},
  {word:"logical",     meaning:"論理的な",                 etymology:"log（論理）+ ical（〜の）",                 root:"-log-", level:1, pos:"形容詞"},
  {word:"illogical",   meaning:"非論理的な",               etymology:"il（否定）+ logical（論理的な）",           root:"-log-", level:2, pos:"形容詞"},
  {word:"apology",     meaning:"謝罪・弁明",               etymology:"apo（離れて）+ log（言葉）+ y",             root:"-log-", level:1, pos:"名詞"},
  {word:"eulogy",      meaning:"賛辞・追悼演説",           etymology:"eu（良い）+ log（言葉）+ y",                root:"-log-", level:2, pos:"名詞"},
  {word:"anthology",   meaning:"選集・アンソロジー",       etymology:"antho（花）+ log（集める）+ y",             root:"-log-", level:2, pos:"名詞"},
  {word:"theology",    meaning:"神学",                    etymology:"theo（神）+ log（学問）+ y",                root:"-log-", level:2, pos:"名詞"},
  {word:"chronology",  meaning:"年代学・年表",             etymology:"chron（時）+ log（学問）+ y",               root:"-log-", level:2, pos:"名詞"},
  {word:"ecology",     meaning:"生態学",                  etymology:"eco（家・環境）+ log（学問）+ y",           root:"-log-", level:2, pos:"名詞"},
  {word:"genealogy",   meaning:"系譜学・家系",             etymology:"genea（世代）+ log（学問）+ y",             root:"-log-", level:2, pos:"名詞"},
  {word:"tautology",   meaning:"同語反復・冗長表現",       etymology:"tauto（同じ）+ log（言葉）+ y",             root:"-log-", level:3, pos:"名詞"},

  // ── -phon-（音・声） ──────────────────
  {word:"phone",       meaning:"電話・音",                 etymology:"phon（音）+ e",                             root:"-phon-", level:0, pos:"名詞"},
  {word:"phonics",     meaning:"フォニックス・音声学習法", etymology:"phon（音）+ ics（学問）",                   root:"-phon-", level:2, pos:"名詞"},
  {word:"symphony",    meaning:"交響曲・シンフォニー",     etymology:"sym（共に）+ phon（音）+ y",                root:"-phon-", level:1, pos:"名詞"},
  {word:"microphone",  meaning:"マイクロフォン",           etymology:"micro（小さい）+ phon（音）+ e",            root:"-phon-", level:1, pos:"名詞"},
  {word:"saxophone",   meaning:"サキソフォン",             etymology:"Sax（発明者名）+ phon（音）+ e",            root:"-phon-", level:1, pos:"名詞"},
  {word:"headphones",  meaning:"ヘッドフォン",             etymology:"head（頭）+ phon（音）+ s",                 root:"-phon-", level:0, pos:"名詞"},
  {word:"phonograph",  meaning:"蓄音機・レコードプレーヤー",etymology:"phon（音）+ graph（書く）",                 root:"-phon-", level:2, pos:"名詞"},
  {word:"homophone",   meaning:"同音異義語",               etymology:"homo（同じ）+ phon（音）+ e",              root:"-phon-", level:2, pos:"名詞"},
  {word:"cacophony",   meaning:"不協和音・騒音",           etymology:"caco（悪い）+ phon（音）+ y",              root:"-phon-", level:3, pos:"名詞"},
  {word:"euphony",     meaning:"美音・語感の良さ",         etymology:"eu（良い）+ phon（音）+ y",                 root:"-phon-", level:3, pos:"名詞"},
  {word:"polyphony",   meaning:"多声音楽・ポリフォニー",   etymology:"poly（多くの）+ phon（音）+ y",             root:"-phon-", level:3, pos:"名詞"},
  {word:"xylophone",   meaning:"木琴・シロフォン",         etymology:"xylo（木）+ phon（音）+ e",                 root:"-phon-", level:1, pos:"名詞"},
  {word:"telephone",   meaning:"電話",                    etymology:"tele（遠く）+ phon（声）+ e",               root:"-phon-", level:0, pos:"名詞"},
  {word:"megaphone",   meaning:"メガフォン・拡声器",       etymology:"mega（大きい）+ phon（音）+ e",             root:"-phon-", level:1, pos:"名詞"},

  // ── -chrom-（色） ──────────────────
  {word:"chromatic",   meaning:"色彩の・半音階の",         etymology:"chrom（色）+ atic（〜の）",                 root:"-chrom-", level:2, pos:"形容詞"},
  {word:"monochrome",  meaning:"モノクロ・単色",           etymology:"mono（一つ）+ chrom（色）+ e",              root:"-chrom-", level:1, pos:"名詞"},
  {word:"chromosome",  meaning:"染色体",                  etymology:"chrom（色）+ some（体）←着色体",            root:"-chrom-", level:2, pos:"名詞"},
  {word:"polychrome",  meaning:"多色の・多色彩画",         etymology:"poly（多くの）+ chrom（色）+ e",            root:"-chrom-", level:2, pos:"形容詞・名詞"},
  {word:"chromium",    meaning:"クロム（金属元素）",       etymology:"chrom（色）+ ium（金属）←多彩な化合物から", root:"-chrom-", level:2, pos:"名詞"},
  {word:"achromatic",  meaning:"無彩色の・色収差のない",   etymology:"a（否定）+ chrom（色）+ atic（〜の）",      root:"-chrom-", level:3, pos:"形容詞"},
  {word:"dichromatic",  meaning:"二色性の",               etymology:"di（二つ）+ chrom（色）+ atic（〜の）",     root:"-chrom-", level:3, pos:"形容詞"},
  {word:"chromotherapy",meaning:"色彩療法",               etymology:"chrom（色）+ therapy（治療）",              root:"-chrom-", level:3, pos:"名詞"},
  {word:"chromatography",meaning:"クロマトグラフィー",    etymology:"chrom（色）+ graph（書く）+ y",             root:"-chrom-", level:3, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
