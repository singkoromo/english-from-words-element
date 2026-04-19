const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "algorithmic": {
      origin: "アラビア語の数学者 al-Khwarizmi（アル＝フワーリズミー、9世紀）の名から。algorithm（アルゴリズム）の形容詞形。段階的な手順・規則に基づく計算や意思決定に関する。",
      derivatives: ["algorithm", "algorithmically"],
      family: ["al-Khwarizmi", "procedure"],
      compounds: ["algorithmic bias", "algorithmic trading", "algorithmic decision-making"]
    },
    "app": {
      origin: "英語 application（応用・アプリケーション）の略語。2008年のApple App Store開設以降に普及。特定の機能・目的のために設計されたソフトウェアプログラム。",
      derivatives: ["web app", "native app"],
      family: ["application"],
      compounds: ["mobile app", "app store", "app development"]
    },
    "avatar": {
      origin: "サンスクリット語 avatara（神の化身・降臨）から。ava-（下へ）＋tar（渡る）。ヒンドゥー教のヴィシュヌ神の地上への化身。デジタル空間でのユーザーの分身・キャラクターに転用。",
      derivatives: ["digital avatar", "user avatar"],
      family: ["ava-", "descent"],
      compounds: ["user avatar", "3D avatar", "avatar customization"]
    },
    "bigdata": {
      origin: "英語 big（大きい）＋data（データ）。従来のデータベース技術では処理困難な超大規模データセット。3V（Volume・Velocity・Variety）で特徴づけられる2010年代以降の情報技術トレンド。",
      derivatives: ["data analytics", "machine learning"],
      family: ["data concepts"],
      compounds: ["big data analytics", "big data platform", "big data tools"]
    },
    "biohacking": {
      origin: "英語 bio-（生命・生物）＋hacking（改造・ハッキング）。DIY生物学・遺伝子編集・身体埋め込みデバイスから栄養最適化・睡眠ハックまで広範な自己改善の試み。",
      derivatives: ["biohacker", "DIY biology"],
      family: ["bio-", "hack-"],
      compounds: ["biohacking community", "diy biohacking", "genetic biohacking"]
    },
    "chatbot": {
      origin: "英語 chat（会話・雑談）＋bot（robot の略）。テキストや音声で自動的に会話するプログラム。ルールベースから深層学習・大規模言語モデルへと急速に進化している。",
      derivatives: ["conversational AI", "virtual assistant"],
      family: ["automated conversation"],
      compounds: ["AI chatbot", "customer service chatbot", "chatbot platform"]
    },
    "clickbait": {
      origin: "英語 click（マウスのクリック）＋bait（餌・誘惑）。読者のクリックを誘導するための誇張・煽情的な見出しやサムネイル。怒り・好奇心・恐怖などの感情を刺激して注意を引く手法。",
      derivatives: ["sensationalism", "engagement bait"],
      family: ["click-", "bait-"],
      compounds: ["clickbait headline", "clickbait thumbnail", "anti-clickbait"]
    },
    "crowdfund": {
      origin: "英語 crowd（群衆・大勢）＋fund（資金調達する）。インターネットを通じて多数の個人から少額ずつ資金を集める方法。Kickstarter・Indiegogoなどのプラットフォームが2010年代に普及。",
      derivatives: ["crowdfunding", "equity crowdfunding"],
      family: ["crowd-", "fund-"],
      compounds: ["crowdfunding campaign", "reward crowdfunding", "equity crowdfunding"]
    },
    "cyberattack": {
      origin: "英語 cyber-（電子空間・コンピュータの）＋attack（攻撃）。コンピュータシステム・ネットワーク・データへの悪意ある攻撃。ランサムウェア・DDoS・フィッシングなどの種類がある。",
      derivatives: ["cybersecurity", "cyberwarfare"],
      family: ["cyber-", "attack-"],
      compounds: ["cyberattack prevention", "state-sponsored cyberattack"]
    },
    "datafication": {
      origin: "英語 data（データ）＋-fication（〜化）。社会的活動・人間行動・物理現象を定量的デジタルデータに変換するトレンド。スマートフォン・IoTの普及で加速する現代社会の特徴。",
      derivatives: ["datafied", "quantification"],
      family: ["data-", "transform"],
      compounds: ["datafication of society", "social datafication"]
    },
    "deepfake": {
      origin: "英語 deep learning（深層学習）＋fake（偽物）。AIの深層学習（GAN）技術で生成した、本物と見分けにくい偽の映像・音声・画像。フェイクニュース・詐欺・プライバシー侵害に悪用される。",
      derivatives: ["synthetic media", "face swap"],
      family: ["deep learning", "fake media"],
      compounds: ["deepfake video", "deepfake detection", "political deepfake"]
    },
    "drone": {
      origin: "古英語 dran（雄蜂）から。雄蜂の低いブーンという羽音に由来して無線操縦の無人機を指すように。UAV（Unmanned Aerial Vehicle）とも。農業・配送・軍事・映像撮影に使用。",
      derivatives: ["UAV", "quadcopter"],
      family: ["drone-", "buzzing"],
      compounds: ["military drone", "delivery drone", "drone photography"]
    },
    "doomscrolling": {
      origin: "英語 doom（破滅・不吉な運命）＋scrolling（スクロール）。特にCOVID-19パンデミック中に広まった造語。不安・絶望を感じながらも否定的なニュースやSNSを際限なく見続ける行動。",
      derivatives: ["doomsurfing", "news addiction"],
      family: ["doom-", "scroll-"],
      compounds: ["doomscrolling habit", "doomscrolling behavior"]
    },
    "echo-chamber": {
      origin: "英語 echo（木霊・反響）＋chamber（部屋）。音が反響して増幅される部屋から。自分と同じ意見・信念だけが繰り返し反響するSNS上のフィルターバブル現象を指す比喩。",
      derivatives: ["filter bubble", "confirmation bias"],
      family: ["echo-", "chamber-"],
      compounds: ["social media echo chamber", "political echo chamber"]
    },
    "edtech": {
      origin: "英語 education（教育）＋technology（技術）の合成語。LMS（学習管理システム）・適応学習・VR・AIによる教育の変革を指す産業・分野の総称。",
      derivatives: ["e-learning", "adaptive learning"],
      family: ["edu-", "tech-"],
      compounds: ["edtech platform", "edtech startup", "edtech market"]
    },
    "fintech": {
      origin: "英語 financial（金融の）＋technology（技術）の合成語。2008年の金融危機後に台頭。スマホ決済・ロボアドバイザー・ブロックチェーン・P2P融資など金融の革新技術総称。",
      derivatives: ["insurtech", "regtech"],
      family: ["fin-", "tech-"],
      compounds: ["fintech startup", "fintech regulation", "fintech innovation"]
    },
    "gamify": {
      origin: "英語 game（ゲーム）＋-ify（〜化する）。Nick Pellingが2002年に造語。非ゲームの活動（教育・マーケティング・健康管理）にポイント・バッジ・ランキングなどゲーム要素を取り入れる手法。",
      derivatives: ["gamification", "gamified learning"],
      family: ["game-", "-ify"],
      compounds: ["gamify learning", "gamify marketing", "gamification platform"]
    },
    "ghosting": {
      origin: "英語 ghost（幽霊）から。幽霊のように突然消えることから。デジタル時代に広まった、交際・友人・就職応募などで突然連絡を絶って相手の問い合わせを無視する行動。",
      derivatives: ["ghosted", "soft ghosting"],
      family: ["ghost-", "disappear"],
      compounds: ["relationship ghosting", "job ghosting", "soft ghosting"]
    },
    "gig-economy": {
      origin: "英語 gig（単発の演奏・仕事）＋economy（経済）。gig はジャズ用語に由来。Uber・Airbnb・Upworkなどプラットフォームを通じた短期契約・単発仕事を中心とした労働市場。",
      derivatives: ["platform economy", "freelance economy"],
      family: ["gig-", "economy"],
      compounds: ["gig economy worker", "gig economy platform", "gig economy regulation"]
    },
    "glassdoor": {
      origin: "英語 glass（ガラス）＋door（ドア）。透明なガラスドアのように企業内部を可視化する概念から命名。企業の給与・面接・企業文化を現役・元従業員が匿名でレビューするプラットフォーム。",
      derivatives: ["employer branding", "company reviews"],
      family: ["transparency platforms"],
      compounds: ["glassdoor review", "glassdoor rating", "employer glassdoor"]
    },
    "greentech": {
      origin: "英語 green（緑・環境に優しい）＋technology（技術）の合成語。cleantech とも呼ばれる。再生可能エネルギー・電気自動車・廃棄物処理・水処理など環境問題を解決する技術の総称。",
      derivatives: ["cleantech", "sustainable tech"],
      family: ["green-", "tech-"],
      compounds: ["greentech startup", "greentech investment", "greentech innovation"]
    },
    "hashtag": {
      origin: "英語 hash（#記号：番号記号）＋tag（ラベル・タグ）。2007年にChris Messinaがツイッターで提案。#記号に続くキーワードでSNS投稿を分類・検索可能にする仕組み。",
      derivatives: ["tag", "trending hashtag"],
      family: ["hash-", "tag-"],
      compounds: ["trending hashtag", "hashtag campaign", "hashtag movement"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch AD (Modern tech part 1: algorithmic-hashtag, 22 words)');
