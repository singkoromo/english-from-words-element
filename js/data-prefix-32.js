/**
 * data-prefix-32.js — 接頭語補充40（co-, in-, hypo-, pan-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── co-（共に・一緒に） ──────────────────
  {word:"coauthor",        meaning:"共著者",                     etymology:"co（共に）+ author（著者）",                   prefix:"co-", level:1},
  {word:"coexistence",     meaning:"共存・共生",                  etymology:"co（共に）+ existence（存在）",                prefix:"co-", level:1},
  {word:"coevolve",        meaning:"共進化する",                  etymology:"co（共に）+ evolve（進化する）",               prefix:"co-", level:2},
  {word:"cognitively",     meaning:"認知的に",                   etymology:"co（共に）+ gnitively（知る）",               prefix:"co-", level:2},
  {word:"cohabit",         meaning:"同棲する・共に住む",           etymology:"co（共に）+ habit（住む）",                   prefix:"co-", level:1},
  {word:"codependent",     meaning:"共依存の",                   etymology:"co（共に）+ dependent（依存する）",            prefix:"co-", level:2},
  {word:"coercive",        meaning:"強制的な",                   etymology:"co（共に）+ ercive（囲い込む）",              prefix:"co-", level:2},
  {word:"coalesce",        meaning:"合体する・融合する",           etymology:"co（共に）+ alesce（育つ）",                  prefix:"co-", level:2},
  {word:"cofactor",        meaning:"補因子・共同要因",             etymology:"co（共に）+ factor（要因）",                  prefix:"co-", level:2},
  {word:"coagulate",       meaning:"凝固する・固まる",             etymology:"co（共に）+ agulate（塊にする）",              prefix:"co-", level:2},

  // ── in-（否定・内側・中へ） ──────────────────
  {word:"incessant",       meaning:"絶え間ない・間断のない",       etymology:"in（否定）+ cessant（止まる）",               prefix:"in-", level:2},
  {word:"incongruous",     meaning:"不調和な・場違いな",           etymology:"in（否定）+ congruous（調和した）",           prefix:"in-", level:2},
  {word:"indolent",        meaning:"怠惰な・不精な",              etymology:"in（否定）+ dolent（痛みを感じる）",          prefix:"in-", level:2},
  {word:"inviolable",      meaning:"不可侵の・侵してはならない",   etymology:"in（否定）+ violable（侵せる）",              prefix:"in-", level:2},
  {word:"indelible",       meaning:"消せない・永続する",           etymology:"in（否定）+ delible（消せる）",               prefix:"in-", level:2},
  {word:"intransigent",    meaning:"妥協しない・頑固な",           etymology:"in（否定）+ transigent（折り合う）",          prefix:"in-", level:3},
  {word:"incorrigible",    meaning:"矯正できない・手に負えない",   etymology:"in（否定）+ corrigible（矯正できる）",        prefix:"in-", level:3},
  {word:"ineffable",       meaning:"言葉に表せない・言い知れない", etymology:"in（否定）+ effable（言える）",               prefix:"in-", level:3},
  {word:"insatiable",      meaning:"飽くことない・満足しない",     etymology:"in（否定）+ satiable（満足できる）",          prefix:"in-", level:2},
  {word:"inimical",        meaning:"有害な・敵対する",             etymology:"in（否定）+ imical（友好的な）",              prefix:"in-", level:3},

  // ── hypo-（下に・不足・以下） ──────────────────
  {word:"hypoglycemic",    meaning:"低血糖の",                   etymology:"hypo（不足）+ glycemic（血糖の）",            prefix:"hypo-", level:2},
  {word:"hypodermal",      meaning:"皮下の",                     etymology:"hypo（下に）+ dermal（皮膚の）",              prefix:"hypo-", level:2},
  {word:"hypotensive",     meaning:"低血圧の",                   etymology:"hypo（不足）+ tensive（緊張の）",             prefix:"hypo-", level:2},
  {word:"hypotrophic",     meaning:"発育不良の",                  etymology:"hypo（不足）+ trophic（栄養の）",             prefix:"hypo-", level:3},
  {word:"hypocapnia",      meaning:"低炭酸ガス血症",              etymology:"hypo（不足）+ capnia（炭酸ガス）",            prefix:"hypo-", level:3},
  {word:"hypodermis",      meaning:"皮下組織",                   etymology:"hypo（下に）+ dermis（皮膚）",                prefix:"hypo-", level:2},
  {word:"hypopituitarism", meaning:"下垂体機能低下症",            etymology:"hypo（不足）+ pituitarism（下垂体）",         prefix:"hypo-", level:3},
  {word:"hypokinesia",     meaning:"運動低下症",                  etymology:"hypo（不足）+ kinesia（運動）",               prefix:"hypo-", level:3},
  {word:"hypocalcemia",    meaning:"低カルシウム血症",             etymology:"hypo（不足）+ calcemia（カルシウム血症）",    prefix:"hypo-", level:3},
  {word:"hypoxic",         meaning:"低酸素の",                   etymology:"hypo（不足）+ oxic（酸素の）",               prefix:"hypo-", level:2},

  // ── pan-（全て・汎） ──────────────────
  {word:"panculture",      meaning:"汎文化",                     etymology:"pan（全て）+ culture（文化）",                prefix:"pan-", level:2},
  {word:"panpsychism",     meaning:"汎心論",                     etymology:"pan（全て）+ psychism（心の理論）",           prefix:"pan-", level:3},
  {word:"panglobal",       meaning:"全球的な・世界全体の",        etymology:"pan（全て）+ global（地球の）",               prefix:"pan-", level:1},
  {word:"pangenesis",      meaning:"汎生説",                     etymology:"pan（全て）+ genesis（起源）",                prefix:"pan-", level:3},
  {word:"panarthritic",    meaning:"全関節炎の",                  etymology:"pan（全て）+ arthritic（関節炎の）",          prefix:"pan-", level:3},
  {word:"panspermic",      meaning:"汎種説の",                   etymology:"pan（全て）+ spermic（種の）",               prefix:"pan-", level:3},
  {word:"panregional",     meaning:"全地域の・汎地域的な",        etymology:"pan（全て）+ regional（地域の）",             prefix:"pan-", level:2},
  {word:"pandemics",       meaning:"パンデミック群・感染病群",    etymology:"pan（全て）+ demics（人々）",                 prefix:"pan-", level:1},
  {word:"panarchism",      meaning:"汎無政府主義",                etymology:"pan（全て）+ archism（政治体制）",            prefix:"pan-", level:3},
  {word:"panslavism",      meaning:"汎スラブ主義",                etymology:"pan（全て）+ slavism（スラブ主義）",          prefix:"pan-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
