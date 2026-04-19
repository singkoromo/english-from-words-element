/**
 * gen_origins_new_E.js — Environment (15) + IT start (3) from data-mixed-52
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "alluvium": {
      origin: "ラテン語 alluvium（洪水で堆積したもの）から。alluere（洗い流す）に由来し、al-（〜へ）＋luere（洗う）が結合。河川が流れによって堆積させた土砂・沖積物を指す地質学用語。",
      derivatives: [
        { word: "alluvial", desc: "沖積の・沖積土の" },
        { word: "alluvion", desc: "洪水による堆積（法律・地質用語）" }
      ],
      family: [
        { word: "deluge", desc: "大洪水（de+luere）" },
        { word: "dilute", desc: "薄める（di+luere）" },
        { word: "ablution", desc: "沐浴・洗浄（ab+luere）" }
      ],
      compounds: [
        { phrase: "alluvial plain", desc: "沖積平野" },
        { phrase: "alluvial fan", desc: "扇状地" }
      ]
    },
    "compost": {
      origin: "ラテン語 compositus（混合した・構成された）から。com-（共に）＋ponere（置く）の過去分詞。複数のものを「共に置いた」混合物が原義。有機物を腐熟させた堆肥を指す。",
      derivatives: [
        { word: "compost heap", desc: "コンポスト山・堆肥置き場" },
        { word: "composting", desc: "堆肥化（動名詞）" },
        { word: "composter", desc: "コンポスト容器" }
      ],
      family: [
        { word: "compose", desc: "作曲する・構成する" },
        { word: "composite", desc: "複合の・合成の" },
        { word: "compound", desc: "化合物・複合語" }
      ],
      compounds: [
        { phrase: "compost bin", desc: "コンポスト容器" },
        { phrase: "garden compost", desc: "ガーデン用堆肥" }
      ]
    },
    "decompose": {
      origin: "フランス語 décomposer（分解する）から。ラテン語 de-（元に戻す・除く）＋componere（構成する）。「構成要素に戻す」が原義。有機物が微生物によって分解されること。",
      derivatives: [
        { word: "decomposition", desc: "分解・腐敗" },
        { word: "decomposed", desc: "分解された" },
        { word: "decomposer", desc: "分解者（生態学）" }
      ],
      family: [
        { word: "compose", desc: "構成する" },
        { word: "composite", desc: "複合の" },
        { word: "decompile", desc: "逆コンパイルする" }
      ],
      compounds: [
        { phrase: "decompose organic matter", desc: "有機物を分解する" },
        { phrase: "decomposition rate", desc: "分解速度" }
      ]
    },
    "floodplain": {
      origin: "英語 flood（洪水）＋plain（平野）の複合語。古英語 flod（流れ・洪水）と古フランス語 plain（平らな）に由来。河川が氾濫した際に浸水する平坦な低地。自然の遊水機能を持つ地形。",
      derivatives: [
        { word: "floodplain forest", desc: "氾濫原の森林" }
      ],
      family: [
        { word: "flood", desc: "洪水" },
        { word: "plain", desc: "平野" },
        { word: "floodwater", desc: "洪水の水" }
      ],
      compounds: [
        { phrase: "floodplain management", desc: "氾濫原の管理" },
        { phrase: "floodplain ecosystem", desc: "氾濫原の生態系" }
      ]
    },
    "glacier": {
      origin: "フランス語 glacier（氷河）から。glace（氷）に由来し、ラテン語 glacies（氷）が語根。glac- は古インド・ヨーロッパ語 *gel-（冷たい・凍る）から来る。山岳地帯に形成される巨大な氷の流れ。",
      derivatives: [
        { word: "glacial", desc: "氷河の・氷のように冷たい" },
        { word: "glaciation", desc: "氷河作用" },
        { word: "glaciology", desc: "氷河学" }
      ],
      family: [
        { word: "glacé", desc: "砂糖漬けの（フランス語）" },
        { word: "glaze", desc: "光沢・釉薬" },
        { word: "gelatin", desc: "ゼラチン（gel- 語根）" }
      ],
      compounds: [
        { phrase: "glacier retreat", desc: "氷河の後退" },
        { phrase: "alpine glacier", desc: "山岳氷河" }
      ]
    },
    "mangrove": {
      origin: "ポルトガル語 mangue（マングローブの木）とオランダ語 grove（木立・小林）が合成された語とも、またはマレー語 mangi-mangi からポルトガル語が変化したとも言われる。熱帯・亜熱帯の汽水域に育つ植物群。",
      derivatives: [
        { word: "mangrove forest", desc: "マングローブ林" },
        { word: "mangrove swamp", desc: "マングローブ湿地" }
      ],
      family: [
        { word: "grove", desc: "木立・小林" }
      ],
      compounds: [
        { phrase: "mangrove ecosystem", desc: "マングローブ生態系" },
        { phrase: "mangrove restoration", desc: "マングローブの再生" }
      ]
    },
    "peatland": {
      origin: "英語 peat（泥炭）＋land（土地）の複合語。peat は中期英語 pete（泥炭）に由来し、ケルト語系とも。植物が不完全な分解により堆積した有機土壌（泥炭）が広がる湿地帯。",
      derivatives: [
        { word: "peat bog", desc: "泥炭湿地" },
        { word: "peat moss", desc: "ミズゴケ（泥炭苔）" }
      ],
      family: [
        { word: "peat", desc: "泥炭" },
        { word: "land", desc: "土地" }
      ],
      compounds: [
        { phrase: "tropical peatland", desc: "熱帯泥炭地" },
        { phrase: "peatland carbon", desc: "泥炭地の炭素蓄積" }
      ]
    },
    "plateau": {
      origin: "フランス語 plateau（高原・台地）から。plat（平らな）の指小形。ラテン語 plattus（平らな）に由来し、ギリシャ語 platys（広い・平らな）が語根。四方を崖に囲まれた平坦な高地。",
      derivatives: [
        { word: "plateaux", desc: "高原（複数形・フランス語式）" },
        { word: "plateau effect", desc: "プラトー効果（伸び悩み）" }
      ],
      family: [
        { word: "plate", desc: "板・皿（plattus から）" },
        { word: "platform", desc: "プラットフォーム" },
        { word: "platitude", desc: "月並みな言葉" }
      ],
      compounds: [
        { phrase: "Tibetan Plateau", desc: "チベット高原" },
        { phrase: "reach a plateau", desc: "高原状態になる・伸び悩む" }
      ]
    },
    "rainforest": {
      origin: "英語 rain（雨）＋forest（森）の複合語。ドイツ語 Regenwald（雨の森）を19世紀に翻訳借用したとされる。年間降水量が極めて多い熱帯・温帯の密林を指す。地球上の生物多様性の宝庫。",
      derivatives: [
        { word: "tropical rainforest", desc: "熱帯雨林" },
        { word: "temperate rainforest", desc: "温帯雨林" }
      ],
      family: [
        { word: "rain", desc: "雨" },
        { word: "forest", desc: "森林" },
        { word: "deforestation", desc: "森林破壊" }
      ],
      compounds: [
        { phrase: "Amazon rainforest", desc: "アマゾン熱帯雨林" },
        { phrase: "rainforest destruction", desc: "熱帯雨林の破壊" }
      ]
    },
    "riparian": {
      origin: "ラテン語 riparius（川岸の）から。ripa（川岸・岸辺）に由来。川や河川の岸に関連することを表す形容詞。河畔植生・河岸の権利など生態学・法律で使われる専門語。",
      derivatives: [
        { word: "riparian rights", desc: "河川用水権" },
        { word: "riparian zone", desc: "河岸帯・河畔域" }
      ],
      family: [
        { word: "river", desc: "川（ripa と語根対応）" },
        { word: "arrive", desc: "到着する（ad+ripa、川岸に着く）" }
      ],
      compounds: [
        { phrase: "riparian vegetation", desc: "河畔植生" },
        { phrase: "riparian habitat", desc: "河岸生息地" }
      ]
    },
    "savanna": {
      origin: "スペイン語 sabana（草原）から。タイノ語（カリブ海先住民語）zabana（草原・平原）に由来。16世紀にスペインの探検家たちがカリブ地域の平原を表すために使った語。熱帯・亜熱帯の草原地帯。",
      derivatives: [
        { word: "savannah", desc: "サバンナ（英語スペリング）" }
      ],
      family: [
        { word: "steppe", desc: "ステップ（ユーラシアの草原）" },
        { word: "prairie", desc: "プレーリー（北米の草原）" }
      ],
      compounds: [
        { phrase: "African savanna", desc: "アフリカのサバンナ" },
        { phrase: "savanna ecosystem", desc: "サバンナ生態系" }
      ]
    },
    "stratum": {
      origin: "ラテン語 stratum（広げたもの・敷かれたもの）から。sternere（広げる・敷く）の過去分詞。地質学では積み重なった岩や土の層を指し、社会学では「社会層・階層」の意味でも使われる。",
      derivatives: [
        { word: "strata", desc: "地層（複数形）" },
        { word: "stratify", desc: "層に分ける・成層化する" },
        { word: "stratification", desc: "成層化・層位" }
      ],
      family: [
        { word: "stratosphere", desc: "成層圏" },
        { word: "street", desc: "道路（sternere から：舗装された道）" },
        { word: "prostrate", desc: "うつ伏せになる（pro+sternere）" }
      ],
      compounds: [
        { phrase: "geological stratum", desc: "地質層" },
        { phrase: "social stratum", desc: "社会階層" }
      ]
    },
    "subduction": {
      origin: "ラテン語 subducere（引き下げる）から。sub-（下に）＋ducere（引く・導く）。地質学では一方のプレートが別のプレートの下に潜り込む現象を指す。1960年代のプレートテクトニクス理論で確立した用語。",
      derivatives: [
        { word: "subduct", desc: "沈み込む（動詞）" },
        { word: "subduction zone", desc: "沈み込み帯" }
      ],
      family: [
        { word: "duct", desc: "管・導管" },
        { word: "conduct", desc: "指揮する・導く（con+ducere）" },
        { word: "abduct", desc: "誘拐する（ab+ducere）" }
      ],
      compounds: [
        { phrase: "subduction plate", desc: "沈み込むプレート" },
        { phrase: "subduction earthquake", desc: "沈み込み帯地震" }
      ]
    },
    "temperate": {
      origin: "ラテン語 temperatus（適度に調整された）から。temperare（適切に混ぜる・調節する）の過去分詞。temper（調合する）が語根で、「適温に保たれた」が原義。温帯の気候帯を指す。",
      derivatives: [
        { word: "temperate zone", desc: "温帯" },
        { word: "temperately", desc: "穏やかに" },
        { word: "intemperance", desc: "不節制" }
      ],
      family: [
        { word: "temperature", desc: "温度" },
        { word: "temper", desc: "気質・調合する" },
        { word: "temperament", desc: "気質・性質" }
      ],
      compounds: [
        { phrase: "temperate climate", desc: "温帯気候" },
        { phrase: "temperate forest", desc: "温帯林" }
      ]
    },
    "thermocline": {
      origin: "ギリシャ語 thermos（熱い）とklinein（傾く・傾斜する）が結合した科学語。水温が急激に変化する水深帯を指す。冷たい深層水と温かい表層水の境界層で、密度・塩分も変化する。",
      derivatives: [
        { word: "thermocline layer", desc: "水温躍層" }
      ],
      family: [
        { word: "thermometer", desc: "温度計" },
        { word: "thermostat", desc: "サーモスタット" },
        { word: "incline", desc: "傾く（in+clinare）" }
      ],
      compounds: [
        { phrase: "seasonal thermocline", desc: "季節性水温躍層" },
        { phrase: "permanent thermocline", desc: "恒久的水温躍層" }
      ]
    },
    "boolean": {
      origin: "数学者・論理学者 George Boole（1815-1864）の姓から。ブールが著書『思考の法則』（1854）で開発した二値論理体系に由来。コンピュータ科学では真（true）と偽（false）の二値型を指す。",
      derivatives: [
        { word: "Boolean algebra", desc: "ブール代数" },
        { word: "Boolean expression", desc: "ブール式" },
        { word: "Boolean operator", desc: "論理演算子" }
      ],
      family: [
        { word: "binary", desc: "二値の・2進数の" },
        { word: "logic", desc: "論理" }
      ],
      compounds: [
        { phrase: "Boolean search", desc: "ブール検索" },
        { phrase: "Boolean value", desc: "ブール値（true/false）" }
      ]
    },
    "codebase": {
      origin: "英語 code（コード・符号）＋base（基盤・土台）の複合語。1980〜90年代のソフトウェア工学用語として定着。ソフトウェアプロジェクトを構成するすべてのソースコードの集合体を指す。",
      derivatives: [
        { word: "legacy codebase", desc: "レガシーコードベース" }
      ],
      family: [
        { word: "source code", desc: "ソースコード" },
        { word: "repository", desc: "コードリポジトリ" }
      ],
      compounds: [
        { phrase: "large codebase", desc: "大規模コードベース" },
        { phrase: "monolithic codebase", desc: "モノリシックコードベース" }
      ]
    },
    "debugger": {
      origin: "英語 debug（バグを除去する）＋-er（行為者・道具）から。bug（バグ・虫）は1947年にグレース・ホッパーがコンピュータ内部の実際の虫（蛾）を除去したことに由来するとされる。プログラムのバグを発見・修正するツール。",
      derivatives: [
        { word: "debugging", desc: "デバッグ作業" },
        { word: "debug", desc: "バグを修正する" }
      ],
      family: [
        { word: "bug", desc: "バグ・不具合" },
        { word: "IDE", desc: "統合開発環境（デバッガーを含む）" }
      ],
      compounds: [
        { phrase: "interactive debugger", desc: "対話式デバッガー" },
        { phrase: "remote debugger", desc: "リモートデバッガー" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch E (environment: alluvium-thermocline + IT: boolean-debugger)');
