/**
 * data-prefix-27.js — 接頭語補充17（sub-, inter-, dia-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── sub-（下・副・不完全） ──────────────────
  {word:"submarine",            meaning:"潜水艦・海中の",                  etymology:"sub（下）+ marine（海の）",                       prefix:"sub-", level:1},
  {word:"subterranean",         meaning:"地下の・地中の",                  etymology:"sub（下）+ terranean（大地の）",                  prefix:"sub-", level:2},
  {word:"subatomic",            meaning:"原子以下の・素粒子レベルの",      etymology:"sub（下）+ atomic（原子の）",                     prefix:"sub-", level:2},
  {word:"subculture",           meaning:"サブカルチャー・下位文化",        etymology:"sub（下・副）+ culture（文化）",                  prefix:"sub-", level:1},
  {word:"subcommittee",         meaning:"小委員会・分科会",                etymology:"sub（副・下）+ committee（委員会）",              prefix:"sub-", level:1},
  {word:"subsistence",          meaning:"最低限の生活・生存手段",          etymology:"sub（下）+ sistence（立つこと）",                 prefix:"sub-", level:2},
  {word:"substandard",          meaning:"標準以下の・低品質な",            etymology:"sub（下）+ standard（標準）",                     prefix:"sub-", level:1},
  {word:"subcategory",          meaning:"下位カテゴリ・サブカテゴリ",      etymology:"sub（下）+ category（分類）",                     prefix:"sub-", level:1},
  {word:"subprime",             meaning:"サブプライム・低信用の",          etymology:"sub（下）+ prime（最優先）",                      prefix:"sub-", level:2},
  {word:"subtext",              meaning:"行間の意味・暗黙のメッセージ",    etymology:"sub（下）+ text（文章）",                         prefix:"sub-", level:2},
  {word:"suboptimal",           meaning:"最適以下の・準最適な",            etymology:"sub（下）+ optimal（最適な）",                    prefix:"sub-", level:2},
  {word:"subversive",           meaning:"破壊的な・体制転覆的な",          etymology:"sub（下・逆）+ versive（向ける）",                prefix:"sub-", level:2},
  {word:"subregion",            meaning:"下位地域・小地域",                etymology:"sub（下・副）+ region（地域）",                   prefix:"sub-", level:1},
  {word:"subduction",           meaning:"沈み込み・地殻沈下（地質）",     etymology:"sub（下）+ duction（引くこと）",                  prefix:"sub-", level:3},

  // ── inter-（間・相互） ──────────────────
  {word:"interlace",            meaning:"組み合わせる・交互に編む",        etymology:"inter（間）+ lace（結ぶ）",                       prefix:"inter-", level:2},
  {word:"interlock",            meaning:"連結する・かみ合わせる",          etymology:"inter（間）+ lock（かぎ）",                       prefix:"inter-", level:2},
  {word:"interstellar",         meaning:"星間の・恒星間の",                etymology:"inter（間）+ stellar（星の）",                    prefix:"inter-", level:2},
  {word:"interplay",            meaning:"相互作用・絡み合い",              etymology:"inter（間）+ play（動き・働き）",                 prefix:"inter-", level:2},
  {word:"intertwine",           meaning:"絡み合う・互いに縒り合わせる",   etymology:"inter（間）+ twine（縒り糸）",                    prefix:"inter-", level:2},
  {word:"interconnect",         meaning:"相互接続する",                    etymology:"inter（間）+ connect（接続する）",                prefix:"inter-", level:1},
  {word:"intercollegiate",      meaning:"大学間の・校際の",                etymology:"inter（間）+ collegiate（大学の）",               prefix:"inter-", level:2},
  {word:"interlingual",         meaning:"言語間の",                        etymology:"inter（間）+ lingual（言語の）",                  prefix:"inter-", level:3},
  {word:"interrelate",          meaning:"相互に関係づける",                etymology:"inter（間）+ relate（関連する）",                 prefix:"inter-", level:2},
  {word:"interspecies",         meaning:"種間の・異種間の",                etymology:"inter（間）+ species（種）",                      prefix:"inter-", level:2},
  {word:"interfaith",           meaning:"異宗教間の・諸宗教の対話",        etymology:"inter（間）+ faith（信仰）",                      prefix:"inter-", level:2},
  {word:"intermingled",         meaning:"混ざり合った・混交した",          etymology:"inter（間）+ mingled（混ざった）",                prefix:"inter-", level:2},
  {word:"interoperability",     meaning:"相互運用性",                      etymology:"inter（間）+ operability（動作可能性）",          prefix:"inter-", level:3},
  {word:"intersubjective",      meaning:"間主観的な",                      etymology:"inter（間）+ subjective（主観的な）",             prefix:"inter-", level:3},

  // ── dia-（通って・横断・完全に） ──────────────────
  {word:"diaeresis",            meaning:"分音記号・二重母音分離",          etymology:"dia（分離）+ eresis（取ること）",                 prefix:"dia-", level:3},
  {word:"diamagnetic",          meaning:"反磁性の",                        etymology:"dia（通って）+ magnetic（磁気の）",               prefix:"dia-", level:3},
  {word:"diapedesis",           meaning:"白血球遊走・細胞浸出",            etymology:"dia（通って）+ pedesis（飛び跳ねること）",        prefix:"dia-", level:3},
  {word:"diapositive",          meaning:"ポジフィルム・透過スライド",      etymology:"dia（通って）+ positive（陽）",                   prefix:"dia-", level:3},
  {word:"diarchic",             meaning:"二頭政治の",                      etymology:"dia（二）+ archic（支配の）",                     prefix:"dia-", level:3},
  {word:"diaconate",            meaning:"助祭職・助祭団",                  etymology:"dia（奉仕）+ conate（職務）",                     prefix:"dia-", level:3},
  {word:"diacrisis",            meaning:"鑑別診断・分離判断",              etymology:"dia（完全に）+ crisis（判断・決定）",             prefix:"dia-", level:3},
  {word:"diakonia",             meaning:"奉仕・ミニストリー（教会）",      etymology:"dia（通して）+ konia（仕えること）",              prefix:"dia-", level:3},
  {word:"dialysate",            meaning:"透析液",                          etymology:"dia（通して）+ lysate（溶解物）",                 prefix:"dia-", level:3},
  {word:"diagonalization",      meaning:"対角化（数学・線形代数）",        etymology:"dia（横断）+ gonalization（角の計算）",           prefix:"dia-", level:3},
  {word:"diaderm",              meaning:"二胚葉動物",                      etymology:"dia（二）+ derm（皮膚・胚葉）",                   prefix:"dia-", level:3},
  {word:"diaphorase",           meaning:"ジアホラーゼ（酵素）",            etymology:"dia（通して）+ phorase（運搬酵素）",              prefix:"dia-", level:3},
  {word:"diapsid",              meaning:"双弓類（爬虫類の分類）",          etymology:"dia（二・完全）+ apsid（弓形の）",                prefix:"dia-", level:3},
  {word:"diaspora",             meaning:"離散・ディアスポラ",              etymology:"dia（通して・散らして）+ spora（種まき）",        prefix:"dia-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
