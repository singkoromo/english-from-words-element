/**
 * data-mixed-33.js — 環境・エコロジー・気候・地球科学用語（95語）
 * 形式: { word, meaning, etymology, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  /* ── 気候・大気用語 20語 ── */
  {word:"stratosphere",       meaning:"成層圏",                      etymology:"strato（層）+ sphere（球体）",                  level:5, pos:"名詞"},
  {word:"troposphere",        meaning:"対流圏",                      etymology:"tropo（変化）+ sphere（球体）",                 level:5, pos:"名詞"},
  {word:"precipitation",      meaning:"降水量・降水",                etymology:"pre（前に）+ cipit（落下）+ ation",             level:6, pos:"名詞"},
  {word:"evaporation",        meaning:"蒸発",                        etymology:"e（外に）+ vapor（蒸気）+ ation（行為）",       level:6, pos:"名詞"},
  {word:"condensation",       meaning:"凝縮・結露",                  etymology:"con（完全に）+ dens（密な）+ ation",            level:5, pos:"名詞"},
  {word:"humidity",           meaning:"湿度・湿気",                  etymology:"humid（湿った）+ ity（状態）",                  level:4, pos:"名詞"},
  {word:"cyclone",            meaning:"サイクロン・低気圧",          etymology:"cyclo（円）+ one（〜のもの）",                  level:5, pos:"名詞"},
  {word:"monsoon",            meaning:"モンスーン・季節風",          etymology:"mausim（アラビア語：季節）",                    level:5, pos:"名詞"},
  {word:"drought",            meaning:"干ばつ",                      etymology:"drought（乾燥）←古英語drugath",                 level:5, pos:"動詞"},
  {word:"inundation",         meaning:"洪水・氾濫",                  etymology:"in（〜に）+ und（波）+ ation（行為）",          level:6, pos:"名詞"},
  {word:"desertification",    meaning:"砂漠化",                      etymology:"desert（砂漠）+ ification（〜化）",             level:6, pos:"名詞"},
  {word:"permafrost",         meaning:"永久凍土",                    etymology:"perma（永久の）+ frost（霜）",                  level:6, pos:"名詞"},
  {word:"albedo",             meaning:"アルベド・反射率",            etymology:"albed（白い）+ o←ラテン語albus",               level:6, pos:"名詞"},
  {word:"greenhouse effect",  meaning:"温室効果",                    etymology:"greenhouse（温室）+ effect（効果）",            level:4, pos:"名詞"},
  {word:"global warming",     meaning:"地球温暖化",                  etymology:"global（地球の）+ warming（温暖化）",           level:4, pos:"名詞"},
  {word:"ozone layer",        meaning:"オゾン層",                    etymology:"ozone（オゾン）+ layer（層）",                  level:4, pos:"名詞"},
  {word:"carbon footprint",   meaning:"カーボンフットプリント",       etymology:"carbon（炭素）+ footprint（足跡）",             level:5, pos:"名詞"},
  {word:"aerosol",            meaning:"エアロゾル・微粒子",          etymology:"aero（空気）+ sol（溶液）",                     level:5, pos:"名詞"},
  {word:"meteorology",        meaning:"気象学",                      etymology:"meteor（大気現象）+ ology（学問）",             level:6, pos:"名詞"},
  {word:"permafrost",         meaning:"永久凍土",                    etymology:"perma（永久の）+ frost（霜）",                  level:6, pos:"名詞"},

  /* ── 生態系・生物多様性 25語 ── */
  {word:"biodiversity",       meaning:"生物多様性",                  etymology:"bio（生命）+ diversity（多様性）",              level:6, pos:"名詞"},
  {word:"ecosystem",          meaning:"生態系",                      etymology:"eco（家・環境）+ system（系）",                 level:4, pos:"名詞"},
  {word:"biosphere",          meaning:"生物圏",                      etymology:"bio（生命）+ sphere（球体）",                   level:5, pos:"名詞"},
  {word:"biome",              meaning:"バイオーム・生物群系",        etymology:"bio（生命）+ ome（集合）",                      level:5, pos:"名詞"},
  {word:"habitat",            meaning:"生息地・生育地",              etymology:"habit（住む）+ at（場所）",                     level:3, pos:"名詞"},
  {word:"symbiosis",          meaning:"共生",                        etymology:"sym（共に）+ bio（生きる）+ sis（状態）",       level:5, pos:"名詞"},
  {word:"mutualism",          meaning:"相利共生",                    etymology:"mutual（相互の）+ ism（状態）",                 level:6, pos:"名詞"},
  {word:"parasitism",         meaning:"寄生・寄生関係",              etymology:"para（傍ら）+ sit（座る）+ ism",               level:6, pos:"名詞"},
  {word:"invasive species",   meaning:"侵略的外来種",                etymology:"invasive（侵入的な）+ species（種）",           level:6, pos:"名詞"},
  {word:"endemic species",    meaning:"固有種",                      etymology:"endemic（固有の）+ species（種）",             level:6, pos:"名詞"},
  {word:"endangered species", meaning:"絶滅危惧種",                  etymology:"endangered（危機的な）+ species（種）",         level:6, pos:"名詞"},
  {word:"extinction",         meaning:"絶滅",                        etymology:"ex（外に）+ stinct（消える）+ ion",             level:5, pos:"名詞"},
  {word:"reforestation",      meaning:"再植林",                      etymology:"re（再び）+ forest（森）+ ation（行為）",       level:6, pos:"名詞"},
  {word:"deforestation",      meaning:"森林破壊",                    etymology:"de（除去）+ forest（森）+ ation（行為）",       level:6, pos:"名詞"},
  {word:"photosynthesis",     meaning:"光合成",                      etymology:"photo（光）+ synthesis（合成）",               level:6, pos:"名詞"},
  {word:"decomposition",      meaning:"分解・腐敗",                  etymology:"de（完全に）+ composition（構成）→分解",        level:6, pos:"名詞"},
  {word:"food web",           meaning:"食物網",                      etymology:"food（食物）+ web（網）",                      level:5, pos:"名詞"},
  {word:"keystone species",   meaning:"キーストーン種",              etymology:"keystone（要石）+ species（種）",              level:7, pos:"名詞"},
  {word:"niche",              meaning:"ニッチ・生態的地位",          etymology:"niche（フランス語：くぼみ）",                   level:5, pos:"名詞"},
  {word:"trophic level",      meaning:"栄養段階",                    etymology:"trophic（栄養の）+ level（段階）",              level:6, pos:"名詞"},
  {word:"predator",           meaning:"捕食者・肉食動物",            etymology:"predat（略奪する）+ or（〜のもの）",            level:5, pos:"名詞"},
  {word:"prey",               meaning:"獲物・被食者",                etymology:"preda（略奪物）←ラテン語",                     level:3, pos:"名詞"},
  {word:"chlorophyll",        meaning:"葉緑素",                      etymology:"chloro（緑）+ phyll（葉）",                     level:5, pos:"名詞"},
  {word:"nutrient cycle",     meaning:"栄養循環",                    etymology:"nutrient（栄養素）+ cycle（循環）",             level:5, pos:"名詞"},
  {word:"commensalism",       meaning:"片利共生",                    etymology:"com（共に）+ mensa（食卓）+ ism",              level:6, pos:"名詞"},

  /* ── 環境問題・汚染・解決策 30語 ── */
  {word:"pollution",          meaning:"汚染・公害",                  etymology:"pollut（汚す）+ ion（行為）",                   level:3, pos:"名詞"},
  {word:"contamination",      meaning:"汚染・混入",                  etymology:"con（共に）+ tamin（触れて汚す）+ ation",       level:6, pos:"名詞"},
  {word:"toxic",              meaning:"有毒な・毒性の",              etymology:"toxic（毒矢の）←ギリシャ語toxikon",            level:3, pos:"形容詞"},
  {word:"bioaccumulation",    meaning:"生物蓄積",                    etymology:"bio（生命）+ accumulation（蓄積）",             level:7, pos:"名詞"},
  {word:"biomagnification",   meaning:"生物濃縮",                    etymology:"bio（生命）+ magnification（拡大）",            level:7, pos:"名詞"},
  {word:"eutrophication",     meaning:"富栄養化",                    etymology:"eu（良い）+ troph（栄養）+ ication（〜化）",   level:7, pos:"名詞"},
  {word:"acid rain",          meaning:"酸性雨",                      etymology:"acid（酸性の）+ rain（雨）",                   level:3, pos:"名詞"},
  {word:"smog",               meaning:"スモッグ",                    etymology:"smoke（煙）+ fog（霧）の合成語",               level:3, pos:"名詞"},
  {word:"microplastics",      meaning:"マイクロプラスチック",         etymology:"micro（微小な）+ plastics（プラスチック）",     level:5, pos:"名詞"},
  {word:"remediation",        meaning:"環境修復",                    etymology:"re（再び）+ med（治す）+ iation（行為）",       level:6, pos:"名詞"},
  {word:"bioremediation",     meaning:"生物学的環境修復",            etymology:"bio（生命）+ remediation（修復）",              level:7, pos:"名詞"},
  {word:"landfill",           meaning:"埋立地・廃棄物処分場",        etymology:"land（土地）+ fill（埋める）",                  level:5, pos:"名詞"},
  {word:"incineration",       meaning:"焼却・燃焼処理",              etymology:"in（中に）+ ciner（灰）+ ation（行為）",        level:7, pos:"名詞"},
  {word:"recycling",          meaning:"リサイクル・再利用",          etymology:"re（再び）+ cycle（循環）+ ing",               level:2, pos:"名詞"},
  {word:"sustainability",     meaning:"持続可能性",                  etymology:"sustain（支える）+ ability（できること）",       level:6, pos:"名詞"},
  {word:"renewable",          meaning:"再生可能な",                  etymology:"re（再び）+ new（新しい）+ able（できる）",      level:3, pos:"形容詞"},
  {word:"carbon neutral",     meaning:"カーボンニュートラル",         etymology:"carbon（炭素）+ neutral（中立）",              level:5, pos:"名詞"},
  {word:"net zero",           meaning:"ネットゼロ",                  etymology:"net（差し引き）+ zero（ゼロ）",                level:5, pos:"名詞"},
  {word:"sequestration",      meaning:"炭素隔離・封鎖",              etymology:"sequest（分離する）+ ation（行為）",            level:6, pos:"名詞"},
  {word:"geothermal",         meaning:"地熱の",                      etymology:"geo（大地）+ thermal（熱の）",                  level:5, pos:"形容詞"},
  {word:"hydroelectric",      meaning:"水力発電の",                  etymology:"hydro（水）+ electric（電気の）",               level:5, pos:"形容詞"},
  {word:"biomass",            meaning:"バイオマス・生物量",          etymology:"bio（生命）+ mass（量）",                       level:5, pos:"名詞"},
  {word:"decarbonization",    meaning:"脱炭素化",                    etymology:"de（除去）+ carbon（炭素）+ ization（〜化）",   level:7, pos:"名詞"},
  {word:"circular economy",   meaning:"循環型経済",                  etymology:"circular（循環する）+ economy（経済）",         level:6, pos:"名詞"},
  {word:"rewilding",          meaning:"荒野再生・野生化",            etymology:"re（再び）+ wild（野生）+ ing",                level:6, pos:"名詞"},
  {word:"conservation",       meaning:"保全・自然保護",              etymology:"con（完全に）+ serv（守る）+ ation",            level:4, pos:"名詞"},
  {word:"biodegradable",      meaning:"生分解性の",                  etymology:"bio（生命）+ degradable（分解できる）",         level:5, pos:"形容詞"},
  {word:"mitigation",         meaning:"緩和・軽減",                  etymology:"miti（穏やかな）+ gate（〜にする）+ ion",       level:5, pos:"名詞"},
  {word:"adaptation",         meaning:"適応・順応",                  etymology:"adapt（適応する）+ ation（行為）",              level:5, pos:"名詞"},
  {word:"photovoltaic",       meaning:"光起電力の・太陽光発電",      etymology:"photo（光）+ voltaic（電気の）",               level:6, pos:"形容詞・名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
