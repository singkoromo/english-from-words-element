const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "intron": {
      origin: "英語 intron（介在配列・intervening sequence の略）。1978年にウォーター・ギルバートが命名。タンパク質をコードせず、転写後にスプライシングで除去されるDNA配列。",
      derivatives: ["exon", "splicing"],
      family: ["gene structure"],
      compounds: ["intron splicing", "intron retention", "group I intron"]
    },
    "isothermal": {
      origin: "ギリシャ語 isos（等しい）＋therme（熱）＋-al（形容詞）。温度が一定のまま行われる物理・化学的過程。等温膨張・等温圧縮は熱力学の基本過程。",
      derivatives: ["isotherm", "adiabatic"],
      family: ["iso-", "therm-"],
      compounds: ["isothermal process", "isothermal compression", "isothermal expansion"]
    },
    "keratin": {
      origin: "ギリシャ語 keras（角・ツノ）から。毛・爪・皮膚の角層・鳥の羽・爬虫類の鱗などを構成する繊維状の構造タンパク質。α-ケラチンとβ-ケラチンがある。",
      derivatives: ["keratinized", "keratinocyte"],
      family: ["kerat-", "horn"],
      compounds: ["keratin filament", "keratin protein", "alpha keratin"]
    },
    "kinetics": {
      origin: "ギリシャ語 kinetikos（運動に関する）から。kinein（動かす）。化学動力学では反応速度・反応機構を研究し、物理学では運動の法則を扱う。",
      derivatives: ["kinetic energy", "kinematics"],
      family: ["kinet-", "move"],
      compounds: ["reaction kinetics", "chemical kinetics", "enzyme kinetics"]
    },
    "leach": {
      origin: "古英語 leccan（湿らせる）から。水や他の溶媒が土壌・岩石・廃棄物を通過する際に可溶性成分を溶かして運び去るプロセス。農業での栄養素損失や土壌汚染浄化に関連。",
      derivatives: ["leaching", "percolation"],
      family: ["leach-", "drain"],
      compounds: ["soil leaching", "leach field", "toxic leaching"]
    },
    "leucocyte": {
      origin: "ギリシャ語 leukos（白い）＋kytos（細胞）。白血球の学術名。好中球・リンパ球・単球・好酸球・好塩基球の5種類があり、免疫防御の中心を担う。",
      derivatives: ["leukemia", "white blood cell"],
      family: ["leuko-", "cyto-"],
      compounds: ["leucocyte count", "polymorphonuclear leucocyte"]
    },
    "ligand": {
      origin: "ラテン語 ligare（結ぶ・縛る）から。受容体・酵素・金属イオンに特異的に結合して生理活性を調節する分子。ホルモン・神経伝達物質・薬物が代表例。",
      derivatives: ["ligand binding", "chelate"],
      family: ["lig-", "bind"],
      compounds: ["ligand binding", "receptor ligand", "ligand field theory"]
    },
    "lignin": {
      origin: "ラテン語 lignum（木材）から。植物の細胞壁に沈着する複雑な芳香族高分子化合物。木材の剛性・耐腐性の原因で、セルロースと共に木質組織を形成する。",
      derivatives: ["lignocellulose", "delignification"],
      family: ["lign-", "wood"],
      compounds: ["lignin biosynthesis", "lignocellulosic biomass", "lignin degradation"]
    },
    "lipid": {
      origin: "ギリシャ語 lipos（脂肪）＋-id（化学接尾辞）。水に不溶だが有機溶媒に溶ける生体有機分子の総称。脂肪・リン脂質・ステロイドが含まれ、細胞膜の主成分。",
      derivatives: ["liposome", "lipolysis"],
      family: ["lipo-", "fat"],
      compounds: ["lipid bilayer", "lipid metabolism", "polar lipid"]
    },
    "lysis": {
      origin: "ギリシャ語 lysis（ゆるめること・解消）から。lyein（ゆるめる・溶かす）。細菌・ウイルス・抗体などによって細胞膜が破壊され細胞内容物が放出される過程。",
      derivatives: ["lyse", "hemolysis"],
      family: ["lys-", "loose"],
      compounds: ["cell lysis", "viral lysis", "osmotic lysis"]
    },
    "mesosphere": {
      origin: "ギリシャ語 mesos（中間の）＋sphaira（球）。高度約50〜80kmの大気圏。成層圏（stratosphere）の上に位置し、大気の最低温度（−90°C）を記録する。",
      derivatives: ["stratosphere", "thermosphere"],
      family: ["meso-", "spher-"],
      compounds: ["mesospheric temperature", "mesosphere layer", "noctilucent clouds"]
    },
    "metamorphism": {
      origin: "ギリシャ語 meta-（変化・後）＋morphe（形）＋-ism。既存の岩石が高温・高圧・化学的流体の作用によって鉱物組成や組織が変化する地質学的過程。",
      derivatives: ["metamorphic rock", "metamorphosis"],
      family: ["meta-", "morph-"],
      compounds: ["regional metamorphism", "contact metamorphism", "metamorphic grade"]
    },
    "microtubule": {
      origin: "ギリシャ語 mikros（小さい）＋ラテン語 tubulus（小管）。直径25nmの中空管状タンパク質（チューブリン）。細胞骨格の一つで形態維持・染色体分離・物質輸送に関わる。",
      derivatives: ["tubulin", "cytoskeleton"],
      family: ["micro-", "tubul-"],
      compounds: ["microtubule network", "microtubule polymerization", "spindle microtubule"]
    },
    "monomer": {
      origin: "ギリシャ語 mono（一つ）＋meros（部分）。重合体（ポリマー）を構成する繰り返し単位の小分子。エチレン→ポリエチレン、アミノ酸→タンパク質のように重合する。",
      derivatives: ["polymer", "polymerization"],
      family: ["mono-", "mer-"],
      compounds: ["monomer unit", "vinyl monomer", "amino acid monomer"]
    },
    "myelin": {
      origin: "ギリシャ語 myelos（骨髄・髄）から。シュワン細胞（末梢）またはオリゴデンドロサイト（中枢）が軸索に巻き付いて形成する脂質性の絶縁鞘。跳躍伝導を可能にする。",
      derivatives: ["myelination", "demyelination"],
      family: ["myel-", "marrow"],
      compounds: ["myelin sheath", "myelin basic protein", "myelin loss"]
    },
    "natural-selection": {
      origin: "英語 natural（自然の）＋selection（選択）。チャールズ・ダーウィンが1859年に提唱した進化の主要メカニズム。環境に適した表現型の個体が生存・繁殖に有利になる。",
      derivatives: ["artificial selection", "sexual selection"],
      family: ["evolutionary mechanisms"],
      compounds: ["natural selection pressure", "directional selection", "stabilizing selection"]
    },
    "nucleobase": {
      origin: "ラテン語 nucleus（核）＋basis（基礎・塩基）。DNAのアデニン・グアニン・シトシン・チミンとRNAのウラシルの5種類。水素結合で相補的に対を作る。",
      derivatives: ["purine", "pyrimidine"],
      family: ["nucle-", "base"],
      compounds: ["purine nucleobase", "pyrimidine nucleobase", "nucleobase pair"]
    },
    "nymph": {
      origin: "ギリシャ語 nymphe（花嫁・若い女性・妖精）から。生物学では不完全変態（hemimetaboly）昆虫の幼虫期。成虫に似た外見だが翅が未発達で生殖能力を持たない。",
      derivatives: ["nymphal stage", "instar"],
      family: ["nymph-", "bride"],
      compounds: ["nymphal stage", "nymph instar", "aquatic nymph"]
    },
    "organelle": {
      origin: "ラテン語 organum（器官・道具）の指小形 organella。細胞内で特定の機能を担う膜で囲まれた（または囲まれない）構造体。ミトコンドリア・核・小胞体が代表例。",
      derivatives: ["membrane-bound organelle", "cytoplasmic organelle"],
      family: ["organ-", "tool"],
      compounds: ["membrane organelle", "organelle biogenesis", "chloroplast organelle"]
    },
    "ovulation": {
      origin: "ラテン語 ovum（卵）から派生。成熟した卵子（卵母細胞）が卵巣から排出される生殖過程。黄体形成ホルモン（LH）の急増が引き金となる。",
      derivatives: ["ovulate", "ovarian follicle"],
      family: ["ov-", "egg"],
      compounds: ["ovulation cycle", "ovulation induction", "ovulation timing"]
    },
    "plasmid": {
      origin: "ギリシャ語 plasma（形成されたもの）から。1952年にジョシュア・レダーバーグが命名。細菌の染色体とは独立して自律的に複製できる小型の環状二本鎖DNA分子。",
      derivatives: ["plasmid vector", "megaplasmid"],
      family: ["plasm-", "form"],
      compounds: ["plasmid vector", "expression plasmid", "plasmid transfer"]
    },
    "pollination": {
      origin: "ラテン語 pollen（粉末・花粉）から。花粉が雄しべから雌しべの柱頭に付着する植物の有性生殖の第一段階。風媒・虫媒・鳥媒・水媒など多様な経路がある。",
      derivatives: ["pollinator", "cross-pollination"],
      family: ["pollen-", "powder"],
      compounds: ["cross-pollination", "self-pollination", "pollination syndrome"]
    },
    "puberty": {
      origin: "ラテン語 pubertas（成熟・成人になること）から。puber（成熟した）。性ホルモンの増加で二次性徴（体毛・乳房発達・声変わり）が現れる身体的成熟期。",
      derivatives: ["pubescent", "adolescence"],
      family: ["puber-", "adult"],
      compounds: ["puberty onset", "precocious puberty", "puberty stage"]
    },
    "recessive": {
      origin: "ラテン語 recedere（後退する・退く）から。遺伝学で優性（dominant）対立遺伝子が同じ遺伝子座に存在するとき表現型として現れない対立遺伝子の状態。",
      derivatives: ["recessive allele", "autosomal recessive"],
      family: ["recess-", "retreat"],
      compounds: ["recessive trait", "recessive gene", "autosomal recessive"]
    },
    "redox": {
      origin: "英語 reduction（還元）＋oxidation（酸化）の合成語。酸化（電子を失う）と還元（電子を得る）が必ず同時に起こる反応。生体エネルギー代謝・電池の基本原理。",
      derivatives: ["oxidation-reduction", "half-reaction"],
      family: ["reduction", "oxidation"],
      compounds: ["redox reaction", "redox potential", "biological redox"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch W (Biology/Science part 4: intron-redox, 25 words)');
