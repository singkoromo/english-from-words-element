const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "alexithymia": {
      origin: "ギリシャ語 a-（否定）＋lexis（言葉）＋thymos（感情・魂）。1973年にSifneosが命名。自分の感情を認識・区別・言語化する能力の欠如。自閉スペクトラム症との関連が研究される。",
      derivatives: ["alexithymic", "emotional blindness"],
      family: ["a-", "lex-", "thym-"],
      compounds: ["trait alexithymia", "secondary alexithymia"]
    },
    "anaclitic": {
      origin: "ギリシャ語 anaklitos（もたれかかること）から。ana-（上に）＋klinein（傾ける）。フロイトが用いた語で、自我理想への愛着でなく養育者への依存関係に基づく愛着・対象選択。",
      derivatives: ["anaclitic depression", "dependency"],
      family: ["ana-", "klin-"],
      compounds: ["anaclitic depression", "anaclitic attachment"]
    },
    "anthropophobia": {
      origin: "ギリシャ語 anthropos（人間）＋phobos（恐怖・逃亡）。他者との交流・視線・評価への過剰な恐怖。日本の「対人恐怖症」に相当する概念で文化依存的側面も指摘される。",
      derivatives: ["social phobia", "social anxiety"],
      family: ["anthrop-", "phob-"],
      compounds: ["anthropophobia disorder", "anthropophobic behavior"]
    },
    "codependency": {
      origin: "英語 co-（共に・相互）＋dependency（依存）。1979年頃にアルコール依存症の家族研究から発展した概念。他者の問題に過剰に関与し自己の感情・ニーズを犠牲にする関係パターン。",
      derivatives: ["codependent", "enabling behavior"],
      family: ["co-", "depend-"],
      compounds: ["codependent relationship", "codependency recovery"]
    },
    "compulsive": {
      origin: "ラテン語 compellere（強制する）から。com-（完全に）＋pellere（押す・突き動かす）。内部から湧き上がる抵抗しがたい衝動によって繰り返される行動。OCD（強迫症）の核心特徴。",
      derivatives: ["compulsion", "compulsive behavior"],
      family: ["compel-", "push"],
      compounds: ["compulsive behavior", "compulsive disorder", "compulsive eating"]
    },
    "defenses": {
      origin: "ラテン語 defendere（守る・防御する）から。de-（離れて）＋fendere（打つ）。フロイトが体系化した「防衛機制」の英語複数形。自我を不安・葛藤から守る無意識の心理メカニズム。",
      derivatives: ["defense mechanism", "ego defense"],
      family: ["defend-", "protect"],
      compounds: ["ego defenses", "psychological defenses", "defense mechanism"]
    },
    "depersonalization": {
      origin: "英語 de-（分離・除去）＋personalization（個人化）。自分の思考・感情・身体が「自分のもの」でない、外から観察しているようなガラス越し感。解離症状の一種。",
      derivatives: ["derealization", "dissociation"],
      family: ["de-", "person-"],
      compounds: ["depersonalization disorder", "depersonalization-derealization"]
    },
    "derealization": {
      origin: "英語 de-（否定・剥奪）＋realization（現実化・実現）。周囲の世界・人物・場所が夢のよう・霧のように非現実に感じられる状態。depersonalizationとしばしば共存する。",
      derivatives: ["depersonalization", "dissociative"],
      family: ["de-", "real-"],
      compounds: ["derealization episode", "derealization disorder"]
    },
    "disorganized": {
      origin: "英語 dis-（否定）＋organized（組織化された）。愛着理論では養育者が同時に恐怖の源であり安全の源である矛盾状況から生じる混乱した（無秩序型）愛着スタイル。",
      derivatives: ["disorganized attachment", "fearful-avoidant"],
      family: ["dis-", "organ-"],
      compounds: ["disorganized attachment", "disorganized thinking"]
    },
    "dysthymia": {
      origin: "ギリシャ語 dys-（不良・悪い）＋thymos（気分・感情）。2週間以上続く大うつ病エピソードとは異なり、2年以上持続する軽度の慢性的抑うつ気分。現在は「持続性抑うつ障害」とも呼ばれる。",
      derivatives: ["persistent depressive disorder", "chronic depression"],
      family: ["dys-", "thym-"],
      compounds: ["dysthymic disorder", "chronic dysthymia"]
    },
    "egocentrism": {
      origin: "ラテン語 ego（私・自我）＋ギリシャ語 kentron（中心）＋-ism。ピアジェが前操作期の子どもの特徴として記述した、自分の視点が唯一の視点だという思い込み。成人でも認知バイアスとして残る。",
      derivatives: ["egocentric", "theory of mind"],
      family: ["ego-", "centr-"],
      compounds: ["egocentric bias", "childhood egocentrism"]
    },
    "emotive": {
      origin: "ラテン語 emovere（動かす・感動させる）から。e-（外へ）＋movere（動く）。感情を強く引き起こす、または感情に訴える性質を持つ様子。論理的・認知的の対義語として使われることも。",
      derivatives: ["emotion", "emote"],
      family: ["e-", "mov-"],
      compounds: ["emotive language", "emotive appeal", "emotive response"]
    },
    "estrangement": {
      origin: "古フランス語 estranger（外国人扱いにする・疎外する）から。ラテン語 extraneus（外部の）。家族・社会・自己からの切り離しや疎遠化。マルクスの「疎外論」（Entfremdung）の英訳でもある。",
      derivatives: ["estrange", "alienation"],
      family: ["extran-", "strange"],
      compounds: ["family estrangement", "social estrangement", "self-estrangement"]
    },
    "existential": {
      origin: "ラテン語 existere（外に立ち現れる・存在する）から。ex-（外へ）＋sistere（立てる）。人間の存在・自由・死・意味・責任といった根本問題に関わる様子。実存主義哲学の形容詞。",
      derivatives: ["existentialism", "existential crisis"],
      family: ["ex-", "sist-"],
      compounds: ["existential crisis", "existential dread", "existential therapy"]
    },
    "folie": {
      origin: "フランス語 folie（狂気・熱狂）から。フォリー・ア・ドゥ（folie à deux：二人の狂気）は一人の妄想が密接な関係にある別の人に「感染」・共有される感応精神病の概念。",
      derivatives: ["folie à deux", "shared delusion"],
      family: ["folly", "madness"],
      compounds: ["folie à deux", "folie à famille", "induced delusion"]
    },
    "gaslighting": {
      origin: "Patrick Hamilton の戯曲・映画「Gaslight」（1938/1944）から。夫が妻をガス灯を操作して「狂っている」と思い込ませた物語。他者の現実認識を歪め自信を喪失させる心理的虐待。",
      derivatives: ["gaslight", "psychological manipulation"],
      family: ["manipulation tactics"],
      compounds: ["emotional gaslighting", "gaslighting abuse"]
    },
    "grandiosity": {
      origin: "ラテン語 grandis（大きい・重要な）から。自分の能力・重要性・権力・美しさを非現実的に誇大化した感覚または信念。自己愛性パーソナリティ障害や躁病エピソードの核心特徴。",
      derivatives: ["grandiose", "megalomania"],
      family: ["grand-", "great"],
      compounds: ["grandiose delusion", "narcissistic grandiosity"]
    },
    "grounding": {
      origin: "英語 ground（地面・基盤）から。解離・フラッシュバック・パニックのとき、5つの感覚（視・聴・嗅・味・触）を使って「今・ここ」の現実に戻るマインドフルネス的技法の総称。",
      derivatives: ["grounded", "grounding techniques"],
      family: ["ground-", "foundation"],
      compounds: ["grounding techniques", "sensory grounding", "grounding exercise"]
    },
    "guilt": {
      origin: "古英語 gylt（犯罪・罪・義務）から。自分の特定の行為が間違っていたという道徳的評価に基づく感情。羞恥心（shame）が「私はダメだ」なのに対し、「私はダメなことをした」に相当する。",
      derivatives: ["guilty", "guilt-ridden"],
      family: ["gylt-", "transgression"],
      compounds: ["survivor guilt", "guilt complex", "guilt trip"]
    },
    "idealization": {
      origin: "ギリシャ語 idea（形・概念）から。現実よりも完璧に、欠点なく対象（人・物・関係）を見る心理的防衛機制。後に幻滅（devaluation）が続く分裂（splitting）パターンの一部でもある。",
      derivatives: ["idealize", "overvaluation"],
      family: ["ide-", "form"],
      compounds: ["romantic idealization", "idealization-devaluation cycle"]
    },
    "impulsivity": {
      origin: "ラテン語 impellere（突き動かす）から。im-（〜の中に）＋pellere（押す）。結果を十分に考慮せず、内的衝動に従って素早く行動する傾向。ADHDや境界性パーソナリティ障害の特徴。",
      derivatives: ["impulsive", "impulse control"],
      family: ["impel-", "drive"],
      compounds: ["impulsivity disorder", "impulsivity scale", "impulsive behavior"]
    },
    "insecurity": {
      origin: "英語 in-（否定）＋security（安全・安定）。ラテン語 securus（心配のない）の否定形。自分の価値・能力・関係性への不安や脆弱感。アタッチメント理論では不安定型愛着の感情的基盤。",
      derivatives: ["insecure", "insecure attachment"],
      family: ["in-", "secur-"],
      compounds: ["emotional insecurity", "attachment insecurity", "insecurity issues"]
    },
    "jealousy": {
      origin: "古フランス語 jalousie（熱心さ・嫉妬）から。ラテン語 zelus（熱意）。自分が持っているものを他者に奪われる恐怖から生じる防衛的感情。羨望（envy）は持っていないものを望む感情と対比。",
      derivatives: ["jealous", "romantic jealousy"],
      family: ["zeal-", "ardor"],
      compounds: ["romantic jealousy", "jealousy trigger", "jealousy and envy"]
    },
    "limerence": {
      origin: "心理学者 Dorothy Tennov が1977年の著書で造語。特定の人物（Limerent Object）への強烈で非自発的な恋愛的没入状態。相手の好意への渇望と強迫的な思考が特徴。",
      derivatives: ["limerent", "limerent object"],
      family: ["coined psychology terms"],
      compounds: ["limerence state", "limerence vs love", "limerent attachment"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch Z (Psychology part 1: alexithymia-limerence, 24 words)');
