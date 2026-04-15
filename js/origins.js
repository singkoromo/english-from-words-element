/**
 * origins.js — 単語の成り立ち（origin）・派生語（derivatives）・語源ネットワーク（family）・複合語（compounds）
 * window.WORD_EXAMPLES の各エントリにフィールドを追加する。
 * examples.js より後にロードすること。
 */
(function () {
  var e = window.WORD_EXAMPLES = window.WORD_EXAMPLES || {};
  var data = {

    // ── ad- / at- 系 ─────────────────────────────────────────────────────
    "advocate": {
      origin: "ラテン語 advocatus（法廷に呼び寄せられた者）が語源。ad（〜に向かって）＋ vocare（呼ぶ）の組み合わせで、もともとは被告のそばに立って声を上げる人—すなわち弁護人—を指した。中世フランス語を経て英語に入り、「特定の立場を声に出して支持する人・行為」へと意味が広がった。\n\n現代では「人権を擁護する」「環境政策を推進する」など、あらゆる社会的立場の表明に使われる。",
      derivatives: [
        { word: "advocacy",   desc: "擁護活動、権利推進（名詞）" },
        { word: "advocating", desc: "擁護している（現在分詞）" },
        { word: "advocates",  desc: "擁護者たち／擁護する（三単現）" }
      ],
      family: [
        { word: "vocal",   desc: "声の、声に出す（vox/vocare 語根）" },
        { word: "invoke",  desc: "〔神・法律を〕呼び求める（in＋vocare）" },
        { word: "provoke", desc: "挑発する、引き起こす（pro＋vocare）" },
        { word: "evoke",   desc: "〔記憶・感情を〕呼び起こす（e＋vocare）" },
        { word: "revoke",  desc: "取り消す、廃止する（re＋vocare）" }
      ],
      compounds: [
        { phrase: "advocate for",     desc: "〜のために声を上げる、擁護する" },
        { phrase: "devil's advocate", desc: "あえて反論役を引き受ける人" },
        { phrase: "patient advocate", desc: "患者の権利を代弁する人" }
      ]
    },

    "attract": {
      origin: "ラテン語 attrahere（引き寄せる）が語源。ad（〜に向かって）＋ trahere（引く）から成り、磁石が鉄を引き付けるイメージが語の核心にある。もともと物理的な引力を表したが、やがて「興味・注意・魅力で人を引き寄せる」という抽象的な意味にも使われるようになった。\n\n「この町は多くの観光客を引き寄せる」「彼女は注目を集める」のように、人・感情・事象を「近づける力」を広く表現する。",
      derivatives: [
        { word: "attraction",   desc: "引力、魅力、アトラクション（名詞）" },
        { word: "attractive",   desc: "魅力的な（形容詞）" },
        { word: "attractively", desc: "魅力的に（副詞）" },
        { word: "unattractive", desc: "魅力のない（形容詞）" }
      ],
      family: [
        { word: "tractor",  desc: "トラクター（引っ張る機械）" },
        { word: "extract",  desc: "引き出す、抽出する（ex＋trahere）" },
        { word: "distract", desc: "注意をそらす（dis＋trahere）" },
        { word: "contract", desc: "契約（con＋trahere: 共に引き合う）" },
        { word: "retract",  desc: "引っ込める、撤回する（re＋trahere）" }
      ],
      compounds: [
        { phrase: "attract attention",   desc: "注目を集める" },
        { phrase: "attract investment",  desc: "投資を引き付ける" },
        { phrase: "magnetic attraction", desc: "磁気的引力、強い魅力" }
      ]
    },

    "admit": {
      origin: "ラテン語 admittere（中に入らせる）が語源。ad（〜に）＋ mittere（送る・行かせる）の組み合わせで、文字通り「門の内側へ通す」という意味だった。そこから「受け入れる」「事実として認める」「入場を許可する」といった現代の多様な意味が生まれた。\n\n「admit a mistake（間違いを認める）」「admit to hospital（入院させる）」のように、「内側へ通す」という核心イメージが具体的・抽象的の両方で生きている。",
      derivatives: [
        { word: "admission",  desc: "入場許可、自白、入学（名詞）" },
        { word: "admittance", desc: "入場権、入ること（名詞・やや格式）" },
        { word: "admittedly", desc: "確かに、認めるところでは（副詞）" }
      ],
      family: [
        { word: "transmit", desc: "送信する、伝える（trans＋mittere）" },
        { word: "submit",   desc: "提出する、服従する（sub＋mittere）" },
        { word: "commit",   desc: "委ねる、罪を犯す（com＋mittere）" },
        { word: "permit",   desc: "許可する（per＋mittere）" },
        { word: "emit",     desc: "放出する（e＋mittere）" }
      ],
      compounds: [
        { phrase: "admit to",      desc: "〜を認める、〜への入場を許可する" },
        { phrase: "freely admit",  desc: "率直に認める" },
        { phrase: "admission fee", desc: "入場料" }
      ]
    },

    // ── pro- 系 ──────────────────────────────────────────────────────────
    "propose": {
      origin: "ラテン語 proponere（前に置く・提示する）が語源。pro（前に）＋ ponere（置く）から成り、もともとは議論のテーマを「人前に置く」行為を指した。フランス語 proposer を経て英語に入り、「計画を提案する」「求婚する」といった意味を持つようになった。\n\n「propose a solution（解決策を提案する）」と「propose to someone（プロポーズする）」では文脈は全く異なるが、「自分の考えを相手の前に差し出す」という共通の核心がある。",
      derivatives: [
        { word: "proposal",    desc: "提案、企画書、プロポーズ（名詞）" },
        { word: "proposition", desc: "提言、命題（名詞・やや格式）" },
        { word: "proposed",    desc: "提案された（形容詞）" }
      ],
      family: [
        { word: "compose",  desc: "構成する、作曲する（com＋ponere）" },
        { word: "oppose",   desc: "反対する（ob＋ponere: 向かいに置く）" },
        { word: "expose",   desc: "さらす、暴露する（ex＋ponere）" },
        { word: "dispose",  desc: "処分する、配置する（dis＋ponere）" },
        { word: "impose",   desc: "課す、押し付ける（im＋ponere）" }
      ],
      compounds: [
        { phrase: "propose a toast",  desc: "乾杯の音頭をとる" },
        { phrase: "proposal writing", desc: "提案書の作成" },
        { phrase: "counter-proposal", desc: "対案、反提案" }
      ]
    },

    "promote": {
      origin: "ラテン語 promovere（前に動かす）が語源。pro（前に）＋ movere（動かす）の組み合わせで、「より上の地位や段階へ押し進める」イメージが出発点にある。\n\n昇進・宣伝・普及といった現代の意味はすべて、「何かを前へ進める力」という核心的なイメージから派生している。スポーツでは「昇格する」、ビジネスでは「販促する」と、文脈によって訳語が変わるが根本は同じ。",
      derivatives: [
        { word: "promotion",   desc: "昇進、販促、普及（名詞）" },
        { word: "promotional", desc: "宣伝用の、販促の（形容詞）" },
        { word: "promoter",    desc: "プロモーター、推進者（名詞）" }
      ],
      family: [
        { word: "move",    desc: "動く、動かす（movēre の直系）" },
        { word: "remove",  desc: "取り除く（re＋movēre）" },
        { word: "motive",  desc: "動機（movēre 語根）" },
        { word: "motion",  desc: "動き、提案（movēre 語根）" },
        { word: "emotion", desc: "感情（e＋movēre: 動き出す）" }
      ],
      compounds: [
        { phrase: "promote sales",     desc: "売上を促進する" },
        { phrase: "job promotion",     desc: "昇進、昇格" },
        { phrase: "promote awareness", desc: "意識を高める、啓発する" }
      ]
    },

    "produce": {
      origin: "ラテン語 producere（前に引き出す・育てる）が語源。pro（前に）＋ ducere（引く・導く）の組み合わせ。土地から農作物を「前へ引き出す」イメージが起源で、のちに製造・生産全般、さらには映画や演劇の「制作」へと意味が拡張した。\n\nスーパーの「produce（野菜・果物売り場）」という表現にも、「土地から引き出したもの」という原義が色濃く残っている。",
      derivatives: [
        { word: "production",   desc: "生産、製造、制作（名詞）" },
        { word: "productive",   desc: "生産性の高い、生産的な（形容詞）" },
        { word: "productivity", desc: "生産性（名詞）" },
        { word: "producer",     desc: "生産者、プロデューサー（名詞）" },
        { word: "product",      desc: "製品、産物（名詞）" }
      ],
      family: [
        { word: "reduce",    desc: "減らす（re＋ducere: 引き戻す）" },
        { word: "introduce", desc: "紹介する（intro＋ducere: 内側へ導く）" },
        { word: "conduct",   desc: "実施する、指揮する（con＋ducere）" },
        { word: "educate",   desc: "教育する（e＋ducare: 引き出す）" },
        { word: "deduce",    desc: "推論する（de＋ducere: 下へ引く）" }
      ],
      compounds: [
        { phrase: "produce results",        desc: "結果を出す、成果を生む" },
        { phrase: "mass production",        desc: "大量生産" },
        { phrase: "gross domestic product", desc: "国内総生産（GDP）" }
      ]
    },

    "protect": {
      origin: "ラテン語 protegere（前で覆う）が語源。pro（前に）＋ tegere（覆う・屋根をかける）の組み合わせで、「盾のように前面を覆って守る」というイメージが核心にある。\n\n物理的な防護から、権利・環境・個人情報の保護まで、幅広い文脈で使われるようになった。tegere（覆う）は「屋根（roof）」を意味する tectum とも同根で、「覆って内側を安全に保つ」という発想が共通している。",
      derivatives: [
        { word: "protection",   desc: "保護、防護（名詞）" },
        { word: "protective",   desc: "保護的な、防御の（形容詞）" },
        { word: "protectively", desc: "保護するように（副詞）" },
        { word: "protector",    desc: "保護者、防護装置（名詞）" },
        { word: "unprotected",  desc: "無防備な、保護されていない（形容詞）" }
      ],
      family: [
        { word: "detect",    desc: "検出する（de＋tegere: 覆いを取る）" },
        { word: "detective", desc: "探偵（覆いを取る人）" }
      ],
      compounds: [
        { phrase: "protect from",             desc: "〜から守る" },
        { phrase: "data protection",          desc: "データ保護" },
        { phrase: "environmental protection", desc: "環境保護" }
      ]
    },

    // ── sub- 系 ──────────────────────────────────────────────────────────
    "support": {
      origin: "ラテン語 supportare（下から運ぶ・持ち上げる）が語源。sub（下から）＋ portare（運ぶ）の組み合わせで、建物の土台が上の重みを「下から支える」イメージが出発点。\n\nそこから精神的・経済的・技術的に「支える」という幅広い意味へと発展した。「support a family（家族を養う）」「technical support（技術サポート）」「support a cause（主義を支持する）」と、何かを下から持ちこたえる力というコアイメージが一貫している。",
      derivatives: [
        { word: "supporter",   desc: "支持者、サポーター（名詞）" },
        { word: "supportive",  desc: "支援的な、力になる（形容詞）" },
        { word: "supportively",desc: "支援するように（副詞）" },
        { word: "unsupported", desc: "支持されていない（形容詞）" }
      ],
      family: [
        { word: "transport", desc: "輸送する（trans＋portare: 越えて運ぶ）" },
        { word: "import",    desc: "輸入する（im＋portare: 内に運ぶ）" },
        { word: "export",    desc: "輸出する（ex＋portare: 外へ運ぶ）" },
        { word: "report",    desc: "報告する（re＋portare: 持ち帰る）" },
        { word: "portable",  desc: "携帯できる（portare 語根）" }
      ],
      compounds: [
        { phrase: "financial support", desc: "経済的支援" },
        { phrase: "support group",     desc: "支援グループ、自助グループ" },
        { phrase: "in support of",     desc: "〜を支持して、〜のために" }
      ]
    },

    "submit": {
      origin: "ラテン語 submittere（下に送る・差し出す）が語源。sub（下に）＋ mittere（送る）の組み合わせで、もともとは「上位の者の下に自分を置く＝服従する」を意味した。\n\n現在は「書類・作品を提出する」という中立的な意味でよく使われるが、語根には「自分より上へ差し出す」敬意の姿勢が残っている。「submit a form（フォームを送る）」と「submit to authority（権威に服従する）」はどちらも、この「下に差し出す」感覚から来ている。",
      derivatives: [
        { word: "submission",   desc: "提出、服従、投降（名詞）" },
        { word: "submitted",    desc: "提出された（形容詞・過去分詞）" },
        { word: "submissive",   desc: "従順な、服従的な（形容詞）" },
        { word: "submissively", desc: "従順に（副詞）" }
      ],
      family: [
        { word: "admit",    desc: "認める、入場を許す（ad＋mittere）" },
        { word: "commit",   desc: "委ねる、罪を犯す（com＋mittere）" },
        { word: "transmit", desc: "送信する（trans＋mittere）" },
        { word: "permit",   desc: "許可する（per＋mittere）" },
        { word: "emit",     desc: "放出する（e＋mittere）" }
      ],
      compounds: [
        { phrase: "submit a report",   desc: "報告書を提出する" },
        { phrase: "submit to",         desc: "〜に服従する、〜に従う" },
        { phrase: "online submission", desc: "オンライン提出" }
      ]
    },

    // ── con-/com- 系 ─────────────────────────────────────────────────────
    "conduct": {
      origin: "ラテン語 conducere（共に導く）が語源。con（共に）＋ ducere（導く）の組み合わせで、人々をまとめて一方向へ導くイメージが核心にある。\n\n管弦楽の「指揮」、研究の「実施」、熱や電気の「伝導」など、「エネルギーや行動を一定方向に導く」という共通のイメージから多様な意味が生まれた。名詞としての conduct（行動・振る舞い）は「自分を特定の方向へ導くもの」というニュアンス。",
      derivatives: [
        { word: "conductor",  desc: "指揮者、車掌、導体（名詞）" },
        { word: "conduction", desc: "伝導（物理・電気）（名詞）" },
        { word: "misconduct", desc: "不品行、不正行為（名詞）" }
      ],
      family: [
        { word: "produce",   desc: "生産する（pro＋ducere: 前へ引き出す）" },
        { word: "reduce",    desc: "減らす（re＋ducere: 引き戻す）" },
        { word: "educate",   desc: "教育する（e＋ducare: 引き出す）" },
        { word: "deduce",    desc: "推論する（de＋ducere）" },
        { word: "introduce", desc: "紹介する（intro＋ducere）" }
      ],
      compounds: [
        { phrase: "conduct a survey",     desc: "調査を実施する" },
        { phrase: "code of conduct",      desc: "行動規範" },
        { phrase: "electrical conductor", desc: "電気の導体" }
      ]
    },

    "construct": {
      origin: "ラテン語 construere（積み重ねて作る）が語源。con（共に・完全に）＋ struere（積む・並べる）の組み合わせ。石やレンガを一つ一つ積み上げて建物を作るイメージが起源。\n\n現代では物理的な建設だけでなく「議論の構築」「文章の構成」など抽象的な「作り上げる」行為にも使われる。「construct a sentence（文を構成する）」「construct an argument（論を組み立てる）」はいずれも「積み上げる」という原義を反映している。",
      derivatives: [
        { word: "construction",   desc: "建設、構造、構文（名詞）" },
        { word: "constructive",   desc: "建設的な、有益な（形容詞）" },
        { word: "constructively", desc: "建設的に（副詞）" },
        { word: "constructor",    desc: "建設業者、コンストラクター（名詞）" },
        { word: "reconstruct",    desc: "再建する、再構成する（動詞）" }
      ],
      family: [
        { word: "structure",  desc: "構造、建物（struere 語根）" },
        { word: "instruct",   desc: "指示する、教える（in＋struere）" },
        { word: "destroy",    desc: "破壊する（de＋struere: 積み上げを崩す）" },
        { word: "obstruct",   desc: "妨害する（ob＋struere: 前に積む）" }
      ],
      compounds: [
        { phrase: "under construction", desc: "建設中、工事中" },
        { phrase: "construction site",  desc: "建設現場" },
        { phrase: "road construction",  desc: "道路工事" }
      ]
    },

    "commit": {
      origin: "ラテン語 committere（共に送り出す・委ねる）が語源。con（共に）＋ mittere（送る）の組み合わせで、もともとは「誰かに任務を委ねる」行為を指した。\n\nそこから「自分自身を何かに捧げる・約束する」という意味と、「罪を犯す」という意味の両方が生まれた—どちらも「不可逆的に行動を起こす」という点で共通している。プログラミングの「コミット（変更を確定する）」も、「元に戻せない行動に踏み出す」というニュアンスが活きている。",
      derivatives: [
        { word: "commitment", desc: "コミットメント、約束、献身（名詞）" },
        { word: "committed",  desc: "献身的な、真剣な（形容詞）" },
        { word: "committal",  desc: "拘置、委任（名詞・格式）" },
        { word: "committee",  desc: "委員会（名詞）" }
      ],
      family: [
        { word: "admit",    desc: "認める（ad＋mittere）" },
        { word: "submit",   desc: "提出する（sub＋mittere）" },
        { word: "transmit", desc: "送信する（trans＋mittere）" },
        { word: "permit",   desc: "許可する（per＋mittere）" },
        { word: "omit",     desc: "省く（ob＋mittere）" }
      ],
      compounds: [
        { phrase: "commit to",       desc: "〜に全力を注ぐ、〜を約束する" },
        { phrase: "commit a crime",  desc: "犯罪を犯す" },
        { phrase: "fully committed", desc: "完全に献身している" }
      ]
    },

    "conclude": {
      origin: "ラテン語 concludere（完全に閉じる）が語源。con（完全に）＋ claudere（閉じる）の組み合わせ。議論や裁判を「最後に閉じる」イメージから来ており、「結論を出す」「終わらせる」「（論理的に）導き出す」といった現代の意味へと発展した。\n\ninclude（中に閉じ込める）、exclude（外に締め出す）と同じ claudere を語根に持つ仲間で、すべて「境界を閉じる」というイメージを共有している。",
      derivatives: [
        { word: "conclusion",   desc: "結論、終わり（名詞）" },
        { word: "conclusive",   desc: "決定的な、結論的な（形容詞）" },
        { word: "conclusively", desc: "決定的に（副詞）" },
        { word: "inconclusive", desc: "決定的でない（形容詞）" }
      ],
      family: [
        { word: "include",  desc: "含む（in＋claudere: 中に閉じる）" },
        { word: "exclude",  desc: "除外する（ex＋claudere: 外に閉じ出す）" },
        { word: "close",    desc: "閉じる（claudere の直系）" },
        { word: "enclose",  desc: "囲む、同封する（en＋claudere）" }
      ],
      compounds: [
        { phrase: "in conclusion",       desc: "結論として（文頭表現）" },
        { phrase: "draw a conclusion",   desc: "結論を導き出す" },
        { phrase: "jump to conclusions", desc: "早まった結論を出す" }
      ]
    },

    // ── in-/ex- ＋ -clude 系 ─────────────────────────────────────────────
    "include": {
      origin: "ラテン語 includere（中に閉じ込める）が語源。in（中に）＋ claudere（閉じる）の組み合わせ。「柵の中に入れる」というイメージが出発点で、「仲間や集合に加える」という意味へと広がった。\n\nexclude（外に締め出す）と対をなす語で、どちらも「境界線を引く」行為を表している。「including tax（税込みで）」「include everyone（全員を含める）」など日常会話で頻繁に使われる基本動詞。",
      derivatives: [
        { word: "inclusion",     desc: "包含、包摂、インクルージョン（名詞）" },
        { word: "inclusive",     desc: "包括的な、〜を含む（形容詞）" },
        { word: "inclusively",   desc: "包括的に（副詞）" },
        { word: "inclusiveness", desc: "包括性（名詞）" }
      ],
      family: [
        { word: "exclude",   desc: "除外する（ex＋claudere）" },
        { word: "conclude",  desc: "結論を出す（con＋claudere）" },
        { word: "close",     desc: "閉じる（claudere の直系）" },
        { word: "disclose",  desc: "暴露する（dis＋claudere）" }
      ],
      compounds: [
        { phrase: "all-inclusive",    desc: "すべて込みの、オールインクルーシブ" },
        { phrase: "tax included",     desc: "税込み" },
        { phrase: "inclusive design", desc: "インクルーシブデザイン（多様な利用者を包摂する設計）" }
      ]
    },

    "exclude": {
      origin: "ラテン語 excludere（外に締め出す）が語源。ex（外に）＋ claudere（閉じる）の組み合わせ。「扉を閉めて外に出す」イメージが核心にある。\n\ninclude（中に閉じ込める）と完全に対をなす語で、「集合・グループ・考慮の外に置く」という意味を持つ。「tax excluded（税別）」「exclude from the list（リストから除外する）」のように、境界線の外側に置く行為を表す。",
      derivatives: [
        { word: "exclusion",    desc: "除外、排除（名詞）" },
        { word: "exclusive",    desc: "排他的な、高級な（形容詞）" },
        { word: "exclusively",  desc: "もっぱら、独占的に（副詞）" },
        { word: "exclusiveness",desc: "排他性（名詞）" }
      ],
      family: [
        { word: "include",  desc: "含む（in＋claudere）" },
        { word: "conclude", desc: "結論を出す（con＋claudere）" },
        { word: "close",    desc: "閉じる（claudere の直系）" },
        { word: "preclude", desc: "あらかじめ妨げる（pre＋claudere）" }
      ],
      compounds: [
        { phrase: "exclusive deal",     desc: "独占契約" },
        { phrase: "mutually exclusive", desc: "相互に排他的な" },
        { phrase: "social exclusion",   desc: "社会的排除" }
      ]
    },

    // ── trans- 系 ────────────────────────────────────────────────────────
    "translate": {
      origin: "ラテン語 translatus（向こう側へ運ばれた）が語源。trans（越えて）＋ latus（運ぶ、ferre の過去分詞形）の組み合わせで、「言葉を一つの言語から別の言語へと運び越える」という直観的なイメージが語義の根本にある。\n\n物理的な「移動」を意味した時代もあったが、現代では言語・概念の翻訳が主な意味になっている。「translate into action（行動に移す）」のように、「ある形から別の形へと変換する」という拡張的な意味も持つ。",
      derivatives: [
        { word: "translation",  desc: "翻訳、変換（名詞）" },
        { word: "translator",   desc: "翻訳者、翻訳機（名詞）" },
        { word: "translatable", desc: "翻訳できる（形容詞）" },
        { word: "mistranslate", desc: "誤訳する（動詞）" }
      ],
      family: [
        { word: "transfer",    desc: "移す、転送する（trans＋ferre）" },
        { word: "transport",   desc: "輸送する（trans＋portare）" },
        { word: "transmit",    desc: "送信する（trans＋mittere）" },
        { word: "transform",   desc: "変革する（trans＋formare）" },
        { word: "transparent", desc: "透明な（trans＋parere: 見通せる）" }
      ],
      compounds: [
        { phrase: "machine translation", desc: "機械翻訳" },
        { phrase: "translate into",      desc: "〜に翻訳する、〜に転換する" },
        { phrase: "lost in translation", desc: "翻訳で失われるニュアンス" }
      ]
    },

    "transport": {
      origin: "ラテン語 transportare（向こう側へ運ぶ）が語源。trans（越えて）＋ portare（運ぶ）の組み合わせ。川や国境を越えてモノや人を運ぶという具体的なイメージが語源で、現代でも物流・交通手段の意味が中心。\n\nただし「強い感情に運ばれる（be transported by music）」という詩的な用法にも使われる。英国英語では「公共交通機関」は public transport、米国英語では transportation が好まれる。",
      derivatives: [
        { word: "transportation", desc: "輸送、交通機関（名詞・米語）" },
        { word: "transporter",    desc: "輸送業者、輸送機（名詞）" }
      ],
      family: [
        { word: "support",  desc: "支える（sub＋portare: 下から運ぶ）" },
        { word: "import",   desc: "輸入する（im＋portare）" },
        { word: "export",   desc: "輸出する（ex＋portare）" },
        { word: "report",   desc: "報告する（re＋portare: 持ち帰る）" },
        { word: "portable", desc: "携帯用の（portare 語根）" }
      ],
      compounds: [
        { phrase: "public transport",  desc: "公共交通機関" },
        { phrase: "transport network", desc: "交通ネットワーク" },
        { phrase: "air transport",     desc: "航空輸送" }
      ]
    },

    "transmit": {
      origin: "ラテン語 transmittere（向こう側へ送る）が語源。trans（越えて）＋ mittere（送る）の組み合わせ。音声・信号・病気・情報など、「何かを隔たりを越えて別の場所や人へ届ける」すべての行為をこの一語でカバーする。\n\nmittere を語根に持つ admit、submit、commit とは「送る」のベクトルが異なる兄弟語である。現代では医療分野「感染させる（transmit a virus）」から通信分野「送信する（transmit data）」まで幅広く使われる。",
      derivatives: [
        { word: "transmission", desc: "送信、伝達、感染、トランスミッション（名詞）" },
        { word: "transmitter",  desc: "送信機、トランスミッター（名詞）" },
        { word: "retransmit",   desc: "再送信する（動詞）" }
      ],
      family: [
        { word: "admit",  desc: "認める（ad＋mittere）" },
        { word: "submit", desc: "提出する（sub＋mittere）" },
        { word: "commit", desc: "委ねる（com＋mittere）" },
        { word: "permit", desc: "許可する（per＋mittere）" },
        { word: "emit",   desc: "放出する（e＋mittere）" }
      ],
      compounds: [
        { phrase: "transmit data",        desc: "データを送信する" },
        { phrase: "sexually transmitted", desc: "性感染症の（STI の形容詞）" },
        { phrase: "live transmission",    desc: "ライブ放送、生中継" }
      ]
    },

    // ── de- 系 ───────────────────────────────────────────────────────────
    "describe": {
      origin: "ラテン語 describere（書き写す・描き出す）が語源。de（完全に・下方向へ）＋ scribere（書く）の組み合わせで、「ペンを動かして対象を紙の上に写し取る」イメージが起源。\n\nprescribe（処方する）、inscribe（刻む）、subscribe（署名する・購読する）、transcribe（書き写す）など、scribere を共有する多くの単語の仲間である。「describe a scene（場面を描写する）」「describe symptoms（症状を説明する）」と多彩に使われる。",
      derivatives: [
        { word: "description",   desc: "説明、描写（名詞）" },
        { word: "descriptive",   desc: "描写的な、説明的な（形容詞）" },
        { word: "descriptively", desc: "描写的に（副詞）" },
        { word: "indescribable", desc: "言葉では言い表せない（形容詞）" }
      ],
      family: [
        { word: "prescribe",  desc: "処方する（pre＋scribere: あらかじめ書く）" },
        { word: "subscribe",  desc: "購読する（sub＋scribere: 下に署名する）" },
        { word: "inscribe",   desc: "刻む（in＋scribere: 中に書く）" },
        { word: "transcribe", desc: "書き写す（trans＋scribere）" },
        { word: "manuscript", desc: "原稿（manu＋scriptum: 手で書かれたもの）" }
      ],
      compounds: [
        { phrase: "describe in detail",  desc: "詳しく説明する" },
        { phrase: "job description",     desc: "職務記述書" },
        { phrase: "beyond description",  desc: "言葉では言い表せないほど" }
      ]
    },

    "develop": {
      origin: "古フランス語 desveloper（包みを解く・展開する）が語源とされる。もともとは「巻かれた布や覆いをほどく」イメージで、そこから「秘められた可能性を徐々に広げる」という意味へと発展した。\n\n写真の「現像」（フィルムの潜像を引き出す）も同じ語根のイメージを色濃く残している。「develop a skill（スキルを伸ばす）」「develop a product（製品を開発する）」「develop a relationship（関係を深める）」と、あらゆる「可能性の展開」に使われる汎用動詞。",
      derivatives: [
        { word: "development",    desc: "開発、発展、展開（名詞）" },
        { word: "developer",      desc: "開発者、デベロッパー（名詞）" },
        { word: "developing",     desc: "発展途上の（形容詞）" },
        { word: "underdeveloped", desc: "未発展の、開発が遅れた（形容詞）" },
        { word: "redevelop",      desc: "再開発する（動詞）" }
      ],
      family: [
        { word: "envelope", desc: "封筒（覆いで包むもの）" }
      ],
      compounds: [
        { phrase: "software development", desc: "ソフトウェア開発" },
        { phrase: "economic development", desc: "経済発展" },
        { phrase: "developing country",   desc: "発展途上国" }
      ]
    },

    "derive": {
      origin: "ラテン語 derivare（川から水路を引く）が語源。de（離れて・下へ）＋ rivus（小川）の組み合わせで、もともとは「本流から水を引いて別の流れを作る」行為を指した。\n\nそのイメージから「源から引き出す・起源を持つ」という意味が生まれ、数学の「導関数（derivative）」にも同じ語根が使われている。「derive satisfaction from（〜から満足を得る）」「derive from Latin（ラテン語に由来する）」と、根源から引き出す行為全般を指す。",
      derivatives: [
        { word: "derivative", desc: "派生語、派生物、導関数（名詞・形容詞）" },
        { word: "derivation", desc: "語源、派生（名詞）" },
        { word: "derived",    desc: "派生した、由来する（形容詞）" }
      ],
      family: [
        { word: "river",  desc: "川（rivus と同語根）" },
        { word: "rival",  desc: "ライバル（同じ川の水を使い合う者）" },
        { word: "arrive", desc: "到着する（ad＋rivus: 川岸に達する）" }
      ],
      compounds: [
        { phrase: "derive from",          desc: "〜に由来する、〜から派生する" },
        { phrase: "derive benefit from",  desc: "〜から利益を得る" },
        { phrase: "financial derivative", desc: "金融派生商品（デリバティブ）" }
      ]
    },

    // ── re- 系 ───────────────────────────────────────────────────────────
    "reject": {
      origin: "ラテン語 reicere（投げ返す）が語源。re（後ろへ）＋ jacere（投げる）の組み合わせで、「投げかけられたものを跳ね返す」という鮮明なイメージが語の核心にある。\n\n物が「飛んでくる」→「はね返す」動作から、申請・提案・愛情などを「受け取らずに返す」という抽象的な拒絶へと意味が発展した。医学では「臓器移植の拒絶反応（organ rejection）」にも使われる—免疫が異物を「跳ね返す」というイメージがそのまま活きている。",
      derivatives: [
        { word: "rejection", desc: "拒絶、却下、不合格（名詞）" },
        { word: "rejected",  desc: "拒絶された（形容詞）" }
      ],
      family: [
        { word: "inject",     desc: "注射する（in＋jacere: 中へ投げ込む）" },
        { word: "project",    desc: "投影する、企画（pro＋jacere: 前へ投げる）" },
        { word: "eject",      desc: "射出する（e＋jacere: 外へ投げる）" },
        { word: "subject",    desc: "主題、服従させる（sub＋jacere: 下に投げる）" },
        { word: "trajectory", desc: "軌道（jacere 語根: 投げられた道筋）" }
      ],
      compounds: [
        { phrase: "face rejection",   desc: "拒絶に直面する" },
        { phrase: "rejection letter", desc: "不採用通知" },
        { phrase: "organ rejection",  desc: "臓器拒絶反応" }
      ]
    },

    // ── pre- 系 ──────────────────────────────────────────────────────────
    "prefer": {
      origin: "ラテン語 praeferre（前へ運ぶ・優先する）が語源。prae（前に）＋ ferre（運ぶ・持つ）の組み合わせで、「他のものより前に置く」という序列のイメージが語の核心にある。\n\nこの ferre（運ぶ）は、offer（差し出す）、refer（参照する）、transfer（移す）、suffer（耐える）など多くの英語動詞の語根でもある。「prefer coffee to tea（紅茶よりコーヒーが好き）」のように「A to B（B よりも A を）」という構文を取るのが特徴。",
      derivatives: [
        { word: "preference",   desc: "好み、優先、選好（名詞）" },
        { word: "preferable",   desc: "より好ましい（形容詞）" },
        { word: "preferably",   desc: "できれば（副詞）" },
        { word: "preferential", desc: "優遇的な（形容詞）" }
      ],
      family: [
        { word: "offer",    desc: "提供する（ob＋ferre: 向かいに差し出す）" },
        { word: "refer",    desc: "参照する（re＋ferre: 持ち帰る）" },
        { word: "transfer", desc: "移す（trans＋ferre）" },
        { word: "differ",   desc: "異なる（dis＋ferre）" },
        { word: "suffer",   desc: "苦しむ（sub＋ferre: 下で耐える）" }
      ],
      compounds: [
        { phrase: "personal preference", desc: "個人的な好み" },
        { phrase: "preference for",      desc: "〜への好み・選好" },
        { phrase: "in preference to",    desc: "〜よりも好んで" }
      ]
    },

    // ── 語根 cre- / gen- 系 ───────────────────────────────────────────────
    "create": {
      origin: "ラテン語 creare（育てる・生み出す・成長させる）が語源。もともと生物が子を「産み育てる」ことを意味し、そこから「何か新しいものを存在させる」という意味へと広がった。\n\nキリスト教神学では神が世界を「創造する」行為に使われ、「無から有を生み出す」という強いニュアンスが定着した。現代では芸術・技術・ビジネスなど、あらゆる「新しいものを作る」文脈で広く使われる最重要動詞のひとつ。",
      derivatives: [
        { word: "creation",   desc: "創造、作品、創世（名詞）" },
        { word: "creative",   desc: "創造的な、クリエイティブな（形容詞）" },
        { word: "creativity", desc: "創造性（名詞）" },
        { word: "creator",    desc: "創造者、クリエイター（名詞）" },
        { word: "creature",   desc: "生き物（神が創ったもの）（名詞）" }
      ],
      family: [
        { word: "procreate", desc: "子を作る（pro＋creare）" },
        { word: "recreate",  desc: "気晴らしをする、再創造する（re＋creare）" }
      ],
      compounds: [
        { phrase: "content creation",  desc: "コンテンツ制作" },
        { phrase: "create awareness",  desc: "意識を高める" },
        { phrase: "creative writing",  desc: "創作文章" }
      ]
    },

    "generate": {
      origin: "ラテン語 generare（生む・産み出す）が語源。genus（生まれ・種族・類）と同じ語根 gen を持ち、「同じ種の命を次へつなぐ」という生物学的イメージが出発点。\n\n現代では電力を「発生させる」、アイデアを「生み出す」、報告書を「自動生成する」など幅広い文脈で使われる。AI/IT 分野で頻出の「generate（生成する）」は、この語の現代的進化形と言える。",
      derivatives: [
        { word: "generation",  desc: "世代、発生、生成（名詞）" },
        { word: "generator",   desc: "発電機、生成器（名詞）" },
        { word: "generative",  desc: "生成的な（形容詞）" },
        { word: "degenerate",  desc: "退化する（de＋generare）" },
        { word: "regenerate",  desc: "再生する（re＋generare）" }
      ],
      family: [
        { word: "genre",   desc: "ジャンル（同種のグループ）" },
        { word: "general", desc: "一般的な（genus: 種全体に当てはまる）" },
        { word: "gene",    desc: "遺伝子（生命の種を担うもの）" },
        { word: "genius",  desc: "天才（生まれ持った才能）" },
        { word: "gender",  desc: "性別（genus: 生物学的種の区分）" }
      ],
      compounds: [
        { phrase: "generate revenue",   desc: "収益を生み出す" },
        { phrase: "generate electricity",desc: "発電する" },
        { phrase: "next generation",    desc: "次世代" }
      ]
    },

    // ── grad- 系 ──────────────────────────────────────────────────────────
    "graduate": {
      origin: "ラテン語 graduari（段階を踏む）が語源。gradus（段・一歩）から来ており、「一段ずつ階段を上がる」イメージが語の核心にある。\n\n大学の卒業は「すべての段階を踏み終えて上に達した」ことを意味し、温度計の目盛りを「段階的に刻む（graduate）」行為にも同じ語根が使われている。「graduate from university（大学を卒業する）」「graduate to the next level（次のレベルに進む）」と、段階的な前進全般を指す。",
      derivatives: [
        { word: "graduation",    desc: "卒業（式）（名詞）" },
        { word: "undergraduate", desc: "学部生、学部（名詞・形容詞）" },
        { word: "postgraduate",  desc: "大学院（生）（名詞・形容詞）" },
        { word: "grade",         desc: "等級、成績、学年（名詞）" }
      ],
      family: [
        { word: "progress", desc: "進歩する（pro＋gradus: 前へ踏み出す）" },
        { word: "grade",    desc: "等級、学年（gradus 直系）" },
        { word: "gradual",  desc: "徐々の（一段ずつ）" },
        { word: "degrade",  desc: "格下げする（de＋gradus: 下の段へ）" },
        { word: "upgrade",  desc: "格上げする（up＋gradus）" }
      ],
      compounds: [
        { phrase: "graduate school",     desc: "大学院" },
        { phrase: "graduate student",    desc: "大学院生" },
        { phrase: "graduation ceremony", desc: "卒業式" }
      ]
    },

    // ── movēre系 ─────────────────────────────────────────────────────────────
    "move": {
      origin: "ラテン語 movēre（動かす）が古フランス語 mouvoir を経て英語に入った動詞。「移動させる・心を動かす」両義を持つ最も基本的な動詞の一つ。政治的・感情的な文脈でも「動議を提出する」意味を持つ（I move that...）。\n\nこの語根 mov-/mot- はラテン語動詞の完了幹（motum）と現在幹（mov-）の両方が英語に別々に借用され、move（現在幹）と motion/motor（完了幹）が並存している。",
      derivatives: [
        { word: "movement", desc: "動き・運動・（社会）運動（名詞）" },
        { word: "movable",  desc: "動かせる・可動式の（形容詞）" },
        { word: "mover",    desc: "動かす人・引越し業者（名詞）" }
      ],
      family: [
        { word: "motion",      desc: "動き・動議（motum: 完了幹から）" },
        { word: "mobile",      desc: "移動式の・携帯電話（mobilis: 動きやすい）" },
        { word: "emotion",     desc: "感情（emovēre: 外に動かす）" },
        { word: "remove",      desc: "取り除く（removēre: 離して動かす）" },
        { word: "promote",     desc: "促進する（prōmovēre: 前へ動かす）" },
        { word: "motivate",    desc: "動機づける（motum: 完了幹）" }
      ],
      compounds: [
        { phrase: "move forward",  desc: "前進する・話を進める" },
        { phrase: "move on",       desc: "次へ進む・気持ちを切り替える" },
        { phrase: "make a move",   desc: "行動を起こす" }
      ]
    },

    "motion": {
      origin: "ラテン語 mōtiō（動き・動作）< movēre の完了幹 motum に由来。英語には古フランス語 motion を経て15世紀に入り、「物体の動き」から「議会の動議」まで幅広く使われる。\n\nmotion picture（映画）という用語は、静止画像が連続的に「動く」ことに由来する。put something in motion（始動させる）は現代でも慣用的に使われる表現。",
      derivatives: [
        { word: "motionless", desc: "静止した・動きのない（形容詞）" },
        { word: "motivate",   desc: "動機づける（motive から）" },
        { word: "motor",      desc: "モーター・原動力（同根）" }
      ],
      family: [
        { word: "move",       desc: "動かす（mov-: 現在幹）" },
        { word: "mobile",     desc: "移動式の（mobilis: 動きやすい）" },
        { word: "emotion",    desc: "感情（emovēre: 外に動かす）" },
        { word: "motor",      desc: "モーター・原動力（motum の派生）" },
        { word: "promote",    desc: "促進する（前へ動かす）" },
        { word: "locomotive", desc: "機関車（loco movēre: 場所を動かす）" }
      ],
      compounds: [
        { phrase: "motion picture", desc: "映画（動く絵）" },
        { phrase: "in motion",      desc: "動いている最中で" },
        { phrase: "put in motion",  desc: "始動させる・開始する" }
      ]
    },

    "mobile": {
      origin: "ラテン語 mōbilis（動きやすい・不安定な）< movēre（動かす）。中世では「流動する群衆」を指し、そこから英語 mob（暴徒）が生まれた（mōbilis が縮まって mob に）。\n\n現代英語ではスマートフォンを「モバイル」と呼ぶが、これは mobile phone の略。automobile（自動車）は auto-（自己）+ mobile（動く）で「自分で動くもの」の意。",
      derivatives: [
        { word: "mobility",    desc: "移動性・流動性（名詞）" },
        { word: "mobilize",    desc: "動員する・集結させる（動詞）" },
        { word: "immobile",    desc: "動けない・固定された（形容詞）" },
        { word: "automobile",  desc: "自動車（auto-+mobile）" }
      ],
      family: [
        { word: "move",    desc: "動かす（mov-: 現在幹）" },
        { word: "motion",  desc: "動き・動議（mōtiō: 動作）" },
        { word: "emotion", desc: "感情（外へ動かす）" },
        { word: "mob",     desc: "暴徒（mōbilis の短縮形）" },
        { word: "promote", desc: "促進する（前へ動かす）" }
      ],
      compounds: [
        { phrase: "mobile phone",    desc: "携帯電話" },
        { phrase: "mobile home",     desc: "移動住宅・トレーラーハウス" },
        { phrase: "social mobility", desc: "社会的流動性" }
      ]
    },

    "emotion": {
      origin: "ラテン語 ēmōtiō < ēmovēre（外へ動かす）< ex-（外へ）+ movēre（動かす）。もとは「移住・動揺」を指す言葉だったが、17世紀以降「心を外へ揺り動かす感情」の意味に専用化された。\n\n感情は内部に閉じ込められたものではなく、外に「動き出す」エネルギーと捉えたラテン語的世界観が語源に凝縮されている。emotional intelligence（EQ）は1990年代に心理学者ゴールマンが広めた概念。",
      derivatives: [
        { word: "emotional",   desc: "感情的な・情緒的な（形容詞）" },
        { word: "emotionally", desc: "感情的に（副詞）" },
        { word: "emotionless", desc: "感情のない（形容詞）" },
        { word: "unemotional", desc: "感情を表さない（形容詞）" }
      ],
      family: [
        { word: "move",   desc: "動かす（mov-: 感情も「動かす」）" },
        { word: "motion", desc: "動き・動議（mōtiō）" },
        { word: "mobile", desc: "移動式の（mōbilis）" },
        { word: "remove", desc: "取り除く（re+movēre）" },
        { word: "motive", desc: "動機（心を動かすもの）" }
      ],
      compounds: [
        { phrase: "emotional intelligence", desc: "感情知性・EQ" },
        { phrase: "strong emotion",         desc: "強い感情" },
        { phrase: "mix of emotions",        desc: "複雑な感情・様々な気持ち" }
      ]
    },

    "remove": {
      origin: "ラテン語 removēre（引き離す・除く）< re-（後ろへ・離して）+ movēre（動かす）。re- には「再び」の他に「離れて・反対方向へ」の意もある。英語には古フランス語 remouvoir を経て14世紀に入った。\n\n名詞 remote（遠隔の）は同根の remotus（遠ざけられた）から来ており、「離して動かされた」が転じて「遠い」になった。リモコン（remote control）の remote も同じ語根。",
      derivatives: [
        { word: "removal",     desc: "取り除くこと・除去（名詞）" },
        { word: "removable",   desc: "取り外せる・着脱可能な（形容詞）" },
        { word: "irremovable", desc: "取り外せない・不動の（形容詞）" }
      ],
      family: [
        { word: "remote",  desc: "遠い・遠隔の（remotus: 遠ざけられた）" },
        { word: "move",    desc: "動かす（mov-: 現在幹）" },
        { word: "motion",  desc: "動き（mōtiō）" },
        { word: "mobile",  desc: "移動式の（mōbilis）" },
        { word: "emotion", desc: "感情（外へ動かす）" }
      ],
      compounds: [
        { phrase: "remove from",      desc: "〜から取り除く・〜から外す" },
        { phrase: "remove obstacles", desc: "障害を取り除く" },
        { phrase: "stain remover",    desc: "しみ抜き剤" }
      ]
    },

    // ── spect系 ───────────────────────────────────────────────────────────────
    "inspect": {
      origin: "ラテン語 inspicere（中を見る・調べる）< in-（中へ）+ specere（見る）。specere は印欧語根 *spek-（見る）に由来し、英語の spy（スパイ）とも同根。英語には16世紀にラテン語から直接借用された。\n\n「正式に点検・査察する」という公的な文脈で多用される。inspector は「検査官・警部（イギリス英語）」の意味も持ち、Inspector General（監察総監）のような役職名に使われる。",
      derivatives: [
        { word: "inspection",  desc: "検査・査察（名詞）" },
        { word: "inspector",   desc: "検査官・調査官（名詞）" },
        { word: "inspectable", desc: "検査可能な（形容詞）" }
      ],
      family: [
        { word: "respect",     desc: "尊重する（re-: 振り返り見る）" },
        { word: "suspect",     desc: "疑う（sub-: 下から見る）" },
        { word: "expect",      desc: "予期する（ex-: 外を見張る）" },
        { word: "perspective", desc: "視点（per-: 通して見る）" },
        { word: "spectacle",   desc: "見世物・眼鏡（spectāre: 見る）" },
        { word: "aspect",      desc: "側面・局面（ad-: 〜を見る）" }
      ],
      compounds: [
        { phrase: "conduct an inspection", desc: "検査を実施する" },
        { phrase: "building inspection",   desc: "建物の検査" },
        { phrase: "safety inspection",     desc: "安全点検" }
      ]
    },

    "respect": {
      origin: "ラテン語 respectus（振り返り見ること・配慮）< re-（再び・後ろを）+ specere（見る）。「もう一度よく見る」→「じっくり見直すほど価値がある」→「尊重する」という意味の変化をたどった。\n\nself-respect（自尊心）、with respect to（〜に関して）のように多様な文脈で使われる。in all respects（あらゆる点で）の respect は「観点・点」という意味で、「見る視点」から来ている。",
      derivatives: [
        { word: "respectful",  desc: "礼儀正しい・敬意ある（形容詞）" },
        { word: "respectable", desc: "立派な・相当な（形容詞）" },
        { word: "disrespect",  desc: "無礼・軽視する（名詞・動詞）" },
        { word: "respective",  desc: "それぞれの（形容詞）" }
      ],
      family: [
        { word: "inspect",     desc: "点検する（in-: 中を見る）" },
        { word: "suspect",     desc: "疑う（sub-: 下から見る）" },
        { word: "expect",      desc: "予期する（ex-: 外を見張る）" },
        { word: "perspective", desc: "視点（per-: 通して見る）" },
        { word: "aspect",      desc: "側面・局面（ad-: 〜を見る）" }
      ],
      compounds: [
        { phrase: "show respect",    desc: "敬意を示す" },
        { phrase: "self-respect",    desc: "自尊心" },
        { phrase: "with respect to", desc: "〜に関して・〜について" }
      ]
    },

    "suspect": {
      origin: "ラテン語 suspicere（下から見上げる・疑いの目で見る）< sub-（下に・こっそり）+ specere（見る）。「陰から横目で見る」イメージが「疑う」に変化した。\n\n名詞・形容詞としての suspect（容疑者・怪しい）と動詞（疑う）で発音が異なる：名詞・形容詞は /ˈsʌspekt/（前強勢）、動詞は /səˈspekt/（後強勢）。この前後強勢の対立は英語動詞・名詞ペアの典型的なパターン。",
      derivatives: [
        { word: "suspicion",    desc: "疑い・容疑（名詞）" },
        { word: "suspicious",   desc: "疑わしい・不審な（形容詞）" },
        { word: "suspiciously", desc: "疑わしそうに（副詞）" }
      ],
      family: [
        { word: "inspect",     desc: "点検する（in-: 中を見る）" },
        { word: "respect",     desc: "尊重する（re-: 振り返り見る）" },
        { word: "expect",      desc: "予期する（ex-: 外を見張る）" },
        { word: "perspective", desc: "視点（per-: 通して見る）" },
        { word: "spectacle",   desc: "見世物・眼鏡（見るもの）" }
      ],
      compounds: [
        { phrase: "prime suspect",   desc: "最有力容疑者" },
        { phrase: "under suspicion", desc: "疑いをかけられている" },
        { phrase: "suspect A of B",  desc: "A が B をしたと疑う" }
      ]
    },

    "expect": {
      origin: "ラテン語 expectāre / exspectāre（外を見張る・待つ）< ex-（外へ）+ spectāre（見る・注視する）。「目を外に向けてじっと待ち構える」が原義で、「予期する・期待する」に発展した。\n\nexpectation（期待・予想）は「なるだろうと見込むこと」。pregnant woman を an expecting mother と言う（子どもを「待ち望んでいる」）のも同語源。",
      derivatives: [
        { word: "expectation",  desc: "期待・予想・見込み（名詞）" },
        { word: "expectant",    desc: "期待している・妊娠中の（形容詞）" },
        { word: "unexpected",   desc: "予期しない（形容詞）" },
        { word: "unexpectedly", desc: "思いがけなく（副詞）" }
      ],
      family: [
        { word: "inspect",     desc: "点検する（in-: 中を見る）" },
        { word: "respect",     desc: "尊重する（re-: 振り返り見る）" },
        { word: "suspect",     desc: "疑う（sub-: 下から見る）" },
        { word: "perspective", desc: "視点（per-: 通して見る）" },
        { word: "prospect",    desc: "見通し・展望（pro-: 前を見る）" }
      ],
      compounds: [
        { phrase: "beyond expectation",      desc: "期待以上に" },
        { phrase: "live up to expectations", desc: "期待に応える" },
        { phrase: "expecting a baby",        desc: "赤ちゃんを待ち望んでいる→妊娠中" }
      ]
    },

    "perspective": {
      origin: "中世ラテン語 perspectiva（光学・見通すもの）< perspicere（透かして見る）< per-（通して・完全に）+ specere（見る）。ルネサンス期の絵画技法「遠近法」を表す術語として広まり、「物の見方・視点」全般に拡張された。\n\nput something in perspective（物事を適切な観点で捉える）は現代英語の重要表現。in perspective とは「遠近法的に正しく見えている」→「バランスよく見ている」状態を指す。",
      derivatives: [
        { word: "perspectively", desc: "遠近法的に（まれ）" }
      ],
      family: [
        { word: "inspect",   desc: "点検する（in-: 中を見る）" },
        { word: "respect",   desc: "尊重する（re-: 振り返り見る）" },
        { word: "suspect",   desc: "疑う（sub-: 下から見る）" },
        { word: "expect",    desc: "予期する（ex-: 外を見張る）" },
        { word: "spectacle", desc: "見世物・眼鏡（見るもの）" },
        { word: "prospect",  desc: "見通し・展望（pro-: 前を見る）" },
        { word: "aspect",    desc: "側面・局面（ad-: 〜を見る）" }
      ],
      compounds: [
        { phrase: "put in perspective",          desc: "適切な視点で捉える" },
        { phrase: "from a different perspective", desc: "異なる視点から" },
        { phrase: "keep things in perspective",   desc: "物事を冷静に見る" }
      ]
    },

    // ── portāre系 ─────────────────────────────────────────────────────────────
    "export": {
      origin: "ラテン語 exportāre（外へ運ぶ）< ex-（外へ）+ portāre（運ぶ・担ぐ）。portāre は印欧語根 *per-（運ぶ）に由来する。英語には16世紀に貿易用語として定着した。\n\n「国内生産品を海外へ輸出する」意味で使われる一方、IT用語では「データを別形式で書き出す」意味にも転用されている。名詞・動詞で発音が変わるパターン：名詞 /ˈeksport/、動詞 /ɪkˈspɔːrt/。",
      derivatives: [
        { word: "exporter",    desc: "輸出業者・輸出国（名詞）" },
        { word: "exportable",  desc: "輸出可能な（形容詞）" },
        { word: "exportation", desc: "輸出（行為）（名詞）" }
      ],
      family: [
        { word: "import",    desc: "輸入する（in-: 中へ運ぶ）" },
        { word: "report",    desc: "報告する（re-: 持ち帰る）" },
        { word: "transport", desc: "輸送する（trans-: 超えて運ぶ）" },
        { word: "portable",  desc: "携帯できる（-able: 運べる）" },
        { word: "support",   desc: "支える（sub-: 下から担ぐ）" },
        { word: "port",      desc: "港（船が荷を運び込む場所）" }
      ],
      compounds: [
        { phrase: "export goods",    desc: "輸出品" },
        { phrase: "export market",   desc: "輸出市場" },
        { phrase: "export controls", desc: "輸出規制" }
      ]
    },

    "import": {
      origin: "ラテン語 importāre（中へ運び込む・もたらす）< in-（中へ）+ portāre（運ぶ）。転じて「意味をもたらす・重要である」という抽象的な意味も生まれ、importance（重要性）・important（重要な）が派生した。\n\n現代英語では「輸入する」と「重要性をもたらす」の二義が別単語のように使われているが、どちらも同じ importāre から来ている。IT用語では「外部データを取り込む」意味でも使われる。",
      derivatives: [
        { word: "importer",    desc: "輸入業者・輸入国（名詞）" },
        { word: "importation", desc: "輸入（行為）（名詞）" },
        { word: "important",   desc: "重要な（importāre の分詞形から）" },
        { word: "importance",  desc: "重要性（名詞）" }
      ],
      family: [
        { word: "export",    desc: "輸出する（ex-: 外へ運ぶ）" },
        { word: "report",    desc: "報告する（re-: 持ち帰る）" },
        { word: "transport", desc: "輸送する（trans-: 超えて運ぶ）" },
        { word: "portable",  desc: "携帯できる（運べる）" },
        { word: "support",   desc: "支える（下から担ぐ）" }
      ],
      compounds: [
        { phrase: "import tariff", desc: "輸入関税" },
        { phrase: "import ban",    desc: "輸入禁止" },
        { phrase: "bulk import",   desc: "大量輸入" }
      ]
    },

    "report": {
      origin: "ラテン語 reportāre（持ち帰る・返し伝える）< re-（戻って）+ portāre（運ぶ）。「情報を元の場所へ運び帰る」が原義で、「報告する・伝える」に特化した。古フランス語 reporter を経て14世紀に英語に入った。\n\nreporter（記者）は「出来事を持ち帰って伝える人」。report card（通知表）は学校から家庭へ成績を「運んで戻す」もの。report to（〜に報告する・〜の部下である）という職場表現にも使われる。",
      derivatives: [
        { word: "reporter",   desc: "記者・レポーター（名詞）" },
        { word: "reportage",  desc: "ルポルタージュ（名詞）" },
        { word: "unreported", desc: "報道されていない（形容詞）" }
      ],
      family: [
        { word: "export",    desc: "輸出する（ex-: 外へ運ぶ）" },
        { word: "import",    desc: "輸入する（in-: 中へ運ぶ）" },
        { word: "transport", desc: "輸送する（trans-: 超えて運ぶ）" },
        { word: "portable",  desc: "携帯できる（運べる）" },
        { word: "support",   desc: "支える（下から担ぐ）" }
      ],
      compounds: [
        { phrase: "annual report", desc: "年次報告書" },
        { phrase: "news report",   desc: "ニュース報道" },
        { phrase: "report card",   desc: "成績通知表" },
        { phrase: "report to",     desc: "〜に報告する・〜の部下である" }
      ]
    },

    "important": {
      origin: "ラテン語 importāre の現在分詞 importāns（意味・価値をもたらしている）が形容詞として定着した語。importāre には「持ち込む」の物理的意味に加え「意味・重要性をもたらす」抽象的意味があり、この抽象義が important に引き継がれた。\n\nimportant と import（輸入）は同根語。「重要な情報を持ち込む」→「重要な」という意味の連鎖が語源に凝縮されている。more importantly（さらに重要なことに）は副詞用法の典型表現。",
      derivatives: [
        { word: "importance",  desc: "重要性（名詞）" },
        { word: "importantly", desc: "重要なことに（副詞）" },
        { word: "unimportant", desc: "重要でない・些細な（形容詞）" }
      ],
      family: [
        { word: "import",    desc: "輸入する・重要性（同根語）" },
        { word: "export",    desc: "輸出する（ex-: 外へ運ぶ）" },
        { word: "report",    desc: "報告する（re-: 持ち帰る）" },
        { word: "transport", desc: "輸送する（trans-: 超えて運ぶ）" },
        { word: "portable",  desc: "携帯できる（運べる）" }
      ],
      compounds: [
        { phrase: "most important",      desc: "最も重要な" },
        { phrase: "of great importance", desc: "非常に重要な" },
        { phrase: "more importantly",    desc: "さらに重要なことに" }
      ]
    },

    // ── jacere / jectus系 ─────────────────────────────────────────────────────
    "project": {
      origin: "ラテン語 prōicere（前に投げる）< prō-（前へ）+ jacere（投げる）。完了分詞 prōjectus から英語に入った。「前方へ投げ出す」→「計画・案（前方へ打ち出すもの）」と「光を投射する・突き出す」の二方向に意味が広がった。\n\n名詞（計画）と動詞（突き出す・投影する）で発音アクセントが変わる：名詞 /ˈprɒdʒekt/（前強勢）、動詞 /prəˈdʒekt/（後強勢）。projectile（発射体）、projector（映写機）も同根。",
      derivatives: [
        { word: "projection",  desc: "投影・突出・予測（名詞）" },
        { word: "projector",   desc: "映写機・プロジェクター（名詞）" },
        { word: "projectile",  desc: "発射体・飛翔体（名詞）" }
      ],
      family: [
        { word: "inject",   desc: "注射する・注入する（in-: 中へ投げ込む）" },
        { word: "subject",  desc: "主題・支配下の（sub-: 下に投げる）" },
        { word: "reject",   desc: "拒絶する（re-: 投げ返す）" },
        { word: "object",   desc: "反対する・物体（ob-: 前に投げる）" },
        { word: "eject",    desc: "放出する（ex-: 外へ投げ出す）" },
        { word: "adjacent", desc: "隣接した（ad+jacere: 傍に置かれた）" }
      ],
      compounds: [
        { phrase: "research project",  desc: "研究プロジェクト" },
        { phrase: "project deadline",  desc: "プロジェクトの締め切り" },
        { phrase: "project onto",      desc: "〜に投影する・映し出す" }
      ]
    },

    "inject": {
      origin: "ラテン語 inicere（中へ投げ込む）< in-（中へ）+ jacere（投げる）。「体内に薬液を投げ込む」→「注射する」、転じて「議論に新たな要素を投げ込む」→「注入する」に拡張した。\n\ninjection moulding（射出成形）は溶融プラスチックを型に「射出する」技術。inject capital（資金を注入する）、inject enthusiasm（熱意を吹き込む）のように比喩的にも多用される。",
      derivatives: [
        { word: "injection",  desc: "注射・注入（名詞）" },
        { word: "injectable", desc: "注射可能な（形容詞）" },
        { word: "injector",   desc: "インジェクター・噴射装置（名詞）" }
      ],
      family: [
        { word: "project",  desc: "計画・投影する（pro-: 前へ投げる）" },
        { word: "subject",  desc: "主題・支配下の（sub-: 下に投げる）" },
        { word: "reject",   desc: "拒絶する（re-: 投げ返す）" },
        { word: "eject",    desc: "放出する（ex-: 外へ投げ出す）" },
        { word: "object",   desc: "反対する・物体（ob-: 前に投げる）" }
      ],
      compounds: [
        { phrase: "inject a vaccine",  desc: "ワクチンを注射する" },
        { phrase: "inject capital",    desc: "資金を注入する" },
        { phrase: "fuel injection",    desc: "燃料噴射" }
      ]
    },

    "subject": {
      origin: "ラテン語 subiectus（下に投げられた・下に置かれた）< sub-（下に）+ jacere（投げる）の完了分詞。「下に置かれたもの」→「（権力の）支配下の者」→「（学習・議論の）下に置かれる題材」→「主語（文の土台）」と多方向に意味が広がった。\n\n名詞（主題）と動詞（〜に従わせる）で発音が異なる：名詞 /ˈsʌbdʒɪkt/、動詞 /səbˈdʒekt/。subject to（〜に従う・〜を受けやすい）という前置詞的用法も重要。",
      derivatives: [
        { word: "subjective",    desc: "主観的な（形容詞）" },
        { word: "subjectively",  desc: "主観的に（副詞）" },
        { word: "subjectivity",  desc: "主観性（名詞）" }
      ],
      family: [
        { word: "project",  desc: "計画・投影する（pro-: 前へ投げる）" },
        { word: "inject",   desc: "注射する（in-: 中へ投げ込む）" },
        { word: "reject",   desc: "拒絶する（re-: 投げ返す）" },
        { word: "object",   desc: "反対する・物体（ob-: 前に投げる）" },
        { word: "eject",    desc: "放出する（ex-: 外へ投げ出す）" }
      ],
      compounds: [
        { phrase: "subject matter",   desc: "主題・題材" },
        { phrase: "subject to",       desc: "〜に従う・〜を受けやすい" },
        { phrase: "change the subject", desc: "話題を変える" }
      ]
    },

    // ── forma系 ───────────────────────────────────────────────────────────────
    "inform": {
      origin: "ラテン語 informāre（形を与える・教える）< in-（中に）+ forma（形・型）。「心の中に形を与える」→「知識の形を与える」→「教える・伝える」という意味の変化をたどった。\n\nformal（形式的）・format（書式）・reform・transform もすべて forma を語幹に持つ。information（情報）は「形を与えられたもの」、つまり「意味ある形に整えられたデータ」という本来の意味を今も保っている。",
      derivatives: [
        { word: "information",  desc: "情報・知識（名詞）" },
        { word: "informative",  desc: "有益な・情報量の多い（形容詞）" },
        { word: "informant",    desc: "情報提供者・密告者（名詞）" },
        { word: "informal",     desc: "非公式の・くだけた（in-+formal）" }
      ],
      family: [
        { word: "reform",     desc: "改革する（re-: 再び形を作る）" },
        { word: "transform",  desc: "変容させる（trans-: 形を変える）" },
        { word: "uniform",    desc: "制服・均一な（uni-: 一つの形）" },
        { word: "format",     desc: "書式・形式（forma の直系）" },
        { word: "formal",     desc: "形式的な・正式の（forma＋-al）" },
        { word: "formula",    desc: "公式・処方（forma の縮小形）" }
      ],
      compounds: [
        { phrase: "inform A of B",    desc: "A に B を知らせる" },
        { phrase: "keep informed",    desc: "情報を常に把握する" },
        { phrase: "well-informed",    desc: "情報通の・知識のある" }
      ]
    },

    "reform": {
      origin: "ラテン語 reformāre（再び形を作る）< re-（再び）+ formāre（形を作る）< forma（形）。「古い形を壊して新しい形に作り直す」が原義で、政治・社会・宗教上の「改革」に特化した語として定着した。\n\n宗教改革（the Reformation, 16世紀）はカトリック教会の「形を作り直す」試みを指す。reform school（感化院）は問題を抱えた若者の「人格を作り直す」施設を意味した。",
      derivatives: [
        { word: "reformation",  desc: "改革・（宗教）改革（名詞）" },
        { word: "reformer",     desc: "改革者（名詞）" },
        { word: "reformist",    desc: "改革主義者・改革派の（名詞・形容詞）" }
      ],
      family: [
        { word: "inform",     desc: "知らせる（in-: 中に形を与える）" },
        { word: "transform",  desc: "変容させる（trans-: 形を変える）" },
        { word: "uniform",    desc: "制服・均一な（uni-: 一つの形）" },
        { word: "format",     desc: "書式・形式（forma の直系）" },
        { word: "formal",     desc: "形式的な・正式の" }
      ],
      compounds: [
        { phrase: "economic reform",   desc: "経済改革" },
        { phrase: "health care reform", desc: "医療制度改革" },
        { phrase: "reform movement",   desc: "改革運動" }
      ]
    },

    "transform": {
      origin: "ラテン語 trānsformāre（別の形に変える）< trāns-（超えて・向こう側へ）+ formāre（形を作る）。「ある形を超えて別の形へ」が原義で、物理的変化から人格・社会の根本的変容まで幅広く使われる。\n\ntransformation は「変身・変容」の意で、数学では「変換」、演劇では「衣装チェンジ」の意味にも使われる。transformer（変圧器）は電圧の「形（レベル）を変える」装置。",
      derivatives: [
        { word: "transformation", desc: "変容・変換・変身（名詞）" },
        { word: "transformer",    desc: "変圧器・トランスフォーマー（名詞）" },
        { word: "transformative", desc: "変革をもたらす（形容詞）" }
      ],
      family: [
        { word: "inform",   desc: "知らせる（in-: 中に形を与える）" },
        { word: "reform",   desc: "改革する（re-: 再び形を作る）" },
        { word: "uniform",  desc: "制服・均一な（uni-: 一つの形）" },
        { word: "format",   desc: "書式・形式" },
        { word: "conform",  desc: "従う（con-: 共に形を合わせる）" }
      ],
      compounds: [
        { phrase: "transform into",       desc: "〜に変容する" },
        { phrase: "digital transformation", desc: "デジタル変革・DX" },
        { phrase: "transformative change", desc: "根本的な変革" }
      ]
    },

    "uniform": {
      origin: "ラテン語 ūniformis（一つの形をした）< ūni-（一つ）+ forma（形）。「すべてが同じ形・様式」が原義で、名詞としては「制服（みな同じ形の服）」、形容詞としては「均一な・一定の」を意味する。\n\nuniverse（宇宙）も uni- を含む（uni+versus: 一つに向かって）。uniform の反義語は diverse（多様な）。uniform distribution（一様分布）は統計用語としても重要。",
      derivatives: [
        { word: "uniformly",   desc: "均一に・一様に（副詞）" },
        { word: "uniformity",  desc: "均一性・画一性（名詞）" },
        { word: "non-uniform", desc: "不均一な（形容詞）" }
      ],
      family: [
        { word: "inform",    desc: "知らせる（in-: 中に形を与える）" },
        { word: "reform",    desc: "改革する（re-: 再び形を作る）" },
        { word: "transform", desc: "変容させる（trans-: 形を変える）" },
        { word: "format",    desc: "書式・形式（forma の直系）" },
        { word: "formal",    desc: "形式的な・正式の" },
        { word: "formula",   desc: "公式・処方（forma の縮小形）" }
      ],
      compounds: [
        { phrase: "school uniform",      desc: "学校の制服" },
        { phrase: "uniform standard",    desc: "統一基準" },
        { phrase: "uniform distribution", desc: "一様分布（統計）" }
      ]
    },

    // ── premere / pressus系 ───────────────────────────────────────────────────
    "express": {
      origin: "ラテン語 exprimere（外へ押し出す）< ex-（外へ）+ premere（押す）。「内にあるものを外へ押し出す」→「感情・考えを表現する」に発展した。完了分詞 expressus から「明確に押し出された」→「明示的な・急行の」意味も生まれた。\n\nexpress train（急行列車）は「特定の目的地へ直接向かう（押し出す）」イメージから。expression（表現・表情）は「外に押し出されたもの」。",
      derivatives: [
        { word: "expression",  desc: "表現・表情・式（名詞）" },
        { word: "expressive",  desc: "表現力豊かな（形容詞）" },
        { word: "expressly",   desc: "明示的に・特に（副詞）" },
        { word: "inexpressible", desc: "言い表せない（形容詞）" }
      ],
      family: [
        { word: "impress",   desc: "感銘を与える（in-: 中へ押し込む）" },
        { word: "compress",  desc: "圧縮する（com-: 共に押す）" },
        { word: "suppress",  desc: "抑圧する（sub-: 下へ押さえる）" },
        { word: "pressure",  desc: "圧力（premere の名詞形）" },
        { word: "print",     desc: "印刷する（premere の変形）" },
        { word: "press",     desc: "押す・新聞（premere の直接借用）" }
      ],
      compounds: [
        { phrase: "express oneself",  desc: "自分を表現する" },
        { phrase: "express train",    desc: "急行列車" },
        { phrase: "express delivery", desc: "速達・特急便" }
      ]
    },

    "impress": {
      origin: "ラテン語 imprimere（中へ押し込む）< in-（中へ）+ premere（押す）。「型を押し付けて刻印する」が原義で、「心に深く刻み込む」→「感銘を与える」に転じた。完了分詞 impressus から impression（印象・刻印）が派生した。\n\nimpressive（印象的な）は「心にしっかり押し込まれるような」力を持つ意。be impressed by（〜に感銘を受ける）は「心に刻印を受ける」状態を指す。",
      derivatives: [
        { word: "impression",  desc: "印象・刷り・圧印（名詞）" },
        { word: "impressive",  desc: "印象的な・感動的な（形容詞）" },
        { word: "impressively", desc: "印象的に（副詞）" },
        { word: "unimpressive", desc: "印象に残らない（形容詞）" }
      ],
      family: [
        { word: "express",   desc: "表現する（ex-: 外へ押し出す）" },
        { word: "compress",  desc: "圧縮する（com-: 共に押す）" },
        { word: "suppress",  desc: "抑圧する（sub-: 下へ押さえる）" },
        { word: "pressure",  desc: "圧力（premere の名詞形）" },
        { word: "print",     desc: "印刷する（押して刻む）" }
      ],
      compounds: [
        { phrase: "make an impression",  desc: "印象を与える" },
        { phrase: "first impression",    desc: "第一印象" },
        { phrase: "be impressed by",     desc: "〜に感銘を受ける" }
      ]
    },

    "compress": {
      origin: "ラテン語 comprimere（共に押し合わせる）< com-（共に・強意）+ premere（押す）。「両側から押してまとめる」が原義で、気体・データ・感情を「小さく押し縮める」意味全般に使われる。\n\nデータ圧縮（data compression）はファイルを「押し縮めて」小さくする。cold compress（冷湿布）は文字通り「押し当てる冷たいもの」。",
      derivatives: [
        { word: "compression",  desc: "圧縮・圧迫（名詞）" },
        { word: "compressor",   desc: "圧縮機・コンプレッサー（名詞）" },
        { word: "compressed",   desc: "圧縮された（形容詞）" }
      ],
      family: [
        { word: "express",   desc: "表現する（ex-: 外へ押し出す）" },
        { word: "impress",   desc: "感銘を与える（in-: 中へ押し込む）" },
        { word: "suppress",  desc: "抑圧する（sub-: 下へ押さえる）" },
        { word: "pressure",  desc: "圧力（premere の名詞形）" },
        { word: "depress",   desc: "落ち込ませる（de-: 下へ押す）" }
      ],
      compounds: [
        { phrase: "data compression",  desc: "データ圧縮" },
        { phrase: "cold compress",     desc: "冷湿布" },
        { phrase: "compressed air",    desc: "圧縮空気" }
      ]
    },

    "suppress": {
      origin: "ラテン語 supprimere（下へ押さえる）< sub-（下へ）+ premere（押す）。「上から押さえつけて出てこないようにする」が原義で、反乱・情報・感情を「押しつぶして表に出させない」意味で使われる。\n\nsuppression（抑圧・鎮圧）は権力による管理でも個人の心理でも使われる。suppress laughter（笑いをこらえる）は「笑いを下へ押さえつける」生き生きとした表現。",
      derivatives: [
        { word: "suppression", desc: "抑圧・鎮圧・抑制（名詞）" },
        { word: "suppressor",  desc: "抑制するもの・消音器（名詞）" },
        { word: "suppressive", desc: "抑制的な・鎮圧的な（形容詞）" }
      ],
      family: [
        { word: "express",  desc: "表現する（ex-: 外へ押し出す）" },
        { word: "impress",  desc: "感銘を与える（in-: 中へ押し込む）" },
        { word: "compress", desc: "圧縮する（com-: 共に押す）" },
        { word: "pressure", desc: "圧力（premere の名詞形）" },
        { word: "depress",  desc: "落ち込ませる・不況にする（de-: 下へ）" },
        { word: "oppress",  desc: "圧政する（ob-: 〜に対して押す）" }
      ],
      compounds: [
        { phrase: "suppress laughter",  desc: "笑いをこらえる" },
        { phrase: "suppress information", desc: "情報を隠蔽する" },
        { phrase: "immune suppression",  desc: "免疫抑制" }
      ]
    },

    // ── trahere / tractus系 ───────────────────────────────────────────────────
    "contract": {
      origin: "ラテン語 contrahere（共に引き寄せる）< con-（共に）+ trahere（引く）。「双方が引き合って一点に集める」→「契約（合意に引き合わせる行為）」と「収縮する（引き縮める）」の両義を持つ。\n\ncontract の名詞（契約）と動詞（収縮する）は発音アクセントが変わる：名詞 /ˈkɒntrækt/（前強勢）、動詞 /kənˈtrækt/（後強勢）。contractor（請負業者）は「契約で仕事を引き受ける人」。",
      derivatives: [
        { word: "contractor",   desc: "請負業者・コントラクター（名詞）" },
        { word: "contraction",  desc: "収縮・短縮形（名詞）" },
        { word: "contractual",  desc: "契約上の（形容詞）" }
      ],
      family: [
        { word: "extract",   desc: "抽出する（ex-: 外へ引き出す）" },
        { word: "attract",   desc: "引き付ける（ad-: 〜へ引く）" },
        { word: "distract",  desc: "気をそらす（dis-: 別方向へ引く）" },
        { word: "subtract",  desc: "引き算する（sub-: 下から引く）" },
        { word: "abstract",  desc: "抽象的な（abs-: 離して引く）" },
        { word: "tractor",   desc: "トラクター（trahere: 引くもの）" }
      ],
      compounds: [
        { phrase: "sign a contract",    desc: "契約を締結する" },
        { phrase: "breach of contract", desc: "契約違反" },
        { phrase: "muscle contraction", desc: "筋肉の収縮" }
      ]
    },

    "extract": {
      origin: "ラテン語 extrahere（外へ引き出す）< ex-（外へ）+ trahere（引く）。「内部にあるものを強引に外へ引き出す」が原義で、歯・成分・情報・引用文を「取り出す」全般に使われる。\n\nextract（抽出物・エキス）は名詞としても使い、vanilla extract（バニラエッセンス）は「引き出された精エキス」。extract from a book（本からの抜粋）も同じ発想。名詞と動詞でアクセントが変わる。",
      derivatives: [
        { word: "extraction",  desc: "抽出・採取・抜歯（名詞）" },
        { word: "extractor",   desc: "抽出装置・換気扇（名詞）" },
        { word: "extractable", desc: "抽出可能な（形容詞）" }
      ],
      family: [
        { word: "contract",  desc: "契約・収縮する（con-: 共に引く）" },
        { word: "attract",   desc: "引き付ける（ad-: 〜へ引く）" },
        { word: "distract",  desc: "気をそらす（dis-: 別方向へ引く）" },
        { word: "subtract",  desc: "引き算する（sub-: 下から引く）" },
        { word: "abstract",  desc: "抽象的な（abs-: 離して引く）" },
        { word: "tractor",   desc: "トラクター（trahere: 引くもの）" }
      ],
      compounds: [
        { phrase: "extract from",     desc: "〜から抽出する・〜からの抜粋" },
        { phrase: "vanilla extract",  desc: "バニラエッセンス" },
        { phrase: "tooth extraction", desc: "抜歯" }
      ]
    },

    // ── capere / ceptus系 ─────────────────────────────────────────────────────
    "receive": {
      origin: "ラテン語 recipere（再び受け取る・受け入れる）< re-（再び・返して）+ capere（取る・つかむ）。古フランス語 receivre を経て英語に入り、「与えられたものを手に受け取る」全般に使われる。\n\nreceive は passive（受動）の基本動詞。receipt（領収書）の p が発音されないのは、ラテン語 receptus に合わせて後から挿入された黙字。receiver（受信機・受け取り人）も同根。",
      derivatives: [
        { word: "receiver",   desc: "受取人・受信機・受話器（名詞）" },
        { word: "receipt",    desc: "領収書・受取（名詞）" },
        { word: "reception",  desc: "受付・歓迎・受信状況（名詞）" },
        { word: "receptive",  desc: "受け入れやすい（形容詞）" }
      ],
      family: [
        { word: "perceive",  desc: "知覚する（per-: 完全につかむ）" },
        { word: "conceive",  desc: "着想する（con-: 共につかむ）" },
        { word: "deceive",   desc: "だます（de-: 下から取る）" },
        { word: "capable",   desc: "能力のある（capere: 取れる）" },
        { word: "capture",   desc: "捕まえる（capere の直系）" },
        { word: "accept",    desc: "受け入れる（ad+capere: 〜へ取る）" }
      ],
      compounds: [
        { phrase: "receive a call",    desc: "電話を受ける" },
        { phrase: "receive treatment", desc: "治療を受ける" },
        { phrase: "on the receiving end", desc: "（批判などを）受ける立場で" }
      ]
    },

    "perceive": {
      origin: "ラテン語 percipere（完全につかみ取る）< per-（完全に・通して）+ capere（取る・つかむ）。「感覚器官を通して完全に取り込む」→「知覚する・認識する」に特化した。\n\nperception（知覚・認識）は心理学・認知科学の核心概念。how something is perceived（どう認識されるか）は評判・イメージ管理でも重要な概念で、"Perception is reality."（認識こそが現実）は広く引用される格言。",
      derivatives: [
        { word: "perception",    desc: "知覚・認識・印象（名詞）" },
        { word: "perceptive",    desc: "知覚力のある・洞察力のある（形容詞）" },
        { word: "perceptively",  desc: "鋭く・洞察力をもって（副詞）" },
        { word: "imperceptible", desc: "知覚できない・かすかな（形容詞）" }
      ],
      family: [
        { word: "receive",  desc: "受け取る（re-: 再び受け取る）" },
        { word: "conceive", desc: "着想する（con-: 共につかむ）" },
        { word: "deceive",  desc: "だます（de-: 下から取る）" },
        { word: "capable",  desc: "能力のある（capere: 取れる）" },
        { word: "capture",  desc: "捕まえる（capere の直系）" }
      ],
      compounds: [
        { phrase: "perceive as",             desc: "〜として認識する" },
        { phrase: "public perception",       desc: "世間の認識・世論" },
        { phrase: "perception is reality",   desc: "認識こそが現実（格言）" }
      ]
    },

    "conceive": {
      origin: "ラテン語 concipere（共につかみ取る・受胎する）< con-（共に・完全に）+ capere（取る・つかむ）。「心の中に完全に取り込む」→「着想する・概念化する」と「（子を）胎内に宿す」の両義を持つ。\n\nconcept（概念）・conception（着想・受胎）は同根。inconceivable（想像もできない）は「つかみ取れないほど」の意。",
      derivatives: [
        { word: "concept",        desc: "概念・アイデア（名詞）" },
        { word: "conception",     desc: "着想・構想・受胎（名詞）" },
        { word: "inconceivable",  desc: "想像もできない（形容詞）" },
        { word: "conceivable",    desc: "想像できる・あり得る（形容詞）" }
      ],
      family: [
        { word: "receive",  desc: "受け取る（re-: 再び受け取る）" },
        { word: "perceive", desc: "知覚する（per-: 完全につかむ）" },
        { word: "deceive",  desc: "だます（de-: 下から取る）" },
        { word: "capable",  desc: "能力のある（capere: 取れる）" },
        { word: "capture",  desc: "捕まえる（capere の直系）" },
        { word: "accept",   desc: "受け入れる（ad+capere）" }
      ],
      compounds: [
        { phrase: "conceive of",           desc: "〜を思い描く・着想する" },
        { phrase: "conceive a plan",       desc: "計画を立案する" },
        { phrase: "immaculately conceived", desc: "無原罪の御宿り（宗教用語）" }
      ]
    },

    // ── dicere / dictus系 ─────────────────────────────────────────────────────
    "predict": {
      origin: "ラテン語 praedicere（前もって言う）< prae-（前に）+ dicere（言う）。dicere は印欧語根 *deik-（指し示す）に由来し、indicate（指し示す）・diction（言い回し）とも同根。「起こる前に言い当てる」が原義で、科学的予測から日常的な「見当をつける」まで幅広く使われる。\n\npredictable（予測可能な）の反意語 unpredictable は「次の手が読めないほど変化が激しい」ことを強調する際によく使われる。predict the weather（天気を予測する）は気象学の基本動詞。",
      derivatives: [
        { word: "prediction",    desc: "予測・予言（名詞）" },
        { word: "predictable",   desc: "予測可能な（形容詞）" },
        { word: "unpredictable", desc: "予測不可能な（形容詞）" },
        { word: "predictably",   desc: "案の定・予測通りに（副詞）" }
      ],
      family: [
        { word: "contradict", desc: "矛盾する（contra-: 逆のことを言う）" },
        { word: "indicate",   desc: "示す（in-: 〜を指し示す）" },
        { word: "dictate",    desc: "命令する・口述する（dicere 強意形）" },
        { word: "verdict",    desc: "評決（vere+dictum: 真実の言葉）" },
        { word: "diction",    desc: "言い回し・話し方（dicere の名詞）" },
        { word: "dedicate",   desc: "捧げる・専念する（de+dicare）" }
      ],
      compounds: [
        { phrase: "predict the future",  desc: "未来を予測する" },
        { phrase: "weather prediction",  desc: "天気予報" },
        { phrase: "beyond prediction",   desc: "予測の範囲を超えて" }
      ]
    },

    "contradict": {
      origin: "ラテン語 contradicere（逆のことを言う）< contra-（反対に・逆に）+ dicere（言う）。「相手の言葉に正反対の言葉を向ける」が原義で、「矛盾する・否定する」に使われる。\n\ncontradiction in terms（言葉の矛盾）は「それ自体が自己矛盾した表現」を指す成句で、"a deafening silence"（耳をつんざく沈黙）のような矛盾語法（oxymoron）を指す場合にも使われる。self-contradiction（自己矛盾）もよく使われる。",
      derivatives: [
        { word: "contradiction",   desc: "矛盾・否定（名詞）" },
        { word: "contradictory",   desc: "矛盾する・相反する（形容詞）" },
        { word: "contradictorily", desc: "矛盾して（副詞）" }
      ],
      family: [
        { word: "predict",  desc: "予測する（prae-: 前もって言う）" },
        { word: "indicate", desc: "示す（in-: 〜を指し示す）" },
        { word: "dictate",  desc: "命令する・口述する" },
        { word: "verdict",  desc: "評決（真実の言葉）" },
        { word: "diction",  desc: "言い回し・話し方" }
      ],
      compounds: [
        { phrase: "contradict oneself",      desc: "自己矛盾する" },
        { phrase: "contradiction in terms",  desc: "言葉の矛盾・矛盾語法" },
        { phrase: "self-contradiction",      desc: "自己矛盾" }
      ]
    },

    "indicate": {
      origin: "ラテン語 indicāre（指し示す・告知する）< in-（〜に向けて）+ dicāre（指定する）< dicere（言う）の派生形。「指で方向を示して言う」が原義で、「示す・表示する・示唆する・（医療上）適応がある」全般に使われる。\n\nindicator（指標・指示器・ウインカー）は「示すもの」。indication（兆候・証拠）は医療でも "There is no indication of infection."（感染の兆候はない）のように使われる。",
      derivatives: [
        { word: "indication",  desc: "兆候・証拠・指示（名詞）" },
        { word: "indicator",   desc: "指標・指示器・ウインカー（名詞）" },
        { word: "indicative",  desc: "示す・（文法）直説法の（形容詞）" }
      ],
      family: [
        { word: "predict",    desc: "予測する（prae-: 前もって言う）" },
        { word: "contradict", desc: "矛盾する（contra-: 逆のことを言う）" },
        { word: "dictate",    desc: "命令する・口述する" },
        { word: "verdict",    desc: "評決（真実の言葉）" },
        { word: "dedicate",   desc: "捧げる（de+dicare）" },
        { word: "index",      desc: "索引・指数（indicāre と同根）" }
      ],
      compounds: [
        { phrase: "indicate a direction", desc: "方向を示す" },
        { phrase: "economic indicator",   desc: "経済指標" },
        { phrase: "turn indicator",       desc: "方向指示器・ウインカー" }
      ]
    },

    "dictate": {
      origin: "ラテン語 dictāre（繰り返し言う・命令する）< dicere（言う）の強意・反復形。「はっきりと繰り返し言う」→「書き取らせる口述」と「絶対的な命令」の両義を持つ。\n\n名詞 dictate は「命令・要求」で、the dictates of conscience（良心の命令）のように哲学的文脈でも使われる。dictator（独裁者）は「言葉が絶対的に従われる者」で、dictatorship（独裁政治）はその体制を指す。",
      derivatives: [
        { word: "dictation",    desc: "口述・書き取り・ディクテーション（名詞）" },
        { word: "dictator",     desc: "独裁者（名詞）" },
        { word: "dictatorship", desc: "独裁政治・独裁政権（名詞）" },
        { word: "dictatorial",  desc: "独裁的な・横柄な（形容詞）" }
      ],
      family: [
        { word: "predict",    desc: "予測する（prae-: 前もって言う）" },
        { word: "contradict", desc: "矛盾する（contra-: 逆のことを言う）" },
        { word: "indicate",   desc: "示す（in-: 〜を指し示す）" },
        { word: "verdict",    desc: "評決（真実の言葉）" },
        { word: "addict",     desc: "中毒者（ad+dicere: 〜に言い渡された）" },
        { word: "diction",    desc: "言い回し・話し方" }
      ],
      compounds: [
        { phrase: "dictate to",     desc: "〜に命令する・〜に書き取らせる" },
        { phrase: "dictate terms",  desc: "条件を一方的に押しつける" },
        { phrase: "take dictation", desc: "口述を書き取る" }
      ]
    },

    "verdict": {
      origin: "中世ラテン語 veredictum（真実の言葉）< ラテン語 vērus（真実の）+ dictum（言われたこと）< dicere（言う）。「陪審員が真実として言い渡したこと」が原義で、法廷用語として「評決・裁定」を意味する。\n\nvērus（真実の）は verify（確認する）・very（まさに）とも同根。法廷外でも「the verdict of history（歴史の審判）」「the popular verdict（世論の審判）」のように「最終的な判断」を指す表現に転用される。",
      derivatives: [
        { word: "veredict", desc: "（古語）= verdict" }
      ],
      family: [
        { word: "predict",    desc: "予測する（prae-: 前もって言う）" },
        { word: "contradict", desc: "矛盾する（contra-: 逆のことを言う）" },
        { word: "indicate",   desc: "示す（in-: 〜を指し示す）" },
        { word: "dictate",    desc: "命令する・口述する" },
        { word: "verify",     desc: "確認する（vērus: 真実の）" },
        { word: "diction",    desc: "言い回し・話し方" }
      ],
      compounds: [
        { phrase: "reach a verdict",        desc: "評決に至る" },
        { phrase: "not guilty verdict",     desc: "無罪評決" },
        { phrase: "the verdict of history", desc: "歴史の審判" }
      ]
    },

    // ── scribere / scriptus系 ─────────────────────────────────────────────────
    "subscribe": {
      origin: "ラテン語 subscribere（下に書く）< sub-（下に）+ scribere（書く）。古来、契約書・嘆願書の「下部に署名する」行為を指した。署名することで同意・支持を示すことから「定期購読する・サービスに加入する・賛同する」に広がった。\n\nsubscription（購読料・定期契約）は今日のサブスクリプションサービスのベース概念。subscript（下付き文字）は数式の H₂O の「2」のように、文字の「下に書かれた」ものを指す。",
      derivatives: [
        { word: "subscription", desc: "定期購読・サブスクリプション（名詞）" },
        { word: "subscriber",   desc: "購読者・加入者（名詞）" },
        { word: "subscript",    desc: "下付き文字（名詞・形容詞）" }
      ],
      family: [
        { word: "prescribe",   desc: "処方する（prae-: 前もって書く）" },
        { word: "manuscript",  desc: "手稿・原稿（manus+scriptus: 手で書かれた）" },
        { word: "transcript",  desc: "文字起こし（trans-: 書き写す）" },
        { word: "describe",    desc: "描写する（de-: 書き記す）" },
        { word: "inscribe",    desc: "刻み込む（in-: 中に書く）" },
        { word: "scripture",   desc: "聖典・聖書（scribere の名詞）" }
      ],
      compounds: [
        { phrase: "subscribe to",          desc: "〜を購読する・〜に賛同する" },
        { phrase: "monthly subscription",  desc: "月額サブスクリプション" },
        { phrase: "email subscriber",      desc: "メール登録者" }
      ]
    },

    "prescribe": {
      origin: "ラテン語 praescribere（前もって書く・あらかじめ定める）< prae-（前に・先に）+ scribere（書く）。「医師が処方箋に前もって薬名を書く」行為から「処方する」の医療用語として定着した。\n\nprescription（処方箋）と over-the-counter（処方箋不要）は対になる概念。規則・手順を「前もって書いて定める」意味でも使われる（prescribed procedure: 規定の手順）。prescriptive（規範的な）は linguistics（言語学）で記述的 descriptive と対比される重要概念。",
      derivatives: [
        { word: "prescription",  desc: "処方箋・処方薬・規定（名詞）" },
        { word: "prescribed",    desc: "規定の・処方された（形容詞）" },
        { word: "prescriptive",  desc: "規範的な（形容詞）" }
      ],
      family: [
        { word: "subscribe",  desc: "定期購読する（sub-: 下に書く）" },
        { word: "manuscript", desc: "手稿・原稿（手で書かれた）" },
        { word: "transcript", desc: "文字起こし（trans-: 書き写す）" },
        { word: "describe",   desc: "描写する（de-: 書き記す）" },
        { word: "inscribe",   desc: "刻み込む（in-: 中に書く）" }
      ],
      compounds: [
        { phrase: "prescribe medication", desc: "薬を処方する" },
        { phrase: "prescription drug",    desc: "処方薬" },
        { phrase: "as prescribed",        desc: "規定通りに・処方通りに" }
      ]
    },

    "manuscript": {
      origin: "中世ラテン語 manuscriptus（手で書かれた）< manus（手）+ scriptus（書かれた）< scribere（書く）の完了分詞。印刷術発明（15世紀）以前、すべての書物は職人が手書きで複写した写本（manuscript）だった。manus は manual（手動の）・manufacture（製造）・manicure（爪の手入れ）にも含まれる。\n\n現代では出版・投稿前の「原稿」を指す。manuscript submission（原稿投稿）は学術・文学の場で使われる。また中世写本は羊皮紙に書かれ、図書館で貴重資料として保存されている。",
      derivatives: [
        { word: "script",      desc: "台本・筆記体（scriptus 由来）" },
        { word: "scripture",   desc: "聖典・聖書（scribere の名詞）" }
      ],
      family: [
        { word: "subscribe",  desc: "購読する（sub-: 下に書く）" },
        { word: "prescribe",  desc: "処方する（prae-: 前もって書く）" },
        { word: "transcript", desc: "文字起こし・成績証明書（書き写す）" },
        { word: "describe",   desc: "描写する（de-: 書き記す）" },
        { word: "manual",     desc: "手動の（manus: 手）" },
        { word: "manufacture", desc: "製造する（manus+facere: 手で作る）" }
      ],
      compounds: [
        { phrase: "submit a manuscript",   desc: "原稿を投稿する" },
        { phrase: "medieval manuscript",   desc: "中世写本" },
        { phrase: "manuscript review",     desc: "査読（学術出版）" }
      ]
    },

    "transcript": {
      origin: "ラテン語 transcriptum（書き写したもの）< trans-（向こう側へ・別の形に）+ scribere（書く）の完了分詞。「音声・会話・映像の内容を文字として書き写す」行為を指す。\n\n大学の「成績証明書（transcript）」は学業履歴を紙に「書き写したもの」。transcribe（文字起こしする）は動詞形。transcription（転写・翻字）は音楽（楽譜の編曲）・言語学（音声の記号化）・生物学（DNA→RNAの転写）でも使われる。",
      derivatives: [
        { word: "transcribe",      desc: "文字起こしする・転写する（動詞）" },
        { word: "transcription",   desc: "文字起こし・転写・翻字（名詞）" },
        { word: "transcriptionist", desc: "文字起こし業者（名詞）" }
      ],
      family: [
        { word: "subscribe",  desc: "購読する（sub-: 下に書く）" },
        { word: "prescribe",  desc: "処方する（prae-: 前もって書く）" },
        { word: "manuscript", desc: "手稿・原稿（手で書かれた）" },
        { word: "describe",   desc: "描写する（de-: 書き記す）" },
        { word: "inscribe",   desc: "刻み込む（in-: 中に書く）" },
        { word: "transport",  desc: "輸送する（trans-: 向こう側へ）" }
      ],
      compounds: [
        { phrase: "official transcript",     desc: "公式成績証明書" },
        { phrase: "transcript of a speech",  desc: "演説の書き起こし" },
        { phrase: "court transcript",        desc: "法廷記録" }
      ]
    },

    // ── ferre / latum系 ──────────────────────────────────────────────────────
    "refer": {
      origin: "ラテン語 referre（持ち帰る・言及する）< re-（戻って）+ ferre（運ぶ・持つ）。ferre は印欧語根 *bher-（運ぶ）に由来し、英語の bear（耐える・産む）とも深く同根。「元の情報へ持ち帰る」→「参照する・言及する・委ねる」に展開した。\n\nreferee（審判）は「判断を委ねられた人」。reference（参考文献・推薦状）は「参照されるもの」。referendum（国民投票）は「民に戻して決めさせるもの」で、re-ferre の直接の名詞形。",
      derivatives: [
        { word: "reference",  desc: "参照・参考文献・推薦状（名詞）" },
        { word: "referral",   desc: "紹介・紹介状・委託（名詞）" },
        { word: "referee",    desc: "審判・査読者（名詞）" },
        { word: "referendum", desc: "国民投票（名詞）" }
      ],
      family: [
        { word: "offer",    desc: "申し出る（ob-: 〜に向けて持つ）" },
        { word: "suffer",   desc: "苦しむ（sub-: 下から耐えて持つ）" },
        { word: "infer",    desc: "推論する（in-: 中へ導く）" },
        { word: "differ",   desc: "異なる（dis-: 別方向へ持つ）" },
        { word: "transfer", desc: "移転する（trans-: 向こうへ運ぶ）" },
        { word: "prefer",   desc: "好む（pre-: 先に持ち出す）" },
        { word: "confer",   desc: "協議する・授与する（con-: 共に持ち寄る）" }
      ],
      compounds: [
        { phrase: "refer to",           desc: "〜を参照する・〜に言及する" },
        { phrase: "with reference to",  desc: "〜に関して（書き言葉）" },
        { phrase: "letter of reference", desc: "推薦状" }
      ]
    },

    "offer": {
      origin: "ラテン語 offerre（〜に向けて持ってくる・差し出す）< ob-（〜に向けて）+ ferre（運ぶ・持つ）。「相手の方へ物を運んでくる」→「申し出る・提供する・奉納する」に発展した。古英語には offrian（神に捧げる）として早くから入り、宗教的な献納から商業的な提供まで広がった。\n\noffer は名詞・動詞両用で、job offer（内定）、make an offer（申し出る）、on offer（販売中・提供中）は頻出表現。",
      derivatives: [
        { word: "offering",   desc: "供え物・贈り物・申し出（名詞）" },
        { word: "offertory",  desc: "（宗教）献金・奉納（名詞）" }
      ],
      family: [
        { word: "refer",    desc: "参照する（re-: 持ち帰る）" },
        { word: "suffer",   desc: "苦しむ（sub-: 下から耐えて持つ）" },
        { word: "infer",    desc: "推論する（in-: 中へ導く）" },
        { word: "differ",   desc: "異なる（dis-: 別方向へ持つ）" },
        { word: "transfer", desc: "移転する（trans-: 向こうへ運ぶ）" },
        { word: "confer",   desc: "協議する・授与する（con-: 共に）" }
      ],
      compounds: [
        { phrase: "job offer",       desc: "内定・求人オファー" },
        { phrase: "make an offer",   desc: "申し出る・値段を提示する" },
        { phrase: "on offer",        desc: "販売中・提供中・特価で" }
      ]
    },

    "suffer": {
      origin: "ラテン語 sufferre（下から耐えて運ぶ）< sub-（下から・耐えて）+ ferre（運ぶ・持つ）。「重い荷を下から支えて持ちこたえる」が原義で、「苦難を耐える・苦しむ・（損害を）被る」に特化した。\n\nsuffer from（〜に苦しむ）は病気・問題について広く使われる重要表現。insufferable（耐えられないほど不愉快な）は強い否定形。"He doesn't suffer fools gladly."（愚か者を容赦しない）は慣用句として使われる。",
      derivatives: [
        { word: "suffering",     desc: "苦しみ・苦難（名詞）" },
        { word: "sufferer",      desc: "患者・被害者・苦しむ人（名詞）" },
        { word: "insufferable",  desc: "耐えられないほど不愉快な（形容詞）" }
      ],
      family: [
        { word: "refer",    desc: "参照する（re-: 持ち帰る）" },
        { word: "offer",    desc: "申し出る（ob-: 向けて持つ）" },
        { word: "infer",    desc: "推論する（in-: 中へ導く）" },
        { word: "differ",   desc: "異なる（dis-: 別方向へ持つ）" },
        { word: "transfer", desc: "移転する（trans-: 向こうへ運ぶ）" }
      ],
      compounds: [
        { phrase: "suffer from",         desc: "〜に苦しむ・〜を患っている" },
        { phrase: "suffer consequences", desc: "結果を被る" },
        { phrase: "suffer in silence",   desc: "黙って苦しむ" }
      ]
    },

    "infer": {
      origin: "ラテン語 inferre（中へ運び込む・論理的に導く）< in-（中へ）+ ferre（運ぶ・持つ）。「前提という素材を論理の中へ運び込んで結論を導く」が原義で、「推論する・推察する」に特化した学術的な動詞。\n\nimply（暗示する）としばしば混同されるが、infer は「受け手が推論する」行為、imply は「送り手が示唆する」行為という使い分けが正しい。inference engine（推論エンジン）はAI・論理プログラミングの基盤概念。",
      derivatives: [
        { word: "inference",    desc: "推論・推察（名詞）" },
        { word: "inferential",  desc: "推論的な（形容詞）" },
        { word: "inferable",    desc: "推論可能な（形容詞）" }
      ],
      family: [
        { word: "refer",    desc: "参照する（re-: 持ち帰る）" },
        { word: "offer",    desc: "申し出る（ob-: 向けて持つ）" },
        { word: "suffer",   desc: "苦しむ（sub-: 下から耐えて）" },
        { word: "differ",   desc: "異なる（dis-: 別方向へ持つ）" },
        { word: "transfer", desc: "移転する（trans-: 向こうへ運ぶ）" },
        { word: "prefer",   desc: "好む（pre-: 先に持ち出す）" }
      ],
      compounds: [
        { phrase: "infer from",         desc: "〜から推論する" },
        { phrase: "logical inference",  desc: "論理的推論" },
        { phrase: "inference engine",   desc: "推論エンジン（AI用語）" }
      ]
    },

    "differ": {
      origin: "ラテン語 differre（バラバラな方向へ運ぶ・引き延ばす）< dis-（バラバラに）+ ferre（運ぶ）。「それぞれ別の方向へ持っていく」→「異なる・差異がある」に。dis- には「分散」と「遅延」の両義があり、defer（延期する）はこの遅延義を引き継いだ同根語。\n\ndifference（差異）・different（異なる）・differential（差動の・微分の）と語族が豊富。agree to differ（意見の相違を認めて折り合う）は重要な慣用句。",
      derivatives: [
        { word: "difference",     desc: "差異・違い（名詞）" },
        { word: "different",      desc: "異なる（形容詞）" },
        { word: "differently",    desc: "異なって（副詞）" },
        { word: "differential",   desc: "差動の・微分の（形容詞・名詞）" },
        { word: "differentiate",  desc: "区別する・微分する（動詞）" }
      ],
      family: [
        { word: "refer",    desc: "参照する（re-: 持ち帰る）" },
        { word: "offer",    desc: "申し出る（ob-: 向けて持つ）" },
        { word: "suffer",   desc: "苦しむ（sub-: 下から耐えて）" },
        { word: "infer",    desc: "推論する（in-: 中へ導く）" },
        { word: "defer",    desc: "延期する・従う（dis-: 引き延ばす）" },
        { word: "transfer", desc: "移転する（trans-: 向こうへ運ぶ）" }
      ],
      compounds: [
        { phrase: "differ from",    desc: "〜と異なる" },
        { phrase: "agree to differ", desc: "意見の相違を認めて折り合う" },
        { phrase: "make a difference", desc: "違いをもたらす・重要である" }
      ]
    },

    // ── struere / structus系 ──────────────────────────────────────────────────
    "instruct": {
      origin: "ラテン語 instruere（中に積み上げる・準備する）< in-（中に）+ struere（積み上げる・建てる）。「知識を心の中に積み上げていく」→「指示する・教える」に特化した。\n\ninstructor（指導者・教官）、instruction manual（取扱説明書）、instructions（指示書）はいずれも「積み上げられた知識・手順」のイメージ。follow instructions（指示に従う）は日常・職場で頻出の表現。instructive（有益な・教訓的な）は「学びを積み上げるに値する」意。",
      derivatives: [
        { word: "instruction",  desc: "指示・説明・指導（名詞）" },
        { word: "instructor",   desc: "指導者・教官・インストラクター（名詞）" },
        { word: "instructive",  desc: "有益な・教訓的な（形容詞）" },
        { word: "instructively", desc: "有益に（副詞）" }
      ],
      family: [
        { word: "structure",   desc: "構造・建造物（struere の名詞形）" },
        { word: "construct",   desc: "建設する（con-: 共に積み上げる）" },
        { word: "obstruct",    desc: "妨害する（ob-: 前に積んでふさぐ）" },
        { word: "destruct",    desc: "破壊する（de-: 積み崩す）" },
        { word: "reconstruct", desc: "再建する（re-: 再び積み上げる）" }
      ],
      compounds: [
        { phrase: "follow instructions",  desc: "指示に従う" },
        { phrase: "instruction manual",   desc: "取扱説明書" },
        { phrase: "instruct to do",       desc: "〜するよう指示する" }
      ]
    },

    "structure": {
      origin: "ラテン語 structūra（建てられたもの・組み立て）< struere（積み上げる・建てる）の名詞形。「石・木材などを積み上げて作られた構造物」が原義で、物理的建造物から文章・音楽・組織の「構造」まで幅広く使われる。\n\n動詞としても使い、"structure your argument"（論点を構成する）のように「組み立てる」意。structural（構造的な）は工学・言語学・社会学で必須語。infrastructure（インフラ）は infra-（下に）+ structure で「社会の下支え構造」。",
      derivatives: [
        { word: "structural",     desc: "構造的な・構造上の（形容詞）" },
        { word: "structurally",   desc: "構造的に（副詞）" },
        { word: "structuralism",  desc: "構造主義（名詞）" },
        { word: "restructure",    desc: "再編する・リストラする（動詞）" }
      ],
      family: [
        { word: "instruct",      desc: "指示する（in-: 中に積み上げる）" },
        { word: "construct",     desc: "建設する（con-: 共に積み上げる）" },
        { word: "obstruct",      desc: "妨害する（ob-: 前に積んでふさぐ）" },
        { word: "destruct",      desc: "破壊する（de-: 積み崩す）" },
        { word: "infrastructure", desc: "インフラ（infra-: 下の構造）" }
      ],
      compounds: [
        { phrase: "sentence structure",        desc: "文の構造" },
        { phrase: "organizational structure",  desc: "組織構造" },
        { phrase: "data structure",            desc: "データ構造（コンピューター科学）" }
      ]
    },

    "obstruct": {
      origin: "ラテン語 obstruere（前に積み上げてふさぐ）< ob-（前に・向かって）+ struere（積み上げる）。「進路の前に物を積み上げて道をふさぐ」が原義で、「妨害する・遮断する」に特化した。\n\nobstacle（障害物）は同根の obstāculum（前に立ちふさがるもの）から派生。obstruct justice（司法妨害）は法律上の重大な罪。医学では obstruction（閉塞）として「腸閉塞・気道閉塞」などに使われる。",
      derivatives: [
        { word: "obstruction",  desc: "妨害・閉塞・障害物（名詞）" },
        { word: "obstructive",  desc: "妨害する・閉塞を起こす（形容詞）" },
        { word: "obstructor",   desc: "妨害する人・もの（名詞）" }
      ],
      family: [
        { word: "instruct",   desc: "指示する（in-: 中に積み上げる）" },
        { word: "structure",  desc: "構造（struere の名詞形）" },
        { word: "construct",  desc: "建設する（con-: 共に積み上げる）" },
        { word: "destruct",   desc: "破壊する（de-: 積み崩す）" },
        { word: "obstacle",   desc: "障害物（ob+stāculum: 前に立つもの）" }
      ],
      compounds: [
        { phrase: "obstruct justice",       desc: "司法を妨害する" },
        { phrase: "road obstruction",       desc: "道路障害物" },
        { phrase: "clear an obstruction",   desc: "障害を取り除く" }
      ]
    },

    "destruct": {
      origin: "ラテン語 destruere（下へ積み崩す・壊す）< de-（下へ・反対に）+ struere（積み上げる）。「積み上げたものを逆方向に崩す」が原義。destroy（破壊する）は同根の古フランス語 destruire から来た別経路の借用語で、ほぼ同義。\n\nself-destruct（自己破壊する）はSF・軍事用語で「設計上の自己破壊機能」を指す。indestructible（破壊不可能な）は「壊すことができない」強固さを表す。weapons of mass destruction（大量破壊兵器）は国際政治の重要語。",
      derivatives: [
        { word: "destruction",    desc: "破壊・壊滅（名詞）" },
        { word: "destructive",    desc: "破壊的な（形容詞）" },
        { word: "destructively",  desc: "破壊的に（副詞）" },
        { word: "indestructible", desc: "破壊不可能な（形容詞）" }
      ],
      family: [
        { word: "instruct",   desc: "指示する（in-: 中に積み上げる）" },
        { word: "structure",  desc: "構造（struere の名詞形）" },
        { word: "construct",  desc: "建設する（con-: 共に積み上げる）" },
        { word: "obstruct",   desc: "妨害する（ob-: 前に積んでふさぐ）" },
        { word: "destroy",    desc: "破壊する（古仏語経由の同根語）" }
      ],
      compounds: [
        { phrase: "self-destruct",                  desc: "自己破壊する" },
        { phrase: "weapons of mass destruction",    desc: "大量破壊兵器" },
        { phrase: "destructive criticism",          desc: "建設的でない・悪意ある批判" }
      ]
    },

    // ── ducere / ductus系（残り）─────────────────────────────────────────────
    "reduce": {
      origin: "ラテン語 reducere（後ろへ引き戻す・元の状態に戻す）< re-（戻って）+ ducere（引く・導く）。「元の場所・状態へ引き戻す」→「（量・程度を）縮小する・低下させる」に発展した。\n\nreduce to（〜の状態に追い込む）は "reduce to tears"（涙させる）、"reduce to ashes"（灰にする）のように文脈によって強い否定的ニュアンスを持つ。reduction（削減）は費用・CO₂排出量・軍備など多様な文脈で使われる重要語。",
      derivatives: [
        { word: "reduction",   desc: "削減・縮小・還元（名詞）" },
        { word: "reductive",   desc: "単純化しすぎた・還元的な（形容詞）" },
        { word: "reducible",   desc: "削減できる（形容詞）" },
        { word: "irreducible", desc: "これ以上削減できない・不可約な（形容詞）" }
      ],
      family: [
        { word: "induce",     desc: "誘発する（in-: 中へ引き込む）" },
        { word: "introduce",  desc: "紹介する・導入する（intro-: 内側へ）" },
        { word: "conduct",    desc: "実施する・指揮する（con-: 共に引く）" },
        { word: "produce",    desc: "生産する（pro-: 前へ引き出す）" },
        { word: "deduce",     desc: "演繹する（de-: 下へ引き出す）" },
        { word: "seduce",     desc: "誘惑する（se-: 別の方へ引く）" }
      ],
      compounds: [
        { phrase: "reduce costs",     desc: "コストを削減する" },
        { phrase: "carbon reduction", desc: "二酸化炭素削減" },
        { phrase: "reduce to tears",  desc: "泣かせる・涙ぐませる" }
      ]
    },

    "induce": {
      origin: "ラテン語 inducere（中へ引き込む・誘導する）< in-（中へ）+ ducere（引く・導く）。「心の中へ引き込む」→「説得する・誘発する」に。医学では「分娩誘発・麻酔導入」を指す専門用語としても使われる。\n\ninduction（誘導・就任式・帰納法）は論理学（個別から一般を「引き出す」思考）・電気学（電磁誘導）・医学（分娩誘発）で使われる多義語。inductive reasoning（帰納的推論）はデータから法則を引き出す思考法を指す。",
      derivatives: [
        { word: "inducement", desc: "誘引・動機・報酬（名詞）" },
        { word: "induction",  desc: "誘導・就任式・帰納法（名詞）" },
        { word: "inductive",  desc: "帰納的な・誘導的な（形容詞）" }
      ],
      family: [
        { word: "reduce",    desc: "削減する（re-: 引き戻す）" },
        { word: "introduce", desc: "紹介する・導入する（intro-: 内側へ）" },
        { word: "conduct",   desc: "実施する・指揮する（con-: 共に引く）" },
        { word: "produce",   desc: "生産する（pro-: 前へ引き出す）" },
        { word: "deduce",    desc: "演繹する（de-: 下へ引き出す）" },
        { word: "seduce",    desc: "誘惑する（se-: 別の方へ引く）" }
      ],
      compounds: [
        { phrase: "induce labor",         desc: "分娩を誘発する" },
        { phrase: "induce sleep",         desc: "眠気を誘う・睡眠を誘発する" },
        { phrase: "inductive reasoning",  desc: "帰納的推論" }
      ]
    },

    "introduce": {
      origin: "ラテン語 introducere（内側へ引き込む）< intrō-（内側へ）+ ducere（引く・導く）。「外にあるものを内側へ引き入れる」→「（人・物・概念を）初めてその場に引き込む」→「紹介する・導入する」に発展した。\n\nintroduction（序論・紹介・導入）は本の冒頭でも人を引き合わせる場面でも使われる。introductory offer（お試し価格）は「初めて引き込むための提案」というマーケティング表現。",
      derivatives: [
        { word: "introduction",   desc: "紹介・序論・導入（名詞）" },
        { word: "introductory",   desc: "入門の・お試しの（形容詞）" },
        { word: "intro",          desc: "イントロ・導入部（口語略）" }
      ],
      family: [
        { word: "reduce",   desc: "削減する（re-: 引き戻す）" },
        { word: "induce",   desc: "誘発する（in-: 中へ引き込む）" },
        { word: "conduct",  desc: "実施する・指揮する（con-: 共に引く）" },
        { word: "produce",  desc: "生産する（pro-: 前へ引き出す）" },
        { word: "deduce",   desc: "演繹する（de-: 下へ引き出す）" }
      ],
      compounds: [
        { phrase: "introduce yourself",      desc: "自己紹介する" },
        { phrase: "letter of introduction",  desc: "紹介状" },
        { phrase: "introductory course",     desc: "入門コース" }
      ]
    },

    "conductor": {
      origin: "ラテン語 conductor（引き合わせる人・請負人）< conducere（共に引く・集める）< con-（共に）+ ducere（引く）の動作主名詞形。「電気・熱を通して引き渡す物体」（物理）、「オーケストラを率いる指揮者」（音楽）、「列車の車掌」（交通）と多方向に使われる。\n\nconductor のコアイメージは「媒体として何かを引き通す存在」。semiconductor（半導体）は semi-（半分）+ conductor で、電気を「半分だけ通す物質」。現代コンピューターチップの基礎材料。",
      derivatives: [
        { word: "conductance",    desc: "電気伝導度（名詞）" },
        { word: "conductivity",   desc: "導電率・熱伝導率（名詞）" },
        { word: "semiconductor",  desc: "半導体（名詞）" }
      ],
      family: [
        { word: "reduce",    desc: "削減する（re-: 引き戻す）" },
        { word: "induce",    desc: "誘発する（in-: 中へ引き込む）" },
        { word: "introduce", desc: "紹介する（intro-: 内側へ引く）" },
        { word: "conduct",   desc: "実施する・伝導する（con-: 共に引く）" },
        { word: "produce",   desc: "生産する（pro-: 前へ引き出す）" },
        { word: "deduce",    desc: "演繹する（de-: 下へ引き出す）" }
      ],
      compounds: [
        { phrase: "orchestra conductor", desc: "オーケストラの指揮者" },
        { phrase: "lightning conductor", desc: "避雷針" },
        { phrase: "semiconductor chip",  desc: "半導体チップ" }
      ]
    },

    // ── trahere / tractus系（残り）────────────────────────────────────────────
    "distract": {
      origin: "ラテン語 distrahere（バラバラの方向へ引っ張る）< dis-（バラバラに）+ trahere（引く）。「集中している注意をバラバラに引き散らす」が原義で、「気をそらす・注意を妨げる」に特化した。\n\ndistraction（気晴らし・妨害）は否定的文脈（注意散漫）でも肯定的文脈（気晴らし・娯楽）でも使われる。distracted driving（ながら運転）は現代の交通安全問題の中心語。",
      derivatives: [
        { word: "distraction",   desc: "気晴らし・注意散漫・妨害（名詞）" },
        { word: "distracted",    desc: "注意散漫な・うわの空の（形容詞）" },
        { word: "distractedly",  desc: "うわの空で（副詞）" },
        { word: "distractible",  desc: "気が散りやすい（形容詞）" }
      ],
      family: [
        { word: "contract",  desc: "契約・収縮する（con-: 共に引く）" },
        { word: "extract",   desc: "抽出する（ex-: 外へ引き出す）" },
        { word: "attract",   desc: "引き付ける（ad-: 〜へ引く）" },
        { word: "abstract",  desc: "抽象的な・要旨（abs-: 離して引く）" },
        { word: "subtract",  desc: "引き算する（sub-: 下から引く）" },
        { word: "tractor",   desc: "トラクター（trahere: 引くもの）" }
      ],
      compounds: [
        { phrase: "distract from",        desc: "〜から気をそらす" },
        { phrase: "distracted driving",   desc: "ながら運転" },
        { phrase: "digital distraction",  desc: "デジタル機器による注意散漫" }
      ]
    },

    "abstract": {
      origin: "ラテン語 abstrahere（引き離す）< abs-（離れて）+ trahere（引く）。「具体的なものから引き離して本質だけを取り出す」が原義。形容詞「抽象的な」、名詞「要旨・抄録・抽象画」、動詞「抽象化する・抽出する」と三役をこなす多機能語。\n\nabstract art（抽象画）は具体的な形から「引き離れた」芸術。abstract of a paper（論文の要旨）は内容を「引き出して」凝縮したもの。in the abstract（抽象的に・観念として）は哲学的議論でよく使われる。",
      derivatives: [
        { word: "abstraction",  desc: "抽象化・抽象概念（名詞）" },
        { word: "abstractly",   desc: "抽象的に（副詞）" },
        { word: "abstracted",   desc: "ぼんやりした・うわの空の（形容詞）" },
        { word: "abstractness", desc: "抽象性（名詞）" }
      ],
      family: [
        { word: "contract",  desc: "契約・収縮する（con-: 共に引く）" },
        { word: "extract",   desc: "抽出する（ex-: 外へ引き出す）" },
        { word: "distract",  desc: "気をそらす（dis-: バラバラに引く）" },
        { word: "subtract",  desc: "引き算する（sub-: 下から引く）" },
        { word: "attract",   desc: "引き付ける（ad-: 〜へ引く）" }
      ],
      compounds: [
        { phrase: "abstract art",      desc: "抽象画・抽象芸術" },
        { phrase: "in the abstract",   desc: "抽象的に・観念として" },
        { phrase: "research abstract", desc: "論文の要旨・アブストラクト" }
      ]
    },

    "subtract": {
      origin: "ラテン語 subtrahere（下から引き取る）< sub-（下から）+ trahere（引く）。「下から引き取って取り除く」→「引き算する・差し引く」に特化した算術用語。英語には15世紀に数学用語として定着した。\n\nsubtraction（引き算）は addition（足し算）の対語。subtract from（〜から引く）は数学的演算だけでなく "This subtracts from the overall quality."（これは全体の質を損なう）のように比喩的にも使われる。subtractive color（減法混色）は絵の具・印刷のCMYKで使われる概念。",
      derivatives: [
        { word: "subtraction",  desc: "引き算・差し引き（名詞）" },
        { word: "subtracted",   desc: "差し引かれた（形容詞）" },
        { word: "subtractive",  desc: "減法の・差し引く（形容詞）" }
      ],
      family: [
        { word: "contract",  desc: "契約・収縮する（con-: 共に引く）" },
        { word: "extract",   desc: "抽出する（ex-: 外へ引き出す）" },
        { word: "distract",  desc: "気をそらす（dis-: バラバラに引く）" },
        { word: "abstract",  desc: "抽象的な・要旨（abs-: 離して引く）" },
        { word: "tractor",   desc: "トラクター（trahere: 引くもの）" }
      ],
      compounds: [
        { phrase: "subtract from",       desc: "〜から引く・〜を損なう" },
        { phrase: "subtraction problem", desc: "引き算の問題" },
        { phrase: "subtractive color",   desc: "減法混色（CMYK）" }
      ]
    },

    // ── premere / pressus系（残り）────────────────────────────────────────────
    "depress": {
      origin: "ラテン語 deprimere（下へ押さえる）< de-（下へ）+ premere（押す）。「下方向へ力を加えて押しつける」が原義で、「気分を落ち込ませる・経済を低迷させる・価格を下げる」に広がった。\n\ndepression（うつ病・不景気・低気圧・地形の窪み）は「押し下げられた状態」のあらゆる形を指す多義語。Great Depression（大恐慌、1930年代）は経済が「押し下げられた」歴史的事件。antidepressant（抗うつ薬）は押し下げる力に「対抗する」薬剤。",
      derivatives: [
        { word: "depression",     desc: "うつ病・不景気・低気圧・くぼ地（名詞）" },
        { word: "depressed",      desc: "落ち込んだ・不況の（形容詞）" },
        { word: "depressing",     desc: "憂うつにさせる（形容詞）" },
        { word: "antidepressant", desc: "抗うつ薬（名詞・形容詞）" }
      ],
      family: [
        { word: "express",   desc: "表現する（ex-: 外へ押し出す）" },
        { word: "impress",   desc: "感銘を与える（in-: 中へ押し込む）" },
        { word: "compress",  desc: "圧縮する（com-: 共に押す）" },
        { word: "suppress",  desc: "抑圧する（sub-: 下へ押さえる）" },
        { word: "pressure",  desc: "圧力（premere の名詞形）" },
        { word: "oppress",   desc: "圧政する（ob-: 〜に対して押す）" }
      ],
      compounds: [
        { phrase: "feel depressed",      desc: "落ち込んでいる・憂うつだ" },
        { phrase: "economic depression", desc: "経済不況・恐慌" },
        { phrase: "the Great Depression", desc: "大恐慌（1929年〜）" }
      ]
    },

    "pressure": {
      origin: "ラテン語 pressūra（押すこと・圧迫）< premere（押す）の名詞形。「物理的に押す力」→「精神的プレッシャー・社会的圧力・気圧・血圧・水圧」まで広く転用された。\n\nunder pressure（プレッシャーの下で）は物理的意味と比喩的意味の両方で使われる。peer pressure（仲間からの圧力）は社会心理の重要概念。血圧（blood pressure）・気圧（air pressure）は日常的に使われる医学・気象の基本語。",
      derivatives: [
        { word: "pressurize",   desc: "加圧する・圧力をかける（動詞）" },
        { word: "pressurized",  desc: "加圧された（形容詞）" },
        { word: "high-pressure", desc: "高圧の・強引な（形容詞）" }
      ],
      family: [
        { word: "express",   desc: "表現する（ex-: 外へ押し出す）" },
        { word: "impress",   desc: "感銘を与える（in-: 中へ押し込む）" },
        { word: "compress",  desc: "圧縮する（com-: 共に押す）" },
        { word: "suppress",  desc: "抑圧する（sub-: 下へ押さえる）" },
        { word: "depress",   desc: "落ち込ませる（de-: 下へ押す）" },
        { word: "print",     desc: "印刷する（premere: 押して刻む）" }
      ],
      compounds: [
        { phrase: "blood pressure",  desc: "血圧" },
        { phrase: "under pressure",  desc: "プレッシャーの下で" },
        { phrase: "peer pressure",   desc: "仲間からの同調圧力" }
      ]
    },

    // ── jacere / jectus系（残り）─────────────────────────────────────────────
    "object": {
      origin: "ラテン語 obiectus（前に投げられたもの）< ob-（前に・向かって）+ jacere（投げる）の完了分詞。「目の前に投げ出されたもの」→「物体・対象」（名詞）、「前に投げ返す」→「異議を唱える」（動詞）の二方向に発展した。\n\n名詞（物体・目的語）は /ˈɒbdʒɪkt/（前強勢）、動詞（反対する）は /əbˈdʒekt/（後強勢）と発音が異なる。objective（客観的な・目標）は「外に投げ出されたもの＝主観を持たないもの」の意で哲学・ビジネスで必須語。",
      derivatives: [
        { word: "objection",    desc: "異議・反対（名詞）" },
        { word: "objective",    desc: "客観的な・目標・対物レンズ（形容詞・名詞）" },
        { word: "objectively",  desc: "客観的に（副詞）" },
        { word: "objectivity",  desc: "客観性（名詞）" }
      ],
      family: [
        { word: "project",  desc: "計画・投影する（pro-: 前へ投げる）" },
        { word: "inject",   desc: "注射する（in-: 中へ投げ込む）" },
        { word: "subject",  desc: "主題・支配下の（sub-: 下に投げる）" },
        { word: "eject",    desc: "放出する（ex-: 外へ投げ出す）" },
        { word: "reject",   desc: "拒絶する（re-: 投げ返す）" },
        { word: "adjacent", desc: "隣接した（ad+jacere: 傍に置かれた）" }
      ],
      compounds: [
        { phrase: "object to",    desc: "〜に異議を唱える・反対する" },
        { phrase: "no objection", desc: "異議なし" },
        { phrase: "objective view", desc: "客観的な見方" }
      ]
    },

    "eject": {
      origin: "ラテン語 eicere（外へ投げ出す）< ex-（外へ）+ jacere（投げる）。「内にあるものを強制的に外へ投げ出す」→「排出する・退場させる・緊急脱出する」に使われる。\n\nCD/DVDドライブの「イジェクトボタン」は「ディスクを外へ押し出す」動作から。ejector seat（射出座席）は航空用語で「緊急時にパイロットを外へ弾き出す座席」。スポーツでは「退場させる」意味で使われる。",
      derivatives: [
        { word: "ejection",  desc: "排出・退場・緊急脱出（名詞）" },
        { word: "ejector",   desc: "排出装置・イジェクター（名詞）" }
      ],
      family: [
        { word: "project",  desc: "計画・投影する（pro-: 前へ投げる）" },
        { word: "inject",   desc: "注射する（in-: 中へ投げ込む）" },
        { word: "subject",  desc: "主題・支配下の（sub-: 下に投げる）" },
        { word: "object",   desc: "反対する・物体（ob-: 前に投げる）" },
        { word: "reject",   desc: "拒絶する（re-: 投げ返す）" }
      ],
      compounds: [
        { phrase: "eject from",    desc: "〜から排出する・〜から退場させる" },
        { phrase: "ejector seat",  desc: "射出座席（航空）" },
        { phrase: "eject button",  desc: "イジェクトボタン" }
      ]
    },

    // ── ferre系（残り）────────────────────────────────────────────────────────
    "transfer": {
      origin: "ラテン語 transferre（向こう側へ運ぶ）< trans-（超えて・向こう側へ）+ ferre（運ぶ・持つ）。「ある場所から別の場所へ運び移す」が原義で、物・人・権利・データ・感情の「移転・移動・転送」全般に使われる。\n\nbank transfer（銀行振込）は金融の基本操作。knowledge transfer（知識移転）は組織学習の重要概念。heat transfer（熱移動）は物理・工学の専門用語。名詞・動詞で発音アクセントが変わる：名詞 /ˈtrænsfɜː/（前強勢）、動詞 /trænsˈfɜː/（後強勢）。",
      derivatives: [
        { word: "transferable",   desc: "移転可能な・譲渡できる（形容詞）" },
        { word: "transference",   desc: "転移・感情移入（名詞・心理学）" },
        { word: "transferral",    desc: "移転・移送（名詞）" }
      ],
      family: [
        { word: "refer",    desc: "参照する（re-: 持ち帰る）" },
        { word: "offer",    desc: "申し出る（ob-: 向けて持つ）" },
        { word: "suffer",   desc: "苦しむ（sub-: 下から耐えて）" },
        { word: "infer",    desc: "推論する（in-: 中へ導く）" },
        { word: "differ",   desc: "異なる（dis-: 別方向へ持つ）" },
        { word: "prefer",   desc: "好む（pre-: 先に持ち出す）" },
        { word: "confer",   desc: "協議する・授与する（con-: 共に）" }
      ],
      compounds: [
        { phrase: "bank transfer",       desc: "銀行振込" },
        { phrase: "knowledge transfer",  desc: "知識移転" },
        { phrase: "transfer to",         desc: "〜へ移転する・〜へ振り込む" }
      ]
    }

  };

  // 各エントリに origin / derivatives / family / compounds を追加（既存の example / exampleJa は保持）
  for (var word in data) {
    if (!e[word]) e[word] = {};
    var d = data[word];
    if (d.origin)      e[word].origin      = d.origin;
    if (d.derivatives) e[word].derivatives = d.derivatives;
    if (d.family)      e[word].family      = d.family;
    if (d.compounds)   e[word].compounds   = d.compounds;
  }
})();
