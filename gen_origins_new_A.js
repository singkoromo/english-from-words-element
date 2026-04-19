// Batch A: data-mixed-52 words 1-90 (-isms, -ologies, architecture pt1)
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "abolitionism": {
      origin: "ラテン語 abolere（廃絶する）から派生した abolition に -ism を付けた語。奴隷制廃止運動を指して18〜19世紀の英米で広まった。ab-（離れて）＋olere（育てる）が逆説的に「育てたものを断つ」意味を持つ。歴史的にはアメリカ南北戦争前夜の社会運動の代名詞となった。",
      derivatives: [{ word: "abolitionist", desc: "廃止論者、奴隷制廃止運動家" }, { word: "abolition", desc: "廃止、廃絶" }, { word: "abolish", desc: "廃止する" }],
      family: [{ word: "abolish", desc: "廃止する（動詞）" }, { word: "nullify", desc: "無効にする（類義語）" }, { word: "repeal", desc: "（法律を）廃止する" }],
      compounds: [{ phrase: "abolitionism movement", desc: "廃止主義運動" }, { phrase: "anti-slavery abolitionism", desc: "反奴隷制廃止運動" }]
    },
    "absolutism": {
      origin: "ラテン語 absolutus（完全な、束縛されていない）から。ab-（から離れて）＋solvere（解く）。「すべての制約から解き放たれた」権力を意味し、17世紀ヨーロッパで君主が議会・教会の制約なしに統治する体制を指した。ルイ14世の「朕は国家なり」が絶対主義の象徴とされる。",
      derivatives: [{ word: "absolute", desc: "絶対的な、完全な" }, { word: "absolutist", desc: "絶対主義者・絶対論者" }, { word: "absolutely", desc: "まったく、絶対に" }],
      family: [{ word: "resolve", desc: "解決する（solvere 語根）" }, { word: "dissolve", desc: "溶かす、解散する" }, { word: "absolute monarchy", desc: "絶対君主制" }],
      compounds: [{ phrase: "moral absolutism", desc: "道徳的絶対主義" }, { phrase: "political absolutism", desc: "政治的絶対主義" }]
    },
    "activism": {
      origin: "ラテン語 actus（行為）から。agere（行う）の過去分詞が語根。active（活動的な）に -ism を付け、「積極的な社会行動を信条とすること」を表す。20世紀の市民権運動・環境運動の高まりとともに現代的意味を確立した。",
      derivatives: [{ word: "activist", desc: "活動家、運動家" }, { word: "active", desc: "活動的な" }, { word: "activism", desc: "積極的社会行動主義" }],
      family: [{ word: "act", desc: "行動する、行為" }, { word: "react", desc: "反応する" }, { word: "interact", desc: "相互作用する" }, { word: "proactive", desc: "積極的な" }],
      compounds: [{ phrase: "environmental activism", desc: "環境活動主義" }, { phrase: "social activism", desc: "社会的活動主義" }, { phrase: "digital activism", desc: "デジタル活動主義" }]
    },
    "agnosticism": {
      origin: "ギリシャ語 a-（否定）＋gnostos（知られている）から。T.H.ハクスリーが1869年に造語。「神の存在は証明も反証もできない」として判断を保留する立場。gnosis（知識）と対をなす概念で、無神論とは区別される。",
      derivatives: [{ word: "agnostic", desc: "不可知論者（の）" }, { word: "agnostically", desc: "不可知論的に" }],
      family: [{ word: "gnosis", desc: "霊的知識（gnostos 語根）" }, { word: "diagnosis", desc: "診断（dia＋gnosis）" }, { word: "prognosis", desc: "予後（pro＋gnosis）" }, { word: "atheism", desc: "無神論（類義語）" }],
      compounds: [{ phrase: "religious agnosticism", desc: "宗教的不可知論" }, { phrase: "agnosticism vs atheism", desc: "不可知論vs無神論" }]
    },
    "altruism": {
      origin: "フランス語 altruisme（他者への愛）から。ラテン語 alter（他の人）＋-ism。オーギュスト・コントが1851年に作った哲学用語で、自己利益より他者の利益を優先する倫理的立場を指す。利己主義（egoism）の対語。",
      derivatives: [{ word: "altruist", desc: "利他主義者" }, { word: "altruistic", desc: "利他的な" }, { word: "altruistically", desc: "利他的に" }],
      family: [{ word: "alter", desc: "変える、他の（alter 語根）" }, { word: "alternate", desc: "交互の、代替の" }, { word: "altercation", desc: "口論" }, { word: "egoism", desc: "利己主義（対語）" }],
      compounds: [{ phrase: "pure altruism", desc: "純粋な利他主義" }, { phrase: "altruism in biology", desc: "生物学的利他行動" }]
    },
    "anarchism": {
      origin: "ギリシャ語 anarchia（指導者のいない状態）から。an-（否定）＋archos（支配者）。国家・政府・権威を不要とし、自由な個人の協力による社会を理想とする政治思想。19世紀にプルードンやバクーニンが体系化した。",
      derivatives: [{ word: "anarchist", desc: "無政府主義者" }, { word: "anarchy", desc: "無政府状態" }, { word: "anarchic", desc: "無秩序の" }],
      family: [{ word: "monarchy", desc: "君主制（mono＋arch）" }, { word: "hierarchy", desc: "階層制（hieros＋arch）" }, { word: "oligarchy", desc: "寡頭制（oligos＋arch）" }, { word: "patriarch", desc: "家父長（patri＋arch）" }],
      compounds: [{ phrase: "anarchism theory", desc: "無政府主義理論" }, { phrase: "anarcho-syndicalism", desc: "アナルコサンジカリズム" }]
    },
    "authoritarianism": {
      origin: "ラテン語 auctoritas（権威）から。auctor（創造者、権威者）＋-itarian＋-ism。個人の自由より強権的な権力・服従を重視する政治体制や思想。民主主義の対概念として20世紀政治学で広く使われる。",
      derivatives: [{ word: "authoritarian", desc: "権威主義的な（形容詞）" }, { word: "authority", desc: "権威、当局" }, { word: "authorize", desc: "認可する" }],
      family: [{ word: "author", desc: "著者（auctor 語根）" }, { word: "authentic", desc: "本物の" }, { word: "totalitarianism", desc: "全体主義（類義語）" }],
      compounds: [{ phrase: "authoritarian regime", desc: "権威主義体制" }, { phrase: "authoritarian leadership", desc: "権威主義的リーダーシップ" }]
    },
    "behaviorism": {
      origin: "英語 behavior（行動）＋-ism。ラテン語 behave（行う）から。心理学でJ.B.ワトソンが1913年に提唱。「心理学は観察可能な行動のみを研究対象とすべき」という立場で、意識・内省を排除する。",
      derivatives: [{ word: "behaviorist", desc: "行動主義者" }, { word: "behavioral", desc: "行動の、行動的な" }, { word: "behavior", desc: "行動、振る舞い" }],
      family: [{ word: "cognitivism", desc: "認知主義（対語）" }, { word: "conditioning", desc: "条件づけ（行動主義の主要概念）" }, { word: "stimulus", desc: "刺激（行動主義の基本語）" }],
      compounds: [{ phrase: "radical behaviorism", desc: "徹底的行動主義" }, { phrase: "behavioral psychology", desc: "行動心理学" }]
    },
    "centrism": {
      origin: "ラテン語 centrum（中心）から。ギリシャ語 kentron（点、中心）。政治の左右どちらにも偏らない中道的立場を指す。フランス革命後の議会で左・右の席次から「左派・右派・中道」が生まれた。",
      derivatives: [{ word: "centrist", desc: "中道主義者（の）" }, { word: "center", desc: "中心、中道" }, { word: "centrist party", desc: "中道政党" }],
      family: [{ word: "center", desc: "中心（centrum 語根）" }, { word: "concentrate", desc: "集中する" }, { word: "eccentric", desc: "風変わりな（中心を外れた）" }, { word: "moderate", desc: "穏健な（政治的類義語）" }],
      compounds: [{ phrase: "political centrism", desc: "政治的中道主義" }, { phrase: "radical centrism", desc: "積極的中道主義" }]
    },
    "chauvinism": {
      origin: "ナポレオン軍の兵士 Nicolas Chauvin（過度なフランス愛国者）の名から。自国・自集団が優れているとする過度な排他的愛国心。後に「男性優位主義（male chauvinism）」の意味でも使われる。",
      derivatives: [{ word: "chauvinist", desc: "排外主義者、男性優位主義者" }, { word: "chauvinistic", desc: "排外的な" }],
      family: [{ word: "nationalism", desc: "民族主義（類義語）" }, { word: "jingoism", desc: "極端な愛国主義（類義語）" }, { word: "sexism", desc: "性差別主義（male chauvinism と関連）" }],
      compounds: [{ phrase: "male chauvinism", desc: "男性優位主義" }, { phrase: "chauvinism in politics", desc: "政治的排外主義" }]
    },
    "collectivism": {
      origin: "ラテン語 colligere（集める）から。collect（集める）＋-ive＋-ism。個人より集団・社会の利益を優先する思想・体制。ロシア革命後のソビエト体制や東アジアの社会規範に関連して議論される。",
      derivatives: [{ word: "collectivist", desc: "集団主義者（の）" }, { word: "collective", desc: "集団的な" }, { word: "collect", desc: "集める" }],
      family: [{ word: "individualism", desc: "個人主義（対語）" }, { word: "communism", desc: "共産主義（関連語）" }, { word: "socialism", desc: "社会主義（関連語）" }],
      compounds: [{ phrase: "collectivism vs individualism", desc: "集団主義vs個人主義" }, { phrase: "cultural collectivism", desc: "文化的集団主義" }]
    },
    "conservatism": {
      origin: "ラテン語 conservare（保つ）から。con-（完全に）＋servare（守る）。既存の伝統・制度・価値観を守ることを重視する政治思想。エドマンド・バークが1790年フランス革命への批判で体系化した。",
      derivatives: [{ word: "conservative", desc: "保守的な、保守主義者" }, { word: "conserve", desc: "保存する" }, { word: "conservation", desc: "保護、保全" }],
      family: [{ word: "preserve", desc: "保存する（類義語）" }, { word: "observe", desc: "観察する（servare 語根）" }, { word: "liberalism", desc: "自由主義（対語）" }],
      compounds: [{ phrase: "fiscal conservatism", desc: "財政的保守主義" }, { phrase: "social conservatism", desc: "社会的保守主義" }]
    },
    "consumerism": {
      origin: "ラテン語 consumere（使い尽くす）から。con-（完全に）＋sumere（取る）。物質的な消費・購買を社会の中心に置く考え方や行動様式。20世紀大量生産・大量消費時代の産物として批判的に使われることが多い。",
      derivatives: [{ word: "consumer", desc: "消費者" }, { word: "consume", desc: "消費する" }, { word: "consumerist", desc: "消費主義的な" }],
      family: [{ word: "assume", desc: "仮定する（sumere 語根）" }, { word: "resume", desc: "再開する" }, { word: "materialism", desc: "物質主義（類義語）" }],
      compounds: [{ phrase: "anti-consumerism", desc: "反消費主義" }, { phrase: "consumerism culture", desc: "消費主義文化" }]
    },
    "cynicism": {
      origin: "ギリシャ語 Kynikos（犬のような）から。古代ギリシャのディオゲネスらの哲学学派「キュニコス派」（犬儒学派）に由来。社会的規範を拒絶し自然に従う姿勢から、現代では「人間の動機を利己的と見る懐疑的態度」を指す。",
      derivatives: [{ word: "cynic", desc: "皮肉屋、シニシスト" }, { word: "cynical", desc: "皮肉な、冷笑的な" }, { word: "cynically", desc: "冷笑的に" }],
      family: [{ word: "skepticism", desc: "懐疑主義（関連語）" }, { word: "pessimism", desc: "悲観主義（関連語）" }, { word: "idealism", desc: "理想主義（対語）" }],
      compounds: [{ phrase: "political cynicism", desc: "政治的シニシズム" }, { phrase: "healthy cynicism", desc: "健全な懐疑心" }]
    },
    "defeatism": {
      origin: "フランス語 défaitisme（敗北主義）から。défaite（敗北）＋-ism。第一次世界大戦中に広まった語で、戦争に勝てないと諦める態度・思想を指す。転じて「どうせ失敗する」という悲観的諦め主義。",
      derivatives: [{ word: "defeatist", desc: "敗北主義者（の）" }, { word: "defeat", desc: "打ち負かす、敗北" }],
      family: [{ word: "pessimism", desc: "悲観主義（類義語）" }, { word: "fatalism", desc: "宿命論（類義語）" }, { word: "optimism", desc: "楽観主義（対語）" }],
      compounds: [{ phrase: "defeatist attitude", desc: "敗北主義的態度" }, { phrase: "defeatist mentality", desc: "敗北主義的心理" }]
    },
    "determinism": {
      origin: "ラテン語 determinare（境界を定める）から。de-（完全に）＋terminare（限定する）＋-ism。「すべての出来事は先行する原因によって必然的に決定される」という哲学的立場。自由意志の否定につながる概念。",
      derivatives: [{ word: "determinist", desc: "決定論者（の）" }, { word: "deterministic", desc: "決定論的な" }, { word: "determine", desc: "決定する" }],
      family: [{ word: "terminal", desc: "末端の（terminare 語根）" }, { word: "terminate", desc: "終了する" }, { word: "free will", desc: "自由意志（対概念）" }],
      compounds: [{ phrase: "causal determinism", desc: "因果的決定論" }, { phrase: "hard determinism", desc: "強い決定論" }]
    },
    "dogmatism": {
      origin: "ギリシャ語 dogma（教義、決定事項）から。dokein（思われる、決定する）＋-ism。証拠や理性的議論なしに信念を絶対視する態度。宗教・政治両分野で批判的に使われる。",
      derivatives: [{ word: "dogma", desc: "教義、独断的信念" }, { word: "dogmatic", desc: "独断的な" }, { word: "dogmatist", desc: "独断主義者" }],
      family: [{ word: "doctrine", desc: "教義（類義語）" }, { word: "orthodox", desc: "正統的な（関連語）" }, { word: "skepticism", desc: "懐疑主義（対語）" }],
      compounds: [{ phrase: "religious dogmatism", desc: "宗教的独断主義" }, { phrase: "ideological dogmatism", desc: "イデオロギー的独断主義" }]
    },
    "dualism": {
      origin: "ラテン語 dualis（二つからなる）から。duo（二つ）＋-ism。心と身体、善と悪など、世界を二つの対立的原理から説明する哲学的立場。デカルトの「心身二元論」が代表例。",
      derivatives: [{ word: "dualist", desc: "二元論者（の）" }, { word: "dualistic", desc: "二元論的な" }, { word: "dual", desc: "二重の" }],
      family: [{ word: "binary", desc: "二進法の、二項対立の" }, { word: "monism", desc: "一元論（対語）" }, { word: "pluralism", desc: "多元論（関連語）" }],
      compounds: [{ phrase: "mind-body dualism", desc: "心身二元論" }, { phrase: "moral dualism", desc: "道徳的二元論" }]
    },
    "egalitarianism": {
      origin: "フランス語 égalitaire（平等主義的な）から。ラテン語 aequalis（等しい）＋-ism。すべての人間が道徳的・政治的・社会的に平等であるべきとする思想。啓蒙主義以降の民主主義・人権思想の基盤。",
      derivatives: [{ word: "egalitarian", desc: "平等主義者（の）" }, { word: "equal", desc: "等しい" }, { word: "equality", desc: "平等" }],
      family: [{ word: "equal", desc: "等しい（aequalis 語根）" }, { word: "equity", desc: "公平性" }, { word: "hierarchy", desc: "階層制（対概念）" }],
      compounds: [{ phrase: "radical egalitarianism", desc: "急進的平等主義" }, { phrase: "social egalitarianism", desc: "社会的平等主義" }]
    },
    "elitism": {
      origin: "フランス語 élite（選ばれた者）から。ラテン語 eligere（選び出す）。e-（外へ）＋legere（選ぶ）。社会の一部の優秀な集団が支配・指導するのが望ましいとする思想。",
      derivatives: [{ word: "elite", desc: "精鋭、エリート" }, { word: "elitist", desc: "エリート主義者（の）" }],
      family: [{ word: "elect", desc: "選ぶ（eligere 語根）" }, { word: "select", desc: "選択する" }, { word: "meritocracy", desc: "能力主義（関連語）" }],
      compounds: [{ phrase: "cultural elitism", desc: "文化的エリート主義" }, { phrase: "anti-elitism", desc: "反エリート主義" }]
    },
    "empiricism": {
      origin: "ギリシャ語 empeiria（経験）から。en-（中に）＋peira（試み）。「知識は経験・観察から得られる」とする認識論。ロック・ヒューム・バークリーら英国哲学者が発展させた。大陸合理主義（rationalism）と対立する。",
      derivatives: [{ word: "empiricist", desc: "経験主義者（の）" }, { word: "empirical", desc: "経験的な、実証的な" }, { word: "empirically", desc: "経験的に" }],
      family: [{ word: "experiment", desc: "実験（peira 語根）" }, { word: "experience", desc: "経験" }, { word: "rationalism", desc: "合理主義（対語）" }],
      compounds: [{ phrase: "logical empiricism", desc: "論理実証主義" }, { phrase: "empiricism vs rationalism", desc: "経験主義vs合理主義" }]
    },
    "environmentalism": {
      origin: "ラテン語 in vironment（周囲）から。environment（環境）＋-alism。1960〜70年代の環境汚染問題を背景に広まった。自然環境の保護・持続可能な開発を主張する社会運動・思想。",
      derivatives: [{ word: "environmentalist", desc: "環境主義者" }, { word: "environmental", desc: "環境の" }, { word: "environment", desc: "環境" }],
      family: [{ word: "ecology", desc: "生態学（関連語）" }, { word: "sustainability", desc: "持続可能性（関連語）" }, { word: "conservation", desc: "保全" }],
      compounds: [{ phrase: "radical environmentalism", desc: "急進的環境主義" }, { phrase: "environmental activism", desc: "環境活動主義" }]
    },
    "escapism": {
      origin: "英語 escape（逃げる）＋-ism。ラテン語 ex-（外へ）＋cappa（マント）。現実の問題から目をそらし、空想・娯楽・趣味に逃避する傾向や行為。20世紀大衆娯楽の発達とともに注目された概念。",
      derivatives: [{ word: "escapist", desc: "現実逃避者（の）" }, { word: "escape", desc: "逃げる、逃避" }],
      family: [{ word: "avoidance", desc: "回避（関連語）" }, { word: "fantasy", desc: "空想（逃避先として関連）" }, { word: "realism", desc: "現実主義（対語）" }],
      compounds: [{ phrase: "escapism in entertainment", desc: "娯楽における逃避主義" }, { phrase: "pure escapism", desc: "純粋な現実逃避" }]
    },
    "ethnocentrism": {
      origin: "ギリシャ語 ethnos（民族）＋kentron（中心）＋-ism。ウィリアム・サムナーが1906年に造語。自分の民族・文化を基準にして他文化を評価・優劣をつける傾向。文化相対主義の対概念。",
      derivatives: [{ word: "ethnocentric", desc: "自民族中心的な" }, { word: "ethnic", desc: "民族の" }, { word: "ethnicity", desc: "民族性" }],
      family: [{ word: "xenophobia", desc: "外国人嫌悪（関連語）" }, { word: "nationalism", desc: "民族主義（関連語）" }, { word: "cultural relativism", desc: "文化相対主義（対語）" }],
      compounds: [{ phrase: "cultural ethnocentrism", desc: "文化的自民族中心主義" }, { phrase: "ethnocentrism bias", desc: "自民族中心バイアス" }]
    },
    "existentialism": {
      origin: "ラテン語 existere（存在する）から。ex-（外へ）＋sistere（立つ）＋-ism。人間の存在・意味・自由・責任を主題とする哲学。サルトル「実存は本質に先立つ」が代表命題。20世紀フランス・ドイツで隆盛した。",
      derivatives: [{ word: "existentialist", desc: "実存主義者（の）" }, { word: "existential", desc: "実存的な" }, { word: "existence", desc: "存在" }],
      family: [{ word: "exist", desc: "存在する" }, { word: "essence", desc: "本質（実存主義の核心概念）" }, { word: "phenomenology", desc: "現象学（関連哲学）" }],
      compounds: [{ phrase: "existential crisis", desc: "実存的危機" }, { phrase: "existential philosophy", desc: "実存主義哲学" }]
    },
    "extremism": {
      origin: "ラテン語 extremus（最も外側の）から。exter（外にある）の最上級。政治・宗教において穏健な立場を否定し、急進的・過激な立場をとること。テロリズムとの関連で特に現代的な重要性を持つ。",
      derivatives: [{ word: "extremist", desc: "過激主義者（の）" }, { word: "extreme", desc: "極端な" }, { word: "extremely", desc: "極めて" }],
      family: [{ word: "radicalism", desc: "過激主義（類義語）" }, { word: "fundamentalism", desc: "原理主義（関連語）" }, { word: "moderation", desc: "穏健さ（対語）" }],
      compounds: [{ phrase: "religious extremism", desc: "宗教的過激主義" }, { phrase: "political extremism", desc: "政治的過激主義" }]
    },
    "fanaticism": {
      origin: "ラテン語 fanaticus（神殿に憑かれた）から。fanum（神殿）。熱狂的な宗教的興奮に由来し、転じて「ある信念・思想に盲目的に熱狂すること」を指す。",
      derivatives: [{ word: "fanatic", desc: "狂信者（の）" }, { word: "fanatical", desc: "狂信的な" }, { word: "fan", desc: "熱狂的ファン（fanaticus の短縮）" }],
      family: [{ word: "zealotry", desc: "熱狂主義（類義語）" }, { word: "extremism", desc: "過激主義（関連語）" }, { word: "reason", desc: "理性（対概念）" }],
      compounds: [{ phrase: "religious fanaticism", desc: "宗教的狂信" }, { phrase: "sports fanaticism", desc: "スポーツへの狂信" }]
    },
    "fascism": {
      origin: "イタリア語 fascio（束、結束）から。ラテン語 fascis（棒の束）。ムッソリーニの Fascio di Combattimento（戦闘ファッショ）に由来。権威主義的民族主義・反共産主義・暴力的支配を特徴とする政治運動。",
      derivatives: [{ word: "fascist", desc: "ファシスト（の）" }, { word: "fascistic", desc: "ファシスト的な" }],
      family: [{ word: "totalitarianism", desc: "全体主義（関連語）" }, { word: "nationalism", desc: "民族主義（関連語）" }, { word: "democracy", desc: "民主主義（対語）" }],
      compounds: [{ phrase: "neo-fascism", desc: "ネオファシズム" }, { phrase: "fascism and nationalism", desc: "ファシズムと民族主義" }]
    },
    "federalism": {
      origin: "ラテン語 foedus（条約、盟約）から。foederalis（条約の）＋-ism。中央政府と地方政府が権力を分有する政治体制。アメリカ合衆国憲法がその典型例。",
      derivatives: [{ word: "federal", desc: "連邦の" }, { word: "federation", desc: "連邦、連合体" }, { word: "federalist", desc: "連邦主義者（の）" }],
      family: [{ word: "ally", desc: "同盟国（foedus 語根）" }, { word: "confederacy", desc: "連合（関連語）" }, { word: "centralism", desc: "中央集権主義（対語）" }],
      compounds: [{ phrase: "fiscal federalism", desc: "財政的連邦主義" }, { phrase: "cooperative federalism", desc: "協調的連邦主義" }]
    },
    "feminism": {
      origin: "フランス語 féminisme（女性主義）から。ラテン語 femina（女性）＋-ism。19世紀末に参政権運動として始まり、現代では性差別撤廃・性的平等を求める広範な社会・政治運動を指す。",
      derivatives: [{ word: "feminist", desc: "フェミニスト（の）" }, { word: "feminine", desc: "女性的な" }, { word: "female", desc: "女性の" }],
      family: [{ word: "gender equality", desc: "ジェンダー平等（関連概念）" }, { word: "patriarchy", desc: "家父長制（対抗概念）" }, { word: "intersectionality", desc: "交差性（関連概念）" }],
      compounds: [{ phrase: "first-wave feminism", desc: "第一波フェミニズム（参政権）" }, { phrase: "intersectional feminism", desc: "交差フェミニズム" }]
    },
    "feudalism": {
      origin: "中世ラテン語 feudum（封土）から。フランク語 fehu（家畜、財産）。土地を媒介として主君と家臣が相互義務を結ぶ中世ヨーロッパの政治・社会・経済体制。",
      derivatives: [{ word: "feudal", desc: "封建的な" }, { word: "feudal lord", desc: "封建領主" }],
      family: [{ word: "vassal", desc: "家臣、臣下" }, { word: "serf", desc: "農奴" }, { word: "capitalism", desc: "資本主義（後継体制）" }],
      compounds: [{ phrase: "feudal system", desc: "封建制度" }, { phrase: "post-feudal society", desc: "封建制後の社会" }]
    },
    "formalism": {
      origin: "ラテン語 forma（形）＋-alism。内容より形式・形態・手続きを重視する立場。芸術では「内容でなく形式が芸術的価値を決める」とするロシア・フォルマリズム、法学では法文字通りの適用を重視する立場として現れる。",
      derivatives: [{ word: "formalist", desc: "形式主義者（の）" }, { word: "formal", desc: "形式的な、正式な" }, { word: "format", desc: "書式、フォーマット" }],
      family: [{ word: "inform", desc: "知らせる（形を与える語源）" }, { word: "reform", desc: "改革する" }, { word: "transform", desc: "変形する" }],
      compounds: [{ phrase: "legal formalism", desc: "法的形式主義" }, { phrase: "mathematical formalism", desc: "数学的形式主義" }]
    },
    "fundamentalism": {
      origin: "英語 fundamental（基本的な）＋-ism。ラテン語 fundamentum（土台）から。1920年代アメリカのキリスト教原理主義運動から生まれた語。聖書・コーランなどの聖典を文字通りに解釈し、近代主義・世俗化に反対する立場。",
      derivatives: [{ word: "fundamentalist", desc: "原理主義者（の）" }, { word: "fundamental", desc: "基本的な、根本的な" }],
      family: [{ word: "orthodox", desc: "正統的な（関連語）" }, { word: "literalism", desc: "字義主義（関連語）" }, { word: "modernism", desc: "近代主義（対語）" }],
      compounds: [{ phrase: "religious fundamentalism", desc: "宗教的原理主義" }, { phrase: "Islamic fundamentalism", desc: "イスラム原理主義" }]
    },
    "hedonism": {
      origin: "ギリシャ語 hedone（快楽）から。快楽の追求を人生の最高目標・道徳的善とする倫理哲学。古代ギリシャのエピクロス派が代表。現代では快楽的生活様式を指すこともある。",
      derivatives: [{ word: "hedonist", desc: "快楽主義者（の）" }, { word: "hedonistic", desc: "快楽主義的な" }],
      family: [{ word: "pleasure", desc: "快楽（類義語）" }, { word: "asceticism", desc: "禁欲主義（対語）" }, { word: "utilitarianism", desc: "功利主義（関連語）" }],
      compounds: [{ phrase: "ethical hedonism", desc: "倫理的快楽主義" }, { phrase: "psychological hedonism", desc: "心理的快楽主義" }]
    },
    "holism": {
      origin: "ギリシャ語 holos（全体）から。Jan Smuts が1926年に造語。「全体は部分の総和より大きい」という考え方。医学・生態学・哲学で、部分を切り離さず全体として捉えることを重視する。",
      derivatives: [{ word: "holistic", desc: "全体論的な" }, { word: "holistically", desc: "全体論的に" }],
      family: [{ word: "reductionism", desc: "還元主義（対語）" }, { word: "synthesis", desc: "統合（関連語）" }, { word: "ecosystem", desc: "生態系（全体論的概念）" }],
      compounds: [{ phrase: "holistic medicine", desc: "ホリスティック医療" }, { phrase: "holistic approach", desc: "全体論的アプローチ" }]
    },
    "humanism": {
      origin: "ラテン語 humanus（人間的な）から。homo（人間）＋-ism。ルネサンス期に神中心から人間中心への転換を推進した知的運動。現代では「宗教なしに人間の尊厳・理性・倫理を重視する立場」を指す。",
      derivatives: [{ word: "humanist", desc: "人文主義者（の）" }, { word: "humanistic", desc: "人文主義的な" }, { word: "human", desc: "人間（の）" }],
      family: [{ word: "humanity", desc: "人類、人間性" }, { word: "humane", desc: "人道的な" }, { word: "theism", desc: "有神論（対語）" }],
      compounds: [{ phrase: "secular humanism", desc: "世俗的人文主義" }, { phrase: "Renaissance humanism", desc: "ルネサンス人文主義" }]
    },
    "idealism": {
      origin: "ギリシャ語 idea（形、理念）から。「実在は物質ではなく精神・観念である」とする哲学的立場（カント・ヘーゲル）と、「より良い世界を目指す理想主義」の二つの意味を持つ。",
      derivatives: [{ word: "idealist", desc: "理想主義者、観念論者（の）" }, { word: "ideal", desc: "理想（の）" }, { word: "idealistic", desc: "理想主義的な" }],
      family: [{ word: "realism", desc: "現実主義（対語）" }, { word: "materialism", desc: "唯物論（哲学的対語）" }, { word: "utopianism", desc: "理想郷主義（関連語）" }],
      compounds: [{ phrase: "German idealism", desc: "ドイツ観念論（カント・ヘーゲル）" }, { phrase: "moral idealism", desc: "道徳的理想主義" }]
    },
    "imperialism": {
      origin: "ラテン語 imperium（支配権、帝国）から。imperare（命令する）＋-ism。強力な国家が他国・他地域を政治・軍事・経済的に支配・拡張する政策や思想。19世紀ヨーロッパの植民地主義と密接に結びつく。",
      derivatives: [{ word: "imperialist", desc: "帝国主義者（の）" }, { word: "imperial", desc: "帝国の" }, { word: "empire", desc: "帝国" }],
      family: [{ word: "emperor", desc: "皇帝（imperium 語根）" }, { word: "colonialism", desc: "植民地主義（関連語）" }, { word: "hegemony", desc: "覇権（関連概念）" }],
      compounds: [{ phrase: "cultural imperialism", desc: "文化的帝国主義" }, { phrase: "neo-imperialism", desc: "新帝国主義" }]
    },
    "individualism": {
      origin: "ラテン語 individuus（分割不可能な）から。in-（否定）＋dividere（分ける）＋-ism。個人の権利・自由・自立を集団より優先する思想。啓蒙主義・自由主義の中心原理。",
      derivatives: [{ word: "individualist", desc: "個人主義者（の）" }, { word: "individual", desc: "個人（の）" }, { word: "individually", desc: "個別に" }],
      family: [{ word: "collectivism", desc: "集団主義（対語）" }, { word: "autonomy", desc: "自律" }, { word: "liberty", desc: "自由" }],
      compounds: [{ phrase: "rugged individualism", desc: "たくましい個人主義（米国的価値観）" }, { phrase: "methodological individualism", desc: "方法論的個人主義" }]
    },
    "isolationism": {
      origin: "英語 isolate（孤立させる）＋-ism。ラテン語 insula（島）から。他国との政治・軍事的関与を避け、自国の問題に集中する外交政策。アメリカの伝統的外交方針として有名（モンロー主義）。",
      derivatives: [{ word: "isolationist", desc: "孤立主義者（の）" }, { word: "isolate", desc: "孤立させる" }, { word: "isolation", desc: "孤立" }],
      family: [{ word: "island", desc: "島（insula 語根）" }, { word: "insulate", desc: "断熱・絶縁する" }, { word: "internationalism", desc: "国際主義（対語）" }],
      compounds: [{ phrase: "political isolationism", desc: "政治的孤立主義" }, { phrase: "economic isolationism", desc: "経済的孤立主義" }]
    },
    "libertarianism": {
      origin: "ラテン語 liber（自由な）＋-tarian＋-ism。個人の自由を最大限保護し、政府の介入を最小化することを求める政治哲学。経済的自由主義（放任主義）と社会的自由主義を組み合わせた立場。",
      derivatives: [{ word: "libertarian", desc: "自由意志論者（の）" }, { word: "liberty", desc: "自由" }, { word: "liberate", desc: "解放する" }],
      family: [{ word: "liberalism", desc: "自由主義（関連語）" }, { word: "anarchism", desc: "無政府主義（関連語）" }, { word: "statism", desc: "国家主義（対語）" }],
      compounds: [{ phrase: "libertarian socialism", desc: "自由意志社会主義" }, { phrase: "libertarian philosophy", desc: "自由論的哲学" }]
    },
    "materialism": {
      origin: "ラテン語 materia（物質）＋-ism。「実在の究極的本質は物質である」とする哲学（唯物論）と、「物質的豊かさを人生の最重要とみなす態度」の二つの意味を持つ。マルクスの史的唯物論が代表例。",
      derivatives: [{ word: "materialist", desc: "唯物論者、物質主義者（の）" }, { word: "material", desc: "物質（の）" }, { word: "materialize", desc: "実現する" }],
      family: [{ word: "matter", desc: "物質（materia 語根）" }, { word: "idealism", desc: "観念論（対語）" }, { word: "consumerism", desc: "消費主義（関連語）" }],
      compounds: [{ phrase: "dialectical materialism", desc: "弁証法的唯物論" }, { phrase: "historical materialism", desc: "史的唯物論" }]
    },
    "militarism": {
      origin: "ラテン語 militaris（軍事の）から。miles（兵士）＋-ism。軍事力・軍隊を国家の中核に置き、軍事的価値観を社会全体に優先させる思想・政策。プロイセン・日本の帝国主義時代に典型的に現れた。",
      derivatives: [{ word: "militarist", desc: "軍国主義者（の）" }, { word: "military", desc: "軍（の）" }, { word: "militia", desc: "民兵組織" }],
      family: [{ word: "soldier", desc: "兵士" }, { word: "war", desc: "戦争（関連概念）" }, { word: "pacifism", desc: "平和主義（対語）" }],
      compounds: [{ phrase: "military-industrial complex", desc: "軍産複合体" }, { phrase: "aggressive militarism", desc: "侵略的軍国主義" }]
    },
    "minimalism": {
      origin: "ラテン語 minimus（最小の）＋-ism。美術・音楽・デザインで「最小限の要素で最大効果を生む」手法。1960年代の現代美術（ドナルド・ジャッド等）から始まり、生活様式にも広まった。",
      derivatives: [{ word: "minimalist", desc: "ミニマリスト（の）" }, { word: "minimal", desc: "最小限の" }, { word: "minimize", desc: "最小化する" }],
      family: [{ word: "minimum", desc: "最小値" }, { word: "minor", desc: "小さい" }, { word: "maximalism", desc: "最大主義（対語）" }],
      compounds: [{ phrase: "architectural minimalism", desc: "建築的ミニマリズム" }, { phrase: "minimalist lifestyle", desc: "ミニマリストの生き方" }]
    },
    "monism": {
      origin: "ギリシャ語 monos（一つ）＋-ism。「実在の究極的基盤は一つだ」とする哲学。精神一元論（観念論）・物質一元論（唯物論）・中性一元論などがある。デカルトの二元論に対する応答として発展。",
      derivatives: [{ word: "monist", desc: "一元論者（の）" }, { word: "monistic", desc: "一元論的な" }],
      family: [{ word: "mono-", desc: "一つ（接頭辞）" }, { word: "monotheism", desc: "一神教（monos＋theos）" }, { word: "dualism", desc: "二元論（対語）" }],
      compounds: [{ phrase: "neutral monism", desc: "中性一元論" }, { phrase: "mind-body monism", desc: "心身一元論" }]
    },
    "moralism": {
      origin: "ラテン語 mos（習慣、道徳）から。mores（道徳的慣習）＋-ism。道徳的規範を過度に強調し、他者の行動に道徳的判断を押しつける傾向。道徳哲学（ethics）とは区別される。",
      derivatives: [{ word: "moralist", desc: "道徳主義者" }, { word: "moralistic", desc: "道徳論的な" }, { word: "moral", desc: "道徳的な" }],
      family: [{ word: "ethics", desc: "倫理学（関連語）" }, { word: "virtue", desc: "徳" }, { word: "relativism", desc: "相対主義（対語）" }],
      compounds: [{ phrase: "moral absolutism", desc: "道徳的絶対主義" }, { phrase: "religious moralism", desc: "宗教的道徳主義" }]
    },
    "mysticism": {
      origin: "ギリシャ語 mystikos（秘義的な）から。mystes（秘教に入門した者）。神・宇宙との直接的な合一体験を求める宗教的・精神的態度。西洋（キリスト教神秘主義）・東洋（禅・スーフィズム）に広く見られる。",
      derivatives: [{ word: "mystic", desc: "神秘主義者（の）" }, { word: "mystical", desc: "神秘的な" }, { word: "mysterious", desc: "不思議な" }],
      family: [{ word: "mystery", desc: "謎、神秘" }, { word: "myth", desc: "神話（関連語）" }, { word: "rationalism", desc: "合理主義（対語）" }],
      compounds: [{ phrase: "Christian mysticism", desc: "キリスト教神秘主義" }, { phrase: "mystical experience", desc: "神秘体験" }]
    },
    "narcissism": {
      origin: "ギリシャ神話の美少年 Narcissus（ナルキッソス）から。水面に映る自分の姿に恋して死んだ伝説に由来。フロイトが自己への過度な愛着の心理学的概念として定式化。",
      derivatives: [{ word: "narcissist", desc: "自己陶酔者（の）" }, { word: "narcissistic", desc: "自己陶酔的な" }, { word: "narcissus", desc: "水仙の花（同語源）" }],
      family: [{ word: "egoism", desc: "自己主義（関連語）" }, { word: "empathy", desc: "共感（対概念）" }, { word: "NPD", desc: "自己愛性パーソナリティ障害" }],
      compounds: [{ phrase: "narcissistic personality", desc: "自己愛的パーソナリティ" }, { phrase: "healthy narcissism", desc: "健全な自己愛" }]
    },
    "nationalism": {
      origin: "ラテン語 natio（生まれた場所、国民）から。nasci（生まれる）＋-ism。共通の民族・文化・言語・歴史を持つ集団が独立した国家を形成すべきとする思想。19世紀の最大の政治力の一つ。",
      derivatives: [{ word: "nationalist", desc: "民族主義者（の）" }, { word: "national", desc: "国家の" }, { word: "nation", desc: "国家、国民" }],
      family: [{ word: "native", desc: "生まれながらの（nasci 語根）" }, { word: "nature", desc: "自然（同語根）" }, { word: "patriotism", desc: "愛国心（類義語）" }],
      compounds: [{ phrase: "ethnic nationalism", desc: "民族的ナショナリズム" }, { phrase: "civic nationalism", desc: "市民的ナショナリズム" }]
    },
    "naturalism": {
      origin: "ラテン語 natura（自然）から。nasci（生まれる）＋-ism。「すべての現象は自然的原因によって説明できる」とする哲学（形而上学的自然主義）と、文学・芸術での「現実を美化せず科学的に描く」手法の両方がある。",
      derivatives: [{ word: "naturalist", desc: "自然主義者、博物学者（の）" }, { word: "natural", desc: "自然の" }, { word: "naturalistic", desc: "自然主義的な" }],
      family: [{ word: "nature", desc: "自然" }, { word: "supernaturalism", desc: "超自然主義（対語）" }, { word: "realism", desc: "写実主義（関連語）" }],
      compounds: [{ phrase: "literary naturalism", desc: "文学的自然主義" }, { phrase: "moral naturalism", desc: "道徳的自然主義" }]
    },
    "nihilism": {
      origin: "ラテン語 nihil（無）から。「いかなる価値も意味も客観的に存在しない」とする哲学的立場。ニーチェの「神の死」に関連し、19世紀ロシアの反体制運動（ニヒリスト）でも使われた。",
      derivatives: [{ word: "nihilist", desc: "虚無主義者（の）" }, { word: "nihilistic", desc: "虚無主義的な" }],
      family: [{ word: "annihilate", desc: "滅ぼす（nihil語根）" }, { word: "existentialism", desc: "実存主義（対抗思想）" }, { word: "meaning", desc: "意味（nihilism が否定するもの）" }],
      compounds: [{ phrase: "moral nihilism", desc: "道徳的虚無主義" }, { phrase: "existential nihilism", desc: "実存的虚無主義" }]
    },
    "objectivism": {
      origin: "ラテン語 objectum（目の前に投げられたもの）から。Ayn Rand が1943〜1957年に体系化した哲学。「客観的現実・理性・自己利益・自由市場」を核心とする。認識論的には「外部に客観的事実が存在する」立場を指す。",
      derivatives: [{ word: "objectivist", desc: "客観主義者（の）" }, { word: "objective", desc: "客観的な" }, { word: "object", desc: "物体、目的" }],
      family: [{ word: "subjectivism", desc: "主観主義（対語）" }, { word: "realism", desc: "実在論（関連語）" }, { word: "rationalism", desc: "合理主義（関連語）" }],
      compounds: [{ phrase: "Ayn Rand objectivism", desc: "アイン・ランドの客観主義" }, { phrase: "moral objectivism", desc: "道徳的客観主義" }]
    },
    "opportunism": {
      origin: "フランス語 opportunisme から。ラテン語 opportunus（好機の）。ob-（に向かって）＋portus（港）。原則より目先の利益・機会を優先する行動様式。19世紀政治用語として始まった。",
      derivatives: [{ word: "opportunist", desc: "日和見主義者（の）" }, { word: "opportunistic", desc: "機会主義的な" }, { word: "opportunity", desc: "機会" }],
      family: [{ word: "exploit", desc: "利用する" }, { word: "pragmatism", desc: "プラグマティズム（関連語）" }, { word: "principle", desc: "原則（opportunism が軽視するもの）" }],
      compounds: [{ phrase: "political opportunism", desc: "政治的機会主義" }, { phrase: "economic opportunism", desc: "経済的日和見主義" }]
    },
    "optimism": {
      origin: "ラテン語 optimus（最善の）から。「世界は可能な限り最善である」という哲学的立場（ライプニッツ）と、一般に「物事が良くなると信じる傾向」を指す。悲観主義（pessimism）の対語。",
      derivatives: [{ word: "optimist", desc: "楽観主義者（の）" }, { word: "optimistic", desc: "楽観的な" }, { word: "optimize", desc: "最適化する" }],
      family: [{ word: "optimal", desc: "最適な" }, { word: "pessimism", desc: "悲観主義（対語）" }, { word: "hope", desc: "希望（関連概念）" }],
      compounds: [{ phrase: "cautious optimism", desc: "慎重な楽観主義" }, { phrase: "optimism bias", desc: "楽観バイアス" }]
    },
    "pacifism": {
      origin: "ラテン語 pax（平和）＋facere（作る）から。pacific（平和的な）＋-ism。あらゆる戦争・暴力に反対し、平和的手段のみで紛争を解決すべきとする立場。",
      derivatives: [{ word: "pacifist", desc: "平和主義者（の）" }, { word: "pacify", desc: "なだめる、平和化する" }, { word: "peaceful", desc: "平和な" }],
      family: [{ word: "peace", desc: "平和（pax 語根）" }, { word: "appease", desc: "宥和する" }, { word: "militarism", desc: "軍国主義（対語）" }],
      compounds: [{ phrase: "nuclear pacifism", desc: "核廃絶平和主義" }, { phrase: "absolute pacifism", desc: "絶対的平和主義" }]
    },
    "perfectionism": {
      origin: "ラテン語 perfectus（完成した）から。per-（完全に）＋facere（する）＋-ism。「すべての仕事・行動を完璧にすべき」という信念や強迫的傾向。心理学では不完全に対する過度な恐怖として扱われる。",
      derivatives: [{ word: "perfectionist", desc: "完璧主義者（の）" }, { word: "perfect", desc: "完璧な" }, { word: "perfection", desc: "完璧" }],
      family: [{ word: "complete", desc: "完成する（per-facere 語根と重なる）" }, { word: "ideal", desc: "理想（関連概念）" }, { word: "procrastination", desc: "先延ばし（perfectionism の帰結）" }],
      compounds: [{ phrase: "maladaptive perfectionism", desc: "不適応的完璧主義" }, { phrase: "healthy perfectionism", desc: "健全な完璧主義" }]
    },
    "pessimism": {
      origin: "ラテン語 pessimus（最悪の）から。「物事は最悪の結果になると思いやすい傾向」または「世界は根本的に悪い」という哲学（ショーペンハウアーなど）を指す。",
      derivatives: [{ word: "pessimist", desc: "悲観主義者（の）" }, { word: "pessimistic", desc: "悲観的な" }],
      family: [{ word: "optimism", desc: "楽観主義（対語）" }, { word: "cynicism", desc: "シニシズム（類義語）" }, { word: "nihilism", desc: "虚無主義（関連語）" }],
      compounds: [{ phrase: "philosophical pessimism", desc: "哲学的悲観主義" }, { phrase: "pessimism bias", desc: "悲観バイアス" }]
    },
    "pluralism": {
      origin: "ラテン語 pluralis（複数の）から。「社会・哲学・政治において複数の立場・価値観・主体が共存する」ことを肯定する考え方。多元主義・多元論。",
      derivatives: [{ word: "pluralist", desc: "多元主義者（の）" }, { word: "plural", desc: "複数の" }, { word: "plurality", desc: "多数、複数性" }],
      family: [{ word: "diverse", desc: "多様な（関連語）" }, { word: "monism", desc: "一元論（対語）" }, { word: "multiculturalism", desc: "多文化主義（関連語）" }],
      compounds: [{ phrase: "religious pluralism", desc: "宗教的多元主義" }, { phrase: "moral pluralism", desc: "道徳的多元主義" }]
    },
    "populism": {
      origin: "ラテン語 populus（人民）から。「エリートに対する一般市民の側に立つ」という政治的姿勢。19世紀アメリカの人民党（Populist Party）に由来し、左右問わず使われる。",
      derivatives: [{ word: "populist", desc: "ポピュリスト（の）" }, { word: "popular", desc: "人気のある" }, { word: "population", desc: "人口" }],
      family: [{ word: "public", desc: "公衆（populus 語根）" }, { word: "republic", desc: "共和国（res publica）" }, { word: "elitism", desc: "エリート主義（対語）" }],
      compounds: [{ phrase: "right-wing populism", desc: "右派ポピュリズム" }, { phrase: "left-wing populism", desc: "左派ポピュリズム" }]
    },
    "positivism": {
      origin: "ラテン語 positus（置かれた）から。オーギュスト・コントが19世紀に提唱した哲学。「科学的・経験的観察によってのみ知識は成立する」とし、形而上学・神学を排除する立場。",
      derivatives: [{ word: "positivist", desc: "実証主義者（の）" }, { word: "positive", desc: "肯定的な、実証的な" }, { word: "positively", desc: "肯定的に" }],
      family: [{ word: "empiricism", desc: "経験主義（関連語）" }, { word: "logical positivism", desc: "論理実証主義" }, { word: "metaphysics", desc: "形而上学（positivism が排除する分野）" }],
      compounds: [{ phrase: "logical positivism", desc: "論理実証主義（ウィーン学派）" }, { phrase: "legal positivism", desc: "法実証主義" }]
    },
    "protectionism": {
      origin: "英語 protect（守る）＋-ionism。ラテン語 protegere（前を覆う）。自国産業を外国との競争から守るために関税・輸入制限などを設ける経済政策。自由貿易（free trade）の対語。",
      derivatives: [{ word: "protectionist", desc: "保護主義者（の）" }, { word: "protect", desc: "守る" }, { word: "protection", desc: "保護" }],
      family: [{ word: "tariff", desc: "関税（protectionism の手段）" }, { word: "free trade", desc: "自由貿易（対語）" }, { word: "mercantilism", desc: "重商主義（関連語）" }],
      compounds: [{ phrase: "trade protectionism", desc: "貿易保護主義" }, { phrase: "economic protectionism", desc: "経済的保護主義" }]
    },
    "rationalism": {
      origin: "ラテン語 ratio（理性、計算）から。「知識の源泉は感覚経験でなく理性・論理的推論にある」とする認識論。デカルト・スピノザ・ライプニッツが代表。経験主義（empiricism）と並ぶ近代哲学の二大流れ。",
      derivatives: [{ word: "rationalist", desc: "合理主義者（の）" }, { word: "rational", desc: "合理的な" }, { word: "rationalize", desc: "合理化する" }],
      family: [{ word: "reason", desc: "理性（ratio 語根）" }, { word: "empiricism", desc: "経験主義（対語）" }, { word: "logic", desc: "論理学（関連語）" }],
      compounds: [{ phrase: "Cartesian rationalism", desc: "デカルト的合理主義" }, { phrase: "moral rationalism", desc: "道徳的合理主義" }]
    },
    "realism": {
      origin: "ラテン語 res（物事）＋-ism。哲学では「普遍・抽象的対象が独立して実在する」（実在論）または「外部世界が精神から独立して存在する」立場。文学・芸術では現実を客観的に描写する手法を指す。",
      derivatives: [{ word: "realist", desc: "現実主義者（の）" }, { word: "realistic", desc: "現実的な" }, { word: "realize", desc: "気づく、実現する" }],
      family: [{ word: "real", desc: "本物の（res 語根）" }, { word: "idealism", desc: "理想主義（対語）" }, { word: "pragmatism", desc: "実用主義（関連語）" }],
      compounds: [{ phrase: "political realism", desc: "政治的現実主義（国際関係論）" }, { phrase: "literary realism", desc: "文学的リアリズム" }]
    },
    "reformism": {
      origin: "ラテン語 reformare（形を変える）から。re-（再び）＋forma（形）＋-ism。既存の制度・社会を革命的に打倒するのでなく、段階的・漸進的に改善しようとする政治的立場。",
      derivatives: [{ word: "reformist", desc: "改革主義者（の）" }, { word: "reform", desc: "改革（する）" }, { word: "reformation", desc: "宗教改革" }],
      family: [{ word: "form", desc: "形（forma 語根）" }, { word: "transform", desc: "変革する" }, { word: "revolution", desc: "革命（対語）" }],
      compounds: [{ phrase: "social reformism", desc: "社会改革主義" }, { phrase: "democratic reformism", desc: "民主的改革主義" }]
    },
    "relativism": {
      origin: "ラテン語 relativus（関係する）から。「真理・道徳・美は絶対的でなく、文化・個人・文脈に相対的だ」とする哲学的立場。文化相対主義・道徳相対主義・認識論的相対主義がある。",
      derivatives: [{ word: "relativist", desc: "相対主義者（の）" }, { word: "relative", desc: "相対的な" }, { word: "relativity", desc: "相対性" }],
      family: [{ word: "relate", desc: "関係する（relativus 語根）" }, { word: "absolutism", desc: "絶対主義（対語）" }, { word: "contextualism", desc: "文脈主義（関連語）" }],
      compounds: [{ phrase: "cultural relativism", desc: "文化相対主義" }, { phrase: "moral relativism", desc: "道徳相対主義" }]
    },
    "romanticism": {
      origin: "フランス語 romantique（ロマン的な）から。ラテン語 romanice（ローマ語風に）。18世紀末〜19世紀、啓蒙主義の理性主義への反動として現れた芸術・文学・哲学運動。感情・自然・想像力・個性を重視。",
      derivatives: [{ word: "romantic", desc: "ロマンティックな（の）" }, { word: "romanticize", desc: "ロマン化する" }, { word: "romance", desc: "ロマンス、恋愛" }],
      family: [{ word: "Enlightenment", desc: "啓蒙主義（対抗運動）" }, { word: "naturalism", desc: "自然主義（関連語）" }, { word: "classicism", desc: "古典主義（対語）" }],
      compounds: [{ phrase: "German Romanticism", desc: "ドイツロマン主義" }, { phrase: "Romantic era", desc: "ロマン主義時代" }]
    },
    "secularism": {
      origin: "ラテン語 saeculum（時代、世俗の世界）から。「宗教を政治・公共生活から分離すべき」とする立場。政教分離・世俗主義。フランスの laïcité（ライシテ）がその典型。",
      derivatives: [{ word: "secular", desc: "世俗の、宗教と無関係の" }, { word: "secularize", desc: "世俗化する" }, { word: "secularization", desc: "世俗化" }],
      family: [{ word: "theocracy", desc: "神権政治（対語）" }, { word: "religion", desc: "宗教（secularism が分離しようとするもの）" }, { word: "laïcité", desc: "フランス型世俗主義" }],
      compounds: [{ phrase: "secular state", desc: "世俗国家" }, { phrase: "political secularism", desc: "政治的世俗主義" }]
    },
    "separatism": {
      origin: "ラテン語 separare（分ける）から。se-（離れて）＋parare（準備する）＋-ism。国家や組織から特定の集団が分離・独立することを求める運動や思想。スコットランド・カタルーニャなどが現代の例。",
      derivatives: [{ word: "separatist", desc: "分離主義者（の）" }, { word: "separate", desc: "分ける（の）" }, { word: "separation", desc: "分離" }],
      family: [{ word: "secession", desc: "離脱（関連語）" }, { word: "independence", desc: "独立" }, { word: "unionism", desc: "統一主義（対語）" }],
      compounds: [{ phrase: "political separatism", desc: "政治的分離主義" }, { phrase: "ethnic separatism", desc: "民族分離主義" }]
    },
    "skepticism": {
      origin: "ギリシャ語 skeptikos（考察する）から。skepsis（検討）。「知識の確実性に疑問を呈する」哲学的立場。古代の Pyrrho に始まり、デカルトの方法的懐疑を経て現代科学的思考の基盤となった。",
      derivatives: [{ word: "skeptic", desc: "懐疑論者（の）" }, { word: "skeptical", desc: "懐疑的な" }, { word: "skeptically", desc: "懐疑的に" }],
      family: [{ word: "scope", desc: "範囲（skopein 語根と関連）" }, { word: "dogmatism", desc: "独断主義（対語）" }, { word: "agnosticism", desc: "不可知論（関連語）" }],
      compounds: [{ phrase: "scientific skepticism", desc: "科学的懐疑主義" }, { phrase: "Cartesian skepticism", desc: "デカルト的懐疑論" }]
    },
    "structuralism": {
      origin: "ラテン語 structura（構造）から。「意味・文化・社会は個々の要素でなく要素間の関係（構造）によって決まる」とする理論。ソシュールの言語学から始まり、レヴィ＝ストロース・ラカン・アルチュセールへ。",
      derivatives: [{ word: "structuralist", desc: "構造主義者（の）" }, { word: "structural", desc: "構造の" }, { word: "structure", desc: "構造" }],
      family: [{ word: "construct", desc: "構築する（structura 語根）" }, { word: "poststructuralism", desc: "ポスト構造主義（後継思想）" }, { word: "semiotics", desc: "記号論（関連語）" }],
      compounds: [{ phrase: "linguistic structuralism", desc: "言語的構造主義" }, { phrase: "social structuralism", desc: "社会的構造主義" }]
    },
    "subjectivism": {
      origin: "ラテン語 subjectus（下に置かれた）から。「真理・価値・美は個人の主観に依存する」とする哲学的立場。道徳的主観主義・認識論的主観主義がある。",
      derivatives: [{ word: "subjectivist", desc: "主観主義者（の）" }, { word: "subjective", desc: "主観的な" }, { word: "subject", desc: "主題、主体" }],
      family: [{ word: "objectivism", desc: "客観主義（対語）" }, { word: "relativism", desc: "相対主義（関連語）" }, { word: "intersubjectivity", desc: "間主観性（関連概念）" }],
      compounds: [{ phrase: "moral subjectivism", desc: "道徳的主観主義" }, { phrase: "epistemological subjectivism", desc: "認識論的主観主義" }]
    },
    "theism": {
      origin: "ギリシャ語 theos（神）から。「神（複数可）が存在する」という信念。特に創造し世界に関与する人格神への信仰を指す。無神論（atheism）・不可知論（agnosticism）・汎神論（pantheism）と区別される。",
      derivatives: [{ word: "theist", desc: "有神論者（の）" }, { word: "theistic", desc: "有神論的な" }],
      family: [{ word: "theology", desc: "神学（theos 語根）" }, { word: "atheism", desc: "無神論（対語）" }, { word: "monotheism", desc: "一神教（mono＋theism）" }],
      compounds: [{ phrase: "classical theism", desc: "古典的有神論" }, { phrase: "theism vs atheism", desc: "有神論vs無神論" }]
    },
    "totalitarianism": {
      origin: "イタリア語 totalitario（全体的な）から。ムッソリーニが使い始めた語。国家が個人の生活全領域を統制・支配する体制。ハンナ・アーレントが「全体主義の起源」（1951）で概念を精緻化した。",
      derivatives: [{ word: "totalitarian", desc: "全体主義的な（の）" }, { word: "total", desc: "全体の" }, { word: "totality", desc: "全体性" }],
      family: [{ word: "authoritarianism", desc: "権威主義（類義語）" }, { word: "fascism", desc: "ファシズム（関連語）" }, { word: "democracy", desc: "民主主義（対語）" }],
      compounds: [{ phrase: "totalitarian state", desc: "全体主義国家" }, { phrase: "totalitarian regime", desc: "全体主義体制" }]
    },
    "utopianism": {
      origin: "トーマス・モアの造語 Utopia（どこにもない場所）から。ギリシャ語 ou-（否定）＋topos（場所）。理想的な完璧な社会の実現を目指す思想・運動。現実的に達成不可能と批判されることが多い。",
      derivatives: [{ word: "utopian", desc: "理想郷主義者（の）" }, { word: "utopia", desc: "理想郷" }, { word: "dystopia", desc: "ディストピア（反語）" }],
      family: [{ word: "ideal", desc: "理想（関連語）" }, { word: "dystopia", desc: "暗黒郷（対語）" }, { word: "pragmatism", desc: "実用主義（対語）" }],
      compounds: [{ phrase: "socialist utopianism", desc: "社会主義的理想主義" }, { phrase: "utopian vision", desc: "理想主義的ビジョン" }]
    },
    "voluntarism": {
      origin: "ラテン語 voluntas（意志）から。velle（望む）＋-ism。哲学では「意志が認識・感情より根本的」とする立場（ショーペンハウアーなど）。社会科学では「個人の自由な選択が社会変化をもたらす」立場。",
      derivatives: [{ word: "voluntarist", desc: "意志主義者（の）" }, { word: "voluntary", desc: "自発的な" }, { word: "volunteer", desc: "ボランティア" }],
      family: [{ word: "will", desc: "意志（voluntas の英訳）" }, { word: "volition", desc: "意志力" }, { word: "determinism", desc: "決定論（対語）" }],
      compounds: [{ phrase: "philosophical voluntarism", desc: "哲学的意志主義" }, { phrase: "social voluntarism", desc: "社会的自発主義" }]
    },
    "aerobiology": {
      origin: "ギリシャ語 aer（空気）＋bios（生命）＋logos（学）。大気中の生物学的粒子（花粉・胞子・細菌など）を研究する学問。アレルギー・感染症の媒介経路の研究に重要。",
      derivatives: [{ word: "aerobiological", desc: "空気生物学的な" }, { word: "aerobiology", desc: "空気生物学" }],
      family: [{ word: "biology", desc: "生物学" }, { word: "aerosol", desc: "エアロゾル（関連概念）" }, { word: "pollen", desc: "花粉（aerobiologyの研究対象）" }],
      compounds: [{ phrase: "aerobiology research", desc: "空気生物学研究" }, { phrase: "aerobiology and allergies", desc: "空気生物学とアレルギー" }]
    },
    "audiology": {
      origin: "ラテン語 audire（聞く）＋ギリシャ語 logos（学）。聴覚・聴力・聴覚障害を研究・診断・治療する医学分野。難聴・補聴器・人工内耳などが研究対象。",
      derivatives: [{ word: "audiologist", desc: "聴覚専門家" }, { word: "auditory", desc: "聴覚の" }, { word: "audio", desc: "音声の" }],
      family: [{ word: "audible", desc: "聞こえる（audire 語根）" }, { word: "audience", desc: "聴衆" }, { word: "neurology", desc: "神経学（関連分野）" }],
      compounds: [{ phrase: "clinical audiology", desc: "臨床聴覚学" }, { phrase: "audiology testing", desc: "聴力検査" }]
    },
    "bacteriology": {
      origin: "ラテン語 bacterium（細菌）＋ギリシャ語 logos（学）。細菌の構造・機能・分類・病原性を研究する微生物学の分野。パストゥールとコッホが19世紀に確立した。",
      derivatives: [{ word: "bacteriologist", desc: "細菌学者" }, { word: "bacteriological", desc: "細菌学的な" }, { word: "bacteria", desc: "細菌（複数形）" }],
      family: [{ word: "microbiology", desc: "微生物学（上位分野）" }, { word: "virology", desc: "ウイルス学（関連分野）" }, { word: "pathogen", desc: "病原体（研究対象）" }],
      compounds: [{ phrase: "medical bacteriology", desc: "医学細菌学" }, { phrase: "bacteriology lab", desc: "細菌学実験室" }]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch A (abolitionism - bacteriology)');
