/**
 * data-root-31.js — 語根データ（-patr-, -pneu-, -libr-, -agri-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -patr-（父・祖国） ──────────────────
  {word:"patron",       meaning:"後援者・常連客",           etymology:"patr（父）+ on（〜の人）→父のような保護者",    root:"-patr-", level:5, pos:"名詞"},
  {word:"patriot",      meaning:"愛国者",                  etymology:"patr（祖国）+ iot（〜の人）",                 root:"-patr-", level:5, pos:"名詞"},
  {word:"patriotic",    meaning:"愛国的な",                etymology:"patriot（愛国者）+ ic（〜の）",               root:"-patr-", level:5, pos:"形容詞"},
  {word:"patrimony",    meaning:"父の遺産・世襲財産",       etymology:"patr（父）+ imony（財産）",                   root:"-patr-", level:6, pos:"名詞"},
  {word:"patronize",    meaning:"後援する・見下した態度をとる",etymology:"patron（後援者）+ ize（〜する）",          root:"-patr-", level:5, pos:"動詞"},
  {word:"patronage",    meaning:"後援・庇護・利用",         etymology:"patron（後援者）+ age（行為）",               root:"-patr-", level:5, pos:"名詞"},
  {word:"patrician",    meaning:"貴族・高貴な",             etymology:"patr（父）+ ician（〜の人）→上流階級",        root:"-patr-", level:6, pos:"名詞・形容詞"},
  {word:"expatriate",   meaning:"国外移住者・追放する",     etymology:"ex（外に）+ patr（祖国）+ iate（〜する）",    root:"-patr-", level:6, pos:"名詞・動詞"},
  {word:"repatriate",   meaning:"本国に送還する",           etymology:"re（再び）+ patr（祖国）+ iate（〜する）",    root:"-patr-", level:6, pos:"動詞"},
  {word:"compatriot",   meaning:"同国人・同胞",             etymology:"com（共に）+ patr（祖国）+ iot（〜の人）",    root:"-patr-", level:6, pos:"名詞"},

  // ── -pneu-（息・空気・呼吸） ──────────────────
  {word:"pneumonia",    meaning:"肺炎",                    etymology:"pneumon（肺）+ ia（病気）",                   root:"-pneu-", level:5, pos:"名詞"},
  {word:"pneumatic",    meaning:"空気の・気体を使う",       etymology:"pneum（空気）+ atic（〜の）",                 root:"-pneu-", level:5, pos:"形容詞・名詞"},
  {word:"apnea",        meaning:"無呼吸",                  etymology:"a（否定）+ pnea（呼吸）",                     root:"-pneu-", level:6, pos:"名詞"},
  {word:"dyspnea",      meaning:"息切れ・呼吸困難",         etymology:"dys（困難）+ pnea（呼吸）",                   root:"-pneu-", level:6, pos:"名詞"},
  {word:"eupnea",       meaning:"正常呼吸",                etymology:"eu（良い）+ pnea（呼吸）",                    root:"-pneu-", level:6, pos:"名詞"},
  {word:"pneumothorax", meaning:"気胸",                    etymology:"pneumo（空気）+ thorax（胸）",                root:"-pneu-", level:6, pos:"名詞"},

  // ── -libr-（本・均衡） ──────────────────
  {word:"library",      meaning:"図書館",                  etymology:"libr（本）+ ary（〜の場所）",                 root:"-libr-", level:2, pos:"名詞"},
  {word:"librarian",    meaning:"司書・図書館員",           etymology:"libr（本）+ arian（〜の人）",                 root:"-libr-", level:3, pos:"名詞"},
  {word:"libretto",     meaning:"台本・リブレット",         etymology:"libr（本）+ etto（小さい）←イタリア語",       root:"-libr-", level:6, pos:"名詞"},
  {word:"equilibrium",  meaning:"均衡・平衡状態",           etymology:"equi（等しい）+ libr（均衡）+ ium",           root:"-libr-", level:5, pos:"名詞"},
  {word:"calibrate",    meaning:"校正する・目盛りをつける", etymology:"caliber（口径）+ ate（〜する）",              root:"-libr-", level:5, pos:"動詞"},
  {word:"deliberate",   meaning:"故意の・審議する",         etymology:"de（完全に）+ libr（重さを量る）+ ate",       root:"-libr-", level:5, pos:"形容詞・動詞"},
  {word:"deliberation", meaning:"審議・熟考",               etymology:"deliberate（審議する）+ ion（行為）",         root:"-libr-", level:6, pos:"名詞"},

  // ── -agri/-agro-（農地・農業） ──────────────────
  {word:"agriculture",  meaning:"農業",                    etymology:"agri（畑）+ cult（耕す）+ ure（行為）",        root:"-agri-", level:4, pos:"名詞"},
  {word:"agricultural", meaning:"農業の",                  etymology:"agriculture（農業）+ al（〜の）",             root:"-agri-", level:4, pos:"形容詞"},
  {word:"agrarian",     meaning:"農業の・土地の",           etymology:"agr（農地）+ arian（〜の）",                  root:"-agri-", level:5, pos:"形容詞"},
  {word:"agronomy",     meaning:"農学・農業経済学",         etymology:"agro（農地）+ nom（法則）+ y",                root:"-agri-", level:6, pos:"名詞"},
  {word:"agribusiness", meaning:"農業関連産業",             etymology:"agri（農業）+ business（産業）",             root:"-agri-", level:6, pos:"名詞"},
  {word:"agroforestry", meaning:"農林業・樹木農業",         etymology:"agro（農業）+ forestry（林業）",             root:"-agri-", level:7, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
