/**
 * data-root-23.js — 語根データ（-cap-/-cip-/-cept-, -dem-, -luc-/-lum-, -man-/-manu-, -mar-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -cap-/-cip-/-cept-（取る・掴む） ──────────────────
  {word:"capture",           meaning:"捕まえる・獲得する",          etymology:"cap（取る）+ ture（行為）",                    root:"-cap-",  level:1},
  {word:"capable",           meaning:"有能な・〜できる",            etymology:"cap（取る）+ able（できる）",                  root:"-cap-",  level:1},
  {word:"capacity",          meaning:"容量・能力",                 etymology:"cap（取る）+ acity（性質）",                  root:"-cap-",  level:1},
  {word:"capital",           meaning:"首都・資本・大文字",          etymology:"cap（頭・取る）+ ital（〜の）",                root:"-cap-",  level:0},
  {word:"captain",           meaning:"船長・隊長",                 etymology:"cap（頭）+ tain（人）",                       root:"-cap-",  level:0},
  {word:"accept",            meaning:"受け入れる・承諾する",        etymology:"ac（〜に）+ cept（取る）",                    root:"-cept-", level:0},
  {word:"except",            meaning:"〜を除いて・例外",            etymology:"ex（外に）+ cept（取る）",                    root:"-cept-", level:0},
  {word:"concept",           meaning:"概念・考え",                 etymology:"con（共に）+ cept（取る）→まとめ取り",         root:"-cept-", level:1},
  {word:"intercept",         meaning:"遮断する・横取りする",        etymology:"inter（間に）+ cept（取る）",                 root:"-cept-", level:2},
  {word:"perceive",          meaning:"知覚する・理解する",          etymology:"per（完全に）+ ceive（取る）",                 root:"-cip-",  level:2},
  {word:"receive",           meaning:"受け取る",                  etymology:"re（再び）+ ceive（取る）",                    root:"-cip-",  level:0},
  {word:"deceive",           meaning:"だます・欺く",               etymology:"de（離れて）+ ceive（取る）",                  root:"-cip-",  level:2},
  {word:"conceive",          meaning:"考える・妊娠する",            etymology:"con（完全に）+ ceive（取る）",                 root:"-cip-",  level:2},
  {word:"participate",       meaning:"参加する・加わる",            etymology:"parti（部分）+ cip（取る）+ ate（〜する）",    root:"-cip-",  level:1},
  {word:"anticipate",        meaning:"予期する・楽しみに待つ",      etymology:"anti（前に）+ cip（取る）+ ate（〜する）",     root:"-cip-",  level:2},
  {word:"recipe",            meaning:"レシピ・処方",               etymology:"re（再び）+ cipe（取る）→取り直す",            root:"-cip-",  level:1},
  {word:"susceptible",       meaning:"影響を受けやすい",            etymology:"sus（下で）+ cept（取る）+ ible（できる）",    root:"-cept-", level:3},
  {word:"perceptive",        meaning:"知覚力のある・洞察力のある",  etymology:"per（完全に）+ cept（取る）+ ive（〜の）",     root:"-cept-", level:2},

  // ── -dem-/-demo-（人々・民） ──────────────────
  {word:"democracy",         meaning:"民主主義",                  etymology:"demo（人々）+ cracy（支配）",                  root:"-dem-",  level:1},
  {word:"democrat",          meaning:"民主主義者",                 etymology:"demo（人々）+ crat（支配者）",                 root:"-dem-",  level:1},
  {word:"democratic",        meaning:"民主的な",                  etymology:"demo（人々）+ cratic（支配の）",               root:"-dem-",  level:1},
  {word:"demography",        meaning:"人口統計学",                 etymology:"demo（人々）+ graphy（書くこと）",             root:"-dem-",  level:2},
  {word:"demographic",       meaning:"人口統計的な",               etymology:"demo（人々）+ graphic（〜の）",               root:"-dem-",  level:2},
  {word:"epidemic",          meaning:"流行病・蔓延する",            etymology:"epi（上に）+ dem（人々）+ ic（〜の）",         root:"-dem-",  level:2},
  {word:"pandemic",          meaning:"世界的流行病",               etymology:"pan（全て）+ dem（人々）+ ic（〜の）",         root:"-dem-",  level:2},
  {word:"endemic",           meaning:"固有の・地方病的な",          etymology:"en（中に）+ dem（人々）+ ic（〜の）",          root:"-dem-",  level:3},
  {word:"demagogue",         meaning:"扇動政治家",                 etymology:"demo（人々）+ agogue（導く者）",               root:"-dem-",  level:3},
  {word:"demagogy",          meaning:"衆愚政治・扇動",             etymology:"demo（人々）+ agogy（導くこと）",              root:"-dem-",  level:3},
  {word:"demos",             meaning:"民衆・デモス",               etymology:"demos（人々）",                               root:"-dem-",  level:3},

  // ── -luc-/-lum-/-lumin-（光） ──────────────────
  {word:"light",             meaning:"光・明るい",                 etymology:"luc（光）→古英語 lēoht",                      root:"-luc-",  level:0},
  {word:"illuminate",        meaning:"照らす・明らかにする",        etymology:"il（〜に）+ lumin（光）+ ate（〜する）",        root:"-lum-",  level:2},
  {word:"luminous",          meaning:"発光する・光り輝く",          etymology:"lumin（光）+ ous（〜の）",                     root:"-lum-",  level:2},
  {word:"luminosity",        meaning:"輝度・光度",                 etymology:"lumin（光）+ osity（状態）",                   root:"-lum-",  level:3},
  {word:"lucid",             meaning:"明晰な・透明な",             etymology:"luc（光）+ id（〜の）",                        root:"-luc-",  level:2},
  {word:"lucidity",          meaning:"明晰さ・明瞭性",             etymology:"luc（光）+ idity（状態）",                     root:"-luc-",  level:3},
  {word:"elucidate",         meaning:"明らかにする・解明する",      etymology:"e（外に）+ luc（光）+ idate（〜する）",         root:"-luc-",  level:3},
  {word:"translucent",       meaning:"半透明の",                  etymology:"trans（通して）+ luc（光）+ ent（〜の）",       root:"-luc-",  level:2},
  {word:"luster",            meaning:"光沢・輝き",                 etymology:"lust（光）+ er（状態）",                       root:"-lum-",  level:2},
  {word:"illustrate",        meaning:"説明する・挿絵を入れる",      etymology:"il（〜に）+ lust（光・明らか）+ rate（〜する）", root:"-lum-",  level:1},
  {word:"illustrious",       meaning:"著名な・輝かしい",            etymology:"il（〜に）+ lust（光）+ rious（〜の）",        root:"-lum-",  level:3},
  {word:"luminary",          meaning:"著名人・発光体",             etymology:"lumin（光）+ ary（〜の人）",                   root:"-lum-",  level:3},
  {word:"bioluminescence",   meaning:"生物発光",                  etymology:"bio（生命）+ lumin（光）+ escence（現象）",     root:"-lum-",  level:3},

  // ── -man-/-manu-（手） ──────────────────
  {word:"manual",            meaning:"手動の・取扱説明書",          etymology:"manu（手）+ al（〜の）",                       root:"-man-",  level:1},
  {word:"manufacture",       meaning:"製造する・製品",             etymology:"manu（手）+ fact（作る）+ ure（行為）",         root:"-man-",  level:2},
  {word:"manuscript",        meaning:"原稿・手書き文書",            etymology:"manu（手）+ script（書く）",                   root:"-man-",  level:2},
  {word:"manipulate",        meaning:"操作する・操る",             etymology:"mani（手）+ pul（満たす）+ ate（〜する）",      root:"-man-",  level:2},
  {word:"maneuver",          meaning:"作戦行動・巧みに動かす",      etymology:"man（手）+ oeuvr（作品）→手で働く",            root:"-man-",  level:2},
  {word:"manage",            meaning:"管理する・何とかする",        etymology:"man（手）+ age（行為）→手で扱う",              root:"-man-",  level:1},
  {word:"manner",            meaning:"方法・礼儀",                 etymology:"man（手）+ ner（方法）",                       root:"-man-",  level:1},
  {word:"manicure",          meaning:"マニキュア・手の手入れ",      etymology:"mani（手）+ cure（手入れ）",                   root:"-man-",  level:1},
  {word:"manifest",          meaning:"明白な・表明する",            etymology:"mani（手）+ fest（打つ）→手でつかめる",        root:"-man-",  level:2},
  {word:"mandate",           meaning:"命令・委任",                 etymology:"man（手）+ date（与える）→手渡す",             root:"-man-",  level:2},
  {word:"command",           meaning:"命令する・指揮する",          etymology:"com（完全に）+ mand（手）→手中に収める",        root:"-man-",  level:0},
  {word:"demand",            meaning:"要求する・需要",             etymology:"de（完全に）+ mand（手）→強く手に入れる",       root:"-man-",  level:1},
  {word:"emancipate",        meaning:"解放する・自由にする",        etymology:"e（外に）+ manci（手）+ pate（〜する）→手放す", root:"-man-",  level:3},

  // ── -mar-/-mer-/-mort-（海・死） ──────────────────
  {word:"marine",            meaning:"海の・海兵隊",               etymology:"mar（海）+ ine（〜の）",                       root:"-mar-",  level:1},
  {word:"maritime",          meaning:"海事の・沿海の",             etymology:"mar（海）+ itime（〜の）",                     root:"-mar-",  level:2},
  {word:"mariner",           meaning:"船乗り・水夫",               etymology:"mar（海）+ iner（〜の人）",                    root:"-mar-",  level:2},
  {word:"submarine",         meaning:"潜水艦・海底の",             etymology:"sub（下に）+ mar（海）+ ine（〜の）",          root:"-mar-",  level:1},
  {word:"aquamarine",        meaning:"アクアマリン・青緑色",        etymology:"aqua（水）+ mar（海）+ ine（〜の）",           root:"-mar-",  level:2},
  {word:"mermaid",           meaning:"人魚",                      etymology:"mer（海）+ maid（乙女）",                      root:"-mar-",  level:1},
  {word:"mere",              meaning:"単なる・湖",                 etymology:"mer（海・水）から",                            root:"-mar-",  level:2},
  {word:"immerse",           meaning:"浸す・没頭させる",            etymology:"im（中に）+ mers（海・浸す）+ e",              root:"-mar-",  level:2},
  {word:"submerge",          meaning:"水没する・沈める",            etymology:"sub（下に）+ merg（浸す）+ e",                 root:"-mar-",  level:2},
  {word:"emerge",            meaning:"現れる・浮かび上がる",        etymology:"e（外に）+ merg（浸す）+ e",                   root:"-mar-",  level:1},
  {word:"marsh",             meaning:"湿地・沼地",                 etymology:"mar（水）+ sh（場所）",                        root:"-mar-",  level:2},
  {word:"mariculture",       meaning:"海面養殖",                  etymology:"mar（海）+ iculture（栽培）",                  root:"-mar-",  level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
