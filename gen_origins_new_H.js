/**
 * gen_origins_new_H.js — Business/Finance part 2 (16) + Legal (8) from data-mixed-53
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "macroeconomic": {
      origin: "ギリシャ語 makros（大きい・長い）＋oikonomia（家計の管理）から。oikos（家・世帯）＋nomos（法則・管理）。経済全体を大局的に分析する視点で、GDP・インフレ・失業など集計的変数を扱う経済学の一分野。",
      derivatives: [
        { word: "macroeconomics", desc: "マクロ経済学" },
        { word: "macroeconomist", desc: "マクロ経済学者" }
      ],
      family: [
        { word: "macroscopic", desc: "肉眼で見える・大局的な" },
        { word: "economy", desc: "経済" },
        { word: "ecology", desc: "生態学（oikos と同語根）" }
      ],
      compounds: [
        { phrase: "macroeconomic policy", desc: "マクロ経済政策" },
        { phrase: "macroeconomic stability", desc: "マクロ経済の安定" }
      ]
    },
    "microeconomic": {
      origin: "ギリシャ語 mikros（小さい）＋oikonomia（家計の管理）から。個別の消費者・企業・市場の意思決定を分析する経済学の一分野。マクロ経済学とともに経済学の二大分野を構成する。",
      derivatives: [
        { word: "microeconomics", desc: "ミクロ経済学" },
        { word: "microeconomist", desc: "ミクロ経済学者" }
      ],
      family: [
        { word: "microscope", desc: "顕微鏡（mikros+skopein）" },
        { word: "microbiology", desc: "微生物学" },
        { word: "economy", desc: "経済" }
      ],
      compounds: [
        { phrase: "microeconomic theory", desc: "ミクロ経済理論" },
        { phrase: "microeconomic analysis", desc: "ミクロ経済分析" }
      ]
    },
    "patent": {
      origin: "ラテン語 patere（開いている・明らかである）の現在分詞 patens から。「公開状（letters patent）」は中世に君主が発明者に権利を公式に認めた開かれた文書。発明を公開することで一定期間の独占権を得る制度。",
      derivatives: [
        { word: "patently", desc: "明らかに・明白に（副詞）" },
        { word: "patentable", desc: "特許取得可能な" },
        { word: "patented", desc: "特許取得済みの" }
      ],
      family: [
        { word: "patent leather", desc: "エナメル革（光沢が明らか）" },
        { word: "impatient", desc: "焦った（in+patiens）" }
      ],
      compounds: [
        { phrase: "patent application", desc: "特許出願" },
        { phrase: "patent infringement", desc: "特許侵害" }
      ]
    },
    "payroll": {
      origin: "英語 pay（支払い）＋roll（巻物・名簿）から。pay はラテン語 pacare（和らげる・支払う）に由来し、roll は古フランス語 rolle（巻物）から。従業員の名前と給与を記録した巻物が原義。",
      derivatives: [
        { word: "payroll tax", desc: "給与税" },
        { word: "payroll processing", desc: "給与計算処理" }
      ],
      family: [
        { word: "pay", desc: "支払う" },
        { word: "salary", desc: "給料（sal＝塩：塩で支払われた）" },
        { word: "roll", desc: "名簿・ロール" }
      ],
      compounds: [
        { phrase: "payroll management", desc: "給与管理" },
        { phrase: "on the payroll", desc: "従業員名簿に載っている" }
      ]
    },
    "quota": {
      origin: "ラテン語 quota（どれだけの割合の）から。quotus（何番目の・どれだけの）が語根。quot（いくつ）から派生。割り当てられた生産量・輸入量・人数などの上限や配分量を指す。",
      derivatives: [
        { word: "quotas", desc: "クォータ（複数）" },
        { word: "quota system", desc: "割当制度" }
      ],
      family: [
        { word: "quote", desc: "引用する・見積もる（quotare から）" },
        { word: "quotient", desc: "商（割り算の結果）" }
      ],
      compounds: [
        { phrase: "import quota", desc: "輸入割当" },
        { phrase: "sales quota", desc: "販売目標割当" }
      ]
    },
    "reimbursement": {
      origin: "フランス語 rembourser（元通り財布に戻す）から。re-（再び）＋em（中に）＋bourse（財布）。ラテン語 bursa（皮袋）が語根。立て替えた費用を返却してもらうこと。経費精算・保険給付などで使われる。",
      derivatives: [
        { word: "reimburse", desc: "払い戻す・弁済する（動詞）" },
        { word: "reimbursable", desc: "払い戻しを受けられる" }
      ],
      family: [
        { word: "disburse", desc: "支払う" },
        { word: "purse", desc: "財布（bursa から）" },
        { word: "bourse", desc: "証券取引所（フランス語）" }
      ],
      compounds: [
        { phrase: "expense reimbursement", desc: "経費払い戻し" },
        { phrase: "travel reimbursement", desc: "交通費精算" }
      ]
    },
    "remuneration": {
      origin: "ラテン語 remunerari（返礼する・報いる）から。re-（返す）＋munus（贈り物・義務・公務）＋-ation。「労働に対して贈り物を返す」が原義。給与・報酬・手当など労働への対価の総称。",
      derivatives: [
        { word: "remunerate", desc: "報酬を支払う（動詞）" },
        { word: "remunerative", desc: "報酬の良い・割に合う" }
      ],
      family: [
        { word: "munificent", desc: "気前の良い（munus+facere）" },
        { word: "immunity", desc: "免疫・免除（im+munus）" },
        { word: "community", desc: "共同体（com+munus）" }
      ],
      compounds: [
        { phrase: "executive remuneration", desc: "役員報酬" },
        { phrase: "total remuneration", desc: "総報酬" }
      ]
    },
    "restructure": {
      origin: "英語 re-（再び・やり直す）＋structure（構造）から。structure はラテン語 structura（建設・構造）に由来し、struere（積み重ねる）が語根。企業・組織・負債の構造を抜本的に作り直すこと。",
      derivatives: [
        { word: "restructuring", desc: "リストラクチャリング・組織再編" },
        { word: "restructured", desc: "再編した" }
      ],
      family: [
        { word: "structure", desc: "構造" },
        { word: "construct", desc: "建設する（con+struere）" },
        { word: "destroy", desc: "破壊する（de+struere）" }
      ],
      compounds: [
        { phrase: "debt restructuring", desc: "債務再編" },
        { phrase: "corporate restructuring", desc: "企業再編" }
      ]
    },
    "severance": {
      origin: "古フランス語 sevrance から。ラテン語 separare（分ける）が語根。古フランス語 sevrer（引き離す）を経由。雇用関係の「切断・分離」が原義で、解雇時に支払われる退職金・補償金を指す。",
      derivatives: [
        { word: "sever", desc: "切断する・断絶する（動詞）" },
        { word: "severance pay", desc: "解雇手当・退職金" }
      ],
      family: [
        { word: "separate", desc: "分ける（separare から）" },
        { word: "several", desc: "いくつかの（separare と同語根）" }
      ],
      compounds: [
        { phrase: "severance package", desc: "退職金パッケージ" },
        { phrase: "severance agreement", desc: "雇用終了合意書" }
      ]
    },
    "shareholder": {
      origin: "英語 share（株式・分け前）＋holder（保有者）の複合語。share は古英語 scearu（切り分けたもの）に由来。株式会社の所有権を分割した「株式（share）」を持つ者を指す。17世紀の株式会社制度の発達とともに確立した語。",
      derivatives: [
        { word: "shareholder value", desc: "株主価値" },
        { word: "majority shareholder", desc: "過半数株主" }
      ],
      family: [
        { word: "stockholder", desc: "株主（米国英語）" },
        { word: "share", desc: "株式・共有する" },
        { word: "stakeholder", desc: "利害関係者（比較概念）" }
      ],
      compounds: [
        { phrase: "shareholder meeting", desc: "株主総会" },
        { phrase: "minority shareholder", desc: "少数株主" }
      ]
    },
    "valuation": {
      origin: "ラテン語 valere（価値がある・強い）から。value（価値）に名詞接尾辞 -ation が付いた形。「価値を測定すること」が原義。財産・企業・金融資産の価値を評価・査定する行為・結果を指す。",
      derivatives: [
        { word: "valuation method", desc: "評価手法" },
        { word: "overvaluation", desc: "過大評価" },
        { word: "undervaluation", desc: "過小評価" }
      ],
      family: [
        { word: "value", desc: "価値" },
        { word: "valuable", desc: "価値のある" },
        { word: "evaluate", desc: "評価する（e+valere）" }
      ],
      compounds: [
        { phrase: "market valuation", desc: "市場評価額" },
        { phrase: "business valuation", desc: "企業価値評価" }
      ]
    },
    "wholesale": {
      origin: "英語 whole（全体・すべて）＋sale（販売）の複合語。「全体をまとめて売る」が原義で、メーカーから小売業者へ大量に販売する業態を指す。形容詞・副詞として「大規模な・大量に」の意味でも使われる。",
      derivatives: [
        { word: "wholesaler", desc: "卸売業者" },
        { word: "wholesale price", desc: "卸売価格" }
      ],
      family: [
        { word: "whole", desc: "全体" },
        { word: "retail", desc: "小売（wholesale の対義語）" },
        { word: "sale", desc: "販売" }
      ],
      compounds: [
        { phrase: "wholesale market", desc: "卸売市場" },
        { phrase: "wholesale distribution", desc: "卸売流通" }
      ]
    },
    "arraign": {
      origin: "古フランス語 araisnier（法廷で訴える）から。ラテン語 ad-（〜に）＋ratio（理由・計算）に由来。「理由を述べさせる・訴状を読み上げる」が原義。刑事訴訟で被告人を法廷に召喚し、罪状を告知して答弁を求める手続き。",
      derivatives: [
        { word: "arraignment", desc: "起訴状朗読手続き" },
        { word: "arraigned", desc: "起訴された" }
      ],
      family: [
        { word: "reason", desc: "理由（ratio から）" },
        { word: "rational", desc: "合理的な" },
        { word: "arrange", desc: "整える（araisnier と同語根）" }
      ],
      compounds: [
        { phrase: "initial arraignment", desc: "最初の起訴状朗読" },
        { phrase: "arraignment hearing", desc: "起訴状朗読審問" }
      ]
    },
    "barrister": {
      origin: "英語 bar（法廷の仕切り棒・柵）から。bar は古フランス語 barre（棒・障壁）に由来。英国の法廷では傍聴人と弁護士を隔てる柵（bar）が設けられており、その内側で弁護できる資格を「bar の所属者」が意味した。",
      derivatives: [
        { word: "barrister-at-law", desc: "正式な法廷弁護士" }
      ],
      family: [
        { word: "bar", desc: "弁護士業・法曹（the Bar）" },
        { word: "solicitor", desc: "事務弁護士（英国で barrister と区別される）" },
        { word: "barrier", desc: "障壁（barre から）" }
      ],
      compounds: [
        { phrase: "Queen's Counsel barrister", desc: "女王顧問弁護士" },
        { phrase: "barrister's chambers", desc: "法廷弁護士事務所" }
      ]
    },
    "codicil": {
      origin: "ラテン語 codicillus（小さい書き板）から。codex（書き板・本・法典）の指小形。「小さなコデックス（書き板）」が原義。正式な遺言書を変更・補足するための追加文書で、遺言書の再作成なしに内容を修正できる法的文書。",
      derivatives: [
        { word: "codicils", desc: "追記（複数形）" }
      ],
      family: [
        { word: "code", desc: "法典・コード（codex から）" },
        { word: "codex", desc: "写本・法典" },
        { word: "encode", desc: "符号化する" }
      ],
      compounds: [
        { phrase: "add a codicil", desc: "遺言書に追記する" },
        { phrase: "codicil to a will", desc: "遺言書への補足条項" }
      ]
    },
    "enactment": {
      origin: "英語 en-（〜にする）＋act（行為・法律）＋-ment（名詞化）から。act はラテン語 actus（行為）に由来。「法律という行為にする」が原義。法案を審議・可決して正式な法律として成立させる立法行為、またはその法律自体を指す。",
      derivatives: [
        { word: "enact", desc: "法律を制定する（動詞）" },
        { word: "re-enactment", desc: "再演・再制定" }
      ],
      family: [
        { word: "act", desc: "法律・行為" },
        { word: "actor", desc: "俳優・行為者" },
        { word: "action", desc: "行動" }
      ],
      compounds: [
        { phrase: "legislative enactment", desc: "立法行為" },
        { phrase: "statutory enactment", desc: "成文法制定" }
      ]
    },
    "litigant": {
      origin: "ラテン語 litigare（法律問題で争う）から。lis（訴訟・争い）＋agere（行う・起こす）。「訴訟を行う者」が原義。裁判の当事者（原告・被告いずれも）を指す法律用語。",
      derivatives: [
        { word: "litigants", desc: "訴訟当事者（複数）" },
        { word: "pro se litigant", desc: "本人訴訟人（弁護士なし）" }
      ],
      family: [
        { word: "litigate", desc: "訴訟を起こす" },
        { word: "litigation", desc: "訴訟・法的紛争" },
        { word: "litigious", desc: "訴訟好きな・争いやすい" }
      ],
      compounds: [
        { phrase: "pro se litigant", desc: "本人訴訟人" },
        { phrase: "litigant in person", desc: "本人訴訟人（英国法律用語）" }
      ]
    },
    "perjure": {
      origin: "ラテン語 perjurare（偽りの誓いをする）から。per-（完全に誤って）＋jurare（誓う）。jus（法・正義）が語根。法廷や宣誓の場で故意に虚偽の証言をすること。多くの法制度で犯罪として規定される。",
      derivatives: [
        { word: "perjury", desc: "偽証罪" },
        { word: "perjurer", desc: "偽証者" }
      ],
      family: [
        { word: "jury", desc: "陪審（jurare から）" },
        { word: "adjure", desc: "厳かに命じる（ad+jurare）" },
        { word: "just", desc: "正義の（jus から）" }
      ],
      compounds: [
        { phrase: "perjury charge", desc: "偽証罪の告訴" },
        { phrase: "commit perjury", desc: "偽証する" }
      ]
    },
    "probate": {
      origin: "ラテン語 probatum（証明されたもの）から。probare（証明する・試す）の過去分詞。「証明された（遺言書）」が原義。裁判所が遺言書の真正性を確認し、遺言執行者に財産管理の権限を与える法的手続き。",
      derivatives: [
        { word: "probate court", desc: "遺言検認裁判所" },
        { word: "probate process", desc: "遺言検認手続き" }
      ],
      family: [
        { word: "prove", desc: "証明する（probare から）" },
        { word: "probe", desc: "探る・調査（probare から）" },
        { word: "probable", desc: "ありそうな" }
      ],
      compounds: [
        { phrase: "grant probate", desc: "遺言検認を認める" },
        { phrase: "probate estate", desc: "遺産" }
      ]
    },
    "recuse": {
      origin: "ラテン語 recusare（拒否する・断る）から。re-（反して）＋causa（理由・訴訟）。「理由をもって断る」が原義。裁判官・陪審員・公務員が利害関係や偏見を理由に職務の執行を辞退すること。",
      derivatives: [
        { word: "recusal", desc: "忌避・辞退（名詞）" },
        { word: "recused", desc: "忌避した" }
      ],
      family: [
        { word: "accuse", desc: "告発する（ac+causa）" },
        { word: "excuse", desc: "言い訳する（ex+causa）" },
        { word: "because", desc: "なぜなら（by+cause）" }
      ],
      compounds: [
        { phrase: "judge recusal", desc: "裁判官の忌避" },
        { phrase: "motion to recuse", desc: "忌避申立て" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch H (business/finance part 2 + legal: arraign-recuse)');
