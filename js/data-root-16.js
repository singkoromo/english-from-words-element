/**
 * data-root-16.js — 語根データ（-miss-, -mord-, -navig-, -nomin-, -nov-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -miss-/-mit-（送る・放つ） ──────────────────
  {word:"mission",       meaning:"使命・任務",                  etymology:"miss（送る）+ ion（行為）→送られた使命",  root:"-miss-", level:0, pos:"名詞"},
  {word:"admit",         meaning:"認める・入場させる",            etymology:"ad（〜に）+ mit（送る）",               root:"-miss-", level:1, pos:"動詞"},
  {word:"submit",        meaning:"提出する・服従する",            etymology:"sub（下に）+ mit（送る）",              root:"-miss-", level:1, pos:"動詞"},
  {word:"commit",        meaning:"委ねる・犯す",                 etymology:"com（完全に）+ mit（送る）",             root:"-miss-", level:1, pos:"動詞"},
  {word:"permit",        meaning:"許可する",                    etymology:"per（完全に）+ mit（送る）→通過させる",   root:"-miss-", level:1, pos:"動詞"},
  {word:"emit",          meaning:"発する・放出する",              etymology:"e（外に）+ mit（送る）",               root:"-miss-", level:2, pos:"動詞"},
  {word:"transmit",      meaning:"送信する・伝える",              etymology:"trans（横断して）+ mit（送る）",         root:"-miss-", level:2, pos:"動詞"},
  {word:"omit",          meaning:"省略する・怠る",               etymology:"o（離れて）+ mit（送る）→送らない",      root:"-miss-", level:2, pos:"動詞"},
  {word:"dismiss",       meaning:"解雇する・却下する",            etymology:"dis（離れて）+ miss（送る）",            root:"-miss-", level:2, pos:"動詞"},
  {word:"remit",         meaning:"送金する・軽減する",            etymology:"re（後ろへ）+ mit（送る）",              root:"-miss-", level:3, pos:"動詞"},
  {word:"intermittent",  meaning:"断続的な",                    etymology:"inter（間に）+ mittent（送る）",          root:"-miss-", level:2, pos:"形容詞"},
  {word:"missile",       meaning:"ミサイル・投射物",              etymology:"miss（送る）+ ile（できる）→飛ばせるもの",root:"-miss-",level:1, pos:"名詞"},
  {word:"emission",      meaning:"排出・放射",                   etymology:"emit（発する）+ ion（行為）",             root:"-miss-", level:2, pos:"名詞"},
  {word:"permission",    meaning:"許可",                        etymology:"permit（許可する）+ ion（行為）",         root:"-miss-", level:1, pos:"名詞"},
  {word:"commitment",    meaning:"約束・責任・献身",              etymology:"commit（委ねる）+ ment（状態）",          root:"-miss-", level:1, pos:"名詞"},
  {word:"transmission",  meaning:"送信・伝達",                   etymology:"transmit（送信する）+ ion（行為）",       root:"-miss-", level:2, pos:"名詞"},
  {word:"omission",      meaning:"省略・脱落",                   etymology:"omit（省略する）+ ion（行為）",           root:"-miss-", level:2, pos:"名詞"},
  {word:"commissary",    meaning:"食料品店・委託者",              etymology:"com（共に）+ miss（送る）+ ary（〜の人）",root:"-miss-",level:3, pos:"名詞"},

  // ── -mord-/-mors-（噛む・死） ──────────────────
  {word:"remorse",       meaning:"後悔・自責の念",               etymology:"re（再び）+ morse（噛む）→良心がかじる", root:"-mord-", level:2, pos:"名詞"},
  {word:"mordant",       meaning:"痛烈な・腐食性の",              etymology:"mord（噛む）+ ant（〜な）",               root:"-mord-", level:3, pos:"形容詞"},
  {word:"mortal",        meaning:"致命的な・死ぬべき存在",         etymology:"mort（死）+ al（〜の）",                 root:"-mord-", level:2, pos:"形容詞・名詞"},
  {word:"immortal",      meaning:"不死の・不滅の",               etymology:"im（否定）+ mortal（致命的な）",          root:"-mord-", level:2, pos:"形容詞"},
  {word:"mortality",     meaning:"死亡率・死ぬこと",              etymology:"mortal（致命的な）+ ity（状態）",         root:"-mord-", level:2, pos:"名詞"},
  {word:"mortgage",      meaning:"住宅ローン・抵当",              etymology:"mort（死）+ gage（誓い）→死の誓い",      root:"-mord-", level:1, pos:"名詞"},
  {word:"murder",        meaning:"殺人・殺す",                   etymology:"mort（死）→ murd（中英語）",             root:"-mord-", level:1, pos:"名詞・動詞"},
  {word:"mortify",       meaning:"恥ずかしい思いをさせる",         etymology:"mort（死）+ ify（〜にする）→精神を殺す", root:"-mord-", level:3, pos:"動詞"},
  {word:"mortal combat", meaning:"死闘・命をかけた戦い",          etymology:"mortal（致命的な）+ combat（戦闘）",      root:"-mord-", level:2, pos:"名詞・形容詞"},
  {word:"post-mortem",   meaning:"死後検査・検視",               etymology:"post（後に）+ mortem（死）",             root:"-mord-", level:2, pos:"名詞"},
  {word:"morbid",        meaning:"病的な・陰鬱な",               etymology:"morb（病気・死）+ id（〜の）",           root:"-mord-", level:2, pos:"形容詞"},
  {word:"moribund",      meaning:"死にかけの・衰退している",        etymology:"mori（死ぬ）+ bund（〜な状態）",         root:"-mord-", level:3, pos:"形容詞・動詞"},

  // ── -navig-（船・航行する） ──────────────────
  {word:"navigate",      meaning:"航行する・操縦する",            etymology:"navig（船）+ ate（する）",               root:"-navig-", level:1, pos:"動詞"},
  {word:"navigation",    meaning:"航行・ナビゲーション",           etymology:"navigate（航行する）+ ion（行為）",       root:"-navig-", level:1, pos:"名詞"},
  {word:"navy",          meaning:"海軍",                         etymology:"nav（船）+ y（集合）",                   root:"-navig-", level:0, pos:"名詞"},
  {word:"naval",         meaning:"海軍の",                       etymology:"nav（船）+ al（〜の）",                  root:"-navig-", level:1, pos:"形容詞"},
  {word:"navigator",     meaning:"航海士・ナビゲーター",           etymology:"navigate（航行する）+ or（人）",          root:"-navig-", level:2, pos:"名詞"},
  {word:"circumnavigate",meaning:"世界一周する",                 etymology:"circum（周囲を）+ navigate（航行する）",  root:"-navig-", level:3, pos:"動詞"},
  {word:"navigable",     meaning:"航行可能な",                   etymology:"navigate（航行する）+ able（できる）",    root:"-navig-", level:2, pos:"形容詞"},
  {word:"nautical",      meaning:"航海の",                       etymology:"naut（船乗り）+ ical（〜の）",           root:"-navig-", level:2, pos:"形容詞"},
  {word:"cosmonaut",     meaning:"宇宙飛行士",                   etymology:"cosmo（宇宙）+ naut（船乗り）",           root:"-navig-", level:2, pos:"名詞"},
  {word:"aquanaut",      meaning:"潜水士",                       etymology:"aqua（水）+ naut（船乗り）",              root:"-navig-", level:2, pos:"名詞"},

  // ── -nomin-/-nom-（名前・法則） ──────────────────
  {word:"name",          meaning:"名前・命名する",               etymology:"nomin（名前）→ name",                    root:"-nomin-", level:0, pos:"名詞・動詞"},
  {word:"nominate",      meaning:"指名する・推薦する",            etymology:"nomin（名前）+ ate（する）",             root:"-nomin-", level:1, pos:"動詞"},
  {word:"nominal",       meaning:"名目上の・わずかな",            etymology:"nomin（名前）+ al（〜の）→名前だけの",   root:"-nomin-", level:2, pos:"形容詞"},
  {word:"denomination",  meaning:"宗派・額面・単位",              etymology:"de（完全に）+ nomin（名前）+ ation（行為）",root:"-nomin-",level:2, pos:"名詞"},
  {word:"nominee",       meaning:"候補者・指名された人",           etymology:"nominate（指名する）+ ee（〜された人）", root:"-nomin-", level:2, pos:"名詞"},
  {word:"pronoun",       meaning:"代名詞",                       etymology:"pro（代わりに）+ noun（名前）",           root:"-nomin-", level:1, pos:"名詞"},
  {word:"renown",        meaning:"名声・名誉",                   etymology:"re（再び）+ nown（名前）→広く名が知れる", root:"-nomin-", level:2, pos:"名詞"},
  {word:"notorious",     meaning:"悪名高い",                    etymology:"notor（知られた）+ ious（〜な）",         root:"-nomin-", level:2, pos:"形容詞"},
  {word:"ignominious",   meaning:"恥ずべき・不名誉な",            etymology:"ig（否定）+ nomin（名前）+ ious（〜な）",root:"-nomin-",level:3, pos:"名詞・形容詞"},
  {word:"anomaly",       meaning:"異常・例外",                   etymology:"an（否定）+ omal（法則）+ y（状態）",    root:"-nomin-", level:2, pos:"名詞"},
  {word:"astronomy",     meaning:"天文学",                       etymology:"astro（星）+ nomy（法則）",              root:"-nomin-", level:1, pos:"名詞"},
  {word:"economy",       meaning:"経済・節約",                   etymology:"eco（家）+ nomy（法則）",               root:"-nomin-", level:0, pos:"名詞"},
  {word:"taxonomy",      meaning:"分類学",                       etymology:"taxo（配置）+ nomy（法則）",             root:"-nomin-", level:3, pos:"名詞"},
  {word:"autonomy",      meaning:"自治・自律",                   etymology:"auto（自分）+ nomy（法則）",             root:"-nomin-", level:2, pos:"名詞"},

  // ── -nov-（新しい） ──────────────────
  {word:"novel",         meaning:"小説・新奇な",                 etymology:"nov（新しい）+ el（〜のもの）",           root:"-nov-", level:0, pos:"名詞・形容詞"},
  {word:"novelty",       meaning:"新奇さ・目新しさ",              etymology:"novel（新奇な）+ ty（状態）",             root:"-nov-", level:1, pos:"名詞"},
  {word:"innovation",    meaning:"革新・イノベーション",           etymology:"in（中に）+ nov（新しい）+ ation（行為）→新しくする",root:"-nov-",level:1, pos:"名詞"},
  {word:"renovate",      meaning:"改装する・刷新する",            etymology:"re（再び）+ nov（新しい）+ ate（する）",  root:"-nov-", level:2, pos:"動詞"},
  {word:"novice",        meaning:"初心者・新参者",               etymology:"nov（新しい）+ ice（人）",               root:"-nov-", level:1, pos:"名詞"},
  {word:"novo",          meaning:"新たに（de novo）",            etymology:"nov（新しい）+ o（〜な）",               root:"-nov-", level:3, pos:"名詞"},
  {word:"innovative",    meaning:"革新的な",                     etymology:"innovation（革新）+ ive（性質）",         root:"-nov-", level:2, pos:"形容詞"},
  {word:"novella",       meaning:"中編小説・ノヴェッラ",           etymology:"nov（新しい）+ ella（小さい）",           root:"-nov-", level:2, pos:"名詞"},
  {word:"renovation",    meaning:"改装・刷新",                   etymology:"renovate（改装する）+ ion（行為）",       root:"-nov-", level:2, pos:"名詞"},
  {word:"de novo",       meaning:"最初から・改めて",               etymology:"de（から）+ novo（新しい）",             root:"-nov-", level:3, pos:"名詞"},
  {word:"neophyte",      meaning:"初心者・新入り",                etymology:"neo（新しい）+ phyte（育つもの）",        root:"-nov-", level:2, pos:"名詞"},
  {word:"neonatal",      meaning:"新生児の",                     etymology:"neo（新しい）+ natal（出生の）",          root:"-nov-", level:2, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
