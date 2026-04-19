const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "diorite": {
      origin: "ギリシャ語 diorizein（区別する・境界を定める）から。中間質の深成岩で石英をほぼ含まない。花崗岩と斑れい岩の中間の組成を持ち、暗色と淡色の鉱物が混ざる。",
      derivatives: ["igneous rock", "plutonic rock"],
      family: ["dior-", "distinguish"],
      compounds: ["diorite intrusion", "quartz diorite"]
    },
    "diploid": {
      origin: "ギリシャ語 diploos（二重の）＋eidos（形）。通常の体細胞のように相同染色体が2セット（2n）存在する細胞または生物の状態。対義語は一倍体（haploid）。",
      derivatives: ["diploid cell", "polyploid"],
      family: ["diplo-", "double"],
      compounds: ["diploid organism", "diploid number", "somatic diploid cell"]
    },
    "dissipation": {
      origin: "ラテン語 dissipare（散らす・消散させる）から。dis-（分散）＋sipare（投げる）。エネルギーが熱・乱流などに変換されて利用できなくなる過程。熱力学第二法則に関連。",
      derivatives: ["dissipate", "energy loss"],
      family: ["dissip-", "scatter"],
      compounds: ["energy dissipation", "heat dissipation", "viscous dissipation"]
    },
    "divergent": {
      origin: "ラテン語 divergere（分かれる）から。di-（二つに）＋vergere（傾く）。進化では共通祖先から異なる環境への適応で形質が分かれる「適応放散」を指す。",
      derivatives: ["divergence", "adaptive radiation"],
      family: ["di-", "verg-"],
      compounds: ["divergent evolution", "divergent boundary", "divergent series"]
    },
    "echolocation": {
      origin: "英語 echo（木霊・反響）＋location（位置特定）。コウモリ・イルカ・クジラが超音波パルスを発して反響から位置・形状を判定する生体音響ナビゲーション能力。",
      derivatives: ["biosonar", "echolocating"],
      family: ["bioacoustics"],
      compounds: ["bat echolocation", "dolphin echolocation", "sonar echolocation"]
    },
    "embryology": {
      origin: "ギリシャ語 embryon（胎児・胚）＋logos（学）。受精卵から成体への発生過程（卵割・胚葉形成・器官形成）を研究する生物学の一分野。",
      derivatives: ["embryonic", "developmental biology"],
      family: ["embryo-", "log-"],
      compounds: ["developmental embryology", "comparative embryology"]
    },
    "emergent": {
      origin: "ラテン語 emergere（浮かび上がる）から。e-（外へ）＋mergere（沈める）。複雑なシステムで部分の相互作用から予測できない新しい性質が生じる創発現象。",
      derivatives: ["emergence", "emergentism"],
      family: ["emerg-", "arise"],
      compounds: ["emergent property", "emergent behavior", "emergent complexity"]
    },
    "enantiomer": {
      origin: "ギリシャ語 enantios（反対の・向かい合う）＋meros（部分）。同じ化学式・結合順序を持つが鏡像として重ね合わせられない一対の分子の各々。薬理学・食品化学で重要。",
      derivatives: ["chirality", "stereoisomer"],
      family: ["enantio-", "mero-"],
      compounds: ["enantiomeric pair", "enantiomeric excess", "chiral enantiomer"]
    },
    "epistasis": {
      origin: "ギリシャ語 epistasis（上に立つこと）から。epi-（上に）＋histanai（立てる）。一つの遺伝子座の対立遺伝子が別の遺伝子座の対立遺伝子の表現型効果を隠す遺伝現象。",
      derivatives: ["epistatic", "hypostasis"],
      family: ["epi-", "stasis"],
      compounds: ["gene epistasis", "epistatic interaction", "epistatic effect"]
    },
    "excretion": {
      origin: "ラテン語 excretio（ふるい分け・排出）から。ex-（外へ）＋cernere（ふるい分ける）。代謝によって生じた老廃物（尿素・二酸化炭素・水）を体外に排出する生理過程。",
      derivatives: ["excrete", "secretion"],
      family: ["excret-", "sieve out"],
      compounds: ["renal excretion", "excretion product", "nitrogenous excretion"]
    },
    "extremophile": {
      origin: "ラテン語 extremus（極端な）＋ギリシャ語 philos（好む）。高温・低温・強酸・強塩基・高塩分・高圧などの極限環境で生育する微生物。好熱菌・好塩菌が代表例。",
      derivatives: ["thermophile", "halophile", "acidophile"],
      family: ["extremo-", "phil-"],
      compounds: ["thermophilic extremophile", "deep sea extremophile"]
    },
    "fibril": {
      origin: "ラテン語 fibrilla（細い繊維）から。fibra（繊維）の指小形。コラーゲン線維・アクチンフィラメントなどを構成する微細な糸状構造単位。",
      derivatives: ["fibrillation", "microfibril"],
      family: ["fibr-", "fiber"],
      compounds: ["collagen fibril", "fibril assembly", "amyloid fibril"]
    },
    "flagellum": {
      origin: "ラテン語 flagellum（むち・鞭）から。細菌の回転するむち状の運動器官、または真核生物の波打つむち状の推進器官（精子の尾部など）。",
      derivatives: ["flagella", "flagellate"],
      family: ["flagell-", "whip"],
      compounds: ["bacterial flagellum", "flagellum rotation", "eukaryotic flagellum"]
    },
    "food-web": {
      origin: "英語 food（食物）＋web（網・網状構造）。生態系内の捕食者と被食者の複雑な相互依存関係の網状構造。単純な食物連鎖（food chain）の概念を拡張したもの。",
      derivatives: ["trophic web", "food chain"],
      family: ["ecological networks"],
      compounds: ["marine food web", "terrestrial food web", "top predator"]
    },
    "fulcrum": {
      origin: "ラテン語 fulcrum（支え・台）から。fulcire（支える）。てこの原理（lever principle）で荷重と力の間に位置する回転の中心点。アルキメデスが活用した概念。",
      derivatives: ["lever", "pivot"],
      family: ["fulc-", "support"],
      compounds: ["fulcrum point", "lever fulcrum", "mechanical fulcrum"]
    },
    "germination": {
      origin: "ラテン語 germinare（芽を出す）から。germen（芽・胚）。種子が吸水・温度・光などの条件下で発芽を開始するプロセス。代謝の再活性化から始まる。",
      derivatives: ["germinate", "seedling"],
      family: ["germ-", "sprout"],
      compounds: ["seed germination", "germination rate", "germination conditions"]
    },
    "glycerol": {
      origin: "ギリシャ語 glykys（甘い）＋-ol（アルコールの化学的接尾辞）。3つのヒドロキシ基を持つ三価アルコール。中性脂肪・リン脂質の骨格となり保湿剤にも使用される。",
      derivatives: ["glycerin", "triglyceride"],
      family: ["glyc-", "sweet"],
      compounds: ["glycerol backbone", "glycerol-3-phosphate", "glycerol production"]
    },
    "haploid": {
      origin: "ギリシャ語 haploos（単純な・一重の）＋eidos（形）。染色体を一セット（n）しか持たない細胞。配偶子（精子・卵子）がハプロイドで、受精によって二倍体（2n）が形成される。",
      derivatives: ["gamete", "meiosis"],
      family: ["haplo-", "simple"],
      compounds: ["haploid cell", "haploid number", "haploid organism"]
    },
    "herbivore": {
      origin: "ラテン語 herba（草・植物）＋vorare（むさぼり食う）から。植物を主食とする動物。食物連鎖の一次消費者として生産者（植物）のエネルギーを動物界に移す。",
      derivatives: ["herbivorous", "grazer"],
      family: ["herb-", "vor-"],
      compounds: ["obligate herbivore", "herbivore guild", "large herbivore"]
    },
    "heredity": {
      origin: "ラテン語 hereditas（相続・遺産）から。heres（相続人）。生物が親から子へと形質（遺伝情報）を伝える生物学的プロセス。メンデルの法則が基礎を確立した。",
      derivatives: ["hereditary", "heritable"],
      family: ["hered-", "heir"],
      compounds: ["genetic heredity", "hereditary disease", "laws of heredity"]
    },
    "hygroscopic": {
      origin: "ギリシャ語 hygros（湿った）＋skopein（観察する・調べる）。空気中の水蒸気を自発的に吸収・保持しやすい物質の性質。シリカゲル・塩化カルシウムが代表例。",
      derivatives: ["hygroscopy", "deliquescent"],
      family: ["hygro-", "scop-"],
      compounds: ["hygroscopic material", "hygroscopic salt", "hygroscopic absorption"]
    },
    "implosion": {
      origin: "英語 im-（内側へ）＋explosion（爆発）。外部の圧力が内部より大きい場合に内側へ崩壊する現象。真空管・海底構造物・内破型核兵器などで見られる。",
      derivatives: ["implode", "collapse"],
      family: ["im-", "plod-"],
      compounds: ["implosion device", "cavitation implosion", "stellar implosion"]
    },
    "inorganic": {
      origin: "英語 in-（否定）＋organic（有機の）。炭素を基本骨格としない化合物の総称。岩石・鉱物・金属・水など。生命活動に直接由来しない物質を指す。",
      derivatives: ["inorganic chemistry", "mineral"],
      family: ["in-", "organ-"],
      compounds: ["inorganic compound", "inorganic chemistry", "inorganic salt"]
    },
    "insulation": {
      origin: "ラテン語 insula（島）から。insulate（島にする・切り離す）。熱・電気・音の伝達を遮断する材料または過程。島のように周囲から孤立させることが語源の意。",
      derivatives: ["insulator", "thermal insulation"],
      family: ["insul-", "island"],
      compounds: ["thermal insulation", "electrical insulation", "sound insulation"]
    },
    "intercellular": {
      origin: "ラテン語 inter-（間に）＋cellula（小部屋）。細胞と細胞の間に存在する空間・液体・物質を指す形容詞。細胞間コミュニケーション（分泌シグナル）の場となる。",
      derivatives: ["intercellular space", "interstitial"],
      family: ["inter-", "cell-"],
      compounds: ["intercellular space", "intercellular communication", "intercellular signaling"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch V (Biology/Science part 3: diorite-intercellular, 25 words)');
