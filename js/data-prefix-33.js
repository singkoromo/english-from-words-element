/**
 * data-prefix-33.js — 接頭語補充39（geo-, photo-, epi-, tele-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── geo-（地球・大地） ──────────────────
  {word:"geologic",        meaning:"地質学的な",                 etymology:"geo（地球）+ logic（学問）",                   prefix:"geo-", level:1},
  {word:"geosynchronous",  meaning:"地球同期の",                 etymology:"geo（地球）+ synchronous（同期の）",           prefix:"geo-", level:2},
  {word:"geomagnetic",     meaning:"地磁気の",                   etymology:"geo（地球）+ magnetic（磁気の）",              prefix:"geo-", level:2},
  {word:"geochronology",   meaning:"地質年代学",                 etymology:"geo（地球）+ chronology（年代学）",           prefix:"geo-", level:3},
  {word:"geobotany",       meaning:"地植物学",                   etymology:"geo（地球）+ botany（植物学）",               prefix:"geo-", level:3},
  {word:"geohydrology",    meaning:"地下水学",                   etymology:"geo（地球）+ hydrology（水文学）",             prefix:"geo-", level:3},
  {word:"geotectonic",     meaning:"地殻構造の",                 etymology:"geo（地球）+ tectonic（構造の）",             prefix:"geo-", level:3},
  {word:"geobiosphere",    meaning:"地球生物圏",                 etymology:"geo（地球）+ biosphere（生物圏）",             prefix:"geo-", level:2},
  {word:"geocultural",     meaning:"地理文化的な",               etymology:"geo（地球）+ cultural（文化的な）",            prefix:"geo-", level:2},
  {word:"geoecology",      meaning:"地理生態学",                 etymology:"geo（地球）+ ecology（生態学）",              prefix:"geo-", level:2},

  // ── photo-（光） ──────────────────
  {word:"photolysis",      meaning:"光分解",                     etymology:"photo（光）+ lysis（分解）",                  prefix:"photo-", level:2},
  {word:"phototropism",    meaning:"光屈性・光向性",              etymology:"photo（光）+ tropism（向性）",                prefix:"photo-", level:2},
  {word:"photoemission",   meaning:"光電子放出",                  etymology:"photo（光）+ emission（放出）",               prefix:"photo-", level:3},
  {word:"photocatalysis",  meaning:"光触媒反応",                  etymology:"photo（光）+ catalysis（触媒作用）",          prefix:"photo-", level:3},
  {word:"photomontage",    meaning:"フォトモンタージュ",           etymology:"photo（光）+ montage（組み合わせ）",          prefix:"photo-", level:2},
  {word:"photoionization", meaning:"光イオン化",                  etymology:"photo（光）+ ionization（イオン化）",         prefix:"photo-", level:3},
  {word:"photopolymer",    meaning:"光重合体",                    etymology:"photo（光）+ polymer（重合体）",              prefix:"photo-", level:3},
  {word:"photorefractive",  meaning:"光屈折性の",                 etymology:"photo（光）+ refractive（屈折の）",           prefix:"photo-", level:3},
  {word:"photostability",  meaning:"光安定性",                    etymology:"photo（光）+ stability（安定性）",            prefix:"photo-", level:2},
  {word:"photoreduction",  meaning:"光還元",                     etymology:"photo（光）+ reduction（還元）",              prefix:"photo-", level:3},

  // ── epi-（上に・後に） ──────────────────
  {word:"epiphenomenon",   meaning:"副現象・随伴現象",            etymology:"epi（上に）+ phenomenon（現象）",             prefix:"epi-", level:3},
  {word:"epizootic",       meaning:"家畜流行病の",               etymology:"epi（上に）+ zootic（動物の）",               prefix:"epi-", level:3},
  {word:"epimorphosis",    meaning:"後生変態",                    etymology:"epi（後に）+ morphosis（変態）",              prefix:"epi-", level:3},
  {word:"epigenetic",      meaning:"後成遺伝の",                  etymology:"epi（上に）+ genetic（遺伝の）",              prefix:"epi-", level:2},
  {word:"epistemology",    meaning:"認識論",                     etymology:"epi（上に）+ stem（知識）+ ology（学問）",    prefix:"epi-", level:3},
  {word:"epimysium",       meaning:"筋外膜",                     etymology:"epi（上に）+ mysium（筋肉）",                 prefix:"epi-", level:3},
  {word:"epipaleolithic",  meaning:"後期旧石器の",               etymology:"epi（後に）+ paleolithic（旧石器時代）",      prefix:"epi-", level:3},
  {word:"epifauna",        meaning:"底生動物・付着動物",          etymology:"epi（上に）+ fauna（動物群）",                prefix:"epi-", level:3},
  {word:"epiglottic",      meaning:"喉頭蓋の",                   etymology:"epi（上に）+ glottic（声門の）",              prefix:"epi-", level:3},
  {word:"epiboly",         meaning:"外包・包み込み",              etymology:"epi（上に）+ boly（投げる）",                 prefix:"epi-", level:3},

  // ── tele-（遠く・遠隔） ──────────────────
  {word:"telematics",      meaning:"テレマティクス・遠隔情報処理", etymology:"tele（遠く）+ matics（情報処理）",            prefix:"tele-", level:2},
  {word:"telemetric",      meaning:"遠隔測定の",                  etymology:"tele（遠く）+ metric（測定の）",              prefix:"tele-", level:2},
  {word:"telerobotics",    meaning:"遠隔ロボット工学",             etymology:"tele（遠く）+ robotics（ロボット工学）",      prefix:"tele-", level:2},
  {word:"telekinetic",     meaning:"念動力の",                    etymology:"tele（遠く）+ kinetic（運動の）",             prefix:"tele-", level:2},
  {word:"teledensity",     meaning:"電話普及率",                  etymology:"tele（遠く）+ density（密度）",               prefix:"tele-", level:2},
  {word:"telescopic",      meaning:"望遠鏡の・伸縮式の",          etymology:"tele（遠く）+ scopic（見る）",               prefix:"tele-", level:1},
  {word:"teleological",    meaning:"目的論的な",                  etymology:"tele（遠く）+ logical（論理の）",             prefix:"tele-", level:3},
  {word:"telepresence",    meaning:"テレプレゼンス・遠隔臨場感",  etymology:"tele（遠く）+ presence（存在感）",            prefix:"tele-", level:2},
  {word:"telesurgery",     meaning:"遠隔手術",                    etymology:"tele（遠く）+ surgery（外科手術）",           prefix:"tele-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
