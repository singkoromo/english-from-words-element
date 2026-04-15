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
