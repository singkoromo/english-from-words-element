/**
 * data-prefix-14.js — 接頭語補充4（fore-, mono-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── fore-（前に・あらかじめ） ──────────────────
  {word:"foreknowledge",     meaning:"予知・事前の知識",             etymology:"fore（前に）+ knowledge（知識）",                    prefix:"fore-", level:2},
  {word:"foreshadow",        meaning:"前兆となる・予感させる",       etymology:"fore（前に）+ shadow（影）→先の影を落とす",          prefix:"fore-", level:2},
  {word:"foreman",           meaning:"現場監督・職長",               etymology:"fore（前の）+ man（人）→前に立つ人",                 prefix:"fore-", level:1},
  {word:"foremost",          meaning:"最も重要な・第一の",           etymology:"fore（前に）+ most（最も）",                         prefix:"fore-", level:2},
  {word:"foreseeable",       meaning:"予見できる・近い将来の",       etymology:"fore（前に）+ seeable（見ることができる）",           prefix:"fore-", level:2},
  {word:"foreleg",           meaning:"前脚・前足",                   etymology:"fore（前の）+ leg（脚）",                            prefix:"fore-", level:1},
  {word:"forethought",       meaning:"事前の考慮・先見の明",         etymology:"fore（前に）+ thought（考え）",                      prefix:"fore-", level:2},
  {word:"foretell",          meaning:"予言する・予告する",           etymology:"fore（前に）+ tell（伝える）",                       prefix:"fore-", level:2},
  {word:"foreword",          meaning:"序文・はしがき",               etymology:"fore（前の）+ word（言葉）→前置きの言葉",            prefix:"fore-", level:1},
  {word:"forehead",          meaning:"額・おでこ",                   etymology:"fore（前の）+ head（頭）→頭の前部",                  prefix:"fore-", level:0},
  {word:"forefinger",        meaning:"人差し指",                     etymology:"fore（前の）+ finger（指）→前の指",                  prefix:"fore-", level:1},
  {word:"foreplay",          meaning:"前戯・準備行為",               etymology:"fore（前の）+ play（行為）",                         prefix:"fore-", level:2},
  {word:"foreclose",         meaning:"（抵当権を）行使する・排除する",etymology:"fore（前に）+ close（閉じる）→先に閉じて締め出す", prefix:"fore-", level:3},
  {word:"forefront",         meaning:"最前線・先頭",                 etymology:"fore（前の）+ front（前面）",                        prefix:"fore-", level:2},
  {word:"foregone",          meaning:"必然的な・既定の",             etymology:"fore（前に）+ gone（行った）→先に行ってしまった",     prefix:"fore-", level:2},
  {word:"foreign",           meaning:"外国の・異質な",               etymology:"fore（外に）+ ign（出身）→外から来た",               prefix:"fore-", level:0},
  {word:"foresee",           meaning:"予見する・見通す",             etymology:"fore（前に）+ see（見る）",                          prefix:"fore-", level:1},
  {word:"forestall",         meaning:"先手を打つ・未然に防ぐ",       etymology:"fore（前に）+ stall（止める）",                      prefix:"fore-", level:2},
  {word:"forenoon",          meaning:"午前・正午前",                 etymology:"fore（前の）+ noon（正午）",                         prefix:"fore-", level:1},
  {word:"foreordain",        meaning:"あらかじめ定める・運命付ける", etymology:"fore（前に）+ ordain（定める）",                     prefix:"fore-", level:3},

  // ── mono-（一つの・単一の） ──────────────────
  {word:"monocracy",         meaning:"独裁政治・一人支配",           etymology:"mono（一つの）+ cracy（支配）",                      prefix:"mono-", level:3},
  {word:"monoculture",       meaning:"単一栽培・モノカルチャー",     etymology:"mono（一つの）+ culture（文化・栽培）",               prefix:"mono-", level:2},
  {word:"monoxide",          meaning:"一酸化物",                     etymology:"mono（一つの）+ oxide（酸化物）",                    prefix:"mono-", level:1},
  {word:"monorail",          meaning:"モノレール・一本レール",       etymology:"mono（一つの）+ rail（レール）",                     prefix:"mono-", level:1},
  {word:"monosyllable",      meaning:"単音節語・一音節の語",         etymology:"mono（一つの）+ syllable（音節）",                   prefix:"mono-", level:2},
  {word:"monotype",          meaning:"モノタイプ・一版印刷",         etymology:"mono（一つの）+ type（型・活字）",                   prefix:"mono-", level:3},
  {word:"monocular",         meaning:"単眼鏡・片目用の",             etymology:"mono（一つの）+ ocular（目の）",                     prefix:"mono-", level:2},
  {word:"monotheism",        meaning:"一神教",                       etymology:"mono（一つの）+ theism（神を信じること）",            prefix:"mono-", level:2},
  {word:"monoclonal",        meaning:"単クローン性の",               etymology:"mono（一つの）+ clonal（クローンの）",               prefix:"mono-", level:3},
  {word:"monospaced",        meaning:"等幅フォントの",               etymology:"mono（一つの）+ spaced（間隔を取った）",              prefix:"mono-", level:2},
  {word:"monolith",          meaning:"一枚岩・巨石",                 etymology:"mono（一つの）+ lith（石）",                         prefix:"mono-", level:2},
  {word:"mononuclear",       meaning:"単核の",                       etymology:"mono（一つの）+ nuclear（核の）",                    prefix:"mono-", level:3},
  {word:"monodrama",         meaning:"一人劇・独幕劇",               etymology:"mono（一つの）+ drama（劇）",                        prefix:"mono-", level:2},
  {word:"monochromatic",     meaning:"単色の・一色の",               etymology:"mono（一つの）+ chromatic（色の）",                  prefix:"mono-", level:2},
  {word:"monoplane",         meaning:"単葉機・一枚翼の飛行機",       etymology:"mono（一つの）+ plane（平面・飛行機）",               prefix:"mono-", level:2},
  {word:"monosodium",        meaning:"一ナトリウムの（MSG などに使用）",etymology:"mono（一つの）+ sodium（ナトリウム）",           prefix:"mono-", level:2},
  {word:"monolingual",       meaning:"一言語の・一カ国語の",         etymology:"mono（一つの）+ lingual（言語の）",                  prefix:"mono-", level:1},
  {word:"monodic",           meaning:"単音の・独唱曲の",             etymology:"mono（一つの）+ odic（歌の）",                       prefix:"mono-", level:3},
  {word:"monocle",           meaning:"単眼鏡・片眼鏡",               etymology:"mono（一つの）+ cle（ocle 目）",                     prefix:"mono-", level:2},
  {word:"monogamy",          meaning:"一夫一妻制",                   etymology:"mono（一つの）+ gamy（結婚）",                       prefix:"mono-", level:2},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
