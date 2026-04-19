const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "lagoon": {
      origin: "イタリア語 laguna（浅い湖・潟）から。ラテン語 lacuna（くぼみ・穴）。サンゴ礁・砂州・砂嘴で外海と隔てられた浅い水域。ヴェネツィア潟が語源の地。",
      derivatives: ["atoll lagoon", "coastal lagoon"],
      family: ["lacun-", "hollow"],
      compounds: ["coral lagoon", "lagoon island", "coastal lagoon"]
    },
    "levee": {
      origin: "フランス語 levée（持ち上げられたもの）から。lever（持ち上げる）。ラテン語 levare（軽くする）。洪水を防ぐために河川・海岸沿いに築いた土製の堤防。",
      derivatives: ["dike", "embankment"],
      family: ["lev-", "raise"],
      compounds: ["natural levee", "flood levee", "levee breach"]
    },
    "lowlands": {
      origin: "英語 low（低い）＋lands（土地・地方）。相対的に標高の低い平坦な地域の総称。スコットランド・ローランド・フランドル地方が代表例。農業・都市化に適した地形。",
      derivatives: ["plains", "flatlands"],
      family: ["low-", "land"],
      compounds: ["dutch lowlands", "floodplain lowlands", "lowland forest"]
    },
    "meridian": {
      origin: "ラテン語 meridianus（正午の・南の）から。meridies（正午）。meridies は medius dies（中日）。地球の南北両極を通る経線（経度線）で、グリニッジ子午線（0°経線）が基準。",
      derivatives: ["prime meridian", "longitude"],
      family: ["meri-", "midday"],
      compounds: ["prime meridian", "meridian line", "anti-meridian"]
    },
    "mesa": {
      origin: "スペイン語 mesa（テーブル）から。ラテン語 mensa（食卓・台）。周囲の地盤が浸食されて取り残された、頂部が平坦で側面が急崖の台地。米国南西部に多い地形。",
      derivatives: ["butte", "plateau"],
      family: ["mens-", "table"],
      compounds: ["mesa top", "desert mesa", "mesa verde"]
    },
    "morraine": {
      origin: "フランス語 moraine（氷堆石）から。サヴォワ地方の方言 mora（堆積物）。氷河が運搬して堆積させた岩石・砂礫・粘土の堆積物。端堆石・側堆石・中堆石などに分類される。",
      derivatives: ["terminal moraine", "lateral moraine"],
      family: ["glacial deposits"],
      compounds: ["terminal moraine", "lateral moraine", "moraine lake"]
    },
    "oasis": {
      origin: "ギリシャ語 oasis（砂漠の肥沃な場所）から。エジプト語 wahe（集落）が語源。砂漠の中で地下水・泉が湧き出して植物が生育する緑地。交易路の拠点として古代から重要。",
      derivatives: ["oasis town", "desert spring"],
      family: ["fertile desert spots"],
      compounds: ["desert oasis", "oasis town", "oasis agriculture"]
    },
    "peninsula": {
      origin: "ラテン語 paeninsula（ほぼ島）から。paene（ほとんど）＋insula（島）。三方を水に囲まれ一方が陸地とつながった細長い地形。イベリア半島・朝鮮半島が代表例。",
      derivatives: ["peninsular", "cape"],
      family: ["paen-", "insul-"],
      compounds: ["peninsular malaysia", "arabian peninsula", "korean peninsula"]
    },
    "piedmont": {
      origin: "フランス語 pied（足）＋mont（山）。「山の足元」。イタリアのピエモンテ州が語源の地名。急峻な山麓から平野にかけて広がる緩傾斜の丘陵・平野地帯。",
      derivatives: ["mountain foothill", "alluvial fan"],
      family: ["ped-", "mont-"],
      compounds: ["piedmont plain", "appalachian piedmont", "piedmont glacier"]
    },
    "polar": {
      origin: "ラテン語 polaris（軸・極の）から。polus（天の軸・天の極）。地球の南北両極付近・極地帯に関する形容詞。極地は6ヶ月の白夜と6ヶ月の極夜を持ち、独特の環境を形成する。",
      derivatives: ["circumpolar", "polar vortex"],
      family: ["pol-", "axis"],
      compounds: ["polar ice cap", "polar vortex", "polar circle"]
    },
    "promontory": {
      origin: "ラテン語 promontorium（突き出た山）から。pro-（前に）＋mons（山）。海や低地に高く突き出した陸地の先端。灯台・砦が建てられることが多い戦略的地形。",
      derivatives: ["headland", "cape"],
      family: ["pro-", "mont-"],
      compounds: ["coastal promontory", "rocky promontory"]
    },
    "ravine": {
      origin: "フランス語 ravine（急流・山の溝）から。ravir（奪い取る）。急流や降雨による浸食で形成された細くて急峻な谷。gorge より小規模で canyon より浅い地形。",
      derivatives: ["gully", "gorge"],
      family: ["raven-", "torrent"],
      compounds: ["steep ravine", "ravine trail", "river ravine"]
    },
    "ridge": {
      origin: "古英語 hrycg（背骨・尾根・脊梁）から。プロト・ゲルマン語 hrugiz（背中）。山頂から連なる細長く高い地形の縁。大陸分水嶺・海嶺など様々な規模で使われる。",
      derivatives: ["mountain ridge", "mid-ocean ridge"],
      family: ["hrycg-", "back"],
      compounds: ["mountain ridge", "mid-ocean ridge", "ridge line"]
    },
    "rift": {
      origin: "スカンジナビア語 rift（裂け目）から。古ノルド語 ript（割れ目）。地殻が引き伸ばされて生じる地溝帯（rift valley）。東アフリカ地溝帯が代表例で、大陸分裂の初期段階。",
      derivatives: ["rift valley", "graben"],
      family: ["rift-", "split"],
      compounds: ["rift valley", "african rift", "rift zone"]
    },
    "sandbar": {
      origin: "英語 sand（砂）＋bar（棒状の障壁）。河川・海岸・河口で堆積した砂が形成する浅瀬または細長い砂の島。船舶の航行に危険で、豪雨後の河川で位置が変わることもある。",
      derivatives: ["shoal", "sandbank"],
      family: ["sand deposit"],
      compounds: ["river sandbar", "offshore sandbar", "tidal sandbar"]
    },
    "scarp": {
      origin: "イタリア語 scarpa（靴の縁・急な斜面）から。断層・差別侵食・波食などによって生じた急な崖面。断層崖（fault scarp）・海岸段丘崖・侵食崖などがある。",
      derivatives: ["fault scarp", "escarpment"],
      family: ["scar-", "slope"],
      compounds: ["fault scarp", "coastal scarp", "scarp slope"]
    },
    "shoal": {
      origin: "古英語 sceald（浅い）から。比較的浅い水域、または航行を妨げる砂や岩礁の浅瀬。魚の群れ（shoal of fish）も同じ語源で「密集した浅い群れ」のイメージ。",
      derivatives: ["shallow", "shoaling"],
      family: ["sceald-", "shallow"],
      compounds: ["shoal water", "shoal zone", "shoal hazard"]
    },
    "steppe": {
      origin: "ロシア語 step'（ステップ・広大な平野）から。中緯度の半乾燥草原帯。ユーラシア大陸中央部に広がり、草原牧畜と遊牧文化の基盤となった地形。プレーリー・パンパスと類似。",
      derivatives: ["grassland", "prairie"],
      family: ["dry grasslands"],
      compounds: ["eurasian steppe", "steppe climate", "steppe nomads"]
    },
    "strait": {
      origin: "古フランス語 estreit（狭い・窮屈な）から。ラテン語 strictus（締めた・狭い）。二つの大きな水域（海・湖）を結ぶ狭い水路。マラッカ海峡・ジブラルタル海峡が世界の要衝。",
      derivatives: ["channel", "narrows"],
      family: ["strict-", "narrow"],
      compounds: ["strait of malacca", "strait navigation", "strategic strait"]
    },
    "terrace": {
      origin: "フランス語 terrasse（平らな土地）から。ラテン語 terra（大地）。地形学では海面変動・河川侵食で形成される段状の平坦面。農業では急傾斜地を階段状に削り平坦化した棚田。",
      derivatives: ["terrace farming", "marine terrace"],
      family: ["terra-", "earth"],
      compounds: ["river terrace", "marine terrace", "terrace farming"]
    },
    "tropics": {
      origin: "ギリシャ語 tropikos（転換の・回帰の）から。trope（転換・回帰）。北回帰線（Cancer）と南回帰線（Capricorn）の間の太陽が直射する地域。高温多湿の熱帯気候が卓越する。",
      derivatives: ["tropical", "subtropics"],
      family: ["trop-", "turn"],
      compounds: ["tropical rainforest", "tropics climate", "intertropical zone"]
    },
    "valley": {
      origin: "古フランス語 valee（谷）から。ラテン語 vallis（谷・くぼ地）。山・丘の間に挟まれた低地。河川による侵食で形成されたV字谷と、氷河による浸食で形成されたU字谷がある。",
      derivatives: ["glen", "vale"],
      family: ["val-", "low"],
      compounds: ["river valley", "rift valley", "valley floor"]
    },
    "volcano": {
      origin: "イタリア語 vulcano（火山）から。ローマ神話の火・鍛冶の神 Vulcanus（ウルカーヌス）に由来。イタリア南部リパリ諸島のヴルカーノ島が命名の元。マグマが地表に噴出する地形。",
      derivatives: ["volcanic", "eruption"],
      family: ["vulcan-", "fire"],
      compounds: ["active volcano", "shield volcano", "volcanic eruption"]
    },
    "amicus": {
      origin: "ラテン語 amicus curiae（法廷の友）から。amicus（友人）＋curiae（法廷の）。訴訟当事者でない第三者が、公共の利益や専門的見地から法廷に提出する意見書制度。",
      derivatives: ["amicus brief", "amicus curiae"],
      family: ["amic-", "friend"],
      compounds: ["amicus brief", "amicus curiae brief", "amicus submission"]
    },
    "commutation": {
      origin: "ラテン語 commutare（完全に交換する）から。com-（完全に）＋mutare（変える）。法律では死刑を終身刑に、長期刑を短期刑に軽減する刑の変更。また交通定期券も同語源。",
      derivatives: ["commute", "sentence reduction"],
      family: ["commut-", "exchange"],
      compounds: ["sentence commutation", "commutation order", "executive commutation"]
    },
    "contractual": {
      origin: "ラテン語 contractus（引き締めた・締結した）から。contrahere（引き締める）。con-（共に）＋trahere（引く）。契約によって生じる義務・権利・関係に関する形容詞。",
      derivatives: ["contract", "contractually"],
      family: ["contra-", "tract-"],
      compounds: ["contractual obligation", "contractual agreement", "contractual liability"]
    },
    "docket": {
      origin: "英語 docket（小さなラベル・摘要）から。15世紀の文書管理に由来。裁判所に係属している案件の目録・リスト、または個々の案件に付与された事件番号。",
      derivatives: ["court docket", "trial docket"],
      family: ["dock-", "document"],
      compounds: ["court docket", "docket number", "federal docket"]
    },
    "estoppel": {
      origin: "古フランス語 estouper（封じる・ふさぐ）から。ラテン語 stuppa（麻の詰め物）。自己の以前の言動・表示と矛盾する主張を許さないとする衡平法の原則。禁反言ともいう。",
      derivatives: ["equitable estoppel", "promissory estoppel"],
      family: ["stop-", "block"],
      compounds: ["estoppel doctrine", "promissory estoppel", "collateral estoppel"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch AC (Geography part 2 + Law: lagoon-estoppel, 28 words)');
