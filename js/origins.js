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
    },

    // ── capere / ceptus系（残り）─────────────────────────────────────────────
    "accept": {
      origin: "ラテン語 acceptāre（受け取る・承認する）< ad-（〜へ）+ capere（取る・つかむ）の反復強調形。「相手の方へ手を伸ばして取る」→「受け入れる・承認する」に発展した。receive が一方的に受け取る感覚に対し、accept は「意識的に選んで取る」積極的な承認のニュアンスを持つ。\n\nacceptable（受け入れられる）・unacceptable（受け入れ難い）は倫理・品質基準の議論で頻出。accept responsibility（責任を認める）は謝罪や説明責任の文脈で重要な表現。",
      derivatives: [
        { word: "acceptance",    desc: "承認・受け入れ・合格（名詞）" },
        { word: "acceptable",    desc: "受け入れられる・許容できる（形容詞）" },
        { word: "unacceptable",  desc: "受け入れられない（形容詞）" },
        { word: "acceptably",    desc: "許容できる範囲で（副詞）" }
      ],
      family: [
        { word: "except",     desc: "〜を除いて（ex-: 外へ取り出す）" },
        { word: "intercept",  desc: "横取りする（inter-: 間で取る）" },
        { word: "concept",    desc: "概念（con-: 共につかみ取る）" },
        { word: "reception",  desc: "受付・歓迎（re-: 受け取る）" },
        { word: "capture",    desc: "捕まえる（capere の直系）" },
        { word: "capable",    desc: "能力のある（取れる力がある）" }
      ],
      compounds: [
        { phrase: "accept responsibility", desc: "責任を認める・受け入れる" },
        { phrase: "accept an offer",       desc: "申し出を受け入れる" },
        { phrase: "widely accepted",       desc: "広く受け入れられた" }
      ]
    },

    "except": {
      origin: "ラテン語 excipere（外へ取り出す・例外とする）< ex-（外へ）+ capere（取る）。「全体の集合の中からひとつを外へ取り出す」→「〜を除いて・例外とする」に特化した。前置詞・接続詞・動詞の三役を担う多機能語。\n\nexception（例外）から "the exception that proves the rule"（例外こそが規則を証明する）という成句が生まれた。exceptional（例外的な・卓越した）は「規則の外に出るほど優れた」意で、exceptional talent（卓越した才能）のように肯定的に使われることが多い。",
      derivatives: [
        { word: "exception",      desc: "例外（名詞）" },
        { word: "exceptional",    desc: "例外的な・卓越した（形容詞）" },
        { word: "exceptionally",  desc: "例外的に・並外れて（副詞）" },
        { word: "exceptionalism", desc: "例外主義（名詞）" }
      ],
      family: [
        { word: "accept",     desc: "受け入れる（ad-: 〜へ取る）" },
        { word: "intercept",  desc: "横取りする（inter-: 間で取る）" },
        { word: "concept",    desc: "概念（con-: 共につかみ取る）" },
        { word: "reception",  desc: "受付・歓迎（re-: 受け取る）" },
        { word: "capture",    desc: "捕まえる（capere の直系）" }
      ],
      compounds: [
        { phrase: "except for",        desc: "〜を除いては" },
        { phrase: "no exception",      desc: "例外なし" },
        { phrase: "make an exception", desc: "例外を設ける" }
      ]
    },

    "intercept": {
      origin: "ラテン語 intercipere（間で取り捉える・横取りする）< inter-（間で）+ capere（取る）。「目的地へ向かっているものを途中で取り捉える」が原義で、通信・パス・ミサイルを「中間で捕まえる」全般に使われる。\n\n軍事（intercept a missile: ミサイルを迎撃する）・スポーツ（intercept a pass: パスを横取りする）・通信（intercept a message: 通信を傍受する）の三文脈で多用される。interceptor（迎撃機・迎撃ミサイル）は冷戦時代の核心語。",
      derivatives: [
        { word: "interception",  desc: "傍受・迎撃・横取り（名詞）" },
        { word: "interceptor",   desc: "迎撃機・迎撃システム（名詞）" }
      ],
      family: [
        { word: "accept",    desc: "受け入れる（ad-: 〜へ取る）" },
        { word: "except",    desc: "〜を除いて（ex-: 外へ取り出す）" },
        { word: "concept",   desc: "概念（con-: 共につかみ取る）" },
        { word: "reception", desc: "受付・歓迎（re-: 受け取る）" },
        { word: "capture",   desc: "捕まえる（capere の直系）" }
      ],
      compounds: [
        { phrase: "intercept a message", desc: "通信を傍受する" },
        { phrase: "intercept a pass",    desc: "パスを横取りする" },
        { phrase: "missile interceptor", desc: "ミサイル迎撃システム" }
      ]
    },

    "concept": {
      origin: "ラテン語 conceptus（心の中に受け胎したもの）< concipere（共につかみ取る・心に宿す）< con-（完全に）+ capere（取る）の完了分詞。「心の中に完全に取り込んで形成した観念」→「概念・アイデア」に特化した。conceive（着想する）と同根で、concept は動詞 conceive の名詞形にあたる。\n\nconcept car（コンセプトカー: 新しい概念を形にした試作車）、key concept（核心概念）、conceptual framework（概念的枠組み）と多様な文脈で使われる。",
      derivatives: [
        { word: "conceptual",     desc: "概念的な（形容詞）" },
        { word: "conceptualize",  desc: "概念化する（動詞）" },
        { word: "conceptually",   desc: "概念的に（副詞）" },
        { word: "preconception",  desc: "先入観（名詞）" }
      ],
      family: [
        { word: "accept",    desc: "受け入れる（ad-: 〜へ取る）" },
        { word: "except",    desc: "〜を除いて（ex-: 外へ取り出す）" },
        { word: "intercept", desc: "横取りする（inter-: 間で取る）" },
        { word: "reception", desc: "受付・歓迎（re-: 受け取る）" },
        { word: "conceive",  desc: "着想する（con+capere: 同根）" },
        { word: "capture",   desc: "捕まえる（capere の直系）" }
      ],
      compounds: [
        { phrase: "concept car",            desc: "コンセプトカー" },
        { phrase: "key concept",            desc: "核心概念・キーコンセプト" },
        { phrase: "conceptual framework",   desc: "概念的枠組み" }
      ]
    },

    "reception": {
      origin: "ラテン語 receptio（受け取ること・迎えること）< recipere（受け取る）< re-（戻って）+ capere（取る）の名詞形。「戻ってきたものを受け取る場・行為」が原義で、「ホテルの受付・歓迎パーティー・電波の受信状況」へと多方向に広がった。\n\nreception desk（受付）・wedding reception（披露宴）・poor reception（電波が悪い）と全く異なる文脈で使われる多義語。receptionist（受付係）は「受け取る人」、receptive（受け入れやすい）は「取り込む準備ができた」意。",
      derivatives: [
        { word: "receptionist", desc: "受付係（名詞）" },
        { word: "receptive",    desc: "受け入れやすい・柔軟な（形容詞）" },
        { word: "receptiveness", desc: "受容性（名詞）" }
      ],
      family: [
        { word: "accept",    desc: "受け入れる（ad-: 〜へ取る）" },
        { word: "except",    desc: "〜を除いて（ex-: 外へ取り出す）" },
        { word: "intercept", desc: "横取りする（inter-: 間で取る）" },
        { word: "concept",   desc: "概念（con-: 共につかみ取る）" },
        { word: "receive",   desc: "受け取る（同根）" }
      ],
      compounds: [
        { phrase: "wedding reception",  desc: "披露宴" },
        { phrase: "reception desk",     desc: "受付カウンター" },
        { phrase: "good/poor reception", desc: "電波の良し悪し" }
      ]
    },

    // ── vidēre / visus系 ─────────────────────────────────────────────────────
    "vision": {
      origin: "ラテン語 visio（見ること・幻視）< vidēre（見る）の名詞形。vidēre は印欧語根 *weid-（見る・知る）に由来し、英語の wit（機知）・wise（賢い）とも遠く同根。「見る行為・視力」から「将来を見通す洞察力・ビジョン」へ拡張された。\n\nvision statement（ビジョンステートメント）は組織が目指す未来の「見通し」を言語化したもの。visionary（先見者）は「他人には見えないものを見る人」。tunnel vision（視野狭窄）・night vision（暗視）は視覚の形態を表す。",
      derivatives: [
        { word: "visionary",   desc: "先見者・先見の明がある（名詞・形容詞）" },
        { word: "visual",      desc: "視覚の・ビジュアル（形容詞・名詞）" },
        { word: "visualize",   desc: "視覚化する・心に描く（動詞）" },
        { word: "visibility",  desc: "視認性・見通し（名詞）" }
      ],
      family: [
        { word: "visible",    desc: "見える（visibilis: 見ることができる）" },
        { word: "evident",    desc: "明らかな（ex+vidēre: 完全に見える）" },
        { word: "provide",    desc: "提供する（pro+vidēre: 前もって見る）" },
        { word: "supervise",  desc: "監督する（super+vidēre: 上から見る）" },
        { word: "advise",     desc: "助言する（ad+vidēre: 〜へ見る）" },
        { word: "revise",     desc: "改訂する（re+vidēre: 見直す）" }
      ],
      compounds: [
        { phrase: "vision statement", desc: "ビジョンステートメント" },
        { phrase: "night vision",     desc: "暗視・暗視装置" },
        { phrase: "field of vision",  desc: "視野" }
      ]
    },

    "visible": {
      origin: "ラテン語 visibilis（見ることができる）< visus（見られたもの）< vidēre（見る）に形容詞語尾 -ibilis を付けた形。「目で知覚できる」状態を表すが、比喩的に「社会的に認知されている・存在感がある」意味でも使われる。\n\ninvisible（見えない）は in- で否定した形。The Invisible Man（透明人間）は文字通り「見えない人」。high-visibility jacket（高視認性ジャケット: 建設現場の蛍光色ジャケット）は visibility の実用的な用法。",
      derivatives: [
        { word: "visibility",   desc: "視認性・見通し・知名度（名詞）" },
        { word: "visibly",      desc: "明らかに・見た目に（副詞）" },
        { word: "invisible",    desc: "見えない（形容詞）" },
        { word: "invisibility", desc: "不可視性（名詞）" }
      ],
      family: [
        { word: "vision",    desc: "視力・ビジョン（visio: 見ること）" },
        { word: "evident",   desc: "明らかな（ex+vidēre）" },
        { word: "provide",   desc: "提供する（pro+vidēre: 前もって見る）" },
        { word: "supervise", desc: "監督する（super+vidēre）" },
        { word: "advise",    desc: "助言する（ad+vidēre）" },
        { word: "revise",    desc: "改訂する（re+vidēre）" }
      ],
      compounds: [
        { phrase: "highly visible",     desc: "目立つ・存在感の大きい" },
        { phrase: "make visible",       desc: "見えるようにする・可視化する" },
        { phrase: "visibility forecast", desc: "視程予報（気象）" }
      ]
    },

    "evident": {
      origin: "ラテン語 evidens（はっきり見える）< ex-（外へ・完全に）+ vidēre（見る）の現在分詞 videns から合成された形容詞。「完全に外から見えている」→「明白な・自明の」に特化した。\n\nevidence（証拠）は「明らかに見えるもの」が原義で、法的証拠から科学的根拠まで広く使われる。"We hold these truths to be self-evident."（これらの真理を自明のものと考える）はアメリカ独立宣言の冒頭で有名な表現。",
      derivatives: [
        { word: "evidence",     desc: "証拠・根拠（名詞）" },
        { word: "evidently",    desc: "明らかに・どうやら（副詞）" },
        { word: "evidential",   desc: "証拠の・証拠となる（形容詞）" },
        { word: "self-evident", desc: "自明の（形容詞）" }
      ],
      family: [
        { word: "vision",    desc: "視力・ビジョン（visio: 見ること）" },
        { word: "visible",   desc: "見える（visibilis）" },
        { word: "provide",   desc: "提供する（pro+vidēre: 前もって見る）" },
        { word: "supervise", desc: "監督する（super+vidēre）" },
        { word: "revise",    desc: "改訂する（re+vidēre）" }
      ],
      compounds: [
        { phrase: "it is evident that",  desc: "〜であることは明白だ" },
        { phrase: "evidence-based",      desc: "証拠に基づいた（形容詞）" },
        { phrase: "self-evident truth",  desc: "自明の真理" }
      ]
    },

    "provide": {
      origin: "ラテン語 providēre（前もって見る・備える）< pro-（前に・前もって）+ vidēre（見る）。「先を見越して必要なものを備える」→「供給する・提供する・養う」に発展した。\n\nprovident（先見の明がある）・providence（摂理・神の摂理：神が「前もって見て」備えること）・provision（規定・備蓄：前もって見て用意したもの）は同根。provide for（〜の生活を支える）は家族扶養の文脈で重要表現。",
      derivatives: [
        { word: "provider",     desc: "提供者・扶養者・サービス事業者（名詞）" },
        { word: "provision",    desc: "供給・規定・食料備蓄（名詞）" },
        { word: "provisional",  desc: "暫定的な・仮の（形容詞）" },
        { word: "provident",    desc: "先見の明がある・倹約な（形容詞）" }
      ],
      family: [
        { word: "vision",    desc: "視力・ビジョン（visio: 見ること）" },
        { word: "visible",   desc: "見える（visibilis）" },
        { word: "evident",   desc: "明らかな（ex+vidēre）" },
        { word: "supervise", desc: "監督する（super+vidēre）" },
        { word: "advise",    desc: "助言する（ad+vidēre）" },
        { word: "revise",    desc: "改訂する（re+vidēre）" }
      ],
      compounds: [
        { phrase: "provide for",      desc: "〜の面倒を見る・養う・〜に備える" },
        { phrase: "service provider", desc: "サービス提供者・事業者" },
        { phrase: "provisional plan", desc: "暫定計画" }
      ]
    },

    "supervise": {
      origin: "中世ラテン語 supervidēre（上から見る・監督する）< super-（上に）+ vidēre（見る）。「高い場所から全体を見渡す」→「監督する・管理する」に特化した。\n\nsupervisor（監督者・上司）は「上から見る人」。supervision（監督・指導）は職場・教育・建設現場で使われる。unsupervised learning（教師なし学習）は機械学習で「監督なしに学ぶ」アルゴリズムを指し、AI分野の重要語。",
      derivatives: [
        { word: "supervision",   desc: "監督・指導・管理（名詞）" },
        { word: "supervisor",    desc: "監督者・上司（名詞）" },
        { word: "supervisory",   desc: "監督の（形容詞）" },
        { word: "unsupervised",  desc: "監督なしの・教師なしの（形容詞）" }
      ],
      family: [
        { word: "vision",   desc: "視力・ビジョン（visio: 見ること）" },
        { word: "visible",  desc: "見える（visibilis）" },
        { word: "evident",  desc: "明らかな（ex+vidēre）" },
        { word: "provide",  desc: "提供する（pro+vidēre）" },
        { word: "advise",   desc: "助言する（ad+vidēre）" },
        { word: "revise",   desc: "改訂する（re+vidēre）" }
      ],
      compounds: [
        { phrase: "under supervision",      desc: "監督下で" },
        { phrase: "supervisor feedback",    desc: "上司からのフィードバック" },
        { phrase: "unsupervised learning",  desc: "教師なし学習（機械学習）" }
      ]
    },

    "advise": {
      origin: "古フランス語 aviser（〜に向けて見る・考える）< ラテン語 ad-（〜へ）+ vidēre（見る）が変化した形。「相手のために見てあげる・考えてあげる」→「助言する・勧告する」に特化した。\n\nadvice（助言・名詞）と advise（助言する・動詞）は形が似ているが品詞が異なり、学習者が混乱しやすいペア。advisor / adviser（顧問・アドバイザー）は「見てあげる人」。advisory（諮問の・勧告的な）は advisory board（諮問委員会）で使われる。",
      derivatives: [
        { word: "advice",     desc: "助言・アドバイス（名詞）" },
        { word: "advisor",    desc: "顧問・アドバイザー（名詞）" },
        { word: "advisory",   desc: "諮問の・勧告的な（形容詞）" },
        { word: "inadvisable", desc: "勧められない・得策でない（形容詞）" }
      ],
      family: [
        { word: "vision",    desc: "視力・ビジョン（visio: 見ること）" },
        { word: "visible",   desc: "見える（visibilis）" },
        { word: "evident",   desc: "明らかな（ex+vidēre）" },
        { word: "provide",   desc: "提供する（pro+vidēre）" },
        { word: "supervise", desc: "監督する（super+vidēre）" },
        { word: "revise",    desc: "改訂する（re+vidēre）" }
      ],
      compounds: [
        { phrase: "advise on",       desc: "〜について助言する" },
        { phrase: "legal advice",    desc: "法律的助言" },
        { phrase: "advisory board",  desc: "諮問委員会" }
      ]
    },

    "revise": {
      origin: "ラテン語 revisere（再び見に行く）< re-（再び）+ vidēre（見る）。「書いたものをもう一度見直す」→「修正する・改訂する」に特化した。\n\nrevision（改訂・見直し）はイギリス英語では「試験勉強・復習」の意味もある（"do revision for exams"）。revised edition（改訂版）は書籍でよく使われる。revisionism（修正主義）は歴史解釈の文脈で、established view（通説）を「見直そうとする」立場を指す。",
      derivatives: [
        { word: "revision",     desc: "改訂・修正・（英）試験勉強（名詞）" },
        { word: "revised",      desc: "改訂された・修正された（形容詞）" },
        { word: "revisionist",  desc: "修正主義者（名詞）" }
      ],
      family: [
        { word: "vision",    desc: "視力・ビジョン（visio: 見ること）" },
        { word: "visible",   desc: "見える（visibilis）" },
        { word: "evident",   desc: "明らかな（ex+vidēre）" },
        { word: "provide",   desc: "提供する（pro+vidēre）" },
        { word: "supervise", desc: "監督する（super+vidēre）" },
        { word: "advise",    desc: "助言する（ad+vidēre）" }
      ],
      compounds: [
        { phrase: "revised edition",  desc: "改訂版" },
        { phrase: "under revision",   desc: "改訂中" },
        { phrase: "revision guide",   desc: "試験勉強用参考書（英語）" }
      ]
    },

    // ── cedere / cessus系 ────────────────────────────────────────────────────
    "proceed": {
      origin: "ラテン語 procedere（前へ進む）< pro-（前へ）+ cedere（行く・進む）。「前方へ向かって進む」が原義で、「続ける・進行する・（法的）手続きを取る」に使われる。\n\nproceedings（議事録・訴訟手続き）は「進行したことの記録」。procedure（手順）は「前へ進む方法」を体系化したもの。proceed to do（次に〜する）は段階の順序を示す表現で、proceed to the next step（次のステップへ進む）のように使われる。",
      derivatives: [
        { word: "proceedings", desc: "議事録・訴訟手続き（名詞）" },
        { word: "procedure",   desc: "手順・手続き・手術（名詞）" },
        { word: "procedural",  desc: "手続き上の（形容詞）" }
      ],
      family: [
        { word: "succeed",   desc: "成功する（sub-: 後に来る）" },
        { word: "exceed",    desc: "超える（ex-: 外へ出る）" },
        { word: "access",    desc: "アクセス（ad-: 〜へ近づく）" },
        { word: "recession", desc: "景気後退（re-: 後退する）" },
        { word: "process",   desc: "過程・処理する（pro-+cessus）" },
        { word: "precede",   desc: "先行する（prae-: 前を行く）" }
      ],
      compounds: [
        { phrase: "proceed with",        desc: "〜を続ける・進める" },
        { phrase: "legal proceedings",   desc: "法的手続き・訴訟" },
        { phrase: "how to proceed",      desc: "どう進めるか" }
      ]
    },

    "succeed": {
      origin: "ラテン語 succedere（後に来る・後任となる）< sub-（後に・下から）+ cedere（行く）。「前の人・事の後に来る」→「後継ぎになる（succeed to the throne: 王位を継承する）」と「うまく後に来るべき結果に至る（成功する）」の二義を持つ。\n\nsuccessor（後継者）は「後に来る人」の原義を保っている。succession（継承・連続）は王位継承から生態学の「植生遷移」まで使われる。great success（大成功）の success は「うまく後に来るべき結果」そのもの。",
      derivatives: [
        { word: "success",      desc: "成功（名詞）" },
        { word: "successful",   desc: "成功した（形容詞）" },
        { word: "successfully", desc: "成功裏に（副詞）" },
        { word: "succession",   desc: "継承・連続（名詞）" },
        { word: "successor",    desc: "後継者（名詞）" }
      ],
      family: [
        { word: "proceed",   desc: "進む（pro-: 前へ行く）" },
        { word: "exceed",    desc: "超える（ex-: 外へ出る）" },
        { word: "access",    desc: "アクセス（ad-: 〜へ近づく）" },
        { word: "recession", desc: "景気後退（re-: 後退する）" },
        { word: "process",   desc: "過程・処理する（pro-+cessus）" },
        { word: "precede",   desc: "先行する（prae-: 前を行く）" }
      ],
      compounds: [
        { phrase: "succeed in",      desc: "〜に成功する" },
        { phrase: "success story",   desc: "成功談" },
        { phrase: "succession plan", desc: "後継者育成計画" }
      ]
    },

    "exceed": {
      origin: "ラテン語 excedere（外へ出る・超え出る）< ex-（外へ）+ cedere（行く）。「定められた範囲の外へ出る」→「超える・上回る」に特化した。\n\nexcessive（過度な）は「外へ出すぎた」意。exceed the speed limit（制限速度を超える）は違反の文脈、exceed expectations（期待を上回る）は肯定的な文脈と、方向は反対でも同じ動詞を使う。exceeding（並外れた）はやや格調のある形容詞。",
      derivatives: [
        { word: "excess",       desc: "過剰・超過（名詞）" },
        { word: "excessive",    desc: "過度な・過剰な（形容詞）" },
        { word: "excessively",  desc: "過度に（副詞）" },
        { word: "exceedingly",  desc: "非常に・並外れて（副詞）" }
      ],
      family: [
        { word: "proceed",   desc: "進む（pro-: 前へ行く）" },
        { word: "succeed",   desc: "成功する（sub-: 後に来る）" },
        { word: "access",    desc: "アクセス（ad-: 〜へ近づく）" },
        { word: "recession", desc: "景気後退（re-: 後退する）" },
        { word: "process",   desc: "過程・処理する（pro-+cessus）" }
      ],
      compounds: [
        { phrase: "exceed the limit",    desc: "限度を超える" },
        { phrase: "exceed expectations", desc: "期待を上回る" },
        { phrase: "in excess of",        desc: "〜を超えて・〜以上の" }
      ]
    },

    "process": {
      origin: "ラテン語 processus（前進・進行）< procedere（前へ進む）の名詞形。「前へ進んでいく一連の流れ」→「過程・手順・工程」が名詞義で、動詞としては「（データ・食品・申請を）処理する」意。\n\nIT 用語での「データを処理する」意味は20世紀に加わった比較的新しい用法。due process（適正手続き：法の正当な手順）・peace process（和平プロセス）・manufacturing process（製造工程）と多様な分野の核心語として使われる。",
      derivatives: [
        { word: "processor",    desc: "処理装置・プロセッサー（名詞）" },
        { word: "processing",   desc: "処理・加工（名詞）" },
        { word: "procession",   desc: "行列・行進（名詞）" }
      ],
      family: [
        { word: "proceed",   desc: "進む（pro-: 前へ行く）" },
        { word: "succeed",   desc: "成功する（sub-: 後に来る）" },
        { word: "exceed",    desc: "超える（ex-: 外へ出る）" },
        { word: "access",    desc: "アクセス（ad-: 〜へ近づく）" },
        { word: "recession", desc: "景気後退（re-: 後退する）" },
        { word: "procedure", desc: "手順・手術（pro+cedere）" }
      ],
      compounds: [
        { phrase: "manufacturing process", desc: "製造工程" },
        { phrase: "due process",           desc: "適正手続き（法律）" },
        { phrase: "work in process",       desc: "仕掛品・進行中の作業" }
      ]
    },

    "access": {
      origin: "ラテン語 accessus（近づくこと）< accedere（〜へ近づく）< ad-（〜へ）+ cedere（行く）の名詞形。「ある場所・情報へ近づく経路・権限」が原義で、物理的アクセスから情報・デジタルアクセスまで使われる。\n\naccess to（〜へのアクセス・利用権）は現代の人権論でも中心語（access to education, access to healthcare）。accessible（近づきやすい・利用可能な）はユニバーサルデザインの核心概念で、wheelchair accessible（車椅子対応）のように使われる。",
      derivatives: [
        { word: "accessible",    desc: "アクセス可能な・近づきやすい（形容詞）" },
        { word: "accessibility", desc: "アクセシビリティ・利用可能性（名詞）" },
        { word: "inaccessible",  desc: "近づけない・利用できない（形容詞）" }
      ],
      family: [
        { word: "proceed",   desc: "進む（pro-: 前へ行く）" },
        { word: "succeed",   desc: "成功する（sub-: 後に来る）" },
        { word: "exceed",    desc: "超える（ex-: 外へ出る）" },
        { word: "recession", desc: "景気後退（re-: 後退する）" },
        { word: "process",   desc: "過程・処理する（pro-+cessus）" },
        { word: "accede",    desc: "同意する・即位する（同根）" }
      ],
      compounds: [
        { phrase: "access to",          desc: "〜へのアクセス・利用権" },
        { phrase: "internet access",    desc: "インターネット接続" },
        { phrase: "accessible design",  desc: "アクセシブルデザイン" }
      ]
    },

    "recession": {
      origin: "ラテン語 recessio（後退すること）< recedere（後ろへ引く）< re-（後ろへ）+ cedere（行く）の名詞形。「前進の逆：後退・退縮」が原義で、経済・地理・生物学で使われる。\n\n経済学では「2四半期以上連続の GDP マイナス成長」を recession と定義する。hairline is receding（生え際が後退する）のように日常的な「後退」にも recede を使う。recess（休憩・議会休会・壁のくぼみ）も同根で「引きこもる空間・時間」。",
      derivatives: [
        { word: "recede",           desc: "後退する・引く（動詞）" },
        { word: "recess",           desc: "休憩・休会・くぼみ（名詞）" },
        { word: "recessionary",     desc: "景気後退の（形容詞）" },
        { word: "recession-proof",  desc: "不況に強い（形容詞）" }
      ],
      family: [
        { word: "proceed",  desc: "進む（pro-: 前へ行く）" },
        { word: "succeed",  desc: "成功する（sub-: 後に来る）" },
        { word: "exceed",   desc: "超える（ex-: 外へ出る）" },
        { word: "access",   desc: "アクセス（ad-: 〜へ近づく）" },
        { word: "process",  desc: "過程・処理する" },
        { word: "concede",  desc: "認める・譲歩する（con-: 共に引く）" }
      ],
      compounds: [
        { phrase: "economic recession",  desc: "経済不況" },
        { phrase: "in recession",        desc: "不況の最中で" },
        { phrase: "hit by recession",    desc: "不況に打撃を受ける" }
      ]
    },

    // ── sentire / sensus系 ───────────────────────────────────────────────────
    "sense": {
      origin: "ラテン語 sensus（感覚・知覚・意味）< sentire（感じる）の名詞形。印欧語根 *sent-（向かう・感じ取る）に由来。「感覚・知覚・常識・意味」と多義的で、英語の中で最も基本的な名詞の一つ。\n\nfive senses（五感）・common sense（常識・これは共通の感覚）・make sense（意味をなす）は日常英語の基本表現。nonsense（無意味なこと）は non-（否定）+ sense。sensory（感覚の）・sensitivity（感受性）も同根。",
      derivatives: [
        { word: "sensory",      desc: "感覚の（形容詞）" },
        { word: "sensible",     desc: "賢明な・分別のある（形容詞）" },
        { word: "sensitive",    desc: "敏感な・繊細な（形容詞）" },
        { word: "sensitivity",  desc: "感受性・敏感さ（名詞）" },
        { word: "sensational",  desc: "センセーショナルな（形容詞）" }
      ],
      family: [
        { word: "consent",   desc: "同意する（con-: 共に感じる）" },
        { word: "dissent",   desc: "異議を唱える（dis-: 別に感じる）" },
        { word: "sensation", desc: "感覚・センセーション（sentire の名詞）" },
        { word: "resent",    desc: "憤慨する（re-: 強く感じ返す）" },
        { word: "sentiment", desc: "感情・心情（sentire+ment）" }
      ],
      compounds: [
        { phrase: "make sense",    desc: "意味をなす・理解できる" },
        { phrase: "common sense",  desc: "常識・一般的な感覚" },
        { phrase: "sense of humor", desc: "ユーモアのセンス" }
      ]
    },

    "consent": {
      origin: "ラテン語 consentire（共に感じる・同意する）< con-（共に）+ sentire（感じる）。「同じ感覚・感情を共有する」→「合意する・同意する」に特化した。単なる「OK」以上の、積極的な同意のニュアンスを持つ。\n\nconsensus（コンセンサス・合意形成）は「共に感じること」の集合状態。informed consent（インフォームド・コンセント）は医療倫理の中心概念で「十分な説明を受けた上での自発的同意」を指し、現代医療の基本原則。",
      derivatives: [
        { word: "consensus",   desc: "合意・コンセンサス（名詞）" },
        { word: "consensual",  desc: "合意に基づいた（形容詞）" }
      ],
      family: [
        { word: "sense",     desc: "感覚・意味（sentire の名詞形）" },
        { word: "dissent",   desc: "異議を唱える（dis-: 別に感じる）" },
        { word: "sensation", desc: "感覚・センセーション" },
        { word: "resent",    desc: "憤慨する（re-: 強く感じ返す）" },
        { word: "assent",    desc: "同意する（ad-: 〜に向けて感じる）" }
      ],
      compounds: [
        { phrase: "informed consent",   desc: "インフォームド・コンセント" },
        { phrase: "age of consent",     desc: "性的同意年齢" },
        { phrase: "by mutual consent",  desc: "相互の同意のもとに" }
      ]
    },

    "dissent": {
      origin: "ラテン語 dissentire（別々に感じる・意見が合わない）< dis-（バラバラに・反対に）+ sentire（感じる）。「主流とは異なる感覚・意見を持つ」→「異議を唱える・反対意見を持つ」に特化した政治・哲学・法律用語。\n\ndissenter（反対意見者）は17世紀イングランドで英国国教会から分かれたピューリタンなどの非国教徒を指した歴史語。裁判では dissenting opinion（反対意見書）として少数意見が記録される。",
      derivatives: [
        { word: "dissenter",   desc: "反対意見者・非国教徒（名詞）" },
        { word: "dissension",  desc: "不和・内紛（名詞）" },
        { word: "dissident",   desc: "反体制派・反体制の（名詞・形容詞）" }
      ],
      family: [
        { word: "sense",     desc: "感覚・意味（sentire の名詞形）" },
        { word: "consent",   desc: "同意する（con-: 共に感じる）" },
        { word: "sensation", desc: "感覚・センセーション" },
        { word: "resent",    desc: "憤慨する（re-: 強く感じ返す）" },
        { word: "assent",    desc: "同意する（ad-: 〜に向けて感じる）" }
      ],
      compounds: [
        { phrase: "dissent from",        desc: "〜に異議を唱える" },
        { phrase: "dissenting opinion",  desc: "反対意見書（法律）" },
        { phrase: "voice dissent",       desc: "反対意見を表明する" }
      ]
    },

    "sensation": {
      origin: "中世ラテン語 sensatio（感覚体験）< sentire（感じる）の名詞形。「身体的・精神的に強く感じること・感覚体験」が原義で、「世間を騒がせるほど強い感覚」→「センセーション（大評判・衝撃的な出来事）」に比喩的に拡張された。\n\nsensational（センセーショナルな・驚くべき）は「強い感覚を引き起こすほどの」意。sensationalism（センセーショナリズム：刺激的な話題でメディアが視聴者を惹きつける手法）はメディア批判でよく使われる用語。",
      derivatives: [
        { word: "sensational",    desc: "センセーショナルな・驚くべき（形容詞）" },
        { word: "sensationally",  desc: "センセーショナルに（副詞）" },
        { word: "sensationalism", desc: "センセーショナリズム（名詞）" },
        { word: "sensationalize", desc: "センセーショナルに扱う（動詞）" }
      ],
      family: [
        { word: "sense",    desc: "感覚・意味（sentire の名詞形）" },
        { word: "consent",  desc: "同意する（con-: 共に感じる）" },
        { word: "dissent",  desc: "異議を唱える（dis-: 別に感じる）" },
        { word: "resent",   desc: "憤慨する（re-: 強く感じ返す）" },
        { word: "sentiment", desc: "感情・心情（sentire+ment）" }
      ],
      compounds: [
        { phrase: "cause a sensation",   desc: "大評判になる・センセーションを起こす" },
        { phrase: "sensational news",    desc: "センセーショナルなニュース" },
        { phrase: "a burning sensation", desc: "灼熱感・ほてり" }
      ]
    },

    // ── ponere / positum系 ───────────────────────────────────────────────────
    "compose": {
      origin: "ラテン語 componere（共に置く・配置する）< com-（共に）+ ponere（置く）。英語には古フランス語 composer を経て入り、「別々の要素を共に置いて一つにまとめる」→「作曲する・構成する・文章を書く・心を落ち着かせる」に発展した。\n\ncomposer（作曲家）は「音を共に置いて作品にする人」。be composed of（〜から構成される）は受動態で多用される。composure（落ち着き・平静）は「感情を共に置いてまとめた状態」。composite（複合の）は「共に置かれたもの」。",
      derivatives: [
        { word: "composer",     desc: "作曲家（名詞）" },
        { word: "composition",  desc: "作曲・構成・作文（名詞）" },
        { word: "composure",    desc: "落ち着き・平静心（名詞）" },
        { word: "composite",    desc: "複合の・合成の（形容詞）" },
        { word: "decompose",    desc: "分解する・腐敗する（動詞）" }
      ],
      family: [
        { word: "oppose",    desc: "反対する（ob-: 前に置く）" },
        { word: "expose",    desc: "さらす（ex-: 外に置く）" },
        { word: "impose",    desc: "課す（in-: 上に置く）" },
        { word: "component", desc: "構成要素（com+ponere の分詞）" },
        { word: "dispose",   desc: "処分する（dis-: バラバラに置く）" },
        { word: "position",  desc: "位置・立場（ponere の名詞）" }
      ],
      compounds: [
        { phrase: "compose music",          desc: "音楽を作曲する" },
        { phrase: "be composed of",         desc: "〜から構成される" },
        { phrase: "composure under pressure", desc: "プレッシャー下での冷静さ" }
      ]
    },

    "oppose": {
      origin: "ラテン語 opponere（前に置く・立ちはだかる）< ob-（前に・向かって）+ ponere（置く）。「相手の前に自分を置く」→「反対する・対立する」に特化した。\n\nopponent（対戦相手・反対者）は「前に置かれた人」。opposite（反対側の）・opposition（反対・野党）も同根。the opposition（野党・反対勢力）は議会政治の基本語で、政府と「向かい合うように置かれた勢力」を指す。",
      derivatives: [
        { word: "opponent",    desc: "対戦相手・反対者（名詞）" },
        { word: "opposition",  desc: "反対・野党（名詞）" },
        { word: "opposite",    desc: "反対の・対面の（形容詞・名詞）" },
        { word: "opposing",    desc: "対立する・反対の（形容詞）" }
      ],
      family: [
        { word: "compose",   desc: "構成する（com-: 共に置く）" },
        { word: "expose",    desc: "さらす（ex-: 外に置く）" },
        { word: "impose",    desc: "課す（in-: 上に置く）" },
        { word: "component", desc: "構成要素（com+ponere の分詞）" },
        { word: "dispose",   desc: "処分する（dis-: バラバラに置く）" },
        { word: "position",  desc: "位置・立場（ponere の名詞）" }
      ],
      compounds: [
        { phrase: "oppose a bill",   desc: "法案に反対する" },
        { phrase: "opposition party", desc: "野党" },
        { phrase: "face opposition", desc: "反対に直面する" }
      ]
    },

    "expose": {
      origin: "ラテン語 exponere（外に置く・説明する）< ex-（外へ）+ ponere（置く）。「外に置いて見えるようにする」→「さらす・暴露する・（写真を）露光する」に発展した。\n\nexposure（露出・暴露・被ばく）は写真・医学・ジャーナリズムで使われる。an exposé（暴露記事・スキャンダル報道）はフランス語由来の借用語でアクセント符号を保持。exposition（博覧会・解説・提示部）は「外に置いて見せる」展示の意で、音楽ソナタ形式の「提示部」にも使われる。",
      derivatives: [
        { word: "exposure",    desc: "露出・暴露・被ばく（名詞）" },
        { word: "exposé",      desc: "暴露記事・スキャンダル報道（名詞）" },
        { word: "exposition",  desc: "博覧会・解説・提示部（名詞）" },
        { word: "overexpose",  desc: "過剰露出する（動詞）" }
      ],
      family: [
        { word: "compose",   desc: "構成する（com-: 共に置く）" },
        { word: "oppose",    desc: "反対する（ob-: 前に置く）" },
        { word: "impose",    desc: "課す（in-: 上に置く）" },
        { word: "component", desc: "構成要素（com+ponere）" },
        { word: "dispose",   desc: "処分する（dis-: バラバラに置く）" }
      ],
      compounds: [
        { phrase: "expose to",          desc: "〜にさらす・〜にふれさせる" },
        { phrase: "media exposure",     desc: "メディア露出・報道" },
        { phrase: "long exposure",      desc: "長時間露光（写真）" }
      ]
    },

    "impose": {
      origin: "ラテン語 imponere（上に置く・課す）< in-（上に・中に）+ ponere（置く）。「相手の上に重みを置く」→「義務・税・制裁・罰を課す」に特化した。\n\nimpose on（〜に迷惑をかける: 自分の重みを相手の上に置く）・impose sanctions（制裁を課す）・impose a fine（罰金を科す）は政治・外交・法律で頻出。imposing（威圧的な・壮大な）は「見る者の上に圧倒的な重みを置くような」建物・人物を表す形容詞。",
      derivatives: [
        { word: "imposition",  desc: "課税・押しつけ・迷惑（名詞）" },
        { word: "imposing",    desc: "威圧的な・堂々たる（形容詞）" },
        { word: "imposingly",  desc: "堂々と（副詞）" }
      ],
      family: [
        { word: "compose",   desc: "構成する（com-: 共に置く）" },
        { word: "oppose",    desc: "反対する（ob-: 前に置く）" },
        { word: "expose",    desc: "さらす（ex-: 外に置く）" },
        { word: "component", desc: "構成要素（com+ponere）" },
        { word: "dispose",   desc: "処分する（dis-: バラバラに置く）" },
        { word: "position",  desc: "位置・立場（ponere の名詞）" }
      ],
      compounds: [
        { phrase: "impose sanctions",  desc: "制裁を課す" },
        { phrase: "impose a fine",     desc: "罰金を科す" },
        { phrase: "impose on someone", desc: "〜に迷惑をかける" }
      ]
    },

    "component": {
      origin: "ラテン語 componere（共に置く・組み立てる）の現在分詞 componens（組み立てている）が名詞化した形。「共に置かれてひとつの全体を成す部品・要素」→「構成要素・成分・コンポーネント」を指す。\n\nelectronic components（電子部品）・key component（重要な構成要素）・chemical components（化学成分）と多分野で使われる。principal component analysis（主成分分析）は統計・機械学習の基本手法。",
      derivatives: [
        { word: "componentize", desc: "コンポーネント化する（IT用語）" }
      ],
      family: [
        { word: "compose",  desc: "構成する（com-: 共に置く）" },
        { word: "oppose",   desc: "反対する（ob-: 前に置く）" },
        { word: "expose",   desc: "さらす（ex-: 外に置く）" },
        { word: "impose",   desc: "課す（in-: 上に置く）" },
        { word: "dispose",  desc: "処分する（dis-: バラバラに置く）" },
        { word: "position", desc: "位置・立場（ponere の名詞）" }
      ],
      compounds: [
        { phrase: "key component",            desc: "重要な構成要素" },
        { phrase: "component parts",          desc: "構成部品" },
        { phrase: "principal component analysis", desc: "主成分分析（統計）" }
      ]
    },

    // ── stāre / status系 ─────────────────────────────────────────────────────
    "state": {
      origin: "ラテン語 status（立っていること・状態・地位）< stāre（立つ）の名詞形。印欧語根 *stā-（立つ）に由来し、stand（立つ）・stable（安定した）とも同根。「立っている状態・様子」→「状態・地位・国家（固定的に存在するもの）」と「述べる・表明する（立場を明確にする）」に広がった。\n\nstate of the art（現時点で技術が立っている地点→最先端）は重要成句。statement（声明・陳述）は法的・政治的文書で必須語。the State（国家）と state（アメリカの州）は大文字の有無で区別する。",
      derivatives: [
        { word: "statement",  desc: "声明・陳述・明細書（名詞）" },
        { word: "statesman",  desc: "政治家・国家指導者（名詞）" },
        { word: "statehood",  desc: "州としての地位・独立国家の地位（名詞）" },
        { word: "stately",    desc: "堂々とした・威厳ある（形容詞）" }
      ],
      family: [
        { word: "station",    desc: "駅・局・拠点（stāre の場所名詞）" },
        { word: "establish",  desc: "設立する（ex+stabilire: しっかり立てる）" },
        { word: "constitute", desc: "構成する（con+statuere: 共に立て定める）" },
        { word: "status",     desc: "地位・状態（stāre の名詞）" },
        { word: "stable",     desc: "安定した（stabilis: 立ち続ける）" },
        { word: "distance",   desc: "距離（dis+stāre: 離れて立つ）" }
      ],
      compounds: [
        { phrase: "state of mind",     desc: "精神状態" },
        { phrase: "state of the art",  desc: "最先端の" },
        { phrase: "make a statement",  desc: "声明を出す・主張する" }
      ]
    },

    "station": {
      origin: "ラテン語 statio（立っている場所・宿営地）< stāre（立つ）の場所名詞形。「固定して立っている場所」→「駅・放送局・ポスト（職務）・天文台」に広がった。\n\nstation（駅）はもとは「馬を替えるために固定した中継地点（posting station）」を指した。radio station（ラジオ局）・police station（警察署）・space station（宇宙ステーション）と多様な「固定拠点」に使われる。be stationed（駐留する・配属される）は軍事・職場で使われる動詞形。",
      derivatives: [
        { word: "stationary",  desc: "静止した・固定した（形容詞）" },
        { word: "stationery",  desc: "文房具・便箋（名詞; stationary と混同注意）" },
        { word: "stationed",   desc: "駐留している・配属された（形容詞）" }
      ],
      family: [
        { word: "state",      desc: "状態・国家・述べる（stāre の名詞形）" },
        { word: "establish",  desc: "設立する（ex+stabilire）" },
        { word: "constitute", desc: "構成する（con+statuere）" },
        { word: "status",     desc: "地位・状態（stāre の名詞）" },
        { word: "stable",     desc: "安定した（stabilis: 立ち続ける）" }
      ],
      compounds: [
        { phrase: "train station",    desc: "鉄道駅" },
        { phrase: "station yourself", desc: "〜に位置につく・陣取る" },
        { phrase: "space station",    desc: "宇宙ステーション" }
      ]
    },

    "establish": {
      origin: "ラテン語 stabilire（固定する・安定させる）< stabilis（安定した）< stāre（立つ）に接頭辞 ex-（強意・しっかりと）を加えた形が古フランス語 establir を経て英語に入った。「揺るがないようにしっかりと固定する」→「設立する・確立する・証明する」に発展した。\n\nestablishment（機関・設立）は The Establishment（既成体制・権力機構）という政治的意味も持つ。well-established（確立した・定評のある）・establish a fact（事実を証明する）は学術でも使われる。",
      derivatives: [
        { word: "establishment",   desc: "機関・設立・既成体制（名詞）" },
        { word: "well-established", desc: "確立した・定評のある（形容詞）" },
        { word: "re-establish",    desc: "再建する・再確立する（動詞）" }
      ],
      family: [
        { word: "state",      desc: "状態・国家・述べる（stāre の名詞形）" },
        { word: "station",    desc: "駅・拠点（stāre の場所名詞）" },
        { word: "constitute", desc: "構成する（con+statuere）" },
        { word: "status",     desc: "地位・状態（stāre の名詞）" },
        { word: "stable",     desc: "安定した（stabilis）" },
        { word: "instance",   desc: "事例（in+stāre: 上に立つもの）" }
      ],
      compounds: [
        { phrase: "establish a company",  desc: "会社を設立する" },
        { phrase: "well-established",     desc: "確立した・定評のある" },
        { phrase: "the Establishment",    desc: "既成体制・権力機構" }
      ]
    },

    "constitute": {
      origin: "ラテン語 constituere（共に立て定める・設置する）< con-（共に）+ statuere（立てる・定める）< stāre（立つ）。「複数の要素を共に立て定めて全体を構成する」→「構成する・設立する・（法的に）規定する」に特化した。\n\nconstitution（憲法・構成・体質）は「国家を立て定めるもの」。constitutional（憲法上の・体質的な）は法学の基本語。constitute a crime（犯罪を構成する）・constitute a majority（過半数を構成する）は法律・統計の定型表現。",
      derivatives: [
        { word: "constitution",      desc: "憲法・構成・体質（名詞）" },
        { word: "constitutional",    desc: "憲法上の・体質的な（形容詞）" },
        { word: "unconstitutional",  desc: "違憲の（形容詞）" },
        { word: "reconstitute",      desc: "再構成する・粉を水で溶く（動詞）" }
      ],
      family: [
        { word: "state",      desc: "状態・国家・述べる（stāre の名詞形）" },
        { word: "station",    desc: "駅・拠点（stāre の場所名詞）" },
        { word: "establish",  desc: "設立する（ex+stabilire）" },
        { word: "status",     desc: "地位・状態（stāre の名詞）" },
        { word: "institute",  desc: "機関・設立する（in+statuere）" },
        { word: "statute",    desc: "成文法・制定法（statuere の名詞）" }
      ],
      compounds: [
        { phrase: "constitute a crime",    desc: "犯罪を構成する" },
        { phrase: "constitution day",      desc: "憲法記念日" },
        { phrase: "constitutional law",    desc: "憲法学・憲法上の法律" }
      ]
    },

    // ── tendere / tensus系 ───────────────────────────────────────────────────
    "attend": {
      origin: "ラテン語 attendere（〜へ伸ばす・注意を向ける）< ad-（〜へ）+ tendere（伸ばす・張る）。「注意の糸を相手へ向けて伸ばす」→「出席する・参加する・付き添う」に発展した。\n\nattend と attention は同根で、attention（注意）は「〜へ向けて伸ばされた意識の状態」。attend to（〜に対処する）は緊急の事項への注意を意味する。Pay attention!（注目！）は授業・会議での必須フレーズ。",
      derivatives: [
        { word: "attention",   desc: "注意・注目（名詞）" },
        { word: "attendance",  desc: "出席・出席率（名詞）" },
        { word: "attendant",   desc: "付き添い人・係員（名詞）" },
        { word: "attentive",   desc: "注意深い・気配りのある（形容詞）" }
      ],
      family: [
        { word: "extend",   desc: "延長する（ex-: 外へ伸ばす）" },
        { word: "intend",   desc: "意図する（in-: 中へ向ける）" },
        { word: "intense",  desc: "強烈な（in+tensus: 強く張られた）" },
        { word: "contend",  desc: "争う・主張する（con-: 共に張り合う）" },
        { word: "pretend",  desc: "ふりをする（prae-: 前へ伸ばす）" },
        { word: "tension",  desc: "緊張・張力（tendere の名詞）" }
      ],
      compounds: [
        { phrase: "attend a meeting",   desc: "会議に出席する" },
        { phrase: "pay attention",      desc: "注意を払う" },
        { phrase: "attendance record",  desc: "出席記録" }
      ]
    },

    "extend": {
      origin: "ラテン語 extendere（外へ伸ばす）< ex-（外へ）+ tendere（伸ばす・張る）。「限界の外へ伸ばす」→「延長する・拡大する・（手を）差し伸べる」に発展した。\n\nextension（延長・拡張・電話の内線）・extensive（広範な）・extent（程度・範囲）は同根。to some extent（ある程度）は必須表現。extend a deadline（締め切りを延ばす）・extend an offer（申し出を延長する）は職場で頻出。",
      derivatives: [
        { word: "extension",   desc: "延長・拡張・内線・延長コード（名詞）" },
        { word: "extensive",   desc: "広範な・大規模な（形容詞）" },
        { word: "extensively", desc: "広範に・大規模に（副詞）" },
        { word: "extent",      desc: "程度・範囲（名詞）" }
      ],
      family: [
        { word: "attend",   desc: "出席する（ad-: 〜へ伸ばす）" },
        { word: "intend",   desc: "意図する（in-: 中へ向ける）" },
        { word: "intense",  desc: "強烈な（in+tensus: 強く張られた）" },
        { word: "contend",  desc: "争う・主張する（con-: 共に張り合う）" },
        { word: "tension",  desc: "緊張・張力（tendere の名詞）" }
      ],
      compounds: [
        { phrase: "extend a deadline",    desc: "締め切りを延ばす" },
        { phrase: "to some extent",       desc: "ある程度" },
        { phrase: "extensive research",   desc: "広範な調査" }
      ]
    },

    "intend": {
      origin: "ラテン語 intendere（中へ向ける・集中する）< in-（中へ）+ tendere（伸ばす）。「注意の糸を目標に向けて内側へ伸ばす」→「意図する・〜するつもりだ」に特化した。\n\nintention（意図）は行為の法的・道徳的評価で重要（criminal intent: 犯意）。"The road to hell is paved with good intentions."（地獄への道は善意で舗装されている）は有名な格言。intended audience（想定読者・対象者）は文章・マーケティングの基本概念。",
      derivatives: [
        { word: "intention",    desc: "意図・目的（名詞）" },
        { word: "intentional",  desc: "意図的な（形容詞）" },
        { word: "intentionally", desc: "意図的に（副詞）" },
        { word: "unintended",   desc: "意図せぬ（形容詞）" },
        { word: "intended",     desc: "意図した・対象の（形容詞）" }
      ],
      family: [
        { word: "attend",   desc: "出席する（ad-: 〜へ伸ばす）" },
        { word: "extend",   desc: "延長する（ex-: 外へ伸ばす）" },
        { word: "intense",  desc: "強烈な（in+tensus: 強く張られた）" },
        { word: "contend",  desc: "争う・主張する（con-: 共に張り合う）" },
        { word: "pretend",  desc: "ふりをする（prae-: 前へ伸ばす）" }
      ],
      compounds: [
        { phrase: "intend to do",          desc: "〜するつもりだ" },
        { phrase: "with good intentions",  desc: "善意で" },
        { phrase: "intended audience",     desc: "想定読者・対象者" }
      ]
    },

    "intense": {
      origin: "ラテン語 intensus（強く引き伸ばされた）< intendere（内側へ向ける）< in-（中へ）+ tendere（伸ばす）の完了分詞。「弦が限界まで引き伸ばされた」状態から「強烈な・集中した」の意味が生まれた。\n\nintensity（強度・激しさ）・intensive（集中的な）・intensify（強化する）は科学・ビジネス・感情の文脈で広く使われる。intensive care（集中治療）は医療の重要語。intensive farming（集約農業）は食料生産の文脈で使われる。",
      derivatives: [
        { word: "intensity",        desc: "強度・激しさ（名詞）" },
        { word: "intensive",        desc: "集中的な・集約的な（形容詞）" },
        { word: "intensify",        desc: "強化する・激しくなる（動詞）" },
        { word: "intensely",        desc: "強烈に・激しく（副詞）" },
        { word: "intensification",  desc: "強化・激化（名詞）" }
      ],
      family: [
        { word: "attend",   desc: "出席する（ad-: 〜へ伸ばす）" },
        { word: "extend",   desc: "延長する（ex-: 外へ伸ばす）" },
        { word: "intend",   desc: "意図する（in-: 中へ向ける）" },
        { word: "contend",  desc: "争う・主張する（con-: 共に張り合う）" },
        { word: "tension",  desc: "緊張・張力（tendere の名詞）" },
        { word: "tense",    desc: "緊張した・時制（tensus の形容詞）" }
      ],
      compounds: [
        { phrase: "intense pressure",   desc: "強烈なプレッシャー" },
        { phrase: "intensive care",     desc: "集中治療（ICU）" },
        { phrase: "intensify efforts",  desc: "努力を強化する" }
      ]
    },

    // ── volvere / volutus系 ──────────────────────────────────────────────────
    "evolve": {
      origin: "ラテン語 evolvere（外へ転がり出す・展開する）< ex-（外へ）+ volvere（転がす・巻く）。「巻かれた巻物を外へ転がして展開する」→「段階的に発展・進化する」に特化した。ダーウィンの進化論（theory of evolution）で一気に重要語となった。\n\nevolution（進化・発展）は生物学だけでなく「技術の進化」「音楽スタイルの変遷」など広く使われる。evolutionary（進化的な）・evolving（進化しつつある）も必須語。software that continues to evolve（進化し続けるソフトウェア）のように現代のビジネス文脈でも頻用される。",
      derivatives: [
        { word: "evolution",    desc: "進化・発展・展開（名詞）" },
        { word: "evolutionary", desc: "進化的な・漸進的な（形容詞）" },
        { word: "evolving",     desc: "進化しつつある・変化しつつある（形容詞）" }
      ],
      family: [
        { word: "revolve",     desc: "回転する（re-: 転がり戻る）" },
        { word: "involve",     desc: "巻き込む（in-: 中へ巻く）" },
        { word: "revolution",  desc: "革命・一回転（re+volvere の名詞）" },
        { word: "volume",      desc: "巻本・音量（volvere: 巻かれたもの）" },
        { word: "convolve",    desc: "合成積をとる（数学・信号処理）" }
      ],
      compounds: [
        { phrase: "evolve over time",       desc: "時間とともに進化する" },
        { phrase: "theory of evolution",    desc: "進化論" },
        { phrase: "evolutionary process",   desc: "進化のプロセス" }
      ]
    },

    "revolve": {
      origin: "ラテン語 revolvere（転がり戻る・周回する）< re-（再び・戻って）+ volvere（転がす）。「出発点へ転がり戻ってくる＝回転する」が原義で、「軌道を周回する・中心の周りを回る」に特化した。\n\nrevolver（リボルバー拳銃）は弾倉が「回転する」機構から命名。revolving door（回転ドア）は建築用語でも「人材が出入りし続ける組織」の比喩でも使われる。"Everything revolves around money."（すべては金次第）は慣用的な比喩表現。",
      derivatives: [
        { word: "revolving",  desc: "回転する・循環する（形容詞）" },
        { word: "revolver",   desc: "回転式拳銃（名詞）" },
        { word: "revolution", desc: "一回転・革命（名詞）" }
      ],
      family: [
        { word: "evolve",     desc: "進化する（ex-: 外へ転がり出す）" },
        { word: "involve",    desc: "巻き込む（in-: 中へ巻く）" },
        { word: "revolution", desc: "革命・一回転（re+volvere の名詞）" },
        { word: "volume",     desc: "巻本・音量（巻かれたもの）" }
      ],
      compounds: [
        { phrase: "revolving door",    desc: "回転ドア・出入りが激しい組織（比喩）" },
        { phrase: "revolve around",    desc: "〜を中心に回る・〜中心に動く" },
        { phrase: "revolving credit",  desc: "リボルビングクレジット（金融）" }
      ]
    },

    "involve": {
      origin: "ラテン語 involvere（中へ巻き込む・包む）< in-（中へ）+ volvere（巻く・転がす）。「中へ巻き込んで内部の一部にする」→「〜を含む・〜に関与させる・巻き込まれる」に発展した。\n\ninvolvement（関与・参与）は積極的な参加から否定的な「巻き込まれ」まで表す。be involved in（〜に関与している）は職場・事件・恋愛など多様な文脈で使われる重要構文。involved（複雑に絡み合った）は "a complex and involved process"（複雑に絡み合ったプロセス）のように形容詞としても使われる。",
      derivatives: [
        { word: "involvement",  desc: "関与・参与・関わり（名詞）" },
        { word: "involved",     desc: "関与した・複雑な（形容詞）" }
      ],
      family: [
        { word: "evolve",      desc: "進化する（ex-: 外へ転がり出す）" },
        { word: "revolve",     desc: "回転する（re-: 転がり戻る）" },
        { word: "revolution",  desc: "革命・一回転（re+volvere の名詞）" },
        { word: "volume",      desc: "巻本・音量（巻かれたもの）" }
      ],
      compounds: [
        { phrase: "be involved in",      desc: "〜に関与している・〜に巻き込まれている" },
        { phrase: "get involved",        desc: "関与する・付き合い始める" },
        { phrase: "community involvement", desc: "地域への関与・地域活動" }
      ]
    },

    "revolution": {
      origin: "ラテン語 revolutio（転がり戻ること・一回転）< revolvere（転がり戻る）の名詞形。「天体が軌道を一周すること（公転）」が原義。コペルニクスが『天球の回転について』（De revolutionibus, 1543）の書名に使った後、「体制を根本から回転させる変革」→「革命」の意味が生まれた。\n\nthe French Revolution（フランス革命）・the Industrial Revolution（産業革命）は固有名詞化した歴史用語。revolutions per minute（rpm: 毎分回転数）はエンジン・モーターの仕様表記で使われる。",
      derivatives: [
        { word: "revolutionary",   desc: "革命的な・画期的な（形容詞・名詞）" },
        { word: "revolutionize",   desc: "革命的に変える（動詞）" },
        { word: "revolutionist",   desc: "革命家（名詞）" }
      ],
      family: [
        { word: "evolve",   desc: "進化する（ex-: 外へ転がり出す）" },
        { word: "revolve",  desc: "回転する（re-: 転がり戻る）" },
        { word: "involve",  desc: "巻き込む（in-: 中へ巻く）" },
        { word: "volume",   desc: "巻本・音量（巻かれたもの）" }
      ],
      compounds: [
        { phrase: "industrial revolution",   desc: "産業革命" },
        { phrase: "revolutionary change",    desc: "革命的変化" },
        { phrase: "revolutions per minute",  desc: "毎分回転数（rpm）" }
      ]
    },

    // ── mittere / missus系（残り）────────────────────────────────────────────
    "mission": {
      origin: "ラテン語 missio（送ること・放つこと）< mittere（送る・放つ）の名詞形。「使命を帯びて送り出される任務・その任務を担う人々」が原義で、宗教的な「布教活動」から軍事・航空宇宙の「任務」まで広く使われる。\n\nMission Impossible（ミッション：インポッシブル）は不可能な任務の代名詞として文化的に定着した。mission statement（使命声明文）は組織の目的を言語化したもの。missionary（宣教師）は「使命を帯びて送り出された人」が原義。",
      derivatives: [
        { word: "missionary",       desc: "宣教師・布教の（名詞・形容詞）" },
        { word: "mission-critical", desc: "任務遂行に不可欠な（形容詞）" }
      ],
      family: [
        { word: "dismiss",  desc: "解散させる（dis-: バラバラに送る）" },
        { word: "permit",   desc: "許可する（per-: 通して送る）" },
        { word: "emit",     desc: "放出する（ex-: 外へ送る）" },
        { word: "promise",  desc: "約束する（pro-: 前へ送る）" },
        { word: "submit",   desc: "提出する（sub-: 下へ送る）" },
        { word: "transmit", desc: "伝達する（trans-: 向こうへ送る）" }
      ],
      compounds: [
        { phrase: "mission statement",   desc: "使命声明文" },
        { phrase: "on a mission",        desc: "使命に燃えている・任務中で" },
        { phrase: "mission accomplished", desc: "任務完了" }
      ]
    },

    "dismiss": {
      origin: "ラテン語 dimittere（バラバラに送り出す・解放する）< dis-（バラバラに）+ mittere（送る）。「一か所に集まった人たちをそれぞれの方向へ送り出す」→「解散させる・退場させる・却下する・解雇する」に発展した。\n\ndismiss a class（授業を終える）・dismiss an employee（解雇する）・dismiss a case（訴えを却下する）と多様な「送り出す」文脈で使われる。dismissal（解雇・却下・解散）は法律・人事用語として重要。dismissive（人を見下した・軽視する）は態度を表す形容詞。",
      derivatives: [
        { word: "dismissal",   desc: "解雇・却下・解散（名詞）" },
        { word: "dismissive",  desc: "人を軽視した・見下した（形容詞）" },
        { word: "dismissively", desc: "軽蔑的に（副詞）" }
      ],
      family: [
        { word: "mission",  desc: "任務・使命（mittere の名詞）" },
        { word: "permit",   desc: "許可する（per-: 通して送る）" },
        { word: "emit",     desc: "放出する（ex-: 外へ送る）" },
        { word: "promise",  desc: "約束する（pro-: 前へ送る）" },
        { word: "submit",   desc: "提出する（sub-: 下へ送る）" }
      ],
      compounds: [
        { phrase: "dismiss a case",       desc: "訴えを却下する" },
        { phrase: "dismissive attitude",  desc: "軽視する態度" },
        { phrase: "summary dismissal",    desc: "即時解雇" }
      ]
    },

    "permit": {
      origin: "ラテン語 permittere（通して送る・通過させる）< per-（通して・完全に）+ mittere（送る）。「通り道を開いて通過させる」→「許可する・許す」に特化した。\n\n名詞と動詞で発音が変わる：名詞（許可証）は /ˈpɜːmɪt/（前強勢）、動詞（許可する）は /pəˈmɪt/（後強勢）。work permit（労働許可証）・building permit（建築許可）は行政手続きの基本語。permission（許可）はより口語的・日常的に使われる名詞形。",
      derivatives: [
        { word: "permission",   desc: "許可・承認（名詞）" },
        { word: "permissive",   desc: "寛大な・放任的な（形容詞）" },
        { word: "permissible",  desc: "許可できる・許される（形容詞）" }
      ],
      family: [
        { word: "mission",  desc: "任務・使命（mittere の名詞）" },
        { word: "dismiss",  desc: "解散させる（dis-: バラバラに送る）" },
        { word: "emit",     desc: "放出する（ex-: 外へ送る）" },
        { word: "promise",  desc: "約束する（pro-: 前へ送る）" },
        { word: "submit",   desc: "提出する（sub-: 下へ送る）" },
        { word: "commit",   desc: "委ねる・約束する（com-: 共に送る）" }
      ],
      compounds: [
        { phrase: "work permit",      desc: "労働許可証" },
        { phrase: "building permit",  desc: "建築許可" },
        { phrase: "permit to do",     desc: "〜することを許可する" }
      ]
    },

    "emit": {
      origin: "ラテン語 emittere（外へ送り出す）< ex-（外へ）+ mittere（送る）。「内部から外へ放出する」→「光・熱・音・ガスを放出する・発する」に特化した。\n\nemission（排出・放出）は CO₂ emission（二酸化炭素排出量）として環境問題の核心語。zero-emission vehicle（排出ゼロ車）・emission trading（排出権取引）・carbon emissions（炭素排出量）は気候変動対策の基本語彙として21世紀に重要性が急増した。",
      derivatives: [
        { word: "emission",   desc: "排出・放出・放射（名詞）" },
        { word: "emissions",  desc: "排出量（複数形で慣用）" },
        { word: "emitter",    desc: "発光体・排出源（名詞）" }
      ],
      family: [
        { word: "mission",  desc: "任務・使命（mittere の名詞）" },
        { word: "dismiss",  desc: "解散させる（dis-: バラバラに送る）" },
        { word: "permit",   desc: "許可する（per-: 通して送る）" },
        { word: "promise",  desc: "約束する（pro-: 前へ送る）" },
        { word: "submit",   desc: "提出する（sub-: 下へ送る）" },
        { word: "transmit", desc: "伝達する（trans-: 向こうへ送る）" }
      ],
      compounds: [
        { phrase: "carbon emissions",   desc: "炭素排出量" },
        { phrase: "emit light",         desc: "光を発する" },
        { phrase: "zero-emission",      desc: "排出ゼロの" }
      ]
    },

    "promise": {
      origin: "ラテン語 promittere（前へ送り出す・前もって言う）< pro-（前へ）+ mittere（送る）。「将来に向けて言葉を送り出す」→「約束する・確約する」に特化した。\n\npromising（有望な）は「良い未来を前へ送り出している力がある」意。"A promise is a promise."（約束は約束だ）は英語圏でよく使われる表現。the Promised Land（約束の地）は旧約聖書の表現で「神が約束した土地」を指す。",
      derivatives: [
        { word: "promising",   desc: "有望な・将来性のある（形容詞）" },
        { word: "promised",    desc: "約束された（形容詞）" }
      ],
      family: [
        { word: "mission",  desc: "任務・使命（mittere の名詞）" },
        { word: "dismiss",  desc: "解散させる（dis-: バラバラに送る）" },
        { word: "permit",   desc: "許可する（per-: 通して送る）" },
        { word: "emit",     desc: "放出する（ex-: 外へ送る）" },
        { word: "submit",   desc: "提出する（sub-: 下へ送る）" },
        { word: "commit",   desc: "委ねる・約束する（com-: 共に送る）" }
      ],
      compounds: [
        { phrase: "keep a promise",   desc: "約束を守る" },
        { phrase: "break a promise",  desc: "約束を破る" },
        { phrase: "promising talent", desc: "有望な才能" }
      ]
    },

    // ── pellere / pulsus系 ───────────────────────────────────────────────────
    "compel": {
      origin: "ラテン語 compellere（共に追い立てる・強制する）< com-（強意・完全に）+ pellere（押す・追い立てる）。「力を集中させて押し動かす」→「強制する・余儀なくさせる」に特化した。\n\ncompelling（説得力のある・強烈な）は「抵抗できない力で押してくる」意で、compelling evidence（圧倒的な証拠）・compelling story（引き込まれる物語）のように肯定的な強さの表現として使われる。compulsory（強制的な・義務的な）は compellere の同根語。",
      derivatives: [
        { word: "compelling",   desc: "説得力のある・強烈な（形容詞）" },
        { word: "compulsion",   desc: "強制・衝動（名詞）" },
        { word: "compulsory",   desc: "強制的な・義務の（形容詞）" },
        { word: "compelled",    desc: "余儀なくされた（形容詞）" }
      ],
      family: [
        { word: "expel",    desc: "追放する（ex-: 外へ追い出す）" },
        { word: "repel",    desc: "撃退する（re-: 押し返す）" },
        { word: "impulse",  desc: "衝動（in-: 内から押す力）" },
        { word: "pulse",    desc: "脈拍（pellere: 打ち続ける動き）" },
        { word: "propel",   desc: "推進する（pro-: 前へ押す）" }
      ],
      compounds: [
        { phrase: "compelling argument",   desc: "説得力のある論拠" },
        { phrase: "feel compelled to",     desc: "〜せずにはいられない" },
        { phrase: "compulsory education",  desc: "義務教育" }
      ]
    },

    "expel": {
      origin: "ラテン語 expellere（外へ追い出す）< ex-（外へ）+ pellere（押す・追い立てる）。「押して外へ出す」→「追放する・退学処分にする・気体を排出する」に特化した。\n\nexpulsion（追放・退学・排出）は法律・教育・物理の三文脈で使われる。expel a student（退学にする）・expel a diplomat（外交官を国外追放する）・expel air from the lungs（肺から空気を吐き出す）と多様な「外へ押し出す」文脈で使われる。",
      derivatives: [
        { word: "expulsion",  desc: "追放・退学・排出（名詞）" },
        { word: "expelled",   desc: "追放された・退学になった（形容詞）" }
      ],
      family: [
        { word: "compel",   desc: "強制する（com-: 力を集めて押す）" },
        { word: "repel",    desc: "撃退する（re-: 押し返す）" },
        { word: "impulse",  desc: "衝動（in-: 内から押す力）" },
        { word: "pulse",    desc: "脈拍（pellere: 打ち続ける動き）" },
        { word: "propel",   desc: "推進する（pro-: 前へ押す）" }
      ],
      compounds: [
        { phrase: "expel from school",  desc: "退学にする" },
        { phrase: "expel a diplomat",   desc: "外交官を国外追放する" },
        { phrase: "expulsion order",    desc: "退去命令・退学処分書" }
      ]
    },

    "repel": {
      origin: "ラテン語 repellere（押し返す）< re-（戻して）+ pellere（押す）。「近づいてくるものを押し返す」→「撃退する・はじく・不快感を与える」に特化した。\n\nrepellent（虫除け・忌避剤）は「虫を押し返すもの」。repulsive（嫌悪感を与える）は同根の repulsus（押し返された）から。water-repellent（撥水加工の）は「水を押しのける」材料特性を表し、アウトドア用品の基本スペック語。",
      derivatives: [
        { word: "repellent",   desc: "虫除け・忌避剤・不快な（名詞・形容詞）" },
        { word: "repulsion",   desc: "嫌悪・反発・斥力（名詞）" },
        { word: "repulsive",   desc: "嫌悪感を与える（形容詞）" }
      ],
      family: [
        { word: "compel",   desc: "強制する（com-: 力を集めて押す）" },
        { word: "expel",    desc: "追放する（ex-: 外へ追い出す）" },
        { word: "impulse",  desc: "衝動（in-: 内から押す力）" },
        { word: "pulse",    desc: "脈拍（pellere: 打ち続ける動き）" },
        { word: "propel",   desc: "推進する（pro-: 前へ押す）" }
      ],
      compounds: [
        { phrase: "insect repellent",  desc: "虫除け剤" },
        { phrase: "water-repellent",   desc: "撥水加工の" },
        { phrase: "find repulsive",    desc: "〜を嫌悪する" }
      ]
    },

    "impulse": {
      origin: "ラテン語 impulsus（内側へ押された力）< impellere（中へ押す）< in-（中へ）+ pellere（押す）の名詞形。「内側から外へ向かって押してくる力・衝撃」が原義で、心理学（衝動）から物理学（力積）・神経科学（神経インパルス）まで使われる。\n\non impulse（衝動的に・突発的に）は日常でよく使われる副詞句。impulse buying（衝動買い）・impulse control（衝動制御）は心理・消費行動の重要語。nerve impulse（神経インパルス）は神経から筋肉への電気的信号を指す。",
      derivatives: [
        { word: "impulsive",     desc: "衝動的な（形容詞）" },
        { word: "impulsively",   desc: "衝動的に（副詞）" },
        { word: "impulsiveness", desc: "衝動性（名詞）" }
      ],
      family: [
        { word: "compel",  desc: "強制する（com-: 力を集めて押す）" },
        { word: "expel",   desc: "追放する（ex-: 外へ追い出す）" },
        { word: "repel",   desc: "撃退する（re-: 押し返す）" },
        { word: "pulse",   desc: "脈拍（pellere: 打ち続ける動き）" },
        { word: "propel",  desc: "推進する（pro-: 前へ押す）" }
      ],
      compounds: [
        { phrase: "on impulse",       desc: "衝動的に・とっさに" },
        { phrase: "impulse buying",   desc: "衝動買い" },
        { phrase: "impulse control",  desc: "衝動制御" }
      ]
    },

    "pulse": {
      origin: "ラテン語 pulsus（打つこと・脈打ち）< pellere（押す・打つ）の名詞形。「規則的に打ち続ける動き」→「脈拍・鼓動・（音楽の）拍・電気パルス信号」に広がった。\n\ntake a pulse（脈を測る）は医療の基本動作。have one's finger on the pulse（世の動向を把握している）は時代の動きを「脈として感じ取る」慣用句。パルスオキシメーター（pulse oximeter）・パルス信号（pulse signal）は医療・電子工学の基本語。",
      derivatives: [
        { word: "pulsate",    desc: "脈打つ・鼓動する（動詞）" },
        { word: "pulsating",  desc: "脈打つ・鼓動する・活気のある（形容詞）" },
        { word: "pulsation",  desc: "脈動・鼓動（名詞）" }
      ],
      family: [
        { word: "compel",   desc: "強制する（com-: 力を集めて押す）" },
        { word: "expel",    desc: "追放する（ex-: 外へ追い出す）" },
        { word: "repel",    desc: "撃退する（re-: 押し返す）" },
        { word: "impulse",  desc: "衝動（in-: 内から押す力）" },
        { word: "propel",   desc: "推進する（pro-: 前へ押す）" }
      ],
      compounds: [
        { phrase: "take a pulse",              desc: "脈を測る" },
        { phrase: "finger on the pulse",       desc: "世の動向を把握している" },
        { phrase: "pulse oximeter",            desc: "パルスオキシメーター" }
      ]
    },

    // ── vertere / versus系 ───────────────────────────────────────────────────
    "convert": {
      origin: "ラテン語 convertere（完全に向き直す）< con-（完全に）+ vertere（向ける・回す）。「完全に別の方向へ向け直す」→「変換する・改宗する・転向する」に特化した。\n\n名詞（改宗者・コンバート選手）は /ˈkɒnvɜːt/（前強勢）、動詞は /kənˈvɜːt/（後強勢）と発音が変わる。currency converter（通貨換算機）・convert a file（ファイルを変換する）はデジタル用語として頻出。conversion rate（コンバージョン率）はマーケティングの核心指標。",
      derivatives: [
        { word: "conversion",    desc: "変換・改宗・コンバージョン（名詞）" },
        { word: "converter",     desc: "変換器・コンバーター（名詞）" },
        { word: "convertible",   desc: "変換可能な・オープンカー（形容詞・名詞）" }
      ],
      family: [
        { word: "diverse",    desc: "多様な（di-: バラバラに向いた）" },
        { word: "reverse",    desc: "逆にする（re-: 後ろへ向ける）" },
        { word: "universe",   desc: "宇宙（uni-: 一つに向かった全体）" },
        { word: "introvert",  desc: "内向型の人（intro-: 内側へ向ける）" },
        { word: "divert",     desc: "そらす・転用する（di-: 別の方向へ）" },
        { word: "avert",      desc: "そらす・防ぐ（a-: 離れる方向へ）" }
      ],
      compounds: [
        { phrase: "convert to",          desc: "〜に変換する・〜に改宗する" },
        { phrase: "currency converter",  desc: "通貨換算機" },
        { phrase: "conversion rate",     desc: "コンバージョン率・改宗率" }
      ]
    },

    "diverse": {
      origin: "ラテン語 diversus（異なる方向に向いた）< divertere（別の方向へ向ける）< di-/dis-（バラバラに）+ vertere（向ける）の完了分詞。「それぞれが異なる方向を向いている」→「多様な・さまざまな」に特化した。\n\ndiversity（多様性）・diversify（多様化する）は21世紀の企業・社会政策の核心語。DEI（Diversity, Equity, Inclusion: 多様性・公平性・包括性）の D がこの語。biodiversity（生物多様性）は環境保全の最重要概念。",
      derivatives: [
        { word: "diversity",       desc: "多様性（名詞）" },
        { word: "diversify",       desc: "多様化する・分散させる（動詞）" },
        { word: "diversification", desc: "多様化・分散投資（名詞）" },
        { word: "diversely",       desc: "多様に（副詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con-: 完全に向き直す）" },
        { word: "reverse",    desc: "逆にする（re-: 後ろへ向ける）" },
        { word: "universe",   desc: "宇宙（uni-: 一つに向かった全体）" },
        { word: "introvert",  desc: "内向型の人（intro-: 内側へ向ける）" },
        { word: "divert",     desc: "そらす・転用する（di-: 別の方向へ）" }
      ],
      compounds: [
        { phrase: "diverse range",          desc: "多様な種類" },
        { phrase: "cultural diversity",     desc: "文化的多様性" },
        { phrase: "diversify investments",  desc: "投資を分散させる" }
      ]
    },

    "reverse": {
      origin: "ラテン語 reversus（後ろに向けられた）< revertere（後ろへ向き直す）< re-（後ろへ）+ vertere（向ける）の完了分詞。「後ろを向く・逆方向に向ける」→「逆にする・後退する・（判決を）覆す」に発展した。\n\nin reverse（逆に・後退して）・reverse a decision（決定を覆す）・reverse psychology（逆説的説得: 逆のことを言って相手に本来望む行動をとらせる心理技法）は日常・法律・心理学で使われる。",
      derivatives: [
        { word: "reversal",     desc: "逆転・撤回（名詞）" },
        { word: "reversible",   desc: "可逆の・両面使える（形容詞）" },
        { word: "irreversible", desc: "不可逆の・取り消せない（形容詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con-: 完全に向き直す）" },
        { word: "diverse",    desc: "多様な（di-: バラバラに向いた）" },
        { word: "universe",   desc: "宇宙（uni-: 一つに向かった全体）" },
        { word: "introvert",  desc: "内向型の人（intro-: 内側へ向ける）" },
        { word: "avert",      desc: "そらす・防ぐ（a-: 離れる方向へ）" }
      ],
      compounds: [
        { phrase: "in reverse",           desc: "逆に・後退して" },
        { phrase: "reverse a decision",   desc: "決定を覆す" },
        { phrase: "reverse psychology",   desc: "逆説的説得" }
      ]
    },

    "universe": {
      origin: "ラテン語 universum（すべてのものが一つに向けられたもの）< uni-（一つの）+ versus（向けられた）< vertere（向ける）の完了分詞。「すべてが一つの方向を向いている・すべてが一体となった全体」→「宇宙・万物・全世界」に特化した。\n\nuniversal（普遍的な）・university（大学：すべての学問を収める場所）も同根。parallel universe（平行宇宙）は物理学・SFの重要概念。universe of possibilities（可能性の宇宙）のような比喩的用法も多い。",
      derivatives: [
        { word: "universal",    desc: "普遍的な・全員に共通の（形容詞）" },
        { word: "universally",  desc: "普遍的に・世界中で（副詞）" },
        { word: "universalize", desc: "普遍化する（動詞）" },
        { word: "university",   desc: "大学（universum: 全学問の場）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con-: 完全に向き直す）" },
        { word: "diverse",    desc: "多様な（di-: バラバラに向いた）" },
        { word: "reverse",    desc: "逆にする（re-: 後ろへ向ける）" },
        { word: "introvert",  desc: "内向型の人（intro-: 内側へ向ける）" },
        { word: "divert",     desc: "そらす・転用する（di-: 別の方向へ）" }
      ],
      compounds: [
        { phrase: "the known universe",        desc: "観測可能な宇宙" },
        { phrase: "universal design",          desc: "ユニバーサルデザイン" },
        { phrase: "universe of possibilities", desc: "無限の可能性" }
      ]
    },

    "introvert": {
      origin: "近代ラテン語 introvertere（内側へ向ける）< intrō-（内側へ）+ vertere（向ける）。「意識・関心を内側へ向ける人」→「内向型の人」に特化した心理学用語。スイスの心理学者カール・グスタフ・ユングが1921年に extrovert（外向型）との対比で提唱した概念。\n\nintroversion（内向性）は性格特性の一次元として現代心理学の基礎概念。introvert と shy（内気）は異なり、introvert は刺激を求めない・一人の時間で英気を養う傾向を指す。ambivert（両向型）は近年使われるようになった語。",
      derivatives: [
        { word: "introversion",   desc: "内向性（名詞）" },
        { word: "introverted",    desc: "内向的な（形容詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con-: 完全に向き直す）" },
        { word: "diverse",    desc: "多様な（di-: バラバラに向いた）" },
        { word: "reverse",    desc: "逆にする（re-: 後ろへ向ける）" },
        { word: "universe",   desc: "宇宙（uni-: 一つに向かった全体）" },
        { word: "extrovert",  desc: "外向型の人（extro-: 外側へ向ける）" }
      ],
      compounds: [
        { phrase: "introvert personality",  desc: "内向型の性格" },
        { phrase: "introverted behavior",   desc: "内向的な行動" },
        { phrase: "ambivert",               desc: "両向型（内向と外向の中間）" }
      ]
    },

    // ── currere / cursus系 ───────────────────────────────────────────────────
    "current": {
      origin: "ラテン語 currens（走っている）< currere（走る）の現在分詞が形容詞・名詞として定着した。「今この瞬間を流れ動いている」→「現在の・最新の」（形容詞）と「水・電気の流れ」（名詞）に発展した。\n\ncurrent events（時事問題）・current account（当座預金・経常収支）・alternating current（交流）・direct current（直流）は多様な「流れ」の概念。currency（通貨・流通）は「現在流れているもの」が原義。",
      derivatives: [
        { word: "currency",       desc: "通貨・流通・流行（名詞）" },
        { word: "currently",      desc: "現在・今のところ（副詞）" },
        { word: "current affairs", desc: "時事問題（慣用句）" },
        { word: "undercurrent",   desc: "底流・潜在する傾向（名詞）" }
      ],
      family: [
        { word: "occur",       desc: "起こる（ob-: 向かって走ってくる）" },
        { word: "recur",       desc: "再発する（re-: 戻って走る）" },
        { word: "curriculum",  desc: "カリキュラム（走るコース）" },
        { word: "excursion",   desc: "遠足（ex-: 外へ走り出る）" },
        { word: "concur",      desc: "同意する（con-: 共に走る）" },
        { word: "cursor",      desc: "カーソル（currere: 走るもの）" }
      ],
      compounds: [
        { phrase: "current events",      desc: "時事問題" },
        { phrase: "alternating current", desc: "交流（AC）" },
        { phrase: "currency exchange",   desc: "両替・外貨交換" }
      ]
    },

    "occur": {
      origin: "ラテン語 occurrere（向かって走ってくる・出会う）< ob-（向かって）+ currere（走る）。「こちらへ向かって走ってくる」→「（出来事が）起こる・（考えが）浮かぶ」に発展した。\n\noccurrence（出来事・発生）は「向かって走ってきたもの」。"It occurs to me that..."（〜と気づく）は「考えが自分の方へ走ってくる」比喩。naturally occurring（自然に発生する）は化学・生物学で頻出の表現。",
      derivatives: [
        { word: "occurrence",  desc: "出来事・発生・頻度（名詞）" },
        { word: "recurring",   desc: "繰り返し発生する（形容詞）" }
      ],
      family: [
        { word: "current",    desc: "現在の・流れ（currens: 走っている）" },
        { word: "recur",      desc: "再発する（re-: 戻って走る）" },
        { word: "curriculum", desc: "カリキュラム（走るコース）" },
        { word: "excursion",  desc: "遠足（ex-: 外へ走り出る）" },
        { word: "concur",     desc: "同意する（con-: 共に走る）" }
      ],
      compounds: [
        { phrase: "it occurs to me",   desc: "〜と気づく・思いつく" },
        { phrase: "natural occurrence", desc: "自然発生" },
        { phrase: "if it occurs",      desc: "それが起きたら" }
      ]
    },

    "recur": {
      origin: "ラテン語 recurrere（戻って走る・繰り返す）< re-（戻って）+ currere（走る）。「同じ場所・状態へ戻って走る」→「繰り返し起こる・再発する」に特化した。\n\nrecurrence（再発・繰り返し）は医学（cancer recurrence: がんの再発）・数学（recurrence relation: 漸化式）で使われる。recurring dream（繰り返し見る夢）・recurring theme（繰り返し出てくるテーマ）は日常でも使われる。",
      derivatives: [
        { word: "recurrence",   desc: "再発・繰り返し（名詞）" },
        { word: "recurring",    desc: "繰り返し発生する（形容詞）" },
        { word: "recurrent",    desc: "再発性の・繰り返しの（形容詞）" },
        { word: "recurrently",  desc: "繰り返して（副詞）" }
      ],
      family: [
        { word: "current",    desc: "現在の・流れ（currens: 走っている）" },
        { word: "occur",      desc: "起こる（ob-: 向かって走ってくる）" },
        { word: "curriculum", desc: "カリキュラム（走るコース）" },
        { word: "excursion",  desc: "遠足（ex-: 外へ走り出る）" },
        { word: "concur",     desc: "同意する（con-: 共に走る）" }
      ],
      compounds: [
        { phrase: "recurring dream",      desc: "繰り返し見る夢" },
        { phrase: "recurrence rate",      desc: "再発率（医学・統計）" },
        { phrase: "recurrence relation",  desc: "漸化式（数学）" }
      ]
    },

    "curriculum": {
      origin: "ラテン語 curriculum（走るコース・馬車が走る円形競技場）< currere（走る）の名詞形。「学生が走り抜ける（修了する）学習コース」→「カリキュラム・学習課程」の意味で17世紀に教育用語として英語に借用された。\n\ncurriculum vitae（履歴書、略称 CV）は「人生のコースを歩んできた記録」を意味するラテン語フレーズで、イギリス圏・ヨーロッパでは履歴書の標準呼称。extracurricular（課外の）・core curriculum（中核カリキュラム）も同根。",
      derivatives: [
        { word: "curricular",       desc: "カリキュラムの（形容詞）" },
        { word: "extracurricular",  desc: "課外の（形容詞）" },
        { word: "co-curricular",    desc: "正課に準じる活動の（形容詞）" }
      ],
      family: [
        { word: "current",    desc: "現在の・流れ（currens: 走っている）" },
        { word: "occur",      desc: "起こる（ob-: 向かって走ってくる）" },
        { word: "recur",      desc: "再発する（re-: 戻って走る）" },
        { word: "excursion",  desc: "遠足（ex-: 外へ走り出る）" },
        { word: "cursor",     desc: "カーソル（currere: 走るもの）" }
      ],
      compounds: [
        { phrase: "curriculum vitae",         desc: "履歴書（CV）" },
        { phrase: "core curriculum",          desc: "中核カリキュラム" },
        { phrase: "extracurricular activities", desc: "課外活動" }
      ]
    },

    "excursion": {
      origin: "ラテン語 excursio（外へ走り出ること）< excurrere（外へ走る）< ex-（外へ）+ currere（走る）の名詞形。「日常の場所から外へ走り出る」→「遠足・小旅行・（話題からの）脱線」に特化した。\n\nday excursion（日帰り旅行）・shore excursion（寄港地観光）はツーリズムの基本語。学術書では excursus（余談・脱線した考察）というラテン語形がそのまま使われることもある。excursionist（遠足参加者・観光客）も派生語。",
      derivatives: [
        { word: "excursionist", desc: "遠足参加者・観光客（名詞）" }
      ],
      family: [
        { word: "current",    desc: "現在の・流れ（currens: 走っている）" },
        { word: "occur",      desc: "起こる（ob-: 向かって走ってくる）" },
        { word: "recur",      desc: "再発する（re-: 戻って走る）" },
        { word: "curriculum", desc: "カリキュラム（走るコース）" },
        { word: "concur",     desc: "同意する（con-: 共に走る）" }
      ],
      compounds: [
        { phrase: "day excursion",    desc: "日帰り旅行" },
        { phrase: "shore excursion",  desc: "寄港地観光（クルーズ用語）" },
        { phrase: "go on an excursion", desc: "遠足・小旅行に行く" }
      ]
    },

    // ── vocare / vox系 ───────────────────────────────────────────────────────
    "vocal": {
      origin: "ラテン語 vocalis（声の・声を出す）< vox（声）の形容詞形。「声に関する・声を使う」が原義で、「（人が意見を）積極的に声に出す・声楽の」に広がった。\n\nvocal cords（声帯）・vocal music（声楽）は音楽・医学の基本語。"Be vocal about your concerns."（懸念を積極的に表明しなさい）のように「声を上げることをためらわない」意味でも使われる。vocalist（ボーカリスト）・vocalize（声にする）も同根。",
      derivatives: [
        { word: "vocalist",     desc: "ボーカリスト・歌手（名詞）" },
        { word: "vocalize",     desc: "声にする・発声する（動詞）" },
        { word: "vocally",      desc: "声高に・積極的に（副詞）" },
        { word: "vocalization", desc: "発声・音声化（名詞）" }
      ],
      family: [
        { word: "vocation",  desc: "天職（vocare: 神に呼ばれた職業）" },
        { word: "evoke",     desc: "呼び起こす（ex-: 外へ呼び出す）" },
        { word: "provoke",   desc: "挑発する（pro-: 前へ呼び出す）" },
        { word: "revoke",    desc: "取り消す（re-: 呼び戻す）" },
        { word: "advocate",  desc: "擁護する（ad-: 〜へ呼ぶ）" },
        { word: "vocabulary", desc: "語彙（vox: 声・言葉の集まり）" }
      ],
      compounds: [
        { phrase: "vocal cords",    desc: "声帯" },
        { phrase: "vocal about",    desc: "〜について声高に言う" },
        { phrase: "lead vocalist",  desc: "リードボーカル" }
      ]
    },

    "vocation": {
      origin: "ラテン語 vocatio（呼ぶこと・召命）< vocare（呼ぶ）の名詞形。「神から呼ばれること・召命」が原義で、宗教的文脈から「天職・使命感を持って向かう職業」に広がった。\n\nvocation と occupation（職業）の違いは、vocation が「使命感・内なる呼び声に従った職業」の内面的側面を強調する点。vocational training（職業訓練）・vocational school（職業学校）は実務教育の用語として重要。",
      derivatives: [
        { word: "vocational",   desc: "職業の・職業訓練の（形容詞）" },
        { word: "vocationally", desc: "職業的に（副詞）" }
      ],
      family: [
        { word: "vocal",      desc: "声の・積極的に意見を言う（vox の形容詞）" },
        { word: "evoke",      desc: "呼び起こす（ex-: 外へ呼び出す）" },
        { word: "provoke",    desc: "挑発する（pro-: 前へ呼び出す）" },
        { word: "revoke",     desc: "取り消す（re-: 呼び戻す）" },
        { word: "advocate",   desc: "擁護する（ad-: 〜へ呼ぶ）" },
        { word: "vocabulary", desc: "語彙（vox: 声・言葉の集まり）" }
      ],
      compounds: [
        { phrase: "vocational training",  desc: "職業訓練" },
        { phrase: "sense of vocation",    desc: "天職意識・使命感" },
        { phrase: "vocational school",    desc: "職業学校・専門学校" }
      ]
    },

    "evoke": {
      origin: "ラテン語 evocare（外へ呼び出す）< ex-（外へ）+ vocare（呼ぶ）。「内に眠っているものを外へ呼び出す」→「（感情・記憶・イメージを）呼び起こす」に特化した。\n\nevocative（喚起力のある）は「強く呼び起こす力がある」意。evoke memories（記憶を呼び起こす）・evoke a response（反応を引き出す）は文学・心理学・マーケティングで使われる。smell evokes memories（匂いが記憶を呼び起こす）は神経科学的な現象（プルースト効果）としても有名。",
      derivatives: [
        { word: "evocative",   desc: "喚起力のある・強く呼び起こす（形容詞）" },
        { word: "evocatively", desc: "喚起力豊かに（副詞）" },
        { word: "evocation",   desc: "喚起・呼び起こし（名詞）" }
      ],
      family: [
        { word: "vocal",     desc: "声の・積極的に意見を言う" },
        { word: "vocation",  desc: "天職（神に呼ばれた職業）" },
        { word: "provoke",   desc: "挑発する（pro-: 前へ呼び出す）" },
        { word: "revoke",    desc: "取り消す（re-: 呼び戻す）" },
        { word: "advocate",  desc: "擁護する（ad-: 〜へ呼ぶ）" }
      ],
      compounds: [
        { phrase: "evoke memories",    desc: "記憶を呼び起こす" },
        { phrase: "evoke a response",  desc: "反応を引き起こす" },
        { phrase: "evocative imagery", desc: "喚起力のあるイメージ" }
      ]
    },

    "provoke": {
      origin: "ラテン語 provocare（前へ呼び出す・挑む）< pro-（前へ）+ vocare（呼ぶ）。「相手を前へ呼び出して挑む」→「怒りを引き起こす・(反応・思考を)促す」に発展した。\n\nprovocative（挑発的な・刺激的な）は否定的（provoke anger: 怒りを煽る）にも肯定的（provoke thought: 思考を促す）にも使われる。thought-provoking（示唆に富む・考えさせられる）は文学・ジャーナリズムで重要な複合形容詞。",
      derivatives: [
        { word: "provocation",     desc: "挑発・刺激（名詞）" },
        { word: "provocative",     desc: "挑発的な・刺激的な（形容詞）" },
        { word: "provocatively",   desc: "挑発的に（副詞）" },
        { word: "thought-provoking", desc: "示唆に富む・考えさせる（形容詞）" }
      ],
      family: [
        { word: "vocal",    desc: "声の・積極的に意見を言う" },
        { word: "vocation", desc: "天職（神に呼ばれた職業）" },
        { word: "evoke",    desc: "呼び起こす（ex-: 外へ呼び出す）" },
        { word: "revoke",   desc: "取り消す（re-: 呼び戻す）" },
        { word: "advocate", desc: "擁護する（ad-: 〜へ呼ぶ）" }
      ],
      compounds: [
        { phrase: "provoke a reaction",  desc: "反応を引き起こす" },
        { phrase: "thought-provoking",   desc: "示唆に富む・考えさせる" },
        { phrase: "without provocation", desc: "挑発なしに・不当に" }
      ]
    },

    "revoke": {
      origin: "ラテン語 revocare（呼び戻す・取り消す）< re-（戻して）+ vocare（呼ぶ）。「一度声で発したものを呼び戻す」→「取り消す・撤回する・廃止する」に特化した法律・行政用語。\n\n免許・資格・権限・法律を「取り消す」場面で使われる。irrevocable（取り消せない・不可逆の）は法律文書・外交でよく使われる重要形容詞。an irrevocable decision（取り消せない決断）のように重大な判断の最終性を強調する。",
      derivatives: [
        { word: "revocation",   desc: "取り消し・廃止（名詞）" },
        { word: "irrevocable",  desc: "取り消せない・不可逆の（形容詞）" },
        { word: "irrevocably",  desc: "取り消せないほど（副詞）" }
      ],
      family: [
        { word: "vocal",    desc: "声の・積極的に意見を言う" },
        { word: "vocation", desc: "天職（神に呼ばれた職業）" },
        { word: "evoke",    desc: "呼び起こす（ex-: 外へ呼び出す）" },
        { word: "provoke",  desc: "挑発する（pro-: 前へ呼び出す）" },
        { word: "advocate", desc: "擁護する（ad-: 〜へ呼ぶ）" }
      ],
      compounds: [
        { phrase: "revoke a license",     desc: "免許を取り消す" },
        { phrase: "irrevocable decision", desc: "取り消せない決断" },
        { phrase: "revocation order",     desc: "取り消し命令" }
      ]
    },

    // ── gratus系 ─────────────────────────────────────────────────────────────
    "grateful": {
      origin: "ラテン語 gratus（喜ばれる・感謝された）< 印欧語根 *gwer-（賛美する・喜ぶ）に由来。gratus に英語の形容詞語尾 -ful を付けた混合形。grace（優雅・神の恵み）も同根で、gratus の「神から好まれた・恵まれた」が転じて「感謝する心」に発展した。\n\n"I'm grateful for..."（〜に感謝している）は日常英語の重要表現。gratefully received（ありがたく受け取る）は改まった文脈で使われる。ungrateful（恩知らずの）は un- で否定した形。",
      derivatives: [
        { word: "gratefully",    desc: "感謝して（副詞）" },
        { word: "gratefulness",  desc: "感謝の気持ち（名詞）" },
        { word: "ungrateful",    desc: "恩知らずの（形容詞）" },
        { word: "ungratefully",  desc: "恩知らずに（副詞）" }
      ],
      family: [
        { word: "gratitude",     desc: "感謝（gratus の状態名詞）" },
        { word: "congratulate",  desc: "祝いを言う（con-: 共に喜ぶ）" },
        { word: "grace",         desc: "優雅・恵み（gratus と同根）" },
        { word: "gracious",      desc: "優雅な・親切な（gratia+ous）" },
        { word: "gratify",       desc: "満足させる・喜ばせる（gratus+fy）" }
      ],
      compounds: [
        { phrase: "grateful for",       desc: "〜に感謝している" },
        { phrase: "eternally grateful", desc: "永遠に感謝している" },
        { phrase: "grateful heart",     desc: "感謝の心" }
      ]
    },

    "gratitude": {
      origin: "ラテン語 gratitudo（感謝の気持ちの状態）< gratus（喜ばれる・感謝された）に状態を表す接尾辞 -tudo を付けた形。「感謝している状態・心」が原義で、grateful（形容詞）の名詞形にあたる。\n\ngratitude journal（感謝日記）はポジティブ心理学の実践法として近年注目されている。express gratitude（感謝を表す）・deep gratitude（深い感謝）は書き言葉でよく使われる表現。ingratitude（恩知らず）は in- で否定した形。",
      derivatives: [
        { word: "ingratitude", desc: "恩知らず・感謝のなさ（名詞）" }
      ],
      family: [
        { word: "grateful",     desc: "感謝している（gratus+ful）" },
        { word: "congratulate", desc: "祝いを言う（con-: 共に喜ぶ）" },
        { word: "grace",        desc: "優雅・恵み（gratus と同根）" },
        { word: "gracious",     desc: "優雅な・親切な" },
        { word: "gratify",      desc: "満足させる・喜ばせる" }
      ],
      compounds: [
        { phrase: "express gratitude",  desc: "感謝を表す" },
        { phrase: "show gratitude",     desc: "感謝を示す" },
        { phrase: "gratitude journal",  desc: "感謝日記（ポジティブ心理学）" }
      ]
    },

    "congratulate": {
      origin: "ラテン語 congratulari（共に喜ぶ）< con-（共に）+ gratus（喜ばれる）+ -ari（動詞語尾）。「共に喜ぶ・一緒に良かったと思う」が原義で、「祝いを言う・称える」に特化した。\n\ncongratulations!（おめでとう！）は英語圏の祝福の定型表現で、結婚・誕生・昇進・卒業など多様な場面で使われる。congratulatory message（祝辞）・congratulatory speech（お祝いスピーチ）は公式の場での形容詞形として重要。",
      derivatives: [
        { word: "congratulations",   desc: "おめでとう（感嘆詞・名詞）" },
        { word: "congratulatory",    desc: "祝いの・祝賀の（形容詞）" }
      ],
      family: [
        { word: "grateful",   desc: "感謝している（gratus+ful）" },
        { word: "gratitude",  desc: "感謝（gratus の状態名詞）" },
        { word: "grace",      desc: "優雅・恵み（gratus と同根）" },
        { word: "gracious",   desc: "優雅な・親切な" },
        { word: "gratify",    desc: "満足させる・喜ばせる" }
      ],
      compounds: [
        { phrase: "congratulations!",      desc: "おめでとう！" },
        { phrase: "congratulatory speech", desc: "お祝いスピーチ" },
        { phrase: "congratulate on",       desc: "〜を祝う" }
      ]
    },

    // ── animus / anima系 ─────────────────────────────────────────────────────
    "animate": {
      origin: "ラテン語 animare（命を吹き込む・生かす）< animus（魂・命・心・精神）。「生命・魂を吹き込む」→「生き生きさせる・活気づける・アニメーションを作る」に発展した。アニメーション（animation）の語源でもある。\n\nanimated film（アニメ映画）の「アニメ」は「動きの中に命を吹き込む」技術から命名された。inanimate（生命のない）は in- で否定した形で、inanimate objects（無生物）のように使われる。animated discussion（活発な議論）は感情が吹き込まれた「生き生きした」議論を指す。",
      derivatives: [
        { word: "animation",  desc: "アニメーション・活気（名詞）" },
        { word: "animator",   desc: "アニメーター（名詞）" },
        { word: "animated",   desc: "アニメの・活発な（形容詞）" },
        { word: "inanimate",  desc: "生命のない・無生物の（形容詞）" }
      ],
      family: [
        { word: "unanimous",  desc: "満場一致の（uni-: 一つの魂）" },
        { word: "animal",     desc: "動物（anima: 命あるもの）" },
        { word: "animosity",  desc: "敵意（animus: 怒った心）" },
        { word: "magnanimous", desc: "寛大な（magna+animus: 大きな心）" }
      ],
      compounds: [
        { phrase: "animated film",       desc: "アニメ映画" },
        { phrase: "animated discussion", desc: "活発な議論" },
        { phrase: "suspend animation",   desc: "仮死状態（SF用語）" }
      ]
    },

    "unanimous": {
      origin: "ラテン語 unanimus（一つの魂を持つ・完全に一致した）< uni-（一つ）+ animus（魂・心）。「全員が一つの心を持っている」→「満場一致の」に特化した。\n\na unanimous decision（満場一致の決定）・unanimous vote（全会一致の投票）は民主的意思決定の最も強力な表現。unanimously（全員一致で）は "the motion was passed unanimously"（動議は全会一致で可決された）のように議事録でよく使われる。",
      derivatives: [
        { word: "unanimously", desc: "全員一致で・満場一致で（副詞）" },
        { word: "unanimity",   desc: "全会一致・満場一致（名詞）" }
      ],
      family: [
        { word: "animate",    desc: "生き生きさせる（animus: 命）" },
        { word: "animal",     desc: "動物（anima: 命あるもの）" },
        { word: "animosity",  desc: "敵意（animus: 怒った心）" },
        { word: "unity",      desc: "統一（uni-: 一つ）" }
      ],
      compounds: [
        { phrase: "unanimous decision",  desc: "満場一致の決定" },
        { phrase: "voted unanimously",   desc: "全会一致で投票された" },
        { phrase: "near-unanimous",      desc: "ほぼ全会一致の" }
      ]
    },

    // ── vita / vivere系 ──────────────────────────────────────────────────────
    "vital": {
      origin: "ラテン語 vitalis（命に関わる）< vita（命・生命）< vivere（生きる）の名詞形に形容詞語尾 -alis を付けた形。「生命に直結する」→「絶対不可欠な・活力ある」に発展した。\n\nvital signs（バイタルサイン：体温・脈拍・血圧・呼吸数など生命の指標）・vital role（不可欠な役割）・it is vital that（〜することが絶対必要だ）は医療・ビジネスの必須表現。vitality（生命力・活力）も同根。",
      derivatives: [
        { word: "vitality",    desc: "生命力・活力・活気（名詞）" },
        { word: "vitalize",    desc: "活力を与える（動詞）" },
        { word: "vital signs", desc: "バイタルサイン（慣用句）" }
      ],
      family: [
        { word: "survive",    desc: "生き延びる（super+vivere: 超えて生きる）" },
        { word: "vivid",      desc: "鮮やかな（vividus: 生き生きした）" },
        { word: "revive",     desc: "蘇る（re+vivere: 再び生きる）" },
        { word: "vivacious",  desc: "快活な・生き生きした（vivere+ious）" },
        { word: "vitamin",    desc: "ビタミン（vita+amine: 生命のアミン）" }
      ],
      compounds: [
        { phrase: "vital signs",       desc: "バイタルサイン・生命の徴候" },
        { phrase: "vital role",        desc: "不可欠な役割" },
        { phrase: "it is vital that",  desc: "〜することが絶対必要だ" }
      ]
    },

    "survive": {
      origin: "ラテン語 supervivere（上を超えて生き延びる）< super-（超えて）+ vivere（生きる）。「困難・危険を超えて生き続ける」が原義で、「生き延びる・残存する」に特化した。\n\n"survival of the fittest"（最適者生存）はダーウィンの進化論をハーバート・スペンサーが言語化した表現。survivor（生存者）・survival kit（サバイバルキット）・survival skills（生存技術）は現代でも広く使われる。",
      derivatives: [
        { word: "survival",      desc: "生存・残存（名詞）" },
        { word: "survivor",      desc: "生存者・被災者（名詞）" },
        { word: "survivorship",  desc: "生存率・生き残りの状態（名詞）" }
      ],
      family: [
        { word: "vital",     desc: "不可欠な（vitalis: 命に関わる）" },
        { word: "vivid",     desc: "鮮やかな（vividus: 生き生きした）" },
        { word: "revive",    desc: "蘇る（re+vivere: 再び生きる）" },
        { word: "vivacious", desc: "快活な・生き生きした" },
        { word: "vitamin",   desc: "ビタミン（vita+amine）" }
      ],
      compounds: [
        { phrase: "survival of the fittest", desc: "最適者生存" },
        { phrase: "survival kit",            desc: "サバイバルキット" },
        { phrase: "cancer survivor",         desc: "がんサバイバー" }
      ]
    },

    "vivid": {
      origin: "ラテン語 vividus（活力に満ちた・生き生きした）< vivere（生きる）の形容詞形。「生命力が溢れている」→「（色・記憶・描写が）鮮やかな・生き生きした」に特化した。\n\nvivid color（鮮やかな色）・vivid memory（鮮明な記憶）・vivid description（生き生きした描写）は文学・芸術でよく使われる。vividly recall（鮮明に思い出す）は記憶に関する重要な副詞用法。",
      derivatives: [
        { word: "vividly",    desc: "鮮やかに・生き生きと（副詞）" },
        { word: "vividness",  desc: "鮮やかさ・生き生きとした様子（名詞）" }
      ],
      family: [
        { word: "vital",     desc: "不可欠な（vitalis: 命に関わる）" },
        { word: "survive",   desc: "生き延びる（super+vivere）" },
        { word: "revive",    desc: "蘇る（re+vivere: 再び生きる）" },
        { word: "vivacious", desc: "快活な・生き生きした" },
        { word: "vitamin",   desc: "ビタミン（vita+amine）" }
      ],
      compounds: [
        { phrase: "vivid color",        desc: "鮮やかな色" },
        { phrase: "vivid memory",       desc: "鮮明な記憶" },
        { phrase: "vividly described",  desc: "生き生きと描写された" }
      ]
    },

    // ── locus系 ──────────────────────────────────────────────────────────────
    "location": {
      origin: "ラテン語 locatio（場所を決めること）< locare（場所に置く）< locus（場所）の名詞形。「特定の場所を定めること・その場所」が原義で、「所在地・場所・撮影現場（on location）」に広がった。\n\non location（ロケ撮影中）は映画・テレビ用語。GPS location（GPS位置情報）・location services（位置情報サービス）はスマートフォン時代の重要語。prime location（一等地）は不動産の基本語。",
      derivatives: [
        { word: "locate",    desc: "位置を特定する・設置する（動詞）" },
        { word: "locator",   desc: "位置特定装置・GPS（名詞）" },
        { word: "locality",  desc: "地域・所在地（名詞）" },
        { word: "localized", desc: "限局した・局所的な（形容詞）" }
      ],
      family: [
        { word: "local",      desc: "地元の（locus+al: 場所の）" },
        { word: "allocate",   desc: "配分する（ad+locare: 場所を割り当てる）" },
        { word: "relocate",   desc: "移転する（re+locare: 場所を再設定）" },
        { word: "locomotive", desc: "機関車（loco+movere: 場所を動かす）" },
        { word: "locus",      desc: "場所・焦点（ラテン語直系）" }
      ],
      compounds: [
        { phrase: "prime location",  desc: "一等地" },
        { phrase: "on location",     desc: "ロケ撮影中" },
        { phrase: "GPS location",    desc: "GPS位置情報" }
      ]
    },

    "allocate": {
      origin: "中世ラテン語 allocare（〜の場所を割り当てる）< ad-（〜へ）+ locare（場所に置く）< locus（場所）。「それぞれに適切な場所を割り振る」→「資源・時間・予算を配分する」に特化した。\n\nallocation（配分・割り当て）はリソース管理の核心語。allocate resources（資源を配分する）・budget allocation（予算配分）・time allocation（時間配分）はプロジェクト管理・経済学の基本語。resource allocation problem（資源配分問題）は最適化理論の古典的問題。",
      derivatives: [
        { word: "allocation",   desc: "配分・割り当て（名詞）" },
        { word: "reallocate",   desc: "再配分する（動詞）" },
        { word: "reallocation", desc: "再配分（名詞）" }
      ],
      family: [
        { word: "location",   desc: "場所・所在地（locus の名詞）" },
        { word: "local",      desc: "地元の（locus+al: 場所の）" },
        { word: "relocate",   desc: "移転する（re+locare）" },
        { word: "locomotive", desc: "機関車（loco+movere）" }
      ],
      compounds: [
        { phrase: "allocate resources",    desc: "資源を配分する" },
        { phrase: "budget allocation",     desc: "予算配分" },
        { phrase: "time allocation",       desc: "時間配分" }
      ]
    },

    "relocate": {
      origin: "re-（再び）+ locate（場所を定める）< ラテン語 locare（場所に置く）< locus（場所）。「場所を新たに定め直す」→「（会社・人を）新しい場所へ移転させる」に特化した。\n\nrelocation package（転勤支援パッケージ：引越し費用・住宅手当など）は人事用語として重要。corporate relocation（企業移転）・staff relocation（社員の転勤）はビジネスの文脈で頻出。be relocated（転勤になる）は受動態でよく使われる。",
      derivatives: [
        { word: "relocation",          desc: "移転・転勤（名詞）" },
        { word: "relocation package",  desc: "転勤支援パッケージ（慣用句）" }
      ],
      family: [
        { word: "location",  desc: "場所・所在地（locus の名詞）" },
        { word: "local",     desc: "地元の（locus+al: 場所の）" },
        { word: "allocate",  desc: "配分する（ad+locare）" },
        { word: "locomotive", desc: "機関車（loco+movere）" }
      ],
      compounds: [
        { phrase: "relocation package",   desc: "転勤支援パッケージ" },
        { phrase: "corporate relocation", desc: "企業移転" },
        { phrase: "be relocated",         desc: "転勤になる" }
      ]
    },

    // ── nomen / onyma系 ──────────────────────────────────────────────────────
    "nominate": {
      origin: "ラテン語 nominare（名前で呼ぶ・名指しする）< nomen（名前）。「名前を挙げて指定する」→「候補者として指名する・推薦する」に特化した。\n\nnomination（ノミネーション）は映画賞・選挙・スポーツ賞の基本語。nominee（被指名者・候補者）は "an Oscar nominee"（アカデミー賞候補）のように使われる。"I nominate X for the award."（X を賞に推薦する）は公式な推薦の定型表現。",
      derivatives: [
        { word: "nomination", desc: "指名・推薦・ノミネーション（名詞）" },
        { word: "nominee",    desc: "被指名者・候補者（名詞）" },
        { word: "nominative", desc: "主格の・指名の（形容詞）" }
      ],
      family: [
        { word: "anonymous",  desc: "匿名の（an-: 名前がない）" },
        { word: "synonym",    desc: "同義語（syn-: 同じ名前）" },
        { word: "pseudonym",  desc: "筆名・ペンネーム（pseudo-: 偽りの名前）" },
        { word: "pronoun",    desc: "代名詞（pro-: 名前の代わり）" },
        { word: "denominate", desc: "〜と呼ぶ（de-: 名前を与える）" }
      ],
      compounds: [
        { phrase: "nominate for an award",    desc: "賞にノミネートする" },
        { phrase: "presidential nomination",  desc: "大統領候補指名" },
        { phrase: "nominee list",             desc: "候補者リスト" }
      ]
    },

    "anonymous": {
      origin: "ギリシャ語 anōnymos（名前のない）< an-（否定）+ onyma（名前：onoma の変形）。「名前を持たない・名前を明かさない」→「匿名の」に特化した。\n\n著者不明の作品には "Anonymous" または "Anon." と記す。Alcoholics Anonymous（アルコール依存症匿名自助グループ）は自助グループの代名詞的存在として "AA" の略で知られる。ハクティビスト集団 Anonymous（アノニマス）も文化的に有名。",
      derivatives: [
        { word: "anonymously",  desc: "匿名で（副詞）" },
        { word: "anonymity",    desc: "匿名性・匿名（名詞）" },
        { word: "anonymize",    desc: "匿名化する（動詞）" }
      ],
      family: [
        { word: "nominate",  desc: "指名する（nomen: 名前）" },
        { word: "synonym",   desc: "同義語（syn-: 同じ名前）" },
        { word: "pseudonym", desc: "筆名（pseudo-: 偽りの名前）" },
        { word: "antonym",   desc: "反意語（anti-: 反対の名前）" }
      ],
      compounds: [
        { phrase: "anonymous source",   desc: "匿名の情報源" },
        { phrase: "remain anonymous",   desc: "匿名のままでいる" },
        { phrase: "online anonymity",   desc: "オンラインでの匿名性" }
      ]
    },

    "synonym": {
      origin: "ギリシャ語 synōnymos（同じ名前を持つ）< syn-（共に・同じ）+ onyma（名前）。「同じ意味を持つ別の名前（言葉）」→「同義語・同意語」に特化した。\n\nthesaurus（類語辞典）は同義語を集めたもので、語源はギリシャ語 thēsauros（宝庫）。"X is synonymous with Y."（X は Y の代名詞だ）は比喩表現として頻用される。antonym（反意語）は anti-（反対）+ onyma（名前）で対義語。",
      derivatives: [
        { word: "synonymous",   desc: "同義の・〜の代名詞である（形容詞）" },
        { word: "synonymously", desc: "同義的に（副詞）" }
      ],
      family: [
        { word: "nominate",  desc: "指名する（nomen: 名前）" },
        { word: "anonymous", desc: "匿名の（an-: 名前がない）" },
        { word: "pseudonym", desc: "筆名（pseudo-: 偽りの名前）" },
        { word: "antonym",   desc: "反意語（anti-: 反対の名前）" },
        { word: "homonym",   desc: "同音異義語（homo-: 同じ名前）" }
      ],
      compounds: [
        { phrase: "close synonym",     desc: "ほぼ同じ意味の同義語" },
        { phrase: "near synonym",      desc: "ほぼ同義語" },
        { phrase: "synonymous with",   desc: "〜の代名詞である・〜と同義の" }
      ]
    },

    "pseudonym": {
      origin: "ギリシャ語 pseudōnymos（偽りの名前を持つ）< pseudos（偽り）+ onyma（名前）。「本名を隠して使う偽りの名前」→「ペンネーム・筆名・芸名・偽名」に特化した。\n\nエリック・ブレア（George Orwell）、メアリー・アン・エヴァンス（George Eliot）はよく知られた pseudonym の使用例で、当時女性というだけで評価が下がるのを避けるため男性名を使った。現代のSNSアカウント名も一種の pseudonym。",
      derivatives: [
        { word: "pseudonymous",   desc: "ペンネームを使った（形容詞）" },
        { word: "pseudonymously", desc: "ペンネームで（副詞）" }
      ],
      family: [
        { word: "nominate",  desc: "指名する（nomen: 名前）" },
        { word: "anonymous", desc: "匿名の（an-: 名前がない）" },
        { word: "synonym",   desc: "同義語（syn-: 同じ名前）" },
        { word: "antonym",   desc: "反意語（anti-: 反対の名前）" }
      ],
      compounds: [
        { phrase: "write under a pseudonym", desc: "ペンネームで書く" },
        { phrase: "famous pseudonym",        desc: "有名なペンネーム" },
        { phrase: "adopt a pseudonym",       desc: "ペンネームを使い始める" }
      ]
    },

    // ── corpus系 ─────────────────────────────────────────────────────────────
    "corporation": {
      origin: "ラテン語 corporatio（共同体の形成）< corporare（一つの体にする）< corpus（体）。「多くの人が一つの体を成した集合体」→「法人・大企業」に特化した。中世ヨーロッパの同業者組合（guild）が corporatio と呼ばれたのが起源。\n\n法人（corporation）は法律上「一つの体を成した存在」として個人と同じ権利義務を持つ法律的概念。corporate culture（企業文化）・corporate social responsibility（CSR）は現代ビジネスの核心語。",
      derivatives: [
        { word: "corporate",    desc: "企業の・法人の（形容詞）" },
        { word: "corporately",  desc: "企業として・法人として（副詞）" },
        { word: "corporatism",  desc: "コーポラティズム・組合主義（名詞）" }
      ],
      family: [
        { word: "incorporate", desc: "法人化する・合体させる（in+corpus）" },
        { word: "corpse",      desc: "死体（corpus: 動かなくなった体）" },
        { word: "corps",       desc: "部隊・集団（corpus のフランス語形）" },
        { word: "corporal",    desc: "身体の・上等兵（corpus+al）" },
        { word: "corpus",      desc: "文書集成・語料（corpus の直系）" }
      ],
      compounds: [
        { phrase: "corporate culture",  desc: "企業文化" },
        { phrase: "CSR",                desc: "企業の社会的責任" },
        { phrase: "corporation tax",    desc: "法人税" }
      ]
    },

    "incorporate": {
      origin: "ラテン語 incorporare（体の中に組み込む）< in-（中に）+ corpus（体）の動詞形。「すでにある体（組織・物質）の中に組み込む」→「法人化する・〔要素を〕取り込む」に特化した。\n\n会社名に付く Inc.（Incorporated の略）は「法人化された」の意で、主にアメリカ・カナダで使われる。incorporate feedback（フィードバックを取り込む）・incorporate a new feature（新機能を組み込む）はビジネス・開発文書で頻出。",
      derivatives: [
        { word: "incorporated",  desc: "法人化した・組み込まれた（形容詞）" },
        { word: "incorporation", desc: "法人化・合体・組み込み（名詞）" },
        { word: "Inc.",          desc: "Incorporated の略（会社名語尾）" }
      ],
      family: [
        { word: "corporation",  desc: "法人・大企業（corporatio）" },
        { word: "corpse",       desc: "死体（corpus: 動かなくなった体）" },
        { word: "corps",        desc: "部隊・集団（corpus のフランス語形）" },
        { word: "corporal",     desc: "身体の・上等兵（corpus+al）" }
      ],
      compounds: [
        { phrase: "incorporate feedback",  desc: "フィードバックを取り込む" },
        { phrase: "Inc. (Incorporated)",   desc: "法人（会社名後置語）" },
        { phrase: "incorporate into",      desc: "〜に組み込む" }
      ]
    },

    "corpse": {
      origin: "ラテン語 corpus（体）が古フランス語 cors・corps を経て英語に入り、「死体・遺体」に意味が絞られた形。corpus（体・文書の集成）と同根語で、「動きを失った体」というニュアンスから「死体」に特化した。\n\ncorpse は医学・法医学・犯罪小説の基本語。corpse flower（ショクダイオオコンニャク：死体のような臭いを発する花）はその名の通り。corpse pose（屍のポーズ）はヨガの savasana（大地に横たわる最終ポーズ）の英語名。",
      derivatives: [
        { word: "corpse-like", desc: "死体のような（まれ）" }
      ],
      family: [
        { word: "corporation",  desc: "法人・大企業（corpus: 体が集合）" },
        { word: "incorporate",  desc: "法人化する・取り込む（in+corpus）" },
        { word: "corps",        desc: "部隊・集団（corpus のフランス語形）" },
        { word: "corporal",     desc: "身体の・上等兵（corpus+al）" },
        { word: "corpus",       desc: "文書集成・語料（corpus の直系）" }
      ],
      compounds: [
        { phrase: "corpse flower",    desc: "ショクダイオオコンニャク" },
        { phrase: "discover a corpse", desc: "死体を発見する" },
        { phrase: "corpse pose",       desc: "屍のポーズ（ヨガ）" }
      ]
    },

    "corps": {
      origin: "フランス語 corps（体・集団）< ラテン語 corpus（体）。「同じ目的のために体をなす集団」→「軍の部隊・専門職の集団」に特化した。\n\nMarine Corps（海兵隊）・Peace Corps（平和部隊）・press corps（記者団）は corps の代表的使用例。発音は /kɔː/（「コー」）で語末の ps が黙字（フランス語由来のため）。corpse（死体、/kɔːps/）との発音の違いに注意が必要。",
      derivatives: [
        { word: "corpsman", desc: "衛生兵（海軍・海兵隊用語）" }
      ],
      family: [
        { word: "corporation",  desc: "法人・大企業（corpus: 体が集合）" },
        { word: "incorporate",  desc: "法人化する・取り込む（in+corpus）" },
        { word: "corpse",       desc: "死体（corpus: 動かなくなった体）" },
        { word: "corporal",     desc: "身体の・上等兵（corpus+al）" }
      ],
      compounds: [
        { phrase: "Marine Corps",  desc: "海兵隊" },
        { phrase: "Peace Corps",   desc: "平和部隊（米国の国際ボランティア組織）" },
        { phrase: "press corps",   desc: "記者団" }
      ]
    },

    // ── mors / morbus系 ──────────────────────────────────────────────────────
    "mortal": {
      origin: "ラテン語 mortalis（死ぬべき運命の）< mors（死）の形容詞形。印欧語根 *mer-（死ぬ）に由来し、murder（殺人）とも同根。「いつかは死ぬ」という人間の本質的条件を表し、神・不死者との対比で使われる。\n\nmortal wound（致命傷）・mortal enemy（不倶戴天の敵）・mortal fear（死を覚悟するほどの恐怖）は強烈な強調表現として使われる。神話・ゲームでは "a mortal"（死すべき人間）が immortals（不死者）と対比される。",
      derivatives: [
        { word: "mortality",     desc: "死亡率・死ぬべき運命（名詞）" },
        { word: "mortally",      desc: "致命的に（副詞）" },
        { word: "mortal wound",  desc: "致命傷（慣用句）" }
      ],
      family: [
        { word: "immortal",   desc: "不死の（in-: 死から免れた）" },
        { word: "mortality",  desc: "死亡率（mortalis の名詞）" },
        { word: "morgue",     desc: "遺体安置所（mors と同根）" },
        { word: "mortify",    desc: "当惑させる・苦行で抑える（mors+fy）" },
        { word: "murder",     desc: "殺人（*mer-: 死ぬ と同根）" }
      ],
      compounds: [
        { phrase: "mortal wound",   desc: "致命傷" },
        { phrase: "mortal enemy",   desc: "不倶戴天の敵" },
        { phrase: "mortal fear",    desc: "死を覚悟するほどの恐怖" }
      ]
    },

    "immortal": {
      origin: "ラテン語 immortalis（死ぬことのない）< in-（否定）+ mortalis（死ぬべき）< mors（死）。「死の宿命から免れた」→「不死の・不滅の・不朽の」に特化した。\n\n神・英雄・芸術作品の「不朽性」に使われる。"immortal works of art"（不朽の芸術作品）・"immortal words"（不滅の言葉）は格調の高い表現。immortality（不死・不滅）はトランスヒューマニズム研究の中心テーマでもある。",
      derivatives: [
        { word: "immortality",   desc: "不死・不滅・永遠（名詞）" },
        { word: "immortalize",   desc: "不朽のものにする・永遠に記念する（動詞）" },
        { word: "immortalized",  desc: "不朽のものにされた（形容詞）" }
      ],
      family: [
        { word: "mortal",    desc: "死すべき（mortalis: いつかは死ぬ）" },
        { word: "mortality", desc: "死亡率・死ぬべき運命（名詞）" },
        { word: "morgue",    desc: "遺体安置所" },
        { word: "murder",    desc: "殺人（*mer-: 死ぬ と同根）" }
      ],
      compounds: [
        { phrase: "immortal works",        desc: "不朽の作品" },
        { phrase: "achieve immortality",   desc: "不滅の名声を得る" },
        { phrase: "immortal words",        desc: "不滅の言葉" }
      ]
    },

    "mortality": {
      origin: "ラテン語 mortalitas（死ぬべき本質・死亡率）< mortalis（死ぬべき）< mors（死）の名詞形。「すべての人が死を免れないという事実・状態」と「一定期間の死亡者数・死亡率」の両義を持つ。\n\nmortality rate（死亡率）・infant mortality（乳幼児死亡率）は統計・公衆衛生の基本語。human mortality（人間の死ぬべき運命）は哲学・文学で使われる概念。",
      derivatives: [
        { word: "mortality rate",  desc: "死亡率（慣用句）" },
        { word: "immortality",     desc: "不死・不滅（反義語）" }
      ],
      family: [
        { word: "mortal",    desc: "死すべき（mortalis: いつかは死ぬ）" },
        { word: "immortal",  desc: "不死の（in-: 死から免れた）" },
        { word: "morgue",    desc: "遺体安置所" },
        { word: "mortify",   desc: "当惑させる・苦行で抑える" },
        { word: "murder",    desc: "殺人（*mer-: 死ぬ と同根）" }
      ],
      compounds: [
        { phrase: "mortality rate",    desc: "死亡率" },
        { phrase: "infant mortality",  desc: "乳幼児死亡率" },
        { phrase: "human mortality",   desc: "人間の死すべき運命" }
      ]
    },

    "morbid": {
      origin: "ラテン語 morbidus（病気の・不健康な）< morbus（病気）< mors（死）と同じ語根 *mer-（死ぬ）から。「病気に関わる・不健全な」→「死や病に不健全なほど関心を持つ・病的な」に発展した。\n\nmorbid curiosity（病的な好奇心）は「死や不快なものへの抑えられない関心」。morbidity（罹患率）は公衆衛生の専門語。morbid humor（ダークユーモア・黒いジョーク）は英語文化の一ジャンルとして確立している。",
      derivatives: [
        { word: "morbidity",   desc: "罹患率・病的状態（名詞）" },
        { word: "morbidly",    desc: "病的に・異常なほど（副詞）" },
        { word: "morbidness",  desc: "病的さ（名詞）" }
      ],
      family: [
        { word: "mortal",    desc: "死すべき（mors: 死）" },
        { word: "immortal",  desc: "不死の（in-: 死から免れた）" },
        { word: "mortality", desc: "死亡率（mortalis の名詞）" },
        { word: "morgue",    desc: "遺体安置所（mors と同根）" }
      ],
      compounds: [
        { phrase: "morbid curiosity",  desc: "病的な好奇心" },
        { phrase: "morbid humor",      desc: "ダークユーモア・黒いジョーク" },
        { phrase: "morbidity rate",    desc: "罹患率" }
      ]
    },

    // ── bene / male系 ────────────────────────────────────────────────────────
    "benefit": {
      origin: "ラテン語 beneficium（恩恵・善い行い）< bene（よく・善く）+ facere（行う）の名詞形。「よいことをする・よいことが行われること」→「利益・恩恵・給付金」に発展した。\n\nbenefit of the doubt（疑わしきは善意に解釈すること）は法律・日常の重要慣用句。employee benefits（福利厚生）・health benefits（健康上の利点）はビジネス・医療の基本語。"for the benefit of"（〜のために・〜の利益のために）はフォーマルな表現。",
      derivatives: [
        { word: "beneficial",   desc: "有益な・ためになる（形容詞）" },
        { word: "beneficiary",  desc: "受益者（名詞）" },
        { word: "beneficially", desc: "有益に（副詞）" }
      ],
      family: [
        { word: "beneficial",   desc: "有益な（bene+facere の形容詞）" },
        { word: "benevolent",   desc: "親切な・慈悲深い（bene+volens）" },
        { word: "benefactor",   desc: "恩人・後援者（bene+facere）" },
        { word: "malicious",    desc: "悪意のある（malus: 悪い）" },
        { word: "malady",       desc: "病気・不具合（malus+habitus）" }
      ],
      compounds: [
        { phrase: "benefit of the doubt",  desc: "善意に解釈すること" },
        { phrase: "employee benefits",     desc: "福利厚生" },
        { phrase: "mutual benefit",        desc: "相互利益" }
      ]
    },

    "beneficial": {
      origin: "ラテン語 beneficialis（恩恵的な）< beneficium（恩恵）< bene（よく）+ facere（行う）の形容詞形。「よいことをもたらす・有益な」が原義で、benefit の形容詞版として多用される。\n\nbeneficial effect（有益な効果）・mutually beneficial（互いに有益な）・beneficial owner（受益所有者：金融・法律）は多様な文脈で使われる。be beneficial to（〜に有益である）は基本構文。beneficial bacteria（有益な細菌）は医学・農業の用語。",
      derivatives: [
        { word: "beneficially", desc: "有益に（副詞）" }
      ],
      family: [
        { word: "benefit",     desc: "利益・恩恵（bene+facere の名詞）" },
        { word: "benevolent",  desc: "親切な・慈悲深い（bene+volens）" },
        { word: "benefactor",  desc: "恩人・後援者（bene+facere）" },
        { word: "malicious",   desc: "悪意のある（malus: 悪い）" }
      ],
      compounds: [
        { phrase: "beneficial effect",    desc: "有益な効果" },
        { phrase: "mutually beneficial",  desc: "互いに有益な" },
        { phrase: "beneficial to health", desc: "健康に良い" }
      ]
    },

    "malicious": {
      origin: "ラテン語 malitiosus（悪意のある）< malitia（悪意・意地悪）< malus（悪い）の形容詞形。「悪意の意図を持った」→「悪意のある・意地悪な」に特化した。\n\nmalicious software（malware: マルウェア）はサイバーセキュリティの基本語。maliciously（悪意をもって）は法律用語として「故意の悪意」を示す重要副詞。malice aforethought（予謀：殺人罪に問われるための要件）は刑法の重要概念。",
      derivatives: [
        { word: "maliciously",   desc: "悪意をもって（副詞）" },
        { word: "malice",        desc: "悪意・敵意（名詞）" },
        { word: "maliciousness", desc: "悪意深さ（名詞）" }
      ],
      family: [
        { word: "benefit",     desc: "利益・恩恵（bene: よい）" },
        { word: "beneficial",  desc: "有益な（bene+facere の形容詞）" },
        { word: "benevolent",  desc: "親切な（bene+volens）" },
        { word: "malady",      desc: "病気・不具合（malus+habitus）" },
        { word: "malevolent",  desc: "悪意のある（male+volens）" }
      ],
      compounds: [
        { phrase: "malicious software",   desc: "悪意あるソフトウェア（マルウェア）" },
        { phrase: "malicious intent",     desc: "悪意・害意" },
        { phrase: "malice aforethought",  desc: "予謀（刑法）" }
      ]
    },

    "benevolent": {
      origin: "ラテン語 benevolens（善意を持つ・親切な）< bene（よく）+ volens（望む）< velle（望む）の現在分詞。「よいことを望んでいる」→「親切な・慈悲深い・慈善的な」に特化した。\n\nbenevolent dictator（善意の独裁者）はIT界でオープンソースプロジェクトの中心人物を指す表現 "Benevolent Dictator for Life"（BDFL）として有名。benevolent society（慈善団体）は社会福祉の基本語。",
      derivatives: [
        { word: "benevolence",  desc: "善意・慈善（名詞）" },
        { word: "benevolently", desc: "善意で・慈悲深く（副詞）" },
        { word: "malevolent",   desc: "悪意のある（反義語: male+volens）" }
      ],
      family: [
        { word: "benefit",    desc: "利益・恩恵（bene+facere の名詞）" },
        { word: "beneficial", desc: "有益な（bene+facere の形容詞）" },
        { word: "benefactor", desc: "恩人・後援者（bene+facere）" },
        { word: "malicious",  desc: "悪意のある（malus: 悪い）" }
      ],
      compounds: [
        { phrase: "benevolent dictator",  desc: "善意の独裁者（BDFL）" },
        { phrase: "benevolent society",   desc: "慈善団体" },
        { phrase: "benevolent gesture",   desc: "善意のある行動" }
      ]
    },

    "benefactor": {
      origin: "ラテン語 benefactor（善いことをする人）< bene（よく）+ facere（行う）の動作主名詞形。「他者のために善いことをする人」→「資金援助者・恩人・後援者」に特化した。\n\nschool benefactor（学校への寄付者）・anonymous benefactor（匿名の支援者）は慈善活動の文脈で使われる。beneficiary（受益者）は恩恵を「受ける側」で対になる語。",
      derivatives: [
        { word: "beneficiary", desc: "受益者・受取人（名詞）" }
      ],
      family: [
        { word: "benefit",    desc: "利益・恩恵（bene+facere の名詞）" },
        { word: "beneficial", desc: "有益な（bene+facere の形容詞）" },
        { word: "benevolent", desc: "親切な・慈悲深い（bene+volens）" },
        { word: "malicious",  desc: "悪意のある（malus: 悪い）" }
      ],
      compounds: [
        { phrase: "anonymous benefactor",  desc: "匿名の支援者" },
        { phrase: "school benefactor",     desc: "学校への恩人・寄付者" },
        { phrase: "generous benefactor",   desc: "気前のよい恩人" }
      ]
    },

    // ── magnus / maximus系 ───────────────────────────────────────────────────
    "magnify": {
      origin: "ラテン語 magnificare（大きくする・称える）< magnus（大きい）+ facere（行う）に英語の動詞語尾 -fy を付けた形。「大きくして見せる」→「拡大する・誇張する・称える」に発展した。\n\nmagnifying glass（虫眼鏡）は「大きくする」ガラス。magnify a problem（問題を誇張する）は「実際より大きくして見せる」比喩。the Magnificat（マニフィカト: キリスト教讃歌「私の魂は主を賛美する」の冒頭語）も同根。",
      derivatives: [
        { word: "magnification", desc: "拡大・誇張（名詞）" },
        { word: "magnifier",     desc: "拡大鏡（名詞）" }
      ],
      family: [
        { word: "magnificent", desc: "壮大な（magnus+facere: 大きく行う）" },
        { word: "magnitude",   desc: "規模・大きさ（magnus の名詞）" },
        { word: "maximum",     desc: "最大（magnus の最上級）" },
        { word: "majesty",     desc: "威厳・陛下（magnus と同根）" },
        { word: "major",       desc: "大きい方の・専攻（magnus 比較級）" }
      ],
      compounds: [
        { phrase: "magnifying glass",     desc: "虫眼鏡・拡大鏡" },
        { phrase: "magnify the problem",  desc: "問題を誇張する" },
        { phrase: "under magnification",  desc: "拡大して見ると" }
      ]
    },

    "magnificent": {
      origin: "ラテン語 magnificus（大きく立派なことをする・壮大な）< magnus（大きい）+ facere（行う）の形容詞形。「大きく立派なものを作る・並外れた大きさで輝く」→「壮大な・素晴らしい・豪壮な」に特化した。\n\nmagnificence（壮大さ）・magnificently（壮大に）は格調のある表現。"The Magnificent Seven"（荒野の七人）はアメリカ西部劇の名作。ロレンツォ・イル・マニフィコ（Lorenzo the Magnificent: ロレンツォ豪華公）はルネサンスの代表的パトロン。",
      derivatives: [
        { word: "magnificence",   desc: "壮大さ・豪華さ（名詞）" },
        { word: "magnificently",  desc: "壮大に・見事に（副詞）" }
      ],
      family: [
        { word: "magnify",   desc: "拡大する（magnus+facere+fy）" },
        { word: "magnitude", desc: "規模・大きさ（magnus の名詞）" },
        { word: "maximum",   desc: "最大（magnus の最上級）" },
        { word: "majesty",   desc: "威厳・陛下（magnus と同根）" },
        { word: "major",     desc: "大きい方の・専攻（magnus 比較級）" }
      ],
      compounds: [
        { phrase: "magnificent view",         desc: "壮大な景色" },
        { phrase: "magnificent achievement",  desc: "素晴らしい業績" },
        { phrase: "look magnificent",         desc: "見事に見える" }
      ]
    },

    "magnitude": {
      origin: "ラテン語 magnitudo（大きさ・規模）< magnus（大きい）に程度・状態を表す接尾辞 -tudo を付けた形。「大きさ・規模・重要性」を定量的に表す際に使われる科学・数学用語。\n\nearthquake magnitude（地震マグニチュード: リヒタースケール）・order of magnitude（桁・オーダー）・stellar magnitude（星の等級）は科学の基本語。"of great magnitude"（大規模な・重大な）は格調のある表現として使われる。",
      derivatives: [
        { word: "magnitudinous", desc: "（まれ）" }
      ],
      family: [
        { word: "magnify",     desc: "拡大する（magnus+facere+fy）" },
        { word: "magnificent", desc: "壮大な（magnus+facere の形容詞）" },
        { word: "maximum",     desc: "最大（magnus の最上級）" },
        { word: "majesty",     desc: "威厳・陛下（magnus と同根）" },
        { word: "major",       desc: "大きい方の・専攻（magnus 比較級）" }
      ],
      compounds: [
        { phrase: "earthquake magnitude",  desc: "地震マグニチュード" },
        { phrase: "order of magnitude",    desc: "桁・オーダー（10倍単位）" },
        { phrase: "of great magnitude",    desc: "大規模な・重大な" }
      ]
    },

    "maximum": {
      origin: "ラテン語 maximus（最も大きい）< magnus（大きい）の最上級形。「それ以上大きいものがない・最大の」が原義で、数学・工学から日常語まで幅広く使われる。\n\nmaximize（最大化する）・maximum capacity（最大収容量）・maximum speed（最高速度）は多様な文脈で使われる。IT・数学では max（maximum の略）と min（minimum の略）が対になる基本略語として使われる。",
      derivatives: [
        { word: "maximize",       desc: "最大化する（動詞）" },
        { word: "maximization",   desc: "最大化（名詞）" },
        { word: "maximal",        desc: "最大限の（形容詞）" },
        { word: "maximally",      desc: "最大限に（副詞）" }
      ],
      family: [
        { word: "magnify",     desc: "拡大する（magnus+facere+fy）" },
        { word: "magnificent", desc: "壮大な（magnus+facere の形容詞）" },
        { word: "magnitude",   desc: "規模・大きさ（magnus の名詞）" },
        { word: "majesty",     desc: "威厳・陛下（magnus と同根）" },
        { word: "major",       desc: "大きい方の・専攻（magnus 比較級）" }
      ],
      compounds: [
        { phrase: "maximum capacity",  desc: "最大収容量・最大処理能力" },
        { phrase: "maximize profit",   desc: "利益を最大化する" },
        { phrase: "at maximum speed",  desc: "最高速度で" }
      ]
    },

    // ── audire系 ─────────────────────────────────────────────────────────────
    "audio": {
      origin: "ラテン語 audire（聞く）の語幹 audi- に由来した現代語。20世紀に「音声・音響・ラジオ・録音」を指す技術用語として英語に定着した。audire 自体は印欧語根 *au-（感知する）に由来し、auditory（聴覚の）・audible（聞こえる）などと同根。\n\naudio equipment（音響機器）・audio file（音声ファイル）・audio guide（音声ガイド）はデジタル時代の基本語。audiophile（音楽愛好家・高音質マニア）は audio + -phile（愛好家）から。",
      derivatives: [
        { word: "audiovisual",  desc: "視聴覚の（形容詞）" },
        { word: "audiophile",   desc: "音楽愛好家・高音質マニア（名詞）" },
        { word: "audio file",   desc: "音声ファイル（慣用句）" }
      ],
      family: [
        { word: "audience",    desc: "聴衆・観客（audire の名詞）" },
        { word: "auditorium",  desc: "講堂・ホール（audire の場所名詞）" },
        { word: "audit",       desc: "監査する（帳簿を聞いて確認する）" },
        { word: "auditory",    desc: "聴覚の（audire+ory）" },
        { word: "audible",     desc: "聞こえる（audire+ible）" }
      ],
      compounds: [
        { phrase: "audio guide",        desc: "音声ガイド" },
        { phrase: "audio file",         desc: "音声ファイル" },
        { phrase: "audiovisual materials", desc: "視聴覚教材" }
      ]
    },

    "audience": {
      origin: "ラテン語 audientia（聞くこと・聴衆）< audire（聞く）の名詞形。「聞く人々・聴衆」が原義で、「観客・視聴者・読者・（君主との）謁見」に広がった。\n\ntarget audience（ターゲット層）はマーケティングの核心概念。audience reach（リーチ・到達視聴者数）はメディア指標の基本語。"captive audience"（逃げ場のない聴衆）は講義室・飛行機内など「他に選択肢がない聴衆」を皮肉に表す慣用句。",
      derivatives: [
        { word: "auditorium",  desc: "（関連）講堂・ホール（audire の場所名詞）" }
      ],
      family: [
        { word: "audio",       desc: "音声・音響（audire の語幹から）" },
        { word: "auditorium",  desc: "講堂・ホール（audire の場所名詞）" },
        { word: "audit",       desc: "監査する（帳簿を聞いて確認する）" },
        { word: "auditory",    desc: "聴覚の（audire+ory）" },
        { word: "audible",     desc: "聞こえる（audire+ible）" }
      ],
      compounds: [
        { phrase: "target audience",   desc: "ターゲット層" },
        { phrase: "audience reach",    desc: "到達視聴者数" },
        { phrase: "captive audience",  desc: "逃げ場のない聴衆" }
      ]
    },

    "auditorium": {
      origin: "ラテン語 auditorium（聞く場所）< audire（聞く）に場所を表す語尾 -torium を付けた形。「音楽・演説・講義を聞くための大きな部屋・ホール」が原義。\n\nschool auditorium（学校の講堂）・concert auditorium（コンサートホール）は教育・音楽の文脈で使われる。auditorium seating（シアター式着席：全員が前を向く会議配置）はビジネスイベントの基本配置スタイルの一つ。",
      derivatives: [
        { word: "auditory", desc: "聴覚の（関連形容詞）" }
      ],
      family: [
        { word: "audio",    desc: "音声・音響（audire の語幹から）" },
        { word: "audience", desc: "聴衆・観客（audire の名詞）" },
        { word: "audit",    desc: "監査する（帳簿を聞いて確認する）" },
        { word: "auditory", desc: "聴覚の（audire+ory）" },
        { word: "audible",  desc: "聞こえる（audire+ible）" }
      ],
      compounds: [
        { phrase: "school auditorium",   desc: "学校の講堂" },
        { phrase: "fill the auditorium", desc: "会場を満員にする" },
        { phrase: "auditorium seating",  desc: "シアター式着席" }
      ]
    },

    "audit": {
      origin: "ラテン語 auditus（聞くこと）< audire（聞く）の名詞形。中世の会計では帳簿を朗読して「聞かせながら確認する」ことが検査の方法だったため、「帳簿の監査・監査する」に特化した。\n\nfinancial audit（財務監査）・annual audit（年次監査）・audit trail（監査証跡）は会計・コンプライアンスの基本語。"audit a course"（科目を聴講する）は大学教育での「単位なしで聞く」用法として現代英語に残っている。",
      derivatives: [
        { word: "auditor",  desc: "監査人・会計士（名詞）" },
        { word: "auditing", desc: "監査（名詞）" },
        { word: "audited",  desc: "監査を受けた（形容詞）" }
      ],
      family: [
        { word: "audio",      desc: "音声・音響（audire の語幹から）" },
        { word: "audience",   desc: "聴衆・観客（audire の名詞）" },
        { word: "auditorium", desc: "講堂・ホール（audire の場所名詞）" },
        { word: "auditory",   desc: "聴覚の（audire+ory）" }
      ],
      compounds: [
        { phrase: "financial audit",  desc: "財務監査" },
        { phrase: "audit trail",      desc: "監査証跡・操作ログ" },
        { phrase: "conduct an audit", desc: "監査を実施する" }
      ]
    },

    // ── unus / monos系 ───────────────────────────────────────────────────────
    "unite": {
      origin: "ラテン語 unire（一つにする）< unus（一つ）から形成した動詞。「バラバラのものを一つにまとめる」→「統合する・団結する」に特化した。\n\nUnited Nations（国際連合: 1945年設立）・United States（合衆国）・United Kingdom（連合王国）は "united" の代表的固有名詞。"United we stand, divided we fall."（団結すれば勝ち、分裂すれば負ける）は有名な格言。",
      derivatives: [
        { word: "unity",          desc: "統一・一致・団結（名詞）" },
        { word: "united",         desc: "統一された・団結した（形容詞）" },
        { word: "unification",    desc: "統一・統合（名詞）" },
        { word: "reunite",        desc: "再結合する（動詞）" }
      ],
      family: [
        { word: "unity",    desc: "統一・団結（unus の名詞）" },
        { word: "uniform",  desc: "制服・均一な（uni+forma: 一つの形）" },
        { word: "monopoly", desc: "独占（mono-: 一つだけが売る）" },
        { word: "unique",   desc: "唯一の（uni+que: 一つの）" },
        { word: "unicorn",  desc: "一角獣（uni+cornu: 一つの角）" }
      ],
      compounds: [
        { phrase: "united front",    desc: "統一戦線・団結した態度" },
        { phrase: "unite against",   desc: "〜に対して団結する" },
        { phrase: "United Nations",  desc: "国際連合" }
      ]
    },

    "unity": {
      origin: "ラテン語 unitas（一であること・統一性）< unus（一つ）の名詞形。「バラバラのものが一つにまとまった状態・性質」が原義で、「統一・一致・団結・（数学の）単位元（1）」に使われる。\n\nnational unity（国家統一）・unity of purpose（目的の一致）・unity in diversity（多様性の中の統一）は政治・社会の文脈で使われる。ゲームエンジン Unity はこの語から命名された。",
      derivatives: [
        { word: "unify",       desc: "統一する・統合する（動詞）" },
        { word: "unification", desc: "統一・統合（名詞）" }
      ],
      family: [
        { word: "unite",    desc: "団結する（unus: 一つにする）" },
        { word: "uniform",  desc: "制服・均一な（uni+forma: 一つの形）" },
        { word: "monopoly", desc: "独占（mono-: 一つだけが売る）" },
        { word: "unique",   desc: "唯一の（uni+que: 一つの）" }
      ],
      compounds: [
        { phrase: "national unity",        desc: "国家統一" },
        { phrase: "unity of purpose",      desc: "目的の一致" },
        { phrase: "unity in diversity",    desc: "多様性の中の統一" }
      ]
    },

    "monopoly": {
      origin: "ギリシャ語 monopōlion（独占販売権）< mono-（一つ・単独）+ pōlein（売る）。「一社・一者だけが売る権利を持つ」→「独占・一人支配」に特化した。\n\nmonopoly power（独占力）・natural monopoly（自然独占: インフラのように一社独占の方が効率的な産業）・break up a monopoly（独占を解体する）は経済学・競争法の重要語。ボードゲーム Monopoly（モノポリー）は不動産独占をテーマにした世界的なゲーム。",
      derivatives: [
        { word: "monopolize",    desc: "独占する（動詞）" },
        { word: "monopolist",    desc: "独占者（名詞）" },
        { word: "monopolistic",  desc: "独占的な（形容詞）" }
      ],
      family: [
        { word: "unite",     desc: "団結する（unus: 一つにする）" },
        { word: "unity",     desc: "統一・団結（unus の名詞）" },
        { word: "monotone",  desc: "単調な声（mono: 一つの音）" },
        { word: "monomania", desc: "一つのことへの過度な執着" },
        { word: "monologue", desc: "独り言・独白（mono+logos）" }
      ],
      compounds: [
        { phrase: "monopoly power",     desc: "独占力" },
        { phrase: "natural monopoly",   desc: "自然独占" },
        { phrase: "break up a monopoly", desc: "独占を解体する" }
      ]
    },

    "monotone": {
      origin: "ギリシャ語 monotonos（一つの音・変化のない）< mono-（一つ）+ tonos（音・緊張）。「変化のない一つの音」→「単調な声・単調さ」に特化した。\n\nin a monotone（一本調子で・抑揚なく）は話し方を表す。monotonous（単調な・退屈な）・monotony（単調さ・退屈）は日常でよく使われる。monotone color（モノトーン・単色）はファッション・デザイン用語として黒白灰色の配色を指す。",
      derivatives: [
        { word: "monotonous",   desc: "単調な・退屈な（形容詞）" },
        { word: "monotonously", desc: "単調に・退屈に（副詞）" },
        { word: "monotony",     desc: "単調さ・退屈（名詞）" }
      ],
      family: [
        { word: "unite",     desc: "団結する（unus: 一つにする）" },
        { word: "unity",     desc: "統一・団結（unus の名詞）" },
        { word: "monopoly",  desc: "独占（mono-: 一つだけが売る）" },
        { word: "monologue", desc: "独り言・独白（mono+logos）" }
      ],
      compounds: [
        { phrase: "in a monotone",       desc: "一本調子で・抑揚なく" },
        { phrase: "break the monotony",  desc: "単調さを打ち破る" },
        { phrase: "monotonous routine",  desc: "単調なルーティン" }
      ]
    },

    // ── chronos / tempus系 ───────────────────────────────────────────────────
    "chronology": {
      origin: "ギリシャ語 chronos（時間）+ logos（学・体系・言葉）を合わせた近代語。「時間の体系・出来事の時間的順序」が原義で、「年代記・年表・時系列」に特化した。\n\nin chronological order（時系列で）は文書・説明の基本的な順序指定。chronological age（暦年齢：実際の誕生年から数えた年齢）は psychological age（心理年齢）と区別される。chronicle（年代記）も同根で、「時間に沿って記録したもの」。",
      derivatives: [
        { word: "chronological",   desc: "時系列の・年代順の（形容詞）" },
        { word: "chronologically", desc: "時系列で・年代順に（副詞）" },
        { word: "chronicle",       desc: "年代記・記録（名詞・動詞）" },
        { word: "chronometer",     desc: "精密時計（名詞）" }
      ],
      family: [
        { word: "synchronize",  desc: "同期させる（syn-: 共に時間を合わせる）" },
        { word: "contemporary", desc: "現代の・同時代の（con+tempus）" },
        { word: "temporary",    desc: "一時的な（tempus: その時限り）" },
        { word: "chronic",      desc: "慢性の（khronos: 長い時間続く）" },
        { word: "anachronism",  desc: "時代錯誤（ana-: 時間に逆らう）" }
      ],
      compounds: [
        { phrase: "in chronological order",  desc: "時系列で・年代順に" },
        { phrase: "chronological age",       desc: "暦年齢" },
        { phrase: "geological chronology",   desc: "地質年代学" }
      ]
    },

    "synchronize": {
      origin: "ギリシャ語 synkhronos（同じ時間の）< syn-（共に）+ khronos（時間）から形成した動詞（英語 synchronize）。「同じ時間に合わせる」→「同期させる・タイミングを合わせる」に特化した。\n\nIn sync（同期して）・synchronization（同期）はデジタル技術の基本語。synchronized swimming（アーティスティックスイミング：タイミングを合わせた泳ぎ）は競技名にも使われた。asynchronous（非同期の）は通信・プログラミングの重要語。",
      derivatives: [
        { word: "synchronization", desc: "同期・タイミングを合わせること（名詞）" },
        { word: "synchronized",    desc: "同期した（形容詞）" },
        { word: "synchronous",     desc: "同期的な（形容詞）" },
        { word: "asynchronous",    desc: "非同期の（形容詞）" }
      ],
      family: [
        { word: "chronology",   desc: "年代学・時系列（chronos+logos）" },
        { word: "contemporary", desc: "現代の・同時代の（con+tempus）" },
        { word: "temporary",    desc: "一時的な（tempus: その時限り）" },
        { word: "chronic",      desc: "慢性の（長い時間続く）" }
      ],
      compounds: [
        { phrase: "synchronize data",        desc: "データを同期する" },
        { phrase: "synchronized swimming",   desc: "シンクロナイズドスイミング" },
        { phrase: "out of sync",             desc: "同期がずれている" }
      ]
    },

    "contemporary": {
      origin: "ラテン語 contemporarius（同じ時代の）< con-（共に）+ tempus（時・時間）に形容詞語尾 -arius を付けた形。「同じ時代を共に生きている」→「現代の・同時代の・同世代の（人）」に特化した。\n\ncontemporary art（現代芸術）・contemporary music（現代音楽）は芸術分野で重要。"one's contemporary"（同世代の人）は社会学・歴史の文脈で使われる。contemporary issues（現代の問題）と contemporary account（当時の記録）で「今の時代」と「同じ時代」の両義で使われる。",
      derivatives: [
        { word: "contemporaneous",   desc: "同時代の・同時の（形容詞）" },
        { word: "contemporaneously", desc: "同時代に・同時に（副詞）" }
      ],
      family: [
        { word: "chronology",  desc: "年代学・時系列（chronos+logos）" },
        { word: "synchronize", desc: "同期させる（syn+chronos）" },
        { word: "temporary",   desc: "一時的な（tempus: その時限り）" },
        { word: "temporal",    desc: "時間の・世俗の（tempus+al）" },
        { word: "tempo",       desc: "テンポ・拍子（tempus 直系）" }
      ],
      compounds: [
        { phrase: "contemporary art",     desc: "現代芸術" },
        { phrase: "contemporary issues",  desc: "現代の問題" },
        { phrase: "one's contemporary",   desc: "同世代の人・同時代の人" }
      ]
    },

    "temporary": {
      origin: "ラテン語 temporarius（その時限りの・一時的な）< tempus（時・時間）に形容詞語尾 -arius を付けた形。「特定の時期のみに属する」→「一時的な・仮の」に特化した。\n\ntemporary worker（臨時雇用者）・temporary solution（一時的な解決策）・temporary accommodation（仮住まい）はビジネス・行政の基本語。contemporary（同時代の）と混同されやすいが、temporary は「期間の短さ・一時性」を強調する。",
      derivatives: [
        { word: "temporarily",   desc: "一時的に・仮に（副詞）" },
        { word: "temporariness", desc: "一時性（名詞）" },
        { word: "tempo",         desc: "テンポ・拍子（tempus の直系）" }
      ],
      family: [
        { word: "chronology",   desc: "年代学・時系列（chronos+logos）" },
        { word: "synchronize",  desc: "同期させる（syn+chronos）" },
        { word: "contemporary", desc: "現代の・同時代の（con+tempus）" },
        { word: "temporal",     desc: "時間の・世俗の（tempus+al）" }
      ],
      compounds: [
        { phrase: "temporary worker",        desc: "臨時雇用者・派遣社員" },
        { phrase: "temporary solution",      desc: "一時的な解決策" },
        { phrase: "on a temporary basis",    desc: "暫定的に・仮の措置として" }
      ]
    },

    // ── solus系 ───────────────────────────────────────────────────────────────
    "solitary": {
      origin: "ラテン語 solitarius（一人でいる・孤独な）< solus（一人・単独の）の形容詞形。「一人でいることを好む・孤立した」が原義で、「孤独な・たった一つの・単独の」にも使われる。\n\nsolitary confinement（独房禁錮）は刑務所での最も厳しい処罰として知られる。solitary animals（単独生活の動物）は社会性動物の対義として生態学で使われる。a solitary walk（一人散歩）は孤独の肯定的側面を表す。",
      derivatives: [
        { word: "solitarily",    desc: "孤独に・ひとりで（副詞）" },
        { word: "solitariness",  desc: "孤独・単独（名詞）" }
      ],
      family: [
        { word: "solitude",   desc: "孤独・孤立（solus の名詞）" },
        { word: "isolate",    desc: "孤立させる（insula: 島のように）" },
        { word: "solo",       desc: "独奏・単独の（solus の直系）" },
        { word: "sole",       desc: "唯一の（solus の形容詞）" },
        { word: "soliloquy",  desc: "独り言・独白（solus+loqui: 一人で話す）" }
      ],
      compounds: [
        { phrase: "solitary confinement",  desc: "独房禁錮" },
        { phrase: "solitary walk",         desc: "一人散歩" },
        { phrase: "live a solitary life",  desc: "孤独な生活を送る" }
      ]
    },

    "solitude": {
      origin: "ラテン語 solitudo（一人でいること・孤独・荒れた場所）< solus（一人・単独の）の名詞形。「人が一人でいる状態」が原義で、孤独の否定的側面（孤立・寂しさ）と肯定的側面（一人の充実した時間）の両方を表す。\n\n"In solitude the mind gains strength."（孤独の中で心は力を得る）はジョセフ・ルースの言葉。心理学では "solitude vs. loneliness"（望む孤独 vs. 望まぬ孤独）の区別が重要で、solitude は内向型の人が英気を養う積極的な一人の時間を指す。",
      derivatives: [
        { word: "solitary", desc: "孤独な・単独の（形容詞）" }
      ],
      family: [
        { word: "solitary",  desc: "孤独な・単独の（solus の形容詞）" },
        { word: "isolate",   desc: "孤立させる（insula: 島のように）" },
        { word: "solo",      desc: "独奏・単独の（solus の直系）" },
        { word: "sole",      desc: "唯一の（solus の形容詞）" },
        { word: "soliloquy", desc: "独り言・独白（一人で話す）" }
      ],
      compounds: [
        { phrase: "in solitude",        desc: "孤独の中で" },
        { phrase: "seek solitude",      desc: "一人の時間を求める" },
        { phrase: "a place of solitude", desc: "孤独を楽しめる場所" }
      ]
    },

    // ── philos系（愛・好む）──
    "philosophy": {
      origin: "ギリシャ語 philosophia（知を愛すること）< philos（愛する・友好的な）+ sophia（知恵）。古代ギリシャでソクラテスやプラトンが「知恵そのものではなく、知恵を愛し求める営み」として用いた語。\n\nラテン語 philosophia を経て14世紀の英語に入り、当初は「自然哲学＝科学全般」の意味も持っていた。やがて倫理学・形而上学・認識論などを扱う学問として分化し、現在は「世界・存在・知識の根本を問う学問」を指す。\n\n日常語としては「人生哲学・信念・方針」の意味でも広く使われ、"my philosophy of life"（私の人生哲学）のように個人の指針を語る場面で頻出する。",
      derivatives: [
        { word: "philosopher",    desc: "哲学者（philosophia を実践する人）" },
        { word: "philosophical",  desc: "哲学的な・達観した（形容詞）" },
        { word: "philosophically", desc: "哲学的に・泰然と（副詞）" },
        { word: "philosophize",   desc: "哲学する・深く考察する（動詞）" }
      ],
      family: [
        { word: "philanthropy",   desc: "博愛・慈善活動（philos + anthropos 人）" },
        { word: "philharmonic",   desc: "音楽愛好の（philos + harmonia 調和）" },
        { word: "bibliophile",    desc: "愛書家（biblio 書物 + philos）" },
        { word: "sophia",         desc: "知恵（ギリシャ語源、固有名詞にも）" }
      ],
      compounds: [
        { phrase: "philosophy of life",    desc: "人生哲学・生き方の指針" },
        { phrase: "a philosophical outlook", desc: "物事を冷静に見る姿勢" }
      ]
    },

    "philanthropy": {
      origin: "ギリシャ語 philanthrōpia（人類への愛）< philos（愛する）+ anthrōpos（人間）。元来「人間性・人への親切心」を意味し、ローマ時代には「人類への慈悲」として用いられた。\n\n17世紀の英語に入ると「慈善活動・寄付による社会貢献」という現代的な意味に定着した。近代以降はロックフェラーやカーネギーのような大規模慈善家の活動が philanthropy と呼ばれ、企業・財団が社会課題に投資する行為全般を指すようになった。\n\nphilanthropist（慈善家）は単なる寄付者ではなく、組織的・継続的に社会改善に取り組む人物を指すことが多い。",
      derivatives: [
        { word: "philanthropist",  desc: "慈善家・博愛主義者" },
        { word: "philanthropic",   desc: "慈善的な・博愛的な（形容詞）" }
      ],
      family: [
        { word: "philosophy",      desc: "哲学（philos + sophia 知恵）" },
        { word: "anthropology",    desc: "人類学（anthrōpos + logos）" },
        { word: "misanthropy",     desc: "人間嫌い（misos 憎む + anthrōpos）" },
        { word: "philanthrope",    desc: "博愛家（古語・詩的表現）" }
      ],
      compounds: [
        { phrase: "corporate philanthropy", desc: "企業による慈善・社会貢献活動" },
        { phrase: "philanthropic foundation", desc: "慈善財団" }
      ]
    },

    "philharmonic": {
      origin: "ギリシャ語 philos（愛する）+ harmonia（調和・音楽）から成る複合語。18世紀のヨーロッパで音楽協会や演奏団体が自らの名称に採用したことで広まった。\n\nハーモニー（harmonia）の語源はギリシャ語で「結合・釘・継ぎ目」を意味し、音楽では「複数の音が調和して一つになる状態」を表す。Philharmonic は「音楽（調和音）を愛する」という形容詞で、通常 philharmonic orchestra（フィルハーモニー管弦楽団）の略として使われる。\n\nベルリン・フィルハーモニー管弦楽団（Berliner Philharmoniker）やニューヨーク・フィルハーモニック（New York Philharmonic）のように、世界有数の交響楽団の固有名詞として定着している。",
      derivatives: [
        { word: "harmonic",    desc: "調和的な・倍音の（形容詞）" },
        { word: "harmonize",   desc: "調和させる・和声をつける" },
        { word: "harmonious",  desc: "調和のとれた・仲の良い" },
        { word: "harmony",     desc: "調和・和音・協調" }
      ],
      family: [
        { word: "philosophy",  desc: "哲学（philos + sophia）" },
        { word: "philanthropy", desc: "慈善（philos + anthrōpos）" },
        { word: "symphony",    desc: "交響曲（sym- 共に + phōnē 音）" }
      ],
      compounds: [
        { phrase: "philharmonic orchestra", desc: "フィルハーモニー管弦楽団" }
      ]
    },

    // ── bi / duo系（2・二重）──
    "bilingual": {
      origin: "ラテン語 bi-（二つの）+ lingua（舌・言語）から。lingua はラテン語で「舌」を意味し、転じて「言語」を表す。フランス語 langue、スペイン語 lengua、英語 language もすべてこの語根から来ている。\n\n19世紀に bilingual が英語に定着し、「二言語を話す人・二言語で書かれた文書」を指すようになった。現代では言語習得・教育・神経科学の分野でも重要な概念として研究されている。\n\n二言語以上を操る場合は multilingual（多言語の）、言語そのものへの学術的関心は linguistics（言語学）で扱われる。",
      derivatives: [
        { word: "bilingually",   desc: "二言語で（副詞）" },
        { word: "bilingualism",  desc: "二言語使用・バイリンガリズム" }
      ],
      family: [
        { word: "multilingual",  desc: "多言語の（multi- 多 + lingua）" },
        { word: "monolingual",   desc: "一言語のみの（mono- 一 + lingua）" },
        { word: "language",      desc: "言語（lingua の変形）" },
        { word: "linguistics",   desc: "言語学（lingua + -istics）" },
        { word: "lingual",       desc: "舌の・言語の（形容詞）" }
      ],
      compounds: [
        { phrase: "bilingual education",  desc: "バイリンガル教育・二言語教育" },
        { phrase: "bilingual dictionary", desc: "二か国語辞典" }
      ]
    },

    "binary": {
      origin: "ラテン語 binarius（二つを含む）< bini（二つずつ）< bis（二回）。古典ラテン語で「対になったもの・二者からなるもの」を意味し、天文学では binary star（連星）として使われていた。\n\n20世紀にコンピュータ科学が発展すると、0と1の二値で情報を表す binary（2進法）が中心的な技術概念になった。バイナリコード・バイナリファイルなど、現代のデジタル技術を支える基礎概念として不可欠な語である。\n\n社会・文化的文脈では「二項対立・二元的なもの」を指す形容詞としても使われ、gender binary（性別二元論）のように価値観を問う議論にも登場する。",
      derivatives: [
        { word: "binaural",   desc: "両耳の・立体音響の（bi- + auris 耳）" }
      ],
      family: [
        { word: "bicycle",    desc: "自転車（bi- + cycle 輪）" },
        { word: "binocular",  desc: "双眼鏡（bi- + oculus 目）" },
        { word: "bisect",     desc: "二等分する（bi- + sect 切る）" },
        { word: "dual",       desc: "二重の・二者の（duo の形容詞）" },
        { word: "twice",      desc: "二回（bi-/bis- の英語形）" }
      ],
      compounds: [
        { phrase: "binary code",   desc: "2進法のコード" },
        { phrase: "binary system", desc: "二進法・二元体制" }
      ]
    },

    "dual": {
      origin: "ラテン語 dualis（二を含む）< duo（二）。古典ラテン語の文法用語として「双数形（二つのものを指す格変化）」を表した。ギリシャ語の dyo、サンスクリット語の dvā と同じインド・ヨーロッパ語族の共通語根 *dwo- に由来する。\n\n英語には16世紀に入り、「二重の・二者から成る」という形容詞として定着した。dual nationality（二重国籍）、dual role（二役）のように「一つのものが二つの性質・機能を兼ねる」状況で広く使われる。\n\n語源の duo は英語の duet（二重奏）、duplex（二重の）、doubt（< dubitare 二つに揺れる）などにも受け継がれ、「2」という概念を英語語彙に広く根付かせた。",
      derivatives: [
        { word: "duality",    desc: "二重性・二元性" },
        { word: "dualism",    desc: "二元論（哲学・宗教用語）" },
        { word: "dualist",    desc: "二元論者" }
      ],
      family: [
        { word: "duo",        desc: "二人組・デュオ" },
        { word: "duet",       desc: "二重奏・二重唱（duo の縮小形）" },
        { word: "double",     desc: "二倍の・二重の（duo の変形）" },
        { word: "binary",     desc: "二進法の・二者の（binarius）" },
        { word: "doubt",      desc: "疑い（dubitare 二つに揺れる）" }
      ],
      compounds: [
        { phrase: "dual nationality",  desc: "二重国籍" },
        { phrase: "dual role",         desc: "二役・二重の役割" },
        { phrase: "dual-purpose",      desc: "二目的兼用の" }
      ]
    },

    "duet": {
      origin: "イタリア語 duetto（二重奏）< duo（二）の縮小形。18世紀の音楽用語として英語に入り、当初は声楽の「二重唱」を指したが、やがて二つの楽器による演奏や、二人の俳優・ダンサーによるパフォーマンス全般に拡張された。\n\n語根 duo はラテン語・ギリシャ語の「2」を表す最も基本的な形で、英語の two もインド・ヨーロッパ語族の同じ語根 *dwo- に遡る。\n\n音楽以外では「息の合った二人組・二人一組でする行為」という比喩的意味でも使われる。",
      derivatives: [
        { word: "duo",       desc: "二人組・デュオ（duet の略義形）" }
      ],
      family: [
        { word: "dual",      desc: "二重の（dualis）" },
        { word: "duo",       desc: "二人組" },
        { word: "double",    desc: "二倍" },
        { word: "duplex",    desc: "二重の・二層の（duplex < duo + plex）" },
        { word: "duplicate", desc: "複製・二重にする（duplicare）" }
      ],
      compounds: [
        { phrase: "piano duet",  desc: "ピアノ連弾・ピアノ二重奏" },
        { phrase: "vocal duet",  desc: "ボーカル・デュエット" }
      ]
    },

    // ── geo系（地球・大地）──
    "geography": {
      origin: "ギリシャ語 geōgraphia（大地の描写）< gē（大地・地球）+ graphein（書く・描く）。古代ギリシャの学者エラトステネス（紀元前3世紀）が地球の周長を計算したことで知られ、geographia はまず「地球を記述する学問」として体系化された。\n\nラテン語を経て16世紀に英語に定着。当初は地形・気候・海洋を記述する自然地理学を指したが、やがて人文地理学（人々の分布・文化・経済）も含む広義の地球科学全般を指すようになった。\n\ngeographer（地理学者）、geographic（地理的な）など、現代でも学術・教育・ビジネスの多くの文脈に登場する語根である。",
      derivatives: [
        { word: "geographer",    desc: "地理学者" },
        { word: "geographic",    desc: "地理的な（形容詞）" },
        { word: "geographical",  desc: "地理上の（形容詞・やや格式）" }
      ],
      family: [
        { word: "geology",       desc: "地質学（gē + logos）" },
        { word: "geometry",      desc: "幾何学（gē + metron 測定）" },
        { word: "geopolitics",   desc: "地政学（gē + politics）" },
        { word: "geothermal",    desc: "地熱の（gē + thermos 熱）" }
      ],
      compounds: [
        { phrase: "physical geography",  desc: "自然地理学" },
        { phrase: "human geography",     desc: "人文地理学" }
      ]
    },

    "geology": {
      origin: "ギリシャ語 gē（大地）+ logos（学問・論）から成る近代造語。18世紀後半に地球の岩石・地層・歴史を研究する学問として確立し、1778年頃に英語に定着した。\n\n産業革命期に石炭や鉱物資源の探査が盛んになったことで地質学は急速に発展した。ウィリアム・スミスが地層と化石の関係を体系化し（1815年）、チャールズ・ライエルが「現在は過去の鍵である」という斉一説を提唱したことで近代地質学の基礎が築かれた。\n\ngeological time（地質時代）のような概念は「数億年という深い時間スケール」を科学に持ち込み、後のダーウィンの進化論にも影響を与えた。",
      derivatives: [
        { word: "geologist",    desc: "地質学者" },
        { word: "geological",   desc: "地質学的な（形容詞）" }
      ],
      family: [
        { word: "geography",    desc: "地理学（gē + graphein）" },
        { word: "geometry",     desc: "幾何学（gē + metron）" },
        { word: "biology",      desc: "生物学（bios + logos）" },
        { word: "psychology",   desc: "心理学（psychē + logos）" }
      ],
      compounds: [
        { phrase: "geological survey",    desc: "地質調査" },
        { phrase: "geological time scale", desc: "地質年代表" }
      ]
    },

    "geometry": {
      origin: "ギリシャ語 geōmetria（土地の測量）< gē（大地）+ metrein（測る）。古代エジプトのナイル川氾濫後の農地区画測量から発達したとされる実用的技術が、ギリシャのユークリッドによって公理的な学問として体系化された（紀元前300年頃）。\n\n英語には14世紀に入り、当初は土地測量の実用技術を指したが、やがて「点・線・面・立体の性質を論理的に研究する数学の分野」として抽象化された。ユークリッド幾何学（Euclidean geometry）のほか、非ユークリッド幾何学・解析幾何学・微分幾何学など多様な分野に発展している。\n\n語根 -metry は他にも thermometry（温度測定）、chronometry（時間測定）、optometry（視力測定）など多数の専門語を形成している。",
      derivatives: [
        { word: "geometric",    desc: "幾何学的な・幾何学模様の（形容詞）" },
        { word: "geometrical",  desc: "幾何学的な（形容詞・やや格式）" },
        { word: "geometrician", desc: "幾何学者" }
      ],
      family: [
        { word: "meter",        desc: "メートル・計測器（metron）" },
        { word: "thermometer",  desc: "温度計（thermos + metron）" },
        { word: "symmetry",     desc: "対称性（sym- 共に + metron）" },
        { word: "parameter",    desc: "パラメータ（para- + metron）" }
      ],
      compounds: [
        { phrase: "plane geometry",    desc: "平面幾何学" },
        { phrase: "geometric pattern", desc: "幾何学模様" }
      ]
    },

    // ── demos系（民衆）──
    "democracy": {
      origin: "ギリシャ語 dēmokratia（民衆の支配）< dēmos（民衆・地域住民）+ kratos（力・支配）。古代アテナイで紀元前508年頃クレイステネスが導入した政治制度がその原型で、成人男性市民が直接参加して政策を決定した。\n\nラテン語を経て16世紀の英語に定着。絶対王政に対抗する概念として啓蒙思想家に好まれ、フランス革命やアメリカ独立革命を経て「自由・平等・主権在民」の象徴語となった。\n\n現代では「代議制民主主義（representative democracy）」が主流。democracy は単なる制度名を超え、「公正・透明・参加」を価値とする政治哲学全般を指す語として世界中で使われている。",
      derivatives: [
        { word: "democrat",       desc: "民主主義者・民主党員" },
        { word: "democratic",     desc: "民主主義的な（形容詞）" },
        { word: "democratize",    desc: "民主化する" },
        { word: "democratization", desc: "民主化（名詞）" }
      ],
      family: [
        { word: "demographic",    desc: "人口統計的な（dēmos + graphein）" },
        { word: "epidemic",       desc: "流行病（epi- + dēmos）" },
        { word: "pandemic",       desc: "世界的流行病（pan- 全て + dēmos）" },
        { word: "aristocracy",    desc: "貴族政治（aristos 最良 + kratos）" }
      ],
      compounds: [
        { phrase: "liberal democracy",       desc: "自由民主主義" },
        { phrase: "direct democracy",        desc: "直接民主制" },
        { phrase: "democratic process",      desc: "民主的プロセス・手続き" }
      ]
    },

    "epidemic": {
      origin: "ギリシャ語 epidēmia（民衆の間に広まること）< epi-（上に・〜の間に）+ dēmos（民衆）。古代ギリシャのヒポクラテスが特定地域で同時に多数の人が同じ病気にかかる状況を opistelai(流行) と呼んだことに由来し、ラテン語 epidemia を経て14世紀に英語に入った。\n\n当初は「ある地域・集団に急速に広まる病気」を指した医学用語だったが、現代では比喩的に「epidemic of violence（暴力の蔓延）」のように社会問題が急増する状況にも使われる。\n\nendemic（特定地域に常在する）、pandemic（世界的規模で流行する）と対比して理解すると整理しやすい。COVID-19のパンデミック以降、これらの用語の正確な使い分けが一般にも広く意識されるようになった。",
      derivatives: [
        { word: "epidemiologist", desc: "疫学者" },
        { word: "epidemiology",   desc: "疫学（流行病の科学的研究）" }
      ],
      family: [
        { word: "pandemic",    desc: "世界的流行病（pan- 全て + dēmos）" },
        { word: "endemic",     desc: "特定地域に常在する（en- 中に + dēmos）" },
        { word: "democracy",   desc: "民主主義（dēmos + kratos）" },
        { word: "demographic", desc: "人口統計的な" }
      ],
      compounds: [
        { phrase: "epidemic disease",  desc: "流行病・伝染病" },
        { phrase: "epidemic outbreak", desc: "感染爆発・流行の発生" }
      ]
    },

    "pandemic": {
      origin: "ギリシャ語 pandēmos（全ての民衆にわたる）< pan-（全て）+ dēmos（民衆）。英語には17世紀半ばに形容詞として入り、「全住民に影響する」を意味したが、医学的な「世界規模の流行病」という意味は19世紀に確立した。\n\nWHO（世界保健機関）は pandemic を「複数の大陸・地域にまたがって流行する感染症」と定義する。2009年の H1N1 インフルエンザ、2020年の COVID-19 で、この語は一般市民の日常語になった。\n\n語頭の pan-（全て）は panacea（万能薬）、panorama（全景）、pantheism（汎神論）など多くの英語語彙を形成する重要な接頭辞である。",
      derivatives: [
        { word: "pan-",        desc: "全ての〜・汎〜（接頭辞）" }
      ],
      family: [
        { word: "epidemic",    desc: "（地域的）流行病（epi- + dēmos）" },
        { word: "endemic",     desc: "特定地域常在の（en- + dēmos）" },
        { word: "panacea",     desc: "万能薬（pan- + akos 治療）" },
        { word: "panorama",    desc: "全景・パノラマ（pan- + horama 景色）" },
        { word: "democracy",   desc: "民主主義（dēmos + kratos）" }
      ],
      compounds: [
        { phrase: "global pandemic",     desc: "世界的パンデミック" },
        { phrase: "pandemic response",   desc: "感染症対策・パンデミック対応" }
      ]
    },

    "demographic": {
      origin: "ギリシャ語 dēmos（民衆）+ graphein（書く・描く）に由来する近代語。19世紀に人口統計を科学的に記述・分析する概念として生まれ、「人口の構成や変動を統計的に研究する」という意味で社会科学に定着した。\n\n形容詞として「人口統計的な」を意味するほか、名詞（複数形 demographics）として「対象集団の年齢・性別・収入・地域などの統計データ」を指す。特にマーケティング・政治・メディアの分野で「ターゲット層」を表す重要概念として使われる。\n\n現代のビジネス・政策立案では、データドリブンな意思決定の基礎として demographics の把握が不可欠とされている。",
      derivatives: [
        { word: "demographics",   desc: "人口統計データ・ターゲット層（名詞複数）" },
        { word: "demographer",    desc: "人口学者・人口統計学者" },
        { word: "demography",     desc: "人口学・人口統計学" }
      ],
      family: [
        { word: "democracy",    desc: "民主主義（dēmos + kratos）" },
        { word: "epidemic",     desc: "流行病（epi- + dēmos）" },
        { word: "photograph",   desc: "写真（phōs 光 + graphein）" },
        { word: "geography",    desc: "地理学（gē + graphein）" }
      ],
      compounds: [
        { phrase: "demographic data",    desc: "人口統計データ" },
        { phrase: "demographic shift",   desc: "人口構成の変化" },
        { phrase: "target demographic",  desc: "ターゲット層・対象人口集団" }
      ]
    },

    // ── bios系（生命）──
    "biology": {
      origin: "ギリシャ語 bios（生命・生活）+ logos（学問・論）から成る近代造語。1800年頃にドイツの科学者ゴットフリート・ラインホルト・トレヴィラヌスとフランスのジャン＝バティスト・ラマルクがほぼ同時に造語し、「生きるものを対象とする総合的な自然科学」として確立させた。\n\n19世紀はダーウィンの進化論（1859年）やメンデルの遺伝法則（1865年）が発表され、生物学が急速に体系化された時代。20世紀にはDNA二重らせん構造の発見（1953年）を機に分子生物学が台頭し、現在ではゲノム科学・合成生物学・神経生物学など多くの分野に分化している。\n\n語根 bio- は biography（伝記）、antibiotic（抗生物質）、biodiversity（生物多様性）など、生命に関わる多数の英語語彙を形成する。",
      derivatives: [
        { word: "biologist",    desc: "生物学者" },
        { word: "biological",   desc: "生物学的な・生物の（形容詞）" },
        { word: "biologically", desc: "生物学的に（副詞）" }
      ],
      family: [
        { word: "biography",    desc: "伝記（bios + graphein）" },
        { word: "antibiotic",   desc: "抗生物質（anti- + bios）" },
        { word: "biodiversity", desc: "生物多様性（bios + diversity）" },
        { word: "ecosystem",    desc: "生態系（eco < oikos 家 + system）" }
      ],
      compounds: [
        { phrase: "marine biology",    desc: "海洋生物学" },
        { phrase: "molecular biology", desc: "分子生物学" }
      ]
    },

    "biography": {
      origin: "ギリシャ語 bios（生命・人生）+ graphein（書く）から成る複合語。17世紀の英語に入り、「ある人物の生涯を記述した文章・書物」を意味するようになった。\n\n伝記文学の歴史は古く、古代ギリシャのプルタルコス『英雄伝』（1世紀）が西洋伝記の古典とされる。近代以降はサミュエル・ジョンソン博士の伝記（ジェームズ・ボズウェル著、1791年）が「詳細・客観的な伝記」の規範を確立し、以降の伝記文学に大きな影響を与えた。\n\n現代では autobiography（自伝）、memoir（回想録）、hagiography（聖人伝・美化された伝記）と区別して使われる。",
      derivatives: [
        { word: "biographer",      desc: "伝記作家" },
        { word: "biographical",    desc: "伝記的な・生涯に関する（形容詞）" },
        { word: "autobiography",   desc: "自伝（auto- 自分自身 + biography）" }
      ],
      family: [
        { word: "biology",         desc: "生物学（bios + logos）" },
        { word: "antibiotic",      desc: "抗生物質（anti- + bios）" },
        { word: "photograph",      desc: "写真（phōs 光 + graphein）" },
        { word: "autograph",       desc: "直筆サイン（auto- + graphein）" }
      ],
      compounds: [
        { phrase: "authorized biography", desc: "公式伝記（本人公認の）" },
        { phrase: "biographical sketch",  desc: "略歴・人物紹介" }
      ]
    },

    "antibiotic": {
      origin: "ギリシャ語 anti-（対抗する）+ bios（生命）から成る複合語。1942年にセルマン・ワクスマンが細菌を殺す化学物質を指す科学用語として antibiotics を造語し、以来「細菌の生命活動に対抗する薬物」という意味で定着した。\n\nアレクサンダー・フレミングが1928年にペニシリンを発見し、第二次世界大戦中にその大量生産が実現したことで、抗生物質は20世紀医学最大の革新の一つとなった。\n\n現代では抗生物質耐性菌（antibiotic-resistant bacteria）の問題が深刻化しており、抗生物質の不必要な使用を控えることが世界的な公衆衛生課題となっている。",
      derivatives: [
        { word: "antibacterial",  desc: "抗菌の・殺菌性の（anti- + bacterial）" },
        { word: "antiviral",      desc: "抗ウイルスの（anti- + viral）" }
      ],
      family: [
        { word: "biology",        desc: "生物学（bios + logos）" },
        { word: "biography",      desc: "伝記（bios + graphein）" },
        { word: "antibiosis",     desc: "拮抗現象（生物同士が互いに阻害し合う）" },
        { word: "probiotic",      desc: "プロバイオティクス（pro- 促進 + bios）" }
      ],
      compounds: [
        { phrase: "antibiotic resistance",  desc: "抗生物質耐性" },
        { phrase: "broad-spectrum antibiotic", desc: "広域抗生物質" }
      ]
    },

    // ── multi / poly系（多い・多数）──
    "multiple": {
      origin: "ラテン語 multiplex（多重の）< multi-（多くの）+ plicare（折る・重ねる）。plicare は英語の fold（折る）と同じインド・ヨーロッパ語族の語根 *plek- に由来する。multiplex はもともと「何重にも折り重なった」を意味した。\n\n英語には14世紀に入り、「多数の・複数の」という形容詞として定着。数学では「倍数」の意味にもなる（a multiple of 3 = 3の倍数）。multiple choice（多肢選択）、multiple sclerosis（多発性硬化症）のように形容詞として幅広く使われる。\n\n語根 multi- はmultitude（多数）、multilingual（多言語の）、multimedia（マルチメディア）など多数の英語語彙を形成する汎用接頭辞である。",
      derivatives: [
        { word: "multiply",    desc: "掛け算する・増殖する（multiplier 掛けるもの）" },
        { word: "multiplier",  desc: "乗数・増幅する要因" },
        { word: "multiplication", desc: "掛け算・増加（名詞）" }
      ],
      family: [
        { word: "multitude",   desc: "多数・大衆（multitudo）" },
        { word: "complex",     desc: "複雑な（com- + plex 折り重ねた）" },
        { word: "duplex",      desc: "二重の（duo + plex）" },
        { word: "triple",      desc: "三倍の（tri- + plex の変形）" }
      ],
      compounds: [
        { phrase: "multiple choice",   desc: "多肢選択式（試験形式）" },
        { phrase: "multiple roles",    desc: "複数の役割" }
      ]
    },

    "multitude": {
      origin: "ラテン語 multitudo（多さ・大群）< multus（多くの）の名詞形。multus は英語の much、many とともにインド・ヨーロッパ語族の「多い」を意味する語根に由来する。\n\n14世紀の英語に入り、「非常に多くの人々・大勢の群衆」を指す格調ある表現として定着。聖書の英語訳（the multitude = 群衆）でも頻出し、宗教・文学的な響きを帯びる語でもある。\n\n「a multitude of problems（多数の問題）」のように抽象的な「多さ」にも使われる。cover a multitude of sins（多くの欠点を覆い隠す）は聖書由来の慣用句。",
      derivatives: [
        { word: "multitudinous", desc: "非常に多くの・多数からなる（形容詞）" }
      ],
      family: [
        { word: "multiple",    desc: "複数の・多数の（multi- + plex）" },
        { word: "multiply",    desc: "掛け算する・増殖する" },
        { word: "multifarious", desc: "多種多様な（multi- + farius）" },
        { word: "much",        desc: "多くの（同じ語根の英語形）" }
      ],
      compounds: [
        { phrase: "a multitude of",     desc: "多数の〜・大量の〜" },
        { phrase: "cover a multitude of sins", desc: "多くの欠点を隠す（聖書由来）" }
      ]
    },

    "polygon": {
      origin: "ギリシャ語 polus（多くの）+ gōnia（角・頂点）から成る数学用語。gōnia は「膝・曲がり角」を意味し、英語の knee とも語源が近い（印欧語根 *genu-）。多角形の頂点の数で三角形（triangle）、四角形（quadrangle）、五角形（pentagon）などと分類される。\n\n「polygon」は「多角形の総称」として16世紀に英語に定着した数学・幾何学の基本用語。コンピュータグラフィックスでは三次元オブジェクトをポリゴン（多角形の集合）で表現する手法が標準的で、現代のゲーム・CG制作に不可欠な概念でもある。\n\n語根 poly- はpolyglot（多言語の）、polygon（多角形）、polymath（博識者）、polyphony（多声音楽）など多くの語を形成する。",
      derivatives: [
        { word: "polygonal",  desc: "多角形の（形容詞）" }
      ],
      family: [
        { word: "pentagon",   desc: "五角形（penta- 5 + gōnia）" },
        { word: "hexagon",    desc: "六角形（hexa- 6 + gōnia）" },
        { word: "diagonal",   desc: "対角線（dia- + gōnia）" },
        { word: "polyglot",   desc: "多言語の・複数言語を話す人" },
        { word: "triangle",   desc: "三角形（tri- + angulus）" }
      ],
      compounds: [
        { phrase: "regular polygon",   desc: "正多角形" },
        { phrase: "polygon mesh",      desc: "ポリゴンメッシュ（CG用語）" }
      ]
    },

    "polyglot": {
      origin: "ギリシャ語 polus（多くの）+ glōtta / glōssa（舌・言語）の複合語。glōssa は「舌」を意味し、英語の gloss（光沢・注釈）や glossary（用語集）の語源でもある。poly- + glōtta で「多くの舌を持つ＝多言語を話す」という意味になる。\n\n17世紀に英語に入り、当初は「複数の言語で書かれた書物（特に聖書）」を指す名詞として使われた。現代では「複数の言語を流暢に話す人」または「多言語の（形容詞）」として使われる。\n\nハイパーポリグロット（hyperpolyglot）は6言語以上を高度に習得した人物を指す現代の用語で、言語習得コミュニティでは憧れの存在とされる。",
      derivatives: [
        { word: "polyglotism",  desc: "多言語使用・多言語主義" }
      ],
      family: [
        { word: "polygon",      desc: "多角形（poly- + gōnia）" },
        { word: "bilingual",    desc: "二言語の（bi- + lingua）" },
        { word: "multilingual", desc: "多言語の（multi- + lingua）" },
        { word: "glossary",     desc: "用語集（glōssa 舌・言語）" },
        { word: "polymath",     desc: "博識者（poly- + math 学ぶ）" }
      ],
      compounds: [
        { phrase: "a polyglot society",  desc: "多言語社会" }
      ]
    },

    // ── micro / min系（小さい）──
    "microscope": {
      origin: "ギリシャ語 mikros（小さい）+ skopein（見る・観察する）から成る近代造語。オランダの眼鏡職人アントニ・ファン・レーウェンフックが1670年代に高倍率の単式顕微鏡を製作し、細菌・精子・赤血球などを初めて観察したことで科学史上の革命が起きた。\n\n語根 skopein は telescope（遠くを見る）、stethoscope（胸を聴く）、periscope（周囲を見る）など多くの観察機器名を形成する。microscope は「肉眼では見えない小さなものを見る道具」として17世紀に英語に定着した。\n\n現代では光学顕微鏡のほか、電子顕微鏡（electron microscope）、走査型プローブ顕微鏡（scanning probe microscope）など多様な種類に発展し、生物学・材料科学・ナノテクノロジーの基礎装置となっている。",
      derivatives: [
        { word: "microscopic",    desc: "顕微鏡的な・非常に小さな（形容詞）" },
        { word: "microscopically", desc: "顕微鏡的に・微細に（副詞）" },
        { word: "microbiology",   desc: "微生物学（mikros + bios + logos）" }
      ],
      family: [
        { word: "telescope",    desc: "望遠鏡（tele- 遠くの + skopein）" },
        { word: "microphone",   desc: "マイク（mikros + phōnē 音）" },
        { word: "micron",       desc: "マイクロメートル（mikros の単位形）" },
        { word: "scope",        desc: "範囲・〜を調べる（skopein から）" }
      ],
      compounds: [
        { phrase: "under the microscope", desc: "顕微鏡下で・詳しく調べられて" },
        { phrase: "electron microscope",  desc: "電子顕微鏡" }
      ]
    },

    "diminish": {
      origin: "ラテン語 deminuere（小さくする・減らす）< de-（下に・離れて）+ minuere（小さくする）< minus（より少ない）。minus は英語の minor（小さい方の）、minute（微小な）、minimum（最小）と共通の語根を持つ。\n\n14世紀の英語に入り「徐々に小さくなる・減少する」を意味する動詞として定着。物理的な縮小（the sound diminished = 音が小さくなった）のほか、「重要性・評判などが低下する」という抽象的意味でも使われる。\n\ndiminished chord（音楽で半音下がった和音）、law of diminishing returns（収穫逓減の法則）のように専門用語にも登場する。",
      derivatives: [
        { word: "diminution",    desc: "減少・縮小（名詞）" },
        { word: "diminutive",    desc: "小型の・縮小辞（文法・形容詞）" },
        { word: "diminished",    desc: "減少した・縮小された（形容詞）" }
      ],
      family: [
        { word: "minimum",      desc: "最小値（minimus 最も小さい）" },
        { word: "minor",        desc: "小さい方の・未成年の（minor）" },
        { word: "minute",       desc: "微小な（minutus 小さくされた）" },
        { word: "minister",     desc: "奉仕者・大臣（minister 小さい者）" }
      ],
      compounds: [
        { phrase: "diminishing returns",   desc: "収穫逓減（経済学用語）" },
        { phrase: "diminished capacity",   desc: "限定責任能力（法律用語）" }
      ]
    },

    "minute": {
      origin: "ラテン語 minutus（細かくされた・小さい）< minuere（小さくする）の過去分詞。元来「分割された時間の小片」を意味し、中世の天文学で1時間を60の「pars minuta prima（第一の小部分）」に分けたことが「分（minute）」の語源となった。\n\n英語では14世紀頃から時間の単位として定着。形容詞 minute（マイニュート）は「非常に小さい・細かい」という意味で、同じ綴りながら名詞（ミニット）と発音が異なる。「minute details（細部まで細かい）」のように書き言葉で用いられる。\n\n議事録を「minutes」と呼ぶのも同語源で、会議で「細かく記録されたもの」を意味する。",
      derivatives: [
        { word: "minutely",    desc: "詳細に・細かく（副詞）" },
        { word: "minutiae",    desc: "細かな点・些細なこと（複数形ラテン語）" }
      ],
      family: [
        { word: "minimum",    desc: "最小値（minimus 最も小さい）" },
        { word: "minor",      desc: "小さい方の・未成年（minor）" },
        { word: "diminish",   desc: "小さくする・減少する（de- + minuere）" },
        { word: "second",     desc: "秒（pars minuta secunda 第二の小部分）" }
      ],
      compounds: [
        { phrase: "in a minute",        desc: "すぐに・少し後で" },
        { phrase: "minute details",     desc: "細部・細かな点（形容詞 minute の用例）" },
        { phrase: "meeting minutes",    desc: "議事録" }
      ]
    },

    "minimum": {
      origin: "ラテン語 minimus（最も小さい・最少の）< minus（より少ない）の最上級形。minus 自体はインド・ヨーロッパ語根 *mei-（小さい）に由来し、英語の less とも関連する。\n\n英語には17世紀に数学・哲学用語として入り、「ある条件のもとで可能な最小値」を指す。数学では maximum（最大値）と対をなす用語。「minimum wage（最低賃金）」「minimum requirement（最低要件）」のように「これ以下にはできない下限」を表す。\n\n副詞句 at a minimum は「少なくとも・最低でも」という意味の基本フレーズで、英語のビジネス・学術文書に頻出する。",
      derivatives: [
        { word: "minimal",      desc: "最小限の・極めて少ない（形容詞）" },
        { word: "minimize",     desc: "最小化する・過小評価する" },
        { word: "minimalism",   desc: "ミニマリズム（最小限の美学・様式）" },
        { word: "minimalist",   desc: "ミニマリスト・最小主義者" }
      ],
      family: [
        { word: "maximum",      desc: "最大値（maximus 最も大きい）" },
        { word: "minor",        desc: "小さい方の・二次的な（minor）" },
        { word: "minute",       desc: "微小な（minutus）" },
        { word: "diminish",     desc: "減少する（de- + minuere）" }
      ],
      compounds: [
        { phrase: "minimum wage",        desc: "最低賃金" },
        { phrase: "at a minimum",        desc: "少なくとも・最低でも" },
        { phrase: "bare minimum",        desc: "最低限・必要最小限" }
      ]
    },

    // ── graphein / gramma系（書く・記録）──
    "photograph": {
      origin: "ギリシャ語 phōs / phōtos（光）+ graphein（書く・描く）から成る19世紀の造語。1839年にルイ・ダゲールが銀板写真術を公開し、同年ジョン・ハーシェルが photography という語を造った。「光で書く（描く）」という詩的な語源は、写真の本質を見事に捉えている。\n\n写真術の発明は芸術・科学・報道・記録のあらゆる分野を変革した。現代では film photography（フィルム写真）から digital photography（デジタル写真）に移行し、スマートフォンが日常的な記録媒体となっている。\n\n語根 photo- は photosynthesis（光合成）、photoelectric（光電効果）など、光に関わる科学語彙を広く形成する。",
      derivatives: [
        { word: "photography",   desc: "写真術・写真撮影" },
        { word: "photographer",  desc: "写真家・カメラマン" },
        { word: "photographic",  desc: "写真の・写真のように精密な（形容詞）" }
      ],
      family: [
        { word: "photosynthesis", desc: "光合成（phōs + synthesis 合成）" },
        { word: "autobiography",  desc: "自伝（auto- + bio + graphein）" },
        { word: "paragraph",      desc: "段落（para- + graphein）" },
        { word: "autograph",      desc: "直筆サイン（auto- + graphein）" }
      ],
      compounds: [
        { phrase: "aerial photograph", desc: "航空写真" },
        { phrase: "photographic memory", desc: "映像記憶・ものすごい記憶力" }
      ]
    },

    "paragraph": {
      origin: "ギリシャ語 paragraphos（横に書いたもの）< para-（横に・傍に）+ graphein（書く）。中世の写本では段落の区切りを示すために欄外に小さな記号（¶）を書いていたことが語源で、この記号は今でもピラグラフ記号（pilcrow）と呼ばれる。\n\n16世紀の英語に入り「文章の意味的なまとまりを示す段落」という現代的な意味に定着。一つの主張を述べ・支持し・まとめる文章の基本単位として、英語の学術・ビジネスライティングで重視されている。\n\n語根 para-（横に・傍に）は parallel（並行する）、paradox（逆説・para- 反して + doxa 意見）、paramedic（救急隊員）など多くの語を形成する。",
      derivatives: [
        { word: "paragraphing",  desc: "段落分け・段落構成" }
      ],
      family: [
        { word: "photograph",    desc: "写真（phōs + graphein）" },
        { word: "autograph",     desc: "直筆サイン（auto- + graphein）" },
        { word: "diagram",       desc: "図解（dia- + graphein）" },
        { word: "parallel",      desc: "並行の・平行線（para- + allos 他）" }
      ],
      compounds: [
        { phrase: "opening paragraph",  desc: "冒頭の段落・序文" },
        { phrase: "body paragraph",     desc: "本文の段落（序論・結論以外）" }
      ]
    },

    "diagram": {
      origin: "ギリシャ語 diagramma（線を引いて描いたもの）< dia-（通じて・横切って）+ graphein（書く・描く）。古代ギリシャの数学・論理学で「図形・概念を線で描き示したもの」を意味し、ユークリッド幾何学の証明図などに使われた。\n\n英語には17世紀に入り「図・図解・概念図」を指す。複雑な関係・プロセス・構造を視覚的に表現する手段として、科学・工学・ビジネスに不可欠な語となっている。Venn diagram（ベン図）、flow diagram（流れ図）など多くの複合語を形成する。\n\n動詞としても使え、diagram a sentence（文の構造を図解する）のように用いられる。",
      derivatives: [
        { word: "diagrammatic",  desc: "図表の・図解による（形容詞）" },
        { word: "diagrammatically", desc: "図式的に（副詞）" }
      ],
      family: [
        { word: "paragraph",     desc: "段落（para- + graphein）" },
        { word: "photograph",    desc: "写真（phōs + graphein）" },
        { word: "telegram",      desc: "電報（tele- + gramma 書いたもの）" },
        { word: "diagonal",      desc: "対角線（dia- + gōnia 角）" }
      ],
      compounds: [
        { phrase: "Venn diagram",  desc: "ベン図（集合の関係を示す図）" },
        { phrase: "flow diagram",  desc: "フロー図・流れ図" }
      ]
    },

    "telegram": {
      origin: "ギリシャ語 tele-（遠くの）+ gramma（書いたもの・文字）から成る19世紀の造語。電信（telegraph）が実用化された1840年代に、電信で送受信される「メッセージ」を指す語として生まれた。\n\nサミュエル・モールスが1844年にモールス信号による電信を実演して以降、電報は19〜20世紀の主要な長距離通信手段となった。「STOP」（ピリオドの代わり）を文末に打つスタイルや、文字数を節約する電報文体が生まれたのもこの時代である。\n\n現代の通信アプリ Telegram はこの語から名前を取り、「素早く・安全にメッセージを届ける」というコンセプトを旧来の電報になぞらえている。",
      derivatives: [
        { word: "telegraph",    desc: "電信・電報機（tele- + graphein）" },
        { word: "telegraphy",   desc: "電信術" },
        { word: "telegraphic",  desc: "電報式の・簡潔な（形容詞）" }
      ],
      family: [
        { word: "telephone",    desc: "電話（tele- + phōnē 音）" },
        { word: "television",   desc: "テレビ（tele- + vision 映像）" },
        { word: "diagram",      desc: "図（dia- + gramma）" },
        { word: "grammar",      desc: "文法（gramma 書いたもの）" }
      ],
      compounds: [
        { phrase: "send a telegram",   desc: "電報を打つ" }
      ]
    },

    // ── logos系（言葉・論理・学問）──
    "logic": {
      origin: "ギリシャ語 logikē（論理的思考の技術）< logos（言葉・理性・論理）。アリストテレスが「正しい推論の法則を研究する学問」として体系化し（紀元前4世紀）、演繹法・帰納法・三段論法などの形式を確立した。\n\nラテン語 logica を経て14世紀の英語に入り、当初は哲学の一部門を指す学術語だったが、やがて「理に適った考え方・筋道だった推論」という日常的な意味にも広がった。「the logic of the argument（議論の論理）」「that's not logical（それは論理的でない）」のように使う。\n\n現代では数理論理学・コンピュータ論理（AND/OR/NOT ゲート）など科学技術の基礎をなすほか、「business logic（業務ロジック）」のようにソフトウェア工学でも中心的な概念となっている。",
      derivatives: [
        { word: "logical",      desc: "論理的な・筋の通った（形容詞）" },
        { word: "logically",    desc: "論理的に（副詞）" },
        { word: "logician",     desc: "論理学者" },
        { word: "logistics",    desc: "物流・兵站（logistikos 計算の）" }
      ],
      family: [
        { word: "logos",        desc: "言葉・理性・論理（ギリシャ語）" },
        { word: "dialogue",     desc: "対話（dia- 間で + logos）" },
        { word: "monologue",    desc: "独白（mono- 一人 + logos）" },
        { word: "analogy",      desc: "類推・アナロジー（ana- 従って + logos）" }
      ],
      compounds: [
        { phrase: "the logic of",     desc: "〜の論理・〜が理にかなっている根拠" },
        { phrase: "logical thinking", desc: "論理的思考" }
      ]
    },

    "dialogue": {
      origin: "ギリシャ語 dialogos（対話）< dia-（間で・通じて）+ logos（言葉・論理）。diálegein は「互いに言葉を交わす」を意味し、プラトンの哲学著作が「対話篇（Dialogues）」の形式で書かれたことで文学・哲学の重要なジャンルとなった。\n\nラテン語 dialogus を経て14世紀の英語に定着。文学では「会話・台詞」を指し、政治・外交では「交渉・討議・協調の場」を意味する。inter-cultural dialogue（異文化間対話）、peace dialogue（和平交渉）のように使われる。\n\n語頭 dia- は「通じて・横切って」を意味し、diagonal（対角線）、diagnosis（診断 ＝ 徹底して知ること）、diameter（直径 ＝ 通り抜ける長さ）にも共通する。",
      derivatives: [
        { word: "dialogic",    desc: "対話的な（形容詞・バフチン理論で使う）" }
      ],
      family: [
        { word: "monologue",   desc: "独白・一人語り（mono- + logos）" },
        { word: "prologue",    desc: "序文・前置き（pro- 前 + logos）" },
        { word: "epilogue",    desc: "後記・後日談（epi- 後 + logos）" },
        { word: "logic",       desc: "論理（logikē）" },
        { word: "diagnosis",   desc: "診断（dia- + gnōsis 知ること）" }
      ],
      compounds: [
        { phrase: "open dialogue",    desc: "オープンな対話・率直な議論" },
        { phrase: "dialogue box",     desc: "ダイアログボックス（UI用語）" }
      ]
    },

    "monologue": {
      origin: "ギリシャ語 monos（一人・単独の）+ logos（言葉）の複合語。16世紀のフランス語を経て英語に入り、「一人で長く話すこと・一人語り」を意味する。演劇では登場人物が舞台上で一人で台詞を述べる形式を指し、シェイクスピアの「To be, or not to be」などが有名なモノローグである。\n\nsoliloquy（< soli- 一人 + loqui 話す）とほぼ同義だが、soliloquy は「自分の心の声を声に出す内省的な独白」、monologue は「他者がいながら一人だけが話し続ける状況」というニュアンスの違いがある。\n\n現代ではコメディアンの stand-up monologue（一人コント）や podcast の語りスタイルなど、エンターテインメント分野でも広く使われる。",
      derivatives: [
        { word: "monologue",  desc: "（動詞化）独白する・一人で話し続ける" }
      ],
      family: [
        { word: "dialogue",   desc: "対話（dia- 互いに + logos）" },
        { word: "prologue",   desc: "序文（pro- 前に + logos）" },
        { word: "epilogue",   desc: "後記（epi- 後に + logos）" },
        { word: "monotone",   desc: "単調な声（mono- + tonos 音）" },
        { word: "monopoly",   desc: "独占（mono- + pōlein 売る）" }
      ],
      compounds: [
        { phrase: "inner monologue",  desc: "内的独白・意識の流れ" },
        { phrase: "opening monologue", desc: "冒頭の語り・オープニングトーク" }
      ]
    },

    "analogy": {
      origin: "ギリシャ語 analogia（比例・対応）< ana-（従って・比べて）+ logos（理性・論理）。数学・哲学用語として「A対BはC対Dと同じ」という比例関係を表す語だった。アリストテレスが類推による論証の一形式として体系化した。\n\nラテン語 analogia を経て16世紀の英語に入り、「二つの異なるものの間にある構造的・機能的な対応関係」を表す修辞・論理の概念として定着。analogy を使った説明は「複雑な概念を親しみやすいものに例える」という教育・説得の手法として不可欠である。\n\nanalogous（類似した）、analogously（類似した形で）のように派生語も多い。コンピュータ科学では analog（アナログ）と対比されるデジタルの概念にも関わる語根である。",
      derivatives: [
        { word: "analogous",     desc: "類似した・対応する（形容詞）" },
        { word: "analogously",   desc: "類似した形で（副詞）" },
        { word: "analogize",     desc: "類推する・アナロジーで説明する" }
      ],
      family: [
        { word: "logic",         desc: "論理（logos から）" },
        { word: "dialogue",      desc: "対話（dia- + logos）" },
        { word: "analog",        desc: "アナログの（analogia から）" },
        { word: "catalog",       desc: "目録（kata- 下に + logos）" }
      ],
      compounds: [
        { phrase: "by analogy",         desc: "類推によって・アナロジーとして" },
        { phrase: "draw an analogy",    desc: "比較する・アナロジーを引く" }
      ]
    },

    // ── lex / leg系（法・読む）──
    "legal": {
      origin: "ラテン語 legalis（法律に関する）< lex / legis（法律）。lex はローマの成文法を指し、「言語化・文書化されたルール」というニュアンスを持つ。同根の legislature（立法機関）、legitimate（合法的な）、privilege（特権 < privata lex 個人的な法）もこの語幹を共有する。\n\n14世紀に英語に入り「法律上の・合法の」という形容詞として定着。対義語の illegal は接頭辞 il-（in-の変形、否定）を付けたもの。legal advice（法的助言）、legal proceedings（法的手続き）など法律・ビジネスの核心語となっている。\n\n語根 leg- は legislate（立法する）、legitimate（合法化する）など動詞派生語も多く、現代の法律・政治語彙を広く支えている。",
      derivatives: [
        { word: "legally",      desc: "法的に・合法的に（副詞）" },
        { word: "legality",     desc: "合法性・適法性" },
        { word: "legalize",     desc: "合法化する" },
        { word: "illegal",      desc: "違法な（il- + legal）" }
      ],
      family: [
        { word: "legislature",  desc: "立法機関（lex + latus 運ばれた）" },
        { word: "legitimate",   desc: "合法的な・正当な（legitimatus）" },
        { word: "delegate",     desc: "代表者・委任する（de- + legare 送る）" },
        { word: "privilege",    desc: "特権（privata lex 個人の法）" }
      ],
      compounds: [
        { phrase: "legal advice",      desc: "法的助言・弁護士への相談" },
        { phrase: "legal proceedings", desc: "法的手続き・訴訟" }
      ]
    },

    "delegate": {
      origin: "ラテン語 delegare（代理として送り出す）< de-（下に・完全に）+ legare（使者として送る・遺贈する）。legare はラテン語 lex（法律）とも関連し、「法的な権限を持って送り出す」という意味合いを持つ。\n\n名詞「代表者・代議員」と動詞「委任する・権限を委ねる」の両方で使われる。英語には16世紀に入り、外交・政治・経営の文脈で「自分の代わりに行動する権限を人に与える」という意味で頻用されるようになった。\n\nマネジメントでは delegation of authority（権限委譲）が重要なリーダーシップスキルとして注目される。上司がすべてを抱え込むのではなく、適切な権限を委ねることで組織の効率が上がるという考え方である。",
      derivatives: [
        { word: "delegation",    desc: "代表団・権限委譲（名詞）" },
        { word: "delegator",     desc: "委任者・権限を委ねる人" }
      ],
      family: [
        { word: "legal",         desc: "法的な（lex 法律）" },
        { word: "legislature",   desc: "立法機関" },
        { word: "relay",         desc: "リレー・中継（re- + layer < legare）" },
        { word: "legacy",        desc: "遺産・遺産（legatum 遺贈されたもの）" }
      ],
      compounds: [
        { phrase: "delegate authority",   desc: "権限を委ねる・委任する" },
        { phrase: "delegation of tasks",  desc: "業務の委任・タスク委譲" }
      ]
    },

    "legitimate": {
      origin: "ラテン語 legitimatus（法律に従った）< legitimus（合法的な）< lex / legis（法律）。中世では「正式な婚姻から生まれた子」を指す法律用語として使われており、嫡出子と庶子を区別する文脈で重要な語だった。\n\n16世紀の英語に入り、「法律・規則・道理に合った・正統な」という意味に広がった。legitimate government（正統な政府）のように政治的権威の正当性を問う文脈や、legitimate concern（もっともな懸念）のように「根拠のある・正当な」という日常的な意味でも使われる。\n\n動詞 legitimize / legitimize は「合法化する・正当化する」を意味し、さまざまな社会的・政治的議論で登場する。",
      derivatives: [
        { word: "legitimately",  desc: "合法的に・正当に（副詞）" },
        { word: "legitimacy",    desc: "合法性・正当性（名詞）" },
        { word: "legitimize",    desc: "正当化する・合法化する" }
      ],
      family: [
        { word: "legal",         desc: "法的な（lex + -al）" },
        { word: "illegal",       desc: "違法な（il- + legal）" },
        { word: "delegate",      desc: "委任する（de- + legare）" },
        { word: "privilege",     desc: "特権（privata lex）" }
      ],
      compounds: [
        { phrase: "legitimate concern",   desc: "もっともな懸念・正当な心配" },
        { phrase: "legitimate authority", desc: "正当な権威・合法的な権力" }
      ]
    },

    // ── cred系（信じる）──
    "credit": {
      origin: "ラテン語 creditum（貸し付けたもの）< credere（信じる・信用して貸す）。credere は「心を委ねる」を原義とし、「信頼に基づいて価値を前渡しする」という金融の本質を語源に含む。\n\n14世紀の英語に入り、当初は「信用・信頼」の意味で使われ、やがて「借金・信用取引・クレジット」の金融用語に特化した。現代では映画のエンドクレジット（出演者名一覧）、学校の単位（credit）、功績・名誉（take credit for）など多義的に使われる。\n\n語根 cred- はcredible（信頼できる）、incredible（信じられない）、credential（資格証明書）、creed（信条）を形成し、「信じる」という概念を英語語彙の幅広い領域に広めた。",
      derivatives: [
        { word: "creditor",    desc: "債権者・貸し手（credit + -or）" },
        { word: "credible",    desc: "信頼できる・信憑性のある（形容詞）" },
        { word: "credential",  desc: "資格証明・信任状（credentialis）" },
        { word: "accredit",    desc: "認定する・資格を与える（ad- + credit）" }
      ],
      family: [
        { word: "incredible",  desc: "信じられない（in- + credibilis）" },
        { word: "creed",       desc: "信条・信念の表明（credo）" },
        { word: "credo",       desc: "信条・信念（ラテン語「私は信じる」）" }
      ],
      compounds: [
        { phrase: "take credit for",  desc: "〜の功績を自分のものにする" },
        { phrase: "credit card",      desc: "クレジットカード" },
        { phrase: "on credit",        desc: "ツケで・信用払いで" }
      ]
    },

    "incredible": {
      origin: "ラテン語 incredibilis（信じることができない）< in-（否定）+ credibilis（信じられる）< credere（信じる）。元来「あまりにも非常識で信じられない」という否定的な意味を持っていたが、英語では強意表現として「素晴らしい・驚異的な」という肯定的な意味にも転用された。\n\n16世紀の英語に入り、最初は「信じがたい」という字義通りの意味で使われた。現代口語では "That's incredible!"（すごい！）のように驚きや感嘆を表す強調語として頻用される。意味の軽量化（semantic bleaching）の典型例でもある。\n\n副詞 incredibly は「信じられないほど・とても」という強調副詞として書き言葉・話し言葉双方に頻出する。",
      derivatives: [
        { word: "incredibly",    desc: "信じられないほど・とても（副詞）" },
        { word: "incredulous",   desc: "懐疑的な・信じない（形容詞）" },
        { word: "incredulity",   desc: "懐疑・信じないこと（名詞）" }
      ],
      family: [
        { word: "credit",        desc: "信用・クレジット（credere）" },
        { word: "credible",      desc: "信頼できる・信憑性のある" },
        { word: "creed",         desc: "信条（credo）" }
      ],
      compounds: [
        { phrase: "incredible speed",    desc: "信じられないほどの速さ" },
        { phrase: "simply incredible",   desc: "本当に信じられない・素晴らしい" }
      ]
    },

    "creed": {
      origin: "ラテン語 credo（私は信じる）< credere（信じる）の一人称現在形。キリスト教の信仰告白文「Credo（使徒信条）」はラテン語「私は信じる」の一語で始まることから、宗教的な信仰の表明を creed と呼ぶようになった。\n\n古英語 creda を経て中世英語に定着。当初はキリスト教の信仰箇条を指したが、やがて「個人・組織が信奉する基本的な信念・信条」という広い意味に拡張された。"our company creed（社是・行動指針）" のような非宗教的な文脈でも使われる。\n\ncolor, race, or creed（肌の色・人種・信条を問わず）は差別禁止の文脈でよく使われる定型句。",
      derivatives: [
        { word: "credo",       desc: "信条・行動指針（ラテン語の原形）" }
      ],
      family: [
        { word: "credit",      desc: "信用・クレジット（credere）" },
        { word: "credible",    desc: "信頼できる（credibilis）" },
        { word: "incredible",  desc: "信じられない（in- + credibilis）" },
        { word: "accredit",    desc: "認定する（ad- + credere）" }
      ],
      compounds: [
        { phrase: "regardless of creed",   desc: "信条に関係なく" },
        { phrase: "political creed",       desc: "政治的信条・政治的信念" }
      ]
    },

    // ── rump / rupt系（破れる・壊れる）──
    "interrupt": {
      origin: "ラテン語 interrumpere（間に割り込んで切る）< inter-（間に）+ rumpere（壊す・切る）。rumpere の過去分詞 ruptus が英語の接尾辞 -rupt として多くの語に受け継がれている。\n\n14世紀の英語に入り「話・行動・プロセスの途中に割り込んで妨げる」という動詞として定着。日常会話でもビジネスでも頻用される基本動詞である。コンピュータ科学では割り込み信号（interrupt signal）として、CPU に優先処理を要求する重要な概念にもなっている。\n\n語根 rupt- は corrupt（腐敗した）、erupt（噴出する）、abrupt（唐突な）、disrupt（混乱させる）、bankrupt（破産した）など多くの重要語を形成する。",
      derivatives: [
        { word: "interruption",  desc: "妨害・中断（名詞）" },
        { word: "interrupted",   desc: "中断された・途切れた（形容詞）" },
        { word: "interruptive",  desc: "中断的な・妨害する傾向のある" }
      ],
      family: [
        { word: "corrupt",    desc: "腐敗した（com- + ruptus）" },
        { word: "erupt",      desc: "噴出する（e- 外へ + rumpere）" },
        { word: "abrupt",     desc: "唐突な（ab- 離れて + ruptus）" },
        { word: "disrupt",    desc: "混乱させる（dis- + rumpere）" },
        { word: "rupture",    desc: "破裂・断絶（ruptura）" }
      ],
      compounds: [
        { phrase: "without interruption", desc: "中断なく・ぶっ通しで" },
        { phrase: "interrupt a meeting",  desc: "会議に割り込む・会議を中断する" }
      ]
    },

    "corrupt": {
      origin: "ラテン語 corrumpere（完全に壊す）< com-（完全に）+ rumpere（壊す）の過去分詞 corruptus。「完全に破壊された・腐敗した」という意味が語源で、道徳的・物質的な両面の「腐敗」を包含する。\n\n14世紀に英語に入り、政治・倫理の文脈では「汚職・堕落した」、データ・ファイルの文脈では「破損した・壊れた」という意味で使われる。\n\n権力は腐敗する（Power tends to corrupt）という格言はアクトン卿の言葉として有名で、政治哲学の基本命題の一つになっている。",
      derivatives: [
        { word: "corruption",    desc: "腐敗・汚職・データ破損（名詞）" },
        { word: "corruptible",   desc: "腐敗しやすい・買収できる（形容詞）" },
        { word: "incorruptible", desc: "清廉な・腐敗しない（形容詞）" }
      ],
      family: [
        { word: "interrupt",  desc: "中断する（inter- + rumpere）" },
        { word: "erupt",      desc: "噴出する（e- + rumpere）" },
        { word: "disrupt",    desc: "混乱させる（dis- + rumpere）" },
        { word: "abrupt",     desc: "唐突な（ab- + ruptus）" }
      ],
      compounds: [
        { phrase: "corrupt official",  desc: "腐敗した役人・汚職役人" },
        { phrase: "file corruption",   desc: "ファイル破損（IT用語）" }
      ]
    },

    "erupt": {
      origin: "ラテン語 erumpere（外に向かって破裂する）< e- / ex-（外へ）+ rumpere（壊す・破裂する）。火山が地表を「破り」溶岩を噴き出すイメージが語源の核心にある。\n\n17世紀に英語に入り、火山の噴火を指す最も一般的な動詞として定着。転じて「感情・騒乱・笑いなどが突然爆発的に起こる」という比喩にも使われる。erupt in laughter（笑いが爆発する）、violence erupted（暴力が勃発した）のように。\n\n名詞 eruption は火山噴火のほか「皮膚発疹（rash）」の医学用語にもなっている。",
      derivatives: [
        { word: "eruption",    desc: "噴火・爆発・発疹（名詞）" },
        { word: "eruptive",    desc: "噴火性の・突発的な（形容詞）" }
      ],
      family: [
        { word: "interrupt",   desc: "中断する（inter- + rumpere）" },
        { word: "corrupt",     desc: "腐敗した（com- + rumpere）" },
        { word: "disrupt",     desc: "混乱させる（dis- + rumpere）" },
        { word: "abrupt",      desc: "唐突な（ab- + ruptus）" }
      ],
      compounds: [
        { phrase: "volcanic eruption",  desc: "火山噴火" },
        { phrase: "erupt in anger",     desc: "怒りが爆発する" }
      ]
    },

    "disrupt": {
      origin: "ラテン語 disrumpere（引き裂いてバラバラにする）< dis-（離散・分離）+ rumpere（壊す）。「まとまっていたものを分断する」というイメージが語源にある。\n\n17世紀に英語に入り「秩序・計画・進行を乱す」という動詞として定着。近年は IT・ビジネス分野で disrupt an industry（既存産業を破壊的に変革する）という意味で特に注目され、disruption（ディスラプション）はイノベーション理論の核心概念の一つになっている。\n\nクレイトン・クリステンセンの「破壊的イノベーション（disruptive innovation）」理論（1997年）は、低コスト・低品質から市場参入し既存企業を駆逐する現象を分析したもので、スタートアップ・VC業界の標準語彙になった。",
      derivatives: [
        { word: "disruption",   desc: "混乱・中断・ディスラプション（名詞）" },
        { word: "disruptive",   desc: "破壊的な・混乱を引き起こす（形容詞）" },
        { word: "disruptor",    desc: "破壊者・変革者" }
      ],
      family: [
        { word: "interrupt",    desc: "中断する（inter- + rumpere）" },
        { word: "corrupt",      desc: "腐敗した（com- + rumpere）" },
        { word: "erupt",        desc: "噴出する（e- + rumpere）" },
        { word: "abrupt",       desc: "唐突な（ab- + ruptus）" }
      ],
      compounds: [
        { phrase: "disruptive innovation", desc: "破壊的イノベーション" },
        { phrase: "disrupt the market",    desc: "市場を破壊的に変革する" }
      ]
    },

    "abrupt": {
      origin: "ラテン語 abruptus（引き離されたもの）< ab-（離れて）+ rumpere（壊す）の過去分詞。崖や断崖のように「突然切れ落ちた」という地形描写から転じて「唐突な・予告なしの」という意味になった。\n\n17世紀の英語に入り、「突然の・ぶっきらぼうな・急峻な」という形容詞として使われる。an abrupt end（突然の終わり）、an abrupt manner（ぶっきらぼうな態度）のように、予期しない断絶を表現する際に用いる。\n\n副詞 abruptly はスピーチや叙述の中で「話が突然変わる」「行動が唐突に起きる」状況を端的に伝える。",
      derivatives: [
        { word: "abruptly",    desc: "突然・唐突に（副詞）" },
        { word: "abruptness",  desc: "唐突さ・ぶっきらぼうさ（名詞）" }
      ],
      family: [
        { word: "interrupt",   desc: "中断する（inter- + rumpere）" },
        { word: "corrupt",     desc: "腐敗した（com- + rumpere）" },
        { word: "erupt",       desc: "噴出する（e- + rumpere）" },
        { word: "disrupt",     desc: "混乱させる（dis- + rumpere）" }
      ],
      compounds: [
        { phrase: "an abrupt end",      desc: "突然の終わり・唐突な幕切れ" },
        { phrase: "come to an abrupt halt", desc: "突然停止する" }
      ]
    },

    // ── gen系（生まれる・種族）──
    "generate": {
      origin: "ラテン語 generare（産み出す・生殖する）< genus（種族・種類・出自）。genus は「生まれ・種族」を意味し、インド・ヨーロッパ語根 *gen-（産む・生まれる）に由来する。英語の kin（親族）、kind（種類）とも遠縁にある。\n\n17世紀の英語に入り「生み出す・発生させる」という動詞として定着。電力を generate（発電する）、アイデアを generate（生み出す）のように物理的・抽象的両方の「生成」を表す汎用動詞である。現代では AI が text/image を generate するという文脈でも核心語となっている。\n\n語根 gen- は genre（種類）、genuine（本物の）、generous（気前のよい）、gene（遺伝子）、gender（性別）など非常に多くの英語語彙を形成する最重要語根の一つ。",
      derivatives: [
        { word: "generation",   desc: "世代・産出・発電（名詞）" },
        { word: "generator",    desc: "発電機・生成するもの" },
        { word: "generative",   desc: "生成的な・産出能力のある（形容詞）" }
      ],
      family: [
        { word: "genuine",      desc: "本物の・真正な（genuinus 生まれながらの）" },
        { word: "generous",     desc: "気前のよい（generosus 高貴な出自の）" },
        { word: "gene",         desc: "遺伝子（genos 出自・種族）" },
        { word: "gender",       desc: "性別（genus の変形）" },
        { word: "genre",        desc: "ジャンル・種類（フランス語 genre < genus）" }
      ],
      compounds: [
        { phrase: "generate revenue",    desc: "収益を生み出す" },
        { phrase: "generate electricity", desc: "電力を発電する" },
        { phrase: "next generation",     desc: "次世代" }
      ]
    },

    "genuine": {
      origin: "ラテン語 genuinus（生まれながらの・本来の）< genu（膝）またはgenus（出自）に由来する説が並立する。有力な解釈は、古代ローマで父親が自分の子と認めるとき「膝の上に乗せた」習慣に由来するというもの（genu 膝の上のもの＝正式に認められた子）。\n\n16世紀の英語に入り「本物の・真正な・偽りのない」という意味に定着。a genuine signature（本物の署名）、a genuine effort（本気の努力）のように、模造や偽りに対して「オリジナル・真実のもの」を指す。\n\n人の性格に使うときは「誠実な・裏表のない」というニュアンスが加わり、she's a genuine person（彼女は誠実な人だ）のように使われる。",
      derivatives: [
        { word: "genuinely",   desc: "本当に・心から・偽りなく（副詞）" },
        { word: "genuineness", desc: "真正さ・誠実さ（名詞）" }
      ],
      family: [
        { word: "generate",    desc: "生み出す（generare）" },
        { word: "generous",    desc: "気前のよい（generosus）" },
        { word: "gene",        desc: "遺伝子（genos）" },
        { word: "genre",       desc: "ジャンル（genus）" }
      ],
      compounds: [
        { phrase: "genuine interest",  desc: "本物の関心・心からの興味" },
        { phrase: "genuine article",   desc: "本物・真物" }
      ]
    },

    "generous": {
      origin: "ラテン語 generosus（高貴な出自の・気高い）< genus（出自・種族）。古代では「高貴な家柄から生まれた人は自然と気前がよい」という貴族的な価値観と結びついており、「出自の良さ」が「気前の良さ」へと意味が転じた。\n\n16世紀に英語に入り、当初は「高貴な出自の」という意味で使われたが、17世紀以降は「気前がよい・惜しみなく与える・寛大な」という現代的な意味が中心となった。\n\na generous donation（惜しみない寄付）、a generous interpretation（寛大な解釈）のように物質的・精神的両面の「太っ腹さ」を表す。",
      derivatives: [
        { word: "generously",   desc: "気前よく・惜しみなく（副詞）" },
        { word: "generosity",   desc: "気前のよさ・寛大さ（名詞）" }
      ],
      family: [
        { word: "generate",    desc: "生み出す（generare）" },
        { word: "genuine",     desc: "本物の（genuinus）" },
        { word: "genre",       desc: "ジャンル（genus）" },
        { word: "gentle",      desc: "温和な（gentilis 家柄のよい）" }
      ],
      compounds: [
        { phrase: "generous offer",    desc: "気前のよい申し出・好条件の提案" },
        { phrase: "generous portion",  desc: "たっぷりの量・多めの量" }
      ]
    },

    "genre": {
      origin: "フランス語 genre（種類・様式）< ラテン語 genus（種族・種類）。genus はインド・ヨーロッパ語根 *gen-（産む・生まれる）に由来し、「同じ出自から生まれたものの分類」というのが語源的な意味である。\n\n英語には18世紀に入り、文学・音楽・映画などの「様式・ジャンル」を指す語として定着。悲劇・喜劇・叙事詩という古典的な genre の区分に始まり、現代ではファンタジー、SF、ロマンスなど細分化されたジャンルを指す。\n\n絵画では 17〜18世紀のオランダ・フランドルで発展した「日常生活を描く絵画様式（genre painting）」を指す美術用語でもある。",
      derivatives: [
        { word: "subgenre",    desc: "サブジャンル・下位ジャンル" }
      ],
      family: [
        { word: "generate",    desc: "生み出す（generare）" },
        { word: "genuine",     desc: "本物の（genuinus）" },
        { word: "generous",    desc: "気前のよい（generosus）" },
        { word: "gender",      desc: "性別（genus の変形）" },
        { word: "general",     desc: "一般的な・全体の（generalis 種族全体の）" }
      ],
      compounds: [
        { phrase: "genre fiction",    desc: "大衆向けジャンル小説（SF・ミステリなど）" },
        { phrase: "genre painting",   desc: "風俗画・日常生活を描く絵画" }
      ]
    },

    // ── path系（感じる・病気）──
    "sympathy": {
      origin: "ギリシャ語 sympatheia（共に感じること）< sym-（共に）+ pathos（感情・苦しみ・感受）。sym- は syn- の変形で「同じ・共に」を意味し、pathos は「感じる・苦しむ」という動詞 paschein に由来する。\n\n16世紀の英語に入り「他者の苦しみを共に感じる・同情・共感」という意味で定着。empathy（感情移入）との違いは微妙で、sympathy は「外から理解して同情する」、empathy は「相手の感情の中に入り込む」というニュアンスがある。\n\n音楽・物理では「共鳴（sympathetic vibration）」を意味し、一方の弦が振動すると同じ音程の弦が自然に鳴り出す現象を指す。",
      derivatives: [
        { word: "sympathize",    desc: "同情する・共感する" },
        { word: "sympathetic",   desc: "同情的な・理解ある（形容詞）" },
        { word: "sympathetically", desc: "同情的に・好意をもって（副詞）" }
      ],
      family: [
        { word: "empathy",     desc: "感情移入・共感（em- 中に + pathos）" },
        { word: "apathy",      desc: "無関心・無感動（a- 無 + pathos）" },
        { word: "pathology",   desc: "病理学（pathos 病 + logos）" },
        { word: "antipathy",   desc: "反感・嫌悪（anti- 反対 + pathos）" }
      ],
      compounds: [
        { phrase: "express sympathy",      desc: "同情を表す・お悔やみを申し上げる" },
        { phrase: "sympathetic vibration", desc: "共鳴・共振（物理）" }
      ]
    },

    "empathy": {
      origin: "ギリシャ語 empatheia（熱中・情熱）< em- / en-（中に）+ pathos（感情・感受）。ドイツ語 Einfühlung（感情移入）の翻訳語として20世紀初頭に英語 empathy が造られた。心理学・美学の用語として「他者の感情の中に自分を投影して理解する能力」を指す。\n\n1909年にエドワード・ティチェナーが英訳語として empathy を採用して以降、20世紀後半には心理学・教育・医療・リーダーシップ論で最重要概念の一つになった。sympathy（同情）との違いとして、empathy は「相手の靴を履く（put yourself in someone's shoes）」という体験的理解を強調する。\n\n神経科学では共感に関わる「ミラーニューロン」の発見（1990年代）が empathy の生物学的基盤として注目されている。",
      derivatives: [
        { word: "empathize",    desc: "感情移入する・共感する" },
        { word: "empathetic",   desc: "共感力のある・感情移入できる（形容詞）" }
      ],
      family: [
        { word: "sympathy",    desc: "同情・共感（sym- + pathos）" },
        { word: "apathy",      desc: "無関心（a- + pathos）" },
        { word: "pathology",   desc: "病理学（pathos 病 + logos）" },
        { word: "telepathy",   desc: "テレパシー（tele- 遠く + pathos）" }
      ],
      compounds: [
        { phrase: "show empathy",     desc: "共感を示す" },
        { phrase: "empathy gap",      desc: "共感のギャップ（感情状態の違いで理解が難しい現象）" }
      ]
    },

    "apathy": {
      origin: "ギリシャ語 apatheia（感情の欠如・無感動）< a-（否定・無）+ pathos（感情・感受）。古代ギリシャのストア哲学では「情動に左右されない平静な精神状態（アパテイア）」を理想とし、肯定的な概念として使われていた。\n\nラテン語 apathia を経て17世紀の英語に入ると、哲学的な平静という意味は失われ「感情や関心が欠如した状態・無気力・無関心」という否定的な意味に転じた。voter apathy（有権者の政治的無関心）、apathy about social issues（社会問題への無関心）のように使われる。\n\n現代の心理・医療では apathy はうつ病・認知症の症状として臨床的に評価される概念でもある。",
      derivatives: [
        { word: "apathetic",    desc: "無関心な・無気力な（形容詞）" },
        { word: "apathetically", desc: "無関心に・無気力に（副詞）" }
      ],
      family: [
        { word: "sympathy",    desc: "同情・共感（sym- + pathos）" },
        { word: "empathy",     desc: "感情移入（em- + pathos）" },
        { word: "antipathy",   desc: "反感・嫌悪（anti- + pathos）" },
        { word: "pathology",   desc: "病理学（pathos 病 + logos）" }
      ],
      compounds: [
        { phrase: "voter apathy",      desc: "有権者の政治的無関心" },
        { phrase: "political apathy",  desc: "政治的無関心・無力感" }
      ]
    },

    "pathology": {
      origin: "ギリシャ語 pathos（苦しみ・病・感情）+ logos（学問）から成る医学用語。16世紀頃に「病気の原因・性質・発症メカニズムを研究する医学の分野」として確立した。\n\n病理学（pathology）は臨床医学の基礎を成し、組織を顕微鏡で調べる組織病理学（histopathology）や、死因を調べる法医病理学（forensic pathology）などに分化している。\n\n比喩的には「社会の病理（social pathology）」「組織の病理」のように「機能不全・異常な状態」を指す用語としても広く使われる。",
      derivatives: [
        { word: "pathologist",   desc: "病理学者（病理解剖を行う医師）" },
        { word: "pathological",  desc: "病理学的な・病的な（形容詞）" },
        { word: "pathologically", desc: "病理学的に・病的に（副詞）" }
      ],
      family: [
        { word: "sympathy",     desc: "同情（sym- + pathos）" },
        { word: "empathy",      desc: "共感（em- + pathos）" },
        { word: "apathy",       desc: "無関心（a- + pathos）" },
        { word: "psychology",   desc: "心理学（psychē + logos）" }
      ],
      compounds: [
        { phrase: "forensic pathology",  desc: "法医病理学" },
        { phrase: "social pathology",    desc: "社会病理（社会的な機能不全）" }
      ]
    },

    // ── nov系（新しい）──
    "novel": {
      origin: "ラテン語 novellus（新しい・若い）< novus（新しい）の縮小形。英語には二つの意味で入った。形容詞「斬新な・これまでにない」は15世紀、名詞「長編小説」はイタリア語 novella（短い物語・新しいこと）を経て16〜17世紀に定着した。\n\n小説ジャンルとしての novel は18世紀のイギリスで確立し、ダニエル・デフォー『ロビンソン・クルーソー』（1719年）が英語最初の近代小説の一つとされる。散文で書かれ、内面描写を重視し、現実的な状況を描く長編物語という形式が novel の特徴。\n\n形容詞としては a novel approach（斬新なアプローチ）のように、ビジネス・学術文書でも頻繁に使われる。",
      derivatives: [
        { word: "novelist",    desc: "小説家・長編作家" },
        { word: "novelty",     desc: "目新しさ・珍しいもの・ノベルティ（名詞）" },
        { word: "novella",     desc: "中編小説（イタリア語借用）" }
      ],
      family: [
        { word: "innovate",    desc: "革新する（in- + novus）" },
        { word: "renovate",    desc: "改修する・刷新する（re- + novus）" },
        { word: "novice",      desc: "初心者・見習い（novus 新しい人）" },
        { word: "new",         desc: "新しい（novus と同じ印欧語根 *newo-）" }
      ],
      compounds: [
        { phrase: "graphic novel",  desc: "グラフィックノベル・マンガ的長編物語" },
        { phrase: "novel approach", desc: "斬新なアプローチ・新しい方法" }
      ]
    },

    "innovation": {
      origin: "ラテン語 innovare（新しくする）< in-（中に）+ novare（新しくする）< novus（新しい）の名詞形 innovatio。「既存のものを一新する・新しいものを導入する」という意味が語源にある。\n\n15世紀に英語に入り当初は「変化・刷新」という中立的な語だったが、産業革命以降は「技術的・社会的な新しい価値の創出」という肯定的な意味が主流になった。現代ではシュンペーターの「創造的破壊（creative destruction）」理論と結びつき、経済成長の原動力として語られる核心概念である。\n\nopen innovation（オープンイノベーション）、disruptive innovation（破壊的イノベーション）など複合語も多い。",
      derivatives: [
        { word: "innovate",      desc: "革新する・新機軸を打ち出す（動詞）" },
        { word: "innovative",    desc: "革新的な・斬新な（形容詞）" },
        { word: "innovator",     desc: "革新者・イノベーター" }
      ],
      family: [
        { word: "novel",         desc: "斬新な・小説（novellus）" },
        { word: "novice",        desc: "初心者（novus 新しい人）" },
        { word: "renovate",      desc: "改修する（re- + novus）" },
        { word: "new",           desc: "新しい（同じ語根 *newo-）" }
      ],
      compounds: [
        { phrase: "drive innovation",      desc: "イノベーションを推進する" },
        { phrase: "open innovation",       desc: "オープンイノベーション" },
        { phrase: "culture of innovation", desc: "イノベーション文化・革新を重んじる組織風土" }
      ]
    },

    "novice": {
      origin: "ラテン語 novicius（新入りの・初めての）< novus（新しい）。修道院用語として「見習い修道士（まだ誓願を立てていない修行中の修道士）」を指したのが語源で、13世紀頃のフランス語経由で英語に入った。\n\n宗教的な文脈から転じて「特定の分野での初心者・経験の浅い人」という意味で一般化した。beginner よりもやや格式があり、「まだ基礎を学んでいる段階」という具体的なニュアンスを持つ。a novice programmer（プログラミング初心者）、a novice driver（ペーパードライバーに近い初心者）のように使う。\n\nIT の初心者向けリソースでは novice-level tutorial（初心者向けチュートリアル）のように使われる。",
      derivatives: [
        { word: "novitiate",  desc: "見習い期間・修道院の試験期間" }
      ],
      family: [
        { word: "novel",      desc: "斬新な・小説（novellus）" },
        { word: "innovate",   desc: "革新する（in- + novus）" },
        { word: "renovate",   desc: "改修する（re- + novus）" },
        { word: "new",        desc: "新しい（同じ語根）" }
      ],
      compounds: [
        { phrase: "complete novice",   desc: "全くの初心者・全くの素人" },
        { phrase: "novice level",      desc: "初心者レベル・初級" }
      ]
    },

    // ── psyche系（心・精神）──
    "psychology": {
      origin: "ギリシャ語 psychē（魂・精神・蝶）+ logos（学問）から成る近代造語。psychē は元来「息・命・魂」を意味し、蝶が魂の象徴とされたため蝶をも指した。16世紀に心についての哲学的研究を指す語として登場し、19世紀末にヴィルヘルム・ヴントが実験心理学の研究室を設立（1879年）して以降、独立した科学として確立した。\n\nフロイト、ユング、スキナー、ピアジェらが心理学の各学派を形成し、精神分析・行動主義・認知心理学・発達心理学などの分野に分化。現代では神経科学・人工知能とも融合し、最先端の学際研究が進んでいる。\n\n形容詞 psychological は「心理的な・精神的な」として日常でも広く使われ、psychological pressure（心理的プレッシャー）のように使う。",
      derivatives: [
        { word: "psychologist",    desc: "心理学者・心理士" },
        { word: "psychological",   desc: "心理学的な・精神的な（形容詞）" },
        { word: "psychologically", desc: "心理学的に・精神的に（副詞）" }
      ],
      family: [
        { word: "psyche",       desc: "魂・精神・心理（psychē）" },
        { word: "psychiatry",   desc: "精神医学（psychē + iatreia 治療）" },
        { word: "psychic",      desc: "精神的な・霊能力のある（psychikos）" },
        { word: "psychosis",    desc: "精神病（psychē + -osis 状態）" }
      ],
      compounds: [
        { phrase: "child psychology",     desc: "児童心理学" },
        { phrase: "psychological impact", desc: "心理的影響" }
      ]
    },

    "psychiatry": {
      origin: "ギリシャ語 psychē（魂・精神）+ iatreia（医療・治療）< iatros（医師）から成る19世紀の造語。「心の病を医学的に治療する専門分野」として19世紀前半に確立し、精神病院（asylum）の整備とともに近代的な精神医療が発展した。\n\n精神科医（psychiatrist）は医師免許を持ち薬物療法を行う点で、医師免許を必要としない心理士（psychologist）と区別される。20世紀には向精神薬の開発が治療法を大きく変え、入院治療から地域での支援へとパラダイムが移行した。\n\npsychiatry と psychology はどちらも精神・心理を扱うが、psychiatry が医学的・生物学的アプローチを重視するのに対し、psychology は行動・認知・発達など幅広い心理現象を研究する点が異なる。",
      derivatives: [
        { word: "psychiatrist",   desc: "精神科医（医師免許保有者）" },
        { word: "psychiatric",    desc: "精神科の・精神医学の（形容詞）" }
      ],
      family: [
        { word: "psychology",     desc: "心理学（psychē + logos）" },
        { word: "psyche",         desc: "精神・心理" },
        { word: "pediatrics",     desc: "小児科（pais 子 + iatreia）" },
        { word: "geriatrics",     desc: "老年医学（geras 老い + iatreia）" }
      ],
      compounds: [
        { phrase: "psychiatric hospital",  desc: "精神科病院" },
        { phrase: "psychiatric disorder",  desc: "精神疾患・精神障害" }
      ]
    },

    // ── pend / pens系（ぶら下げる・重さをかける）──
    "depend": {
      origin: "ラテン語 dependere（ぶら下がる）< de-（下に）+ pendere（ぶら下げる・重さを量る）。「上位のものにぶら下がっている＝それなしには存在できない」というイメージが「依存する」の意味の起源。\n\n14世紀に英語に入り「〜に頼る・〜次第である」という動詞として定着。it depends（場合による）は英語会話で頻出のフレーズ。depend on / upon で「〜に頼る・〜を当てにする」という意味になる。\n\n語根 pend- は「ぶら下げる・重さをかける」というイメージを持ち、suspend（宙づりにする）、pension（年金 ＝ 秤に懸けられた報酬）、expense（費用 ＝ 天秤から外に出したもの）、pendant（ペンダント）など多くの語を形成する。",
      derivatives: [
        { word: "dependent",      desc: "依存している・扶養家族の（形容詞・名詞）" },
        { word: "dependence",     desc: "依存・従属（名詞）" },
        { word: "dependable",     desc: "頼りになる・信頼できる（形容詞）" },
        { word: "independent",    desc: "独立した・自立した（in- + dependent）" }
      ],
      family: [
        { word: "suspend",        desc: "宙づりにする・停止する（sub- + pendere）" },
        { word: "expense",        desc: "費用・経費（ex- 外へ + pendere）" },
        { word: "pension",        desc: "年金・ペンション（pensio 支払い）" },
        { word: "pendant",        desc: "ペンダント（pendere からのフランス語）" }
      ],
      compounds: [
        { phrase: "depend on",       desc: "〜に頼る・〜次第である" },
        { phrase: "it depends",      desc: "場合による・一概には言えない" }
      ]
    },

    "suspend": {
      origin: "ラテン語 suspendere（宙づりにする）< sub-（下から）+ pendere（ぶら下げる）。「何かの下にぶら下げて支える」という字義から「一時停止・猶予・宙ぶらりんの状態」という意味が派生した。\n\n15世紀に英語に入り、「宙づりにする・一時停止する・資格・活動を一時的に剥奪する」という動詞として幅広く使われる。The game was suspended（試合は中断された）、He was suspended from school（学校を停学になった）のように状況に応じた意味を持つ。\n\nsuspense（宙吊り状態＝緊張・ハラハラ）、suspension（停止・サスペンション）など、日本語でも馴染み深い派生語を持つ。",
      derivatives: [
        { word: "suspension",   desc: "停止・一時剥奪・サスペンション（名詞）" },
        { word: "suspense",     desc: "サスペンス・緊張・宙ぶらりん（名詞）" },
        { word: "suspenseful",  desc: "スリリングな・ハラハラする（形容詞）" }
      ],
      family: [
        { word: "depend",       desc: "依存する（de- + pendere）" },
        { word: "expense",      desc: "費用（ex- + pendere）" },
        { word: "pension",      desc: "年金（pensio）" },
        { word: "append",       desc: "付け加える（ad- + pendere）" }
      ],
      compounds: [
        { phrase: "suspension bridge",  desc: "吊り橋" },
        { phrase: "in suspense",        desc: "宙ぶらりんで・ハラハラしながら" }
      ]
    },

    "expense": {
      origin: "ラテン語 expensa（外に払い出したもの）< ex-（外へ）+ pendere（量る・支払う）の女性過去分詞 expensa。「重さを量って外に出す＝支払う」という行為が語源で、費用・出費を意味する。\n\n14世紀の英語に入り「費用・出費・経費」という名詞として定着。at the expense of（〜を犠牲にして）は重要なイディオム。business expenses（業務経費）、travel expenses（出張費）のようにビジネスに頻出。\n\n形容詞 expensive（高価な）は「費用がかかる」から転じて「値段が高い」を表す日常語として極めて高頻度。",
      derivatives: [
        { word: "expensive",    desc: "値段が高い・費用がかかる（形容詞）" },
        { word: "inexpensive",  desc: "安価な・費用がかからない（in- + expensive）" }
      ],
      family: [
        { word: "depend",       desc: "依存する（de- + pendere）" },
        { word: "suspend",      desc: "一時停止する（sub- + pendere）" },
        { word: "pension",      desc: "年金（pensio 支払い）" },
        { word: "spend",        desc: "使う・費やす（expendere の短縮形）" }
      ],
      compounds: [
        { phrase: "at the expense of",   desc: "〜を犠牲にして・〜の費用で" },
        { phrase: "business expense",    desc: "業務経費・事業費" }
      ]
    },

    "independent": {
      origin: "ラテン語 independens（何にもぶら下がっていない）< in-（否定）+ dependens（ぶら下がっている）< dependere（依存する）。「何物にも依存しない・自立した」というのが語源的な意味。\n\n17世紀の英語に入り「独立した・自立した・自由な」という形容詞として定着。政治的文脈では「独立国家・無所属議員」、日常会話では「経済的に自立した」「一人でできる」という意味で使われる。\n\nthe Declaration of Independence（独立宣言）は1776年のアメリカ独立宣言を指し、英語世界で最も有名な政治文書の一つ。",
      derivatives: [
        { word: "independence",   desc: "独立・自立・自由（名詞）" },
        { word: "independently",  desc: "独立して・自立して（副詞）" }
      ],
      family: [
        { word: "depend",         desc: "依存する（de- + pendere）" },
        { word: "dependent",      desc: "依存した・従属した（形容詞）" },
        { word: "independence",   desc: "独立（in- + dependence）" }
      ],
      compounds: [
        { phrase: "Declaration of Independence", desc: "独立宣言（米国1776年）" },
        { phrase: "financially independent",     desc: "経済的に自立した" }
      ]
    },

    // ── flex / flect系（曲げる）──
    "flexible": {
      origin: "ラテン語 flexibilis（曲げることができる）< flectere（曲げる）の派生形 flexus + -ibilis。「物理的に曲げられる・しなやかな」という意味が、「状況に応じて変化できる・融通の利く」という抽象的な意味に拡張された。\n\n16世紀の英語に入り、当初は素材の「弾力性・しなやかさ」を指したが、現代では柔軟な働き方（flexible working）、柔軟なスケジュール（flexible schedule）のように「状況対応力・融通性」という意味で多用される。\n\n派生語 inflexible（頑固な・融通が利かない）は否定接頭辞 in- を付けた反義語。flexibility（柔軟性）は現代ビジネスで最も重視されるスキル・組織特性の一つとして頻出する。",
      derivatives: [
        { word: "flexibility",   desc: "柔軟性・融通性（名詞）" },
        { word: "inflexible",    desc: "頑固な・融通が利かない（in- + flexible）" },
        { word: "flexibly",      desc: "柔軟に・融通をもって（副詞）" }
      ],
      family: [
        { word: "reflect",       desc: "反射する・熟考する（re- + flectere）" },
        { word: "deflect",       desc: "それる・かわす（de- + flectere）" },
        { word: "inflect",       desc: "屈折させる・格変化させる（in- + flectere）" },
        { word: "reflex",        desc: "反射・条件反射（reflexus）" }
      ],
      compounds: [
        { phrase: "flexible schedule",   desc: "柔軟なスケジュール・フレックスタイム" },
        { phrase: "flexible approach",   desc: "柔軟なアプローチ" }
      ]
    },

    "reflect": {
      origin: "ラテン語 reflectere（折り返す・向きを変える）< re-（後ろに・再び）+ flectere（曲げる）。光が表面に当たって「折り返す」イメージが語源の中心にある。\n\n14世紀の英語に入り「光・音・熱を反射する」という物理的意味と、「自分の内面に向けて考える・熟考する」という心理的意味を持つ。reflect on one's actions（自分の行動を振り返る）のように、自己内省のメタファーとして日常的に使われる。\n\nreflection（反射・内省・映り込み）は語義が豊富で、物理・心理・哲学の文脈すべてで使われる多義語である。",
      derivatives: [
        { word: "reflection",    desc: "反射・映り込み・内省（名詞）" },
        { word: "reflective",    desc: "反射的な・思慮深い（形容詞）" },
        { word: "reflector",     desc: "反射板・リフレクター" }
      ],
      family: [
        { word: "flexible",      desc: "柔軟な（flexibilis）" },
        { word: "deflect",       desc: "それる・かわす（de- + flectere）" },
        { word: "reflex",        desc: "反射・条件反射（re- + flexus）" },
        { word: "inflection",    desc: "語形変化・抑揚（in- + flectere）" }
      ],
      compounds: [
        { phrase: "reflect on",     desc: "〜について振り返る・熟考する" },
        { phrase: "a reflection of", desc: "〜の表れ・〜を映したもの" }
      ]
    },

    // ── vent / ven系（来る）──
    "adventure": {
      origin: "ラテン語 adventura（これから起こること）< advenire（近づいてくる）< ad-（〜へ）+ venire（来る）の未来分詞形。「これから来るもの＝未知の出来事」というのが語源的な意味で、中世では「命運・運命」を指した。\n\n13世紀のフランス語 aventure を経て英語に入り、「危険を伴う冒険・スリリングな体験」という意味に発展。中世の騎士物語（chivalric romance）の文脈で広まり、アーサー王伝説などの冒険譚で頻用されることで「冒険」という日常語として定着した。\n\n現代では adventure sports（冒険スポーツ）、adventure travel（冒険的な旅）のほか、ビジネスでも「新しい試みへの挑戦」という前向きな含意で使われる。",
      derivatives: [
        { word: "adventurous",   desc: "冒険好きな・スリルを求める（形容詞）" },
        { word: "adventurer",    desc: "冒険家・山師" },
        { word: "misadventure",  desc: "不運・不慮の事故（mis- + adventure）" }
      ],
      family: [
        { word: "event",         desc: "出来事・イベント（e- + venire）" },
        { word: "convention",    desc: "慣習・大会（con- + venire）" },
        { word: "prevent",       desc: "防ぐ（prae- 前に + venire）" },
        { word: "invent",        desc: "発明する（in- + venire 発見する）" },
        { word: "revenue",       desc: "収益（re- + venire 戻ってくるもの）" }
      ],
      compounds: [
        { phrase: "adventure sports",  desc: "冒険スポーツ（ロッククライミングなど）" },
        { phrase: "sense of adventure", desc: "冒険心・探求心" }
      ]
    },

    "convention": {
      origin: "ラテン語 conventio（共に来ること・合意）< con-（共に）+ venire（来る）。「人々が共に集まる」という原義から「集会・大会」と「共に決めた取り決め・慣習」という二つの意味が発展した。\n\n14世紀の英語に入り、「（1）大規模な集会・会議・党大会」と「（2）社会的慣習・しきたり・国際条約」という二つの主要な意味で使われる。\n\nby convention（慣例によって）、a political convention（政党大会）のように文脈によって意味が異なる。conventional（従来型の・型通りの）は「慣習に従った」という形容詞として頻用される。",
      derivatives: [
        { word: "conventional",    desc: "従来の・型通りの・慣習的な（形容詞）" },
        { word: "unconventional",  desc: "型破りの・慣習にとらわれない" },
        { word: "conventionally",  desc: "慣習的に・従来通りに（副詞）" }
      ],
      family: [
        { word: "adventure",     desc: "冒険（ad- + venire）" },
        { word: "event",         desc: "出来事（e- + venire）" },
        { word: "prevent",       desc: "防ぐ（prae- + venire）" },
        { word: "invent",        desc: "発明する（in- + venire）" }
      ],
      compounds: [
        { phrase: "political convention",  desc: "党大会・政治集会" },
        { phrase: "by convention",         desc: "慣例によって・慣習上" }
      ]
    },

    "prevent": {
      origin: "ラテン語 praevenire（先に来る・先手を打つ）< prae-（前に・先に）+ venire（来る）。「問題が来る前に先回りして塞ぐ」というイメージが「防ぐ」の意味の語源。元来は「先に来ること・予防的行動をとること」だった。\n\n15世紀の英語に入り「〜を防ぐ・阻止する・未然に防ぐ」という動詞として定着。prevention（予防）、preventive（予防的な）という派生語も重要で、医療では「予防医学（preventive medicine）」、犯罪では「犯罪予防（crime prevention）」として使われる。\n\n"Prevention is better than cure."（予防は治療に勝る）は有名な諺。",
      derivatives: [
        { word: "prevention",    desc: "予防・防止（名詞）" },
        { word: "preventive",    desc: "予防的な・防止のための（形容詞）" },
        { word: "preventable",   desc: "防げる・予防可能な（形容詞）" }
      ],
      family: [
        { word: "adventure",     desc: "冒険（ad- + venire）" },
        { word: "convention",    desc: "慣習・大会（con- + venire）" },
        { word: "event",         desc: "出来事（e- + venire）" },
        { word: "invent",        desc: "発明する（in- + venire）" }
      ],
      compounds: [
        { phrase: "prevent a disease",    desc: "病気を予防する" },
        { phrase: "crime prevention",     desc: "犯罪予防" }
      ]
    },

    "invent": {
      origin: "ラテン語 invenire（見つける・到達する）< in-（中に）+ venire（来る）。「探し求めて中に入っていき、見つける」というのが語源的な意味。当初は「発見する」に近い意味だったが、英語では「新しいものを作り出す・考案する」という意味に特化した。\n\n15世紀の英語に入り「発明する・考案する・創作する」という動詞として定着。invention（発明）、inventor（発明家）、inventory（在庫 ＝ 発見したものの一覧）という重要派生語を持つ。\n\nエジソン、ライト兄弟、テスラなどのinventors（発明家）の物語とともに、創造性・独創性の象徴語として英語文化に深く根付いている。",
      derivatives: [
        { word: "invention",    desc: "発明・考案・作り話（名詞）" },
        { word: "inventor",     desc: "発明家・考案者" },
        { word: "inventive",    desc: "創意に富む・独創的な（形容詞）" },
        { word: "inventory",    desc: "在庫・目録（invenire 見つけたものの一覧）" }
      ],
      family: [
        { word: "adventure",    desc: "冒険（ad- + venire）" },
        { word: "convention",   desc: "慣習・大会（con- + venire）" },
        { word: "prevent",      desc: "防ぐ（prae- + venire）" },
        { word: "event",        desc: "出来事（e- + venire）" }
      ],
      compounds: [
        { phrase: "invent a solution",  desc: "解決策を考案する" },
        { phrase: "patent an invention", desc: "発明に特許を取得する" }
      ]
    },

    // ── terrere系（怖がらせる）──
    "terror": {
      origin: "ラテン語 terror（恐怖・驚愕）< terrere（震え上がらせる・恐怖を与える）。印欧語根 *tres-（震える）に由来し、地面が震えるほどの恐怖を引き起こすというイメージが原義にある。\n\n14世紀に英語に入り「強烈な恐怖・テロ・恐怖政治」という意味で使われる。フランス革命の「恐怖政治（Reign of Terror, 1793-94年）」は歴史用語として有名で、以降「政治的目的のための暴力と恐怖」という意味での terrorism（テロリズム）が定着した。\n\n現代では international terrorism（国際テロ）、state terror（国家テロ）のように政治・安全保障の核心語であり、counterterrorism（対テロ）も重要語である。",
      derivatives: [
        { word: "terrorism",    desc: "テロリズム・恐怖政治" },
        { word: "terrorist",    desc: "テロリスト・テロ行為者" },
        { word: "terrify",      desc: "恐怖させる・震え上がらせる（動詞）" },
        { word: "terrified",    desc: "恐怖した・震え上がった（形容詞）" }
      ],
      family: [
        { word: "terrible",     desc: "ひどい・恐ろしい（terribilis）" },
        { word: "terrific",     desc: "素晴らしい（元は「恐ろしい」から転じた）" },
        { word: "deter",        desc: "思いとどまらせる・抑止する（de- + terrere）" }
      ],
      compounds: [
        { phrase: "reign of terror",       desc: "恐怖政治（フランス革命期）" },
        { phrase: "counterterrorism",      desc: "対テロ（活動・政策）" }
      ]
    },

    "terrible": {
      origin: "ラテン語 terribilis（恐ろしい・震え上がらせる）< terrere（恐怖させる）+ -ibilis（〜できる）。字義通りには「震え上がらせることができる」を意味する。\n\n15世紀の英語に入り当初は「恐ろしい・おぞましい」という強い意味で使われた。しかし現代では口語的に強調表現として使われることが多く、"terrible weather"（ひどい天気）、"I feel terrible"（気分が最悪）のように「非常に悪い・ひどい」という意味で広く用いられる。意味の軽量化（semantic bleaching）の好例。\n\n語根 terr- が「恐怖」のニュアンスを保ちつつも強調語として機能するのは、awful（畏れを感じさせる）や dreadful（おそれをなす）の変化と同じプロセスである。",
      derivatives: [
        { word: "terribly",    desc: "ひどく・非常に・恐ろしいほど（副詞）" }
      ],
      family: [
        { word: "terror",      desc: "恐怖・テロ（terror）" },
        { word: "terrify",     desc: "恐怖させる（terrere + -fy）" },
        { word: "terrific",    desc: "素晴らしい・ものすごい（口語）" },
        { word: "deter",       desc: "思いとどまらせる（de- + terrere）" }
      ],
      compounds: [
        { phrase: "terrible mistake",  desc: "ひどいミス・取り返しのつかない過ち" },
        { phrase: "feel terrible",     desc: "気分が最悪・申し訳なく思う" }
      ]
    },

    "deter": {
      origin: "ラテン語 deterrere（怖がらせて思いとどまらせる）< de-（強調・離れて）+ terrere（恐怖させる）。「恐怖を与えることで行動を思いとどまらせる」という意味が語源。\n\n16世紀の英語に入り「（脅威・罰則によって）〜を思いとどまらせる・抑止する」という動詞として定着。核抑止（nuclear deterrence）、犯罪抑止（crime deterrence）のように安全保障・刑事政策の重要概念として使われる。\n\ndetective（探偵）の「deter-」は語源が異なる（detectere 暴く）ことに注意。deterrent（抑止力）は「抑止のために機能するもの」で、核兵器が deterrent として論じられる文脈が代表的。",
      derivatives: [
        { word: "deterrent",    desc: "抑止力・思いとどまらせるもの（名詞・形容詞）" },
        { word: "deterrence",   desc: "抑止・威嚇（名詞）" }
      ],
      family: [
        { word: "terror",       desc: "恐怖・テロ（terrere）" },
        { word: "terrible",     desc: "ひどい・恐ろしい（terribilis）" },
        { word: "terrify",      desc: "恐怖させる（terrere + -fy）" }
      ],
      compounds: [
        { phrase: "nuclear deterrent",  desc: "核抑止力" },
        { phrase: "deter crime",        desc: "犯罪を抑止する" }
      ]
    },

    // ── terra系（大地・土地）──
    "territory": {
      origin: "ラテン語 territorium（土地・地域）< terra（大地・土）。terra は印欧語根 *ters-（乾いた）に由来し、「乾いた陸地」というのが語源的な意味。territorium は「ある都市が管轄する土地の範囲」を指した行政用語だった。\n\n14世紀の英語に入り「ある政治体・国・動物が支配・占有する土地の範囲」という意味で定着。国際法では territorial waters（領海）、territorial integrity（領土保全）のように国家主権の地理的範囲を指す重要語。\n\n動物行動学では動物が縄張りとして確保する空間を territory と呼び、territorial behavior（縄張り行動）は多くの動物種で観察される。",
      derivatives: [
        { word: "territorial",    desc: "領土の・縄張り的な（形容詞）" },
        { word: "territorially",  desc: "領土的に（副詞）" }
      ],
      family: [
        { word: "terrain",        desc: "地形・地勢（terra < ラテン語）" },
        { word: "terrestrial",    desc: "陸上の・地球上の（terrestris）" },
        { word: "terrace",        desc: "テラス・段状の土地（terra）" },
        { word: "Mediterranean",  desc: "地中海（medius 中 + terra + aneus）" }
      ],
      compounds: [
        { phrase: "territorial waters",   desc: "領海" },
        { phrase: "territorial dispute",  desc: "領土紛争" }
      ]
    },

    "terrain": {
      origin: "フランス語 terrain（土地・地勢）< ラテン語 terrenum（土地）< terra（大地）。地勢・地形という物理的な土地の状態を指す語として、軍事・地理・スポーツの文脈で発展した。\n\n18世紀頃に英語に入り、「ある地域の地形・地勢・起伏」を意味する。rough terrain（険しい地形）、difficult terrain（困難な地形）のように地形の特性を表す。比喩的には "uncharted terrain"（未知の領域）のように「まだ探索されていない分野」を指す表現にも使われる。\n\n軍事では terrain analysis（地形分析）が戦略立案の基礎であり、all-terrain vehicle（全地形対応車・ATV）のような複合語も定着している。",
      derivatives: [
        { word: "all-terrain",   desc: "全地形対応の（複合形容詞）" }
      ],
      family: [
        { word: "territory",     desc: "領土・縄張り（territorium）" },
        { word: "terrestrial",   desc: "陸上の・地球上の（terrestris）" },
        { word: "terrace",       desc: "テラス・段状の土地" },
        { word: "terra firma",   desc: "堅固な陸地（ラテン語の成句）" }
      ],
      compounds: [
        { phrase: "rough terrain",      desc: "険しい地形・でこぼこ道" },
        { phrase: "uncharted terrain",  desc: "未知の領域・未踏の地" }
      ]
    },

    // ── astro / aster系（星）──
    "astronomy": {
      origin: "ギリシャ語 astronomia（星の法則・天文学）< astron（星）+ nomos（法則・管理）。nomos は「慣習・法則」を意味し、英語の norm（規範）や economy（家の法則 < oikos 家 + nomos）と同じ語根を持つ。\n\n古代バビロニアやエジプトの天体観測に始まり、ギリシャのヒッパルコス、プトレマイオスが体系化した天文学は、コペルニクス、ガリレオ、ケプラー、ニュートンを経て近代天文学へと発展した。望遠鏡の発明（1608年）と万有引力の発見（1687年）が革命的転換点となった。\n\nastronomy（天体を観測・記述する科学）と astrology（星占い）は語源を共有するが、現代では厳然と区別される。",
      derivatives: [
        { word: "astronomer",    desc: "天文学者" },
        { word: "astronomical",  desc: "天文学的な・とてつもなく大きい（形容詞）" }
      ],
      family: [
        { word: "astronaut",    desc: "宇宙飛行士（astron + nautēs 船乗り）" },
        { word: "disaster",     desc: "惨事（dis- + astron 星の配置が悪い）" },
        { word: "asterisk",     desc: "アスタリスク（asteriskos 小さな星）" },
        { word: "astrology",    desc: "占星術（astron + logos）" }
      ],
      compounds: [
        { phrase: "astronomical cost",    desc: "天文学的なコスト・莫大な費用" },
        { phrase: "radio astronomy",      desc: "電波天文学" }
      ]
    },

    "astronaut": {
      origin: "ギリシャ語 astron（星）+ nautēs（船乗り）から成る20世紀の造語。nautēs は naus（船）に由来し、英語の nautical（航海の）、navy（海軍）とも関連する。「星の航海者」という詩的なニュアンスを持つ。\n\n1959年にNASAが宇宙飛行士の正式名称として採用。ソ連は cosmonaut（コスモノート < kosmos 宇宙 + nautēs）、中国は taikonaut（太空人）と異なる語を使う。\n\n1961年のユーリ・ガガーリンの初の有人宇宙飛行、1969年のアポロ11号月面着陸とともに、astronaut は20世紀の技術的偉業を象徴する語として世界に浸透した。",
      derivatives: [
        { word: "astronautics",   desc: "宇宙航行学・航宙学" }
      ],
      family: [
        { word: "astronomy",     desc: "天文学（astron + nomos）" },
        { word: "disaster",      desc: "惨事（dis- + astron）" },
        { word: "nautical",      desc: "航海の（naus 船）" },
        { word: "navigate",      desc: "航行する（navis 船 + agere 動かす）" }
      ],
      compounds: [
        { phrase: "mission astronaut",   desc: "ミッション宇宙飛行士" }
      ]
    },

    "disaster": {
      origin: "イタリア語 disastro < dis-（否定・悪い）+ astro（星）< ラテン語 astrum < ギリシャ語 astron（星）。「星の配置が悪い＝不吉な天体の影響による災い」というのが語源で、中世ヨーロッパでは星の位置が人間の運命を左右すると信じられていた。\n\n16世紀に英語に入り「大災害・大惨事」を意味する名詞として定着。自然災害（natural disaster）、man-made disaster（人災）のように使われる。現代では disastrous（壊滅的な・ひどい）、disaster recovery（災害復旧 / IT ではシステム障害回復）のような派生語・複合語も重要。\n\ninfluenza（インフルエンザ）も星の影響（influence of stars）という意味のイタリア語から来ており、disaster と同じく星占いへの信仰が語源に関わる語である。",
      derivatives: [
        { word: "disastrous",    desc: "壊滅的な・惨憺たる（形容詞）" },
        { word: "disastrously",  desc: "壊滅的に・ひどく（副詞）" }
      ],
      family: [
        { word: "astronomy",    desc: "天文学（astron + nomos）" },
        { word: "astronaut",    desc: "宇宙飛行士（astron + nautēs）" },
        { word: "asterisk",     desc: "アスタリスク（asteriskos）" }
      ],
      compounds: [
        { phrase: "natural disaster",    desc: "自然災害" },
        { phrase: "disaster recovery",   desc: "災害復旧・事業継続（BCP）" },
        { phrase: "recipe for disaster", desc: "失敗への道・惨事を招く要因" }
      ]
    },

    // ── aqua系（水）──
    "aquarium": {
      origin: "ラテン語 aquarium（水に関する場所）< aqua（水）+ -arium（場所・容器を示す接尾辞）。aqua は印欧語根 *akwa-（水）に由来し、英語の water とも遠い親縁関係にある。1850年代に淡水・海水魚の飼育・展示施設を指す語として英語に定着した。\n\nビクトリア時代に観賞魚の飼育が流行し、家庭用のガラス水槽（aquarium）が普及した。現代では大規模な公共水族館（public aquarium）が科学教育・海洋環境保護の発信拠点となっている。\n\n語根 aqua- は aquatic（水中の）、aqueduct（水道橋）、aquifer（帯水層）など水に関わる多くの英語語彙を形成し、フランス語 eau（水）やスペイン語 agua（水）も同じ語源を持つ。",
      derivatives: [
        { word: "aquarist",    desc: "アクアリスト・熱帯魚愛好家" }
      ],
      family: [
        { word: "aquatic",    desc: "水中の・水生の（aqua + -ticus）" },
        { word: "aqueduct",   desc: "水道橋・導水路（aqua + ducere）" },
        { word: "aquifer",    desc: "帯水層（aqua + ferre 運ぶ）" },
        { word: "aquamarine", desc: "アクアマリン（aqua + marinus 海の）" }
      ],
      compounds: [
        { phrase: "public aquarium",  desc: "公共水族館" },
        { phrase: "freshwater aquarium", desc: "淡水水槽・淡水アクアリウム" }
      ]
    },

    "aquatic": {
      origin: "ラテン語 aquaticus（水の・水中に生きる）< aqua（水）+ -aticus（〜に属する）。水中や水辺に生息する生物・活動を表す形容詞として16世紀頃に英語に定着した。\n\naquatic plants（水生植物）、aquatic animals（水生動物）のように生物学・生態学の基本形容詞。スポーツでは aquatic sports（水中スポーツ = 水泳・水球・飛び込みなど）、aquatic center（水泳競技施設）のように使われる。\n\nオリンピック競技の aquatics は「水中競技全般」を指す総称語として定着しており、英語ではさまざまな水関連活動のカテゴリ名として機能している。",
      derivatives: [
        { word: "aquatics",    desc: "水泳競技・水中スポーツ（名詞複数形）" }
      ],
      family: [
        { word: "aquarium",   desc: "水族館・アクアリウム（aqua + -arium）" },
        { word: "aqueduct",   desc: "水道橋（aqua + ducere）" },
        { word: "submarine",  desc: "潜水艦（sub- 下 + mare 海）" }
      ],
      compounds: [
        { phrase: "aquatic sports",   desc: "水中スポーツ・水泳競技" },
        { phrase: "aquatic ecosystem", desc: "水域の生態系" }
      ]
    },

    "aqueduct": {
      origin: "ラテン語 aquaeductus（水を引く通路）< aquae（水の・aqua の属格）+ ductus（導かれたもの < ducere 導く・引く）。古代ローマが建設した大規模な石造水道橋がその代表で、水源から都市まで重力を利用して清水を運ぶ土木構造物を指す。\n\nローマの Aqua Appia（アッピア水道、紀元前312年建設）は現存する最古の水道の一つ。全長100km以上に及ぶものもあり、アーチ構造を積み重ねた石橋は現代でも南フランスのポン・デュ・ガールなど各地に残る。\n\n現代でも大都市の長距離導水施設を aqueduct と呼ぶほか、比喩的に「情報・資源のパイプライン」という意味でも使われることがある。",
      derivatives: [
        { word: "duct",        desc: "管・ダクト・導管（ducere から）" },
        { word: "conduct",     desc: "導く・振る舞い（con- + ducere）" }
      ],
      family: [
        { word: "aquarium",    desc: "水族館（aqua + -arium）" },
        { word: "aquatic",     desc: "水中の（aqua + -aticus）" },
        { word: "duke",        desc: "公爵（dux 指導者 < ducere）" },
        { word: "educate",     desc: "教育する（e- + ducere 引き出す）" }
      ],
      compounds: [
        { phrase: "Roman aqueduct",   desc: "ローマ水道橋" }
      ]
    },

    // ── fract / frag系（壊す・割る）──
    "fracture": {
      origin: "ラテン語 fractura（割れ目・骨折）< frangere（壊す・割る）の過去分詞 fractus + -ura。frangere の印欧語根 *bhreg- は英語の break（壊す）とも遠縁にある。\n\n15世紀に英語に入り「骨折・亀裂・破砕」という名詞・動詞として定着。医学では骨折（bone fracture）を指し、compound fracture（開放骨折）、hairline fracture（微細骨折）のように細分化された。地質学では断層（fault）や岩石の割れ目（rock fracture）にも使われる。\n\n比喩的には "a fracture in relations"（関係の亀裂）のように「分断・対立の亀裂」を表すこともある。",
      derivatives: [
        { word: "fractured",   desc: "骨折した・亀裂が入った（形容詞）" }
      ],
      family: [
        { word: "fragment",    desc: "断片・かけら（fragmentum < frangere）" },
        { word: "fragile",     desc: "壊れやすい（fragilis < frangere）" },
        { word: "fraction",    desc: "分数・一部・端数（fractio）" },
        { word: "infraction",  desc: "違反・規則違反（in- + fractio）" },
        { word: "break",       desc: "壊す（同じ印欧語根 *bhreg-）" }
      ],
      compounds: [
        { phrase: "bone fracture",     desc: "骨折" },
        { phrase: "hairline fracture", desc: "微細骨折・ヘアライン骨折" }
      ]
    },

    "fragment": {
      origin: "ラテン語 fragmentum（割れたかけら）< frangere（割る・壊す）+ -mentum（結果・手段を示す接尾辞）。「割った結果できた破片」という語源通りの意味で、石・骨・文書などの「欠けた部分・断片」を指す。\n\n15世紀の英語に入り名詞・動詞として使われる。日常では "a fragment of glass"（ガラスの破片）のほか、文学・音楽では "a fragment of melody"（断片的なメロディ）のように「不完全な一部」を指す比喩にも使われる。\n\nソフトウェア工学では hard disk fragmentation（ハードディスクのフラグメンテーション ＝ データの断片化）がパフォーマンス低下の原因として知られており、defragmentation（最適化）が必要になる。",
      derivatives: [
        { word: "fragmentation",  desc: "断片化・分裂（名詞）" },
        { word: "fragmentary",    desc: "断片的な・不完全な（形容詞）" }
      ],
      family: [
        { word: "fracture",    desc: "骨折・亀裂（fractura）" },
        { word: "fragile",     desc: "壊れやすい（fragilis）" },
        { word: "fraction",    desc: "分数・端数（fractio）" }
      ],
      compounds: [
        { phrase: "memory fragment",      desc: "記憶の断片" },
        { phrase: "disk fragmentation",   desc: "ディスクの断片化（IT用語）" }
      ]
    },

    "fragile": {
      origin: "ラテン語 fragilis（壊れやすい）< frangere（割る・壊す）+ -ilis（〜できる・〜しやすい）。「簡単に割れてしまう」という語源的な意味が転じて「デリケートな・傷つきやすい」という感情・社会的文脈でも使われるようになった。\n\n16世紀に英語に入り、陶磁器・ガラスなど物理的に壊れやすいものを形容する語として定着。現代では「精神的に傷つきやすい（emotionally fragile）」「経済が不安定な（fragile economy）」のように抽象的な「脆弱性」を表す語としても広く使われる。\n\nnassim taleb の著書 "Antifragile"（反脆弱性、2012年）は fragile（壊れやすい）→ robust（頑健な）→ antifragile（混乱から恩恵を受ける）という三分類を提示し、経済・組織論に影響を与えた。",
      derivatives: [
        { word: "fragility",    desc: "脆弱性・壊れやすさ（名詞）" }
      ],
      family: [
        { word: "fracture",    desc: "骨折・亀裂（fractura）" },
        { word: "fragment",    desc: "断片（fragmentum）" },
        { word: "fraction",    desc: "分数・端数（fractio）" }
      ],
      compounds: [
        { phrase: "handle with care: fragile", desc: "取扱注意・壊れ物（荷物ラベル）" },
        { phrase: "fragile ecosystem",         desc: "脆弱な生態系" }
      ]
    },

    // ── scend系（登る・降りる）──
    "ascend": {
      origin: "ラテン語 ascendere（登る・上がる）< ad-（〜へ）+ scandere（登る）。scandere の印欧語根 *skand-（飛び上がる・登る）は英語の scan（調べる ＝ もともと「詩の韻律を読む」）とも遠縁にある。\n\n14世紀の英語に入り「高い場所へ登る・地位・権力が上がる」という動詞として定着。ascend a mountain（山を登る）、ascend to power（権力の座に就く）のように物理的・抽象的両方の「上昇」を表す。\n\nassent（同意する）とは綴りが異なるが、混同しやすいので注意。ascendant（優位な・上昇中の）は占星術でも使われ「昇ってくる星座」を指す。",
      derivatives: [
        { word: "ascent",       desc: "上昇・登ること（名詞）" },
        { word: "ascendant",    desc: "優位な・上昇中の（形容詞）" },
        { word: "ascension",    desc: "上昇・昇天（キリストの昇天など）" }
      ],
      family: [
        { word: "descend",      desc: "降りる・下降する（de- + scandere）" },
        { word: "transcend",    desc: "超越する（trans- + scandere）" },
        { word: "scale",        desc: "登る・縮尺（scala 梯子 < scandere）" }
      ],
      compounds: [
        { phrase: "ascend to power",   desc: "権力の座に就く・台頭する" },
        { phrase: "ascending order",   desc: "昇順（小から大へ）" }
      ]
    },

    "descend": {
      origin: "ラテン語 descendere（下りる・降下する）< de-（下へ）+ scandere（登る）。「登ること（scandere）の反対」として「下りる」という意味になった。\n\n14世紀の英語に入り「高い場所から下りる・祖先から受け継ぐ」という動詞として定着。be descended from（〜の子孫である）は家系・起源を表す重要表現。descent（下り坂・家系・降下）という名詞も頻用される。\n\n生物学の文脈では common descent（共通の祖先から分かれたこと）という概念がダーウィンの進化論の核心にあり、現代の系統発生学・進化生物学の基礎をなしている。",
      derivatives: [
        { word: "descent",      desc: "下降・傾斜・家系・降下（名詞）" },
        { word: "descendant",   desc: "子孫・末裔（名詞）" }
      ],
      family: [
        { word: "ascend",       desc: "登る（ad- + scandere）" },
        { word: "transcend",    desc: "超越する（trans- + scandere）" },
        { word: "condescend",   desc: "見下す・丁寧に応じる（con- + descendere）" }
      ],
      compounds: [
        { phrase: "be descended from",  desc: "〜の子孫である・〜から受け継ぐ" },
        { phrase: "common descent",     desc: "共通祖先（進化論の概念）" }
      ]
    },

    "transcend": {
      origin: "ラテン語 transcendere（超えて登る）< trans-（超えて・向こうへ）+ scandere（登る）。「通常の限界を超えて上に行く」というのが語源的な意味。\n\n14世紀の英語に入り「〜を超越する・〜の範囲を超える」という動詞として定着。哲学・宗教では「人間の経験・理解の限界を超えた存在・状態」を指す用語として重要で、transcendent（超越的な）、transcendental（先験的な）は哲学の専門語として使われる。\n\nカントの批判哲学（「pure reason transcends experience ＝ 純粋理性は経験を超える」）や、エマーソン・ソローの超越主義（Transcendentalism）、さらには超越瞑想（Transcendental Meditation）など多様な文脈で登場する。",
      derivatives: [
        { word: "transcendent",     desc: "超越的な・卓越した（形容詞）" },
        { word: "transcendental",   desc: "先験的な・超越的な（哲学用語）" },
        { word: "transcendence",    desc: "超越・超越性（名詞）" }
      ],
      family: [
        { word: "ascend",           desc: "登る（ad- + scandere）" },
        { word: "descend",          desc: "降りる（de- + scandere）" },
        { word: "transport",        desc: "輸送する（trans- + portare）" },
        { word: "transform",        desc: "変容させる（trans- + forma）" }
      ],
      compounds: [
        { phrase: "transcend boundaries",  desc: "境界を超える・枠を超える" },
        { phrase: "transcendental meditation", desc: "超越瞑想（TM法）" }
      ]
    },

    // ── nav / navi系（船・航行）──
    "navigate": {
      origin: "ラテン語 navigare（航行する）< navis（船）+ agere（動かす・進める）。「船を動かす」というのが語源の核心で、navis は英語の navy（海軍）、naval（海軍の）と同じ語根。\n\n16世紀の英語に入り「船・航空機を操縦する・経路を見つける」という動詞として定着。現代ではカーナビゲーション（car navigation）、GPSナビ（GPS navigation）のような電子的な経路案内の文脈で最も頻繁に使われる。\n\n比喩的には "navigate complex regulations"（複雑な規制を上手くくぐり抜ける）のように「困難な状況を上手に対処する」という意味でも広く使われ、英語のビジネス・政治語彙で頻出する。",
      derivatives: [
        { word: "navigation",    desc: "航行・ナビゲーション・経路案内" },
        { word: "navigator",     desc: "航法士・ナビゲーター" }
      ],
      family: [
        { word: "navy",          desc: "海軍（navis 船）" },
        { word: "naval",         desc: "海軍の（navalis）" },
        { word: "nautical",      desc: "航海の（nautes 船乗り）" },
        { word: "astronaut",     desc: "宇宙飛行士（astron + nautes）" }
      ],
      compounds: [
        { phrase: "GPS navigation",  desc: "GPSナビゲーション" },
        { phrase: "navigate through", desc: "〜を乗り越える・うまく対処する" }
      ]
    },

    // ── sol / luna系（太陽・月）──
    "solar": {
      origin: "ラテン語 solaris（太陽の）< sol（太陽）。sol はインド・ヨーロッパ語根 *sōwel-（太陽）に由来し、英語の sun（太陽）とも遠縁にある。フランス語 soleil、スペイン語 sol も同じ語根を持つ。\n\n15世紀頃に英語に入り「太陽の・太陽エネルギーの」という形容詞として定着。solar system（太陽系）、solar energy（太陽エネルギー）、solar panel（太陽光パネル）のように天文学・エネルギー技術の基本語。\n\nsolstice（至点 ＝ sol + sistere 立つ、太陽が「立ち止まる」時点）、parasolは（日傘 ＝ para- 守る + sol）など多くの英語語彙を形成する。",
      derivatives: [
        { word: "solstice",     desc: "夏至・冬至（sol + sistere 立ち止まる）" }
      ],
      family: [
        { word: "solstice",    desc: "至点（sol + sistere）" },
        { word: "parasol",     desc: "日傘（para- 防ぐ + sol）" },
        { word: "sun",         desc: "太陽（同じ印欧語根 *sōwel-）" },
        { word: "insolation",  desc: "日射量・日照（in- + sol + -ation）" }
      ],
      compounds: [
        { phrase: "solar system",    desc: "太陽系" },
        { phrase: "solar energy",    desc: "太陽エネルギー" },
        { phrase: "solar panel",     desc: "太陽光パネル" }
      ]
    },

    "lunar": {
      origin: "ラテン語 lunaris（月の）< luna（月）。luna は印欧語根 *leuk-（光・輝く）に由来し、英語の light（光）や lucid（明晰な）とも遠縁にある。月が光を「輝かせる」ものとして捉えられていた。\n\n17世紀に英語に入り「月の・月に関する」という形容詞として定着。lunar calendar（太陰暦）、lunar eclipse（月食）、lunar module（月着陸船 ＝ アポロ計画）のように天文学・暦・宇宙開発で使われる。\n\nlunatic（狂気の < luna）は「月の影響を受けて狂う」という信仰から来た語で、かつて精神疾患は月の満ち欠けによって悪化すると信じられていた。",
      derivatives: [
        { word: "lunatic",     desc: "狂った・正気でない（luna の影響を受けた）" }
      ],
      family: [
        { word: "solar",       desc: "太陽の（sol）" },
        { word: "lunatic",     desc: "狂った（luna 月に影響された）" },
        { word: "illuminate",  desc: "照らす（in- + lumen 光）" },
        { word: "lucid",       desc: "明晰な・明瞭な（lucidus 光の）" }
      ],
      compounds: [
        { phrase: "lunar eclipse",    desc: "月食" },
        { phrase: "lunar calendar",   desc: "太陰暦・旧暦" },
        { phrase: "lunar module",     desc: "月着陸船（アポロ計画）" }
      ]
    },

    // ── grav系（重い）──
    "gravity": {
      origin: "ラテン語 gravitas（重さ・重力・重要性・威厳）< gravis（重い）。gravis は印欧語根 *gwer-（重い）に由来し、英語の grieve（嘆く ＝ 心が重くなる）とも語源的に関連する。\n\n14世紀に英語に入り「重みのある態度・威厳」という意味で使われていたが、ニュートンが万有引力の法則（1687年）を発見したことで「重力（gravitational force）」という物理学的意味が確立した。\n\ngravity は物理学の基礎であるだけでなく、"the gravity of the situation"（状況の深刻さ）のように「重大さ・深刻さ」という比喩的意味でも頻用される。",
      derivatives: [
        { word: "gravitational",  desc: "重力の（形容詞）" },
        { word: "gravitate",      desc: "引き寄せられる・重力で動く" },
        { word: "gravitation",    desc: "引力・重力作用" }
      ],
      family: [
        { word: "grave",          desc: "重大な・厳粛な（gravis から）" },
        { word: "aggravate",      desc: "悪化させる・怒らせる（ad- + gravare）" },
        { word: "grief",          desc: "深い悲しみ（gravis と同語根）" }
      ],
      compounds: [
        { phrase: "center of gravity",  desc: "重心・中心（物理・比喩）" },
        { phrase: "gravity of the situation", desc: "事態の深刻さ" }
      ]
    },

    "aggravate": {
      origin: "ラテン語 aggravare（重くする・悪化させる）< ad-（強調）+ gravare（重くする）< gravis（重い）。「すでに重いものをさらに重くする＝状況を悪化させる」というのが語源的な意味。\n\n15世紀の英語に入り「病状・状況をさらに悪化させる」という正式な意味で使われる。現代口語では「〜をいらいらさせる・悩ませる」という意味でも広く使われており、"That really aggravates me."（それは本当に腹が立つ）のように感情的文脈でも登場する。\n\nただし、本来は「状況を悪化させる」が正式な意味で、「人をいらいらさせる」という用法は俗語的とされることもある。実際のところ現代英語では両義ともに標準的に使われる。",
      derivatives: [
        { word: "aggravation",    desc: "悪化・苛立ち（名詞）" },
        { word: "aggravating",    desc: "苛立たしい・悪化させる（形容詞）" }
      ],
      family: [
        { word: "gravity",       desc: "重力・深刻さ（gravitas）" },
        { word: "grave",         desc: "重大な（gravis）" },
        { word: "gravitate",     desc: "引き寄せられる（gravis）" }
      ],
      compounds: [
        { phrase: "aggravate a problem",  desc: "問題を悪化させる" },
        { phrase: "aggravating factor",   desc: "悪化要因・加重要素（法律）" }
      ]
    },

    // ── act / ag系（行う・動かす）──
    "agent": {
      origin: "ラテン語 agens（行う者）< agere（行う・動かす・進める）の現在分詞形。agere は「羊の群れを動かす」という農業的なイメージが原義で、印欧語根 *ag-（駆り立てる）に由来する。\n\n15世紀の英語に入り「ある目的のために行動する者・代理人」という意味で定着。不動産エージェント（real estate agent）、旅行代理店（travel agent）、CIA の諜報員（intelligence agent）まで「代理で行動する人・媒介となるもの」を広く指す。\n\n化学・医学では「〜剤・〜作用物質」という意味にもなり、infectious agent（感染因子）、bleaching agent（漂白剤）のように使われる。",
      derivatives: [
        { word: "agency",      desc: "代理店・機関・作用（名詞）" },
        { word: "agenda",      desc: "議題・行動計画（agere の動名詞形）" },
        { word: "agile",       desc: "機敏な・アジャイルな（agilis < agere）" }
      ],
      family: [
        { word: "act",         desc: "行為・法令・演じる（actum < agere）" },
        { word: "exact",       desc: "正確な（ex- + agere 完全に行う）" },
        { word: "react",       desc: "反応する（re- + agere）" },
        { word: "navigate",    desc: "航行する（navis + agere）" }
      ],
      compounds: [
        { phrase: "travel agent",        desc: "旅行代理店" },
        { phrase: "real estate agent",   desc: "不動産エージェント" },
        { phrase: "free agent",          desc: "フリーエージェント・自由に行動できる人" }
      ]
    },

    "react": {
      origin: "ラテン語 re-（再び・反対に）+ actus（行われたこと < agere 行う）。「ある行為に対して反対方向・反応として別の行為を起こす」というのが語源的な意味。\n\n17世紀の英語に入り「〜に反応する」という動詞として定着。化学では化学反応（chemical reaction）の基本用語であり、物理学ではニュートンの第三法則「作用・反作用の法則（action and reaction）」の核心語。\n\n日常では"How did she react?"（彼女はどんな反応をした？）のように感情的・行動的な反応全般を指す。overreact（過剰反応する）も重要な派生語。",
      derivatives: [
        { word: "reaction",      desc: "反応・反発・化学反応（名詞）" },
        { word: "reactive",      desc: "反応的な・化学的に反応しやすい（形容詞）" },
        { word: "reactionary",   desc: "反動的な・反改革派の（政治用語）" }
      ],
      family: [
        { word: "act",           desc: "行動・演じる（actum < agere）" },
        { word: "interact",      desc: "相互作用する（inter- + act）" },
        { word: "transact",      desc: "取引する（trans- + act）" },
        { word: "exact",         desc: "正確な（ex- + agere）" }
      ],
      compounds: [
        { phrase: "chain reaction",   desc: "連鎖反応" },
        { phrase: "gut reaction",     desc: "直感的な反応・本能的な反応" }
      ]
    },

    "interact": {
      origin: "ラテン語 inter-（間で・相互に）+ agere（行う）の合成語。「二者（以上）の間で相互に行為が起こる」というのが語源。英語への定着は比較的新しく、19〜20世紀に科学・社会科学の用語として広まった。\n\n物理学では「粒子同士が相互作用する」、生物学では「生物が環境や他個体と相互作用する」、コンピュータ科学では「ユーザーとシステムがやり取りをする（user interaction）」という意味で使われる。\n\nSNS・デジタルメディアの台頭とともに、interaction rate（インタラクション率 ＝ いいね・コメント・シェアの合計）などのマーケティング指標として日常語化した。",
      derivatives: [
        { word: "interaction",    desc: "相互作用・やり取り（名詞）" },
        { word: "interactive",    desc: "双方向の・インタラクティブな（形容詞）" }
      ],
      family: [
        { word: "act",            desc: "行為（agere）" },
        { word: "react",          desc: "反応する（re- + agere）" },
        { word: "transact",       desc: "取引する（trans- + agere）" },
        { word: "interface",      desc: "インターフェース（inter- + face 顔）" }
      ],
      compounds: [
        { phrase: "social interaction",  desc: "社会的交流・対人コミュニケーション" },
        { phrase: "user interaction",    desc: "ユーザーとの対話・UI操作" }
      ]
    },

    "exact": {
      origin: "ラテン語 exactus（完全に行われた・精密な）< exigere（完全に行う・要求する）< ex-（完全に）+ agere（行う・駆り立てる）の過去分詞。「測定・計量を完全にやり切った」という意味から「正確な・厳密な」という形容詞になった。\n\n15世紀の英語に入り「正確な・厳密な・精密な」という形容詞と「（税金・代金を）厳しく取り立てる」という動詞（exacting な要求）の両義で使われる。\n\nexactly（まさに・ちょうど）は英語会話で相手の発言に強く同意するときの返答として extremely high frequency で使われる。"Exactly!"（その通り！）は英語話者が議論・会話で頻繁に使う重要フレーズ。",
      derivatives: [
        { word: "exactly",      desc: "まさに・ちょうど・正確に（副詞）" },
        { word: "exactness",    desc: "正確さ・厳密さ（名詞）" },
        { word: "exacting",     desc: "厳しい要求をする・骨の折れる（形容詞）" }
      ],
      family: [
        { word: "agent",        desc: "代理人（agens < agere）" },
        { word: "react",        desc: "反応する（re- + agere）" },
        { word: "interact",     desc: "相互作用する（inter- + agere）" },
        { word: "examine",      desc: "調べる（examinare < agere）" }
      ],
      compounds: [
        { phrase: "exact copy",       desc: "完全なコピー・寸分たがわぬ複写" },
        { phrase: "exact change",     desc: "ぴったりのお釣り・端数なしの支払い" }
      ]
    },

    // ── clud / clus系（閉じる・含む）──
    "include": {
      origin: "ラテン語 includere（中に閉じ込める）< in-（中に）+ claudere（閉じる・塞ぐ）。「ある境界の中に閉じ込める＝含める」というのが語源的なイメージ。\n\n15世紀の英語に入り「〜を含む・〜を一員として含める」という動詞として定着。現代では最も高頻度の英語動詞の一つで、including（〜を含めて）は文書・スピーチで非常によく使われる前置詞句。\n\n語根 clud- / clos- は conclude（結論を出す＝閉じる）、exclude（除外する＝外に閉め出す）、preclude（あらかじめ閉め出す＝妨げる）、disclose（明らかにする＝閉じたものを開く）など、含める・閉じる・開くというさまざまな方向性の語を形成する。",
      derivatives: [
        { word: "inclusion",    desc: "包含・包括・インクルージョン（名詞）" },
        { word: "inclusive",    desc: "包括的な・すべてを含む（形容詞）" },
        { word: "including",    desc: "〜を含めて（前置詞句）" }
      ],
      family: [
        { word: "exclude",      desc: "除外する（ex- 外へ + claudere）" },
        { word: "conclude",     desc: "結論を出す（con- + claudere）" },
        { word: "preclude",     desc: "妨げる（prae- 前に + claudere）" },
        { word: "disclose",     desc: "明らかにする（dis- + claudere）" },
        { word: "close",        desc: "閉じる（claudere の英語形）" }
      ],
      compounds: [
        { phrase: "included in",      desc: "〜に含まれている" },
        { phrase: "inclusive of tax", desc: "税込みで" }
      ]
    },

    "exclude": {
      origin: "ラテン語 excludere（外に閉め出す）< ex-（外へ）+ claudere（閉じる）。「境界の外側に閉め出す＝含めない・締め出す」というのが語源の核心。\n\n15世紀に英語に入り「〜を除外する・〜を排除する・〜を含まない」という動詞として定着。社会的文脈では social exclusion（社会的排除）という概念が重要で、貧困・差別・障害などにより社会参加が阻まれる状態を指す。\n\nexclusive（独占的な・高級な）は「特定の人だけに限定された」というニュアンスを持ち、exclusive club（会員制クラブ）、exclusive deal（独占契約）のようにビジネス・マーケティングでも重要語。",
      derivatives: [
        { word: "exclusion",    desc: "除外・排除・社会的排除（名詞）" },
        { word: "exclusive",    desc: "独占的な・限定的な・高級な（形容詞）" },
        { word: "exclusively",  desc: "もっぱら・独占的に（副詞）" }
      ],
      family: [
        { word: "include",      desc: "含める（in- + claudere）" },
        { word: "conclude",     desc: "結論を出す（con- + claudere）" },
        { word: "preclude",     desc: "妨げる（prae- + claudere）" },
        { word: "close",        desc: "閉じる（claudere から）" }
      ],
      compounds: [
        { phrase: "exclusive access",    desc: "独占的なアクセス・限定公開" },
        { phrase: "mutually exclusive",  desc: "相互排他的な・両立しない" }
      ]
    },

    "conclude": {
      origin: "ラテン語 concludere（完全に閉じる・結論をつける）< con-（完全に）+ claudere（閉じる）。「議論・審議を完全に閉じる＝最終的な判断を下す」というのが語源のイメージ。\n\n14世紀の英語に入り「結論を出す・終える・締結する」という動詞として定着。To conclude,（結論として）は論文・スピーチで重要な移行表現。また conclude a treaty / deal（条約・契約を締結する）のように「正式に閉じる・合意に達する」という意味でも使われる。\n\n三段論法（syllogism）では「前提から結論（conclusion）を導く」という論理的操作を指し、哲学・法律論において重要な概念語でもある。",
      derivatives: [
        { word: "conclusion",   desc: "結論・締結・終わり（名詞）" },
        { word: "conclusive",   desc: "決定的な・結論的な（形容詞）" },
        { word: "inclusive",    desc: "決定的に・最終的に（副詞）" }
      ],
      family: [
        { word: "include",      desc: "含める（in- + claudere）" },
        { word: "exclude",      desc: "除外する（ex- + claudere）" },
        { word: "preclude",     desc: "妨げる（prae- + claudere）" }
      ],
      compounds: [
        { phrase: "to conclude",          desc: "結論として・最後に" },
        { phrase: "conclusive evidence",  desc: "決定的証拠" }
      ]
    },

    // ── serv系（守る・仕える）──
    "observe": {
      origin: "ラテン語 observare（注意深く見守る・守る）< ob-（向かって）+ servare（守る・見張る）。「守るために注意深く見る」というのが語源の原義。\n\n14世紀の英語に入り「（1）観察する・目撃する」と「（2）規則・習慣を守る・遵守する」という二つの主要な意味で使われる。科学では「自然現象を注意深く観察する」という empirical observation（観察）が知識の基礎とされる。\n\nobservatory（天文台・気象台）は「観察のための場所」であり、observance（規則・儀式の遵守）は「守ること」という意味で使われる。",
      derivatives: [
        { word: "observation",   desc: "観察・観測・所見（名詞）" },
        { word: "observer",      desc: "観察者・監視員・オブザーバー" },
        { word: "observatory",   desc: "天文台・気象台・観測所" }
      ],
      family: [
        { word: "preserve",      desc: "保護する・保存する（prae- + servare）" },
        { word: "reserve",       desc: "確保する・予約する（re- + servare）" },
        { word: "deserve",       desc: "〜に値する（de- + servire 仕える）" },
        { word: "conserve",      desc: "保全する（con- + servare）" }
      ],
      compounds: [
        { phrase: "under observation", desc: "観察下に・監視下に" },
        { phrase: "observe a rule",    desc: "規則を守る・遵守する" }
      ]
    },

    "preserve": {
      origin: "ラテン語 praeservare（前もって守る）< prae-（前に・あらかじめ）+ servare（守る・保全する）。「将来のために今守る・維持する」というのが語源。\n\n14世紀の英語に入り「（1）食品を保存する・（2）環境・文化を保護する・維持する」という動詞として使われる。食品加工では preserve（ジャム・漬物など保存食）という名詞にもなる。\n\n環境保護の文脈では nature preserve / nature preserve（自然保護区）として使われる。文化保護では preserve a language / tradition（言語・伝統を維持する）のように、失われそうなものを守るという文脈で頻用される。",
      derivatives: [
        { word: "preservation",   desc: "保存・保護・維持（名詞）" },
        { word: "preservative",   desc: "防腐剤・保存料（名詞・形容詞）" },
        { word: "preservationist", desc: "保存主義者・文化財保護活動家" }
      ],
      family: [
        { word: "observe",        desc: "観察する・守る（ob- + servare）" },
        { word: "reserve",        desc: "確保する（re- + servare）" },
        { word: "conserve",       desc: "保全する（con- + servare）" },
        { word: "serve",          desc: "仕える・提供する（servire）" }
      ],
      compounds: [
        { phrase: "preserve the environment", desc: "環境を保護する" },
        { phrase: "nature preserve",          desc: "自然保護区" }
      ]
    },

    "deserve": {
      origin: "ラテン語 deservire（完全に仕える・十分に奉仕する）< de-（完全に）+ servire（仕える・奉仕する）。「十分に仕えたのだから当然の報いを受ける資格がある」というのが語源的なニュアンス。\n\n13世紀の英語に入り「〜に値する・〜を受けるに足る」という動詞として定着。you deserve it（あなたはそれを受けるに値する＝当然の報いだ）は日常英語での頻出表現。肯定的文脈（You deserve a break.）にも否定的文脈（He got what he deserved.）にも使われる。\n\ndesert（功績・当然の報い）という名詞形も「just deserts（正当な報い）」という慣用句で使われる。",
      derivatives: [
        { word: "deserving",     desc: "〜に値する・それだけの資格のある（形容詞）" },
        { word: "undeserving",   desc: "〜に値しない（un- + deserving）" }
      ],
      family: [
        { word: "observe",       desc: "観察する（ob- + servare）" },
        { word: "preserve",      desc: "保護する（prae- + servare）" },
        { word: "reserve",       desc: "確保する・予約する（re- + servare）" },
        { word: "service",       desc: "サービス・奉仕（servitium）" }
      ],
      compounds: [
        { phrase: "deserve a break",    desc: "休憩を取るに値する・休んで当然だ" },
        { phrase: "get what you deserve", desc: "当然の報いを受ける" }
      ]
    },

    "reserve": {
      origin: "ラテン語 reservare（後のために取っておく）< re-（後ろへ・再び）+ servare（守る・取っておく）。「将来のためにある状態に保って守っておく」というのが語源的な意味。\n\n14世紀の英語に入り「（座席・宿泊を）予約する・（資源を）確保しておく・遠慮がちな態度」という多義語として定着。a reserve of water（水の備蓄）、nature reserve（自然保護区）、in reserve（備えとして）のように使われる。\n\n形容詞 reserved は「控えめな・内気な（感情を外に出さない）」という意味でも使われ、"a reserved person"（物静かな人）のように言う。",
      derivatives: [
        { word: "reservation",   desc: "予約・留保・懸念（名詞）" },
        { word: "reserved",      desc: "予約済みの・控えめな（形容詞）" }
      ],
      family: [
        { word: "observe",       desc: "観察する（ob- + servare）" },
        { word: "preserve",      desc: "保護する（prae- + servare）" },
        { word: "deserve",       desc: "〜に値する（de- + servire）" }
      ],
      compounds: [
        { phrase: "make a reservation",  desc: "予約をする" },
        { phrase: "in reserve",          desc: "備えとして・予備として" },
        { phrase: "nature reserve",      desc: "自然保護区" }
      ]
    },

    // ── solv / solu系（解く・解放する）──
    "solve": {
      origin: "ラテン語 solvere（解く・解放する・支払う）< se-（離して）+ luere（洗う・解放する）。「縛られたものを解き放す」というのが語源のイメージ。「問題を解く」「債務を支払う（解消する）」「謎を解明する」という三方向の意味を古代からもっていた。\n\n15世紀に英語に入り「問題を解く・謎を解明する」という動詞として定着。solve a problem（問題を解く）、solve a crime（犯罪を解決する）のように使われる。\n\n語根 solv- は resolve（解決する・再度解く）、dissolve（溶かす・解消する）、absolve（免罪する）、solution（解決策・溶液）など重要語を多数形成する。",
      derivatives: [
        { word: "solution",     desc: "解決策・解答・溶液（名詞）" },
        { word: "solvable",     desc: "解決可能な（形容詞）" },
        { word: "insoluble",    desc: "解けない・不溶性の（in- + solvere）" }
      ],
      family: [
        { word: "resolve",      desc: "解決する・決意する（re- + solvere）" },
        { word: "dissolve",     desc: "溶かす・解散する（dis- + solvere）" },
        { word: "absolve",      desc: "免罪する（ab- + solvere）" },
        { word: "absolute",     desc: "絶対的な（absolutus 解き放たれた）" }
      ],
      compounds: [
        { phrase: "solve a problem",   desc: "問題を解決する" },
        { phrase: "problem-solving",   desc: "問題解決（複合名詞・形容詞）" }
      ]
    },

    "resolve": {
      origin: "ラテン語 resolvere（再び解く・完全に解く）< re-（再び・強調）+ solvere（解く）。「しっかりと解き切る＝問題を決定的に片付ける」というのが語源的な強調ニュアンス。\n\n14世紀の英語に入り「（1）問題・紛争を解決する（2）決意する（3）音楽で和音を解決（緊張を解消）する」という多義語として使われる。New Year's resolution（新年の抱負）は「決意したこと」という名詞形での有名な用例。\n\nresolute（断固とした）という形容詞は「一度決めたことを解き放たない＝ぶれない」という意味で、リーダーシップ・政治の文脈で重要語。",
      derivatives: [
        { word: "resolution",   desc: "解決・決議・決意・解像度（名詞）" },
        { word: "resolute",     desc: "断固とした・決然たる（形容詞）" },
        { word: "resolutely",   desc: "断固として・毅然と（副詞）" }
      ],
      family: [
        { word: "solve",        desc: "解く（solvere）" },
        { word: "dissolve",     desc: "溶かす・解散する（dis- + solvere）" },
        { word: "absolve",      desc: "免罪する（ab- + solvere）" }
      ],
      compounds: [
        { phrase: "resolve a conflict",   desc: "紛争を解決する" },
        { phrase: "New Year's resolution", desc: "新年の抱負" },
        { phrase: "screen resolution",    desc: "画面解像度" }
      ]
    },

    "dissolve": {
      origin: "ラテン語 dissolvere（バラバラに解く）< dis-（離散・分離）+ solvere（解く）。「結びついていたものを完全にバラバラにして解く」という語源のイメージは、固体が液体に溶ける物理現象と組織・関係が解散する社会現象の両方を正確に捉えている。\n\n15世紀に英語に入り「（1）液体に溶かす（2）議会・会社・婚姻を解散・解消する」という二つの主要な意味で使われる。\n\n映画・映像技術では dissolve（オーバーラップしながら場面が変わる手法）という編集技法としても定着している。",
      derivatives: [
        { word: "dissolution",  desc: "解散・溶解・解体（名詞）" },
        { word: "soluble",      desc: "水に溶ける・解決できる（形容詞）" }
      ],
      family: [
        { word: "solve",        desc: "解く（solvere）" },
        { word: "resolve",      desc: "解決する（re- + solvere）" },
        { word: "absolve",      desc: "免罪する（ab- + solvere）" }
      ],
      compounds: [
        { phrase: "dissolve in water",    desc: "水に溶ける" },
        { phrase: "dissolve parliament",  desc: "議会を解散する" }
      ]
    },

    // ── sist系（立つ・留まる）──
    "resist": {
      origin: "ラテン語 resistere（立ちはだかる・抵抗する）< re-（反対に）+ sistere（立たせる・止まらせる）。sistere は stāre（立つ）の使役形で、「反対方向に立たせる＝抵抗する」というのが語源。\n\n14世紀の英語に入り「抵抗する・反抗する・我慢する」という動詞として定着。resist temptation（誘惑に抗う）、resist change（変化に抵抗する）のように使われる。"I can't resist it."（我慢できない）は日常英語の頻出表現。\n\n語根 sist- は assist（傍らで立つ＝補助する）、consist（共に立つ＝成り立つ）、persist（しつこく立ち続ける＝根気よく続ける）、insist（中に立ち続ける＝主張する）など多くの基本動詞を形成する。",
      derivatives: [
        { word: "resistance",    desc: "抵抗・抵抗力・レジスタンス（名詞）" },
        { word: "resistant",     desc: "抵抗力のある・耐性のある（形容詞）" },
        { word: "irresistible",  desc: "抗しがたい・抗えない（ir- + resistible）" }
      ],
      family: [
        { word: "assist",       desc: "補助する・援助する（ad- + sistere）" },
        { word: "consist",      desc: "〜から成り立つ（con- + sistere）" },
        { word: "persist",      desc: "根気よく続ける（per- + sistere）" },
        { word: "insist",       desc: "主張する（in- + sistere）" }
      ],
      compounds: [
        { phrase: "antibiotic resistance",  desc: "抗生物質耐性" },
        { phrase: "resistance movement",    desc: "抵抗運動・レジスタンス" }
      ]
    },

    "assist": {
      origin: "ラテン語 assistere（傍らに立つ）< ad-（傍に・〜へ）+ sistere（立たせる）。「誰かの傍らに立って助ける」という語源のイメージが「援助する」の意味の基盤。\n\n15世紀に英語に入り「援助する・補助する・助力する」という動詞として定着。assist with（〜を手伝う）、assist in（〜において助ける）が基本的な使い方。\n\nスポーツでは assist（アシスト＝他の選手の得点に貢献したプレー）という名詞で使われ、バスケットボール・アイスホッケー・サッカーなどで重要な統計指標。IT では virtual assistant（AIアシスタント）のように人工知能の支援機能を指す語としても定着している。",
      derivatives: [
        { word: "assistant",    desc: "助手・アシスタント（名詞・形容詞）" },
        { word: "assistance",   desc: "援助・支援・補助（名詞）" }
      ],
      family: [
        { word: "resist",       desc: "抵抗する（re- + sistere）" },
        { word: "consist",      desc: "成り立つ（con- + sistere）" },
        { word: "persist",      desc: "続ける（per- + sistere）" },
        { word: "insist",       desc: "主張する（in- + sistere）" }
      ],
      compounds: [
        { phrase: "teaching assistant",  desc: "ティーチングアシスタント（TA）" },
        { phrase: "virtual assistant",   desc: "AIアシスタント・仮想アシスタント" }
      ]
    },

    "persist": {
      origin: "ラテン語 persistere（ずっと立ち続ける）< per-（通して・継続して）+ sistere（立たせる）。「途中で止まることなく立ち続ける＝諦めずに続ける」というのが語源的な意味。\n\n16世紀の英語に入り「（困難の中でも）根気よく続ける・しつこく続く」という動詞として定着。positive な文脈では「諦めずに努力し続ける」という粘り強さを表し、negative な文脈では「問題が解決しない・症状が続く」という持続を指す。\n\nif the problem persists（問題が続く場合は）のように IT・医療の取扱説明書でも頻出表現。",
      derivatives: [
        { word: "persistent",    desc: "根気強い・しつこい・継続する（形容詞）" },
        { word: "persistence",   desc: "粘り強さ・根気・持続性（名詞）" },
        { word: "persistently",  desc: "根気よく・執拗に（副詞）" }
      ],
      family: [
        { word: "resist",        desc: "抵抗する（re- + sistere）" },
        { word: "assist",        desc: "補助する（ad- + sistere）" },
        { word: "consist",       desc: "成り立つ（con- + sistere）" },
        { word: "insist",        desc: "主張する（in- + sistere）" }
      ],
      compounds: [
        { phrase: "persist in doing",  desc: "〜し続ける・諦めずに続ける" },
        { phrase: "persistent effort", desc: "粘り強い努力" }
      ]
    },

    "insist": {
      origin: "ラテン語 insistere（〜の上に立ち続ける・固執する）< in-（上に・中に）+ sistere（立たせる）。「ある立場の上から動かない＝強く主張する」というのが語源。\n\n16世紀の英語に入り「〜を主張する・〜を要求する・〜を断言する」という動詞として定着。insist on doing（〜することを主張する）、insist that SV（〜と断言する）が主要な構文。\n\n他者の意見に関わらず自分の立場を維持するという強さと頑固さの両面を持ち、"She insisted on paying."（彼女は自分が払うと言い張った）のように意志の強さを表す。",
      derivatives: [
        { word: "insistence",   desc: "主張・強要・固執（名詞）" },
        { word: "insistent",    desc: "主張し続ける・しつこい（形容詞）" }
      ],
      family: [
        { word: "resist",       desc: "抵抗する（re- + sistere）" },
        { word: "assist",       desc: "補助する（ad- + sistere）" },
        { word: "persist",      desc: "続ける（per- + sistere）" },
        { word: "consist",      desc: "成り立つ（con- + sistere）" }
      ],
      compounds: [
        { phrase: "insist on",    desc: "〜を強く主張する・要求する" },
        { phrase: "insist that",  desc: "〜と断言する・〜だと言い張る" }
      ]
    },

    // ── spec / spect系（見る）──
    "specific": {
      origin: "ラテン語 specificus（種を作る・特定の種に属する）< species（種類・外見）+ facere（作る）。species は speciēs < specere（見る）に由来し、「見た目の違いによって区別された種類」というのが原義。\n\n17世紀に英語に入り「特定の・明確な・具体的な」という形容詞として定着。be specific（具体的に言う）、specific details（具体的な詳細）のように、曖昧さを排して明確に特定する文脈で使われる。ビジネス・科学・法律などあらゆる分野で基本語として機能している。\n\nspecification（仕様書・スペック）は製品や建物の設計・要件を具体的に記述した文書で、IT・建設業界では必須語。",
      derivatives: [
        { word: "specifically",    desc: "具体的に・特に・明確に（副詞）" },
        { word: "specification",   desc: "仕様・スペック・明細書（名詞）" },
        { word: "specify",         desc: "具体的に述べる・明記する（動詞）" }
      ],
      family: [
        { word: "species",         desc: "種（生物分類）・種類（specere）" },
        { word: "speculate",       desc: "推測する・投機する（specula 見張り台）" },
        { word: "spectacle",       desc: "壮観・見世物（spectaculum）" },
        { word: "inspect",         desc: "調査する（in- + specere）" }
      ],
      compounds: [
        { phrase: "be specific",      desc: "具体的に言う・明確にする" },
        { phrase: "technical spec",   desc: "技術仕様書（略語）" }
      ]
    },

    "species": {
      origin: "ラテン語 species（外観・種類・種）< specere（見る）。「目で見て区別できる形・種類」というのが原義で、哲学では「類（genus）の下位区分」を指す用語として使われた。\n\n17世紀にカール・リンネが生物の二名法（binomial nomenclature）を確立し（1753年）、species は「生物分類の基本単位」という現在の科学的意味に特化した。同じ種の個体は互いに交配して生殖能力のある子孫を残せるという定義が基本。\n\nダーウィンの主著『種の起源（On the Origin of Species, 1859年）』は生物学史上最大の転換点の一つで、species という語の意味・重みを根本から変えた。",
      derivatives: [
        { word: "speciation",    desc: "種の形成・種分化（生物学用語）" }
      ],
      family: [
        { word: "specific",      desc: "特定の・具体的な（species + facere）" },
        { word: "speculate",     desc: "推測する（specula 見張り台）" },
        { word: "special",       desc: "特別な（specialis 特定の種の）" },
        { word: "inspect",       desc: "調査する（in- + specere）" }
      ],
      compounds: [
        { phrase: "endangered species",  desc: "絶滅危惧種" },
        { phrase: "invasive species",    desc: "侵略的外来種" }
      ]
    },

    "speculate": {
      origin: "ラテン語 speculari（見張る・観察する）< specula（見張り台）< specere（見る）。「高い場所から遠くを見渡す」という視覚的なイメージが「先を見越して推測する」という意味につながった。\n\n16世紀の英語に入り「（証拠なしに）推測する・思索する」という哲学的な意味と、「将来の利益を見越して投機する」という金融的な意味の両方で使われる。\n\nspeculation（投機・推測）、speculative（投機的な・思弁的な）という派生語も重要で、speculative fiction（思弁的フィクション＝SFや fantasy の総称）のような文学批評語としても使われる。",
      derivatives: [
        { word: "speculation",    desc: "推測・思弁・投機（名詞）" },
        { word: "speculative",    desc: "推測的な・投機的な・思弁的な（形容詞）" },
        { word: "speculator",     desc: "投機家・相場師" }
      ],
      family: [
        { word: "specific",      desc: "特定の（species + facere）" },
        { word: "species",       desc: "種（specere）" },
        { word: "spectacle",     desc: "壮観・見世物（spectaculum）" },
        { word: "inspect",       desc: "調査する（in- + specere）" }
      ],
      compounds: [
        { phrase: "mere speculation",      desc: "単なる憶測・根拠のない推測" },
        { phrase: "speculative investment", desc: "投機的投資" }
      ]
    },

    "spectacle": {
      origin: "ラテン語 spectaculum（見世物・見るべきもの）< spectare（じっくり見る）< specere（見る）。「多くの人が集まって見る」という共同観賞のイメージが語源にある。\n\n15世紀に英語に入り「壮大な見世物・印象的な光景・眼鏡（spectacles）」という意味で使われる。複数形 spectacles は眼鏡を指す格式ある表現（日常語は glasses）。\n\nmake a spectacle of oneself（みっともない姿をさらす＝見世物になる）は重要なイディオム。spectacular（壮観な・印象的な）という形容詞も頻用される。",
      derivatives: [
        { word: "spectacular",    desc: "壮観な・目を見張る（形容詞）" },
        { word: "spectator",      desc: "観客・見物人（spectare + -or）" },
        { word: "spectacles",     desc: "眼鏡（複数形で「見る道具」）" }
      ],
      family: [
        { word: "specific",      desc: "特定の（species + facere）" },
        { word: "speculate",     desc: "推測する（specula）" },
        { word: "inspect",       desc: "調査する（in- + specere）" },
        { word: "respect",       desc: "尊重・尊敬（re- + specere）" }
      ],
      compounds: [
        { phrase: "make a spectacle",     desc: "見世物になる・みっともない姿をさらす" },
        { phrase: "spectacular view",     desc: "壮観な眺め" }
      ]
    },

    // ── spirare系（息をする・精神）──
    "spirit": {
      origin: "ラテン語 spiritus（息・呼吸・魂・精神）< spirare（息をする・吹く）。「息」が「生命の源・魂」とみなされた古代の観念に由来し、聖書のラテン語訳（Vulgate）で Spiritus Sanctus（聖霊）として使われたことで宗教的な含意が深まった。\n\n13世紀の英語に入り「精神・魂・元気・気分」という意味の名詞として定着。team spirit（チームの士気）、spirit of the law（法の精神）、in good spirits（元気な状態で）のように、内面的な活力・意志を表す多義語として英語に深く根付いている。\n\n蒸留酒（spirits）もこの語から来ており、「アルコールの精気」という比喩的な意味でウイスキー・ウォッカなどの総称に使われる。",
      derivatives: [
        { word: "spiritual",    desc: "精神的な・霊的な（形容詞）" },
        { word: "spiritually",  desc: "精神的に・霊的に（副詞）" },
        { word: "spirited",     desc: "元気な・活発な（形容詞）" }
      ],
      family: [
        { word: "inspire",      desc: "鼓舞する・インスピレーションを与える（in- + spirare）" },
        { word: "aspire",       desc: "切望する・目指す（ad- + spirare）" },
        { word: "expire",       desc: "期限が切れる・息を引き取る（ex- + spirare）" },
        { word: "conspire",     desc: "共謀する（con- 共に + spirare）" }
      ],
      compounds: [
        { phrase: "team spirit",      desc: "チームスピリット・連帯感" },
        { phrase: "spirit of the law", desc: "法の精神（字義通りではなく意図）" }
      ]
    },

    "inspire": {
      origin: "ラテン語 inspirare（息を吹き込む）< in-（中に）+ spirare（息をする）。「神が人の内部に息を吹き込んで創造する・活力を与える」という創世記の概念が語源で、聖書的な「神の啓示・神がかった創造力」を指した。\n\n14世紀の英語に入り「（人・作品が）創造力・意欲を刺激する・感化する」という動詞として定着。inspire someone to do（〜する気を起こさせる）、feel inspired（インスパイアされた）のように使われる。\n\ninspiration（インスピレーション）は「突然の閃き・霊感」を指し、芸術・発明・ビジネスにおける創造のプロセスを語る際の核心語。",
      derivatives: [
        { word: "inspiration",   desc: "霊感・インスピレーション・名案（名詞）" },
        { word: "inspiring",     desc: "感動的な・やる気を起こさせる（形容詞）" },
        { word: "inspirational", desc: "感化を与える・インスピレーショナルな" }
      ],
      family: [
        { word: "spirit",        desc: "精神・魂・元気（spiritus）" },
        { word: "aspire",        desc: "切望する（ad- + spirare）" },
        { word: "expire",        desc: "期限が切れる（ex- + spirare）" },
        { word: "perspire",      desc: "汗をかく（per- + spirare）" }
      ],
      compounds: [
        { phrase: "inspire confidence",  desc: "信頼感を与える" },
        { phrase: "a source of inspiration", desc: "インスピレーションの源" }
      ]
    },

    "aspire": {
      origin: "ラテン語 aspirare（息を向ける・熱望する）< ad-（〜へ向けて）+ spirare（息をする）。「ある目標に向けて息を送る＝心を向ける＝熱望する」というのが語源的なイメージ。\n\n15世紀の英語に入り「（高い目標を）切望する・志す」という動詞として定着。aspire to be（〜になりたい）、aspire to greatness（偉大さを目指す）のように使われる。\n\nascent（上昇中の）と同じ語根を持ち、「aspirant（志願者）」という名詞も派生する。aspiration（大志・志望・熱望）は個人の目標・夢を語る際の重要語で、career aspirations（キャリアの志望）のような形でよく使われる。",
      derivatives: [
        { word: "aspiration",   desc: "大志・志望・熱望・夢（名詞）" },
        { word: "aspirational", desc: "高い目標を持つ・向上心のある（形容詞）" },
        { word: "aspirant",     desc: "志願者・志望者（名詞）" }
      ],
      family: [
        { word: "spirit",       desc: "精神・魂（spiritus）" },
        { word: "inspire",      desc: "鼓舞する（in- + spirare）" },
        { word: "expire",       desc: "期限が切れる（ex- + spirare）" },
        { word: "conspire",     desc: "共謀する（con- + spirare）" }
      ],
      compounds: [
        { phrase: "aspire to be",       desc: "〜になりたいと切望する" },
        { phrase: "career aspirations", desc: "キャリアへの抱負・志望" }
      ]
    },

    "expire": {
      origin: "ラテン語 expirare（息を吐き出す・死ぬ）< ex-（外へ）+ spirare（息をする）。「最後の息を吐き出す＝息が絶える＝死ぬ・終わる」というのが語源的な意味。\n\n15世紀の英語に入り「（1）命が尽きる・息を引き取る（格式）」と「（2）有効期限が切れる」という二義で使われる。日常の場面では契約・保険・パスポート・クーポンなどの「期限切れ」を表す語として非常に高頻度。\n\nexpiry（期限・満了）は英国英語で、expiration は主に米国英語で使われる。expiration date / best-before date（賞味期限）は食品ラベルの基本英語表現。",
      derivatives: [
        { word: "expiry",        desc: "期限・満了（英国英語の名詞形）" },
        { word: "expiration",    desc: "期限切れ・満了（米国英語の名詞形）" }
      ],
      family: [
        { word: "spirit",        desc: "精神・魂（spiritus）" },
        { word: "inspire",       desc: "鼓舞する（in- + spirare）" },
        { word: "aspire",        desc: "切望する（ad- + spirare）" },
        { word: "respire",       desc: "呼吸する（re- + spirare）" }
      ],
      compounds: [
        { phrase: "expiration date", desc: "有効期限・賞味期限" },
        { phrase: "expire at midnight", desc: "真夜中に期限が切れる" }
      ]
    },

    "conspire": {
      origin: "ラテン語 conspirare（共に息をする・共謀する）< con-（共に）+ spirare（息をする）。「同じ息をする仲間＝秘密を共有する仲間＝共謀する」というのが語源的な意味の発展。\n\n14世紀の英語に入り「不正な目的のために密かに共謀する・陰謀を企てる」という動詞として定着。conspire against（〜に対して陰謀を企てる）、conspiracy theory（陰謀論）は重要な関連表現。\n\ncompare と似た語根だが意味が異なることに注意。"Everything seemed to conspire against us."（すべてが私たちに不利に働いているようだった）のように、意図を持たない「状況が不利に重なる」という比喩にも使われる。",
      derivatives: [
        { word: "conspiracy",    desc: "陰謀・共謀・謀略（名詞）" },
        { word: "conspirator",   desc: "共謀者・陰謀の参加者" },
        { word: "conspiratorial", desc: "陰謀的な・共謀の（形容詞）" }
      ],
      family: [
        { word: "spirit",       desc: "精神・魂（spiritus）" },
        { word: "inspire",      desc: "鼓舞する（in- + spirare）" },
        { word: "aspire",       desc: "切望する（ad- + spirare）" }
      ],
      compounds: [
        { phrase: "conspiracy theory",  desc: "陰謀論" },
        { phrase: "conspire against",   desc: "〜に対して陰謀を企てる" }
      ]
    },

    // ── fort / forc系（強い）──
    "force": {
      origin: "ラテン語 fortis（強い）の俗ラテン語派生形 fortia を経てフランス語 force となり、13世紀に英語に入った。インド・ヨーロッパ語根 *bhergh-（高い・強い）とも遠縁にある。\n\n「物理的な力・暴力・強制力」から「軍隊・警察などの組織的な力」まで幅広く使われる。動詞では「強制する・力ずくで行う」を意味し、force someone to do（〜することを強制する）が基本構文。\n\n物理学では force（力）はニュートンの運動法則の基本概念で、F = ma という式に表される。the Force（スター・ウォーズの「フォース」）のような大衆文化での用法も有名。",
      derivatives: [
        { word: "forceful",     desc: "力強い・説得力のある（形容詞）" },
        { word: "forcibly",     desc: "力ずくで・強制的に（副詞）" },
        { word: "enforce",      desc: "施行する・強制する（en- + force）" }
      ],
      family: [
        { word: "effort",       desc: "努力（ex- + fort 力を外に出す）" },
        { word: "comfort",      desc: "慰める・快適（con- + fortis）" },
        { word: "reinforce",    desc: "強化する（re- + en- + force）" },
        { word: "fortify",      desc: "要塞化する・強化する（fortis）" }
      ],
      compounds: [
        { phrase: "by force",        desc: "力ずくで・強制的に" },
        { phrase: "task force",      desc: "タスクフォース・特別作業部隊" }
      ]
    },

    "effort": {
      origin: "古フランス語 esfort < es-（ex- 外へ）+ fort（強い）< ラテン語 fortis（強い）。「力を外に出す＝力を使う＝努力する」というのが語源的な意味。\n\n14世紀に英語に入り「努力・尽力・骨折り」という名詞として定着。make an effort（努力する）、put in effort（努力を注ぐ）は基本表現。\n\nfail、achieve などの動詞と組み合わせて使われることが多く、without effort（難なく）、effortless（無理のない・楽々とした）という形容詞も日常語として重要。",
      derivatives: [
        { word: "effortless",   desc: "難なくできる・楽々とした（形容詞）" },
        { word: "effortlessly", desc: "楽々と・難なく（副詞）" }
      ],
      family: [
        { word: "force",        desc: "力・強制する（fortis）" },
        { word: "comfort",      desc: "慰め・快適（con- + fortis）" },
        { word: "enforce",      desc: "施行する（en- + force）" },
        { word: "fortify",      desc: "強化する・要塞化する（fortis）" }
      ],
      compounds: [
        { phrase: "make an effort",     desc: "努力する" },
        { phrase: "collective effort",  desc: "集団的な努力・協力" }
      ]
    },

    "comfort": {
      origin: "ラテン語 confortare（大いに力を与える）< con-（強調）+ fortis（強い）。「力を与えて元気づける」というのが語源的な意味で、中世では「援軍を送る・励ます」という軍事的・積極的な意味だった。\n\n13世紀に英語に入り「慰める・元気づける・快適にする」という動詞と「慰め・快適さ」という名詞として定着。現代では「精神的な安らぎ・物理的な快適さ」という両方の意味で使われ、comfort food（ほっとする食べ物）、comfort zone（居心地のよい範囲）などの複合語も定着している。\n\ncomfort zone を出る（go outside one's comfort zone）という表現は、成長・挑戦のメタファーとして英語のビジネス・自己啓発書に頻出する。",
      derivatives: [
        { word: "comfortable",    desc: "快適な・心地よい（形容詞）" },
        { word: "comfortably",    desc: "快適に・楽に（副詞）" },
        { word: "uncomfortable",  desc: "不快な・落ち着かない（un- + comfortable）" }
      ],
      family: [
        { word: "force",          desc: "力・強制（fortis）" },
        { word: "effort",         desc: "努力（ex- + fort）" },
        { word: "enforce",        desc: "施行する（en- + force）" }
      ],
      compounds: [
        { phrase: "comfort zone",   desc: "コンフォートゾーン・居心地のよい範囲" },
        { phrase: "comfort food",   desc: "ほっとする食べ物・お袋の味" }
      ]
    },

    "enforce": {
      origin: "中英語 enforcen < 古フランス語 enforcier（力を与える・施行する）< en-（〜にする）+ force（力）< ラテン語 fortis（強い）。「法律や規則に力を与えて実効性を持たせる」というのが語源的な意味。\n\n14世紀に英語に入り「（法律・規則を）施行する・遵守させる・強制する」という動詞として定着。enforce the law（法律を施行する）、enforce a policy（方針を実施する）のように使われる。\n\nenforcement（施行・取締り）は法律・行政の文脈で基本語であり、law enforcement（法執行・取締り）、law enforcement officer（警察官）は英語の法律語彙の核心をなす。",
      derivatives: [
        { word: "enforcement",    desc: "施行・取締り・強制（名詞）" },
        { word: "enforceable",    desc: "施行可能な・法的に拘束力のある（形容詞）" }
      ],
      family: [
        { word: "force",          desc: "力・強制（fortis）" },
        { word: "effort",         desc: "努力（ex- + fort）" },
        { word: "comfort",        desc: "慰める（con- + fortis）" },
        { word: "reinforce",      desc: "強化する（re- + enforce）" }
      ],
      compounds: [
        { phrase: "law enforcement",     desc: "法執行・取締り" },
        { phrase: "enforce a contract",  desc: "契約を執行する" }
      ]
    },

    // ── man / manu系（手）──
    "manual": {
      origin: "ラテン語 manualis（手に関する）< manus（手）。manus は印欧語根 *man-（手）に由来し、英語の manage（元来は「馬を手で扱う」）、manuscript（手で書いたもの）とも同根。\n\n15世紀に英語に入り「手で行う・手動の（形容詞）」と「手引書・取扱説明書（名詞）」という二つの意味で使われる。manual labor（手仕事・肉体労働）、manual transmission（マニュアル・シフト）のように「機械でなく人の手による」という意味が基本。\n\n名詞の manual は「機器の使い方を詳しく説明した冊子・手引書」で、user manual（取扱説明書）、instruction manual（操作マニュアル）が代表的な用例。",
      derivatives: [
        { word: "manually",      desc: "手動で・手作業で（副詞）" }
      ],
      family: [
        { word: "manage",        desc: "管理する（manus 手で扱う）" },
        { word: "manuscript",    desc: "手稿・原稿（manus + scriptum）" },
        { word: "manipulate",    desc: "操作する・操る（manus + plicare）" },
        { word: "manufacture",   desc: "製造する（manus + facere 作る）" }
      ],
      compounds: [
        { phrase: "user manual",         desc: "取扱説明書・ユーザーマニュアル" },
        { phrase: "manual transmission", desc: "マニュアル変速機・MT車" }
      ]
    },

    "manipulate": {
      origin: "ラテン語 manipulus（一握り・小隊）< manus（手）+ plere（満たす）。「手でつかんで操る」というのが語源的なイメージ。元来は医術で「手技によって骨・関節を扱う」という物理的な意味だった。\n\n19世紀に英語に入り「器用に扱う・操る」という中立的な意味から転じ、現代では「不正な目的のために人・情報・状況を巧みに操る」という否定的なニュアンスが強い。manipulate data（データを改ざんする）、manipulate people（人を操る）のように使われる。\n\n現代のSNS・政治の文脈では information manipulation（情報操作）、market manipulation（市場操作）が重大な社会問題として議論される。",
      derivatives: [
        { word: "manipulation",    desc: "操作・操り・情報操作（名詞）" },
        { word: "manipulative",    desc: "人を操る・狡猾な（形容詞）" },
        { word: "manipulator",     desc: "操作する人・マニピュレーター" }
      ],
      family: [
        { word: "manual",          desc: "手動の・手引書（manus）" },
        { word: "manage",          desc: "管理する（manus）" },
        { word: "manufacture",     desc: "製造する（manus + facere）" },
        { word: "manuscript",      desc: "手稿（manus + scribere）" }
      ],
      compounds: [
        { phrase: "market manipulation",     desc: "市場操作・相場操縦" },
        { phrase: "information manipulation", desc: "情報操作" }
      ]
    },

    "command": {
      origin: "ラテン語 commandare（委託する・命令する）< com-（強調）+ mandare（手に委ねる・命令する）< manus（手）+ dare（与える）。「手に委ねる＝正式に任せる・命じる」というのが語源的な意味。\n\n13世紀に英語に入り「命令する・指揮する」という動詞と「命令・指揮・眺望」という名詞として定着。military command（軍事指揮）、command of a language（言語の掌握）のように使われる。\n\nコンピュータでは command（コマンド＝OSへの命令）、command line（コマンドライン）として基本的な操作概念になっている。",
      derivatives: [
        { word: "commander",    desc: "指揮官・コマンダー（名詞）" },
        { word: "commanding",   desc: "指揮する・圧倒的な（形容詞）" }
      ],
      family: [
        { word: "demand",       desc: "要求する（de- + mandare）" },
        { word: "recommend",    desc: "推薦する（re- + com- + mandare）" },
        { word: "manual",       desc: "手動の（manus）" },
        { word: "manage",       desc: "管理する（manus）" }
      ],
      compounds: [
        { phrase: "command line",          desc: "コマンドライン（CLI）" },
        { phrase: "in command of",         desc: "〜を指揮して・〜を掌握して" }
      ]
    },

    "demand": {
      origin: "ラテン語 demandare（手に委ねて命令する）< de-（完全に）+ mandare（手に委ねる・命令する）< manus（手）。「完全に委ねて要求する」というのが語源的な意味で、「命令する・強く要求する」という意味が英語に引き継がれた。\n\n14世紀に英語に入り「強く要求する（動詞）・要求・需要（名詞）」として定着。経済学では supply and demand（需要と供給）が最重要概念の一つで、市場メカニズムの基礎をなす。\n\n"Demand that..."（〜を要求する）、"in high demand"（引く手あまたで）は日常・ビジネスで頻出の表現。on demand（要求に応じて・オンデマンド）はストリーミング時代の重要フレーズ。",
      derivatives: [
        { word: "demanding",    desc: "要求の多い・骨の折れる（形容詞）" }
      ],
      family: [
        { word: "command",      desc: "命令する（com- + mandare）" },
        { word: "recommend",    desc: "推薦する（re- + commandare）" },
        { word: "mandate",      desc: "命令・権限（mandatum）" }
      ],
      compounds: [
        { phrase: "supply and demand",  desc: "需要と供給" },
        { phrase: "on demand",          desc: "オンデマンドで・要求に応じて" },
        { phrase: "in high demand",     desc: "需要が高い・引く手あまたの" }
      ]
    },

    // ── ped / pod系（足）──
    "pedestrian": {
      origin: "ラテン語 pedester（徒歩の）< pes / pedis（足）。pes は印欧語根 *ped-（足）に由来し、英語の foot とも遠縁にある。フランス語では piéton（歩行者）として定着した。\n\n18世紀に英語に入り「歩行者（名詞）・歩行者の（形容詞）」として定着。比喩的には「平凡な・ありきたりな」という形容詞的意味もあり、"a pedestrian performance"（ありきたりな演技）のように使われる。「歩くだけ＝特別なことのない」という皮肉な意味の転義である。\n\npedestrian crossing（横断歩道）、pedestrian zone（歩行者専用ゾーン）は都市計画・交通の基本語。",
      derivatives: [
        { word: "pedestrianize",  desc: "（道路を）歩行者専用にする（動詞）" }
      ],
      family: [
        { word: "pedal",          desc: "ペダル・足で漕ぐ（pedalis）" },
        { word: "expedition",     desc: "遠征・探検（ex- + pes 足を伸ばす）" },
        { word: "centipede",      desc: "ムカデ（centum 100 + pes）" },
        { word: "podium",         desc: "演台・指揮台（pod- 足 + -ium）" }
      ],
      compounds: [
        { phrase: "pedestrian crossing", desc: "横断歩道" },
        { phrase: "pedestrian zone",     desc: "歩行者専用ゾーン" }
      ]
    },

    "expedition": {
      origin: "ラテン語 expeditio（出動・遠征）< expedire（足の枷を外す・解放する・準備する）< ex-（外へ）+ pes / pedis（足）。「足の枷を外して進み出る＝行動のために準備する＝遠征に出る」というのが語源の意味の発展。\n\n15世紀に英語に入り「地理的探索・科学調査・軍事遠征のための組織的な旅」を指す名詞として定着。エベレスト登頂（1953年）、南極探検（アーネスト・シャクルトンら）は英語文化で代表的な expedition として語られる。\n\nexpeditious（迅速な）、expedite（促進する）という派生語も「足早に＝すばやく」という語源イメージから来ている。",
      derivatives: [
        { word: "expedite",       desc: "促進する・迅速に処理する" },
        { word: "expeditious",    desc: "迅速な・手際のよい（形容詞）" }
      ],
      family: [
        { word: "pedestrian",     desc: "歩行者（pedester）" },
        { word: "pedal",          desc: "ペダル（pedalis）" },
        { word: "podium",         desc: "演台（pod- 足）" },
        { word: "impediment",     desc: "障害（im- + pes 足を引っかける）" }
      ],
      compounds: [
        { phrase: "scientific expedition",  desc: "科学調査隊・学術探検" },
        { phrase: "polar expedition",       desc: "極地探検" }
      ]
    },

    // ── civ系（市民・都市）──
    "civil": {
      origin: "ラテン語 civilis（市民の・公共の）< civis（市民）< civitas（都市国家）。古代ローマで市民権（citizenship）と市民社会（civil society）を表す核心語として使われた。\n\n14世紀に英語に入り「（1）市民の・一般人の（軍・宗教と対比して）（2）礼儀正しい・丁寧な」という二方向の意味で定着。civil war（内戦）、civil rights（公民権）、civil engineering（土木工学）のように国家・社会の制度語として広く使われる。\n\ncivil rights movement（公民権運動）はマーティン・ルーサー・キング牧師が主導し、1964年の公民権法（Civil Rights Act）成立につながった米国の歴史的運動で、英語社会において最も重要な政治的語彙の一つとなっている。",
      derivatives: [
        { word: "civilian",      desc: "一般市民・文民（形容詞・名詞）" },
        { word: "civility",      desc: "礼儀正しさ・礼節（名詞）" },
        { word: "civilization",  desc: "文明（civilis + -ization）" }
      ],
      family: [
        { word: "civic",         desc: "市民の・公民の（civicus）" },
        { word: "city",          desc: "都市（civitas の変形）" },
        { word: "citizen",       desc: "市民（civis + -zen）" }
      ],
      compounds: [
        { phrase: "civil rights",        desc: "公民権" },
        { phrase: "civil war",           desc: "内戦・市民戦争" },
        { phrase: "civil engineering",   desc: "土木工学" }
      ]
    },

    "civilization": {
      origin: "ラテン語 civilis（市民の）→ フランス語 civilisation → 英語 civilization。語根は civis（市民）< civitas（都市国家）。18世紀の啓蒙主義時代に「野蛮状態から人類が発展した状態・洗練された社会」という概念語として確立した。\n\nスコットランドの哲学者アダム・ファーガソン（1767年）などが civilization を「制度・法律・礼節を持つ社会の状態」として理論化し、「文明vs野蛮」という対立軸が植民地主義的な世界観の正当化にも使われた歴史がある。\n\n現代では「長期にわたって発展した独自の文化・社会・技術を持つ集団」を指し、Western civilization（西洋文明）、ancient civilization（古代文明）のように使われる。",
      derivatives: [
        { word: "civilize",      desc: "文明化する・教化する（動詞）" },
        { word: "civilized",     desc: "文明化された・礼節のある（形容詞）" }
      ],
      family: [
        { word: "civil",         desc: "市民の（civilis）" },
        { word: "civic",         desc: "市民の・公民の（civicus）" },
        { word: "citizen",       desc: "市民（civis）" },
        { word: "city",          desc: "都市（civitas）" }
      ],
      compounds: [
        { phrase: "ancient civilization",  desc: "古代文明" },
        { phrase: "clash of civilizations", desc: "文明の衝突（ハンチントン理論）" }
      ]
    },

    // ── cultur / cult系（耕す）──
    "culture": {
      origin: "ラテン語 cultura（耕作・世話）< colere（耕す・世話をする・崇拝する）の名詞形。「土地を耕す→精神・知識を耕す→人間の精神的・社会的洗練」という比喩的転義が起きた。キケロが「哲学は魂の耕作（cultura animi）だ」と表現したことで、この比喩が定着した。\n\n15世紀の英語に入り当初は「農業・耕作」を指したが、やがて「特定の集団が共有する価値観・慣習・芸術・制度の総体」を表す社会科学の核心語になった。culture shock（カルチャーショック）、corporate culture（企業文化）のように現代語彙に浸透している。\n\n語根 col- / cult- は cultivate（耕作する・育成する）、agriculture（農業）、colony（植民地 ＝ 耕作地）なども形成する。",
      derivatives: [
        { word: "cultural",      desc: "文化的な（形容詞）" },
        { word: "culturally",    desc: "文化的に（副詞）" },
        { word: "multicultural", desc: "多文化の（multi- + cultural）" }
      ],
      family: [
        { word: "cultivate",     desc: "耕す・育成する（cultura）" },
        { word: "agriculture",   desc: "農業（ager 畑 + cultura）" },
        { word: "colony",        desc: "植民地（colonia < colere）" },
        { word: "cult",          desc: "崇拝・信仰的集団（cultus）" }
      ],
      compounds: [
        { phrase: "pop culture",       desc: "大衆文化・ポップカルチャー" },
        { phrase: "culture shock",     desc: "カルチャーショック" },
        { phrase: "corporate culture", desc: "企業文化・組織文化" }
      ]
    },

    "cultivate": {
      origin: "ラテン語 cultivare（耕す）< cultus（耕された）< colere（耕す）。農業的な「土を耕す」という語義から、「才能・関係性・スキルを育てる」という比喩的意味が発展した。\n\n17世紀に英語に入り「（1）農地を耕す・植物を育てる（2）才能・技術・関係を育てる・磨く」という動詞として定着。cultivate a skill（スキルを磨く）、cultivate a relationship（関係を育てる）のように比喩的用法が頻出する。\n\ncultivated（教養のある・洗練された）という形容詞は「精神的に耕された＝知性的・礼節のある」という意味で、a cultivated person（教養人）のように使われる。",
      derivatives: [
        { word: "cultivation",    desc: "耕作・栽培・育成（名詞）" },
        { word: "cultivated",     desc: "教養のある・洗練された（形容詞）" }
      ],
      family: [
        { word: "culture",        desc: "文化・耕作（cultura）" },
        { word: "agriculture",    desc: "農業（ager + cultura）" },
        { word: "colony",         desc: "植民地（colonia）" }
      ],
      compounds: [
        { phrase: "cultivate a skill",        desc: "スキルを磨く・培う" },
        { phrase: "cultivate a relationship", desc: "関係を育てる・築く" }
      ]
    },

    "agriculture": {
      origin: "ラテン語 agricultura（農業）< ager / agri（畑・土地）+ cultura（耕作）< colere（耕す）。「土地（ager）を耕す（cultura）こと＝農業」という語源通りの合成語。ager は英語の acre（エーカー、土地の面積単位）と同語根。\n\n17世紀に英語に定着し「食料生産のための土地・植物・動物の体系的管理」を指す。人類史上最大の転換点の一つである「農業革命（Agricultural Revolution, 約1万年前）」は狩猟採集から定住農耕への移行を指し、現代文明の基盤を作った。\n\n18世紀の産業革命期に起きた第二の農業革命（機械化・輪作の導入）、20世紀の緑の革命（改良品種・化学肥料の普及）を経て、現代では sustainable agriculture（持続可能な農業）が重要課題になっている。",
      derivatives: [
        { word: "agricultural",    desc: "農業の・農業に関する（形容詞）" },
        { word: "agriculturalist", desc: "農業従事者・農学者" }
      ],
      family: [
        { word: "culture",         desc: "文化・耕作（cultura）" },
        { word: "cultivate",       desc: "耕す・育てる（cultivare）" },
        { word: "acre",            desc: "エーカー（ager 土地 と同根）" }
      ],
      compounds: [
        { phrase: "agricultural revolution", desc: "農業革命" },
        { phrase: "sustainable agriculture", desc: "持続可能な農業" }
      ]
    },

    // ── quaer / quest系（求める・聞く）──
    "question": {
      origin: "ラテン語 quaestio（問い・調査）< quaerere（求める・調査する）。quaerere は印欧語根 *kwes-（求める）に由来し、「答えを求める行為」が「問い」という名詞になった。\n\n13世紀のフランス語経由で英語に入り「疑問・質問・問題・議題」という多義名詞として定着。疑問文（question sentence）、質問する（ask a question）という用法から、「問題に疑念を抱く（call something into question）」という高度な用法まで幅広い。\n\n動詞 question は「〜に疑問を呈する・〜を尋問する」を意味し、question authority（権威に疑問を呈する）は批判的思考の姿勢を表す重要フレーズ。",
      derivatives: [
        { word: "questionable",   desc: "疑わしい・問題のある（形容詞）" },
        { word: "questionnaire",  desc: "アンケート・質問票（名詞）" },
        { word: "unquestionable", desc: "疑いの余地のない（形容詞）" }
      ],
      family: [
        { word: "quest",          desc: "探求・探索（quaerere）" },
        { word: "request",        desc: "要請する（re- + quaerere）" },
        { word: "require",        desc: "必要とする（re- + quaerere）" },
        { word: "inquire",        desc: "調査する・尋ねる（in- + quaerere）" }
      ],
      compounds: [
        { phrase: "call into question",  desc: "〜に疑問を呈する" },
        { phrase: "question authority",  desc: "権威に疑問を持つ・批判的に考える" }
      ]
    },

    "quest": {
      origin: "ラテン語 quaesta（求められたもの）< quaerere（求める）の女性過去分詞。中世の騎士物語（chivalric romance）で「聖杯探索（Quest for the Holy Grail）」のように、困難な目的を持った長い旅・探索を指す語として文学的に定着した。\n\n13世紀のフランス語経由で英語に入り、当初は主に文学・騎士物語の文脈で使われたが、現代では「目標に向かった積極的な探求・追求」という意味で使われる。in quest of（〜を探し求めて）は格式ある表現。\n\nモダンな文脈では RPG（ロールプレイングゲーム）のクエスト（特定の目標を持つ任務）として定着し、若い世代に馴染み深い語になっている。",
      derivatives: [
        { word: "quest for",     desc: "〜を探し求める（動詞的用法）" }
      ],
      family: [
        { word: "question",      desc: "質問・疑問（quaestio）" },
        { word: "request",       desc: "要請する（re- + quaerere）" },
        { word: "require",       desc: "必要とする（re- + quaerere）" },
        { word: "inquest",       desc: "死因調査・検死（in- + quaesta）" }
      ],
      compounds: [
        { phrase: "in quest of",       desc: "〜を探し求めて" },
        { phrase: "the quest for",     desc: "〜の探求・〜を追い求めること" }
      ]
    },

    "require": {
      origin: "ラテン語 requirere（再び求める・調査する）< re-（再び）+ quaerere（求める）。「再び求める＝まだ足りないから要求し続ける」というのが語源的なニュアンス。\n\n14世紀の英語に入り「〜を必要とする・〜を要求する・〜を義務づける」という動詞として定着。require a password（パスワードを要求する）、require attention（注意が必要）のように幅広く使われる。\n\nrequirement（要件・必要条件）は IT・ビジネスで非常に重要な概念語で、プロジェクトの requirements gathering（要件定義）はシステム開発の基礎プロセスとして位置づけられる。",
      derivatives: [
        { word: "requirement",    desc: "要件・必要条件・要求事項（名詞）" },
        { word: "required",       desc: "必須の・義務づけられた（形容詞）" }
      ],
      family: [
        { word: "question",       desc: "質問・問題（quaestio）" },
        { word: "quest",          desc: "探求（quaesta）" },
        { word: "request",        desc: "要請する（re- + quaerere）" },
        { word: "inquire",        desc: "調査する（in- + quaerere）" }
      ],
      compounds: [
        { phrase: "as required",     desc: "必要に応じて・要求通りに" },
        { phrase: "requirements gathering", desc: "要件定義（システム開発）" }
      ]
    },

    "inquire": {
      origin: "ラテン語 inquirere（中に入って調べる）< in-（中に）+ quaerere（求める・調査する）。「詳しく内部まで調べる＝調査する・問い合わせる」というのが語源的な意味。\n\n14世紀の英語に入り「（正式に）調査する・尋ねる・問い合わせる」という動詞として定着。格式ある語であり、investigate よりやや形式的な調査、ask より丁寧な問い合わせを指す。\n\ninquiry（調査・問い合わせ）という名詞が重要で、public inquiry（公的調査）、inquiry letter（問い合わせのメール）のように使われる。スペルは enquire / enquiry（英国英語）と inquire / inquiry（米国英語）の両形がある。",
      derivatives: [
        { word: "inquiry",       desc: "調査・問い合わせ・尋問（名詞）" },
        { word: "inquisitive",   desc: "探求心旺盛な・好奇心の強い（形容詞）" },
        { word: "inquisition",   desc: "尋問・異端審問（歴史的用語）" }
      ],
      family: [
        { word: "question",      desc: "質問（quaestio）" },
        { word: "quest",         desc: "探求（quaesta）" },
        { word: "require",       desc: "必要とする（re- + quaerere）" },
        { word: "request",       desc: "要請する（re- + quaerere）" }
      ],
      compounds: [
        { phrase: "inquire about",    desc: "〜について問い合わせる" },
        { phrase: "public inquiry",   desc: "公的調査・公聴会" }
      ]
    },

    // ── labor系（働く）──
    "labor": {
      origin: "ラテン語 labor（労働・苦労・苦難）< laborare（働く・苦労する）。印欧語根 *lab-（ぐらつく・疲れる）に由来し、労働の「辛さ・苦労」が原義にある。\n\n14世紀に英語に入り「（1）肉体的・精神的な労働・骨折り（2）出産時の陣痛（labor pains）・分娩（3）労働者階級・労働運動」という多義名詞として定着。Labor Day（米国・カナダの労働者の日）は毎年9月第1月曜日。\n\n経済学では labor force（労働力人口）、division of labor（分業）が基礎概念として重要。スペルは英国英語では labour（u あり）。",
      derivatives: [
        { word: "laborious",    desc: "骨の折れる・根気のいる（形容詞）" },
        { word: "laborer",      desc: "肉体労働者・工夫（名詞）" }
      ],
      family: [
        { word: "elaborate",    desc: "詳しく説明する・精巧な（e- + labor）" },
        { word: "collaborate",  desc: "協力する（col- + labor）" },
        { word: "laboratory",   desc: "実験室・研究所（laboratorium）" }
      ],
      compounds: [
        { phrase: "labor force",      desc: "労働力人口・労働者集団" },
        { phrase: "division of labor", desc: "分業" }
      ]
    },

    "collaborate": {
      origin: "ラテン語 collaborare（共に働く）< col-（con- の変形、共に）+ laborare（働く）。「目標に向けて共に骨を折る」というのが語源的な意味。\n\n19世紀に英語に定着し「共同作業する・協力する」という動詞として使われる。特に創造的・知的な仕事での協力を指すことが多く、科学研究、芸術制作、ビジネスプロジェクトでよく使われる。\n\n戦時中には「占領軍に協力する・売国行為をする」という否定的な意味（collaborator = 売国奴）でも使われたが、平時には「共同制作者・コラボレーター」という肯定的な意味が基本。",
      derivatives: [
        { word: "collaboration",   desc: "協力・共同作業・コラボ（名詞）" },
        { word: "collaborative",   desc: "協力的な・共同の（形容詞）" },
        { word: "collaborator",    desc: "共同制作者・協力者" }
      ],
      family: [
        { word: "labor",           desc: "労働（labor）" },
        { word: "elaborate",       desc: "精巧な・詳しく説明する（e- + labor）" },
        { word: "laboratory",      desc: "実験室（laboratorium）" }
      ],
      compounds: [
        { phrase: "collaborate with",    desc: "〜と協力する・〜とコラボする" },
        { phrase: "collaborative effort", desc: "協力的な取り組み・共同作業" }
      ]
    },

    "elaborate": {
      origin: "ラテン語 elaborare（骨を折って仕上げる）< e-（出て・完全に）+ laborare（働く）。「完全に手を尽くして仕上げた」というのが形容詞の語源で、「丁寧に詳述する」という動詞はそこから派生した。\n\n16世紀に英語に入り「（1）精巧な・詳細な（形容詞）（2）詳しく説明する・精緻化する（動詞）」という二つの用法で使われる。elaborate plan（詳細な計画）、please elaborate（もう少し詳しく話してください）のように、formal なコミュニケーションで重要な語。\n\nプレゼンテーション・議論で "Could you elaborate on that?"（もう少し詳しく説明してもらえますか？）は非常によく使われる質問表現。",
      derivatives: [
        { word: "elaborately",    desc: "精巧に・詳細に（副詞）" },
        { word: "elaboration",    desc: "詳述・精緻化（名詞）" }
      ],
      family: [
        { word: "labor",          desc: "労働（laborare）" },
        { word: "collaborate",    desc: "協力する（col- + laborare）" },
        { word: "laboratory",     desc: "実験室（laboratorium）" }
      ],
      compounds: [
        { phrase: "elaborate on",      desc: "〜について詳しく述べる" },
        { phrase: "elaborate design",  desc: "精巧なデザイン" }
      ]
    },

    // ── art系（技術・作る）──
    "artificial": {
      origin: "ラテン語 artificialis（技術によって作られた）< artificium（技術・工芸）< ars / artis（技術・芸術）+ facere（作る）。「技術で作られた＝自然でない」というのが語源的な意味で、自然（natural）と対置して使われることが多い。\n\n15世紀に英語に入り「人工の・作りものの・不自然な」という形容詞として定着。artificial light（人工照明）、artificial flavoring（人工香料）のように使われる。\n\nAI（Artificial Intelligence, 人工知能）の「Artificial」まさにこの語であり、20〜21世紀の技術を代表するキーワードになっている。artificial は「本物ではない」という含意があるため、文脈によってはやや否定的なニュアンスを持つ。",
      derivatives: [
        { word: "artificially",   desc: "人工的に・不自然に（副詞）" },
        { word: "artificiality",  desc: "人工性・不自然さ（名詞）" }
      ],
      family: [
        { word: "artifact",       desc: "工芸品・人工物（ars + factum）" },
        { word: "artisan",        desc: "職人・工芸家（artifex から）" },
        { word: "art",            desc: "芸術・技術（ars）" },
        { word: "fact",           desc: "事実（factum 行われたこと）" }
      ],
      compounds: [
        { phrase: "artificial intelligence",  desc: "人工知能（AI）" },
        { phrase: "artificial flavoring",     desc: "人工香料・合成香料" }
      ]
    },

    "artifact": {
      origin: "ラテン語 arte factum（技術によって作られたもの）< ars / artis（技術）+ facere（作る）の過去分詞 factum。「人間の技術によって意図的に製作された物」というのが語源的な意味。\n\n19世紀に英語で考古学・文化人類学の用語として定着し「（特定の文化や時代の）人工遺物・工芸品・文化財」を指す。ancient artifacts（古代の遺物）、cultural artifact（文化的な人工物）のように使われる。\n\nIT・科学の文脈では「処理の副産物・意図しない産物」という意味でも使われ、image artifact（画像ノイズ）、build artifact（ビルド成果物）のように使われる。",
      derivatives: [
        { word: "artifactual",   desc: "人工物の・工芸品の（形容詞・学術語）" }
      ],
      family: [
        { word: "artificial",    desc: "人工の（ars + facere）" },
        { word: "artisan",       desc: "職人・工芸家（artifex）" },
        { word: "fact",          desc: "事実・出来事（factum）" },
        { word: "manufacture",   desc: "製造する（manus + facere）" }
      ],
      compounds: [
        { phrase: "cultural artifact",  desc: "文化的人工物・文化財" },
        { phrase: "ancient artifact",   desc: "古代の遺物・出土品" }
      ]
    },

    // ── clam / claim系（叫ぶ・宣言する）──
    "claim": {
      origin: "ラテン語 clamare（大声で叫ぶ・宣言する）< clamor（叫び声）。「大声で言うことで権利を主張する」というのが語源のイメージ。\n\n13世紀のフランス語 clamer を経て英語に入り「（1）権利・所有を主張する（2）〜だと断言する（3）保険金・補償を請求する」という動詞と「主張・請求権」という名詞として広く使われる。\n\nclaim responsibility（責任を認める）、insurance claim（保険請求）、baggage claim（手荷物受け取り所）のように文脈によって意味が大きく変わる多義語。",
      derivatives: [
        { word: "claimant",     desc: "請求者・権利を主張する人" },
        { word: "disclaimer",   desc: "免責事項・責任否認（dis- + claim）" }
      ],
      family: [
        { word: "exclaim",      desc: "叫ぶ（ex- 外へ + clamare）" },
        { word: "proclaim",     desc: "宣言する（pro- 前に + clamare）" },
        { word: "reclaim",      desc: "取り戻す・再生する（re- + clamare）" },
        { word: "acclaim",      desc: "称賛する（ac- + clamare）" }
      ],
      compounds: [
        { phrase: "baggage claim",        desc: "手荷物受け取り所" },
        { phrase: "insurance claim",      desc: "保険金請求" },
        { phrase: "claim responsibility", desc: "責任を認める・犯行声明を出す" }
      ]
    },

    "exclaim": {
      origin: "ラテン語 exclamare（外に向かって叫ぶ）< ex-（外へ）+ clamare（叫ぶ）。感情が内から外に向けて爆発するように叫ぶ、という語源的なイメージ。\n\n16世紀に英語に入り「（驚き・感情に突き動かされて）叫ぶ・声を上げる」という動詞として定着。文学・小説では感情の爆発を表現する動詞として用いられる。"Wonderful!"  she exclaimed.（「素晴らしい！」と彼女は叫んだ）のように使われる。\n\nexclamation（感嘆・叫び声）、exclamation mark「!」（感嘆符）という派生語も重要で、英語の句読点・記号の基本語彙に含まれる。",
      derivatives: [
        { word: "exclamation",    desc: "感嘆・叫び声（名詞）" },
        { word: "exclamatory",    desc: "感嘆の・叫ぶような（形容詞）" }
      ],
      family: [
        { word: "claim",          desc: "主張する（clamare）" },
        { word: "proclaim",       desc: "宣言する（pro- + clamare）" },
        { word: "acclaim",        desc: "称賛する（ac- + clamare）" },
        { word: "declaim",        desc: "熱弁をふるう（de- + clamare）" }
      ],
      compounds: [
        { phrase: "exclamation mark", desc: "感嘆符（!）" }
      ]
    },

    "proclaim": {
      origin: "ラテン語 proclamare（前に向けて叫ぶ・公に宣言する）< pro-（前に・公に）+ clamare（叫ぶ）。「多くの人に向けて公式に宣言する」というのが語源的な意味で、王や統治者による公式発表を指した。\n\n14世紀に英語に入り「（公式に・大々的に）宣言する・布告する・表明する」という動詞として定着。proclaim independence（独立を宣言する）、proclaim victory（勝利を宣言する）のように使われる。\n\nproclamation（宣言・布告）という名詞も重要で、Lincoln's Emancipation Proclamation（リンカーンの奴隷解放宣言, 1863年）は英語圏の歴史語彙として必須。",
      derivatives: [
        { word: "proclamation",   desc: "宣言・布告・公示（名詞）" }
      ],
      family: [
        { word: "claim",          desc: "主張する（clamare）" },
        { word: "exclaim",        desc: "叫ぶ（ex- + clamare）" },
        { word: "acclaim",        desc: "称賛する（ac- + clamare）" }
      ],
      compounds: [
        { phrase: "proclaim independence", desc: "独立を宣言する" },
        { phrase: "Emancipation Proclamation", desc: "奴隷解放宣言" }
      ]
    },

    // ── fort / fortu系（運命・偶然）──
    "fortune": {
      origin: "ラテン語 Fortuna（幸運の女神）< fors / fortis（偶然・運命）。Fortuna はローマの運命の女神で、回転する車輪（Wheel of Fortune）を持ち、王を玉座に乗せたかと思えば谷底に突き落とすという気まぐれな存在として描かれた。\n\n13世紀に英語に入り「（1）運命・運・幸運・不運（2）財産・大金（lucky fortune ＝ 幸運から得た富）」という二つの主要な意味で使われる。fortune cookie（フォーチュンクッキー）、Fortune 500（米国の大企業ランキング）など現代文化にも深く根付く。\n\n"Fortune favors the bold."（幸運は勇者に微笑む）はラテン語 Fortuna fortibus favet を起源とする格言で、積極的な行動を促す英語の名言として広く知られる。",
      derivatives: [
        { word: "fortunate",    desc: "幸運な・恵まれた（形容詞）" },
        { word: "unfortunately", desc: "残念ながら・不幸にも（副詞）" },
        { word: "misfortune",   desc: "不運・不幸（mis- + fortune）" }
      ],
      family: [
        { word: "opportunity",  desc: "機会（ob- + portus 港、偶然舞い込む）" },
        { word: "force",        desc: "力（fort- とは語源が異なる）" }
      ],
      compounds: [
        { phrase: "small fortune",       desc: "かなりの額のお金" },
        { phrase: "Fortune 500",         desc: "米フォーチュン誌500社ランキング" },
        { phrase: "fortune favors the bold", desc: "幸運は勇者に微笑む" }
      ]
    },

    "opportunity": {
      origin: "ラテン語 opportunitas（都合のよい時・好機）< opportunus（港に向かって吹く風・好都合の）< ob-（向かって）+ portus（港）。「港に向かって吹く追い風＝絶好の機会」というのが語源的なイメージ。\n\n15世紀に英語に入り「好機・チャンス・機会」という名詞として定着。seize an opportunity（チャンスをつかむ）、equal opportunity（平等な機会）、job opportunity（就職の機会）のように使われる。\n\n「機会の平等（equal opportunity）」は現代の法律・企業倫理の中心概念であり、equal opportunity employer（機会均等雇用者）は差別のない採用を示すフレーズとして求人に頻出する。",
      derivatives: [
        { word: "opportune",        desc: "時機を得た・好都合な（形容詞）" },
        { word: "opportunism",      desc: "日和見主義・機会主義（名詞）" },
        { word: "opportunist",      desc: "機会主義者・日和見主義者" }
      ],
      family: [
        { word: "fortune",          desc: "運命・財産（Fortuna）" },
        { word: "import",           desc: "輸入する（portus 港への）" },
        { word: "export",           desc: "輸出する（portus から外へ）" }
      ],
      compounds: [
        { phrase: "seize an opportunity",    desc: "機会をつかむ" },
        { phrase: "equal opportunity",       desc: "機会の平等・均等" },
        { phrase: "window of opportunity",   desc: "チャンスの窓・限られた好機" }
      ]
    },

    // ── grad / gress系（歩む・段階）──
    "grade": {
      origin: "ラテン語 gradus（歩み・段・等級）< gradi（歩む・進む）。「歩みの段階」という語源から「等級・程度・成績・勾配」という多義語として英語に定着した。\n\n16世紀に英語に入り「（1）成績・評点（A〜F のグレード）（2）学年・学級（3）等級・品質ランク（4）勾配・傾斜」という意味で使われる。grade school（小学校）、grade point average（GPA・学業成績平均）は米国教育の基本語。\n\ngrade inflation（成績インフレ ＝ 成績の実態以上の高評価）は現代教育問題の一つとして議論される。",
      derivatives: [
        { word: "gradual",     desc: "段階的な・緩やかな（gradus から）" },
        { word: "gradually",   desc: "徐々に・少しずつ（副詞）" },
        { word: "upgrade",     desc: "格上げする・アップグレード（up- + grade）" }
      ],
      family: [
        { word: "graduate",    desc: "卒業する・大学院生（gradus）" },
        { word: "degree",      desc: "学位・程度・度（de- + gradus）" },
        { word: "progress",    desc: "進歩・前進（pro- + gradi）" },
        { word: "congress",    desc: "議会（con- 共に + gradi）" }
      ],
      compounds: [
        { phrase: "grade point average",  desc: "学業成績平均（GPA）" },
        { phrase: "grade school",         desc: "小学校（米国）" }
      ]
    },

    "graduate": {
      origin: "ラテン語 graduare（段階を踏む）< gradus（段・等級）。「一段一段を踏んで登りきった」というのが語源的なイメージで、中世の大学では「学位（degree）」を授与されることを指した。\n\n15世紀に英語に入り「卒業する（動詞）・卒業生（名詞）・大学院の（形容詞）」という多義語として定着。graduate student（大学院生）、graduate school（大学院）は現代の学術語として必須。\n\n比喩的には "graduate from A to B"（A から B に進歩する）という表現でも使われ、"She graduated from local gigs to national tours."（地方公演から全国ツアーへと成長した）のように使われる。",
      derivatives: [
        { word: "graduation",    desc: "卒業・卒業式（名詞）" },
        { word: "undergraduate", desc: "学部生（under- + graduate）" },
        { word: "postgraduate",  desc: "大学院生・修士・博士（post- + graduate）" }
      ],
      family: [
        { word: "grade",         desc: "成績・等級（gradus）" },
        { word: "degree",        desc: "学位・程度（de- + gradus）" },
        { word: "progress",      desc: "進歩・前進する（pro- + gradi）" }
      ],
      compounds: [
        { phrase: "graduate school",   desc: "大学院" },
        { phrase: "graduate student",  desc: "大学院生" }
      ]
    },

    "degree": {
      origin: "ラテン語 de-（下へ）+ gradus（段）から成る合成語。「段を下りた位置」から転じて「（高いものから測った）距離・程度・等級」という意味になった。温度計の「度（degree）」や「円の度（度）」という単位概念も語源は同じ。\n\n14世紀に英語に入り「（1）程度・度合い（to a certain degree）（2）温度・角度などの単位（3）大学の学位（bachelor's/master's/doctoral degree）」という多義語として定着。\n\nby degrees（少しずつ・段階的に）は重要なイディオム。学位名では bachelor's degree（学士号）、master's degree（修士号）、doctoral degree（博士号）が基本。",
      derivatives: [
        { word: "degree of",     desc: "〜の程度・〜の度合い" }
      ],
      family: [
        { word: "grade",         desc: "等級・成績（gradus）" },
        { word: "graduate",      desc: "卒業する（gradus）" },
        { word: "gradual",       desc: "段階的な（gradus）" },
        { word: "progress",      desc: "前進する（pro- + gradi）" }
      ],
      compounds: [
        { phrase: "to a certain degree",  desc: "ある程度まで" },
        { phrase: "by degrees",           desc: "少しずつ・段階的に" },
        { phrase: "bachelor's degree",    desc: "学士号" }
      ]
    },

    // ── migr系（移動する）──
    "migrate": {
      origin: "ラテン語 migrare（移動する・移住する）。印欧語根 *mei-（変える）に由来し、場所・状態を変えるという基本概念を持つ。\n\n17世紀に英語に入り「（1）動物が季節的に移動する（渡り鳥・回遊魚など）（2）人間が居住地・国を移す」という動詞として定着。渡り鳥（migratory birds）の研究は生態学の重要分野で、鮭の遡上（salmon migration）なども migration と呼ぶ。\n\nIT の文脈では data migration（データ移行）、cloud migration（クラウドへの移行）が現代の重要プロジェクト概念として使われる。",
      derivatives: [
        { word: "migration",     desc: "移動・移住・データ移行（名詞）" },
        { word: "migratory",     desc: "移動性の・渡りをする（形容詞）" }
      ],
      family: [
        { word: "emigrate",      desc: "（国から）移住する（e- + migrare）" },
        { word: "immigrate",     desc: "（国に）移住する（im- + migrare）" },
        { word: "transmigrate",  desc: "（霊魂が）転生する（trans- + migrare）" }
      ],
      compounds: [
        { phrase: "data migration",   desc: "データ移行" },
        { phrase: "cloud migration",  desc: "クラウド移行" },
        { phrase: "labor migration",  desc: "労働移住・出稼ぎ" }
      ]
    },

    "emigrate": {
      origin: "ラテン語 emigrare（外に移動する）< e- / ex-（外へ）+ migrare（移動する）。「ある国・地域から外に向けて移住する」というのが語源的な意味。\n\n18世紀に英語に定着し「（自国・故郷から）移住する・移民として出て行く」という動詞として使われる。emigrant（移民・移住者）は「出ていく側」の立場を表す語で、immigrate（入ってくる）と対をなす。\n\n19〜20世紀の大量移民時代（アイルランド飢饉、南欧からアメリカへの移住、ユダヤ難民など）を描く歴史的文脈で頻出する語。同じ人物を送り出す国からは emigrant、受け入れる国からは immigrant と呼ぶ視点の違いがある。",
      derivatives: [
        { word: "emigrant",      desc: "移民・出国した移住者（名詞）" },
        { word: "emigration",    desc: "移民・出国（名詞）" }
      ],
      family: [
        { word: "migrate",       desc: "移動する（migrare）" },
        { word: "immigrate",     desc: "移住してくる（im- + migrare）" },
        { word: "expatriate",    desc: "海外居住者（ex- + patria 祖国）" }
      ],
      compounds: [
        { phrase: "emigrate from",   desc: "（国・地域）から移住する" }
      ]
    },

    "immigrate": {
      origin: "ラテン語 immigrare（中に移動してくる）< im-（in- の変形、中に）+ migrare（移動する）。「ある国・地域の中に入ってきて定住する」というのが語源的な意味。\n\n17世紀に英語に定着し「（他国から）移住してくる・入国定住する」という動詞として使われる。immigrate to（〜に移住する）という基本構文を持つ。\n\nimmigrant（移住してきた人・移民）、immigration（移民・入国審査）という派生語がより頻用される。Immigration and Customs Enforcement（ICE, 米国の移民・税関執行局）、immigration policy（移民政策）は現代の政治・社会問題の核心語。",
      derivatives: [
        { word: "immigrant",      desc: "移民・移住者（名詞）" },
        { word: "immigration",    desc: "移民・入国・入国審査（名詞）" }
      ],
      family: [
        { word: "migrate",        desc: "移動する（migrare）" },
        { word: "emigrate",       desc: "（国から）移住する（e- + migrare）" },
        { word: "refugee",        desc: "難民（refugium 逃げ場）" }
      ],
      compounds: [
        { phrase: "immigration policy",  desc: "移民政策" },
        { phrase: "immigration office",  desc: "入国管理局・出入国管理事務所" }
      ]
    },

    // ── medius系（中間）──
    "medium": {
      origin: "ラテン語 medium（中間・中央・中くらいのもの）< medius（中間の・真ん中の）。印欧語根 *medhyo-（中間）に由来し、英語の mid（真ん中の）とも遠縁にある。\n\n17世紀に英語に入り「（1）中間・中程度（2）媒体・手段・メディア（3）霊媒師」という意味で使われる。現代では mass media（マスメディア）、social media（ソーシャルメディア）という複合語で最も頻出する。\n\nステーキの焼き加減では medium（ミディアム）が「中程度の焼き加減」を指す。グラフィックデザインでは mixed media（複合メディア）という表現も使われる。複数形は media（メディア）と mediums（霊媒師など）で文脈によって使い分ける。",
      derivatives: [
        { word: "media",        desc: "メディア（medium の複数形・マスコミ全般）" },
        { word: "median",       desc: "中央値・中央分離帯（medianus）" }
      ],
      family: [
        { word: "mediate",      desc: "仲介する（medius + -ate）" },
        { word: "immediate",    desc: "即座の（im- + medius ＝ 間を置かない）" },
        { word: "medieval",     desc: "中世の（medius + aevum 時代）" },
        { word: "Mediterranean", desc: "地中海（medius + terra 陸 + aneus）" }
      ],
      compounds: [
        { phrase: "social media",   desc: "ソーシャルメディア" },
        { phrase: "mass media",     desc: "マスメディア・大衆媒体" }
      ]
    },

    "mediate": {
      origin: "ラテン語 mediare（中間に立つ）< medius（中間の）。「対立する二者の間に立って調整する」というのが語源的な意味。\n\n16世紀に英語に入り「（争い・交渉の間に入って）仲介する・調停する」という動詞として定着。mediate a dispute（紛争を仲介する）、mediate between parties（当事者間を調停する）のように使われる。\n\nmediator（仲介者・調停者）は国際外交・労使交渉・法律の文脈で重要な役割を指す語。心理学・教育では「learning mediator（学習の仲介者）」という概念もある。",
      derivatives: [
        { word: "mediation",    desc: "仲介・調停（名詞）" },
        { word: "mediator",     desc: "仲介者・調停者（名詞）" }
      ],
      family: [
        { word: "medium",       desc: "中間・媒体（medius）" },
        { word: "immediate",    desc: "即座の（im- + medius）" },
        { word: "medieval",     desc: "中世の（medius + aevum）" }
      ],
      compounds: [
        { phrase: "mediate a dispute",  desc: "紛争を仲介する・調停する" },
        { phrase: "online mediation",   desc: "オンライン調停" }
      ]
    },

    "immediate": {
      origin: "ラテン語 immediatus（間に何もない）< im-（in- の否定形）+ mediatus（中間に置かれた < medius）。「中間を置かない＝直接の・遅れのない」というのが語源的な意味。\n\n15世紀に英語に入り「即座の・直接の・当面の」という形容詞として定着。immediate response（即座の対応）、immediate vicinity（すぐそば）、immediate family（直系家族）のように使われる。\n\n副詞 immediately（すぐに・即座に）は日常英語で最も高頻度の副詞の一つ。"Do it immediately."（すぐにやれ）のように命令・緊迫した状況を表す。",
      derivatives: [
        { word: "immediately",   desc: "すぐに・即座に（副詞）" },
        { word: "immediacy",     desc: "緊急性・即時性・臨場感（名詞）" }
      ],
      family: [
        { word: "medium",        desc: "中間・媒体（medius）" },
        { word: "mediate",       desc: "仲介する（medius + -ate）" },
        { word: "intermediate",  desc: "中間の・中級の（inter- + medius）" }
      ],
      compounds: [
        { phrase: "immediate family",    desc: "直系家族（配偶者・子・親）" },
        { phrase: "immediate vicinity",  desc: "すぐそば・近傍" }
      ]
    },

    // ── liter系（文字・読み書き）──
    "literature": {
      origin: "ラテン語 litteratura（文字で書かれたもの・学識）< littera（文字）。littera は元来「蜂蜡の板に刻んだ筋・文字」を意味した。英語の letter（文字・手紙）と同語根。\n\n14世紀に英語に入り当初は「文字で書かれた知識・学識」を広く指したが、やがて「美的・知的価値を持つ書かれた作品の総体＝文学」という現代的な意味に絞られた。研究論文の文献目録（literature review ＝ 文献調査）という学術的な意味でも使われる。\n\noral literature（口承文学）、world literature（世界文学）、children's literature（児童文学）のように多様なジャンルを包含する上位概念語として機能する。",
      derivatives: [
        { word: "literary",      desc: "文学的な・文学の（形容詞）" },
        { word: "literate",      desc: "読み書きのできる・教養のある（形容詞）" },
        { word: "literacy",      desc: "読み書き能力・リテラシー（名詞）" }
      ],
      family: [
        { word: "letter",        desc: "文字・手紙（littera から）" },
        { word: "literal",       desc: "字義通りの（litteralis）" },
        { word: "illiterate",    desc: "読み書きのできない（il- + literate）" }
      ],
      compounds: [
        { phrase: "literature review",  desc: "文献調査・先行研究レビュー" },
        { phrase: "world literature",   desc: "世界文学" }
      ]
    },

    "literacy": {
      origin: "ラテン語 littera（文字）を語根とする近代英語の造語。19世紀頃に「読み書き能力（reading and writing ability）」を表す語として確立した。\n\n当初は文字の読み書きという基本的なスキルを指したが、現代では digital literacy（デジタルリテラシー）、financial literacy（金融リテラシー）、media literacy（メディアリテラシー）のように「特定の分野を理解し活用する能力」という拡張的な意味で使われるようになった。\n\n国連ユネスコは読み書き能力を基本的人権として位置づけており、adult literacy（成人識字率）の向上を世界的な開発目標として掲げている。",
      derivatives: [
        { word: "literate",       desc: "読み書きのできる・〜リテラシーのある（形容詞）" },
        { word: "illiteracy",     desc: "非識字・文盲（il- + literacy）" },
        { word: "illiterate",     desc: "読み書きのできない（形容詞）" }
      ],
      family: [
        { word: "literature",     desc: "文学・文献（litteratura）" },
        { word: "literary",       desc: "文学的な（litterarius）" },
        { word: "letter",         desc: "文字・手紙（littera）" }
      ],
      compounds: [
        { phrase: "digital literacy",     desc: "デジタルリテラシー" },
        { phrase: "financial literacy",   desc: "金融リテラシー" },
        { phrase: "media literacy",       desc: "メディアリテラシー" }
      ]
    },

    // ── cit / citat系（呼び起こす）──
    "excite": {
      origin: "ラテン語 excitare（外に向けて呼び起こす）< ex-（外へ）+ citare（急き立てる・呼び起こす）< ciere（動かす・呼ぶ）。「内にある感情・エネルギーを外に向けて引き出す」というのが語源的なイメージ。\n\n14世紀に英語に入り「（感情・関心を）かき立てる・興奮させる」という動詞として定着。物理学・化学では「（原子・分子を）励起する」という専門用語にもなっている。\n\ncommon word として "I'm so excited!"（とても興奮している！）は英語学習者が最初に習う感情表現の一つ。exciting（わくわくする）、excited（興奮した）の使い分けは英語の感情形容詞の典型的な学習ポイント。",
      derivatives: [
        { word: "excitement",    desc: "興奮・ワクワク（名詞）" },
        { word: "exciting",      desc: "わくわくさせる・刺激的な（形容詞）" },
        { word: "excited",       desc: "興奮した・ワクワクした（形容詞）" }
      ],
      family: [
        { word: "cite",          desc: "引用する（citare）" },
        { word: "recite",        desc: "暗唱する（re- + citare）" },
        { word: "incite",        desc: "煽動する（in- + citare）" },
        { word: "resuscitate",   desc: "蘇生させる（re- + sus- + citare）" }
      ],
      compounds: [
        { phrase: "cause excitement",    desc: "興奮を引き起こす" },
        { phrase: "excited about",       desc: "〜に興奮している・楽しみにしている" }
      ]
    },

    "cite": {
      origin: "ラテン語 citare（召喚する・急き立てる・引用する）< ciere（動かす・呼ぶ）。法律では「証人を法廷に召喚する」という意味で使われ、そこから「権威を引き合いに出す＝引用する」という意味が発展した。\n\n15世紀に英語に入り「（1）引用する・参照する（2）表彰する（3）法的に召喚する・略式罰則を科す」という動詞として使われる。学術論文では cite a source（出典を引用する）、citation（引用・出典）が基本語。\n\nシカゴ、MLA、APA などの学術引用スタイルでは citation format（引用形式）が厳格に規定されており、cite の適切な使い方は学術ライティングの基礎。",
      derivatives: [
        { word: "citation",      desc: "引用・参照・表彰（名詞）" }
      ],
      family: [
        { word: "excite",        desc: "興奮させる（ex- + citare）" },
        { word: "recite",        desc: "暗唱する（re- + citare）" },
        { word: "incite",        desc: "煽動する（in- + citare）" }
      ],
      compounds: [
        { phrase: "cite a source",   desc: "出典を引用する・参照する" },
        { phrase: "citation style",  desc: "引用スタイル（APA/MLA など）" }
      ]
    },

    // ── tang / tact系（触れる）──
    "contact": {
      origin: "ラテン語 contactus（触れ合うこと）< contingere（共に触れる）< con-（共に）+ tangere（触れる）。「二つのものが共に触れ合う」というのが語源的な意味。\n\n17世紀に英語に入り「（1）接触・連絡（名詞）（2）接触する・連絡をとる（動詞）」として定着。contact information（連絡先）、point of contact（接点・窓口）のように使われる。\n\nスポーツでは contact sport（格闘・接触系スポーツ）、医学では contact lens（コンタクトレンズ）、電気工学では electrical contact（電気接点）のように幅広い分野で使われる。",
      derivatives: [
        { word: "contactable",   desc: "連絡が取れる（形容詞）" }
      ],
      family: [
        { word: "tangible",      desc: "有形の・実体のある（tangere）" },
        { word: "intangible",    desc: "無形の・漠然とした（in- + tangere）" },
        { word: "contagious",    desc: "伝染性の（con- + tangere）" },
        { word: "tangent",       desc: "接線・話題から外れた（tangere）" }
      ],
      compounds: [
        { phrase: "contact information",  desc: "連絡先情報" },
        { phrase: "point of contact",     desc: "接点・連絡窓口" }
      ]
    },

    "tangible": {
      origin: "ラテン語 tangibilis（触れることができる）< tangere（触れる）+ -ibilis（〜できる）。「手で触れることができる・実体がある」というのが語源的な意味。\n\n16世紀に英語に入り「（1）触れることができる・有形の（2）はっきりした・具体的な」という形容詞として定着。tangible assets（有形資産 ＝ 建物・設備など物理的な資産）は会計・財務の基本用語。\n\ntangible results（具体的な結果）、tangible benefits（明確なメリット）のように「曖昧でなく証明・確認できる」という意味でビジネス文書にも頻出する。",
      derivatives: [
        { word: "tangibly",      desc: "具体的に・明確に（副詞）" },
        { word: "intangible",    desc: "無形の・実体のない（in- + tangible）" }
      ],
      family: [
        { word: "contact",       desc: "接触・連絡（con- + tangere）" },
        { word: "contagious",    desc: "伝染性の（con- + tangere）" },
        { word: "tangent",       desc: "接線・脱線した（tangere）" }
      ],
      compounds: [
        { phrase: "tangible assets",    desc: "有形資産" },
        { phrase: "tangible results",   desc: "具体的な結果・明確な成果" }
      ]
    },

    "contagious": {
      origin: "ラテン語 contagiosus（触れることで伝わる）< contagio（接触による伝染）< con-（共に）+ tangere（触れる）。「触れることで伝わる病気」という医学的な意味が語源。\n\n14世紀に英語に入り「（病気が）接触感染する・伝染性の」という医学的な意味で定着。現代では比喩的に「感情・行動が人から人へと伝わる」という意味でも頻用される。a contagious laugh（うつる笑い）、contagious enthusiasm（伝染する熱意）のように。\n\ncorona pandemic 以降、contagious（接触感染性）と airborne（空気感染性）の区別が一般市民にも意識されるようになった。",
      derivatives: [
        { word: "contagion",     desc: "伝染・感染・（悪い影響の）伝播（名詞）" }
      ],
      family: [
        { word: "contact",       desc: "接触（con- + tangere）" },
        { word: "tangible",      desc: "有形の（tangere）" },
        { word: "epidemic",      desc: "流行病（epi- + dēmos）" }
      ],
      compounds: [
        { phrase: "contagious disease",  desc: "伝染病・接触感染症" },
        { phrase: "contagious laughter", desc: "うつる笑い・笑いの連鎖" }
      ]
    },

    // ── tempt / tent系（試みる）──
    "tempt": {
      origin: "ラテン語 temptare / tentare（試す・探る・誘惑する）。元来は「棒でつついて試す」という物理的な行為から、「誰かの意志を試す＝誘惑する」という意味に転じた。\n\n13世紀に英語に入り「（悪いことへ）誘惑する・そそのかす・〜したい気持ちにさせる」という動詞として定着。人・食べ物・お金が誘惑の主語になり、"She was tempted to quit."（彼女は辞めたい気持ちにかられた）のように幅広く使われる。\n\n"Don't tempt fate."（運命を試すな＝無謀なことはするな）は英語の重要な慣用表現。",
      derivatives: [
        { word: "temptation",    desc: "誘惑・魅力・そそのかし（名詞）" },
        { word: "tempting",      desc: "魅力的な・そそられる（形容詞）" }
      ],
      family: [
        { word: "attempt",       desc: "試みる・試みる（ad- + temptare）" },
        { word: "contempt",      desc: "軽蔑（con- + temptare 試みた結果見下す）" },
        { word: "contemplate",   desc: "熟考する（contemplari）" }
      ],
      compounds: [
        { phrase: "resist temptation",   desc: "誘惑に抗う" },
        { phrase: "tempt fate",          desc: "運命を試す・無謀なことをする" }
      ]
    },

    "attempt": {
      origin: "ラテン語 attemptare（〜に向けて試す）< ad-（〜へ）+ temptare（試す）。「ある目標に向けて試みる」というのが語源的な意味。\n\n15世紀に英語に入り「試みる・挑戦する（動詞）・試み・挑戦（名詞）」として定着。attempt to do（〜しようと試みる）という構文が基本。\n\n法律では attempted murder（殺人未遂）のように「未遂の犯罪」を表す。"in an attempt to do"（〜しようとして）は英語のライティングでよく使われる表現。失敗を恐れずに挑戦する姿勢を尊重する英語文化において、"make an attempt"（挑戦する）は重要なフレーズ。",
      derivatives: [
        { word: "unattempted",    desc: "まだ試みられていない（形容詞）" }
      ],
      family: [
        { word: "tempt",          desc: "誘惑する（temptare）" },
        { word: "contempt",       desc: "軽蔑（con- + temptare）" }
      ],
      compounds: [
        { phrase: "in an attempt to",   desc: "〜しようとして" },
        { phrase: "attempted murder",   desc: "殺人未遂（法律用語）" }
      ]
    },

    "contempt": {
      origin: "ラテン語 contemptus（軽蔑・蔑み）< contemnere（完全に軽んじる）< con-（強調）+ temnere（軽視する）。試した結果として「価値がないと判断して見下す」という意味が生まれた。\n\n14世紀に英語に入り「軽蔑・侮辱・コントラクト」という名詞として定着。hold someone in contempt（〜を軽蔑する）、contempt of court（法廷侮辱罪）が重要表現。\n\ncontempt of court（裁判所の判決・命令を無視すること）は英米法の重要概念で、裁判所の権威への侮辱として処罰される。feel contempt for（〜を軽蔑する）という感情表現も頻用。",
      derivatives: [
        { word: "contemptuous",   desc: "軽蔑的な・侮蔑的な（形容詞）" },
        { word: "contemptuously", desc: "軽蔑的に（副詞）" }
      ],
      family: [
        { word: "tempt",          desc: "誘惑する（temptare）" },
        { word: "attempt",        desc: "試みる（ad- + temptare）" }
      ],
      compounds: [
        { phrase: "contempt of court",   desc: "法廷侮辱罪・裁判所侮辱" },
        { phrase: "hold in contempt",    desc: "〜を軽蔑する・蔑む" }
      ]
    },

    // ── ment / men系（精神・心）──
    "mental": {
      origin: "ラテン語 mentalis（心・精神の）< mens / mentis（心・精神・知性）。mens はインド・ヨーロッパ語根 *men-（考える）に由来し、英語の mind とも遠縁にある。\n\n17世紀に英語に入り「精神の・心の・知的な」という形容詞として定着。mental health（精神的健康）、mental illness（精神疾患）、mental note（心の中のメモ）のように、身体（physical）と対比して精神・心理的な側面を表す。\n\n現代では mental health awareness（精神的健康への意識）が社会的な重要課題として広く議論されるようになり、この語の使用頻度と重要性が高まっている。",
      derivatives: [
        { word: "mentally",      desc: "精神的に・心理的に（副詞）" },
        { word: "mentality",     desc: "精神的態度・考え方・メンタリティ（名詞）" }
      ],
      family: [
        { word: "mention",       desc: "言及する（mentio 心に触れること）" },
        { word: "comment",       desc: "コメントする（com- + mens）" },
        { word: "mind",          desc: "心・精神（同じ印欧語根 *men-）" },
        { word: "memory",        desc: "記憶（memor 心に留める）" }
      ],
      compounds: [
        { phrase: "mental health",        desc: "精神的健康・メンタルヘルス" },
        { phrase: "mental note",          desc: "心の中のメモ・頭の中で覚えること" }
      ]
    },

    "mention": {
      origin: "ラテン語 mentio（心に留めること・言及）< mens / mentis（心・記憶）。「心に残ることを言葉にする＝言及する」というのが語源的なつながり。\n\n14世紀のフランス語経由で英語に入り「〜に言及する・〜のことを話す（動詞）・言及・名前を出すこと（名詞）」として定着。Don't mention it.（どういたしまして）は英語の礼儀表現の定型句。\n\n"not to mention..."（〜は言うまでもなく）は重要なイディオムで、追加情報を強調する際によく使われる。"Worth mentioning"（言及する価値がある）のような表現も頻出。",
      derivatives: [
        { word: "aforementioned", desc: "前述の・前に言及した（afore + mentioned）" }
      ],
      family: [
        { word: "mental",        desc: "精神的な（mens）" },
        { word: "comment",       desc: "コメント（com- + mens）" },
        { word: "monument",      desc: "記念碑（monumentum 心に留めさせるもの）" }
      ],
      compounds: [
        { phrase: "not to mention",    desc: "〜は言うまでもなく" },
        { phrase: "don't mention it",  desc: "どういたしまして（礼を言われた際）" }
      ]
    },

    "monument": {
      origin: "ラテン語 monumentum（記念物・記念碑）< monere（思い起こさせる・警告する）< mens（心）。「心に残るものを形にして後世に伝えるもの」というのが語源的な意味。monere は warning（警告）の意味もあり、「remind」と「warn」の両方の概念を含む。\n\n14世紀に英語に入り「（人・出来事を記念する）記念碑・建造物・史跡」という名詞として定着。a monument to（〜を称えた記念碑）、historic monument（歴史的記念物）のように使われる。\n\nmonumental（記念碑的な・壮大な・非常に重要な）は「monument のような規模・重要性」を持つ形容詞として頻用される。",
      derivatives: [
        { word: "monumental",    desc: "壮大な・記念碑的な・非常に重要な（形容詞）" }
      ],
      family: [
        { word: "mental",        desc: "精神的な（mens）" },
        { word: "mention",       desc: "言及する（mentio）" },
        { word: "admonish",      desc: "諭す・警告する（ad- + monere）" },
        { word: "remind",        desc: "思い出させる（re- + mind ＝ monere）" }
      ],
      compounds: [
        { phrase: "a monument to",      desc: "〜への記念碑・〜を称えた建造物" },
        { phrase: "historic monument",  desc: "歴史的記念物・史跡" }
      ]
    },

    // ── clar系（明らか）──
    "clarify": {
      origin: "ラテン語 clarificare（明るくする・明らかにする）< clarus（明るい・明確な）+ facere（する）。clarus は印欧語根 *kele-（叫ぶ・大声を出す）に由来し、「大声で叫ぶほど明確」というイメージが原義にある。\n\n14世紀に英語に入り「（液体を）澄ませる・（考え・状況を）明確にする」という動詞として定着。Please clarify your position.（あなたの立場を明確にしてください）のように、コミュニケーションの場で頻用される。\n\nclarification（明確化・説明）という名詞も重要で、Could you give me some clarification?（もう少し詳しく説明してもらえますか？）は丁寧に説明を求める重要フレーズ。",
      derivatives: [
        { word: "clarification",  desc: "明確化・説明・澄ませること（名詞）" },
        { word: "clarity",        desc: "明瞭さ・明確さ（名詞）" }
      ],
      family: [
        { word: "clear",          desc: "明確な・晴れた（clarus から）" },
        { word: "declare",        desc: "宣言する（de- + clarus）" },
        { word: "illuminate",     desc: "照らす（lumen 光）" }
      ],
      compounds: [
        { phrase: "for clarification",   desc: "明確にするために・説明のために" },
        { phrase: "clarify a point",     desc: "ある点を明確にする" }
      ]
    },

    "declare": {
      origin: "ラテン語 declarare（完全に明らかにする）< de-（完全に）+ clarare（明るくする）< clarus（明るい・明確な）。「完全に明確にして公に言明する」というのが語源的な意味。\n\n14世紀に英語に入り「（公式に・はっきりと）宣言する・申告する・表明する」という動詞として定着。declare war（宣戦布告する）、declare independence（独立宣言する）、declare your income（収入を申告する）のように使われる。\n\n税関では have anything to declare?（申告するものはありますか？）と聞かれ、customs declaration（税関申告書）が必要になる。",
      derivatives: [
        { word: "declaration",    desc: "宣言・申告・表明（名詞）" },
        { word: "declarative",    desc: "宣言的な・平叙の（文法用語）" }
      ],
      family: [
        { word: "clarify",        desc: "明確にする（clarus + facere）" },
        { word: "clarity",        desc: "明瞭さ（claritas）" },
        { word: "clear",          desc: "明確な・晴れた（clarus）" }
      ],
      compounds: [
        { phrase: "declare war",          desc: "宣戦布告する" },
        { phrase: "declare bankruptcy",   desc: "破産を申告する" },
        { phrase: "customs declaration",  desc: "税関申告書" }
      ]
    },

    // ── oikos系（家・環境）──
    "ecology": {
      origin: "ギリシャ語 oikos（家・家庭・生息地）+ logos（学問）から成る近代造語。ドイツの生物学者エルンスト・ヘッケルが1866年に「生物とその環境の相互関係を研究する科学」として造語した。\n\n日本語「生態学」に相当し、生物と物理的環境（気候・土壌・水）および他の生物との複雑な関係を研究する。食物連鎖（food chain）、生物多様性（biodiversity）、生態系サービス（ecosystem services）などが核心概念。\n\n1960〜70年代の環境運動の台頭とともに、ecology は一般語としても広まり、「自然環境との調和・持続可能性」を訴える概念語として使われる。",
      derivatives: [
        { word: "ecological",    desc: "生態的な・生態学の（形容詞）" },
        { word: "ecologist",     desc: "生態学者・環境保護論者" },
        { word: "ecosystem",     desc: "生態系（oikos + systema）" }
      ],
      family: [
        { word: "economy",       desc: "経済（oikos + nomos 法則）" },
        { word: "economics",     desc: "経済学（oikos + nomos + -ics）" },
        { word: "oecumenical",   desc: "全世界的な・普遍的な（oikos 世界の家）" }
      ],
      compounds: [
        { phrase: "marine ecology",    desc: "海洋生態学" },
        { phrase: "ecological balance", desc: "生態的バランス・生態系の均衡" }
      ]
    },

    "economy": {
      origin: "ギリシャ語 oikonomia（家の管理・家政）< oikos（家）+ nomos（法則・管理）。「家を上手に管理する」という家政の概念が、国家・社会の資源管理へと拡張された。\n\n16世紀に英語に入り当初は「節約・倹約」を意味したが、17〜18世紀の重商主義・古典派経済学の発展とともに「生産・分配・消費の国家的システム」という現代的な意味に特化した。アダム・スミスの『国富論（The Wealth of Nations, 1776年）』が近代経済学の基礎を築いた。\n\neconomy class（エコノミークラス ＝ 節約の class）のように「費用を抑えた・経済的な」という形容詞的意味でも使われる。",
      derivatives: [
        { word: "economics",      desc: "経済学（名詞複数形・学問名）" },
        { word: "economist",      desc: "経済学者・エコノミスト" },
        { word: "economic",       desc: "経済的な・経済に関する（形容詞）" }
      ],
      family: [
        { word: "ecology",        desc: "生態学（oikos + logos）" },
        { word: "autonomous",     desc: "自治の（autos 自分 + nomos）" },
        { word: "astronomy",      desc: "天文学（astron + nomos）" }
      ],
      compounds: [
        { phrase: "economy class",    desc: "エコノミークラス（節約クラス）" },
        { phrase: "market economy",   desc: "市場経済" },
        { phrase: "gig economy",      desc: "ギグエコノミー（単発仕事中心の経済）" }
      ]
    },

    // ── polis系（都市・国家）──
    "politics": {
      origin: "ギリシャ語 politika（国家に関すること）< polis（都市国家）+ -ikos（〜に関する）。アリストテレスの著作 Politika（政治学）がこの語を学術的に確立した。「人間は本来、政治的（polis に生きる）動物である」というのがアリストテレスの有名な命題。\n\n14世紀の英語に入り「国家・政府・権力に関する活動・考え方・学問」を指す語として定着。現代では politics は選挙・議会・政党活動から、職場政治（office politics）のような日常的な権力関係まで幅広く指す。\n\npolitically correct（政治的に正しい・PC）という概念は、特定の集団に対する偏見や差別を避ける言語・行動の規範として1980〜90年代から広まり、現在も賛否両論の議論が続く重要概念。",
      derivatives: [
        { word: "political",       desc: "政治的な・政治に関する（形容詞）" },
        { word: "politically",     desc: "政治的に（副詞）" },
        { word: "politician",      desc: "政治家（名詞）" }
      ],
      family: [
        { word: "policy",          desc: "政策・方針（polis から）" },
        { word: "police",          desc: "警察（polis の管理者）" },
        { word: "metropolis",      desc: "大都市（mētēr 母 + polis）" },
        { word: "cosmopolitan",    desc: "世界市民的な（kosmos 世界 + polis）" }
      ],
      compounds: [
        { phrase: "political party",        desc: "政党" },
        { phrase: "office politics",        desc: "職場の政治・社内の権力ゲーム" },
        { phrase: "politically correct",    desc: "政治的に正しい（PC）" }
      ]
    },

    "policy": {
      origin: "ラテン語 politia（国家管理・市民の秩序）< ギリシャ語 politeia（国制・市民としての生き方）< polis（都市国家）。「国家・組織のあり方を定めた原則・方針」というのが語源的な意味。\n\n15世紀のフランス語経由で英語に入り「（政府・組織・個人が採用する）政策・方針・規則・保険契約」という多義語として定着。\n\npublic policy（公共政策）、insurance policy（保険証券・保険規約）、company policy（会社方針）のように、「一定のルール・方針を定めたもの」という意味で幅広く使われる。",
      derivatives: [
        { word: "policymaker",    desc: "政策立案者・意思決定者" }
      ],
      family: [
        { word: "politics",       desc: "政治（polis + -ikos）" },
        { word: "police",         desc: "警察（polis の管理者）" },
        { word: "polite",         desc: "礼儀正しい（politus 洗練された）" }
      ],
      compounds: [
        { phrase: "public policy",     desc: "公共政策" },
        { phrase: "insurance policy",  desc: "保険証券・保険契約" },
        { phrase: "company policy",    desc: "会社の方針・社則" }
      ]
    },

    // ── auto系（自分・自己）──
    "autonomous": {
      origin: "ギリシャ語 autonomos（自分自身の法律を持つ）< autos（自分）+ nomos（法則・法律）。「自分で自分の規則を決める＝自治的な・自律的な」というのが語源的な意味。\n\n18世紀に英語に入り「自治の・独立した・自律的な」という形容詞として定着。政治では autonomous region（自治区）、哲学・倫理学では「自分の意志で行動する自律した存在」、ロボット・AI の文脈では autonomous vehicle（自律走行車）のように使われる。\n\n現代の AI・ロボット工学では autonomous system（自律システム）、autonomous driving（自動運転）が重要な技術トレンドであり、autos が「人間の判断なしに自ら判断・行動する」という意味で使われる。",
      derivatives: [
        { word: "autonomy",        desc: "自治権・自律性（名詞）" },
        { word: "autonomously",    desc: "自律的に・独立して（副詞）" }
      ],
      family: [
        { word: "automatic",       desc: "自動の（autos + maktos 動く）" },
        { word: "automobile",      desc: "自動車（autos + mobilis 動く）" },
        { word: "autobiography",   desc: "自伝（autos + bios + graphein）" },
        { word: "autograph",       desc: "直筆サイン（autos + graphein）" }
      ],
      compounds: [
        { phrase: "autonomous vehicle",   desc: "自律走行車・自動運転車" },
        { phrase: "autonomous region",    desc: "自治区" }
      ]
    },

    "automatic": {
      origin: "ギリシャ語 automatos（自分で動く）< autos（自分）+ matos（動く・思考する）。「自分の意志で動く・外からの力なしに動く」というのが語源的な意味で、機械が人間の操作なしに自ら動く状態を表す。\n\n18世紀に英語に定着し「自動的な・機械的な・無意識の」という形容詞として使われる。automatic door（自動ドア）、automatic transmission（オートマチック変速機）、automatic pilot（自動操縦）のような機械工学的な用法のほか、automatic response（無意識の反応）のような心理的な意味でも使われる。\n\nautomatically は「自動的に・反射的に・当然の結果として」という意味の副詞として非常に高頻度。",
      derivatives: [
        { word: "automatically",   desc: "自動的に・反射的に（副詞）" },
        { word: "automation",      desc: "自動化・オートメーション（名詞）" }
      ],
      family: [
        { word: "autonomous",      desc: "自律的な（autos + nomos）" },
        { word: "automobile",      desc: "自動車（autos + mobilis）" },
        { word: "autopilot",       desc: "自動操縦（autos + pilot）" }
      ],
      compounds: [
        { phrase: "automatic door",   desc: "自動ドア" },
        { phrase: "on autopilot",     desc: "自動操縦で・無意識に・惰性で" }
      ]
    },

    "automobile": {
      origin: "フランス語 automobile < ギリシャ語 autos（自分）+ ラテン語 mobilis（動ける・移動できる）から成る19世紀の造語。「自ら動く乗り物」というのが語源通りの意味で、馬なしに自走する乗り物として19世紀末に命名された。\n\n1885〜86年にカール・ベンツとゴットリープ・ダイムラーが独立してガソリンエンジン車を発明し、automobile（英・仏）、car（英・米口語）、motor car（英国）、horseless carriage（初期の表現）など様々な呼称で普及した。\n\nフォードの大量生産（1908年〜 T型フォード）が自動車を庶民のものにし、20世紀の社会・都市・経済・文化を根本から変えた。",
      derivatives: [
        { word: "automotive",     desc: "自動車の・自動車産業の（形容詞）" }
      ],
      family: [
        { word: "autonomous",     desc: "自律的な（autos + nomos）" },
        { word: "automatic",      desc: "自動の（autos + matos）" },
        { word: "mobile",         desc: "移動式の・携帯電話（mobilis）" },
        { word: "mobility",       desc: "移動性・流動性（mobilis）" }
      ],
      compounds: [
        { phrase: "automobile industry",  desc: "自動車産業" }
      ]
    },

    // ── populus系（民衆）──
    "popular": {
      origin: "ラテン語 popularis（民衆の・民衆に広く知られた）< populus（民衆・人民）。populusは「特定地域の人々の集合」を意味し、英語の people とも語源的に関連する。\n\n15世紀に英語に入り「（1）民衆に支持された・人気のある（2）一般向けの・大衆の」という形容詞として定着。popular music（大衆音楽・ポップ）、popular vote（一般投票・得票数）のように使われる。\n\npopularity（人気・評判）、popularize（一般向けにする・普及させる）という派生語も重要。unpopular（不人気の）、overpopulated（人口過密の）のような反義・合成語も頻出する。",
      derivatives: [
        { word: "popularity",    desc: "人気・評判・普及度（名詞）" },
        { word: "popularize",    desc: "普及させる・大衆向けにする（動詞）" }
      ],
      family: [
        { word: "population",    desc: "人口（populatio < populus）" },
        { word: "public",        desc: "公衆・公共の（publicus < populus）" },
        { word: "republic",      desc: "共和国（res publica 公共の事柄）" },
        { word: "people",        desc: "人々（populus の英語形）" }
      ],
      compounds: [
        { phrase: "popular vote",       desc: "一般投票・得票数（選挙）" },
        { phrase: "popular culture",    desc: "大衆文化・ポップカルチャー" }
      ]
    },

    "population": {
      origin: "ラテン語 populatio（民衆の集まり）< populus（民衆）。17世紀に英語で「特定の地域・国に住む人々の総数」という人口統計的な意味で定着した。\n\n生物学では「特定地域の同種の生物の集団」を指し、population genetics（集団遺伝学）は進化論・自然選択を数学的に研究する分野。\n\nworld population（世界人口）は2023年時点で約80億人を超え、population growth（人口増加）、overpopulation（人口過剰）、population aging（高齢化）など、現代社会の最重要課題に直結する語として使われる。",
      derivatives: [
        { word: "populate",       desc: "住民が住む・（コンテンツで）満たす（動詞）" },
        { word: "overpopulation", desc: "人口過剰（over- + population）" }
      ],
      family: [
        { word: "popular",        desc: "人気のある・民衆の（popularis）" },
        { word: "public",         desc: "公共の（publicus < populus）" },
        { word: "republic",       desc: "共和国（res publica）" }
      ],
      compounds: [
        { phrase: "world population",    desc: "世界人口" },
        { phrase: "population growth",   desc: "人口増加" },
        { phrase: "aging population",    desc: "高齢化した人口・高齢化社会" }
      ]
    },

    "public": {
      origin: "ラテン語 publicus（人民全体の・公共の）< populus（民衆）の形容詞形。「特定の個人や集団ではなく、全ての人々に関わる・開かれた」というのが語源的な意味。\n\n15世紀に英語に入り「公共の・公の・一般向けの」という形容詞と「一般市民・大衆」という名詞として定着。public sector（公共部門）、public health（公衆衛生）、go public（株式を公開する）のように使われる。\n\n「private（私的）」の対義語として機能し、public vs. private の区別は政治・法律・経営のあらゆる分野で基本的な概念軸となっている。",
      derivatives: [
        { word: "publicly",       desc: "公に・一般向けに（副詞）" },
        { word: "publicity",      desc: "宣伝・広報・知名度（名詞）" },
        { word: "publicize",      desc: "広く知らせる・宣伝する（動詞）" }
      ],
      family: [
        { word: "popular",        desc: "人気のある（popularis）" },
        { word: "population",     desc: "人口（populatio）" },
        { word: "republic",       desc: "共和国（res publica）" }
      ],
      compounds: [
        { phrase: "public sector",   desc: "公共部門・官公庁" },
        { phrase: "public health",   desc: "公衆衛生" },
        { phrase: "go public",       desc: "株式公開する・公になる" }
      ]
    },

    // ── tort系（曲げる）──
    "torture": {
      origin: "ラテン語 tortura（ひねり・絞り）< torquere（ねじる・捻る）。「体をねじるような苦痛を与える」というのが語源的な意味で、中世ヨーロッパの拷問台が体を文字通りに「ねじった」ことに由来する。\n\n15世紀に英語に入り「（1）拷問する・極度の苦痛を与える（2）ひどい苦しみ」という動詞・名詞として定着。UN 拷問禁止条約（1984年）など人権・国際法の文脈では重要語。\n\n比喩的には "This math test is pure torture."（この数学テストは純粋な拷問だ）のように「非常につらい・耐え難いもの」という誇張表現でも使われる。",
      derivatives: [
        { word: "tortured",      desc: "苦悩した・苦しめられた（形容詞）" },
        { word: "torturous",     desc: "苦痛な・拷問のような（形容詞）" }
      ],
      family: [
        { word: "distort",       desc: "歪める（dis- + torquere）" },
        { word: "extort",        desc: "脅迫して奪う（ex- + torquere）" },
        { word: "contort",       desc: "ひどく歪める（con- + torquere）" },
        { word: "torque",        desc: "トルク・回転力（torquere）" }
      ],
      compounds: [
        { phrase: "torture chamber",    desc: "拷問部屋" },
        { phrase: "sheer torture",      desc: "純粋な拷問・非常につらいこと" }
      ]
    },

    "distort": {
      origin: "ラテン語 distorquere（離れた方向にねじる）< dis-（離れて・分離）+ torquere（ねじる）。「本来の形からねじれてしまう＝歪む・歪める」というのが語源的な意味。\n\n15世紀に英語に入り「（1）（形・音・映像を）歪める（2）（事実・意味を）歪曲する」という動詞として定着。物理的な歪み（distorted image ＝ 歪んだ画像）と抽象的な歪曲（distort the truth ＝ 真実を歪める）の両方の意味で使われる。\n\nメディア・政治の文脈では distort the facts（事実を歪曲する）、media distortion（メディアによる歪曲）が重要な社会問題として議論される。",
      derivatives: [
        { word: "distortion",    desc: "歪み・歪曲・ひずみ（名詞）" },
        { word: "distorted",     desc: "歪んだ・歪曲された（形容詞）" }
      ],
      family: [
        { word: "torture",       desc: "拷問する（torquere）" },
        { word: "extort",        desc: "脅迫して奪う（ex- + torquere）" },
        { word: "contort",       desc: "ひどく歪める（con- + torquere）" }
      ],
      compounds: [
        { phrase: "distort the truth",  desc: "真実を歪める・事実を歪曲する" },
        { phrase: "image distortion",   desc: "画像の歪み・レンズ歪み" }
      ]
    },

    // ── lect / leg系（集める・読む・選ぶ）──
    "select": {
      origin: "ラテン語 seligere（選び出す）< se-（分離・側へ）+ legere（集める・選ぶ・読む）。「多くの中から選んで脇に置く」というのが語源的な意味。\n\n16世紀に英語に入り「慎重に選ぶ・選択する」という動詞と「精選された・エリートの」という形容詞として定着。carefully select（慎重に選ぶ）、select committee（特別委員会 ＝ 選ばれたメンバーの委員会）のように使われる。\n\nselection（選択・選考・品揃え）は生物学では natural selection（自然選択）という Darwin 進化論の核心概念として、ビジネスでは personnel selection（人材選考）として使われる。",
      derivatives: [
        { word: "selection",      desc: "選択・選考・品揃え（名詞）" },
        { word: "selective",      desc: "選択的な・好みがうるさい（形容詞）" },
        { word: "selectively",    desc: "選択的に（副詞）" }
      ],
      family: [
        { word: "collect",        desc: "集める（col- + legere）" },
        { word: "elect",          desc: "選出する（e- + legere）" },
        { word: "neglect",        desc: "怠る（neg- + legere）" },
        { word: "elegant",        desc: "優雅な（e- + legere 選ばれた）" }
      ],
      compounds: [
        { phrase: "natural selection",  desc: "自然選択（ダーウィン進化論）" },
        { phrase: "select committee",   desc: "特別委員会・精選委員会" }
      ]
    },

    "collect": {
      origin: "ラテン語 colligere（共に集める）< col-（con- 共に）+ legere（集める）。「散らばったものを共に一箇所に集める」というのが語源的なイメージ。\n\n14世紀に英語に入り「集める・収集する・徴収する」という動詞として定着。collect stamps（切手を集める）、tax collection（税金の徴収）、collect oneself（気持ちを落ち着かせる = 自分を集める）のように使われる。\n\ncollective（集団的な・協同の）という形容詞は collective bargaining（団体交渉）、collective memory（集合的記憶）などの概念語として重要。collection（コレクション・収集品）は美術館・博物館の核心語。",
      derivatives: [
        { word: "collection",     desc: "収集・コレクション・徴収（名詞）" },
        { word: "collector",      desc: "コレクター・収集家" },
        { word: "collective",     desc: "集団的な・協同の（形容詞）" }
      ],
      family: [
        { word: "select",         desc: "選ぶ（se- + legere）" },
        { word: "elect",          desc: "選出する（e- + legere）" },
        { word: "neglect",        desc: "怠る（neg- + legere）" }
      ],
      compounds: [
        { phrase: "collect data",         desc: "データを集める" },
        { phrase: "collective bargaining", desc: "団体交渉（労使交渉）" }
      ]
    },

    "elect": {
      origin: "ラテン語 eligere（外に選び出す）< e- / ex-（外へ）+ legere（集める・選ぶ）。「多くの中から選び取る」という語源で、政治的な「選挙による選出」という意味に特化した。\n\n15世紀に英語に入り「（投票で）選出する・（より好ましいものを）選ぶ」という動詞として定着。elect a president（大統領を選出する）、elect to do（〜することを選ぶ）という二つの用法がある。\n\nelection（選挙）、electorate（有権者）、electoral college（米国の選挙人団）は民主主義の基本語彙として不可欠。",
      derivatives: [
        { word: "election",       desc: "選挙（名詞）" },
        { word: "electoral",      desc: "選挙の・選挙人の（形容詞）" },
        { word: "electorate",     desc: "有権者・選挙区（名詞）" }
      ],
      family: [
        { word: "select",         desc: "選ぶ（se- + legere）" },
        { word: "collect",        desc: "集める（col- + legere）" },
        { word: "neglect",        desc: "怠る（neg- + legere）" },
        { word: "elegant",        desc: "優雅な（e- + legere）" }
      ],
      compounds: [
        { phrase: "general election",    desc: "総選挙" },
        { phrase: "electoral college",   desc: "選挙人団（米国大統領選）" }
      ]
    },

    "neglect": {
      origin: "ラテン語 neglegere（選ばずに放っておく）< neg-（否定）+ legere（集める・選ぶ）。「選んで集めることをしない＝注意を払わない・放置する」というのが語源的な意味。\n\n15世紀に英語に入り「（義務・責任を）怠る・（人・物を）放置する」という動詞と「怠慢・放置」という名詞として定着。neglect one's duties（義務を怠る）、child neglect（育児放棄）のように使われる。\n\nmedical neglect（医療放置）、parental neglect（親の育児放棄）のような文脈では深刻な法的・社会的問題として議論され、abuse（虐待）と並ぶ重要な概念。",
      derivatives: [
        { word: "negligent",      desc: "怠慢な・注意を怠った（形容詞）" },
        { word: "negligence",     desc: "怠慢・過失・ネグリジェンス（名詞）" },
        { word: "negligible",     desc: "無視できるほど小さい（形容詞）" }
      ],
      family: [
        { word: "select",         desc: "選ぶ（se- + legere）" },
        { word: "collect",        desc: "集める（col- + legere）" },
        { word: "elect",          desc: "選出する（e- + legere）" }
      ],
      compounds: [
        { phrase: "child neglect",     desc: "育児放棄・子どもへの放置" },
        { phrase: "criminal negligence", desc: "刑事上の過失" }
      ]
    },

    // ── valere系（強い・価値がある）──
    "value": {
      origin: "ラテン語 valere（強い・価値がある・健康である）< 印欧語根 *wal-（強い）。valere から valuta（通貨価値）が生まれ、古フランス語 value を経て13世紀に英語に入った。\n\n「価値」「金額」「重要性」という三つの主要な意味を持つ多義語。material value（物質的価値）、core values（中核的な価値観）、value for money（コストパフォーマンス）のように使われる。\n\n動詞としては「〜を大切にする・〜を高く評価する」という意味になり、"I value your opinion."（あなたの意見を大切にしています）のように使われる。",
      derivatives: [
        { word: "valuable",     desc: "価値のある・貴重な（形容詞）" },
        { word: "invaluable",   desc: "非常に貴重な（in- + valuable の逆説的強調）" },
        { word: "valuation",    desc: "評価額・鑑定（名詞）" }
      ],
      family: [
        { word: "valid",        desc: "有効な・妥当な（validus 強い）" },
        { word: "evaluate",     desc: "評価する（e- + valere）" },
        { word: "equivalent",   desc: "同等の（aequi- + valere）" },
        { word: "valor",        desc: "勇気・勇敢さ（valor < valere）" }
      ],
      compounds: [
        { phrase: "core values",      desc: "中核的な価値観・コアバリュー" },
        { phrase: "value for money",  desc: "コスパ・費用対効果" }
      ]
    },

    "valid": {
      origin: "ラテン語 validus（強い・力のある・法的に有効な）< valere（強い・健康である）。「十分に力がある＝法的に効力がある・論理的に正当な」というのが語源的な意味。\n\n16世紀に英語に入り「（1）法的に有効な（2）論理的に正当な・根拠のある」という形容詞として定着。valid passport（有効なパスポート）、valid argument（妥当な論拠）のように使われる。\n\nvalidate（有効性を確認する）、validation（検証・有効確認）はIT・テスト・法律で重要語。"Your feelings are valid."（あなたの気持ちは正当だ）のように「認める・正当化する」という心理的文脈でも使われる。",
      derivatives: [
        { word: "validate",      desc: "有効性を確認する・認める（動詞）" },
        { word: "validity",      desc: "有効性・妥当性（名詞）" },
        { word: "invalid",       desc: "無効の（in- + valid）" },
        { word: "validation",    desc: "検証・有効確認・承認（名詞）" }
      ],
      family: [
        { word: "value",         desc: "価値・価値観（valere）" },
        { word: "evaluate",      desc: "評価する（e- + valere）" },
        { word: "equivalent",    desc: "同等の（aequi- + valere）" }
      ],
      compounds: [
        { phrase: "valid argument",   desc: "妥当な論拠・有効な論証" },
        { phrase: "validate input",   desc: "入力値を検証する（IT）" }
      ]
    },

    "evaluate": {
      origin: "フランス語 évaluer（価値を定める）< e-（外へ）+ valuer（価値をつける）< ラテン語 valere（価値がある）。「ある対象の価値・質・量を外に向けて測り出す」というのが語源的な意味。\n\n19世紀に英語に定着し「（客観的に）評価する・査定する」という動詞として幅広く使われる。evaluate performance（業績を評価する）、evaluate risks（リスクを評価する）、evaluate evidence（証拠を評価する）のように、教育・ビジネス・科学・法律のあらゆる分野で重要語。\n\nevaluation（評価・査定）という名詞は、形成的評価（formative evaluation）と総括的評価（summative evaluation）という教育・プログラム評価の重要概念に使われる。",
      derivatives: [
        { word: "evaluation",    desc: "評価・査定・アセスメント（名詞）" },
        { word: "evaluator",     desc: "評価者・審査者（名詞）" }
      ],
      family: [
        { word: "value",         desc: "価値（valere）" },
        { word: "valid",         desc: "有効な（validus）" },
        { word: "equivalent",    desc: "同等の（aequi + valere）" }
      ],
      compounds: [
        { phrase: "performance evaluation",  desc: "業績評価・人事考課" },
        { phrase: "risk evaluation",         desc: "リスク評価" }
      ]
    },

    "equivalent": {
      origin: "ラテン語 aequivalens（等しく価値がある）< aequi-（等しく）+ valere（価値がある・強い）の現在分詞。「同じだけの価値・量・意味を持つ」というのが語源的な意味。\n\n15世紀に英語に入り「同等の・同量の・相当する（形容詞）」と「相当物・等価物（名詞）」として定着。the equivalent of（〜に相当するもの）、fuel equivalent（燃料換算）のように使われる。\n\n数学では equivalence（同値関係）、化学では chemical equivalents（化学当量）として専門的に使われる。",
      derivatives: [
        { word: "equivalence",    desc: "同等性・同値（名詞）" },
        { word: "equivalently",   desc: "同等に・言い換えると（副詞）" }
      ],
      family: [
        { word: "value",          desc: "価値（valere）" },
        { word: "valid",          desc: "有効な（validus）" },
        { word: "evaluate",       desc: "評価する（e- + valere）" },
        { word: "equal",          desc: "等しい（aequalis < aequus）" }
      ],
      compounds: [
        { phrase: "the equivalent of",  desc: "〜に相当するもの・〜の等価物" },
        { phrase: "full-time equivalent", desc: "フルタイム換算（FTE・人員管理）" }
      ]
    },

    // ── liber系（自由）──
    "liberty": {
      origin: "ラテン語 libertas（自由）< liber（自由な）。liber の印欧語根 *leudhero-（自由な・成長する）はギリシャ語 eleutheros（自由な）とも関連する。ローマ法では libertas は奴隷の対義語として「自由人の身分」を指した。\n\n14世紀に英語に入り「（政治的）自由・解放・権利」という意味で定着。the Statue of Liberty（自由の女神像、ニューヨーク）、liberty of speech（言論の自由）は重要な文化・政治的象徴語。\n\ntake the liberty of doing（失礼を承知で〜する）は丁寧な英語表現の定型句。freedom より formal・historical な響きを持つ語として、政治的権利の文脈で使われることが多い。",
      derivatives: [
        { word: "liberties",     desc: "自由（複数形）・行き過ぎた行動" }
      ],
      family: [
        { word: "liberal",       desc: "自由主義的な・惜しみない（liberalis）" },
        { word: "liberate",      desc: "解放する（liberare）" },
        { word: "liberation",    desc: "解放・リベレーション（名詞）" },
        { word: "deliver",       desc: "届ける・解放する（de- + liberare）" }
      ],
      compounds: [
        { phrase: "take the liberty of",  desc: "失礼を承知で〜する" },
        { phrase: "civil liberties",      desc: "市民的自由（言論・集会の自由など）" }
      ]
    },

    "liberal": {
      origin: "ラテン語 liberalis（自由な人にふさわしい・寛大な）< liber（自由な）。古典的には「自由市民にふさわしい教育（liberal arts = 自由7科）」を指した。\n\n15世紀の英語に入り当初は「寛大な・気前のよい」という意味で使われたが、18〜19世紀の政治思想の発展とともに「個人の自由・平等・政府の制限を重視する政治的立場（自由主義）」という意味が中心になった。\n\n現代英語では政治的文脈と「寛大な」という一般的文脈で使い分けられる。a liberal arts education（リベラルアーツ教育）は「特定の職業訓練でなく幅広い教養を育む教育」を指す。",
      derivatives: [
        { word: "liberalism",    desc: "自由主義・リベラリズム（名詞）" },
        { word: "liberally",     desc: "惜しみなく・自由主義的に（副詞）" }
      ],
      family: [
        { word: "liberty",       desc: "自由（libertas）" },
        { word: "liberate",      desc: "解放する（liberare）" },
        { word: "deliver",       desc: "届ける・解放する（de- + liberare）" }
      ],
      compounds: [
        { phrase: "liberal arts",         desc: "教養課程・リベラルアーツ" },
        { phrase: "liberal democracy",    desc: "自由民主主義" }
      ]
    },

    "liberate": {
      origin: "ラテン語 liberare（自由にする・解放する）< liber（自由な）。「束縛や制約から解き放つ」というのが語源的な意味。\n\n17世紀に英語に入り「（抑圧・占領・制約から）解放する・自由にする」という動詞として定着。liberate a country（国を解放する）、liberate oneself from（〜から自分を解放する）のように使われる。\n\nliberation（解放）という名詞は女性解放運動（women's liberation）、民族解放運動（national liberation movement）のように20世紀の社会運動の中心語として使われた。",
      derivatives: [
        { word: "liberation",    desc: "解放・リベレーション（名詞）" },
        { word: "liberator",     desc: "解放者・解放者（名詞）" }
      ],
      family: [
        { word: "liberty",       desc: "自由（libertas）" },
        { word: "liberal",       desc: "自由主義的な（liberalis）" },
        { word: "deliver",       desc: "届ける・解放する（de- + liberare）" }
      ],
      compounds: [
        { phrase: "national liberation",  desc: "民族解放" },
        { phrase: "women's liberation",   desc: "女性解放（運動）" }
      ]
    },

    // ── fides系（信頼・信仰）──
    "confident": {
      origin: "ラテン語 confidens（信頼している）< confidere（完全に信頼する）< con-（強調）+ fidere（信頼する・信じる）< fides（信頼・信仰）。「自分自身に完全に信頼を置いている」というのが語源的な意味で、自己信頼・自信を表す。\n\n16世紀に英語に入り「自信がある・確信している」という形容詞として定着。confident about（〜について自信がある）、confident that（〜であると確信している）が基本構文。\n\nself-confident（自信に満ちた）、confidence（自信・信頼・秘密事項）という派生語も重要。in confidence（内密に）、take someone into one's confidence（〜に打ち明ける）は重要なイディオム。",
      derivatives: [
        { word: "confidence",     desc: "自信・信頼・秘密（名詞）" },
        { word: "confidently",    desc: "自信を持って（副詞）" },
        { word: "self-confident", desc: "自信に満ちた（複合形容詞）" }
      ],
      family: [
        { word: "confide",        desc: "打ち明ける・信頼する（con- + fidere）" },
        { word: "fidelity",       desc: "忠実さ・忠誠（fidelitas < fides）" },
        { word: "fiance",         desc: "婚約者（se fier 信頼する）" },
        { word: "defiant",        desc: "反抗的な（de- 反対 + fidere）" }
      ],
      compounds: [
        { phrase: "in confidence",         desc: "内密に・秘密として" },
        { phrase: "confidence interval",   desc: "信頼区間（統計）" }
      ]
    },

    "confide": {
      origin: "ラテン語 confidere（完全に信頼する）< con-（強調）+ fidere（信頼する・信じる）。「完全に信頼を置いて秘密を打ち明ける」というのが語源的な意味。\n\n16世紀に英語に入り「（秘密・心配を）打ち明ける・（〜に）信頼する」という動詞として定着。confide in someone（〜に打ち明ける・〜を信頼する）という構文が基本。\n\nconfidential（機密の・内密の）という形容詞は「打ち明けられた情報を指す」という語源から来ており、confidential document（機密文書）、confidentiality agreement（守秘義務契約）のように法律・ビジネスで重要語。",
      derivatives: [
        { word: "confidential",    desc: "機密の・内密の（形容詞）" },
        { word: "confidentiality", desc: "機密性・守秘義務（名詞）" }
      ],
      family: [
        { word: "confident",      desc: "自信がある（con- + fidere）" },
        { word: "fidelity",       desc: "忠実さ・忠誠（fides）" },
        { word: "infidel",        desc: "不信心者・異教徒（in- + fidelis）" }
      ],
      compounds: [
        { phrase: "confide in",          desc: "〜に打ち明ける・〜を信頼する" },
        { phrase: "confidentiality agreement", desc: "守秘義務契約（NDA）" }
      ]
    },

    "fidelity": {
      origin: "ラテン語 fidelitas（忠実さ・誠実さ）< fidelis（忠実な）< fides（信頼・信仰）。「信頼に応え続ける誠実さ」というのが語源的な意味。\n\n15世紀に英語に入り「（1）忠実さ・誠実さ（2）（音声・映像の）再現の正確さ（high fidelity = hi-fi）」という二つの主要な意味で使われる。marital fidelity（夫婦間の誠実さ）、brand fidelity（ブランドへの忠誠心）のほか、高音質オーディオを hi-fi（high fidelity）と呼ぶ。\n\ninfidelity（不貞・不誠実）は否定接頭辞 in- を付けた反義語で、特に婚姻関係での不貞を指す。",
      derivatives: [
        { word: "infidelity",     desc: "不誠実・不貞（in- + fidelity）" }
      ],
      family: [
        { word: "confident",      desc: "自信がある（con- + fidere）" },
        { word: "confide",        desc: "打ち明ける（con- + fidere）" },
        { word: "fiancé",         desc: "婚約者（se fier < fides）" },
        { word: "bona fide",      desc: "真正の・誠実な（bona 良い + fides）" }
      ],
      compounds: [
        { phrase: "high fidelity",  desc: "高忠実度・ハイファイ（hi-fi オーディオ）" },
        { phrase: "brand fidelity", desc: "ブランド忠誠心" }
      ]
    },

    // ── varius系（さまざまな）──
    "various": {
      origin: "ラテン語 varius（さまざまな・斑の・多様な）。印欧語根 *wer-（曲がる・変わる）に由来し、色が斑になっているような「変化に富んだ」というのが原義。\n\n14世紀に英語に入り「さまざまな・多様な・いろいろな」という形容詞として定着。"various reasons"（さまざまな理由）、"various options"（いくつかの選択肢）のように、複数の異なるものを列挙する際に使われる。\n\nvary（変化する）、variety（多様性）、variable（変動する）、variation（バリエーション）という関連語を覚えると、「変化・多様性」に関する語彙が体系的に整理できる。",
      derivatives: [
        { word: "variously",     desc: "さまざまな形で・いくつかの面で（副詞）" }
      ],
      family: [
        { word: "vary",          desc: "変化する・異なる（variare）" },
        { word: "variety",       desc: "多様性・種類（varietas）" },
        { word: "variable",      desc: "変動する・変数（variabilis）" },
        { word: "variation",     desc: "変化・バリエーション（variatio）" }
      ],
      compounds: [
        { phrase: "various reasons",   desc: "さまざまな理由" },
        { phrase: "in various ways",   desc: "さまざまな方法で" }
      ]
    },

    "variety": {
      origin: "ラテン語 varietas（多様性・バリエーション）< varius（さまざまな）。「一つのカテゴリー内にある異なる種類・形」を指す名詞として発展した。\n\n15世紀に英語に入り「（1）多様性・変化に富んでいること（2）種類・バリエーション（3）バラエティ（ショー・番組）」という意味で定着。Variety is the spice of life.（変化は人生のスパイス）は英語の有名な格言。\n\na variety of（さまざまな〜）は英語で「複数の異なる種類の〜」を表す頻出表現。品種改良・農業では variety（品種）として使われ、Fuji variety（富士品種）のような用法もある。",
      derivatives: [
        { word: "varied",         desc: "多様な・変化に富んだ（形容詞）" }
      ],
      family: [
        { word: "various",        desc: "さまざまな（varius）" },
        { word: "vary",           desc: "変化する（variare）" },
        { word: "variable",       desc: "変動する・変数（variabilis）" },
        { word: "invariable",     desc: "一定の・変わらない（in- + variabilis）" }
      ],
      compounds: [
        { phrase: "a variety of",          desc: "さまざまな〜・多様な〜" },
        { phrase: "variety show",          desc: "バラエティ番組" }
      ]
    },

    // ── gradus / gressus系残り ──
    "progress": {
      origin: "ラテン語 progressus（前進）< progredi（前に進む）< pro-（前に）+ gradi（歩む）。「前に向かって歩み続ける」というのが語源的な意味で、time の経過とともに前進するイメージ。\n\n15世紀に英語に入り「（前進・改善という）進歩・進展（名詞）」と「進歩する・前進する（動詞）」の両義で使われる。名詞は /ˈproʊɡres/（プロ'グレス）、動詞は /prəˈɡres/（プログレ'ス）と アクセントが異なる。\n\nin progress（進行中）はプロジェクト管理の重要表現。make progress（進歩を遂げる）、technological progress（技術進歩）のように使われる。",
      derivatives: [
        { word: "progressive",    desc: "進歩的な・段階的な（形容詞）" },
        { word: "progression",    desc: "前進・数列・病気の進行（名詞）" }
      ],
      family: [
        { word: "grade",          desc: "等級・段階（gradus）" },
        { word: "graduate",       desc: "卒業する（gradus）" },
        { word: "congress",       desc: "議会（con- 共に + gradi）" },
        { word: "aggressive",     desc: "攻撃的な（ad- + gradi）" }
      ],
      compounds: [
        { phrase: "in progress",      desc: "進行中・作業中" },
        { phrase: "make progress",    desc: "進歩する・前進する" }
      ]
    },

    "aggressive": {
      origin: "ラテン語 aggressivus（攻撃的な）< aggredi（攻撃する・接近する）< ad-（〜へ）+ gradi（歩む）。「相手に向かって歩み寄る・攻めかかる」というのが語源的な意味。\n\n17世紀に英語に入り「（1）攻撃的な・好戦的な（2）積極的な・精力的な」という形容詞として定着。軍事・心理学では「攻撃性（aggression）」という否定的な概念として使われる一方、ビジネスでは aggressive sales strategy（積極的な販売戦略）のように肯定的な意味で使われることもある。\n\nthe United States was accused of aggression（米国が侵略と非難された）のように国際政治語彙としても重要。",
      derivatives: [
        { word: "aggression",     desc: "攻撃性・侵略行為（名詞）" },
        { word: "aggressively",   desc: "攻撃的に・積極的に（副詞）" },
        { word: "aggressor",      desc: "侵略者・攻撃した側（名詞）" }
      ],
      family: [
        { word: "progress",       desc: "進歩（pro- + gradi）" },
        { word: "congress",       desc: "議会（con- + gradi）" },
        { word: "grade",          desc: "等級（gradus）" }
      ],
      compounds: [
        { phrase: "aggressive strategy",   desc: "攻撃的な・積極的な戦略" },
        { phrase: "act of aggression",     desc: "侵略行為" }
      ]
    },

    // ── privus系（個別の・独自の）──
    "private": {
      origin: "ラテン語 privatus（公的でない・個人の・官職から切り離された）< privare（切り離す）< privus（個人の）。「公から切り離された個人の領域」というのが語源的な意味。\n\n15世紀に英語に入り「（1）個人的な・プライベートな（2）公開されていない・秘密の（3）私立の（private school）（4）一般兵士（二等兵）」という多義語として定着。\n\npublic（公的）の対義語として機能する基本語で、private sector（民間部門）、private school（私立学校）、keep something private（内密にしておく）のように使われる。",
      derivatives: [
        { word: "privately",     desc: "個人的に・内密に（副詞）" },
        { word: "privacy",       desc: "プライバシー・個人の秘密（名詞）" }
      ],
      family: [
        { word: "privilege",     desc: "特権（privata lex 個人の法）" },
        { word: "deprive",       desc: "奪う（de- + privare）" },
        { word: "public",        desc: "公共の（対義語）" }
      ],
      compounds: [
        { phrase: "private sector",    desc: "民間部門・民間企業" },
        { phrase: "private school",    desc: "私立学校" },
        { phrase: "privacy policy",    desc: "プライバシーポリシー" }
      ]
    },

    "privilege": {
      origin: "ラテン語 privilegium（特定の個人のための法律）< privus（個別の）+ lex / legis（法律）。「ある個人・集団だけに与えられた特別な法的権利」というのが語源的な意味。\n\n13世紀のフランス語経由で英語に入り「特権・特典・恵まれた地位」という名詞として定着。現代では social privilege（社会的特権 ＝ 生まれや属性によって得られる不公平な優遇）という文脈で重要な社会的議論の語になっている。\n\nprivileged（特権を持った・恵まれた）という形容詞は "It's a privilege to meet you."（お会いできて光栄です）という丁寧な表現にも使われる。",
      derivatives: [
        { word: "privileged",    desc: "特権を持った・恵まれた（形容詞）" }
      ],
      family: [
        { word: "private",       desc: "個人的な（privus）" },
        { word: "deprive",       desc: "奪う（de- + privare）" },
        { word: "legal",         desc: "法的な（lex）" }
      ],
      compounds: [
        { phrase: "social privilege",     desc: "社会的特権・属性による優遇" },
        { phrase: "privilege to do",      desc: "〜できることは光栄です" }
      ]
    },

    "deprive": {
      origin: "ラテン語 deprivare（完全に切り離す・剥奪する）< de-（完全に・離れて）+ privare（切り離す・個別にする）< privus（個別の）。「何かを（人・場所から）完全に切り離して奪う」というのが語源的なイメージ。\n\n14世紀に英語に入り「（権利・必需品・快適さなどを）剥奪する・奪い去る」という動詞として定着。deprive someone of（〜から〜を奪う）という構文が基本。sleep deprivation（睡眠不足）、sensory deprivation（感覚遮断）のような医学・心理学用語でも重要。\n\ndeprived（貧困・不利な立場の）という形容詞は "a deprived neighborhood"（恵まれない地区）のように使われる社会語彙でもある。",
      derivatives: [
        { word: "deprivation",    desc: "剥奪・不足・貧困状態（名詞）" },
        { word: "deprived",       desc: "恵まれない・貧困状態の（形容詞）" }
      ],
      family: [
        { word: "private",        desc: "個人的な（privus）" },
        { word: "privilege",      desc: "特権（privus + lex）" }
      ],
      compounds: [
        { phrase: "sleep deprivation",    desc: "睡眠不足・睡眠剥奪" },
        { phrase: "sensory deprivation",  desc: "感覚遮断" }
      ]
    },

    // ── similare系（似ている）──
    "similar": {
      origin: "ラテン語 similis（似ている・同じような）< sem-（一つの・同じ）の派生形。印欧語根 *sem-（一つ・同じ）はギリシャ語 homoios（同じような）、英語の same（同じ）とも関連する。\n\n16世紀に英語に入り「似ている・同じような」という形容詞として定着。similar to（〜に似ている）が基本構文。学術ライティングでは "in a similar vein"（同じような文脈で）、"similarly"（同様に）という表現が頻出する。\n\nsimilarity（類似性）は分析・比較の際の重要語で、AI のテキスト処理でも cosine similarity（コサイン類似度）として使われる。",
      derivatives: [
        { word: "similarity",    desc: "類似性・共通点（名詞）" },
        { word: "similarly",     desc: "同様に・同じように（副詞）" },
        { word: "dissimilar",    desc: "異なる・似ていない（dis- + similar）" }
      ],
      family: [
        { word: "simulate",      desc: "模倣する・シミュレートする（simulare）" },
        { word: "assimilate",    desc: "同化する・吸収する（ad- + simulare）" },
        { word: "simultaneous",  desc: "同時の（simul 同時に + -aneous）" },
        { word: "same",          desc: "同じ（同じ印欧語根 *sem-）" }
      ],
      compounds: [
        { phrase: "similar to",         desc: "〜に似ている" },
        { phrase: "in a similar vein",  desc: "同様の文脈で・同じような観点で" }
      ]
    },

    "simulate": {
      origin: "ラテン語 simulare（似せる・模倣する・ふりをする）< similis（似ている）。「本物に似せて再現する・模倣する」というのが語源的な意味。\n\n17世紀に英語に入り「（本物のように）模倣する・ふりをする・シミュレートする」という動詞として定着。コンピュータの文脈では simulation（シミュレーション）が航空・宇宙・医療・訓練などあらゆる分野で使われる重要技術語。\n\nflight simulator（フライトシミュレーター）、computer simulation（コンピュータシミュレーション）のように「実際の状況を安全に再現する技術」という意味での使用が現代では最も重要。",
      derivatives: [
        { word: "simulation",    desc: "シミュレーション・模擬（名詞）" },
        { word: "simulator",     desc: "シミュレーター・模擬訓練装置" },
        { word: "simulated",     desc: "模擬の・シミュレートされた（形容詞）" }
      ],
      family: [
        { word: "similar",       desc: "似ている（similis）" },
        { word: "assimilate",    desc: "同化する（ad- + simulare）" },
        { word: "simultaneous",  desc: "同時の（simul）" }
      ],
      compounds: [
        { phrase: "computer simulation",  desc: "コンピュータシミュレーション" },
        { phrase: "flight simulator",     desc: "フライトシミュレーター" }
      ]
    },

    // ── sentire残り・sens系 ──
    "sensitive": {
      origin: "ラテン語 sensitivus（感じることができる）< sentire（感じる）< sensus（感覚）。「感覚に反応できる・感じやすい」というのが語源的な意味。\n\n14世紀に英語に入り「（1）感受性の強い・繊細な（2）敏感な・傷つきやすい（3）機密の・デリケートな（sensitive information = 機密情報）」という多義形容詞として定着。\n\nemotionally sensitive（感情的に繊細な）という心理的な意味のほか、sensitive skin（敏感肌）という皮膚科的な意味、politically sensitive（政治的にデリケートな）という社会的な意味まで幅広く使われる。",
      derivatives: [
        { word: "sensitivity",    desc: "感受性・敏感さ・感度（名詞）" },
        { word: "insensitive",    desc: "無神経な・鈍感な（in- + sensitive）" },
        { word: "sensitize",      desc: "感受性を高める・意識させる（動詞）" }
      ],
      family: [
        { word: "sense",          desc: "感覚・感じる（sentire）" },
        { word: "sensible",       desc: "分別のある・賢明な（sensibilis）" },
        { word: "sentiment",      desc: "感情・感傷（sentimentum）" },
        { word: "consent",        desc: "同意する（con- + sentire）" }
      ],
      compounds: [
        { phrase: "sensitive information",  desc: "機密情報・デリケートな情報" },
        { phrase: "emotionally sensitive",  desc: "感情的に繊細な・傷つきやすい" }
      ]
    },

    "sensible": {
      origin: "ラテン語 sensibilis（感じることができる）< sentire（感じる）+ -ibilis（〜できる）。「感覚で捉えられる＝理性で分かる＝分別のある」という意味が発展した。\n\n14世紀に英語に入り当初は「感覚で知覚できる」という意味だったが、現代では主に「分別のある・賢明な・実際的な（practical）」という意味で使われる。a sensible decision（賢明な決断）、sensible shoes（実用的な靴）のように使われる。\n\n日本語の「センシブル（sensible）」は「感受性の強い（sensitive）」という意味で誤用されることがあるが、英語の sensible は「常識的・実際的」という意味である点に注意が必要。",
      derivatives: [
        { word: "sensibly",       desc: "分別よく・賢明に（副詞）" }
      ],
      family: [
        { word: "sense",          desc: "感覚（sentire）" },
        { word: "sensitive",      desc: "敏感な・繊細な（sensitivus）" },
        { word: "sentiment",      desc: "感情・感傷（sentimentum）" }
      ],
      compounds: [
        { phrase: "sensible decision",  desc: "分別のある決断・賢明な判断" },
        { phrase: "be sensible",        desc: "分別を持って行動する" }
      ]
    },

    "consensus": {
      origin: "ラテン語 consensus（共に感じること・合意）< consentire（共に感じる・同意する）< con-（共に）+ sentire（感じる）。「皆が同じように感じる＝全員一致の意見」というのが語源的な意味。\n\n17世紀に英語に入り「（構成員の）総意・コンセンサス・合意形成」という名詞として定着。reach a consensus（コンセンサスに達する）、by consensus（合意のもとに）のように使われる。\n\n民主主義・組織運営では consensus decision-making（コンセンサス方式の意思決定）が重要な概念で、多数決（majority vote）と対比される「全員が受け入れられる解を探す」プロセスを指す。",
      derivatives: [
        { word: "consensual",     desc: "合意に基づく・双方同意の（形容詞）" }
      ],
      family: [
        { word: "sense",          desc: "感覚（sentire）" },
        { word: "consent",        desc: "同意する（con- + sentire）" },
        { word: "dissent",        desc: "異議を唱える（dis- + sentire）" },
        { word: "sentiment",      desc: "感情・意見（sentimentum）" }
      ],
      compounds: [
        { phrase: "reach a consensus",   desc: "コンセンサスに達する・合意する" },
        { phrase: "by consensus",        desc: "合意のもとに・総意として" }
      ]
    },

    // ── natura系（自然・生まれた状態）──
    "nature": {
      origin: "ラテン語 natura（誕生・自然・本質）< nasci（生まれる）の名詞形 natus。「生まれた状態・万物が生まれながらに持つ本質」というのが語源。「自然（人工でない世界）」と「本性（もともと持っている性質）」の両義を持つ。\n\n13世紀のフランス語経由で英語に入り「（1）自然（環境）（2）本性・天性・性質」という二つの主要な意味で定着。Mother Nature（大自然）、human nature（人間の本性）、by nature（生まれつき）のように使われる。\n\n18世紀の浪漫主義（Romanticism）では nature が理性（reason）に対比する崇高な概念として芸術・哲学の中心に置かれ、現代の環境保護思想の文化的基盤を形成した。",
      derivatives: [
        { word: "natural",       desc: "自然の・生まれつきの（形容詞）" },
        { word: "naturally",     desc: "自然に・当然（副詞）" },
        { word: "unnatural",     desc: "不自然な（un- + natural）" }
      ],
      family: [
        { word: "nation",        desc: "国家・国民（natio 生まれた集団）" },
        { word: "native",        desc: "生まれながらの・原住民の（nativus）" },
        { word: "innate",        desc: "生まれつきの（innatus）" },
        { word: "renaissance",   desc: "ルネサンス・再生（re- + nasci）" }
      ],
      compounds: [
        { phrase: "human nature",   desc: "人間の本性" },
        { phrase: "by nature",      desc: "生まれつき・本質的に" },
        { phrase: "nature vs. nurture", desc: "本性と養育（遺伝か環境かの議論）" }
      ]
    },

    "nation": {
      origin: "ラテン語 natio（生まれた集団・部族）< nasci（生まれる）< natus（生まれた）。「同じ場所・集団から生まれた人々」というのが語源的な意味で、共通の出自・言語・文化を持つ集団を指した。\n\n14世紀に英語に入り「国家・国民・民族集団」という名詞として定着。United Nations（国際連合）、national anthem（国歌）のように政治・外交の基本語。\n\nnation と country と state の区別：nation は「文化・民族的な集団」、country は「地理的な国土・国」、state は「政治的な組織体・国家」というニュアンスの違いがある。",
      derivatives: [
        { word: "national",      desc: "国家の・国民の・全国的な（形容詞）" },
        { word: "nationality",   desc: "国籍・国民性（名詞）" },
        { word: "nationalism",   desc: "ナショナリズム・国家主義（名詞）" }
      ],
      family: [
        { word: "nature",        desc: "自然・本性（natura）" },
        { word: "native",        desc: "生まれながらの（nativus）" },
        { word: "innate",        desc: "生まれつきの（in- + natus）" }
      ],
      compounds: [
        { phrase: "United Nations",   desc: "国際連合（UN）" },
        { phrase: "national identity", desc: "国民的アイデンティティ" }
      ]
    },

    "native": {
      origin: "ラテン語 nativus（生まれながらの・生来の）< natus（生まれた）< nasci（生まれる）。「ある場所・状況に生まれながらに属している」というのが語源的な意味。\n\n14世紀に英語に入り「（1）出生地の・土着の（2）生まれながらの・生来の（3）原産の」という形容詞として定着。native language（母国語）、native speaker（ネイティブスピーカー）、native species（在来種）のように使われる。\n\n名詞としては「その土地に生まれた人・原住民」を指すが、歴史的に植民地支配の文脈で「native」が使われたことから、indigenous people（先住民）という表現が好まれることも多い。",
      derivatives: [
        { word: "nativity",      desc: "誕生・生誕（nativity scene = キリスト降誕のシーン）" }
      ],
      family: [
        { word: "nature",        desc: "自然・本性（natura）" },
        { word: "nation",        desc: "国家・国民（natio）" },
        { word: "innate",        desc: "生まれつきの（in- + natus）" },
        { word: "renaissance",   desc: "再生・ルネサンス（re- + nasci）" }
      ],
      compounds: [
        { phrase: "native speaker",   desc: "ネイティブスピーカー・母国語話者" },
        { phrase: "native language",  desc: "母国語・第一言語" },
        { phrase: "native species",   desc: "在来種（その土地に元来いる種）" }
      ]
    },

    // ── scire系（知る）──
    "science": {
      origin: "ラテン語 scientia（知識・知ること）< scire（知る）。印欧語根 *skei-（切る・区別する）に由来し、「区別することで知る」というのが原義。\n\n14世紀に英語に入り当初は「学識・知識一般」を指したが、17〜18世紀の科学革命以降「観察・実験・論理に基づいた体系的な知識の探求」という現代的な意味に特化した。\n\nGalileo、Newton、Darwin、Einstein らの業績が科学の方法論・概念を確立し、science は「再現可能な実験と論理的推論による知識体系」を指す語として定着。natural science（自然科学）、social science（社会科学）、computer science（計算機科学）のように広く使われる。",
      derivatives: [
        { word: "scientific",    desc: "科学的な（形容詞）" },
        { word: "scientist",     desc: "科学者（名詞）" },
        { word: "scientifically", desc: "科学的に（副詞）" }
      ],
      family: [
        { word: "conscience",    desc: "良心（con- 共に + scientia）" },
        { word: "conscious",     desc: "意識のある（con- + scire）" },
        { word: "omniscient",    desc: "全知の（omni- 全て + scientia）" }
      ],
      compounds: [
        { phrase: "computer science",   desc: "計算機科学・情報工学" },
        { phrase: "scientific method",  desc: "科学的方法・実験的手法" }
      ]
    },

    "conscience": {
      origin: "ラテン語 conscientia（共に知っていること・内なる知識）< con-（共に）+ scientia（知識）< scire（知る）。「自分が何をしているかを内面で共に知っている声＝良心」というのが語源的な意味。\n\n13世紀のフランス語 conscience を経て英語に入り「道徳的に何が正しいかを判断する内なる声・良心」という意味で定着。a guilty conscience（良心の呵責）、follow your conscience（良心に従う）のように使われる。\n\n哲学・宗教・心理学では consciousness（意識）と conscience（良心）を区別することが重要で、consciousness は「覚醒・認識状態」、conscience は「道徳的判断力」を指す。",
      derivatives: [
        { word: "conscientious",  desc: "良心的な・誠実な（形容詞）" },
        { word: "conscientiously", desc: "良心的に・誠実に（副詞）" }
      ],
      family: [
        { word: "science",        desc: "科学・知識（scientia）" },
        { word: "conscious",      desc: "意識のある（con- + scire）" },
        { word: "omniscient",     desc: "全知の（omni- + scientia）" }
      ],
      compounds: [
        { phrase: "guilty conscience",    desc: "良心の呵責・罪悪感" },
        { phrase: "follow your conscience", desc: "良心に従う" }
      ]
    },

    "conscious": {
      origin: "ラテン語 conscius（共に知っている・意識している）< con-（共に）+ scire（知る）。「自分が何をしているか・何を感じているかを内面で知っている」というのが語源的な意味。\n\n17世紀に英語に入り「（1）意識のある・覚醒した（2）〜を意識している・認識している」という形容詞として定着。self-conscious（自意識過剰の）、environmentally conscious（環境意識の高い）のように幅広く使われる。\n\nconsciousness（意識）は哲学・神経科学で「hard problem of consciousness（意識の難問）」として最も未解明な謎の一つであり、AI と意識の問題を含む広大な研究領域を形成している。",
      derivatives: [
        { word: "consciousness",   desc: "意識・覚醒状態（名詞）" },
        { word: "unconscious",     desc: "無意識の・意識のない（un- + conscious）" },
        { word: "self-conscious",  desc: "自意識過剰の・はにかんだ（形容詞）" }
      ],
      family: [
        { word: "science",         desc: "科学・知識（scientia）" },
        { word: "conscience",      desc: "良心（con- + scientia）" },
        { word: "omniscient",      desc: "全知の（omni- + scientia）" }
      ],
      compounds: [
        { phrase: "self-conscious",        desc: "自意識が強い・他人の目を気にする" },
        { phrase: "lose consciousness",    desc: "意識を失う" }
      ]
    },

    // ── cura系（世話をする）──
    "curious": {
      origin: "ラテン語 curiosus（丁寧に世話をする・詮索好きな）< cura（世話・注意・関心）。「細かく注意を払う＝知りたがる」という意味の転義が起きた。\n\n14世紀に英語に入り「（1）知的好奇心の強い・詮索好きな（2）奇妙な・不思議な」という二つの意味で使われる。curiosity（好奇心）is said to kill the cat（猫を殺す）という格言があるが、実際には好奇心は学習・革新の原動力として正面から評価される。\n\n"Curiosity killed the cat, but satisfaction brought it back."（好奇心は猫を殺したが、満足感が猫を生き返らせた）という完全版の格言では、探究することの価値が再評価されている。",
      derivatives: [
        { word: "curiosity",     desc: "好奇心・珍しいもの（名詞）" },
        { word: "curiously",     desc: "好奇心をもって・不思議なことに（副詞）" }
      ],
      family: [
        { word: "accurate",      desc: "正確な（ac- + cura 注意を払った）" },
        { word: "secure",        desc: "安全な・確保する（se- 心配から + cura）" },
        { word: "cure",          desc: "治す・治療（cura 世話）" },
        { word: "care",          desc: "世話・注意（cura の英語形）" }
      ],
      compounds: [
        { phrase: "out of curiosity",      desc: "好奇心から" },
        { phrase: "intellectual curiosity", desc: "知的好奇心" }
      ]
    },

    "accurate": {
      origin: "ラテン語 accuratus（注意深く仕上げた）< accurare（丁寧に世話をする）< ad-（〜へ）+ cura（注意・世話）。「細心の注意を払って仕上げた＝正確な・誤りのない」というのが語源的な意味。\n\n17世紀に英語に入り「（1）正確な・精密な（2）細部まで誤りがない」という形容詞として定着。accurate information（正確な情報）、accurate measurement（精密な測定）のように使われる。\n\naccuracy（精度・正確さ）は科学・工学・医療・コミュニケーションすべてで重要な概念であり、"accuracy vs. precision"（正確さ vs. 精密さ）の区別は科学実験の基本的な概念として教えられる。",
      derivatives: [
        { word: "accuracy",      desc: "正確さ・精度（名詞）" },
        { word: "accurately",    desc: "正確に・精密に（副詞）" },
        { word: "inaccurate",    desc: "不正確な（in- + accurate）" }
      ],
      family: [
        { word: "curious",       desc: "好奇心の強い（curiosus）" },
        { word: "secure",        desc: "安全な（se- + cura）" },
        { word: "cure",          desc: "治す（cura）" }
      ],
      compounds: [
        { phrase: "highly accurate",   desc: "非常に正確な" },
        { phrase: "accurate data",     desc: "正確なデータ" }
      ]
    },

    "secure": {
      origin: "ラテン語 securus（心配のない・安全な）< se-（分離・〜から離れて）+ cura（心配・世話）。「心配から切り離された状態＝安全な・安心した」というのが語源的な意味。\n\n15世紀に英語に入り「安全な・確保された（形容詞）」と「確保する・固定する（動詞）」の両義で使われる。secure a deal（取引を確保する）、secure data（データを保護する）のように使われる。\n\nITセキュリティでは secure connection（安全な接続）、cybersecurity（サイバーセキュリティ）のように最重要分野の基本語。attachment theory（애착理論）では secure attachment（安定した愛着）が健全な対人関係の基盤とされている。",
      derivatives: [
        { word: "security",      desc: "安全・安心・セキュリティ（名詞）" },
        { word: "securely",      desc: "安全に・しっかりと（副詞）" },
        { word: "insecure",      desc: "不安定な・自信のない（in- + secure）" }
      ],
      family: [
        { word: "curious",       desc: "好奇心の強い（cura）" },
        { word: "accurate",      desc: "正確な（ac- + cura）" },
        { word: "care",          desc: "世話・気にする（cura から）" }
      ],
      compounds: [
        { phrase: "secure connection",    desc: "安全な接続（https・VPN等）" },
        { phrase: "national security",    desc: "国家安全保障" }
      ]
    },

    // ── mittere残り（送る）──
    "commit": {
      origin: "ラテン語 committere（共に置く・委ねる・行う）< com-（共に）+ mittere（送る・置く）。「誰かに完全に委ねる・（行為を）実行する」というのが語源的なニュアンス。\n\n14世紀に英語に入り「（1）（犯罪を）犯す（2）（人を）委託する・収容する（3）自分を約束・義務に縛る」という多義動詞として定着。commit a crime（犯罪を犯す）、commit to doing（〜することを誓約する）、commit someone to a hospital（入院させる）のように文脈によって意味が大きく変わる。\n\nGitHub などのバージョン管理システムでは commit（コミット）が「変更を確定・登録する」という重要な技術操作を指す。",
      derivatives: [
        { word: "commitment",    desc: "約束・誓約・献身・義務（名詞）" },
        { word: "committee",     desc: "委員会（committere 委任された人々）" },
        { word: "committed",     desc: "献身的な・誓約した（形容詞）" }
      ],
      family: [
        { word: "mission",       desc: "使命・ミッション（mittere）" },
        { word: "submit",        desc: "提出する（sub- + mittere）" },
        { word: "admit",         desc: "認める（ad- + mittere）" },
        { word: "omit",          desc: "省略する（ob- + mittere）" }
      ],
      compounds: [
        { phrase: "commit to",        desc: "〜に誓約する・専念する" },
        { phrase: "commit a crime",   desc: "犯罪を犯す" }
      ]
    },

    "admit": {
      origin: "ラテン語 admittere（〜の方へ送る・受け入れる）< ad-（〜へ）+ mittere（送る）。「中へ通す・許可して受け入れる」と「認める（情報を中に入れる）」の両義を持つ。\n\n15世紀に英語に入り「（1）入場を許可する・受け入れる（2）（事実・間違いを）認める・白状する」という動詞として定着。admit a mistake（間違いを認める）、admit to a hospital（入院させる・入院を認可する）のように使われる。\n\nadmission（入場許可・入学許可・認めること）という名詞は、college admission（大学入試）、hospital admission（入院）など教育・医療の基本語として重要。",
      derivatives: [
        { word: "admission",     desc: "入場・入学・認めること（名詞）" },
        { word: "admittedly",    desc: "確かに・認めたところで（副詞）" }
      ],
      family: [
        { word: "mission",       desc: "使命（mittere）" },
        { word: "commit",        desc: "犯す・約束する（com- + mittere）" },
        { word: "submit",        desc: "提出する（sub- + mittere）" },
        { word: "omit",          desc: "省略する（ob- + mittere）" }
      ],
      compounds: [
        { phrase: "college admission",   desc: "大学入試・入学審査" },
        { phrase: "admission fee",       desc: "入場料" }
      ]
    },

    "submit": {
      origin: "ラテン語 submittere（下に送る・服従させる）< sub-（下に）+ mittere（送る）。「下の立場から送り出す＝提出する・服従する」というのが語源的な意味。\n\n14世紀に英語に入り「（1）（書類・申請を）提出する（2）主張を提示する（3）服従する」という動詞として定着。submit an application（申請書を提出する）、submit a report（報告書を提出する）のように使われる。\n\nIT の文脈では「フォームの送信（submit a form）」、「プルリクエストの送信（submit a PR）」など最も頻繁に使われる操作語の一つ。",
      derivatives: [
        { word: "submission",    desc: "提出・服従・投稿（名詞）" },
        { word: "submissive",    desc: "服従的な・従順な（形容詞）" }
      ],
      family: [
        { word: "mission",       desc: "使命（mittere）" },
        { word: "commit",        desc: "犯す・約束する（com- + mittere）" },
        { word: "admit",         desc: "認める（ad- + mittere）" },
        { word: "omit",          desc: "省略する（ob- + mittere）" }
      ],
      compounds: [
        { phrase: "submit an application",  desc: "申請書を提出する" },
        { phrase: "submit a form",          desc: "フォームを送信する" }
      ]
    },

    // ── docere系（教える）──
    "educate": {
      origin: "ラテン語 educare（養育する・育て上げる）< e-（外へ）+ ducare / ducere（導く）。「潜在的な能力を外に引き出す」というのが語源的な意味で、「詰め込み」ではなく「引き出す」という教育観が語源に込められている。\n\n15世紀に英語に入り「教育する・訓練する・育てる」という動詞として定着。一般に education は「知識・技術・価値観を伝える組織的な過程」を指す。\n\neducation system（教育制度）、higher education（高等教育）、adult education（成人教育）のように、教育行政・政策の基本語として不可欠。",
      derivatives: [
        { word: "education",     desc: "教育・教育制度（名詞）" },
        { word: "educator",      desc: "教育者・教師（名詞）" },
        { word: "educational",   desc: "教育的な・教育の（形容詞）" }
      ],
      family: [
        { word: "reduce",        desc: "減らす・縮小する（re- + ducere）" },
        { word: "conduct",       desc: "導く・実施する（con- + ducere）" },
        { word: "introduce",     desc: "紹介する（intro- + ducere）" },
        { word: "produce",       desc: "生産する（pro- + ducere）" }
      ],
      compounds: [
        { phrase: "higher education",  desc: "高等教育・大学以上の教育" },
        { phrase: "education system",  desc: "教育制度" }
      ]
    },

    "produce": {
      origin: "ラテン語 producere（前に引き出す・生産する）< pro-（前に）+ ducere（導く）。「前に引き出す＝作り出す・もたらす」というのが語源的な意味。農業・工業では「土地・工場から引き出す」という字義がそのまま「生産する」という意味になった。\n\n15世紀に英語に入り「（1）生産する・製造する（2）演出する・制作する（3）提示する・出す（動詞）」と「農産物・新鮮食料品（名詞、/ˈproʊduːs/）」の両義で使われる。アクセントにより動詞（/prəˈduːs/）と名詞（/ˈproʊduːs/）が区別される。\n\nproduction（生産）、productivity（生産性）はビジネス・経済の核心語。",
      derivatives: [
        { word: "production",    desc: "生産・制作・演出（名詞）" },
        { word: "productive",    desc: "生産的な・実りある（形容詞）" },
        { word: "producer",      desc: "生産者・プロデューサー（名詞）" }
      ],
      family: [
        { word: "reduce",        desc: "減らす（re- + ducere）" },
        { word: "educate",       desc: "教育する（e- + ducere）" },
        { word: "conduct",       desc: "導く・実施する（con- + ducere）" },
        { word: "introduce",     desc: "紹介する（intro- + ducere）" }
      ],
      compounds: [
        { phrase: "mass production",  desc: "大量生産" },
        { phrase: "gross domestic product", desc: "国内総生産（GDP）" }
      ]
    },

    // Batch 18: via系・arch系・syn残り・numer系・vari残り・port残り・dorm系・radic系・qual/quant系

    "obvious": {
      origin: "ラテン語 obvius（道の前にある）< ob-（前に・対して）+ via（道・路）。字義は「道を塞いでいる・道の前に立っている」で、目の前に立ちはだかるほど明白である、というニュアンスで「明らかな」という意味に発展した。\n\n16世紀に英語に入り obvious（明らかな・明白な）として定着。obviously（明らかに）は頻度副詞として現代英語で非常に高頻度。not so obvious（一見明らかでない）という逆用もよく見られる。\n\n語根 via はほかに trivial（三叉路 → ありふれた）、previous（前の道 → 以前の）、deviate（道を外れる）などでも見られる。",
      derivatives: [
        { word: "obviously",    desc: "明らかに（副詞）" },
        { word: "obviousness",  desc: "明白さ（名詞）" }
      ],
      family: [
        { word: "trivial",   desc: "些細な（tri- + via：三叉路 → ありふれた）" },
        { word: "previous",  desc: "以前の（pre- + via：前の道）" },
        { word: "deviate",   desc: "逸脱する（de- + via：道を外れる）" },
        { word: "via",       desc: "～経由で（道・路）" }
      ],
      compounds: [
        { phrase: "it is obvious that", desc: "～は明らかである" },
        { phrase: "state the obvious",  desc: "当たり前のことを言う" }
      ]
    },

    "trivial": {
      origin: "ラテン語 trivium（三叉路・辻）< tri-（三）+ via（道）。辻は人々が集まり話をする場所で、「道端の話＝取るに足らない噂話」という連想から「ありふれた・重要でない」という意味になった。中世の教育では文法・修辞・論理の三学科（trivium）が基礎課程で、四学科（quadrivium）より低いとされたことも語義に影響した。\n\n16世紀に英語に入り trivial（些細な・つまらない）として定着。trivia（雑学・どうでもいい事実）は20世紀のゲーム番組で広まった。「トリビアの泉」もこの語源。\n\nvia（道）を共有する兄弟語: obvious（明白な）、previous（以前の）、deviate（逸脱する）。",
      derivatives: [
        { word: "trivia",      desc: "雑学・トリビア（名詞）" },
        { word: "trivially",   desc: "些細に・取るに足らない方法で（副詞）" },
        { word: "triviality",  desc: "些細なこと・取るに足らなさ（名詞）" },
        { word: "trivialize",  desc: "些細に扱う・軽んじる（動詞）" }
      ],
      family: [
        { word: "obvious",   desc: "明白な（ob- + via）" },
        { word: "previous",  desc: "以前の（pre- + via）" },
        { word: "deviate",   desc: "逸脱する（de- + via）" }
      ],
      compounds: [
        { phrase: "trivial matter",   desc: "些細な問題" },
        { phrase: "trivial pursuit",  desc: "どうでもよい追求；ボードゲーム名" }
      ]
    },

    "previous": {
      origin: "ラテン語 praevius（先行する）< prae-（前に）+ via（道・路）。字義は「道の先を行く・先行している」で、そこから「以前の・前の」という時間的先行を表す形容詞になった。\n\n17世紀に英語に入り previous（前の・以前の）として定着。previously（以前に）は文章をつなぐ副詞として頻出。no previous experience（経験不問）のように求人広告でも多用される。\n\n同根語: obvious（ob- + via → 明白な）、trivial（tri- + via → 些細な）、deviate（de- + via → 逸脱する）。",
      derivatives: [
        { word: "previously",  desc: "以前に・かつて（副詞）" }
      ],
      family: [
        { word: "obvious",   desc: "明白な（ob- + via）" },
        { word: "trivial",   desc: "些細な（tri- + via）" },
        { word: "deviate",   desc: "逸脱する（de- + via）" }
      ],
      compounds: [
        { phrase: "previous experience",  desc: "過去の経験" },
        { phrase: "previously mentioned", desc: "前述の・先に触れた" }
      ]
    },

    "deviate": {
      origin: "ラテン語 deviare（道を外れる）< de-（離れて）+ via（道）。字義は「道から外れる」で、そこから規範・標準・予想からの逸脱を意味するようになった。\n\n17世紀に英語に入り deviate（逸れる・脱線する）として定着。deviation（偏差・逸脱）は統計の standard deviation（標準偏差）として数学・科学で必須語。devious（遠回りの・ずる賢い）は同根で「道を外れた」という原義を保つ。\n\n同根の via 語: obvious（明白な）、trivial（些細な）、previous（以前の）。",
      derivatives: [
        { word: "deviation",  desc: "偏差・逸脱（名詞）" },
        { word: "deviant",    desc: "逸脱した・常軌を逸した（形容詞・名詞）" },
        { word: "devious",    desc: "遠回りの・ずる賢い（形容詞）" }
      ],
      family: [
        { word: "obvious",   desc: "明白な（ob- + via）" },
        { word: "trivial",   desc: "些細な（tri- + via）" },
        { word: "previous",  desc: "以前の（pre- + via）" }
      ],
      compounds: [
        { phrase: "standard deviation",   desc: "標準偏差（統計）" },
        { phrase: "deviate from the norm", desc: "規範から逸脱する" }
      ]
    },

    "archive": {
      origin: "ギリシャ語 arkheion（公共建物・役所）< arkhē（始まり・支配・政府）。もともとは統治の記録・文書を保管する官庁建物を指した。ラテン語 archivum を経由して、記録・文書の保管所という意味になった。\n\n17世紀に英語に入り archive（公文書館・記録保管所）として定着。デジタル化以降、archive はコンピューターのファイル圧縮（zip archive）や古いメールの保管にも使われるようになった。\n\narkhē（始まり・支配）はほかに architect（首席の建設者）、monarchy（一人支配）、anarchy（無支配）、hierarchy（階層的支配）でも見られる。",
      derivatives: [
        { word: "archival",   desc: "記録保管の・資料的な（形容詞）" },
        { word: "archivist",  desc: "記録管理者・文書館員（名詞）" },
        { word: "archiving",  desc: "アーカイブ化・保管（名詞）" }
      ],
      family: [
        { word: "architect",  desc: "建築家（arkhi- + tekton：棟梁）" },
        { word: "monarchy",   desc: "君主制（mono- + arkhē）" },
        { word: "anarchy",    desc: "無政府状態（an- + arkhē）" },
        { word: "hierarchy",  desc: "階層制（hieros + arkhē）" }
      ],
      compounds: [
        { phrase: "national archive",  desc: "国立公文書館" },
        { phrase: "digital archive",   desc: "デジタルアーカイブ" },
        { phrase: "archive footage",   desc: "保管映像・過去の映像素材" }
      ]
    },

    "architect": {
      origin: "ギリシャ語 arkhitekton（首席の建設者・棟梁）< arkhi-（主たる・最高の）+ tekton（大工・建設者）。字義は「大工の頭領・棟梁」で、建物を設計・監督する者を指した。\n\n16世紀にラテン語 architectus 経由で英語に入り architect（建築家・設計者）として定着。比喩的に「ある計画・制度の立案者」という意味でも使われる（the architect of the peace treaty）。\n\ntekton（建設者）から architecture（建築）、tectonic（地殻の・構造の）。arkhi- からは archive（記録保管所）、monarchy（君主制）と同根。",
      derivatives: [
        { word: "architecture",    desc: "建築（学）・構造（名詞）" },
        { word: "architectural",   desc: "建築の・建築学的な（形容詞）" }
      ],
      family: [
        { word: "archive",   desc: "公文書館（arkhi- + arkhē）" },
        { word: "monarchy",  desc: "君主制（mono- + arkhein）" },
        { word: "tectonic",  desc: "地殻構造の（tekton：建設者）" }
      ],
      compounds: [
        { phrase: "software architect",  desc: "ソフトウェア設計者" },
        { phrase: "chief architect",     desc: "主任設計者・最高設計責任者" }
      ]
    },

    "monarchy": {
      origin: "ギリシャ語 monarchia（一人支配）< monos（一人・単独）+ arkhein（支配する）。字義は「一人による支配」で、王・女王が統治する政体を指す。\n\n14世紀に英語に入り monarchy（君主制・王政）として定着。monarch（君主）、monarchist（王政支持者）が派生。constitutional monarchy（立憲君主制）は現代の多くの国で採用されている政治形態。\n\narkhein から: anarchy（無支配）、hierarchy（階層的支配）、archive（公文書館）、architect（設計者）。monos から: monopoly（独占）、monotone（単調）、monologue（独白）。",
      derivatives: [
        { word: "monarch",      desc: "君主・王・女王（名詞）" },
        { word: "monarchist",   desc: "王政支持者（名詞）" },
        { word: "monarchical",  desc: "君主制の（形容詞）" }
      ],
      family: [
        { word: "anarchy",    desc: "無政府状態（an- + arkhein）" },
        { word: "hierarchy",  desc: "階層制（hieros + arkhein）" },
        { word: "monopoly",   desc: "独占（mono- + polein）" },
        { word: "monologue",  desc: "独白（mono- + logos）" }
      ],
      compounds: [
        { phrase: "constitutional monarchy", desc: "立憲君主制" },
        { phrase: "absolute monarchy",       desc: "絶対君主制" }
      ]
    },

    "anarchy": {
      origin: "ギリシャ語 anarkhia（支配なし）< an-（否定）+ arkhein（支配する）。字義は「指導者なし・権威なし」で、政治的権威や政府のない状態を意味する。アナーキズム（無政府主義）の哲学的・政治的運動にも使われる。\n\n16世紀に英語に入り anarchy（無政府状態・混乱）として定着。日常語では「社会的混乱・大混乱」の意味でも使われる（The school was in anarchy）。\n\n否定接頭辞 an- は他に: anonymous（無名）、anemia（貧血：血なし）、anesthetic（麻酔：感覚なし）。",
      derivatives: [
        { word: "anarchist",  desc: "無政府主義者（名詞）" },
        { word: "anarchism",  desc: "無政府主義（名詞）" },
        { word: "anarchic",   desc: "無政府的な・混乱した（形容詞）" }
      ],
      family: [
        { word: "monarchy",   desc: "君主制（mono- + arkhein）" },
        { word: "hierarchy",  desc: "階層制（hieros + arkhein）" },
        { word: "archive",    desc: "公文書館（arkhē）" },
        { word: "anonymous",  desc: "匿名の（an- + onyma：名前なし）" }
      ],
      compounds: [
        { phrase: "political anarchy",  desc: "政治的無政府状態" },
        { phrase: "fall into anarchy",  desc: "無政府状態に陥る" }
      ]
    },

    "hierarchy": {
      origin: "ギリシャ語 hierarchia（聖職者の統治）< hieros（聖なる）+ arkhein（支配する）。もともとはキリスト教の聖職者の位階制度を指した語で、天使の階層（天使階層論）にも使われた。\n\n14世紀に英語に入り hierarchy（位階・階層制度）として定着。現代では宗教に限らず、会社組織（corporate hierarchy）、分類体系（taxonomic hierarchy）、コンピューターのファイルシステムなど広く使われる。\n\nhieros（聖なる）から hieroglyphics（聖なる刻み文字 = 象形文字）。arkhein から monarchy, anarchy, archive と同根。",
      derivatives: [
        { word: "hierarchical",   desc: "階層的な・序列のある（形容詞）" },
        { word: "hierarchically", desc: "階層的に（副詞）" }
      ],
      family: [
        { word: "monarchy",       desc: "君主制（mono- + arkhein）" },
        { word: "anarchy",        desc: "無政府状態（an- + arkhein）" },
        { word: "hieroglyphics",  desc: "象形文字（hieros + glyphein）" }
      ],
      compounds: [
        { phrase: "corporate hierarchy",  desc: "企業内の組織階層" },
        { phrase: "social hierarchy",     desc: "社会的序列" }
      ]
    },

    "synthesis": {
      origin: "ギリシャ語 synthesis（合成・組み合わせ）< syn-（共に・一緒に）+ tithenai（置く）。字義は「一緒に置く」で、複数の要素を組み合わせて新しいものを作ることを指す。\n\n17世紀に英語に入り synthesis（統合・合成）として定着。化学では chemical synthesis（化学合成）、哲学では thesis→antithesis→synthesis（弁証法の三段論法）として中心的概念。synthesize（合成する）、synthesizer（シンセサイザー：音を合成する機器）が派生。\n\ntithenai（置く）から theme（主題：置かれたもの）、thesis（論題）、antithesis（対立命題）、parenthesis（挿入語句）と同根。",
      derivatives: [
        { word: "synthesize",   desc: "合成する・統合する（動詞）" },
        { word: "synthesizer",  desc: "シンセサイザー・合成装置（名詞）" },
        { word: "synthetic",    desc: "合成の・人工的な（形容詞）" }
      ],
      family: [
        { word: "thesis",       desc: "論題・学位論文（tithenai）" },
        { word: "antithesis",   desc: "対立命題・正反対（anti- + tithenai）" },
        { word: "parenthesis",  desc: "挿入句・括弧（para- + en- + tithenai）" },
        { word: "sympathy",     desc: "共感（syn- + pathos）" }
      ],
      compounds: [
        { phrase: "chemical synthesis",  desc: "化学合成" },
        { phrase: "synthesis report",    desc: "統合報告書" }
      ]
    },

    "syntax": {
      origin: "ギリシャ語 syntaxis（配列・整列）< syn-（共に）+ tassein（配列する・整える）。字義は「一緒に配列すること」で、文の中での単語の配置・構造規則を指す。\n\n16世紀に英語に入り syntax（統語論・構文）として定着。言語学では英語の語順規則の体系を指し、コンピューターサイエンスでは programming syntax（プログラミング構文）として頻出。syntax error（構文エラー）はプログラマーが日常的に遭遇する用語。\n\ntassein（配列する）から tactics（戦術：部隊の配置）、taxonomy（分類学：配列の法則）。syn- から synthesis（合成）、synonym（同義語）と同根。",
      derivatives: [
        { word: "syntactic",    desc: "構文の・統語論的な（形容詞）" },
        { word: "syntactically", desc: "構文的に（副詞）" }
      ],
      family: [
        { word: "synthesis",  desc: "合成（syn- + tithenai）" },
        { word: "tactics",    desc: "戦術（tassein：配置する）" },
        { word: "taxonomy",   desc: "分類学（taxis + nomos）" },
        { word: "synonym",    desc: "同義語（syn- + onoma）" }
      ],
      compounds: [
        { phrase: "syntax error",    desc: "構文エラー（プログラミング）" },
        { phrase: "sentence syntax", desc: "文の構文" }
      ]
    },

    "numerous": {
      origin: "ラテン語 numerosus（数多い）< numerus（数）。numerus は「数・量」を意味し、そこから「数が多い・おびただしい」という形容詞 numerosus が生まれた。古フランス語を経由して英語に入った。\n\n15世紀に英語に入り numerous（多数の・無数の）として定着。numerous occasions（何度も）、numerous studies（多くの研究）のように学術文書でも頻出。「たくさんの」を表す語の中でやや改まったニュアンスがある。\n\nnumerus 系語: number（数）、enumerate（列挙する）、innumerable（数えられないほど多い）、numeral（数詞）、numerical（数値的な）。",
      derivatives: [
        { word: "numerously",    desc: "多数で（副詞）" },
        { word: "numeral",       desc: "数字・数詞（名詞）" },
        { word: "numerical",     desc: "数値的な・数字の（形容詞）" },
        { word: "numerically",   desc: "数値的に（副詞）" }
      ],
      family: [
        { word: "number",       desc: "数・番号（numerus）" },
        { word: "enumerate",    desc: "列挙する（e- + numerare）" },
        { word: "innumerable",  desc: "無数の（in- + numerabilis）" }
      ],
      compounds: [
        { phrase: "on numerous occasions", desc: "何度も・度々" },
        { phrase: "numerous studies",      desc: "多くの研究・多数の研究" }
      ]
    },

    "enumerate": {
      origin: "ラテン語 enumerare（数え上げる）< e-（外へ・完全に）+ numerare（数える）< numerus（数）。字義は「全部数え出す」で、リストアップする・列挙するという意味になった。\n\n16世紀に英語に入り enumerate（列挙する・数え上げる）として定着。学術・法律文書で「具体的に列挙する」という正式な動詞として頻用。プログラミングでは enumeration type（列挙型）、enum として型定義に使われる。\n\nnumerus 系: numerous（多数の）、number、innumerable、numeral。e-（完全に）系: eliminate（取り除く）、eradicate（根絶する）。",
      derivatives: [
        { word: "enumeration",  desc: "列挙・数え上げ（名詞）" },
        { word: "enumerator",   desc: "列挙する人・列挙子（名詞）" },
        { word: "enumerable",   desc: "列挙できる・数えられる（形容詞）" }
      ],
      family: [
        { word: "numerous",     desc: "多数の（numerosus）" },
        { word: "number",       desc: "数・番号（numerus）" },
        { word: "innumerable",  desc: "無数の（in- + numerabilis）" }
      ],
      compounds: [
        { phrase: "enumerate the reasons", desc: "理由を列挙する" },
        { phrase: "enumerate options",     desc: "選択肢を数え上げる" }
      ]
    },

    "innumerable": {
      origin: "ラテン語 innumerabilis（数えられない）< in-（否定）+ numerabilis（数えられる）< numerus（数）。「数えるには多すぎる」という意味で、無数・おびただしい数を誇張的に表す形容詞。\n\n14世紀に英語に入り innumerable（無数の・数えきれない）として定着。文語的・修辞的な表現として使われ、countless とほぼ同義。詩や文学で好まれる格調ある語。\n\nin-（否定）系: incredible（信じられない）、invisible（見えない）、inevitable（避けられない）。numerus 系: numerous, enumerate, number。",
      derivatives: [
        { word: "innumerably",     desc: "数えきれないほど（副詞）" },
        { word: "innumerability",  desc: "無数であること（名詞）" }
      ],
      family: [
        { word: "numerous",    desc: "多数の（numerosus）" },
        { word: "enumerate",   desc: "列挙する（e- + numerare）" },
        { word: "countless",   desc: "無数の（count + less）" },
        { word: "myriad",      desc: "無数の（ギリシャ語 myrioi = 1万）" }
      ],
      compounds: [
        { phrase: "innumerable times",         desc: "数えきれないほど何度も" },
        { phrase: "innumerable possibilities", desc: "無数の可能性" }
      ]
    },

    "number": {
      origin: "ラテン語 numerus（数）< 印欧祖語 nem-（取る・分配する）。numerus は「取り分・割り当て・数」を意味し、古フランス語 nombre を経由して中英語に入った。\n\n14世紀ごろ英語に入り number（数・番号・数える）として定着。英語で最もよく使われる語の一つ。mathematics では数学的量を指し、grammar では文法的数（単数・複数）を、音楽では「曲目・番号」を指す多義語。\n\nnumerus 系: numerous（多数の）、enumerate（列挙する）、innumerable（無数の）、numeral（数詞）、numerical（数値的な）。",
      derivatives: [
        { word: "numeral",    desc: "数字・数詞（名詞）" },
        { word: "numerical",  desc: "数値的な（形容詞）" },
        { word: "numerous",   desc: "多数の（形容詞）" }
      ],
      family: [
        { word: "numerous",    desc: "多数の（numerosus）" },
        { word: "enumerate",   desc: "列挙する（e- + numerare）" },
        { word: "innumerable", desc: "無数の（in- + numerabilis）" }
      ],
      compounds: [
        { phrase: "phone number",     desc: "電話番号" },
        { phrase: "number one",       desc: "第一・最重要" },
        { phrase: "by the numbers",   desc: "手順通りに・杓子定規に" }
      ]
    },

    "vary": {
      origin: "ラテン語 variare（変化させる・多様にする）< varius（様々な・まだら模様の）。varius は「変化に富む・多種多様な」を意味し、動詞形 variare から英語の vary が来た。\n\n14世紀に英語に入り vary（変化する・異なる）として定着。results vary（結果は異なる）、prices vary（価格は変動する）のように学術・ビジネス文書で頻出。opinions vary（意見は様々だ）のように意見の多様性を示す表現でも使われる。\n\nvarius 系: various（様々な）、variety（多様性）、variable（変動する・変数）、variation（変奏・変化）、variant（変異体）。",
      derivatives: [
        { word: "variation",  desc: "変化・変奏・変異（名詞）" },
        { word: "variant",    desc: "変異体・変形（名詞・形容詞）" },
        { word: "variable",   desc: "変動する・変数（形容詞・名詞）" },
        { word: "varying",    desc: "様々な・変化する（形容詞）" }
      ],
      family: [
        { word: "various",   desc: "様々な（varius）" },
        { word: "variety",   desc: "多様性（varietas）" },
        { word: "variable",  desc: "変数（variabilis）" },
        { word: "diverse",   desc: "多様な（di- + vertere）" }
      ],
      compounds: [
        { phrase: "vary widely",     desc: "大きく異なる" },
        { phrase: "vary by region",  desc: "地域によって異なる" }
      ]
    },

    "variable": {
      origin: "ラテン語 variabilis（変化しやすい）< variare（変化する）< varius（様々な）。形容詞として「変化しやすい・一定でない」、名詞として「変数」という意味を持つ。\n\n15世紀に英語に入り variable（変動する・変数）として定着。数学・統計では independent variable（独立変数）、dependent variable（従属変数）は必須語彙。プログラミングでも変数を variable と呼ぶ。気候・経済分野では「変動要因」として頻出。\n\nvarius 系: vary（変化する）、various（様々な）、variety（多様性）、variation（変化）。対義語: constant（定数・一定の）、invariable（不変の）。",
      derivatives: [
        { word: "variability",  desc: "変動性・可変性（名詞）" },
        { word: "variably",     desc: "変動して・まちまちに（副詞）" },
        { word: "invariable",   desc: "不変の・一定の（形容詞）" }
      ],
      family: [
        { word: "vary",      desc: "変化する（variare）" },
        { word: "various",   desc: "様々な（varius）" },
        { word: "variety",   desc: "多様性（varietas）" },
        { word: "constant",  desc: "定数・一定の（constare）" }
      ],
      compounds: [
        { phrase: "independent variable",  desc: "独立変数（統計・数学）" },
        { phrase: "variable rate",         desc: "変動金利" }
      ]
    },

    "portable": {
      origin: "ラテン語 portabilis（持ち運べる）< portare（運ぶ・持つ）。portare は「手で運ぶ」という動作を表し、そこから「持ち運びできる」という形容詞 portabilis が生まれた。\n\n15世紀に英語に入り portable（持ち運びできる）として定着。20世紀後半、portable computer（ポータブルコンピュータ）から laptop や smartphone へと概念が進化した。コンピューターサイエンスでは「移植性のある・別環境でも動くコード」という意味でも使われる（portable code）。\n\nportare 系: transport（運ぶ）、import（輸入する）、export（輸出する）、report（報告する）、support（支える）、porter（荷物運び）、port（港：船が荷を運び込む場所）。",
      derivatives: [
        { word: "portability",  desc: "携帯性・移植性（名詞）" },
        { word: "portage",      desc: "陸上輸送・荷物運搬（名詞）" }
      ],
      family: [
        { word: "transport",  desc: "輸送する（trans- + portare）" },
        { word: "import",     desc: "輸入する（im- + portare）" },
        { word: "export",     desc: "輸出する（ex- + portare）" },
        { word: "support",    desc: "支える（sub- + portare）" },
        { word: "porter",     desc: "荷物運び・ポーター（portare）" }
      ],
      compounds: [
        { phrase: "portable device",   desc: "携帯デバイス" },
        { phrase: "portable charger",  desc: "モバイルバッテリー" }
      ]
    },

    "dormitory": {
      origin: "ラテン語 dormitorium（寝室・就寝場所）< dormire（眠る）。dormire から「眠るための場所」という名詞が作られ、大人数が共同で就寝する施設を指すようになった。\n\n15世紀に英語に入り dormitory（寮・共同宿舎）として定着。大学の学生寮（college dormitory / dorm）として最もよく使われる。英国では public school の寄宿舎を指すことも多い。口語では dorm と短縮される。\n\ndormire 系: dormant（休眠中の）、dormouse（ヤマネ：眠るネズミ）、dormer window（屋根窓：もともと寝室の窓）。",
      derivatives: [
        { word: "dorm",  desc: "寮（dormitory の短縮形）" }
      ],
      family: [
        { word: "dormant",    desc: "休眠中の（dormire）" },
        { word: "dormouse",   desc: "ヤマネ（dorm- + mouse）" },
        { word: "hibernate",  desc: "冬眠する（hiems：冬 + dormire 的概念）" }
      ],
      compounds: [
        { phrase: "college dormitory",  desc: "大学寮" },
        { phrase: "dormitory room",     desc: "寮の部屋" }
      ]
    },

    "dormant": {
      origin: "ラテン語 dormire（眠る）の現在分詞形から、古フランス語 dormant（眠っている）を経由して英語に入った。「活動を停止して休眠している・潜在的な」という意味で使われる。\n\n15世紀に英語に入り dormant（休眠中の・不活発な）として定着。火山の dormant volcano（休火山）、植物の dormant seeds（休眠種子）、ウイルスの dormant infection（潜伏感染）など科学用語として重要。ビジネスでも dormant account（休眠口座）で使われる。\n\ndormire 系: dormitory（寮）、dormouse（ヤマネ）、dormer window（屋根窓）。latent（潜在的な）、inactive（不活発な）、quiescent（静止した）が類義語。",
      derivatives: [
        { word: "dormancy",  desc: "休眠（状態）（名詞）" }
      ],
      family: [
        { word: "dormitory",  desc: "寮・共同宿舎（dormire）" },
        { word: "latent",     desc: "潜在的な（latere：隠れる）" },
        { word: "inactive",   desc: "不活発な（in- + active）" }
      ],
      compounds: [
        { phrase: "dormant volcano",  desc: "休火山" },
        { phrase: "dormant account",  desc: "休眠口座（銀行）" },
        { phrase: "lie dormant",      desc: "休眠状態にある" }
      ]
    },

    "radical": {
      origin: "ラテン語 radicalis（根に関する）< radix（根・語根）。字義は「根からの・根本的な」で、そこから「根本的な変革・過激な」という政治的意味に発展した。化学では不対電子を持つ free radical（フリーラジカル・活性酸素）の意味でも重要。\n\n14世紀に英語に入り radical（根本的な・急進的な）として定着。数学では radical sign（根号・√）、化学では free radical、政治では radical reform（根本的改革）と分野を超えて使われる多義語。\n\nradix 系: radish（ラディッシュ：根菜）、eradicate（根絶する：根から取り除く）、radicle（幼根）。同義語: fundamental（基本的な）、extreme（過激な）。",
      derivatives: [
        { word: "radically",   desc: "根本的に・急進的に（副詞）" },
        { word: "radicalism",  desc: "急進主義（名詞）" },
        { word: "radicalize",  desc: "急進化させる（動詞）" }
      ],
      family: [
        { word: "eradicate",  desc: "根絶する（e- + radix）" },
        { word: "radish",     desc: "ラディッシュ・ラディ（radix：根菜）" },
        { word: "root",       desc: "根（radix の意味的対応語）" }
      ],
      compounds: [
        { phrase: "radical change",  desc: "抜本的な変革" },
        { phrase: "free radical",    desc: "フリーラジカル（化学・医学）" }
      ]
    },

    "eradicate": {
      origin: "ラテン語 eradicare（根こそぎにする）< e-（外へ・完全に）+ radix（根）。字義は「根から引き抜く・根絶する」で、問題・病気・悪習などを完全に取り除くという強い意味を持つ。\n\n16世紀に英語に入り eradicate（根絶する・撲滅する）として定着。eradicate poverty（貧困をなくす）、eradicate disease（病気を根絶する）のように政策・公衆衛生文書で頻出。eliminate より「完全に取り除く」という強い意味合いがある。\n\nradix 系: radical（根本的な）、radish（ラディッシュ）。e-（外へ）系: eject（追い出す）、eliminate（取り除く）、erupt（噴出する）。",
      derivatives: [
        { word: "eradication",  desc: "根絶・撲滅（名詞）" },
        { word: "eradicable",   desc: "根絶できる（形容詞）" },
        { word: "ineradicable", desc: "根絶できない・消しがたい（形容詞）" }
      ],
      family: [
        { word: "radical",     desc: "根本的な（radix）" },
        { word: "radish",      desc: "ラディッシュ（radix：根菜）" },
        { word: "eliminate",   desc: "取り除く（e- + limen）" },
        { word: "exterminate", desc: "根絶する・駆除する（ex- + terminus）" }
      ],
      compounds: [
        { phrase: "eradicate poverty",   desc: "貧困を根絶する" },
        { phrase: "eradicate disease",   desc: "疾病を根絶する" },
        { phrase: "eradication campaign", desc: "撲滅キャンペーン" }
      ]
    },

    "quality": {
      origin: "ラテン語 qualitas（性質・特性）< qualis（どのような種類の）。qualis は疑問詞 quis（誰）に由来し、「何の種類か」という本質的な問いから「性質・品質」という概念になった。キケロが哲学用語として作った語とされる。\n\n14世紀に英語に入り quality（品質・特性・資質）として定着。quality control（品質管理）、quality of life（生活の質）など現代語として非常に高頻度。形容詞的に quality product（高品質製品）とも使われる。\n\nqualis 系: qualify（資格を得る）、qualification（資格）、disqualify（失格にする）。量を意味する quantity との対比が重要: quality（質）vs. quantity（量）。",
      derivatives: [
        { word: "qualify",        desc: "資格を得る・条件を満たす（動詞）" },
        { word: "qualified",      desc: "資格のある・限定された（形容詞）" },
        { word: "qualitative",    desc: "質的な・定性的な（形容詞）" },
        { word: "qualification",  desc: "資格・条件（名詞）" }
      ],
      family: [
        { word: "qualify",    desc: "資格を得る（qualis）" },
        { word: "quantity",   desc: "量・数量（quantus）" },
        { word: "character",  desc: "性格・特性（kharaktēr）" }
      ],
      compounds: [
        { phrase: "quality control",  desc: "品質管理" },
        { phrase: "quality of life",  desc: "生活の質（QOL）" },
        { phrase: "high quality",     desc: "高品質" }
      ]
    },

    "quantity": {
      origin: "ラテン語 quantitas（量・多少）< quantus（どれほどの）。quantus は疑問詞で「いくつ・どれほど」を尋ね、そこから「測定可能な量」という名詞が作られた。quality（質）と対をなす概念として中世哲学でも重要だった。\n\n14世紀に英語に入り quantity（量・数量）として定着。quantity production（量産）、unknown quantity（未知数：何をするかわからない人）、quantity surveyor（積算士）など幅広く使われる。物理学では physical quantity（物理量）として基本概念。\n\nquantus 系: quantify（定量化する）、quantitative（量的な）、quantum（量子：最小量）。質と量の対比: quality vs. quantity。",
      derivatives: [
        { word: "quantify",       desc: "定量化する・数値化する（動詞）" },
        { word: "quantitative",   desc: "量的な・定量的な（形容詞）" },
        { word: "quantum",        desc: "量子・最小量（名詞）" },
        { word: "quantification", desc: "定量化・数値化（名詞）" }
      ],
      family: [
        { word: "quality",   desc: "質・品質（qualitas）" },
        { word: "quantum",   desc: "量子（quantus）" },
        { word: "amount",    desc: "量・総計（ad- + mons：山）" }
      ],
      compounds: [
        { phrase: "quantity of goods",  desc: "商品の量・数量" },
        { phrase: "unknown quantity",   desc: "未知数（の人）" },
        { phrase: "quality vs quantity", desc: "質対量" }
      ]
    },

    // Batch 19: fac/fect系・spec残り・tend/tens系・form残り・pos残り・leg/lect残り・ced/cede系

    "effect": {
      origin: "ラテン語 effectus（達成・結果）< ex-（外へ・完全に）+ facere（作る・する）。字義は「完全に作り上げたもの → 結果・成果」。cause（原因）と effect（結果）は哲学・科学の基本ペア。\n\n14世紀に英語に入り effect（効果・結果・影響）として定着。名詞用法（in effect: 実質上）が圧倒的に多いが、動詞（to effect a change: 変化をもたらす）としても使われる。affect（影響を与える）との混同に注意: affect は動詞、effect は名詞が基本。\n\nfacere 系: affect（影響する）、infect（感染させる）、perfect（完璧な）、defect（欠陥）、efficient（効率的な）。",
      derivatives: [
        { word: "effective",      desc: "効果的な・有効な（形容詞）" },
        { word: "effectively",    desc: "効果的に・実質的に（副詞）" },
        { word: "effectiveness",  desc: "効果・有効性（名詞）" },
        { word: "effectual",      desc: "効果のある・有効な（形容詞）" }
      ],
      family: [
        { word: "affect",     desc: "影響する（ad- + facere）" },
        { word: "infect",     desc: "感染させる（in- + facere）" },
        { word: "perfect",    desc: "完璧な（per- + facere）" },
        { word: "defect",     desc: "欠陥（de- + facere）" },
        { word: "efficient",  desc: "効率的な（ex- + facere）" }
      ],
      compounds: [
        { phrase: "side effect",    desc: "副作用・副次的効果" },
        { phrase: "in effect",      desc: "実質上・事実上" },
        { phrase: "take effect",    desc: "効力を生じる・発効する" }
      ]
    },

    "affect": {
      origin: "ラテン語 afficere（影響を及ぼす）< ad-（～に対して）+ facere（作る・する）。字義は「ある対象に対して作用する」で、「影響を与える」という動詞と「感情・情動」という名詞（心理学）の両方に使われる。\n\n14世紀に英語に入り affect（影響を与える）として定着。effect（影響・結果）との混同が頻出: affect は動詞「影響する」、effect は名詞「結果」が基本区別。affection（愛情・親しみ）、affectionate（愛情深い）は情動的な意味で派生。\n\nfacere 系: effect（結果）、infect（感染させる）、perfect（完璧な）、defect（欠陥）、efficient（効率的な）。",
      derivatives: [
        { word: "affection",      desc: "愛情・親しみ（名詞）" },
        { word: "affectionate",   desc: "愛情深い・優しい（形容詞）" },
        { word: "affective",      desc: "感情的な・情動の（形容詞）" },
        { word: "unaffected",     desc: "影響を受けない・素直な（形容詞）" }
      ],
      family: [
        { word: "effect",     desc: "結果・効果（ex- + facere）" },
        { word: "infect",     desc: "感染させる（in- + facere）" },
        { word: "perfect",    desc: "完璧な（per- + facere）" },
        { word: "defect",     desc: "欠陥（de- + facere）" }
      ],
      compounds: [
        { phrase: "affect deeply",       desc: "深く影響する" },
        { phrase: "affective disorder",  desc: "感情障害（医学）" }
      ]
    },

    "infect": {
      origin: "ラテン語 inficere（染める・汚染する）< in-（中へ）+ facere（作る）。字義は「（悪いものを）中に作り込む → 染める・汚染する」。医学的には病原体が体内に侵入し病気を引き起こすこと。\n\n15世紀に英語に入り infect（感染させる・汚染する）として定着。コンピューターウイルスの感染（infect a computer）、精神的な影響（His enthusiasm infected everyone）にも使われる広義語。\n\nfacere 系: effect（結果）、affect（影響する）、perfect（完璧な）、defect（欠陥）。in-（中へ）系: involve（巻き込む）、inhabit（住む）、inject（注入する）。",
      derivatives: [
        { word: "infection",    desc: "感染・感染症（名詞）" },
        { word: "infectious",   desc: "感染性の・伝染する（形容詞）" },
        { word: "infected",     desc: "感染した（形容詞）" },
        { word: "disinfect",    desc: "消毒する（dis- + infect）" }
      ],
      family: [
        { word: "effect",      desc: "結果（ex- + facere）" },
        { word: "affect",      desc: "影響する（ad- + facere）" },
        { word: "contagious",  desc: "接触感染の（contagium）" }
      ],
      compounds: [
        { phrase: "infectious disease",   desc: "感染症" },
        { phrase: "highly infectious",    desc: "感染力が非常に強い" },
        { phrase: "infect with a virus",  desc: "ウイルスに感染させる" }
      ]
    },

    "perfect": {
      origin: "ラテン語 perfectus（完成した）< per-（完全に・徹底的に）+ facere（作る・する）。字義は「完全に作り上げた・完成した」で、欠けるところのない状態を指す。\n\n14世紀に英語に入り perfect（完璧な・完全な）として定着。動詞（to perfect a skill: 技術を磨く）と形容詞（perfect score: 満点）の両用がある。文法では perfect tense（完了形）として動詞の完了を表す時制名称にも使われる。\n\nper-（完全に）系: percent（パーセント）、persuade（説得する）、permanent（永続的な）。facere 系: effect, affect, infect, defect, efficient。",
      derivatives: [
        { word: "perfection",     desc: "完璧・完全（名詞）" },
        { word: "perfectly",      desc: "完璧に・まったく（副詞）" },
        { word: "perfectionist",  desc: "完璧主義者（名詞）" },
        { word: "imperfect",      desc: "不完全な（形容詞）" }
      ],
      family: [
        { word: "effect",     desc: "結果（ex- + facere）" },
        { word: "affect",     desc: "影響する（ad- + facere）" },
        { word: "infect",     desc: "感染させる（in- + facere）" },
        { word: "defect",     desc: "欠陥（de- + facere）" }
      ],
      compounds: [
        { phrase: "perfect score",         desc: "満点・完璧な得点" },
        { phrase: "in perfect condition",  desc: "完璧な状態で" },
        { phrase: "perfect tense",         desc: "完了形（文法）" }
      ]
    },

    "defect": {
      origin: "ラテン語 defectus（欠乏・失敗）< de-（離れて・下に）+ facere（作る）。字義は「完成から外れた状態 → 欠陥・不足」。名詞として「欠陥・欠点」、動詞として「脱走する・離反する」の両義を持つ。\n\n15世紀に英語に入り defect（欠陥・欠点）として定着。製品の欠陥（manufacturing defect）、身体的欠陥（birth defect）のほか、動詞 defect（離反する：冷戦時代の亡命者に使われた）も重要。\n\nfacere 系: effect（結果）、affect（影響する）、infect（感染させる）、perfect（完璧な）。de-（否定・離脱）系: decline（下降する）、decrease（減少する）、deviate（逸脱する）。",
      derivatives: [
        { word: "defective",   desc: "欠陥のある・不完全な（形容詞）" },
        { word: "defection",   desc: "離反・亡命（名詞）" },
        { word: "defector",    desc: "離反者・亡命者（名詞）" }
      ],
      family: [
        { word: "effect",    desc: "結果（ex- + facere）" },
        { word: "affect",    desc: "影響する（ad- + facere）" },
        { word: "infect",    desc: "感染させる（in- + facere）" },
        { word: "perfect",   desc: "完璧な（per- + facere）" }
      ],
      compounds: [
        { phrase: "birth defect",          desc: "先天性欠損・先天異常" },
        { phrase: "manufacturing defect",  desc: "製造上の欠陥" },
        { phrase: "defective product",     desc: "欠陥製品" }
      ]
    },

    "efficient": {
      origin: "ラテン語 efficientem（効果を生み出す）< ex-（外へ）+ facere（作る・する）。字義は「作用を生み出す → 効率的な」。アリストテレスの哲学では efficient cause（作用因：変化を引き起こすもの）として用いられた重要な哲学概念。\n\n15世紀に英語に英語に入り efficient（効率的な・有能な）として定着。fuel-efficient（燃費がよい）、efficient worker（有能な作業者）など形容詞として使われる。efficiency（効率）は経済学・工学の核心語。\n\nfacere 系: effect（結果）、affect（影響する）、infect（感染させる）、perfect（完璧な）、defect（欠陥）。ef-（ex- の変形）系: effort（努力）、effective（効果的な）。",
      derivatives: [
        { word: "efficiency",    desc: "効率・能率（名詞）" },
        { word: "efficiently",   desc: "効率よく（副詞）" },
        { word: "inefficient",   desc: "非効率な（形容詞）" },
        { word: "inefficiency",  desc: "非効率・非能率（名詞）" }
      ],
      family: [
        { word: "effective",  desc: "効果的な（ex- + facere）" },
        { word: "sufficient", desc: "十分な（sub- + facere）" },
        { word: "productive", desc: "生産的な（producere）" }
      ],
      compounds: [
        { phrase: "fuel efficient",    desc: "燃費がよい" },
        { phrase: "energy efficient",  desc: "省エネの" },
        { phrase: "efficient use",     desc: "効率的な使い方" }
      ]
    },

    "sufficient": {
      origin: "ラテン語 sufficere（足りる・間に合う）< sub-（下から）+ facere（作る・する）。字義は「下から満たす → 十分に供給する」で、必要量を満たしている状態を表す。\n\n14世紀に英語に入り sufficient（十分な・足りる）として定着。sufficient evidence（十分な証拠）、sufficient funds（十分な資金）のように形式的な文章で「enough」の改まった言い方として使われる。自給自足の self-sufficiency（自給自足）も重要。\n\nfacere 系: effect, efficient, perfect, defect。sub-（下から）系: support（支える）、suppress（抑える）、submit（提出する）。対義語: insufficient（不十分な）、deficient（不足した）。",
      derivatives: [
        { word: "sufficiency",    desc: "十分さ・自給（名詞）" },
        { word: "sufficiently",   desc: "十分に（副詞）" },
        { word: "insufficient",   desc: "不十分な（形容詞）" },
        { word: "insufficiency",  desc: "不十分さ・不足（名詞）" }
      ],
      family: [
        { word: "efficient",   desc: "効率的な（ex- + facere）" },
        { word: "adequate",    desc: "適切な・十分な（ad- + aequus）" },
        { word: "deficient",   desc: "不足した（de- + facere）" }
      ],
      compounds: [
        { phrase: "sufficient evidence",  desc: "十分な証拠" },
        { phrase: "self-sufficient",      desc: "自給自足の" },
        { phrase: "sufficient condition", desc: "十分条件（論理学）" }
      ]
    },

    "fiction": {
      origin: "ラテン語 fictio（形成・作り話）< fingere（形作る・作り上げる）。fingere は粘土などを「形作る」という動作から「心の中で形作る → 想像する・でっちあげる」へと意味が広がった。\n\n15世紀に英語に入り fiction（小説・フィクション・虚構）として定着。literary fiction（文学的小説）、science fiction（SF）など。legal fiction（法的擬制）は法律用語として「事実ではないが事実として扱う事柄」を指す。\n\nfingere 系: figure（形・数字：形作られたもの）、feign（ふりをする）、feint（フェイント：見せかけの動き）、figment（作り話）。fact（事実）と fiction（虚構）はよく対比される。",
      derivatives: [
        { word: "fictional",     desc: "架空の・フィクションの（形容詞）" },
        { word: "fictitious",    desc: "架空の・偽りの（形容詞）" },
        { word: "fictionalize",  desc: "小説化する（動詞）" }
      ],
      family: [
        { word: "figure",      desc: "形・数字（fingere：形作る）" },
        { word: "feign",       desc: "ふりをする（fingere）" },
        { word: "nonfiction",  desc: "ノンフィクション（non- + fiction）" },
        { word: "fact",        desc: "事実（factum：なされたこと）" }
      ],
      compounds: [
        { phrase: "science fiction",   desc: "SF・科学小説" },
        { phrase: "historical fiction", desc: "歴史小説" },
        { phrase: "legal fiction",     desc: "法的擬制（法律）" }
      ]
    },

    "aspect": {
      origin: "ラテン語 aspectus（見た目・外観）< ad-（～に向かって）+ specere（見る）。字義は「何かを見る行為・見える様子」で、「側面・観点・様相」という意味になった。\n\n15世紀に英語に入り aspect（側面・観点・様相）として定着。every aspect of life（生活のあらゆる側面）、the financial aspect（財政面）など論文・報告書で頻出。天文学では惑星の配置角度（アスペクト）、文法では動詞のアスペクト（相：継続・完了など）にも使われる。\n\nspecere 系: inspect（点検する）、prospect（見通し）、expect（期待する）、respect（尊重する）、suspect（疑う）、perspective（遠近感）、spectacle（見世物）。",
      derivatives: [
        { word: "aspectual",  desc: "アスペクトの・相の（形容詞、文法）" }
      ],
      family: [
        { word: "inspect",      desc: "点検する（in- + specere）" },
        { word: "prospect",     desc: "見通し（pro- + specere）" },
        { word: "expect",       desc: "期待する（ex- + specere）" },
        { word: "perspective",  desc: "遠近感・観点（per- + specere）" }
      ],
      compounds: [
        { phrase: "every aspect",    desc: "あらゆる側面" },
        { phrase: "positive aspect", desc: "良い側面・プラスの面" },
        { phrase: "aspect ratio",    desc: "アスペクト比（画面比率）" }
      ]
    },

    "prospect": {
      origin: "ラテン語 prospectus（見通し・前景）< pro-（前に）+ specere（見る）。字義は「前を見る → 将来の見通し・可能性」。地質学では鉱床を探す「採掘調査」という意味でも使われる。\n\n15世紀に英語に入り prospect（見通し・可能性・展望）として定着。job prospects（就職の見込み）、bright prospects（明るい展望）のように将来の可能性を表す名詞として頻出。prospector（探鉱者）、prospectus（目論見書）が派生。\n\nspecere 系: aspect（側面）、inspect（点検する）、expect（期待する）、respect（尊重する）、suspect（疑う）、perspective（遠近感）。pro-（前に）系: progress（進歩）、promote（促進する）、provide（提供する）。",
      derivatives: [
        { word: "prospective",  desc: "見込みの・将来の（形容詞）" },
        { word: "prospector",   desc: "探鉱者・採掘者（名詞）" },
        { word: "prospectus",   desc: "目論見書・案内書（名詞）" }
      ],
      family: [
        { word: "aspect",       desc: "側面（ad- + specere）" },
        { word: "inspect",      desc: "点検する（in- + specere）" },
        { word: "expect",       desc: "期待する（ex- + specere）" },
        { word: "perspective",  desc: "観点（per- + specere）" }
      ],
      compounds: [
        { phrase: "job prospects",     desc: "就職の見込み" },
        { phrase: "bright prospects",  desc: "明るい見通し" },
        { phrase: "no prospect of",    desc: "～の見込みがない" }
      ]
    },

    "pretend": {
      origin: "ラテン語 praetendere（前に張る・口実を設ける）< prae-（前に）+ tendere（伸ばす・張る）。字義は「幕を前に張る → 見せかける・ふりをする」。もともとは口実・言い訳を意味したが、「でないふりをする」という現代の意味になった。\n\n14世紀に英語に入り pretend（ふりをする・見せかける）として定着。子どもの pretend play（ごっこ遊び）から政治の pretend to know（知っているふりをする）まで幅広く使われる。pretense（見せかけ）、pretentious（気取った・見栄っ張りな）が派生。\n\ntendere 系: extend（伸ばす）、intend（意図する）、attend（出席する）、content（満足した）、tension（緊張）。",
      derivatives: [
        { word: "pretense",      desc: "見せかけ・口実（名詞）" },
        { word: "pretentious",   desc: "気取った・見栄を張る（形容詞）" },
        { word: "pretension",    desc: "自負・気取り（名詞）" }
      ],
      family: [
        { word: "extend",   desc: "伸ばす・拡大する（ex- + tendere）" },
        { word: "intend",   desc: "意図する（in- + tendere）" },
        { word: "attend",   desc: "出席する（ad- + tendere）" },
        { word: "tension",  desc: "緊張・張力（tendere）" }
      ],
      compounds: [
        { phrase: "pretend to be",        desc: "～のふりをする" },
        { phrase: "under false pretenses", desc: "偽りの口実で" },
        { phrase: "pretend play",          desc: "ごっこ遊び" }
      ]
    },

    "tension": {
      origin: "ラテン語 tensio（引き伸ばすこと）< tendere（伸ばす・張る）。字義は「引っ張り合い・緊張状態」で、物理的な力（string tension: 弦の張力）から心理的な緊張（emotional tension）まで使われる。\n\n17世紀に英語に入り tension（緊張・張力）として定着。物理では surface tension（表面張力）、電気では high tension（高電圧）という用法がある。国際政治では diplomatic tension（外交的緊張）、物語では narrative tension（物語の緊張感）として使われる。\n\ntendere 系: extend（伸ばす）、intend（意図する）、pretend（ふりをする）、attend（出席する）、tend（傾向がある）。tense（形容詞：緊張した；動詞の時制）は同根。",
      derivatives: [
        { word: "tense",     desc: "緊張した；動詞の時制（形容詞・名詞）" },
        { word: "tensile",   desc: "引張りの・伸びやすい（形容詞）" },
        { word: "tense up",  desc: "緊張する（句動詞）" }
      ],
      family: [
        { word: "extend",   desc: "伸ばす（ex- + tendere）" },
        { word: "intend",   desc: "意図する（in- + tendere）" },
        { word: "pretend",  desc: "ふりをする（prae- + tendere）" },
        { word: "stress",   desc: "緊張・ストレス" }
      ],
      compounds: [
        { phrase: "high tension",      desc: "高電圧；強い緊張" },
        { phrase: "racial tension",    desc: "人種間の緊張" },
        { phrase: "surface tension",   desc: "表面張力（物理）" }
      ]
    },

    "conform": {
      origin: "ラテン語 conformare（同じ形にする）< con-（共に）+ forma（形）。字義は「形を合わせる → 規則・慣習・期待に沿う」。社会的同調・規則への準拠を意味する動詞として使われる。\n\n16世紀に英語に入り conform（従う・適合する）として定着。conform to the rules（規則に従う）、social conformity（社会的同調）のように使われる。非同調主義 nonconformity（慣習に従わないこと）も重要な対概念。\n\nforma 系: uniform（制服・均一な）、reform（改革する）、transform（変形する）、inform（知らせる）、formula（公式）。con-（共に）系: conduct（行動する）、contract（契約）、consent（同意）。",
      derivatives: [
        { word: "conformity",      desc: "同調・服従・適合（名詞）" },
        { word: "conformation",    desc: "構造・配座（名詞、化学）" },
        { word: "conformist",      desc: "体制に従う人（名詞）" },
        { word: "nonconformist",   desc: "体制に従わない人・非国教徒（名詞）" }
      ],
      family: [
        { word: "uniform",    desc: "制服・均一な（uni- + forma）" },
        { word: "reform",     desc: "改革する（re- + forma）" },
        { word: "transform",  desc: "変形する（trans- + forma）" },
        { word: "inform",     desc: "知らせる（in- + forma）" }
      ],
      compounds: [
        { phrase: "conform to regulations",  desc: "規則に準拠する" },
        { phrase: "social conformity",       desc: "社会的同調" },
        { phrase: "nonconformist attitude",  desc: "反体制的な態度" }
      ]
    },

    "formula": {
      origin: "ラテン語 formula（小さな形・規則・書式）< forma（形）の指小形。もともとは法律文書の定型表現・書式を指した。そこから「一定の方法・公式」という意味になった。\n\n17世紀に英語に入り formula（公式・方程式・製法）として定着。数学・化学の formula（分子式・方程式）、医薬品の formula（処方）、自動車レースの Formula 1（F1）まで幅広く使われる。formulaic（紋切り型の：公式通りの）は否定的ニュアンスを帯びる。\n\nforma 系: uniform（制服）、reform（改革）、transform（変形）、inform（知らせる）、conform（従う）。formulate（公式化する）、formulation（処方・定式化）が派生。",
      derivatives: [
        { word: "formulaic",   desc: "公式的な・紋切り型の（形容詞）" },
        { word: "formulate",   desc: "公式化する・策定する（動詞）" },
        { word: "formulation", desc: "策定・処方・定式化（名詞）" },
        { word: "reformulate", desc: "再定式化する（動詞）" }
      ],
      family: [
        { word: "uniform",    desc: "制服・均一な（uni- + forma）" },
        { word: "reform",     desc: "改革する（re- + forma）" },
        { word: "conform",    desc: "従う（con- + forma）" },
        { word: "equation",   desc: "方程式（aequus：等しい）" }
      ],
      compounds: [
        { phrase: "chemical formula",  desc: "化学式・分子式" },
        { phrase: "winning formula",   desc: "成功の方程式" },
        { phrase: "formula one",       desc: "F1（フォーミュラワン）" }
      ]
    },

    "postpone": {
      origin: "ラテン語 postponere（後に置く・後回しにする）< post-（後に）+ ponere（置く）。字義は「後に置く → 延期する」。\n\n16世紀に英語に入り postpone（延期する・先延ばしにする）として定着。postpone a meeting（会議を延期する）、postpone until tomorrow（明日に先延ばしする）のように日常的に使われる。procrastinate（ぐずぐず先延ばしにする）と似るが、postpone はより中立的・公式的な意味合いがある。\n\nponere 系: compose（作曲する）、propose（提案する）、oppose（反対する）、impose（課す）、expose（さらす）、component（構成要素）。post-（後に）系: postscript（追伸）、postwar（戦後の）、posterior（後ろの）。",
      derivatives: [
        { word: "postponement",  desc: "延期・先延ばし（名詞）" }
      ],
      family: [
        { word: "delay",          desc: "遅らせる（de- + laxare）" },
        { word: "defer",          desc: "延期する（de- + ferre）" },
        { word: "procrastinate",  desc: "ぐずぐず先延ばしする（pro- + crastinus）" }
      ],
      compounds: [
        { phrase: "postpone indefinitely",  desc: "無期限延期する" },
        { phrase: "postpone a decision",    desc: "決定を先延ばしする" }
      ]
    },

    "intellect": {
      origin: "ラテン語 intellectus（理解・知性）< inter-（間で）+ legere（選ぶ・読む）。字義は「（二つの間を）選び取る → 理解する → 知性・知力」。理性と感情を対比させる文脈で「知的能力」を指す。\n\n14世紀に英語に入り intellect（知性・理解力）として定着。intellectual（知識人・知的な）、intelligence（知能）が派生。AI の文脈では artificial intelligence（人工知能）の intelligence と同根。「intellect（知性）vs. emotion（感情）」は哲学の古典的対比。\n\nlegere 系: intelligent（知的な）、lecture（講義）、elect（選ぶ）、select（選択する）、neglect（怠る）、collect（集める）、eligible（資格がある）。",
      derivatives: [
        { word: "intellectual",     desc: "知識人・知的な（名詞・形容詞）" },
        { word: "intellectually",   desc: "知的に（副詞）" },
        { word: "intellectualize",  desc: "知的に分析する（動詞）" },
        { word: "intelligence",     desc: "知能・情報（名詞）" }
      ],
      family: [
        { word: "lecture",    desc: "講義（legere：読む）" },
        { word: "elect",      desc: "選ぶ（e- + legere）" },
        { word: "select",     desc: "選択する（se- + legere）" },
        { word: "eligible",   desc: "資格がある（e- + legere）" }
      ],
      compounds: [
        { phrase: "public intellect",      desc: "公共知識人" },
        { phrase: "artificial intellect",  desc: "人工知性" },
        { phrase: "sharp intellect",       desc: "鋭い知性" }
      ]
    },

    "lecture": {
      origin: "ラテン語 lectura（読む行為・読まれるもの）< legere（読む・選ぶ）。中世では聖書・学術文書を声に出して「読み上げる」ことが授業の形式であり、そこから「講義・講演」という意味になった。\n\n16世紀に英語に入り lecture（講義・説教）として定着。大学での lecture（講義）が最も一般的な使い方で、lecturer（講師）、lecture hall（講義室）が派生。口語では「説教する・くどくど言う」という動詞用法もある（Stop lecturing me!）。\n\nlegere 系: intellect（知性）、elect（選ぶ）、select（選択する）、neglect（怠る）、collect（集める）、eligible（資格がある）。lect- から dialect（方言：地域ごとの言葉の選択）も派生。",
      derivatives: [
        { word: "lecturer",     desc: "講師・講演者（名詞）" },
        { word: "lectureship",  desc: "講師職（名詞）" }
      ],
      family: [
        { word: "intellect",  desc: "知性（inter- + legere）" },
        { word: "elect",      desc: "選ぶ（e- + legere）" },
        { word: "select",     desc: "選択する（se- + legere）" },
        { word: "dialect",    desc: "方言（dia- + lect）" }
      ],
      compounds: [
        { phrase: "give a lecture",   desc: "講義をする・講演をする" },
        { phrase: "lecture hall",     desc: "講義室・大講堂" },
        { phrase: "attend a lecture", desc: "講義に出席する" }
      ]
    },

    "eligible": {
      origin: "ラテン語 eligibilis（選ぶに値する）< eligere（選び出す）< e-（外へ）+ legere（選ぶ）。字義は「選ばれるに値する → 資格がある」。\n\n15世紀に英語に入り eligible（資格がある・適格な）として定着。eligible for a scholarship（奨学金の資格がある）、eligible to vote（投票資格がある）のように正式な資格要件を示す語として使われる。eligible bachelor（有望な未婚男性）という口語表現もある。\n\nlegere 系: elect（選ぶ）、select（選択する）、intellect（知性）、lecture（講義）、elegant（優雅な）。e-（外へ）系: eject（追い出す）、eradicate（根絶する）。",
      derivatives: [
        { word: "eligibility",  desc: "資格・適格性（名詞）" },
        { word: "ineligible",   desc: "資格がない・不適格な（形容詞）" },
        { word: "ineligibility", desc: "不適格・資格なし（名詞）" }
      ],
      family: [
        { word: "elect",    desc: "選ぶ（e- + legere）" },
        { word: "select",   desc: "選択する（se- + legere）" },
        { word: "qualify",  desc: "資格を得る（qualis）" },
        { word: "elegant",  desc: "優雅な（eligere）" }
      ],
      compounds: [
        { phrase: "eligible for",        desc: "～の資格がある" },
        { phrase: "eligible voter",      desc: "選挙権のある有権者" },
        { phrase: "eligible candidate",  desc: "適格な候補者" }
      ]
    },

    "elegant": {
      origin: "ラテン語 elegans（選り抜きの・上品な）< eligere（選び出す）< e-（外へ）+ legere（選ぶ）。字義は「厳選された・洗練された」で、趣味よく選ばれたものが「優雅・上品」という意味を持つ。\n\n16世紀に英語に入り elegant（優雅な・上品な・洗練された）として定着。数学・工学では elegant solution（簡潔で美しい解決策）として、複雑な問題をシンプルに解くことを指す。ファッション・デザインでも中心的な形容詞。\n\nlegere 系: eligible（資格がある）、elect（選ぶ）、select（選択する）。elegy（哀歌）は別語源（ギリシャ語 elegeia）なので注意。",
      derivatives: [
        { word: "elegance",   desc: "優雅さ・品のよさ（名詞）" },
        { word: "elegantly",  desc: "優雅に・上品に（副詞）" },
        { word: "inelegant",  desc: "不格好な・品のない（形容詞）" }
      ],
      family: [
        { word: "eligible",     desc: "資格がある（e- + legere）" },
        { word: "select",       desc: "選択する（se- + legere）" },
        { word: "refined",      desc: "洗練された（re- + finire）" },
        { word: "sophisticated", desc: "洗練された（sophistēs）" }
      ],
      compounds: [
        { phrase: "elegant solution",  desc: "エレガントな解法（数学・工学）" },
        { phrase: "elegant design",    desc: "洗練されたデザイン" },
        { phrase: "with elegance",     desc: "優雅に" }
      ]
    },

    "precede": {
      origin: "ラテン語 praecedere（前に行く）< prae-（前に）+ cedere（行く・譲る）。字義は「先に行く・先行する」で、時間的・空間的に前にあることを指す。\n\n15世紀に英語に入り precede（先行する・～の前にある）として定着。precedent（先例）、unprecedented（前例のない）が派生し、法律・政治で重要語。No precedent exists for this decision（この決定には前例がない）のように使われる。\n\ncedere 系: proceed（進む）、concede（認める）、recede（退く）、exceed（超える）、succeed（成功する）。prae-（前に）系: predict（予言する）、prevent（防ぐ）、previous（以前の）。",
      derivatives: [
        { word: "precedent",      desc: "先例・前例（名詞）" },
        { word: "unprecedented",  desc: "前例のない（形容詞）" },
        { word: "precedence",     desc: "優先（権）（名詞）" }
      ],
      family: [
        { word: "proceed",   desc: "進む（pro- + cedere）" },
        { word: "concede",   desc: "認める（con- + cedere）" },
        { word: "recede",    desc: "退く（re- + cedere）" },
        { word: "exceed",    desc: "超える（ex- + cedere）" },
        { word: "succeed",   desc: "成功する（sub- + cedere）" }
      ],
      compounds: [
        { phrase: "take precedence",      desc: "優先される" },
        { phrase: "set a precedent",      desc: "先例を設ける" },
        { phrase: "unprecedented move",   desc: "前例のない行動" }
      ]
    },

    "concede": {
      origin: "ラテン語 concedere（承認する・譲歩する）< con-（完全に）+ cedere（行く・譲る）。字義は「完全に譲る → 認める・譲歩する」。議論や交渉で相手の主張を認めること。\n\n15世紀に英語に入り concede（認める・譲歩する）として定着。concede a point（論点を認める）、concede defeat（敗北を認める）のように使われる。スポーツでは concede a goal（失点する）。concession（譲歩・売店：空港の concession stand）が派生。\n\ncedere 系: proceed（進む）、precede（先行する）、recede（退く）、exceed（超える）、succeed（成功する）。con-（共に・強調）系: convince（確信させる）、conclude（結論を出す）。",
      derivatives: [
        { word: "concession",      desc: "譲歩・売店・利権（名詞）" },
        { word: "concessionary",   desc: "譲歩の・割引の（形容詞）" }
      ],
      family: [
        { word: "precede",   desc: "先行する（prae- + cedere）" },
        { word: "proceed",   desc: "進む（pro- + cedere）" },
        { word: "recede",    desc: "退く（re- + cedere）" },
        { word: "exceed",    desc: "超える（ex- + cedere）" },
        { word: "admit",     desc: "認める（ad- + mittere）" }
      ],
      compounds: [
        { phrase: "concede defeat",   desc: "敗北を認める" },
        { phrase: "make concessions", desc: "譲歩する" },
        { phrase: "concede a goal",   desc: "失点する（スポーツ）" }
      ]
    },

    "recede": {
      origin: "ラテン語 recedere（後退する）< re-（後ろに）+ cedere（行く）。字義は「後ろに行く → 引いていく・遠ざかる」。潮や洪水が引く（tides recede）、ヘアラインが後退する（hairline recedes）など物理的な後退に使われる。\n\n15世紀に英語に入り recede（後退する・引く・遠ざかる）として定着。recession（景気後退）は recede から派生し、経済学で重要語（economic recession）。\n\ncedere 系: proceed（進む）、precede（先行する）、concede（認める）、exceed（超える）、succeed（成功する）。re-（後ろ）系: return（返る）、reverse（逆にする）、retreat（撤退する）、recession（後退）。",
      derivatives: [
        { word: "recession",     desc: "景気後退・後退（名詞）" },
        { word: "recessionary",  desc: "不景気の（形容詞）" },
        { word: "recessive",     desc: "劣性の・後退しやすい（形容詞）" }
      ],
      family: [
        { word: "precede",   desc: "先行する（prae- + cedere）" },
        { word: "concede",   desc: "認める（con- + cedere）" },
        { word: "exceed",    desc: "超える（ex- + cedere）" },
        { word: "retreat",   desc: "撤退する（re- + trahere）" }
      ],
      compounds: [
        { phrase: "receding hairline",  desc: "後退するヘアライン（額が広がる）" },
        { phrase: "economic recession", desc: "景気後退" },
        { phrase: "flood waters recede", desc: "洪水が引く" }
      ]
    },

    "exceed": {
      origin: "ラテン語 excedere（超え出る）< ex-（外へ・超えて）+ cedere（行く）。字義は「外へ行く → 限界を超える・上回る」。\n\n14世紀に英語に入り exceed（超える・上回る）として定着。exceed expectations（期待を上回る）、exceed the speed limit（制限速度を超える）のように使われる。excess（超過・余剰）、excessive（過度の）、exceedingly（非常に）が派生。\n\ncedere 系: proceed（進む）、precede（先行する）、concede（認める）、recede（退く）、succeed（成功する）。ex-（超えて）系: excel（優れる）、export（輸出する）、exclude（除外する）。",
      derivatives: [
        { word: "excess",       desc: "超過・過剰・余剰（名詞・形容詞）" },
        { word: "excessive",    desc: "過度の・過剰な（形容詞）" },
        { word: "excessively",  desc: "過度に（副詞）" },
        { word: "exceedingly",  desc: "非常に・極めて（副詞）" }
      ],
      family: [
        { word: "precede",    desc: "先行する（prae- + cedere）" },
        { word: "concede",    desc: "認める（con- + cedere）" },
        { word: "recede",     desc: "退く（re- + cedere）" },
        { word: "surpass",    desc: "上回る・しのぐ" },
        { word: "transcend",  desc: "超越する（trans- + scandere）" }
      ],
      compounds: [
        { phrase: "exceed expectations",  desc: "期待を上回る" },
        { phrase: "exceed the limit",     desc: "限度を超える" },
        { phrase: "in excess of",         desc: "～を超えて" }
      ]
    },

    "digress": {
      origin: "ラテン語 digredi（脇道にそれる）< di-（離れて）+ gradi（歩く・進む）。字義は「本筋から外れて進む」で、話・文章が主題から逸れることを指す。\n\n16世紀に英語に入り digress（脇道にそれる・余談に入る）として定着。文章・スピーチで「If I may digress for a moment...（少し話が逸れますが）」のような断り書きで使われる。口語ではやや格式ばった言い方で、wander off topic などに置き換えられることも多い。\n\ngradi 系: progress（進歩）、aggress（攻撃する）、congress（議会）、degree（程度・学位）、ingredient（成分：中に入るもの）。di-（離れて）系: different（異なる）、divide（分ける）。",
      derivatives: [
        { word: "digression",   desc: "脱線・余談（名詞）" },
        { word: "digressive",   desc: "脱線しがちな（形容詞）" }
      ],
      family: [
        { word: "progress",   desc: "進歩（pro- + gradi）" },
        { word: "congress",   desc: "議会（con- + gradi）" },
        { word: "degree",     desc: "学位・程度（de- + gradus）" },
        { word: "deviate",    desc: "逸脱する（de- + via）" }
      ],
      compounds: [
        { phrase: "digress from the topic",  desc: "話題から脱線する" },
        { phrase: "lengthy digression",      desc: "長い脱線・余談" }
      ]
    },

    "congress": {
      origin: "ラテン語 congressus（集合・会合）< con-（共に）+ gradi（歩く・進む）。字義は「共に歩み寄る → 会合する」で、代表者が集まる立法機関を指すようになった。\n\n15世紀に英語に入り congress（会議・議会）として定着。米国では Congress（連邦議会）として特定の立法機関（上院 Senate + 下院 House of Representatives）を指す固有名詞的に使われる。international congress（国際会議）のように学術・国際的な大規模会議にも使われる。\n\ngradi 系: progress（進歩）、digress（脇道にそれる）、degree（学位・程度）、ingredient（成分）。con-（共に）系: collect（集める）、collaborate（協力する）、cooperate（協力する）。",
      derivatives: [
        { word: "congressional",  desc: "議会の（形容詞）" },
        { word: "congressman",    desc: "下院議員（男性、名詞）" },
        { word: "congresswoman",  desc: "下院議員（女性、名詞）" }
      ],
      family: [
        { word: "progress",    desc: "進歩（pro- + gradi）" },
        { word: "digress",     desc: "脱線する（di- + gradi）" },
        { word: "parliament",  desc: "議会（parler：話す）" },
        { word: "assembly",    desc: "議会・集会（assemblare）" }
      ],
      compounds: [
        { phrase: "US Congress",          desc: "米国連邦議会" },
        { phrase: "congressional hearing", desc: "議会公聴会" },
        { phrase: "international congress", desc: "国際会議" }
      ]
    },

    // Batch 20: ten/tin系・crit/krin系・vert/vers残り・cap系残り・fer系残り・manus残り・ject残り・vol系

    "maintain": {
      origin: "ラテン語 manutenere（手で保持する）< manus（手）+ tenere（保持する）。字義は「手でしっかりつかんでおく → 維持する・主張する」。keep と maintain は重複表現になりやすいほど近い意味を持つ語。\n\n13世紀に英語に入り maintain（維持する・管理する・主張する）として定着。maintain a record（記録を維持する）、maintain order（秩序を保つ）、maintain innocence（無実を主張する）など幅広く使われる。maintenance（維持・整備）が重要な派生語。\n\ntenere 系: contain（含む）、obtain（得る）、retain（保持する）、sustain（持続する）、abstain（控える）、pertain（関係する）。manus 系: manual（手動の）、manuscript（手書き）。",
      derivatives: [
        { word: "maintenance",   desc: "維持・保守・整備（名詞）" },
        { word: "maintainable",  desc: "維持できる（形容詞）" }
      ],
      family: [
        { word: "obtain",    desc: "得る（ob- + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" },
        { word: "sustain",   desc: "持続する（sub- + tenere）" },
        { word: "contain",   desc: "含む（con- + tenere）" }
      ],
      compounds: [
        { phrase: "maintain order",       desc: "秩序を保つ" },
        { phrase: "maintenance cost",     desc: "維持費・メンテナンス費" },
        { phrase: "maintain innocence",   desc: "無実を主張する" }
      ]
    },

    "obtain": {
      origin: "ラテン語 obtinere（保持する・占有する）< ob-（に対して）+ tenere（保持する）。字義は「しっかりと保持する・占有する」で、そこから「手に入れる・取得する」という意味になった。\n\n15世紀に英語に入り obtain（得る・取得する）として定着。get より改まったニュアンスを持ち、学術・法律文書で使われる。obtain permission（許可を得る）、obtain a degree（学位を得る）のように正式な文書で頻出する。\n\ntenere 系: maintain（維持する）、retain（保持する）、sustain（持続する）、contain（含む）、abstain（控える）。ob-（に対して）系: object（反対する）、observe（観察する）、obstruct（妨害する）。",
      derivatives: [
        { word: "obtainable",    desc: "入手できる（形容詞）" },
        { word: "unobtainable",  desc: "入手できない（形容詞）" }
      ],
      family: [
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" },
        { word: "sustain",   desc: "持続する（sub- + tenere）" },
        { word: "acquire",   desc: "獲得する（ad- + quaerere）" }
      ],
      compounds: [
        { phrase: "obtain permission",      desc: "許可を得る" },
        { phrase: "obtain a degree",        desc: "学位を取得する" },
        { phrase: "readily obtainable",     desc: "容易に入手できる" }
      ]
    },

    "retain": {
      origin: "ラテン語 retinere（引き留める・保持する）< re-（後ろに）+ tenere（保持する）。字義は「後ろに引き留める → 保持する・記憶に留める」。\n\n15世紀に英語に入り retain（保持する・覚えている・雇い続ける）として定着。retain information（情報を記憶する）、retain a lawyer（弁護士を雇い続ける）のように幅広く使われる。retainer（顧問料・矯正保定器）、retention（保持・記憶定着）が派生。\n\ntenere 系: maintain（維持する）、obtain（得る）、sustain（持続する）、contain（含む）。re-（後ろに）系: return（戻る）、reverse（逆にする）、recall（思い出す）。",
      derivatives: [
        { word: "retention",  desc: "保持・記憶定着（名詞）" },
        { word: "retainer",   desc: "顧問料・矯正保定器（名詞）" },
        { word: "retentive",  desc: "記憶力のよい（形容詞）" }
      ],
      family: [
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "obtain",    desc: "得る（ob- + tenere）" },
        { word: "sustain",   desc: "持続する（sub- + tenere）" },
        { word: "contain",   desc: "含む（con- + tenere）" }
      ],
      compounds: [
        { phrase: "retain information",  desc: "情報を記憶する" },
        { phrase: "retain a lawyer",     desc: "弁護士を雇い続ける" },
        { phrase: "talent retention",    desc: "人材の確保・定着" }
      ]
    },

    "sustain": {
      origin: "ラテン語 sustinere（下から支える・耐える）< sub-（下から）+ tenere（保持する）。字義は「下から支え持つ → 維持する・耐える」。\n\n14世紀に英語に入り sustain（持続する・支える・耐える）として定着。sustain an injury（負傷する）、sustain life（生命を維持する）のように使われる。sustainability（持続可能性）は現代の環境政策・SDGs の核心語として非常に重要。\n\ntenere 系: maintain（維持する）、obtain（得る）、retain（保持する）、contain（含む）。sub-（下から）系: support（支える）、suppress（抑える）、submit（提出する）。",
      derivatives: [
        { word: "sustainability",  desc: "持続可能性（名詞）" },
        { word: "sustainable",     desc: "持続可能な（形容詞）" },
        { word: "sustainably",     desc: "持続可能な方法で（副詞）" },
        { word: "sustained",       desc: "継続的な・持続した（形容詞）" }
      ],
      family: [
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" },
        { word: "support",   desc: "支える（sub- + portare）" },
        { word: "endure",    desc: "耐える（in- + durare）" }
      ],
      compounds: [
        { phrase: "sustainable development",  desc: "持続可能な発展" },
        { phrase: "sustain an injury",         desc: "負傷する" },
        { phrase: "sustained effort",          desc: "継続的な努力" }
      ]
    },

    "continent": {
      origin: "ラテン語 continens（つながっている・自制した）< con-（共に）+ tenere（保持する）。字義は「まとまって保持されている → 大陸（陸地が続いてつながっている塊）」。形容詞として「自制した・節制した」という意味も持つ（その否定形 incontinent は医学用語）。\n\n14世紀に英語に入り continent（大陸）として定着。七大陸（seven continents）を指す地理名詞として広く使われる。continental（大陸の）、intercontinental（大陸間の）が派生。\n\ntenere 系: contain（含む：continere の変形）、maintain（維持する）、obtain（得る）、retain（保持する）、sustain（持続する）。",
      derivatives: [
        { word: "continental",       desc: "大陸の・ヨーロッパの（形容詞）" },
        { word: "intercontinental",  desc: "大陸間の（形容詞）" },
        { word: "incontinence",      desc: "失禁（医学）（名詞）" }
      ],
      family: [
        { word: "contain",   desc: "含む（continere）" },
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" }
      ],
      compounds: [
        { phrase: "continental drift",       desc: "大陸移動説（地質学）" },
        { phrase: "intercontinental flight", desc: "大陸間飛行" },
        { phrase: "continental breakfast",   desc: "コンチネンタルブレックファスト" }
      ]
    },

    "abstain": {
      origin: "ラテン語 abstinere（離れて保つ・控える）< ab-（離れて）+ tenere（保持する）。字義は「（欲しいものを）持たないでいる → 慎む・棄権する」。\n\n14世紀に英語に入り abstain（控える・棄権する）として定着。abstain from alcohol（飲酒を控える）、abstain in a vote（採決で棄権する）のように使われる。abstinence（禁欲・節制）、abstention（棄権票）が派生し、禁欲主義や選挙での棄権を表す重要語。\n\ntenere 系: maintain（維持する）、obtain（得る）、retain（保持する）、sustain（持続する）、pertain（関係する）。ab-（離れて）系: absent（不在の）、abstract（抽象的な）、abandon（見捨てる）。",
      derivatives: [
        { word: "abstinence",  desc: "節制・禁欲（名詞）" },
        { word: "abstention",  desc: "棄権（名詞）" },
        { word: "abstinent",   desc: "節制した（形容詞）" }
      ],
      family: [
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" },
        { word: "refrain",   desc: "控える（re- + frenare）" },
        { word: "renounce",  desc: "放棄する（re- + nuntiare）" }
      ],
      compounds: [
        { phrase: "abstain from alcohol",  desc: "飲酒を控える" },
        { phrase: "vote abstention",       desc: "棄権票・投票棄権" }
      ]
    },

    "pertain": {
      origin: "ラテン語 pertinere（及ぶ・関係する）< per-（完全に・通じて）+ tenere（保持する・伸ばす）。字義は「通じて及ぶ → 関係する・属する」。\n\n14世紀に英語に入り pertain（関係する・属する）として定着。pertain to the case（その件に関係する）のように法律・公文書で「～に関連する」という意味で使われる格式語。pertinent（関連した・適切な）、impertinent（不適切な・生意気な）が重要な派生語。\n\ntenere 系: maintain（維持する）、obtain（得る）、retain（保持する）、sustain（持続する）、abstain（控える）。per-（通じて）系: persuade（説得する）、persevere（粘り強い）、perfect（完璧な）。",
      derivatives: [
        { word: "pertinent",    desc: "関連した・適切な（形容詞）" },
        { word: "impertinent",  desc: "不適切な・生意気な（形容詞）" },
        { word: "pertinence",   desc: "関連性・適切さ（名詞）" }
      ],
      family: [
        { word: "maintain",   desc: "維持する（manus + tenere）" },
        { word: "retain",     desc: "保持する（re- + tenere）" },
        { word: "concern",    desc: "関係する（con- + cernere）" }
      ],
      compounds: [
        { phrase: "pertain to",         desc: "～に関係する・関連する" },
        { phrase: "pertinent question", desc: "適切な質問・的を射た質問" },
        { phrase: "impertinent remark", desc: "生意気な発言・不適切な発言" }
      ]
    },

    "tenure": {
      origin: "ラテン語 tenura（保有・占有権）< tenere（保持する）。中世封建制度で土地の保有権を指し、そこから「在職期間・終身在職権」という意味になった。\n\n15世紀に英語に入り tenure（在職期間・終身在職権）として定着。academic tenure（アカデミックテニュア：大学教員の終身在職権）はアメリカの大学制度で重要な概念。office tenure（在任期間）、land tenure（土地保有）も重要。tenuous（薄い・希薄な）は同根で「かろうじて保持されている」という意味。\n\ntenere 系: maintain（維持する）、contain（含む）、obtain（得る）、retain（保持する）、sustain（持続する）。",
      derivatives: [
        { word: "tenured",   desc: "終身在職権のある（形容詞）" },
        { word: "tenuous",   desc: "薄い・希薄な・弱い（形容詞）" }
      ],
      family: [
        { word: "maintain",  desc: "維持する（manus + tenere）" },
        { word: "retain",    desc: "保持する（re- + tenere）" },
        { word: "term",      desc: "期間・任期（terminus）" }
      ],
      compounds: [
        { phrase: "academic tenure",  desc: "大学教員の終身在職権" },
        { phrase: "tenure track",     desc: "テニュアトラック（終身職への道）" },
        { phrase: "land tenure",      desc: "土地保有（制度）" }
      ]
    },

    "critical": {
      origin: "ギリシャ語 kritikos（判断できる）< krinein（分ける・判断する）。字義は「分けることのできる → 批判的な・危機的な」。「批評・評価する能力がある」という肯定的意味と、「危機的な・緊急の・必不可欠の」という意味の両方を持つ。\n\n16世紀に英語に入り critical（批判的な・危機的な）として定着。critical thinking（批判的思考）、critical condition（危篤状態）、critical point（臨界点）、critical role（不可欠な役割）など多義的に使われる高頻度語。\n\nkrinein 系: criterion（判断基準）、crisis（危機）、critic（批評家）、hypocrite（偽善者）、discern（識別する）。critique（批評）はフランス語経由で同根。",
      derivatives: [
        { word: "critically",   desc: "批判的に・危機的に（副詞）" },
        { word: "criticism",    desc: "批判・批評（名詞）" },
        { word: "critic",       desc: "批評家・批判者（名詞）" },
        { word: "critique",     desc: "批評・批判文（名詞）" },
        { word: "criticize",    desc: "批判する・批評する（動詞）" }
      ],
      family: [
        { word: "criterion",  desc: "判断基準（krinein）" },
        { word: "crisis",     desc: "危機（krinein）" },
        { word: "discern",    desc: "識別する（dis- + cernere）" }
      ],
      compounds: [
        { phrase: "critical thinking",      desc: "批判的思考" },
        { phrase: "critical condition",     desc: "危篤状態" },
        { phrase: "play a critical role",   desc: "重要な役割を果たす" }
      ]
    },

    "criterion": {
      origin: "ギリシャ語 kriterion（判断の基準・尺度）< krinein（分ける・判断する）。字義は「判断するための道具・基準」。哲学・科学では真偽の判断基準を指した。\n\n17世紀に英語に入り criterion（判断基準・評価基準）として定着。複数形は criteria（クライテリア）で、criteria for selection（選考基準）、meet the criteria（基準を満たす）のように使われる。単数 criterion・複数 criteria の区別を誤りやすいので注意。\n\nkrinein 系: critical（批判的な）、crisis（危機）、critic（批評家）、hypocrite（偽善者）、discern（識別する）。",
      derivatives: [
        { word: "criteria",  desc: "基準の複数形（名詞）" }
      ],
      family: [
        { word: "critical",    desc: "批判的な（krinein）" },
        { word: "crisis",      desc: "危機（krinein）" },
        { word: "standard",    desc: "基準（standart：立てた旗）" },
        { word: "benchmark",   desc: "基準点・指標" }
      ],
      compounds: [
        { phrase: "selection criterion",    desc: "選考基準" },
        { phrase: "meet the criteria",      desc: "基準を満たす" },
        { phrase: "evaluation criteria",    desc: "評価基準" }
      ]
    },

    "crisis": {
      origin: "ギリシャ語 krisis（決定・転換点）< krinein（分ける・判断する）。医学では病気の転換点（悪化か回復か）を指し、ヒポクラテスが初めて医学用語として使った語。そこから「重大な局面・危機」という意味になった。\n\n15世紀に英語に入り crisis（危機・重大局面）として定着。financial crisis（金融危機）、midlife crisis（中年の危機）、identity crisis（アイデンティティの危機）など現代の社会・心理・経済語として非常に重要。複数形は crises（クライシーズ）。\n\nkrinein 系: critical（危機的な）、criterion（基準）、critic（批評家）、hypocrite（偽善者）。日本語の「クライシス」もこれから。",
      derivatives: [
        { word: "crises",  desc: "危機の複数形（名詞）" }
      ],
      family: [
        { word: "critical",     desc: "危機的な（krinein）" },
        { word: "criterion",    desc: "判断基準（krinein）" },
        { word: "emergency",    desc: "緊急事態（emergere）" },
        { word: "predicament",  desc: "苦境・窮地" }
      ],
      compounds: [
        { phrase: "financial crisis",   desc: "金融危機" },
        { phrase: "identity crisis",    desc: "アイデンティティの危機" },
        { phrase: "midlife crisis",     desc: "中年の危機" }
      ]
    },

    "hypocrite": {
      origin: "ギリシャ語 hypokritēs（舞台俳優）< hypo-（下から・こっそり）+ krinein（分ける・答える）。古代ギリシャ演劇で台の下から答える・仮面の役を演じる人を指し、「本当の自分を隠して演じる → 偽善者」という意味になった。\n\n14世紀に英語に入り hypocrite（偽善者）として定着。hypocrisy（偽善）は「言うことと行うことが違う」という道徳的批判に使われる。You're such a hypocrite.（本当に偽善者だ）のように日常でも使われる強い非難語。\n\nkrinein 系: critical（批判的な）、criterion（基準）、crisis（危機）。hypo-（下から）系: hypothesis（仮説：下に置かれたもの）、hypodermic（皮下の：皮膚の下）。",
      derivatives: [
        { word: "hypocrisy",     desc: "偽善（名詞）" },
        { word: "hypocritical",  desc: "偽善的な（形容詞）" },
        { word: "hypocritically", desc: "偽善的に（副詞）" }
      ],
      family: [
        { word: "critical",     desc: "批判的な（krinein）" },
        { word: "hypothesis",   desc: "仮説（hypo- + tithenai）" },
        { word: "pretender",    desc: "見せかける人（praetendere）" }
      ],
      compounds: [
        { phrase: "moral hypocrite",     desc: "道徳的偽善者" },
        { phrase: "rank hypocrisy",      desc: "あからさまな偽善" },
        { phrase: "accuse of hypocrisy", desc: "偽善だと非難する" }
      ]
    },

    "avert": {
      origin: "ラテン語 avertere（そらす・避ける）< a-（離れて）+ vertere（回す・向ける）。字義は「向きを変えて離れる → 回避する・そらす」。\n\n15世紀に英語に入り avert（回避する・そらす）として定着。avert a crisis（危機を回避する）、avert one's eyes（目をそらす）のように使われる。aversion（嫌悪・回避感）が派生し、have an aversion to（～が嫌いだ）という表現で使われる。\n\nvertere 系: convert（変換する）、reverse（逆にする）、introvert（内向きの人）、divert（そらす）、subvert（転覆する）、versatile（多才な）。",
      derivatives: [
        { word: "aversion",  desc: "嫌悪・回避（名詞）" },
        { word: "averse",    desc: "嫌悪している・反対の（形容詞）" },
        { word: "aversive",  desc: "嫌悪を引き起こす（形容詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con- + vertere）" },
        { word: "divert",     desc: "そらす（di- + vertere）" },
        { word: "reverse",    desc: "逆にする（re- + vertere）" },
        { word: "avoid",      desc: "避ける" }
      ],
      compounds: [
        { phrase: "avert a crisis",   desc: "危機を回避する" },
        { phrase: "avert one's eyes", desc: "目をそらす" },
        { phrase: "avert disaster",   desc: "惨事を防ぐ" }
      ]
    },

    "divert": {
      origin: "ラテン語 divertere（わき道にそれる）< di-（離れて）+ vertere（回す・向ける）。字義は「別の方向に向ける」で、注意・交通・資金などを別の方向に向けることを指す。\n\n15世紀に英語に入り divert（転換する・そらす・楽しませる）として定着。divert traffic（交通を迂回させる）、divert attention（注意をそらす）、divert funds（資金を流用する）のように使われる。diversion（気晴らし・迂回路）は交通・軍事・娯楽で幅広く使われる。\n\nvertere 系: convert（変換する）、reverse（逆にする）、avert（回避する）、versatile（多才な）、subvert（転覆する）。",
      derivatives: [
        { word: "diversion",      desc: "気晴らし・迂回・転換（名詞）" },
        { word: "diversionary",   desc: "注意をそらすための（形容詞）" },
        { word: "diverting",      desc: "楽しい・気晴らしになる（形容詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con- + vertere）" },
        { word: "avert",      desc: "回避する（a- + vertere）" },
        { word: "reverse",    desc: "逆にする（re- + vertere）" }
      ],
      compounds: [
        { phrase: "divert traffic",     desc: "交通を迂回させる" },
        { phrase: "divert attention",   desc: "注意をそらす" },
        { phrase: "divert funds",       desc: "資金を流用する・転用する" }
      ]
    },

    "versatile": {
      origin: "ラテン語 versatilis（容易に回転する・柔軟な）< versare（頻繁に回す）< vertere（回す・向ける）。字義は「いろいろな方向に回せる → 多用途の・多才な」。\n\n17世紀に英語に入り versatile（多才な・多用途の）として定着。a versatile actor（多才な俳優）、a versatile tool（多用途ツール）のように使われる。versatility（多才さ・応用性）が派生。verse（詩：行を変える）も同根で、詩の「行を返す」という動作から来ている。\n\nvertere 系: convert（変換する）、reverse（逆にする）、avert（回避する）、divert（そらす）。version（版・バージョン：方向を変えたもの）も同根。",
      derivatives: [
        { word: "versatility",  desc: "多才さ・多用途性（名詞）" },
        { word: "versatilely",  desc: "多才に・柔軟に（副詞）" }
      ],
      family: [
        { word: "convert",    desc: "変換する（con- + vertere）" },
        { word: "divert",     desc: "そらす（di- + vertere）" },
        { word: "avert",      desc: "回避する（a- + vertere）" },
        { word: "flexible",   desc: "柔軟な（flectere：曲げる）" }
      ],
      compounds: [
        { phrase: "versatile performer",  desc: "多才なパフォーマー" },
        { phrase: "versatile material",   desc: "多用途な素材" },
        { phrase: "show versatility",     desc: "多才さを示す" }
      ]
    },

    "capable": {
      origin: "ラテン語 capabilis（受け入れられる・十分大きい）< capere（取る・保持する・できる）。字義は「十分に持てる → ～する能力がある」。\n\n16世紀に英語に入り capable（能力がある・可能な）として定着。capable of doing（～することができる）、highly capable（非常に有能な）のように使われる。incapable（無能な）はその否定形。capability（能力）は軍事・ビジネスで重要語。\n\ncapere 系: capture（捕まえる）、captive（捕虜）、captivate（魅了する）、concept（概念）、accept（受け入れる）、perceive（知覚する）、intercept（遮る）。",
      derivatives: [
        { word: "capability",  desc: "能力・可能性（名詞）" },
        { word: "incapable",   desc: "無能な・できない（形容詞）" }
      ],
      family: [
        { word: "capture",    desc: "捕まえる（capere）" },
        { word: "captive",    desc: "捕虜（capere）" },
        { word: "competent",  desc: "有能な（competere）" },
        { word: "able",       desc: "できる（habilis）" }
      ],
      compounds: [
        { phrase: "capable of",           desc: "～することができる" },
        { phrase: "highly capable",       desc: "非常に有能な" },
        { phrase: "management capability", desc: "マネジメント能力" }
      ]
    },

    "capture": {
      origin: "ラテン語 captura（捕獲・漁獲）< capere（取る・捕まえる）。字義は「取ること・捕まえること」。\n\n16世紀に英語に入り capture（捕まえる・獲得する）として定着。capture a criminal（犯人を捕まえる）、capture market share（市場シェアを獲得する）、capture imagination（想像力を掴む）のように幅広く使われる。デジタル文脈ではデータ収集（data capture）や画像取り込み（screen capture）にも使われる。\n\ncapere 系: capable（能力がある）、captive（捕虜）、captivate（魅了する）、concept（概念）、accept（受け入れる）、intercept（遮る）。",
      derivatives: [
        { word: "captive",    desc: "捕虜・囚われた（名詞・形容詞）" },
        { word: "captivate",  desc: "魅了する（動詞）" },
        { word: "captor",     desc: "捕まえた人（名詞）" }
      ],
      family: [
        { word: "capable",   desc: "能力がある（capabilis）" },
        { word: "captive",   desc: "捕虜（captivus）" },
        { word: "seize",     desc: "つかむ・捕まえる" },
        { word: "acquire",   desc: "獲得する（ad- + quaerere）" }
      ],
      compounds: [
        { phrase: "screen capture",   desc: "スクリーンキャプチャ" },
        { phrase: "data capture",     desc: "データ収集" },
        { phrase: "capture the moment", desc: "瞬間を捉える" }
      ]
    },

    "captive": {
      origin: "ラテン語 captivus（捕まった・囚われた）< capere（取る・捕まえる）。字義は「捕まえられた → 捕虜・囚われ人」。名詞として「捕虜」、形容詞として「囚われた・自由のない」の両義を持つ。\n\n14世紀に英語に入り captive（捕虜・囚われた）として定着。captive audience（逃げられない聴衆：授業中の学生など）、captive market（逃げられない市場）のようにビジネス・マーケティングでも使われる。captivate（魅了する：心を捕まえる）が派生。\n\ncapere 系: capable（能力がある）、capture（捕まえる）、captivate（魅了する）。captivity（幽閉・捕囚状態）も重要。",
      derivatives: [
        { word: "captivity",   desc: "幽閉・捕囚（名詞）" },
        { word: "captivate",   desc: "魅了する・心を奪う（動詞）" },
        { word: "captivating", desc: "魅力的な・心を奪う（形容詞）" }
      ],
      family: [
        { word: "capable",   desc: "能力がある（capabilis）" },
        { word: "capture",   desc: "捕まえる（captura）" },
        { word: "prisoner",  desc: "囚人（prehendere）" }
      ],
      compounds: [
        { phrase: "captive audience",  desc: "逃げられない聴衆" },
        { phrase: "captive market",    desc: "逃げられない市場" },
        { phrase: "held captive",      desc: "捕虜として拘束された" }
      ]
    },

    "confer": {
      origin: "ラテン語 conferre（持ち寄る・比較する・授与する）< con-（共に）+ ferre（運ぶ・持つ）。字義は「持ち寄る → 協議する・授与する」。\n\n15世紀に英語に入り confer（協議する・授与する）として定着。confer with colleagues（同僚と協議する）、confer a degree（学位を授与する）のように使われる。conference（会議・協議会）は confer の名詞形で、press conference（記者会見）、video conference（テレビ会議）として日常的に使われる。\n\nferre 系: transfer（移転する）、refer（参照する）、prefer（好む）、differ（異なる）、infer（推測する）、offer（申し出る）、suffer（苦しむ）、fertile（肥沃な）。",
      derivatives: [
        { word: "conference",  desc: "会議・協議会（名詞）" },
        { word: "conferral",   desc: "授与（名詞）" }
      ],
      family: [
        { word: "transfer",  desc: "移転する（trans- + ferre）" },
        { word: "refer",     desc: "参照する（re- + ferre）" },
        { word: "prefer",    desc: "好む（pre- + ferre）" },
        { word: "infer",     desc: "推測する（in- + ferre）" }
      ],
      compounds: [
        { phrase: "confer a degree",   desc: "学位を授与する" },
        { phrase: "press conference",  desc: "記者会見" },
        { phrase: "video conference",  desc: "テレビ会議・ビデオ会議" }
      ]
    },

    "fertile": {
      origin: "ラテン語 fertilis（実り多い・肥えた）< ferre（運ぶ・産む・もたらす）。字義は「（実を）産む・もたらす → 肥沃な・多産な」。農地・生物・想像力などに使われる。\n\n16世紀に英語に入り fertile（肥沃な・多産な・豊かな）として定着。fertile soil（肥沃な土壌）、fertile imagination（豊かな想像力）のように使われる。fertilize（肥料を与える・受精させる）、fertility（肥沃さ・生殖能力）が派生。\n\nferre 系: transfer（移転する）、refer（参照する）、prefer（好む）、confer（授与する）。infertile（不妊の）、fertilizer（肥料）も重要語。",
      derivatives: [
        { word: "fertility",    desc: "肥沃さ・生殖能力（名詞）" },
        { word: "fertilize",    desc: "肥料を与える・受精させる（動詞）" },
        { word: "fertilizer",   desc: "肥料（名詞）" },
        { word: "infertile",    desc: "不妊の・不毛な（形容詞）" },
        { word: "infertility",  desc: "不妊・不毛（名詞）" }
      ],
      family: [
        { word: "confer",      desc: "授与する（con- + ferre）" },
        { word: "productive",  desc: "生産的な（producere）" },
        { word: "fruitful",    desc: "実り多い（fruit + ful）" }
      ],
      compounds: [
        { phrase: "fertile soil",         desc: "肥沃な土壌" },
        { phrase: "fertile ground",       desc: "肥沃な土地；有利な環境" },
        { phrase: "fertility rate",       desc: "出生率・繁殖率" }
      ]
    },

    "manufacture": {
      origin: "ラテン語 manu factura（手で作ること）< manus（手）+ factura（製作）< facere（作る）。字義は「手で作る」で、産業革命以降は機械による大量生産を指すようになった。\n\n16世紀に英語に入り manufacture（製造する・製造業）として定着。manufacturing industry（製造業）、date of manufacture（製造年月日）のように使われる。また「でっちあげる」という否定的な意味でも使われる（manufacture evidence）。\n\nmanus 系: manual（手動の）、manuscript（手書き原稿）、manipulate（操る）、mandate（命令）。facere 系: effect（結果）、affect（影響する）、efficient（効率的な）、factory（工場）。",
      derivatives: [
        { word: "manufacturer",   desc: "製造業者・メーカー（名詞）" },
        { word: "manufacturing",  desc: "製造業・製造の（名詞・形容詞）" },
        { word: "manufactured",   desc: "製造された・でっちあげの（形容詞）" }
      ],
      family: [
        { word: "manual",      desc: "手動の・マニュアル（manus）" },
        { word: "factory",     desc: "工場（factum：作られたもの）" },
        { word: "fabricate",   desc: "製造する・でっちあげる（fabrica）" }
      ],
      compounds: [
        { phrase: "manufacturing industry",  desc: "製造業" },
        { phrase: "manufacturing process",   desc: "製造工程" },
        { phrase: "date of manufacture",     desc: "製造年月日" }
      ]
    },

    "mandate": {
      origin: "ラテン語 mandatum（命令・委任）< manus（手）+ dare（与える）。字義は「手に委ねる → 命令・委任する」。\n\n16世紀に英語に入り mandate（命令・委任・使命）として定着。UN mandate（国連の委任）、election mandate（選挙による負託）、government mandate（政府の命令）のように政治・外交文書で使われる。mandatory（義務的な）が重要な派生語で、mandatory attendance（強制出席）のように使われる。\n\nmanus 系: manual（手動の）、manuscript（手書き原稿）、manipulate（操る）、manufacture（製造する）。dare（与える）系: data（与えられたもの）、date（日付）、tradition（伝統：伝え渡すもの）。",
      derivatives: [
        { word: "mandatory",    desc: "義務的な・強制的な（形容詞）" },
        { word: "mandatorily",  desc: "義務として・強制的に（副詞）" }
      ],
      family: [
        { word: "manual",        desc: "手動の・マニュアル（manus）" },
        { word: "order",         desc: "命令（ordinare）" },
        { word: "command",       desc: "命令（con- + mandare）" },
        { word: "instruction",   desc: "指示（instruere）" }
      ],
      compounds: [
        { phrase: "UN mandate",             desc: "国連の委任・任務" },
        { phrase: "election mandate",       desc: "選挙による国民の負託" },
        { phrase: "mandatory attendance",   desc: "強制出席" }
      ]
    },

    "trajectory": {
      origin: "ラテン語 trajectio（投げ渡す行為）< trans-（横切って）+ jacere（投げる）。字義は「横切って投げる → 飛行経路・軌跡」。物理学では projectile（飛翔体）の軌跡を指すが、比喩的にも広く使われる。\n\n17世紀に英語に入り trajectory（軌道・軌跡・歩み）として定着。the trajectory of a bullet（弾丸の軌跡）、career trajectory（キャリアの歩み）、economic trajectory（経済の軌跡）のように科学・社会科学で使われる。\n\njacere 系: project（投影する）、object（反対する）、subject（服従させる）、reject（拒否する）、inject（注入する）、eject（追い出す）。trans-（横切って）系: transfer（移転する）、transport（輸送する）、translate（翻訳する）。",
      derivatives: [
        { word: "trajectories",  desc: "軌跡の複数形（名詞）" }
      ],
      family: [
        { word: "project",   desc: "投影する（pro- + jacere）" },
        { word: "inject",    desc: "注入する（in- + jacere）" },
        { word: "eject",     desc: "追い出す（e- + jacere）" },
        { word: "path",      desc: "道・軌跡" }
      ],
      compounds: [
        { phrase: "career trajectory",    desc: "キャリアの軌跡・歩み" },
        { phrase: "flight trajectory",    desc: "飛行軌跡" },
        { phrase: "economic trajectory",  desc: "経済の軌跡・方向性" }
      ]
    },

    "revolt": {
      origin: "ラテン語 revolvere（巻き戻す）< re-（後ろに）+ volvere（巻く・回す）を語源とするイタリア語 rivoltare（反転する・反乱する）を経て英語に入った語。字義は「もとに向き直る → 反乱を起こす・嫌悪感を覚える」。\n\n16世紀に英語に入り revolt（反乱を起こす・嫌悪感を覚える）として定着。popular revolt（民衆の反乱）、This revolts me.（これは気持ち悪い）のように使われる。revolution（革命）は同じ語根 revolvere から派生した重要語。\n\nvolvere 系: evolve（進化する）、involve（含む）、revolve（回転する）、revolution（革命）。revolt と revolution の違い: revolt は短期的な反乱、revolution はより大規模な体制変革。",
      derivatives: [
        { word: "revolting",     desc: "反乱する；気持ち悪い（形容詞）" },
        { word: "revoltingly",   desc: "ひどく・嫌悪をもよおすほど（副詞）" },
        { word: "revolution",    desc: "革命・回転（re- + volvere）" }
      ],
      family: [
        { word: "revolve",      desc: "回転する（re- + volvere）" },
        { word: "involve",      desc: "含む（in- + volvere）" },
        { word: "revolution",   desc: "革命（revolvere）" },
        { word: "rebel",        desc: "反乱する（re- + bellum）" }
      ],
      compounds: [
        { phrase: "popular revolt",  desc: "民衆の反乱" },
        { phrase: "peasant revolt",  desc: "農民反乱" },
        { phrase: "staging a revolt", desc: "反乱を起こす" }
      ]
    },

    "volunteer": {
      origin: "ラテン語 voluntas（意志・意欲）< velle（望む・意志する）。フランス語 volontaire（自発的な）を経て英語に入った。字義は「自分の意志で行う → 自発的な・ボランティア」。\n\n17世紀に英語に入り volunteer（ボランティア・自発的に申し出る）として定着。volunteer for work（作業に自発的に手を挙げる）、volunteer information（自発的に情報を提供する）のように名詞・動詞・形容詞として使われる。\n\nvelle 系: voluntary（自発的な）、volition（意志・自由意志）、benevolent（善意の：bene + velle）。voluntary と volunteer の違い: voluntary は形容詞「自発的な」、volunteer は名詞・動詞「ボランティア（する）」。",
      derivatives: [
        { word: "voluntary",      desc: "自発的な・任意の（形容詞）" },
        { word: "voluntarily",    desc: "自発的に・任意で（副詞）" },
        { word: "volunteerism",   desc: "ボランティア精神（名詞）" },
        { word: "volition",       desc: "意志・自由意志（名詞）" }
      ],
      family: [
        { word: "voluntary",   desc: "自発的な（voluntas）" },
        { word: "volition",    desc: "意志（velle）" },
        { word: "benevolent",  desc: "善意の（bene + velle）" }
      ],
      compounds: [
        { phrase: "volunteer work",         desc: "ボランティア活動" },
        { phrase: "volunteer organization", desc: "ボランティア組織" },
        { phrase: "volunteer to do",        desc: "自発的に～を申し出る" }
      ]
    },

    // Batch 21: dict残り・flu/flux系・luc/lum系・greg系・hypo/hyper系・path残り・sol残り・polis系・tempor残り・adversary

    "diction": {
      origin: "ラテン語 dictio（言い方・言葉）< dicere（言う・話す）。字義は「言い方・言葉の選び方・発声」。\n\n16世紀に英語に入り diction（語法・言い回し・発声）として定着。詩的な poetic diction（詩語・詩的表現）として文学批評で使われ、俳優・アナウンサーの発声訓練でも clear diction（明瞭な発声）として重要。\n\ndicere 系: contradict（矛盾する）、predict（予言する）、verdict（評決）、dictate（口述する）、indicate（示す）、dedicate（捧げる）、addict（依存者）、dictionary（辞書）。",
      derivatives: [
        { word: "dictum",  desc: "格言・命令（名詞）" }
      ],
      family: [
        { word: "contradict",  desc: "矛盾する（contra- + dicere）" },
        { word: "predict",     desc: "予言する（pre- + dicere）" },
        { word: "dedicate",    desc: "捧げる（de- + dicare）" },
        { word: "addict",      desc: "依存者（ad- + dicere）" }
      ],
      compounds: [
        { phrase: "poetic diction",           desc: "詩語・詩的表現" },
        { phrase: "clear diction",            desc: "明瞭な発声" },
        { phrase: "diction and pronunciation", desc: "語法と発音" }
      ]
    },

    "dictionary": {
      origin: "中世ラテン語 dictionarium（辞書）< dictio（言葉・言い方）< dicere（言う）。字義は「言葉をまとめたもの → 辞書」。14世紀に初めて辞書的な参照書が作られ、この語が生まれた。\n\n15世紀に英語に入り dictionary（辞書・辞典）として定着。英語の最も有名な大辞典の一つは1755年のジョンソン博士の Dictionary of the English Language。現代では digital dictionary（電子辞書）、bilingual dictionary（二ヶ国語辞典）として使われる。\n\ndicere 系: diction（語法）、contradict（矛盾する）、predict（予言する）、verdict（評決）、dictate（口述する）。",
      derivatives: [
        { word: "diction",  desc: "語法・発声（名詞）" }
      ],
      family: [
        { word: "diction",   desc: "語法・言い方（dicere）" },
        { word: "lexicon",   desc: "語彙目録・辞典（lexikon）" },
        { word: "thesaurus", desc: "類義語辞典（thēsauros：宝物庫）" },
        { word: "glossary",  desc: "用語集（glossa：言葉）" }
      ],
      compounds: [
        { phrase: "English dictionary",    desc: "英語辞書" },
        { phrase: "bilingual dictionary",  desc: "二ヶ国語辞典" },
        { phrase: "digital dictionary",    desc: "電子辞書" }
      ]
    },

    "addict": {
      origin: "ラテン語 addictus（委ねられた・奴隷として与えられた）< ad-（に対して）+ dicere（言う・割り当てる）。ローマ法で「債務のため主人に引き渡された人」を指し、そこから「完全に捧げる → 依存する」という意味になった。\n\n16世紀に英語に入り addict（中毒者・依存させる）として定着。drug addict（薬物依存者）、Internet addict（インターネット依存者）のように使われる。addiction（依存症）はスマホ依存・ゲーム依存など現代社会の問題語として高頻度。\n\ndicere 系: diction（語法）、predict（予言する）、contradict（矛盾する）、dedicate（捧げる）。ad-（に向かって）系: attract（引きつける）、admit（認める）、advocate（弁護する）。",
      derivatives: [
        { word: "addiction",   desc: "依存症・中毒（名詞）" },
        { word: "addictive",   desc: "依存性のある・中毒性の（形容詞）" },
        { word: "addicted",    desc: "依存している・中毒の（形容詞）" }
      ],
      family: [
        { word: "dedicate",  desc: "捧げる・専念する（de- + dicare）" },
        { word: "hooked",    desc: "夢中になった（口語）" }
      ],
      compounds: [
        { phrase: "drug addict",          desc: "薬物依存者" },
        { phrase: "social media addict",  desc: "SNS依存者" },
        { phrase: "addiction treatment",  desc: "依存症治療" }
      ]
    },

    "dedicate": {
      origin: "ラテン語 dedicare（神に捧げる・聖別する）< de-（完全に）+ dicare（宣言する）< dicere（言う）。字義は「正式に宣言して捧げる」で、神殿・書物・人を特定の目的・神・人物に捧げることを指した。\n\n15世紀に英語に入り dedicate（捧げる・専念する）として定着。dedicate one's life to（～に人生を捧げる）、dedicated server（専用サーバー）のように使われる。dedication（献身・献呈文）は書物の冒頭に著者が感謝を示す「献辞」の意味でも使われる。\n\ndicere 系: diction（語法）、addict（中毒）、predict（予言する）、contradict（矛盾する）。de-（完全に）系: describe（記述する）、destroy（破壊する）。",
      derivatives: [
        { word: "dedicated",    desc: "献身的な・専用の（形容詞）" },
        { word: "dedication",   desc: "献身・専念・献呈文（名詞）" },
        { word: "dedicatory",   desc: "献呈の（形容詞）" }
      ],
      family: [
        { word: "diction",   desc: "語法（dicere）" },
        { word: "addict",    desc: "依存者（ad- + dicere）" },
        { word: "devote",    desc: "捧げる（de- + vovere）" },
        { word: "commit",    desc: "専念する（con- + mittere）" }
      ],
      compounds: [
        { phrase: "dedicate to",          desc: "～に捧げる・専念する" },
        { phrase: "dedicated server",     desc: "専用サーバー" },
        { phrase: "book dedication",      desc: "書物の献辞" }
      ]
    },

    "fluent": {
      origin: "ラテン語 fluens（流れる・なめらかな）< fluere（流れる）。字義は「水のように流れる → 流暢な」。言語が水のように滑らかに出てくるというメタファー。\n\n16世紀に英語に入り fluent（流暢な・流れるような）として定着。fluent in English（英語が流暢）、fluent speaker（流暢な話者）のように言語能力を表す形容詞として使われる。また流体力学でも「流れる」という意味で使われる。\n\nfluere 系: influence（影響：流れ込む）、affluent（豊かな：十分に流れる）、influx（流入）、confluence（合流点）、superfluous（余分な：流れ過ぎる）。",
      derivatives: [
        { word: "fluency",   desc: "流暢さ・流ちょうさ（名詞）" },
        { word: "fluently",  desc: "流暢に（副詞）" }
      ],
      family: [
        { word: "influence",  desc: "影響（in- + fluere）" },
        { word: "affluent",   desc: "裕福な（ad- + fluere）" },
        { word: "influx",     desc: "流入（in- + flux）" },
        { word: "fluid",      desc: "流体・流動的な（fluere）" }
      ],
      compounds: [
        { phrase: "fluent speaker",     desc: "流暢な話者" },
        { phrase: "fluent in English",  desc: "英語が流暢" },
        { phrase: "speak fluently",     desc: "流暢に話す" }
      ]
    },

    "influence": {
      origin: "中世ラテン語 influentia（流れ込み）< in-（中に）+ fluere（流れる）。もともと占星術で「星の力が地上に流れ込む」という意味だった。そこから「目に見えない力・影響力」という意味になった。\n\n14世紀に英語に入り influence（影響・影響力）として定着。have influence on（～に影響する）、under the influence（影響下で；飲酒運転でも使われる）のように使われる。influenza（インフルエンザ：星の影響で流行するという迷信から）も同根。\n\nfluere 系: fluent（流暢な）、affluent（豊かな）、influx（流入）、confluence（合流点）。",
      derivatives: [
        { word: "influential",   desc: "影響力のある（形容詞）" },
        { word: "influentially", desc: "影響力をもって（副詞）" },
        { word: "influencer",    desc: "インフルエンサー（名詞）" },
        { word: "influenza",     desc: "インフルエンザ（flu）（名詞）" }
      ],
      family: [
        { word: "fluent",    desc: "流暢な（fluere）" },
        { word: "affluent",  desc: "裕福な（ad- + fluere）" },
        { word: "influx",    desc: "流入（in- + flux）" },
        { word: "impact",    desc: "影響・衝撃（impingere）" }
      ],
      compounds: [
        { phrase: "have influence on",    desc: "～に影響を与える" },
        { phrase: "under the influence",  desc: "影響下で；飲酒して" },
        { phrase: "sphere of influence",  desc: "影響圏・勢力圏" }
      ]
    },

    "affluent": {
      origin: "ラテン語 affluens（流れ込む・豊富な）< ad-（に向かって）+ fluere（流れる）。字義は「（富が）向かって流れ込む → 豊かな・裕福な」。\n\n16世紀に英語に入り affluent（裕福な・豊かな）として定着。affluent society（豊かな社会）、affluent neighborhood（裕福な地区）のように使われる。affluence（富裕）は経済的豊かさを指す。ガルブレイスの著書「The Affluent Society（豊かな社会）」で有名になった語。\n\nfluere 系: fluent（流暢な）、influence（影響）、influx（流入）。af-（ad- の変形：に向かって）系: affect（影響する）、afford（支払える）。",
      derivatives: [
        { word: "affluence",   desc: "富裕・豊かさ（名詞）" },
        { word: "affluently",  desc: "豊かに・裕福に（副詞）" }
      ],
      family: [
        { word: "fluent",     desc: "流暢な（fluere）" },
        { word: "influence",  desc: "影響（in- + fluere）" },
        { word: "wealthy",    desc: "裕福な（wealt：富）" },
        { word: "prosperous", desc: "繁栄した（prosperare）" }
      ],
      compounds: [
        { phrase: "affluent society",   desc: "豊かな社会" },
        { phrase: "affluent suburb",    desc: "富裕な郊外地区" },
        { phrase: "new affluent class", desc: "新興富裕層" }
      ]
    },

    "conflict": {
      origin: "ラテン語 conflictus（衝突・打ち合い）< con-（共に）+ fligere（打つ・ぶつける）。字義は「互いに打ち合う → 衝突・対立」。\n\n15世紀に英語に入り conflict（対立・衝突・矛盾）として定着。名詞（armed conflict: 武力衝突）と動詞（conflicting schedules: 予定が重なる）の両用がある。conflict of interest（利益相反）は法律・ビジネス倫理で重要語。\n\nfligere 系: afflict（苦しめる）、inflict（与える：苦痛など）。con-（共に）系: contact（接触）、contract（契約）、contradict（矛盾する）。",
      derivatives: [
        { word: "conflicting",   desc: "矛盾する・対立する（形容詞）" },
        { word: "conflicted",    desc: "板挟みになった・葛藤した（形容詞）" }
      ],
      family: [
        { word: "afflict",       desc: "苦しめる（ad- + fligere）" },
        { word: "clash",         desc: "衝突する" },
        { word: "dispute",       desc: "争い・紛争（dis- + putare）" },
        { word: "contradiction", desc: "矛盾（contra- + dicere）" }
      ],
      compounds: [
        { phrase: "armed conflict",       desc: "武力衝突" },
        { phrase: "conflict of interest", desc: "利益相反" },
        { phrase: "conflict resolution",  desc: "紛争解決" }
      ]
    },

    "lucid": {
      origin: "ラテン語 lucidus（光る・明るい・明瞭な）< lux（光）。字義は「光のようにはっきりした → 明瞭な・正気の」。\n\n16世紀に英語に入り lucid（明瞭な・正気の・分かりやすい）として定着。lucid explanation（明快な説明）、lucid dream（明晰夢：夢の中で夢と気づいている状態）、lucid moment（正気の瞬間：認知症患者が一時的に正気に戻る）のように使われる。\n\nlux 系: illuminate（照らす）、luminous（発光する）、translucent（半透明の）、elucidate（明らかにする：lux + ex-）。",
      derivatives: [
        { word: "lucidity",   desc: "明瞭さ・正気（名詞）" },
        { word: "lucidly",    desc: "明瞭に（副詞）" },
        { word: "elucidate",  desc: "明らかにする（e- + lucidus）" }
      ],
      family: [
        { word: "illuminate",  desc: "照らす（in- + lumen）" },
        { word: "luminous",    desc: "発光する（lumen）" },
        { word: "translucent", desc: "半透明の（trans- + lux）" },
        { word: "clear",       desc: "明瞭な（clarus）" }
      ],
      compounds: [
        { phrase: "lucid dream",        desc: "明晰夢" },
        { phrase: "lucid explanation",  desc: "明快な説明" },
        { phrase: "lucid moment",       desc: "正気の瞬間" }
      ]
    },

    "luminous": {
      origin: "ラテン語 luminosus（光を発する・明るい）< lumen（光・灯り）。字義は「光を発する・光り輝く」。lux は光の明るさの SI 単位、lumen は光束の SI 単位として現代物理学でも使われる。\n\n15世紀に英語に入り luminous（発光する・光り輝く・明晰な）として定着。luminous paint（蓄光塗料）、luminous display（輝く表示）のように使われる。また比喩的に「明晰な・輝かしい」という意味でも使われる（luminous intellect）。\n\nlumen 系: illuminate（照らす）、luminosity（輝度）、bioluminescence（生物発光：生き物の発光）。lux 系: lucid（明瞭な）、translucent（半透明の）。",
      derivatives: [
        { word: "luminosity",       desc: "輝度・明るさ（名詞）" },
        { word: "luminously",       desc: "明るく・輝かしく（副詞）" },
        { word: "luminescence",     desc: "ルミネセンス・冷光（名詞）" },
        { word: "bioluminescence",  desc: "生物発光（名詞）" }
      ],
      family: [
        { word: "lucid",        desc: "明瞭な（lux）" },
        { word: "illuminate",   desc: "照らす（in- + lumen）" },
        { word: "translucent",  desc: "半透明の（trans- + lux）" },
        { word: "radiant",      desc: "輝く（radiare）" }
      ],
      compounds: [
        { phrase: "luminous paint",    desc: "蓄光塗料・夜光塗料" },
        { phrase: "luminous display",  desc: "輝く表示" },
        { phrase: "bioluminescent",    desc: "生物発光する（形容詞）" }
      ]
    },

    "illuminate": {
      origin: "ラテン語 illuminare（照らす）< in-（に向かって）+ luminare（光を当てる）< lumen（光）。字義は「光を当てる → 照らす・解明する」。中世では写本に金箔や彩色を施す「illuminated manuscript（彩色写本）」として使われた。\n\n15世紀に英語に入り illuminate（照らす・解明する）として定着。illuminate a problem（問題を解明する）、illuminated sign（電飾看板）のように使われる。啓蒙主義（Enlightenment）と関連して「知識の光で照らす」という比喩でも使われる。\n\nlumen 系: luminous（発光する）、luminosity（輝度）。in-（に向かって）系: inspire（鼓舞する）、inform（知らせる）、illuminate。",
      derivatives: [
        { word: "illumination",   desc: "照明・解明・啓発（名詞）" },
        { word: "illuminating",   desc: "啓発的な・有益な（形容詞）" },
        { word: "illuminated",    desc: "照らされた・彩色された（形容詞）" }
      ],
      family: [
        { word: "luminous",    desc: "発光する（lumen）" },
        { word: "lucid",       desc: "明瞭な（lux）" },
        { word: "translucent", desc: "半透明の（trans- + lux）" },
        { word: "enlighten",   desc: "啓発する（en- + light）" }
      ],
      compounds: [
        { phrase: "illuminate a problem",    desc: "問題を解明する" },
        { phrase: "illuminated manuscript",  desc: "彩色写本（中世）" },
        { phrase: "illumination festival",   desc: "イルミネーションフェスティバル" }
      ]
    },

    "translucent": {
      origin: "ラテン語 translucens（透き通って輝く）< trans-（貫いて）+ lucere（光る）< lux（光）。字義は「光が貫いて通る → 半透明の」。transparent（完全に透明：光と像が通る）との違い: translucent は光は通るが像は見えない（すりガラスなど）。\n\n16世紀に英語に入り translucent（半透明の・透き通った）として定着。translucent material（半透明素材）、translucent skin（透き通る肌）のように使われる。\n\nlux 系: lucid（明瞭な）、illuminate（照らす）、luminous（発光する）。trans-（貫いて）系: transparent（透明な：光と像が貫く）、transcend（超越する）、translate（翻訳する）。",
      derivatives: [
        { word: "translucence",   desc: "半透明さ（名詞）" },
        { word: "translucency",   desc: "半透明性（名詞）" }
      ],
      family: [
        { word: "lucid",        desc: "明瞭な（lux）" },
        { word: "luminous",     desc: "発光する（lumen）" },
        { word: "transparent",  desc: "透明な（trans- + parere）" },
        { word: "opaque",       desc: "不透明な（opacus）" }
      ],
      compounds: [
        { phrase: "translucent glass",     desc: "すりガラス・半透明ガラス" },
        { phrase: "translucent material",  desc: "半透明素材" }
      ]
    },

    "aggregate": {
      origin: "ラテン語 aggregatus（群れに加わった）< ad-（に向かって）+ gregare（群れにする）< grex（群れ・羊の群れ）。字義は「群れに加える → 集合させる・合計」。\n\n15世紀に英語に入り aggregate（集合体・総計・集積する）として定着。名詞（aggregate demand: 総需要）、動詞（aggregate data: データを集積する）、形容詞（aggregate result: 総合結果）の三用がある。\n\ngrex 系: congregate（集まる）、segregate（分離する）、gregarious（社交的な：群れを好む）。ad-（に向かって）系: attract（引きつける）、attach（付ける）。",
      derivatives: [
        { word: "aggregation",   desc: "集積・集合（名詞）" },
        { word: "aggregated",    desc: "集積された（形容詞）" },
        { word: "disaggregate",  desc: "分解する・分析する（動詞）" }
      ],
      family: [
        { word: "congregate",  desc: "集まる（con- + gregare）" },
        { word: "segregate",   desc: "分離する（se- + gregare）" },
        { word: "gregarious",  desc: "社交的な（gregarius）" },
        { word: "accumulate",  desc: "蓄積する（ad- + cumulus）" }
      ],
      compounds: [
        { phrase: "aggregate demand",  desc: "総需要（経済学）" },
        { phrase: "aggregate data",    desc: "集約データ" },
        { phrase: "in the aggregate",  desc: "全体として・総計で" }
      ]
    },

    "congregate": {
      origin: "ラテン語 congregare（群れに集める）< con-（共に）+ gregare（群れにする）< grex（群れ）。字義は「一緒に群れにする → 集合する」。宗教的な文脈では congregation（会衆）として礼拝のために集まった人々を指す。\n\n16世紀に英語に入り congregate（集合する・集まる）として定着。People congregated in the square（人々が広場に集まった）のように使われる。congregation（会衆・集会）は宗教用語として重要で、キリスト教の礼拝集団を指す。\n\ngrex 系: aggregate（集合体）、segregate（分離する）、gregarious（社交的な）。con-（共に）系: collect（集める）、convene（召集する）、combine（組み合わせる）。",
      derivatives: [
        { word: "congregation",    desc: "会衆・集会・群れ（名詞）" },
        { word: "congregational",  desc: "会衆の・集会の（形容詞）" }
      ],
      family: [
        { word: "aggregate",   desc: "集合体（ad- + gregare）" },
        { word: "segregate",   desc: "分離する（se- + gregare）" },
        { word: "gregarious",  desc: "社交的な（gregarius）" },
        { word: "assemble",    desc: "集まる（assemblare）" }
      ],
      compounds: [
        { phrase: "congregation of worshippers",  desc: "礼拝する会衆" },
        { phrase: "congregate online",            desc: "オンラインで集まる" },
        { phrase: "local congregation",           desc: "地域の礼拝集団" }
      ]
    },

    "segregate": {
      origin: "ラテン語 segregare（群れから分ける）< se-（離れて）+ gregare（群れにする）< grex（群れ）。字義は「群れから分ける → 分離する・隔離する」。\n\n16世紀に英語に入り segregate（分離する・隔離する）として定着。racial segregation（人種隔離政策）は特にアメリカ南部の歴史的な制度を指し、civil rights movement（公民権運動）の中心的なテーマ。desegregate（統合する）は segregate の反義語として重要。\n\ngrex 系: aggregate（集合体）、congregate（集まる）、gregarious（社交的な）。se-（離れて）系: separate（分ける）、seclude（隔離する）、secrete（分泌する）。",
      derivatives: [
        { word: "segregation",   desc: "分離・隔離（名詞）" },
        { word: "desegregate",   desc: "統合する・隔離をなくす（動詞）" },
        { word: "desegregation", desc: "統合・人種差別撤廃（名詞）" }
      ],
      family: [
        { word: "aggregate",   desc: "集合体（ad- + gregare）" },
        { word: "congregate",  desc: "集まる（con- + gregare）" },
        { word: "separate",    desc: "分ける（se- + parare）" },
        { word: "isolate",     desc: "隔離する（insula：島）" }
      ],
      compounds: [
        { phrase: "racial segregation",   desc: "人種隔離政策" },
        { phrase: "gender segregation",   desc: "性別による分離" },
        { phrase: "desegregate schools",  desc: "学校の人種統合" }
      ]
    },

    "gregarious": {
      origin: "ラテン語 gregarius（群れに属する）< grex（群れ・羊の群れ）。字義は「群れに属する → 群れを好む → 社交的な」。羊や鳥が群れで行動するように、人間も社会的に集まりたがる性質を指す。\n\n17世紀に英語に入り gregarious（社交的な・群れを好む）として定着。a gregarious person（社交的な人）、gregarious animals（群れで生活する動物）のように使われる。introvert（内向き）の対義語 extrovert（外向き）と意味が重なる。\n\ngrex 系: aggregate（集合体）、congregate（集まる）、segregate（分離する）。",
      derivatives: [
        { word: "gregariously",   desc: "社交的に（副詞）" },
        { word: "gregariousness", desc: "社交性・群れる習性（名詞）" }
      ],
      family: [
        { word: "aggregate",   desc: "集合体（ad- + gregare）" },
        { word: "congregate",  desc: "集まる（con- + gregare）" },
        { word: "segregate",   desc: "分離する（se- + gregare）" },
        { word: "sociable",    desc: "社交的な（socius：仲間）" }
      ],
      compounds: [
        { phrase: "highly gregarious",     desc: "非常に社交的な" },
        { phrase: "gregarious by nature",  desc: "生来の社交家" },
        { phrase: "gregarious personality", desc: "社交的な性格" }
      ]
    },

    "hypothesis": {
      origin: "ギリシャ語 hypothesis（基礎・仮定）< hypo-（下に）+ tithenai（置く）。字義は「下に置かれたもの → 前提・仮説」。科学的方法（scientific method）において、実験・観察によって検証される命題のこと。\n\n16世紀に英語に入り hypothesis（仮説・仮定）として定着。複数形は hypotheses（ハイポシーシーズ）。working hypothesis（作業仮説）、null hypothesis（帰無仮説：統計で棄却すべき仮説）は科学・統計の必須語。\n\ntithenai（置く）系: thesis（論題）、antithesis（対立命題）、synthesis（合成）、parenthesis（挿入句）。hypo-（下に）系: hypodermic（皮下の：皮膚の下）、hypocrite（偽善者：下から演じる）。",
      derivatives: [
        { word: "hypothetical",   desc: "仮説上の・仮定の（形容詞）" },
        { word: "hypothetically", desc: "仮説として・もしもの話として（副詞）" },
        { word: "hypothesize",    desc: "仮説を立てる（動詞）" },
        { word: "hypotheses",     desc: "仮説の複数形（名詞）" }
      ],
      family: [
        { word: "thesis",       desc: "論題（tithenai）" },
        { word: "antithesis",   desc: "対立命題（anti- + tithenai）" },
        { word: "synthesis",    desc: "合成（syn- + tithenai）" },
        { word: "assumption",   desc: "仮定（ad- + sumere）" }
      ],
      compounds: [
        { phrase: "working hypothesis",     desc: "作業仮説" },
        { phrase: "null hypothesis",        desc: "帰無仮説（統計）" },
        { phrase: "scientific hypothesis",  desc: "科学的仮説" }
      ]
    },

    "hyperbole": {
      origin: "ギリシャ語 hyperbolē（投げ越す・誇張）< hyper-（超えて）+ ballein（投げる）。字義は「限度を超えて投げる → 大げさな表現」。修辞学では実際より大げさに表現する比喩技法を指す。\n\n15世紀に英語に入り hyperbole（誇張法・誇張した表現）として定着。「I've told you a million times」（百万回言った）や「I'm dying of hunger」（腹ぺこで死にそう）などが例。hyperbolic（誇張した）は数学では「双曲線の」という意味も持つ。\n\nballein（投げる）系: ballistic（弾道の）、parabola（放物線：横に投げた）、symbol（一緒に投げたもの → 象徴）。hyper-（超えて）系: hyperactive（過活動の）、hypertension（高血圧）、hyperlink（ハイパーリンク）。",
      derivatives: [
        { word: "hyperbolic",    desc: "誇張した；双曲線の（形容詞）" },
        { word: "hyperbolically", desc: "誇張して（副詞）" }
      ],
      family: [
        { word: "exaggeration",  desc: "誇張（ex- + aggerare）" },
        { word: "overstatement", desc: "過大表現（over + state）" },
        { word: "metaphor",      desc: "隠喩（meta- + phora）" }
      ],
      compounds: [
        { phrase: "use hyperbole",        desc: "誇張法を使う" },
        { phrase: "literary hyperbole",   desc: "文学的誇張法" },
        { phrase: "deliberate hyperbole", desc: "意図的な誇張" }
      ]
    },

    "antipathy": {
      origin: "ギリシャ語 antipatheia（反感）< anti-（反対）+ pathos（感情・苦しみ）。字義は「逆の感情 → 嫌悪感・反感」。\n\n16世紀に英語に入り antipathy（嫌悪・反感）として定着。have an antipathy toward（～に反感を持つ）、mutual antipathy（互いの反感）のように使われる。sympathy（同情：共に感じる）、empathy（共感：中に感じる）、apathy（無関心：感情なし）と同根の対比が重要。\n\npathos 系: sympathy（同情：syn- + pathos）、empathy（共感：em- + pathos）、apathy（無関心：a- + pathos）、pathology（病理学）。anti-（反対）系: antivirus（ウイルス対策）、antisocial（反社会的な）。",
      derivatives: [
        { word: "antipathetic",  desc: "嫌悪感を持つ・反感のある（形容詞）" }
      ],
      family: [
        { word: "sympathy",  desc: "同情（syn- + pathos）" },
        { word: "empathy",   desc: "共感（em- + pathos）" },
        { word: "apathy",    desc: "無関心（a- + pathos）" },
        { word: "aversion",  desc: "嫌悪（a- + vertere）" }
      ],
      compounds: [
        { phrase: "mutual antipathy",    desc: "互いの反感" },
        { phrase: "deep antipathy",      desc: "深い嫌悪感" },
        { phrase: "antipathy towards",   desc: "～への反感" }
      ]
    },

    "isolate": {
      origin: "イタリア語 isolare（島にする・孤立させる）< isola（島）< ラテン語 insula（島）。字義は「島のように孤立させる → 隔離する・分離する」。\n\n18世紀に英語に入り isolate（隔離する・孤立させる）として定着。isolate a patient（患者を隔離する）、isolate a variable（変数を分離する）のように使われる。isolation（隔離・孤立）は COVID-19 パンデミックで非常に高頻度となった語。\n\ninsula（島）系: insulate（断熱する：島のように孤立させる）、insulin（インスリン：膵臓の島状の細胞から）、peninsula（半島：paene + insula = ほとんど島）。",
      derivatives: [
        { word: "isolation",     desc: "隔離・孤立（名詞）" },
        { word: "isolated",      desc: "孤立した・隔離された（形容詞）" },
        { word: "isolationism",  desc: "孤立主義（政治）（名詞）" },
        { word: "isolationist",  desc: "孤立主義者（名詞）" }
      ],
      family: [
        { word: "insulate",   desc: "断熱する（insula）" },
        { word: "solitary",   desc: "孤独な（solus）" },
        { word: "quarantine", desc: "検疫・隔離（quarantina）" },
        { word: "seclude",    desc: "隔離する（se- + claudere）" }
      ],
      compounds: [
        { phrase: "isolate patients",  desc: "患者を隔離する" },
        { phrase: "social isolation",  desc: "社会的孤立" },
        { phrase: "in isolation",      desc: "隔離されて・単独で" }
      ]
    },

    "metropolitan": {
      origin: "ギリシャ語 metropolis（母都市）< mētēr（母）+ polis（都市）。植民地を送り出した本国の都市を「母都市」と呼んだことに由来。そこから「首都・大都市」という意味になった。\n\n16世紀に英語に入り metropolitan（大都市の・首都の）として定着。metropolitan area（大都市圏）、metropolitan city（大都市）のように使われる。また宗教では大主教（archbishop）を metropolitan と呼ぶ。\n\npolis 系: politics（政治）、policy（政策）、police（警察）、cosmopolitan（世界都市的な：kosmos + polis）。mētēr（母）系: maternal（母の）、maternity（母性）、alma mater（母校）。",
      derivatives: [
        { word: "metropolis",     desc: "大都市・首都（名詞）" },
        { word: "metropolitanism", desc: "大都市主義（名詞）" }
      ],
      family: [
        { word: "cosmopolitan",  desc: "世界都市的な（kosmos + polis）" },
        { word: "police",        desc: "警察（polis）" },
        { word: "politics",      desc: "政治（polis）" },
        { word: "urban",         desc: "都市の（urbs：都市）" }
      ],
      compounds: [
        { phrase: "metropolitan area",   desc: "大都市圏" },
        { phrase: "metropolitan city",   desc: "大都市" },
        { phrase: "greater metropolitan", desc: "広域大都市圏" }
      ]
    },

    "police": {
      origin: "ギリシャ語 politeia（市政・統治）< polis（都市）。ラテン語 politia、フランス語 police を経て英語に入った。もともとは「都市の行政・統治全般」を指したが、次第に「公共秩序の維持」という意味に絞られた。\n\n15世紀に英語に入り police（警察・取り締まる）として定着。police officer（警察官）、police state（警察国家）のように使われる。動詞として「取り締まる・監視する」という意味でも使われる（police the internet: インターネットを監視する）。\n\npolis 系: politics（政治）、policy（政策）、metropolitan（大都市の）、cosmopolitan（世界都市的な）。同語源で政治（politics）と警察（police）がともに「都市の秩序管理」から来ていることが語源的に興味深い。",
      derivatives: [
        { word: "policeman",    desc: "警察官（男性）（名詞）" },
        { word: "policewoman",  desc: "警察官（女性）（名詞）" },
        { word: "policing",     desc: "警察活動・取り締まり（名詞）" }
      ],
      family: [
        { word: "metropolitan",   desc: "大都市の（metropolis）" },
        { word: "politics",       desc: "政治（polis）" },
        { word: "policy",         desc: "政策（politia）" }
      ],
      compounds: [
        { phrase: "police officer",  desc: "警察官" },
        { phrase: "police state",    desc: "警察国家" },
        { phrase: "riot police",     desc: "機動隊" }
      ]
    },

    "temperature": {
      origin: "ラテン語 temperatura（適切な混合・調節）< temperare（適切に混ぜる・和らげる）< tempus（時間・適切な時）。字義は「適切に調節された状態 → 温度・体温」。中世医学では四体液を「適切に混ぜた」状態が健康だとされ、そこから「温度・気温」という意味に発展した。\n\n16世紀に英語に入り temperature（温度・体温）として定着。body temperature（体温）、room temperature（室温）のように使われる。rise in temperature（温度上昇）は気候変動でも頻出語。\n\ntempus 系: temporary（一時的な）、contemporary（現代の）。temperare 系: temper（気質・怒り）、temperate（温帯の・穏やかな）。thermometer はギリシャ語 thermos（温かい）+ metron（計る）で別語源。",
      derivatives: [
        { word: "thermal",     desc: "熱の・温度の（形容詞、ギリシャ語 thermos）" },
        { word: "temperate",   desc: "温帯の・穏やかな（形容詞）" },
        { word: "temperance",  desc: "節制・禁酒（名詞）" }
      ],
      family: [
        { word: "temper",       desc: "気質・怒り（temperare）" },
        { word: "temporary",    desc: "一時的な（tempus）" },
        { word: "contemporary", desc: "現代の（con- + tempus）" }
      ],
      compounds: [
        { phrase: "body temperature",  desc: "体温" },
        { phrase: "room temperature",  desc: "室温" },
        { phrase: "temperature rise",  desc: "気温上昇・温度上昇" }
      ]
    },

    "temper": {
      origin: "ラテン語 temperare（適切に混ぜる・和らげる・調節する）< tempus（適切な時）。字義は「適切に調節する → 気質・感情を和らげる → 感情・怒り」。もともとは「混ぜ合わせて均衡をとる」という意味で、気質・脾気は四体液の「混合」によると考えられた中世医学からの意味発展。\n\n14世紀に英語に入り temper（気質・怒り・和らげる）として定着。lose one's temper（かっとなる）、bad temper（悪い気質）のように使われる。tempered steel（焼き入れした鋼鉄）のように金属加工でも使われる（熱処理で鋼を均質化する）。\n\ntemperare 系: temperature（温度）、temperate（温帯の・穏やかな）、temperament（気質）。tempus（時間）系: temporary（一時的な）、contemporary（現代の）。",
      derivatives: [
        { word: "temperament",  desc: "気質・性質（名詞）" },
        { word: "temperate",    desc: "温帯の・穏やかな（形容詞）" },
        { word: "temperance",   desc: "節制・禁酒（名詞）" },
        { word: "tempered",     desc: "鍛えられた・和らげた（形容詞）" }
      ],
      family: [
        { word: "temperature",  desc: "温度（temperare）" },
        { word: "temporary",    desc: "一時的な（tempus）" },
        { word: "mood",         desc: "気分・感情" }
      ],
      compounds: [
        { phrase: "lose one's temper",  desc: "かっとなる・激怒する" },
        { phrase: "bad temper",         desc: "短気・悪い気質" },
        { phrase: "temper tantrum",     desc: "かんしゃく・わがまま" }
      ]
    },

    "adversary": {
      origin: "ラテン語 adversarius（反対の・敵対者）< adversus（向かい合った・反対の）< ad-（に向かって）+ vertere（回す・向ける）。字義は「向きを変えて対峙する者 → 敵対者・反対者」。\n\n13世紀に英語に入り adversary（敵対者・対戦相手）として定着。in adversary proceedings（対審手続きで：法律用語）のように使われる。adversarial（敵対的な）は法律・外交・ゲーム理論で使われる形容詞。adversity（逆境）も同根で「向かい合った困難」という意味。\n\nvertere 系: convert（変換する）、reverse（逆にする）、avert（回避する）、divert（そらす）、versatile（多才な）。adverse（不利な・逆の）、adversity（逆境）が重要な派生語。",
      derivatives: [
        { word: "adversarial",  desc: "敵対的な・対立的な（形容詞）" },
        { word: "adverse",      desc: "不利な・逆の・有害な（形容詞）" },
        { word: "adversity",    desc: "逆境・困難（名詞）" }
      ],
      family: [
        { word: "avert",       desc: "回避する（a- + vertere）" },
        { word: "divert",      desc: "そらす（di- + vertere）" },
        { word: "opponent",    desc: "対戦相手（ob- + ponere）" },
        { word: "rival",       desc: "ライバル（rivalis）" }
      ],
      compounds: [
        { phrase: "adversarial relationship",  desc: "対立関係" },
        { phrase: "overcome adversity",        desc: "逆境を乗り越える" },
        { phrase: "adverse effect",            desc: "悪影響・副作用" }
      ]
    },

    // Batch 22: rupt系・mem/memor系・ann/enn系・cord/cor系・fin系・innov/renov系・stat系残り・century

    "rupture": {
      origin: "ラテン語 ruptura（破裂・断絶）< rumpere（割る・破る）。字義は「破ること・破れた状態」。\n\n16世紀に英語に入り rupture（破裂・断絶・断裂）として定着。医学では tendon rupture（腱断裂）、aneurysm rupture（動脈瘤破裂）のように使われる。外交では rupture in relations（関係の断絶）として使われる。動詞としても使われる（The pipe ruptured: パイプが破裂した）。\n\nrumpere 系: interrupt（遮る：inter- + rumpere）、erupt（噴出する：e- + rumpere）、disrupt（乱す：dis- + rumpere）、abrupt（突然の：ab- + rumpere）、corrupt（腐敗した：con- + rumpere）、bankrupt（破産した）。",
      derivatives: [
        { word: "ruptured",  desc: "破裂した・断裂した（形容詞）" }
      ],
      family: [
        { word: "interrupt",  desc: "遮る（inter- + rumpere）" },
        { word: "erupt",      desc: "噴出する（e- + rumpere）" },
        { word: "disrupt",    desc: "乱す（dis- + rumpere）" },
        { word: "abrupt",     desc: "突然の（ab- + rumpere）" }
      ],
      compounds: [
        { phrase: "tendon rupture",       desc: "腱断裂（医学）" },
        { phrase: "rupture of relations", desc: "関係の断絶" },
        { phrase: "pipe rupture",         desc: "パイプの破裂" }
      ]
    },

    "bankrupt": {
      origin: "イタリア語 banca rotta（壊れた机・破れた銀行台）< banca（机・銀行）+ rotta（割れた）< rumpere（割る）。中世イタリアで両替商が支払い不能になると、その銀行台（banca）を壊す習慣があったことに由来する。\n\n16世紀に英語に入り bankrupt（破産した・行き詰まった）として定着。go bankrupt（破産する）、morally bankrupt（道徳的に破綻した）のように使われる。bankruptcy（破産・倒産）は法律・経済の重要語。Chapter 11 bankruptcy（連邦破産法第11条）はアメリカの企業再生制度。\n\nrumpere 系: rupture（破裂）、interrupt（遮る）、erupt（噴出する）、disrupt（乱す）。bank（銀行）はイタリア語 banca（机・長椅子：両替商が使った台）から。",
      derivatives: [
        { word: "bankruptcy",  desc: "破産・倒産（名詞）" }
      ],
      family: [
        { word: "rupture",    desc: "破裂（rumpere）" },
        { word: "disrupt",    desc: "乱す（dis- + rumpere）" },
        { word: "insolvent",  desc: "支払い不能の（in- + solvere）" }
      ],
      compounds: [
        { phrase: "go bankrupt",        desc: "破産する・倒産する" },
        { phrase: "declare bankruptcy",  desc: "破産宣告をする" },
        { phrase: "morally bankrupt",    desc: "道徳的に破綻した" }
      ]
    },

    "memory": {
      origin: "ラテン語 memoria（記憶・思い出）< memor（心に留めている）< 印欧祖語 men-（考える・思う）。字義は「思い留めていること → 記憶」。\n\n14世紀に英語に入り memory（記憶・思い出）として定着。short-term memory（短期記憶）、long-term memory（長期記憶）は心理学の基本概念。コンピューターの memory（メモリ：情報を記憶する装置）も同じ語源から。\n\nmemoria 系: memorial（記念碑）、memoir（回想録）、commemorate（記念する）、remember（思い出す）、memorize（暗記する）、memorandum（覚書：memento）。",
      derivatives: [
        { word: "memorial",    desc: "記念碑・追悼の（名詞・形容詞）" },
        { word: "memorize",    desc: "暗記する（動詞）" },
        { word: "memorandum",  desc: "覚書・メモ（名詞）" },
        { word: "memorable",   desc: "記憶に残る（形容詞）" }
      ],
      family: [
        { word: "memorial",     desc: "記念碑（memoria）" },
        { word: "commemorate",  desc: "記念する（con- + memorare）" },
        { word: "remember",     desc: "思い出す（re- + memor）" },
        { word: "recall",       desc: "思い出す（re- + call）" }
      ],
      compounds: [
        { phrase: "short-term memory",  desc: "短期記憶" },
        { phrase: "long-term memory",   desc: "長期記憶" },
        { phrase: "memory loss",        desc: "記憶喪失" }
      ]
    },

    "memoir": {
      origin: "フランス語 mémoire（記憶・回想）< ラテン語 memoria（記憶）< memor（心に留めている）。字義は「記憶に基づく記録 → 回想録・自伝的エッセイ」。\n\n17世紀に英語に入り memoir（回想録・自伝）として定着。autobiography（自伝：生涯全体）より memoir は特定の経験・期間に焦点を当てた個人的記録を指す。複数形 memoirs として書かれることが多い（His memoirs were published posthumously）。\n\nmemoria 系: memory（記憶）、memorial（記念碑）、commemorate（記念する）、remember（思い出す）、memorize（暗記する）。",
      derivatives: [
        { word: "memoirist",  desc: "回想録の著者（名詞）" },
        { word: "memoirs",    desc: "回想録（複数形）" }
      ],
      family: [
        { word: "memory",        desc: "記憶（memoria）" },
        { word: "autobiography",  desc: "自伝（auto- + bios + graphia）" },
        { word: "reminiscence",   desc: "回想・追憶（reminisci）" }
      ],
      compounds: [
        { phrase: "write a memoir",    desc: "回想録を書く" },
        { phrase: "memoir literature", desc: "回想録文学" },
        { phrase: "war memoirs",       desc: "戦争回想録" }
      ]
    },

    "commemorate": {
      origin: "ラテン語 commemorare（共に記憶する・記念する）< con-（共に）+ memorare（思い出す）< memor（心に留めている）。字義は「みんなで一緒に思い出す → 記念する」。\n\n16世紀に英語に入り commemorate（記念する・追悼する）として定着。commemorate a victory（勝利を記念する）、commemorate the victims（犠牲者を追悼する）のように使われる。commemorative stamp（記念切手）、commemoration（記念式典）が派生。\n\nmemoria 系: memory（記憶）、memorial（記念碑）、memoir（回想録）、remember（思い出す）。con-（共に）系: celebrate（祝う）、honor（称える）、recognize（表彰する）。",
      derivatives: [
        { word: "commemorative",   desc: "記念の（形容詞）" },
        { word: "commemoration",   desc: "記念式典・追悼（名詞）" }
      ],
      family: [
        { word: "memory",   desc: "記憶（memoria）" },
        { word: "memorial", desc: "記念碑（memorialis）" },
        { word: "remember", desc: "思い出す（re- + memor）" },
        { word: "honor",    desc: "称える（honos）" }
      ],
      compounds: [
        { phrase: "commemorative stamp",     desc: "記念切手" },
        { phrase: "commemoration ceremony",  desc: "記念式典" },
        { phrase: "commemorate victims",     desc: "犠牲者を追悼する" }
      ]
    },

    "memorial": {
      origin: "ラテン語 memorialis（記憶に関する）< memoria（記憶）< memor（心に留めている）。字義は「記憶に関する → 記念の・追悼の」。\n\n14世紀に英語に入り memorial（記念碑・記念の）として定着。war memorial（戦争記念碑）、memorial service（追悼式）のように使われる。Memorial Day（戦没者追悼記念日）はアメリカの連邦祝日（5月最終月曜日）として重要。\n\nmemoria 系: memory（記憶）、memoir（回想録）、commemorate（記念する）、remember（思い出す）、memorize（暗記する）。",
      derivatives: [
        { word: "memorialize",  desc: "記念する・追悼する（動詞）" }
      ],
      family: [
        { word: "memory",       desc: "記憶（memoria）" },
        { word: "memoir",       desc: "回想録（memoria）" },
        { word: "monument",     desc: "記念碑（monere：思い出させる）" },
        { word: "commemorate",  desc: "記念する（con- + memorare）" }
      ],
      compounds: [
        { phrase: "war memorial",      desc: "戦争記念碑" },
        { phrase: "memorial service",  desc: "追悼式・記念式" },
        { phrase: "Memorial Day",      desc: "戦没者追悼記念日（米）" }
      ]
    },

    "remember": {
      origin: "ラテン語 rememorari（再び思い出す）< re-（再び）+ memorari（思い出す）< memor（心に留めている）。字義は「再び心に呼び戻す → 思い出す・覚えている」。\n\n14世紀に英語に入り remember（思い出す・覚えている）として定着。英語で最も頻繁に使われる語の一つ。remember + to do（忘れずに～する：未来志向）と remember + doing（～したことを覚えている：過去志向）の構文の区別が重要。\n\nmemoria 系: memory（記憶）、memoir（回想録）、commemorate（記念する）、memorial（記念碑）、memorize（暗記する）。re-（再び）系: recur（再び起こる）、return（戻る）、recall（思い出す）。",
      derivatives: [
        { word: "remembrance",  desc: "思い出・追悼（名詞）" }
      ],
      family: [
        { word: "memory",       desc: "記憶（memoria）" },
        { word: "memorial",     desc: "記念碑（memorialis）" },
        { word: "recall",       desc: "思い出す（re- + call）" },
        { word: "recollect",    desc: "思い出す（re- + colligere）" }
      ],
      compounds: [
        { phrase: "remember to do",       desc: "忘れずに～する（未来の行動）" },
        { phrase: "in remembrance of",    desc: "～を偲んで" },
        { phrase: "Remembrance Day",      desc: "戦没者追悼記念日（英連邦）" }
      ]
    },

    "annual": {
      origin: "ラテン語 annualis（年の・年ごとの）< annus（年）。字義は「年に一度の・年次の」。\n\n14世紀に英語に入り annual（年次の・毎年の）として定着。annual report（年次報告書）、annual salary（年俸）、annual meeting（年次総会）のように使われる。植物用語では annual（一年生植物：一年で生涯を終える植物）という意味もある（cf. perennial: 多年生植物）。\n\nannus 系: anniversary（記念日：annus + vertere）、perennial（多年生の・永続的な：per + annus）、biennial（二年ごとの：bi + annus）。",
      derivatives: [
        { word: "annually",    desc: "年に一度・毎年（副詞）" },
        { word: "annualize",   desc: "年率換算する（動詞）" },
        { word: "annuity",     desc: "年金・年金保険（名詞）" }
      ],
      family: [
        { word: "anniversary",  desc: "記念日（annus + vertere）" },
        { word: "perennial",    desc: "多年生の（per + annus）" },
        { word: "century",      desc: "世紀・100年（centum）" }
      ],
      compounds: [
        { phrase: "annual report",   desc: "年次報告書" },
        { phrase: "annual salary",   desc: "年俸" },
        { phrase: "annual meeting",  desc: "年次総会" }
      ]
    },

    "anniversary": {
      origin: "ラテン語 anniversarius（年ごとに戻る）< annus（年）+ vertere（回る）。字義は「年が回ってくる日 → 記念日・周年」。\n\n13世紀に英語に入り anniversary（記念日・周年）として定着。wedding anniversary（結婚記念日）、the 50th anniversary（50周年）のように使われる。最初は死者を祈る年忌（year's mind）を指した語で、祝日ではなく追悼の意味があった。\n\nannus 系: annual（年次の）、perennial（多年生の）。vertere 系: convert（変換する）、reverse（逆にする）、versatile（多才な）、anniversary（annus + vertere = 年が戻る）。",
      derivatives: [
        { word: "anniversaries",  desc: "記念日の複数形（名詞）" }
      ],
      family: [
        { word: "annual",      desc: "年次の（annus）" },
        { word: "perennial",   desc: "多年生の（per + annus）" },
        { word: "commemorate", desc: "記念する（con- + memorare）" }
      ],
      compounds: [
        { phrase: "wedding anniversary",    desc: "結婚記念日" },
        { phrase: "50th anniversary",       desc: "50周年" },
        { phrase: "anniversary celebration", desc: "周年記念祝賀" }
      ]
    },

    "perennial": {
      origin: "ラテン語 perennis（年中続く・永続する）< per-（通じて・完全に）+ annus（年）。字義は「年を通じて続く → 永続的な・多年生の」。\n\n17世紀に英語に入り perennial（多年生の・永続的な）として定着。植物学では perennial plant（多年生植物：毎年花を咲かせる）として使われる。比喩的に a perennial problem（ずっと続く問題）、a perennial favourite（定番の人気もの）のように使われる。\n\nannus 系: annual（年次の）、anniversary（記念日）、biennial（二年ごとの）。per-（通じて）系: perfect（完璧な）、permanent（永続的な）、persist（粘り続ける）。",
      derivatives: [
        { word: "perennially",  desc: "常に・永続的に（副詞）" },
        { word: "perennials",   desc: "多年生植物の複数形（名詞）" }
      ],
      family: [
        { word: "annual",      desc: "年次の・一年生の（annus）" },
        { word: "permanent",   desc: "永続的な（per- + manere）" },
        { word: "persistent",  desc: "しつこい・持続する（per- + sistere）" }
      ],
      compounds: [
        { phrase: "perennial plant",     desc: "多年生植物" },
        { phrase: "perennial problem",   desc: "永続的な・ずっとある問題" },
        { phrase: "perennial favourite", desc: "定番の人気もの" }
      ]
    },

    "accord": {
      origin: "ラテン語 accordare（心を合わせる・一致する）< ad-（に向かって）+ cor（心）。字義は「心を向け合わせる → 合意する・一致する」。\n\n13世紀に英語に入り accord（合意・協定・一致する）として定着。名詞（peace accord: 和平合意）と動詞（in accord with: ～と一致して）の両用がある。according to（～によると）も派生。of one's own accord（自発的に：自分の心から）という慣用句が重要。\n\ncor 系: record（記録する）、cordial（心からの）、concord（一致）、discord（不和）。con- + cor から consensus（合意）との語源的つながり。",
      derivatives: [
        { word: "accordance",   desc: "一致・調和（名詞）" },
        { word: "accordingly",  desc: "したがって・その結果（副詞）" },
        { word: "according",    desc: "～によると（前置詞的）" }
      ],
      family: [
        { word: "record",   desc: "記録する（re- + cor）" },
        { word: "cordial",  desc: "心からの（cor）" },
        { word: "concord",  desc: "一致・調和（con- + cor）" },
        { word: "discord",  desc: "不和（dis- + cor）" }
      ],
      compounds: [
        { phrase: "peace accord",          desc: "和平合意・和平協定" },
        { phrase: "in accord with",        desc: "～と一致して" },
        { phrase: "of one's own accord",   desc: "自発的に・自分の意志で" }
      ]
    },

    "record": {
      origin: "ラテン語 recordari（心に呼び戻す・記憶する）< re-（再び）+ cor（心）。字義は「心に呼び戻す → 記録する・思い出す」。もともとは「心で覚えている」という意味だったが、書面・音声に残すという意味に発展した。\n\n13世紀に英語に入り record（記録・レコード・記録する）として定着。名詞（world record: 世界記録）と動詞（record the data: データを記録する）の両用がある。アクセントが名詞（/ˈrekərd/）と動詞（/rɪˈkɔːrd/）で異なる点に注意。\n\ncor 系: accord（合意する）、cordial（心からの）、concord（一致）、discord（不和）。",
      derivatives: [
        { word: "recording",  desc: "録音・録画（名詞）" },
        { word: "recorder",   desc: "録音機・記録者（名詞）" },
        { word: "recorded",   desc: "録音された・記録された（形容詞）" }
      ],
      family: [
        { word: "accord",    desc: "合意する（ad- + cor）" },
        { word: "cordial",   desc: "心からの（cor）" },
        { word: "document",  desc: "文書・記録（documentum）" }
      ],
      compounds: [
        { phrase: "world record",     desc: "世界記録" },
        { phrase: "criminal record",  desc: "前科・犯罪歴" },
        { phrase: "record high",      desc: "記録的な高さ" }
      ]
    },

    "cordial": {
      origin: "ラテン語 cordialis（心からの）< cor（心）。字義は「心から来る → 心からの・心温まる」。\n\n14世紀に英語に入り cordial（心からの・温かい）として定着。cordial welcome（温かい歓迎）、cordial relations（友好的な関係）のように使われる。名詞として「コーディアル（甘い果汁飲料）」という意味もある。cordiality（親しみやすさ・温かさ）が派生。\n\ncor 系: accord（合意する）、record（記録する）、concord（一致）、discord（不和）。courage（勇気）も cor（心）から派生した語で、「心の強さ」から来る。",
      derivatives: [
        { word: "cordiality",  desc: "親しみやすさ・温かさ（名詞）" },
        { word: "cordially",   desc: "心から・温かく（副詞）" }
      ],
      family: [
        { word: "accord",    desc: "合意する（ad- + cor）" },
        { word: "record",    desc: "記録する（re- + cor）" },
        { word: "concord",   desc: "一致（con- + cor）" },
        { word: "courage",   desc: "勇気（cor：心の強さ）" }
      ],
      compounds: [
        { phrase: "cordial welcome",    desc: "温かい歓迎" },
        { phrase: "cordial relations",  desc: "友好的な関係" },
        { phrase: "cordial invitation", desc: "心からの招待" }
      ]
    },

    "concord": {
      origin: "ラテン語 concordia（一致・調和）< con-（共に）+ cor（心）。字義は「心が共にある → 一致・調和」。アメリカのコンコード（Concord）は独立戦争の最初の戦闘があった地名で、「調和」を願って命名された。\n\n14世紀に英語に入り concord（一致・調和）として定着。文法では concord of subject and verb（主語と動詞の一致）として使われる。音楽では協和音を concord と呼ぶ。対義語は discord（不和・不協和音）。\n\ncor 系: accord（合意する）、record（記録する）、cordial（心からの）、discord（不和）。con-（共に）系: consensus（合意）、cooperation（協力）。",
      derivatives: [
        { word: "concordance",  desc: "語句索引・一致（名詞）" },
        { word: "concordat",    desc: "協定・条約（名詞）" }
      ],
      family: [
        { word: "accord",    desc: "合意する（ad- + cor）" },
        { word: "record",    desc: "記録する（re- + cor）" },
        { word: "cordial",   desc: "心からの（cor）" },
        { word: "discord",   desc: "不和（dis- + cor）" }
      ],
      compounds: [
        { phrase: "in concord",           desc: "一致して・調和して" },
        { phrase: "subject-verb concord", desc: "主語と動詞の一致（文法）" }
      ]
    },

    "define": {
      origin: "ラテン語 definire（境界を定める・定義する）< de-（完全に）+ finis（境界・終わり）。字義は「境界を定める → 定義する・明確にする」。\n\n14世紀に英語に入り define（定義する・明確にする）として定着。define a word（単語を定義する）、define the problem（問題を明確にする）のように使われる。definition（定義）が重要な派生語。high definition（ハイデフィニション：高精細）は映像技術の重要語。\n\nfinis 系: finite（有限の）、infinite（無限の）、confine（制限する）、refine（精製する）、final（最後の）、finish（終わらせる）。de-（完全に）系: destroy（破壊する）、describe（記述する）、declare（宣言する）。",
      derivatives: [
        { word: "definition",   desc: "定義・解像度（名詞）" },
        { word: "definitive",   desc: "決定的な・最終的な（形容詞）" },
        { word: "redefine",     desc: "再定義する（動詞）" },
        { word: "undefined",    desc: "未定義の（形容詞）" }
      ],
      family: [
        { word: "finite",    desc: "有限の（finitus）" },
        { word: "infinite",  desc: "無限の（in- + finitus）" },
        { word: "confine",   desc: "制限する（con- + finis）" },
        { word: "refine",    desc: "精製する（re- + finis）" }
      ],
      compounds: [
        { phrase: "by definition",     desc: "定義上・当然" },
        { phrase: "working definition", desc: "作業上の定義" },
        { phrase: "high definition",   desc: "高精細（HD）" }
      ]
    },

    "finite": {
      origin: "ラテン語 finitus（終わった・限りのある）< finis（境界・終わり）の過去分詞。字義は「終わりがある → 有限の」。対義語は infinite（無限の）。\n\n15世紀に英語に入り finite（有限の・限りある）として定着。finite resources（有限な資源）、finite number（有限数）のように使われる。数学・論理学では finite set（有限集合）、finite state machine（有限状態機械）として重要。\n\nfinis 系: define（定義する）、infinite（無限の）、confine（制限する）、refine（精製する）、final（最後の）。",
      derivatives: [
        { word: "finitely",    desc: "有限に（副詞）" },
        { word: "finiteness",  desc: "有限性（名詞）" }
      ],
      family: [
        { word: "define",    desc: "定義する（de- + finis）" },
        { word: "infinite",  desc: "無限の（in- + finitus）" },
        { word: "confine",   desc: "制限する（con- + finis）" },
        { word: "limited",   desc: "限られた（limes：境界）" }
      ],
      compounds: [
        { phrase: "finite resources",     desc: "有限な資源" },
        { phrase: "finite set",           desc: "有限集合（数学）" },
        { phrase: "finite state machine", desc: "有限状態機械（情報工学）" }
      ]
    },

    "infinite": {
      origin: "ラテン語 infinitus（終わりのない・無限の）< in-（否定）+ finitus（終わった）< finis（境界・終わり）。字義は「終わりのない → 無限の」。\n\n14世紀に英語に入り infinite（無限の・果てしない）として定着。infinite possibilities（無限の可能性）、infinite patience（無限の忍耐）のように使われる。数学では∞（infinity）を表す概念。神学では神の infinite wisdom（無限の知恵）として使われる。\n\nfinis 系: define（定義する）、finite（有限の）、confine（制限する）、refine（精製する）。in-（否定）系: invisible（見えない）、inevitable（避けられない）、innumerable（無数の）。",
      derivatives: [
        { word: "infinity",       desc: "無限・無限大（名詞）" },
        { word: "infinitely",     desc: "無限に・非常に（副詞）" },
        { word: "infinitesimal",  desc: "無限小の・極微の（形容詞）" }
      ],
      family: [
        { word: "define",   desc: "定義する（de- + finis）" },
        { word: "finite",   desc: "有限の（finitus）" },
        { word: "confine",  desc: "制限する（con- + finis）" },
        { word: "endless",  desc: "果てしない（end + less）" }
      ],
      compounds: [
        { phrase: "infinite possibilities",  desc: "無限の可能性" },
        { phrase: "to infinity",             desc: "無限に・果てしなく" },
        { phrase: "infinite patience",       desc: "無限の忍耐力" }
      ]
    },

    "confine": {
      origin: "ラテン語 confinare（隣接する・制限する）< con-（共に）+ finis（境界）。字義は「境界を共にする → 境界内に閉じ込める → 制限する」。\n\n16世紀に英語に入り confine（制限する・閉じ込める）として定着。confined to bed（床に就いている）、confined space（閉鎖空間）のように使われる。名詞の confines（領域・境界）は within the confines of the law（法の範囲内で）のように使われる。\n\nfinis 系: define（定義する）、finite（有限の）、infinite（無限の）、refine（精製する）。con-（共に・強調）系: contain（含む）、construct（建設する）、constrain（制約する）。",
      derivatives: [
        { word: "confinement",  desc: "監禁・制限・産後の床（名詞）" },
        { word: "confined",     desc: "閉じ込められた・狭い（形容詞）" },
        { word: "confines",     desc: "領域・境界（名詞複数）" }
      ],
      family: [
        { word: "define",    desc: "定義する（de- + finis）" },
        { word: "finite",    desc: "有限の（finitus）" },
        { word: "restrict",  desc: "制限する（re- + strictus）" },
        { word: "limit",     desc: "制限する（limes：境界）" }
      ],
      compounds: [
        { phrase: "confined to bed",       desc: "床に就いている・寝たきり" },
        { phrase: "confined space",        desc: "閉鎖空間" },
        { phrase: "within the confines",   desc: "～の範囲内で" }
      ]
    },

    "refine": {
      origin: "ラテン語 refinare（精製する・洗練する）< re-（完全に）+ finare（終わらせる・最終状態にする）< finis（終わり・最終状態）。字義は「完全に純粋な最終状態にする → 精製する・洗練する」。\n\n16世紀に英語に入り refine（精製する・洗練する）として定着。refine oil（石油を精製する）、refine one's skills（スキルを磨く）のように使われる。refined（洗練された・上品な）は形容詞として重要。refinery（精製所・製油所）が派生。\n\nfinis 系: define（定義する）、finite（有限の）、infinite（無限の）、confine（制限する）。",
      derivatives: [
        { word: "refined",      desc: "洗練された・精製された（形容詞）" },
        { word: "refinement",   desc: "精製・洗練（名詞）" },
        { word: "refinery",     desc: "精製所・製油所（名詞）" },
        { word: "unrefined",    desc: "未精製の・粗野な（形容詞）" }
      ],
      family: [
        { word: "define",    desc: "定義する（de- + finis）" },
        { word: "purify",    desc: "純化する（purus）" },
        { word: "polish",    desc: "磨く・洗練する（polire）" }
      ],
      compounds: [
        { phrase: "oil refinery",   desc: "石油精製所" },
        { phrase: "refine skills",  desc: "スキルを磨く・洗練する" },
        { phrase: "refined taste",  desc: "洗練された趣味・上品な好み" }
      ]
    },

    "innovate": {
      origin: "ラテン語 innovare（新しくする・革新する）< in-（中に・完全に）+ novare（新しくする）< novus（新しい）。字義は「中で新しくする → 革新する・新機軸を打ち出す」。\n\n16世紀に英語に入り innovate（革新する・イノベーションを起こす）として定着。innovation（革新・イノベーション）はビジネス・技術の核心語。disruptive innovation（破壊的イノベーション：既存市場を覆す革新）はシリコンバレーでよく使われる概念。\n\nnovus 系: novel（新しい・小説）、novice（初心者）、renovate（改修する）。in-（完全に）系: insist（主張する）、inspire（鼓舞する）。",
      derivatives: [
        { word: "innovation",   desc: "革新・イノベーション（名詞）" },
        { word: "innovative",   desc: "革新的な・先進的な（形容詞）" },
        { word: "innovatively",  desc: "革新的に（副詞）" },
        { word: "innovator",    desc: "革新者・イノベーター（名詞）" }
      ],
      family: [
        { word: "renovate",  desc: "改修する（re- + novus）" },
        { word: "novel",     desc: "新しい・小説（novus）" },
        { word: "novice",    desc: "初心者（novus）" },
        { word: "pioneer",   desc: "開拓者（paionier）" }
      ],
      compounds: [
        { phrase: "drive innovation",        desc: "イノベーションを推進する" },
        { phrase: "innovative solution",     desc: "革新的な解決策" },
        { phrase: "disruptive innovation",   desc: "破壊的イノベーション" }
      ]
    },

    "renovate": {
      origin: "ラテン語 renovare（新しくする・刷新する）< re-（再び）+ novare（新しくする）< novus（新しい）。字義は「再び新しくする → 改修する・改装する」。\n\n17世紀に英語に入り renovate（改修する・改装する）として定着。renovate a building（建物を改修する）、renovated kitchen（改装されたキッチン）のように建物の修復・改装によく使われる。renovation（改修工事）が派生し、renovation project（改修プロジェクト）として使われる。\n\nnovus 系: novel（新しい・小説）、novice（初心者）、innovate（革新する）。re-（再び）系: renew（更新する）、restore（復元する）、reconstruct（再建する）。",
      derivatives: [
        { word: "renovation",  desc: "改修・改装（名詞）" },
        { word: "renovated",   desc: "改修された（形容詞）" }
      ],
      family: [
        { word: "innovate",  desc: "革新する（in- + novus）" },
        { word: "novel",     desc: "新しい・小説（novus）" },
        { word: "restore",   desc: "復元する（re- + staurare）" },
        { word: "refurbish",  desc: "改装する・磨き直す" }
      ],
      compounds: [
        { phrase: "renovate a house",    desc: "家を改修する" },
        { phrase: "renovation project",  desc: "改修プロジェクト" },
        { phrase: "home renovation",     desc: "住宅リノベーション" }
      ]
    },

    "status": {
      origin: "ラテン語 status（立っている状態・状態）< stare（立つ）。字義は「立っている様子 → 現在の状態・地位・身分」。\n\n17世紀に英語に入り status（状態・地位・身分）として定着。social status（社会的地位）、status quo（現状：ラテン語のまま英語で使われる）のように使われる。status symbol（地位の象徴）、status update（状況更新）など現代語でも頻出。\n\nstare 系: state（状態・国家）、station（駅・位置）、stable（安定した）、statue（彫像：立っているもの）、statute（法律）、institute（設立する）、constitute（構成する）。",
      derivatives: [
        { word: "status quo",  desc: "現状（ラテン語：the existing state）" }
      ],
      family: [
        { word: "state",    desc: "状態・国家（stare）" },
        { word: "station",  desc: "駅・位置（statio）" },
        { word: "stable",   desc: "安定した（stabilis）" },
        { word: "statute",  desc: "法律（statutum）" }
      ],
      compounds: [
        { phrase: "social status",   desc: "社会的地位" },
        { phrase: "status quo",      desc: "現状維持（ラテン語）" },
        { phrase: "status update",   desc: "状況更新" }
      ]
    },

    "stable": {
      origin: "ラテン語 stabilis（しっかり立っている・安定した）< stare（立つ）。字義は「しっかりと立っている → 安定した・馬小屋」。形容詞「安定した」と名詞「馬小屋」（馬が立って繋がれている場所）の両義を持つ。\n\n13世紀に英語に入り stable（安定した・馬小屋）として定着。stable condition（安定した状態：医学）、stable economy（安定した経済）のように使われる。establish（確立する：しっかりと立てる）、stability（安定性）が重要な派生語。\n\nstare 系: state（状態）、station（駅）、status（地位）、statue（彫像）、statute（法律）、establish（確立する）。",
      derivatives: [
        { word: "stability",   desc: "安定性（名詞）" },
        { word: "stabilize",   desc: "安定させる（動詞）" },
        { word: "stabilizer",  desc: "安定装置（名詞）" },
        { word: "unstable",    desc: "不安定な（形容詞）" }
      ],
      family: [
        { word: "status",   desc: "地位・状態（stare）" },
        { word: "state",    desc: "状態・国家（stare）" },
        { word: "steady",   desc: "安定した・着実な" },
        { word: "secure",   desc: "安全な・確実な（securus）" }
      ],
      compounds: [
        { phrase: "stable condition",  desc: "安定した状態（医学）" },
        { phrase: "stable economy",    desc: "安定した経済" },
        { phrase: "establish stability", desc: "安定性を確立する" }
      ]
    },

    "statute": {
      origin: "ラテン語 statutum（定められたもの）< statuere（立てる・設立する・定める）< stare（立つ）。字義は「立てられて定められたもの → 法令・成文法」。\n\n14世紀に英語に入り statute（法律・法令）として定着。statute law（成文法：議会が制定した法律）、statute of limitations（時効）のように法律用語として使われる。statutory（法定の）が重要な派生語で、statutory holiday（法定休日）のように使われる。\n\nstare 系: state（状態・国家）、station（駅）、status（地位）、stable（安定した）、statue（彫像）。statuere から: constitution（憲法：共に立てたもの）、institute（設立する）。",
      derivatives: [
        { word: "statutory",    desc: "法定の・法律上の（形容詞）" },
        { word: "statutes",     desc: "法令の複数形（名詞）" }
      ],
      family: [
        { word: "status",   desc: "地位・状態（stare）" },
        { word: "state",    desc: "状態・国家（stare）" },
        { word: "law",      desc: "法律（lagu）" },
        { word: "regulation", desc: "規制（regulare）" }
      ],
      compounds: [
        { phrase: "statute law",            desc: "成文法・制定法" },
        { phrase: "statute of limitations", desc: "時効（法律）" },
        { phrase: "statutory requirement",  desc: "法的要件" }
      ]
    },

    "century": {
      origin: "ラテン語 centuria（百人組・百年）< centum（百）。ローマ軍の百人隊（centurion が率いる部隊）を指す語が、「百年間」という意味に転用された。\n\n14世紀に英語に入り century（世紀・100年）として定着。the 21st century（21世紀）のように歴史の時代区分として使われる。cricket では century（センチュリー：100得点）という意味もある。centennial（100周年の）、bicentennial（200周年の）が派生。\n\ncentum 系: percent（百分率）、centimeter（センチメートル：100分の1メートル）、centigrade（摂氏：百分度）、centurion（百人隊長）。cent（セント：1/100ドル）も同根。",
      derivatives: [
        { word: "centuries",    desc: "世紀の複数形（名詞）" },
        { word: "centurion",    desc: "百人隊長（ローマ軍）（名詞）" },
        { word: "centennial",   desc: "100周年の（形容詞）" }
      ],
      family: [
        { word: "percent",     desc: "パーセント（centum）" },
        { word: "centimeter",  desc: "センチメートル（centum）" },
        { word: "decade",      desc: "10年・10（decem）" },
        { word: "millennium",  desc: "千年（mille）" }
      ],
      compounds: [
        { phrase: "21st century",       desc: "21世紀" },
        { phrase: "turn of the century", desc: "世紀の変わり目" },
        { phrase: "century-old",        desc: "100年以上の歴史を持つ" }
      ]
    },

    // Batch 23: just/jur系・domin系・leg/loy系・prim系・clud/clus残り・curs/curr残り・culp系・mater/patri系・supreme・legislate

    "justice": {
      origin: "ラテン語 justitia（正義・公正）< justus（公正な）< jus（法・権利）。字義は「法に基づく正しさ → 正義・司法」。\n\n13世紀に英語に入り justice（正義・裁判・判事）として定着。justice system（司法制度）、social justice（社会的正義）、Justice of the Supreme Court（最高裁判事）のように使われる。miscarriage of justice（冤罪・司法の誤り）は重要な慣用表現。\n\njus 系: justify（正当化する）、jurisdiction（管轄）、jury（陪審団）、injure（傷つける）、judge（裁判官）、judicial（司法の）、unjust（不公正な）。",
      derivatives: [
        { word: "unjust",    desc: "不公正な・不当な（形容詞）" },
        { word: "unjustly",  desc: "不当に（副詞）" }
      ],
      family: [
        { word: "justify",      desc: "正当化する（justus + facere）" },
        { word: "jurisdiction", desc: "管轄（jus + dicere）" },
        { word: "jury",         desc: "陪審団（jurare）" },
        { word: "fairness",     desc: "公平さ（fair）" }
      ],
      compounds: [
        { phrase: "social justice",          desc: "社会的正義" },
        { phrase: "miscarriage of justice",  desc: "冤罪・司法の誤り" },
        { phrase: "justice system",          desc: "司法制度" }
      ]
    },

    "justify": {
      origin: "ラテン語 justificare（正当化する）< justus（公正な）+ facere（作る）。字義は「正しく作る → 正当化する・理由を示す」。\n\n15世紀に英語に入り justify（正当化する・弁明する）として定着。justify a decision（決定を正当化する）、the end justifies the means（目的は手段を正当化する）のように使われる。印刷・DTP では justify（テキストを両端揃えにする）という意味もある。\n\njus 系: justice（正義）、jurisdiction（管轄）、jury（陪審団）、injure（傷つける）。facere 系: effect（結果）、efficient（効率的な）、manufacture（製造する）。",
      derivatives: [
        { word: "justification",  desc: "正当化・弁明（名詞）" },
        { word: "justified",      desc: "正当化された・正当な（形容詞）" },
        { word: "unjustified",    desc: "正当化されていない（形容詞）" }
      ],
      family: [
        { word: "justice",      desc: "正義（justus）" },
        { word: "rationalize",  desc: "合理化する（ratio）" },
        { word: "vindicate",    desc: "正当性を証明する（vindicare）" }
      ],
      compounds: [
        { phrase: "justify a decision",   desc: "決定を正当化する" },
        { phrase: "unjustified claim",    desc: "根拠のない主張" },
        { phrase: "right-justify text",   desc: "テキストを右揃えにする" }
      ]
    },

    "jurisdiction": {
      origin: "ラテン語 jurisdictio（法の宣言・管轄権）< jus（法）+ dicere（言う・宣言する）。字義は「法を宣言する権限 → 管轄権・司法権」。\n\n15世紀に英語に入り jurisdiction（管轄権・司法管轄区域）として定着。under the jurisdiction of（～の管轄下）、fall within someone's jurisdiction（誰かの管轄に入る）のように法律・行政文書で使われる。\n\njus 系: justice（正義）、justify（正当化する）、jury（陪審団）、injure（傷つける）。dicere 系: diction（語法）、dictate（口述する）、predict（予言する）、verdict（評決）。",
      derivatives: [
        { word: "jurisdictional",  desc: "管轄上の（形容詞）" }
      ],
      family: [
        { word: "justice",   desc: "正義・司法（justus）" },
        { word: "justify",   desc: "正当化する（justus + facere）" },
        { word: "authority", desc: "権威・権限（auctor）" },
        { word: "domain",    desc: "領域・管轄（dominus）" }
      ],
      compounds: [
        { phrase: "under jurisdiction",      desc: "～の管轄下にある" },
        { phrase: "federal jurisdiction",    desc: "連邦管轄権" },
        { phrase: "jurisdictional dispute",  desc: "管轄権紛争" }
      ]
    },

    "jury": {
      origin: "ラテン語 jurata（誓いを立てた者たち）< jurare（誓う）< jus（法・権利）。字義は「法の名のもとに誓った者たち → 陪審員」。\n\n14世紀に英語に入り jury（陪審団）として定着。trial by jury（陪審裁判）、jury duty（陪審義務）のように使われる。grand jury（大陪審：起訴の可否を決定する）、hung jury（評決が出ない陪審団）が重要。perjure oneself（偽証する：per- + jurare = 完全に誓いを裏切る）は同根。\n\njus 系: justice（正義）、justify（正当化する）、jurisdiction（管轄）、injure（傷つける）、perjury（偽証）。",
      derivatives: [
        { word: "juror",   desc: "陪審員（名詞）" },
        { word: "jurors",  desc: "陪審員の複数形（名詞）" }
      ],
      family: [
        { word: "justice",  desc: "正義・司法（justus）" },
        { word: "judge",    desc: "裁判官（judicare）" },
        { word: "verdict",  desc: "評決（vere dictum）" },
        { word: "panel",    desc: "委員会・審査員グループ" }
      ],
      compounds: [
        { phrase: "trial by jury",  desc: "陪審裁判" },
        { phrase: "jury duty",      desc: "陪審義務" },
        { phrase: "grand jury",     desc: "大陪審（起訴決定機関）" }
      ]
    },

    "injure": {
      origin: "ラテン語 injuria（不法・損害）< in-（否定）+ jus（法・権利）。字義は「法に反すること・不当な行為 → 傷つける」。\n\n15世紀に英語に入り injure（傷つける・侵害する）として定着。injure someone（人を傷つける）、injure one's reputation（評判を傷つける）のように使われる。injury（怪我・損傷）はスポーツ・医療・法律で頻出語。sports injury（スポーツ障害）、personal injury（身体的損害）が重要。\n\njus 系: justice（正義）、justify（正当化する）、jurisdiction（管轄）、jury（陪審団）。in-（否定）系: unjust（不公正な）、unjustified（不当な）。",
      derivatives: [
        { word: "injury",    desc: "怪我・損傷・損害（名詞）" },
        { word: "injured",   desc: "怪我をした・損害を受けた（形容詞）" },
        { word: "injurious", desc: "有害な・傷つける（形容詞）" }
      ],
      family: [
        { word: "justice",  desc: "正義（justus）" },
        { word: "harm",     desc: "害・傷（hearm）" },
        { word: "wound",    desc: "傷・負傷（wund）" },
        { word: "damage",   desc: "損害（damnum）" }
      ],
      compounds: [
        { phrase: "injure oneself",     desc: "けがをする" },
        { phrase: "personal injury",    desc: "身体的損害（法律）" },
        { phrase: "injury prevention",  desc: "けが予防" }
      ]
    },

    "dominate": {
      origin: "ラテン語 dominari（支配する）< dominus（主人・主）。dominus は domus（家）の主人から来ており、「家の主 → 支配者」という意味。\n\n15世紀に英語に入り dominate（支配する・優位に立つ）として定着。dominate the market（市場を支配する）、dominate the conversation（会話を独占する）のように使われる。生物学では dominant species（優位な種）が生態系を支配するという意味でも使われる。\n\ndominus 系: dominant（支配的な）、dominion（支配・領土）、domain（領域）、indomitable（屈しない）。domus（家）系: domestic（家庭の）、dome（ドーム：屋根）。",
      derivatives: [
        { word: "dominant",    desc: "支配的な・優位な（形容詞）" },
        { word: "dominance",   desc: "支配・優位（名詞）" },
        { word: "domination",  desc: "支配・制圧（名詞）" }
      ],
      family: [
        { word: "dominant",   desc: "支配的な（dominans）" },
        { word: "dominion",   desc: "支配・領土（dominium）" },
        { word: "domain",     desc: "領域（dominium）" },
        { word: "control",    desc: "支配・制御（controlare）" }
      ],
      compounds: [
        { phrase: "dominate the market",       desc: "市場を支配する" },
        { phrase: "dominate a conversation",   desc: "会話を独占する" },
        { phrase: "dominant position",         desc: "支配的な立場" }
      ]
    },

    "dominant": {
      origin: "ラテン語 dominans（支配している）< dominari（支配する）< dominus（主人）。字義は「支配している → 優位な・支配的な」。\n\n16世紀に英語に入り dominant（支配的な・優位な）として定着。dominant culture（支配的な文化）のように使われる。遺伝学では dominant allele（優性アレル）として、ある形質が現れやすい遺伝子型を指す。音楽では dominant（属音：スケールの5番目の音）という意味もある。\n\ndominus 系: dominate（支配する）、dominion（支配・領土）、domain（領域）、indomitable（屈しない）。",
      derivatives: [
        { word: "dominance",    desc: "支配・優位（名詞）" },
        { word: "dominantly",   desc: "支配的に・主に（副詞）" }
      ],
      family: [
        { word: "dominate",  desc: "支配する（dominari）" },
        { word: "dominion",  desc: "支配・領土（dominium）" },
        { word: "domain",    desc: "領域（dominium）" },
        { word: "superior",  desc: "優れた（superus）" }
      ],
      compounds: [
        { phrase: "dominant species",  desc: "優位な種（生態学）" },
        { phrase: "dominant culture",  desc: "支配的な文化" },
        { phrase: "market dominant",   desc: "市場支配的な" }
      ]
    },

    "dominion": {
      origin: "ラテン語 dominium（所有権・支配）< dominus（主人・主）。字義は「主人の権限 → 支配権・統治領域」。\n\n14世紀に英語に入り dominion（支配・領土・自治領）として定着。under the dominion of（～の支配下）、Dominion of Canada（カナダ自治領）のように使われる。英国連邦の「ドミニオン」（自治領：完全な主権を持つ独立国）は歴史的に重要な概念。\n\ndominus 系: dominate（支配する）、dominant（支配的な）、domain（領域）、indomitable（屈しない）。",
      derivatives: [
        { word: "dominions",  desc: "支配領域の複数形（名詞）" }
      ],
      family: [
        { word: "dominate",   desc: "支配する（dominari）" },
        { word: "domain",     desc: "領域（dominium）" },
        { word: "territory",  desc: "領土（terra：土地）" },
        { word: "sovereignty", desc: "主権（superanus）" }
      ],
      compounds: [
        { phrase: "under the dominion of",  desc: "～の支配下に" },
        { phrase: "British Dominion",       desc: "英国自治領" },
        { phrase: "world dominion",         desc: "世界支配" }
      ]
    },

    "domain": {
      origin: "ラテン語 dominium（所有権・領地）< dominus（主人）。フランス語 domaine を経て英語に入った。字義は「主人の所有する土地 → 領域・専門分野」。\n\n15世紀に英語に入り domain（領域・専門分野・ドメイン）として定着。public domain（パブリックドメイン：著作権が消滅した領域）、domain of expertise（専門分野）、internet domain name（インターネットドメイン名）のように幅広く使われる。\n\ndominus 系: dominate（支配する）、dominant（支配的な）、dominion（支配・領土）、domestic（家庭の：domus）。",
      derivatives: [
        { word: "subdomain",  desc: "サブドメイン（名詞）" }
      ],
      family: [
        { word: "dominate",   desc: "支配する（dominari）" },
        { word: "dominion",   desc: "支配・領土（dominium）" },
        { word: "territory",  desc: "領土（terra）" },
        { word: "sphere",     desc: "領域・球（sphaera）" }
      ],
      compounds: [
        { phrase: "public domain",       desc: "パブリックドメイン（著作権消滅）" },
        { phrase: "domain name",         desc: "ドメイン名（インターネット）" },
        { phrase: "domain of expertise", desc: "専門分野" }
      ]
    },

    "loyal": {
      origin: "ラテン語 legalis（法の・合法的な）< lex（法）。古フランス語 loial（法に従った・誠実な）を経て英語に入った。字義は「法に従った → 誠実な・忠実な」。\n\n16世紀に英語に入り loyal（忠実な・誠実な）として定着。loyal customer（常連客）、loyal supporter（熱心な支持者）のように使われる。法に従うことから「組織・人への誠実さ」という意味になった経緯が興味深い。\n\nlex 系: legal（法的な）、legitimate（合法的な）、legislation（立法）、loyalty（忠誠心）。royal（王の）は別語源（rex = king）なので混同注意。",
      derivatives: [
        { word: "loyalty",   desc: "忠誠心・誠実さ（名詞）" },
        { word: "loyally",   desc: "忠実に（副詞）" },
        { word: "loyalist",  desc: "忠誠派・王党派（名詞）" }
      ],
      family: [
        { word: "legal",      desc: "法的な（lex）" },
        { word: "legitimate", desc: "合法的な（legitimus）" },
        { word: "faithful",   desc: "誠実な（fides）" },
        { word: "devoted",    desc: "献身的な（devovere）" }
      ],
      compounds: [
        { phrase: "loyal customer",  desc: "常連客・リピーター" },
        { phrase: "loyal supporter", desc: "熱心な支持者" },
        { phrase: "brand loyalty",   desc: "ブランドロイヤルティ" }
      ]
    },

    "loyalty": {
      origin: "loyal（忠実な）に名詞化接尾辞 -ty を付けた語。ラテン語 legalis（法の）< lex（法）から、古フランス語 loial（誠実な）を経て英語に入った。字義は「誠実な状態・忠誠心」。\n\n14世紀に英語に入り loyalty（忠誠心・誠実さ）として定着。brand loyalty（ブランドへの忠誠心）、loyalty program（ポイントプログラム：英）、loyalty card（ポイントカード）のように現代のマーケティングでも重要語。\n\nlex 系: loyal（忠実な）、legal（法的な）、legitimate（合法的な）。royalty（王権・印税）は別語源（rex：王）なので混同しないこと。",
      derivatives: [
        { word: "loyal",       desc: "忠実な（形容詞）" },
        { word: "loyalist",    desc: "忠誠派（名詞）" },
        { word: "disloyalty",  desc: "不誠実・背信（名詞）" }
      ],
      family: [
        { word: "loyal",      desc: "忠実な（lex）" },
        { word: "allegiance", desc: "忠誠（liege：主君）" },
        { word: "devotion",   desc: "献身（devovere）" }
      ],
      compounds: [
        { phrase: "brand loyalty",    desc: "ブランドロイヤルティ" },
        { phrase: "loyalty card",     desc: "ポイントカード" },
        { phrase: "customer loyalty", desc: "顧客ロイヤルティ" }
      ]
    },

    "primary": {
      origin: "ラテン語 primarius（第一の・主要な）< primus（最初の・第一の）。字義は「最初の → 主要な・基本的な」。\n\n15世紀に英語に入り primary（主要な・基本的な・小学校の）として定着。primary school（小学校）、primary source（一次資料）、primary election（予備選挙）のように使われる。primary colors（原色）はデザイン・美術の必須語彙。\n\nprimus 系: prime（最盛期・第一の）、primitive（原始的な）、premier（首相・第一の）、supreme（最高の）。",
      derivatives: [
        { word: "primarily",  desc: "主として・まず（副詞）" },
        { word: "primacy",    desc: "第一位・首位（名詞）" }
      ],
      family: [
        { word: "prime",      desc: "最高の・最盛期（primus）" },
        { word: "primitive",  desc: "原始的な（primus）" },
        { word: "principal",  desc: "主要な・校長（primus）" },
        { word: "fundamental", desc: "基本的な（fundamentum）" }
      ],
      compounds: [
        { phrase: "primary school",    desc: "小学校" },
        { phrase: "primary source",    desc: "一次資料・一次文献" },
        { phrase: "primary election",  desc: "予備選挙" }
      ]
    },

    "prime": {
      origin: "ラテン語 primus（最初の・最上の）。字義は「最初の・最高の」。名詞（in one's prime: 最盛期に）、形容詞（prime minister: 首相）、動詞（prime a pump: ポンプに呼び水をする）の三用がある。\n\n14世紀に英語に入り prime（最初の・最高の・最盛期）として定着。prime minister（首相）、prime time（プライムタイム：視聴率最高の時間帯）、prime number（素数：1と自身以外で割り切れない最初の種類の数）のように使われる。\n\nprimus 系: primary（主要な）、primitive（原始的な）、premier（首相・最高の）、supreme（最高の）。prima facie（一見して：ラテン語のまま英語で使われる）も重要。",
      derivatives: [
        { word: "primarily",  desc: "主として（副詞）" },
        { word: "primer",     desc: "入門書・下地塗料（名詞）" },
        { word: "primal",     desc: "原始的な・根源的な（形容詞）" },
        { word: "premier",    desc: "首相・最高の（名詞・形容詞）" }
      ],
      family: [
        { word: "primary",    desc: "主要な（primarius）" },
        { word: "primitive",  desc: "原始的な（primitivus）" },
        { word: "supreme",    desc: "最高の（supremus）" }
      ],
      compounds: [
        { phrase: "prime minister",  desc: "首相" },
        { phrase: "prime time",      desc: "プライムタイム" },
        { phrase: "prime number",    desc: "素数" }
      ]
    },

    "primitive": {
      origin: "ラテン語 primitivus（最初の・原始の）< primus（最初の）。字義は「最初の種類の → 原始的な・初期の」。\n\n15世紀に英語に入り primitive（原始的な・未発達な・初期の）として定着。primitive society（原始社会）、primitive instinct（原始的な本能）のように使われる。数学では primitive function（原始関数：積分の逆）として使われる。文化人類学では「原始的」という表現は現在不適切とされ、indigenous（先住民の）などが好まれる。\n\nprimus 系: primary（主要な）、prime（最高の）、premier（首相）、supreme（最高の）。",
      derivatives: [
        { word: "primitively",   desc: "原始的に（副詞）" },
        { word: "primitivism",   desc: "原始主義（名詞）" }
      ],
      family: [
        { word: "primary",   desc: "主要な・基本的な（primarius）" },
        { word: "prime",     desc: "最高の・最盛期（primus）" },
        { word: "archaic",   desc: "古風な（arkhaios）" },
        { word: "ancient",   desc: "古代の（ante：前）" }
      ],
      compounds: [
        { phrase: "primitive society",    desc: "原始社会" },
        { phrase: "primitive technology", desc: "原始的な技術" },
        { phrase: "primitive instinct",   desc: "原始的な本能" }
      ]
    },

    "preclude": {
      origin: "ラテン語 praecludere（前もって閉じる・阻む）< prae-（前に）+ claudere（閉じる）。字義は「前もって閉じておく → 妨げる・不可能にする」。\n\n16世紀に英語に入り preclude（妨げる・不可能にする・排除する）として定着。preclude the possibility（可能性を排除する）、preclude someone from doing（誰かが～するのを妨げる）のように使われる。格式ある語で、prevent より強い「完全に不可能にする」というニュアンスがある。\n\nclaudere 系: conclude（結論を出す）、include（含む）、exclude（除外する）、seclusion（隔離）。prae-（前に）系: predict（予言する）、prevent（防ぐ）、previous（以前の）。",
      derivatives: [
        { word: "preclusion",   desc: "排除・阻止（名詞）" },
        { word: "preclusive",   desc: "排除する・阻止する（形容詞）" }
      ],
      family: [
        { word: "prevent",    desc: "防ぐ（prae- + venire）" },
        { word: "exclude",    desc: "除外する（ex- + claudere）" },
        { word: "eliminate",  desc: "取り除く（e- + limen）" }
      ],
      compounds: [
        { phrase: "preclude the possibility",  desc: "可能性を排除する" },
        { phrase: "preclude access",           desc: "アクセスを阻む" },
        { phrase: "preclude participation",    desc: "参加を妨げる" }
      ]
    },

    "seclusion": {
      origin: "ラテン語 seclusio（切り離す・隔離）< se-（離れて）+ claudere（閉じる）。字義は「閉じて切り離す → 隔離・孤立」。\n\n17世紀に英語に入り seclusion（孤立・隠遁・孤独）として定着。live in seclusion（隠遁生活を送る）、in the seclusion of one's home（自宅の静かな孤独の中で）のように使われる。secluded（人里離れた・隠れた）が形容詞として重要。\n\nclaudere 系: conclude（結論を出す）、include（含む）、exclude（除外する）、preclude（妨げる）。se-（離れて）系: separate（分ける）、secrete（分泌する）、segregate（分離する）。",
      derivatives: [
        { word: "secluded",   desc: "人里離れた・隔絶された（形容詞）" },
        { word: "seclusive",  desc: "孤立しがちな（形容詞）" }
      ],
      family: [
        { word: "isolation",  desc: "隔離・孤立（insula）" },
        { word: "solitude",   desc: "孤独・一人でいること（solus）" },
        { word: "preclude",   desc: "妨げる（prae- + claudere）" }
      ],
      compounds: [
        { phrase: "live in seclusion",   desc: "隠遁生活を送る" },
        { phrase: "secluded location",   desc: "人里離れた場所" },
        { phrase: "in seclusion",        desc: "孤独に・隔絶されて" }
      ]
    },

    "discourse": {
      origin: "ラテン語 discursus（走り回り・論議）< dis-（方々に）+ currere（走る）。字義は「あちこちに走る → 論じ回る → 言説・談話」。\n\n16世紀に英語に入り discourse（言説・談話・論文）として定着。academic discourse（学術的言説）、political discourse（政治的言説）のように使われる。フーコーなどの社会理論では discourse（言説）は「社会が特定の主題をどう語るか」という権力と知識の体系を指す重要な概念。\n\ncurrere 系: current（流れ）、curriculum（カリキュラム：走る経路）、occur（起こる）、recur（再発する）、course（経路）。",
      derivatives: [
        { word: "discursive",   desc: "散漫な・話題を転々とする（形容詞）" },
        { word: "discursively",  desc: "散漫に（副詞）" }
      ],
      family: [
        { word: "current",     desc: "流れ・現在の（currere）" },
        { word: "course",      desc: "経路・講座（cursus）" },
        { word: "dialogue",    desc: "対話（dia- + logos）" },
        { word: "narrative",   desc: "物語・語り（narrare）" }
      ],
      compounds: [
        { phrase: "academic discourse",   desc: "学術的言説" },
        { phrase: "political discourse",  desc: "政治的言説" },
        { phrase: "public discourse",     desc: "公共の議論" }
      ]
    },

    "course": {
      origin: "ラテン語 cursus（走り・行程・経路）< currere（走る）。字義は「走ること・走った経路」で、「コース・課程・一連の事柄」という多義語になった。\n\n13世紀に英語に入り course（コース・進路・講座・一品料理）として定着。course of action（行動方針）、university course（大学の授業）、main course（メインコース：料理）のように幅広く使われる。of course（もちろん：当然の経路として）は英語で最も頻繁な表現のひとつ。\n\ncurrere 系: current（流れ・現在の）、curriculum（カリキュラム）、occur（起こる）、recur（再発する）、discourse（言説）。",
      derivatives: [
        { word: "coursework",  desc: "課題・コースの学習活動（名詞）" }
      ],
      family: [
        { word: "current",    desc: "流れ・現在の（currere）" },
        { word: "curriculum", desc: "カリキュラム（currere）" },
        { word: "discourse",  desc: "言説（dis- + currere）" }
      ],
      compounds: [
        { phrase: "of course",         desc: "もちろん・当然" },
        { phrase: "course of action",  desc: "行動方針" },
        { phrase: "main course",       desc: "メインコース（料理）" }
      ]
    },

    "recourse": {
      origin: "ラテン語 recursus（逃げ帰ること・後退）< re-（後ろに）+ currere（走る）。字義は「後ろに走り戻る → 頼み事のために帰る → 手段として頼ること」。\n\n15世紀に英語に入り recourse（手段・頼ること）として定着。have recourse to（～に頼る）、without recourse（頼みなしに：法律用語で手形の無担保裏書）のように使われる。as a last resort と同義的に使われることが多い。\n\ncurrere 系: current（流れ）、course（経路）、discourse（言説）、curriculum（カリキュラム）、occur（起こる）。re-（後ろに）系: return（戻る）、reverse（逆にする）、recall（思い出す）。",
      derivatives: [
        { word: "recourses",  desc: "手段の複数形（名詞）" }
      ],
      family: [
        { word: "course",     desc: "経路・経緯（cursus）" },
        { word: "resource",   desc: "資源・手段（re- + source）" },
        { word: "resort",     desc: "頼ること・リゾート（re- + sortir）" }
      ],
      compounds: [
        { phrase: "have recourse to",   desc: "～に頼る・訴える" },
        { phrase: "without recourse",   desc: "頼みなしに（法律）" },
        { phrase: "as a last recourse", desc: "最後の手段として" }
      ]
    },

    "culpable": {
      origin: "ラテン語 culpabilis（責めるべき・有罪の）< culpa（過ち・罪）。字義は「責める価値がある → 有罪の・落ち度がある」。\n\n14世紀に英語に入り culpable（有罪の・落ち度のある）として定着。culpable negligence（過失：culpable homicide とも）のように法律・倫理文書で使われる格式語。mea culpa（私の過ち：カトリックの祈りの言葉）はラテン語のまま「認罪・謝罪」の意味で英語でも使われる。\n\nculpa 系: culprit（犯人）、exculpate（無罪にする）、inculpate（罪を着せる）。",
      derivatives: [
        { word: "culpability",  desc: "有罪性・責任（名詞）" },
        { word: "culpably",     desc: "責めに値する形で（副詞）" },
        { word: "exculpate",    desc: "無罪にする（ex- + culpa）" }
      ],
      family: [
        { word: "culprit",     desc: "犯人（culpa）" },
        { word: "blameworthy", desc: "非難に値する" },
        { word: "liable",      desc: "責任がある（ligare）" },
        { word: "guilty",      desc: "有罪の（gylt）" }
      ],
      compounds: [
        { phrase: "culpable negligence",  desc: "過失（法律）" },
        { phrase: "culpable homicide",    desc: "過失致死（法律）" },
        { phrase: "mea culpa",            desc: "私の誤り・謝罪（ラテン語）" }
      ]
    },

    "culprit": {
      origin: "英米法廷用語 culprit は Anglo-French の culpable（有罪の）+ prist/prit（用意できている）から来た法廷での略称。被告が罪状を否認すると、検察官が「有罪であり、証明の用意がある」と応答した言葉が縮まって culprit（犯人）となった。\n\n17世紀に英語に入り culprit（犯人・原因者）として定着。the culprit was caught（犯人が捕まった）、the culprit of the problem（問題の原因）のように使われる。比喩的に「問題の原因」という意味でも使われる（Sugar is the culprit for obesity: 砂糖が肥満の原因だ）。\n\nculpa 系: culpable（有罪の）、exculpate（無罪にする）。",
      derivatives: [
        { word: "culprits",  desc: "犯人の複数形（名詞）" }
      ],
      family: [
        { word: "culpable",    desc: "有罪の（culpa）" },
        { word: "criminal",    desc: "犯罪者（crimen）" },
        { word: "perpetrator", desc: "実行者（perpetrare）" },
        { word: "offender",    desc: "違反者（offendere）" }
      ],
      compounds: [
        { phrase: "identify the culprit",  desc: "犯人を特定する" },
        { phrase: "the real culprit",      desc: "真の犯人・真の原因" },
        { phrase: "culprit caught",        desc: "犯人逮捕" }
      ]
    },

    "paternal": {
      origin: "ラテン語 paternalis（父の・父方の）< pater（父）。字義は「父に属する・父方の」。\n\n16世紀に英語に入り paternal（父の・父方の・父親らしい）として定着。paternal grandparents（父方の祖父母）、paternal instinct（父性本能）のように使われる。paternalistic（父親的な：上位の者が子どもに接するように過保護に扱う）は否定的なニュアンスを持つ。\n\npater 系: patron（庇護者：父のような存在）、patriot（愛国者：父の国を愛する）、patriarch（家父長）、expatriate（国外在住者：父の国を出た者）。maternal（母方の）と対比して使われる。",
      derivatives: [
        { word: "paternally",     desc: "父親として・父方で（副詞）" },
        { word: "paternalism",    desc: "温情主義・家父長的支配（名詞）" },
        { word: "paternalistic",  desc: "父権的な・温情主義的な（形容詞）" }
      ],
      family: [
        { word: "maternal",   desc: "母の・母方の（mater）" },
        { word: "patriarch",  desc: "家父長（pater + arkhein）" },
        { word: "patron",     desc: "庇護者（pater）" },
        { word: "patriot",    desc: "愛国者（pater）" }
      ],
      compounds: [
        { phrase: "paternal grandparents",  desc: "父方の祖父母" },
        { phrase: "paternal instinct",      desc: "父性本能" },
        { phrase: "paternal side",          desc: "父方" }
      ]
    },

    "maternal": {
      origin: "ラテン語 maternalis（母の・母方の）< mater（母）。字義は「母に属する・母方の」。\n\n16世紀に英語に入り maternal（母の・母方の・母性の）として定着。maternal instinct（母性本能）、maternal grandparents（母方の祖父母）のように使われる。maternity（母性・産休：maternity leave）が重要な派生語。\n\nmater 系: maternity（母性）、matriarch（家母長）、matrix（子宮→母体→行列：数学）、alma mater（母校：ラテン語で「育ての母」）。maternal と paternal は対比で使われる。",
      derivatives: [
        { word: "maternity",    desc: "母性・産休（名詞）" },
        { word: "maternally",   desc: "母親として・母方で（副詞）" }
      ],
      family: [
        { word: "paternal",    desc: "父の・父方の（pater）" },
        { word: "matriarch",   desc: "家母長・女家長（mater）" },
        { word: "matrix",      desc: "母体・行列（mater）" },
        { word: "alma mater",  desc: "母校（ラテン語）" }
      ],
      compounds: [
        { phrase: "maternal instinct",     desc: "母性本能" },
        { phrase: "maternity leave",       desc: "産休・育児休暇" },
        { phrase: "maternal grandparents", desc: "母方の祖父母" }
      ]
    },

    "supreme": {
      origin: "ラテン語 supremus（最高の）< superus（高い）< super（上に）。字義は「最も上にある → 最高の・至上の」。\n\n15世紀に英語に入り supreme（最高の・最上位の）として定着。Supreme Court（最高裁判所）、supreme power（最高権力）のように使われる。supremacy（覇権・至上性）は geopolitics や国内政治で重要語。Air supremacy（制空権）のように軍事でも使われる。\n\nsuper 系: superior（優れた）、superlative（最上の）、supernatural（超自然の）、supervise（監督する）。primus 系: primary（主要な）、prime（最高の）、premier（首相）との意味的関連。",
      derivatives: [
        { word: "supremacy",    desc: "覇権・至上性（名詞）" },
        { word: "supremely",    desc: "最高に・この上なく（副詞）" },
        { word: "supremacist",  desc: "優越主義者（名詞）" }
      ],
      family: [
        { word: "primary",   desc: "主要な（primus）" },
        { word: "prime",     desc: "最高の（primus）" },
        { word: "superior",  desc: "優れた（superus）" },
        { word: "paramount", desc: "最重要の・最高位の" }
      ],
      compounds: [
        { phrase: "Supreme Court",  desc: "最高裁判所" },
        { phrase: "air supremacy",  desc: "制空権（軍事）" },
        { phrase: "supreme authority", desc: "最高権力" }
      ]
    },

    "legislate": {
      origin: "ラテン語 legis latio（法の提出・立法）< lex（法）の属格 legis + latus（運ばれた）< ferre（運ぶ）。字義は「法を提出する・立法する」。\n\n17世紀に英語に入り legislate（立法する・法律で規制する）として定着。legislate against discrimination（差別を法律で禁止する）、legislate for change（変革を法律で定める）のように使われる。legislation（法律・立法）、legislature（立法機関）が重要な派生語。\n\nlex 系: legal（法的な）、legitimate（合法的な）、loyal（忠実な）。ferre 系: transfer（移転する）、prefer（好む）、confer（授与する）。",
      derivatives: [
        { word: "legislation",   desc: "法律・立法（名詞）" },
        { word: "legislative",   desc: "立法の（形容詞）" },
        { word: "legislature",   desc: "立法機関・議会（名詞）" },
        { word: "legislator",    desc: "立法者・議員（名詞）" }
      ],
      family: [
        { word: "legal",      desc: "法的な（lex）" },
        { word: "law",        desc: "法律（lagu）" },
        { word: "regulate",   desc: "規制する（regula）" },
        { word: "statute",    desc: "法令（statutum）" }
      ],
      compounds: [
        { phrase: "legislate against",  desc: "～を法律で禁じる" },
        { phrase: "enact legislation",  desc: "立法する・法律を制定する" },
        { phrase: "legislative body",   desc: "立法機関" }
      ]
    },

    // ── Batch 24 ──────────────────────────────────────────────────────────

    // vert/vers系（残り）
    "revert": {
      origin: "ラテン語 revertere（再び向く・戻る）< re-（再び）+ vertere（向く・回す）。vertere は「向きを変える」を意味する語根で、convert・divert・avert などと同根。revertere は「元の方向に向き直る」という字義をもつ。\n\n中英語期にフランス語経由で英語に入り、revert（元に戻る・逆戻りする）として定着。法律用語・生物学・コンピュータ科学など広い分野で「以前の状態への復帰」を意味する。\n\n現代英語では「古い習慣や状態に戻る」という文脈で頻出し、software では「変更を元に戻す（revert a commit）」の意味でも日常的に使われる。",
      derivatives: [
        { word: "reversion",    desc: "復帰・逆戻り（名詞）" },
        { word: "reversible",   desc: "元に戻せる・可逆的な（形容詞）" },
        { word: "irreversible", desc: "不可逆の（形容詞）" }
      ],
      family: [
        { word: "convert",   desc: "変換する（con-）" },
        { word: "avert",     desc: "そらす（a-）" },
        { word: "divert",    desc: "転換する（di-）" },
        { word: "introvert", desc: "内向的な人（intro-）" }
      ],
      compounds: [
        { phrase: "revert to type",      desc: "本来の性質に戻る" },
        { phrase: "revert to a backup",  desc: "バックアップに戻す" }
      ]
    },

    "subvert": {
      origin: "ラテン語 subvertere（下から覆す）< sub-（下から）+ vertere（向く・回す）。「土台から引っくり返す」という字義で、権力・体制・道徳観念などを内側から崩す行為を指す。\n\n14世紀に英語に入り、主に政治・思想の文脈で「体制を転覆する」「秩序を乱す」意味として定着。subversion（転覆活動）という名詞形も広く使われた。\n\n現代英語では、権威・伝統・ジャンルの「意図的な掘り崩し」という意味でも使われ、文学批評や芸術批評でも頻出する語。",
      derivatives: [
        { word: "subversion",  desc: "転覆・破壊工作（名詞）" },
        { word: "subversive",  desc: "体制転覆的な（形容詞）" }
      ],
      family: [
        { word: "convert",  desc: "変換する（con-）" },
        { word: "revert",   desc: "元に戻る（re-）" },
        { word: "divert",   desc: "転換する（di-）" },
        { word: "pervert",  desc: "曲解する・変質させる（per-）" }
      ],
      compounds: [
        { phrase: "subvert the system",  desc: "体制を転覆する" },
        { phrase: "subversive activity", desc: "破壊工作・転覆活動" }
      ]
    },

    "extrovert": {
      origin: "ラテン語 extra（外）+ vertere（向く）を組み合わせた近代語。心理学者カール・ユングが introvert（内向型）の対語として20世紀初頭に体系化し、extrovert（外向型の人）として英語に定着した。\n\nintrovert が「内側に向く」ならば extrovert は「外側に向く」——関心・エネルギーが外の世界や他者に向かう傾向を指す。スペルは extravert とも書かれるが extrovert が最も一般的。\n\n現代の心理学では Big Five 性格特性の一つである「外向性（extraversion）」として測定される。社交的・刺激を好む・表現力豊かといった特性と結びつく。",
      derivatives: [
        { word: "extroverted",  desc: "外向的な（形容詞）" },
        { word: "extraversion", desc: "外向性（名詞）" }
      ],
      family: [
        { word: "introvert",  desc: "内向型の人（intro-）" },
        { word: "convert",    desc: "変換する（con-）" },
        { word: "divert",     desc: "転換する（di-）" },
        { word: "revert",     desc: "元に戻る（re-）" }
      ],
      compounds: [
        { phrase: "extrovert personality", desc: "外向的な性格" },
        { phrase: "classic extrovert",     desc: "典型的な外向型の人" }
      ]
    },

    "universe": {
      origin: "ラテン語 universus（全体として一方向に向けられた）< uni-（一つ）+ versus < vertere（向く）の過去分詞。「すべてが一方向に向けられた全体」、すなわち万物の総体を意味する。\n\n中英語・フランス語経由で14世紀に英語に入り、universe（宇宙・万物・世界全体）として定着。哲学・神学では「神が創造した秩序ある全体」という意味合いで用いられた。\n\n現代では天文学・物理学・哲学を横断して使われる語。「この宇宙（the observable universe）」から「特定の概念世界（the universe of discourse）」まで幅広い文脈で登場する。",
      derivatives: [
        { word: "universal",   desc: "普遍的な・全世界の（形容詞）" },
        { word: "universally", desc: "普遍的に（副詞）" },
        { word: "university",  desc: "大学（知識の全体を扱う場）" }
      ],
      family: [
        { word: "unity",    desc: "統一・一体性（uni-）" },
        { word: "convert",  desc: "変換する（vertere）" },
        { word: "uniform",  desc: "均一な（uni-）" },
        { word: "revert",   desc: "元に戻る（re-）" }
      ],
      compounds: [
        { phrase: "observable universe",    desc: "観測可能な宇宙" },
        { phrase: "universal health care",  desc: "普遍的医療保障" },
        { phrase: "universe of discourse",  desc: "議論の対象領域" }
      ]
    },

    // serv系（残り）
    "serve": {
      origin: "ラテン語 servire（奴隷として仕える・奉仕する）< servus（奴隷・召使）。古代ローマでは servus は財産として所有された奴隷を指し、servire はその「仕える行為」を意味した。\n\n古フランス語 servir を経て古英語期に英語に入り、serve（仕える・役立つ・給仕する）として定着。宗教的文脈では「神に仕える」という崇高な意味で、世俗的文脈では「食事を給仕する」「目的に役立つ」という意味で使われる。\n\n現代英語では多義語として幅広く使われ、serve a purpose（目的に役立つ）・serve time（服役する）・serve a customer（顧客に対応する）など文脈によって意味が変わる。",
      derivatives: [
        { word: "service",   desc: "サービス・奉仕・役務（名詞）" },
        { word: "servant",   desc: "召使・使用人（名詞）" },
        { word: "server",    desc: "サーバー・給仕係（名詞）" },
        { word: "servitude", desc: "隷属・強制労働（名詞）" }
      ],
      family: [
        { word: "preserve",  desc: "保存する（pre-）" },
        { word: "reserve",   desc: "予約する・保留する（re-）" },
        { word: "deserve",   desc: "～に値する（de-）" },
        { word: "observe",   desc: "観察する（ob-）" }
      ],
      compounds: [
        { phrase: "serve a purpose",  desc: "目的に役立つ" },
        { phrase: "serve time",       desc: "刑務所で服役する" },
        { phrase: "public service",   desc: "公共サービス・公務" }
      ]
    },

    "servant": {
      origin: "ラテン語 servire（仕える）の現在分詞 serviens（仕えている者）< servus（奴隷）。古フランス語 servant を経て中英語に入り、servant（召使・奉仕者）として定着。\n\n中世の封建社会では servant は貴族・王族に仕える下位の者を指したが、使用される文脈によって従者から秘書まで幅がある語だった。civil servant（公務員）という組み合わせは17世紀に登場する。\n\n現代英語では household servant（家事使用人）は歴史的な語感を持つが、public servant / civil servant（公務員）は現在でも標準的に使われる。",
      derivatives: [
        { word: "servitude", desc: "隷属・奴隷状態（名詞）" },
        { word: "servile",   desc: "卑屈な・奴隷的な（形容詞）" }
      ],
      family: [
        { word: "serve",    desc: "仕える（serv-）" },
        { word: "service",  desc: "奉仕・サービス（serv-）" },
        { word: "reserve",  desc: "保留する（re-）" },
        { word: "preserve", desc: "保存する（pre-）" }
      ],
      compounds: [
        { phrase: "civil servant",   desc: "公務員" },
        { phrase: "public servant",  desc: "公僕・公務員" },
        { phrase: "servant leader",  desc: "サーバント・リーダー（奉仕型リーダー）" }
      ]
    },

    "conserve": {
      origin: "ラテン語 conservare（共に保つ・守り続ける）< con-（共に・完全に）+ servare（守る・保存する）。servare は「監視して保つ」という意味で、observe（ob-+servare）とも同根。\n\n14世紀に英語に入り、conserve（保存する・節約する・自然を保護する）として定着。もともとは食物の保存を指したが、18世紀以降は自然・資源・エネルギーの保護にも使われるようになった。\n\n現代英語では conserve energy（エネルギーを節約する）・conserve natural resources（天然資源を保護する）のように、持続可能性の文脈で重要な動詞となっている。",
      derivatives: [
        { word: "conservation",  desc: "保護・保全・節約（名詞）" },
        { word: "conservative",  desc: "保守的な（形容詞）" },
        { word: "conservatism",  desc: "保守主義（名詞）" },
        { word: "conservatory",  desc: "温室・音楽院（名詞）" }
      ],
      family: [
        { word: "preserve",  desc: "保存する（pre-）" },
        { word: "reserve",   desc: "保留する（re-）" },
        { word: "observe",   desc: "観察する（ob-）" },
        { word: "deserve",   desc: "～に値する（de-）" }
      ],
      compounds: [
        { phrase: "conserve energy",           desc: "エネルギーを節約する" },
        { phrase: "nature conservation",       desc: "自然保護" },
        { phrase: "conservation of resources", desc: "資源の保全" }
      ]
    },

    // fac/fact系（残り）
    "factor": {
      origin: "ラテン語 factor（作る者・代理人）< facere（作る・行う）の能動者名詞。facere は「する・作る」という広義の語根で、fact・affect・manufacture・facility などと同根。\n\n中世ラテン語では商業上の代理人を指したが、英語には14世紀頃に入り factor（要因・因数・代理人）として定着。数学では「因数」、生物学では「要因」、ビジネスでは「売掛債権買取業者」など多義語として発展した。\n\n現代英語では最も一般的な意味は「要因・要素（a contributing factor）」であり、学術文脈や日常会話の両方で頻繁に使われる。",
      derivatives: [
        { word: "factorial",  desc: "階乗（数学）・因子の（形容詞）" },
        { word: "factoring",  desc: "因数分解・ファクタリング（名詞）" }
      ],
      family: [
        { word: "fact",        desc: "事実（facere の過去分詞）" },
        { word: "artifact",    desc: "人工物（arte+fact）" },
        { word: "manufacture", desc: "製造する（manu+facere）" },
        { word: "affect",      desc: "影響する（ad+facere）" }
      ],
      compounds: [
        { phrase: "risk factor",         desc: "危険因子・リスク要因" },
        { phrase: "contributing factor", desc: "寄与要因・一因" },
        { phrase: "factor in",           desc: "～を考慮に入れる" }
      ]
    },

    "facilitate": {
      origin: "ラテン語 facilis（容易な・しやすい）< facere（作る・する）の派生形容詞。facilis は「できる・取り扱いやすい」という意味で、facility（容易さ・施設）や difficult（di-+facilis、難しい）とも同根。\n\n17世紀に英語に入り、facilitate（容易にする・促進する・円滑化する）として定着。もともと「やりやすくする」という意味だったが、現代では「グループ活動を進行する」「プロセスを支援する」という意味でも多用される。\n\n現代英語ではビジネス・教育・行政の文脈で頻繁に登場し、facilitator（進行役・ファシリテーター）という語が会議やワークショップの司会者を指す語として定着している。",
      derivatives: [
        { word: "facilitation", desc: "促進・円滑化（名詞）" },
        { word: "facilitator",  desc: "進行役・ファシリテーター（名詞）" }
      ],
      family: [
        { word: "facility",  desc: "施設・容易さ（名詞）" },
        { word: "facile",    desc: "安易な・容易な（形容詞）" },
        { word: "factor",    desc: "要因（facere）" },
        { word: "difficult", desc: "困難な（di-+facilis）" }
      ],
      compounds: [
        { phrase: "facilitate communication", desc: "コミュニケーションを円滑にする" },
        { phrase: "facilitate learning",      desc: "学習を促進する" }
      ]
    },

    "facility": {
      origin: "ラテン語 facilitas（容易さ・なしやすさ）< facilis（容易な）< facere（する・作る）。「行いやすい状態・条件」という抽象名詞として成立し、後に「それを可能にする場所・設備」という具体的意味に発展。\n\n15世紀に英語に入り、facility（容易さ・施設・設備）として定着。複数形 facilities は「設備・施設一般」を意味し、educational facilities（教育施設）・medical facilities（医療設備）のように使われる。\n\n現代英語ではほぼ常に「施設・設備」の意味で使われ、「容易さ」の意味は with great facility（たやすく）のような文語的表現にのみ残る。",
      derivatives: [
        { word: "facilitate",  desc: "容易にする・促進する（動詞）" },
        { word: "facilitator", desc: "進行役（名詞）" }
      ],
      family: [
        { word: "facile",    desc: "安易な（形容詞）" },
        { word: "factor",    desc: "要因（名詞）" },
        { word: "faculty",   desc: "能力・学部（名詞）" },
        { word: "difficult", desc: "困難な（形容詞）" }
      ],
      compounds: [
        { phrase: "sports facility",     desc: "スポーツ施設" },
        { phrase: "production facility", desc: "生産設備" },
        { phrase: "with facility",       desc: "たやすく・流暢に（文語）" }
      ]
    },

    // ag/act系（残り）
    "action": {
      origin: "ラテン語 actio（行為・訴訟行為）< agere（行う・動かす）の過去分詞 actus + -io（名詞語尾）。agere は「駆り立てる・実行する」という語根で、agent・active・react などと同根。\n\n古フランス語 action を経て13世紀に英語に入り、action（行動・動作・訴訟）として定着。最初は法律用語として「訴訟」を意味したが、やがて「行動・動き」という広義で使われるようになった。\n\n現代英語では物理学（action and reaction）・映画（action film）・ビジネス（take action）・法律（legal action）と多分野にわたる。\"Actions speak louder than words\"（行動は言葉より雄弁だ）は有名な格言。",
      derivatives: [
        { word: "actionable",   desc: "訴訟の対象となる・実行可能な（形容詞）" },
        { word: "inaction",     desc: "不行動・無策（名詞）" },
        { word: "interaction",  desc: "相互作用・やりとり（名詞）" }
      ],
      family: [
        { word: "active",   desc: "活動的な（ag-）" },
        { word: "agent",    desc: "代理人（ag-）" },
        { word: "react",    desc: "反応する（re-）" },
        { word: "transact", desc: "取引する（trans-）" }
      ],
      compounds: [
        { phrase: "take action",  desc: "行動を起こす" },
        { phrase: "legal action", desc: "法的措置・訴訟" },
        { phrase: "action plan",  desc: "行動計画" }
      ]
    },

    "active": {
      origin: "ラテン語 activus（行動する能力がある・活動的な）< agere（行う）の過去分詞 actus + -ivus（形容詞語尾）。agere は「動かす・実行する」という語根で、action・agent・react などと同根。\n\n14世紀に英語に入り、active（活発な・活動中の・能動的な）として定着。文法用語としての「能動態（active voice）」は動詞が主語の動作を直接表す形式を指す。\n\n現代英語では物理学（active volcano）・コンピュータ（active user）・金融（active management）・日常会話（stay active）まで幅広く使われ、「受動的」を意味する passive との対比が明確。",
      derivatives: [
        { word: "actively",  desc: "積極的に（副詞）" },
        { word: "activate",  desc: "活性化する（動詞）" },
        { word: "activity",  desc: "活動・活性（名詞）" },
        { word: "proactive", desc: "先手を打つ・積極的な（形容詞）" }
      ],
      family: [
        { word: "action",  desc: "行動（ag-）" },
        { word: "agent",   desc: "代理人（ag-）" },
        { word: "react",   desc: "反応する（re-）" },
        { word: "passive", desc: "受動的な（反義語）" }
      ],
      compounds: [
        { phrase: "active voice",      desc: "能動態（文法）" },
        { phrase: "active volcano",    desc: "活火山" },
        { phrase: "proactive approach",desc: "積極的なアプローチ" }
      ]
    },

    "transaction": {
      origin: "ラテン語 transactio（取引・協定）< transigere（貫き通す・解決する）< trans-（越えて）+ agere（行う）。「双方が行為を通じ合わせる」という字義で、当事者間での交渉・合意を意味する。\n\n14世紀に英語に入り、transaction（取引・業務処理・やりとり）として定着。もともと法律・商業における契約交渉を指したが、コンピュータサイエンスの発達で「一連の処理単位（DB transaction）」という技術的意味も加わった。\n\n現代英語では金融・商業・IT の三領域で特に多用され、financial transaction（金融取引）・database transaction（DB トランザクション）は専門用語として確立している。",
      derivatives: [
        { word: "transact",      desc: "取引する・執行する（動詞）" },
        { word: "transactional", desc: "取引の・トランザクションの（形容詞）" }
      ],
      family: [
        { word: "action", desc: "行動（ag-）" },
        { word: "agent",  desc: "代理人（ag-）" },
        { word: "active", desc: "活発な（ag-）" },
        { word: "exact",  desc: "要求する（ex-+ag-）" }
      ],
      compounds: [
        { phrase: "financial transaction",  desc: "金融取引" },
        { phrase: "database transaction",   desc: "データベーストランザクション" },
        { phrase: "transaction cost",       desc: "取引コスト" }
      ]
    },

    // pos/posit系（残り）
    "position": {
      origin: "ラテン語 positio（置かれた状態・位置・立場）< ponere（置く）の過去分詞 positus + -io（名詞語尾）。ponere は「置く・配置する」という語根で、compose・impose・oppose・deposit などと同根。\n\n古フランス語 position を経て14世紀に英語に入り、position（位置・立場・職位・姿勢）として定着。軍事（position an army）・天文（position of a star）・ビジネス（job position）・スポーツと多領域で使われる多義語。\n\n現代英語では「職位・ポジション」という意味が最も一般的。また「立場・見解（take a position）」という意味でも頻繁に使われ、ニュアンスの幅が広い語。",
      derivatives: [
        { word: "positional", desc: "位置の・ポジションに関する（形容詞）" },
        { word: "reposition", desc: "再配置する・位置を変える（動詞）" }
      ],
      family: [
        { word: "positive", desc: "積極的な・肯定的な（ponere）" },
        { word: "compose",  desc: "構成する（com-）" },
        { word: "impose",   desc: "課す（im-）" },
        { word: "oppose",   desc: "反対する（op-）" }
      ],
      compounds: [
        { phrase: "take a position",  desc: "立場を取る・見解を示す" },
        { phrase: "job position",     desc: "職位・ポジション" },
        { phrase: "position paper",   desc: "政策文書・立場表明書" }
      ]
    },

    "positive": {
      origin: "ラテン語 positivus（確定された・実定された）< ponere（置く）の過去分詞 positus から。「実際に置かれた・確定した」という字義が「明確な・疑いない」という意味に発展し、さらに「肯定的・積極的」という現代的意味に至った。\n\n14世紀に英語に入り、positive（確定的な・肯定的な・積極的な）として定着。哲学・数学（正の数）・医学（陽性）・電気（正極）・心理学（ポジティブ思考）と多領域にわたる語。\n\n現代英語では「楽観的・前向き」という意味での使用が日常会話で特に多く、positive attitude（前向きな態度）・positive feedback（肯定的な評価）のように使われる。",
      derivatives: [
        { word: "positively", desc: "積極的に・確実に（副詞）" },
        { word: "positivity", desc: "ポジティブさ・陽性（名詞）" }
      ],
      family: [
        { word: "position", desc: "位置・立場（ponere）" },
        { word: "deposit",  desc: "預金・堆積物（de-）" },
        { word: "impose",   desc: "課す（im-）" },
        { word: "compose",  desc: "構成する（com-）" }
      ],
      compounds: [
        { phrase: "positive thinking",  desc: "ポジティブシンキング" },
        { phrase: "test positive",      desc: "陽性と判定される" },
        { phrase: "positive feedback",  desc: "肯定的フィードバック・正のフィードバック" }
      ]
    },

    "deposit": {
      origin: "ラテン語 depositum（預けられたもの）< deponere（下に置く・預ける）< de-（下に）+ ponere（置く）。「手元から下に置いて預ける」という字義で、保管・保証金・地質学的堆積まで意味が広がる。\n\n14世紀に英語に入り、deposit（預金する・堆積する・保証金）として定着。銀行用語として「預け入れ（bank deposit）」、地質学で「鉱床・堆積物（mineral deposit）」、契約で「敷金・保証金（security deposit）」の意味で使われる。\n\n現代英語では金融・不動産・地質学の三分野で特に重要な語。動詞・名詞ともに使われ、deposit money（お金を預ける）・leave a deposit（手付金を置く）が典型的な用法。",
      derivatives: [
        { word: "deposition", desc: "堆積・証言・罷免（名詞）" },
        { word: "depositor",  desc: "預金者（名詞）" }
      ],
      family: [
        { word: "position", desc: "位置・立場（ponere）" },
        { word: "positive", desc: "肯定的な（ponere）" },
        { word: "compose",  desc: "構成する（com-）" },
        { word: "impose",   desc: "課す（im-）" }
      ],
      compounds: [
        { phrase: "bank deposit",     desc: "銀行預金" },
        { phrase: "security deposit", desc: "敷金・保証金" },
        { phrase: "mineral deposit",  desc: "鉱床" }
      ]
    },

    "dispose": {
      origin: "ラテン語 disponere（分散して配置する）< dis-（離れて）+ ponere（置く）。「あちこちに配置する→処理する・捨てる」という意味に発展した。フランス語 disposer を経て英語に入った。\n\n14世紀に英語に入り、dispose（処分する・配置する・態度を決める）として定着。dispose of（処分する・片付ける）という句動詞が特に頻繁に使われ、廃棄物・財産・問題の「片付け」全般を指す。\n\n現代英語では environmental disposal（環境上の廃棄処理）・waste disposal（廃棄物処理）のように環境・行政の文脈で重要で、また well-disposed（好意的な態度の）のように態度を表す形容詞用法もある。",
      derivatives: [
        { word: "disposal",     desc: "処分・廃棄・配置（名詞）" },
        { word: "disposition",  desc: "気質・配置・処分（名詞）" }
      ],
      family: [
        { word: "compose",  desc: "構成する（com-）" },
        { word: "impose",   desc: "課す（im-）" },
        { word: "oppose",   desc: "反対する（op-）" },
        { word: "expose",   desc: "さらす（ex-）" }
      ],
      compounds: [
        { phrase: "dispose of",       desc: "処分する・片付ける" },
        { phrase: "waste disposal",   desc: "廃棄物処理" },
        { phrase: "at your disposal", desc: "ご自由にお使いください" }
      ]
    },

    // gress系（残り）
    "transgress": {
      origin: "ラテン語 transgredi（越えて進む・踏み越える）< trans-（越えて）+ gradi（歩く・進む）。「境界線を踏み越える」という字義で、道徳・法律・社会規範の「越境」を意味する。\n\n14世紀に英語に入り、transgress（（規則・道徳を）犯す・越える）として定着。宗教的文脈では「神の掟を犯す」という罪（transgression）の意味で頻出し、法律・倫理の文脈でも使われる。\n\n現代英語では transgress social norms（社会規範を侵す）・transgress boundaries（境界を越える）のように使われ、芸術・文化批評では「既成概念を突き破る」という肯定的な意味でも使われることがある。",
      derivatives: [
        { word: "transgression", desc: "違反・罪・逸脱（名詞）" },
        { word: "transgressor",  desc: "違反者・罪人（名詞）" }
      ],
      family: [
        { word: "progress",  desc: "前進する（pro-）" },
        { word: "digress",   desc: "話が逸れる（di-）" },
        { word: "aggress",   desc: "攻撃する（ag-）" },
        { word: "congress",  desc: "議会（con-）" }
      ],
      compounds: [
        { phrase: "transgress boundaries", desc: "境界を越える" },
        { phrase: "transgress the law",    desc: "法律を犯す" }
      ]
    },

    "regression": {
      origin: "ラテン語 regressio（後退・戻り）< regredi（後ろへ進む・退く）< re-（後ろへ）+ gradi（歩く）。「前に来た道を戻る」という字義で、心理学・統計学・医学で広く使われる技術語。\n\n14世紀に英語に入り、regression（後退・退行・回帰）として定着。心理学では「幼児的な行動パターンへの退行（psychological regression）」、統計学では「回帰分析（regression analysis）」として特に重要。\n\n現代英語では統計学・機械学習の文脈での linear regression（線形回帰）・logistic regression（ロジスティック回帰）という使い方が最も広く普及している。",
      derivatives: [
        { word: "regress",    desc: "後退する・退行する（動詞）" },
        { word: "regressive", desc: "退行的な・逆進的な（形容詞）" }
      ],
      family: [
        { word: "progress",   desc: "前進（pro-）" },
        { word: "transgress", desc: "越える・犯す（trans-）" },
        { word: "digress",    desc: "逸れる（di-）" },
        { word: "congress",   desc: "議会（con-）" }
      ],
      compounds: [
        { phrase: "regression analysis", desc: "回帰分析（統計）" },
        { phrase: "linear regression",   desc: "線形回帰" },
        { phrase: "age regression",      desc: "年齢退行（心理学）" }
      ]
    },

    // press系（残り）
    "oppress": {
      origin: "ラテン語 opprimere（上から押さえつける）< ob-（上に・対して）+ premere（押す）。premere は「圧迫する」という語根で、press・depress・impress・suppress などと同根。ob- が「重くのしかかる」ニュアンスを加えた。\n\n14世紀に英語に入り、oppress（圧政を敷く・抑圧する・重荷を負わせる）として定着。政治的・社会的な「弱者に対する支配と抑圧」という意味が中心で、特に人種・階級・性差別の文脈で多用される。\n\n現代英語では the oppressed（抑圧された人々）・oppressive regime（圧政体制）・feel oppressed（重圧を感じる）のように幅広く使われる。",
      derivatives: [
        { word: "oppression", desc: "抑圧・圧政（名詞）" },
        { word: "oppressive", desc: "抑圧的な・うんざりする（形容詞）" },
        { word: "oppressor",  desc: "抑圧者（名詞）" }
      ],
      family: [
        { word: "suppress",  desc: "抑制する（sup-）" },
        { word: "depress",   desc: "気分を落ち込ませる（de-）" },
        { word: "repress",   desc: "抑圧する（re-）" },
        { word: "compress",  desc: "圧縮する（com-）" }
      ],
      compounds: [
        { phrase: "oppress the people",  desc: "人民を弾圧する" },
        { phrase: "oppressive heat",     desc: "うだるような暑さ" },
        { phrase: "resist oppression",   desc: "抑圧に抵抗する" }
      ]
    },

    "repress": {
      origin: "ラテン語 reprimere（押し戻す・制止する）< re-（後ろへ）+ premere（押す）。「前に出ようとするものを押し戻す」という字義で、感情・反乱・記憶などを「内側に抑え込む」行為を指す。\n\n14世紀に英語に入り、repress（抑制する・弾圧する）として定着。政治文脈では「抗議活動を弾圧する」、心理学では「感情・記憶を無意識に抑圧する（Freudian repression）」という意味で特に重要。\n\n現代英語では心理学のフロイト的「抑圧（repression）」という概念が広く認知され、repress emotions（感情を抑える）・repressed memory（抑圧された記憶）という表現が一般にも使われる。",
      derivatives: [
        { word: "repression",  desc: "抑圧・弾圧（名詞）" },
        { word: "repressive",  desc: "抑圧的な（形容詞）" }
      ],
      family: [
        { word: "suppress",  desc: "抑制する（sup-）" },
        { word: "oppress",   desc: "圧政を敷く（ob-）" },
        { word: "depress",   desc: "沈ませる（de-）" },
        { word: "impress",   desc: "印象づける（im-）" }
      ],
      compounds: [
        { phrase: "repress emotions",  desc: "感情を抑圧する" },
        { phrase: "repressed memory",  desc: "抑圧された記憶" },
        { phrase: "repress a revolt",  desc: "反乱を鎮圧する" }
      ]
    },

    // tract系（残り）
    "retract": {
      origin: "ラテン語 retrahere（引き戻す）< re-（後ろへ）+ trahere（引く）。trahere は「引っ張る」という語根で、attract・distract・extract・abstract などと同根。「前に言った・出した・伸ばしたものを引っ込める」という字義。\n\n14世紀に英語に入り、retract（引っ込める・撤回する）として定着。爪を引っ込める猫（retractable claws）・着陸装置を格納する（retract the landing gear）・発言を撤回する（retract a statement）など物理的・言語的両方で使われる。\n\n現代英語ではジャーナリズムで retraction（訂正・撤回）という名詞が特に重要で、誤報の公式訂正記事を指す。航空分野では retractable（格納式の）という形容詞が頻出する。",
      derivatives: [
        { word: "retraction",  desc: "撤回・取り消し・訂正（名詞）" },
        { word: "retractable", desc: "格納式の・引っ込められる（形容詞）" }
      ],
      family: [
        { word: "extract",  desc: "取り出す（ex-）" },
        { word: "attract",  desc: "引きつける（at-）" },
        { word: "distract", desc: "注意をそらす（dis-）" },
        { word: "contract", desc: "契約・縮む（con-）" }
      ],
      compounds: [
        { phrase: "retract a statement", desc: "発言を撤回する" },
        { phrase: "retractable claws",   desc: "引っ込められる爪" },
        { phrase: "issue a retraction",  desc: "訂正記事を出す" }
      ]
    },

    // celer系
    "accelerate": {
      origin: "ラテン語 accelerare（速くする・急ぐ）< ad-（～に向けて）+ celerare（速くする）< celer（速い）。celer は「速さ」を意味する語根で、celerity（俊敏さ）とも同根。英語には decelerate（減速する）の反義語として並行して使われる。\n\n16世紀に英語に入り、accelerate（加速する・速める）として定着。物理学では「加速度（acceleration）」として基本概念となり、ビジネス・社会では「プロセスを早める」という比喩的意味でも多用される。\n\n現代英語では自動車・物理学・ビジネスの文脈すべてで日常的に使われ、accelerator（アクセル・加速装置）という名詞形も重要。スタートアップ支援施設の accelerator も同語源。",
      derivatives: [
        { word: "acceleration", desc: "加速・加速度（名詞）" },
        { word: "accelerator",  desc: "アクセル・粒子加速器（名詞）" },
        { word: "decelerate",   desc: "減速する（反義語）" }
      ],
      family: [
        { word: "celerity",  desc: "俊敏さ・素早さ（古語）" },
        { word: "velocity",  desc: "速度・速さ（vel-）" }
      ],
      compounds: [
        { phrase: "accelerate growth",    desc: "成長を加速させる" },
        { phrase: "acceleration lane",    desc: "加速車線" },
        { phrase: "startup accelerator",  desc: "スタートアップアクセラレーター" }
      ]
    },

    // phen系（ギリシャ語）
    "phenomenon": {
      origin: "ギリシャ語 phainomenon（現れるもの・見えるもの）< phainesthai（現れる・見える）の中動相分詞形。phainein（光を当てる・見せる）は fantasy・phantom・phase とも同根。「知覚によって捉えられる出来事」という哲学的概念として成立。\n\n16世紀にラテン語経由で英語に入り、phenomenon（現象・著しい出来事）として定着。哲学では「現象界（物自体に対する）」を指し、科学では「観察・測定される事象」を、日常語では「驚くべき人・もの」を指す。\n\n複数形は phenomena（学術語）または phenomenons（口語）。phenomenal（驚異的な・現象的な）という形容詞は「信じがたいほど素晴らしい」という意味でも広く使われる。",
      derivatives: [
        { word: "phenomenal",    desc: "驚異的な・現象の（形容詞）" },
        { word: "phenomenology", desc: "現象学（名詞）" },
        { word: "phenomena",     desc: "phenomenon の複数形" }
      ],
      family: [
        { word: "fantasy",  desc: "空想（phainein）" },
        { word: "phantom",  desc: "幻（phainein）" },
        { word: "phase",    desc: "段階・位相（phainein）" },
        { word: "epiphany", desc: "突然の気づき（epi-+phainein）" }
      ],
      compounds: [
        { phrase: "natural phenomenon",  desc: "自然現象" },
        { phrase: "phenomenal success",  desc: "驚異的な成功" },
        { phrase: "social phenomenon",   desc: "社会現象" }
      ]
    },

    // sequ系
    "sequence": {
      origin: "ラテン語 sequentia（続き・連続）< sequi（続く・後を追う）。sequi は「従う・後に続く」という語根で、consequence・subsequent・sequel・prosecute などと同根。「次々と続く一連の並び」という字義。\n\n14世紀に英語に入り、sequence（順序・連続・数列）として定着。音楽では「同じ音型の反復移調（sequence）」、映画では「一場面のまとまり（film sequence）」、数学では「数列（arithmetic sequence）」と多分野で重要な語。\n\n現代英語では DNA sequence（DNA配列）・sequence of events（一連の出来事）・out of sequence（順番が狂って）のように科学・日常両方の文脈で広く使われる。",
      derivatives: [
        { word: "sequential",    desc: "順番の・連続した（形容詞）" },
        { word: "sequentially",  desc: "順次・連続して（副詞）" }
      ],
      family: [
        { word: "consequence",  desc: "結果（con-+sequ-）" },
        { word: "subsequent",   desc: "その後の（sub-+sequ-）" },
        { word: "sequel",       desc: "続編・後日談（sequ-）" },
        { word: "prosecute",    desc: "訴追する（pro-+sequ-）" }
      ],
      compounds: [
        { phrase: "DNA sequence",        desc: "DNA配列・塩基配列" },
        { phrase: "sequence of events",  desc: "一連の出来事" },
        { phrase: "in sequence",         desc: "順番に・連続して" }
      ]
    },

    // ── Batch 25 ──────────────────────────────────────────────────────────

    // gen系（残り）
    "generation": {
      origin: "ラテン語 generatio（産むこと・世代）< generare（生む・産出する）< genus（種族・出生）。「同じ時代に生まれた人々の集合」という意味と「生み出す行為」という意味の両方を含む語。\n\n13世紀にフランス語経由で英語に入り、generation（世代・生成・産出）として定着。聖書・神学では「神による創造」を指したが、やがて「同一時代を生きる人々（a generation）」という社会的意味が主流となった。\n\n現代英語では Generation X・Millennials・Gen Z のように特定の時代に生まれた集団を指すラベルとして定着。また AI 分野では「生成（text generation）」の意味で技術用語としても重要。",
      derivatives: [
        { word: "generational",  desc: "世代の・世代間の（形容詞）" },
        { word: "regenerate",    desc: "再生する・再び産む（動詞）" },
        { word: "regeneration",  desc: "再生・更生（名詞）" }
      ],
      family: [
        { word: "generate",  desc: "生成する（gen-）" },
        { word: "generous",  desc: "寛大な（gen-）" },
        { word: "genuine",   desc: "本物の（gen-）" },
        { word: "gender",    desc: "性・種類（gen-）" }
      ],
      compounds: [
        { phrase: "generation gap",     desc: "世代間の溝" },
        { phrase: "next generation",    desc: "次世代" },
        { phrase: "text generation",    desc: "テキスト生成（AI）" }
      ]
    },

    "gender": {
      origin: "ラテン語 genus（種族・種・類）の属格形 generis に由来するフランス語 gendre（種類・文法的性）を経て英語に入った語。genus はギリシャ語 genos（種族・出生）と同根で、「生まれ」「種類」という概念に基づく。\n\n中英語期に gender（文法上の性・男性/女性の区別）として定着。もともとは文法用語（masculine / feminine / neuter gender）として使われ、20世紀から「生物学的性（sex）と区別される社会的・文化的性別」という意味が定着した。\n\n現代英語では社会学・心理学・法律・医学で「gender identity（性自認）」「gender equality（ジェンダー平等）」のように頻出し、多様なジェンダーの議論を包括する概念語となっている。",
      derivatives: [
        { word: "gendered",    desc: "ジェンダー化された（形容詞）" },
        { word: "transgender", desc: "トランスジェンダーの（形容詞）" }
      ],
      family: [
        { word: "generate",    desc: "生成する（gen-）" },
        { word: "generation",  desc: "世代（gen-）" },
        { word: "genuine",     desc: "本物の（gen-）" },
        { word: "genus",       desc: "属・種（gen-）" }
      ],
      compounds: [
        { phrase: "gender equality",   desc: "ジェンダー平等" },
        { phrase: "gender identity",   desc: "性自認" },
        { phrase: "gender gap",        desc: "ジェンダー格差" }
      ]
    },

    "genetics": {
      origin: "ギリシャ語 genetikos（出生に関する）< genesis（起源・生成）< gignesthai（生まれる）。英国の生物学者ウィリアム・ベイトソンが1905年に genetics という語を造語し、遺伝と変異の科学を指す学問名として定着させた。\n\n20世紀初頭にメンデルの遺伝法則が再発見されたことで急速に発展し、genetics（遺伝学）として科学の主要分野に。DNA 構造の解明（1953年）・ヒトゲノムプロジェクト（2003年）を経てさらに重要度が増した。\n\n現代英語では genetic（遺伝の）・gene（遺伝子）・genome（ゲノム）・genotype（遺伝子型）などの語群を形成し、医学・農業・倫理など多分野に関わる基幹語となっている。",
      derivatives: [
        { word: "genetic",    desc: "遺伝の・遺伝子の（形容詞）" },
        { word: "genetically",desc: "遺伝的に（副詞）" },
        { word: "geneticist", desc: "遺伝学者（名詞）" }
      ],
      family: [
        { word: "genesis",    desc: "起源・始まり（gen-）" },
        { word: "generate",   desc: "生成する（gen-）" },
        { word: "gene",       desc: "遺伝子（gen-）" },
        { word: "genome",     desc: "ゲノム（gen-）" }
      ],
      compounds: [
        { phrase: "genetic engineering",  desc: "遺伝子工学" },
        { phrase: "genetic mutation",     desc: "遺伝子変異" },
        { phrase: "genetic testing",      desc: "遺伝子検査" }
      ]
    },

    // grat/grac系（残り）
    "grace": {
      origin: "ラテン語 gratia（好意・感謝・優美さ）< gratus（喜ばれる・感謝される）。gratia は古代ローマで「神々の恩寵・人間関係における好意」を指し、キリスト教神学では「神の恵み（divine grace）」という中核概念となった。\n\n古フランス語 grace を経て12世紀に英語に入り、grace（優雅さ・神の恵み・猶予期間）として定着。神学・舞踏・外交・日常語と幅広く使われる多義語。食前の祈り（say grace）という習慣も grace の神学的用法に由来する。\n\n現代英語では「優雅・上品さ（move with grace）」「猶予期間（grace period）」「神の恩寵（grace of God）」の三つの意味が主要で、gracefulness（優美さ）・disgrace（不名誉）などの派生語も頻出。",
      derivatives: [
        { word: "graceful",    desc: "優雅な・上品な（形容詞）" },
        { word: "gracefully",  desc: "優雅に（副詞）" },
        { word: "disgrace",    desc: "不名誉・恥（名詞）" },
        { word: "graceless",   desc: "無粋な・不格好な（形容詞）" }
      ],
      family: [
        { word: "grateful",     desc: "感謝している（grat-）" },
        { word: "gratitude",    desc: "感謝（grat-）" },
        { word: "gratify",      desc: "満足させる（grat-）" },
        { word: "congratulate", desc: "祝う（con-+grat-）" }
      ],
      compounds: [
        { phrase: "say grace",     desc: "食前の祈りを唱える" },
        { phrase: "grace period",  desc: "猶予期間" },
        { phrase: "fall from grace",desc: "失墜する・信頼を失う" }
      ]
    },

    "gracious": {
      origin: "ラテン語 gratiosus（好意ある・恩寵ある）< gratia（好意・恵み）< gratus（喜ばれる）。「恵みや好意に満ちている」という字義で、上位の者が下位の者に向ける「親切・寛大さ」を含意する。\n\n14世紀に英語に入り、gracious（親切な・礼儀正しい・上品な）として定着。王族・貴族への称号的な使い方（gracious majesty）も生まれ、英国英語では「おや・まあ！（Good gracious!）」という感嘆詞でも使われる。\n\n現代英語では gracious living（余裕のある優雅な暮らし）・gracious host（心の広いホスト）のように、「余裕があり品位ある親切さ」を示す形容詞として使われる。",
      derivatives: [
        { word: "graciously",   desc: "親切に・鷹揚に（副詞）" },
        { word: "graciousness", desc: "優雅さ・鷹揚さ（名詞）" }
      ],
      family: [
        { word: "grace",        desc: "優雅さ・恵み（grat-）" },
        { word: "grateful",     desc: "感謝している（grat-）" },
        { word: "gratitude",    desc: "感謝（grat-）" },
        { word: "congratulate", desc: "祝う（con-+grat-）" }
      ],
      compounds: [
        { phrase: "gracious living",   desc: "余裕ある優雅な暮らし" },
        { phrase: "Good gracious!",    desc: "おや！まあ！（感嘆詞）" },
        { phrase: "gracious host",     desc: "心の広いホスト" }
      ]
    },

    // corp系（残り）
    "corporate": {
      origin: "ラテン語 corporatus（体として組織された）< corpus（体・肉体）+ -atus（形容詞語尾）。corpus の派生形 corporare は「体を形成する・団体として結合する」という意味で、法人・団体を「ひとつの体」と見なす西洋の法律概念に基づく。\n\n15世紀に英語に入り、corporate（法人の・共同の・組織的な）として定着。corporate body（法人）という法律用語で最初に広まり、やがてビジネス全般を表す形容詞として定着した。\n\n現代英語では corporate culture（企業文化）・corporate governance（コーポレートガバナンス）・corporate social responsibility（企業の社会的責任、CSR）など、大企業・組織運営に関する複合語として多用される。",
      derivatives: [
        { word: "corporation",  desc: "法人・大企業（名詞）" },
        { word: "corporately",  desc: "法人として・共同で（副詞）" },
        { word: "incorporate",  desc: "法人化する・組み込む（動詞）" }
      ],
      family: [
        { word: "corps",    desc: "部隊・団体（corps）" },
        { word: "corpse",   desc: "死体（corpus）" },
        { word: "corporal", desc: "体の・上等兵（corpus）" },
        { word: "corpus",   desc: "全集・コーパス（corpus）" }
      ],
      compounds: [
        { phrase: "corporate culture",  desc: "企業文化" },
        { phrase: "corporate tax",      desc: "法人税" },
        { phrase: "corporate ladder",   desc: "企業内の出世の階段" }
      ]
    },

    // ped/pod系（残り）
    "impede": {
      origin: "ラテン語 impedire（足枷をはめる・妨げる）< im-（中に・対して）+ pes/pedis（足）。字義は「足に何かを絡ませて動けなくする」で、obstacle・hindrance の意味に発展した。\n\n16世紀に英語に入り、impede（妨げる・阻害する）として定着。impediment（障害・障壁）という名詞形も頻出し、speech impediment（言語障害）のような専門的用法もある。\n\n現代英語では progress を impede（進歩を妨げる）・flow を impede（流れを阻害する）のように使われ、impediment は「実現を妨げる障害」として特に法律・医学・ビジネス文脈で登場する。",
      derivatives: [
        { word: "impediment",  desc: "障害・障壁（名詞）" },
        { word: "impedance",   desc: "インピーダンス・電気的抵抗（名詞）" }
      ],
      family: [
        { word: "pedestrian",  desc: "歩行者（pes）" },
        { word: "pedal",       desc: "ペダル（pes）" },
        { word: "expedition",  desc: "遠征（ex-+pes）" },
        { word: "expedite",    desc: "促進する（ex-+pes）" }
      ],
      compounds: [
        { phrase: "impede progress",    desc: "進歩を妨げる" },
        { phrase: "speech impediment",  desc: "言語障害" },
        { phrase: "legal impediment",   desc: "法的障壁" }
      ]
    },

    "pedal": {
      origin: "ラテン語 pedalis（足の・足に関する）< pes/pedis（足）。足で踏んで動かす装置全般を指す語として、自転車・ピアノ・オルガン・車など多くの機械装置に登場する。\n\n17世紀にイタリア語 pedale（足の）経由で英語に入り、pedal（ペダル・足で踏む）として定着。最初は音楽（オルガンの足鍵盤）の文脈で使われ、19世紀に自転車が普及すると「自転車をこぐ」という動詞用法が定着した。\n\n現代英語では名詞（アクセルペダル・ピアノのペダル）と動詞（自転車をこぐ・ペダルを踏む）の両方で使われ、pedal to the metal（アクセル全開で）のような慣用表現も存在する。",
      derivatives: [
        { word: "peddle",    desc: "行商する（pedal と同語源）" }
      ],
      family: [
        { word: "pedestrian",  desc: "歩行者（pes）" },
        { word: "expedition",  desc: "遠征（ex-+pes）" },
        { word: "impede",      desc: "妨げる（im-+pes）" },
        { word: "podium",      desc: "表彰台（pod-）" }
      ],
      compounds: [
        { phrase: "pedal a bike",      desc: "自転車をこぐ" },
        { phrase: "pedal to the metal",desc: "アクセル全開で・全速力で" },
        { phrase: "soft pedal",        desc: "ソフトペダル・穏やかに扱う" }
      ]
    },

    // cept/ceiv系（残り）
    "deceive": {
      origin: "ラテン語 decipere（欺く・罠にかける）< de-（下に・離れて）+ capere（捕まえる・取る）。「欺いて捕らえる・罠に落とす」という字義で、相手の信頼を利用して真実を隠す行為を指す。\n\n13世紀にフランス語 decevoir を経て英語に入り、deceive（だます・欺く）として定着。形容詞 deceptive（惑わす・見かけと違う）、名詞 deception（欺瞞）も広く使われる。\n\n現代英語では「意図的に誤解させる」という強い意味合いを持ち、mislead（意図せず誤解させることもある）より重い語。deceptive advertising（欺瞞的広告）・self-deception（自己欺瞞）のような表現が重要。",
      derivatives: [
        { word: "deception",  desc: "欺き・詐欺（名詞）" },
        { word: "deceptive",  desc: "惑わす・見かけと違う（形容詞）" },
        { word: "deceit",     desc: "欺瞞・不誠実（名詞）" }
      ],
      family: [
        { word: "perceive",   desc: "知覚する（per-+capere）" },
        { word: "receive",    desc: "受け取る（re-+capere）" },
        { word: "conceive",   desc: "思いつく（con-+capere）" },
        { word: "capture",    desc: "捕まえる（capere）" }
      ],
      compounds: [
        { phrase: "deceive someone",       desc: "人を欺く" },
        { phrase: "deceptive appearance",  desc: "見かけと違う外見" },
        { phrase: "self-deception",        desc: "自己欺瞞" }
      ]
    },

    "perception": {
      origin: "ラテン語 perceptio（完全に捉えること・知覚）< percipere（完全に捉える）< per-（完全に・通じて）+ capere（捕まえる・取る）。「完全に把握する・理解する」という字義から「知覚・認識」の意味が発展した。\n\n14世紀にフランス語経由で英語に入り、perception（知覚・認識・理解）として定着。哲学では「感覚器官による外界の把握」を指し、心理学では「情報処理としての知覚」を意味する。\n\n現代英語では科学的な意味（visual perception / sensory perception）と社会的な意味（public perception / perception of risk）の両方で使われ、\"Perception is reality\"（認識こそが現実だ）という表現が心理学・マーケティングで重要な概念として引用される。",
      derivatives: [
        { word: "perceptive",     desc: "洞察力のある・鋭い（形容詞）" },
        { word: "perceptual",     desc: "知覚の（形容詞）" },
        { word: "imperceptible",  desc: "知覚できない・微細な（形容詞）" }
      ],
      family: [
        { word: "perceive",  desc: "知覚する（per-）" },
        { word: "conceive",  desc: "思いつく（con-）" },
        { word: "receive",   desc: "受け取る（re-）" },
        { word: "deceive",   desc: "欺く（de-）" }
      ],
      compounds: [
        { phrase: "visual perception",  desc: "視覚的知覚" },
        { phrase: "public perception",  desc: "一般の認識・世間の見方" },
        { phrase: "depth perception",   desc: "奥行き知覚" }
      ]
    },

    // claim/clam系（残り）
    "reclaim": {
      origin: "ラテン語 reclamare（大声で叫び返す・異議を唱える）< re-（再び・戻して）+ clamare（叫ぶ）。「声を上げて取り返す」という字義が「以前のものを取り戻す・改善して再利用する」という意味に発展した。\n\n13世紀に英語に入り、reclaim（取り戻す・再開発する・再生利用する）として定着。土地の「干拓・開墾（reclaim land）」、廃材の「再生利用（reclaim materials）」、失われた権利・名声の「取り返し」など多義的に使われる。\n\n現代英語では reclaim one's identity（アイデンティティを取り戻す）・reclaim land（土地を干拓する）・reclaim waste material（廃棄物を再生する）のように環境・社会・個人の「回復」を幅広く表す語。",
      derivatives: [
        { word: "reclamation", desc: "回収・干拓・更生（名詞）" }
      ],
      family: [
        { word: "claim",    desc: "主張する（clam-）" },
        { word: "exclaim",  desc: "叫ぶ（ex-）" },
        { word: "proclaim", desc: "宣言する（pro-）" },
        { word: "acclaim",  desc: "喝采する（ac-）" }
      ],
      compounds: [
        { phrase: "reclaim land",       desc: "土地を干拓・開墾する" },
        { phrase: "reclaim one's name", desc: "名誉を取り戻す" },
        { phrase: "land reclamation",   desc: "干拓地・埋立地" }
      ]
    },

    "acclaim": {
      origin: "ラテン語 acclamare（声を上げて迎える・喝采する）< ad-（～に向けて）+ clamare（叫ぶ）。「ある対象に向けて声を上げる」という字義で、集団が誰かを讃えるときの大きな賞賛を意味する。\n\n15世紀に英語に入り、acclaim（喝采する・絶賛する）として定着。名詞としても「称賛・喝采（critical acclaim）」の意味で使われ、特に芸術・文化の分野での高い評価を示すときに頻出。\n\n現代英語では critical acclaim（批評家からの絶賛）・international acclaim（国際的な称賛）のように、専門家集団や広い世間からの承認・称賛を表す語として文化批評・エンタメ分野で多用される。",
      derivatives: [
        { word: "acclamation",   desc: "喝采・歓呼（名詞）" },
        { word: "acclaimed",     desc: "絶賛された（形容詞）" }
      ],
      family: [
        { word: "claim",    desc: "主張する（clam-）" },
        { word: "exclaim",  desc: "叫ぶ（ex-）" },
        { word: "proclaim", desc: "宣言する（pro-）" },
        { word: "reclaim",  desc: "取り戻す（re-）" }
      ],
      compounds: [
        { phrase: "critical acclaim",       desc: "批評家からの絶賛" },
        { phrase: "international acclaim",  desc: "国際的な称賛" },
        { phrase: "by acclamation",         desc: "満場一致で・拍手喝采で" }
      ]
    },

    // domin系（残り）
    "indomitable": {
      origin: "ラテン語 indomitus（手なずけられない・制圧できない）< in-（否定）+ domitus < domare（飼いならす・制圧する）。domare は「支配する・制圧する」を意味し、dominate・domain・dominant などと同根。\n\n17世紀に英語に入り、indomitable（不屈の・手に負えない）として定着。主に人の意志・精神・気性について「どんな困難にも屈しない」という賞賛的な意味で使われる。\n\n現代英語では indomitable spirit（不屈の精神）・indomitable will（不屈の意志）のように、逆境に負けない強さを表す文脈で使われる。英雄的・感動的な文脈で頻出する形容詞。",
      derivatives: [
        { word: "indomitably", desc: "不屈に・屈せずに（副詞）" }
      ],
      family: [
        { word: "dominate",  desc: "支配する（domin-）" },
        { word: "dominant",  desc: "支配的な（domin-）" },
        { word: "domain",    desc: "領域・ドメイン（domin-）" },
        { word: "dominion",  desc: "支配権（domin-）" }
      ],
      compounds: [
        { phrase: "indomitable spirit",  desc: "不屈の精神" },
        { phrase: "indomitable will",    desc: "不屈の意志" }
      ]
    },

    // mit/miss系（残り）
    "omit": {
      origin: "ラテン語 omittere（手放す・省略する）< ob-（離れて）+ mittere（送る・放つ）。「送り出さずに手放す→省いて放置する」という字義で、意図的に省略・除外する行為を指す。\n\n15世紀に英語に入り、omit（省く・省略する・怠る）として定着。主に文章・リスト・手続きの中で「意図的に含めない」という文脈で使われ、forget（忘れる）と違い意図的・作為的なニュアンスをもつ。\n\n現代英語では omit details（詳細を省く）・sins of omission（不作為の罪）・omit a step（手順を飛ばす）のように使われ、法律では omission（不作為）が重要な概念として登場する。",
      derivatives: [
        { word: "omission",  desc: "省略・不作為（名詞）" },
        { word: "omitted",   desc: "省略された（形容詞）" }
      ],
      family: [
        { word: "commit",   desc: "犯す・約束する（com-）" },
        { word: "transmit", desc: "送信する（trans-）" },
        { word: "permit",   desc: "許可する（per-）" },
        { word: "submit",   desc: "提出する（sub-）" }
      ],
      compounds: [
        { phrase: "omit details",     desc: "詳細を省く" },
        { phrase: "omission error",   desc: "脱落エラー・省略誤り" },
        { phrase: "sin of omission",  desc: "不作為の罪" }
      ]
    },

    "remit": {
      origin: "ラテン語 remittere（送り返す・緩める）< re-（後ろへ）+ mittere（送る）。「送り返す・解放する」という字義から「罪を赦す・送金する・緩和する」という複数の意味が発展した。\n\n13世紀に英語に入り、remit（送金する・罪を赦す・管轄に委ねる）として定着。法律・金融・宗教と異なる文脈で使われる多義語。名詞 remit（権限範囲・職務範囲）は英国英語でビジネス・行政文書に頻出する。\n\n現代英語では remit money overseas（海外送金する）・within the remit of（～の権限範囲内で）・remit a case to court（事件を裁判所に送致する）のように使われる。",
      derivatives: [
        { word: "remittance",  desc: "送金・送金額（名詞）" },
        { word: "remission",   desc: "寛解・赦免・軽減（名詞）" }
      ],
      family: [
        { word: "transmit",  desc: "送信する（trans-）" },
        { word: "commit",    desc: "犯す・約束する（com-）" },
        { word: "submit",    desc: "提出する（sub-）" },
        { word: "permit",    desc: "許可する（per-）" }
      ],
      compounds: [
        { phrase: "remit money",     desc: "送金する" },
        { phrase: "remittance fee",  desc: "送金手数料" },
        { phrase: "in remission",    desc: "（病気が）寛解状態で" }
      ]
    },

    // terr系（残り）
    "terrestrial": {
      origin: "ラテン語 terrestris（地球の・陸地の）< terra（大地・地球）。terra は「乾いた地面・大地」を意味し、terrain・territory・territory などと同根。「天（celestial）」に対する「地（terrestrial）」という対概念。\n\n14世紀に英語に入り、terrestrial（地球の・陸生の・地上の）として定着。天文学・生物学・通信（terrestrial broadcasting）と多領域で使われる形容詞。ET（extra-terrestrial / 地球外生命体）という語も同根。\n\n現代英語では terrestrial planet（地球型惑星）・terrestrial ecosystem（陸上生態系）・terrestrial TV（地上波テレビ）のように科学・メディアの文脈で重要。extraterrestrial（ET・地球外の）は SF の定番語。",
      derivatives: [
        { word: "extraterrestrial",  desc: "地球外の・宇宙人（形容詞・名詞）" },
        { word: "subterranean",      desc: "地下の（sub-+terra）" }
      ],
      family: [
        { word: "territory",  desc: "領土・領域（terra）" },
        { word: "terrain",    desc: "地形・地勢（terra）" },
        { word: "terrarium",  desc: "テラリウム（terra）" },
        { word: "terra firma", desc: "陸地（ラテン語）" }
      ],
      compounds: [
        { phrase: "terrestrial planet",    desc: "地球型惑星" },
        { phrase: "extraterrestrial life", desc: "地球外生命体" },
        { phrase: "terrestrial broadcast", desc: "地上波放送" }
      ]
    },

    // med系（残り）
    "medicine": {
      origin: "ラテン語 medicina（医術・治療薬）< medicus（医師）< mederi（癒す・治療する）。mederi は「中間に立つ・測る」というよりも「正しく処置する」という語根に由来し、medium（中間）とは異なる語源説が有力。\n\n古フランス語 medecine を経て13世紀に英語に入り、medicine（医学・薬・医術）として定着。「医師が行う技術」と「その結果として生まれる薬」という二つの意味を兼ね備えた語。\n\n現代英語では medicine は「薬（take medicine）」「医学（study medicine）」「医療（alternative medicine）」の三義で使われる。また \"the best medicine\"（最良の薬）という比喩表現にも登場し、\"Laughter is the best medicine\"（笑いは最良の薬）は有名な格言。",
      derivatives: [
        { word: "medical",      desc: "医学の・医療の（形容詞）" },
        { word: "medicate",     desc: "薬で治療する（動詞）" },
        { word: "medication",   desc: "薬物治療・処方薬（名詞）" }
      ],
      family: [
        { word: "mediate",  desc: "仲介する（medius）" },
        { word: "medium",   desc: "中間・媒体（medius）" },
        { word: "remedy",   desc: "治療・解決策（re-+mederi）" }
      ],
      compounds: [
        { phrase: "take medicine",          desc: "薬を服用する" },
        { phrase: "alternative medicine",   desc: "代替医療" },
        { phrase: "evidence-based medicine",desc: "エビデンスに基づく医療" }
      ]
    },

    "medical": {
      origin: "ラテン語 medicalis（医師の・医術の）< medicus（医師）< mederi（癒す）。16世紀に英語に入り、medical（医学の・医療の）として定着。medicine から派生した形容詞として、医学・医療に関するあらゆる事柄を修飾する基本語となった。\n\n医学教育（medical school）・医療施設（medical center）・医学的処置（medical procedure）・医療記録（medical record）と、病院・医療システムに関する語の基幹修飾語として機能する。\n\n現代英語では medical は名詞としても使われ（go for a medical = 健康診断を受ける）、またアメリカ英語では Medicaid（低所得者向け医療保険）・Medicare（高齢者向け医療保険）という政策語にも med- の語根が活きている。",
      derivatives: [
        { word: "medically",    desc: "医学的に（副詞）" },
        { word: "paramedical",  desc: "医療補助の（形容詞）" }
      ],
      family: [
        { word: "medicine",  desc: "薬・医学（mederi）" },
        { word: "medicate",  desc: "投薬する（mederi）" },
        { word: "remedy",    desc: "治療・解決策（mederi）" }
      ],
      compounds: [
        { phrase: "medical record",    desc: "医療記録・カルテ" },
        { phrase: "medical school",    desc: "医科大学・医学部" },
        { phrase: "medical attention", desc: "医療措置・診察" }
      ]
    },

    // ambi系
    "ambiguous": {
      origin: "ラテン語 ambiguus（どちらにも動く・二重の）< ambigere（両方向に動く）< ambi-（両方）+ agere（動かす・行う）。「どちらにも動かせる」という字義が「はっきりしない・複数の解釈が可能な」という意味に発展した。\n\n16世紀に英語に入り、ambiguous（曖昧な・多義的な・不明確な）として定着。言語・法律・美術・科学と多領域で「複数の解釈が成り立つ」という意味で使われる。\n\n現代英語では linguistically ambiguous（言語的に曖昧な）・morally ambiguous（道徳的に曖昧な）のように使われ、文学批評では「意図的な曖昧さ」を肯定的に評価することもある。ambiguity（曖昧性）は言語学・法学で重要な概念語。",
      derivatives: [
        { word: "ambiguously", desc: "曖昧に（副詞）" },
        { word: "ambiguity",   desc: "曖昧さ・多義性（名詞）" },
        { word: "unambiguous", desc: "明確な・曖昧でない（形容詞）" }
      ],
      family: [
        { word: "ambivalent",  desc: "相反する感情を持つ（ambi-）" },
        { word: "ambidextrous",desc: "両手利きの（ambi-）" },
        { word: "agent",       desc: "代理人（agere）" },
        { word: "agile",       desc: "機敏な（agere）" }
      ],
      compounds: [
        { phrase: "morally ambiguous",  desc: "道徳的に曖昧な" },
        { phrase: "deliberate ambiguity",desc: "意図的な曖昧さ" },
        { phrase: "remove ambiguity",   desc: "曖昧さを排除する" }
      ]
    },

    "ambivalent": {
      origin: "ラテン語 ambi-（両方）+ valere（力・価値をもつ）を組み合わせた近代語。心理学者オイゲン・ブロイラーが1910年に造語し、「相反する感情・態度を同時に持つ」という心理学概念を表した。\n\n20世紀初頭に心理学用語として英語に入り、ambivalent（相反する感情を持つ・どちらとも決めかねる）として定着。もともとは精神医学の専門語だったが、やがて日常語として「どちらとも言えない・迷っている」という意味で広まった。\n\n現代英語では I feel ambivalent about it.（それについて複雑な気持ちだ）のように、感情的な迷いや矛盾した態度を表現するときに使われる。ambivalence（アンビバレンス）は心理学・哲学の概念語として定着している。",
      derivatives: [
        { word: "ambivalence",   desc: "アンビバレンス・相反する感情（名詞）" },
        { word: "ambivalently",  desc: "複雑な気持ちで（副詞）" }
      ],
      family: [
        { word: "ambiguous",   desc: "曖昧な（ambi-）" },
        { word: "value",       desc: "価値（valere）" },
        { word: "valid",       desc: "有効な（valere）" },
        { word: "equivalent",  desc: "同等の（equi-+valere）" }
      ],
      compounds: [
        { phrase: "feel ambivalent",      desc: "複雑な感情を抱く" },
        { phrase: "deep ambivalence",     desc: "深いアンビバレンス" },
        { phrase: "moral ambivalence",    desc: "道徳的な葛藤" }
      ]
    },

    // leg/legit系（残り）
    "legitimate": {
      origin: "ラテン語 legitimare（法に合わせる・合法化する）< legitimus（法に従った）< lex/legis（法律）。lex は「法」を意味し、legal・legislate・privilege などと同根。「法に則っている」という字義から「正当な・合法の」という意味が生まれた。\n\n15世紀に英語に入り、legitimate（合法の・正統な・正当な）として定着。王位継承の文脈では「嫡出の（legitimate heir）」という意味で重要で、やがて「正統性のある・根拠のある」という広義でも使われるようになった。\n\n現代英語では legitimate government（正統政府）・legitimate concern（正当な懸念）・legitimate business（合法的なビジネス）のように使われ、動詞 legitimize / legitimise（正当化する）も頻出する。",
      derivatives: [
        { word: "legitimacy",   desc: "正当性・合法性（名詞）" },
        { word: "legitimize",   desc: "正当化する（動詞）" },
        { word: "illegitimate", desc: "不法な・嫡出でない（形容詞）" }
      ],
      family: [
        { word: "legal",     desc: "法的な（lex）" },
        { word: "legislate", desc: "立法する（lex）" },
        { word: "privilege", desc: "特権（lex）" },
        { word: "loyal",     desc: "忠実な（lex）" }
      ],
      compounds: [
        { phrase: "legitimate concern",   desc: "正当な懸念" },
        { phrase: "legitimate heir",      desc: "正統な後継者" },
        { phrase: "legitimate business",  desc: "合法的なビジネス" }
      ]
    },

    // lemma系（ギリシャ語）
    "dilemma": {
      origin: "ギリシャ語 dilemma（二重の命題）< di-（二つの）+ lemma（前提・命題）< lambanein（取る・受け取る）。「どちらを選んでも同じく困る二つの選択肢」という論理学上の概念として生まれた。\n\n16世紀に英語に入り、dilemma（ジレンマ・板挟み）として定着。論理学では「どちらの選択肢を選んでも不都合な結論に至る議論」を指すが、日常語では単に「難しい選択・板挟みの状態」を意味する。\n\n現代英語では ethical dilemma（倫理的ジレンマ）・moral dilemma（道徳的葛藤）・on the horns of a dilemma（板挟みに）のように使われ、政治・医療・ビジネスの意思決定の文脈で頻出する語。",
      derivatives: [
        { word: "trilemma",  desc: "三択のジレンマ（tri-）" }
      ],
      family: [
        { word: "lemma",    desc: "補題・見出し語（lemma）" },
        { word: "dilemma",  desc: "ジレンマ（di-+lemma）" },
        { word: "problem",  desc: "問題（prob-）" },
        { word: "paradox",  desc: "逆説（para-+doxa）" }
      ],
      compounds: [
        { phrase: "ethical dilemma",             desc: "倫理的ジレンマ" },
        { phrase: "on the horns of a dilemma",   desc: "板挟みになって" },
        { phrase: "moral dilemma",               desc: "道徳的葛藤" }
      ]
    },

    // fund系
    "fundamental": {
      origin: "ラテン語 fundamentum（基礎・土台）< fundus（底・基盤）。fundus は「底・根底」を意味し、found（創設する）・foundation（基盤）とも同根。「すべての上に成り立つ最下部の支え」という字義。\n\n15世紀に英語に入り、fundamental（基本的な・根本的な）として定着。科学・哲学・音楽（倍音の基音）・政治（基本権）と多領域で「根本に関わる・最も重要な」という意味で使われる。\n\n現代英語では fundamental rights（基本的権利）・fundamental change（根本的な変化）・get back to fundamentals（基本に立ち返る）のように使われ、fundamentalism（原理主義）という派生語も宗教・政治の文脈で重要。",
      derivatives: [
        { word: "fundamentally",   desc: "根本的に・本質的に（副詞）" },
        { word: "fundamentalism",  desc: "原理主義（名詞）" },
        { word: "fundamentalist",  desc: "原理主義者（名詞）" }
      ],
      family: [
        { word: "found",       desc: "創設する（fundus）" },
        { word: "foundation",  desc: "基盤・財団（fundus）" },
        { word: "founder",     desc: "創設者（fundus）" },
        { word: "profound",    desc: "深遠な（pro-+fundus）" }
      ],
      compounds: [
        { phrase: "fundamental rights",  desc: "基本的権利" },
        { phrase: "fundamental change",  desc: "根本的な変化" },
        { phrase: "back to fundamentals",desc: "基本に立ち返る" }
      ]
    },

    // mot系（残り）
    "motive": {
      origin: "ラテン語 motivus（動きを引き起こす）< movere（動かす）の過去分詞 motus から。movere は「動かす」を意味し、motion・motor・emotion・promote などと同根。「行動を引き起こす内的な力」という字義。\n\n14世紀にフランス語 motif（動機）経由で英語に入り、motive（動機・理由・モチーフ）として定着。法律では「犯行動機（motive for a crime）」として重要で、音楽・美術では「モチーフ（繰り返される主題）」という意味でも使われる。\n\n現代英語では ulterior motive（隠れた動機）・profit motive（利益動機）・mixed motives（複合的な動機）のように使われ、形容詞 motivating / motivational（やる気を引き出す）も日常的に使われる重要語族を形成する。",
      derivatives: [
        { word: "motivation",   desc: "動機・やる気・意欲（名詞）" },
        { word: "motivate",     desc: "動機づける・やる気にさせる（動詞）" },
        { word: "motivated",    desc: "意欲的な（形容詞）" }
      ],
      family: [
        { word: "motion",   desc: "運動・動き（movere）" },
        { word: "emotion",  desc: "感情（e-+movere）" },
        { word: "promote",  desc: "促進する（pro-+movere）" },
        { word: "motor",    desc: "モーター・運動の（movere）" }
      ],
      compounds: [
        { phrase: "ulterior motive",  desc: "隠れた動機" },
        { phrase: "profit motive",    desc: "利益動機" },
        { phrase: "motive force",     desc: "原動力" }
      ]
    },

    // ── Batch 26 ──────────────────────────────────────────────────────────

    // duc/duct系（残り）
    "seduce": {
      origin: "ラテン語 seducere（別の方向に引く・誘惑する）< se-（離れて・別方向へ）+ ducere（引く・導く）。「正しい道から別の方向へと引き寄せる」という字義で、誘惑による逸脱を意味する。\n\n15世紀に英語に入り、seduce（誘惑する・誘い込む）として定着。もともとは宗教的・道徳的な「正道から外れさせる誘惑」を指したが、現代では主に性的な誘惑と、比喩的な「魅力で引き込む」という意味で使われる。\n\n現代英語では be seduced by the idea（考えに引き込まれる）のような比喩的用法もあり、形容詞 seductive（魅惑的な・誘惑的な）・名詞 seduction（誘惑）も重要な語族を形成する。",
      derivatives: [
        { word: "seduction",  desc: "誘惑・誘惑行為（名詞）" },
        { word: "seductive",  desc: "誘惑的な・魅惑的な（形容詞）" },
        { word: "seducer",    desc: "誘惑者（名詞）" }
      ],
      family: [
        { word: "conduct",   desc: "指揮する・行為（con-）" },
        { word: "induce",    desc: "引き起こす（in-）" },
        { word: "reduce",    desc: "減少させる（re-）" },
        { word: "educate",   desc: "教育する（e-）" }
      ],
      compounds: [
        { phrase: "seduce someone",      desc: "人を誘惑する" },
        { phrase: "seductive offer",     desc: "魅力的な提案" },
        { phrase: "seduced by power",    desc: "権力に魅了される" }
      ]
    },

    "abduct": {
      origin: "ラテン語 abducere（引き去る・連れ去る）< ab-（離れて・から）+ ducere（引く・導く）。「ある場所から力ずくで引き離す」という字義で、人や肢体の「誘拐・外転」を意味する。\n\n17世紀に英語に入り、abduct（誘拐する・外転させる）として定着。法律では「kidnap（誘拐する）」と近い意味で使われ、解剖学では「肢体を体の中心から離す運動（abduction）」を指す。\n\n現代英語では abduct a child（子どもを誘拐する）・abducted by aliens（宇宙人に誘拐される）のように犯罪・SF の文脈で使われるほか、医学では shoulder abduction（肩の外転）のように筋骨格系の動きを表す術語としても重要。",
      derivatives: [
        { word: "abduction",  desc: "誘拐・外転（名詞）" },
        { word: "abductor",   desc: "誘拐犯・外転筋（名詞）" }
      ],
      family: [
        { word: "conduct",  desc: "指揮する（con-）" },
        { word: "seduce",   desc: "誘惑する（se-）" },
        { word: "induce",   desc: "引き起こす（in-）" },
        { word: "reduce",   desc: "減少させる（re-）" }
      ],
      compounds: [
        { phrase: "abduct a child",   desc: "子どもを誘拐する" },
        { phrase: "child abduction",  desc: "子どもの誘拐" },
        { phrase: "alien abduction",  desc: "宇宙人による誘拐（SF）" }
      ]
    },

    "deduct": {
      origin: "ラテン語 deducere（引き下げる・差し引く）< de-（下に・離れて）+ ducere（引く）。「全体から引き離して下に持ち去る」という字義が「差し引く・控除する」という意味に発展した。\n\n15世紀に英語に入り、deduct（差し引く・控除する）として定着。主に金融・税務の文脈で「税控除（tax deduction）」として重要で、「全体から一部を引いた残り」というイメージで使われる。\n\n現代英語では deduct taxes（税を差し引く）・tax-deductible（税控除可能な）のように税務・会計で頻出するほか、論理的な「演繹（deduction）」という哲学・推論の意味でも重要な語族を形成する。",
      derivatives: [
        { word: "deduction",    desc: "差し引き・控除・演繹（名詞）" },
        { word: "deductible",   desc: "控除可能な・控除額（形容詞・名詞）" },
        { word: "deductive",    desc: "演繹的な（形容詞）" }
      ],
      family: [
        { word: "conduct",  desc: "指揮する（con-）" },
        { word: "induce",   desc: "引き起こす（in-）" },
        { word: "reduce",   desc: "減少させる（re-）" },
        { word: "seduce",   desc: "誘惑する（se-）" }
      ],
      compounds: [
        { phrase: "tax deduction",   desc: "税控除" },
        { phrase: "tax-deductible",  desc: "税控除可能な" },
        { phrase: "deductive logic", desc: "演繹的推論" }
      ]
    },

    // cred系（残り）
    "credential": {
      origin: "中世ラテン語 credentialis（信任の）< credere（信じる）の現在分詞 credens から。「信頼・信任を付与する書類・証明書」という字義で、その人物の資格・権限を証明する文書を指す。\n\n17世紀に英語に入り、credential（信任状・証明書）として定着。外交では「信任状（letters of credence）」として大使の権限を証明し、現代では「資格・学歴・経歴」という広義でも使われる。\n\n現代英語では credentials は常に複数形で「資格・信任の証拠」を指し、check someone's credentials（資格を確認する）・academic credentials（学歴）・digital credentials（デジタル証明書）のように使われる。",
      derivatives: [
        { word: "credentialed",   desc: "資格を持った（形容詞）" }
      ],
      family: [
        { word: "credit",    desc: "信用・功績（credere）" },
        { word: "creed",     desc: "信条（credere）" },
        { word: "credible",  desc: "信頼できる（credere）" },
        { word: "incredible",desc: "信じられない（in-+credere）" }
      ],
      compounds: [
        { phrase: "check credentials",      desc: "資格・身元を確認する" },
        { phrase: "academic credentials",   desc: "学歴・資格" },
        { phrase: "digital credentials",    desc: "デジタル証明書" }
      ]
    },

    "credulous": {
      origin: "ラテン語 credulus（簡単に信じる）< credere（信じる）+ -ulus（傾向を示す形容詞語尾）。「何でも信じてしまう傾向がある」という字義で、証拠を確認せずに信じる人を描写する。\n\n16世紀に英語に入り、credulous（信じやすい・だまされやすい）として定着。批判的な意味合いを持ち、騙されやすい純朴さや無批判な信頼を表す語として使われる。\n\n現代英語では credulous public（騙されやすい大衆）・credulous acceptance（無批判な受け入れ）のように使われ、反義語の incredulous（信じられないという表情の）とともに使われることが多い。",
      derivatives: [
        { word: "credulity",   desc: "信じやすさ・お人好し（名詞）" },
        { word: "credulously", desc: "信じやすく・単純に（副詞）" }
      ],
      family: [
        { word: "credit",       desc: "信用（credere）" },
        { word: "credible",     desc: "信頼できる（credere）" },
        { word: "incredible",   desc: "信じられない（in-）" },
        { word: "incredulous",  desc: "信じられないという顔の（in-）" }
      ],
      compounds: [
        { phrase: "credulous audience",  desc: "信じやすい観衆" },
        { phrase: "strain credulity",    desc: "信憑性を疑わせる" }
      ]
    },

    "incredulous": {
      origin: "ラテン語 incredulus（信じない）< in-（否定）+ credulus（信じやすい）< credere（信じる）。「証拠を示されても信じられない・疑いの表情を見せている」という字義で、驚きや不信の感情を表す。\n\n17世紀に英語に入り、incredulous（信じられないといった様子の・懐疑的な）として定着。発話者が驚きで信じられない状態を表す形容詞で、「事実・物が信じられない」を意味する incredible（名詞・事実に使う）と区別される。\n\n現代英語では an incredulous look（信じられないという顔）・an incredulous response（懐疑的な反応）のように人の様子・反応を描写するときに使われる。",
      derivatives: [
        { word: "incredulously",  desc: "信じられないといった様子で（副詞）" },
        { word: "incredulity",    desc: "不信・懐疑（名詞）" }
      ],
      family: [
        { word: "incredible",  desc: "信じられない（事実に使う）" },
        { word: "credulous",   desc: "信じやすい（credere）" },
        { word: "credible",    desc: "信頼できる（credere）" },
        { word: "credential",  desc: "資格・証明書（credere）" }
      ],
      compounds: [
        { phrase: "incredulous look",  desc: "信じられないという表情" },
        { phrase: "look incredulous",  desc: "信じられないという顔をする" }
      ]
    },

    // flu/flux系（残り）
    "fluctuate": {
      origin: "ラテン語 fluctuare（波打つ・揺れ動く）< fluctus（波）< fluere（流れる）。fluere は「流れる」を意味する語根で、fluent・influence・fluid などと同根。「流れのように上下に揺れ動く」という字義。\n\n17世紀に英語に入り、fluctuate（変動する・上下する・動揺する）として定着。気温・価格・感情・業績など、安定せず変化し続けるものを表す語として広く使われる。\n\n現代英語では prices fluctuate（価格が変動する）・fluctuate between hope and despair（希望と絶望の間を揺れ動く）のように、数値の増減と感情の揺れ両方に使われる。",
      derivatives: [
        { word: "fluctuation",  desc: "変動・波動（名詞）" }
      ],
      family: [
        { word: "fluent",    desc: "流暢な（fluere）" },
        { word: "influence", desc: "影響（in-+fluere）" },
        { word: "fluid",     desc: "液体・流動的な（fluere）" },
        { word: "affluent",  desc: "裕福な（ad-+fluere）" }
      ],
      compounds: [
        { phrase: "price fluctuation",  desc: "価格変動" },
        { phrase: "currency fluctuation",desc: "為替変動" },
        { phrase: "fluctuate wildly",   desc: "激しく変動する" }
      ]
    },

    "influx": {
      origin: "ラテン語 influxus（流れ込み）< influere（流れ込む）< in-（中に）+ fluere（流れる）。「外から内へと大量に流れ込む」という字義で、人・物・情報・資本の「大量流入」を表す。\n\n16世紀に英語に入り、influx（流入・殺到）として定着。経済（capital influx / 資本流入）・移民（influx of migrants）・情報（influx of data）など、大量で急速な「入り込み」全般に使われる。\n\n現代英語では massive influx（大規模な流入）・sudden influx of tourists（観光客の急増）のように使われ、反義語は outflow / efflux（流出）。ビジネス・政治・社会問題の文脈で頻出する語。",
      derivatives: [
        { word: "outflux",  desc: "流出（反義語）" }
      ],
      family: [
        { word: "fluent",     desc: "流暢な（fluere）" },
        { word: "influence",  desc: "影響（in-+fluere）" },
        { word: "fluctuate",  desc: "変動する（fluere）" },
        { word: "affluent",   desc: "裕福な（ad-+fluere）" }
      ],
      compounds: [
        { phrase: "influx of migrants",  desc: "移民の流入" },
        { phrase: "capital influx",      desc: "資本流入" },
        { phrase: "massive influx",      desc: "大規模な流入" }
      ]
    },

    // liber系（残り）
    "deliberate": {
      origin: "ラテン語 deliberare（よく考える・熟慮する）< de-（完全に）+ librare（秤にかける）< libra（秤・天秤）。「秤で完全に量る→熟慮する」という字義。libra は「天秤座」の語源でもあり、バランスと判断のメタファー。\n\n15世紀に英語に入り、deliberate（熟慮する・意図的な）として定着。形容詞「意図的な・故意の（deliberate action）」と動詞「熟慮する（deliberate over a decision）」の両方で使われる二刀流の語。\n\n現代英語では jury deliberates（陪審員が評議する）・deliberate choice（意図的な選択）のように法律・倫理の文脈で特に重要で、\"with deliberate care\"（細心の注意を払って）という慣用表現も頻出。",
      derivatives: [
        { word: "deliberation",   desc: "熟慮・審議（名詞）" },
        { word: "deliberately",   desc: "故意に・慎重に（副詞）" },
        { word: "deliberative",   desc: "審議の・熟慮する（形容詞）" }
      ],
      family: [
        { word: "liberal",   desc: "自由な（liber）" },
        { word: "liberate",  desc: "解放する（liber）" },
        { word: "liberty",   desc: "自由（liber）" },
        { word: "equilibrium",desc: "均衡（aequi-+libra）" }
      ],
      compounds: [
        { phrase: "deliberate action",   desc: "意図的な行動" },
        { phrase: "jury deliberation",   desc: "陪審評議" },
        { phrase: "deliberate over",     desc: "～についてじっくり考える" }
      ]
    },

    // struct系（残り）
    "infrastructure": {
      origin: "ラテン語 infra（下に・以下）+ structura（構造・建設）< struere（積み重ねる・建てる）。「上に建てるものを支える下部構造」という字義で、社会・経済の「基盤設備」全体を指す。\n\n20世紀初頭（1927年頃）に軍事・工学用語として英語に登場し、infrastructure（社会基盤・インフラ）として定着。軍事では「補給・通信設備の下部構造」を指したが、やがて「社会を機能させる基盤設備全体」を意味するようになった。\n\n現代英語では roads and infrastructure（道路やインフラ）・digital infrastructure（デジタルインフラ）・infrastructure investment（インフラ投資）のように政策・経済・IT 分野で最重要語の一つとなっている。",
      derivatives: [
        { word: "infrastructural",  desc: "インフラの（形容詞）" }
      ],
      family: [
        { word: "structure",   desc: "構造（struct-）" },
        { word: "construct",   desc: "建設する（con-）" },
        { word: "instruct",    desc: "指導する（in-）" },
        { word: "obstruct",    desc: "妨害する（ob-）" }
      ],
      compounds: [
        { phrase: "digital infrastructure",  desc: "デジタルインフラ" },
        { phrase: "infrastructure investment",desc: "インフラ投資" },
        { phrase: "critical infrastructure",  desc: "重要インフラ" }
      ]
    },

    // quir/quest系（残り）
    "acquire": {
      origin: "ラテン語 acquirere（探し求めて得る）< ad-（～に向けて）+ quaerere（求める・探す）。「積極的に求めて自分のものにする」という字義で、物・知識・技能・習慣の「取得・習得」を表す。\n\n14世紀に英語に入り、acquire（取得する・習得する・身につける）として定着。skill acquisition（技能習得）・language acquisition（言語習得）のように学習理論でも重要な語となっている。\n\n現代英語では acquire a taste（好みを身につける）・acquire knowledge（知識を習得する）・acquire a company（会社を買収する）のように幅広く使われ、企業買収（acquisition）は M&A の文脈で最重要語の一つ。",
      derivatives: [
        { word: "acquisition",  desc: "取得・習得・買収（名詞）" },
        { word: "acquisitive",  desc: "物欲の強い（形容詞）" }
      ],
      family: [
        { word: "require",   desc: "必要とする（re-）" },
        { word: "inquire",   desc: "尋ねる（in-）" },
        { word: "question",  desc: "質問（quaerere）" },
        { word: "quest",     desc: "探求（quaerere）" }
      ],
      compounds: [
        { phrase: "language acquisition",  desc: "言語習得" },
        { phrase: "merger and acquisition",desc: "合併・買収（M&A）" },
        { phrase: "acquire a skill",       desc: "技能を習得する" }
      ]
    },

    "inquisition": {
      origin: "ラテン語 inquisitio（尋問・調査）< inquirere（中を調べる）< in-（中に）+ quaerere（求める・探す）。「隠されたものを探し求める」という字義で、特に中世カトリック教会の「異端審問」として歴史に刻まれた語。\n\n13世紀に英語に入り、inquisition（異端審問・厳しい尋問）として定着。スペイン異端審問（Spanish Inquisition、1478年設立）は苛酷な尋問・拷問で悪名高く、今日でも「誰も予期しない（Nobody expects the Spanish Inquisition!）」というモンティ・パイソンのギャグで有名。\n\n現代英語では inquisition は主に「徹底した・威圧的な尋問」という比喩的意味で使われ、feel like an inquisition（尋問を受けているよう）・submit to an inquisition（厳しい尋問を受ける）のように使われる。",
      derivatives: [
        { word: "inquisitor",    desc: "審問官・尋問者（名詞）" },
        { word: "inquisitive",   desc: "詮索好きな・好奇心旺盛な（形容詞）" },
        { word: "inquisitorial", desc: "審問的な・詮索的な（形容詞）" }
      ],
      family: [
        { word: "inquire",   desc: "尋ねる（in-）" },
        { word: "require",   desc: "必要とする（re-）" },
        { word: "acquire",   desc: "取得する（ac-）" },
        { word: "question",  desc: "質問（quaerere）" }
      ],
      compounds: [
        { phrase: "face an inquisition",    desc: "厳しい尋問を受ける" },
        { phrase: "Spanish Inquisition",    desc: "スペイン異端審問" },
        { phrase: "inquisitive mind",       desc: "探究心旺盛な精神" }
      ]
    },

    // labor系（残り）
    "elaborate": {
      origin: "ラテン語 elaborare（入念に仕上げる・苦労して作り上げる）< e-（完全に）+ laborare（働く・苦労する）< labor（労働・苦労）。「労力をかけて細部まで仕上げる」という字義。\n\n15世紀に英語に入り、elaborate（精緻な・念入りな・詳しく説明する）として定着。形容詞「精巧な・手の込んだ（elaborate design）」と動詞「詳しく説明する・肉付けする（elaborate on a point）」の両用法がある。\n\n現代英語では elaborate on（詳しく述べる）・elaborate plan（精巧な計画）・elaborate ceremony（念入りな式典）のように使われ、学術・ビジネス・日常の文脈で幅広く登場する語。",
      derivatives: [
        { word: "elaboration",   desc: "精緻化・詳述（名詞）" },
        { word: "elaborately",   desc: "念入りに・精巧に（副詞）" }
      ],
      family: [
        { word: "labor",      desc: "労働・苦労（labor）" },
        { word: "collaborate",desc: "協力する（col-+labor）" },
        { word: "laboratory", desc: "実験室（labor）" }
      ],
      compounds: [
        { phrase: "elaborate on",         desc: "詳しく説明する" },
        { phrase: "elaborate plan",       desc: "精巧な計画" },
        { phrase: "elaborate ceremony",   desc: "念入りな式典" }
      ]
    },

    "laboratory": {
      origin: "中世ラテン語 laboratorium（作業場・仕事場）< laborare（働く）< labor（労働・苦労）。「仕事をする場所」という字義から「科学実験を行う専門施設」という意味に特化した語。\n\n17世紀に英語に入り、laboratory（実験室・研究室）として定着。錬金術師の作業場から出発し、近代科学の発展とともに「科学的実験・研究を行う場所」として確立された。\n\n現代英語では lab という略語が日常的に使われ、chemistry lab（化学実験室）・research laboratory（研究所）のほか、比喩的に「実験的に試みる場（a laboratory for ideas）」という意味でも使われる。",
      derivatives: [
        { word: "lab",       desc: "laboratory の略語" },
        { word: "laborious", desc: "骨の折れる・苦労の多い（形容詞）" }
      ],
      family: [
        { word: "labor",      desc: "労働（labor）" },
        { word: "elaborate",  desc: "精緻な（e-+labor）" },
        { word: "collaborate",desc: "協力する（col-+labor）" }
      ],
      compounds: [
        { phrase: "research laboratory",  desc: "研究所・研究室" },
        { phrase: "laboratory experiment",desc: "実験室実験" },
        { phrase: "laboratory test",      desc: "検査・ラボテスト" }
      ]
    },

    // fort系
    "fortify": {
      origin: "ラテン語 fortis（強い）+ facere（作る）を組み合わせた後期ラテン語 fortificare（強化する・要塞化する）に由来。「強くする・防御を固める」という字義で、軍事的防御から比喩的な「強化」まで幅広く使われる。\n\n14世紀に英語に入り、fortify（要塞化する・強化する・栄養を添加する）として定着。軍事的な「城壁を築く」から、現代では食品に栄養素を添加する（fortified with vitamins）という意味でも使われる。\n\n現代英語では fortify a position（陣地を固める）・fortify oneself（気力を奮い起こす）・fortified wine（アルコール強化ワイン）のように物理的・比喩的・食品的文脈で多用される語。",
      derivatives: [
        { word: "fortification",  desc: "要塞化・防衛工事（名詞）" },
        { word: "fortified",      desc: "要塞化された・強化された（形容詞）" }
      ],
      family: [
        { word: "force",    desc: "力（fortis）" },
        { word: "effort",   desc: "努力（ex-+fortis）" },
        { word: "comfort",  desc: "慰める（com-+fortis）" },
        { word: "forte",    desc: "得意なこと（fortis）" }
      ],
      compounds: [
        { phrase: "fortify a city",      desc: "都市を要塞化する" },
        { phrase: "fortified wine",      desc: "アルコール強化ワイン" },
        { phrase: "fortify oneself",     desc: "気力を奮い起こす" }
      ]
    },

    "fortitude": {
      origin: "ラテン語 fortitudo（精神的強さ・勇気）< fortis（強い）。「精神的に強くある能力・苦難に耐える内的な力」という字義で、古来から美徳（virtue）の一つとして数えられてきた。\n\n14世紀に英語に入り、fortitude（不屈の精神・剛毅）として定着。古代ギリシャの徳（arete）・ローマの virtus（男性的強さ）に対応し、キリスト教神学では四枢要徳（Fortitude / Prudence / Justice / Temperance）の一つ。\n\n現代英語では show great fortitude（大きな不屈の精神を示す）・face adversity with fortitude（逆境に不屈の精神で立ち向かう）のように、苦難に対する精神的強さを賞賛する文脈で使われる文語的な語。",
      derivatives: [
        { word: "fortitudinous",  desc: "不屈の・剛毅な（形容詞、稀）" }
      ],
      family: [
        { word: "force",    desc: "力（fortis）" },
        { word: "effort",   desc: "努力（fortis）" },
        { word: "fortify",  desc: "強化する（fortis）" },
        { word: "forte",    desc: "得意なこと（fortis）" }
      ],
      compounds: [
        { phrase: "show fortitude",       desc: "不屈の精神を示す" },
        { phrase: "moral fortitude",      desc: "道徳的剛毅" },
        { phrase: "face with fortitude",  desc: "不屈の精神で立ち向かう" }
      ]
    },

    // dict系（残り）
    "abdicate": {
      origin: "ラテン語 abdicare（放棄する・宣言して手放す）< ab-（離れて）+ dicare（宣言する）< dicere（言う）。「公的に宣言して権力・責任を手放す」という字義で、王位・権力・責任の放棄を意味する。\n\n16世紀に英語に入り、abdicate（（王位・権力・責任を）放棄する）として定着。英国史では1936年にエドワード8世が王位を abdicate（退位）した事件が有名で、責任を「みずから宣言して手放す」という語感が強い。\n\n現代英語では abdicate responsibility（責任を放棄する）・abdicate the throne（王位を退く）のように使われ、権力者が自主的に「逃げる」ニュアンスを含む批判的な文脈でも登場する。",
      derivatives: [
        { word: "abdication",  desc: "退位・（責任の）放棄（名詞）" }
      ],
      family: [
        { word: "dictate",     desc: "命じる・書き取らせる（dict-）" },
        { word: "indicate",    desc: "示す（in-）" },
        { word: "vindicate",   desc: "正当性を証明する（vind-）" },
        { word: "dedicate",    desc: "捧げる（de-）" }
      ],
      compounds: [
        { phrase: "abdicate the throne",       desc: "王位を退く" },
        { phrase: "abdicate responsibility",   desc: "責任を放棄する" },
        { phrase: "act of abdication",         desc: "退位の行為" }
      ]
    },

    "vindicate": {
      origin: "ラテン語 vindicare（守る・報復する・主張する）< vindex（保証人・仇討ち人）。「正当性を主張して守る」という字義から「無実を証明する・正当性を示す」という意味に発展した。\n\n15世紀に英語に入り、vindicate（無実を証明する・正当性を示す・汚名をそそぐ）として定着。主に「批判・疑惑を受けた後に正しさが証明される」という文脈で使われ、受動的な「vindicated by events（出来事によって正当性が証明された）」の形でよく登場する。\n\n現代英語では feel vindicated（正しかったと証明されてすっきりする）・vindicate one's decision（決断の正しさを証明する）のように使われ、法律・政治・個人の名誉回復の文脈で重要。",
      derivatives: [
        { word: "vindication",   desc: "正当性の証明・雪冤（名詞）" },
        { word: "vindicatory",   desc: "弁護の・正当化する（形容詞）" }
      ],
      family: [
        { word: "indicate",  desc: "示す（in-）" },
        { word: "dictate",   desc: "命じる（dict-）" },
        { word: "abdicate",  desc: "放棄する（ab-）" },
        { word: "verdict",   desc: "評決（verd-）" }
      ],
      compounds: [
        { phrase: "feel vindicated",      desc: "正しかったと証明されてすっきりする" },
        { phrase: "vindicate one's name", desc: "名誉を回復する" },
        { phrase: "vindicated by facts",  desc: "事実によって正しさが示される" }
      ]
    },

    // norm系
    "norm": {
      origin: "ラテン語 norma（大工の定規・規範・規則）。norma はもともと直角を測る定規を指し、「標準・規範・基準」という意味に発展した。normal・enormous（e-+norma、規格外）などと同根。\n\n19世紀に英語に入り、norm（規範・基準・平均値）として定着。社会学では「社会規範（social norms）」、統計では「標準値・平均（the norm）」として使われ、両者を橋渡しする概念語として重要。\n\n現代英語では within the norm（標準の範囲内で）・social norms（社会規範）・become the new norm（新常態になる）のように使われ、特に「当たり前のこと・標準状態」を表す the norm という表現が頻出する。",
      derivatives: [
        { word: "normal",    desc: "正常な・標準の（形容詞）" },
        { word: "abnormal",  desc: "異常な（形容詞）" },
        { word: "normalize", desc: "正規化する・常態化する（動詞）" }
      ],
      family: [
        { word: "enormous",  desc: "巨大な（e-+norma）" },
        { word: "normal",    desc: "正常な（norma）" },
        { word: "uniform",   desc: "均一な（uni-）" }
      ],
      compounds: [
        { phrase: "social norms",   desc: "社会規範" },
        { phrase: "the new norm",   desc: "新常態" },
        { phrase: "above the norm", desc: "標準以上" }
      ]
    },

    "normal": {
      origin: "ラテン語 normalis（直角の・規則通りの）< norma（定規・規範）。「定規で測ったように正しい・規則に従っている」という字義から「標準的・通常の」という意味が発展した。\n\n17世紀に英語に入り、normal（正常な・標準的な・法線の）として定着。数学では「法線（normal line）」、統計では「正規分布（normal distribution）」として重要な技術語でもある。\n\n現代英語では最も日常的な語の一つで、normal life（普通の生活）・back to normal（元通りに）・the new normal（新常態）のように使われ、COVID-19 パンデミック後の社会復帰文脈で \"new normal\" が一般語として定着した。",
      derivatives: [
        { word: "normally",   desc: "通常は・正常に（副詞）" },
        { word: "normality",  desc: "正常さ・通常状態（名詞）" },
        { word: "normalize",  desc: "正規化する（動詞）" }
      ],
      family: [
        { word: "norm",      desc: "規範・標準（norma）" },
        { word: "abnormal",  desc: "異常な（ab-+normal）" },
        { word: "enormous",  desc: "巨大な（e-+norma）" }
      ],
      compounds: [
        { phrase: "new normal",         desc: "新常態・ニューノーマル" },
        { phrase: "normal distribution",desc: "正規分布（統計）" },
        { phrase: "back to normal",     desc: "元通りになる" }
      ]
    },

    "abnormal": {
      origin: "ラテン語 abnormalis（規範から外れた）< ab-（離れて・から）+ normalis（規則通りの）< norma（定規・規範）。「標準の規範から逸脱した」という字義で、生物学・心理学・医学で「通常と異なる状態」を指す。\n\n19世紀に英語に入り、abnormal（異常な・通常でない）として定着。neutral（中立）な医学用語として使われることが多いが、社会的文脈では「社会規範からの逸脱」という価値判断を含む場合もある。\n\n現代英語では abnormal behavior（異常行動）・abnormal results（異常値）・abnormal psychology（異常心理学）のように使われ、統計では「平均から大きく外れた値」を意味する技術語としても重要。",
      derivatives: [
        { word: "abnormally",  desc: "異常に・通常でなく（副詞）" },
        { word: "abnormality", desc: "異常・異常性（名詞）" }
      ],
      family: [
        { word: "normal",   desc: "正常な（norma）" },
        { word: "norm",     desc: "規範（norma）" },
        { word: "enormous", desc: "巨大な（e-+norma）" }
      ],
      compounds: [
        { phrase: "abnormal behavior",    desc: "異常行動" },
        { phrase: "abnormal psychology",  desc: "異常心理学" },
        { phrase: "detect abnormalities", desc: "異常を検出する" }
      ]
    },

    // alter系
    "alter": {
      origin: "ラテン語 alterare（他の状態にする・変化させる）< alter（他の・もう一方の）。alter は「二つのうちのもう一方」を意味し、alternative・alternate・altruism などと同根。「別の状態に変える」という字義。\n\n13世紀に英語に入り、alter（変える・変わる・改変する）として定着。医学では「去勢・不妊手術（alter an animal）」という意味もあるが、主な意味は「（部分的に）変える」で、change が全般的な変化を指すのに対し、alter は「修正・調整」のニュアンス。\n\n現代英語では alter a garment（服の寸法直しをする）・alter one's opinion（意見を変える）・alter the course of history（歴史の流れを変える）のように使われ、alteration（変更）という名詞形も頻出。",
      derivatives: [
        { word: "alteration",   desc: "変更・修正（名詞）" },
        { word: "unalterable",  desc: "変えられない（形容詞）" }
      ],
      family: [
        { word: "alternative",  desc: "代替案・代わりの（alter）" },
        { word: "alternate",    desc: "交互の・代わりの（alter）" },
        { word: "altruism",     desc: "利他主義（alter）" },
        { word: "alien",        desc: "外国の・異質な（alius）" }
      ],
      compounds: [
        { phrase: "alter a garment",     desc: "服を寸法直しする" },
        { phrase: "alter ego",           desc: "もう一人の自分・分身" },
        { phrase: "alter the course",    desc: "方向・経過を変える" }
      ]
    },

    "alternative": {
      origin: "ラテン語 alternativus（交互の・代わりの）< alternare（交互にする）< alter（もう一方の）。「二つのうちのもう一方を選ぶ選択肢」という字義から「代替案・代替物」という意味が発展した。\n\n16世紀に英語に入り、alternative（代替案・もう一方の選択肢）として定着。厳密には二択の「もう一方」を指すべきだが、現代では複数の選択肢にも使われる。\n\n現代英語では alternative energy（代替エネルギー）・seek an alternative（代替案を探す）・alternative medicine（代替医療）・no alternative（選択の余地なし）のように、慣習的なものに対する「非主流・代替的なもの」を表す形容詞としても広く使われる。",
      derivatives: [
        { word: "alternatively",  desc: "あるいは・代わりに（副詞）" }
      ],
      family: [
        { word: "alter",     desc: "変える（alter）" },
        { word: "alternate",  desc: "交互の・代替の（alter）" },
        { word: "altruism",  desc: "利他主義（alter）" }
      ],
      compounds: [
        { phrase: "alternative energy",    desc: "代替エネルギー" },
        { phrase: "alternative medicine",  desc: "代替医療" },
        { phrase: "no alternative",        desc: "選択の余地なし" }
      ]
    },

    "alternate": {
      origin: "ラテン語 alternare（交互にする・入れ替える）< alter（もう一方の）。「二つが交互に入れ替わる」という字義で、規則正しいパターンで交互に繰り返すことを意味する。\n\n16世紀に英語に入り、alternate（交互の・代替の・交互に起こる）として定着。形容詞「交互の（alternate days / 1日おき）」と動詞「交互に行う（alternate between two methods）」の両方で使われる。\n\n現代英語ではアメリカ英語で「代替の（alternative）」と同じ意味でも使われる（alternate route = alternative route）。電気では alternating current（AC / 交流電流）の alternate が重要。",
      derivatives: [
        { word: "alternation",   desc: "交互・交替（名詞）" },
        { word: "alternately",   desc: "交互に（副詞）" },
        { word: "alternating",   desc: "交互の・交流の（形容詞）" }
      ],
      family: [
        { word: "alter",       desc: "変える（alter）" },
        { word: "alternative", desc: "代替案（alter）" },
        { word: "altruism",    desc: "利他主義（alter）" }
      ],
      compounds: [
        { phrase: "alternate days",       desc: "1日おき・隔日" },
        { phrase: "alternating current",  desc: "交流電流（AC）" },
        { phrase: "alternate routes",     desc: "代替ルート" }
      ]
    },

    // vol/volu系（残り）
    "devolve": {
      origin: "ラテン語 devolvere（下に転がす・転落させる）< de-（下に）+ volvere（転がす・回す）。volvere は「回転する」を意味する語根で、evolve・revolve・involve などと同根。「上位から下位に権限や責任を移す」という意味に発展した。\n\n17世紀に英語に入り、devolve（権限を委譲する・（悪い方向に）堕落する）として定着。政治用語では「中央から地方へ権限を移す（devolution）」が重要で、英国では Scottish / Welsh devolution（スコットランド・ウェールズへの権限委譲）が20世紀後半の政治的課題だった。\n\n現代英語では devolve power to local authorities（地方自治体に権限を委譲する）・the meeting devolved into chaos（会議が混乱に堕ちた）のように政治・行政・比喩的文脈で使われる。",
      derivatives: [
        { word: "devolution",  desc: "権限委譲・退化（名詞）" },
        { word: "devolved",    desc: "委譲された（形容詞）" }
      ],
      family: [
        { word: "evolve",    desc: "進化する（e-+volvere）" },
        { word: "revolve",   desc: "回転する（re-+volvere）" },
        { word: "involve",   desc: "含む（in-+volvere）" },
        { word: "dissolve",  desc: "溶解する（dis-+volvere系）" }
      ],
      compounds: [
        { phrase: "devolve power",        desc: "権限を委譲する" },
        { phrase: "devolve into chaos",   desc: "混乱に堕ちる" },
        { phrase: "devolution of power",  desc: "権限委譲" }
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
