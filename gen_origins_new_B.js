// Batch B: remaining -ologies + architecture words (adobe to viaduct)
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "biochemistry": {
      origin: "ギリシャ語 bios（生命）＋chemeia（化学）。生命体の化学的プロセス・物質を研究する学問。20世紀に急速に発展し、DNA・タンパク質・代謝の解明に貢献した。",
      derivatives: [{ word: "biochemist", desc: "生化学者" }, { word: "biochemical", desc: "生化学的な" }],
      family: [{ word: "biology", desc: "生物学" }, { word: "chemistry", desc: "化学" }, { word: "molecular biology", desc: "分子生物学（関連分野）" }],
      compounds: [{ phrase: "biochemistry lab", desc: "生化学実験室" }, { phrase: "clinical biochemistry", desc: "臨床生化学" }]
    },
    "bioethics": {
      origin: "ギリシャ語 bios（生命）＋ethos（倫理）。医療・生物学・遺伝子技術の倫理的問題を研究する学際的分野。1970年代に Van Rensselaer Potter が造語。生命倫理学。",
      derivatives: [{ word: "bioethicist", desc: "生命倫理学者" }, { word: "bioethical", desc: "生命倫理的な" }],
      family: [{ word: "ethics", desc: "倫理学" }, { word: "medical ethics", desc: "医療倫理" }, { word: "biotechnology", desc: "バイオテクノロジー（対象分野）" }],
      compounds: [{ phrase: "bioethics committee", desc: "生命倫理委員会" }, { phrase: "bioethics and AI", desc: "生命倫理とAI" }]
    },
    "chronobiology": {
      origin: "ギリシャ語 chronos（時間）＋bios（生命）＋logos（学）。生物の概日リズム・季節リズムなど時間に関わる生命現象を研究する学問。睡眠・時差ぼけの研究に重要。",
      derivatives: [{ word: "chronobiologist", desc: "時間生物学者" }, { word: "circadian", desc: "概日の（chronobiology の中心概念）" }],
      family: [{ word: "chronology", desc: "年代学（chronos 語根）" }, { word: "clock gene", desc: "時計遺伝子（研究対象）" }, { word: "circadian rhythm", desc: "概日リズム" }],
      compounds: [{ phrase: "chronobiology research", desc: "時間生物学研究" }, { phrase: "chronobiology and health", desc: "時間生物学と健康" }]
    },
    "climatology": {
      origin: "ギリシャ語 klima（傾き、気候帯）＋logos（学）。気候のパターン・変動・変化を長期的に研究する学問。気象学（meteorology）と異なり、長期的傾向を扱う。",
      derivatives: [{ word: "climatologist", desc: "気候学者" }, { word: "climatological", desc: "気候学的な" }, { word: "climate", desc: "気候" }],
      family: [{ word: "meteorology", desc: "気象学（関連分野）" }, { word: "ecology", desc: "生態学（関連分野）" }, { word: "paleoclimatology", desc: "古気候学（下位分野）" }],
      compounds: [{ phrase: "applied climatology", desc: "応用気候学" }, { phrase: "urban climatology", desc: "都市気候学" }]
    },
    "criminology": {
      origin: "ラテン語 crimen（罪）＋ギリシャ語 logos（学）。犯罪・犯罪者・刑事司法を科学的に研究する社会科学。犯罪の原因・防止・処罰を扱う。19世紀に Cesare Lombroso らが確立した。",
      derivatives: [{ word: "criminologist", desc: "犯罪学者" }, { word: "criminal", desc: "犯罪の、犯罪者" }, { word: "criminological", desc: "犯罪学的な" }],
      family: [{ word: "crime", desc: "犯罪（crimen 語根）" }, { word: "penology", desc: "行刑学（関連分野）" }, { word: "sociology", desc: "社会学（上位分野）" }],
      compounds: [{ phrase: "environmental criminology", desc: "環境犯罪学" }, { phrase: "forensic criminology", desc: "法医犯罪学" }]
    },
    "cryptology": {
      origin: "ギリシャ語 kryptos（隠れた）＋logos（学）。暗号の作成（暗号学）と解読（解読学）の両方を含む研究分野。現代デジタルセキュリティの基盤。",
      derivatives: [{ word: "cryptologist", desc: "暗号学者" }, { word: "cryptographic", desc: "暗号の" }, { word: "cryptography", desc: "暗号技術" }],
      family: [{ word: "encrypt", desc: "暗号化する（kryptos 語根）" }, { word: "decrypt", desc: "復号する" }, { word: "cybersecurity", desc: "サイバーセキュリティ（応用分野）" }],
      compounds: [{ phrase: "public-key cryptology", desc: "公開鍵暗号学" }, { phrase: "cryptology research", desc: "暗号学研究" }]
    },
    "cytology": {
      origin: "ギリシャ語 kytos（細胞）＋logos（学）。細胞の構造・機能・生化学を研究する生物学分野。Matthias Schleiden と Theodor Schwann の細胞説（1838-39）から発展。",
      derivatives: [{ word: "cytologist", desc: "細胞学者" }, { word: "cytological", desc: "細胞学的な" }, { word: "cytoplasm", desc: "細胞質" }],
      family: [{ word: "cell", desc: "細胞（kytos の英訳）" }, { word: "histology", desc: "組織学（関連分野）" }, { word: "pathology", desc: "病理学（関連分野）" }],
      compounds: [{ phrase: "clinical cytology", desc: "臨床細胞学" }, { phrase: "cytology test", desc: "細胞診検査" }]
    },
    "dendrology": {
      origin: "ギリシャ語 dendron（木）＋logos（学）。樹木の種類・特性・分類を研究する植物学の分野。森林管理・木材利用に重要な知識を提供する。",
      derivatives: [{ word: "dendrologist", desc: "樹木学者" }, { word: "dendrological", desc: "樹木学的な" }],
      family: [{ word: "dendrite", desc: "樹状突起（dendron 語根）" }, { word: "botany", desc: "植物学（上位分野）" }, { word: "arboriculture", desc: "樹木栽培学（関連分野）" }],
      compounds: [{ phrase: "dendrology survey", desc: "樹木調査" }, { phrase: "urban dendrology", desc: "都市樹木学" }]
    },
    "dermatology": {
      origin: "ギリシャ語 derma（皮膚）＋logos（学）。皮膚・毛髪・爪の疾患を診断・治療する医学専門分野。皮膚科学。",
      derivatives: [{ word: "dermatologist", desc: "皮膚科医" }, { word: "dermatological", desc: "皮膚科学的な" }],
      family: [{ word: "epidermis", desc: "表皮（epi＋derma）" }, { word: "hypodermic", desc: "皮下の（hypo＋dermic）" }, { word: "oncology", desc: "腫瘍学（関連分野）" }],
      compounds: [{ phrase: "cosmetic dermatology", desc: "美容皮膚科" }, { phrase: "dermatology clinic", desc: "皮膚科クリニック" }]
    },
    "endocrinology": {
      origin: "ギリシャ語 endon（内部）＋krinein（分泌する）＋logos（学）。ホルモン・内分泌腺・代謝を研究する医学分野。糖尿病・甲状腺疾患などを扱う。",
      derivatives: [{ word: "endocrinologist", desc: "内分泌専門医" }, { word: "endocrine", desc: "内分泌の" }],
      family: [{ word: "hormone", desc: "ホルモン（研究対象）" }, { word: "metabolism", desc: "代謝（関連概念）" }, { word: "diabetes", desc: "糖尿病（代表的疾患）" }],
      compounds: [{ phrase: "reproductive endocrinology", desc: "生殖内分泌学" }, { phrase: "endocrinology and diabetes", desc: "内分泌学と糖尿病" }]
    },
    "entomology": {
      origin: "ギリシャ語 entomon（昆虫）＋logos（学）。昆虫の分類・生態・行動・生理を研究する生物学分野。農業害虫・医療昆虫・生態系における役割を扱う。",
      derivatives: [{ word: "entomologist", desc: "昆虫学者" }, { word: "entomological", desc: "昆虫学的な" }],
      family: [{ word: "insect", desc: "昆虫（entomon の英訳）" }, { word: "ecology", desc: "生態学（関連分野）" }, { word: "pollination", desc: "受粉（昆虫の重要な役割）" }],
      compounds: [{ phrase: "forensic entomology", desc: "法昆虫学" }, { phrase: "medical entomology", desc: "医学昆虫学" }]
    },
    "epistemology": {
      origin: "ギリシャ語 episteme（知識）＋logos（学）。「知識とは何か」「どのように知るか」を哲学的に研究する分野。知識の本質・範囲・正当性を扱う。",
      derivatives: [{ word: "epistemologist", desc: "認識論者" }, { word: "epistemological", desc: "認識論的な" }],
      family: [{ word: "knowledge", desc: "知識（episteme の英訳）" }, { word: "ontology", desc: "存在論（関連哲学分野）" }, { word: "skepticism", desc: "懐疑主義（重要概念）" }],
      compounds: [{ phrase: "social epistemology", desc: "社会的認識論" }, { phrase: "feminist epistemology", desc: "フェミニスト認識論" }]
    },
    "ethnology": {
      origin: "ギリシャ語 ethnos（民族）＋logos（学）。民族の文化・習慣・社会組織を比較研究する人類学の分野。文化人類学（cultural anthropology）と重なる概念。",
      derivatives: [{ word: "ethnologist", desc: "民族学者" }, { word: "ethnological", desc: "民族学的な" }, { word: "ethnic", desc: "民族的な" }],
      family: [{ word: "anthropology", desc: "人類学（上位分野）" }, { word: "ethnography", desc: "民族誌（関連手法）" }, { word: "culture", desc: "文化（研究対象）" }],
      compounds: [{ phrase: "comparative ethnology", desc: "比較民族学" }, { phrase: "ethnology and linguistics", desc: "民族学と言語学" }]
    },
    "geomorphology": {
      origin: "ギリシャ語 ge（地球）＋morphe（形）＋logos（学）。地球の地形（山・谷・海岸・平野など）の形成過程・変化を研究する地理学・地質学の分野。",
      derivatives: [{ word: "geomorphologist", desc: "地形学者" }, { word: "geomorphological", desc: "地形学的な" }],
      family: [{ word: "geography", desc: "地理学（関連分野）" }, { word: "geology", desc: "地質学（関連分野）" }, { word: "erosion", desc: "浸食（主要研究プロセス）" }],
      compounds: [{ phrase: "coastal geomorphology", desc: "海岸地形学" }, { phrase: "fluvial geomorphology", desc: "河川地形学" }]
    },
    "gerontology": {
      origin: "ギリシャ語 geron（老人）＋logos（学）。加齢・老化のプロセスと高齢者の心身的・社会的問題を研究する学問。高齢化社会の進展で重要性が高まっている。",
      derivatives: [{ word: "gerontologist", desc: "老人学者" }, { word: "gerontological", desc: "老人学的な" }],
      family: [{ word: "geriatrics", desc: "老年医学（関連分野）" }, { word: "aging", desc: "加齢（研究対象）" }, { word: "longevity", desc: "長寿（関連概念）" }],
      compounds: [{ phrase: "social gerontology", desc: "社会老人学" }, { phrase: "gerontology research", desc: "老人学研究" }]
    },
    "graphology": {
      origin: "ギリシャ語 graphe（書くこと）＋logos（学）。筆跡からその人の性格・心理状態を分析しようとする研究。科学的根拠については議論があり、法的証拠としての使用は限定的。",
      derivatives: [{ word: "graphologist", desc: "筆跡学者" }, { word: "graphological", desc: "筆跡学的な" }],
      family: [{ word: "handwriting", desc: "筆跡（研究対象）" }, { word: "psychology", desc: "心理学（関連分野）" }, { word: "calligraphy", desc: "書道（関連概念）" }],
      compounds: [{ phrase: "forensic graphology", desc: "法的筆跡鑑定" }, { phrase: "graphology analysis", desc: "筆跡分析" }]
    },
    "hematology": {
      origin: "ギリシャ語 haima（血液）＋logos（学）。血液・血液疾患（貧血・白血病など）を研究・診断・治療する医学分野。血液内科学。",
      derivatives: [{ word: "hematologist", desc: "血液専門医" }, { word: "hematological", desc: "血液学的な" }],
      family: [{ word: "hemoglobin", desc: "ヘモグロビン（haima 語根）" }, { word: "hemorrhage", desc: "出血" }, { word: "oncology", desc: "腫瘍学（関連分野）" }],
      compounds: [{ phrase: "clinical hematology", desc: "臨床血液学" }, { phrase: "hematology and oncology", desc: "血液腫瘍学" }]
    },
    "hydrology": {
      origin: "ギリシャ語 hydor（水）＋logos（学）。地球上の水（河川・地下水・降水・湖沼）の分布・循環・特性を研究する科学。水資源管理・洪水予測に重要。",
      derivatives: [{ word: "hydrologist", desc: "水文学者" }, { word: "hydrological", desc: "水文学的な" }],
      family: [{ word: "hydrogen", desc: "水素（hydor 語根）" }, { word: "hydraulics", desc: "水力学" }, { word: "oceanography", desc: "海洋学（関連分野）" }],
      compounds: [{ phrase: "surface hydrology", desc: "表面水文学" }, { phrase: "groundwater hydrology", desc: "地下水水文学" }]
    },
    "ichthyology": {
      origin: "ギリシャ語 ichthys（魚）＋logos（学）。魚類の分類・生態・行動・生理を研究する動物学の分野。約3万種の魚類を扱う。",
      derivatives: [{ word: "ichthyologist", desc: "魚類学者" }, { word: "ichthyological", desc: "魚類学的な" }],
      family: [{ word: "fish", desc: "魚（ichthys の英訳）" }, { word: "marine biology", desc: "海洋生物学（関連分野）" }, { word: "zoology", desc: "動物学（上位分野）" }],
      compounds: [{ phrase: "freshwater ichthyology", desc: "淡水魚類学" }, { phrase: "ichthyology collection", desc: "魚類標本コレクション" }]
    },
    "kinesiology": {
      origin: "ギリシャ語 kinesis（動き）＋logos（学）。人体の動き・運動機能を研究する学問。スポーツ科学・リハビリテーション・人間工学と密接に関連する。",
      derivatives: [{ word: "kinesiologist", desc: "運動機能学者" }, { word: "kinesiological", desc: "運動機能学的な" }],
      family: [{ word: "kinetic", desc: "運動の（kinesis 語根）" }, { word: "biomechanics", desc: "生体力学（関連分野）" }, { word: "physiotherapy", desc: "理学療法（関連分野）" }],
      compounds: [{ phrase: "applied kinesiology", desc: "応用運動機能学" }, { phrase: "kinesiology tape", desc: "キネシオテープ" }]
    },
    "lexicology": {
      origin: "ギリシャ語 lexikon（語彙の）＋logos（学）。語彙（単語の意味・用法・起源・変化）を研究する言語学の分野。辞書学（lexicography）と密接に関連する。",
      derivatives: [{ word: "lexicologist", desc: "語彙学者" }, { word: "lexical", desc: "語彙の" }, { word: "lexicon", desc: "語彙、辞書" }],
      family: [{ word: "etymology", desc: "語源学（関連分野）" }, { word: "semantics", desc: "意味論（関連分野）" }, { word: "dictionary", desc: "辞書（lexicology の産物）" }],
      compounds: [{ phrase: "cognitive lexicology", desc: "認知語彙学" }, { phrase: "historical lexicology", desc: "歴史的語彙学" }]
    },
    "limnology": {
      origin: "ギリシャ語 limne（湖）＋logos（学）。湖・池・河川などの内陸水域の生態・物理化学的特性を研究する学問。淡水生態学。",
      derivatives: [{ word: "limnologist", desc: "陸水学者" }, { word: "limnological", desc: "陸水学的な" }],
      family: [{ word: "ecology", desc: "生態学（上位分野）" }, { word: "hydrology", desc: "水文学（関連分野）" }, { word: "eutrophication", desc: "富栄養化（重要研究問題）" }],
      compounds: [{ phrase: "tropical limnology", desc: "熱帯陸水学" }, { phrase: "limnology research", desc: "陸水学研究" }]
    },
    "lithology": {
      origin: "ギリシャ語 lithos（石）＋logos（学）。岩石の種類・性質・組成を研究する地質学の分野。堆積岩・火成岩・変成岩を記述・分類する。",
      derivatives: [{ word: "lithologist", desc: "岩石学者" }, { word: "lithological", desc: "岩石学的な" }],
      family: [{ word: "geology", desc: "地質学（上位分野）" }, { word: "petrology", desc: "岩石学（密接な関連分野）" }, { word: "mineralogy", desc: "鉱物学（関連分野）" }],
      compounds: [{ phrase: "lithology log", desc: "岩相ログ" }, { phrase: "sedimentary lithology", desc: "堆積岩石学" }]
    },
    "malacology": {
      origin: "ギリシャ語 malakos（柔らかい）＋logos（学）。軟体動物（貝・タコ・イカ・ナメクジなど）を研究する動物学の分野。貝類学（conchology）を含む。",
      derivatives: [{ word: "malacologist", desc: "軟体動物学者" }, { word: "malacological", desc: "軟体動物学的な" }],
      family: [{ word: "mollusk", desc: "軟体動物（研究対象）" }, { word: "zoology", desc: "動物学（上位分野）" }, { word: "marine biology", desc: "海洋生物学（関連分野）" }],
      compounds: [{ phrase: "marine malacology", desc: "海洋軟体動物学" }, { phrase: "malacology collection", desc: "軟体動物標本コレクション" }]
    },
    "microbiology": {
      origin: "ギリシャ語 mikros（小さい）＋bios（生命）＋logos（学）。微生物（細菌・ウイルス・真菌・原虫）を研究する生物学分野。医学・農業・発酵産業の基盤科学。",
      derivatives: [{ word: "microbiologist", desc: "微生物学者" }, { word: "microbiological", desc: "微生物学的な" }, { word: "microbe", desc: "微生物" }],
      family: [{ word: "bacteria", desc: "細菌（主要研究対象）" }, { word: "virology", desc: "ウイルス学（下位分野）" }, { word: "immunology", desc: "免疫学（関連分野）" }],
      compounds: [{ phrase: "clinical microbiology", desc: "臨床微生物学" }, { phrase: "environmental microbiology", desc: "環境微生物学" }]
    },
    "mineralogy": {
      origin: "中世ラテン語 minerale（鉱物）＋logos（学）。鉱物の化学組成・結晶構造・物理的性質・分類を研究する地質学分野。宝石学・鉱業の基礎科学。",
      derivatives: [{ word: "mineralogist", desc: "鉱物学者" }, { word: "mineralogical", desc: "鉱物学的な" }, { word: "mineral", desc: "鉱物" }],
      family: [{ word: "geology", desc: "地質学（上位分野）" }, { word: "crystallography", desc: "結晶学（関連分野）" }, { word: "gemology", desc: "宝石学（関連分野）" }],
      compounds: [{ phrase: "optical mineralogy", desc: "光学鉱物学" }, { phrase: "mineralogy lab", desc: "鉱物学実験室" }]
    },
    "mycology": {
      origin: "ギリシャ語 mykes（キノコ、菌類）＋logos（学）。菌類（キノコ・カビ・酵母）の分類・生態・生理・応用を研究する生物学分野。医薬品・発酵・農業に重要。",
      derivatives: [{ word: "mycologist", desc: "菌類学者" }, { word: "mycological", desc: "菌類学的な" }],
      family: [{ word: "fungi", desc: "菌類（mykes の英訳）" }, { word: "microbiology", desc: "微生物学（上位分野）" }, { word: "pathology", desc: "病理学（関連分野）" }],
      compounds: [{ phrase: "medical mycology", desc: "医学菌類学" }, { phrase: "ethnomycology", desc: "民族菌類学" }]
    },
    "neuropathology": {
      origin: "ギリシャ語 neuron（神経）＋pathos（苦しみ）＋logos（学）。神経系疾患（脳腫瘍・アルツハイマー病・脳卒中など）を研究する神経学・病理学の分野。",
      derivatives: [{ word: "neuropathologist", desc: "神経病理医" }, { word: "neuropathological", desc: "神経病理学的な" }],
      family: [{ word: "neurology", desc: "神経学（上位分野）" }, { word: "pathology", desc: "病理学（上位分野）" }, { word: "Alzheimer's", desc: "アルツハイマー病（代表的疾患）" }],
      compounds: [{ phrase: "neuropathology report", desc: "神経病理報告" }, { phrase: "clinical neuropathology", desc: "臨床神経病理学" }]
    },
    "numismatics": {
      origin: "ギリシャ語 nomisma（貨幣）から。ラテン語 numisma（硬貨）。貨幣・メダル・関連物品を研究・収集する学問。歴史・芸術・経済の観点から硬貨を研究する。",
      derivatives: [{ word: "numismatist", desc: "貨幣研究家" }, { word: "numismatic", desc: "貨幣学の" }],
      family: [{ word: "coin", desc: "硬貨（研究対象）" }, { word: "currency", desc: "通貨" }, { word: "archaeology", desc: "考古学（関連分野）" }],
      compounds: [{ phrase: "ancient numismatics", desc: "古代貨幣学" }, { phrase: "numismatics collection", desc: "貨幣コレクション" }]
    },
    "ornithology": {
      origin: "ギリシャ語 ornis（鳥）＋logos（学）。鳥類の分類・生態・行動・分布を研究する動物学分野。バードウォッチングと密接に関連し、市民科学の発展に貢献。",
      derivatives: [{ word: "ornithologist", desc: "鳥類学者" }, { word: "ornithological", desc: "鳥類学的な" }],
      family: [{ word: "bird", desc: "鳥（ornis の英訳）" }, { word: "zoology", desc: "動物学（上位分野）" }, { word: "migration", desc: "渡り（重要研究テーマ）" }],
      compounds: [{ phrase: "ornithology field trip", desc: "野外鳥類調査" }, { phrase: "citizen ornithology", desc: "市民鳥類学" }]
    },
    "otolaryngology": {
      origin: "ギリシャ語 ous（耳）＋larynx（喉頭）＋logos（学）。耳・鼻・のどの疾患を専門的に扱う医学分野。耳鼻咽喉科学（ENT: Ear, Nose, Throat）。",
      derivatives: [{ word: "otolaryngologist", desc: "耳鼻咽喉科医" }, { word: "otology", desc: "耳科学" }],
      family: [{ word: "audiology", desc: "聴覚学（関連分野）" }, { word: "rhinology", desc: "鼻科学（下位分野）" }, { word: "laryngology", desc: "喉頭科学（下位分野）" }],
      compounds: [{ phrase: "ENT specialist", desc: "耳鼻咽喉科専門医" }, { phrase: "otolaryngology surgery", desc: "耳鼻咽喉科手術" }]
    },
    "paleoclimatology": {
      origin: "ギリシャ語 palaios（古い）＋klima（気候）＋logos（学）。地質学的記録（氷床コア・珊瑚・木の年輪など）から過去の気候を復元する科学。現在の気候変動の文脈理解に重要。",
      derivatives: [{ word: "paleoclimatologist", desc: "古気候学者" }, { word: "paleoclimatic", desc: "古気候の" }],
      family: [{ word: "paleontology", desc: "古生物学（関連分野）" }, { word: "climatology", desc: "気候学（上位分野）" }, { word: "ice core", desc: "氷床コア（主要データ源）" }],
      compounds: [{ phrase: "paleoclimatology data", desc: "古気候データ" }, { phrase: "deep-time paleoclimatology", desc: "深時間古気候学" }]
    },
    "parasitology": {
      origin: "ギリシャ語 parasitos（寄食者）＋logos（学）。寄生虫（原虫・蠕虫・節足動物）と宿主の関係を研究する生物学・医学分野。熱帯医学と密接に関連する。",
      derivatives: [{ word: "parasitologist", desc: "寄生虫学者" }, { word: "parasitological", desc: "寄生虫学的な" }, { word: "parasite", desc: "寄生虫" }],
      family: [{ word: "microbiology", desc: "微生物学（関連分野）" }, { word: "tropical medicine", desc: "熱帯医学（関連分野）" }, { word: "malaria", desc: "マラリア（代表的な寄生虫病）" }],
      compounds: [{ phrase: "veterinary parasitology", desc: "獣医寄生虫学" }, { phrase: "parasitology lab", desc: "寄生虫学実験室" }]
    },
    "penology": {
      origin: "ラテン語 poena（罰）＋ギリシャ語 logos（学）。刑罰・刑事司法・受刑者処遇を研究する学問。犯罪学（criminology）の下位分野。",
      derivatives: [{ word: "penologist", desc: "行刑学者" }, { word: "penal", desc: "刑罰の" }, { word: "penalty", desc: "罰則" }],
      family: [{ word: "criminology", desc: "犯罪学（上位分野）" }, { word: "prison", desc: "刑務所（研究対象）" }, { word: "rehabilitation", desc: "更生（重要目標）" }],
      compounds: [{ phrase: "comparative penology", desc: "比較行刑学" }, { phrase: "penology reform", desc: "行刑改革" }]
    },
    "petrology": {
      origin: "ギリシャ語 petra（岩）＋logos（学）。岩石の成因・組成・分類・変化を研究する地質学の分野。岩石学。",
      derivatives: [{ word: "petrologist", desc: "岩石学者" }, { word: "petrological", desc: "岩石学的な" }],
      family: [{ word: "petroleum", desc: "石油（petra＋oleum）" }, { word: "lithology", desc: "岩石学（関連語）" }, { word: "mineralogy", desc: "鉱物学（関連分野）" }],
      compounds: [{ phrase: "igneous petrology", desc: "火成岩岩石学" }, { phrase: "metamorphic petrology", desc: "変成岩岩石学" }]
    },
    "phonology": {
      origin: "ギリシャ語 phone（声、音）＋logos（学）。言語における音の体系・パターン・機能を研究する言語学の分野。音韻論。",
      derivatives: [{ word: "phonologist", desc: "音韻論者" }, { word: "phonological", desc: "音韻論的な" }, { word: "phoneme", desc: "音素（基本単位）" }],
      family: [{ word: "phone", desc: "音（phone 語根）" }, { word: "phonetics", desc: "音声学（関連分野）" }, { word: "morphology", desc: "形態論（関連分野）" }],
      compounds: [{ phrase: "generative phonology", desc: "生成音韻論" }, { phrase: "phonology and spelling", desc: "音韻論と綴り" }]
    },
    "phrenology": {
      origin: "ギリシャ語 phren（横隔膜、心、精神）＋logos（学）。頭蓋骨の形状から精神的特質を判断しようとした19世紀の擬似科学。現代科学では否定されている。",
      derivatives: [{ word: "phrenologist", desc: "骨相学者" }, { word: "phrenological", desc: "骨相学的な" }],
      family: [{ word: "skull", desc: "頭蓋骨（研究対象）" }, { word: "neuroscience", desc: "神経科学（現代の後継）" }, { word: "pseudoscience", desc: "擬似科学（phrenologyの分類）" }],
      compounds: [{ phrase: "phrenology chart", desc: "骨相図" }, { phrase: "Victorian phrenology", desc: "ヴィクトリア朝の骨相学" }]
    },
    "primatology": {
      origin: "ラテン語 primates（最初のもの、霊長類）＋ギリシャ語 logos（学）。霊長類（類人猿・サル・原猿）の行動・生態・社会構造を研究する動物学分野。",
      derivatives: [{ word: "primatologist", desc: "霊長類学者" }, { word: "primatological", desc: "霊長類学的な" }, { word: "primate", desc: "霊長類" }],
      family: [{ word: "zoology", desc: "動物学（上位分野）" }, { word: "anthropology", desc: "人類学（関連分野）" }, { word: "chimpanzee", desc: "チンパンジー（重要研究対象）" }],
      compounds: [{ phrase: "field primatology", desc: "野外霊長類学" }, { phrase: "primatology research", desc: "霊長類学研究" }]
    },
    "seismology": {
      origin: "ギリシャ語 seismos（地震）＋logos（学）。地震・地球内部の振動を研究する地球物理学の分野。地震予測・地球内部構造の解明に不可欠。",
      derivatives: [{ word: "seismologist", desc: "地震学者" }, { word: "seismological", desc: "地震学的な" }, { word: "seismograph", desc: "地震計" }],
      family: [{ word: "earthquake", desc: "地震（seismos の英訳）" }, { word: "geophysics", desc: "地球物理学（上位分野）" }, { word: "tectonic", desc: "地殻変動の（関連語）" }],
      compounds: [{ phrase: "seismology monitoring", desc: "地震学的監視" }, { phrase: "volcanic seismology", desc: "火山地震学" }]
    },
    "semiology": {
      origin: "ギリシャ語 semeion（記号）＋logos（学）。記号・記号システム・意味作用を研究する学問。記号論（semiotics）とほぼ同義。ソシュールが言語学から発展させた。",
      derivatives: [{ word: "semiologist", desc: "記号学者" }, { word: "semiological", desc: "記号論的な" }],
      family: [{ word: "semiotics", desc: "記号論（同義語）" }, { word: "linguistics", desc: "言語学（関連分野）" }, { word: "symbol", desc: "記号・象徴" }],
      compounds: [{ phrase: "cultural semiology", desc: "文化記号論" }, { phrase: "medical semiology", desc: "医学的症候論" }]
    },
    "sinology": {
      origin: "ラテン語 Sina（中国）＋ギリシャ語 logos（学）。中国の言語・歴史・文化・文学・哲学を研究する学問。中国学。",
      derivatives: [{ word: "sinologist", desc: "中国学者" }, { word: "sinological", desc: "中国学的な" }],
      family: [{ word: "Mandarin", desc: "中国語（研究対象）" }, { word: "area studies", desc: "地域研究（上位分野）" }, { word: "Confucianism", desc: "儒教（主要研究対象）" }],
      compounds: [{ phrase: "modern sinology", desc: "現代中国学" }, { phrase: "classical sinology", desc: "古典中国学" }]
    },
    "speleology": {
      origin: "ギリシャ語 spelaion（洞窟）＋logos（学）。洞窟の形成・生態・地質・水文を研究する学問。洞窟探検（caving/spelunking）と密接に関連する。",
      derivatives: [{ word: "speleologist", desc: "洞窟学者" }, { word: "speleological", desc: "洞窟学的な" }],
      family: [{ word: "cave", desc: "洞窟（spelaion の英訳）" }, { word: "geology", desc: "地質学（関連分野）" }, { word: "karst", desc: "カルスト地形（重要研究対象）" }],
      compounds: [{ phrase: "speleology research", desc: "洞窟学研究" }, { phrase: "cave speleology", desc: "洞窟探査" }]
    },
    "urology": {
      origin: "ギリシャ語 ouron（尿）＋logos（学）。泌尿器系（腎臓・尿管・膀胱・尿道）および男性生殖器の疾患を扱う医学専門分野。",
      derivatives: [{ word: "urologist", desc: "泌尿器科医" }, { word: "urological", desc: "泌尿器科的な" }],
      family: [{ word: "urine", desc: "尿（ouron の英訳）" }, { word: "nephrology", desc: "腎臓学（関連分野）" }, { word: "kidney", desc: "腎臓（主要臓器）" }],
      compounds: [{ phrase: "urology clinic", desc: "泌尿器科クリニック" }, { phrase: "pediatric urology", desc: "小児泌尿器科" }]
    },
    "adobe": {
      origin: "スペイン語 adobe（日干しレンガ）から。アラビア語 al-tub（レンガ）に由来。乾燥した粘土・砂・藁を混ぜて日光で乾かした建材。南西アメリカ・中東の伝統建築に今も使われる。",
      derivatives: [{ word: "adobe brick", desc: "日干しレンガ" }, { word: "adobe architecture", desc: "アドビ建築" }],
      family: [{ word: "mud brick", desc: "泥レンガ（類義語）" }, { word: "rammed earth", desc: "版築工法（関連技術）" }, { word: "terracotta", desc: "テラコッタ（関連材料）" }],
      compounds: [{ phrase: "adobe house", desc: "アドビ造りの家" }, { phrase: "adobe construction", desc: "アドビ工法" }]
    },
    "amphitheater": {
      origin: "ギリシャ語 amphitheatron（両側に観客席がある劇場）から。amphi-（両側）＋theatron（観客席）。古代ローマの円形闘技場（コロッセウムなど）に代表される楕円形の屋外劇場。",
      derivatives: [{ word: "amphitheatrical", desc: "円形劇場的な" }],
      family: [{ word: "theater", desc: "劇場（theatron 語根）" }, { word: "stadium", desc: "スタジアム（類義語）" }, { word: "colosseum", desc: "コロッセウム（代表的建築）" }],
      compounds: [{ phrase: "Roman amphitheater", desc: "ローマの円形闘技場" }, { phrase: "natural amphitheater", desc: "自然の円形盆地" }]
    },
    "aqueduct": {
      origin: "ラテン語 aqua（水）＋ducere（導く）。aquaeductus（水路）。ローマ帝国が都市への給水のために建設した水路橋・水道システム。現代の水道工学の先駆け。",
      derivatives: [{ word: "aqueductal", desc: "水路の" }],
      family: [{ word: "aqua", desc: "水（aqua 語根）" }, { word: "aquarium", desc: "水族館" }, { word: "duct", desc: "管、導管（ducere 語根）" }],
      compounds: [{ phrase: "Roman aqueduct", desc: "ローマの水道橋" }, { phrase: "aqueduct system", desc: "水路システム" }]
    },
    "arcade": {
      origin: "フランス語 arcade（アーチ廊）から。ラテン語 arcus（弓、アーチ）。柱の列を結ぶ連続したアーチの廊下。商業空間（ショッピングアーケード）にも転用された。",
      derivatives: [{ word: "arcaded", desc: "アーケードのある" }],
      family: [{ word: "arch", desc: "アーチ（arcus 語根）" }, { word: "portico", desc: "柱廊玄関（関連建築要素）" }, { word: "colonnade", desc: "列柱廊（類義語）" }],
      compounds: [{ phrase: "shopping arcade", desc: "ショッピングアーケード" }, { phrase: "blind arcade", desc: "壁面装飾用の閉じたアーケード" }]
    },
    "archway": {
      origin: "英語 arch（アーチ）＋way（通路）。ラテン語 arcus（弓）から。アーチ状の開口部や門。建築物の入口や通路に設けられた弧状の構造。",
      derivatives: [{ word: "arched", desc: "アーチ形の" }],
      family: [{ word: "arch", desc: "アーチ" }, { word: "gateway", desc: "門、入口（類義語）" }, { word: "vault", desc: "ヴォールト天井（関連構造）" }],
      compounds: [{ phrase: "stone archway", desc: "石造りのアーチ" }, { phrase: "triumphal archway", desc: "凱旋門" }]
    },
    "atrium": {
      origin: "ラテン語 atrium（古代ローマ住宅の中央ホール）から。中央に天井開口のある古代ローマの主室。現代建築では採光のための吹き抜けホールを指す。",
      derivatives: [{ word: "atrial", desc: "心房の（医学）" }],
      family: [{ word: "cortile", desc: "イタリアの中庭（関連語）" }, { word: "impluvium", desc: "古代ローマの中庭の水盤" }, { word: "lobby", desc: "ロビー（現代の類義語）" }],
      compounds: [{ phrase: "hotel atrium", desc: "ホテルの吹き抜けホール" }, { phrase: "glass atrium", desc: "ガラス張りのアトリウム" }]
    },
    "baroque": {
      origin: "ポルトガル語 barroco（不規則な真珠）から。17〜18世紀のヨーロッパで発展した、劇的な動き・豊かな装飾・明暗の対比を特徴とする芸術・建築・音楽様式。",
      derivatives: [{ word: "baroque style", desc: "バロック様式" }, { word: "baroque music", desc: "バロック音楽" }],
      family: [{ word: "Renaissance", desc: "ルネサンス（先行様式）" }, { word: "rococo", desc: "ロココ（後継様式）" }, { word: "neoclassicism", desc: "新古典主義（後継様式）" }],
      compounds: [{ phrase: "baroque architecture", desc: "バロック建築" }, { phrase: "high baroque", desc: "盛期バロック" }]
    },
    "basilica": {
      origin: "ギリシャ語 basilike（王の）から。basileus（王）。古代ローマの長方形の公共建築から初期キリスト教聖堂の形式へと発展。身廊・側廊・アプスを持つ構成が特徴。",
      derivatives: [{ word: "basilican", desc: "バシリカ様式の" }],
      family: [{ word: "cathedral", desc: "大聖堂（関連建築）" }, { word: "nave", desc: "身廊（バシリカの主要部分）" }, { word: "apse", desc: "アプス（後陣）" }],
      compounds: [{ phrase: "early Christian basilica", desc: "初期キリスト教バシリカ" }, { phrase: "basilica plan", desc: "バシリカ式平面" }]
    },
    "battlement": {
      origin: "古フランス語 batillier（戦闘に備える）から。城壁の上に設けた凹凸のある胸壁。突起部（merlon）と凹み部（crenel）が交互に並ぶ。防御のための射撃窓の役割を果たした。",
      derivatives: [{ word: "battlemented", desc: "胸壁のある" }, { word: "crenellation", desc: "城壁の凹凸（同義語）" }],
      family: [{ word: "parapet", desc: "胸壁（関連語）" }, { word: "fortification", desc: "要塞化（上位概念）" }, { word: "castle", desc: "城（関連建築）" }],
      compounds: [{ phrase: "castle battlement", desc: "城の胸壁" }, { phrase: "decorative battlement", desc: "装飾的な胸壁" }]
    },
    "belfry": {
      origin: "中世フランス語 berfrei（移動式攻城塔）から変化。後に「鐘楼」の意味になった。ゲルマン語 berg-（守る）＋fred（平和）が語源。鐘を吊るす塔状の構造物。",
      derivatives: [{ word: "belfry tower", desc: "鐘楼" }],
      family: [{ word: "campanile", desc: "イタリア式鐘楼（関連語）" }, { word: "bell tower", desc: "鐘楼（英語直訳）" }, { word: "steeple", desc: "尖塔（関連建築要素）" }],
      compounds: [{ phrase: "church belfry", desc: "教会の鐘楼" }, { phrase: "belfry bells", desc: "鐘楼の鐘" }]
    },
    "buttress": {
      origin: "古フランス語 bouter（押す）から。「押さえる構造物」を意味する。壁を外から支える石や煉瓦の突出部。ゴシック大聖堂の「フライングバットレス（空飛ぶ支柱）」が有名。",
      derivatives: [{ word: "flying buttress", desc: "フライングバットレス（空飛ぶ支柱）" }, { word: "buttressed", desc: "支柱で支えられた" }],
      family: [{ word: "support", desc: "支える（類義語）" }, { word: "pier", desc: "支柱（関連語）" }, { word: "Gothic architecture", desc: "ゴシック建築（主要な使用様式）" }],
      compounds: [{ phrase: "flying buttress", desc: "空飛ぶ支柱（ゴシック）" }, { phrase: "angle buttress", desc: "コーナーバットレス" }]
    },
    "cloister": {
      origin: "ラテン語 claustrum（閉じた場所）から。claudere（閉じる）。修道院の中庭を囲む回廊。修道士の瞑想・祈りの空間として設計された閉じた廊下。",
      derivatives: [{ word: "cloistered", desc: "閉ざされた、修道院の" }, { word: "enclosure", desc: "囲まれた空間（関連語）" }],
      family: [{ word: "close", desc: "閉じる（claudere 語根）" }, { word: "monastery", desc: "修道院（関連建築）" }, { word: "colonnade", desc: "列柱廊（関連構造）" }],
      compounds: [{ phrase: "cloister garden", desc: "修道院の中庭" }, { phrase: "cloister walk", desc: "修道院の回廊歩廊" }]
    },
    "colonnade": {
      origin: "フランス語 colonnade（列柱廊）から。ラテン語 columna（柱）。一定間隔で並んだ柱の列が屋根を支える建築構造。古代ギリシャ神殿・バロック建築に多用される。",
      derivatives: [{ word: "colonnaded", desc: "列柱廊のある" }],
      family: [{ word: "column", desc: "柱（columna 語根）" }, { word: "portico", desc: "柱廊玄関（関連語）" }, { word: "peristyle", desc: "周回列柱廊（関連語）" }],
      compounds: [{ phrase: "Doric colonnade", desc: "ドーリス式列柱廊" }, { phrase: "curved colonnade", desc: "弧状の列柱廊" }]
    },
    "cornice": {
      origin: "イタリア語 cornice（縁、冠）から。ラテン語 corona（冠）。建物外壁の最上部に水平に取り付けられる装飾的な突出した縁取り。古典建築のエンタブラチャーの最上部。",
      derivatives: [{ word: "corniced", desc: "コーニスのある" }],
      family: [{ word: "crown", desc: "冠（corona 語根）" }, { word: "entablature", desc: "エンタブラチャー（コーニスを含む）" }, { word: "frieze", desc: "フリーズ（コーニス下の帯状部分）" }],
      compounds: [{ phrase: "crown cornice", desc: "上部コーニス" }, { phrase: "dentil cornice", desc: "歯飾りのあるコーニス" }]
    },
    "crenellation": {
      origin: "中世ラテン語 crena（刻み目）から。crenel（城壁の切り欠き）＋-ation。城壁上部の凹凸のある胸壁（battlement）の設計。英国では国王の許可（licence to crenellate）が必要だった。",
      derivatives: [{ word: "crenellated", desc: "胸壁のある" }, { word: "merlon", desc: "胸壁の突起部" }],
      family: [{ word: "battlement", desc: "胸壁（同義語）" }, { word: "fortification", desc: "要塞化" }, { word: "medieval castle", desc: "中世の城" }],
      compounds: [{ phrase: "decorative crenellation", desc: "装飾的な胸壁" }, { phrase: "Gothic crenellation", desc: "ゴシック様式の胸壁" }]
    },
    "cupola": {
      origin: "イタリア語 cupola（小さなドーム）から。ラテン語 cupa（桶）。建物の屋根や塔の頂部に設けられた小型のドーム状の構造物。採光・換気・装飾の役割を持つ。",
      derivatives: [{ word: "cupola dome", desc: "ドーム型のキューポラ" }],
      family: [{ word: "dome", desc: "ドーム（関連語）" }, { word: "lantern", desc: "ランタン（類義語）" }, { word: "turret", desc: "小塔（関連語）" }],
      compounds: [{ phrase: "onion cupola", desc: "玉ねぎ形キューポラ（ロシア正教会）" }, { phrase: "observatory cupola", desc: "天文台ドーム" }]
    },
    "drawbridge": {
      origin: "英語 draw（引く）＋bridge（橋）。中世の城の入口に設けられた、引き上げることができる可動式の橋。堀（moat）の上に架かり、引き上げると敵の侵入を防ぐ防御装置。",
      derivatives: [{ word: "bascule bridge", desc: "跳ね橋（現代の可動橋）" }],
      family: [{ word: "moat", desc: "堀（drawbridge と一体の防御）" }, { word: "portcullis", desc: "落し格子（関連防御装置）" }, { word: "castle", desc: "城（関連建築）" }],
      compounds: [{ phrase: "castle drawbridge", desc: "城の跳ね橋" }, { phrase: "raise the drawbridge", desc: "跳ね橋を上げる" }]
    },
    "escarpment": {
      origin: "フランス語 escarpement（急斜面）から。Italian scarpare（急斜面にする）。断崖・急傾斜の崖面。自然地形（地殻変動・浸食）または軍事目的で造られたもの。",
      derivatives: [{ word: "escarp", desc: "急崖にする" }],
      family: [{ word: "scarp", desc: "急崖（短縮形）" }, { word: "cliff", desc: "絶壁（類義語）" }, { word: "bluff", desc: "急崖（類義語）" }],
      compounds: [{ phrase: "coastal escarpment", desc: "海岸の急崖" }, { phrase: "fault escarpment", desc: "断層崖" }]
    },
    "facade": {
      origin: "フランス語 façade（正面）から。イタリア語 facciata（顔面）。ラテン語 facies（顔）。建物の正面外観。「表向きの顔」として見せかけや表層という意味にも使われる。",
      derivatives: [{ word: "main facade", desc: "主要正面" }, { word: "street facade", desc: "通りに面した外観" }],
      family: [{ word: "face", desc: "顔（facies 語根）" }, { word: "surface", desc: "表面（関連概念）" }, { word: "elevation", desc: "立面図（建築用語）" }],
      compounds: [{ phrase: "glass facade", desc: "ガラスファサード" }, { phrase: "facade renovation", desc: "外観改修" }]
    },
    "foyer": {
      origin: "フランス語 foyer（炉辺、暖炉の前）から。ラテン語 focus（炉）。劇場・ホテル・オペラ座の入口ホール。もとは暖炉を中心にした集まりの場を指した。",
      derivatives: [{ word: "lobby", desc: "ロビー（類義語）" }],
      family: [{ word: "focus", desc: "焦点（focus 語根）" }, { word: "vestibule", desc: "玄関ホール（類義語）" }, { word: "atrium", desc: "アトリウム（類義語）" }],
      compounds: [{ phrase: "theater foyer", desc: "劇場のロビー" }, { phrase: "hotel foyer", desc: "ホテルのフロント" }]
    },
    "frieze": {
      origin: "フランス語 frise（帯状装飾）から。中世ラテン語 frisium（縁飾り）。古典建築のエンタブラチャーの中間帯状部分。彫刻・レリーフで飾られることが多い水平の帯。",
      derivatives: [{ word: "friezed", desc: "フリーズで飾られた" }],
      family: [{ word: "entablature", desc: "エンタブラチャー（フリーズを含む）" }, { word: "cornice", desc: "コーニス（フリーズの上）" }, { word: "architrave", desc: "アーキトレーブ（フリーズの下）" }],
      compounds: [{ phrase: "Ionic frieze", desc: "イオニア式フリーズ" }, { phrase: "Elgin Marbles frieze", desc: "エルギン・マーブルのフリーズ" }]
    },
    "gargoyle": {
      origin: "古フランス語 gargouille（喉、排水口）から。ラテン語 gargula（喉）。水を排出するための石製の怪物像の排水口。中世ゴシック大聖堂に多く見られる。",
      derivatives: [{ word: "grotesque", desc: "奇怪な像（装飾目的のガーゴイル）" }],
      family: [{ word: "gargle", desc: "うがいする（同語根）" }, { word: "drain", desc: "排水（機能的な意味）" }, { word: "Gothic", desc: "ゴシック（主要な使用様式）" }],
      compounds: [{ phrase: "Notre-Dame gargoyle", desc: "ノートルダムのガーゴイル" }, { phrase: "decorative gargoyle", desc: "装飾的なガーゴイル" }]
    },
    "gazebo": {
      origin: "英語 gaze（眺める）＋-bo（ラテン語未来形語尾）の造語。「眺めるだろう場所」の意味。庭園内に設けた四方が開いた屋根付きの小屋。休憩・眺望のための軽い構造物。",
      derivatives: [{ word: "garden pavilion", desc: "庭園のあずまや（類義語）" }],
      family: [{ word: "pavilion", desc: "パビリオン（類義語）" }, { word: "pergola", desc: "パーゴラ（関連語）" }, { word: "bandstand", desc: "野外音楽堂（関連語）" }],
      compounds: [{ phrase: "garden gazebo", desc: "庭のあずまや" }, { phrase: "octagonal gazebo", desc: "八角形のガゼボ" }]
    },
    "keystone": {
      origin: "英語 key（鍵）＋stone（石）。アーチの頂点に置かれるくさび形の石。他の石を押しつけてアーチ全体を支える最も重要な石。比喩的に「根幹・核心」を意味する。",
      derivatives: [{ word: "keystone arch", desc: "要石のあるアーチ" }],
      family: [{ word: "voussoir", desc: "アーチ石（キーストーンを含む）" }, { word: "arch", desc: "アーチ（関連構造）" }, { word: "cornerstone", desc: "礎石（類義語）" }],
      compounds: [{ phrase: "keystone species", desc: "キーストーン種（生態学）" }, { phrase: "keystone habit", desc: "核心となる習慣" }]
    },
    "lintel": {
      origin: "古フランス語 lintel（敷居）から。ラテン語 liminaris（境界の）。ドアや窓の開口部の上部に水平に置かれた梁（石・木・金属製）。垂直荷重を支える構造材。",
      derivatives: [{ word: "stone lintel", desc: "石製まぐさ" }],
      family: [{ word: "threshold", desc: "しきい（リンテルと関連）" }, { word: "jamb", desc: "縦枠（開口部の側面部材）" }, { word: "arch", desc: "アーチ（lintelの代替構造）" }],
      compounds: [{ phrase: "carved lintel", desc: "彫刻を施したまぐさ" }, { phrase: "lintel beam", desc: "まぐさ梁" }]
    },
    "loggia": {
      origin: "イタリア語 loggia（ロッジア、開放的な廊下）から。ゲルマン語 lauba（木の葉のひさし）。建物に付属した外に開いた回廊・ベランダ。ルネサンス建築に多く見られる。",
      derivatives: [{ word: "loggiated", desc: "ロッジアのある" }],
      family: [{ word: "gallery", desc: "回廊（関連語）" }, { word: "veranda", desc: "ベランダ（類義語）" }, { word: "arcade", desc: "アーケード（関連語）" }],
      compounds: [{ phrase: "Renaissance loggia", desc: "ルネサンス様式のロッジア" }, { phrase: "open loggia", desc: "開放的な回廊" }]
    },
    "mausoleum": {
      origin: "ギリシャ語 Mausoleion（マウソロスの霊廟）から。小アジアの王 Mausolus（紀元前4世紀）のために建てられた七不思議の一つの巨大霊廟に由来。大型の記念的な墓建築。",
      derivatives: [{ word: "mausoleal", desc: "霊廟の" }],
      family: [{ word: "tomb", desc: "墓（関連語）" }, { word: "cenotaph", desc: "空の霊廟（関連語）" }, { word: "pyramid", desc: "ピラミッド（類似建築）" }],
      compounds: [{ phrase: "Taj Mahal mausoleum", desc: "タージ・マハルの霊廟" }, { phrase: "imperial mausoleum", desc: "帝国の霊廟" }]
    },
    "minaret": {
      origin: "トルコ語 minare（塔）から。アラビア語 manara（灯台、塔）。イスラムのモスクに付属する細い尖塔。礼拝時間（アザーン）を告げるために使われた。",
      derivatives: [{ word: "minaret tower", desc: "ミナレットの塔" }],
      family: [{ word: "mosque", desc: "モスク（関連建築）" }, { word: "steeple", desc: "尖塔（類義語、キリスト教）" }, { word: "lighthouse", desc: "灯台（manara の原義）" }],
      compounds: [{ phrase: "Ottoman minaret", desc: "オスマン朝のミナレット" }, { phrase: "pencil minaret", desc: "鉛筆形ミナレット" }]
    },
    "mullion": {
      origin: "古フランス語 moinel（中間の）から。ラテン語 medianus（中間の）。窓や扉の開口部を垂直に分割する細い縦割り材（石・木製）。ゴシック建築の窓に多く見られる。",
      derivatives: [{ word: "mullioned", desc: "竪格子のある" }],
      family: [{ word: "transom", desc: "横格子（水平版のmullion）" }, { word: "tracery", desc: "トレーサリー（ゴシックの窓格子）" }, { word: "window", desc: "窓（mullionの場所）" }],
      compounds: [{ phrase: "stone mullion", desc: "石製竪格子" }, { phrase: "mullioned window", desc: "竪格子窓" }]
    },
    "nave": {
      origin: "ラテン語 navis（船）から。教会の中央の主廊。天井が船の底を逆にした形に似ていることから命名された。礼拝者が集まる主要な空間。",
      derivatives: [{ word: "nave aisle", desc: "身廊の側廊" }],
      family: [{ word: "navy", desc: "海軍（navis 語根）" }, { word: "navigate", desc: "航海する" }, { word: "chancel", desc: "内陣（教会内でnaveの向こう）" }],
      compounds: [{ phrase: "nave ceiling", desc: "身廊の天井" }, { phrase: "nave column", desc: "身廊の列柱" }]
    },
    "obelisk": {
      origin: "ギリシャ語 obeliskos（小さな串）から。obelos（串）の指小形。先端が四角錐形の尖った細長い石柱。古代エジプトで太陽信仰と結びついて建てられた。",
      derivatives: [{ word: "obeliscal", desc: "方尖柱の" }],
      family: [{ word: "monolith", desc: "モノリス（一枚岩の記念碑）" }, { word: "column", desc: "柱（関連語）" }, { word: "Cleopatra's Needle", desc: "クレオパトラの針（有名なオベリスク）" }],
      compounds: [{ phrase: "Egyptian obelisk", desc: "エジプトの方尖柱" }, { phrase: "Washington Monument obelisk", desc: "ワシントン記念塔" }]
    },
    "pagoda": {
      origin: "ポルトガル語 pagode（東洋の寺院）から。シンハラ語・タミル語の dagoba（仏塔）に由来とも言われる。東アジア・東南アジアの多層塔状仏教建築。",
      derivatives: [{ word: "pagoda style", desc: "塔寺院様式" }],
      family: [{ word: "stupa", desc: "ストゥーパ（インドの仏塔）" }, { word: "temple", desc: "寺院（関連建築）" }, { word: "tower", desc: "塔（関連語）" }],
      compounds: [{ phrase: "Japanese pagoda", desc: "日本の五重塔" }, { phrase: "pagoda garden", desc: "塔のある庭園" }]
    },
    "parapet": {
      origin: "イタリア語 parapetto（胸壁）から。para-（守る）＋petto（胸）。屋根・橋・城壁の縁に設けた低い壁。転落防止や防御のための構造。",
      derivatives: [{ word: "parapeted", desc: "胸壁のある" }],
      family: [{ word: "battlement", desc: "胸壁（類義語）" }, { word: "railing", desc: "手すり（同機能）" }, { word: "balustrade", desc: "欄干（関連語）" }],
      compounds: [{ phrase: "roof parapet", desc: "屋根の胸壁" }, { phrase: "bridge parapet", desc: "橋の欄干" }]
    },
    "pediment": {
      origin: "英語 pediment（切妻）。ラテン語 pes（足）から派生したとも言われる。ギリシャ・ローマ神殿の正面に見られる三角形の切妻部分。古典建築の代表的な装飾要素。",
      derivatives: [{ word: "pedimented", desc: "ペディメントのある" }],
      family: [{ word: "gable", desc: "切妻（類義語）" }, { word: "tympanum", desc: "タンパヌム（ペディメント内の彫刻部分）" }, { word: "classical temple", desc: "古典神殿（主要な使用建築）" }],
      compounds: [{ phrase: "broken pediment", desc: "割れペディメント（バロック）" }, { phrase: "triangular pediment", desc: "三角形のペディメント" }]
    },
    "pergola": {
      origin: "イタリア語 pergola（突出部、葡萄棚）から。ラテン語 pergula（突出した屋根）。柱と格子状の梁で構成される屋外の通路・棚。植物を這わせることが多い庭園構造物。",
      derivatives: [{ word: "garden pergola", desc: "庭のパーゴラ" }],
      family: [{ word: "arbor", desc: "あずまや（類義語）" }, { word: "trellis", desc: "格子垣（関連語）" }, { word: "gazebo", desc: "ガゼボ（関連語）" }],
      compounds: [{ phrase: "wooden pergola", desc: "木製パーゴラ" }, { phrase: "pergola with vines", desc: "つる植物のあるパーゴラ" }]
    },
    "pinnacle": {
      origin: "古フランス語 pinacle（小塔の頂）から。ラテン語 pinna（羽、先端）。塔・扶壁・尖塔の最上部につく小さな尖り。ゴシック建築に多く、装飾と重しの両役割を持つ。",
      derivatives: [{ word: "pinnacled", desc: "尖塔のある" }],
      family: [{ word: "spire", desc: "尖塔（関連語）" }, { word: "finial", desc: "頂飾り（関連語）" }, { word: "Gothic", desc: "ゴシック（主要様式）" }],
      compounds: [{ phrase: "Gothic pinnacle", desc: "ゴシックの小尖塔" }, { phrase: "pinnacle of achievement", desc: "功績の頂点（比喩的）" }]
    },
    "portcullis": {
      origin: "古フランス語 porte coleice（滑る扉）から。porte（扉）＋coulisse（溝で滑る）。城門に設けた、溝に沿って上下する格子状の鉄・木の防護門。敵の侵入を防ぐ防御装置。",
      derivatives: [{ word: "portcullis gate", desc: "落とし格子の門" }],
      family: [{ word: "drawbridge", desc: "跳ね橋（関連防御装置）" }, { word: "gate", desc: "門（関連語）" }, { word: "fortification", desc: "要塞化" }],
      compounds: [{ phrase: "castle portcullis", desc: "城の落とし格子" }, { phrase: "portcullis symbol", desc: "落とし格子の紋章" }]
    },
    "portico": {
      origin: "ラテン語 porticus（柱廊）から。porta（門）。正面に列柱と屋根を持つ建物の玄関廊。古代ギリシャ・ローマ建築の代表的要素で、後の新古典主義建築に多用された。",
      derivatives: [{ word: "porticoed", desc: "柱廊玄関のある" }],
      family: [{ word: "porch", desc: "玄関ポーチ（portico から）" }, { word: "colonnade", desc: "列柱廊（関連語）" }, { word: "stoa", desc: "ストア（ギリシャの柱廊）" }],
      compounds: [{ phrase: "classical portico", desc: "古典的な柱廊玄関" }, { phrase: "temple portico", desc: "神殿の柱廊" }]
    },
    "rampart": {
      origin: "フランス語 rempart（防壁）から。remparer（防護する）。城・要塞の周囲に設けた土・石造りの防御壁。塔や砲台を支え、その上を兵士が歩ける幅を持つことが多い。",
      derivatives: [{ word: "ramparted", desc: "防壁のある" }],
      family: [{ word: "wall", desc: "壁（関連語）" }, { word: "fortification", desc: "要塞（関連語）" }, { word: "battlement", desc: "胸壁（関連構造）" }],
      compounds: [{ phrase: "city rampart", desc: "市城壁" }, { phrase: "castle rampart", desc: "城の防壁" }]
    },
    "rotunda": {
      origin: "ラテン語 rotundus（丸い）から。rota（車輪）。円形の建物または円形のホール。ローマのパンテオンが古代の代表例。アメリカ合衆国議会議事堂の中央ホールも有名。",
      derivatives: [{ word: "round hall", desc: "円形ホール（類義語）" }],
      family: [{ word: "round", desc: "丸い（rotundus 語根）" }, { word: "dome", desc: "ドーム（rotundaを覆う）" }, { word: "Pantheon", desc: "パンテオン（代表的な rotunda）" }],
      compounds: [{ phrase: "Capitol rotunda", desc: "米国議会の円形ホール" }, { phrase: "domed rotunda", desc: "ドームのある円形建築" }]
    },
    "spire": {
      origin: "古英語 spir（槍先、尖り）から。細く長く先端が尖った塔。教会・大聖堂の尖塔として代表的。ゴシック建築の最も印象的な要素の一つ。",
      derivatives: [{ word: "spired", desc: "尖塔のある" }],
      family: [{ word: "steeple", desc: "尖塔全体（spire を含む）" }, { word: "pinnacle", desc: "尖塔の頂部（関連語）" }, { word: "tower", desc: "塔（関連語）" }],
      compounds: [{ phrase: "church spire", desc: "教会の尖塔" }, { phrase: "Gothic spire", desc: "ゴシック様式の尖塔" }]
    },
    "stucco": {
      origin: "イタリア語 stucco（漆喰）から。ゲルマン語 stukki（破片）。石灰・砂・水で作った仕上げ材。外壁や内装の仕上げ・装飾に使われる。バロック・ロココ建築で盛んに使われた。",
      derivatives: [{ word: "stucco work", desc: "漆喰細工" }, { word: "stuccoed", desc: "漆喰仕上げの" }],
      family: [{ word: "plaster", desc: "石膏（類義語）" }, { word: "render", desc: "外壁塗装（関連語）" }, { word: "fresco", desc: "フレスコ（漆喰上に描く画法）" }],
      compounds: [{ phrase: "stucco facade", desc: "漆喰仕上げの外観" }, { phrase: "stucco ceiling", desc: "漆喰天井装飾" }]
    },
    "transept": {
      origin: "ラテン語 trans-（横断して）＋septum（仕切り）。教会建築の十字形平面の横腕部分。身廊（nave）と直交して設けられた袖廊。ゴシック・ロマネスク大聖堂に多い。",
      derivatives: [{ word: "transeptal", desc: "翼廊の" }],
      family: [{ word: "nave", desc: "身廊（transeptと直交）" }, { word: "crossing", desc: "交差部（naveとtranseptの交点）" }, { word: "chancel", desc: "内陣（transeptの先）" }],
      compounds: [{ phrase: "north transept", desc: "北翼廊" }, { phrase: "transept window", desc: "翼廊の窓" }]
    },
    "trellis": {
      origin: "フランス語 treillis（格子）から。ラテン語 trilix（三層織り）。縦横に細い棒を組み合わせた格子状の構造物。植物を這わせる支柱・フェンスとして使用される。",
      derivatives: [{ word: "trellised", desc: "格子状の" }],
      family: [{ word: "lattice", desc: "格子（類義語）" }, { word: "pergola", desc: "パーゴラ（関連構造）" }, { word: "espalier", desc: "壁面誘引（関連技法）" }],
      compounds: [{ phrase: "rose trellis", desc: "バラの格子棚" }, { phrase: "garden trellis", desc: "庭の格子垣" }]
    },
    "turret": {
      origin: "古フランス語 tourete（小塔）から。ラテン語 turris（塔）。城壁の角に設けた小型の塔。壁面から突き出た（bartisan）または独立した形があり、見張りや防御に使われる。",
      derivatives: [{ word: "turreted", desc: "小塔のある" }],
      family: [{ word: "tower", desc: "塔（turris 語根）" }, { word: "bartisan", desc: "バルティザン（壁面突出型小塔）" }, { word: "castle", desc: "城（関連建築）" }],
      compounds: [{ phrase: "corner turret", desc: "コーナーの小塔" }, { phrase: "castle turret", desc: "城の望楼" }]
    },
    "vestibule": {
      origin: "ラテン語 vestibulum（入口の前庭）から。玄関ホール・前室。本館の出入口と内部の間に設けた小部屋。寒冷地では二重扉の役割も果たす。",
      derivatives: [{ word: "vestibuled", desc: "前室のある" }],
      family: [{ word: "foyer", desc: "ロビー（類義語）" }, { word: "atrium", desc: "アトリウム（類義語）" }, { word: "lobby", desc: "ロビー（類義語）" }],
      compounds: [{ phrase: "church vestibule", desc: "教会の前室" }, { phrase: "entrance vestibule", desc: "玄関前室" }]
    },
    "viaduct": {
      origin: "ラテン語 via（道）＋ductus（導くもの）。道路や鉄道を谷や低地を越えて通すために建設されたアーチ状の高架橋。19世紀の鉄道建設で急速に発展した。",
      derivatives: [{ word: "railroad viaduct", desc: "鉄道高架橋" }],
      family: [{ word: "via", desc: "道路（via 語根）" }, { word: "aqueduct", desc: "水道橋（関連語）" }, { word: "bridge", desc: "橋（上位概念）" }],
      compounds: [{ phrase: "railway viaduct", desc: "鉄道高架橋" }, { phrase: "stone viaduct", desc: "石造りの高架橋" }]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch B (-ologies + architecture adobe-viaduct)');
