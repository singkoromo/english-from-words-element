/**
 * data-prefix-6.js — 接頭語データ追加 vol.4
 * 接頭語: contra-, e-/ef-, hetero-, homo-, infra-, intra-, mega-, meta-,
 *         neo-, proto-, pseudo-, retro-, ultra-, hyper-, hypo-, omni-, pan-
 * 形式: { word, meaning, etymology, prefix, level }
 */
(function(){
  var d = [

  // ── contra-（反対・対抗） ────────────────────────
  {word:"contradict",   meaning:"矛盾する・否定する",     etymology:"contra（反対）+ dict（言う）",                 prefix:"contra-", level:2},
  {word:"contradiction",meaning:"矛盾・反論",             etymology:"contra（反対）+ diction（言うこと）",          prefix:"contra-", level:2},
  {word:"contrary",     meaning:"正反対の・反対に",       etymology:"contra（反対）+ ary（〜の）",                  prefix:"contra-", level:2},
  {word:"contrast",     meaning:"対比・コントラスト",     etymology:"contra（反対）+ st（立つ）",                   prefix:"contra-", level:1},
  {word:"controversial",meaning:"議論を呼ぶ・論争的な",   etymology:"contro（反対）+ versial（向く）",              prefix:"contra-", level:2},
  {word:"controversy",  meaning:"論争・論議",             etymology:"contro（反対）+ versy（向く）",                prefix:"contra-", level:2},
  {word:"contraband",   meaning:"密輸品・禁制品",         etymology:"contra（反対）+ band（命令）",                 prefix:"contra-", level:3},
  {word:"contravene",   meaning:"違反する・反する",       etymology:"contra（反対）+ vene（来る）",                 prefix:"contra-", level:3},
  {word:"contraceptive",meaning:"避妊の・避妊具",         etymology:"contra（反対）+ ceptive（受け取る）",          prefix:"contra-", level:2},

  // ── e-/ef-（外に・完全に） ──────────────────────
  {word:"emit",         meaning:"発する・放射する",       etymology:"e（外に）+ mit（送る）",                       prefix:"e-", level:2},
  {word:"emission",     meaning:"放出・排出",             etymology:"e（外に）+ mission（送る）",                   prefix:"e-", level:2},
  {word:"eject",        meaning:"噴出する・追い出す",     etymology:"e（外に）+ ject（投げる）",                    prefix:"e-", level:2},
  {word:"elaborate",    meaning:"詳しく述べる・精巧な",   etymology:"e（外に）+ laborate（労働）→ 手の込んだ",      prefix:"e-", level:2},
  {word:"eliminate",    meaning:"排除する・削除する",     etymology:"e（外に）+ liminare（境界）→ 境界の外へ",      prefix:"e-", level:2},
  {word:"emerge",       meaning:"現れる・浮かび上がる",   etymology:"e（外に）+ merge（沈む）→ 浮き上がる",         prefix:"e-", level:1},
  {word:"emotion",      meaning:"感情・情動",             etymology:"e（外に）+ motion（動く）→ 感情が動く",        prefix:"e-", level:0},
  {word:"eradicate",    meaning:"根絶する・一掃する",     etymology:"e（外に）+ radical（根）+ ate",                prefix:"e-", level:3},
  {word:"evacuate",     meaning:"避難する・立ち退く",     etymology:"e（外に）+ vacuate（空にする）",               prefix:"e-", level:2},
  {word:"evoke",        meaning:"呼び起こす・引き出す",   etymology:"e（外に）+ voke（呼ぶ）",                     prefix:"e-", level:2},
  {word:"evolve",       meaning:"進化する・発展する",     etymology:"e（外に）+ volve（転がる）→ 展開する",         prefix:"e-", level:1},
  {word:"efface",       meaning:"消す・目立たなくする",   etymology:"ef（外に）+ face（顔）→ 顔を消す",            prefix:"e-", level:3},
  {word:"effusive",     meaning:"あふれるような・感情的な",etymology:"ef（外に）+ fusive（注ぐ）",                  prefix:"e-", level:3},
  {word:"elicit",       meaning:"引き出す・誘い出す",     etymology:"e（外に）+ licit（引く）",                    prefix:"e-", level:3},
  {word:"eloquent",     meaning:"雄弁な・説得力のある",   etymology:"e（外に）+ loquent（話す）→ 言葉を流す",       prefix:"e-", level:2},

  // ── hetero-（異なる・他の） ─────────────────────
  {word:"heterogeneous",meaning:"異質な・混合の",         etymology:"hetero（異なる）+ geneous（種）",              prefix:"hetero-", level:2},
  {word:"heterosexual", meaning:"異性愛の",               etymology:"hetero（異なる）+ sexual（性的）",             prefix:"hetero-", level:2},
  {word:"heterodox",    meaning:"異端の・非正統の",       etymology:"hetero（異なる）+ dox（意見）",                prefix:"hetero-", level:3},
  {word:"heterogeneous",meaning:"異種混合の",             etymology:"hetero（異なる）+ geneous（生む）",            prefix:"hetero-", level:3},

  // ── homo-（同じ・人間） ─────────────────────────
  {word:"homogeneous",  meaning:"同質の・均一な",         etymology:"homo（同じ）+ geneous（種）",                  prefix:"homo-", level:2},
  {word:"homonym",      meaning:"同音異義語",             etymology:"homo（同じ）+ nym（名前）",                    prefix:"homo-", level:2},
  {word:"homosexual",   meaning:"同性愛の",               etymology:"homo（同じ）+ sexual（性的）",                 prefix:"homo-", level:2},
  {word:"homogenize",   meaning:"均質化する",             etymology:"homo（同じ）+ genize（同じにする）",           prefix:"homo-", level:3},

  // ── infra-（下に・以下） ─────────────────────────
  {word:"infrastructure",meaning:"インフラ・基盤",        etymology:"infra（下に）+ structure（構造）",             prefix:"infra-", level:1},
  {word:"infrared",     meaning:"赤外線の",               etymology:"infra（下に）+ red（赤）→ 赤の下の波長",       prefix:"infra-", level:2},
  {word:"infrasound",   meaning:"超低周波音",             etymology:"infra（下に）+ sound（音）",                   prefix:"infra-", level:3},
  {word:"infrastructure",meaning:"社会基盤・インフラ",    etymology:"infra（基盤）+ structure（構造）",             prefix:"infra-", level:2},

  // ── intra-（内部に・中に） ──────────────────────
  {word:"intranet",     meaning:"イントラネット・社内LAN", etymology:"intra（内部に）+ net（網）",                   prefix:"intra-", level:2},
  {word:"intravenous",  meaning:"静脈内の",               etymology:"intra（内部に）+ venous（静脈の）",            prefix:"intra-", level:2},
  {word:"intramural",   meaning:"学内の・壁の内部の",     etymology:"intra（内部に）+ mural（壁の）",               prefix:"intra-", level:3},
  {word:"intrapersonal",meaning:"個人内の・自己内的な",   etymology:"intra（内部に）+ personal（個人の）",          prefix:"intra-", level:3},
  {word:"intrastate",   meaning:"州内の",                 etymology:"intra（内部に）+ state（州）",                 prefix:"intra-", level:3},

  // ── mega-（大きい・百万） ─────────────────────────
  {word:"megaphone",    meaning:"拡声器・メガホン",       etymology:"mega（大きい）+ phone（声）",                   prefix:"mega-", level:1},
  {word:"megacity",     meaning:"メガシティ・巨大都市",   etymology:"mega（大きい）+ city（都市）",                  prefix:"mega-", level:2},
  {word:"megabyte",     meaning:"メガバイト",             etymology:"mega（百万）+ byte（バイト）",                  prefix:"mega-", level:1},
  {word:"megalopolis",  meaning:"大都市圏・巨大都市",     etymology:"mega（大きい）+ polis（都市）",                 prefix:"mega-", level:2},
  {word:"megalomania",  meaning:"誇大妄想・権力欲",       etymology:"mega（大きい）+ lomania（狂気）",              prefix:"mega-", level:3},
  {word:"megalith",     meaning:"巨石・メガリス",         etymology:"mega（大きい）+ lith（石）",                   prefix:"mega-", level:3},

  // ── meta-（変化・超えて・後に） ─────────────────
  {word:"metaphor",     meaning:"隠喩・メタファー",       etymology:"meta（超えて）+ phor（運ぶ）→ 意味を運ぶ",     prefix:"meta-", level:2},
  {word:"metabolism",   meaning:"代謝・物質交換",         etymology:"meta（変化）+ bolism（投げる）→ 変化させる",   prefix:"meta-", level:2},
  {word:"metamorphosis",meaning:"変態・変容",             etymology:"meta（変化）+ morphosis（形）",                prefix:"meta-", level:2},
  {word:"metaphysics",  meaning:"形而上学",               etymology:"meta（超えて）+ physics（自然学）",            prefix:"meta-", level:3},
  {word:"metadata",     meaning:"メタデータ",             etymology:"meta（超えて）+ data（データ）",               prefix:"meta-", level:2},
  {word:"methodology",  meaning:"方法論",                 etymology:"meta（変化）+ hodology（道の学問）",           prefix:"meta-", level:2},
  {word:"metaverse",    meaning:"メタバース・仮想空間",   etymology:"meta（超えて）+ verse（世界）",                prefix:"meta-", level:2},

  // ── neo-（新しい） ──────────────────────────────
  {word:"neologism",    meaning:"新語・新造語",           etymology:"neo（新しい）+ logism（言葉）",                prefix:"neo-", level:3},
  {word:"neonatal",     meaning:"新生児の",               etymology:"neo（新しい）+ natal（誕生の）",               prefix:"neo-", level:2},
  {word:"neon",         meaning:"ネオン・ネオン灯",       etymology:"neo（新しい）→ 新たに発見された元素",          prefix:"neo-", level:1},
  {word:"neoclassical", meaning:"新古典主義の",           etymology:"neo（新しい）+ classical（古典的）",           prefix:"neo-", level:3},
  {word:"neoliberal",   meaning:"新自由主義の",           etymology:"neo（新しい）+ liberal（自由主義の）",         prefix:"neo-", level:3},

  // ── proto-（最初の・原始の） ─────────────────────
  {word:"prototype",    meaning:"原型・プロトタイプ",     etymology:"proto（最初の）+ type（型）",                  prefix:"proto-", level:2},
  {word:"protocol",     meaning:"プロトコル・議定書",     etymology:"proto（最初の）+ col（接着剤）→ 最初の貼り紙", prefix:"proto-", level:2},
  {word:"protagonist",  meaning:"主人公・主役",           etymology:"proto（最初の）+ agonist（競争者）",           prefix:"proto-", level:2},
  {word:"proton",       meaning:"陽子・プロトン",         etymology:"proto（最初の）→ 最初の素粒子",                prefix:"proto-", level:2},

  // ── pseudo-（偽の・擬似） ─────────────────────────
  {word:"pseudonym",    meaning:"偽名・ペンネーム",       etymology:"pseudo（偽の）+ nym（名前）",                  prefix:"pseudo-", level:2},
  {word:"pseudoscience",meaning:"疑似科学",               etymology:"pseudo（偽の）+ science（科学）",              prefix:"pseudo-", level:2},
  {word:"pseudointellectual",meaning:"擬似知識人",        etymology:"pseudo（偽の）+ intellectual（知識人）",       prefix:"pseudo-", level:3},

  // ── retro-（後ろに・遡って） ─────────────────────
  {word:"retrospect",   meaning:"回顧・振り返り",         etymology:"retro（後ろに）+ spect（見る）→ 後ろを見る",   prefix:"retro-", level:2},
  {word:"retrograde",   meaning:"後退する・逆行する",     etymology:"retro（後ろに）+ grade（歩む）",               prefix:"retro-", level:3},
  {word:"retrofit",     meaning:"後付けする・改修する",   etymology:"retro（後ろに）+ fit（合わせる）",             prefix:"retro-", level:2},
  {word:"retroactive",  meaning:"遡及する・過去にさかのぼる",etymology:"retro（後ろに）+ active（活動する）",       prefix:"retro-", level:3},
  {word:"retrospective",meaning:"回顧的な・遡及的な",     etymology:"retro（後ろに）+ spective（見る）",            prefix:"retro-", level:3},

  // ── ultra-（極端に・超えて） ─────────────────────
  {word:"ultraviolet",  meaning:"紫外線の",               etymology:"ultra（超えて）+ violet（紫）→ 紫を超えた",    prefix:"ultra-", level:2},
  {word:"ultrasound",   meaning:"超音波",                 etymology:"ultra（超えて）+ sound（音）",                 prefix:"ultra-", level:2},
  {word:"ultramodern",  meaning:"超現代的な",             etymology:"ultra（超えて）+ modern（現代の）",            prefix:"ultra-", level:2},
  {word:"ultraconservative",meaning:"超保守的な",         etymology:"ultra（超えて）+ conservative（保守的）",      prefix:"ultra-", level:3},

  // ── hyper-（超えて・過度に） ─────────────────────
  {word:"hyperactive",  meaning:"過活動な・多動の",       etymology:"hyper（過度に）+ active（活動的な）",          prefix:"hyper-", level:1},
  {word:"hyperbole",    meaning:"誇張法・誇張表現",       etymology:"hyper（超えて）+ bole（投げる）",              prefix:"hyper-", level:2},
  {word:"hyperlink",    meaning:"ハイパーリンク",         etymology:"hyper（超えて）+ link（リンク）",              prefix:"hyper-", level:1},
  {word:"hypertension", meaning:"高血圧",                 etymology:"hyper（過度に）+ tension（緊張）",             prefix:"hyper-", level:2},
  {word:"hypersensitive",meaning:"過敏な",                etymology:"hyper（過度に）+ sensitive（敏感な）",         prefix:"hyper-", level:2},
  {word:"hyperventilate",meaning:"過換気する",            etymology:"hyper（過度に）+ ventilate（換気する）",       prefix:"hyper-", level:3},

  // ── hypo-（以下・不十分） ────────────────────────
  {word:"hypothesis",   meaning:"仮説・仮定",             etymology:"hypo（下に）+ thesis（置く）→ 下に置く提案",   prefix:"hypo-", level:2},
  {word:"hypothetical", meaning:"仮説的な・仮定の",       etymology:"hypo（下に）+ thetical（置く）",               prefix:"hypo-", level:2},
  {word:"hypocrisy",    meaning:"偽善・見せかけ",         etymology:"hypo（下に）+ crisy（判断）→ 裏で判断する",    prefix:"hypo-", level:2},
  {word:"hypocrite",    meaning:"偽善者",                 etymology:"hypo（下に）+ crite（判断する人）",            prefix:"hypo-", level:2},
  {word:"hypothermia",  meaning:"低体温症",               etymology:"hypo（以下）+ thermia（熱）",                  prefix:"hypo-", level:2},

  // ── omni-（全て・あらゆる） ─────────────────────
  {word:"omnipotent",   meaning:"全能の・万能の",         etymology:"omni（全て）+ potent（力のある）",             prefix:"omni-", level:2},
  {word:"omniscient",   meaning:"全知の・何でも知っている",etymology:"omni（全て）+ scient（知る）",                prefix:"omni-", level:2},
  {word:"omnivore",     meaning:"雑食動物",               etymology:"omni（全て）+ vore（食べる）",                 prefix:"omni-", level:2},
  {word:"omnipresent",  meaning:"遍在する・至る所にある", etymology:"omni（全て）+ present（存在する）",            prefix:"omni-", level:3},
  {word:"omnibus",      meaning:"バス・総集編",           etymology:"omni（全て）+ bus（乗り物）→ 全員のもの",      prefix:"omni-", level:2},

  // ── pan-（全て・すべてにわたる） ────────────────
  {word:"pandemic",     meaning:"パンデミック・世界的流行",etymology:"pan（全て）+ demic（民衆）",                   prefix:"pan-", level:2},
  {word:"panorama",     meaning:"パノラマ・全景",         etymology:"pan（全て）+ orama（見る）→ 全てを見る",       prefix:"pan-", level:1},
  {word:"pantomime",    meaning:"無言劇・パントマイム",   etymology:"pan（全て）+ tomime（模倣）",                  prefix:"pan-", level:2},
  {word:"pandemic",     meaning:"汎世界的な流行病",       etymology:"pan（全て）+ demic（民衆）",                   prefix:"pan-", level:2},
  {word:"panacea",      meaning:"万能薬・解決策",         etymology:"pan（全て）+ acea（治す）",                    prefix:"pan-", level:3},
  {word:"pantheism",    meaning:"汎神論",                 etymology:"pan（全て）+ theism（神論）",                  prefix:"pan-", level:3},

  // ── sym-/syn-（共に・一緒に） ───────────────────
  {word:"sympathy",     meaning:"同情・共感",             etymology:"sym（共に）+ pathy（感じる）",                 prefix:"sym-", level:1},
  {word:"symphony",     meaning:"交響曲・シンフォニー",   etymology:"sym（共に）+ phony（音）",                    prefix:"sym-", level:1},
  {word:"symmetry",     meaning:"対称・均整",             etymology:"sym（共に）+ metry（測る）",                   prefix:"sym-", level:2},
  {word:"symbolic",     meaning:"象徴的な",               etymology:"sym（共に）+ bolic（投げる）→ 同じものを表す", prefix:"sym-", level:1},
  {word:"synchronize",  meaning:"同期させる",             etymology:"syn（共に）+ chronize（時間）",                prefix:"sym-", level:2},
  {word:"synthesis",    meaning:"総合・合成",             etymology:"syn（共に）+ thesis（置く）",                  prefix:"sym-", level:2},
  {word:"synthetic",    meaning:"合成の・人工の",         etymology:"syn（共に）+ thetic（置く）",                  prefix:"sym-", level:2},
  {word:"syndrome",     meaning:"症候群・シンドローム",   etymology:"syn（共に）+ drome（走る）",                   prefix:"sym-", level:2},
  {word:"synergy",      meaning:"相乗効果・シナジー",     etymology:"syn（共に）+ ergy（働く）",                    prefix:"sym-", level:2},

  // ── dia-（〜を通して・間に） ────────────────────
  {word:"diagnose",     meaning:"診断する",               etymology:"dia（〜を通して）+ gnose（知る）",             prefix:"dia-", level:1},
  {word:"diagnosis",    meaning:"診断・診察",             etymology:"dia（〜を通して）+ gnosis（知識）",            prefix:"dia-", level:2},
  {word:"dialogue",     meaning:"対話・ダイアログ",       etymology:"dia（間に）+ logue（言葉）",                   prefix:"dia-", level:1},
  {word:"diameter",     meaning:"直径",                   etymology:"dia（〜を通して）+ meter（測る）",             prefix:"dia-", level:1},
  {word:"diagonal",     meaning:"対角線の",               etymology:"dia（〜を通して）+ gonal（角）",               prefix:"dia-", level:2},
  {word:"dilemma",      meaning:"ジレンマ・板挟み",       etymology:"di（二つ）+ lemma（命題）→ 二つの選択肢",      prefix:"dia-", level:2},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
