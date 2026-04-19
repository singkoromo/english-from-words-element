const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "class-action": {
      origin: "英語 class（集団・類）＋action（訴訟・行動）。同様の損害を受けた多数の当事者が代表原告を通じて共同提起する訴訟形式。米国で発展した制度。",
      derivatives: ["class suit", "representative action"],
      family: ["collective litigation"],
      compounds: ["class action lawsuit", "class action settlement"]
    },
    "clearance": {
      origin: "古フランス語 clarer（明確にする・片付ける）から。clear（明確な）＋-ance。障害の除去・通関・在庫処分・機密アクセス許可など多義的な語。",
      derivatives: ["security clearance", "customs clearance"],
      family: ["clear-", "open"],
      compounds: ["security clearance", "customs clearance", "clearance sale"]
    },
    "custodian": {
      origin: "ラテン語 custos（番人・守衛）から。custodia（保護）。財産・施設・文書の管理・保管責任を持つ人。法律では未成年者の保護権者も指す。",
      derivatives: ["custody", "custodial"],
      family: ["cust-", "guard"],
      compounds: ["record custodian", "legal custodian", "custodian bank"]
    },
    "write-off": {
      origin: "英語 write（書く）＋off（消す）。帳簿上で損失として記録して資産価値をゼロにすること。会計・税務上の概念。転じて「無駄になった投資」も指す。",
      derivatives: ["tax write-off", "debt write-off"],
      family: ["accounting terms"],
      compounds: ["tax write-off", "debt write-off", "write-off period"]
    },
    "quarantine": {
      origin: "イタリア語 quarantina giorni（40日間）から。ラテン語 quadraginta（40）。中世のペスト流行時、ヴェネツィアで船を40日間沖合待機させた感染防止措置。",
      derivatives: ["quarantine period", "isolation"],
      family: ["quadr-", "forty"],
      compounds: ["quarantine period", "mandatory quarantine", "quarantine station"]
    },
    "bohemian": {
      origin: "チェコの Bohemia（ボヘミア）地方の名から。19世紀にパリで、放浪するジプシーがボヘミア出身と思われていたことから、慣習にとらわれない芸術家的生活様式を指すように。",
      derivatives: ["bohème", "boho"],
      family: ["artistic lifestyles"],
      compounds: ["bohemian lifestyle", "bohemian rhapsody", "boho chic"]
    },
    "bourgeoisie": {
      origin: "フランス語 bourgeoisie（市民）から。bourg（中世の城壁に囲まれた小都市）の住民 bourgeois が資産階級を指すように発展。マルクスが資本家階級の概念に使用。",
      derivatives: ["bourgeois", "petite bourgeoisie"],
      family: ["burg-", "town"],
      compounds: ["petite bourgeoisie", "haute bourgeoisie"]
    },
    "communitarianism": {
      origin: "英語 community（共同体）＋-arian（〜主義者の）＋-ism。アリストテレス・ヘーゲルに遡るが、1980〜90年代にマッキンタイア・サンデルらが自由主義への対抗概念として展開。",
      derivatives: ["communitarian", "liberal communitarianism"],
      family: ["community-based ethics"],
      compounds: ["liberal communitarianism", "communitarian ethics"]
    },
    "counterculture": {
      origin: "英語 counter-（対抗・反対）＋culture（文化）。1960〜70年代に米国で主流社会の価値観・慣習を拒否したヒッピー・公民権・反戦運動の総称として定着。",
      derivatives: ["subcultural", "anti-establishment"],
      family: ["counter-", "culture"],
      compounds: ["1960s counterculture", "counterculture movement"]
    },
    "ethos": {
      origin: "ギリシャ語 ethos（習慣・性格・精神）から。アリストテレスが修辞術の3要素の一つ（信頼性・品性）として用いた。集団・組織に特有の価値観・気質の総体。",
      derivatives: ["ethical", "ethics"],
      family: ["etho-", "custom"],
      compounds: ["company ethos", "national ethos", "professional ethos"]
    },
    "homogenization": {
      origin: "ギリシャ語 homos（同じ）＋genos（種・類）＋-ization。異なるものを均一・同質にするプロセス。グローバル化による文化的多様性の喪失を批判する文脈でよく使われる。",
      derivatives: ["homogenize", "standardization"],
      family: ["homo-", "gen-"],
      compounds: ["cultural homogenization", "milk homogenization"]
    },
    "hybridization": {
      origin: "ラテン語 hybrida（混血・雑種）から。hübris（傲慢）に関連する語とも。異なる種・文化・要素が混合して新しいものを生み出す生物学・文化人類学・技術の概念。",
      derivatives: ["hybrid", "hybridize"],
      family: ["hybr-", "mixed"],
      compounds: ["cultural hybridization", "genetic hybridization", "hybrid species"]
    },
    "indigenize": {
      origin: "ラテン語 indigena（土地生まれの）から。indu-（中に）＋gena（生まれた）。外来の制度・思想・技術を地域の文化・状況に適合させて土着化する過程。",
      derivatives: ["indigenization", "localize"],
      family: ["indig-", "native"],
      compounds: ["indigenize curriculum", "indigenize leadership"]
    },
    "intersectionality": {
      origin: "法学者キンバリー・クレンショーが1989年に提唱。英語 intersection（交差点）から。人種・性別・階級・性的指向などが交差して複合的な差別・抑圧を生む分析枠組み。",
      derivatives: ["intersectional", "intersectional feminism"],
      family: ["inter-", "sect-"],
      compounds: ["intersectional feminism", "intersectionality framework"]
    },
    "kinship": {
      origin: "古英語 cynn（親族・種族）＋-ship（状態）。血縁・婚姻によって結ばれた家族関係の総称。文化人類学では社会組織の基盤として重視される概念。",
      derivatives: ["kin", "kinspeople"],
      family: ["kin-", "kind"],
      compounds: ["kinship system", "kinship ties", "fictive kinship"]
    },
    "liberalization": {
      origin: "ラテン語 liberalis（自由に関する）から。liber（自由な）。政治・経済・社会の規制・制限を緩和して自由を拡大するプロセス。経済自由化・貿易自由化が典型例。",
      derivatives: ["liberalize", "deregulation"],
      family: ["liber-", "free"],
      compounds: ["economic liberalization", "trade liberalization", "political liberalization"]
    },
    "nativism": {
      origin: "ラテン語 nativus（生まれながらの・先天的な）から。哲学では知識の先天性を指し、政治では生まれながらの市民を外来者より優先する排外主義的立場を指す。",
      derivatives: ["nativist", "anti-immigration"],
      family: ["nativ-", "born"],
      compounds: ["political nativism", "nativist movement", "nativist ideology"]
    },
    "postcolonial": {
      origin: "英語 post-（後）＋colonial（植民地の）。植民地支配の正式終結後、その政治・経済・文化的影響を分析するサイードらの批評理論。「脱植民地」とも訳される。",
      derivatives: ["postcolonialism", "decolonization"],
      family: ["post-", "colon-"],
      compounds: ["postcolonial theory", "postcolonial literature", "postcolonial studies"]
    },
    "proletariat": {
      origin: "ラテン語 proletarius（子供だけが財産の最下層市民）から。proles（子孫）。マルクスが生産手段を持たず労働力を売る労働者階級を指す用語として使用。",
      derivatives: ["proletarian", "lumpenproletariat"],
      family: ["prolet-", "offspring"],
      compounds: ["urban proletariat", "industrial proletariat", "proletarian revolution"]
    },
    "secularization": {
      origin: "ラテン語 saecularis（この世の・時代の）から。saeculum（世代・時代）。宗教的権威・制度・価値観が社会生活から退いていく歴史的・社会学的プロセス。",
      derivatives: ["secularize", "secular"],
      family: ["saecul-", "worldly"],
      compounds: ["secularization theory", "social secularization"]
    },
    "stigmatization": {
      origin: "ギリシャ語 stigma（焼き印・刺し傷）から。stigmata（烙印）。特定の属性（病気・人種・生活スタイル）を持つ人を否定的に識別して社会的排除を生む過程。",
      derivatives: ["stigma", "destigmatization"],
      family: ["stigm-", "mark"],
      compounds: ["social stigmatization", "stigmatization of mental illness"]
    },
    "systemic": {
      origin: "ギリシャ語 systema（全体として組み合わされたもの）から。system＋-ic。個別の事例ではなく制度・組織・社会全体の構造に根ざした状態を表す形容詞。",
      derivatives: ["systemically", "systemic racism"],
      family: ["system-", "whole"],
      compounds: ["systemic racism", "systemic risk", "systemic change"]
    },
    "tribalism": {
      origin: "ラテン語 tribus（部族・三分された集団）＋-ism。自分の属する集団への強烈な帰属意識と、外部集団への排他性。政治・スポーツ・宗教的文脈で批判的に使われる。",
      derivatives: ["tribal", "tribalist"],
      family: ["trib-", "tribe"],
      compounds: ["political tribalism", "tribal conflict", "tribal identity"]
    },
    "carbon-neutral": {
      origin: "英語 carbon（炭素・CO₂）＋neutral（中立の）。CO₂の排出量と吸収・相殺量が等しくなって正味ゼロになる状態。2050年を目標とする各国の気候政策の核心概念。",
      derivatives: ["carbon neutrality", "net zero"],
      family: ["carbon terms"],
      compounds: ["carbon neutral goal", "carbon neutral economy", "carbon neutral company"]
    },
    "benchmarking": {
      origin: "英語 benchmark（測量の基準点・水準標）から。surveyors の道具が語源。自社の業績・プロセス・製品を競合他社や業界最高水準と比較評価する経営手法。",
      derivatives: ["benchmark", "performance benchmarking"],
      family: ["bench-", "mark"],
      compounds: ["competitive benchmarking", "internal benchmarking", "best practice benchmarking"]
    },
    "budgeting": {
      origin: "古フランス語 bougette（小さな革袋）から。ラテン語 bulga（皮袋）。「財布の中身」から財務計画の策定・管理へ意味が拡張。中世フランスの財務大臣の書類袋が語源。",
      derivatives: ["budget", "zero-based budgeting"],
      family: ["budg-", "bag"],
      compounds: ["zero-based budgeting", "capital budgeting", "budget allocation"]
    },
    "confidentiality": {
      origin: "ラテン語 confidere（完全に信頼する）から。con-（完全に）＋fidere（信じる）。秘密情報を第三者に漏らさない義務または状態。法律・医療・ビジネスで重要な概念。",
      derivatives: ["confidential", "non-disclosure"],
      family: ["fid-", "trust"],
      compounds: ["confidentiality agreement", "doctor-patient confidentiality", "data confidentiality"]
    },
    "escalation": {
      origin: "スペイン語 escalada（はしごによる攀じ登り）から。ラテン語 scala（はしご）。段階的な強化・拡大、または下位から上位への問題の転送（エスカレーション）。",
      derivatives: ["escalate", "de-escalation"],
      family: ["scal-", "ladder"],
      compounds: ["conflict escalation", "price escalation", "escalation policy"]
    },
    "exit-strategy": {
      origin: "英語 exit（出口・退出）＋strategy（戦略）。ラテン語 exitus（出口）から。投資・事業・軍事作戦から損失を最小化しながら撤退するための計画。",
      derivatives: ["exit plan", "divestment"],
      family: ["exit planning"],
      compounds: ["business exit strategy", "investor exit strategy", "exit strategy plan"]
    },
    "KPI": {
      origin: "Key Performance Indicator（重要業績評価指標）の略語。1970年代の経営学で普及。組織・プロジェクト・個人の目標達成度を定量的に測定するための指標。",
      derivatives: ["OKR", "metric"],
      family: ["performance measurement"],
      compounds: ["KPI dashboard", "financial KPI", "leading KPI"]
    },
    "lateralize": {
      origin: "ラテン語 lateralis（横の）から。latus（横・側面）。組織内で昇進でなく同じ階層の別職種・部門に水平移動すること。または機能が脳の左右どちらかに偏ること。",
      derivatives: ["lateral move", "lateralization"],
      family: ["later-", "side"],
      compounds: ["lateral career move", "cerebral lateralization"]
    },
    "lifecycle": {
      origin: "英語 life（生命・生涯）＋cycle（周期・循環）。生物の生涯の各段階から転じて、製品・プロジェクト・技術・組織の誕生から終焉までの各フェーズ。",
      derivatives: ["product lifecycle", "life cycle assessment"],
      family: ["life stages"],
      compounds: ["product lifecycle", "project lifecycle", "lifecycle management"]
    },
    "metrics": {
      origin: "ギリシャ語 metron（測定・尺度）から。業績・品質・効率などを定量化する測定値の総称。ソフトウェア工学・マーケティング・経営で広く使われる現代的用語。",
      derivatives: ["metric", "key metric"],
      family: ["metr-", "measure"],
      compounds: ["business metrics", "software metrics", "vanity metrics"]
    },
    "reengineering": {
      origin: "英語 re-（再び）＋engineering（設計・工学）。ハマー＆チャンピーが1993年に提唱した「BPR」。業務プロセスを既存の延長線でなく白紙から根本的に再設計する経営手法。",
      derivatives: ["business process reengineering", "BPR"],
      family: ["process redesign"],
      compounds: ["business process reengineering", "organizational reengineering"]
    },
    "risk-averse": {
      origin: "英語 risk（リスク）＋averse（嫌いな）。ラテン語 aversus（背を向けた）から。経済学・投資で不確実な選択肢より確実な選択肢を好む傾向。対義語は risk-seeking。",
      derivatives: ["risk aversion", "risk appetite"],
      family: ["risk attitudes"],
      compounds: ["risk-averse investor", "risk-averse strategy"]
    },
    "silos": {
      origin: "スペイン語 silo（穀物貯蔵庫）から。穀物を隔離保存する塔状の容器が語源。組織内で部門間の情報共有・協力がなく孤立・縦割り化した状態の比喩。",
      derivatives: ["silo mentality", "information silo"],
      family: ["organizational barriers"],
      compounds: ["organizational silos", "data silos", "breaking down silos"]
    },
    "turnaround": {
      origin: "英語 turn（方向転換する）＋around（反転する）。経営文脈では業績不振企業を黒字化・健全化すること。または空港・病院での処理時間（ターンアラウンドタイム）を指す。",
      derivatives: ["turnaround time", "business turnaround"],
      family: ["reversal terms"],
      compounds: ["business turnaround", "turnaround time", "turnaround strategy"]
    },
    "unicorn": {
      origin: "英語 unicorn（一角獣）から。Aileen Leeが2013年に命名。評価額10億ドル以上の未上場スタートアップを、空想上の生き物のように希少な存在として表現した造語。",
      derivatives: ["decacorn", "hectocorn"],
      family: ["startup valuations"],
      compounds: ["unicorn startup", "tech unicorn", "unicorn valuation"]
    },
    "utilization": {
      origin: "ラテン語 utilis（有用な）から。utilize（使用する）＋-ation。資源・設備・人材・時間が実際にどの程度使用されているかを示す割合。病院・製造・IT管理で重要。",
      derivatives: ["utilize", "utilization rate"],
      family: ["util-", "useful"],
      compounds: ["resource utilization", "capacity utilization", "bed utilization"]
    },
    "viability": {
      origin: "ラテン語 vita（命・生命）から。viable（生存可能な・実現可能な）＋-ity。事業・計画・生物が機能し続け存続できる能力または状態。MVP（最小実行可能製品）の「V」も。",
      derivatives: ["viable", "non-viable"],
      family: ["vit-", "life"],
      compounds: ["business viability", "financial viability", "economic viability"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch Y (Society/Culture + Business mgmt: class-action-viability, 40 words)');
