const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "deflationary": {
      origin: "ラテン語 deflare（風を抜く）から。de-（下へ）＋flare（吹く）。哲学では概念をその最小限の機能に還元しようとする収縮主義的アプローチ。",
      derivatives: ["deflationism", "minimal theory"],
      family: ["deflat-", "reduce"],
      compounds: ["deflationary theory of truth", "deflationary realism"]
    },
    "deontic": {
      origin: "ギリシャ語 deon（義務・必要なこと）から。dein（必要である）の現在分詞。義務・許可・禁止を扱う規範的論理学の形容詞。",
      derivatives: ["deontics", "deontology"],
      family: ["deon-", "duty"],
      compounds: ["deontic logic", "deontic modality"]
    },
    "disjunctivism": {
      origin: "ラテン語 disjungere（切り離す）から。dis-（分離）＋jungere（結ぶ）。正常な知覚と幻覚は根本的に異なる（どちらか一方だ）とする認識論的立場。",
      derivatives: ["disjunction", "naive realism"],
      family: ["dis-", "junct-"],
      compounds: ["perceptual disjunctivism", "naive disjunctivism"]
    },
    "dispositionalism": {
      origin: "ラテン語 disponere（配置する）から。dis-（分けて）＋ponere（置く）。物の性質を傾向性（条件的能力）として分析する形而上学の立場。",
      derivatives: ["disposition", "categorical property"],
      family: ["dispos-", "arrange"],
      compounds: ["property dispositionalism", "modal dispositionalism"]
    },
    "finitude": {
      origin: "ラテン語 finitus（限られた）の名詞形。finis（終わり・境界）から。存在が時間的・空間的・能力的に制限されている性質。ハイデガーの存在論の核心概念。",
      derivatives: ["finite", "infinity"],
      family: ["fin-", "end"],
      compounds: ["human finitude", "finitude of dasein"]
    },
    "functionalism": {
      origin: "ラテン語 functio（実行・機能）から。fungi（行う）。心の状態はその機能的役割で定義されるとする心の哲学の立場。社会学でもデュルケーム以来重要な概念。",
      derivatives: ["functionalist", "multiple realizability"],
      family: ["funct-", "perform"],
      compounds: ["mental functionalism", "social functionalism"]
    },
    "gnosis": {
      origin: "ギリシャ語 gnosis（知識・認識）から。gignoskein（知る）。宗教的・神秘的な直接体験による知識。グノーシス主義では物質世界からの解放を与える秘儀的知識。",
      derivatives: ["gnostic", "agnostic"],
      family: ["gno-", "know"],
      compounds: ["gnostic gnosis", "gnosis movement"]
    },
    "impermanence": {
      origin: "英語 im-（否定）＋permanent（永続的な）＋-ence。ラテン語 permanere（持続する）の否定形。仏教の三法印の一つ「無常」（anicca）の英訳。",
      derivatives: ["anicca", "transience"],
      family: ["buddhist concepts"],
      compounds: ["doctrine of impermanence", "radical impermanence"]
    },
    "intentionality": {
      origin: "ラテン語 intentio（引き伸ばすこと・意図）から。intendere（向ける）。意識が常に何か「について」あるという性質。フッサールの現象学の中心概念。",
      derivatives: ["intentional", "aboutness"],
      family: ["intend-", "direct toward"],
      compounds: ["intentionality of consciousness", "brentano intentionality"]
    },
    "intersubjectivity": {
      origin: "ラテン語 inter-（間）＋subjectum（主体）＋-ivity。複数の意識的主体が共有する経験・意味・世界。フッサール・メルロ＝ポンティが探求した現象学的概念。",
      derivatives: ["intersubjective", "shared experience"],
      family: ["inter-", "subject"],
      compounds: ["intersubjective agreement", "intersubjective reality"]
    },
    "katharsis": {
      origin: "ギリシャ語 katharsis（浄化・精製）から。katharein（浄める）。アリストテレスが『詩学』で悲劇の効果として記述した情動の解放・浄化の概念。",
      derivatives: ["catharsis", "purification"],
      family: ["kathar-", "pure"],
      compounds: ["tragic catharsis", "cathartic experience"]
    },
    "kenosis": {
      origin: "ギリシャ語 kenosis（空にすること）から。kenoun（空にする）。キリスト論でキリストが神性の特権を放棄して人間になったとする神の自己空化。",
      derivatives: ["kenotic", "self-emptying"],
      family: ["keno-", "empty"],
      compounds: ["kenotic christology", "kenotic theology"]
    },
    "logos": {
      origin: "ギリシャ語 logos（言葉・理性・論理）から。legein（語る・集める）。ヘラクレイトスの宇宙的理性からプラトン・ストア哲学・ヨハネ福音書まで広く用いられた核心概念。",
      derivatives: ["logic", "dialogue", "monologue"],
      family: ["log-", "word/reason"],
      compounds: ["logos doctrine", "divine logos", "logos philosophy"]
    },
    "logicism": {
      origin: "ギリシャ語 logos（論理・理性）＋-ism。フレーゲが『算術の基礎』（1884）で提唱し、ラッセル・ホワイトヘッドが発展させた「数学は純粋論理から導出できる」という立場。",
      derivatives: ["logicist", "mathematical logic"],
      family: ["log-", "reason"],
      compounds: ["fregean logicism", "neo-logicism"]
    },
    "meaningfulness": {
      origin: "英語 meaning（意味）＋-ful（満ちた）＋-ness。人生・行為・言語が意味・目的・重要性を持つ性質。分析哲学・実存主義・宗教哲学で問われる「良い人生」の条件。",
      derivatives: ["meaningful", "meaninglessness"],
      family: ["meaning concepts"],
      compounds: ["life meaningfulness", "meaningfulness of work"]
    },
    "modality": {
      origin: "ラテン語 modus（様式・方法）から。可能性・必然性・偶然性・不可能性を扱う論理学の一分野。様相論理（modal logic）が中心的研究領域。",
      derivatives: ["modal", "modal logic"],
      family: ["mod-", "mode"],
      compounds: ["alethic modality", "deontic modality", "modal realism"]
    },
    "monad": {
      origin: "ギリシャ語 monas（単一のもの）から。monos（単一の）。ライプニッツの形而上学で提唱された分割不可能な精神的実体。物質的な部分を持たない窓のない実体。",
      derivatives: ["monadic", "monism"],
      family: ["mon-", "one"],
      compounds: ["leibnizian monad", "windowless monad"]
    },
    "negation": {
      origin: "ラテン語 negatio（否定）から。negare（否定する）。論理学では命題 P を否定して「¬P」（非P）を得る操作。弁証法では矛盾の否定から止揚が生まれる。",
      derivatives: ["negate", "double negation"],
      family: ["neg-", "deny"],
      compounds: ["logical negation", "dialectical negation", "negation as such"]
    },
    "noesis": {
      origin: "ギリシャ語 noesis（思考・純粋理性的直観）から。nous（知性）。プラトンの認識段階論（線分の比喩）で最高段階に位置する純粋理性的な知。フッサールも使用。",
      derivatives: ["noetic", "noema"],
      family: ["no-", "mind"],
      compounds: ["platonic noesis", "noesis and noema"]
    },
    "noumenon": {
      origin: "ギリシャ語 noumenon（思考されるもの）から。カントが『純粋理性批判』で導入した概念。感覚的現象（phenomenon）の背後にある「物自体」（Ding an sich）。",
      derivatives: ["noumenal", "thing-in-itself"],
      family: ["numen-", "thought"],
      compounds: ["kantian noumenon", "noumenal realm"]
    },
    "occasionalism": {
      origin: "ラテン語 occasio（機会・好機）から。デカルト派哲学者（マルブランシュら）が発展させた、神が物体と精神の相互作用の「機会」ごとに直接介在するとする立場。",
      derivatives: ["occasionalist", "causal exclusion"],
      family: ["occas-", "occasion"],
      compounds: ["malebranche occasionalism", "divine occasionalism"]
    },
    "panentheism": {
      origin: "ギリシャ語 pan（全て）＋en（中に）＋theos（神）＋-ism。1828年にフリードリッヒ・クラウゼが命名。神は世界を包摂するが世界を超えるとする神学。汎神論と有神論の中間。",
      derivatives: ["panentheist", "process theology"],
      family: ["pan-", "en-", "theo-"],
      compounds: ["process panentheism", "panentheistic theology"]
    },
    "paternalism": {
      origin: "ラテン語 pater（父）から。paternus（父の）。父親が子の利益のために決定するように、当人の自律意思に反して他者の福祉のために介入する行為・政策。",
      derivatives: ["paternalist", "anti-paternalism"],
      family: ["pater-", "father"],
      compounds: ["legal paternalism", "soft paternalism", "hard paternalism"]
    },
    "perspectivism": {
      origin: "ラテン語 perspicere（見通す）から。ニーチェが強調した哲学的立場。絶対的・客観的真理は存在せず、すべての知識は特定の視点や観点に依存するとする。",
      derivatives: ["perspectivist", "relativism"],
      family: ["perspect-", "view"],
      compounds: ["nietzschean perspectivism", "epistemological perspectivism"]
    },
    "physicalism": {
      origin: "ギリシャ語 physika（自然学）から。Rudolf Carnap らウィーン学団が用いた術語。あらゆる事実は究極的に物理的事実として記述可能であるとする形而上学的立場。",
      derivatives: ["physicalist", "token physicalism", "type physicalism"],
      family: ["phys-", "nature"],
      compounds: ["reductive physicalism", "non-reductive physicalism"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch S (Philosophy part 2: deflationary-physicalism, 25 words)');
