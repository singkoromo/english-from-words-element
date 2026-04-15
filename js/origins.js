/**
 * origins.js — 単語の成り立ち（origin）と派生語（derivatives）データ
 * window.WORD_EXAMPLES の各エントリに origin / derivatives フィールドを追加する。
 * examples.js より後にロードすること。
 */
(function () {
  var e = window.WORD_EXAMPLES = window.WORD_EXAMPLES || {};
  var data = {

    // ── ad- / at- 系 ─────────────────────────────────────────────────────
    "advocate": {
      origin: "ラテン語 advocatus（法廷に呼び寄せられた者）が語源。ad（〜に向かって）＋ vocare（呼ぶ）の組み合わせで、もともとは被告のそばに立って声を上げる人—すなわち弁護人—を指した。中世フランス語を経て英語に入り、「特定の立場を声に出して支持する人・行為」へと意味が広がった。",
      derivatives: ["advocacy", "advocating", "advocated", "advocates"]
    },
    "attract": {
      origin: "ラテン語 attrahere（引き寄せる）が語源。ad（〜に向かって）＋ trahere（引く）から成り、磁石が鉄を引き付けるイメージが語の核心にある。もともと物理的な引力を表したが、やがて「興味・注意・魅力で人を引き寄せる」という抽象的な意味にも使われるようになった。",
      derivatives: ["attraction", "attractive", "attractively", "attractiveness", "unattractive"]
    },
    "admit": {
      origin: "ラテン語 admittere（中に入らせる）が語源。ad（〜に）＋ mittere（送る・行かせる）の組み合わせで、文字通り「門の内側へ通す」という意味だった。そこから「受け入れる」「事実として認める」「入場を許可する」といった現代の多様な意味が生まれた。",
      derivatives: ["admission", "admittance", "admitted", "admittedly"]
    },

    // ── pro- 系 ──────────────────────────────────────────────────────────
    "propose": {
      origin: "ラテン語 proponere（前に置く・提示する）が語源。pro（前に）＋ ponere（置く）から成り、もともとは議論のテーマを「人前に置く」行為を指した。フランス語 proposer を経て英語に入り、「計画を提案する」「求婚する」といった意味を持つようになった。",
      derivatives: ["proposal", "proposition", "proposed", "proposer"]
    },
    "promote": {
      origin: "ラテン語 promovere（前に動かす）が語源。pro（前に）＋ movere（動かす）の組み合わせで、「より上の地位や段階へ押し進める」イメージが出発点にある。昇進・宣伝・普及といった現代の意味はすべて、「何かを前へ進める力」という核心的なイメージから派生している。",
      derivatives: ["promotion", "promotional", "promoter", "promoted"]
    },
    "produce": {
      origin: "ラテン語 producere（前に引き出す・育てる）が語源。pro（前に）＋ ducere（引く・導く）の組み合わせ。土地から農作物を「前へ引き出す」イメージが起源で、のちに製造・生産全般、さらには映画や演劇の「制作」へと意味が拡張した。",
      derivatives: ["production", "productive", "productivity", "producer", "product", "reproduce"]
    },
    "protect": {
      origin: "ラテン語 protegere（前で覆う）が語源。pro（前に）＋ tegere（覆う・屋根をかける）の組み合わせで、「盾のように前面を覆って守る」というイメージが核心にある。物理的な防護から、権利・環境・個人情報の保護まで、幅広い文脈で使われるようになった。",
      derivatives: ["protection", "protective", "protectively", "protector", "unprotected"]
    },

    // ── sub- 系 ──────────────────────────────────────────────────────────
    "support": {
      origin: "ラテン語 supportare（下から運ぶ・持ち上げる）が語源。sub（下から）＋ portare（運ぶ）の組み合わせで、建物の土台が上の重みを「下から支える」イメージが出発点。そこから精神的・経済的・技術的に「支える」という幅広い意味へと発展した。",
      derivatives: ["supporter", "supportive", "supportively", "unsupported", "supporting"]
    },
    "submit": {
      origin: "ラテン語 submittere（下に送る・差し出す）が語源。sub（下に）＋ mittere（送る）の組み合わせで、もともとは「上位の者の下に自分を置く＝服従する」を意味した。現在は「書類・作品を提出する」という中立的な意味でよく使われるが、語根には「自分より上へ差し出す」敬意の姿勢が残っている。",
      derivatives: ["submission", "submitted", "submissive", "submissively"]
    },

    // ── con-/com- 系 ─────────────────────────────────────────────────────
    "conduct": {
      origin: "ラテン語 conducere（共に導く）が語源。con（共に）＋ ducere（導く）の組み合わせで、人々をまとめて一方向へ導くイメージが核心にある。管弦楽の「指揮」、研究の「実施」、熱や電気の「伝導」など、「エネルギーや行動を一定方向に導く」という共通のイメージから多様な意味が生まれた。",
      derivatives: ["conductor", "conduction", "conducted", "misconduct"]
    },
    "construct": {
      origin: "ラテン語 construere（積み重ねて作る）が語源。con（共に・完全に）＋ struere（積む・並べる）の組み合わせ。石やレンガを一つ一つ積み上げて建物を作るイメージが起源で、現代では物理的な建設だけでなく「議論の構築」「文章の構成」など抽象的な「作り上げる」行為にも使われる。",
      derivatives: ["construction", "constructive", "constructively", "constructor", "reconstruct", "deconstruct"]
    },
    "commit": {
      origin: "ラテン語 committere（共に送り出す・委ねる）が語源。con（共に）＋ mittere（送る）の組み合わせで、もともとは「誰かに任務を委ねる」行為を指した。そこから「自分自身を何かに捧げる・約束する」という意味と、「罪を犯す」という意味の両方が生まれた—どちらも「不可逆的に行動を起こす」という点で共通している。",
      derivatives: ["commitment", "committed", "committal", "committee"]
    },
    "conclude": {
      origin: "ラテン語 concludere（完全に閉じる）が語源。con（完全に）＋ claudere（閉じる）の組み合わせ。議論や裁判を「最後に閉じる」イメージから来ており、「結論を出す」「終わらせる」「（論理的に）導き出す」といった現代の意味へと発展した。include、exclude と同じ claudere を語根に持つ仲間である。",
      derivatives: ["conclusion", "conclusive", "conclusively", "inconclusive"]
    },

    // ── in-/ex- ＋ -clude 系 ─────────────────────────────────────────────
    "include": {
      origin: "ラテン語 includere（中に閉じ込める）が語源。in（中に）＋ claudere（閉じる）の組み合わせ。「柵の中に入れる」というイメージが出発点で、「仲間や集合に加える」という意味へと広がった。exclude（外に締め出す）と対をなす語で、どちらも「境界線を引く」行為を表している。",
      derivatives: ["inclusion", "inclusive", "inclusively", "inclusiveness"]
    },
    "exclude": {
      origin: "ラテン語 excludere（外に締め出す）が語源。ex（外に）＋ claudere（閉じる）の組み合わせ。「扉を閉めて外に出す」イメージが核心にある。include（中に閉じ込める）と完全に対をなす語で、「集合・グループ・考慮の外に置く」という意味を持つ。",
      derivatives: ["exclusion", "exclusive", "exclusively", "exclusiveness"]
    },

    // ── trans- 系 ────────────────────────────────────────────────────────
    "translate": {
      origin: "ラテン語 translatus（向こう側へ運ばれた）が語源。trans（越えて）＋ latus（運ぶ、ferre の過去分詞形）の組み合わせで、「言葉を一つの言語から別の言語へと運び越える」という直観的なイメージが語義の根本にある。物理的な「移動」を意味した時代もあったが、現代では言語・概念の翻訳が主な意味になっている。",
      derivatives: ["translation", "translator", "translatable", "mistranslate"]
    },
    "transport": {
      origin: "ラテン語 transportare（向こう側へ運ぶ）が語源。trans（越えて）＋ portare（運ぶ）の組み合わせ。川や国境を越えてモノや人を運ぶという具体的なイメージが語源で、現代でも物流・交通手段の意味が中心。ただし「強い感情に運ばれる」という詩的な用法にも使われる。",
      derivatives: ["transportation", "transporter", "transported", "transport system"]
    },
    "transmit": {
      origin: "ラテン語 transmittere（向こう側へ送る）が語源。trans（越えて）＋ mittere（送る）の組み合わせ。音声・信号・病気・情報など、「何かを隔たりを越えて別の場所や人へ届ける」すべての行為をこの一語でカバーする。mittere を語根に持つ admit、submit、commit とは「送る」のベクトルが異なる兄弟語である。",
      derivatives: ["transmission", "transmitter", "transmitted", "retransmit"]
    },

    // ── de- 系 ───────────────────────────────────────────────────────────
    "describe": {
      origin: "ラテン語 describere（書き写す・描き出す）が語源。de（完全に・下方向へ）＋ scribere（書く）の組み合わせで、「ペンを動かして対象を紙の上に写し取る」イメージが起源。prescribe（処方する）、inscribe（刻む）、subscribe（署名する）など、scribere を共有する多くの単語の仲間である。",
      derivatives: ["description", "descriptive", "descriptively", "indescribable"]
    },
    "develop": {
      origin: "古フランス語 desveloper（包みを解く・展開する）が語源とされる。もともとは「巻かれた布や覆いをほどく」イメージで、そこから「秘められた可能性を徐々に広げる」という意味へと発展した。写真の「現像」（フィルムの潜像を引き出す）も同じ語根のイメージを色濃く残している。",
      derivatives: ["development", "developer", "developing", "underdeveloped", "redevelop"]
    },
    "derive": {
      origin: "ラテン語 derivare（川から水路を引く）が語源。de（離れて・下へ）＋ rivus（小川）の組み合わせで、もともとは「本流から水を引いて別の流れを作る」行為を指した。そのイメージから「源から引き出す・起源を持つ」という意味が生まれ、数学の「導関数（derivative）」にも同じ語根が使われている。",
      derivatives: ["derivative", "derivation", "derived", "derivable"]
    },

    // ── re- 系 ───────────────────────────────────────────────────────────
    "reject": {
      origin: "ラテン語 reicere（投げ返す）が語源。re（後ろへ）＋ jacere（投げる）の組み合わせで、「投げかけられたものを跳ね返す」という鮮明なイメージが語の核心にある。物が「飛んでくる」→「はね返す」動作から、申請・提案・愛情などを「受け取らずに返す」という抽象的な拒絶へと意味が発展した。",
      derivatives: ["rejection", "rejected", "rejector", "rejectable"]
    },

    // ── pre- 系 ──────────────────────────────────────────────────────────
    "prefer": {
      origin: "ラテン語 praeferre（前へ運ぶ・優先する）が語源。prae（前に）＋ ferre（運ぶ・持つ）の組み合わせで、「他のものより前に置く」という序列のイメージが語の核心にある。この ferre（運ぶ）は、offer（差し出す）、refer（参照する）、transfer（移す）など多くの英語動詞の語根でもある。",
      derivatives: ["preference", "preferable", "preferably", "preferential", "preferred"]
    },

    // ── 語根 cre- / gen- 系 ───────────────────────────────────────────────
    "create": {
      origin: "ラテン語 creare（育てる・生み出す・成長させる）が語源。もともと生物が子を「産み育てる」ことを意味し、そこから「何か新しいものを存在させる」という意味へと広がった。キリスト教神学では神が世界を「創造する」行為に使われ、「無から有を生み出す」という強いニュアンスが定着した。",
      derivatives: ["creation", "creative", "creativity", "creator", "recreate", "creature"]
    },
    "generate": {
      origin: "ラテン語 generare（生む・産み出す）が語源。genus（生まれ・種族・類）と同じ語根 gen を持ち、「同じ種の命を次へつなぐ」という生物学的イメージが出発点。現代では電力を「発生させる」、アイデアを「生み出す」、報告書を「自動生成する」など幅広い文脈で使われる。",
      derivatives: ["generation", "generator", "generative", "degenerate", "regenerate"]
    },

    // ── grad- 系 ──────────────────────────────────────────────────────────
    "graduate": {
      origin: "ラテン語 graduari（段階を踏む）が語源。gradus（段・一歩）から来ており、「一段ずつ階段を上がる」イメージが語の核心にある。大学の卒業は「すべての段階を踏み終えて上に達した」ことを意味し、温度計の目盛りを「段階的に刻む（graduate）」行為にも同じ語根が使われている。",
      derivatives: ["graduation", "graduate school", "undergraduate", "postgraduate", "grade"]
    },

  };

  // 各エントリに origin / derivatives を追加（既存の example / exampleJa は保持）
  for (var word in data) {
    if (!e[word]) e[word] = {};
    if (data[word].origin)      e[word].origin      = data[word].origin;
    if (data[word].derivatives) e[word].derivatives = data[word].derivatives;
  }
})();
