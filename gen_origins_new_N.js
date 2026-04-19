/**
 * gen_origins_new_N.js — French culinary part 1 (aioli-duxelles, 20 words) from data-mixed-55
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "aioli": {
      origin: "プロバンス語 alh（にんにく）＋oli（油）の合成語。フランス語 ail（にんにく）とラテン語 oleum（油）に由来。南フランスとカタルーニャ地方の伝統的なにんにく風味のマヨネーズ。地中海料理の基本ソース。",
      derivatives: [
        { word: "garlic aioli", desc: "ガーリックアイオリ" }
      ],
      family: [
        { word: "alioli", desc: "アリオリ（スペイン語形）" },
        { word: "olive oil", desc: "オリーブオイル（oli と語根対応）" }
      ],
      compounds: [
        { phrase: "aioli sauce", desc: "アイオリソース" },
        { phrase: "seafood with aioli", desc: "シーフードのアイオリ添え" }
      ]
    },
    "antipasto": {
      origin: "イタリア語 anti-（前に）＋pasto（食事）から。ラテン語 pastus（食べ物）に由来。「食事の前に出されるもの」が原義。イタリア料理のコースの最初に出される前菜の総称で、チーズ・生ハム・野菜の盛り合わせなど。",
      derivatives: [
        { word: "antipasti", desc: "前菜の盛り合わせ（複数形）" }
      ],
      family: [
        { word: "pasta", desc: "パスタ（pastus から）" },
        { word: "repast", desc: "食事（re+pastus）" }
      ],
      compounds: [
        { phrase: "antipasto platter", desc: "前菜の盛り合わせ皿" }
      ]
    },
    "bisque": {
      origin: "フランス語 bisque から。語源は諸説あり、バスク地方（Biscay）説、または二度調理（bis-cuit）説がある。元は狩猟で得た鳥を使ったスープを指したが、現在は海老・蟹などの甲殻類を主体とした濃厚なクリームスープを指す。",
      derivatives: [
        { word: "lobster bisque", desc: "ロブスタービスク" }
      ],
      family: [
        { word: "biscuit", desc: "ビスケット（bis-cuit：二度焼き）" }
      ],
      compounds: [
        { phrase: "shrimp bisque", desc: "えびのビスク" },
        { phrase: "crab bisque", desc: "カニのビスク" }
      ]
    },
    "bouillabaisse": {
      origin: "フランス語 bouillir（煮る）＋abaisser（火を下げる）から。「沸騰させてから弱火にする」調理法を示す語。マルセイユの漁師が売れ残りの魚をまとめて煮た料理が起源。現在は高級プロバンス風魚介スープとして有名。",
      derivatives: [
        { word: "bouillabaisse broth", desc: "ブイヤベースのだし" }
      ],
      family: [
        { word: "bouillon", desc: "ブイヨン（すまし汁）" },
        { word: "abase", desc: "低下させる（abaisser から）" }
      ],
      compounds: [
        { phrase: "Marseille bouillabaisse", desc: "マルセイユ風ブイヤベース" }
      ]
    },
    "bruschetta": {
      origin: "イタリア語 bruscare（炭で焼く・こんがり焼く）から。中部イタリア方言の brustolare（焼く）に由来。炭火で焼いたパンにオリーブオイル・にんにく・トマトなどをのせたイタリアの前菜。",
      derivatives: [
        { word: "bruschetta al pomodoro", desc: "トマトのブルスケッタ" }
      ],
      family: [
        { word: "bruscato", desc: "焦がした（イタリア語）" }
      ],
      compounds: [
        { phrase: "tomato bruschetta", desc: "トマトブルスケッタ" }
      ]
    },
    "carpaccio": {
      origin: "ベネチアの画家 Vittore Carpaccio（1465-1526頃）の名から。鮮やかな赤い色彩を使う画家の作品と、薄切りの赤い生牛肉の色を重ねてHarry's Bar（ベネチア）のオーナー Giuseppe Cipriani が1950年代に命名。",
      derivatives: [
        { word: "beef carpaccio", desc: "牛肉のカルパッチョ" },
        { word: "fish carpaccio", desc: "魚のカルパッチョ" }
      ],
      family: [
        { word: "crudo", desc: "生の食材（イタリア語・類義語）" }
      ],
      compounds: [
        { phrase: "tuna carpaccio", desc: "マグロのカルパッチョ" }
      ]
    },
    "cassoulet": {
      origin: "フランス語 cassole（土鍋）から。オック語 cassa（底の広い料理鍋）、ラテン語 cattia（ひしゃく）に由来。南フランスのラングドック地方（カルカソンヌ、カステルノーダリ、トゥールーズ）の白インゲン豆と肉の煮込み料理。",
      derivatives: [
        { word: "cassole dish", desc: "カスレ用の深皿" }
      ],
      family: [
        { word: "casserole", desc: "キャセロール（同語根の英語形）" }
      ],
      compounds: [
        { phrase: "duck cassoulet", desc: "鴨のカスレ" }
      ]
    },
    "ceviche": {
      origin: "スペイン語 ceviche から。語源は諸説あり、ペルーの先住民語説、アラビア語 sikbaj（酢の料理）説、スペイン語 escabeche（酢漬け）の短縮形説などがある。魚介類を柑橘汁（特にライム）の酸で「調理」するペルー発祥の料理。",
      derivatives: [
        { word: "leche de tigre", desc: "トラのミルク（セビーチェの漬け汁）" }
      ],
      family: [
        { word: "escabeche", desc: "エスカベッシュ（関連料理）" }
      ],
      compounds: [
        { phrase: "fish ceviche", desc: "白身魚のセビーチェ" }
      ]
    },
    "chiffonade": {
      origin: "フランス語 chiffon（布切れ・ぼろ切れ）から。chiffe（柔らかい布）に由来し、-ade は集合を示す接尾辞。「細切れの布のように」細く切る調理技法を指す。バジルやほうれん草などの葉物野菜の切り方。",
      derivatives: [
        { word: "chiffonade of basil", desc: "バジルのシフォナード" }
      ],
      family: [
        { word: "chiffon", desc: "シフォン（薄い布・菓子）" }
      ],
      compounds: [
        { phrase: "chiffonade cut", desc: "シフォナードカット（細切り技法）" }
      ]
    },
    "compote": {
      origin: "フランス語 compote（混合物・果物の煮もの）から。ラテン語 compositus（混合した）に由来し、com-（共に）＋ponere（置く）。「共に置き合わせたもの」が原義。果物をシロップや砂糖で煮た料理。composite と同語根。",
      derivatives: [
        { word: "fruit compote", desc: "フルーツコンポート" }
      ],
      family: [
        { word: "compose", desc: "構成する" },
        { word: "compost", desc: "堆肥（compositus から）" }
      ],
      compounds: [
        { phrase: "strawberry compote", desc: "いちごのコンポート" }
      ]
    },
    "confit": {
      origin: "フランス語 confire（保存する・漬ける）の過去分詞。ラテン語 conficere（完成する・作る）に由来し、con-（完全に）＋facere（する）。塩漬けにして自身の脂や油脂の中で低温・長時間調理する伝統的保存技法。",
      derivatives: [
        { word: "confit duck", desc: "鴨のコンフィ" },
        { word: "confit garlic", desc: "にんにくのコンフィ" }
      ],
      family: [
        { word: "confection", desc: "菓子（conficere から）" },
        { word: "confiture", desc: "ジャム（confire から）" }
      ],
      compounds: [
        { phrase: "duck confit", desc: "鴨のコンフィ" }
      ]
    },
    "dauphinoise": {
      origin: "フランス語 Dauphiné（ドーフィネ地方）の形容詞形。Dauphiné はフランス南東部（現在のイゼール県など）の歴史的地方。薄切りポテトをクリームと牛乳で煮込んで焼いた gratin dauphinois（ドーフィノワーズグラタン）から。",
      derivatives: [
        { word: "gratin dauphinois", desc: "グラタンドーフィノワ（正式名称）" }
      ],
      family: [
        { word: "dauphin", desc: "フランスの王太子（Dauphiné 地方の領主が由来）" }
      ],
      compounds: [
        { phrase: "potato dauphinoise", desc: "ポテトのドーフィノワーズ" }
      ]
    },
    "degustation": {
      origin: "フランス語 dégustation（味わうこと）から。ラテン語 gustare（味わう）、gustus（味覚）に由来。「味覚を十分に体験すること」が原義。多種類の料理を少量ずつ順番に楽しむテイスティングコースを指す高級料理用語。",
      derivatives: [
        { word: "degustation menu", desc: "テイスティングコース（料理長のおまかせ）" }
      ],
      family: [
        { word: "gusto", desc: "熱意・好み（gustus から）" },
        { word: "disgust", desc: "嫌悪感（dis+gustus）" }
      ],
      compounds: [
        { phrase: "degustation experience", desc: "テイスティング体験" }
      ]
    },
    "duxelles": {
      origin: "フランス語 duxelles（デュクセル）から。17世紀フランスのシェフ François Pierre La Varenne が、フランス軍師 Marquis d'Uxelles に捧げた料理に由来する説が有力。きのこをみじん切りにして炒め、ペースト状にした調味料。",
      derivatives: [
        { word: "mushroom duxelles", desc: "きのこのデュクセル" }
      ],
      family: [
        { word: "beef Wellington", desc: "ビーフウェリントン（duxelles を使う代表料理）" }
      ],
      compounds: [
        { phrase: "duxelles stuffing", desc: "デュクセルのつめ物" }
      ]
    },
    "escargot": {
      origin: "フランス語 escargot（かたつむり）から。古プロバンス語 escaragol（かたつむり）に由来し、ラテン語 *excaragolus または北西岸のガスコン語が起源とも。フランスを代表する料理で、バター・にんにく・パセリで調理する。",
      derivatives: [
        { word: "escargot bourguignon", desc: "ブルゴーニュ風エスカルゴ" }
      ],
      family: [
        { word: "snail", desc: "かたつむり（英語の対応語）" }
      ],
      compounds: [
        { phrase: "escargot with garlic butter", desc: "ガーリックバターのエスカルゴ" }
      ]
    },
    "focaccia": {
      origin: "ラテン語 focus（炉・火）から派生したイタリア語。古ラテン語 panis focacius（炉で焼いたパン）に由来。炉床（ハース）で直接焼く平らなパンが原義。イタリア全土で食べられる塩・オリーブオイルをかけた平焼きパン。",
      derivatives: [
        { word: "focaccia bread", desc: "フォカッチャパン" }
      ],
      family: [
        { word: "focus", desc: "焦点・炉（ラテン語 focus と同語根）" },
        { word: "fuel", desc: "燃料（focus と語根関連）" }
      ],
      compounds: [
        { phrase: "rosemary focaccia", desc: "ローズマリーフォカッチャ" }
      ]
    },
    "fondant": {
      origin: "フランス語 fondant（溶ける・溶けやすい）から。fondre（溶かす・溶ける）の現在分詞。ラテン語 fundere（注ぐ・溶かす）に由来。「口の中で溶ける」が原義。ケーキのコーティングや飴細工に使う砂糖のペースト。",
      derivatives: [
        { word: "fondant chocolate", desc: "フォンダンショコラ（半溶けチョコケーキ）" }
      ],
      family: [
        { word: "fondue", desc: "フォンデュ（fondre から）" },
        { word: "font", desc: "泉・フォント（fundere から）" }
      ],
      compounds: [
        { phrase: "rolled fondant", desc: "ロールフォンダン（ケーキ装飾用）" }
      ]
    },
    "fromage": {
      origin: "フランス語 fromage（チーズ）から。古フランス語 formage、ラテン語 formaticum（型で作ったもの）に由来し、forma（型）が語根。チーズを型（forma）に入れて形成することから命名された。フロマージュはフランス語でチーズの総称。",
      derivatives: [
        { word: "fromage blanc", desc: "フロマージュブラン（白いフレッシュチーズ）" },
        { word: "fromage frais", desc: "フロマージュフレ（新鮮なチーズ）" }
      ],
      family: [
        { word: "form", desc: "形（forma から）" },
        { word: "format", desc: "形式" }
      ],
      compounds: [
        { phrase: "plateau de fromages", desc: "チーズの盛り合わせ" }
      ]
    },
    "gazpacho": {
      origin: "スペイン語 gazpacho から。語源は諸説あり、アラビア語 gazpatxo（浸したパン）説、ヘブライ語 gazaz（砕く）説、古スペイン語 caspa（かけら）説などがある。アンダルシア地方発祥の冷製野菜スープ。",
      derivatives: [
        { word: "white gazpacho", desc: "白いガスパチョ（ajo blanco）" }
      ],
      family: [
        { word: "salmorejo", desc: "サルモレホ（類似の濃厚冷製スープ）" }
      ],
      compounds: [
        { phrase: "tomato gazpacho", desc: "トマトガスパチョ" }
      ]
    },
    "gelato": {
      origin: "イタリア語 gelato（冷やされた・凍った）から。gelare（凍る）の過去分詞。ラテン語 gelare（凍らせる）、gelu（霜・氷）に由来。生クリーム含有量が少なく濃縮された乳製品を使うイタリア式アイスクリーム。",
      derivatives: [
        { word: "gelateria", desc: "ジェラテリア（ジェラート店）" }
      ],
      family: [
        { word: "gel", desc: "ゲル（gelu から）" },
        { word: "gelatin", desc: "ゼラチン（gelare と同語根）" },
        { word: "jelly", desc: "ゼリー（gelare から）" }
      ],
      compounds: [
        { phrase: "artisan gelato", desc: "職人手作りのジェラート" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch N (French culinary part 1: aioli-gelato)');
