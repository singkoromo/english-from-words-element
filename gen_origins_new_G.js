/**
 * gen_origins_new_G.js — Business/Finance part 1 (20 words) from data-mixed-53
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "absenteeism": {
      origin: "ラテン語 absens（不在の）から。ab-（離れて）＋esse（いる）の現在分詞。absent＋-ism（主義・傾向）。19世紀に英国の土地所有者が不在地主として農地を放置する「不在地主制」を批判する文脈で生まれ、後に職場での常習的欠勤の意味に拡張。",
      derivatives: [
        { word: "absentee", desc: "欠席者・不在者" },
        { word: "absent", desc: "不在の・欠席した" }
      ],
      family: [
        { word: "absent", desc: "不在の" },
        { word: "absence", desc: "不在・欠席" },
        { word: "essence", desc: "本質（esse と同語根）" }
      ],
      compounds: [
        { phrase: "absenteeism rate", desc: "欠勤率" },
        { phrase: "chronic absenteeism", desc: "慢性的欠勤" }
      ]
    },
    "accrual": {
      origin: "ラテン語 accrescere（増加する・付け加わる）から。ad-（〜に）＋crescere（成長する）。会計では現金の受取・支払いとは別に、発生した時点で収益・費用を認識する「発生主義」の概念を指す。",
      derivatives: [
        { word: "accrue", desc: "（利子・権利が）発生する・蓄積する" },
        { word: "accrued", desc: "発生済みの" }
      ],
      family: [
        { word: "increase", desc: "増加する（in+crescere）" },
        { word: "decrease", desc: "減少する（de+crescere）" },
        { word: "concrete", desc: "コンクリート・具体的な（con+crescere）" }
      ],
      compounds: [
        { phrase: "accrual accounting", desc: "発生主義会計" },
        { phrase: "accrual basis", desc: "発生主義ベース" }
      ]
    },
    "actuarial": {
      origin: "ラテン語 actuarius（記録係・速記者）から。actus（行為・記録）に由来。「記録する人」が原義。17世紀以降、生命保険の数理的計算を行う専門家「アクチュアリー（actuary）」から派生した形容詞。",
      derivatives: [
        { word: "actuary", desc: "保険数理士・アクチュアリー" },
        { word: "actuarially", desc: "保険数理的に" }
      ],
      family: [
        { word: "act", desc: "行為・行動" },
        { word: "actual", desc: "実際の（actus から）" },
        { word: "activate", desc: "活性化する" }
      ],
      compounds: [
        { phrase: "actuarial science", desc: "保険数理学" },
        { phrase: "actuarial valuation", desc: "保険数理的評価" }
      ]
    },
    "amortize": {
      origin: "ラテン語 admortire（死に至らしめる）から。ad-（〜に）＋mors（死）。古フランス語 amortir（弱める・消す）を経由。「負債を徐々に消滅させる」が原義。長期間にわたり元本・コストを分割返済・償却する会計手法。",
      derivatives: [
        { word: "amortization", desc: "償却・分割返済" },
        { word: "amortized", desc: "償却した" }
      ],
      family: [
        { word: "mortgage", desc: "抵当（mort+gage：死の担保）" },
        { word: "mortal", desc: "死すべき（mors と同語根）" }
      ],
      compounds: [
        { phrase: "amortization schedule", desc: "償却スケジュール" },
        { phrase: "loan amortization", desc: "ローンの分割返済" }
      ]
    },
    "antitrust": {
      origin: "英語 anti-（反対する）＋trust（トラスト・独占企業）から。trust は19世紀後半に米国で大企業が株式信託（trust）を通じて独占を行った慣行に由来。1890年のシャーマン反トラスト法が制定の契機。",
      derivatives: [
        { word: "antitrust law", desc: "独占禁止法" },
        { word: "antitrust enforcement", desc: "独占禁止法の執行" }
      ],
      family: [
        { word: "trust", desc: "信頼・信託" },
        { word: "monopoly", desc: "独占" },
        { word: "cartel", desc: "カルテル（同義語）" }
      ],
      compounds: [
        { phrase: "antitrust regulation", desc: "独占禁止規制" },
        { phrase: "antitrust lawsuit", desc: "独占禁止法訴訟" }
      ]
    },
    "arrears": {
      origin: "古フランス語 arrière（後ろに・遅れて）から。ラテン語 ad retro（後ろへ）に由来。「後ろに残ったもの」が原義。債務の返済が期日より遅れている未払い残高・滞納状態を指す法律・金融用語。",
      derivatives: [
        { word: "in arrears", desc: "滞納して（慣用句）" },
        { word: "arrear", desc: "遅延（単数形・稀）" }
      ],
      family: [
        { word: "rear", desc: "後ろ・後部（arrière から）" },
        { word: "rearguard", desc: "後衛" }
      ],
      compounds: [
        { phrase: "rent arrears", desc: "家賃の滞納" },
        { phrase: "pay off arrears", desc: "滞納を清算する" }
      ]
    },
    "bailout": {
      origin: "英語 bail（桶で水をくみ出す）＋out（外に）から。bail は古フランス語 baille（桶）に由来。沈みかけた船から水をくみ出して救助する行為が転じて、危機的な企業・金融機関・国家への緊急支援を指すようになった。",
      derivatives: [
        { word: "bail out", desc: "救済する（動詞句）" },
        { word: "government bailout", desc: "政府による救済" }
      ],
      family: [
        { word: "bail", desc: "保釈金・水をくみ出す" },
        { word: "rescue", desc: "救出（類義語）" }
      ],
      compounds: [
        { phrase: "bank bailout", desc: "銀行の救済" },
        { phrase: "bailout package", desc: "救済パッケージ" }
      ]
    },
    "barter": {
      origin: "古フランス語 barater（交換する・欺く）から。語源は諸説あり、ゲルマン語またはギリシャ語 pratein（行う・取引する）とも。貨幣を使わずに財やサービスを直接交換する最古の経済取引形態。",
      derivatives: [
        { word: "bartering", desc: "物々交換すること" },
        { word: "barter economy", desc: "物々交換経済" }
      ],
      family: [
        { word: "trade", desc: "取引（類義語）" },
        { word: "exchange", desc: "交換" }
      ],
      compounds: [
        { phrase: "barter system", desc: "物々交換制度" },
        { phrase: "barter trade", desc: "バーター貿易" }
      ]
    },
    "consortium": {
      origin: "ラテン語 consortium（共有・仲間・共同）から。con-（共に）＋sors（くじ・運命・分け前）。「同じ運命を分かち合う者たち」が原義。共通の目的のために複数の組織・企業・国が結成する共同体。",
      derivatives: [
        { word: "consortia", desc: "コンソーシアム（複数形）" },
        { word: "consortial", desc: "コンソーシアムの" }
      ],
      family: [
        { word: "sort", desc: "種類・仕分け（sors から）" },
        { word: "consort", desc: "配偶者・交際する（con+sors）" },
        { word: "assort", desc: "分類する" }
      ],
      compounds: [
        { phrase: "research consortium", desc: "研究コンソーシアム" },
        { phrase: "banking consortium", desc: "銀行団" }
      ]
    },
    "debenture": {
      origin: "ラテン語 debentur（〜が負われる）から。debere（負う・借りる）の受動態三人称複数形。「〔この金額が〕負われる」と記した借入証書が原義。無担保または一般担保付きの社債・長期負債証書を指す金融用語。",
      derivatives: [
        { word: "debenture holder", desc: "社債保有者" },
        { word: "convertible debenture", desc: "転換社債" }
      ],
      family: [
        { word: "debt", desc: "負債（debere から）" },
        { word: "debit", desc: "借方・引き落とし" },
        { word: "due", desc: "支払期日の（debere から）" }
      ],
      compounds: [
        { phrase: "unsecured debenture", desc: "無担保社債" },
        { phrase: "debenture bond", desc: "社債" }
      ]
    },
    "disbursement": {
      origin: "古フランス語 déboursement（財布から出すこと）から。dis-（分けて）＋bourse（財布・証券取引所）。ラテン語 bursa（皮袋）が語根。資金を公式に支払い・払い出すことを指す会計・法律用語。",
      derivatives: [
        { word: "disburse", desc: "支払う・拠出する（動詞）" },
        { word: "disburser", desc: "支払者" }
      ],
      family: [
        { word: "bourse", desc: "証券取引所（フランス語）" },
        { word: "reimburse", desc: "払い戻す（re+imburse）" },
        { word: "purse", desc: "財布（bursa から）" }
      ],
      compounds: [
        { phrase: "loan disbursement", desc: "融資の実行" },
        { phrase: "disbursement schedule", desc: "支払いスケジュール" }
      ]
    },
    "divestiture": {
      origin: "英語 divest（脱ぐ・手放す）から。ラテン語 dis-（離れて）＋vestire（着る・衣をまとう）。「衣を脱ぐ」が原義。企業が事業部門や資産を売却・分離する戦略的行動を指す。反対語は acquisition（買収）。",
      derivatives: [
        { word: "divest", desc: "（資産・事業を）手放す" },
        { word: "divestment", desc: "投資引き揚げ・撤退" }
      ],
      family: [
        { word: "invest", desc: "投資する（in+vestire）" },
        { word: "vest", desc: "権利を与える・ベスト（vestis から）" },
        { word: "vestment", desc: "法衣・衣服" }
      ],
      compounds: [
        { phrase: "asset divestiture", desc: "資産売却" },
        { phrase: "forced divestiture", desc: "強制的な事業分離" }
      ]
    },
    "encumbrance": {
      origin: "古フランス語 encombrer（妨げる・塞ぐ）から。en-（中に）＋combre（障害・がれき）。「妨げるもの」が原義。法律では不動産や資産に課せられた抵当権・先取特権・地役権などの負担を指す。",
      derivatives: [
        { word: "encumber", desc: "負担を課す・妨げる（動詞）" },
        { word: "encumbered", desc: "負担を抱えた" },
        { word: "unencumbered", desc: "負担のない" }
      ],
      family: [
        { word: "cumber", desc: "妨げる・重荷にする（古語）" },
        { word: "lumber", desc: "がらくた（combre と同語根説）" }
      ],
      compounds: [
        { phrase: "property encumbrance", desc: "不動産の担保・負担" },
        { phrase: "free of encumbrance", desc: "担保なし" }
      ]
    },
    "endowment": {
      origin: "古英語 en-（与える）＋dow（持参金）＋-ment から。dow はアングロフランス語 douer（持参金を与える）に由来し、ラテン語 dos（持参金・贈り物）が語根。財団や大学などに永続的に提供された寄付基金を指す。",
      derivatives: [
        { word: "endow", desc: "基金を贈る・（能力を）授ける" },
        { word: "endowed", desc: "恵まれた・基金を持つ" }
      ],
      family: [
        { word: "dowry", desc: "持参金（dos から）" },
        { word: "donate", desc: "寄付する" }
      ],
      compounds: [
        { phrase: "endowment fund", desc: "寄付基金" },
        { phrase: "university endowment", desc: "大学基金" }
      ]
    },
    "goodwill": {
      origin: "古英語 gōdwilla（善意・好意）から。gōd（善い）＋willa（意志・望み）の複合語。会計用語としては19世紀以降、企業買収の際に純資産価値を超えて支払われる超過収益力（のれん）を指す無形資産として使われる。",
      derivatives: [
        { word: "goodwill impairment", desc: "のれんの減損" }
      ],
      family: [
        { word: "good", desc: "善い" },
        { word: "will", desc: "意志・〜でしょう" },
        { word: "benevolence", desc: "善意（ラテン語系の類義語）" }
      ],
      compounds: [
        { phrase: "goodwill amortization", desc: "のれん償却" },
        { phrase: "brand goodwill", desc: "ブランドののれん" }
      ]
    },
    "hedging": {
      origin: "古英語 hecg（生垣・囲い）から。hedge（生垣で囲む）の動名詞。「損失の可能性を生垣で囲んで制限する」比喩から、金融リスクを限定するデリバティブ取引を指す語に発展。14世紀から「回避する・曖昧にする」意で使われていた。",
      derivatives: [
        { word: "hedge", desc: "ヘッジする・曖昧にする" },
        { word: "hedge fund", desc: "ヘッジファンド" }
      ],
      family: [
        { word: "hedge", desc: "生垣・ヘッジ" },
        { word: "haw", desc: "サンザシの実（hedge の木の実）" }
      ],
      compounds: [
        { phrase: "currency hedging", desc: "為替ヘッジ" },
        { phrase: "risk hedging", desc: "リスクヘッジ" }
      ]
    },
    "incumbent": {
      origin: "ラテン語 incumbere（横たわる・課せられている）から。in-（上に）＋cumbere（横たわる）。「（職務が）その人の上に課せられている」が原義。現職者・現任者を指す名詞としても、「義務がある・現職の」形容詞としても使われる。",
      derivatives: [
        { word: "incumbency", desc: "在任期間・現職の状態" },
        { word: "incumbent advantage", desc: "現職者の優位性" }
      ],
      family: [
        { word: "recumbent", desc: "横たわった（re+cumbere）" },
        { word: "succumb", desc: "屈服する（sub+cumbere）" },
        { word: "incubate", desc: "抱卵する（in+cubare）" }
      ],
      compounds: [
        { phrase: "incumbent president", desc: "現職大統領" },
        { phrase: "market incumbent", desc: "市場の既存企業" }
      ]
    },
    "indemnify": {
      origin: "ラテン語 indemnis（損害のない）から。in-（否定）＋damnum（損害・損失）＋動詞化 -ify。「損害がない状態にする」が原義。保険契約や法律で、損失・損害を補償・賠償することを指す。",
      derivatives: [
        { word: "indemnification", desc: "損害補償・免責" },
        { word: "indemnity", desc: "損害補償・賠償金" },
        { word: "indemnified", desc: "補償された" }
      ],
      family: [
        { word: "damage", desc: "損害（damnum と語根対応）" },
        { word: "condemn", desc: "非難する（con+damnum）" }
      ],
      compounds: [
        { phrase: "indemnify against loss", desc: "損失を補償する" },
        { phrase: "indemnification clause", desc: "免責条項" }
      ]
    },
    "lobbying": {
      origin: "英語 lobby（ロビー）から。18〜19世紀に英米の議会のロビー（廊下・控室）で市民や利益団体の代表者が議員に働きかけた慣行に由来。「廊下で待ち伏せて働きかける」が原義。政策への組織的影響活動を指す。",
      derivatives: [
        { word: "lobby", desc: "ロビー活動をする・ロビー" },
        { word: "lobbyist", desc: "ロビイスト" }
      ],
      family: [
        { word: "lobby", desc: "ホテルのロビー・廊下" },
        { word: "loggia", desc: "ロッジア（イタリア語形）" }
      ],
      compounds: [
        { phrase: "corporate lobbying", desc: "企業のロビー活動" },
        { phrase: "lobbying disclosure", desc: "ロビー活動の開示" }
      ]
    },
    "loophole": {
      origin: "英語 loop（銃眼・小さな穴）＋hole（穴）から。中世の城壁に設けられた小さな開口部「銃眼（loophole）」が転じて、規則や法律の抜け穴・盲点を指す語になった。ミドルオランダ語 lupen（こっそり見る）が語根説もある。",
      derivatives: [
        { word: "loophole exploitation", desc: "抜け穴の悪用" }
      ],
      family: [
        { word: "loop", desc: "輪・ループ" },
        { word: "hole", desc: "穴" },
        { word: "tax loophole", desc: "租税の抜け穴" }
      ],
      compounds: [
        { phrase: "close a loophole", desc: "抜け穴をふさぐ" },
        { phrase: "legal loophole", desc: "法律の抜け穴" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch G (business/finance: absenteeism-loophole)');
