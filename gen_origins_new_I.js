/**
 * gen_origins_new_I.js — Medical (17) + Lifestyle (18) from data-mixed-53
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "ailment": {
      origin: "古英語 eglan（苦しめる・痛める）から。ale（病・苦しみ）に由来し、-ment（名詞接尾辞）が付いた形。「苦しめるもの」が原義。慢性的な軽い病気や身体の不調を指す語で、深刻な疾患よりは軽微な症状に使われることが多い。",
      derivatives: [
        { word: "ailments", desc: "病気・不調（複数）" }
      ],
      family: [
        { word: "ail", desc: "〜を悩ます・体の具合が悪い" },
        { word: "illness", desc: "病気（類義語）" }
      ],
      compounds: [
        { phrase: "common ailment", desc: "よくある病気" },
        { phrase: "minor ailment", desc: "軽い体の不調" }
      ]
    },
    "allergen": {
      origin: "ドイツ語 Allergen（アレルゲン）から。Clemens von Pirquet が1906年に造語した Allergie（アレルギー）＋-gen（生む・引き起こす）。Allergie 自体はギリシャ語 allos（異なる）＋ergon（働き・反応）から。免疫系が過剰反応を起こす物質。",
      derivatives: [
        { word: "allergenic", desc: "アレルギーを引き起こす" },
        { word: "major allergen", desc: "主要アレルゲン" }
      ],
      family: [
        { word: "allergy", desc: "アレルギー" },
        { word: "allergic", desc: "アレルギーの" },
        { word: "antigen", desc: "抗原（anti+gen）" }
      ],
      compounds: [
        { phrase: "food allergen", desc: "食物アレルゲン" },
        { phrase: "allergen labeling", desc: "アレルゲン表示" }
      ]
    },
    "analgesia": {
      origin: "ギリシャ語 analgesia（痛みがない状態）から。an-（否定）＋algos（痛み）＋-ia（状態）。「痛みがない」が原義。意識があり反応できる状態で痛みだけが感じられなくなること。無痛状態・鎮痛を医学的に表す語。",
      derivatives: [
        { word: "analgesic", desc: "鎮痛薬・鎮痛の（形容詞）" },
        { word: "analgize", desc: "鎮痛する" }
      ],
      family: [
        { word: "nostalgia", desc: "郷愁（nostos+algos：故郷への痛み）" },
        { word: "analogue", desc: "類似物（an+logos）" }
      ],
      compounds: [
        { phrase: "local analgesia", desc: "局所麻酔による鎮痛" },
        { phrase: "patient-controlled analgesia", desc: "患者自己調節鎮痛" }
      ]
    },
    "antipsychotic": {
      origin: "英語 anti-（抗・反対する）＋psychotic（精神病の）から。psychotic はギリシャ語 psyche（心・魂）＋-otic（病的な）に由来。統合失調症・双極性障害などの精神病症状を軽減する薬物を指す。1950年代にクロルプロマジンの発見とともに確立した用語。",
      derivatives: [
        { word: "antipsychotics", desc: "抗精神病薬（複数）" },
        { word: "atypical antipsychotic", desc: "非定型抗精神病薬" }
      ],
      family: [
        { word: "psychosis", desc: "精神病" },
        { word: "psyche", desc: "心・魂" },
        { word: "antibiotic", desc: "抗生物質（同パターン）" }
      ],
      compounds: [
        { phrase: "antipsychotic medication", desc: "抗精神病薬治療" },
        { phrase: "first-generation antipsychotic", desc: "第一世代抗精神病薬" }
      ]
    },
    "contagion": {
      origin: "ラテン語 contagio（接触・汚染・伝染）から。con-（共に）＋tangere（触れる）。「共に触れることによる汚染」が原義。接触によって病気や悪影響が広がること。金融危機の「伝染」など比喩的にも使われる。",
      derivatives: [
        { word: "contagious", desc: "伝染性の・感染力のある" },
        { word: "contagiously", desc: "伝染的に" }
      ],
      family: [
        { word: "contact", desc: "接触（con+tangere）" },
        { word: "tangible", desc: "有形の（tangere から）" },
        { word: "contaminate", desc: "汚染する（contagion と語根対応）" }
      ],
      compounds: [
        { phrase: "financial contagion", desc: "金融伝染（危機の波及）" },
        { phrase: "social contagion", desc: "社会的感染（行動の伝播）" }
      ]
    },
    "cortisol": {
      origin: "ラテン語 cortex（樹皮・外皮）から派生した cortis（副腎皮質）に -ol（アルコール・ステロールの化学接尾辞）が付いた語。副腎の外層（皮質）から分泌されるステロイドホルモン。ストレスへの生体反応で産生が増加する「ストレスホルモン」として知られる。",
      derivatives: [
        { word: "cortisone", desc: "コルチゾン（関連ホルモン）" },
        { word: "hypercortisolism", desc: "高コルチゾール血症" }
      ],
      family: [
        { word: "corticosteroid", desc: "副腎皮質ステロイド" },
        { word: "cortex", desc: "皮質・樹皮" }
      ],
      compounds: [
        { phrase: "cortisol levels", desc: "コルチゾール値" },
        { phrase: "cortisol response", desc: "コルチゾール反応" }
      ]
    },
    "delirium": {
      origin: "ラテン語 delirium（錯乱・狂気）から。de-（離れて）＋lira（畝・溝）＋-ium。「畝から外れる」が原義で「正常な思考から外れた状態」を意味した。急性の意識障害で見当識喪失・幻覚・興奮を特徴とする医学的状態。",
      derivatives: [
        { word: "delirious", desc: "せん妄の・狂喜した" },
        { word: "deliriously", desc: "狂喜して" }
      ],
      family: [
        { word: "delirious", desc: "せん妄状態の" },
        { word: "lira", desc: "畝・溝（農業用語）" }
      ],
      compounds: [
        { phrase: "ICU delirium", desc: "ICUせん妄" },
        { phrase: "delirium tremens", desc: "振戦せん妄（アルコール離脱症状）" }
      ]
    },
    "diuretic": {
      origin: "ギリシャ語 diouretikos（尿を通す）から。dia-（通して・完全に）＋ouron（尿）＋-ikos（〜の）。「尿を通す」が原義。腎臓に作用して尿の産生を促進し、体液を排出させる薬物または物質を指す。",
      derivatives: [
        { word: "diuretics", desc: "利尿薬（複数）" },
        { word: "diuresis", desc: "利尿・尿量増加" }
      ],
      family: [
        { word: "urine", desc: "尿（ouron と語根対応）" },
        { word: "urology", desc: "泌尿器科学" },
        { word: "ureter", desc: "尿管" }
      ],
      compounds: [
        { phrase: "loop diuretic", desc: "ループ利尿薬" },
        { phrase: "thiazide diuretic", desc: "サイアザイド系利尿薬" }
      ]
    },
    "inhibitor": {
      origin: "ラテン語 inhibere（抑える・制止する）から。in-（中に・対して）＋habere（持つ・保つ）。「保持して妨げる」が原義。酵素・受容体・化学反応などを特異的に阻害する物質。医薬品開発で重要な概念。",
      derivatives: [
        { word: "inhibit", desc: "阻害する・抑制する" },
        { word: "inhibition", desc: "阻害・抑制・心理的抑圧" },
        { word: "inhibitory", desc: "阻害性の" }
      ],
      family: [
        { word: "exhibit", desc: "展示する（ex+habere）" },
        { word: "prohibit", desc: "禁止する（pro+habere）" },
        { word: "habit", desc: "習慣（habere から）" }
      ],
      compounds: [
        { phrase: "enzyme inhibitor", desc: "酵素阻害薬" },
        { phrase: "ACE inhibitor", desc: "ACE阻害薬（降圧薬）" }
      ]
    },
    "mitochondria": {
      origin: "ギリシャ語 mitos（糸）＋chondrion（粒・顆粒）から。Carl Benda が1898年に命名。「糸状または粒状の構造物」が原義。真核細胞内でATPを産生するエネルギー工場。自身のDNAを持ち、細菌から取り込まれた「細胞内共生」が起源とされる。",
      derivatives: [
        { word: "mitochondrion", desc: "ミトコンドリア（単数形）" },
        { word: "mitochondrial", desc: "ミトコンドリアの" }
      ],
      family: [
        { word: "chondrocyte", desc: "軟骨細胞（chondros＝軟骨）" },
        { word: "mitosis", desc: "有糸分裂（mitos から）" }
      ],
      compounds: [
        { phrase: "mitochondrial DNA", desc: "ミトコンドリアDNA" },
        { phrase: "mitochondrial disease", desc: "ミトコンドリア病" }
      ]
    },
    "opioid": {
      origin: "ギリシャ語 opion（けしの汁）から。opium（アヘン）に接尾辞 -oid（〜に似た）が付いた語。アヘンに似た鎮痛作用を持つ物質の総称。天然（モルヒネ）、半合成（オキシコドン）、合成（フェンタニル）を含む。",
      derivatives: [
        { word: "opioids", desc: "オピオイド類（複数）" },
        { word: "opioid receptor", desc: "オピオイド受容体" }
      ],
      family: [
        { word: "opium", desc: "アヘン" },
        { word: "endorphin", desc: "エンドルフィン（内因性オピオイド）" },
        { word: "morphine", desc: "モルヒネ（天然オピオイド）" }
      ],
      compounds: [
        { phrase: "opioid crisis", desc: "オピオイド危機" },
        { phrase: "opioid addiction", desc: "オピオイド依存症" }
      ]
    },
    "pediatrics": {
      origin: "ギリシャ語 pais（子供・少年）の属格 paidos ＋ iatros（医師）から。「子供を診る医師」が原義。子供の医療・発達・疾患を専門とする医学の一分野。pediatrician（小児科医）と区別して学問分野を指す語として使われる。",
      derivatives: [
        { word: "pediatrician", desc: "小児科医" },
        { word: "pediatric", desc: "小児科の（形容詞）" }
      ],
      family: [
        { word: "encyclopaedia", desc: "百科全書（pais＝子供の教育）" },
        { word: "orthopedics", desc: "整形外科（ortho+pais）" },
        { word: "iatrogenic", desc: "医原性の（iatros から）" }
      ],
      compounds: [
        { phrase: "pediatric surgery", desc: "小児外科" },
        { phrase: "pediatric ward", desc: "小児病棟" }
      ]
    },
    "sedative": {
      origin: "ラテン語 sedare（静める・落ち着かせる）から。sedere（座る）の使役形で「座らせる・静める」が原義。-ive（〜の性質の）接尾辞が付いた形。興奮・不安・痛みを鎮める鎮静・催眠作用を持つ薬物。",
      derivatives: [
        { word: "sedate", desc: "鎮静させる（動詞）・落ち着いた" },
        { word: "sedation", desc: "鎮静" }
      ],
      family: [
        { word: "sediment", desc: "沈殿物（sedere＝座る・沈む）" },
        { word: "session", desc: "会議（sedere から）" },
        { word: "president", desc: "大統領（pre+sedere）" }
      ],
      compounds: [
        { phrase: "sedative effect", desc: "鎮静効果" },
        { phrase: "sedative hypnotic", desc: "鎮静催眠薬" }
      ]
    },
    "seizure": {
      origin: "古フランス語 seisir（つかむ・占有する）から。ゲルマン語 *satjan（置く・固定する）に由来。「突然つかまれる」が原義。医学では脳の異常な電気活動による突発的な発作を指す。法律では「差し押さえ・没収」の意味もある。",
      derivatives: [
        { word: "seize", desc: "つかむ・発作を起こす（動詞）" },
        { word: "seizure disorder", desc: "発作性疾患" }
      ],
      family: [
        { word: "seize", desc: "つかむ" },
        { word: "siege", desc: "包囲（seisir と同語根）" }
      ],
      compounds: [
        { phrase: "epileptic seizure", desc: "てんかん発作" },
        { phrase: "seizure threshold", desc: "発作閾値" }
      ]
    },
    "serotonin": {
      origin: "ラテン語 serum（血清・漿液）＋ギリシャ語 tonos（緊張・音調）から。1948年に Maurice Rapport らが血清中の血管収縮物質を発見し「血清の緊張物質」として命名。脳内では気分・睡眠・食欲を調節する神経伝達物質として働く。",
      derivatives: [
        { word: "serotonergic", desc: "セロトニン作動性の" },
        { word: "SSRI", desc: "選択的セロトニン再取り込み阻害薬" }
      ],
      family: [
        { word: "serum", desc: "血清" },
        { word: "tone", desc: "緊張・音調（tonos から）" },
        { word: "melatonin", desc: "メラトニン（類似命名の神経伝達物質）" }
      ],
      compounds: [
        { phrase: "serotonin syndrome", desc: "セロトニン症候群" },
        { phrase: "serotonin pathway", desc: "セロトニン経路" }
      ]
    },
    "therapist": {
      origin: "ギリシャ語 therapeuein（世話をする・治療する）から。therapia（世話・治療）に -ist（専門家）が付いた形。「患者の世話をする人」が原義。心理療法士・理学療法士・作業療法士など各種の専門的治療を行う人の総称。",
      derivatives: [
        { word: "therapy", desc: "療法・治療" },
        { word: "therapeutic", desc: "治療的な・療法の" }
      ],
      family: [
        { word: "therapy", desc: "療法" },
        { word: "therapeutics", desc: "治療学" },
        { word: "physiotherapist", desc: "理学療法士" }
      ],
      compounds: [
        { phrase: "physical therapist", desc: "理学療法士" },
        { phrase: "occupational therapist", desc: "作業療法士" }
      ]
    },
    "vitals": {
      origin: "ラテン語 vitalis（命に関わる・生命の）から。vita（命・生命）に由来し、vivere（生きる）が語根。「生命に関わる（指標）」が原義。医療では体温・脈拍・血圧・呼吸数の4つの生命維持指標（バイタルサイン）を指す。",
      derivatives: [
        { word: "vital signs", desc: "バイタルサイン" },
        { word: "vital", desc: "生命の・不可欠な（形容詞）" }
      ],
      family: [
        { word: "vital", desc: "生命の・重要な" },
        { word: "vitamin", desc: "ビタミン（vita+amine）" },
        { word: "vivid", desc: "鮮やかな（vivere から）" }
      ],
      compounds: [
        { phrase: "check vitals", desc: "バイタルを測る" },
        { phrase: "vital statistics", desc: "人口統計・バイタル統計" }
      ]
    },
    "bespoke": {
      origin: "古英語 bespeaken（前もって話す・注文する）から。be-（完全に）＋speak（話す）の過去分詞。「すでに約束・注文された」が原義。英国の仕立て語として定着し、顧客の体型・好みに合わせて作られたオーダーメイドの衣服や製品を指す。",
      derivatives: [
        { word: "bespoke tailoring", desc: "ビスポークテーラリング" },
        { word: "bespoke software", desc: "カスタムソフトウェア" }
      ],
      family: [
        { word: "speak", desc: "話す" },
        { word: "bespeak", desc: "示す・前もって約束する" },
        { word: "custom", desc: "カスタム（類義語）" }
      ],
      compounds: [
        { phrase: "bespoke suit", desc: "オーダーメイドのスーツ" },
        { phrase: "bespoke solution", desc: "カスタム解決策" }
      ]
    },
    "boutique": {
      origin: "フランス語 boutique（小さな店）から。古フランス語 botica に由来し、ギリシャ語 apotheke（保管場所・倉庫）が語根。apotheke はラテン語を経てイタリア語 bottega（工房）、英語 apothecary（薬剤師）とも語源が同じ。",
      derivatives: [
        { word: "boutique hotel", desc: "ブティックホテル（個性的な小規模ホテル）" },
        { word: "boutique firm", desc: "専門性の高い小規模会社" }
      ],
      family: [
        { word: "apothecary", desc: "薬剤師（apotheke から）" },
        { word: "bodega", desc: "ワインセラー・小食料品店（スペイン語形）" },
        { word: "budget", desc: "予算（bottle/bag と同語根説）" }
      ],
      compounds: [
        { phrase: "luxury boutique", desc: "高級ブティック" },
        { phrase: "boutique investment bank", desc: "ブティック系投資銀行" }
      ]
    },
    "charisma": {
      origin: "ギリシャ語 kharisma（神の恵み・特別な贈り物）から。kharizesthai（好意・恵みを与える）、kharis（魅力・好意）に由来。キリスト教神学では聖霊の特別な賜物を指した。社会学者 Max Weber が「カリスマ的権威」概念として体系化した。",
      derivatives: [
        { word: "charismatic", desc: "カリスマ的な・魅力的な" },
        { word: "charism", desc: "カリスマ（神学用語）" }
      ],
      family: [
        { word: "Eucharist", desc: "聖体拝領（eu+kharis：良き恵み）" },
        { word: "grace", desc: "恩寵・優雅さ（kharis と意味対応）" }
      ],
      compounds: [
        { phrase: "natural charisma", desc: "天然のカリスマ性" },
        { phrase: "charismatic leader", desc: "カリスマ的指導者" }
      ]
    },
    "clutter": {
      origin: "英語 clot（塊）から発展した語。16世紀に「散らかり・混乱した状態」の意味で使われ始めた。clatter（がたがた音がする）と語源的に関連するとも。不要なものが積み重なった混乱した状態・物の散らかりを指す。",
      derivatives: [
        { word: "cluttered", desc: "散らかった・物で溢れた" },
        { word: "declutter", desc: "片付ける・整理する" }
      ],
      family: [
        { word: "clot", desc: "塊・凝固する" },
        { word: "clatter", desc: "がたがたする（語根近接）" }
      ],
      compounds: [
        { phrase: "clutter-free", desc: "整理整頓された" },
        { phrase: "mental clutter", desc: "頭の中の雑念" }
      ]
    },
    "detox": {
      origin: "英語 de-（除去）＋toxin（毒素）の短縮形。toxin はギリシャ語 toxikon（毒矢の毒）から。医学では薬物・アルコール依存症の解毒治療を指す。一般的には身体から有害物質を排出するとされる生活習慣や食事法に使われる現代語。",
      derivatives: [
        { word: "detoxify", desc: "解毒する（動詞）" },
        { word: "detoxification", desc: "解毒・デトックス" },
        { word: "digital detox", desc: "デジタルデトックス" }
      ],
      family: [
        { word: "toxic", desc: "有毒な" },
        { word: "toxin", desc: "毒素" },
        { word: "intoxicate", desc: "酔わせる・中毒にする" }
      ],
      compounds: [
        { phrase: "detox diet", desc: "デトックスダイエット" },
        { phrase: "alcohol detox", desc: "アルコール解毒" }
      ]
    },
    "etiquette": {
      origin: "フランス語 étiquette（小札・ラベル）から。オランダ語 stekett（棒・杭）に由来するとも。ヴェルサイユ宮廷では庭園での礼儀作法を記した「小札」が配られたことに由来するとされる。社会的な礼儀・行動規範を指す語として17世紀以降定着。",
      derivatives: [
        { word: "proper etiquette", desc: "正しいエチケット" },
        { word: "netiquette", desc: "ネットエチケット（net+etiquette）" }
      ],
      family: [
        { word: "ticket", desc: "切符（étiquette と同語根）" },
        { word: "label", desc: "ラベル（類義語）" }
      ],
      compounds: [
        { phrase: "business etiquette", desc: "ビジネスエチケット" },
        { phrase: "dining etiquette", desc: "テーブルマナー" }
      ]
    },
    "glamour": {
      origin: "スコットランド語 glamour（魔法・魔術）から。英語 grammar（文法）の変化形とされる。中世に「グラモア」（文法・魔術書）は魔法と関連付けられ、「魔法的な魅力」の意味に変化。19世紀以降「華やかな魅力」の意味で定着。",
      derivatives: [
        { word: "glamorous", desc: "華やかな・魅力的な" },
        { word: "glamorize", desc: "美化する・魅力的に見せる" }
      ],
      family: [
        { word: "grammar", desc: "文法（同語源）" },
        { word: "grimoire", desc: "魔術書（フランス語形、同語源）" }
      ],
      compounds: [
        { phrase: "Hollywood glamour", desc: "ハリウッドの華やかさ" },
        { phrase: "glamour model", desc: "グラマーモデル" }
      ]
    },
    "gourmet": {
      origin: "フランス語 gourmet（食通・グルメ）から。古フランス語 gromet（ワインの世話係・召使い）に由来し、groumét（hound の世話係）とも。主人のワインを管理する召使いが食に詳しくなったことから「食通」の意味に発展。",
      derivatives: [
        { word: "gourmet food", desc: "グルメ食品" },
        { word: "gourmet restaurant", desc: "グルメレストラン" }
      ],
      family: [
        { word: "gourmand", desc: "大食家（gourmet の否定的類義語）" },
        { word: "gastronome", desc: "美食家（類義語）" }
      ],
      compounds: [
        { phrase: "gourmet cuisine", desc: "高級料理" },
        { phrase: "gourmet coffee", desc: "グルメコーヒー" }
      ]
    },
    "hygiene": {
      origin: "ギリシャ語 Hygieia（健康の女神）の形容詞形 hygieinon（健康的な）から。Hygieia はギリシャ神話の医神アスクレピオスの娘で、健康・清潔を司る女神。清潔を保ち疾病を予防する習慣・実践を指す。",
      derivatives: [
        { word: "hygienic", desc: "衛生的な" },
        { word: "hygienist", desc: "衛生士" }
      ],
      family: [
        { word: "Hygieia", desc: "健康の女神（語源）" },
        { word: "healthy", desc: "健康な（意味的対応）" }
      ],
      compounds: [
        { phrase: "oral hygiene", desc: "口腔衛生" },
        { phrase: "food hygiene", desc: "食品衛生" }
      ]
    },
    "influencer": {
      origin: "ラテン語 influere（流れ込む）から。in-（中に）＋fluere（流れる）。「影響を流し込む人」が原義。2000年代以降 SNS の普及とともに現代的意味が確立。ソーシャルメディア上で多くのフォロワーに影響を与える個人。",
      derivatives: [
        { word: "influence", desc: "影響・影響力" },
        { word: "micro-influencer", desc: "マイクロインフルエンサー（小規模）" }
      ],
      family: [
        { word: "flu", desc: "インフルエンザ（influenza：天体の影響）" },
        { word: "fluent", desc: "流暢な（fluere から）" },
        { word: "confluence", desc: "合流（con+fluere）" }
      ],
      compounds: [
        { phrase: "social media influencer", desc: "SNSインフルエンサー" },
        { phrase: "influencer marketing", desc: "インフルエンサーマーケティング" }
      ]
    },
    "mentor": {
      origin: "ギリシャ神話の登場人物 Mentor（メントル）から。オデュッセウスが戦場に赴く際、息子テレマコスを友人 Mentor に委ねた。女神アテナが Mentor に変身して導いたとも伝わる。信頼できる助言者・指導者を指す語として定着。",
      derivatives: [
        { word: "mentorship", desc: "メンタリング・指導関係" },
        { word: "mentee", desc: "指導を受ける人" },
        { word: "mentoring", desc: "メンタリング" }
      ],
      family: [
        { word: "Telemachus", desc: "テレマコス（Mentor が導いた青年）" }
      ],
      compounds: [
        { phrase: "mentor program", desc: "メンタープログラム" },
        { phrase: "career mentor", desc: "キャリアメンター" }
      ]
    },
    "nomadic": {
      origin: "ギリシャ語 nomas（放牧地を歩く人・遊牧民）から。nemo（放牧地に牧する）に由来し、nomos（草地・法則）と同語根。固定した居住地を持たず季節や食料を求めて移動する生活様式を指す形容詞。",
      derivatives: [
        { word: "nomad", desc: "遊牧民・ノマド" },
        { word: "nomadism", desc: "遊牧生活様式" }
      ],
      family: [
        { word: "astronomy", desc: "天文学（nomos：法則）" },
        { word: "economy", desc: "経済（oikos+nomos）" },
        { word: "gastronomy", desc: "美食学（gaster+nomos）" }
      ],
      compounds: [
        { phrase: "digital nomad", desc: "デジタルノマド" },
        { phrase: "nomadic lifestyle", desc: "遊牧的な生活様式" }
      ]
    },
    "pamper": {
      origin: "低地ドイツ語 pamperen（過度に甘やかす・軟弱にする）から。15世紀ごろに英語に入った語。過剰に食物や快適さを与えて甘やかすことが原義。現代では自分自身を甘やかす「自己ケア」の文脈でも使われる。",
      derivatives: [
        { word: "pampered", desc: "甘やかされた・贅沢な" },
        { word: "pampering", desc: "甘やかし・贅沢なケア" }
      ],
      family: [
        { word: "spoil", desc: "甘やかす（類義語）" }
      ],
      compounds: [
        { phrase: "pamper yourself", desc: "自分を甘やかす・贅沢をする" },
        { phrase: "spa pampering", desc: "スパでの贅沢なケア" }
      ]
    },
    "trendy": {
      origin: "英語 trend（傾向・流行）＋-y（形容詞接尾辞）から。trend は古英語 trendan（転がる・方向を向く）に由来し、「流れの方向」が原義。最新の流行を積極的に取り入れている様子を表す口語的形容詞。",
      derivatives: [
        { word: "trendiness", desc: "流行を追うこと" },
        { word: "trend", desc: "傾向・トレンド" }
      ],
      family: [
        { word: "trend", desc: "傾向・流行" },
        { word: "trendsetter", desc: "トレンドセッター" },
        { word: "fashionable", desc: "流行の（類義語）" }
      ],
      compounds: [
        { phrase: "trendy restaurant", desc: "おしゃれなレストラン" },
        { phrase: "trendy neighborhood", desc: "おしゃれな地区" }
      ]
    },
    "wellness": {
      origin: "英語 well（良い・健康に）＋-ness（名詞接尾辞）から。古英語 wel（良く）に由来。1950年代に医師 Halbert Dunn が「高レベルウェルネス」概念を提唱し定着。単なる疾病のない状態を超えた、心身・社会的な積極的健康状態を指す。",
      derivatives: [
        { word: "wellness program", desc: "健康促進プログラム" },
        { word: "financial wellness", desc: "経済的健康" }
      ],
      family: [
        { word: "well-being", desc: "幸福・健康" },
        { word: "health", desc: "健康（wellness より狭義）" }
      ],
      compounds: [
        { phrase: "employee wellness", desc: "従業員の健康・ウェルネス" },
        { phrase: "mental wellness", desc: "精神的なウェルネス" }
      ]
    },
    "workshop": {
      origin: "英語 work（作業・仕事）＋shop（店・作業場）の複合語。shop は古英語 sceoppa（小屋）に由来し、craft（手工芸品）を作る場所を指した。現代では実践的な学習や共同作業を行う教育セッションの意味でも広く使われる。",
      derivatives: [
        { word: "workshopped", desc: "ワークショップで検討した" },
        { word: "workshopping", desc: "ワークショップ形式で検討すること" }
      ],
      family: [
        { word: "shop", desc: "店・作業場" },
        { word: "workroom", desc: "作業室" }
      ],
      compounds: [
        { phrase: "writing workshop", desc: "文章講座・ライティングワークショップ" },
        { phrase: "leadership workshop", desc: "リーダーシップ研修" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch I (medical: ailment-vitals + lifestyle: bespoke-workshop)');
