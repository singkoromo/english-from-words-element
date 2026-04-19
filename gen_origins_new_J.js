/**
 * gen_origins_new_J.js — GRE/Advanced (20) + Academic (12) + Politics (21) from data-mixed-53
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "abeyance": {
      origin: "古フランス語 abeance（望み・期待）から。à（〜に）＋baer（あくびをする・口を開けて待つ）。「宙吊りの状態で待っている」が原義。法律では権利・財産が一時的に確定していない宙吊り状態を指す。",
      derivatives: [
        { word: "in abeyance", desc: "中断して・宙吊りで（慣用句）" }
      ],
      family: [
        { word: "bay", desc: "吠える・入り江（baer と同語根）" }
      ],
      compounds: [
        { phrase: "hold in abeyance", desc: "保留にする・棚上げにする" },
        { phrase: "fall into abeyance", desc: "廃止状態になる・使われなくなる" }
      ]
    },
    "abrade": {
      origin: "ラテン語 abradere（削り取る・かき落とす）から。ab-（離れて）＋radere（削る・かく）。「表面を削り取る」が原義。摩擦によって表面を傷つけること。皮膚科学・歯科・材料工学で使われる専門語。",
      derivatives: [
        { word: "abrasion", desc: "擦過・擦り傷" },
        { word: "abrasive", desc: "研磨剤・摩耗性の" }
      ],
      family: [
        { word: "razor", desc: "かみそり（radere から）" },
        { word: "raze", desc: "完全に破壊する（radere から）" },
        { word: "erase", desc: "消す（e+radere）" }
      ],
      compounds: [
        { phrase: "abrade the surface", desc: "表面を削る" },
        { phrase: "abrasion resistance", desc: "耐摩耗性" }
      ]
    },
    "aspersion": {
      origin: "ラテン語 aspersio（水をかけること）から。ad-（〜に）＋spargere（まく・散らす）。キリスト教の洗礼で水をかける儀式が原義。「名誉に汚点をかける」の比喩から「中傷・悪口」の意味に発展。",
      derivatives: [
        { word: "cast aspersions", desc: "中傷する（慣用句）" }
      ],
      family: [
        { word: "sparse", desc: "まばらな（spargere から）" },
        { word: "disperse", desc: "散らす（dis+spargere）" },
        { word: "sprinkle", desc: "振りかける（spargere と意味対応）" }
      ],
      compounds: [
        { phrase: "cast aspersions on", desc: "〜を中傷する" },
        { phrase: "personal aspersions", desc: "個人への誹謗" }
      ]
    },
    "consternation": {
      origin: "ラテン語 consternare（打ちのめす・仰天させる）から。con-（完全に）＋sternere（打ち倒す・広げる）。「完全に打ち倒される」が原義。予期しない出来事による強い驚き・狼狽・混乱状態を指す語。",
      derivatives: [
        { word: "consternated", desc: "狼狽した" }
      ],
      family: [
        { word: "prostrate", desc: "うつ伏せになる（pro+sternere）" },
        { word: "constrain", desc: "制限する（語根近接）" }
      ],
      compounds: [
        { phrase: "cause consternation", desc: "仰天させる・狼狽させる" },
        { phrase: "to the consternation of", desc: "〜を仰天させたことに" }
      ]
    },
    "cull": {
      origin: "ラテン語 colligere（集める・選ぶ）から。古フランス語 coillir を経由。「選び取る」が原義。良いものを選び出し、基準に満たないものを排除する行為。畜産での「間引き」、データ処理での「選別」などで使われる。",
      derivatives: [
        { word: "culled", desc: "選別した・間引いた" },
        { word: "culling", desc: "選別・間引き" }
      ],
      family: [
        { word: "collect", desc: "集める（colligere の派生）" },
        { word: "select", desc: "選ぶ（se+legere）" }
      ],
      compounds: [
        { phrase: "cull from the herd", desc: "群れから間引く" },
        { phrase: "data culling", desc: "データの選別・絞り込み" }
      ]
    },
    "ebullience": {
      origin: "ラテン語 ebullire（沸騰する・泡立つ）から。e-（外へ）＋bullire（沸騰する）。「沸き出るような」が原義。抑えきれないほど溢れる活気・元気・喜びを指す語。ebullition は化学で「沸騰・気泡発生」を指す。",
      derivatives: [
        { word: "ebullient", desc: "活気溢れる・元気はつらつの（形容詞）" },
        { word: "ebulliently", desc: "活気よく" }
      ],
      family: [
        { word: "boil", desc: "沸騰する（bullire と語根対応）" },
        { word: "ebullition", desc: "沸騰・激情の爆発" }
      ],
      compounds: [
        { phrase: "natural ebullience", desc: "生まれながらの活気" },
        { phrase: "youthful ebullience", desc: "若者の活力" }
      ]
    },
    "halcyon": {
      origin: "ギリシャ語 alkyon（カワセミ）から。ギリシャ神話でカワセミは冬至の前後14日間に波静かな海で巣を作るとされ、この期間が「穏やかな日々（Halcyon Days）」と呼ばれた。「かつての平和で幸福な」という意味でも使われる。",
      derivatives: [
        { word: "halcyon days", desc: "穏やかな日々・黄金時代（慣用句）" }
      ],
      family: [
        { word: "kingfisher", desc: "カワセミ（英語名）" }
      ],
      compounds: [
        { phrase: "halcyon days", desc: "穏やかな幸福な時代" },
        { phrase: "halcyon period", desc: "平穏な時期" }
      ]
    },
    "indigent": {
      origin: "ラテン語 indigens（欠乏している・必要としている）から。indu-（中に・完全に）＋egere（必要とする・欠乏する）。「完全に欠乏した状態」が原義。生活必需品に欠ける極めて貧困な状態を指す形容詞。",
      derivatives: [
        { word: "indigence", desc: "極貧・赤貧" },
        { word: "indigent defendant", desc: "経済的困窮被告人" }
      ],
      family: [
        { word: "egregious", desc: "ひどい（e+grex：群れを離れた）" },
        { word: "exigent", desc: "緊急の（ex+egere）" }
      ],
      compounds: [
        { phrase: "indigent population", desc: "貧困層" },
        { phrase: "indigent care", desc: "貧困者向け医療" }
      ]
    },
    "ingenuous": {
      origin: "ラテン語 ingenuus（自由民として生まれた・純粋な）から。in-（中に）＋gignere（生む）。「純粋に生まれた・生来の」が原義。純真で疑いを持たない天真爛漫な性質を指す。ingenuity（独創性）や disingenuous（不誠実な）とは別語。",
      derivatives: [
        { word: "ingenuously", desc: "純真に" },
        { word: "ingenuousness", desc: "無邪気・純真さ" }
      ],
      family: [
        { word: "disingenuous", desc: "不誠実な（否定形）" },
        { word: "ingenious", desc: "独創的な（語根は別：ingenium）" },
        { word: "genuine", desc: "本物の（同語根）" }
      ],
      compounds: [
        { phrase: "ingenuous smile", desc: "無邪気な笑顔" },
        { phrase: "ingenuous question", desc: "素直な質問" }
      ]
    },
    "latent": {
      origin: "ラテン語 latere（隠れる・見えない）の現在分詞 latens から。「潜んでいる」が原義。現れていないが内在している状態を表す形容詞。医学では潜伏感染、心理学では潜在的な能力・欲求、物理学では潜熱などを指す。",
      derivatives: [
        { word: "latency", desc: "潜伏期間・遅延時間" },
        { word: "latently", desc: "潜在的に" }
      ],
      family: [
        { word: "latent heat", desc: "潜熱（phase 変化に使われる熱）" },
        { word: "latent fingerprint", desc: "潜在指紋" }
      ],
      compounds: [
        { phrase: "latent talent", desc: "潜在的才能" },
        { phrase: "latent variable", desc: "潜在変数（統計学）" }
      ]
    },
    "laudable": {
      origin: "ラテン語 laudabilis（誉れある）から。laus（賞賛・栄光）＋-abilis（できる・値する）。「賞賛に値する」が原義。賞賛・称賛を受けるにふさわしい行為・性質・目的を指す形容詞。laudatory（称賛的な）と語根を共有する。",
      derivatives: [
        { word: "laudably", desc: "称賛に値するほど" },
        { word: "laudability", desc: "称賛に値すること" }
      ],
      family: [
        { word: "laud", desc: "称賛する（動詞）" },
        { word: "laudatory", desc: "称賛の・絶賛の" },
        { word: "plaudit", desc: "喝采・絶賛（plaudere と混同しないよう）" }
      ],
      compounds: [
        { phrase: "laudable effort", desc: "称賛に値する努力" },
        { phrase: "laudable goal", desc: "立派な目標" }
      ]
    },
    "munificent": {
      origin: "ラテン語 munificus（贈り物をする・気前の良い）から。munus（贈り物・義務・公務）＋facere（作る）。「贈り物を作る人」が原義。極めて寛大で惜しみなく与える性質を表す。philanthropy（慈善活動）の精神を表す語。",
      derivatives: [
        { word: "munificence", desc: "気前の良さ・寛大さ" },
        { word: "munificently", desc: "気前よく" }
      ],
      family: [
        { word: "remunerate", desc: "報酬を支払う（re+munus）" },
        { word: "immunity", desc: "免疫（im+munus：義務を免除）" },
        { word: "magnificent", desc: "壮大な（magnus+facere）" }
      ],
      compounds: [
        { phrase: "munificent donation", desc: "気前の良い寄付" },
        { phrase: "munificent patron", desc: "惜しみない後援者" }
      ]
    },
    "phlegmatic": {
      origin: "ギリシャ語 phlegmatikos（粘液質の）から。phlegma（粘液・痰）に由来し、phlegein（燃やす）が語根。中世医学の四体液説で「粘液（phlegm）」が多い気質を「冷静・鈍重」と関連付けたことに由来。",
      derivatives: [
        { word: "phlegmatically", desc: "冷静に・無表情に" }
      ],
      family: [
        { word: "phlegm", desc: "痰・粘液" },
        { word: "choleric", desc: "怒りっぽい（胆汁質）" },
        { word: "sanguine", desc: "楽観的な（血液質）" }
      ],
      compounds: [
        { phrase: "phlegmatic temperament", desc: "粘液質の気質" },
        { phrase: "phlegmatic response", desc: "冷静な反応" }
      ]
    },
    "reverence": {
      origin: "ラテン語 reverentia（敬意・敬畏）から。revereri（恐れ敬う）に由来し、re-（再び・強意）＋vereri（恐れる・敬う）。「深く敬い恐れる」が原義。深い尊敬・畏敬の念を指す語。宗教的な崇敬にも使われる。",
      derivatives: [
        { word: "revere", desc: "深く尊敬する（動詞）" },
        { word: "reverent", desc: "畏敬の念を持つ（形容詞）" },
        { word: "irreverent", desc: "不敬な（否定形）" }
      ],
      family: [
        { word: "revere", desc: "崇拝する" },
        { word: "venerate", desc: "あがめる（類義語）" }
      ],
      compounds: [
        { phrase: "hold in reverence", desc: "畏敬する" },
        { phrase: "deep reverence", desc: "深い敬意" }
      ]
    },
    "tortuous": {
      origin: "ラテン語 tortuosus（ねじれた・曲がった）から。torquere（ねじる）の過去分詞 tortus ＋-osus（〜に満ちた）。「ねじれに満ちた」が原義。複雑に曲がりくねった道や、複雑難解な思考・議論を表す語。「拷問（torture）」とも語根を共有。",
      derivatives: [
        { word: "tortuously", desc: "曲がりくねって" },
        { word: "tortuousness", desc: "複雑さ・曲がりくねり" }
      ],
      family: [
        { word: "torture", desc: "拷問（torquere から）" },
        { word: "contort", desc: "ねじ曲げる（con+torquere）" },
        { word: "extort", desc: "強奪する（ex+torquere）" }
      ],
      compounds: [
        { phrase: "tortuous path", desc: "曲がりくねった道" },
        { phrase: "tortuous argument", desc: "複雑難解な議論" }
      ]
    },
    "vituperate": {
      origin: "ラテン語 vituperare（非難する・けなす）から。vitium（欠点・悪徳）＋parare（準備する・用意する）。「欠点を用意して批判する」が原義。激しく批判・罵倒すること。verbal abuse（言葉による虐待）に相当する激しい非難。",
      derivatives: [
        { word: "vituperation", desc: "激しい非難・罵倒" },
        { word: "vituperative", desc: "罵倒的な・辛辣な" }
      ],
      family: [
        { word: "vice", desc: "悪徳（vitium から）" },
        { word: "vitiate", desc: "損なう・無効にする（vitium から）" }
      ],
      compounds: [
        { phrase: "vituperate against", desc: "〜を激しく非難する" },
        { phrase: "public vituperation", desc: "公衆への罵倒" }
      ]
    },
    "complementary": {
      origin: "ラテン語 complementum（補完するもの）から。complere（満たす・完成する）に由来し、com-（完全に）＋plere（満たす）。「互いの欠けた部分を満たし合う」関係を指す。complimentary（お世辞的な・無料の）とは別語。",
      derivatives: [
        { word: "complement", desc: "補完物・補体（名詞）" },
        { word: "complementarity", desc: "相補性" }
      ],
      family: [
        { word: "complete", desc: "完全な（com+plere）" },
        { word: "replete", desc: "満腹の（re+plere）" },
        { word: "deplete", desc: "枯渇させる（de+plere）" }
      ],
      compounds: [
        { phrase: "complementary colors", desc: "補色" },
        { phrase: "complementary medicine", desc: "補完医療" }
      ]
    },
    "computation": {
      origin: "ラテン語 computare（計算する・考慮する）から。com-（共に）＋putare（考える・清算する）。「共に考える・合わせて計算する」が原義。数学的・アルゴリズム的な計算処理を指す語で、コンピュータサイエンスの中核概念。",
      derivatives: [
        { word: "compute", desc: "計算する（動詞）" },
        { word: "computational", desc: "計算の" },
        { word: "computer", desc: "コンピュータ（計算する機械）" }
      ],
      family: [
        { word: "dispute", desc: "論争する（dis+putare）" },
        { word: "impute", desc: "帰する・責任を負わせる" },
        { word: "putative", desc: "推定の・推定上の" }
      ],
      compounds: [
        { phrase: "quantum computation", desc: "量子計算" },
        { phrase: "parallel computation", desc: "並列計算" }
      ]
    },
    "encapsulate": {
      origin: "ラテン語 capsula（小箱・鞘）から。capere（つかむ・収める）の指小形。en-（中に）＋capsule（カプセル）に動詞化 -ate が付いた形。「カプセルに収める」が原義。情報を簡潔にまとめること、またはオブジェクト指向のカプセル化を指す。",
      derivatives: [
        { word: "encapsulation", desc: "カプセル化・要約" }
      ],
      family: [
        { word: "capsule", desc: "カプセル" },
        { word: "capture", desc: "捕らえる（capere から）" },
        { word: "capable", desc: "能力のある（capere から）" }
      ],
      compounds: [
        { phrase: "encapsulate the idea", desc: "アイデアをまとめる" },
        { phrase: "data encapsulation", desc: "データのカプセル化（OOP）" }
      ]
    },
    "scrutiny": {
      origin: "ラテン語 scrutinium（くず置き場の調査・詳細な調査）から。scrutari（くまなく調べる）に由来し、scruta（くず・ぼろ布）が語根。「ぼろ布の中から選別する」が原義。厳密で詳細な検討・監視を指す語。",
      derivatives: [
        { word: "scrutinize", desc: "精査する（動詞）" },
        { word: "scrutinized", desc: "精査された" }
      ],
      family: [
        { word: "inscrutable", desc: "不可解な（in+scrutari）" },
        { word: "exquisite", desc: "精巧な（ex+quaerere：よく探し求めた）" }
      ],
      compounds: [
        { phrase: "under scrutiny", desc: "精査を受けて" },
        { phrase: "public scrutiny", desc: "公衆の注目・批判" }
      ]
    },
    "variability": {
      origin: "ラテン語 variare（変化する・異なる）から。varius（様々な・雑多な）に由来。variable（変化しやすい）＋-ity（名詞化）。変化しやすさ・ばらつきの程度を表す語。統計学・科学・工学で重要な概念。",
      derivatives: [
        { word: "variable", desc: "変数・変化しやすい" },
        { word: "variation", desc: "変動・変奏" },
        { word: "variably", desc: "変化して" }
      ],
      family: [
        { word: "vary", desc: "変化する" },
        { word: "variety", desc: "多様性" },
        { word: "various", desc: "様々な" }
      ],
      compounds: [
        { phrase: "genetic variability", desc: "遺伝的変異性" },
        { phrase: "natural variability", desc: "自然変動性" }
      ]
    },
    "annexation": {
      origin: "ラテン語 annexare（結びつける）から。ad-（〜に）＋nectere（結ぶ）の過去分詞 nexus から。「結びつけて取り込む」が原義。国家が軍事力または政治的行動によって他の領土を自国に編入すること。",
      derivatives: [
        { word: "annex", desc: "併合する・別館" },
        { word: "annexed", desc: "併合された" }
      ],
      family: [
        { word: "connect", desc: "接続する（con+nectere）" },
        { word: "nexus", desc: "連結・中心点" },
        { word: "annex", desc: "別館・附属建物" }
      ],
      compounds: [
        { phrase: "territorial annexation", desc: "領土併合" },
        { phrase: "illegal annexation", desc: "違法な領土併合" }
      ]
    },
    "bicameral": {
      origin: "ラテン語 bi-（二つ）＋camera（部屋・議院）から。camera はギリシャ語 kamara（丸天井の部屋）に由来。「二つの部屋」が原義。上院（元老院）と下院（衆議院）の二つの院からなる議会制度を指す。",
      derivatives: [
        { word: "bicameralism", desc: "二院制（主義）" },
        { word: "bicameral legislature", desc: "二院制議会" }
      ],
      family: [
        { word: "unicameral", desc: "一院制の（uni+camera）" },
        { word: "camera", desc: "カメラ（暗い部屋が原義）" },
        { word: "chamber", desc: "議院・部屋（camera から）" }
      ],
      compounds: [
        { phrase: "bicameral system", desc: "二院制" },
        { phrase: "bicameral parliament", desc: "二院制議会" }
      ]
    },
    "bureaucrat": {
      origin: "フランス語 bureau（机・事務所）＋ギリシャ語 kratos（力・支配）。「事務所の力を持つ人」が原義。bureau はゲルマン語 bure（粗い布：机の覆い）から。ウェーバーが「官僚制（bureaucracy）」を社会学的に分析したことで現代的意味が確立。",
      derivatives: [
        { word: "bureaucracy", desc: "官僚制・官僚機構" },
        { word: "bureaucratic", desc: "官僚的な" }
      ],
      family: [
        { word: "bureau", desc: "事務局・タンス（フランス語）" },
        { word: "democracy", desc: "民主主義（demos+kratos）" },
        { word: "autocrat", desc: "独裁者（autos+kratos）" }
      ],
      compounds: [
        { phrase: "government bureaucrat", desc: "政府官僚" },
        { phrase: "top bureaucrat", desc: "高級官僚" }
      ]
    },
    "caucus": {
      origin: "語源不明・諸説あり。アルゴンキン語 caucauasu（助言者）説、ラテン語 caucus（飲み物の器）説、船大工の会合（caulkers' meeting）説などがある。18世紀米国の政治語として確立。政党内の非公式な討議集会・選出集会を指す。",
      derivatives: [
        { word: "caucuses", desc: "党員集会（複数）" },
        { word: "Iowa caucus", desc: "アイオワ党員集会（大統領予備選）" }
      ],
      family: [
        { word: "primary", desc: "予備選挙（caucus と並ぶ選出方式）" }
      ],
      compounds: [
        { phrase: "presidential caucus", desc: "大統領候補選出のための党員集会" },
        { phrase: "congressional caucus", desc: "議会内の議員グループ" }
      ]
    },
    "coup": {
      origin: "フランス語 coup d'état（国家への一撃）から。coup（打撃・一撃）はラテン語 colpus（打撃）、ギリシャ語 kolaphos（平手打ち）に由来。暴力的・非合法的な権力奪取。「クーデター」はフランス語 coup d'état の略称として世界に広まった。",
      derivatives: [
        { word: "coup d'état", desc: "クーデター（フランス語）" },
        { word: "counter-coup", desc: "反クーデター" }
      ],
      family: [
        { word: "coupon", desc: "割引券（coup+on：切り取った一撃）" }
      ],
      compounds: [
        { phrase: "military coup", desc: "軍事クーデター" },
        { phrase: "palace coup", desc: "宮廷クーデター" }
      ]
    },
    "curfew": {
      origin: "古フランス語 couvrefeu（火を覆え）から。couvrir（覆う）＋feu（火）。中世ヨーロッパで夜に鐘を鳴らして市民に炉の火を消し家の中に入るよう命じた慣行に由来。現代では「外出禁止令」を指す。",
      derivatives: [
        { word: "curfew hours", desc: "外出禁止時間" },
        { word: "impose a curfew", desc: "外出禁止令を布告する" }
      ],
      family: [
        { word: "cover", desc: "覆う（couvrir と語根対応）" },
        { word: "focus", desc: "焦点・炉（feu と語根対応）" }
      ],
      compounds: [
        { phrase: "nighttime curfew", desc: "夜間外出禁止" },
        { phrase: "curfew violation", desc: "外出禁止令違反" }
      ]
    },
    "defection": {
      origin: "ラテン語 defectio（失敗・離脱・脱走）から。de-（離れて）＋facere（する）の名詞形。「離れていくこと」が原義。組織・国家・政党などへの忠誠を捨て、敵側や別の陣営に移ること。冷戦時代のスパイ・外交官の亡命に多く使われた語。",
      derivatives: [
        { word: "defect", desc: "欠陥・亡命する（動詞）" },
        { word: "defector", desc: "脱走者・亡命者" }
      ],
      family: [
        { word: "affect", desc: "影響する（ad+facere）" },
        { word: "effect", desc: "効果（ex+facere）" },
        { word: "infect", desc: "感染させる（in+facere）" }
      ],
      compounds: [
        { phrase: "political defection", desc: "政治的離反" },
        { phrase: "mass defection", desc: "大量離脱" }
      ]
    },
    "devolution": {
      origin: "ラテン語 devolvere（転がり落ちる）から。de-（下へ）＋volvere（転がる）。「（責任・権限が）上から下へ転がり落ちる」が原義。中央政府から地方・自治体への権限委譲を指す政治用語。スコットランド・ウェールズへの権限移譲で知られる。",
      derivatives: [
        { word: "devolve", desc: "委譲する（動詞）" },
        { word: "devolved", desc: "委譲された" }
      ],
      family: [
        { word: "evolve", desc: "進化する（e+volvere）" },
        { word: "revolve", desc: "回転する（re+volvere）" },
        { word: "involve", desc: "巻き込む（in+volvere）" }
      ],
      compounds: [
        { phrase: "Scottish devolution", desc: "スコットランドへの権限委譲" },
        { phrase: "fiscal devolution", desc: "財政的権限委譲" }
      ]
    },
    "enfranchise": {
      origin: "古フランス語 enfranchir（自由にする・特権を与える）から。en-（〜にする）＋franc（自由な・フランク族の）。「自由な市民にする」が原義。選挙権・参政権を付与すること。歴史的には奴隷・女性・低所得者への参政権拡大運動で重要な語。",
      derivatives: [
        { word: "enfranchisement", desc: "参政権付与" },
        { word: "disenfranchise", desc: "参政権を剥奪する" }
      ],
      family: [
        { word: "franchise", desc: "フランチャイズ・参政権（franc から）" },
        { word: "frank", desc: "率直な（Franks＝自由な民族）" },
        { word: "French", desc: "フランスの（Franks から）" }
      ],
      compounds: [
        { phrase: "enfranchise voters", desc: "有権者に選挙権を与える" },
        { phrase: "newly enfranchised", desc: "新たに参政権を得た" }
      ]
    },
    "faction": {
      origin: "ラテン語 factio（行動する集団・党派）から。facere（する・作る）の名詞形。「行動を共にする集団」が原義。政党内の対立グループや、共通の利益・イデオロギーで結束した政治的下位集団を指す。古代ローマの戦車競走チームの名称でもあった。",
      derivatives: [
        { word: "factional", desc: "派閥の・党派的な" },
        { word: "factionalism", desc: "派閥主義" }
      ],
      family: [
        { word: "faction", desc: "フィクションと事実を混ぜた作品（fact+fiction）" },
        { word: "fact", desc: "事実（factum：された事）" },
        { word: "factory", desc: "工場（facere から）" }
      ],
      compounds: [
        { phrase: "rival factions", desc: "対立派閥" },
        { phrase: "faction warfare", desc: "派閥抗争" }
      ]
    },
    "repression": {
      origin: "ラテン語 reprimere（押し戻す・抑制する）から。re-（後ろへ）＋premere（押す）。「押し返す・抑え込む」が原義。政治的弾圧・抑圧を指すほか、精神分析ではフロイトが「不快な感情や記憶を無意識に押し込む防衛機制」として体系化した。",
      derivatives: [
        { word: "repress", desc: "弾圧する・抑圧する（動詞）" },
        { word: "repressive", desc: "抑圧的な" }
      ],
      family: [
        { word: "press", desc: "押す・新聞" },
        { word: "compress", desc: "圧縮する（com+premere）" },
        { word: "suppress", desc: "抑圧する（sub+premere）" }
      ],
      compounds: [
        { phrase: "political repression", desc: "政治的弾圧" },
        { phrase: "state repression", desc: "国家による弾圧" }
      ]
    },
    "unicameral": {
      origin: "ラテン語 uni-（一つ）＋camera（部屋・議院）から。「一つの部屋（議院）」が原義。議会が一つの院のみで構成される政治制度。デンマーク・スウェーデン・ニュージーランドなどが一院制を採用している。",
      derivatives: [
        { word: "unicameralism", desc: "一院制主義" },
        { word: "unicameral parliament", desc: "一院制議会" }
      ],
      family: [
        { word: "bicameral", desc: "二院制の（bi+camera）" },
        { word: "unicorn", desc: "一角獣（uni+cornu）" },
        { word: "uniform", desc: "制服・均一の（uni+forma）" }
      ],
      compounds: [
        { phrase: "unicameral system", desc: "一院制" },
        { phrase: "unicameral legislature", desc: "一院制立法府" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch J (GRE/advanced + academic + politics from data-mixed-53)');
