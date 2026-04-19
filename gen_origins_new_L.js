/**
 * gen_origins_new_L.js — Science part2(12)+Literature/Rhetoric(14)+Academic(10) from data-mixed-54
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "optics": {
      origin: "ギリシャ語 optikos（視覚の）から。ops（目）に由来し、optesthai（見る）が語根。光の性質・伝播・反射・屈折を研究する物理学の分野。比喩的に「物事の見え方・印象管理」の意味でも現代英語では使われる。",
      derivatives: [
        { word: "optical", desc: "光学の・視覚の（形容詞）" },
        { word: "optician", desc: "眼鏡師・光学技師" }
      ],
      family: [
        { word: "autopsy", desc: "解剖（autos+opsis：自分で見る）" },
        { word: "synopsis", desc: "概要（syn+opsis：共に見る）" },
        { word: "optical illusion", desc: "視覚的錯覚" }
      ],
      compounds: [
        { phrase: "fiber optics", desc: "光ファイバー" },
        { phrase: "optics of a situation", desc: "状況の見え方・印象" }
      ]
    },
    "radioactive": {
      origin: "ラテン語 radius（光線）から。Marie Curie が放射性現象を研究した際に確立した形容詞。不安定な原子核が自然崩壊する際にアルファ・ベータ・ガンマ線を放出する性質を指す。1898年頃に定着した科学用語。",
      derivatives: [
        { word: "radioactivity", desc: "放射能・放射性" },
        { word: "radioactive decay", desc: "放射性崩壊" }
      ],
      family: [
        { word: "radio", desc: "電波・ラジオ（radius から）" },
        { word: "radiation", desc: "放射線・放射" },
        { word: "radiate", desc: "放射する" }
      ],
      compounds: [
        { phrase: "radioactive waste", desc: "放射性廃棄物" },
        { phrase: "radioactive isotope", desc: "放射性同位体" }
      ]
    },
    "receptor": {
      origin: "ラテン語 receptor（受け取る人）から。recipere（受け取る）に由来し、re-（再び）＋capere（取る）が語根。生物学では細胞表面や内部にある特定の分子（リガンド）に結合するタンパク質を指す。薬理学・神経科学で中心的概念。",
      derivatives: [
        { word: "receptor binding", desc: "受容体結合" },
        { word: "receptor agonist", desc: "受容体作動薬" }
      ],
      family: [
        { word: "receive", desc: "受け取る" },
        { word: "perception", desc: "知覚（per+capere）" },
        { word: "accept", desc: "受け入れる（ac+capere）" }
      ],
      compounds: [
        { phrase: "hormone receptor", desc: "ホルモン受容体" },
        { phrase: "neurotransmitter receptor", desc: "神経伝達物質受容体" }
      ]
    },
    "solubility": {
      origin: "ラテン語 solvere（溶かす・解放する）から。solubilis（溶けうる）＋-ity（名詞化）。「溶解できる程度」が原義。特定の溶媒（通常は水）に溶質が溶ける最大量を表す物理化学的性質。",
      derivatives: [
        { word: "soluble", desc: "溶解する・解決できる" },
        { word: "insoluble", desc: "不溶性の" }
      ],
      family: [
        { word: "dissolve", desc: "溶かす（dis+solvere）" },
        { word: "solution", desc: "溶液・解決策（solvere から）" },
        { word: "resolve", desc: "解決する（re+solvere）" }
      ],
      compounds: [
        { phrase: "water solubility", desc: "水溶性" },
        { phrase: "solubility product", desc: "溶解度積（Ksp）" }
      ]
    },
    "static": {
      origin: "ギリシャ語 statikos（安定した・立っている）から。histanai（立つ）に由来。「動かずに立っている」が原義。物理学では静止した状態や静電気を指し、コンピュータ科学では変化しない値や要素を指す。",
      derivatives: [
        { word: "static electricity", desc: "静電気" },
        { word: "static analysis", desc: "静的解析（プログラム）" }
      ],
      family: [
        { word: "status", desc: "状態（histanai から）" },
        { word: "station", desc: "駅・立場" },
        { word: "statistics", desc: "統計学（staticus から）" }
      ],
      compounds: [
        { phrase: "static equilibrium", desc: "静的平衡" },
        { phrase: "static website", desc: "静的ウェブサイト" }
      ]
    },
    "viscosity": {
      origin: "ラテン語 viscosus（粘り気のある）から。viscum（宿り木の粘液・鳥もち）に由来。「粘り気のある性質」が原義。流体が流れに対して示す内部摩擦抵抗の度合い。単位はパスカル秒（Pa·s）またはポアズ。",
      derivatives: [
        { word: "viscous", desc: "粘性の・粘い（形容詞）" },
        { word: "viscometer", desc: "粘度計" }
      ],
      family: [
        { word: "viscid", desc: "粘着性の" },
        { word: "viscera", desc: "内臓（viscum と語源的関連）" }
      ],
      compounds: [
        { phrase: "dynamic viscosity", desc: "動粘度" },
        { phrase: "low viscosity oil", desc: "低粘度オイル" }
      ]
    },
    "anapest": {
      origin: "ギリシャ語 anapaistos（逆のダクティル）から。ana-（逆に・後ろから）＋paio（打つ）。ダクティル（長短短）を逆にした「短短長」の韻律パターン。英語詩では弱弱強（˘˘/)のリズムを指す。",
      derivatives: [
        { word: "anapestic", desc: "強弱弱格の（形容詞）" }
      ],
      family: [
        { word: "dactyl", desc: "長短短格（ダクティル）" },
        { word: "iamb", desc: "弱強格（ヤンブス）" }
      ],
      compounds: [
        { phrase: "anapestic meter", desc: "弱弱強格の詩行" },
        { phrase: "anapestic tetrameter", desc: "弱弱強4歩格" }
      ]
    },
    "anaphora": {
      origin: "ギリシャ語 anaphora（持ち上げること・前方照応）から。ana-（上へ・再び）＋pherein（運ぶ）。修辞学では同じ語句を複数の文や節の先頭で繰り返す技法。Martin Luther King Jr. の「I have a dream」が有名な例。",
      derivatives: [
        { word: "anaphoric", desc: "前方照応の（形容詞）" }
      ],
      family: [
        { word: "epiphora", desc: "後尾反復（文末の繰り返し）" },
        { word: "metaphor", desc: "隠喩（meta+pherein）" }
      ],
      compounds: [
        { phrase: "rhetorical anaphora", desc: "修辞的首句反復" },
        { phrase: "anaphora effect", desc: "繰り返しの効果" }
      ]
    },
    "assonance": {
      origin: "ラテン語 assonare（共鳴する）から。ad-（〜に）＋sonare（鳴る）。「音を合わせる」が原義。詩において同一または類似の母音音を近い位置に繰り返す技法。完全韻（rhyme）と異なり母音のみが一致する。",
      derivatives: [
        { word: "assonant", desc: "類韻の（形容詞）" }
      ],
      family: [
        { word: "consonance", desc: "子音の反復・協和音" },
        { word: "dissonance", desc: "不協和音" },
        { word: "resonance", desc: "共鳴・反響" }
      ],
      compounds: [
        { phrase: "vowel assonance", desc: "母音の類韻" },
        { phrase: "internal assonance", desc: "詩行内の類韻" }
      ]
    },
    "chiasmus": {
      origin: "ギリシャ語 khiasmos（交差配置）から。khiazein（X字形に置く）に由来し、ギリシャ文字 χ（カイ）の形に由来する。A-B-B-A の対称構造を持つ修辞技法。「Ask not what your country can do for you, ask what you can do for your country」が典型例。",
      derivatives: [
        { word: "chiastic", desc: "交差配列の（形容詞）" }
      ],
      family: [
        { word: "chi", desc: "ギリシャ文字χ（語源の文字）" },
        { word: "antimetabole", desc: "語句を逆順に繰り返す技法（chiasmus の一種）" }
      ],
      compounds: [
        { phrase: "chiastic structure", desc: "交差配列構造" },
        { phrase: "biblical chiasmus", desc: "聖書の交差配列" }
      ]
    },
    "ellipsis": {
      origin: "ギリシャ語 elleipsis（不足・省略）から。elleipein（残す・省く）に由来し、ek-（外に）＋leipein（残す）。文中で理解可能な語句を意図的に省略する修辞技法。また三点リーダー（…）を指す記号名としても使われる。",
      derivatives: [
        { word: "elliptical", desc: "省略された・楕円の" },
        { word: "ellipses", desc: "省略（複数形）" }
      ],
      family: [
        { word: "eclipse", desc: "食（天文学）・隠れる（ek+lipein）" },
        { word: "leave", desc: "去る（leipein と意味対応）" }
      ],
      compounds: [
        { phrase: "grammatical ellipsis", desc: "文法的省略" },
        { phrase: "trailing ellipsis", desc: "文末の省略記号（…）" }
      ]
    },
    "foreshadow": {
      origin: "英語 fore-（前もって・先に）＋shadow（影を落とす）の複合語。「前もって影を投げかける」が原義。文学・映画で後の重要な出来事の手がかりを早い段階で示す技法。ギリシャ語 prolepsis（前述法）に相当する。",
      derivatives: [
        { word: "foreshadowing", desc: "伏線・前兆（名詞）" },
        { word: "foreshadowed", desc: "予示された" }
      ],
      family: [
        { word: "foretell", desc: "予言する" },
        { word: "shadow", desc: "影・暗示" },
        { word: "forecast", desc: "予測する" }
      ],
      compounds: [
        { phrase: "dramatic foreshadowing", desc: "劇的な伏線" },
        { phrase: "visual foreshadowing", desc: "視覚的な伏線（映画）" }
      ]
    },
    "litotes": {
      origin: "ギリシャ語 litotes（単純さ・慎ましさ）から。litos（単純・滑らか）に由来。否定の否定や控えめな言い回しで実際よりも強い肯定を示す修辞技法。「not bad」（悪くない＝かなり良い）が典型例。",
      derivatives: [
        { word: "litotic", desc: "緩叙法の（形容詞）" }
      ],
      family: [
        { word: "litany", desc: "連祷・単調な繰り返し（litos と語根近接）" },
        { word: "understatement", desc: "控えめ表現（類義語）" }
      ],
      compounds: [
        { phrase: "rhetorical litotes", desc: "修辞的緩叙法" },
        { phrase: "classic litotes", desc: "古典的な緩叙表現" }
      ]
    },
    "synecdoche": {
      origin: "ギリシャ語 synekdoche（共に受け取ること）から。sun-（共に）＋ek-（外に）＋dechesthai（受け取る）。全体の一部で全体を（「100頭の牛」→「100頭」）、または全体で一部を表す（「パンとバター」→「食糧」）修辞技法。",
      derivatives: [
        { word: "synecdochic", desc: "提喩の（形容詞）" }
      ],
      family: [
        { word: "metonymy", desc: "換喩（関連するものへの置き換え）" },
        { word: "synergy", desc: "相乗効果（syn+ergon）" }
      ],
      compounds: [
        { phrase: "part for whole synecdoche", desc: "部分を全体に使う提喩" },
        { phrase: "whole for part synecdoche", desc: "全体を部分に使う提喩" }
      ]
    },
    "assertive": {
      origin: "ラテン語 asserere（主張する・保護する）から。ad-（〜に）＋serere（結ぶ・組み立てる）。「自分の立場を守る・主張する」が原義。自分の意見・権利・感情を明確かつ適切に表現する態度を指す。攻撃的（aggressive）とは区別される。",
      derivatives: [
        { word: "assertiveness", desc: "自己主張能力" },
        { word: "assertively", desc: "はっきりと主張して" }
      ],
      family: [
        { word: "assert", desc: "主張する" },
        { word: "assertion", desc: "主張・断言" },
        { word: "insert", desc: "挿入する（in+serere）" }
      ],
      compounds: [
        { phrase: "assertive communication", desc: "アサーティブコミュニケーション" },
        { phrase: "assertiveness training", desc: "自己主張訓練" }
      ]
    },
    "cumulative": {
      origin: "ラテン語 cumulare（積み重ねる）から。cumulus（山積み・堆積）に由来。「積み重なっていく」が原義。時間とともに積み上がって増大していく性質を表す形容詞。統計学の「累積頻度」、法律の「累犯加重」などで使われる。",
      derivatives: [
        { word: "cumulatively", desc: "累積的に" },
        { word: "cumulate", desc: "蓄積する（動詞）" }
      ],
      family: [
        { word: "accumulate", desc: "蓄積する（ac+cumulare）" },
        { word: "cumulus", desc: "積雲（気象学）" }
      ],
      compounds: [
        { phrase: "cumulative effect", desc: "累積効果" },
        { phrase: "cumulative frequency", desc: "累積頻度" }
      ]
    },
    "continuum": {
      origin: "ラテン語 continuum（連続した・続くもの）から。continuus（途切れない）に由来し、con-（共に）＋tenere（保つ）が語根。「つながり続けるもの」が原義。数学では実数の連続性を、哲学・科学では切れ目のない連続した変化を指す。",
      derivatives: [
        { word: "continua", desc: "連続体（複数形）" },
        { word: "space-time continuum", desc: "時空連続体" }
      ],
      family: [
        { word: "continue", desc: "続ける" },
        { word: "continuous", desc: "連続的な" },
        { word: "contain", desc: "含む（con+tenere）" }
      ],
      compounds: [
        { phrase: "on a continuum", desc: "連続的な段階の中で" },
        { phrase: "autism spectrum continuum", desc: "自閉症スペクトラムの連続性" }
      ]
    },
    "disposition": {
      origin: "ラテン語 disponere（配置する・整える）から。dis-（分けて）＋ponere（置く）。「性格という内面の配置」が原義。個人の生来の傾向・性格・気質を指し、哲学では行動に影響を与える潜在的性向を意味する。",
      derivatives: [
        { word: "dispose", desc: "配置する・処分する" },
        { word: "well-disposed", desc: "好意的な気持ちの" }
      ],
      family: [
        { word: "deposit", desc: "預ける（de+ponere）" },
        { word: "dispose", desc: "配置する" },
        { word: "indisposed", desc: "気分が悪い・気乗りしない" }
      ],
      compounds: [
        { phrase: "natural disposition", desc: "生来の性質・性格" },
        { phrase: "cheerful disposition", desc: "陽気な性格" }
      ]
    },
    "thematic": {
      origin: "ギリシャ語 thema（置かれたもの・主題）から。tithenai（置く）に由来。「置かれた主題に関する」が原義。特定のテーマや主題を中心に組織されている様子を表す形容詞。文学分析・教育・マーケティングで広く使われる。",
      derivatives: [
        { word: "thematically", desc: "テーマ的に" },
        { word: "theme", desc: "テーマ・主題（thema から）" }
      ],
      family: [
        { word: "theme", desc: "テーマ・主題" },
        { word: "thesis", desc: "論文・命題（tithenai から）" },
        { word: "antithesis", desc: "対比・反論" }
      ],
      compounds: [
        { phrase: "thematic analysis", desc: "テーマ分析" },
        { phrase: "thematic unit", desc: "主題単元（教育）" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch L (science part2 + literature/rhetoric + academic)');
