const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "aphelion": {
      origin: "ギリシャ語 apo-（離れて）＋helios（太陽）。惑星・彗星などの軌道上で太陽から最も遠い点。対義語は近日点（perihelion）。地球の遠日点は7月初旬。",
      derivatives: ["perihelion", "apogee"],
      family: ["apo-", "helio-"],
      compounds: ["earth's aphelion", "aphelion distance"]
    },
    "asthenosphere": {
      origin: "ギリシャ語 asthenes（弱い）＋sphaira（球）。リソスフェア（岩石圏）の下、深さ約80〜660kmの軟化した岩盤層。プレートテクトニクスの移動を可能にする。",
      derivatives: ["lithosphere", "mantle"],
      family: ["astheno-", "spher-"],
      compounds: ["asthenospheric flow", "mantle asthenosphere"]
    },
    "axon": {
      origin: "ギリシャ語 axon（軸）から。ニューロン（神経細胞）から伸びる長い突起で電気信号（活動電位）を他のニューロンや筋肉へ伝達する。",
      derivatives: ["axonal", "myelinated axon"],
      family: ["axo-", "axis"],
      compounds: ["axon terminal", "myelinated axon", "axon hillock"]
    },
    "baryon": {
      origin: "ギリシャ語 barys（重い）＋-on（粒子接尾辞）。3つのクォークから構成される素粒子の総称。陽子・中性子が代表例。宇宙の通常物質の大部分を構成する。",
      derivatives: ["meson", "hadron"],
      family: ["bary-", "heavy"],
      compounds: ["baryonic matter", "baryon number", "baryon asymmetry"]
    },
    "bathymetry": {
      origin: "ギリシャ語 bathys（深い）＋metron（測定）。海洋・湖沼・川の水底地形の深さを測定・マッピングする科学。音響測深（SONAR）が主要手法。",
      derivatives: ["bathymetric chart", "hypsometry"],
      family: ["bathy-", "metr-"],
      compounds: ["ocean bathymetry", "seafloor bathymetric map"]
    },
    "benthic": {
      origin: "ギリシャ語 benthos（海の深み・底）から。水域の底部（海底・湖底・川底）に生息または関連する生物・環境・プロセスを形容する語。",
      derivatives: ["benthos", "benthic zone"],
      family: ["benth-", "depth"],
      compounds: ["benthic organism", "benthic zone", "benthic community"]
    },
    "biogeography": {
      origin: "ギリシャ語 bios（生命）＋geo（地球・大地）＋graphia（記述）。生物種の地理的分布パターンとその原因（地質・気候・進化）を研究する生態学の一分野。",
      derivatives: ["biogeographic", "island biogeography"],
      family: ["bio-", "geo-", "graph-"],
      compounds: ["island biogeography", "historical biogeography"]
    },
    "blastocyst": {
      origin: "ギリシャ語 blastos（胚芽・新芽）＋kystis（袋）。受精後約4〜5日の発生段階。内部細胞塊（胚性幹細胞の源）と外側の栄養膜細胞層からなる中空の球状胚。",
      derivatives: ["blastomere", "inner cell mass"],
      family: ["blast-", "cyst-"],
      compounds: ["blastocyst implantation", "blastocyst transfer", "inner cell mass"]
    },
    "boson": {
      origin: "インドの物理学者 Satyendra Nath Bose（ボース、1894〜1974）の名から。1924年にアインシュタインと共に量子統計を開発。整数スピンを持ち同じ状態に複数存在できる粒子。",
      derivatives: ["higgs boson", "gauge boson"],
      family: ["quantum particles"],
      compounds: ["higgs boson", "gauge boson", "bose-einstein condensate"]
    },
    "calorie": {
      origin: "ラテン語 calor（熱・温もり）から。フランス語 calorie を経て英語化。1カロリー＝水1gを1°C上昇させる熱量。食品のエネルギーはキロカロリー（kcal）で表される。",
      derivatives: ["caloric", "kilocalorie"],
      family: ["calor-", "heat"],
      compounds: ["calorie counting", "empty calorie", "caloric restriction"]
    },
    "carnivore": {
      origin: "ラテン語 carnivorus（肉を食べる）から。caro（肉）＋vorare（むさぼり食う）。動物性食物を主食とする生物。食物連鎖の高次消費者。",
      derivatives: ["carnivorous", "omnivore", "herbivore"],
      family: ["carn-", "vor-"],
      compounds: ["apex carnivore", "obligate carnivore", "carnivore diet"]
    },
    "cathode": {
      origin: "ギリシャ語 kathodos（下への道）から。kata-（下へ）＋hodos（道）。電気分解や電池で還元が起こる電極。電子が流れ込む陰極。陽極（anode）の対。",
      derivatives: ["cathodic", "anode"],
      family: ["cath-", "hod-"],
      compounds: ["cathode ray", "cathode ray tube", "cathodic protection"]
    },
    "chirality": {
      origin: "ギリシャ語 kheir（手）から。左手と右手が鏡像だが重ね合わせられない関係（手型性）。左右を重ね合わせられない分子の性質。薬学で重要で、片方の鏡像体のみが薬効を持つ場合がある。",
      derivatives: ["chiral", "enantiomer"],
      family: ["cheir-", "hand"],
      compounds: ["chiral center", "chiral molecule", "chirality induction"]
    },
    "cilia": {
      origin: "ラテン語 cilium（まつ毛）の複数形。微小管のモーターで動く細胞表面の微細な毛状突起。気道粘膜の繊毛は異物を排除し、一部の細菌は推進力に使用する。",
      derivatives: ["cilium", "ciliary"],
      family: ["cili-", "eyelash"],
      compounds: ["cilia movement", "respiratory cilia", "primary cilia"]
    },
    "cloning": {
      origin: "ギリシャ語 klon（若枝・挿し木）から。植物の挿し木繁殖に由来。遺伝的に同一なコピーを作製すること。DNAクローニング・細胞クローニング・生物クローニングがある。",
      derivatives: ["clone", "therapeutic cloning"],
      family: ["klon-", "branch"],
      compounds: ["gene cloning", "therapeutic cloning", "reproductive cloning"]
    },
    "codon": {
      origin: "英語 code（暗号・コード）＋-on（粒子・単位接尾辞）。mRNA上の連続する3つのヌクレオチドがアミノ酸1つを指定する遺伝暗号の単位。64種類のコドンが存在する。",
      derivatives: ["anticodon", "stop codon"],
      family: ["code units"],
      compounds: ["start codon", "stop codon", "sense codon"]
    },
    "conductance": {
      origin: "ラテン語 conducere（共に導く）から。con-（共に）＋ducere（導く）。電気抵抗の逆数で電気の通りやすさを示す物理量。単位はジーメンス（S）。",
      derivatives: ["conductivity", "resistance"],
      family: ["conduct-", "lead"],
      compounds: ["electrical conductance", "ionic conductance", "thermal conductance"]
    },
    "convergent": {
      origin: "ラテン語 convergere（一点に向かって集まる）から。con-（共に）＋vergere（傾く）。進化生物学では異なる系統の生物が類似した適応形質を独立に進化させる収束進化を指す。",
      derivatives: ["convergence", "convergent evolution"],
      family: ["con-", "verg-"],
      compounds: ["convergent evolution", "convergent boundary", "convergent thinking"]
    },
    "covalence": {
      origin: "ラテン語 co-（共に）＋valentia（強さ・能力）から。原子間で電子対を共有して形成される化学結合の価数。共有結合（covalent bond）の強さの指標。",
      derivatives: ["covalent bond", "valence"],
      family: ["co-", "val-"],
      compounds: ["covalent bond", "covalent radius", "polar covalent"]
    },
    "cytokine": {
      origin: "ギリシャ語 kytos（細胞）＋kinein（動かす・刺激する）。免疫細胞が分泌し他の免疫細胞の活動を調節する小型タンパク質の総称。インターロイキン・インターフェロンが含まれる。",
      derivatives: ["cytokine storm", "interleukin"],
      family: ["cyto-", "kine-"],
      compounds: ["cytokine storm", "pro-inflammatory cytokine", "cytokine signaling"]
    },
    "cytosol": {
      origin: "ギリシャ語 kytos（細胞）＋ラテン語 solutio（溶液）。細胞質から膜結合性小器官を除いた液体成分。代謝反応の多くがここで行われる水溶液環境。",
      derivatives: ["cytoplasm", "hyaloplasm"],
      family: ["cyto-", "sol-"],
      compounds: ["cytosolic protein", "cytosol composition"]
    },
    "dendrite": {
      origin: "ギリシャ語 dendron（木）から。木の枝に似た形の神経細胞の突起。他のニューロンや感覚受容器からシナプスを通じて信号を受け取りニューロン本体（細胞体）へ伝える。",
      derivatives: ["dendritic", "apical dendrite"],
      family: ["dendr-", "tree"],
      compounds: ["dendritic tree", "dendritic spine", "apical dendrite"]
    },
    "density": {
      origin: "ラテン語 densitas（密集）から。densus（密な・込み合った）。単位体積当たりの質量（kg/m³）。物質の識別・浮力・流体力学に重要な物理量。",
      derivatives: ["dense", "densification"],
      family: ["dens-", "thick"],
      compounds: ["mass density", "energy density", "population density"]
    },
    "depolarize": {
      origin: "英語 de-（逆・解除）＋polarize（分極させる）。ラテン語 de-＋polus（極）。静止膜電位（−70mV）から陽性方向への電圧変化。ニューロンの活動電位発生の最初の段階。",
      derivatives: ["depolarization", "action potential"],
      family: ["de-", "polar-"],
      compounds: ["membrane depolarization", "depolarization threshold"]
    },
    "diastole": {
      origin: "ギリシャ語 diastole（拡張・引き延ばし）から。dia-（分けて）＋stole（送ること）。心臓が収縮（systole）と交互に弛緩して血液を充填する期間。",
      derivatives: ["diastolic pressure", "systole"],
      family: ["dia-", "stol-"],
      compounds: ["diastolic pressure", "atrial diastole", "ventricular diastole"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch U (Biology/Science part 2: aphelion-diastole, 25 words)');
