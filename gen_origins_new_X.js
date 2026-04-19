const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "ribosome": {
      origin: "ribose（リボース糖）＋ギリシャ語 soma（体）。1958年にリチャード・ロバーツが命名。rRNA とタンパク質で構成される細胞小器官で、mRNA の情報を読み取りアミノ酸を連結してタンパク質を合成する。",
      derivatives: ["ribosomal RNA", "polyribosome"],
      family: ["ribose-", "soma-"],
      compounds: ["ribosome complex", "70S ribosome", "ribosome assembly"]
    },
    "rotation": {
      origin: "ラテン語 rotatio（回転）から。rota（輪・車輪）。固定した軸または点を中心とした円運動。地球の自転・分子の回転・農業での輪作すべてに使われる多義語。",
      derivatives: ["rotate", "rotational"],
      family: ["rot-", "wheel"],
      compounds: ["crop rotation", "rotation axis", "earth rotation"]
    },
    "salinity": {
      origin: "ラテン語 sal（塩）から。salinitas（塩辛さ）。水中に溶解した塩類の総濃度。海水の平均塩分濃度は約35ppt（千分率）。海洋生態・気候システムに影響する。",
      derivatives: ["saline", "halinity"],
      family: ["sal-", "salt"],
      compounds: ["ocean salinity", "salinity gradient", "soil salinity"]
    },
    "speciation": {
      origin: "ラテン語 species（種・外見・型）＋-ation（過程）。地理的隔離（異所的種分化）や同所的種分化など複数の機構により、一つの種から新たな生物種が生じる進化過程。",
      derivatives: ["allopatric speciation", "sympatric speciation"],
      family: ["spec-", "form"],
      compounds: ["allopatric speciation", "sympatric speciation", "speciation event"]
    },
    "spore": {
      origin: "ギリシャ語 spora（種まき・種子）から。speirein（まく）。菌類・シダ・コケ・一部の細菌が形成する高い耐久性を持つ生殖細胞。種子植物の種子とは異なる。",
      derivatives: ["spore germination", "endospore"],
      family: ["spor-", "seed"],
      compounds: ["fungal spore", "bacterial endospore", "spore dispersal"]
    },
    "tectonic": {
      origin: "ギリシャ語 tektonikos（建設に関する・大工の）から。tekton（大工・建築家）。地球の地殻プレートの動き・変形・地震・火山活動を扱う地質学分野の形容詞。",
      derivatives: ["plate tectonics", "tectonism"],
      family: ["tecton-", "builder"],
      compounds: ["plate tectonics", "tectonic plate", "tectonic activity"]
    },
    "trophic": {
      origin: "ギリシャ語 trophe（栄養・食物）から。trepho（養う）。生態系内での食物連鎖における栄養摂取の段階（栄養段階）に関する形容詞。",
      derivatives: ["trophic level", "eutrophic"],
      family: ["troph-", "nourish"],
      compounds: ["trophic level", "trophic cascade", "trophic efficiency"]
    },
    "tumor": {
      origin: "ラテン語 tumor（膨らみ・腫れ）から。tumere（膨れる）。細胞が正常な増殖制御を逸脱して異常増殖した組織の塊。良性と悪性（がん）がある。",
      derivatives: ["neoplasm", "malignant tumor"],
      family: ["tum-", "swell"],
      compounds: ["tumor growth", "benign tumor", "malignant tumor"]
    },
    "valence": {
      origin: "ラテン語 valentia（力・能力・強さ）から。valere（強い）。原子が化学結合を形成できる結合の数（原子価）、または最外殻の価電子の概念。",
      derivatives: ["valency", "valence electron"],
      family: ["val-", "strong"],
      compounds: ["valence electron", "valence shell", "valence bond theory"]
    },
    "vector": {
      origin: "ラテン語 vector（運ぶ人・乗り物）から。vehere（運ぶ）。数学・物理では大きさと方向を持つ量。生物学では病原体を媒介する生物（ハマダラカなど）や遺伝子導入に使うDNA分子も指す。",
      derivatives: ["scalar", "vector field"],
      family: ["vect-", "carry"],
      compounds: ["disease vector", "vector field", "cloning vector"]
    },
    "ventricle": {
      origin: "ラテン語 ventriculus（小さな腹・胃）から。venter（腹）の指小形。心臓の血液を送り出す下部の部屋（左心室・右心室）、または脳脊髄液を含む脳の空洞。",
      derivatives: ["ventricular", "right ventricle"],
      family: ["ventr-", "belly"],
      compounds: ["left ventricle", "ventricular fibrillation", "brain ventricle"]
    },
    "virology": {
      origin: "ラテン語 virus（毒・粘液）＋ギリシャ語 logos（学）。ウイルスの構造・複製・分類・宿主との相互作用・感染症を研究する生物学・医学の一分野。",
      derivatives: ["virologist", "viral"],
      family: ["vir-", "log-"],
      compounds: ["clinical virology", "molecular virology", "plant virology"]
    },
    "zygote": {
      origin: "ギリシャ語 zygotos（くびきにつながれた）から。zygoun（くびきで結ぶ）。精子と卵子の受精によって形成される最初の細胞（二倍体）。すべての体細胞はここから分裂増殖する。",
      derivatives: ["zygotic", "fertilized egg"],
      family: ["zyg-", "yoke"],
      compounds: ["zygote formation", "zygote division", "zygote development"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch X (Biology/Science part 5: ribosome-zygote, 13 words) - data-mixed-56 COMPLETE');
