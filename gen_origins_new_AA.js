const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "locus": {
      origin: "ラテン語 locus（場所・位置）から。心理学の「locus of control」（統制の所在）はJulian Rotterが1954年に提唱。自分の行動の結果が自分（内的）か外部（外的）によって制御されているかの認知。",
      derivatives: ["locus of control", "internal locus"],
      family: ["loc-", "place"],
      compounds: ["locus of control", "internal locus", "external locus"]
    },
    "masochism": {
      origin: "オーストリアの作家 Leopold von Sacher-Masoch（1836〜1895）の名から。自作でみずから苦痛・屈辱を求める関係を描いた。苦痛・服従に快感を見出す傾向。フロイトが心理学に導入。",
      derivatives: ["masochistic", "sadism"],
      family: ["pain-pleasure"],
      compounds: ["sexual masochism", "moral masochism", "sadomasochism"]
    },
    "narcissistic": {
      origin: "ギリシャ神話の Narcissus（ナルキッソス）から。水面に映る自分の姿に恋し枯れ死んだ美少年。自己への過剰な愛着・誇大性・共感の欠如を特徴とする人格特性の形容詞。",
      derivatives: ["narcissism", "narcissist"],
      family: ["narciss-", "self-love"],
      compounds: ["narcissistic personality disorder", "narcissistic abuse", "covert narcissism"]
    },
    "numbing": {
      origin: "英語 numb（しびれた・感覚のない）から。古英語 niman（捕らえる）に由来する「奪われた」の意。心理的・感情的な苦痛から自分を守るために感情や感覚を切り離す状態。",
      derivatives: ["emotional numbing", "dissociation"],
      family: ["numb-", "frozen"],
      compounds: ["emotional numbing", "trauma numbing", "numbing behavior"]
    },
    "obsessive": {
      origin: "ラテン語 obsidere（包囲する）から。ob-（〜の前で）＋sedere（座る）。obsessus（包囲された）。特定の考えや衝動が繰り返し頭を占拠して離れない状態を形容する語。",
      derivatives: ["obsession", "OCD"],
      family: ["ob-", "sess-"],
      compounds: ["obsessive thought", "obsessive-compulsive", "obsessive love"]
    },
    "passivity": {
      origin: "ラテン語 passivus（受動的な）から。pati（苦しむ・受け入れる）。行動を起こさず状況や他者に従う傾向・状態。心理療法では学習性無力感（learned helplessness）と関連。",
      derivatives: ["passive", "learned helplessness"],
      family: ["pass-", "suffer"],
      compounds: ["passive aggression", "learned passivity", "social passivity"]
    },
    "perseveration": {
      origin: "ラテン語 perseverare（やり続ける）から。per-（通じて）＋severus（厳しい）。刺激がなくなった後も以前の反応・行動・思考を自動的に繰り返し続ける状態。脳損傷・統合失調症・ASDと関連。",
      derivatives: ["perseverate", "perseverative error"],
      family: ["persever-", "persist"],
      compounds: ["cognitive perseveration", "verbal perseveration"]
    },
    "PTSD": {
      origin: "Post-Traumatic Stress Disorder（心的外傷後ストレス障害）の略。1980年にDSMに採用。生命を脅かす体験後にフラッシュバック・悪夢・過覚醒・回避が持続する障害。",
      derivatives: ["complex PTSD", "trauma"],
      family: ["trauma disorders"],
      compounds: ["PTSD symptoms", "complex PTSD", "PTSD treatment"]
    },
    "rumination": {
      origin: "ラテン語 ruminare（反芻する）から。rumen（第一胃）。反芻動物が食物を繰り返しかみ直すことから、同じネガティブな考えを繰り返し反芻する認知スタイル。うつ・不安の維持要因。",
      derivatives: ["ruminative thinking", "brooding"],
      family: ["rumin-", "chew"],
      compounds: ["depressive rumination", "rumination disorder", "rumination cycle"]
    },
    "sadism": {
      origin: "フランスの作家・貴族 Marquis de Sade（1740〜1814）の名から。作品で支配・苦痛・屈辱の性的描写を著した。他者への苦痛・支配によって快感を得る傾向。",
      derivatives: ["sadistic", "masochism"],
      family: ["pain-pleasure"],
      compounds: ["sexual sadism", "sadistic personality", "sadomasochism"]
    },
    "schizoid": {
      origin: "ギリシャ語 skhizein（分裂する）＋-oid（〜のような）。精神分裂（統合失調症）に似た特性を持つ人格スタイル。社会的孤立・感情の平坦化・孤独の好みを特徴とする。",
      derivatives: ["schizoid personality", "schizotypal"],
      family: ["schiz-", "split"],
      compounds: ["schizoid personality disorder", "schizoid traits"]
    },
    "self-harm": {
      origin: "英語 self（自分）＋harm（傷・損害）。心理的な苦痛・感情の麻痺・自己処罰の感情などを緩和しようとして意図的に自分の身体を傷つける行動。切傷・火傷・叩打などが含まれる。",
      derivatives: ["self-injury", "non-suicidal self-injury"],
      family: ["self-destructive"],
      compounds: ["self-harm behavior", "self-harm prevention", "non-suicidal self-harm"]
    },
    "self-pity": {
      origin: "英語 self（自分）＋pity（哀れみ・同情）。自分の不幸・苦境に過剰に注目し、他者から同情を求めたり変化のための行動を避けたりする感情・認知パターン。",
      derivatives: ["self-pitying", "victimhood"],
      family: ["self-focused emotion"],
      compounds: ["excessive self-pity", "self-pity trap"]
    },
    "self-sabotage": {
      origin: "英語 self（自分）＋sabotage（妨害・破壊工作）。フランス語 sabot（木靴）から機械を壊す行為が語源。意識的または無意識に自分の目標・関係・健康を妨げる思考・行動パターン。",
      derivatives: ["self-defeating behavior", "self-undermining"],
      family: ["self-destructive patterns"],
      compounds: ["unconscious self-sabotage", "self-sabotage cycle"]
    },
    "shame": {
      origin: "古英語 scamu（恥・恥辱）から。プロト・ゲルマン語 skamo（恥）。行為（guilt）でなく「自己全体」が劣っている・欠陥がある・恥ずべき存在だという痛烈な自己評価感情。",
      derivatives: ["ashamed", "shame-based"],
      family: ["scam-", "cover"],
      compounds: ["toxic shame", "shame spiral", "shame-based identity"]
    },
    "social-anxiety": {
      origin: "英語 social（社会的）＋anxiety（不安）。社会的な場面（スピーチ・会合・評価される状況）で他者から否定的に評価される恐怖から生じる強い不安。社交不安障害（SAD）の主症状。",
      derivatives: ["social phobia", "social anxiety disorder"],
      family: ["anxiety disorders"],
      compounds: ["social anxiety disorder", "performance anxiety", "social anxiety treatment"]
    },
    "somatization": {
      origin: "ギリシャ語 soma（体）＋-ization（変換の過程）。心理的・感情的なストレスや葛藤が身体症状（頭痛・腹痛・疲労感）として現れるプロセス。身体化障害（somatic symptom disorder）。",
      derivatives: ["somatize", "psychosomatic"],
      family: ["soma-", "body"],
      compounds: ["somatization disorder", "functional somatization"]
    },
    "splitting": {
      origin: "英語 split（分ける・切り裂く）から。クライン・カーンバーグが定式化した精神分析の防衛機制。人・物事を「全善」または「全悪」のどちらかとして経験する二項対立的思考。BPDの中核特徴。",
      derivatives: ["splitting defense", "black-and-white thinking"],
      family: ["defense mechanisms"],
      compounds: ["idealization splitting", "black-and-white splitting", "borderline splitting"]
    },
    "trichotillomania": {
      origin: "ギリシャ語 thrix（毛・髪）＋tillein（引っ張る）＋mania（狂気的衝動）。頭髪・眉毛・睫毛などを繰り返し抜いてしまう衝動制御障害。DSM-5では強迫関連障害に分類される。",
      derivatives: ["hair-pulling disorder", "body-focused repetitive"],
      family: ["trich-", "till-", "mania"],
      compounds: ["trichotillomania disorder", "hair pulling trichotillomania"]
    },
    "worthlessness": {
      origin: "英語 worth（価値）＋-less（欠如）＋-ness（名詞化）。自分には価値がない・取るに足らないという強い信念。うつ病の診断基準の一つ（DSM-5）で、認知療法の主要な介入対象となる。",
      derivatives: ["worthless", "low self-worth"],
      family: ["self-evaluation"],
      compounds: ["feelings of worthlessness", "chronic worthlessness"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch AA (Psychology part 2: locus-worthlessness, 20 words)');
