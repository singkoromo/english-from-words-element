/**
 * gen_origins_new_D.js — Culinary terms from data-mixed-52 (35 words)
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "blanch": {
      origin: "フランス語 blanchir（白くする）から。blanc（白い）に由来し、ラテン語 blancus（白い）が語根。沸騰したお湯に野菜を短時間つけて色を鮮やかに保つ調理法。「白くする」が原義。",
      derivatives: [
        { word: "blanched", desc: "湯通しした・青ざめた" },
        { word: "blanching", desc: "湯通し（動名詞）" }
      ],
      family: [
        { word: "blank", desc: "空白の・白い（同語根）" },
        { word: "blanc de blanc", desc: "白ブドウのみのシャンパン" },
        { word: "blanc", desc: "白（フランス語）" }
      ],
      compounds: [
        { phrase: "blanch almonds", desc: "アーモンドの皮をむく" },
        { phrase: "blanch vegetables", desc: "野菜を湯通しする" }
      ]
    },
    "braise": {
      origin: "フランス語 braiser（炭火で調理する）から。braise（炭・熾火）に由来し、ゲルマン語 *brasa（熾火）が語根。少量の液体と共に鍋を密封して低温で長時間蒸し焼きにする調理法。",
      derivatives: [
        { word: "braised", desc: "蒸し焼きにした" },
        { word: "braising", desc: "蒸し焼き調理法" }
      ],
      family: [
        { word: "braze", desc: "ろう付けする（金属加工）" },
        { word: "brazier", desc: "炭火鉢" }
      ],
      compounds: [
        { phrase: "braised beef", desc: "牛肉の蒸し焼き" },
        { phrase: "braised short ribs", desc: "ショートリブの蒸し焼き" }
      ]
    },
    "consomme": {
      origin: "フランス語 consommé（完成した・濃縮された）から。consommer（完成する・消費する）の過去分詞。ラテン語 consummare（完成させる）、con-（完全に）＋summa（合計）に由来。濾過した澄んだ高級スープ。",
      derivatives: [
        { word: "consommé double", desc: "濃縮コンソメ" }
      ],
      family: [
        { word: "consume", desc: "消費する" },
        { word: "consumer", desc: "消費者" },
        { word: "sum", desc: "合計" }
      ],
      compounds: [
        { phrase: "beef consommé", desc: "ビーフコンソメ" },
        { phrase: "consommé royale", desc: "ロワイヤル風コンソメ" }
      ]
    },
    "coulis": {
      origin: "フランス語 coulis（流れるもの・濾したもの）から。couler（流れる）に由来し、ラテン語 colare（濾す）が語根。野菜や果物を裏漉しして作る滑らかなソース・ピューレ。",
      derivatives: [
        { word: "raspberry coulis", desc: "ラズベリークーリー" }
      ],
      family: [
        { word: "colander", desc: "水切りザル（colare と同語根）" },
        { word: "percolate", desc: "滲み出る・浸透する" }
      ],
      compounds: [
        { phrase: "tomato coulis", desc: "トマトクーリー" },
        { phrase: "fruit coulis", desc: "フルーツクーリー" }
      ]
    },
    "couscous": {
      origin: "アラビア語 kuskus（すり砕いた穀物）から。マグレブ地方（北アフリカ）発祥の料理で、ベルベル語起源とも。小麦セモリナを蒸した粒状の食べ物。フランス語を経て西洋に広まった。",
      derivatives: [
        { word: "couscousier", desc: "クスクス専用の蒸し器" }
      ],
      family: [
        { word: "semolina", desc: "セモリナ（クスクスの材料）" }
      ],
      compounds: [
        { phrase: "couscous salad", desc: "クスクスサラダ" },
        { phrase: "Moroccan couscous", desc: "モロッコ風クスクス" }
      ]
    },
    "crouton": {
      origin: "フランス語 croûton（パンの大きな端切れ・かた焼きパン）から。croûte（パンの皮・外皮）の指小形。ラテン語 crusta（外皮・殻）に由来。スープやサラダに添える小さな揚げパン。",
      derivatives: [
        { word: "croutons", desc: "クルトン（複数形）" }
      ],
      family: [
        { word: "crust", desc: "パンの皮・地殻" },
        { word: "crostini", desc: "クロスティーニ（イタリア語）" },
        { word: "crustacean", desc: "甲殻類（殻を持つもの）" }
      ],
      compounds: [
        { phrase: "garlic crouton", desc: "ガーリッククルトン" },
        { phrase: "Caesar salad with croutons", desc: "クルトン入りシーザーサラダ" }
      ]
    },
    "culinary": {
      origin: "ラテン語 culinarius（台所の・料理の）から。culina（台所・炊事場）に由来し、coquere（調理する）と関連する語根を持つとも。英語 kiln（窯）と同語根説もある。",
      derivatives: [
        { word: "culinarily", desc: "料理的に" },
        { word: "culinary arts", desc: "料理芸術" }
      ],
      family: [
        { word: "kiln", desc: "窯（英語同語根説）" },
        { word: "cook", desc: "調理する（coquere と対応）" }
      ],
      compounds: [
        { phrase: "culinary school", desc: "料理学校" },
        { phrase: "culinary tradition", desc: "料理の伝統" }
      ]
    },
    "deglaze": {
      origin: "フランス語 déglacer（光沢を取り除く・こびりつきをはがす）から。de-（除去）＋glacer（氷にする・光沢をつける）。ラテン語 glacies（氷）に由来。熱した鍋に液体を加えて焦げ付いた旨味成分を溶かす技法。",
      derivatives: [
        { word: "deglazed", desc: "デグラッセした" },
        { word: "deglazing", desc: "デグラッセ（動名詞）" }
      ],
      family: [
        { word: "glaze", desc: "光沢をつける" },
        { word: "glacé", desc: "砂糖漬けの・アイシングした" },
        { word: "glacier", desc: "氷河" }
      ],
      compounds: [
        { phrase: "deglaze with wine", desc: "ワインでデグラッセする" },
        { phrase: "deglaze the pan", desc: "フライパンをデグラッセする" }
      ]
    },
    "emulsify": {
      origin: "ラテン語 emulgere（搾り出す）から。e-（外に）＋mulgere（搾る）。emulsion（乳剤）に動詞接尾辞 -fy（〜にする）が付いた形。本来混ざらない油と水を均一に混合させること。",
      derivatives: [
        { word: "emulsifier", desc: "乳化剤" },
        { word: "emulsion", desc: "乳剤・乳濁液" },
        { word: "emulsification", desc: "乳化（名詞）" }
      ],
      family: [
        { word: "milk", desc: "乳（mulgere と語根対応）" },
        { word: "emollient", desc: "柔軟剤・皮膚を柔らかくする" }
      ],
      compounds: [
        { phrase: "emulsify oil and water", desc: "油と水を乳化する" },
        { phrase: "natural emulsifier", desc: "天然乳化剤" }
      ]
    },
    "flambe": {
      origin: "フランス語 flambé（炎にかけられた）から。flambe（炎）の過去分詞。ラテン語 flamma（炎）に由来。料理に高アルコールの酒を加えて点火し、炎で仕上げる演出的な調理技法。",
      derivatives: [
        { word: "flambéed", desc: "フランベされた" },
        { word: "flambéing", desc: "フランベ中" }
      ],
      family: [
        { word: "flame", desc: "炎（flamma と同語根）" },
        { word: "flammable", desc: "可燃性の" },
        { word: "flamingo", desc: "フラミンゴ（炎のような色）" }
      ],
      compounds: [
        { phrase: "flambé dessert", desc: "フランベデザート" },
        { phrase: "bananas Foster", desc: "バナナのフランベ（クレープシュゼット同様）" }
      ]
    },
    "fricassee": {
      origin: "フランス語 fricassée から。frire（揚げる・炒める）と casser（壊す・切る）が結合した語とも、または fricas（軽い炒め物）から。鶏肉などを切り分け、クリームソースで煮込む白いシチュー。",
      derivatives: [
        { word: "fricasseed", desc: "フリカッセにした" }
      ],
      family: [
        { word: "fry", desc: "揚げる（frire と語根対応）" },
        { word: "fracas", desc: "騒ぎ・乱闘（casser から）" }
      ],
      compounds: [
        { phrase: "chicken fricassee", desc: "チキンフリカッセ" },
        { phrase: "veal fricassee", desc: "子牛肉のフリカッセ" }
      ]
    },
    "ganache": {
      origin: "フランス語 ganache（下顎・愚か者）から。伝説では、徒弟が熱い生クリームをチョコレートにこぼし、親方に「ganache（愚か者）！」と叱られたことが語源とされる。偶然の発明による命名。",
      derivatives: [
        { word: "ganache filling", desc: "ガナッシュフィリング" }
      ],
      family: [
        { word: "truffle", desc: "トリュフ（ガナッシュを包む）" }
      ],
      compounds: [
        { phrase: "chocolate ganache", desc: "チョコレートガナッシュ" },
        { phrase: "ganache tart", desc: "ガナッシュタルト" }
      ]
    },
    "glaze": {
      origin: "古英語 glasen（ガラスのような）から。glas（ガラス）に由来し、ゲルマン語 *glasaz が語根。料理では表面に光沢を出すタレや砂糖液を指し、陶器や建築でも「釉薬」「ガラスをはめる」の意で使われる。",
      derivatives: [
        { word: "glazed", desc: "光沢をつけた・うわぐすりをかけた" },
        { word: "glazing", desc: "グレイジング（動名詞）" },
        { word: "glazy", desc: "光沢のある" }
      ],
      family: [
        { word: "glass", desc: "ガラス" },
        { word: "glassy", desc: "ガラスのような" },
        { word: "glacé", desc: "砂糖漬けの（フランス語形）" }
      ],
      compounds: [
        { phrase: "honey glaze", desc: "ハニーグレーズ" },
        { phrase: "glaze a ham", desc: "ハムにグレーズをかける" }
      ]
    },
    "gnocchi": {
      origin: "イタリア語 gnocchi（ニョッキ）から。nocchio（木の節・こぶ）に由来し、ロンバルド語 knohha（節）が語根とも。じゃがいもや小麦粉で作る小さな団子状のパスタ。形が木の節に似ていることに由来。",
      derivatives: [
        { word: "gnocchi alla Romana", desc: "ローマ風ニョッキ" }
      ],
      family: [
        { word: "knuckle", desc: "指の関節（knohha と同語根）" }
      ],
      compounds: [
        { phrase: "potato gnocchi", desc: "じゃがいもニョッキ" },
        { phrase: "gnocchi with pesto", desc: "ペスト添えニョッキ" }
      ]
    },
    "gratinate": {
      origin: "フランス語 gratiner（グラタンにする）から。gratter（こする・削る）に由来し、ラテン語 grattare（引っ掻く）が語根。チーズやパン粉を表面にのせてオーブンで焼き色をつける調理法。",
      derivatives: [
        { word: "gratinated", desc: "グラタンにした" },
        { word: "gratin", desc: "グラタン料理" },
        { word: "au gratin", desc: "グラタン風に仕上げた" }
      ],
      family: [
        { word: "grate", desc: "おろし金でする・軋む" },
        { word: "grater", desc: "おろし金" }
      ],
      compounds: [
        { phrase: "potatoes au gratin", desc: "グラタンポテト" },
        { phrase: "gratinated vegetables", desc: "野菜のグラタン" }
      ]
    },
    "julienne": {
      origin: "フランス語 Julienne（女性名または男性名 Julien の女性形）から。18世紀フランスの料理人の名前に由来するとされる。細い千切りにする切り方、またはその切り方で作られた料理を指す。",
      derivatives: [
        { word: "julienned", desc: "千切りにした" },
        { word: "julienning", desc: "千切りにすること" }
      ],
      family: [
        { word: "chiffonade", desc: "シフォナード（細切りのハーブ）" }
      ],
      compounds: [
        { phrase: "julienne vegetables", desc: "野菜の千切り" },
        { phrase: "julienne carrots", desc: "にんじんの千切り" }
      ]
    },
    "macerate": {
      origin: "ラテン語 macerare（柔らかくする・浸す）から。液体に長時間浸して軟化させたり風味を移したりすること。比喩的に「心身を衰弱させる」意味でも用いられる。",
      derivatives: [
        { word: "maceration", desc: "浸漬・マセレーション" },
        { word: "macerated", desc: "浸漬した" }
      ],
      family: [
        { word: "emaciate", desc: "やつれさせる（e+macerare）" }
      ],
      compounds: [
        { phrase: "macerate fruit", desc: "果物を漬け込む" },
        { phrase: "cold maceration", desc: "コールドマセレーション（ワイン製造）" }
      ]
    },
    "marinade": {
      origin: "フランス語 marinade（マリネ液）から。mariner（塩水に漬ける）に由来し、ラテン語 marinus（海の）、mare（海）が語根。元々海水や塩水に漬けて保存する方法を指した。",
      derivatives: [
        { word: "marinate", desc: "マリネする（動詞形）" },
        { word: "marinated", desc: "マリネした" },
        { word: "marinating", desc: "マリネ中" }
      ],
      family: [
        { word: "marine", desc: "海の・海兵隊" },
        { word: "mariner", desc: "船乗り" },
        { word: "marina", desc: "マリーナ・小型港" }
      ],
      compounds: [
        { phrase: "soy marinade", desc: "醤油ベースのマリネ液" },
        { phrase: "overnight marinade", desc: "一晩漬け込むマリネ" }
      ]
    },
    "meringue": {
      origin: "フランス語 meringue（メレンゲ）から。語源は諸説あり、スイスの都市 Meiringen または Mehrinyghen 説、ポーランド語 marzynka（夢のお菓子）説などがある。卵白と砂糖を泡立てて焼いたお菓子。",
      derivatives: [
        { word: "meringued", desc: "メレンゲをのせた" },
        { word: "Italian meringue", desc: "イタリアンメレンゲ" }
      ],
      family: [
        { word: "pavlova", desc: "パブロバ（メレンゲ菓子の一種）" }
      ],
      compounds: [
        { phrase: "lemon meringue pie", desc: "レモンメレンゲパイ" },
        { phrase: "baked meringue", desc: "焼きメレンゲ" }
      ]
    },
    "mousse": {
      origin: "フランス語 mousse（泡・苔）から。ゲルマン語 *mōsa（苔・ぬるぬるしたもの）に由来。泡立てた生クリームや卵白で作る軽くふわふわした料理・デザート。「泡のような」質感が原義。",
      derivatives: [
        { word: "mousseline", desc: "ムスリン・軽い生地（同語根）" },
        { word: "mousse au chocolat", desc: "チョコレートムース" }
      ],
      family: [
        { word: "moss", desc: "苔（ゲルマン語同語根）" },
        { word: "muslin", desc: "モスリン布（mousseline から）" }
      ],
      compounds: [
        { phrase: "chocolate mousse", desc: "チョコレートムース" },
        { phrase: "salmon mousse", desc: "サーモンムース" }
      ]
    },
    "paella": {
      origin: "スペイン語（バレンシア語）paella（鍋・フライパン）から。ラテン語 patella（浅い鍋・皿）に由来し、patere（開く）が語根。バレンシア地方発祥の米料理で、専用の浅い鉄鍋の名が料理名になった。",
      derivatives: [
        { word: "paellera", desc: "パエリア鍋" }
      ],
      family: [
        { word: "pan", desc: "鍋（patella と語根対応）" },
        { word: "patella", desc: "膝蓋骨（同語根）" }
      ],
      compounds: [
        { phrase: "seafood paella", desc: "シーフードパエリア" },
        { phrase: "Valencian paella", desc: "バレンシア風パエリア" }
      ]
    },
    "patisserie": {
      origin: "フランス語 pâtisserie（菓子店・焼き菓子類）から。pâte（生地・ペースト）に由来し、ラテン語 pasta（生地）が語根。pasta（パスタ）や paste（ペースト）と同語源。洋菓子や焼き菓子の専門店。",
      derivatives: [
        { word: "pâtissier", desc: "パティシエ・洋菓子職人（男性形）" },
        { word: "pâtissière", desc: "パティシエール（女性形）" }
      ],
      family: [
        { word: "pasta", desc: "パスタ（同語根）" },
        { word: "pastry", desc: "ペストリー・パイ生地" },
        { word: "paste", desc: "ペースト" }
      ],
      compounds: [
        { phrase: "French patisserie", desc: "フランスの洋菓子店" },
        { phrase: "patisserie chef", desc: "パティシエ" }
      ]
    },
    "ragout": {
      origin: "フランス語 ragoût（食欲をそそる料理）から。ragoûter（食欲を刺激する）に由来し、re-（再び）＋a（〜に）＋goût（味）が結合。ラテン語 gustus（味）が語根。野菜と肉を煮込んだシチュー料理。",
      derivatives: [
        { word: "ragù", desc: "ラグー（イタリア語形・パスタソース）" }
      ],
      family: [
        { word: "gusto", desc: "好み・熱意（gustus から）" },
        { word: "disgust", desc: "嫌悪感" },
        { word: "taste", desc: "味" }
      ],
      compounds: [
        { phrase: "lamb ragout", desc: "子羊のラグー" },
        { phrase: "ragù alla Bolognese", desc: "ボロネーゼソース" }
      ]
    },
    "ratatouille": {
      origin: "フランス語 ratatouille から。ratouiller（ひっかき混ぜる）または touiller（かき混ぜる）に由来するとされる。南フランス・ニース地方発祥の夏野菜の煮込み料理。",
      derivatives: [
        { word: "ratatouille niçoise", desc: "ニース風ラタトゥイユ" }
      ],
      family: [
        { word: "toss", desc: "かき混ぜる（touiller と意味対応）" }
      ],
      compounds: [
        { phrase: "Provençal ratatouille", desc: "プロヴァンス風ラタトゥイユ" },
        { phrase: "ratatouille with zucchini", desc: "ズッキーニ入りラタトゥイユ" }
      ]
    },
    "risotto": {
      origin: "イタリア語 risotto（米の料理）から。riso（米）の指小形・増大形。ラテン語 oryza（米）に由来し、ギリシャ語 oryza、アラビア語 ruzz を経由した語。米を炒めてブロスを加えながら煮るイタリア料理。",
      derivatives: [
        { word: "risotto bianco", desc: "白のリゾット" },
        { word: "risotto nero", desc: "黒のリゾット（イカ墨）" }
      ],
      family: [
        { word: "rice", desc: "米（語根対応）" },
        { word: "arroz", desc: "米（スペイン語・アラビア語由来）" }
      ],
      compounds: [
        { phrase: "mushroom risotto", desc: "きのこのリゾット" },
        { phrase: "risotto alla Milanese", desc: "ミラノ風リゾット（サフラン）" }
      ]
    },
    "saute": {
      origin: "フランス語 sauté（跳ねた・飛び跳ねた）から。sauter（跳ねる・ジャンプする）の過去分詞。ラテン語 saltare（跳ねる）に由来。フライパンで食材を跳ねるように炒める調理法。強火で短時間炒める技法。",
      derivatives: [
        { word: "sautéed", desc: "ソテーした" },
        { word: "sautéing", desc: "ソテー中" }
      ],
      family: [
        { word: "somersault", desc: "宙返り（saltare から）" },
        { word: "saltimbocca", desc: "ローマの肉料理（saltare+bocca）" },
        { word: "assault", desc: "襲撃（ad+saltare）" }
      ],
      compounds: [
        { phrase: "sauté pan", desc: "ソテーパン" },
        { phrase: "sauté mushrooms", desc: "きのこをソテーする" }
      ]
    },
    "simmer": {
      origin: "中期英語 simperen（静かに音を立てる）から。擬音語的な起源を持ち、ゲルマン語の「し〜」という音に由来するとされる。沸騰より低い温度でくつくつ煮ることを指す。",
      derivatives: [
        { word: "simmering", desc: "とろ火で煮ている・沸き立ちそうな" },
        { word: "simmered", desc: "とろ火で煮た" }
      ],
      family: [
        { word: "simper", desc: "にやにや笑う（同語根説）" }
      ],
      compounds: [
        { phrase: "simmer down", desc: "静まる・落ち着く" },
        { phrase: "simmer on low heat", desc: "弱火でとろとろ煮る" }
      ]
    },
    "sommelier": {
      origin: "フランス語 sommelier（ソムリエ）から。古プロヴァンス語 saumalier（荷物を運ぶ動物の世話係）に由来し、sommier（荷物運搬者）が語根。宮廷でワインや食器の管理をする役人が転じた。",
      derivatives: [
        { word: "sommelière", desc: "ソムリエール（女性形）" },
        { word: "master sommelier", desc: "マスターソムリエ" }
      ],
      family: [
        { word: "sumpter", desc: "荷馬（sommelier と同語源）" }
      ],
      compounds: [
        { phrase: "wine sommelier", desc: "ワインソムリエ" },
        { phrase: "head sommelier", desc: "チーフソムリエ" }
      ]
    },
    "sorbet": {
      origin: "フランス語 sorbet から。トルコ語 şerbet（甘い飲み物）に由来し、アラビア語 sharbat（飲み物）、shariba（飲む）が語根。砂糖と果汁・ピューレで作る氷菓子。シャーベットの語源でもある。",
      derivatives: [
        { word: "sherbet", desc: "シャーベット（英語形）" }
      ],
      family: [
        { word: "syrup", desc: "シロップ（同語根）" },
        { word: "shrub", desc: "果実酢飲料（shariba から）" }
      ],
      compounds: [
        { phrase: "lemon sorbet", desc: "レモンシャーベット" },
        { phrase: "champagne sorbet", desc: "シャンパンシャーベット" }
      ]
    },
    "tartare": {
      origin: "フランス語 tartare（タタール人の・タタール風）から。モンゴル系遊牧民タタール人（Tatars）は生肉を食べると誤解されていたことに由来。生の牛肉や魚を細かく刻んだ料理を指す。",
      derivatives: [
        { word: "steak tartare", desc: "ステーキタルタル（生牛肉料理）" },
        { word: "tartare sauce", desc: "タルタルソース" }
      ],
      family: [
        { word: "Tartar", desc: "タタール人" },
        { word: "Tatar", desc: "タタール族" }
      ],
      compounds: [
        { phrase: "tuna tartare", desc: "マグロのタルタル" },
        { phrase: "salmon tartare", desc: "サーモンのタルタル" }
      ]
    },
    "tempura": {
      origin: "ポルトガル語 têmporas（四旬節の斎日）または tempero（調味料・季節）から。16世紀にポルトガル人宣教師が日本に伝えた調理法で、斎日に魚や野菜を揚げる習慣に由来するとされる。",
      derivatives: [
        { word: "tempura batter", desc: "天ぷらの衣" },
        { word: "tempura soba", desc: "天ぷらそば" }
      ],
      family: [
        { word: "temper", desc: "調合する・温度を整える（tempero と語根対応）" },
        { word: "temporal", desc: "時間の（tempera と同語源）" }
      ],
      compounds: [
        { phrase: "shrimp tempura", desc: "えびの天ぷら" },
        { phrase: "tempura udon", desc: "天ぷらうどん" }
      ]
    },
    "tiramisu": {
      origin: "イタリア語 tirami su（私を引き上げて・元気づけて）から。tirare（引く）＋mi（私を）＋su（上に）が結合。1960〜70年代にヴェネツィア地方で生まれたと言われる。コーヒー風味の人気イタリアンデザート。",
      derivatives: [
        { word: "tiramisu cake", desc: "ティラミスケーキ" }
      ],
      family: [
        { word: "tire", desc: "引く（古語）" },
        { word: "attire", desc: "衣装（ad+tirare）" }
      ],
      compounds: [
        { phrase: "classic tiramisu", desc: "クラシックティラミス" },
        { phrase: "tiramisu with Kahlúa", desc: "カルーア入りティラミス" }
      ]
    },
    "umami": {
      origin: "日本語「旨い（umai）」＋「味（mi）」から。1908年に池田菊苗博士が昆布だしの旨味成分グルタミン酸を発見し命名。甘味・酸味・塩味・苦味に続く第5の基本味として国際的に認知された。",
      derivatives: [
        { word: "umami-rich", desc: "うまみ豊かな" }
      ],
      family: [
        { word: "savory", desc: "うまみのある（西洋での対応概念）" },
        { word: "glutamate", desc: "グルタミン酸（うまみ成分）" }
      ],
      compounds: [
        { phrase: "umami taste", desc: "うまみの味" },
        { phrase: "umami bomb", desc: "うまみが凝縮された食材" }
      ]
    },
    "vinaigrette": {
      origin: "フランス語 vinaigrette（小さな酢の容器）から。vinaigre（酢）の指小形。vinaigre は vin（ワイン）＋aigre（酸っぱい・鋭い）の複合語。ラテン語 vinum（ワイン）と acer（鋭い）に由来。",
      derivatives: [
        { word: "vinaigrette dressing", desc: "ヴィネグレットドレッシング" }
      ],
      family: [
        { word: "vinegar", desc: "酢（vinaigre の英語形）" },
        { word: "wine", desc: "ワイン（vinum と同語根）" },
        { word: "acrid", desc: "刺激的な（acer と同語根）" }
      ],
      compounds: [
        { phrase: "balsamic vinaigrette", desc: "バルサミコ酢のドレッシング" },
        { phrase: "mustard vinaigrette", desc: "マスタードドレッシング" }
      ]
    },
    "zabaglione": {
      origin: "イタリア語 zabaglione（ザバリオーネ）から。語源は諸説あり、サヴォイア地方の飲み物 zavaione 説、ナポリ語 zappaglione（泡立て器）説、スロベニア語 žganje（蒸留酒）説などがある。卵黄・砂糖・ワインで作るクリーム状デザート。",
      derivatives: [
        { word: "zabaione", desc: "ザバイオーネ（別表記）" }
      ],
      family: [
        { word: "sabayon", desc: "サバイヨン（フランス語形）" }
      ],
      compounds: [
        { phrase: "zabaglione with Marsala", desc: "マルサラワインのザバリオーネ" },
        { phrase: "zabaglione sauce", desc: "ザバリオーネソース" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch D (culinary: blanch - zabaglione)');
