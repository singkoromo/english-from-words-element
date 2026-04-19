/**
 * data-suffix-12.js — 接尾語データ（-bound, -like, -work, -time, -long, -side）
 * 形式: { word, meaning, etymology, suffix, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -bound（〜に向かう・〜に縛られた） ──────────────────
  {word:"homebound",   meaning:"帰宅途中の・外出できない", etymology:"home（家）+ bound（向かう）",               suffix:"-bound", level:5, pos:"形容詞"},
  {word:"northbound",  meaning:"北行きの",                etymology:"north（北）+ bound（向かう）",              suffix:"-bound", level:3, pos:"形容詞"},
  {word:"southbound",  meaning:"南行きの",                etymology:"south（南）+ bound（向かう）",              suffix:"-bound", level:3, pos:"形容詞"},
  {word:"eastbound",   meaning:"東行きの",                etymology:"east（東）+ bound（向かう）",               suffix:"-bound", level:3, pos:"形容詞"},
  {word:"westbound",   meaning:"西行きの",                etymology:"west（西）+ bound（向かう）",               suffix:"-bound", level:3, pos:"形容詞"},
  {word:"snowbound",   meaning:"雪に閉じ込められた",       etymology:"snow（雪）+ bound（縛られた）",             suffix:"-bound", level:5, pos:"形容詞"},
  {word:"housebound",  meaning:"外出できない・家に閉じ込められた",etymology:"house（家）+ bound（縛られた）",     suffix:"-bound", level:5, pos:"形容詞"},
  {word:"outbound",    meaning:"外向きの・出発する",       etymology:"out（外に）+ bound（向かう）",              suffix:"-bound", level:5, pos:"形容詞・動詞"},
  {word:"inbound",     meaning:"内向きの・到着する",       etymology:"in（内に）+ bound（向かう）",               suffix:"-bound", level:5, pos:"形容詞・動詞"},
  {word:"earthbound",  meaning:"地球に縛られた・実際的な", etymology:"earth（地球）+ bound（縛られた）",          suffix:"-bound", level:5, pos:"形容詞"},
  {word:"duty-bound",  meaning:"義務がある・義務として",   etymology:"duty（義務）+ bound（縛られた）",           suffix:"-bound", level:5, pos:"動詞・名詞"},

  // ── -like（〜のような・〜に似た） ──────────────────
  {word:"lifelike",    meaning:"本物そっくりの・写実的な", etymology:"life（生命）+ like（似た）",                suffix:"-like", level:5, pos:"形容詞"},
  {word:"childlike",   meaning:"子供らしい・無邪気な",     etymology:"child（子供）+ like（似た）",               suffix:"-like", level:3, pos:"形容詞"},
  {word:"dreamlike",   meaning:"夢のような・幻想的な",     etymology:"dream（夢）+ like（似た）",                 suffix:"-like", level:5, pos:"形容詞"},
  {word:"godlike",     meaning:"神のような・超人的な",     etymology:"god（神）+ like（似た）",                   suffix:"-like", level:5, pos:"形容詞"},
  {word:"warlike",     meaning:"好戦的な・戦争の",         etymology:"war（戦争）+ like（似た）",                 suffix:"-like", level:5, pos:"形容詞"},
  {word:"businesslike",meaning:"ビジネスライクな・事務的な",etymology:"business（ビジネス）+ like（似た）",        suffix:"-like", level:5, pos:"形容詞"},
  {word:"ladylike",    meaning:"上品な・淑女らしい",       etymology:"lady（淑女）+ like（似た）",                suffix:"-like", level:5, pos:"形容詞"},
  {word:"ghostlike",   meaning:"幽霊のような",             etymology:"ghost（幽霊）+ like（似た）",               suffix:"-like", level:5, pos:"形容詞"},
  {word:"clocklike",   meaning:"時計のように正確な",       etymology:"clock（時計）+ like（似た）",               suffix:"-like", level:5, pos:"形容詞"},
  {word:"lifelike",    meaning:"本物そっくりの",           etymology:"life（生命）+ like（似た）",                suffix:"-like", level:3, pos:"形容詞"},

  // ── -work（仕組み・仕事・構造） ──────────────────
  {word:"teamwork",    meaning:"チームワーク・協力",       etymology:"team（チーム）+ work（働く）",              suffix:"-work", level:1, pos:"名詞"},
  {word:"framework",   meaning:"枠組み・骨格・フレームワーク",etymology:"frame（枠）+ work（組み立て）",           suffix:"-work", level:3, pos:"名詞"},
  {word:"network",     meaning:"ネットワーク・人脈",       etymology:"net（網）+ work（仕組み）",                 suffix:"-work", level:1, pos:"名詞"},
  {word:"artwork",     meaning:"芸術作品・美術",           etymology:"art（芸術）+ work（作品）",                 suffix:"-work", level:3, pos:"名詞"},
  {word:"paperwork",   meaning:"書類仕事・文書作業",       etymology:"paper（紙）+ work（仕事）",                 suffix:"-work", level:3, pos:"名詞"},
  {word:"groundwork",  meaning:"基礎・準備",               etymology:"ground（基盤）+ work（仕組み）",            suffix:"-work", level:5, pos:"名詞"},
  {word:"guesswork",   meaning:"当て推量・見当",           etymology:"guess（推測）+ work（仕組み）",             suffix:"-work", level:5, pos:"名詞"},
  {word:"legwork",     meaning:"足を使う仕事・下調べ",     etymology:"leg（脚）+ work（仕事）",                   suffix:"-work", level:5, pos:"名詞"},
  {word:"handiwork",   meaning:"手仕事・手工芸",           etymology:"hand（手）+ work（仕事）",                  suffix:"-work", level:5, pos:"名詞"},
  {word:"homework",    meaning:"宿題・家庭学習",           etymology:"home（家）+ work（仕事）",                  suffix:"-work", level:2, pos:"名詞"},
  {word:"clockwork",   meaning:"時計仕掛け・機械的なもの", etymology:"clock（時計）+ work（仕組み）",             suffix:"-work", level:5, pos:"名詞・形容詞"},
  {word:"fieldwork",   meaning:"野外調査・フィールドワーク",etymology:"field（現場）+ work（仕事）",              suffix:"-work", level:5, pos:"名詞"},

  // ── -time（〜の時間・〜期間） ──────────────────
  {word:"lifetime",    meaning:"一生・生涯",               etymology:"life（生命）+ time（時間）",                suffix:"-time", level:3, pos:"名詞"},
  {word:"overtime",    meaning:"残業・超過時間",           etymology:"over（超えて）+ time（時間）",              suffix:"-time", level:3, pos:"名詞"},
  {word:"daytime",     meaning:"日中・昼間",               etymology:"day（日）+ time（時間）",                   suffix:"-time", level:1, pos:"名詞"},
  {word:"nighttime",   meaning:"夜間・夜",                 etymology:"night（夜）+ time（時間）",                 suffix:"-time", level:1, pos:"名詞"},
  {word:"halftime",    meaning:"ハーフタイム・前半終了",   etymology:"half（半分）+ time（時間）",                suffix:"-time", level:3, pos:"名詞"},
  {word:"full-time",   meaning:"フルタイムの・専業の",     etymology:"full（完全な）+ time（時間）",              suffix:"-time", level:1, pos:"形容詞"},
  {word:"part-time",   meaning:"パートタイムの・アルバイトの",etymology:"part（一部）+ time（時間）",             suffix:"-time", level:1, pos:"形容詞"},
  {word:"peacetime",   meaning:"平時・平和な時",           etymology:"peace（平和）+ time（時）",                 suffix:"-time", level:5, pos:"名詞"},
  {word:"wartime",     meaning:"戦時・戦争中",             etymology:"war（戦争）+ time（時）",                   suffix:"-time", level:5, pos:"名詞"},
  {word:"springtime",  meaning:"春・春の時期",             etymology:"spring（春）+ time（時）",                  suffix:"-time", level:3, pos:"名詞"},
  {word:"summertime",  meaning:"夏・夏の時期",             etymology:"summer（夏）+ time（時）",                  suffix:"-time", level:2, pos:"名詞"},
  {word:"wintertime",  meaning:"冬・冬の時期",             etymology:"winter（冬）+ time（時）",                  suffix:"-time", level:2, pos:"名詞"},

  // ── -long（〜の続く・〜中） ──────────────────
  {word:"lifelong",    meaning:"一生の・生涯を通じた",     etymology:"life（生命）+ long（続く）",                suffix:"-long", level:5, pos:"形容詞"},
  {word:"daylong",     meaning:"一日中の",                etymology:"day（日）+ long（続く）",                   suffix:"-long", level:5, pos:"形容詞"},
  {word:"yearlong",    meaning:"一年間の",                etymology:"year（年）+ long（続く）",                  suffix:"-long", level:5, pos:"形容詞"},
  {word:"monthlong",   meaning:"一ヶ月間の",              etymology:"month（月）+ long（続く）",                 suffix:"-long", level:5, pos:"形容詞"},
  {word:"weeklong",    meaning:"一週間の",                etymology:"week（週）+ long（続く）",                  suffix:"-long", level:5, pos:"形容詞"},
  {word:"overlong",    meaning:"長すぎる・過度に長い",     etymology:"over（過度に）+ long（長い）",              suffix:"-long", level:5, pos:"動詞・形容詞"},

  // ── -side（〜の側・方面） ──────────────────
  {word:"outside",     meaning:"外・外部",                etymology:"out（外）+ side（側）",                     suffix:"-side", level:1, pos:"名詞"},
  {word:"inside",      meaning:"内側・内部",              etymology:"in（内）+ side（側）",                      suffix:"-side", level:1, pos:"名詞"},
  {word:"downside",    meaning:"マイナス面・欠点",         etymology:"down（下）+ side（側）",                    suffix:"-side", level:3, pos:"名詞"},
  {word:"upside",      meaning:"プラス面・上側",           etymology:"up（上）+ side（側）",                      suffix:"-side", level:3, pos:"名詞"},
  {word:"ringside",    meaning:"リングサイド・最前列",     etymology:"ring（輪・リング）+ side（側）",            suffix:"-side", level:5, pos:"名詞"},
  {word:"bedside",     meaning:"ベッドサイド・枕元",       etymology:"bed（ベッド）+ side（側）",                 suffix:"-side", level:3, pos:"名詞"},
  {word:"roadside",    meaning:"道端・道路沿い",           etymology:"road（道路）+ side（側）",                  suffix:"-side", level:3, pos:"名詞・形容詞"},
  {word:"lakeside",    meaning:"湖畔・湖のほとり",         etymology:"lake（湖）+ side（側）",                    suffix:"-side", level:3, pos:"名詞"},
  {word:"seaside",     meaning:"海辺・海岸",               etymology:"sea（海）+ side（側）",                     suffix:"-side", level:3, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
