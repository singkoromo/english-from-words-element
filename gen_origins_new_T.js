const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "platonism": {
      origin: "古代ギリシャの哲学者 Platon（プラトン、BC428〜348）の名から。数学的対象・道徳的性質などの抽象的対象が心や言語とは独立して実在するとする立場。",
      derivatives: ["neoplatonism", "mathematical platonism"],
      family: ["idealism variants"],
      compounds: ["mathematical platonism", "moral platonism"]
    },
    "presentism": {
      origin: "英語 present（現在）＋-ism。時制存在論で過去・未来の事物は実在せず、現在の瞬間のみが真に存在するとする立場。ルイスの永遠主義と対立する。",
      derivatives: ["presentist", "eternalism"],
      family: ["temporal ontology"],
      compounds: ["temporal presentism", "growing block theory"]
    },
    "processism": {
      origin: "ラテン語 processus（前進・進行）から。A.N.ホワイトヘッドの過程哲学に基づく。実在は固定した実体でなく動的な過程・出来事の連続であるとする立場。",
      derivatives: ["process philosophy", "process theology"],
      family: ["process-", "event ontology"],
      compounds: ["whitehead process philosophy", "process and reality"]
    },
    "projectivism": {
      origin: "ラテン語 proicere（前に投げる）から。道徳的性質・美的性質は客観的に実在せず、主体が自らの反応を世界に「投影」したものとする哲学的立場。",
      derivatives: ["projectivist", "quasi-realism"],
      family: ["project-", "throw forward"],
      compounds: ["moral projectivism", "hume projectivism"]
    },
    "psychologism": {
      origin: "ギリシャ語 psyche（心・魂）＋logos（学）＋-ism。論理学や数学の法則を心理的事実や精神的過程に還元しようとする立場。フレーゲ・フッサールに批判された。",
      derivatives: ["psychologistic", "anti-psychologism"],
      family: ["psych-", "mind study"],
      compounds: ["logical psychologism", "frege anti-psychologism"]
    },
    "representationalism": {
      origin: "ラテン語 repraesentare（再び現す・代表する）から。心が外界を表象（mental representation）を介してのみ知覚できるとする認識論。直接実在論と対立。",
      derivatives: ["representationalist", "indirect realism"],
      family: ["represent-", "stand for"],
      compounds: ["indirect representationalism", "mental representationalism"]
    },
    "retributivism": {
      origin: "ラテン語 retribuere（返す・報いる）から。re-（返して）＋tribuere（与える）。刑事罰を未来の抑止・改善でなく過去の犯罪への正当な「応報」として正当化する立場。",
      derivatives: ["retributive justice", "lex talionis"],
      family: ["retrib-", "give back"],
      compounds: ["retributive punishment", "retributive justice theory"]
    },
    "revisionism": {
      origin: "英語 revise（修正する）＋-ism。ラテン語 revisere（再び見る）から。マルクス主義・歴史学・哲学など既存の正統的解釈を根本的に見直そうとする立場や運動。",
      derivatives: ["revisionist", "historical revisionism"],
      family: ["revis-", "re-examine"],
      compounds: ["historical revisionism", "moral revisionism"]
    },
    "semiosis": {
      origin: "ギリシャ語 semeion（記号・徴候）から。C.S.パースが用いた「記号作用」の概念。表意体（記号）・対象・解釈項の三項関係で意味が生じる過程全体。",
      derivatives: ["semiotic", "sign process"],
      family: ["semio-", "sign"],
      compounds: ["unlimited semiosis", "peircean semiosis"]
    },
    "situatedness": {
      origin: "英語 situated（状況に置かれた）＋-ness。ラテン語 situare（置く）から。存在が特定の身体・文化・歴史・場所に「埋め込まれて」いるという現象学的・フェミニスト哲学の概念。",
      derivatives: ["situated knowledge", "embodied situatedness"],
      family: ["situ-", "place"],
      compounds: ["situated knowledge", "haraway situatedness"]
    },
    "spatiality": {
      origin: "ラテン語 spatium（空間・距離）から。存在が空間的次元において在るという性質。メルロ＝ポンティは身体の住まう空間性を現象学的に分析した。",
      derivatives: ["spatial", "spatialization"],
      family: ["spat-", "space"],
      compounds: ["embodied spatiality", "lived spatiality"]
    },
    "supervenience": {
      origin: "ラテン語 supervenire（上から来る・付け加わる）から。super-（上に）＋venire（来る）。上位レベルの性質が下位レベルの性質に依存するという関係。心脳関係の論争で核心。",
      derivatives: ["supervenient", "subvening properties"],
      family: ["super-", "ven-"],
      compounds: ["mental supervenience", "global supervenience", "local supervenience"]
    },
    "syncretism": {
      origin: "ギリシャ語 synkretismos（クレタ人の連合）から。syn-（共に）＋Krete（クレタ島）。当初は政治同盟を指したが、哲学・宗教の文脈では異なる教義を統合しようとする試み。",
      derivatives: ["syncretic", "religious syncretism"],
      family: ["syn-", "together"],
      compounds: ["religious syncretism", "philosophical syncretism"]
    },
    "temporality": {
      origin: "ラテン語 temporalis（時間の）から。tempus（時間）。存在が時間的流れの中にあるという構造的性質。ハイデガーは現存在（ダーザイン）の存在様式の根拠を時間性に見た。",
      derivatives: ["temporal", "atemporal"],
      family: ["tempor-", "time"],
      compounds: ["existential temporality", "dasein temporality"]
    },
    "transcendentalism": {
      origin: "ラテン語 transcendere（超える）から。trans-（超えて）＋scandere（登る）。カントの先験的観念論と、エマーソン・ソローのアメリカン哲学運動の両方を指す。",
      derivatives: ["transcendental", "transcendent"],
      family: ["transcend-", "beyond"],
      compounds: ["kantian transcendentalism", "american transcendentalism"]
    },
    "utilitarian": {
      origin: "ラテン語 utilitas（有用性・便益）から。utilis（有用な）。ジェレミー・ベンサムが創始し J.S.ミルが発展させた「最大多数の最大幸福」を道徳基準とする功利主義の形容詞。",
      derivatives: ["utilitarianism", "utility"],
      family: ["util-", "useful"],
      compounds: ["act utilitarian", "rule utilitarian", "utilitarian calculus"]
    },
    "abiogenesis": {
      origin: "ギリシャ語 a-（否定）＋bios（生命）＋genesis（起源）。生命が非生命の化学物質から自然発生的に生じるプロセス。パスツールが自然発生説を否定後も宇宙生物学で探求される。",
      derivatives: ["spontaneous generation", "chemical evolution"],
      family: ["a-", "bio-", "gen-"],
      compounds: ["abiogenesis hypothesis", "rna world hypothesis"]
    },
    "accretion": {
      origin: "ラテン語 accretio（成長・増大）から。ad-（〜へ）＋crescere（成長する）。天文学では塵・ガスが重力で集積して惑星・星が形成する過程。地質学では堆積物の付加も指す。",
      derivatives: ["accrete", "accretionary wedge"],
      family: ["accresc-", "grow"],
      compounds: ["accretion disk", "accretion rate", "accretion process"]
    },
    "allele": {
      origin: "ギリシャ語 allelos（互いの・相互の）から。allelomorph（対立形質）の短縮形。同じ染色体上の特定の遺伝子座に存在する遺伝子の異なる型。",
      derivatives: ["allelic", "allelomorph"],
      family: ["allel-", "each other"],
      compounds: ["dominant allele", "recessive allele", "allele frequency"]
    },
    "allometry": {
      origin: "ギリシャ語 allos（異なる）＋metron（測定）。体の異なる部位が体全体と比例しない速度で成長する現象。ヒルの公式で記述され、進化生物学・生態学で重要。",
      derivatives: ["allometric scaling", "isometry"],
      family: ["allo-", "metr-"],
      compounds: ["allometric scaling", "allometric growth"]
    },
    "alveolus": {
      origin: "ラテン語 alveolus（小さなくぼみ・小溝）から。alveus（くぼみ）の指小形。肺における気体交換の場（肺胞）、または歯根を収める顎骨のくぼみ（歯槽）を指す。",
      derivatives: ["alveolar", "pulmonary alveoli"],
      family: ["alve-", "cavity"],
      compounds: ["pulmonary alveolus", "alveolar sac", "alveolar gas exchange"]
    },
    "amino-acid": {
      origin: "アミン（amine：窒素含有有機化合物）＋酸（acid：カルボキシル基を持つ）の複合語。20種類の標準アミノ酸がペプチド結合でつながりタンパク質を形成する。",
      derivatives: ["peptide", "protein"],
      family: ["ammo-", "acid"],
      compounds: ["essential amino acid", "amino acid sequence", "amino acid residue"]
    },
    "angiosperm": {
      origin: "ギリシャ語 angeion（容器・管）＋sperma（種）。種子が果実（子房）に包まれた植物群。現存植物の最大グループで約25万種。裸子植物（gymnosperm）と対比。",
      derivatives: ["flowering plant", "dicot", "monocot"],
      family: ["angio-", "sperm-"],
      compounds: ["angiosperm diversity", "angiosperm flower"]
    },
    "anisotropy": {
      origin: "ギリシャ語 an-（否定）＋isos（等しい）＋tropos（方向・転換）。測定方向によって物理的性質（弾性・電気・光学）が異なる状態。木材の木目方向依存性が典型例。",
      derivatives: ["anisotropic", "isotropy"],
      family: ["an-", "iso-", "trop-"],
      compounds: ["optical anisotropy", "mechanical anisotropy", "cosmic anisotropy"]
    },
    "anode": {
      origin: "ギリシャ語 anodos（上への道）から。ana-（上へ）＋hodos（道）。電気分解・電池で酸化が起こる電極。電流が外部回路から流れ込む正極（充電時）または負極（放電時）。",
      derivatives: ["anodic", "cathode"],
      family: ["an-", "hod-"],
      compounds: ["anode oxidation", "sacrificial anode", "anode ray"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch T (Philosophy rest + Biology part 1: platonism-anode, 41 words)');
