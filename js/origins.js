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
