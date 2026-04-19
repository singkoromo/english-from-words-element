const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "healthtech": {
      origin: "英語 health（健康）＋technology（技術）の合成語。電子カルテ・遠隔医療・ウェアラブル・AIによる診断など医療・ヘルスケア領域のテクノロジー革新の総称。",
      derivatives: ["medtech", "digital health"],
      family: ["health-", "tech-"],
      compounds: ["healthtech startup", "healthtech platform", "digital healthtech"]
    },
    "infographic": {
      origin: "英語 information（情報）＋graphic（グラフィック・図）の合成語。複雑な情報・データ・知識を視覚的にわかりやすく表現した図表。チャート・アイコン・色彩を組み合わせる。",
      derivatives: ["data visualization", "visual content"],
      family: ["info-", "graphic-"],
      compounds: ["infographic design", "interactive infographic", "data infographic"]
    },
    "IoT": {
      origin: "Internet of Things（モノのインターネット）の略。1999年にKevin Ashtonが命名。家電・センサー・車・工場機器がインターネットにつながり相互通信するシステム・概念。",
      derivatives: ["connected devices", "smart devices"],
      family: ["internet", "connected objects"],
      compounds: ["IoT device", "industrial IoT", "IoT security"]
    },
    "livestream": {
      origin: "英語 live（生の・リアルタイムの）＋stream（流れ・ストリーム）。インターネットを通じてリアルタイムに映像・音声を配信すること。YouTube Live・Twitch等のプラットフォームが普及。",
      derivatives: ["live broadcast", "real-time streaming"],
      family: ["live-", "stream-"],
      compounds: ["livestream event", "gaming livestream", "livestream audience"]
    },
    "nanomaterial": {
      origin: "ギリシャ語 nanos（小人・矮小）＋material（材料）。1〜100ナノメートルのスケールで設計・製造された材料。バルク材料とは異なる物理・化学・生物的性質を示す。",
      derivatives: ["nanomaterials", "nanoparticle"],
      family: ["nano-", "material-"],
      compounds: ["carbon nanomaterial", "nanomaterial applications", "nanomaterial toxicity"]
    },
    "open-source": {
      origin: "英語 open（開放された）＋source（ソースコード）。1998年にChristine PetersonとEric Raymondが命名。ソースコードが公開・無償提供されアカウンタブルなコミュニティ開発に基づくソフトウェア。",
      derivatives: ["foss", "open source software"],
      family: ["open-", "source-"],
      compounds: ["open source software", "open source community", "open source license"]
    },
    "paywall": {
      origin: "英語 pay（支払い）＋wall（壁・障壁）。有料会員のみがアクセスできるデジタルコンテンツの制限システム。ハードペイウォール（完全課金）・ソフトペイウォール（一部無料）がある。",
      derivatives: ["subscription wall", "content barrier"],
      family: ["pay-", "wall-"],
      compounds: ["hard paywall", "metered paywall", "paywall bypass"]
    },
    "podcast": {
      origin: "英語 iPod（AppleのMP3プレーヤー）＋broadcast（放送）の合成語。BBC記者Ben Hammersleyが2004年に命名。インターネットで配信する音声番組で、購読・自動ダウンロードが特徴。",
      derivatives: ["podcasting", "vodcast"],
      family: ["broadcast-", "pod-"],
      compounds: ["podcast episode", "podcast platform", "podcast audience"]
    },
    "quantum-computing": {
      origin: "ラテン語 quantum（どれだけ・量）＋computing（計算）。量子力学の重ね合わせ・量子もつれ・量子干渉を利用して古典コンピュータより指数的に速い計算を実現する技術。",
      derivatives: ["quantum supremacy", "qubit"],
      family: ["quantum-", "computing-"],
      compounds: ["quantum computing power", "quantum supremacy", "quantum encryption"]
    },
    "ransomware": {
      origin: "英語 ransom（身代金）＋software（ソフトウェア）の合成語。標的のデータを暗号化して解除と引き換えに金銭（多くは仮想通貨）を要求する悪意あるマルウェアの一種。",
      derivatives: ["malware", "cryptolocker"],
      family: ["ransom-", "ware-"],
      compounds: ["ransomware attack", "ransomware payment", "ransomware protection"]
    },
    "repost": {
      origin: "英語 re-（再び）＋post（投稿する）。他のユーザーのSNSコンテンツを自分のアカウントで再共有する行為。リツイート（X）・シェア（Facebook）・リグラム（Instagram）など。",
      derivatives: ["retweet", "reshare"],
      family: ["re-", "post-"],
      compounds: ["repost content", "repost button", "repost permission"]
    },
    "selfie": {
      origin: "英語 self（自分）＋-ie（指小辞・親しみの接尾辞）。2002年にオーストラリアのオンラインフォーラムで初使用。スマートフォンのフロントカメラで自分を撮影した写真。2013年オックスフォード辞書の今年の語。",
      derivatives: ["selfie stick", "groupfie"],
      family: ["self-", "photography"],
      compounds: ["selfie stick", "selfie culture", "selfie camera"]
    },
    "social-media": {
      origin: "英語 social（社会的）＋media（メディア・媒体）。ユーザーがコンテンツを作成・共有・交流するインターネット上のプラットフォームの総称。Facebook（2004）以降に爆発的に普及。",
      derivatives: ["social network", "user-generated content"],
      family: ["social-", "media-"],
      compounds: ["social media marketing", "social media platform", "social media influence"]
    },
    "startup": {
      origin: "英語 start（始まる・立ち上げる）＋up（上昇）から。急速な成長を目指す革新的なビジネスモデルを持つ新興企業。スケーラビリティと繰り返し可能なビジネスモデルが特徴。",
      derivatives: ["unicorn startup", "scaleup"],
      family: ["start-", "up-"],
      compounds: ["tech startup", "startup ecosystem", "startup funding"]
    },
    "stealth-mode": {
      origin: "英語 stealth（こっそり・忍び）＋mode（モード・様式）。軍用ステルス機（レーダー回避）の概念から。製品・事業計画を公開せず密かに開発するスタートアップの戦略。",
      derivatives: ["stealth startup", "incognito"],
      family: ["stealth-", "mode-"],
      compounds: ["stealth startup", "operate in stealth mode", "exit stealth mode"]
    },
    "streaming": {
      origin: "英語 stream（川・流れ）＋-ing。データを完全にダウンロードせずに継続的な流れとして再生する技術。NetflixやSpotifyがサブスクリプション型を普及させた。",
      derivatives: ["live streaming", "video on demand"],
      family: ["stream-", "flow"],
      compounds: ["streaming service", "streaming platform", "music streaming"]
    },
    "unfollow": {
      origin: "英語 un-（否定・逆）＋follow（フォロー・追う）。SNSで他のユーザーの投稿更新を受け取るのをやめる行為。フォローを解除することで情報フィードから外す。",
      derivatives: ["unsubscribe", "mute"],
      family: ["un-", "follow-"],
      compounds: ["unfollow button", "mass unfollow", "unfollow notification"]
    },
    "upskill": {
      origin: "英語 up（向上・上昇）＋skill（技術・スキル）から。デジタル化・自動化による職種変化に対応するため、新しい技術・知識を習得して能力を高めること。リスキリングと並ぶ現代の職業訓練概念。",
      derivatives: ["reskill", "upskilling"],
      family: ["up-", "skill-"],
      compounds: ["upskill workers", "upskilling program", "digital upskilling"]
    },
    "virtual": {
      origin: "ラテン語 virtualis（潜在的な・本質的な）から。virtus（力・徳）。現実には存在しないが機能的・効果的に実質と同等の状態。VR（virtual reality）・仮想空間など幅広く使われる。",
      derivatives: ["virtually", "virtual reality"],
      family: ["virt-", "power"],
      compounds: ["virtual reality", "virtual meeting", "virtual assistant"]
    },
    "webinar": {
      origin: "英語 web（ウェブ）＋seminar（セミナー）の合成語。インターネット経由でリアルタイムに開催する双方向型オンラインセミナー。Zoomなどビデオ会議ツールの普及で日常化した。",
      derivatives: ["online seminar", "virtual event"],
      family: ["web-", "seminar-"],
      compounds: ["live webinar", "webinar platform", "webinar recording"]
    },
    "wearable": {
      origin: "英語 wear（着る・身につける）＋-able（できる）の形容詞。スマートウォッチ・フィットネストラッカー・スマートグラスなど体に装着するコンピュータデバイスまたはその形容詞。",
      derivatives: ["wearable tech", "smartwatch"],
      family: ["wear-", "-able"],
      compounds: ["wearable device", "wearable technology", "medical wearable"]
    },
    "caste": {
      origin: "ポルトガル語 casta（血統・種族・純粋さ）から。ラテン語 castus（純粋な）。ヒンドゥー社会の世襲的・閉鎖的な社会階層制度（バラモン・クシャトリア・ヴァイシャ・シュードラ）を指す。",
      derivatives: ["caste system", "untouchable"],
      family: ["cast-", "pure"],
      compounds: ["caste system", "caste discrimination", "caste hierarchy"]
    },
    "civil-society": {
      origin: "英語 civil（市民の）＋society（社会）。ヘーゲルが国家・家族と区別して定式化。NGO・市民団体・労働組合・宗教団体・メディアなど国家・市場とは独立した自発的市民組織の領域。",
      derivatives: ["NGO", "voluntary sector"],
      family: ["civil-", "society-"],
      compounds: ["civil society organization", "civil society role", "global civil society"]
    },
    "cosmopolitanism": {
      origin: "ギリシャ語 kosmopolites（世界市民）から。kosmos（世界）＋polites（市民）。すべての人間が単一の世界コミュニティに属するとする倫理・政治思想。ストア哲学から現代まで続く。",
      derivatives: ["cosmopolitan", "world citizen"],
      family: ["kosmo-", "polit-"],
      compounds: ["cosmopolitan ethics", "moral cosmopolitanism", "cosmopolitan democracy"]
    },
    "enculturation": {
      origin: "英語 en-（〜の中に）＋culture（文化）＋-ation。生まれた社会の文化的規範・価値観・行動様式・信念を無意識に習得する社会化のプロセス。意図的な文化適応（acculturation）と対比。",
      derivatives: ["socialization", "cultural transmission"],
      family: ["en-", "cultur-"],
      compounds: ["cultural enculturation", "primary enculturation"]
    },
    "indigenism": {
      origin: "ラテン語 indigena（土地生まれの）＋-ism。先住民族の権利・文化・土地・自決権を主張する政治的・文化的運動。脱植民地化・文化主権・伝統的知識の保護を主張する。",
      derivatives: ["indigenous rights", "decolonization"],
      family: ["indig-", "native"],
      compounds: ["indigenous rights movement", "cultural indigenism"]
    },
    "postmodernism": {
      origin: "英語 post-（後）＋modernism（モダニズム）。1970〜80年代に哲学・建築・文学・芸術で台頭。普遍的真理・大きな物語・進歩の線形性を疑問視する知的運動。リオタール・デリダが代表的思想家。",
      derivatives: ["postmodernist", "post-structuralism"],
      family: ["post-", "modern-"],
      compounds: ["postmodern architecture", "postmodernist philosophy", "cultural postmodernism"]
    },
    "algae": {
      origin: "ラテン語 alga（海藻・水草）の複数形。光合成を行う非維管束の水生植物の総称。単細胞の珪藻から大型の昆布まで多様。地球の酸素の半分以上を生産する。",
      derivatives: ["algal bloom", "microalgae"],
      family: ["alg-", "seaweed"],
      compounds: ["algal bloom", "microalgae", "algae biofuel"]
    },
    "cholera": {
      origin: "ギリシャ語 khole（胆汁）から。cholera（胆汁による病気）。コレラ菌（Vibrio cholerae）が引き起こす水様性下痢・脱水症状を特徴とする急性腸管感染症。汚染水が主な感染源。",
      derivatives: ["cholera epidemic", "vibrio"],
      family: ["chol-", "bile"],
      compounds: ["cholera outbreak", "cholera vaccine", "cholera prevention"]
    },
    "cornea": {
      origin: "ラテン語 corneus（角のような）から。cornu（角）。眼球の最前面を覆う透明な無血管の組織。光の屈折の大部分（約70%）を担い視力に重要。角膜移植が可能な組織。",
      derivatives: ["corneal", "corneal transplant"],
      family: ["corn-", "horn"],
      compounds: ["corneal transplant", "corneal ulcer", "corneal opacity"]
    },
    "fauna": {
      origin: "ローマ神話の農業・豊穣の女神 Fauna（フォーナ）から。リンネが1746年に「Swedish Fauna」で学術用語として定着させた。特定地域・時代に生息するすべての動物種の集合。",
      derivatives: ["faunal", "megafauna"],
      family: ["fawn-", "wild animal"],
      compounds: ["local fauna", "fossil fauna", "marine fauna"]
    },
    "flora": {
      origin: "ローマ神話の花の女神 Flora（フローラ）から。リンネが「Flora Lapponica」（1737）で学術的に定着。特定地域・時代に生育するすべての植物種の集合。",
      derivatives: ["floral", "gut flora"],
      family: ["flor-", "flower"],
      compounds: ["local flora", "gut flora", "arctic flora"]
    },
    "fungi": {
      origin: "ラテン語 fungus（キノコ・菌）の複数形。ギリシャ語 spongos（スポンジ）に関連とも。キノコ・カビ・酵母・菌類の総称。動物でも植物でもない独自の生物界を構成する。",
      derivatives: ["fungus", "fungal"],
      family: ["fung-", "sponge"],
      compounds: ["fungal infection", "fungi kingdom", "beneficial fungi"]
    },
    "larva": {
      origin: "ラテン語 larva（幽霊・仮面・マスク）から。成虫と全く異なる外見をした「仮面をかぶった」段階という意味。完全変態昆虫（チョウ・ハチなど）の幼生期の名称。",
      derivatives: ["larval stage", "metamorphosis"],
      family: ["larv-", "ghost"],
      compounds: ["larval stage", "larva development", "insect larva"]
    },
    "nematode": {
      origin: "ギリシャ語 nema（糸）＋eidos（形・種）。細長い糸状の体形を持つ回虫類の総称。土壌・海洋・寄生生物として多様な環境に生息。Caenorhabditis elegansはモデル生物として有名。",
      derivatives: ["roundworm", "parasitic nematode"],
      family: ["nemat-", "thread"],
      compounds: ["parasitic nematode", "soil nematode", "plant nematode"]
    },
    "pollen": {
      origin: "ラテン語 pollen（細かい粉末・小麦粉）から。花の雄しべ（葯）が産生する微細な粒子。受粉（pollination）を介して植物の有性生殖を媒介する。花粉症（pollinosis）の原因にもなる。",
      derivatives: ["pollen grain", "pollination"],
      family: ["poll-", "powder"],
      compounds: ["pollen count", "pollen allergy", "pollen grain"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch AE (Modern tech part 2 + Society + Biology basic: healthtech-pollen, 37 words) - data-mixed-57 COMPLETE');
