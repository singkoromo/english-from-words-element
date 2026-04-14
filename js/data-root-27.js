/**
 * data-root-27.js — 語根データ（-am-/-amor-, -cap-/-cip-, -curr-/-curs-, -grad-/-gress-, -pend-/-pens-, -sent-/-sens-, -tact-/-tang-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [

  // ── -am-/-amor-（愛する） ──────────────────
  {word:"amiable",           meaning:"愛想の良い・親切な",           etymology:"ami（愛する）+ able（できる）",                       root:"-am-",      level:2},
  {word:"amicable",          meaning:"友好的な・穏和な",             etymology:"amic（友人）+ able（できる）",                        root:"-am-",      level:2},
  {word:"amorous",           meaning:"恋愛の・情熱的な",             etymology:"amor（愛）+ ous（〜な）",                            root:"-amor-",    level:2},
  {word:"enamored",          meaning:"恋をしている・魅了された",     etymology:"en（〜に）+ amor（愛）+ ed（〜された）",               root:"-amor-",    level:2},
  {word:"paramour",          meaning:"不倫相手・愛人",               etymology:"par（〜ために）+ amor（愛）→愛のために",               root:"-amor-",    level:3},
  {word:"amateur",           meaning:"アマチュア・愛好家",           etymology:"amor（愛する）+ eur（人）→愛してする人",               root:"-am-",      level:0},
  {word:"amity",             meaning:"友好・親睦",                   etymology:"ami（愛する・友人）+ ty（状態）",                     root:"-am-",      level:3},
  {word:"inimical",          meaning:"敵対的な",                     etymology:"in（否定）+ amic（友人）+ al（〜の）",                 root:"-am-",      level:3},
  {word:"amour",             meaning:"恋愛・恋愛関係",               etymology:"amour（フランス語：愛）",                            root:"-amor-",    level:3},

  // ── -cap-/-cip-/-cept-（取る・つかむ） ──────────────────
  {word:"capture",           meaning:"捕まえる・捕獲",               etymology:"cap（取る）+ ture（行為）",                           root:"-cap-",     level:0},
  {word:"capable",           meaning:"有能な・できる",               etymology:"cap（取る）+ able（できる）→何でもこなせる",           root:"-cap-",     level:0},
  {word:"captivate",         meaning:"魅了する・虜にする",           etymology:"captiv（捕まえた）+ ate（する）",                     root:"-cap-",     level:2},
  {word:"anticipate",        meaning:"予期する・先手を打つ",         etymology:"anti（前に）+ cip（取る）+ ate（する）",               root:"-cip-",     level:1},
  {word:"participate",       meaning:"参加する",                     etymology:"parti（部分）+ cip（取る）+ ate（する）→一部を取る",   root:"-cip-",     level:0},
  {word:"perceive",          meaning:"知覚する・認識する",           etymology:"per（完全に）+ ceiv（取る）+ e（する）",               root:"-cep-",     level:1},
  {word:"concept",           meaning:"概念・コンセプト",             etymology:"con（共に）+ cept（取る）→ひとまとめに取ったもの",      root:"-cep-",     level:0},
  {word:"reception",         meaning:"受付・歓迎",                   etymology:"re（再び）+ cep（取る）+ tion（行為）",               root:"-cep-",     level:0},
  {word:"deception",         meaning:"欺瞞・詐欺",                   etymology:"de（離れて）+ cep（取る）+ tion（行為）→だますこと",   root:"-cep-",     level:1},
  {word:"inception",         meaning:"開始・始まり",                 etymology:"in（中に）+ cep（取る）+ tion（行為）",               root:"-cep-",     level:2},
  {word:"exception",         meaning:"例外",                         etymology:"ex（外に）+ cep（取る）+ tion（行為）→外に取り出したもの", root:"-cep-",   level:1},
  {word:"susceptible",       meaning:"影響を受けやすい",             etymology:"sus（下から）+ cep（取る）+ tible（できる）",          root:"-cep-",     level:2},
  {word:"emancipate",        meaning:"解放する",                     etymology:"e（外に）+ man（手）+ cip（取る）+ ate（する）→手かせを外す", root:"-cip-", level:2},

  // ── -curr-/-curs-（走る・流れる） ──────────────────
  {word:"current",           meaning:"現在の・流れ",                 etymology:"curr（走る）+ ent（〜の）",                           root:"-curr-",    level:0},
  {word:"currency",          meaning:"通貨・流通",                   etymology:"curr（走る）+ ency（状態）→流通するもの",              root:"-curr-",    level:0},
  {word:"occur",             meaning:"起きる・発生する",             etymology:"oc（〜に向かって）+ curr（走る）",                    root:"-curr-",    level:0},
  {word:"concur",            meaning:"同意する・同時に起こる",       etymology:"con（共に）+ curr（走る）",                           root:"-curr-",    level:2},
  {word:"incur",             meaning:"被る・招く",                   etymology:"in（中へ）+ curr（走る）→問題に走り込む",              root:"-curr-",    level:2},
  {word:"recur",             meaning:"繰り返す・再発する",           etymology:"re（再び）+ curr（走る）",                            root:"-curr-",    level:2},
  {word:"excursion",         meaning:"遠足・小旅行",                 etymology:"ex（外へ）+ curs（走る）+ ion（行為）",               root:"-curs-",    level:1},
  {word:"cursor",            meaning:"カーソル",                     etymology:"curs（走る）+ or（もの）→走るもの",                   root:"-curs-",    level:0},
  {word:"precursor",         meaning:"先駆者・前兆",                 etymology:"pre（前に）+ curs（走る）+ or（もの）",               root:"-curs-",    level:2},
  {word:"incursion",         meaning:"侵入・急襲",                   etymology:"in（中へ）+ curs（走る）+ ion（行為）",               root:"-curs-",    level:3},
  {word:"discursive",        meaning:"散漫な・論述的な",             etymology:"dis（あちこち）+ curs（走る）+ ive（〜な）",           root:"-curs-",    level:3},

  // ── -grad-/-gress-（歩く・進む） ──────────────────
  {word:"graduate",          meaning:"卒業する・段階的な",           etymology:"grad（歩む）+ uate（する）→段階を経る",               root:"-grad-",    level:0},
  {word:"grade",             meaning:"等級・成績",                   etymology:"grad（歩む）+ e（もの）→段階",                        root:"-grad-",    level:0},
  {word:"degrade",           meaning:"低下させる・格下げする",       etymology:"de（下へ）+ grad（歩む）+ e（する）",                  root:"-grad-",    level:1},
  {word:"upgrade",           meaning:"改良する・アップグレード",     etymology:"up（上へ）+ grad（歩む）+ e（する）",                  root:"-grad-",    level:0},
  {word:"gradual",           meaning:"段階的な・漸進的な",           etymology:"grad（歩む）+ ual（〜な）",                           root:"-grad-",    level:1},
  {word:"progress",          meaning:"進歩・前進",                   etymology:"pro（前に）+ gress（歩く）",                          root:"-gress-",   level:0},
  {word:"aggress",           meaning:"攻撃する",                     etymology:"ag（〜に向かって）+ gress（歩く）",                   root:"-gress-",   level:2},
  {word:"transgress",        meaning:"違反する・踏み越える",         etymology:"trans（超えて）+ gress（歩く）",                      root:"-gress-",   level:3},
  {word:"digress",           meaning:"話が逸れる",                   etymology:"di（離れて）+ gress（歩く）",                         root:"-gress-",   level:2},
  {word:"regress",           meaning:"後退する・退行する",           etymology:"re（後ろへ）+ gress（歩く）",                         root:"-gress-",   level:2},
  {word:"egress",            meaning:"出口・退出",                   etymology:"e（外へ）+ gress（歩く）",                            root:"-gress-",   level:3},
  {word:"ingress",           meaning:"入口・侵入",                   etymology:"in（中へ）+ gress（歩く）",                           root:"-gress-",   level:3},

  // ── -pend-/-pens-（ぶら下がる・重さを量る） ──────────────────
  {word:"depend",            meaning:"依存する・頼る",               etymology:"de（下に）+ pend（ぶら下がる）",                      root:"-pend-",    level:0},
  {word:"suspend",           meaning:"吊るす・停止する",             etymology:"sus（下から）+ pend（ぶら下がる）",                    root:"-pend-",    level:1},
  {word:"expend",            meaning:"費やす・使う",                 etymology:"ex（外へ）+ pend（量る）→量って支払う",                root:"-pend-",    level:2},
  {word:"append",            meaning:"付け加える・添付する",         etymology:"ap（〜に）+ pend（ぶら下げる）",                      root:"-pend-",    level:1},
  {word:"pendulum",          meaning:"振り子",                       etymology:"pend（ぶら下がる）+ ulum（小さいもの）",               root:"-pend-",    level:1},
  {word:"pending",           meaning:"保留中の・〜を待って",         etymology:"pend（ぶら下がる）+ ing（〜中）",                     root:"-pend-",    level:1},
  {word:"compensate",        meaning:"補償する・埋め合わせる",       etymology:"com（共に）+ pens（量る）+ ate（する）",               root:"-pens-",    level:2},
  {word:"dispense",          meaning:"配る・免除する",               etymology:"dis（離して）+ pens（量る）+ e（する）",               root:"-pens-",    level:2},
  {word:"expensive",         meaning:"高価な",                       etymology:"ex（外へ）+ pens（量る）+ ive（〜な）",                root:"-pens-",    level:0},
  {word:"pension",           meaning:"年金・下宿",                   etymology:"pens（量る）+ ion（状態）→生活費を量って与える",        root:"-pens-",    level:0},
  {word:"recompense",        meaning:"賠償・報酬",                   etymology:"re（再び）+ com（共に）+ pens（量る）+ e",             root:"-pens-",    level:3},
  {word:"indispensable",     meaning:"不可欠な",                     etymology:"in（否定）+ dis（離せない）+ pens（量る）+ able",      root:"-pens-",    level:2},

  // ── -sent-/-sens-（感じる） ──────────────────
  {word:"sense",             meaning:"感覚・センス",                 etymology:"sens（感じる）+ e（もの）",                           root:"-sens-",    level:0},
  {word:"sensitive",         meaning:"敏感な・繊細な",               etymology:"sens（感じる）+ itive（〜な）",                       root:"-sens-",    level:1},
  {word:"sensory",           meaning:"感覚の",                       etymology:"sens（感じる）+ ory（〜の）",                         root:"-sens-",    level:1},
  {word:"consent",           meaning:"同意する",                     etymology:"con（共に）+ sent（感じる）→共に感じる",               root:"-sent-",    level:1},
  {word:"dissent",           meaning:"反対意見・異議",               etymology:"dis（離れて）+ sent（感じる）",                       root:"-sent-",    level:2},
  {word:"resent",            meaning:"憤慨する",                     etymology:"re（再び強く）+ sent（感じる）",                      root:"-sent-",    level:1},
  {word:"sentiment",         meaning:"感情・意見",                   etymology:"senti（感じる）+ ment（状態）",                       root:"-sent-",    level:1},
  {word:"presentiment",      meaning:"予感",                         etymology:"pre（前に）+ senti（感じる）+ ment（状態）",           root:"-sent-",    level:3},
  {word:"insensitive",       meaning:"無神経な・鈍感な",             etymology:"in（否定）+ sens（感じる）+ itive（〜な）",            root:"-sens-",    level:1},
  {word:"sensational",       meaning:"センセーショナルな・大評判の", etymology:"sens（感じる）+ ational（〜な）",                     root:"-sens-",    level:1},
  {word:"nonsense",          meaning:"ナンセンス・無意味",           etymology:"non（否定）+ sens（感じる）+ e→意味をなさない",         root:"-sens-",    level:0},
  {word:"consensus",         meaning:"合意・コンセンサス",           etymology:"con（共に）+ sens（感じる）+ us→みんなが同じに感じること", root:"-sens-", level:1},

  // ── -tact-/-tang-/-tig-（触れる） ──────────────────
  {word:"contact",           meaning:"接触・連絡",                   etymology:"con（共に）+ tact（触れる）",                         root:"-tact-",    level:0},
  {word:"tactile",           meaning:"触覚の・手触りの",             etymology:"tact（触れる）+ ile（〜の性質）",                     root:"-tact-",    level:2},
  {word:"intact",            meaning:"損なわれていない・そのままの", etymology:"in（否定）+ tact（触れる）→触れられていない",          root:"-tact-",    level:2},
  {word:"tangible",          meaning:"有形の・実体のある",           etymology:"tang（触れる）+ ible（できる）",                      root:"-tang-",    level:2},
  {word:"intangible",        meaning:"無形の・捉えにくい",           etymology:"in（否定）+ tang（触れる）+ ible（できる）",           root:"-tang-",    level:2},
  {word:"contingent",        meaning:"偶発的な・条件付きの",         etymology:"con（共に）+ ting（触れる）+ ent（〜の）",             root:"-tang-",    level:3},
  {word:"contiguous",        meaning:"隣接する・連続した",           etymology:"con（共に）+ tig（触れる）+ uous（〜な）",             root:"-tig-",     level:3},
  {word:"contagious",        meaning:"伝染性の・伝わりやすい",       etymology:"con（共に）+ tag（触れる）+ ious（〜な）",             root:"-tang-",    level:1},
  {word:"contaminate",       meaning:"汚染する",                     etymology:"con（共に）+ tamin（触れる）+ ate（する）",            root:"-tang-",    level:2},
  {word:"tact",              meaning:"機転・配慮",                   etymology:"tact（触れる）→うまく触れる感覚",                    root:"-tact-",    level:1},
  {word:"tactful",           meaning:"機転のきいた",                 etymology:"tact（機転）+ ful（〜に満ちた）",                     root:"-tact-",    level:1},

  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
