/**
 * data-prefix-7.js — 新接頭語データ（約360語）
 * ante-, arch-, bene-, cata-, circum-, di-/dia-, dys-,
 * ecto-, endo-, epi-, eu-, extra-, hetero-, homo-,
 * hyper-, hypo-, infra-, intra-, iso-, mega-, neo-,
 * ortho-, paleo-, para-, peri-, pro-, proto-,
 * pseudo-, retro-, semi-, syn-/sym-, ultra-, uni-
 */
(function(){
  var d = [

  // ── ante-（前に・先行する） ───────────────────
  {word:"antecedent",   meaning:"先行する・先行詞",           etymology:"ante（前に）+ cedent（行く）",            prefix:"ante-", level:2},
  {word:"anticipate",   meaning:"予想する・期待する",          etymology:"ante（前に）+ cipate（取る）",            prefix:"ante-", level:1},
  {word:"antique",      meaning:"骨董品・古代の",             etymology:"ante（前に）+ ique → 前時代の",          prefix:"ante-", level:1},
  {word:"antiquity",    meaning:"古代・古代遺物",              etymology:"ante（前に）+ iquity",                   prefix:"ante-", level:2},
  {word:"anterior",     meaning:"前部の・以前の",              etymology:"ante（前に）+ rior",                     prefix:"ante-", level:2},
  {word:"antedate",     meaning:"前の日付をつける・先立つ",    etymology:"ante（前に）+ date（日付）",             prefix:"ante-", level:3},
  {word:"antechamber",  meaning:"控え室・前室",               etymology:"ante（前に）+ chamber（部屋）",          prefix:"ante-", level:3},
  {word:"antebellum",   meaning:"（南北）戦争前の",            etymology:"ante（前に）+ bellum（戦争）",           prefix:"ante-", level:3},
  {word:"antenatal",    meaning:"出生前の",                   etymology:"ante（前に）+ natal（誕生）",            prefix:"ante-", level:2},

  // ── arch-（最高の・統治する） ─────────────────
  {word:"architect",    meaning:"建築家",                    etymology:"arch（最高）+ tect（作る）",             prefix:"arch-", level:1},
  {word:"archive",      meaning:"記録保管所・アーカイブ",      etymology:"arch（古い）+ ive",                      prefix:"arch-", level:2},
  {word:"archaic",      meaning:"古風な・時代遅れの",          etymology:"arch（古い）+ aic",                      prefix:"arch-", level:2},
  {word:"monarch",      meaning:"君主・国王",                 etymology:"mono（一つ）+ arch（統治）",             prefix:"arch-", level:2},
  {word:"anarchy",      meaning:"無政府状態",                 etymology:"an（否定）+ arch（統治）+ y",            prefix:"arch-", level:2},
  {word:"hierarchy",    meaning:"階層制度",                   etymology:"hiero（神聖な）+ arch（統治）+ y",       prefix:"arch-", level:2},
  {word:"patriarch",    meaning:"族長・家長",                 etymology:"patri（父）+ arch（統治）",              prefix:"arch-", level:2},
  {word:"oligarchy",    meaning:"寡頭政治",                  etymology:"oligo（少ない）+ arch（統治）+ y",        prefix:"arch-", level:3},

  // ── bene-（良い・よく） ──────────────────────
  {word:"benefit",      meaning:"利益・恩恵",                etymology:"bene（良い）+ fit（作る）",              prefix:"bene-", level:0},
  {word:"beneficial",   meaning:"有益な・役に立つ",           etymology:"bene（良い）+ ficial（作る）",           prefix:"bene-", level:1},
  {word:"benefactor",   meaning:"恩人・後援者",               etymology:"bene（良い）+ factor（作る人）",         prefix:"bene-", level:2},
  {word:"benevolent",   meaning:"慈悲深い・好意的な",          etymology:"bene（良い）+ volent（望む）",           prefix:"bene-", level:2},
  {word:"benign",       meaning:"温和な・良性の",              etymology:"bene（良い）+ gn（生まれた）",           prefix:"bene-", level:2},
  {word:"benediction",  meaning:"祝福・祈祷",                etymology:"bene（良い）+ dict（言う）+ ion",        prefix:"bene-", level:3},
  {word:"beneficiary",  meaning:"受益者",                    etymology:"bene（良い）+ ficiary（作る）",          prefix:"bene-", level:2},

  // ── cata-（下に・完全に・反対） ─────────────
  {word:"catalog",      meaning:"目録・リスト",               etymology:"cata（下に）+ log（言葉）→ 列挙",        prefix:"cata-", level:0},
  {word:"catastrophe",  meaning:"大災害・壊滅的な出来事",      etymology:"cata（下に）+ strophe（転換）",          prefix:"cata-", level:1},
  {word:"catalyst",     meaning:"触媒・きっかけ",             etymology:"cata（下に）+ lyst（解く）",             prefix:"cata-", level:2},
  {word:"category",     meaning:"カテゴリー・種類",            etymology:"cata（下に）+ gory（告げる）",           prefix:"cata-", level:1},
  {word:"catapult",     meaning:"投石機・急速に進む",           etymology:"cata（下に）+ pult（投げる）",           prefix:"cata-", level:2},
  {word:"cataclysm",    meaning:"大変動・大洪水",              etymology:"cata（下に）+ clysm（洗う）",            prefix:"cata-", level:3},
  {word:"catharsis",    meaning:"浄化・カタルシス",            etymology:"cata（完全に）+ harsis（清める）",        prefix:"cata-", level:3},
  {word:"catatonic",    meaning:"緊張病の",                  etymology:"cata（下に）+ ton（緊張）+ ic",          prefix:"cata-", level:3},

  // ── circum-（周囲・周りに） ───────────────────
  {word:"circumference",meaning:"円周・周囲",                etymology:"circum（周囲）+ ference（運ぶ）",         prefix:"circum-", level:2},
  {word:"circumstance", meaning:"状況・環境",                etymology:"circum（周囲）+ stance（立つ）",         prefix:"circum-", level:1},
  {word:"circumspect",  meaning:"用心深い・慎重な",            etymology:"circum（周囲）+ spect（見る）",          prefix:"circum-", level:3},
  {word:"circumscribe", meaning:"制限する・周囲を描く",        etymology:"circum（周囲）+ scribe（書く）",         prefix:"circum-", level:3},
  {word:"circumvent",   meaning:"回避する・迂回する",          etymology:"circum（周囲）+ vent（来る）",           prefix:"circum-", level:3},
  {word:"circumlocution",meaning:"遠回しな言い方",            etymology:"circum（周囲）+ locut（話す）+ ion",     prefix:"circum-", level:3},
  {word:"circumnavigate",meaning:"世界一周航行する",           etymology:"circum（周囲）+ navigate（航行する）",   prefix:"circum-", level:2},

  // ── di-/dia-（二つ・横切って・通して） ─────────
  {word:"dialogue",     meaning:"対話",                      etymology:"dia（間に）+ logue（言葉）",              prefix:"dia-", level:0},
  {word:"diameter",     meaning:"直径",                      etymology:"dia（横切って）+ meter（測る）",          prefix:"dia-", level:1},
  {word:"diagnose",     meaning:"診断する",                  etymology:"dia（横切って）+ gnose（知る）",          prefix:"dia-", level:1},
  {word:"diagram",      meaning:"図表",                      etymology:"dia（間に）+ gram（書く）",              prefix:"dia-", level:1},
  {word:"diverse",      meaning:"多様な・様々な",              etymology:"di（離れて）+ verse（向く）",            prefix:"di-", level:1},
  {word:"divert",       meaning:"転換する・楽しませる",        etymology:"di（離れて）+ vert（向く）",             prefix:"di-", level:2},
  {word:"divide",       meaning:"分ける・割る",               etymology:"di（二つ）+ vide（分ける）",             prefix:"di-", level:0},
  {word:"diverge",      meaning:"分岐する・異なる",            etymology:"di（離れて）+ verge（向く）",            prefix:"di-", level:2},
  {word:"diagonal",     meaning:"対角線の",                  etymology:"dia（横切って）+ gon（角）+ al",          prefix:"dia-", level:1},
  {word:"dilemma",      meaning:"ジレンマ・二択",             etymology:"di（二つ）+ lemma（命題）",              prefix:"di-", level:1},

  // ── dys-（不良・困難・異常） ─────────────────
  {word:"dysfunction",  meaning:"機能不全・障害",              etymology:"dys（不良）+ function（機能）",           prefix:"dys-", level:2},
  {word:"dyslexia",     meaning:"ディスレクシア・難読症",       etymology:"dys（困難）+ lexia（読む）",             prefix:"dys-", level:2},
  {word:"dysphoria",    meaning:"不快感・気分障害",             etymology:"dys（不良）+ phoria（感じる）",           prefix:"dys-", level:3},
  {word:"dystopia",     meaning:"ディストピア・暗黒世界",        etymology:"dys（不良）+ topia（場所）",             prefix:"dys-", level:2},
  {word:"dystrophy",    meaning:"ジストロフィー・栄養不良",      etymology:"dys（不良）+ trophy（栄養）",            prefix:"dys-", level:3},
  {word:"dysentery",    meaning:"赤痢",                      etymology:"dys（不良）+ enter（腸）+ y",            prefix:"dys-", level:3},

  // ── ecto-（外に） ────────────────────────────
  {word:"ectoplasm",    meaning:"外質・霊的物質",              etymology:"ecto（外に）+ plasm（形成物）",          prefix:"ecto-", level:3},
  {word:"ectopic",      meaning:"異所性の・子宮外の",          etymology:"ecto（外に）+ top（場所）+ ic",          prefix:"ecto-", level:3},
  {word:"ectoparasite", meaning:"外部寄生虫",                 etymology:"ecto（外に）+ parasite（寄生虫）",       prefix:"ecto-", level:3},

  // ── endo-（内に） ────────────────────────────
  {word:"endorse",      meaning:"支持する・裏書きする",         etymology:"en（中に）+ dors（背中）+ e → 裏に書く",  prefix:"endo-", level:2},
  {word:"endocrine",    meaning:"内分泌の",                   etymology:"endo（内に）+ crine（分泌）",            prefix:"endo-", level:3},
  {word:"endogenous",   meaning:"内生の・内因性の",            etymology:"endo（内に）+ genous（生まれる）",       prefix:"endo-", level:3},
  {word:"endoscope",    meaning:"内視鏡",                    etymology:"endo（内に）+ scope（見る）",            prefix:"endo-", level:2},
  {word:"endemic",      meaning:"特定地域に固有の",            etymology:"en（中に）+ demic（民衆）",              prefix:"endo-", level:2},

  // ── epi-（上に・後に） ───────────────────────
  {word:"epidemic",     meaning:"流行病・急激な広がり",         etymology:"epi（上に）+ demic（民衆）",             prefix:"epi-", level:1},
  {word:"epilogue",     meaning:"後記・エピローグ",             etymology:"epi（後に）+ logue（言葉）",             prefix:"epi-", level:2},
  {word:"episode",      meaning:"挿話・エピソード",            etymology:"epi（上に）+ sode（道）",                prefix:"epi-", level:1},
  {word:"epitome",      meaning:"典型・縮図",                  etymology:"epi（上に）+ tome（切る）→ 要約",        prefix:"epi-", level:2},
  {word:"epigram",      meaning:"警句・格言",                  etymology:"epi（上に）+ gram（書く）",              prefix:"epi-", level:3},
  {word:"epiphany",     meaning:"悟り・公現",                  etymology:"epi（上に）+ phany（現れる）",           prefix:"epi-", level:3},
  {word:"epitaph",      meaning:"墓碑銘",                     etymology:"epi（上に）+ taph（墓）",                prefix:"epi-", level:3},
  {word:"epoch",        meaning:"時代・新紀元",                etymology:"epi（上に）+ och（保持する）",           prefix:"epi-", level:2},

  // ── eu-（良い・正常） ────────────────────────
  {word:"euphoria",     meaning:"幸福感・陶酔感",              etymology:"eu（良い）+ phoria（感じる）",            prefix:"eu-", level:2},
  {word:"euthanasia",   meaning:"安楽死",                     etymology:"eu（良い）+ thanatos（死）",             prefix:"eu-", level:2},
  {word:"euphemism",    meaning:"婉曲表現",                   etymology:"eu（良い）+ phem（言う）+ ism",          prefix:"eu-", level:2},
  {word:"eulogy",       meaning:"賛辞・追悼演説",              etymology:"eu（良い）+ logy（言葉）",               prefix:"eu-", level:3},
  {word:"euphony",      meaning:"快い音・語呂の良さ",          etymology:"eu（良い）+ phony（音）",                prefix:"eu-", level:3},
  {word:"eugenics",     meaning:"優生学",                     etymology:"eu（良い）+ genics（生まれる）",          prefix:"eu-", level:3},

  // ── extra-（〜の外に・超えて） ───────────────
  {word:"extraordinary",meaning:"並外れた・特別の",            etymology:"extra（外に）+ ordinary（普通の）",      prefix:"extra-", level:1},
  {word:"extravagant",  meaning:"ぜいたくな・法外な",           etymology:"extra（外に）+ vagant（さまよう）",       prefix:"extra-", level:2},
  {word:"extraterrestrial",meaning:"地球外の・宇宙人",         etymology:"extra（外に）+ terrestrial（地球の）",   prefix:"extra-", level:2},
  {word:"extraneous",   meaning:"無関係の・外来の",            etymology:"extra（外に）+ neous",                   prefix:"extra-", level:3},
  {word:"extrovert",    meaning:"外向的な人",                  etymology:"extra（外に）+ vert（向く）",            prefix:"extra-", level:2},

  // ── hetero-（異なる・異質の） ─────────────────
  {word:"heterogeneous",meaning:"異質な・多様な",              etymology:"hetero（異なる）+ geneous（生まれた）",  prefix:"hetero-", level:3},
  {word:"heterosexual", meaning:"異性愛の",                   etymology:"hetero（異なる）+ sexual（性的な）",     prefix:"hetero-", level:2},
  {word:"heterodox",    meaning:"異端の・正統でない",           etymology:"hetero（異なる）+ dox（考え）",          prefix:"hetero-", level:3},
  {word:"heteronym",    meaning:"同形異義語",                  etymology:"hetero（異なる）+ nym（名前）",          prefix:"hetero-", level:3},

  // ── homo-（同じ・人間） ──────────────────────
  {word:"homogeneous",  meaning:"均質な・同種の",              etymology:"homo（同じ）+ geneous（生まれた）",      prefix:"homo-", level:2},
  {word:"homophone",    meaning:"同音異義語",                  etymology:"homo（同じ）+ phone（音）",              prefix:"homo-", level:2},
  {word:"homonym",      meaning:"同音同形異義語",              etymology:"homo（同じ）+ nym（名前）",              prefix:"homo-", level:2},
  {word:"homologous",   meaning:"相同の・対応する",             etymology:"homo（同じ）+ logos（理論）+ ous",       prefix:"homo-", level:3},

  // ── hyper-（超える・過度な） ─────────────────
  {word:"hyperactive",  meaning:"過活動の・過剰活動",           etymology:"hyper（過度な）+ active（活動的な）",    prefix:"hyper-", level:1},
  {word:"hyperbole",    meaning:"誇張表現",                   etymology:"hyper（超える）+ bole（投げる）",        prefix:"hyper-", level:2},
  {word:"hypertension", meaning:"高血圧",                     etymology:"hyper（過度な）+ tension（緊張）",       prefix:"hyper-", level:2},
  {word:"hyperlink",    meaning:"ハイパーリンク",               etymology:"hyper（超えた）+ link（つながり）",      prefix:"hyper-", level:1},
  {word:"hypercritical",meaning:"過剰に批判的な",               etymology:"hyper（過度な）+ critical（批判的な）",  prefix:"hyper-", level:3},

  // ── hypo-（下に・不足） ──────────────────────
  {word:"hypothesis",   meaning:"仮説",                       etymology:"hypo（下に）+ thesis（置く）",           prefix:"hypo-", level:1},
  {word:"hypocrisy",    meaning:"偽善",                       etymology:"hypo（下に）+ crisy（判断）",            prefix:"hypo-", level:2},
  {word:"hypotension",  meaning:"低血圧",                     etymology:"hypo（不足）+ tension（緊張）",          prefix:"hypo-", level:2},
  {word:"hypothermia",  meaning:"低体温症",                   etymology:"hypo（不足）+ thermia（熱）",            prefix:"hypo-", level:3},
  {word:"hypocrite",    meaning:"偽善者",                     etymology:"hypo（下に）+ crite（判断する人）",       prefix:"hypo-", level:2},

  // ── infra-（〜の下に・基礎） ─────────────────
  {word:"infrastructure",meaning:"インフラ・基盤",              etymology:"infra（下に）+ structure（構造）",       prefix:"infra-", level:2},
  {word:"infrared",     meaning:"赤外線の",                   etymology:"infra（下に）+ red（赤）",               prefix:"infra-", level:2},
  {word:"infrasound",   meaning:"超低周波音",                 etymology:"infra（下に）+ sound（音）",             prefix:"infra-", level:3},

  // ── iso-（等しい・同一の） ────────────────────
  {word:"isolate",      meaning:"孤立させる",                  etymology:"iso（等しく）→ 島のように一人にする",     prefix:"iso-", level:1},
  {word:"isometric",    meaning:"等尺性の・等長の",            etymology:"iso（等しい）+ metric（測る）",          prefix:"iso-", level:3},
  {word:"isotope",      meaning:"同位体",                     etymology:"iso（等しい）+ tope（場所）",            prefix:"iso-", level:3},

  // ── mega-（大きい・百万） ──────────────────
  {word:"megaphone",    meaning:"拡声器",                     etymology:"mega（大きい）+ phone（音）",             prefix:"mega-", level:1},
  {word:"megalopolis",  meaning:"巨大都市",                   etymology:"mega（大きい）+ polis（都市）",           prefix:"mega-", level:3},
  {word:"megabyte",     meaning:"メガバイト",                  etymology:"mega（百万）+ byte（バイト）",            prefix:"mega-", level:1},
  {word:"megalomaniac", meaning:"誇大妄想狂の",               etymology:"mega（大きい）+ mania（狂気）+ c",        prefix:"mega-", level:3},

  // ── neo-（新しい） ────────────────────────────
  {word:"neologism",    meaning:"新語・造語",                 etymology:"neo（新しい）+ log（言葉）+ ism",         prefix:"neo-", level:3},
  {word:"neoclassical", meaning:"新古典主義の",               etymology:"neo（新しい）+ classical（古典的な）",    prefix:"neo-", level:2},
  {word:"neonatal",     meaning:"新生児期の",                 etymology:"neo（新しい）+ natal（誕生）",           prefix:"neo-", level:2},
  {word:"neolithic",    meaning:"新石器時代の",               etymology:"neo（新しい）+ lithic（石）",            prefix:"neo-", level:2},

  // ── ortho-（正しい・まっすぐの） ──────────────
  {word:"orthodox",     meaning:"正統の・保守的な",            etymology:"ortho（正しい）+ dox（考え）",           prefix:"ortho-", level:2},
  {word:"orthography",  meaning:"正書法・正字法",              etymology:"ortho（正しい）+ graphy（書く）",        prefix:"ortho-", level:3},
  {word:"orthopedic",   meaning:"整形外科の",                 etymology:"ortho（まっすぐ）+ pedic（足）",         prefix:"ortho-", level:2},
  {word:"orthogonal",   meaning:"直交する",                   etymology:"ortho（まっすぐ）+ gon（角）+ al",       prefix:"ortho-", level:3},

  // ── paleo-（古い・原始の） ───────────────────
  {word:"paleontology", meaning:"古生物学",                   etymology:"paleo（古い）+ onto（存在）+ logy",      prefix:"paleo-", level:3},
  {word:"paleolithic",  meaning:"旧石器時代の",               etymology:"paleo（古い）+ lithic（石）",            prefix:"paleo-", level:2},
  {word:"paleogeography",meaning:"古地理学",                  etymology:"paleo（古い）+ geography（地理学）",     prefix:"paleo-", level:3},

  // ── para-（横に・超えて・類似） ─────────────
  {word:"parallel",     meaning:"平行の・類似した",            etymology:"para（横に）+ allel（各々）",            prefix:"para-", level:1},
  {word:"paragraph",    meaning:"段落",                       etymology:"para（横に）+ graph（書く）",            prefix:"para-", level:0},
  {word:"paradox",      meaning:"逆説・矛盾",                  etymology:"para（超えて）+ dox（考え）",            prefix:"para-", level:2},
  {word:"parasite",     meaning:"寄生虫・居候",                etymology:"para（横に）+ site（食べる）",           prefix:"para-", level:2},
  {word:"paranoid",     meaning:"妄想性の",                   etymology:"para（超えて）+ noid（精神）",           prefix:"para-", level:2},
  {word:"paramedic",    meaning:"救急医療士",                  etymology:"para（横に）+ medic（医療の）",          prefix:"para-", level:1},
  {word:"paradigm",     meaning:"範例・パラダイム",             etymology:"para（横に）+ digm（示す）",             prefix:"para-", level:2},
  {word:"paraphrase",   meaning:"言い換える",                  etymology:"para（横に）+ phrase（表現）",           prefix:"para-", level:2},

  // ── peri-（周囲の） ──────────────────────────
  {word:"perimeter",    meaning:"周囲・外周",                  etymology:"peri（周囲）+ meter（測る）",            prefix:"peri-", level:2},
  {word:"peripheral",   meaning:"周辺の・末梢の",               etymology:"peri（周囲）+ pherein（運ぶ）+ al",     prefix:"peri-", level:2},
  {word:"peristalsis",  meaning:"蠕動運動",                   etymology:"peri（周囲）+ stalsis（締める）",        prefix:"peri-", level:3},
  {word:"periscope",    meaning:"潜望鏡",                     etymology:"peri（周囲）+ scope（見る）",            prefix:"peri-", level:2},

  // ── proto-（最初の・原始の） ─────────────────
  {word:"prototype",    meaning:"原型・試作品",                etymology:"proto（最初）+ type（型）",              prefix:"proto-", level:2},
  {word:"protocol",     meaning:"議定書・プロトコル",           etymology:"proto（最初）+ col（膠）→ 最初に貼る紙",  prefix:"proto-", level:2},
  {word:"proton",       meaning:"陽子",                       etymology:"proto（最初）+ on（素粒子）",            prefix:"proto-", level:2},
  {word:"protagonist",  meaning:"主人公・主役",                etymology:"proto（最初）+ agon（争い）+ ist",       prefix:"proto-", level:2},

  // ── pseudo-（偽の・見かけの） ────────────────
  {word:"pseudonym",    meaning:"ペンネーム",                  etymology:"pseudo（偽）+ nym（名前）",              prefix:"pseudo-", level:2},
  {word:"pseudoscience",meaning:"疑似科学",                   etymology:"pseudo（偽）+ science（科学）",          prefix:"pseudo-", level:2},
  {word:"pseudointellectual",meaning:"見せかけの知識人",       etymology:"pseudo（偽）+ intellectual（知識人）",   prefix:"pseudo-", level:3},

  // ── retro-（後ろに・遡って） ─────────────────
  {word:"retrospect",   meaning:"回顧・振り返り",              etymology:"retro（後ろに）+ spect（見る）",         prefix:"retro-", level:2},
  {word:"retroactive",  meaning:"遡及的な・さかのぼる",         etymology:"retro（後ろに）+ active（活動的な）",    prefix:"retro-", level:3},
  {word:"retrogress",   meaning:"退行する・後退する",           etymology:"retro（後ろに）+ gress（歩く）",         prefix:"retro-", level:3},
  {word:"retrofit",     meaning:"改造する・後付けする",          etymology:"retro（後ろに）+ fit（合わせる）",       prefix:"retro-", level:2},
  {word:"retrograde",   meaning:"逆行する・後退的な",           etymology:"retro（後ろに）+ grade（歩く）",         prefix:"retro-", level:3},

  // ── syn-/sym-（共に・同時に） ─────────────────
  {word:"synthesis",    meaning:"総合・合成",                  etymology:"syn（共に）+ thesis（置く）",            prefix:"syn-", level:2},
  {word:"synchronize",  meaning:"同期させる",                  etymology:"syn（共に）+ chrono（時間）+ ize",       prefix:"syn-", level:2},
  {word:"syndrome",     meaning:"症候群",                     etymology:"syn（共に）+ drome（走る）",             prefix:"syn-", level:2},
  {word:"sympathy",     meaning:"同情・共感",                  etymology:"sym（共に）+ pathy（感じる）",            prefix:"sym-", level:1},
  {word:"symphony",     meaning:"交響曲",                     etymology:"sym（共に）+ phony（音）",               prefix:"sym-", level:1},
  {word:"symbiosis",    meaning:"共生",                       etymology:"sym（共に）+ bios（生命）+ is",          prefix:"sym-", level:2},
  {word:"symmetry",     meaning:"対称・均整",                  etymology:"sym（共に）+ metry（測る）",             prefix:"sym-", level:1},
  {word:"synonym",      meaning:"同義語",                     etymology:"syn（同じ）+ onym（名前）",              prefix:"syn-", level:1},
  {word:"syntax",       meaning:"構文・文法規則",               etymology:"syn（共に）+ tax（並べる）",             prefix:"syn-", level:2},
  {word:"synergy",      meaning:"相乗効果",                   etymology:"syn（共に）+ ergy（働く）",              prefix:"syn-", level:2},

  // ── ultra-（超えた・極端な） ─────────────────
  {word:"ultraviolet",  meaning:"紫外線の",                   etymology:"ultra（超えた）+ violet（紫）",          prefix:"ultra-", level:2},
  {word:"ultrasound",   meaning:"超音波",                     etymology:"ultra（超えた）+ sound（音）",           prefix:"ultra-", level:2},
  {word:"ultramarine",  meaning:"鮮やかな青色",               etymology:"ultra（超えた）+ marine（海）",          prefix:"ultra-", level:3},
  {word:"ultraconservative",meaning:"超保守的な",              etymology:"ultra（超えた）+ conservative（保守的）", prefix:"ultra-", level:3},

  // ── uni-（一つ） ─────────────────────────────
  {word:"uniform",      meaning:"制服・均一の",                etymology:"uni（一つ）+ form（形）",                prefix:"uni-", level:0},
  {word:"universe",     meaning:"宇宙・全体",                  etymology:"uni（一つ）+ verse（向く）→ 一つに向く",  prefix:"uni-", level:0},
  {word:"unique",       meaning:"唯一の・独自の",              etymology:"uni（一つ）+ que",                       prefix:"uni-", level:0},
  {word:"union",        meaning:"組合・統一",                  etymology:"uni（一つ）+ on",                        prefix:"uni-", level:0},
  {word:"unanimous",    meaning:"全員一致の",                  etymology:"uni（一つ）+ anim（心）+ ous",           prefix:"uni-", level:2},
  {word:"unicorn",      meaning:"一角獣・ユニコーン",           etymology:"uni（一つ）+ corn（角）",                prefix:"uni-", level:1},
  {word:"unify",        meaning:"統一する",                   etymology:"uni（一つ）+ fy",                        prefix:"uni-", level:1},
  {word:"unilateral",   meaning:"一方的な",                   etymology:"uni（一つ）+ lateral（側）",             prefix:"uni-", level:2},

  // ── a-/an-（否定・なし） ─────────────────────
  {word:"amoral",       meaning:"道徳と無関係の",             etymology:"a（否定）+ moral（道徳的な）",           prefix:"a-", level:2},
  {word:"atypical",     meaning:"典型的でない",               etymology:"a（否定）+ typical（典型的な）",         prefix:"a-", level:2},
  {word:"apolitical",   meaning:"政治と無関係の",             etymology:"a（否定）+ political（政治的な）",       prefix:"a-", level:2},
  {word:"anemia",       meaning:"貧血",                       etymology:"an（否定）+ emia（血）",                 prefix:"a-", level:2},
  {word:"anarchy",      meaning:"無政府状態",                 etymology:"an（否定）+ archy（統治）",             prefix:"a-", level:2},
  {word:"anomaly",      meaning:"異常・例外",                 etymology:"an（否定）+ omaly（規則）",             prefix:"a-", level:2},
  {word:"anonymous",    meaning:"匿名の",                     etymology:"an（否定）+ onymous（名前のある）",       prefix:"a-", level:2},
  {word:"asymmetry",    meaning:"非対称",                     etymology:"a（否定）+ symmetry（対称）",           prefix:"a-", level:2},

  // ── ab-/abs-（離れて・除去） ─────────────────
  {word:"absent",       meaning:"欠席の・不在の",              etymology:"ab（離れて）+ sent（ある）",             prefix:"ab-", level:0},
  {word:"abstract",     meaning:"抽象的な",                   etymology:"abs（離れて）+ tract（引く）",           prefix:"ab-", level:1},
  {word:"absorb",       meaning:"吸収する",                   etymology:"ab（完全に）+ sorb（飲み込む）",         prefix:"ab-", level:1},
  {word:"abuse",        meaning:"乱用する・虐待",              etymology:"ab（誤って）+ use（使う）",              prefix:"ab-", level:1},
  {word:"abolish",      meaning:"廃止する",                   etymology:"ab（離れて）+ olish（育てる）",          prefix:"ab-", level:2},
  {word:"abstain",      meaning:"控える・禁欲する",            etymology:"abs（離れて）+ tain（持つ）",            prefix:"ab-", level:2},
  {word:"absolute",     meaning:"絶対的な",                   etymology:"abs（離れて）+ olute（解く）",           prefix:"ab-", level:1},
  {word:"abrupt",       meaning:"突然の",                     etymology:"ab（離れて）+ rupt（壊す）",             prefix:"ab-", level:2},

  // ── ad-（〜へ・向かって） ─────────────────────
  {word:"adapt",        meaning:"適応する",                   etymology:"ad（〜へ）+ apt（適した）",              prefix:"ad-", level:1},
  {word:"admit",        meaning:"認める・入れる",              etymology:"ad（〜へ）+ mit（送る）",                prefix:"ad-", level:1},
  {word:"advance",      meaning:"前進する・進歩",              etymology:"ad（〜へ）+ vance（前に）",              prefix:"ad-", level:0},
  {word:"advocate",     meaning:"支持する・弁護士",            etymology:"ad（〜へ）+ vocate（呼ぶ）",            prefix:"ad-", level:2},
  {word:"adjacent",     meaning:"隣接した",                   etymology:"ad（〜へ）+ jacent（横たわる）",         prefix:"ad-", level:2},
  {word:"adhere",       meaning:"固執する・付着する",          etymology:"ad（〜へ）+ here（くっつく）",           prefix:"ad-", level:2},
  {word:"adjudicate",   meaning:"裁定する",                   etymology:"ad（〜へ）+ judicate（判断する）",       prefix:"ad-", level:3},
  {word:"admonish",     meaning:"諭す・警告する",              etymology:"ad（〜へ）+ monish（警告する）",         prefix:"ad-", level:3},

  // ── ambi-/amphi-（両方） ──────────────────────
  {word:"ambiguous",    meaning:"曖昧な・多義的な",            etymology:"ambi（両方）+ guous（追い立てる）",      prefix:"ambi-", level:2},
  {word:"ambivalent",   meaning:"相反する感情を持つ",          etymology:"ambi（両方）+ valent（強い）",           prefix:"ambi-", level:3},
  {word:"ambidextrous", meaning:"両手利きの",                 etymology:"ambi（両方）+ dextrous（右手の）",       prefix:"ambi-", level:2},
  {word:"amphibian",    meaning:"両生類",                     etymology:"amphi（両方）+ bian（生きる）",          prefix:"ambi-", level:1},
  {word:"ambition",     meaning:"野心・志望",                  etymology:"ambi（周囲）+ tion（動く）→ 周りを歩く", prefix:"ambi-", level:1},

  // ── contra-（反対・対抗） ─────────────────────
  {word:"contradict",   meaning:"矛盾する・反論する",          etymology:"contra（反対）+ dict（言う）",           prefix:"contra-", level:2},
  {word:"contrast",     meaning:"対比・対照する",              etymology:"contra（反対）+ st（立つ）",             prefix:"contra-", level:1},
  {word:"contrary",     meaning:"反対の・逆の",               etymology:"contra（反対）+ ary",                    prefix:"contra-", level:1},
  {word:"contravene",   meaning:"違反する・反する",             etymology:"contra（反対）+ vene（来る）",           prefix:"contra-", level:3},
  {word:"contraband",   meaning:"密輸品・禁制品",              etymology:"contra（反対）+ band（命令）",           prefix:"contra-", level:2},
  {word:"contraception",meaning:"避妊",                       etymology:"contra（反対）+ cept（受ける）+ ion",    prefix:"contra-", level:2},

  // ── equi-/equa-（等しい） ────────────────────
  {word:"equal",        meaning:"等しい",                     etymology:"equi（等しい）+ al",                     prefix:"equi-", level:0},
  {word:"equality",     meaning:"平等",                       etymology:"equi（等しい）+ ality",                  prefix:"equi-", level:0},
  {word:"equivalent",   meaning:"同等の",                     etymology:"equi（等しい）+ valent（価値）",         prefix:"equi-", level:2},
  {word:"equivocate",   meaning:"言葉を濁す",                 etymology:"equi（等しい）+ vocat（声）+ e",         prefix:"equi-", level:3},
  {word:"equilibrium",  meaning:"均衡・平衡",                 etymology:"equi（等しい）+ librium（重さ）",        prefix:"equi-", level:2},
  {word:"equinox",      meaning:"春分・秋分",                  etymology:"equi（等しい）+ nox（夜）",              prefix:"equi-", level:2},

  // ── hemi-（半分） ────────────────────────────
  {word:"hemisphere",   meaning:"半球",                       etymology:"hemi（半分）+ sphere（球）",             prefix:"hemi-", level:2},
  {word:"hemicycle",    meaning:"半円",                       etymology:"hemi（半分）+ cycle（円）",              prefix:"hemi-", level:3},
  {word:"hemiplegia",   meaning:"片麻痺",                     etymology:"hemi（半分）+ plegia（打撃）",           prefix:"hemi-", level:3},

  // ── intra-（内側の・中に） ────────────────────
  {word:"intravenous",  meaning:"静脈内の",                   etymology:"intra（内側）+ venous（静脈の）",        prefix:"intra-", level:2},
  {word:"intracellular",meaning:"細胞内の",                   etymology:"intra（内側）+ cellular（細胞の）",      prefix:"intra-", level:3},
  {word:"intranet",     meaning:"イントラネット",               etymology:"intra（内側）+ net（ネット）",           prefix:"intra-", level:1},
  {word:"intramural",   meaning:"学内の・校内の",              etymology:"intra（内側）+ mural（壁の）",           prefix:"intra-", level:2},

  // ── ob-/op-（反対・〜に向かって） ────────────
  {word:"object",       meaning:"反対する・物体",              etymology:"ob（反対）+ ject（投げる）",             prefix:"ob-", level:0},
  {word:"obstacle",     meaning:"障害物",                     etymology:"ob（前に）+ stacle（立つ）",             prefix:"ob-", level:1},
  {word:"obtain",       meaning:"手に入れる",                  etymology:"ob（〜に）+ tain（保持する）",           prefix:"ob-", level:1},
  {word:"obscure",      meaning:"不明瞭な・曖昧な",            etymology:"ob（前に）+ scure（覆う）",              prefix:"ob-", level:2},
  {word:"observe",      meaning:"観察する",                   etymology:"ob（〜に）+ serve（見る）",              prefix:"ob-", level:0},
  {word:"obstinate",    meaning:"頑固な",                     etymology:"ob（反対）+ stin（立つ）+ ate",          prefix:"ob-", level:2},
  {word:"oblivion",     meaning:"忘却",                       etymology:"ob（完全に）+ liv（消す）+ ion",         prefix:"ob-", level:3},

  // ── omni-（すべて） ──────────────────────────
  {word:"omnipotent",   meaning:"全能の",                     etymology:"omni（すべて）+ potent（力のある）",      prefix:"omni-", level:2},
  {word:"omniscient",   meaning:"全知の",                     etymology:"omni（すべて）+ scient（知る）",         prefix:"omni-", level:3},
  {word:"omnivore",     meaning:"雑食動物",                   etymology:"omni（すべて）+ vore（食べる）",         prefix:"omni-", level:2},
  {word:"omnipresent",  meaning:"遍在する",                   etymology:"omni（すべて）+ present（存在する）",    prefix:"omni-", level:3},

  // ── per-（通して・完全に） ────────────────────
  {word:"perfect",      meaning:"完璧な",                     etymology:"per（完全に）+ fect（作る）",            prefix:"per-", level:0},
  {word:"perform",      meaning:"行う・演じる",               etymology:"per（完全に）+ form（形づける）",        prefix:"per-", level:0},
  {word:"persist",      meaning:"持続する・主張し続ける",       etymology:"per（完全に）+ sist（立つ）",           prefix:"per-", level:1},
  {word:"perceive",     meaning:"知覚する",                   etymology:"per（完全に）+ ceive（取る）",           prefix:"per-", level:2},
  {word:"persuade",     meaning:"説得する",                   etymology:"per（完全に）+ suade（促す）",           prefix:"per-", level:1},
  {word:"permanent",    meaning:"永続的な",                   etymology:"per（完全に）+ manent（留まる）",        prefix:"per-", level:1},
  {word:"pervade",      meaning:"広がる・浸透する",            etymology:"per（完全に）+ vade（行く）",            prefix:"per-", level:2},
  {word:"permeate",     meaning:"浸透する",                   etymology:"per（完全に）+ meate（行く）",           prefix:"per-", level:2},
  {word:"pernicious",   meaning:"有害な・致命的な",            etymology:"per（完全に）+ nic（損傷）+ ious",       prefix:"per-", level:3},
  {word:"perplex",      meaning:"困惑させる",                  etymology:"per（完全に）+ plex（絡む）",            prefix:"per-", level:2},

  // ── poly-（多くの） ──────────────────────────
  {word:"polygon",      meaning:"多角形",                     etymology:"poly（多くの）+ gon（角）",              prefix:"poly-", level:1},
  {word:"polyglot",     meaning:"多言語を話す人",              etymology:"poly（多くの）+ glot（舌）",             prefix:"poly-", level:2},
  {word:"polynomial",   meaning:"多項式",                     etymology:"poly（多くの）+ nomial（名前）",         prefix:"poly-", level:2},
  {word:"polytheism",   meaning:"多神教",                     etymology:"poly（多くの）+ theism（神）",           prefix:"poly-", level:3},
  {word:"polyphony",    meaning:"多声音楽",                   etymology:"poly（多くの）+ phony（音）",            prefix:"poly-", level:3},
  {word:"polymer",      meaning:"ポリマー・高分子",             etymology:"poly（多くの）+ mer（部分）",            prefix:"poly-", level:2},
  {word:"polygamy",     meaning:"一夫多妻制",                  etymology:"poly（多くの）+ gamy（婚姻）",           prefix:"poly-", level:2},

  // ── pro-（前に・代わりに・支持） ──────────────
  {word:"project",      meaning:"計画する・突き出る",          etymology:"pro（前に）+ ject（投げる）",            prefix:"pro-", level:0},
  {word:"protect",      meaning:"守る",                       etymology:"pro（前に）+ tect（覆う）",              prefix:"pro-", level:0},
  {word:"proceed",      meaning:"進む・続ける",               etymology:"pro（前に）+ ceed（行く）",              prefix:"pro-", level:1},
  {word:"progressive",  meaning:"進歩的な",                   etymology:"pro（前に）+ gressive（歩く）",          prefix:"pro-", level:1},
  {word:"prolific",     meaning:"多産の・多作の",              etymology:"pro（前に）+ lific（作る）",             prefix:"pro-", level:2},
  {word:"profound",     meaning:"深遠な・深い",               etymology:"pro（前に）+ found（深さ）",             prefix:"pro-", level:2},
  {word:"procrastinate",meaning:"先延ばしにする",              etymology:"pro（前に）+ crastin（明日）+ ate",      prefix:"pro-", level:2},
  {word:"proponent",    meaning:"支持者・提唱者",              etymology:"pro（前に）+ ponent（置く）",            prefix:"pro-", level:2},

  // ── tele-（遠く） ────────────────────────────
  {word:"telephone",    meaning:"電話",                       etymology:"tele（遠く）+ phone（音）",              prefix:"tele-", level:0},
  {word:"television",   meaning:"テレビ",                     etymology:"tele（遠く）+ vision（見る）",           prefix:"tele-", level:0},
  {word:"telescope",    meaning:"望遠鏡",                     etymology:"tele（遠く）+ scope（見る）",            prefix:"tele-", level:1},
  {word:"telepathy",    meaning:"テレパシー",                  etymology:"tele（遠く）+ pathy（感じる）",          prefix:"tele-", level:2},
  {word:"telecommunication",meaning:"電気通信",                etymology:"tele（遠く）+ communication（通信）",    prefix:"tele-", level:1},
  {word:"telekinesis",  meaning:"念力",                       etymology:"tele（遠く）+ kinesis（動く）",          prefix:"tele-", level:3},

  // ── mal-（悪い・不完全） ─────────────────────
  {word:"malfunction",  meaning:"誤作動・機能不全",            etymology:"mal（悪い）+ function（機能）",          prefix:"mal-", level:1},
  {word:"malnutrition", meaning:"栄養不良",                   etymology:"mal（不完全）+ nutrition（栄養）",       prefix:"mal-", level:2},
  {word:"malicious",    meaning:"悪意のある",                 etymology:"mal（悪い）+ icious",                    prefix:"mal-", level:2},
  {word:"malpractice",  meaning:"医療過誤・不正行為",           etymology:"mal（悪い）+ practice（実践）",          prefix:"mal-", level:2},
  {word:"malevolent",   meaning:"悪意のある",                  etymology:"mal（悪い）+ evolent（望む）",           prefix:"mal-", level:3},
  {word:"malignant",    meaning:"悪性の・致命的な",            etymology:"mal（悪い）+ ignant（生まれた）",        prefix:"mal-", level:2},
  {word:"malodorous",   meaning:"悪臭のある",                  etymology:"mal（悪い）+ odorous（香りの）",         prefix:"mal-", level:3},
  {word:"maladjusted",  meaning:"不適応の",                   etymology:"mal（不完全）+ adjusted（適応した）",    prefix:"mal-", level:2},

  // ── se-/sed-（分離・離れて） ─────────────────
  {word:"separate",     meaning:"分ける・分離した",            etymology:"se（離れて）+ para（準備する）+ te",     prefix:"se-", level:0},
  {word:"secret",       meaning:"秘密の",                     etymology:"se（離れて）+ cret（ふるい分ける）",      prefix:"se-", level:0},
  {word:"secure",       meaning:"安全な・確保する",             etymology:"se（離れて）+ cure（心配）→ 心配なし",   prefix:"se-", level:0},
  {word:"select",       meaning:"選ぶ",                       etymology:"se（離れて）+ lect（選ぶ）",             prefix:"se-", level:0},
  {word:"seduce",       meaning:"誘惑する",                   etymology:"se（離れて）+ duce（導く）",             prefix:"se-", level:2},
  {word:"segregate",    meaning:"隔離する・分離する",           etymology:"se（離れて）+ greg（群れ）+ ate",        prefix:"se-", level:2},
  {word:"secede",       meaning:"脱退する",                   etymology:"se（離れて）+ cede（行く）",             prefix:"se-", level:3},
  {word:"sequester",    meaning:"隔離する・差し押さえる",       etymology:"se（離れて）+ quest（求める）+ er",      prefix:"se-", level:3},

  // ── bio-（生命） ─────────────────────────────
  {word:"biology",      meaning:"生物学",                     etymology:"bio（生命）+ logy（学問）",               prefix:"bio-", level:0},
  {word:"biography",    meaning:"伝記",                       etymology:"bio（生命）+ graphy（書く）",            prefix:"bio-", level:1},
  {word:"biodiversity", meaning:"生物多様性",                  etymology:"bio（生命）+ diversity（多様性）",       prefix:"bio-", level:2},
  {word:"biochemistry", meaning:"生化学",                     etymology:"bio（生命）+ chemistry（化学）",         prefix:"bio-", level:2},
  {word:"biotechnology",meaning:"バイオテクノロジー",           etymology:"bio（生命）+ technology（技術）",        prefix:"bio-", level:2},
  {word:"biosphere",    meaning:"生物圏",                     etymology:"bio（生命）+ sphere（球）",              prefix:"bio-", level:2},
  {word:"biopsy",       meaning:"生検",                       etymology:"bio（生命）+ opsy（見る）",              prefix:"bio-", level:2},
  {word:"antibiotic",   meaning:"抗生物質",                   etymology:"anti（反）+ bio（生命）+ tic",           prefix:"bio-", level:1},

  // ── photo-（光） ─────────────────────────────
  {word:"photograph",   meaning:"写真",                       etymology:"photo（光）+ graph（書く）",             prefix:"photo-", level:0},
  {word:"photography",  meaning:"写真術",                     etymology:"photo（光）+ graphy（書く）",            prefix:"photo-", level:0},
  {word:"photosynthesis",meaning:"光合成",                    etymology:"photo（光）+ synthesis（合成）",         prefix:"photo-", level:1},
  {word:"photon",       meaning:"光子",                       etymology:"photo（光）+ on（素粒子）",              prefix:"photo-", level:2},
  {word:"photogenic",   meaning:"写真映りのよい",               etymology:"photo（光）+ genic（生まれる）",         prefix:"photo-", level:2},
  {word:"photovoltaic", meaning:"光起電力の・太陽電池の",       etymology:"photo（光）+ voltaic（電力の）",        prefix:"photo-", level:3},

  // ── psycho-（心・精神） ─────────────────────
  {word:"psychology",   meaning:"心理学",                     etymology:"psycho（心）+ logy（学問）",              prefix:"psycho-", level:0},
  {word:"psychiatry",   meaning:"精神医学",                   etymology:"psycho（心）+ iatry（治療）",            prefix:"psycho-", level:2},
  {word:"psychotherapy",meaning:"心理療法",                   etymology:"psycho（心）+ therapy（治療）",          prefix:"psycho-", level:2},
  {word:"psychotic",    meaning:"精神病の",                   etymology:"psycho（心）+ tic",                      prefix:"psycho-", level:2},
  {word:"psychosomatic",meaning:"心身症の",                   etymology:"psycho（心）+ somatic（体の）",          prefix:"psycho-", level:3},
  {word:"psychedelic",  meaning:"幻覚を引き起こす",            etymology:"psycho（心）+ delic（見えるもの）",      prefix:"psycho-", level:2},

  // ── thermo-（熱） ────────────────────────────
  {word:"thermometer",  meaning:"温度計",                     etymology:"thermo（熱）+ meter（測る）",            prefix:"thermo-", level:1},
  {word:"thermostat",   meaning:"サーモスタット",              etymology:"thermo（熱）+ stat（静止）",             prefix:"thermo-", level:1},
  {word:"thermodynamics",meaning:"熱力学",                    etymology:"thermo（熱）+ dynamics（力学）",        prefix:"thermo-", level:3},
  {word:"hypothermia",  meaning:"低体温症",                   etymology:"hypo（不足）+ thermia（熱）",            prefix:"thermo-", level:3},
  {word:"hyperthermia", meaning:"高体温症",                   etymology:"hyper（過度）+ thermia（熱）",           prefix:"thermo-", level:3},

  // ── sur-（上に・超えて） ─────────────────────
  {word:"surface",      meaning:"表面",                       etymology:"sur（上に）+ face（面）",                prefix:"sur-", level:0},
  {word:"surpass",      meaning:"超える・凌駕する",            etymology:"sur（上に）+ pass（通る）",              prefix:"sur-", level:2},
  {word:"surrender",    meaning:"降伏する・手放す",            etymology:"sur（上に）+ render（渡す）",            prefix:"sur-", level:1},
  {word:"survive",      meaning:"生き残る",                   etymology:"sur（超えて）+ vive（生きる）",          prefix:"sur-", level:0},
  {word:"surplus",      meaning:"余剰・黒字",                  etymology:"sur（上に）+ plus（多い）",              prefix:"sur-", level:2},
  {word:"surreal",      meaning:"超現実的な",                  etymology:"sur（超えて）+ real（現実的な）",        prefix:"sur-", level:2},
  {word:"surrogate",    meaning:"代理の・代替物",              etymology:"sur（下に）+ rogate（求める）",          prefix:"sur-", level:3},

  // ── chrono-（時間） ──────────────────────────
  {word:"chronological",meaning:"年代順の",                   etymology:"chrono（時間）+ logical（論理的な）",    prefix:"chrono-", level:2},
  {word:"chronicle",    meaning:"年代記・記録する",            etymology:"chrono（時間）+ icle",                   prefix:"chrono-", level:2},
  {word:"anachronism",  meaning:"時代錯誤",                   etymology:"ana（後ろに）+ chrono（時間）+ ism",     prefix:"chrono-", level:3},
  {word:"synchronize",  meaning:"同期させる",                  etymology:"syn（共に）+ chrono（時間）+ ize",       prefix:"chrono-", level:2},
  {word:"chronic",      meaning:"慢性の・長期の",              etymology:"chrono（時間）+ ic",                     prefix:"chrono-", level:1},

  // ── astro-（星・宇宙） ───────────────────────
  {word:"astronomy",    meaning:"天文学",                     etymology:"astro（星）+ nomy（法則）",              prefix:"astro-", level:1},
  {word:"astronaut",    meaning:"宇宙飛行士",                  etymology:"astro（星）+ naut（航行者）",            prefix:"astro-", level:1},
  {word:"astrophysics", meaning:"天体物理学",                  etymology:"astro（星）+ physics（物理学）",         prefix:"astro-", level:2},
  {word:"astrology",    meaning:"占星術",                     etymology:"astro（星）+ logy（学問）",              prefix:"astro-", level:1},
  {word:"asteroid",     meaning:"小惑星",                     etymology:"astro（星）+ oid（〜のような）",         prefix:"astro-", level:2},
  {word:"catastrophe",  meaning:"大災害",                     etymology:"kata（下に）+ strophe（旋回）",          prefix:"astro-", level:1},

  // ── nano-（極小・10億分の1） ──────────────────
  {word:"nanotechnology",meaning:"ナノテクノロジー",           etymology:"nano（極小）+ technology（技術）",       prefix:"nano-", level:2},
  {word:"nanometer",    meaning:"ナノメートル",                etymology:"nano（10億分の1）+ meter（測る）",       prefix:"nano-", level:2},
  {word:"nanoparticle", meaning:"ナノ粒子",                   etymology:"nano（極小）+ particle（粒子）",         prefix:"nano-", level:2},

  // ── cyber-（コンピュータ・電脳） ─────────────
  {word:"cybersecurity",meaning:"サイバーセキュリティ",         etymology:"cyber（電脳）+ security（安全）",        prefix:"cyber-", level:1},
  {word:"cyberspace",   meaning:"サイバースペース",            etymology:"cyber（電脳）+ space（空間）",           prefix:"cyber-", level:1},
  {word:"cyberbullying",meaning:"ネットいじめ",               etymology:"cyber（電脳）+ bullying（いじめ）",      prefix:"cyber-", level:1},

  // ── be-（〜にする・強意） ─────────────────────
  {word:"beware",       meaning:"気をつける",                  etymology:"be（強意）+ ware（注意する）",           prefix:"be-", level:0},
  {word:"belittle",     meaning:"見下す・軽視する",            etymology:"be（強意）+ little（小さい）",           prefix:"be-", level:2},
  {word:"bewildered",   meaning:"困惑した・途方にくれた",       etymology:"be（強意）+ wilder（迷わせる）+ ed",     prefix:"be-", level:2},
  {word:"benevolent",   meaning:"慈悲深い",                   etymology:"bene（良い）+ volent（望む）",           prefix:"be-", level:2},
  {word:"besiege",      meaning:"包囲する・悩ませる",           etymology:"be（強意）+ siege（包囲）",             prefix:"be-", level:2},
  {word:"bequeath",     meaning:"遺贈する・後世に残す",         etymology:"be（強意）+ queath（言う）",            prefix:"be-", level:3},
  {word:"beseech",      meaning:"懇願する",                   etymology:"be（強意）+ seech（求める）",            prefix:"be-", level:3},
  {word:"bemoan",       meaning:"嘆く・悲しむ",                etymology:"be（強意）+ moan（うめく）",             prefix:"be-", level:2},

  // ── hydro-（水） ─────────────────────────────
  {word:"hydrogen",     meaning:"水素",                       etymology:"hydro（水）+ gen（生む）",               prefix:"hydro-", level:1},
  {word:"hydroelectric",meaning:"水力発電の",                 etymology:"hydro（水）+ electric（電気の）",        prefix:"hydro-", level:2},
  {word:"hydration",    meaning:"水分補給・水和",               etymology:"hydro（水）+ ation",                     prefix:"hydro-", level:2},
  {word:"hydraulic",    meaning:"水力の",                     etymology:"hydro（水）+ aulic（管）",               prefix:"hydro-", level:2},
  {word:"dehydrate",    meaning:"脱水する",                   etymology:"de（除去）+ hydro（水）+ ate",           prefix:"hydro-", level:2},
  {word:"hydrotherapy", meaning:"水治療法",                   etymology:"hydro（水）+ therapy（治療）",           prefix:"hydro-", level:2},

  // ── with-（反対・除去） ──────────────────────
  {word:"withdraw",     meaning:"引き出す・撤退する",           etymology:"with（反対）+ draw（引く）",             prefix:"with-", level:1},
  {word:"withstand",    meaning:"耐える・対抗する",             etymology:"with（反対）+ stand（立つ）",            prefix:"with-", level:2},
  {word:"withhold",     meaning:"差し控える・保留する",          etymology:"with（反対）+ hold（保つ）",             prefix:"with-", level:2},

  // ── magni-/mega-（大きい） ────────────────────
  {word:"magnify",      meaning:"拡大する・誇張する",           etymology:"magni（大きい）+ fy",                    prefix:"magni-", level:1},
  {word:"magnificent",  meaning:"壮大な・素晴らしい",           etymology:"magni（大きい）+ ficent（作る）",        prefix:"magni-", level:1},
  {word:"magnitude",    meaning:"大きさ・規模",                etymology:"magni（大きい）+ tude",                   prefix:"magni-", level:2},
  {word:"magnanimous",  meaning:"寛大な・心の大きい",           etymology:"magni（大きい）+ anim（心）+ ous",       prefix:"magni-", level:3},
  {word:"megalith",     meaning:"巨石",                        etymology:"mega（大きい）+ lith（石）",             prefix:"magni-", level:3},

  // ── vice-（代わりに） ─────────────────────────
  {word:"vice-president",meaning:"副大統領・副社長",            etymology:"vice（代わりに）+ president（大統領）",  prefix:"vice-", level:1},
  {word:"viceroy",      meaning:"副王・総督",                  etymology:"vice（代わりに）+ roy（王）",            prefix:"vice-", level:2},
  {word:"vicarious",    meaning:"代理の・間接的な",             etymology:"vice（代わりに）+ arious",               prefix:"vice-", level:3},
  {word:"vice versa",   meaning:"逆に・反対に",                etymology:"vice（代わりに）+ versa（向く）",        prefix:"vice-", level:2},

  // ── misc additions ───────────────────────────
  {word:"bipartisan",   meaning:"超党派の",                   etymology:"bi（二つ）+ partisan（党派の）",         prefix:"bi-", level:2},
  {word:"bipolar",      meaning:"双極性の",                   etymology:"bi（二つ）+ polar（極の）",              prefix:"bi-", level:2},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
