/**
 * data-prefix-5.js — 接頭語データ追加 vol.3
 * 接頭語: ab-, ad-, ambi-, bene-, mal-, circum-, com-/con-, epi-, eu-, per-, para-, pro-
 * 形式: { word, meaning, etymology, prefix, level }
 */
(function(){
  var d = [

  // ── ab-（離れて・から） ──────────────────────────
  {word:"absent",       meaning:"欠席の・いない",         etymology:"ab（離れて）+ sent（いる）",                    prefix:"ab-", level:0},
  {word:"absolute",     meaning:"絶対的な・完全な",       etymology:"ab（離れて）+ solute（縛る）→ 縛りがない",     prefix:"ab-", level:1},
  {word:"absorb",       meaning:"吸収する・没頭させる",   etymology:"ab（完全に）+ sorb（吸う）",                   prefix:"ab-", level:1},
  {word:"abstract",     meaning:"抽象的な・要約",         etymology:"ab（離れて）+ tract（引く）→ 引き離す",        prefix:"ab-", level:1},
  {word:"abuse",        meaning:"乱用する・虐待",         etymology:"ab（誤って）+ use（使う）",                    prefix:"ab-", level:1},
  {word:"abnormal",     meaning:"異常な・普通でない",     etymology:"ab（離れて）+ normal（正常な）",               prefix:"ab-", level:1},
  {word:"abolish",      meaning:"廃止する・撤廃する",     etymology:"ab（完全に）+ olish（取り除く）",              prefix:"ab-", level:2},
  {word:"abolition",    meaning:"廃止・撤廃",             etymology:"ab（完全に）+ olition（取り除く）",            prefix:"ab-", level:2},
  {word:"abrupt",       meaning:"突然の・ぶっきらぼうな", etymology:"ab（離れて）+ rupt（壊す）",                   prefix:"ab-", level:2},
  {word:"abstain",      meaning:"自制する・棄権する",     etymology:"ab（離れて）+ stain（保つ）→ 距離を置く",     prefix:"ab-", level:2},
  {word:"abstinence",   meaning:"節制・禁欲",             etymology:"ab（離れて）+ stinence（保つ）",              prefix:"ab-", level:2},
  {word:"abundant",     meaning:"豊富な・たくさんの",     etymology:"ab（完全に）+ undant（波うつ）→ 溢れる",       prefix:"ab-", level:1},
  {word:"abundance",    meaning:"豊富さ・多量",           etymology:"ab（完全に）+ undance（波）",                  prefix:"ab-", level:2},
  {word:"abide",        meaning:"従う・我慢する",         etymology:"ab（〜に）+ ide（待つ）",                     prefix:"ab-", level:2},
  {word:"abdicate",     meaning:"退位する・放棄する",     etymology:"ab（離れて）+ dicate（宣言する）",             prefix:"ab-", level:3},
  {word:"aberrant",     meaning:"常軌を逸した・異常な",   etymology:"ab（離れて）+ errant（さまよう）",             prefix:"ab-", level:3},
  {word:"abhor",        meaning:"ひどく嫌う・憎む",       etymology:"ab（離れて）+ hor（ぞっとする）",              prefix:"ab-", level:2},
  {word:"abhorrent",    meaning:"忌まわしい・ひどく嫌な", etymology:"ab（離れて）+ horrent（ぞっとさせる）",        prefix:"ab-", level:3},
  {word:"abject",       meaning:"惨めな・卑屈な",         etymology:"ab（下に）+ ject（投げる）→ 投げ落とされた",   prefix:"ab-", level:3},
  {word:"ablaze",       meaning:"燃え盛る・明るく輝く",   etymology:"ab（完全に）+ blaze（炎）",                   prefix:"ab-", level:2},

  // ── ad-（〜へ・〜に向かって） ────────────────────
  {word:"advance",      meaning:"前進する・進歩",         etymology:"ad（〜へ）+ vance（前）",                      prefix:"ad-", level:0},
  {word:"advantage",    meaning:"優位・利点",             etymology:"ad（〜へ）+ vantage（前に）→ 前に立つ",        prefix:"ad-", level:1},
  {word:"admit",        meaning:"認める・入場を許す",     etymology:"ad（〜へ）+ mit（送る）→ 中に送る",            prefix:"ad-", level:1},
  {word:"adopt",        meaning:"採用する・養子にする",   etymology:"ad（〜へ）+ opt（選ぶ）",                     prefix:"ad-", level:1},
  {word:"adapt",        meaning:"適応する・改造する",     etymology:"ad（〜へ）+ apt（適した）",                   prefix:"ad-", level:1},
  {word:"adequate",     meaning:"十分な・適切な",         etymology:"ad（〜へ）+ equate（等しくする）",             prefix:"ad-", level:2},
  {word:"adjacent",     meaning:"隣接した・近くの",       etymology:"ad（〜へ）+ jacent（横たわる）",              prefix:"ad-", level:2},
  {word:"adhere",       meaning:"くっつく・固守する",     etymology:"ad（〜へ）+ here（くっつく）",                 prefix:"ad-", level:2},
  {word:"advocate",     meaning:"擁護する・支持者",       etymology:"ad（〜へ）+ vocate（呼ぶ）→ 声を上げる",      prefix:"ad-", level:2},
  {word:"adhere",       meaning:"付着する・忠実に従う",   etymology:"ad（〜に）+ here（くっつく）",                prefix:"ad-", level:2},
  {word:"adorn",        meaning:"飾る・美化する",         etymology:"ad（〜に）+ orn（飾る）",                     prefix:"ad-", level:2},
  {word:"admonish",     meaning:"警告する・諫める",       etymology:"ad（〜へ）+ monish（警告する）",              prefix:"ad-", level:3},
  {word:"adulterate",   meaning:"混ぜ物をする・粗悪にする",etymology:"ad（〜に）+ ulter（他の）+ ate",              prefix:"ad-", level:3},
  {word:"adept",        meaning:"熟練した・精通した",     etymology:"ad（〜へ）+ ept（適した）",                   prefix:"ad-", level:2},
  {word:"adduce",       meaning:"証拠として挙げる",       etymology:"ad（〜へ）+ duce（導く）",                    prefix:"ad-", level:3},
  {word:"adjoin",       meaning:"隣接する・接する",       etymology:"ad（〜に）+ join（結ぶ）",                    prefix:"ad-", level:2},
  {word:"adjust",       meaning:"調整する・合わせる",     etymology:"ad（〜へ）+ just（正しい）",                  prefix:"ad-", level:1},
  {word:"admire",       meaning:"賞賛する・尊敬する",     etymology:"ad（〜に）+ mire（驚く）",                    prefix:"ad-", level:1},
  {word:"adventure",    meaning:"冒険",                   etymology:"ad（〜へ）+ venture（来る）→ 向かっていく",   prefix:"ad-", level:0},
  {word:"adverse",      meaning:"不利な・反対の",         etymology:"ad（〜へ）+ verse（向く）→ 逆を向いた",       prefix:"ad-", level:2},

  // ── ambi-（両方・周り） ──────────────────────────
  {word:"ambiguous",    meaning:"あいまいな・多義的な",   etymology:"ambi（両方）+ guous（動く）→ 両方に動く",     prefix:"ambi-", level:2},
  {word:"ambiguity",    meaning:"曖昧さ・多義性",         etymology:"ambi（両方）+ guity（動く）",                  prefix:"ambi-", level:2},
  {word:"ambivalent",   meaning:"相反する気持ちを持つ",   etymology:"ambi（両方）+ valent（価値）",                 prefix:"ambi-", level:2},
  {word:"ambivalence",  meaning:"両面価値・アンビバレンス",etymology:"ambi（両方）+ valence（価値）",               prefix:"ambi-", level:3},
  {word:"ambidextrous", meaning:"両手利きの",             etymology:"ambi（両方）+ dextrous（右手の）",            prefix:"ambi-", level:3},
  {word:"ambition",     meaning:"野心・大志",             etymology:"ambi（周りに）+ tion（行くこと）→ 票を集める",prefix:"ambi-", level:1},
  {word:"ambitious",    meaning:"野心的な・意欲的な",     etymology:"ambi（周りに）+ tious（〜の性質）",           prefix:"ambi-", level:1},
  {word:"ambient",      meaning:"周囲の・取り巻く",       etymology:"ambi（周りに）+ ent（ある）",                 prefix:"ambi-", level:2},

  // ── bene-（良い・善い） ──────────────────────────
  {word:"benefit",      meaning:"恩恵・利益",             etymology:"bene（良い）+ fit（作る）",                   prefix:"bene-", level:0},
  {word:"beneficial",   meaning:"有益な・役立つ",         etymology:"bene（良い）+ ficial（作る）",                prefix:"bene-", level:1},
  {word:"benevolent",   meaning:"慈善的な・親切な",       etymology:"bene（良い）+ volent（望む）",                prefix:"bene-", level:2},
  {word:"benevolence",  meaning:"慈善・博愛",             etymology:"bene（良い）+ volence（望む）",               prefix:"bene-", level:2},
  {word:"benign",       meaning:"良性の・親切な",         etymology:"bene（良い）+ ign（生まれ）→ 良い生まれの",   prefix:"bene-", level:2},
  {word:"benefactor",   meaning:"恩人・後援者",           etymology:"bene（良い）+ factor（する人）",              prefix:"bene-", level:2},
  {word:"beneficiary",  meaning:"受益者・恩恵を受ける人", etymology:"bene（良い）+ ficiary（受ける人）",           prefix:"bene-", level:3},
  {word:"benediction",  meaning:"祝福・祈祷",             etymology:"bene（良い）+ diction（言う）",               prefix:"bene-", level:3},

  // ── mal-（悪い・悪く） ──────────────────────────
  {word:"malfunction",  meaning:"誤作動・機能不全",       etymology:"mal（悪い）+ function（機能）",               prefix:"mal-", level:1},
  {word:"malicious",    meaning:"悪意のある・意地の悪い", etymology:"mal（悪い）+ icious（性質）",                 prefix:"mal-", level:2},
  {word:"malice",       meaning:"悪意・敵意",             etymology:"mal（悪い）+ ice（状態）",                    prefix:"mal-", level:2},
  {word:"malnutrition", meaning:"栄養不良",               etymology:"mal（悪い）+ nutrition（栄養）",              prefix:"mal-", level:2},
  {word:"malnourished", meaning:"栄養不足の",             etymology:"mal（悪い）+ nourished（栄養を与えられた）",  prefix:"mal-", level:2},
  {word:"malpractice",  meaning:"医療過誤・不正行為",     etymology:"mal（悪い）+ practice（実践）",               prefix:"mal-", level:2},
  {word:"malevolent",   meaning:"悪意のある・憎しみを持つ",etymology:"mal（悪い）+ evolent（望む）",               prefix:"mal-", level:3},
  {word:"malevolence",  meaning:"悪意・憎しみ",           etymology:"mal（悪い）+ evolence（望む）",               prefix:"mal-", level:3},
  {word:"malodorous",   meaning:"悪臭を放つ",             etymology:"mal（悪い）+ odorous（匂いの）",              prefix:"mal-", level:3},
  {word:"malign",       meaning:"悪意のある・中傷する",   etymology:"mal（悪い）+ ign（生まれ）",                  prefix:"mal-", level:3},
  {word:"malignant",    meaning:"悪性の・有害な",         etymology:"mal（悪い）+ ignant（生まれ）",               prefix:"mal-", level:2},
  {word:"maladroit",    meaning:"不器用な・まずい",       etymology:"mal（悪い）+ adroit（器用な）",               prefix:"mal-", level:3},
  {word:"malaise",      meaning:"不快感・倦怠感",         etymology:"mal（悪い）+ aise（楽）→ 体の具合が悪い",     prefix:"mal-", level:3},

  // ── circum-（周りに・〜を回って） ──────────────
  {word:"circumstance", meaning:"状況・事情",             etymology:"circum（周りに）+ stance（立つ）→ 周囲の状況", prefix:"circum-", level:1},
  {word:"circumference",meaning:"円周・周囲",             etymology:"circum（周りに）+ ference（運ぶ）",            prefix:"circum-", level:2},
  {word:"circumspect",  meaning:"慎重な・用心深い",       etymology:"circum（周りに）+ spect（見る）→ 周りを見る", prefix:"circum-", level:2},
  {word:"circumvent",   meaning:"回避する・出し抜く",     etymology:"circum（周りに）+ vent（来る）→ 迂回する",    prefix:"circum-", level:3},
  {word:"circumscribe", meaning:"制限する・囲む",         etymology:"circum（周りに）+ scribe（書く）→ 境界を引く",prefix:"circum-", level:3},
  {word:"circumnavigate",meaning:"〜を一周する・航行する",etymology:"circum（周りに）+ navigate（航行する）",      prefix:"circum-", level:2},
  {word:"circumlocution",meaning:"遠回しな表現",         etymology:"circum（周りに）+ locution（言葉）",           prefix:"circum-", level:3},

  // ── com-/con-（共に・完全に） ───────────────────
  {word:"combine",      meaning:"組み合わせる",           etymology:"com（共に）+ bine（結ぶ）",                   prefix:"com-", level:0},
  {word:"compare",      meaning:"比較する",               etymology:"com（共に）+ pare（用意する）",               prefix:"com-", level:0},
  {word:"compete",      meaning:"競争する",               etymology:"com（共に）+ pete（求める）",                 prefix:"com-", level:1},
  {word:"compile",      meaning:"編集する・コンパイルする",etymology:"com（共に）+ pile（積む）",                  prefix:"com-", level:2},
  {word:"complete",     meaning:"完成する・完全な",       etymology:"com（完全に）+ plete（満たす）",              prefix:"com-", level:0},
  {word:"complex",      meaning:"複雑な・複合体",         etymology:"com（共に）+ plex（折る）→ 複雑に絡む",       prefix:"com-", level:1},
  {word:"comply",       meaning:"従う・応じる",           etymology:"com（完全に）+ ply（折る）→ 従い曲げる",      prefix:"com-", level:2},
  {word:"comprehend",   meaning:"理解する",               etymology:"com（完全に）+ prehend（つかむ）",            prefix:"com-", level:2},
  {word:"compromise",   meaning:"妥協・折り合い",         etymology:"com（共に）+ promise（約束する）",            prefix:"com-", level:2},
  {word:"condense",     meaning:"凝縮する・要約する",     etymology:"con（完全に）+ dense（濃い）",                prefix:"con-", level:2},
  {word:"confirm",      meaning:"確認する・確かめる",     etymology:"con（完全に）+ firm（固い）",                 prefix:"con-", level:1},
  {word:"confront",     meaning:"直面する・対決する",     etymology:"con（向かって）+ front（前）",                prefix:"con-", level:2},
  {word:"connect",      meaning:"つなげる・接続する",     etymology:"con（共に）+ nect（結ぶ）",                   prefix:"con-", level:0},
  {word:"conscious",    meaning:"意識がある・自覚した",   etymology:"con（共に）+ scious（知る）",                 prefix:"con-", level:1},
  {word:"consider",     meaning:"考慮する・熟考する",     etymology:"con（共に）+ sider（星）→ 星を観察する",      prefix:"con-", level:0},
  {word:"convince",     meaning:"確信させる・説得する",   etymology:"con（完全に）+ vince（勝つ）",                prefix:"con-", level:1},
  {word:"conspire",     meaning:"陰謀を企てる",           etymology:"con（共に）+ spire（息をする）",              prefix:"con-", level:2},
  {word:"conspiracy",   meaning:"陰謀・共謀",             etymology:"con（共に）+ spiracy（息をする）",            prefix:"con-", level:2},
  {word:"contemplate",  meaning:"熟考する・瞑想する",     etymology:"con（完全に）+ template（区画）",             prefix:"con-", level:2},
  {word:"contempt",     meaning:"軽蔑・侮辱",             etymology:"con（完全に）+ tempt（試みる）→ 無視する",    prefix:"con-", level:2},
  {word:"contend",      meaning:"主張する・争う",         etymology:"con（共に）+ tend（伸ばす）",                 prefix:"con-", level:2},
  {word:"convenient",   meaning:"便利な・都合のよい",     etymology:"con（共に）+ venient（来る）→ うまく合う",    prefix:"con-", level:0},
  {word:"converge",     meaning:"収束する・集まる",       etymology:"con（共に）+ verge（傾く）",                  prefix:"con-", level:3},
  {word:"convey",       meaning:"伝える・運ぶ",           etymology:"con（共に）+ vey（道）→ 道を通って送る",      prefix:"con-", level:2},

  // ── epi-（上に・後に・追加の） ──────────────────
  {word:"epidemic",     meaning:"流行病・蔓延する",       etymology:"epi（上に）+ demic（民衆）→ 民衆に広がる",   prefix:"epi-", level:2},
  {word:"epilogue",     meaning:"後書き・エピローグ",     etymology:"epi（後に）+ logue（言葉）",                  prefix:"epi-", level:2},
  {word:"episode",      meaning:"エピソード・出来事",     etymology:"epi（上に）+ sode（道）→ 挿入された話",       prefix:"epi-", level:1},
  {word:"epiphany",     meaning:"突然の閃き・顕現",       etymology:"epi（上に）+ phany（現れる）",                prefix:"epi-", level:3},
  {word:"epitome",      meaning:"典型・縮図",             etymology:"epi（上に）+ tome（切る）→ 要点を切り出す",  prefix:"epi-", level:3},
  {word:"epitaph",      meaning:"墓碑銘・追悼文",         etymology:"epi（上に）+ taph（墓）→ 墓の上に書くもの",  prefix:"epi-", level:3},
  {word:"epigraph",     meaning:"銘文・題辞",             etymology:"epi（上に）+ graph（書く）",                  prefix:"epi-", level:3},

  // ── eu-（良い・善い・真の） ─────────────────────
  {word:"euphoria",     meaning:"多幸感・幸福感",         etymology:"eu（良い）+ phoria（運ぶ）→ 良い気分",        prefix:"eu-", level:2},
  {word:"euphemism",    meaning:"婉曲語法・遠回しな表現", etymology:"eu（良い）+ phemism（言う）→ 良い言葉に変える",prefix:"eu-", level:2},
  {word:"eulogy",       meaning:"賛辞・追悼文",           etymology:"eu（良い）+ logy（言葉）→ 良い言葉",         prefix:"eu-", level:3},
  {word:"euthanasia",   meaning:"安楽死",                 etymology:"eu（良い）+ thanasia（死）→ 良い死",          prefix:"eu-", level:3},
  {word:"evaluate",     meaning:"評価する",               etymology:"e（外に）+ value（価値）+ ate",               prefix:"eu-", level:1},

  // ── per-（完全に・〜を通して） ──────────────────
  {word:"perfect",      meaning:"完璧な",                 etymology:"per（完全に）+ fect（作る）",                 prefix:"per-", level:0},
  {word:"perform",      meaning:"演じる・実行する",       etymology:"per（完全に）+ form（形作る）",               prefix:"per-", level:0},
  {word:"persist",      meaning:"持続する・主張する",     etymology:"per（完全に）+ sist（立つ）",                 prefix:"per-", level:2},
  {word:"persistent",   meaning:"執念深い・持続する",     etymology:"per（完全に）+ sistent（立つ）",              prefix:"per-", level:2},
  {word:"persuade",     meaning:"説得する",               etymology:"per（完全に）+ suade（勧める）",              prefix:"per-", level:1},
  {word:"perceive",     meaning:"知覚する・認識する",     etymology:"per（完全に）+ ceive（取る）",                prefix:"per-", level:2},
  {word:"perplex",      meaning:"困惑させる",             etymology:"per（完全に）+ plex（絡める）",               prefix:"per-", level:2},
  {word:"permeate",     meaning:"浸透する・広がる",       etymology:"per（〜を通して）+ meate（通る）",            prefix:"per-", level:3},
  {word:"persevere",    meaning:"忍耐する・やり続ける",   etymology:"per（完全に）+ severe（厳しい）",             prefix:"per-", level:2},
  {word:"pervasive",    meaning:"広く浸透した・普及した", etymology:"per（〜を通して）+ vasive（行く）",           prefix:"per-", level:3},

  // ── para-（横・隣・超えて） ─────────────────────
  {word:"parallel",     meaning:"平行な・類似した",       etymology:"para（隣に）+ allel（他の）→ 隣り合う",       prefix:"para-", level:1},
  {word:"parasite",     meaning:"寄生虫・寄生者",         etymology:"para（隣に）+ site（食べる）→ 隣で食べる",    prefix:"para-", level:2},
  {word:"paradox",      meaning:"逆説・パラドックス",     etymology:"para（反対に）+ dox（意見）",                 prefix:"para-", level:2},
  {word:"paranoid",     meaning:"妄想的な・過度に疑う",   etymology:"para（超えて）+ noid（心）",                  prefix:"para-", level:2},
  {word:"paraphrase",   meaning:"言い換える・パラフレーズ",etymology:"para（隣に）+ phrase（言う）",               prefix:"para-", level:2},
  {word:"paradigm",     meaning:"典型・パラダイム",       etymology:"para（横に）+ digm（示す）→ 模範を示す",      prefix:"para-", level:3},
  {word:"paramount",    meaning:"最重要の・卓越した",     etymology:"para（超えて）+ mount（山）→ 山を超える",     prefix:"para-", level:3},

  // ── pro-（前に・賛成して） ──────────────────────
  {word:"project",      meaning:"計画・突き出る",         etymology:"pro（前に）+ ject（投げる）→ 前に投げる",     prefix:"pro-", level:0},
  {word:"promote",      meaning:"促進する・昇進させる",   etymology:"pro（前に）+ mote（動く）",                   prefix:"pro-", level:1},
  {word:"propose",      meaning:"提案する",               etymology:"pro（前に）+ pose（置く）",                   prefix:"pro-", level:1},
  {word:"protect",      meaning:"保護する",               etymology:"pro（前に）+ tect（覆う）→ 前に覆いを置く",   prefix:"pro-", level:0},
  {word:"profound",     meaning:"深い・奥深い",           etymology:"pro（前に）+ found（底）→ 底まで深い",        prefix:"pro-", level:2},
  {word:"prospect",     meaning:"見通し・可能性",         etymology:"pro（前に）+ spect（見る）→ 前を見る",        prefix:"pro-", level:2},
  {word:"provoke",      meaning:"挑発する・引き起こす",   etymology:"pro（前に）+ voke（呼ぶ）",                   prefix:"pro-", level:2},
  {word:"prolong",      meaning:"延長する・長引かせる",   etymology:"pro（前に）+ long（長い）",                   prefix:"pro-", level:2},
  {word:"profess",      meaning:"公言する・職業とする",   etymology:"pro（公に）+ fess（言う）",                   prefix:"pro-", level:2},
  {word:"proliferate",  meaning:"急増する・拡散する",     etymology:"pro（前に）+ liferate（増える）",             prefix:"pro-", level:3},
  {word:"profound",     meaning:"深遠な・深刻な",         etymology:"pro（深く）+ found（底）",                    prefix:"pro-", level:2},
  {word:"procrastinate",meaning:"先延ばしにする",         etymology:"pro（前に）+ crastinate（明日）",             prefix:"pro-", level:3},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
