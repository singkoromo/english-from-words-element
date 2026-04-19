/**
 * gen_origins_new_F.js — IT continued (12) + Sports (13) from data-mixed-53
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "decentralized": {
      origin: "ラテン語 de-（離れて）＋centrum（中心）から。centralize（集中化する）に反対を示す de- と形容詞化の -ized が付いた語。1990年代以降、コンピュータネットワークや組織構造の分散化を指す用語として定着した。",
      derivatives: [
        { word: "decentralize", desc: "分散化する（動詞）" },
        { word: "decentralization", desc: "分散化・分権化（名詞）" }
      ],
      family: [
        { word: "central", desc: "中央の" },
        { word: "center", desc: "中心" },
        { word: "centralized", desc: "集中化された" }
      ],
      compounds: [
        { phrase: "decentralized network", desc: "分散型ネットワーク" },
        { phrase: "decentralized finance", desc: "分散型金融（DeFi）" }
      ]
    },
    "deterministic": {
      origin: "ラテン語 determinare（境界を定める・決定する）から。de-（完全に）＋terminare（限定する）。terminus（境界）が語根。哲学用語「決定論（determinism）」の形容詞形で、CS では同じ入力が常に同じ出力を生む性質を指す。",
      derivatives: [
        { word: "determinism", desc: "決定論" },
        { word: "deterministically", desc: "決定論的に" }
      ],
      family: [
        { word: "determine", desc: "決定する" },
        { word: "terminal", desc: "終端の・端末" },
        { word: "terminate", desc: "終了する" }
      ],
      compounds: [
        { phrase: "deterministic algorithm", desc: "決定論的アルゴリズム" },
        { phrase: "non-deterministic", desc: "非決定論的な" }
      ]
    },
    "devops": {
      origin: "英語 Development（開発）と Operations（運用）の混成語（portmanteau）。2009年のアジャイル会議でPatrick Debois らが提唱した開発と運用を統合する文化・手法。ソフトウェアを高速に継続的にデリバリーするための哲学。",
      derivatives: [
        { word: "DevOps engineer", desc: "DevOpsエンジニア" },
        { word: "DevOps pipeline", desc: "DevOpsパイプライン" }
      ],
      family: [
        { word: "CI/CD", desc: "継続的インテグレーション／デリバリー" },
        { word: "agile", desc: "アジャイル（関連手法）" }
      ],
      compounds: [
        { phrase: "DevOps culture", desc: "DevOps文化" },
        { phrase: "DevOps toolchain", desc: "DevOpsツールチェーン" }
      ]
    },
    "plugin": {
      origin: "英語 plug（差し込む）＋in（中へ）の複合語。plug は低地ドイツ語 plugge（木の栓）に由来。ソフトウェアに「差し込む」ことで機能を追加するモジュールを指す。1960年代のコンピュータ工学で定着した語。",
      derivatives: [
        { word: "plugin architecture", desc: "プラグインアーキテクチャ" },
        { word: "plug-in", desc: "プラグイン（ハイフン表記）" }
      ],
      family: [
        { word: "plug", desc: "栓・差し込む" },
        { word: "add-on", desc: "アドオン（類義語）" },
        { word: "extension", desc: "拡張機能（類義語）" }
      ],
      compounds: [
        { phrase: "browser plugin", desc: "ブラウザプラグイン" },
        { phrase: "audio plugin", desc: "音楽制作プラグイン" }
      ]
    },
    "refactor": {
      origin: "英語 re-（再び）＋factor（要素）から。Martin Fowler の著書『Refactoring』（1999）で概念が体系化された。外部からの動作を変えずに内部のコード構造を改善すること。ソフトウェア工学の重要な実践。",
      derivatives: [
        { word: "refactoring", desc: "リファクタリング" },
        { word: "refactored", desc: "リファクタリングした" }
      ],
      family: [
        { word: "factor", desc: "因子・要素" },
        { word: "factorial", desc: "階乗" },
        { word: "manufacture", desc: "製造する（manu+facere）" }
      ],
      compounds: [
        { phrase: "code refactoring", desc: "コードリファクタリング" },
        { phrase: "refactoring patterns", desc: "リファクタリングパターン" }
      ]
    },
    "regex": {
      origin: "Regular Expression（正規表現）の略語。「正規（regular）」はKleene（1956）の正規言語理論に由来し、ラテン語 regularis（規則の）から。文字列パターンを記述するための形式言語で、1970年代の Unix ツール sed, grep に実装された。",
      derivatives: [
        { word: "regexp", desc: "regexの別略称" },
        { word: "regular expression", desc: "正規表現（正式名称）" }
      ],
      family: [
        { word: "regular", desc: "規則的な" },
        { word: "expression", desc: "表現・式" },
        { word: "pattern matching", desc: "パターンマッチング" }
      ],
      compounds: [
        { phrase: "regex pattern", desc: "正規表現パターン" },
        { phrase: "regex engine", desc: "正規表現エンジン" }
      ]
    },
    "socket": {
      origin: "古フランス語 soket（くぼみ・差し込み口）から。soc（すき先）の指小形で、ラテン語 soccus（靴・くぼみ）に由来。コンピュータネットワークでは1983年頃 Berkeley Socket API として確立。ネットワーク通信の接続端点を指す。",
      derivatives: [
        { word: "socket connection", desc: "ソケット接続" },
        { word: "WebSocket", desc: "ウェブソケット" }
      ],
      family: [
        { word: "plug", desc: "プラグ（socket の対）" },
        { word: "port", desc: "ポート番号（関連概念）" }
      ],
      compounds: [
        { phrase: "TCP socket", desc: "TCPソケット" },
        { phrase: "socket programming", desc: "ソケットプログラミング" }
      ]
    },
    "timestamp": {
      origin: "英語 time（時間）＋stamp（刻印・印）の複合語。stamp は古英語 stempan（踏む・押す）に由来。特定の日時を記録したデジタルの「刻印」を意味する。データベース、ログ、ブロックチェーンで広く使われる概念。",
      derivatives: [
        { word: "timestamped", desc: "タイムスタンプが付いた" },
        { word: "Unix timestamp", desc: "Unixタイムスタンプ（1970年1月1日からの秒数）" }
      ],
      family: [
        { word: "stamp", desc: "スタンプ・切手" },
        { word: "datetime", desc: "日時" }
      ],
      compounds: [
        { phrase: "creation timestamp", desc: "作成日時スタンプ" },
        { phrase: "timestamp format", desc: "タイムスタンプ形式" }
      ]
    },
    "tokenize": {
      origin: "ラテン語 token（印・証拠）に由来する token に動詞接尾辞 -ize が付いた語。古英語 tacen（印）が語根。自然言語処理（NLP）では文字列を意味のある最小単位（トークン）に分割すること。大規模言語モデルもトークン単位で処理を行う。",
      derivatives: [
        { word: "tokenization", desc: "トークン化（名詞）" },
        { word: "tokenizer", desc: "トークナイザー" },
        { word: "token", desc: "トークン・単位" }
      ],
      family: [
        { word: "token", desc: "印・証拠・代替手段" },
        { word: "by the same token", desc: "同様に（慣用句）" }
      ],
      compounds: [
        { phrase: "byte pair tokenization", desc: "バイトペアトークン化（BPE）" },
        { phrase: "tokenize text", desc: "テキストをトークン化する" }
      ]
    },
    "transpile": {
      origin: "英語 trans-（変換・超えて）＋compile（コンパイル）の混成語（portmanteau）。compile はラテン語 compilare（まとめる）から。あるプログラム言語（TypeScript, Sassなど）を別の言語（JavaScript, CSS）に変換するコンパイルの一形態。",
      derivatives: [
        { word: "transpiler", desc: "トランスパイラー" },
        { word: "transpilation", desc: "トランスパイル処理" }
      ],
      family: [
        { word: "compile", desc: "コンパイルする" },
        { word: "compiler", desc: "コンパイラ" },
        { word: "transform", desc: "変換する" }
      ],
      compounds: [
        { phrase: "TypeScript transpiler", desc: "TypeScriptトランスパイラー" },
        { phrase: "source-to-source compilation", desc: "ソース間コンパイル（transpile の別称）" }
      ]
    },
    "tuple": {
      origin: "ラテン語の数詞接尾辞 -tuple（倍・倍数）から。double（2倍）、triple（3倍）などの系列に由来し、n-tuple（n個組）として一般化された数学・CS 用語。固定長の順序付きデータの集合を表す。",
      derivatives: [
        { word: "n-tuple", desc: "n個組" },
        { word: "2-tuple", desc: "2つ組（ペア）" }
      ],
      family: [
        { word: "double", desc: "2倍（duo+tuple）" },
        { word: "triple", desc: "3倍" },
        { word: "quadruple", desc: "4倍" }
      ],
      compounds: [
        { phrase: "named tuple", desc: "名前付きタプル" },
        { phrase: "tuple unpacking", desc: "タプルのアンパック" }
      ]
    },
    "virtualize": {
      origin: "ラテン語 virtualis（潜在的な・力のある）から。virtus（力・美徳）が語根。virtual（仮想の）に動詞接尾辞 -ize が付いた形。物理的なハードウェアリソースをソフトウェアで抽象化・仮想化すること。VM, Docker コンテナなどがその例。",
      derivatives: [
        { word: "virtualization", desc: "仮想化（名詞）" },
        { word: "virtualized", desc: "仮想化された" }
      ],
      family: [
        { word: "virtual", desc: "仮想の・実質的な" },
        { word: "virtual machine", desc: "仮想マシン（VM）" },
        { word: "virtue", desc: "美徳（virtus と同語根）" }
      ],
      compounds: [
        { phrase: "server virtualization", desc: "サーバー仮想化" },
        { phrase: "network virtualization", desc: "ネットワーク仮想化" }
      ]
    },
    "ergonomic": {
      origin: "ギリシャ語 ergon（仕事・作業）＋nomos（法則・管理）から。1950年にKojarzycki の造語とも、または英国のHywel Murrell が設立した人間工学会で命名とも。人間の体・動作に合った製品・環境設計を指す。",
      derivatives: [
        { word: "ergonomics", desc: "人間工学（学問名）" },
        { word: "ergonomically", desc: "人間工学的に" }
      ],
      family: [
        { word: "ergometer", desc: "エルゴメーター（運動量測定器）" },
        { word: "energy", desc: "エネルギー（en+ergon）" },
        { word: "synergy", desc: "相乗効果（syn+ergon）" }
      ],
      compounds: [
        { phrase: "ergonomic chair", desc: "人間工学的な椅子" },
        { phrase: "ergonomic keyboard", desc: "エルゴノミクスキーボード" }
      ]
    },
    "exertion": {
      origin: "ラテン語 exserere（外に出す）から。ex-（外へ）＋serere（結ぶ・連続させる）。力や努力を「外に押し出す」行為を意味する。身体的・精神的な力を出すことを指す名詞。",
      derivatives: [
        { word: "exert", desc: "（力を）発揮する・行使する" },
        { word: "exertional", desc: "運動による・努力性の" }
      ],
      family: [
        { word: "insert", desc: "挿入する（in+serere）" },
        { word: "assert", desc: "主張する（ad+serere）" },
        { word: "desert", desc: "放棄する（de+serere）" }
      ],
      compounds: [
        { phrase: "physical exertion", desc: "身体的努力・体力消耗" },
        { phrase: "exertion headache", desc: "運動性頭痛" }
      ]
    },
    "glycogen": {
      origin: "ギリシャ語 glykys（甘い）＋gennan（生む・産生する）から。Claude Bernard が1857年に肝臓内のグルコース貯蔵物質を発見し命名。筋肉や肝臓に貯蔵される多糖類で、運動時にグルコースに分解されてエネルギーになる。",
      derivatives: [
        { word: "glycogenolysis", desc: "グリコーゲン分解" },
        { word: "glycogenesis", desc: "グリコーゲン合成" }
      ],
      family: [
        { word: "glucose", desc: "グルコース（glykys から）" },
        { word: "glycine", desc: "グリシン（甘いアミノ酸）" },
        { word: "glycerol", desc: "グリセロール" }
      ],
      compounds: [
        { phrase: "glycogen stores", desc: "グリコーゲン貯蔵量" },
        { phrase: "glycogen loading", desc: "グリコーゲンローディング（カーボローディング）" }
      ]
    },
    "lactic": {
      origin: "ラテン語 lac（乳・牛乳）から派生した形容詞。lactis（乳の）が語根。スウェーデンの化学者 Scheele が1780年に酸乳から発見した有機酸「乳酸（lactic acid）」に由来。運動中の筋肉でグルコースが無酸素代謝されると生成される。",
      derivatives: [
        { word: "lactate", desc: "乳酸塩・乳酸を生成する" },
        { word: "lactose", desc: "乳糖（lac+ose）" },
        { word: "lactalbumin", desc: "乳アルブミン" }
      ],
      family: [
        { word: "lactation", desc: "授乳" },
        { word: "galaxy", desc: "銀河（gala＝乳のギリシャ語から）" }
      ],
      compounds: [
        { phrase: "lactic acid", desc: "乳酸" },
        { phrase: "lactic threshold", desc: "乳酸閾値" }
      ]
    },
    "maximal": {
      origin: "ラテン語 maximus（最大の）から派生した形容詞。magnus（大きい）の最上級。-al は「〜に関する・〜の性質の」形容詞接尾辞。最大限・極限の状態・量を表す語。数学や医学でも使われる専門語。",
      derivatives: [
        { word: "maximally", desc: "最大限に" },
        { word: "maximize", desc: "最大化する" },
        { word: "maximum", desc: "最大値" }
      ],
      family: [
        { word: "maximum", desc: "最大値（maximus の名詞形）" },
        { word: "magnitude", desc: "大きさ（magnus から）" },
        { word: "major", desc: "大きい方の（maior から）" }
      ],
      compounds: [
        { phrase: "maximal effort", desc: "最大限の努力" },
        { phrase: "maximal oxygen uptake", desc: "最大酸素摂取量（VO2max）" }
      ]
    },
    "muscular": {
      origin: "ラテン語 musculus（筋肉・小ネズミ）から。「筋肉の隆起がネズミが皮下を走るように見える」ことに由来する。mus（ネズミ）の指小形。英語 mouse（マウス）とも同語根。",
      derivatives: [
        { word: "muscularity", desc: "筋肉質であること" },
        { word: "musculoskeletal", desc: "筋骨格の" }
      ],
      family: [
        { word: "muscle", desc: "筋肉" },
        { word: "mouse", desc: "マウス（mus と同語根）" },
        { word: "mussel", desc: "ムール貝（形が似ている）" }
      ],
      compounds: [
        { phrase: "muscular strength", desc: "筋力" },
        { phrase: "muscular dystrophy", desc: "筋ジストロフィー" }
      ]
    },
    "overtraining": {
      origin: "英語 over-（過度に・超えて）＋training（訓練）の複合語。1923年頃から医学・スポーツ科学文献に登場。運動による刺激が身体の回復能力を超えた状態で、パフォーマンス低下・疲労・免疫低下を引き起こす症候群。",
      derivatives: [
        { word: "overtraining syndrome", desc: "オーバートレーニング症候群" },
        { word: "overtrained", desc: "オーバートレーニングした" }
      ],
      family: [
        { word: "overwork", desc: "過労する" },
        { word: "overtrain", desc: "過度に訓練する（動詞）" },
        { word: "recovery", desc: "回復（トレーニングの対概念）" }
      ],
      compounds: [
        { phrase: "overtraining prevention", desc: "オーバートレーニング予防" },
        { phrase: "signs of overtraining", desc: "オーバートレーニングのサイン" }
      ]
    },
    "periodization": {
      origin: "ギリシャ語 periodos（周期・巡回）から。peri-（周り）＋hodos（道）。スポーツ科学者 Leonid Matveyev が1964年に体系化した概念で、訓練を特定の目標を持つ段階（期間）に分ける計画的手法。",
      derivatives: [
        { word: "periodize", desc: "期分けする（動詞）" },
        { word: "periodized", desc: "期分けした" }
      ],
      family: [
        { word: "period", desc: "期間・周期" },
        { word: "periodic", desc: "周期的な" },
        { word: "episode", desc: "挿話（epi+hodos）" }
      ],
      compounds: [
        { phrase: "linear periodization", desc: "直線的期分け" },
        { phrase: "block periodization", desc: "ブロック期分け" }
      ]
    },
    "plyometric": {
      origin: "ギリシャ語 pleiōn（より多くの）または pleion（増加）＋metron（測定）から。Fred Wilt が1975年頃に命名。Yuri Verkhoshansky のソビエトの跳躍力トレーニング手法を指す語。筋肉の伸張収縮サイクルを使った爆発的な運動。",
      derivatives: [
        { word: "plyometrics", desc: "プライオメトリクス（学問・訓練体系）" }
      ],
      family: [
        { word: "metric", desc: "測定・指標" },
        { word: "plentiful", desc: "豊富な（pleion と語根対応）" }
      ],
      compounds: [
        { phrase: "plyometric exercise", desc: "プライオメトリック運動" },
        { phrase: "plyometric jump", desc: "プライオメトリックジャンプ" }
      ]
    },
    "posture": {
      origin: "ラテン語 positura（位置・姿勢）から。ponere（置く）の過去分詞 positus に由来。「体を置く・保つ様子」が原義。比喩的に「政治的姿勢・立場」の意味でも使われる。",
      derivatives: [
        { word: "postural", desc: "姿勢の" },
        { word: "postural correction", desc: "姿勢矯正" }
      ],
      family: [
        { word: "position", desc: "位置・立場" },
        { word: "deposit", desc: "預ける（de+ponere）" },
        { word: "impose", desc: "課す（im+ponere）" }
      ],
      compounds: [
        { phrase: "good posture", desc: "良い姿勢" },
        { phrase: "posture correction", desc: "姿勢矯正" }
      ]
    },
    "proprioception": {
      origin: "ラテン語 proprius（自分の・固有の）＋capere（捉える・感知する）＋-ion（名詞化）から。生理学者 Charles Sherrington が1906年に命名。身体自身の位置・運動・力を感知する内受容感覚。バランスや運動制御に不可欠。",
      derivatives: [
        { word: "proprioceptive", desc: "固有感覚の（形容詞）" },
        { word: "proprioceptor", desc: "固有受容器" }
      ],
      family: [
        { word: "proper", desc: "適切な・固有の（proprius から）" },
        { word: "property", desc: "性質・財産" },
        { word: "perceive", desc: "知覚する（capere から）" }
      ],
      compounds: [
        { phrase: "proprioceptive training", desc: "固有感覚トレーニング" },
        { phrase: "proprioceptive feedback", desc: "固有感覚フィードバック" }
      ]
    },
    "stamina": {
      origin: "ラテン語 stamina（糸・体の根本的な力）から。stamen（縦糸・花の雄しべ）の複数形。生命の糸を紡ぐ「運命の女神の糸」に由来する概念で、持続的な身体的・精神的力を意味する。",
      derivatives: [
        { word: "endurance", desc: "持久力（類義語）" }
      ],
      family: [
        { word: "stamen", desc: "雄しべ（stamina と同語根）" },
        { word: "stem", desc: "茎・幹（stamen と語根対応）" }
      ],
      compounds: [
        { phrase: "build stamina", desc: "持久力をつける" },
        { phrase: "mental stamina", desc: "精神的スタミナ" }
      ]
    },
    "stretching": {
      origin: "古英語 streccan（伸ばす・延ばす）から。ゲルマン語 *strakkjanan（真っすぐにする）が語根。筋肉・腱・靭帯を意図的に引き伸ばして柔軟性を高める運動を指す。",
      derivatives: [
        { word: "stretch", desc: "伸ばす・延ばす（動詞・名詞）" },
        { word: "stretchable", desc: "伸縮性のある" }
      ],
      family: [
        { word: "stretch", desc: "伸ばす" },
        { word: "straight", desc: "まっすぐな（同語根）" }
      ],
      compounds: [
        { phrase: "static stretching", desc: "静的ストレッチ" },
        { phrase: "dynamic stretching", desc: "動的ストレッチ" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch F (IT: decentralized-virtualize + Sports: ergonomic-stretching)');
