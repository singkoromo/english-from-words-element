/**
 * data-prefix-12.js — 接頭語補充2（semi-, sym-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── semi-（半分・部分的に） ──────────────────
  {word:"semitone",          meaning:"半音・短2度音程",              etymology:"semi（半分）+ tone（音）",                          prefix:"semi-", level:1},
  {word:"semivowel",         meaning:"半母音（w, y など）",          etymology:"semi（半分）+ vowel（母音）",                        prefix:"semi-", level:2},
  {word:"semiformal",        meaning:"セミフォーマルの・略礼装の",   etymology:"semi（半分）+ formal（正式な）",                     prefix:"semi-", level:1},
  {word:"semisolid",         meaning:"半固体の・半固形の",           etymology:"semi（半分）+ solid（固体の）",                      prefix:"semi-", level:2},
  {word:"semipermeable",     meaning:"半透性の",                     etymology:"semi（半分）+ permeable（透過性の）",                prefix:"semi-", level:2},
  {word:"semiliterate",      meaning:"半識字の・基礎的な読み書きができる",etymology:"semi（半分）+ literate（識字の）",             prefix:"semi-", level:2},
  {word:"semidetached",      meaning:"半独立の・二戸建ての",         etymology:"semi（半分）+ detached（分離した）",                 prefix:"semi-", level:2},
  {word:"semicolon",         meaning:"セミコロン（;）",              etymology:"semi（半分）+ colon（コロン）→コロンの半分",          prefix:"semi-", level:0},
  {word:"semiarid",          meaning:"半乾燥の・やや乾いた",         etymology:"semi（半分）+ arid（乾燥した）",                     prefix:"semi-", level:2},
  {word:"semimonthly",       meaning:"月2回の・隔週の",             etymology:"semi（半分）+ monthly（月に1回の）",                  prefix:"semi-", level:1},
  {word:"semiprofessional",  meaning:"セミプロの・準専門家の",       etymology:"semi（半分）+ professional（専門家の）",             prefix:"semi-", level:1},
  {word:"semitrailer",       meaning:"セミトレーラー・半トレーラー", etymology:"semi（半分）+ trailer（トレーラー）",                 prefix:"semi-", level:1},
  {word:"semidarkness",      meaning:"薄暗さ・半暗闇",               etymology:"semi（半分）+ darkness（暗闇）",                     prefix:"semi-", level:1},
  {word:"semiweekly",        meaning:"週2回の・半週ごとの",          etymology:"semi（半分）+ weekly（週に1回の）",                   prefix:"semi-", level:1},
  {word:"semitransparent",   meaning:"半透明の",                     etymology:"semi（半分）+ transparent（透明な）",                prefix:"semi-", level:1},
  {word:"semifluid",         meaning:"半流動体の・半液体の",         etymology:"semi（半分）+ fluid（流体の）",                      prefix:"semi-", level:2},
  {word:"semiskilled",       meaning:"半熟練の・準熟練の",           etymology:"semi（半分）+ skilled（熟練した）",                  prefix:"semi-", level:2},
  {word:"semisweet",         meaning:"やや甘い・セミスイートの",     etymology:"semi（半分）+ sweet（甘い）",                        prefix:"semi-", level:0},
  {word:"semiology",         meaning:"記号論・符号学",               etymology:"semi（半分・符号）+ ology（学問）→記号の学問",        prefix:"semi-", level:3},
  {word:"semiosphere",       meaning:"記号圏・意味の空間",           etymology:"semi（記号）+ osphere（球体・圏）",                  prefix:"semi-", level:3},
  {word:"semibold",          meaning:"セミボールド体・中太字",       etymology:"semi（半分）+ bold（太字）",                         prefix:"semi-", level:1},
  {word:"seminar",           meaning:"セミナー・研究発表会",         etymology:"semi（半分・種）+ nar（narium 育苗所）→学びの苗床",  prefix:"semi-", level:0},

  // ── sym-（共に・一緒に） ──────────────────
  {word:"symptomatic",       meaning:"症候的な・典型的な",           etymology:"sym（共に）+ ptoma（落ちる）+ tic（形容詞）→共に現れる印", prefix:"sym-", level:2},
  {word:"symbolism",         meaning:"象徴主義・象徴的表現",         etymology:"sym（共に）+ bol（投げる）+ ism（主義）→一緒に投げて表す", prefix:"sym-", level:2},
  {word:"symbolic",          meaning:"象徴的な・記号の",             etymology:"sym（共に）+ bol（投げる）+ ic（形容詞）",            prefix:"sym-", level:1},
  {word:"symmetrical",       meaning:"対称的な・均整のとれた",       etymology:"sym（共に）+ metrical（測定の）→同じ測定",           prefix:"sym-", level:1},
  {word:"sympathize",        meaning:"同情する・共感する",           etymology:"sym（共に）+ pathize（感じる）",                     prefix:"sym-", level:1},
  {word:"symbiont",          meaning:"共生生物",                     etymology:"sym（共に）+ biont（生物）",                         prefix:"sym-", level:3},
  {word:"symposium",         meaning:"シンポジウム・討論会",         etymology:"sym（共に）+ posium（飲む）→共に飲みながら議論",      prefix:"sym-", level:2},
  {word:"synchronized",      meaning:"同期された・一致した",         etymology:"syn（共に）+ chronized（時を合わせた）",              prefix:"sym-", level:1},
  {word:"sympathy",          meaning:"同情・共感・お悔やみ",         etymology:"sym（共に）+ pathy（感じる）",                       prefix:"sym-", level:0},
  {word:"synchronize",       meaning:"同期させる・同調させる",       etymology:"sym（共に）+ chronize（時を合わせる）",               prefix:"sym-", level:1},
  {word:"sympatric",         meaning:"同所的な・同じ地域に生息する", etymology:"sym（共に）+ patric（故郷の）",                      prefix:"sym-", level:3},
  {word:"symphonic",         meaning:"交響曲の・交響楽団の",         etymology:"sym（共に）+ phonic（音の）→共鳴する",               prefix:"sym-", level:2},
  {word:"symbolize",         meaning:"象徴する・表す",               etymology:"sym（共に）+ bolize（投げる）→意味を集めて表す",      prefix:"sym-", level:1},
  {word:"sympodial",         meaning:"合軸分枝の（植物学）",         etymology:"sym（共に）+ podial（軸の）",                        prefix:"sym-", level:3},
  {word:"symplastic",        meaning:"共生質の・シンプラストの",     etymology:"sym（共に）+ plastic（形成する）",                   prefix:"sym-", level:3},
  {word:"symmetry",          meaning:"対称性・均整",                 etymology:"sym（共に）+ metry（測定）→同じ尺度",                prefix:"sym-", level:1},
  {word:"symbolic logic",    meaning:"記号論理学・数理論理学",       etymology:"sym（共に）+ bolic（投げる）+ logic（論理）",         prefix:"sym-", level:3},
  {word:"sympathetic",       meaning:"同情的な・共感的な",           etymology:"sym（共に）+ pathetic（感じる）",                    prefix:"sym-", level:1},
  {word:"symbiosis",         meaning:"共生・相互依存関係",           etymology:"sym（共に）+ biosis（生活）",                        prefix:"sym-", level:2},
  {word:"sympatize",         meaning:"共感する・同情する",           etymology:"sym（共に）+ patize（感じる）",                      prefix:"sym-", level:1},
  {word:"symphysis",         meaning:"癒合・骨の接合部",             etymology:"sym（共に）+ physis（自然・成長）→共に生長して合わさる", prefix:"sym-", level:3},
  {word:"symposia",          meaning:"シンポジウムの複数形",         etymology:"sym（共に）+ posia（飲む場）",                       prefix:"sym-", level:2},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
