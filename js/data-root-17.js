/**
 * data-root-17.js — 語根データ（-oper-, -ord-, -pac-, -pan-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -oper-（働く・作用する） ──────────────────
  {word:"operate",         meaning:"操作する・手術する・経営する",etymology:"oper（働く）+ ate（する）",                 root:"-oper-", level:1},
  {word:"operation",       meaning:"操作・手術・作戦",           etymology:"operate（操作する）+ ion（行為）",            root:"-oper-", level:1},
  {word:"operator",        meaning:"操作者・交換手・経営者",      etymology:"operate（操作する）+ or（人）",               root:"-oper-", level:1},
  {word:"cooperative",     meaning:"協力的な・協同組合",         etymology:"co（共に）+ operative（働く）",              root:"-oper-", level:2},
  {word:"operational",     meaning:"運用可能な・作戦の",         etymology:"operation（操作）+ al（〜の）",               root:"-oper-", level:2},
  {word:"operable",        meaning:"手術可能な・操作できる",      etymology:"oper（働く）+ able（できる）",                root:"-oper-", level:2},
  {word:"operative",       meaning:"有効な・工作員・職人",        etymology:"oper（働く）+ ative（〜な）",                 root:"-oper-", level:2},
  {word:"opus",            meaning:"作品・楽曲（音楽の）",        etymology:"opus（ラテン語：作品）",                      root:"-oper-", level:3},
  {word:"inoperable",      meaning:"手術できない・機能しない",    etymology:"in（否定）+ operable（手術可能な）",           root:"-oper-", level:3},
  {word:"interoperable",   meaning:"相互運用可能な",             etymology:"inter（間）+ operable（動作できる）",          root:"-oper-", level:3},

  // ── -ord-（秩序・整える） ──────────────────
  {word:"order",           meaning:"命令・秩序・注文",           etymology:"ord（秩序）+ er（〜のもの）",                 root:"-ord-", level:0},
  {word:"ordinary",        meaning:"普通の・平凡な",             etymology:"ord（秩序）+ inary（〜の）→秩序にある",       root:"-ord-", level:0},
  {word:"ordeal",          meaning:"試練・苦難",                 etymology:"or（秩序）+ deal（処理）→古英語：神の裁き",   root:"-ord-", level:2},
  {word:"coordinate",      meaning:"調整する・座標",             etymology:"co（共に）+ ord（秩序）+ inate（する）",      root:"-ord-", level:2},
  {word:"extraordinary",   meaning:"異常な・並外れた",           etymology:"extra（外の）+ ordinary（普通の）",            root:"-ord-", level:1},
  {word:"inordinate",      meaning:"過度の・秩序を欠いた",        etymology:"in（否定）+ ord（秩序）+ inate（〜の）",      root:"-ord-", level:3},
  {word:"orderly",         meaning:"整然とした・衛生兵",         etymology:"order（秩序）+ ly（〜のような）",             root:"-ord-", level:1},
  {word:"disorder",        meaning:"無秩序・混乱・疾患",         etymology:"dis（否定）+ order（秩序）",                  root:"-ord-", level:1},
  {word:"subordinate",     meaning:"従属的な・部下",             etymology:"sub（下に）+ ord（秩序）+ inate（する）",     root:"-ord-", level:2},
  {word:"ordinate",        meaning:"縦座標・正規化する",         etymology:"ord（秩序）+ inate（する）",                  root:"-ord-", level:3},
  {word:"ordinance",       meaning:"条例・法令",                 etymology:"ord（秩序）+ inance（行為）",                 root:"-ord-", level:2},
  {word:"insubordinate",   meaning:"反抗的な・命令に従わない",    etymology:"in（否定）+ sub（下に）+ ord（秩序）+ inate", root:"-ord-", level:3},

  // ── -pac-（平和・静める） ──────────────────
  {word:"peace",           meaning:"平和・平穏",                 etymology:"pac（平和）→ peace（英語）",                  root:"-pac-", level:0},
  {word:"pacify",          meaning:"なだめる・鎮める",           etymology:"pac（平和）+ ify（する）",                    root:"-pac-", level:2},
  {word:"pacific",         meaning:"平和的な・太平洋",           etymology:"pac（平和）+ fic（作る）",                    root:"-pac-", level:1},
  {word:"pacifism",        meaning:"平和主義",                   etymology:"pacific（平和的な）+ ism（主義）",             root:"-pac-", level:2},
  {word:"pacification",    meaning:"鎮圧・平和化",               etymology:"pacify（鎮める）+ tion（行為）",              root:"-pac-", level:3},
  {word:"appease",         meaning:"なだめる・懐柔する",         etymology:"ap（〜に）+ peas（平和）→平和にする",         root:"-pac-", level:2},
  {word:"appeasement",     meaning:"融和政策・懐柔",             etymology:"appease（なだめる）+ ment（行為）",            root:"-pac-", level:3},

  // ── -pan-（広がる・すべて） ──────────────────
  {word:"panorama",        meaning:"全景・パノラマ",             etymology:"pan（すべて）+ horama（景色）",               root:"-pan-", level:1},
  {word:"pandemic",        meaning:"パンデミック・世界的流行病",  etymology:"pan（すべて）+ demos（人々）+ ic（〜の）",    root:"-pan-", level:2},
  {word:"panic",           meaning:"恐慌・パニック",             etymology:"Pan（ギリシャの神）→突然の恐怖",              root:"-pan-", level:1},
  {word:"panacea",         meaning:"万能薬・解決策",             etymology:"pan（すべて）+ akea（治癒）",                 root:"-pan-", level:3},
  {word:"pantheon",        meaning:"万神殿・名声ある人々の集まり",etymology:"pan（すべて）+ theon（神）",                  root:"-pan-", level:3},
  {word:"pantheism",       meaning:"汎神論",                    etymology:"pan（すべて）+ theism（有神論）",             root:"-pan-", level:3},
  {word:"expand",          meaning:"広げる・拡大する",           etymology:"ex（外に）+ pan（広がる）+ d",                root:"-pan-", level:1},
  {word:"expansion",       meaning:"拡大・膨張",                etymology:"expand（広げる）+ sion（行為）",               root:"-pan-", level:1},
  {word:"panoply",         meaning:"完全武装・豪華な飾り",        etymology:"pan（すべて）+ hopla（武器）",                root:"-pan-", level:3},

  // ── -par-（準備する・等しい） ──────────────────
  {word:"prepare",         meaning:"準備する・用意する",         etymology:"pre（前に）+ par（準備する）+ e",             root:"-par-", level:0},
  {word:"repair",          meaning:"修理する・回復する",         etymology:"re（再び）+ par（準備する）+ ir",             root:"-par-", level:1},
  {word:"compare",         meaning:"比較する・例える",           etymology:"com（共に）+ par（等しい）+ e",               root:"-par-", level:1},
  {word:"comparable",      meaning:"匹敵する・比較できる",        etymology:"compare（比較する）+ able（できる）",          root:"-par-", level:2},
  {word:"parity",          meaning:"同等・対等・平価",           etymology:"par（等しい）+ ity（状態）",                  root:"-par-", level:2},
  {word:"disparate",       meaning:"根本的に異なる・不均等な",    etymology:"dis（否定）+ par（等しい）+ ate（〜な）",     root:"-par-", level:3},
  {word:"disparity",       meaning:"不均衡・格差",               etymology:"dis（否定）+ par（等しい）+ ity（状態）",     root:"-par-", level:2},
  {word:"unparalleled",    meaning:"並ぶもののない・前例がない",   etymology:"un（否定）+ par（等しい）+ alleled（並ぶ）",  root:"-par-", level:2},
  {word:"apparatus",       meaning:"装置・器具・組織",           etymology:"ap（〜に）+ par（準備する）+ atus（〜の）",   root:"-par-", level:2},
  {word:"apparent",        meaning:"明らかな・見かけ上の",        etymology:"ap（〜に）+ par（現れる）+ ent（〜な）",      root:"-par-", level:1},
  {word:"transparency",    meaning:"透明性・透明度",             etymology:"trans（横断）+ par（現れる）+ ency（状態）",  root:"-par-", level:1},

  // ── -pater-/-patr-（父・祖国） ──────────────────
  {word:"patron",          meaning:"後援者・パトロン",           etymology:"patr（父）+ on（人）",                        root:"-patr-", level:2},
  {word:"patriot",         meaning:"愛国者",                    etymology:"patr（祖国）+ iot（人）",                     root:"-patr-", level:1},
  {word:"patriotic",       meaning:"愛国的な",                   etymology:"patriot（愛国者）+ ic（〜の）",               root:"-patr-", level:1},
  {word:"paternal",        meaning:"父の・父方の",               etymology:"pater（父）+ nal（〜の）",                    root:"-patr-", level:2},
  {word:"patrimony",       meaning:"遺産・世襲財産",             etymology:"pater（父）+ mony（財産）",                   root:"-patr-", level:3},
  {word:"expatriate",      meaning:"海外居住者・国外追放する",    etymology:"ex（外に）+ patria（祖国）→国から出る",       root:"-patr-", level:3},
  {word:"repatriate",      meaning:"本国に帰還させる",           etymology:"re（戻る）+ patria（祖国）→祖国に戻す",       root:"-patr-", level:3},
  {word:"patronize",       meaning:"後援する・見下す",           etymology:"patron（後援者）+ ize（する）",               root:"-patr-", level:2},
  {word:"patronage",       meaning:"後援・贔屓",                 etymology:"patron（後援者）+ age（行為・状態）",          root:"-patr-", level:2},
  {word:"compatriot",      meaning:"同国人・同胞",               etymology:"com（共に）+ patria（祖国）→同じ祖国",        root:"-patr-", level:2},

  // ── -ped-/-pod-（足） ──────────────────
  {word:"pedestrian",      meaning:"歩行者・平凡な",             etymology:"ped（足）+ estrian（〜の人）→歩く人",         root:"-ped-", level:1},
  {word:"pedal",           meaning:"ペダル・足で踏む",           etymology:"ped（足）+ al（〜の）",                       root:"-ped-", level:0},
  {word:"expedition",      meaning:"遠征・探検",                 etymology:"ex（外に）+ ped（足）+ ition（行為）→足を出す",root:"-ped-", level:2},
  {word:"impediment",      meaning:"障害・妨げ",                 etymology:"im（中に）+ ped（足）+ iment→足を縛る",       root:"-ped-", level:2},
  {word:"pedometer",       meaning:"歩数計",                    etymology:"ped（足）+ meter（計る）",                    root:"-ped-", level:2},
  {word:"centipede",       meaning:"百足虫（ムカデ）",            etymology:"centi（百）+ ped（足）",                      root:"-ped-", level:2},
  {word:"biped",           meaning:"二足動物",                  etymology:"bi（二つ）+ ped（足）",                       root:"-ped-", level:2},
  {word:"podium",          meaning:"演台・表彰台",               etymology:"pod（足）+ ium（場所）→足を置く場所",          root:"-pod-", level:1},
  {word:"tripod",          meaning:"三脚",                      etymology:"tri（三つ）+ pod（足）",                      root:"-pod-", level:1},
  {word:"antipode",        meaning:"対蹠点・正反対",             etymology:"anti（反対）+ pod（足）→反対側の足",           root:"-pod-", level:3},
  {word:"arthropod",       meaning:"節足動物",                  etymology:"arthro（節）+ pod（足）",                     root:"-pod-", level:3},

  // ── -pend-/-pens-（吊る・重さ・払う） ──────────────────
  {word:"depend",          meaning:"依存する・頼る",             etymology:"de（下に）+ pend（吊る）→ぶら下がる",          root:"-pend-", level:0},
  {word:"suspend",         meaning:"一時停止する・吊るす",        etymology:"sus（下に）+ pend（吊る）",                   root:"-pend-", level:1},
  {word:"expenditure",     meaning:"支出・費用",                 etymology:"ex（外に）+ pend（払う）+ iture（行為）",      root:"-pend-", level:2},
  {word:"compensate",      meaning:"補償する・埋め合わせる",      etymology:"com（共に）+ pens（重さ）+ ate（する）",       root:"-pens-", level:2},
  {word:"pension",         meaning:"年金・ペンション",           etymology:"pens（払う）+ ion（行為）",                   root:"-pens-", level:1},
  {word:"expense",         meaning:"費用・出費",                 etymology:"ex（外に）+ pens（払う）+ e",                 root:"-pens-", level:1},
  {word:"dispense",        meaning:"分配する・免除する",         etymology:"dis（離れて）+ pens（払う）",                 root:"-pens-", level:2},
  {word:"indispensable",   meaning:"不可欠な・絶対必要な",        etymology:"in（否定）+ dispens（省く）+ able（できる）",  root:"-pens-", level:2},
  {word:"pendant",         meaning:"ペンダント・吊り飾り",        etymology:"pend（吊る）+ ant（〜の）",                   root:"-pend-", level:1},
  {word:"appendix",        meaning:"付録・虫垂",                 etymology:"ap（〜に）+ pend（吊る）+ ix→付け加えた物",   root:"-pend-", level:2},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
