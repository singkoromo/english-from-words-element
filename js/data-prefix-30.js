/**
 * data-prefix-30.js — 接頭語補充36（meta-, infra-, supra-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── meta-（超えて・変化） ──────────────────
  {word:"metacognitive",   meaning:"メタ認知的な",               etymology:"meta（超えて）+ cognitive（認知の）",          prefix:"meta-", level:2},
  {word:"metaethics",      meaning:"メタ倫理学",                 etymology:"meta（超えて）+ ethics（倫理学）",             prefix:"meta-", level:3},
  {word:"metanarrative",   meaning:"メタナラティブ・大きな物語",  etymology:"meta（超えて）+ narrative（物語）",            prefix:"meta-", level:3},
  {word:"metapopulation",  meaning:"メタ個体群",                 etymology:"meta（超えて）+ population（個体群）",         prefix:"meta-", level:3},
  {word:"metacommunication", meaning:"メタコミュニケーション",   etymology:"meta（超えて）+ communication（伝達）",        prefix:"meta-", level:3},
  {word:"metabolic",       meaning:"代謝の・新陳代謝の",          etymology:"meta（変化）+ bolic（投げる・働く）",          prefix:"meta-", level:1},
  {word:"metaverse",       meaning:"仮想世界・メタバース",        etymology:"meta（超えて）+ verse（宇宙・世界）",          prefix:"meta-", level:1},
  {word:"metatarsal",      meaning:"中足骨の",                   etymology:"meta（超えて）+ tarsal（足根の）",             prefix:"meta-", level:3},
  {word:"metabiology",     meaning:"メタ生物学",                 etymology:"meta（超えて）+ biology（生物学）",            prefix:"meta-", level:3},
  {word:"metapattern",     meaning:"メタパターン・パターンのパターン", etymology:"meta（超えて）+ pattern（パターン）",      prefix:"meta-", level:2},
  {word:"metaspace",       meaning:"メタ空間・抽象空間",          etymology:"meta（超えて）+ space（空間）",               prefix:"meta-", level:2},
  {word:"metacriticism",   meaning:"批評の批評・メタ批評",        etymology:"meta（超えて）+ criticism（批評）",           prefix:"meta-", level:3},

  // ── infra-（下に・以下の） ──────────────────
  {word:"infrastructure",  meaning:"インフラ・社会基盤",          etymology:"infra（下に）+ structure（構造）",             prefix:"infra-", level:0},
  {word:"infrared",        meaning:"赤外線",                     etymology:"infra（下に）+ red（赤）",                    prefix:"infra-", level:1},
  {word:"infrasonic",      meaning:"超低周波の・可聴域以下の",    etymology:"infra（下に）+ sonic（音の）",                prefix:"infra-", level:2},
  {word:"infraglacial",    meaning:"氷河底の",                   etymology:"infra（下に）+ glacial（氷河の）",            prefix:"infra-", level:3},
  {word:"infratemporal",   meaning:"側頭下窩の",                 etymology:"infra（下に）+ temporal（側頭の）",           prefix:"infra-", level:3},
  {word:"infraclavicular",  meaning:"鎖骨下の",                  etymology:"infra（下に）+ clavicular（鎖骨の）",         prefix:"infra-", level:3},
  {word:"infraspinal",     meaning:"棘下の",                     etymology:"infra（下に）+ spinal（棘の）",               prefix:"infra-", level:3},
  {word:"infrapatellar",   meaning:"膝蓋骨下の",                 etymology:"infra（下に）+ patellar（膝蓋骨の）",         prefix:"infra-", level:3},
  {word:"infradiaphragmatic", meaning:"横隔膜下の",              etymology:"infra（下に）+ diaphragmatic（横隔膜の）",    prefix:"infra-", level:3},
  {word:"infralobular",    meaning:"小葉下の",                   etymology:"infra（下に）+ lobular（小葉の）",            prefix:"infra-", level:3},
  {word:"infranodal",      meaning:"結節下の",                   etymology:"infra（下に）+ nodal（節の）",                prefix:"infra-", level:3},
  {word:"inframammary",    meaning:"乳房下の",                   etymology:"infra（下に）+ mammary（乳房の）",            prefix:"infra-", level:3},

  // ── supra-（上に・超えて） ──────────────────
  {word:"supraclavicular",  meaning:"鎖骨上の",                  etymology:"supra（上に）+ clavicular（鎖骨の）",         prefix:"supra-", level:3},
  {word:"supraglottal",    meaning:"声門上の",                   etymology:"supra（上に）+ glottal（声門の）",            prefix:"supra-", level:3},
  {word:"supratrochlear",  meaning:"滑車上の",                   etymology:"supra（上に）+ trochlear（滑車の）",          prefix:"supra-", level:3},
  {word:"supraduodenal",   meaning:"十二指腸上の",               etymology:"supra（上に）+ duodenal（十二指腸の）",       prefix:"supra-", level:3},
  {word:"suprarealistic",  meaning:"超現実的な",                 etymology:"supra（超えて）+ realistic（現実的な）",      prefix:"supra-", level:2},
  {word:"supraethnic",     meaning:"民族を超えた",               etymology:"supra（超えて）+ ethnic（民族の）",           prefix:"supra-", level:2},
  {word:"suprahistorical", meaning:"歴史を超えた",               etymology:"supra（超えて）+ historical（歴史的な）",     prefix:"supra-", level:3},
  {word:"suprastate",      meaning:"国家を超えた組織",           etymology:"supra（超えて）+ state（国家）",              prefix:"supra-", level:2},
  {word:"supraspinous",    meaning:"棘突起上の",                 etymology:"supra（上に）+ spinous（棘突起の）",          prefix:"supra-", level:3},
  {word:"supraplatform",   meaning:"プラットフォームを超えた",   etymology:"supra（超えて）+ platform（基盤）",           prefix:"supra-", level:2},
  {word:"suprascapular",   meaning:"肩甲骨上の",                 etymology:"supra（上に）+ scapular（肩甲骨の）",         prefix:"supra-", level:3},
  {word:"supraindividual", meaning:"個人を超えた",               etymology:"supra（超えて）+ individual（個人）",         prefix:"supra-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
