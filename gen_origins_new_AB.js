const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "alluvial": {
      origin: "ラテン語 alluvium（洪水が運んだ土砂）から。alluvialis（洪水による）。al-（〜へ）＋luere（洗う）。河川が運搬・堆積した砂礫・泥からなる地形・堆積物に関する形容詞。",
      derivatives: ["alluvium", "alluvial deposit"],
      family: ["alluv-", "wash"],
      compounds: ["alluvial plain", "alluvial fan", "alluvial deposit"]
    },
    "alpine": {
      origin: "ラテン語 Alpinus（アルプス山脈の）から。Celtic 語源の Alp（高い・白い）。高山帯（timber line 以上）の環境・植生・地形に関する形容詞。アルプス山脈は語源の地名。",
      derivatives: ["subalpine", "alpine meadow"],
      family: ["alp-", "high"],
      compounds: ["alpine meadow", "alpine climate", "alpine tundra"]
    },
    "atoll": {
      origin: "マルディブ語 atolu（環礁）から。17世紀にヨーロッパの航海者が採用。サンゴ礁の成長と火山島の沈降によって形成される中央に礁湖を持つリング状のサンゴ礁。",
      derivatives: ["coral atoll", "reef atoll"],
      family: ["reef formations"],
      compounds: ["coral atoll", "atoll island", "pacific atoll"]
    },
    "badlands": {
      origin: "英語 bad（悪い）＋lands（土地）から。フランス語 mauvaises terres の意訳。農業に適さず、雨水の浸食で奇怪な峰・尖塔・溝が刻まれた荒野地形。米国サウスダコタが有名。",
      derivatives: ["badland erosion", "gully erosion"],
      family: ["eroded terrain"],
      compounds: ["badlands formation", "south dakota badlands"]
    },
    "caldera": {
      origin: "スペイン語 caldera（大きな鍋・釜）から。ラテン語 caldaria（熱いもの）。大規模噴火後にマグマが抜けて山体が陥没してできた大型の円形くぼ地。カルデラ湖が形成されることも。",
      derivatives: ["caldera lake", "supervolcano"],
      family: ["calid-", "hot"],
      compounds: ["caldera lake", "volcanic caldera", "supervolcano caldera"]
    },
    "canyon": {
      origin: "スペイン語 cañón（峡谷・管）から。ラテン語 canna（管・葦）。河川の長年にわたる侵食により形成された深くて急峻な谷。グランド・キャニオンが世界最大級。",
      derivatives: ["gorge", "ravine"],
      family: ["cann-", "tube"],
      compounds: ["grand canyon", "slot canyon", "river canyon"]
    },
    "cape": {
      origin: "フランス語 cap（頭・岬）から。ラテン語 caput（頭）。大陸・島・半島の先端が海や湖に突き出した陸地の部分。希望岬（Cape of Good Hope）が著名。",
      derivatives: ["headland", "promontory"],
      family: ["caput-", "head"],
      compounds: ["cape horn", "cape town", "cape cod"]
    },
    "cartography": {
      origin: "ラテン語 carta（紙・地図）＋ギリシャ語 graphia（描くこと）。地図の作成・研究・分析を行う学問。メルカトル（1569）の円筒図法が航海革命をもたらした。",
      derivatives: ["cartographer", "map projection"],
      family: ["cart-", "graph-"],
      compounds: ["digital cartography", "historical cartography", "thematic cartography"]
    },
    "cirque": {
      origin: "フランス語 cirque（円形劇場）から。ラテン語 circus（円）。氷河の先端または源頭部で岩盤を浸食してできた急斜面に囲まれた椀状・半円形の地形。カール（独）とも。",
      derivatives: ["corrie", "kar"],
      family: ["circ-", "circle"],
      compounds: ["glacial cirque", "cirque lake", "cirque glacier"]
    },
    "continental": {
      origin: "ラテン語 continere（含む・保持する）から。continent（大陸）＋-al。大陸規模または大陸の内陸部に関する形容詞。大陸性気候は海洋の影響を受けず寒暖差が大きい。",
      derivatives: ["intercontinental", "continental shelf"],
      family: ["contin-", "hold"],
      compounds: ["continental shelf", "continental divide", "continental climate"]
    },
    "coordinates": {
      origin: "ラテン語 co-（共に）＋ordinare（順序立てる）から。地球上の任意の位置を経度（longitude）と緯度（latitude）の数値で特定する測量・地図学の基本概念。",
      derivatives: ["latitude", "longitude"],
      family: ["co-", "ord-"],
      compounds: ["geographic coordinates", "GPS coordinates", "coordinate system"]
    },
    "crevasse": {
      origin: "フランス語 crevasse（亀裂・ひび）から。crever（割れる・破裂する）。氷河が移動する際に引張応力で生じる深い縦の亀裂。登山家にとって最も危険な障害の一つ。",
      derivatives: ["crevice", "glacial crack"],
      family: ["crev-", "crack"],
      compounds: ["glacial crevasse", "crevasse rescue", "crevasse fall"]
    },
    "datum": {
      origin: "ラテン語 datum（与えられたもの）から。dare（与える）。data（複数形）の単数形。測量・地図製作における基準面（海抜ゼロ点など）または参照点。",
      derivatives: ["geodetic datum", "vertical datum"],
      family: ["dat-", "give"],
      compounds: ["datum point", "geodetic datum", "mean sea level datum"]
    },
    "delta": {
      origin: "ギリシャ文字Δ（デルタ）の形から。ナイル川河口の三角形の堆積地形が文字の形に似ていることでエラトステネスが命名。河川が海・湖に注ぐ地点に形成される堆積地形。",
      derivatives: ["deltaic", "river delta"],
      family: ["greek letter Δ"],
      compounds: ["river delta", "nile delta", "delta plain"]
    },
    "doline": {
      origin: "スロベニア語 dolina（谷・くぼ地）から。カルスト地形の研究が盛んなスロベニア・カルスト地方の地名。石灰岩が地下水によって溶解・陥没して形成された円形くぼ地。",
      derivatives: ["sinkhole", "karst depression"],
      family: ["dol-", "valley"],
      compounds: ["karst doline", "solution doline", "collapse doline"]
    },
    "dune": {
      origin: "古フランス語 dune（砂の丘）から。ゲルマン語系の語。風によって砂が吹き集められた丘状の地形。砂丘の形は卓越風の方向によってバルカン型・縦列型などに分類される。",
      derivatives: ["barchan", "sand dune"],
      family: ["dun-", "hill"],
      compounds: ["sand dune", "coastal dune", "desert dune"]
    },
    "estuary": {
      origin: "ラテン語 aestuarium（潮汐地帯）から。aestus（潮の流れ・熱）。海の潮が干満とともに入り込む河川の下流域。汽水環境で生物多様性が高く重要な生態系。",
      derivatives: ["tidal estuary", "salt marsh"],
      family: ["aestu-", "tide"],
      compounds: ["tidal estuary", "estuary ecosystem", "estuarine habitat"]
    },
    "fjord": {
      origin: "ノルウェー語 fjord（入り江）から。古ノルド語 fjörðr（湾・海峡）。氷河が削った U 字型の谷に海水が浸入して形成された細長く深い入り江。ノルウェー・チリに多い。",
      derivatives: ["fjordland", "glacial fjord"],
      family: ["ford-", "crossing"],
      compounds: ["norwegian fjord", "fjord landscape", "glacier fjord"]
    },
    "foothills": {
      origin: "英語 foot（足・麓）＋hills（丘）。山の麓（foot）に広がる比較的緩やかな丘陵地帯。高山と平野の移行地域で、農業・居住・鉱業に利用されることが多い。",
      derivatives: ["piedmont", "lower slopes"],
      family: ["foot-", "hill-"],
      compounds: ["foothill zone", "foothill town", "rocky mountain foothills"]
    },
    "gorge": {
      origin: "古フランス語 gorge（喉・のど）から。ラテン語 gurges（渦巻き・喉）。狭くて急峻な谷。canyon より小規模で、河川や氷河の浸食による縦に深い峡谷を指すことが多い。",
      derivatives: ["canyon", "ravine"],
      family: ["gurg-", "throat"],
      compounds: ["river gorge", "gorge trail", "columbia gorge"]
    },
    "gradient": {
      origin: "ラテン語 gradi（歩く・進む）から。gradus（歩み・段）。地形・温度・濃度・圧力などの変化率。地形では単位水平距離あたりの高度変化を示す勾配・傾斜。",
      derivatives: ["grade", "slope"],
      family: ["grad-", "step"],
      compounds: ["temperature gradient", "pressure gradient", "slope gradient"]
    },
    "gulf": {
      origin: "イタリア語 golfo（湾）から。ギリシャ語 kolpos（懐・湾）。三方を陸地に囲まれた大きな海の入り込み。bay（湾）より大規模で深い。",
      derivatives: ["bay", "inlet"],
      family: ["kolp-", "bosom"],
      compounds: ["gulf stream", "persian gulf", "gulf of mexico"]
    },
    "headland": {
      origin: "英語 head（頭・先端）＋land（陸地）。海・湾・川に向かって突き出した高い岬または陸地の先端。灯台が建てられることが多く、航行の目印となる地形。",
      derivatives: ["cape", "promontory"],
      family: ["head-", "land"],
      compounds: ["coastal headland", "headland erosion", "headland bay"]
    },
    "highlands": {
      origin: "英語 high（高い）＋lands（土地・地方）。比較的標高の高い山地・丘陵地帯の総称。スコットランド・ハイランドが代表的地名。高地特有の気候・植生・文化を持つ地域。",
      derivatives: ["uplands", "plateau"],
      family: ["high-", "land"],
      compounds: ["scottish highlands", "highland climate", "ethiopian highlands"]
    },
    "isthmus": {
      origin: "ギリシャ語 isthmos（狭い通路・首）から。isthmi（複数）。二つの陸地（大陸・半島・島）を細くつなぐ土地。パナマ地峡・スエズ地峡が代表例で、戦略的重要性が高い。",
      derivatives: ["land bridge", "neck of land"],
      family: ["isthm-", "neck"],
      compounds: ["panama isthmus", "suez isthmus", "isthmus bridge"]
    },
    "karst": {
      origin: "スロベニア語 Kras（石灰岩台地の地域名）から。ドイツ語 Karst を経て国際的地理学用語になった。石灰岩・ドロマイト・石膏などが地下水に溶食されて発達する特徴的な地形。",
      derivatives: ["karst topography", "karst landscape"],
      family: ["geological terrains"],
      compounds: ["karst cave", "karst spring", "karst topography"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch AB (Geography part 1: alluvial-karst, 26 words)');
