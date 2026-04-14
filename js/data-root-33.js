/**
 * data-root-27.js — 語根データ（-metr/-meter-, -dent/-odont-, -lith-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -metr/-meter-（測る・計量） ──────────────────
  {word:"meter",       meaning:"メートル・計測器",         etymology:"metr（測る）+ er",                          root:"-meter-", level:0},
  {word:"metric",      meaning:"測定の・メートル法の",     etymology:"metr（測る）+ ic（〜の）",                  root:"-meter-", level:1},
  {word:"geometry",    meaning:"幾何学",                  etymology:"geo（大地）+ metr（測る）+ y",              root:"-meter-", level:1},
  {word:"thermometer", meaning:"温度計",                  etymology:"thermo（熱）+ metr（測る）+ er",            root:"-meter-", level:1},
  {word:"barometer",   meaning:"気圧計・バロメーター",     etymology:"baro（重さ・気圧）+ metr（測る）+ er",      root:"-meter-", level:2},
  {word:"altimeter",   meaning:"高度計",                  etymology:"alti（高さ）+ metr（測る）+ er",            root:"-meter-", level:2},
  {word:"speedometer", meaning:"速度計",                  etymology:"speed（速度）+ metr（測る）+ er",           root:"-meter-", level:1},
  {word:"kilometer",   meaning:"キロメートル",             etymology:"kilo（千）+ metr（測る）+ er",              root:"-meter-", level:0},
  {word:"centimeter",  meaning:"センチメートル",           etymology:"centi（百分の一）+ metr（測る）+ er",       root:"-meter-", level:0},
  {word:"millimeter",  meaning:"ミリメートル",             etymology:"milli（千分の一）+ metr（測る）+ er",       root:"-meter-", level:0},
  {word:"diameter",    meaning:"直径",                    etymology:"dia（通り抜けて）+ metr（測る）+ er",       root:"-meter-", level:1},
  {word:"perimeter",   meaning:"周囲・周長",               etymology:"peri（周りを）+ metr（測る）+ er",          root:"-meter-", level:2},
  {word:"symmetric",   meaning:"対称的な",                etymology:"sym（共に）+ metr（測る）+ ic",             root:"-meter-", level:2},
  {word:"asymmetric",  meaning:"非対称の",                etymology:"a（否定）+ sym（共に）+ metr（測る）+ ic",  root:"-meter-", level:2},
  {word:"chronometer", meaning:"精密時計・経線儀",         etymology:"chron（時）+ metr（測る）+ er",             root:"-meter-", level:3},
  {word:"manometer",   meaning:"圧力計・マノメーター",     etymology:"mano（薄い・気体）+ metr（測る）+ er",      root:"-meter-", level:3},

  // ── -dent/-odont-（歯） ──────────────────
  {word:"dental",      meaning:"歯の・歯科の",             etymology:"dent（歯）+ al（〜の）",                    root:"-dent-", level:1},
  {word:"dentist",     meaning:"歯科医",                  etymology:"dent（歯）+ ist（〜の人）",                 root:"-dent-", level:0},
  {word:"denture",     meaning:"入れ歯・義歯",             etymology:"dent（歯）+ ure（〜のもの）",               root:"-dent-", level:2},
  {word:"indent",      meaning:"字下げする・くぼませる",   etymology:"in（中に）+ dent（歯・くぼみ）",            root:"-dent-", level:2},
  {word:"trident",     meaning:"三叉の矛",                etymology:"tri（三つ）+ dent（歯・尖り）",             root:"-dent-", level:2},
  {word:"dentine",     meaning:"象牙質",                  etymology:"dent（歯）+ ine（〜の）",                   root:"-dent-", level:3},
  {word:"orthodontics",meaning:"矯正歯科学",               etymology:"ortho（まっすぐ）+ odont（歯）+ ics",      root:"-odont-", level:3},
  {word:"periodontal", meaning:"歯周の",                  etymology:"peri（周りの）+ odont（歯）+ al",           root:"-odont-", level:3},
  {word:"mastodon",    meaning:"マストドン（古代象）",     etymology:"masto（乳房）+ odont（歯）←乳房状の歯から",root:"-odont-", level:3},
  {word:"dentition",   meaning:"歯の生え方・歯列",         etymology:"dent（歯）+ ition（状態）",                 root:"-dent-", level:3},

  // ── -lith-（石） ──────────────────
  {word:"monolith",    meaning:"一枚岩・巨大な単一体",     etymology:"mono（一つ）+ lith（石）",                  root:"-lith-", level:2},
  {word:"megalith",    meaning:"巨石・メガリス",           etymology:"mega（大きい）+ lith（石）",                root:"-lith-", level:2},
  {word:"neolithic",   meaning:"新石器時代の",             etymology:"neo（新しい）+ lith（石）+ ic（〜の）",     root:"-lith-", level:2},
  {word:"paleolithic", meaning:"旧石器時代の",             etymology:"paleo（古い）+ lith（石）+ ic（〜の）",     root:"-lith-", level:2},
  {word:"lithograph",  meaning:"石版画・リトグラフ",       etymology:"lith（石）+ graph（書く）",                 root:"-lith-", level:2},
  {word:"lithosphere", meaning:"岩石圏・リソスフィア",     etymology:"lith（石）+ sphere（球体）",                root:"-lith-", level:3},
  {word:"lithium",     meaning:"リチウム（金属元素）",     etymology:"lith（石）+ ium（金属）",                   root:"-lith-", level:2},
  {word:"trilith",     meaning:"三石構造物",               etymology:"tri（三）+ lith（石）",                     root:"-lith-", level:3},
  {word:"aerolite",    meaning:"石質隕石",                 etymology:"aero（空気・空）+ lite（石）",              root:"-lith-", level:3},
  {word:"chrysolite",  meaning:"貴橄欖石",                 etymology:"chryso（金）+ lite（石）",                  root:"-lith-", level:3},
  {word:"catechism",   meaning:"教理問答",                 etymology:"cat（下から）+ echo（响かせる）+ ism",      root:"-lith-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
