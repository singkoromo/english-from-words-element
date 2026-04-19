/**
 * gen_origins_new_K.js — Psychology(7)+Philosophy(7)+Science part1(14) from data-mixed-54
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "affective": {
      origin: "ラテン語 affectus（感情・情動）から。ad-（〜に）＋facere（する）の過去分詞。「感情によって動かされた」が原義。心理学・精神医学では感情や情動に関連する事柄を表す形容詞として定着した。",
      derivatives: [
        { word: "affective disorder", desc: "感情障害（例：うつ病・双極性障害）" },
        { word: "affectively", desc: "感情的に" }
      ],
      family: [
        { word: "affect", desc: "情動・感情（名詞）；影響する（動詞）" },
        { word: "affect", desc: "心理学では「感情状態」の意味" },
        { word: "emotion", desc: "感情（類義語）" }
      ],
      compounds: [
        { phrase: "affective computing", desc: "感情コンピューティング" },
        { phrase: "affective neuroscience", desc: "情動神経科学" }
      ]
    },
    "amygdala": {
      origin: "ギリシャ語 amygdale（アーモンド）から。amygdalon（アーモンドの実）に由来。脳内でアーモンド形をしたこの構造物に対して Thomas Willis が17世紀に命名した。感情（特に恐怖・怒り）の処理と記憶の感情的側面に重要な役割を持つ。",
      derivatives: [
        { word: "amygdalar", desc: "扁桃体の（形容詞）" },
        { word: "amygdaloid", desc: "扁桃体様の" }
      ],
      family: [
        { word: "almond", desc: "アーモンド（amygdale と意味対応）" }
      ],
      compounds: [
        { phrase: "amygdala hijack", desc: "扁桃体ハイジャック（感情的反応の暴走）" },
        { phrase: "amygdala activation", desc: "扁桃体の活性化" }
      ]
    },
    "desensitize": {
      origin: "英語 de-（除去・逆）＋sensitize（敏感にする）から。sensitive はラテン語 sensus（感覚）に由来。「感受性を除く」が原義。繰り返し刺激にさらすことで反応を鈍らせること。心理療法・免疫療法・社会問題の文脈で使われる。",
      derivatives: [
        { word: "desensitization", desc: "脱感作・感受性低下" },
        { word: "systematic desensitization", desc: "系統的脱感作（恐怖症治療法）" }
      ],
      family: [
        { word: "sensitize", desc: "敏感にする" },
        { word: "sensitive", desc: "感受性の高い" },
        { word: "insensitive", desc: "鈍感な" }
      ],
      compounds: [
        { phrase: "desensitize to violence", desc: "暴力への感受性を鈍らせる" },
        { phrase: "allergy desensitization", desc: "アレルギーの脱感作療法" }
      ]
    },
    "dialectical": {
      origin: "ギリシャ語 dialektikos（議論の技法の）から。dialegesthai（対話する）に由来し、dia-（通して）＋legesthai（話す）。ヘーゲルの弁証法（正・反・合）やマルクスの弁証法的唯物論で重要な概念。対立する力の相互作用を通じた発展を指す。",
      derivatives: [
        { word: "dialectics", desc: "弁証法（名詞）" },
        { word: "dialectically", desc: "弁証法的に" }
      ],
      family: [
        { word: "dialect", desc: "方言（dialektikos と同語根）" },
        { word: "dialogue", desc: "対話（dia+logos）" },
        { word: "logic", desc: "論理学（logos から）" }
      ],
      compounds: [
        { phrase: "dialectical materialism", desc: "弁証法的唯物論" },
        { phrase: "dialectical behavior therapy", desc: "弁証法的行動療法（DBT）" }
      ]
    },
    "dopamine": {
      origin: "DOPA（ジヒドロキシフェニルアラニン）＋amine（アミン化合物）の合成語。1958年にArvidCarlsson が脳内の神経伝達物質として同定し命名。報酬・動機づけ・快感に関わる脳内化学物質で「幸福ホルモン」とも呼ばれる。",
      derivatives: [
        { word: "dopaminergic", desc: "ドーパミン作動性の" },
        { word: "dopamine hit", desc: "ドーパミンの放出による快感" }
      ],
      family: [
        { word: "serotonin", desc: "セロトニン（別の神経伝達物質）" },
        { word: "adrenaline", desc: "アドレナリン（ドーパミンの関連物質）" }
      ],
      compounds: [
        { phrase: "dopamine reward", desc: "ドーパミン報酬" },
        { phrase: "dopamine system", desc: "ドーパミン系" }
      ]
    },
    "heritability": {
      origin: "ラテン語 hereditare（相続する）から。heres（相続人）に由来。heritable（遺伝可能な）＋-ity（名詞化）。特定の表現型の変動のうち遺伝的要因が占める割合を表す統計的指標。遺伝学・行動遺伝学で使われる専門語。",
      derivatives: [
        { word: "heritable", desc: "遺伝可能な" },
        { word: "heritable trait", desc: "遺伝形質" }
      ],
      family: [
        { word: "hereditary", desc: "遺伝の・世襲の" },
        { word: "heritage", desc: "遺産・文化遺産" },
        { word: "inherit", desc: "相続する・受け継ぐ" }
      ],
      compounds: [
        { phrase: "heritability estimate", desc: "遺伝率の推定値" },
        { phrase: "broad-sense heritability", desc: "広義の遺伝率" }
      ]
    },
    "mania": {
      origin: "ギリシャ語 mania（狂気・熱狂）から。mainesthai（狂う）に由来。医学では双極性障害における躁状態を指し、「〜への狂的な熱中」を表す接尾辞（kleptomania など）としても使われる。",
      derivatives: [
        { word: "manic", desc: "躁の・熱狂的な（形容詞）" },
        { word: "maniacal", desc: "狂的な" }
      ],
      family: [
        { word: "kleptomania", desc: "窃盗癖（klept+mania）" },
        { word: "pyromania", desc: "放火癖（pyro+mania）" },
        { word: "manic-depressive", desc: "躁うつ病の" }
      ],
      compounds: [
        { phrase: "bipolar mania", desc: "双極性障害の躁状態" },
        { phrase: "manic episode", desc: "躁エピソード" }
      ]
    },
    "aesthetics": {
      origin: "ギリシャ語 aisthetikos（知覚の・感覚的な）から。aisthesthai（知覚する）に由来し、aisthesis（感覚）が語根。18世紀にBaumgartenが「美の哲学（Aesthetica）」として体系化。美・芸術・感性の哲学的研究を指す。",
      derivatives: [
        { word: "aesthetic", desc: "美的な・美学的な（形容詞）" },
        { word: "aesthetically", desc: "美的に" },
        { word: "aestheticism", desc: "唯美主義" }
      ],
      family: [
        { word: "anesthetic", desc: "麻酔（感覚を除く）" },
        { word: "synaesthesia", desc: "共感覚（感覚の混合）" }
      ],
      compounds: [
        { phrase: "aesthetic experience", desc: "美的経験" },
        { phrase: "aesthetic judgment", desc: "美的判断" }
      ]
    },
    "coherentism": {
      origin: "ラテン語 cohaerere（結合する・まとまる）から。co-（共に）＋haerere（くっつく）。信念は他の信念との整合性（coherence）によって正当化されるという認識論的立場。基礎主義（foundationalism）の対立概念。",
      derivatives: [
        { word: "coherentist", desc: "整合主義者" }
      ],
      family: [
        { word: "coherent", desc: "一貫した・整合的な" },
        { word: "coherence", desc: "一貫性・整合性" },
        { word: "incoherent", desc: "支離滅裂な" }
      ],
      compounds: [
        { phrase: "epistemic coherentism", desc: "認識論的整合主義" },
        { phrase: "coherentist theory", desc: "整合主義理論" }
      ]
    },
    "fallibilism": {
      origin: "ラテン語 fallere（欺く・誤る）から。fallible（誤りうる）＋-ism。C.S.Peirce が19世紀に提唱した哲学的立場で、いかなる知識や信念も誤りの可能性があるとする見解。科学的方法の基礎でもある。",
      derivatives: [
        { word: "fallibilist", desc: "可謬主義者" },
        { word: "infallible", desc: "絶対確実な（否定形）" }
      ],
      family: [
        { word: "fallible", desc: "誤りうる" },
        { word: "fail", desc: "失敗する（fallere から）" },
        { word: "false", desc: "偽の（fallere から）" }
      ],
      compounds: [
        { phrase: "epistemic fallibilism", desc: "認識論的可謬主義" },
        { phrase: "scientific fallibilism", desc: "科学的可謬主義" }
      ]
    },
    "immanence": {
      origin: "ラテン語 immanere（内にとどまる）から。in-（中に）＋manere（とどまる）。神や根本的な力が世界の外ではなく内側に内在するという哲学・神学的概念。「超越（transcendence）」の対義語として使われる。",
      derivatives: [
        { word: "immanent", desc: "内在する・内在的な（形容詞）" },
        { word: "immanently", desc: "内在的に" }
      ],
      family: [
        { word: "remain", desc: "残る・とどまる（manere から）" },
        { word: "permanent", desc: "恒久的な（per+manere）" },
        { word: "transcendence", desc: "超越性（対義語）" }
      ],
      compounds: [
        { phrase: "divine immanence", desc: "神の内在性" },
        { phrase: "plane of immanence", desc: "内在性の平面（ドゥルーズの概念）" }
      ]
    },
    "kantian": {
      origin: "プロイセンの哲学者 Immanuel Kant（1724-1804）の名から派生した形容詞。カントの「純粋理性批判」「実践理性批判」「判断力批判」の3批判書に代表される批判哲学に関する。定言命法・カテゴリカルな義務倫理学・先験的観念論などが含まれる。",
      derivatives: [
        { word: "Kantianism", desc: "カント哲学" },
        { word: "neo-Kantian", desc: "新カント派の" }
      ],
      family: [
        { word: "categorical imperative", desc: "定言命法（カントの倫理概念）" },
        { word: "transcendental", desc: "超越論的な（カントの中心概念）" }
      ],
      compounds: [
        { phrase: "Kantian ethics", desc: "カント倫理学" },
        { phrase: "Kantian philosophy", desc: "カント哲学" }
      ]
    },
    "acoustics": {
      origin: "ギリシャ語 akoustikos（聴覚の）から。akouein（聞く）に由来。音の発生・伝播・受聴の科学的研究。建築音響学（ホールの音響設計）から物理音響学まで幅広い分野を包含する。",
      derivatives: [
        { word: "acoustic", desc: "音響の・電気を使わない（形容詞）" },
        { word: "acoustically", desc: "音響的に" }
      ],
      family: [
        { word: "acoustic guitar", desc: "アコースティックギター" },
        { word: "catacoustics", desc: "反射音響学" }
      ],
      compounds: [
        { phrase: "room acoustics", desc: "室内音響" },
        { phrase: "acoustic engineering", desc: "音響工学" }
      ]
    },
    "anion": {
      origin: "ギリシャ語 anion（上に行くもの）から。ana-（上へ）＋ion（行くもの）。電気分解で陽極（アノード）に向かって移動する負電荷の粒子を Michael Faraday が命名（1834年）。塩化物イオン（Cl⁻）などが代表例。",
      derivatives: [
        { word: "anionic", desc: "陰イオンの" }
      ],
      family: [
        { word: "cation", desc: "陽イオン（kata-下へ）" },
        { word: "ion", desc: "イオン（ion：行くもの）" },
        { word: "electrode", desc: "電極" }
      ],
      compounds: [
        { phrase: "anion exchange", desc: "陰イオン交換" },
        { phrase: "anion gap", desc: "アニオンギャップ（医学指標）" }
      ]
    },
    "atomic": {
      origin: "ギリシャ語 atomos（分割できない）から。a-（否定）＋tomos（切ることができる）。Democritus が物質の最小単位として想定した「原子」概念に由来。19世紀以降の化学・物理学で科学的に確立された語。",
      derivatives: [
        { word: "atom", desc: "原子" },
        { word: "atomically", desc: "原子的に" }
      ],
      family: [
        { word: "atom", desc: "原子" },
        { word: "anatomy", desc: "解剖学（ana+tomos：切り分ける）" },
        { word: "tomography", desc: "断層撮影（tomos+graphein）" }
      ],
      compounds: [
        { phrase: "atomic structure", desc: "原子構造" },
        { phrase: "atomic number", desc: "原子番号" }
      ]
    },
    "cation": {
      origin: "ギリシャ語 kation（下に行くもの）から。kata-（下へ）＋ion（行くもの）。電気分解で陰極（カソード）に向かって移動する正電荷のイオンを Faraday が命名（1834年）。ナトリウムイオン（Na⁺）などが代表例。",
      derivatives: [
        { word: "cationic", desc: "陽イオンの" }
      ],
      family: [
        { word: "anion", desc: "陰イオン（対義語）" },
        { word: "ion", desc: "イオン" },
        { word: "cathode", desc: "陰極（kation の目的地）" }
      ],
      compounds: [
        { phrase: "cation exchange", desc: "陽イオン交換" },
        { phrase: "cation transport", desc: "陽イオン輸送" }
      ]
    },
    "combustion": {
      origin: "ラテン語 combustio（焼却・燃焼）から。com-（完全に）＋burere（燃やす）。「完全に燃やすこと」が原義。燃料と酸化剤（通常は酸素）の化学反応で熱と光を発する現象を指す。内燃機関・エネルギー産業の基礎概念。",
      derivatives: [
        { word: "combust", desc: "燃焼する（動詞）" },
        { word: "combustible", desc: "可燃性の" }
      ],
      family: [
        { word: "incombustible", desc: "不燃の" },
        { word: "bonfire", desc: "かがり火（burere と語根対応）" }
      ],
      compounds: [
        { phrase: "internal combustion engine", desc: "内燃機関" },
        { phrase: "combustion chamber", desc: "燃焼室" }
      ]
    },
    "fluorescence": {
      origin: "ラテン語 fluor（流れる鉱石・蛍石）から。fluorspar（蛍石）が UV 光で光る性質を持つことを G.G.Stokes が1852年に観察して命名した。-escence は「徐々に〜になる状態」を示す接尾辞。光を吸収して異なる波長の光として再放出する現象。",
      derivatives: [
        { word: "fluorescent", desc: "蛍光性の" },
        { word: "fluorophore", desc: "蛍光団（分子)" }
      ],
      family: [
        { word: "phosphorescence", desc: "りん光（光源除去後も発光）" },
        { word: "luminescence", desc: "ルミネセンス（冷光の総称）" },
        { word: "fluoride", desc: "フッ化物（fluor と同語根）" }
      ],
      compounds: [
        { phrase: "fluorescent light", desc: "蛍光灯" },
        { phrase: "fluorescence microscopy", desc: "蛍光顕微鏡法" }
      ]
    },
    "hormone": {
      origin: "ギリシャ語 horman（刺激する・駆り立てる）から。Ernest Starling が1905年に体内の化学的メッセンジャー物質に対して命名した。「刺激するもの」が原義。内分泌系によって分泌され、血液を通じて標的器官に信号を送る分子。",
      derivatives: [
        { word: "hormonal", desc: "ホルモンの（形容詞）" },
        { word: "hormone therapy", desc: "ホルモン療法" }
      ],
      family: [
        { word: "endocrine", desc: "内分泌の（ホルモン産生）" },
        { word: "neurotransmitter", desc: "神経伝達物質（ホルモンと類似の化学信号）" }
      ],
      compounds: [
        { phrase: "growth hormone", desc: "成長ホルモン" },
        { phrase: "hormone imbalance", desc: "ホルモンバランスの乱れ" }
      ]
    },
    "magnetism": {
      origin: "ギリシャ語 Magnesia（磁鉄鉱が産出されたギリシャのマグネシア地方）から。古代から磁鉄鉱（magnetite）の磁力が知られており、その産地名が語源となった。物理学では磁場・磁力を、比喩的には「人を引きつける魅力」の意味でも使われる。",
      derivatives: [
        { word: "magnetic", desc: "磁気の・魅力的な" },
        { word: "magnetize", desc: "磁化する・引きつける" }
      ],
      family: [
        { word: "magnet", desc: "磁石" },
        { word: "electromagnet", desc: "電磁石" },
        { word: "magnesium", desc: "マグネシウム（同地名由来）" }
      ],
      compounds: [
        { phrase: "personal magnetism", desc: "個人的な魅力" },
        { phrase: "magnetic field", desc: "磁場" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch K (psychology + philosophy + science part1)');
