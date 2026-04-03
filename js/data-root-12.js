/**
 * data-root-12.js — 語根データ（-form-, -fort-, -frag-, -fund-, -grat-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -form-（形・形作る） ──────────────────
  {word:"form",          meaning:"形・形成する",                etymology:"form（形）",                             root:"-form-", level:0},
  {word:"reform",        meaning:"改革する・改善する",           etymology:"re（再び）+ form（形作る）",              root:"-form-", level:1},
  {word:"inform",        meaning:"知らせる・情報を与える",        etymology:"in（中に）+ form（形）→形を与える→知らせる",root:"-form-",level:0},
  {word:"conform",       meaning:"従う・適合する",               etymology:"con（完全に）+ form（形）→形を合わせる", root:"-form-", level:2},
  {word:"transform",     meaning:"変形する・変える",             etymology:"trans（超えて）+ form（形）",            root:"-form-", level:1},
  {word:"uniform",       meaning:"制服・均一な",                etymology:"uni（一つ）+ form（形）→同じ形",         root:"-form-", level:0},
  {word:"formula",       meaning:"公式・処方",                  etymology:"form（形）+ ula（小さい）",              root:"-form-", level:1},
  {word:"formal",        meaning:"正式な・形式的な",             etymology:"form（形）+ al（〜の）",                 root:"-form-", level:0},
  {word:"deform",        meaning:"変形させる・ゆがめる",          etymology:"de（下に）+ form（形）",                 root:"-form-", level:2},
  {word:"platform",      meaning:"台・プラットフォーム",          etymology:"plat（平らな）+ form（形）",             root:"-form-", level:1},
  {word:"formidable",    meaning:"恐ろしい・手ごわい",           etymology:"form（形）+ idable（〜な）→力強い形",    root:"-form-", level:2},
  {word:"formation",     meaning:"形成・陣形",                  etymology:"form（形）+ ation（行為）",              root:"-form-", level:2},
  {word:"conformity",    meaning:"慣習への従順・一致",           etymology:"conform（従う）+ ity（状態）",            root:"-form-", level:3},
  {word:"reformation",   meaning:"宗教改革・改革",              etymology:"reform（改革する）+ ation（行為）",       root:"-form-", level:2},
  {word:"transformer",   meaning:"変圧器・変える人",             etymology:"transform（変形する）+ er（もの）",       root:"-form-", level:1},
  {word:"formulate",     meaning:"公式化する・策定する",          etymology:"formula（公式）+ ate（する）",            root:"-form-", level:2},
  {word:"preformation",  meaning:"前成説・予形成",               etymology:"pre（前に）+ formation（形成）",         root:"-form-", level:3},
  {word:"nonconformist", meaning:"慣習に従わない人",             etymology:"non（否定）+ conformist（順応者）",       root:"-form-", level:3},

  // ── -fort-（強い・要塞） ──────────────────
  {word:"fort",          meaning:"要塞・砦",                    etymology:"fort（強い）→要塞",                      root:"-fort-", level:1},
  {word:"force",         meaning:"力・強制する",                etymology:"fort（強い）→ force",                    root:"-fort-", level:0},
  {word:"comfort",       meaning:"慰める・快適さ",               etymology:"com（完全に）+ fort（強い）→力を与える", root:"-fort-", level:0},
  {word:"effort",        meaning:"努力・尽力",                  etymology:"ef（外に）+ fort（力）→力を発揮する",    root:"-fort-", level:0},
  {word:"afford",        meaning:"〜できる余裕がある",            etymology:"af（〜に）+ ford（進む）+ fort（力）",  root:"-fort-", level:0},
  {word:"fortify",       meaning:"要塞化する・強化する",          etymology:"fort（強い）+ ify（〜にする）",          root:"-fort-", level:2},
  {word:"fortress",      meaning:"要塞・砦",                    etymology:"fort（強い）+ ress（場所）",             root:"-fort-", level:2},
  {word:"fortune",       meaning:"幸運・財産",                  etymology:"fort（強い）→ fortuna（運命女神）",      root:"-fort-", level:0},
  {word:"fortitude",     meaning:"不屈の精神・忍耐力",           etymology:"fort（強い）+ itude（状態）",            root:"-fort-", level:3},
  {word:"reinforce",     meaning:"強化する・増援する",           etymology:"re（再び）+ enforce（強制する）",        root:"-fort-", level:2},
  {word:"uncomfortable", meaning:"不快な",                      etymology:"un（否定）+ comfortable（快適な）",      root:"-fort-", level:0},
  {word:"forte",         meaning:"得意・強み",                  etymology:"fort（強い）+ e（〜もの）",              root:"-fort-", level:2},
  {word:"fortification", meaning:"要塞化・城壁",               etymology:"fortify（強化する）+ ation（行為）",      root:"-fort-", level:3},
  {word:"fortunate",     meaning:"幸運な",                      etymology:"fortune（幸運）+ ate（〜な）",           root:"-fort-", level:1},

  // ── -frag-/-fract-（砕く・破る） ──────────────────
  {word:"fragment",      meaning:"断片・破片",                  etymology:"frag（砕く）+ ment（結果）",             root:"-frag-", level:1},
  {word:"fracture",      meaning:"骨折・亀裂",                  etymology:"fract（砕く）+ ure（結果）",             root:"-frag-", level:2},
  {word:"fraction",      meaning:"分数・一部",                  etymology:"fract（砕く）+ ion（状態）",             root:"-frag-", level:1},
  {word:"fragile",       meaning:"壊れやすい・もろい",           etymology:"frag（砕く）+ ile（〜な）",              root:"-frag-", level:2},
  {word:"infraction",    meaning:"違反・侵害",                  etymology:"in（中に）+ fract（砕く）+ ion（行為）", root:"-frag-", level:3},
  {word:"refract",       meaning:"屈折させる",                  etymology:"re（後ろへ）+ fract（砕く）",            root:"-frag-", level:3},
  {word:"fragility",     meaning:"脆弱性・もろさ",              etymology:"fragile（壊れやすい）+ ity（状態）",      root:"-frag-", level:2},
  {word:"refractory",    meaning:"難治性の・手に負えない",        etymology:"refract（屈折させる）+ ory（性質）",      root:"-frag-", level:3},
  {word:"fragmentary",   meaning:"断片的な",                    etymology:"fragment（断片）+ ary（〜な）",          root:"-frag-", level:2},
  {word:"diffraction",   meaning:"回折（光・波）",              etymology:"dif（異なる方向に）+ fract（砕く）",      root:"-frag-", level:3},
  {word:"ossifrage",     meaning:"ヒゲワシ（骨を砕く鳥）",      etymology:"ossi（骨）+ frage（砕く）",              root:"-frag-", level:3},
  {word:"suffix",        meaning:"接尾語",                      etymology:"suf（下に）+ fix（固定する）",           root:"-frag-", level:1},

  // ── -fund-/-fus-（注ぐ・広がる） ──────────────────
  {word:"fund",          meaning:"資金・基金",                  etymology:"fund（基礎）→資金の基盤",                root:"-fund-", level:0},
  {word:"found",         meaning:"設立する・創設する",           etymology:"fund（基礎）→基盤を置く",                root:"-fund-", level:1},
  {word:"fundamental",   meaning:"基本的な・根本的な",           etymology:"fund（基礎）+ amental（〜の）",          root:"-fund-", level:1},
  {word:"refuse",        meaning:"断る・拒否する",               etymology:"re（後ろに）+ fuse（注ぐ）→注ぎ返す→断る",root:"-fund-",level:1},
  {word:"confuse",       meaning:"混乱させる",                  etymology:"con（共に）+ fuse（注ぐ）→一緒に混ぜる", root:"-fund-", level:1},
  {word:"diffuse",       meaning:"広める・散布する",             etymology:"dif（異なる方向に）+ fuse（注ぐ）",       root:"-fund-", level:2},
  {word:"profuse",       meaning:"豊富な・過度な",               etymology:"pro（前に）+ fuse（注ぐ）→溢れ出る",     root:"-fund-", level:3},
  {word:"infuse",        meaning:"注入する・吹き込む",           etymology:"in（中に）+ fuse（注ぐ）",               root:"-fund-", level:2},
  {word:"transfuse",     meaning:"輸血する・移す",               etymology:"trans（横断して）+ fuse（注ぐ）",         root:"-fund-", level:3},
  {word:"fusion",        meaning:"融合・核融合",                 etymology:"fus（注ぐ）+ ion（状態）",               root:"-fund-", level:1},
  {word:"confusion",     meaning:"混乱・困惑",                  etymology:"confuse（混乱させる）+ ion（行為）",      root:"-fund-", level:0},
  {word:"profusion",     meaning:"豊富・大量",                  etymology:"profuse（豊富な）+ ion（状態）",          root:"-fund-", level:3},
  {word:"effusion",      meaning:"発散・溢れること",             etymology:"ef（外に）+ fus（注ぐ）+ ion（行為）",   root:"-fund-", level:3},
  {word:"refund",        meaning:"返金・払い戻し",               etymology:"re（再び）+ fund（資金）",               root:"-fund-", level:1},

  // ── -grat-（感謝・好意） ──────────────────
  {word:"grateful",      meaning:"感謝している",                etymology:"grat（感謝）+ eful（〜に満ちた）",        root:"-grat-", level:0},
  {word:"gratitude",     meaning:"感謝・謝意",                  etymology:"grat（感謝）+ itude（状態）",            root:"-grat-", level:1},
  {word:"congratulate",  meaning:"祝う・おめでとうという",        etymology:"con（共に）+ grat（感謝）+ ulate（する）",root:"-grat-",level:0},
  {word:"grace",         meaning:"優雅さ・恵み",                etymology:"grat（好意）→ grace",                    root:"-grat-", level:1},
  {word:"gratify",       meaning:"満足させる・喜ばせる",          etymology:"grat（感謝）+ ify（〜にする）",          root:"-grat-", level:2},
  {word:"gratis",        meaning:"無料で",                      etymology:"grat（好意）+ is（〜で）",               root:"-grat-", level:2},
  {word:"gratuitous",    meaning:"無償の・不必要な",             etymology:"grat（好意）+ uitous（〜な）",           root:"-grat-", level:3},
  {word:"ingrate",       meaning:"恩知らず",                    etymology:"in（否定）+ grate（感謝する）",           root:"-grat-", level:3},
  {word:"ingratitude",   meaning:"恩知らず・忘恩",              etymology:"in（否定）+ gratitude（感謝）",          root:"-grat-", level:2},
  {word:"gratuity",      meaning:"チップ・心づけ",               etymology:"grat（好意）+ uity（状態）",             root:"-grat-", level:3},
  {word:"congratulation",meaning:"祝賀・おめでとう",             etymology:"congratulate（祝う）+ ion（行為）",      root:"-grat-", level:0},
  {word:"ungrateful",    meaning:"感謝しない・恩知らずの",        etymology:"un（否定）+ grateful（感謝している）",   root:"-grat-", level:1},
  {word:"graceful",      meaning:"優雅な・品のある",             etymology:"grace（優雅さ）+ ful（〜に満ちた）",     root:"-grat-", level:1},
  {word:"gratification", meaning:"満足・喜び",                  etymology:"gratify（満足させる）+ ation（行為）",    root:"-grat-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
