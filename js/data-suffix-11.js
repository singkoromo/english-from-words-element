/**
 * data-suffix-11.js — 接尾語補充3（-en, -or）
 */
(function(){
  var d = [
  // ── -en（動詞化・形容詞化） ──────────────────
  {word:"harden",    meaning:"固くなる・強くする",      etymology:"hard（固い）+ en（動詞化）",        suffix:"-en", level:1},
  {word:"soften",    meaning:"柔らかくする・和らげる",  etymology:"soft（柔らかい）+ en（動詞化）",    suffix:"-en", level:1},
  {word:"lighten",   meaning:"軽くする・明るくする",    etymology:"light（軽い・明るい）+ en（動詞化）",suffix:"-en", level:1},
  {word:"darken",    meaning:"暗くする・暗くなる",      etymology:"dark（暗い）+ en（動詞化）",        suffix:"-en", level:1},
  {word:"flatten",   meaning:"平らにする",             etymology:"flat（平らな）+ en（動詞化）",      suffix:"-en", level:2},
  {word:"heighten",  meaning:"高める・増す",            etymology:"height（高さ）+ en（動詞化）",      suffix:"-en", level:2},
  {word:"worsen",    meaning:"悪化する・悪化させる",    etymology:"wors（悪い）+ en（動詞化）",        suffix:"-en", level:2},
  {word:"threaten",  meaning:"脅かす・脅迫する",        etymology:"threat（脅し）+ en（動詞化）",      suffix:"-en", level:1},
  {word:"quicken",   meaning:"速める・活発にする",      etymology:"quick（速い）+ en（動詞化）",       suffix:"-en", level:2},
  {word:"fasten",    meaning:"固定する・締める",         etymology:"fast（固定した）+ en（動詞化）",    suffix:"-en", level:1},
  {word:"awaken",    meaning:"目覚めさせる・気づかせる",etymology:"awak（覚める）+ en（動詞化）",      suffix:"-en", level:2},
  {word:"moisten",   meaning:"湿らせる",               etymology:"moist（湿った）+ en（動詞化）",     suffix:"-en", level:2},
  {word:"lengthen",  meaning:"長くする・延ばす",        etymology:"length（長さ）+ en（動詞化）",      suffix:"-en", level:2},
  {word:"blacken",   meaning:"黒くなる・汚す",          etymology:"black（黒い）+ en（動詞化）",       suffix:"-en", level:2},
  {word:"spoken",    meaning:"話された・口頭の",         etymology:"spok（話す）+ en（過去分詞）",      suffix:"-en", level:1},
  {word:"frozen",    meaning:"凍った・凍りついた",       etymology:"froz（凍る）+ en（過去分詞）",      suffix:"-en", level:1},
  {word:"broken",    meaning:"壊れた・割れた",          etymology:"brok（壊す）+ en（過去分詞）",      suffix:"-en", level:0},
  {word:"woven",     meaning:"織られた",               etymology:"wov（織る）+ en（過去分詞）",       suffix:"-en", level:2},
  {word:"shaken",    meaning:"揺すられた・動揺した",    etymology:"shak（揺する）+ en（過去分詞）",    suffix:"-en", level:1},
  {word:"stolen",    meaning:"盗まれた",               etymology:"stol（盗む）+ en（過去分詞）",      suffix:"-en", level:1},
  {word:"rotten",    meaning:"腐った・堕落した",         etymology:"rot（腐る）+ en（状態）",           suffix:"-en", level:1},
  {word:"chosen",    meaning:"選ばれた",               etymology:"chos（選ぶ）+ en（過去分詞）",      suffix:"-en", level:1},

  // ── -or（人・行為者・機器） ──────────────────
  {word:"senator",   meaning:"上院議員",               etymology:"senat（長老）+ or（人）",           suffix:"-or", level:2},
  {word:"professor", meaning:"教授",                   etymology:"profess（宣言する）+ or（人）",     suffix:"-or", level:1},
  {word:"actor",     meaning:"俳優・行為者",            etymology:"act（行動する）+ or（人）",         suffix:"-or", level:0},
  {word:"author",    meaning:"著者・作家",              etymology:"auth（増やす・作る）+ or（人）",    suffix:"-or", level:1},
  {word:"director",  meaning:"監督・取締役",            etymology:"direct（指示する）+ or（人）",      suffix:"-or", level:1},
  {word:"editor",    meaning:"編集者",                  etymology:"edit（編集する）+ or（人）",        suffix:"-or", level:1},
  {word:"visitor",   meaning:"訪問者・来客",             etymology:"visit（訪問する）+ or（人）",       suffix:"-or", level:1},
  {word:"operator",  meaning:"操作者・オペレーター",     etymology:"operat（操作する）+ or（人）",      suffix:"-or", level:2},
  {word:"contractor",meaning:"請負業者・契約者",         etymology:"contract（契約する）+ or（人）",   suffix:"-or", level:2},
  {word:"governor",  meaning:"知事・総督",               etymology:"govern（統治する）+ or（人）",     suffix:"-or", level:2},
  {word:"mentor",    meaning:"指導者・メンター",          etymology:"ment（考える）+ or（人）",         suffix:"-or", level:2},
  {word:"inventor",  meaning:"発明者",                  etymology:"invent（発明する）+ or（人）",      suffix:"-or", level:2},
  {word:"supervisor",meaning:"監督者・上司",             etymology:"super（上）+ vis（見る）+ or（人）",suffix:"-or", level:2},
  {word:"assessor",  meaning:"査定者・評価者",           etymology:"assess（評価する）+ or（人）",      suffix:"-or", level:3},
  {word:"auditor",   meaning:"監査役・会計検査官",        etymology:"audit（聴く・検査する）+ or（人）", suffix:"-or", level:3},
  {word:"inspector", meaning:"検査官・視察者",           etymology:"inspect（検査する）+ or（人）",     suffix:"-or", level:2},
  {word:"chancellor",meaning:"大臣・学長",               etymology:"cancel（格子）+ or（人）",         suffix:"-or", level:3},
  {word:"competitor",meaning:"競争者・ライバル",          etymology:"compet（競う）+ or（人）",         suffix:"-or", level:2},
  {word:"narrator",  meaning:"語り手・ナレーター",        etymology:"narrat（語る）+ or（人）",         suffix:"-or", level:2},
  {word:"prosecutor",meaning:"検察官・起訴者",           etymology:"prosecut（追う）+ or（人）",       suffix:"-or", level:3},
  {word:"spectator", meaning:"観客・見物人",             etymology:"spect（見る）+ or（人）",          suffix:"-or", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
