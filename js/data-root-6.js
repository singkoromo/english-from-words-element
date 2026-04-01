/**
 * data-root-6.js — 語根データ後半（約370語）
 * -sci-, -scop-, -scrib-/-script-, -sol-/-solv-, -soph-,
 * -spect-/-spic-, -spir-, -tang-/-tact-, -tempor-, -ten-/-tain-,
 * -terr-, -the-/-theo-, -tract-, -vac-, -val-/-vail-,
 * -ven-/-vent-, -ver-/-veri-, -vid-/-vis-, -viv-/-vit-, -voc-/-vok-
 */
(function(){
  var d = [

  // ── -sci-（知る） ─────────────────────────────
  {word:"science",      meaning:"科学",                      etymology:"sci（知る）+ ence",                      root:"-sci-", level:0},
  {word:"conscious",    meaning:"意識のある",                 etymology:"con（共に）+ sci（知る）+ ous",           root:"-sci-", level:1},
  {word:"conscience",   meaning:"良心",                      etymology:"con（共に）+ sci（知る）+ ence",          root:"-sci-", level:1},
  {word:"unconscious",  meaning:"無意識の",                  etymology:"un（否定）+ con + sci（知る）+ ous",      root:"-sci-", level:1},
  {word:"omniscient",   meaning:"全知の",                    etymology:"omni（すべて）+ sci（知る）+ ent",        root:"-sci-", level:3},
  {word:"prescient",    meaning:"予知能力のある",              etymology:"pre（前に）+ sci（知る）+ ent",          root:"-sci-", level:3},
  {word:"scientist",    meaning:"科学者",                    etymology:"sci（知る）+ entist",                    root:"-sci-", level:0},
  {word:"nescient",     meaning:"無知な",                    etymology:"ne（否定）+ sci（知る）+ ent",           root:"-sci-", level:3},
  {word:"consciousness",meaning:"意識・自覚",                etymology:"con（共に）+ sci（知る）+ ousness",       root:"-sci-", level:2},

  // ── -scop-（見る） ───────────────────────────
  {word:"scope",        meaning:"範囲・視野",                etymology:"scop（見る）+ e",                        root:"-scop-", level:1},
  {word:"telescope",    meaning:"望遠鏡",                    etymology:"tele（遠く）+ scope（見る）",             root:"-scop-", level:1},
  {word:"microscope",   meaning:"顕微鏡",                    etymology:"micro（小さい）+ scope（見る）",          root:"-scop-", level:1},
  {word:"horoscope",    meaning:"星占い",                    etymology:"horo（時）+ scope（見る）",               root:"-scop-", level:2},
  {word:"periscope",    meaning:"潜望鏡",                    etymology:"peri（周囲）+ scope（見る）",             root:"-scop-", level:2},
  {word:"stethoscope",  meaning:"聴診器",                    etymology:"stetho（胸）+ scope（見る）",             root:"-scop-", level:2},
  {word:"kaleidoscope", meaning:"万華鏡",                    etymology:"kaleo（美しい）+ eidos（形）+ scope（見る）", root:"-scop-", level:2},
  {word:"endoscope",    meaning:"内視鏡",                    etymology:"endo（内に）+ scope（見る）",             root:"-scop-", level:3},

  // ── -scrib-/-script-（書く） ─────────────────
  {word:"describe",     meaning:"描写する・説明する",          etymology:"de（完全に）+ scrib（書く）+ e",         root:"-scrib-", level:0},
  {word:"prescribe",    meaning:"処方する・規定する",          etymology:"pre（前に）+ scrib（書く）+ e",          root:"-scrib-", level:2},
  {word:"subscribe",    meaning:"定期購読する・賛成する",      etymology:"sub（下に）+ scrib（書く）+ e",          root:"-scrib-", level:1},
  {word:"inscribe",     meaning:"刻む・書き込む",             etymology:"in（中に）+ scrib（書く）+ e",           root:"-scrib-", level:2},
  {word:"transcribe",   meaning:"書き写す・転記する",          etymology:"trans（超えて）+ scrib（書く）+ e",      root:"-scrib-", level:2},
  {word:"script",       meaning:"台本・スクリプト",            etymology:"script（書いたもの）",                   root:"-scrib-", level:1},
  {word:"manuscript",   meaning:"手書き原稿",                etymology:"manu（手）+ script（書いた）",           root:"-scrib-", level:2},
  {word:"scripture",    meaning:"聖書・経典",                etymology:"script（書いた）+ ure",                  root:"-scrib-", level:2},
  {word:"description",  meaning:"説明・記述",                etymology:"de（完全に）+ script（書く）+ ion",      root:"-scrib-", level:0},
  {word:"prescription", meaning:"処方箋",                   etymology:"pre（前に）+ script（書く）+ ion",       root:"-scrib-", level:1},
  {word:"circumscribe", meaning:"制限する・周囲を描く",        etymology:"circum（周囲）+ scrib（書く）+ e",       root:"-scrib-", level:3},
  {word:"conscript",    meaning:"徴兵する",                  etymology:"con（共に）+ script（書く）→ 名簿に書く", root:"-scrib-", level:3},

  // ── -solv-/-solu-（解く・溶かす） ───────────
  {word:"solve",        meaning:"解く・解決する",             etymology:"solv（解く）+ e",                        root:"-solv-", level:0},
  {word:"resolve",      meaning:"解決する・決意する",          etymology:"re（再び）+ solv（解く）+ e",            root:"-solv-", level:1},
  {word:"dissolve",     meaning:"溶かす・解散する",           etymology:"dis（離れて）+ solv（解く）+ e",         root:"-solv-", level:1},
  {word:"absolve",      meaning:"免除する・無罪にする",        etymology:"ab（離れて）+ solv（解く）+ e",          root:"-solv-", level:3},
  {word:"solution",     meaning:"解決・溶液",                etymology:"solu（解く）+ tion",                     root:"-solv-", level:0},
  {word:"absolute",     meaning:"絶対的な・完全な",           etymology:"ab（離れて）+ solu（解く）+ te",         root:"-solv-", level:1},
  {word:"soluble",      meaning:"溶解性の・解決可能な",        etymology:"solu（解く）+ ble",                      root:"-solv-", level:2},
  {word:"insolvent",    meaning:"支払い能力のない",           etymology:"in（否定）+ solv（解く）+ ent",          root:"-solv-", level:3},
  {word:"irresolute",   meaning:"優柔不断な",                etymology:"ir（否定）+ re + solu（解く）+ te",      root:"-solv-", level:3},

  // ── -soph-（知恵・賢さ） ─────────────────────
  {word:"philosophy",   meaning:"哲学",                      etymology:"philo（愛する）+ sophy（知恵）",          root:"-soph-", level:1},
  {word:"sophisticated",meaning:"洗練された・高度な",          etymology:"sophist（知者）+ icated",               root:"-soph-", level:1},
  {word:"sophomore",    meaning:"2年生",                     etymology:"soph（賢い）+ omore（愚か）→ 半人前",    root:"-soph-", level:1},
  {word:"sophistry",    meaning:"詭弁・こじつけ",             etymology:"sophist（知者）+ ry",                    root:"-soph-", level:3},
  {word:"theosophy",    meaning:"神智学",                    etymology:"theo（神）+ sophy（知恵）",              root:"-soph-", level:3},

  // ── -spect-/-spic-（見る・観察する） ────────
  {word:"respect",      meaning:"尊敬する",                  etymology:"re（再び）+ spect（見る）→ 見直す",       root:"-spect-", level:0},
  {word:"inspect",      meaning:"検査する・調査する",          etymology:"in（中に）+ spect（見る）",              root:"-spect-", level:1},
  {word:"expect",       meaning:"期待する・予期する",          etymology:"ex（外に）+ spect（見る）→ 先を見る",     root:"-spect-", level:0},
  {word:"suspect",      meaning:"疑う・容疑者",               etymology:"sub（下から）+ spect（見る）",           root:"-spect-", level:1},
  {word:"spectacle",    meaning:"光景・見世物",               etymology:"spect（見る）+ acle",                    root:"-spect-", level:1},
  {word:"perspective",  meaning:"遠近法・見方",               etymology:"per（完全に）+ spect（見る）+ ive",      root:"-spect-", level:1},
  {word:"circumspect",  meaning:"用心深い・慎重な",            etymology:"circum（周囲）+ spect（見る）",          root:"-spect-", level:3},
  {word:"conspicuous",  meaning:"目立つ・顕著な",             etymology:"con（完全に）+ spic（見る）+ uous",      root:"-spect-", level:2},
  {word:"introspect",   meaning:"内省する",                  etymology:"intro（内に）+ spect（見る）",           root:"-spect-", level:2},
  {word:"retrospect",   meaning:"回顧・振り返り",             etymology:"retro（後ろに）+ spect（見る）",         root:"-spect-", level:2},
  {word:"prospective",  meaning:"見込みのある・将来の",        etymology:"pro（前に）+ spect（見る）+ ive",        root:"-spect-", level:2},
  {word:"speculate",    meaning:"推測する・投機する",          etymology:"spec（見る）+ ulate",                    root:"-spect-", level:2},

  // ── -spir-（息・精神） ───────────────────────
  {word:"spirit",       meaning:"精神・霊魂",                etymology:"spir（息）+ it",                         root:"-spir-", level:0},
  {word:"inspire",      meaning:"鼓舞する・ひらめかせる",      etymology:"in（中に）+ spir（息）+ e → 息を吹き込む",root:"-spir-", level:1},
  {word:"expire",       meaning:"期限が切れる・息を吐く",      etymology:"ex（外に）+ spir（息）+ e",              root:"-spir-", level:1},
  {word:"conspire",     meaning:"陰謀を企てる",               etymology:"con（共に）+ spir（息）+ e → 息を合わせる",root:"-spir-", level:2},
  {word:"aspire",       meaning:"熱望する・志す",             etymology:"a（〜へ）+ spir（息）+ e",               root:"-spir-", level:2},
  {word:"respire",      meaning:"呼吸する",                  etymology:"re（再び）+ spir（息）+ e",              root:"-spir-", level:2},
  {word:"transpire",    meaning:"漏れる・起きる",             etymology:"trans（超えて）+ spir（息）+ e",         root:"-spir-", level:3},
  {word:"perspire",     meaning:"汗をかく",                  etymology:"per（完全に）+ spir（息）+ e",           root:"-spir-", level:2},
  {word:"spiritual",    meaning:"精神的な・霊的な",            etymology:"spirit（精神）+ ual",                    root:"-spir-", level:1},

  // ── -tang-/-tact-（触れる） ──────────────────
  {word:"tangible",     meaning:"有形の・具体的な",           etymology:"tang（触れる）+ ible",                   root:"-tang-", level:2},
  {word:"contact",      meaning:"接触・連絡",                etymology:"con（共に）+ tact（触れる）",            root:"-tang-", level:0},
  {word:"intact",       meaning:"傷ついていない・完全な",      etymology:"in（否定）+ tact（触れる）→ 触れられていない", root:"-tang-", level:2},
  {word:"tactile",      meaning:"触覚の",                    etymology:"tact（触れる）+ ile",                    root:"-tang-", level:3},
  {word:"intangible",   meaning:"無形の・捉えがたい",          etymology:"in（否定）+ tang（触れる）+ ible",       root:"-tang-", level:2},
  {word:"contagious",   meaning:"伝染性の",                  etymology:"con（共に）+ tag（触れる）+ ious",        root:"-tang-", level:2},
  {word:"contingent",   meaning:"偶発的な・派遣団",           etymology:"con（共に）+ ting（触れる）+ ent",        root:"-tang-", level:3},
  {word:"attain",       meaning:"達成する・到達する",          etymology:"at（〜へ）+ tain（触れる）",             root:"-tang-", level:2},

  // ── -tempor-（時間） ─────────────────────────
  {word:"temporary",    meaning:"一時的な",                  etymology:"tempor（時間）+ ary",                    root:"-tempor-", level:1},
  {word:"contemporary", meaning:"同時代の・現代の",           etymology:"con（共に）+ tempor（時間）+ ary",       root:"-tempor-", level:2},
  {word:"temporal",     meaning:"一時的な・時間の",           etymology:"tempor（時間）+ al",                     root:"-tempor-", level:2},
  {word:"tempo",        meaning:"テンポ・速度",               etymology:"tempor（時間）→ 時の流れ",               root:"-tempor-", level:1},
  {word:"extemporaneous",meaning:"即興の・準備なしの",         etymology:"ex（外に）+ tempor（時間）+ aneous",     root:"-tempor-", level:3},

  // ── -ten-/-tain-（保つ・持つ） ───────────────
  {word:"contain",      meaning:"含む・抑える",               etymology:"con（共に）+ tain（持つ）",              root:"-ten-", level:0},
  {word:"maintain",     meaning:"維持する",                  etymology:"main（手）+ tain（持つ）",               root:"-ten-", level:1},
  {word:"obtain",       meaning:"手に入れる・達成する",        etymology:"ob（〜に）+ tain（持つ）",               root:"-ten-", level:1},
  {word:"retain",       meaning:"保持する・覚えている",        etymology:"re（再び）+ tain（持つ）",               root:"-ten-", level:2},
  {word:"sustain",      meaning:"持続する・支える",           etymology:"sus（下から）+ tain（持つ）",            root:"-ten-", level:1},
  {word:"tenacious",    meaning:"粘り強い・執念深い",          etymology:"ten（持つ）+ acious",                    root:"-ten-", level:2},
  {word:"tenant",       meaning:"賃借人・テナント",            etymology:"ten（持つ）+ ant",                       root:"-ten-", level:2},
  {word:"detention",    meaning:"拘留・居残り",               etymology:"de（離れて）+ ten（持つ）+ tion",        root:"-ten-", level:2},
  {word:"abstain",      meaning:"控える・禁欲する",           etymology:"abs（離れて）+ tain（持つ）",            root:"-ten-", level:2},
  {word:"pertinent",    meaning:"適切な・関連した",            etymology:"per（完全に）+ tin（持つ）+ ent",        root:"-ten-", level:2},
  {word:"impertinent",  meaning:"無礼な・不適切な",           etymology:"im（否定）+ pertinent（適切な）",        root:"-ten-", level:2},
  {word:"tenure",       meaning:"在職期間・終身在職権",        etymology:"ten（持つ）+ ure",                       root:"-ten-", level:3},

  // ── -terr-（土地・恐れ） ─────────────────────
  {word:"territory",    meaning:"領土・なわばり",              etymology:"terr（土地）+ itory",                    root:"-terr-", level:1},
  {word:"terrain",      meaning:"地形・地勢",                etymology:"terr（土地）+ ain",                      root:"-terr-", level:2},
  {word:"terrestrial",  meaning:"陸の・地球の",               etymology:"terr（土地）+ estrial",                  root:"-terr-", level:2},
  {word:"terrible",     meaning:"恐ろしい",                  etymology:"terr（恐れ）+ ible",                     root:"-terr-", level:0},
  {word:"terrify",      meaning:"恐怖させる",                 etymology:"terr（恐れ）+ ify",                      root:"-terr-", level:1},
  {word:"terrorist",    meaning:"テロリスト",                 etymology:"terr（恐れ）+ orist",                    root:"-terr-", level:1},
  {word:"deter",        meaning:"思いとどまらせる",            etymology:"de（離れて）+ terr（恐れ）",             root:"-terr-", level:2},
  {word:"Mediterranean",meaning:"地中海の",                  etymology:"medi（中間）+ terr（土地）+ anean",      root:"-terr-", level:2},
  {word:"inter",        meaning:"埋葬する",                  etymology:"in（中に）+ ter（土地）→ 土に入れる",     root:"-terr-", level:3},

  // ── -the-/-theo-（神） ───────────────────────
  {word:"theology",     meaning:"神学",                      etymology:"theo（神）+ logy（学問）",               root:"-theo-", level:2},
  {word:"atheist",      meaning:"無神論者",                  etymology:"a（否定）+ the（神）+ ist",              root:"-theo-", level:2},
  {word:"monotheism",   meaning:"一神教",                    etymology:"mono（一つ）+ the（神）+ ism",           root:"-theo-", level:3},
  {word:"polytheism",   meaning:"多神教",                    etymology:"poly（多く）+ the（神）+ ism",           root:"-theo-", level:3},
  {word:"enthusiasm",   meaning:"熱意・熱狂",                etymology:"en（中に）+ thu（神）+ siasm → 神が宿る",  root:"-theo-", level:1},

  // ── -tract-（引く） ──────────────────────────
  {word:"attract",      meaning:"引き付ける",                 etymology:"at（〜へ）+ tract（引く）",              root:"-tract-", level:0},
  {word:"extract",      meaning:"抽出する・取り出す",          etymology:"ex（外に）+ tract（引く）",              root:"-tract-", level:1},
  {word:"contract",     meaning:"契約・収縮する",             etymology:"con（共に）+ tract（引く）",             root:"-tract-", level:0},
  {word:"distract",     meaning:"気を散らす",                etymology:"dis（離れて）+ tract（引く）",           root:"-tract-", level:1},
  {word:"subtract",     meaning:"引き算する",                 etymology:"sub（下に）+ tract（引く）",             root:"-tract-", level:0},
  {word:"retract",      meaning:"撤回する・引き込める",        etymology:"re（元に）+ tract（引く）",              root:"-tract-", level:2},
  {word:"abstract",     meaning:"抽象的な・要約",             etymology:"abs（離れて）+ tract（引く）",           root:"-tract-", level:1},
  {word:"detract",      meaning:"損なう・そらす",             etymology:"de（下に）+ tract（引く）",              root:"-tract-", level:3},
  {word:"tractor",      meaning:"トラクター",                 etymology:"tract（引く）+ or",                      root:"-tract-", level:0},
  {word:"intractable",  meaning:"手に負えない・難治の",        etymology:"in（否定）+ tract（引く）+ able",        root:"-tract-", level:3},
  {word:"protract",     meaning:"引き延ばす",                 etymology:"pro（前に）+ tract（引く）",             root:"-tract-", level:3},

  // ── -vac-（空・空白） ────────────────────────
  {word:"vacant",       meaning:"空の・空席の",               etymology:"vac（空）+ ant",                         root:"-vac-", level:1},
  {word:"vacation",     meaning:"休暇",                      etymology:"vac（空）+ ation → 空の時間",            root:"-vac-", level:0},
  {word:"evacuate",     meaning:"避難する・立ち退く",          etymology:"e（外に）+ vac（空）+ uate",             root:"-vac-", level:1},
  {word:"vacuum",       meaning:"真空・掃除機",               etymology:"vac（空）+ uum",                         root:"-vac-", level:1},
  {word:"void",         meaning:"無効の・空虚",               etymology:"vac（空）→ void（空）",                  root:"-vac-", level:2},
  {word:"devoid",       meaning:"欠けている・ない",            etymology:"de（完全に）+ void（空）",               root:"-vac-", level:2},
  {word:"vacuous",      meaning:"中身のない・空虚な",          etymology:"vac（空）+ uous",                        root:"-vac-", level:3},
  {word:"evasion",      meaning:"回避・逃避",                 etymology:"e（外に）+ vas（空）+ ion",              root:"-vac-", level:2},

  // ── -val-/-vail-（強い・価値がある） ────────
  {word:"value",        meaning:"価値・評価する",             etymology:"val（価値）+ ue",                        root:"-val-", level:0},
  {word:"valid",        meaning:"有効な・正当な",             etymology:"val（強い）+ id",                        root:"-val-", level:1},
  {word:"evaluate",     meaning:"評価する",                  etymology:"e（外に）+ val（価値）+ uate",           root:"-val-", level:1},
  {word:"equivalent",   meaning:"同等の・相当する",           etymology:"equi（等しい）+ val（価値）+ ent",        root:"-val-", level:2},
  {word:"prevail",      meaning:"勝る・普及している",          etymology:"pre（前に）+ vail（強い）",              root:"-val-", level:2},
  {word:"available",    meaning:"利用可能な",                 etymology:"a（〜に）+ vail（価値）+ able",          root:"-val-", level:0},
  {word:"invalid",      meaning:"無効な・病人",               etymology:"in（否定）+ val（強い）+ id",            root:"-val-", level:2},
  {word:"valiant",      meaning:"勇敢な",                    etymology:"val（強い）+ iant",                      root:"-val-", level:2},
  {word:"ambivalent",   meaning:"相反する感情を持つ",          etymology:"ambi（両方）+ val（強い）+ ent",         root:"-val-", level:3},
  {word:"convalescent", meaning:"回復期の",                  etymology:"con（共に）+ val（強い）+ escent",        root:"-val-", level:3},

  // ── -ven-/-vent-（来る） ─────────────────────
  {word:"invent",       meaning:"発明する",                  etymology:"in（中に）+ vent（来る）→ 考えが来る",    root:"-ven-", level:0},
  {word:"event",        meaning:"出来事・イベント",            etymology:"e（外に）+ vent（来る）",                root:"-ven-", level:0},
  {word:"prevent",      meaning:"防ぐ・妨げる",               etymology:"pre（前に）+ vent（来る）",              root:"-ven-", level:0},
  {word:"convention",   meaning:"慣習・大会",                 etymology:"con（共に）+ vent（来る）+ ion",         root:"-ven-", level:1},
  {word:"adventure",    meaning:"冒険",                      etymology:"ad（〜へ）+ vent（来る）+ ure",          root:"-ven-", level:0},
  {word:"avenue",       meaning:"大通り・手段",               etymology:"a（〜へ）+ ven（来る）+ ue",            root:"-ven-", level:1},
  {word:"intervene",    meaning:"介入する",                  etymology:"inter（間に）+ ven（来る）+ e",          root:"-ven-", level:2},
  {word:"circumvent",   meaning:"回避する・迂回する",          etymology:"circum（周囲）+ vent（来る）",           root:"-ven-", level:3},
  {word:"revenue",      meaning:"収益・歳入",                 etymology:"re（再び）+ ven（来る）+ ue",           root:"-ven-", level:2},
  {word:"convene",      meaning:"召集する・集まる",            etymology:"con（共に）+ ven（来る）+ e",            root:"-ven-", level:2},
  {word:"souvenir",     meaning:"記念品・みやげ",              etymology:"sou（下から）+ venir（来る）",           root:"-ven-", level:1},

  // ── -ver-/-veri-（真実・本当の） ─────────────
  {word:"verify",       meaning:"確認する・証明する",          etymology:"veri（真実）+ fy",                       root:"-ver-", level:1},
  {word:"verdict",      meaning:"評決・判断",                 etymology:"ver（真実）+ dict（言う）",              root:"-ver-", level:2},
  {word:"verity",       meaning:"真実・事実",                 etymology:"veri（真実）+ ty",                       root:"-ver-", level:3},
  {word:"veritable",    meaning:"本物の・真の",               etymology:"verit（真実）+ able",                    root:"-ver-", level:3},
  {word:"aver",         meaning:"断言する・主張する",          etymology:"a（〜へ）+ ver（真実）",                 root:"-ver-", level:3},
  {word:"verisimilitude",meaning:"真実らしさ・写実性",         etymology:"veri（真実）+ simil（同じ）+ itude",     root:"-ver-", level:3},

  // ── -vid-/-vis-（見る） ──────────────────────
  {word:"video",        meaning:"動画・映像",                 etymology:"vid（見る）+ eo",                        root:"-vid-", level:0},
  {word:"vision",       meaning:"視覚・ビジョン",              etymology:"vis（見る）+ ion",                       root:"-vid-", level:0},
  {word:"visit",        meaning:"訪問する",                   etymology:"vis（見る）+ it",                        root:"-vid-", level:0},
  {word:"visible",      meaning:"目に見える",                 etymology:"vis（見る）+ ible",                      root:"-vid-", level:1},
  {word:"evident",      meaning:"明らかな",                   etymology:"e（外に）+ vid（見る）+ ent",            root:"-vid-", level:1},
  {word:"provide",      meaning:"提供する",                   etymology:"pro（前に）+ vid（見る）+ e → 先を見る",  root:"-vid-", level:0},
  {word:"supervise",    meaning:"監督する",                   etymology:"super（上に）+ vis（見る）+ e",          root:"-vid-", level:1},
  {word:"invisible",    meaning:"見えない",                   etymology:"in（否定）+ vis（見る）+ ible",          root:"-vid-", level:1},
  {word:"improvise",    meaning:"即興でやる",                  etymology:"im（否定）+ pro + vis（見る）+ e → 準備なし", root:"-vid-", level:2},
  {word:"revise",       meaning:"改訂する・見直す",            etymology:"re（再び）+ vis（見る）+ e",             root:"-vid-", level:1},
  {word:"envision",     meaning:"思い描く・想像する",          etymology:"en（中に）+ vis（見る）+ ion",           root:"-vid-", level:2},
  {word:"clairvoyant",  meaning:"透視能力のある",              etymology:"clair（明確な）+ voy（見る）+ ant",      root:"-vid-", level:3},

  // ── -viv-/-vit-（生きる） ────────────────────
  {word:"vivid",        meaning:"鮮やかな・生き生きとした",    etymology:"viv（生きる）+ id",                      root:"-viv-", level:1},
  {word:"survive",      meaning:"生き残る",                  etymology:"sur（超えて）+ viv（生きる）+ e",         root:"-viv-", level:0},
  {word:"revive",       meaning:"蘇らせる・回復する",          etymology:"re（再び）+ viv（生きる）+ e",           root:"-viv-", level:1},
  {word:"vital",        meaning:"重要な・生命の",             etymology:"vit（生きる）+ al",                      root:"-viv-", level:1},
  {word:"vitamin",      meaning:"ビタミン",                  etymology:"vit（生きる）+ amin（アミン）",           root:"-viv-", level:0},
  {word:"vivacious",    meaning:"活気のある・陽気な",          etymology:"viv（生きる）+ acious",                  root:"-viv-", level:2},
  {word:"convivial",    meaning:"陽気な・社交的な",           etymology:"con（共に）+ viv（生きる）+ ial",         root:"-viv-", level:3},
  {word:"viable",       meaning:"実行可能な",                 etymology:"via（道）+ ble → 生きられる道",          root:"-viv-", level:2},
  {word:"vitality",     meaning:"活力・生命力",               etymology:"vit（生きる）+ ality",                   root:"-viv-", level:2},
  {word:"resuscitate",  meaning:"蘇生させる",                 etymology:"re（再び）+ sus（下から）+ cit（動く）+ ate", root:"-viv-", level:3},

  // ── -voc-/-vok-（呼ぶ・声） ──────────────────
  {word:"voice",        meaning:"声",                        etymology:"voc（声）+ e",                           root:"-voc-", level:0},
  {word:"vocal",        meaning:"声の・発言する",             etymology:"voc（声）+ al",                          root:"-voc-", level:1},
  {word:"vocation",     meaning:"職業・使命",                 etymology:"voc（呼ぶ）+ ation → 神に呼ばれた仕事",  root:"-voc-", level:2},
  {word:"invoke",       meaning:"呼び出す・援用する",          etymology:"in（中に）+ vok（呼ぶ）+ e",             root:"-voc-", level:2},
  {word:"revoke",       meaning:"取り消す・廃止する",          etymology:"re（元に）+ vok（呼ぶ）+ e",             root:"-voc-", level:3},
  {word:"provoke",      meaning:"挑発する・引き起こす",        etymology:"pro（前に）+ vok（呼ぶ）+ e",            root:"-voc-", level:2},
  {word:"advocate",     meaning:"支持者・弁護する",           etymology:"ad（〜へ）+ voc（呼ぶ）+ ate",           root:"-voc-", level:2},
  {word:"vocabulary",   meaning:"語彙",                      etymology:"voc（声）+ abul + ary",                  root:"-voc-", level:0},
  {word:"evoke",        meaning:"呼び起こす・思い起こさせる",  etymology:"e（外に）+ vok（呼ぶ）+ e",              root:"-voc-", level:2},
  {word:"equivocate",   meaning:"言葉を濁す・あいまいに言う",  etymology:"equi（等しい）+ voc（声）+ ate",         root:"-voc-", level:3},
  {word:"irrevocable",  meaning:"取り消せない",               etymology:"ir（否定）+ re + voc（呼ぶ）+ able",     root:"-voc-", level:3},

  // ── -cap-/-cept-/-ceiv-（取る・とらえる） ────
  {word:"capture",      meaning:"捕まえる",                  etymology:"cap（取る）+ ture",                      root:"-cap-", level:0},
  {word:"accept",       meaning:"受け入れる",                etymology:"ac（〜へ）+ cept（取る）",               root:"-cap-", level:0},
  {word:"except",       meaning:"除いて・例外",               etymology:"ex（外に）+ cept（取る）",               root:"-cap-", level:0},
  {word:"concept",      meaning:"概念",                      etymology:"con（共に）+ cept（取る）",              root:"-cap-", level:1},
  {word:"perceive",     meaning:"知覚する・理解する",          etymology:"per（完全に）+ ceiv（取る）+ e",         root:"-cap-", level:2},
  {word:"receive",      meaning:"受け取る",                  etymology:"re（再び）+ ceiv（取る）+ e",            root:"-cap-", level:0},
  {word:"deceive",      meaning:"だます・欺く",               etymology:"de（離れて）+ ceiv（取る）+ e",          root:"-cap-", level:2},
  {word:"conceive",     meaning:"思いつく・妊娠する",          etymology:"con（共に）+ ceiv（取る）+ e",           root:"-cap-", level:2},
  {word:"susceptible",  meaning:"影響を受けやすい",            etymology:"sus（下から）+ cept（取る）+ ible",      root:"-cap-", level:3},
  {word:"anticipate",   meaning:"予想する・先手を打つ",        etymology:"anti（前に）+ cip（取る）+ ate",         root:"-cap-", level:2},

  // ── -cred-（信じる） ─────────────────────────
  {word:"credit",       meaning:"信用・単位",                etymology:"cred（信じる）+ it",                     root:"-cred-", level:0},
  {word:"credible",     meaning:"信頼できる",                etymology:"cred（信じる）+ ible",                   root:"-cred-", level:2},
  {word:"incredible",   meaning:"信じられない・驚異的な",      etymology:"in（否定）+ cred（信じる）+ ible",       root:"-cred-", level:0},
  {word:"credential",   meaning:"資格証明書",                etymology:"cred（信じる）+ ential",                 root:"-cred-", level:2},
  {word:"creed",        meaning:"信条・信仰",                etymology:"cred（信じる）+ d",                      root:"-cred-", level:2},
  {word:"credulous",    meaning:"だまされやすい",             etymology:"cred（信じる）+ ulous",                  root:"-cred-", level:3},
  {word:"discredit",    meaning:"信用を失わせる",             etymology:"dis（否定）+ credit（信用）",            root:"-cred-", level:2},
  {word:"accredit",     meaning:"認定する・資格を与える",      etymology:"ac（〜へ）+ cred（信じる）+ it",         root:"-cred-", level:3},

  // ── -dict-（言う） ───────────────────────────
  {word:"dictate",      meaning:"命令する・書き取らせる",      etymology:"dict（言う）+ ate",                      root:"-dict-", level:1},
  {word:"predict",      meaning:"予言する",                  etymology:"pre（前に）+ dict（言う）",              root:"-dict-", level:0},
  {word:"contradict",   meaning:"矛盾する・反論する",          etymology:"contra（反対）+ dict（言う）",           root:"-dict-", level:2},
  {word:"indicate",     meaning:"示す・指摘する",             etymology:"in（中に）+ dic（言う）+ ate",           root:"-dict-", level:1},
  {word:"dedicate",     meaning:"捧げる・専念する",           etymology:"de（完全に）+ dic（言う）+ ate",         root:"-dict-", level:2},
  {word:"vindicate",    meaning:"正当性を証明する",            etymology:"vin（力）+ dic（言う）+ ate",            root:"-dict-", level:3},
  {word:"abdicate",     meaning:"退位する・放棄する",          etymology:"ab（離れて）+ dic（言う）+ ate",         root:"-dict-", level:2},
  {word:"edict",        meaning:"勅令・布告",                etymology:"e（外に）+ dict（言う）",                root:"-dict-", level:3},
  {word:"indict",       meaning:"起訴する",                  etymology:"in（中に）+ dict（言う）",               root:"-dict-", level:2},
  {word:"benediction",  meaning:"祝福",                      etymology:"bene（良い）+ dict（言う）+ ion",        root:"-dict-", level:3},

  // ── -duc-/-duct-（導く） ─────────────────────
  {word:"produce",      meaning:"生産する・産出する",          etymology:"pro（前に）+ duc（導く）+ e",            root:"-duc-", level:0},
  {word:"reduce",       meaning:"減らす",                   etymology:"re（元に）+ duc（導く）+ e",             root:"-duc-", level:0},
  {word:"educate",      meaning:"教育する",                  etymology:"e（外に）+ duc（導く）+ ate → 引き出す",  root:"-duc-", level:0},
  {word:"conduct",      meaning:"行動・指揮する",             etymology:"con（共に）+ duct（導く）",              root:"-duc-", level:1},
  {word:"deduce",       meaning:"推論する",                  etymology:"de（下に）+ duc（導く）+ e",             root:"-duc-", level:2},
  {word:"introduce",    meaning:"紹介する・導入する",          etymology:"intro（内に）+ duc（導く）+ e",          root:"-duc-", level:0},
  {word:"seduce",       meaning:"誘惑する",                  etymology:"se（離れて）+ duc（導く）+ e",           root:"-duc-", level:2},
  {word:"abduct",       meaning:"誘拐する",                  etymology:"ab（離れて）+ duct（導く）",             root:"-duc-", level:2},
  {word:"induct",       meaning:"就任させる",                etymology:"in（中に）+ duct（導く）",               root:"-duc-", level:3},
  {word:"ductile",      meaning:"展性のある・扱いやすい",      etymology:"duct（導く）+ ile",                      root:"-duc-", level:3},

  // ── -fer-（運ぶ・もたらす） ──────────────────
  {word:"transfer",     meaning:"移動させる・転送する",        etymology:"trans（超えて）+ fer（運ぶ）",           root:"-fer-", level:0},
  {word:"prefer",       meaning:"より好む",                  etymology:"pre（前に）+ fer（運ぶ）",               root:"-fer-", level:0},
  {word:"suffer",       meaning:"苦しむ・受ける",             etymology:"sub（下に）+ fer（運ぶ）→ 下で受ける",   root:"-fer-", level:0},
  {word:"offer",        meaning:"申し出る",                  etymology:"ob（〜へ）+ fer（運ぶ）",                root:"-fer-", level:0},
  {word:"differ",       meaning:"異なる",                   etymology:"di（離れて）+ fer（運ぶ）",              root:"-fer-", level:0},
  {word:"refer",        meaning:"参照する・言及する",          etymology:"re（再び）+ fer（運ぶ）→ 送り返す",      root:"-fer-", level:1},
  {word:"confer",       meaning:"協議する・授与する",          etymology:"con（共に）+ fer（運ぶ）",               root:"-fer-", level:2},
  {word:"infer",        meaning:"推論する・推測する",          etymology:"in（中に）+ fer（運ぶ）",                root:"-fer-", level:2},
  {word:"proliferate",  meaning:"急増する・拡散する",          etymology:"proli（多く）+ fer（運ぶ）+ ate",        root:"-fer-", level:2},
  {word:"defer",        meaning:"延期する・服従する",          etymology:"de（下に）+ fer（運ぶ）",                root:"-fer-", level:2},

  // ── -grad-/-gress-（歩く・進む） ─────────────
  {word:"grade",        meaning:"等級・成績",                etymology:"grad（歩く）+ e",                        root:"-grad-", level:0},
  {word:"graduate",     meaning:"卒業する",                  etymology:"grad（歩く）+ uate → 段階を上る",        root:"-grad-", level:0},
  {word:"progress",     meaning:"進歩・前進する",             etymology:"pro（前に）+ gress（歩く）",             root:"-grad-", level:0},
  {word:"aggressive",   meaning:"攻撃的な",                  etymology:"ag（〜へ）+ gress（歩く）+ ive",         root:"-grad-", level:1},
  {word:"digress",      meaning:"脱線する",                  etymology:"di（離れて）+ gress（歩く）",            root:"-grad-", level:2},
  {word:"regress",      meaning:"後退する・退行する",          etymology:"re（後ろに）+ gress（歩く）",            root:"-grad-", level:2},
  {word:"transgress",   meaning:"違反する・逸脱する",          etymology:"trans（超えて）+ gress（歩く）",         root:"-grad-", level:3},
  {word:"congress",     meaning:"議会・大会",                 etymology:"con（共に）+ gress（歩く）",             root:"-grad-", level:1},
  {word:"degrade",      meaning:"品位を下げる・劣化させる",    etymology:"de（下に）+ grad（歩く）+ e",            root:"-grad-", level:2},
  {word:"upgrade",      meaning:"改善する・格上げする",        etymology:"up（上に）+ grade（等級）",              root:"-grad-", level:1},

  // ── -graph-/-gram-（書く・記録する） ─────────
  {word:"photograph",   meaning:"写真",                      etymology:"photo（光）+ graph（書く）",              root:"-graph-", level:0},
  {word:"autograph",    meaning:"サイン・自筆署名",           etymology:"auto（自己）+ graph（書く）",            root:"-graph-", level:1},
  {word:"paragraph",    meaning:"段落",                      etymology:"para（横に）+ graph（書く）",            root:"-graph-", level:0},
  {word:"biography",    meaning:"伝記",                      etymology:"bio（生命）+ graph（書く）+ y",          root:"-graph-", level:1},
  {word:"geography",    meaning:"地理学",                    etymology:"geo（大地）+ graph（書く）+ y",          root:"-graph-", level:1},
  {word:"telegram",     meaning:"電報",                      etymology:"tele（遠く）+ gram（書いた物）",          root:"-graph-", level:1},
  {word:"diagram",      meaning:"図表",                      etymology:"dia（間に）+ gram（書いた物）",          root:"-graph-", level:1},
  {word:"program",      meaning:"プログラム・番組",            etymology:"pro（前に）+ gram（書いた物）",          root:"-graph-", level:0},
  {word:"chronology",   meaning:"年代学・年代順",              etymology:"chrono（時間）+ log（言葉）+ y",         root:"-graph-", level:2},

  // ── -ject-（投げる） ─────────────────────────
  {word:"project",      meaning:"計画・投影する",             etymology:"pro（前に）+ ject（投げる）",            root:"-ject-", level:0},
  {word:"inject",       meaning:"注射する・注入する",          etymology:"in（中に）+ ject（投げる）",             root:"-ject-", level:1},
  {word:"reject",       meaning:"拒否する",                  etymology:"re（元に）+ ject（投げる）",             root:"-ject-", level:0},
  {word:"object",       meaning:"反対する・物体",             etymology:"ob（反対）+ ject（投げる）",             root:"-ject-", level:0},
  {word:"subject",      meaning:"主題・被験者・服従させる",    etymology:"sub（下に）+ ject（投げる）",            root:"-ject-", level:0},
  {word:"eject",        meaning:"排出する",                  etymology:"e（外に）+ ject（投げる）",              root:"-ject-", level:1},
  {word:"dejected",     meaning:"落胆した・意気消沈した",      etymology:"de（下に）+ ject（投げる）+ ed",         root:"-ject-", level:2},
  {word:"trajectory",   meaning:"軌道・弾道",                etymology:"trans（超えて）+ ject（投げる）+ ory",   root:"-ject-", level:2},
  {word:"conjecture",   meaning:"推測・憶測",                 etymology:"con（共に）+ ject（投げる）+ ure",        root:"-ject-", level:3},
  {word:"abject",       meaning:"惨めな・卑屈な",             etymology:"ab（離れて）+ ject（投げる）",           root:"-ject-", level:3},

  // ── -path-（感じる・苦しむ） ─────────────────
  {word:"sympathy",     meaning:"同情・共感",                etymology:"sym（共に）+ pathy（感じる）",            root:"-path-", level:1},
  {word:"empathy",      meaning:"感情移入・共感",             etymology:"em（中に）+ pathy（感じる）",            root:"-path-", level:1},
  {word:"apathy",       meaning:"無関心・無気力",             etymology:"a（否定）+ pathy（感じる）",             root:"-path-", level:2},
  {word:"antipathy",    meaning:"反感・嫌悪",                etymology:"anti（反対）+ pathy（感じる）",          root:"-path-", level:2},
  {word:"pathetic",     meaning:"哀れな・情けない",            etymology:"path（感じる）+ etic",                   root:"-path-", level:1},
  {word:"telepathy",    meaning:"テレパシー",                 etymology:"tele（遠く）+ pathy（感じる）",          root:"-path-", level:2},
  {word:"sociopath",    meaning:"反社会的人格者",              etymology:"socio（社会）+ path（苦しむ）",          root:"-path-", level:2},
  {word:"pathology",    meaning:"病理学",                    etymology:"path（病気）+ logy（学問）",              root:"-path-", level:2},

  // ── -ped-/-pod-（足） ────────────────────────
  {word:"pedestrian",   meaning:"歩行者・平凡な",             etymology:"ped（足）+ estrian",                     root:"-ped-", level:1},
  {word:"expedition",   meaning:"遠征・探検",                 etymology:"ex（外に）+ ped（足）+ ition",           root:"-ped-", level:2},
  {word:"impede",       meaning:"妨げる・障害になる",          etymology:"im（中に）+ ped（足）+ e → 足に絡む",    root:"-ped-", level:2},
  {word:"podium",       meaning:"演台・表彰台",               etymology:"pod（足）+ ium",                         root:"-ped-", level:2},
  {word:"tripod",       meaning:"三脚",                      etymology:"tri（三つ）+ pod（足）",                  root:"-ped-", level:1},
  {word:"antipode",     meaning:"対蹠点・正反対のもの",        etymology:"anti（反対）+ pod（足）",                root:"-ped-", level:3},
  {word:"expedite",     meaning:"迅速に処理する",              etymology:"ex（外に）+ ped（足）+ ite",             root:"-ped-", level:3},

  // ── -phil-（愛する） ─────────────────────────
  {word:"philharmonic", meaning:"フィルハーモニー（音楽愛好）",  etymology:"phil（愛する）+ harmonic（和音）",        root:"-phil-", level:2},
  {word:"bibliophile",  meaning:"愛書家",                    etymology:"biblio（本）+ phil（愛する）+ e",         root:"-phil-", level:3},
  {word:"francophile",  meaning:"フランス文化愛好者",          etymology:"franco（フランス）+ phil（愛する）+ e",   root:"-phil-", level:3},
  {word:"hemophilia",   meaning:"血友病",                    etymology:"hemo（血）+ phil（愛する）+ ia",          root:"-phil-", level:3},

  // ── -phon-（音・声） ─────────────────────────
  {word:"phone",        meaning:"電話",                      etymology:"phon（音）+ e",                          root:"-phon-", level:0},
  {word:"microphone",   meaning:"マイクロフォン",              etymology:"micro（小さい）+ phone（音）",            root:"-phon-", level:0},
  {word:"symphony",     meaning:"交響曲",                    etymology:"sym（共に）+ phony（音）",                root:"-phon-", level:1},
  {word:"phonics",      meaning:"フォニックス・音声学",        etymology:"phon（音）+ ics",                        root:"-phon-", level:1},
  {word:"cacophony",    meaning:"不協和音・騒音",              etymology:"caco（悪い）+ phony（音）",               root:"-phon-", level:3},
  {word:"euphony",      meaning:"快い音・語呂の良さ",          etymology:"eu（良い）+ phony（音）",                root:"-phon-", level:3},
  {word:"homophone",    meaning:"同音異義語",                 etymology:"homo（同じ）+ phone（音）",              root:"-phon-", level:2},
  {word:"megaphone",    meaning:"メガフォン・拡声器",          etymology:"mega（大きい）+ phone（音）",             root:"-phon-", level:1},

  // ── -jur-/-jus-（法・正義） ──────────────────
  {word:"just",         meaning:"正しい・ちょうど",           etymology:"jus（正義）+ t",                         root:"-jur-", level:0},
  {word:"justice",      meaning:"正義・司法",                etymology:"jus（正義）+ tice",                      root:"-jur-", level:0},
  {word:"justify",      meaning:"正当化する",                etymology:"just（正しい）+ ify",                    root:"-jur-", level:1},
  {word:"jury",         meaning:"陪審員",                    etymology:"jur（誓う）+ y",                         root:"-jur-", level:1},
  {word:"injure",       meaning:"傷つける",                  etymology:"in（否定）+ jur（正義）+ e → 不正を加える",root:"-jur-", level:1},
  {word:"perjury",      meaning:"偽証罪",                    etymology:"per（完全に）+ jur（誓う）+ y",           root:"-jur-", level:2},
  {word:"jurisdiction", meaning:"管轄・司法権",               etymology:"juris（法）+ dict（言う）+ ion",          root:"-jur-", level:2},
  {word:"jurisprudence",meaning:"法学・法理学",               etymology:"juris（法）+ prudence（分別）",           root:"-jur-", level:3},
  {word:"adjudicate",   meaning:"裁定する",                  etymology:"ad（〜へ）+ judic（法）+ ate",            root:"-jur-", level:3},

  // ── -labor-（働く・労働） ────────────────────
  {word:"labor",        meaning:"労働・努力する",             etymology:"labor（働く）",                          root:"-labor-", level:0},
  {word:"elaborate",    meaning:"詳しく説明する・入念な",      etymology:"e（外に）+ labor（働く）+ ate",           root:"-labor-", level:2},
  {word:"collaborate",  meaning:"共同作業する",               etymology:"col（共に）+ labor（働く）+ ate",         root:"-labor-", level:1},
  {word:"laboratory",   meaning:"実験室",                    etymology:"labor（働く）+ atory",                   root:"-labor-", level:1},
  {word:"belabor",      meaning:"繰り返し強調する",            etymology:"be（強意）+ labor（働く）",               root:"-labor-", level:3},
  {word:"laborious",    meaning:"骨の折れる・勤勉な",          etymology:"labor（働く）+ ious",                    root:"-labor-", level:2},

  // ── -prim-/-princ-（最初・主な） ─────────────
  {word:"primary",      meaning:"主な・最初の",               etymology:"prim（最初）+ ary",                      root:"-prim-", level:0},
  {word:"prime",        meaning:"最良の・素数",               etymology:"prim（最初）+ e",                        root:"-prim-", level:1},
  {word:"primitive",    meaning:"原始的な",                  etymology:"prim（最初）+ itive",                    root:"-prim-", level:1},
  {word:"principle",    meaning:"原則・主義",                 etymology:"princ（最初）+ iple",                    root:"-prim-", level:1},
  {word:"principal",    meaning:"主な・校長",                 etymology:"princ（最初）+ ipal",                    root:"-prim-", level:1},
  {word:"premier",      meaning:"首相・最初の",               etymology:"prem（最初）+ ier",                      root:"-prim-", level:2},
  {word:"primate",      meaning:"霊長類・大司教",             etymology:"prim（最初）+ ate",                      root:"-prim-", level:2},
  {word:"primordial",   meaning:"根源的な・原始の",            etymology:"prim（最初）+ ord（秩序）+ ial",         root:"-prim-", level:3},

  // ── -put-（考える・計算する） ────────────────
  {word:"compute",      meaning:"計算する",                  etymology:"com（共に）+ put（考える）+ e",           root:"-put-", level:0},
  {word:"dispute",      meaning:"論争する・争う",             etymology:"dis（離れて）+ put（考える）+ e",         root:"-put-", level:1},
  {word:"repute",       meaning:"評判・名声",                 etymology:"re（再び）+ put（考える）+ e",           root:"-put-", level:2},
  {word:"reputation",   meaning:"評判",                      etymology:"re（再び）+ put（考える）+ ation",        root:"-put-", level:1},
  {word:"impute",       meaning:"〜のせいにする・帰属させる",  etymology:"im（中に）+ put（考える）+ e",           root:"-put-", level:3},
  {word:"depute",       meaning:"代理を立てる",               etymology:"de（下に）+ put（考える）+ e",           root:"-put-", level:3},
  {word:"indisputable", meaning:"議論の余地のない",           etymology:"in（否定）+ dis + put（考える）+ able",  root:"-put-", level:3},

  // ── -cur-/-curs-（走る・流れる） ─────────────
  {word:"current",      meaning:"現在の・流れ",               etymology:"cur（走る）+ rent",                      root:"-cur-", level:0},
  {word:"occur",        meaning:"起こる",                    etymology:"oc（〜へ）+ cur（走る）",                root:"-cur-", level:0},
  {word:"incur",        meaning:"被る・招く",                 etymology:"in（中に）+ cur（走る）",                root:"-cur-", level:2},
  {word:"recur",        meaning:"再発する・繰り返す",          etymology:"re（再び）+ cur（走る）",                root:"-cur-", level:2},
  {word:"excursion",    meaning:"遠足・小旅行",               etymology:"ex（外に）+ curs（走る）+ ion",          root:"-cur-", level:2},
  {word:"concur",       meaning:"同意する・同時に起きる",      etymology:"con（共に）+ cur（走る）",               root:"-cur-", level:3},
  {word:"cursory",      meaning:"急いでした・大まかな",         etymology:"curs（走る）+ ory",                      root:"-cur-", level:3},
  {word:"precursor",    meaning:"先駆者・前兆",               etymology:"pre（前に）+ curs（走る）+ or",          root:"-cur-", level:2},
  {word:"discursive",   meaning:"散漫な・広範囲にわたる",      etymology:"dis（離れて）+ curs（走る）+ ive",       root:"-cur-", level:3},

  // ── -here-/-hes-（くっつく・固執する） ────────
  {word:"adhere",       meaning:"付着する・固執する",          etymology:"ad（〜へ）+ here（くっつく）",           root:"-here-", level:2},
  {word:"cohere",       meaning:"密着する・一貫している",       etymology:"co（共に）+ here（くっつく）",           root:"-here-", level:2},
  {word:"inherent",     meaning:"固有の・生まれつきの",         etymology:"in（中に）+ her（くっつく）+ ent",       root:"-here-", level:2},
  {word:"hesitate",     meaning:"ためらう",                   etymology:"hes（くっつく）+ itate → 立ち止まる",    root:"-here-", level:1},
  {word:"coherent",     meaning:"論理的な・一貫した",          etymology:"co（共に）+ her（くっつく）+ ent",       root:"-here-", level:2},
  {word:"incoherent",   meaning:"支離滅裂な",                 etymology:"in（否定）+ coherent（一貫した）",        root:"-here-", level:2},

  // ── -grat-（喜ばせる・感謝の） ─────────────
  {word:"grateful",     meaning:"感謝している",               etymology:"grat（喜ばせる）+ ful",                  root:"-grat-", level:0},
  {word:"congratulate", meaning:"祝う・祝辞を述べる",          etymology:"con（共に）+ grat（喜ばせる）+ ulate",    root:"-grat-", level:1},
  {word:"gratitude",    meaning:"感謝の気持ち",               etymology:"grat（喜ばせる）+ itude",                root:"-grat-", level:1},
  {word:"gratify",      meaning:"喜ばせる・満足させる",         etymology:"grat（喜ばせる）+ ify",                  root:"-grat-", level:2},
  {word:"ingrate",      meaning:"恩知らずな人",               etymology:"in（否定）+ grat（感謝）+ e",            root:"-grat-", level:3},
  {word:"gratis",       meaning:"無料で",                    etymology:"grat（喜ばせる）+ is",                   root:"-grat-", level:2},
  {word:"gratuitous",   meaning:"無償の・不必要な",            etymology:"gratu（感謝）+ itious",                  root:"-grat-", level:3},
  {word:"ingratitude",  meaning:"恩知らず",                  etymology:"in（否定）+ gratitude（感謝）",           root:"-grat-", level:2},

  // ── -anthropo-/-anthrop-（人間） ─────────────
  {word:"anthropology", meaning:"人類学",                    etymology:"anthropo（人間）+ logy（学問）",          root:"-anthropo-", level:2},
  {word:"misanthrope",  meaning:"人間嫌い",                   etymology:"mis（嫌い）+ anthrope（人間）",           root:"-anthropo-", level:3},
  {word:"philanthropy", meaning:"慈善活動",                  etymology:"phil（愛する）+ anthropy（人間）",        root:"-anthropo-", level:2},
  {word:"anthropocentric",meaning:"人間中心主義の",           etymology:"anthropo（人間）+ centric（中心）",      root:"-anthropo-", level:3},

  // ── -geo-（大地・地球） ──────────────────────
  {word:"geology",      meaning:"地質学",                    etymology:"geo（大地）+ logy（学問）",               root:"-geo-", level:1},
  {word:"geometry",     meaning:"幾何学",                    etymology:"geo（大地）+ metry（測る）",              root:"-geo-", level:1},
  {word:"geopolitics",  meaning:"地政学",                    etymology:"geo（大地）+ politics（政治）",           root:"-geo-", level:2},
  {word:"geothermal",   meaning:"地熱の",                    etymology:"geo（大地）+ thermal（熱の）",            root:"-geo-", level:2},
  {word:"geocentric",   meaning:"地球中心の",                etymology:"geo（大地）+ centric（中心）",            root:"-geo-", level:3},
  {word:"apogee",       meaning:"遠地点・絶頂",               etymology:"apo（離れて）+ gee（大地）",              root:"-geo-", level:3},
  {word:"geologist",    meaning:"地質学者",                  etymology:"geo（大地）+ log（学問）+ ist",           root:"-geo-", level:2},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
