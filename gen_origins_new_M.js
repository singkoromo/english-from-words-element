/**
 * gen_origins_new_M.js — Business mgmt(16)+Culture(17)+Env2(9)+Lifestyle2(10) from data-mixed-54
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "bottleneck": {
      origin: "英語 bottle（瓶）＋neck（首）の複合語。瓶の首の部分が液体の流れを制限するという視覚的比喩から。生産・物流・コンピュータ処理において、システム全体の速度を制限するポイントを指す。Eliyahu Goldratt の「制約の理論（TOC）」で体系化。",
      derivatives: [
        { word: "bottleneck effect", desc: "ボトルネック効果（遺伝学でも使われる）" }
      ],
      family: [
        { word: "chokepoint", desc: "隘路（類義語）" },
        { word: "constraint", desc: "制約（TOCの用語）" }
      ],
      compounds: [
        { phrase: "production bottleneck", desc: "生産上のボトルネック" },
        { phrase: "eliminate the bottleneck", desc: "ボトルネックを解消する" }
      ]
    },
    "cascade": {
      origin: "フランス語 cascade（滝）から。イタリア語 cascata（落下）、cascare（落ちる）に由来し、ラテン語 cadere（落ちる）が語根。「滝が上から下へ連続して流れ落ちる」が原義。上位から下位へ連続して伝達・影響が及ぶことを指す。",
      derivatives: [
        { word: "cascading", desc: "連鎖する・滝状に広がる" },
        { word: "cascade failure", desc: "連鎖障害" }
      ],
      family: [
        { word: "cadence", desc: "リズム・終止（cadere から）" },
        { word: "accident", desc: "事故（ac+cadere）" },
        { word: "decay", desc: "腐敗する（de+cadere）" }
      ],
      compounds: [
        { phrase: "cascade effect", desc: "連鎖効果" },
        { phrase: "CSS cascade", desc: "CSSのカスケード（スタイルの優先順位）" }
      ]
    },
    "dashboard": {
      origin: "英語 dash（はね上がるもの）＋board（板）の複合語。元々は馬車の前部に設けた「泥よけ板」を指した。自動車では計器盤、ITでは重要な指標をリアルタイムで一覧表示する管理画面を指す語として普及した。",
      derivatives: [
        { word: "business dashboard", desc: "ビジネスダッシュボード" }
      ],
      family: [
        { word: "dash", desc: "突進する・ダッシュ" },
        { word: "board", desc: "板・取締役会" }
      ],
      compounds: [
        { phrase: "analytics dashboard", desc: "分析ダッシュボード" },
        { phrase: "executive dashboard", desc: "経営幹部向けダッシュボード" }
      ]
    },
    "granular": {
      origin: "ラテン語 granulum（小粒）から。granum（粒・種）の指小形に形容詞接尾辞 -ar が付いた語。「粒の・粒状の」が原義。ビジネス・データ分析では「細かいレベルまで詳細に見る」ことを意味し、「get granular」（詳細まで掘り下げる）は慣用句。",
      derivatives: [
        { word: "granularity", desc: "粒度・詳細度" },
        { word: "fine-grained", desc: "細粒の・詳細な（類義語）" }
      ],
      family: [
        { word: "grain", desc: "穀物・粒（granum から）" },
        { word: "pomegranate", desc: "ザクロ（pomum+granatum：粒の多い果物）" },
        { word: "granola", desc: "グラノーラ（granulum から）" }
      ],
      compounds: [
        { phrase: "granular data", desc: "詳細データ" },
        { phrase: "granular control", desc: "きめ細かい制御" }
      ]
    },
    "ideation": {
      origin: "ギリシャ語 idea（形・概念・見たもの）から。idein（見る）に由来し、-ation（名詞接尾辞）が付いた形。「アイデアを形成するプロセス」が原義。デザイン思考・ブレインストーミングなどの創造的問題解決プロセスで中心的な段階。",
      derivatives: [
        { word: "ideate", desc: "アイデアを出す（動詞）" }
      ],
      family: [
        { word: "idea", desc: "考え・アイデア" },
        { word: "ideal", desc: "理想的な（idea から）" },
        { word: "ideology", desc: "イデオロギー（idea+logos）" }
      ],
      compounds: [
        { phrase: "rapid ideation", desc: "迅速なアイデア創出" },
        { phrase: "ideation workshop", desc: "アイデア創出ワークショップ" }
      ]
    },
    "roadmap": {
      origin: "英語 road（道路）＋map（地図）の複合語。19世紀の道路地図から転じて、20世紀後半に「目標達成への段階的計画」の比喩として定着。製品開発ロードマップ・政策ロードマップなどで広く使われる。",
      derivatives: [
        { word: "product roadmap", desc: "製品ロードマップ" },
        { word: "technology roadmap", desc: "技術ロードマップ" }
      ],
      family: [
        { word: "road", desc: "道路" },
        { word: "map", desc: "地図・計画" }
      ],
      compounds: [
        { phrase: "strategic roadmap", desc: "戦略的ロードマップ" },
        { phrase: "roadmap planning", desc: "ロードマップの作成" }
      ]
    },
    "traction": {
      origin: "ラテン語 trahere（引く）から。tractio（引くこと）に由来し、tractus（引かれたもの）が語根。「引く力・牽引力」が原義。ビジネスでは新製品・スタートアップが市場で普及・勢いを得ることを指す比喩的用法が定着している。",
      derivatives: [
        { word: "gain traction", desc: "勢いを得る・普及する（慣用句）" }
      ],
      family: [
        { word: "tract", desc: "土地・論文（trahere から）" },
        { word: "attract", desc: "引きつける（ad+trahere）" },
        { word: "extract", desc: "抽出する（ex+trahere）" }
      ],
      compounds: [
        { phrase: "market traction", desc: "市場での牽引力" },
        { phrase: "gain traction", desc: "勢いを増す" }
      ]
    },
    "workstream": {
      origin: "英語 work（作業）＋stream（流れ）の複合語。1990年代のプロジェクト管理・コンサルティング語彙として定着。大規模プロジェクトを複数の並行する「作業の流れ」に分けて管理する手法を指す。",
      derivatives: [
        { word: "workstream lead", desc: "作業ストリームのリーダー" }
      ],
      family: [
        { word: "work", desc: "作業" },
        { word: "stream", desc: "流れ・ストリーム" },
        { word: "workflow", desc: "ワークフロー（類義語）" }
      ],
      compounds: [
        { phrase: "parallel workstream", desc: "並行する作業ストリーム" },
        { phrase: "workstream owner", desc: "作業ストリームの担当者" }
      ]
    },
    "blockbuster": {
      origin: "英語 block（街区）＋buster（破壊するもの）から。元々は第二次世界大戦で街区を丸ごと破壊できる大型爆弾を指した。1950年代以降、映画・出版・医薬品で「記録的な大ヒット作品・商品」を指す語として定着した。",
      derivatives: [
        { word: "blockbuster drug", desc: "大ヒット薬品（年間10億ドル以上売れる医薬品）" }
      ],
      family: [
        { word: "buster", desc: "破壊者（bust+er）" },
        { word: "bust", desc: "壊す・失敗する" }
      ],
      compounds: [
        { phrase: "blockbuster movie", desc: "大ヒット映画" },
        { phrase: "blockbuster deal", desc: "大型取引" }
      ]
    },
    "cameo": {
      origin: "イタリア語 cammeo（浮き彫り）から。中世ラテン語 cammaeus（浮き彫り宝石）に由来。アラビア語 qama'il（若芽・花芽）説もある。宝石の浮き彫り細工が原義。映画・テレビで著名人が短時間だけ登場する「カメオ出演」として現代的意味が確立。",
      derivatives: [
        { word: "cameo role", desc: "カメオ出演" },
        { word: "cameo appearance", desc: "カメオ出演" }
      ],
      family: [
        { word: "intaglio", desc: "凹み彫り（cameo の対）" }
      ],
      compounds: [
        { phrase: "director's cameo", desc: "監督のカメオ出演" },
        { phrase: "cameo brooch", desc: "カメオブローチ" }
      ]
    },
    "cinematic": {
      origin: "ギリシャ語 kinema（動き）から。kinein（動く）に由来。cinema（映画館・映画）に形容詞接尾辞 -tic が付いた形。映画に関連する、または映画的な質感・スケール・美しさを持つ様子を表す。",
      derivatives: [
        { word: "cinematically", desc: "映画的に" },
        { word: "cinematic universe", desc: "映画的世界観（MCUなど）" }
      ],
      family: [
        { word: "cinema", desc: "映画・映画館" },
        { word: "kinematics", desc: "運動学（kinema から）" },
        { word: "kinetic", desc: "運動の・活動的な" }
      ],
      compounds: [
        { phrase: "cinematic experience", desc: "映画的体験" },
        { phrase: "cinematic quality", desc: "映画のような質感" }
      ]
    },
    "iconography": {
      origin: "ギリシャ語 eikon（像・似姿）＋graphein（書く・描く）から。「像を描く・研究する」が原義。美術史では特定の人物・事物を描く際の規則的な図像体系を指す。ポップカルチャーでは「象徴的なイメージの体系」を指す語として普及。",
      derivatives: [
        { word: "iconographic", desc: "図像学的な（形容詞）" },
        { word: "iconographer", desc: "図像学者" }
      ],
      family: [
        { word: "icon", desc: "イコン・象徴的な存在" },
        { word: "iconoclast", desc: "偶像破壊者（eikon+klastēs）" },
        { word: "photography", desc: "写真（phos+graphein）" }
      ],
      compounds: [
        { phrase: "religious iconography", desc: "宗教的図像学" },
        { phrase: "cultural iconography", desc: "文化的図像体系" }
      ]
    },
    "juxtapose": {
      origin: "ラテン語 juxta（〜の近くに・並んで）＋ponere（置く）から。「並べて置く」が原義。比較・対比のために二つの異なる事物を並べること。美術・文学・哲学で対比の技法として使われる。",
      derivatives: [
        { word: "juxtaposition", desc: "並置・対比（名詞）" },
        { word: "juxtaposed", desc: "並置された" }
      ],
      family: [
        { word: "juxtapose", desc: "並べる" },
        { word: "position", desc: "位置（ponere から）" },
        { word: "oppose", desc: "対立する（ob+ponere）" }
      ],
      compounds: [
        { phrase: "sharp juxtaposition", desc: "鮮明な対比" },
        { phrase: "juxtapose old and new", desc: "旧と新を対比させる" }
      ]
    },
    "montage": {
      origin: "フランス語 montage（組み立て・取り付け）から。monter（上げる・組み立てる）に由来し、mont（山）が語根。映画編集理論でEisensteinやPudovkinが確立した「複数の映像を組み合わせることで新たな意味を生む」技法を指す。",
      derivatives: [
        { word: "photomontage", desc: "写真モンタージュ" }
      ],
      family: [
        { word: "mount", desc: "取り付ける・山（mont と同語根）" },
        { word: "mountain", desc: "山（mont から）" },
        { word: "amount", desc: "合計・至る（a+monter）" }
      ],
      compounds: [
        { phrase: "film montage", desc: "映画のモンタージュ" },
        { phrase: "training montage", desc: "トレーニングモンタージュ（映画の定番シーン）" }
      ]
    },
    "utopia": {
      origin: "ギリシャ語 ou（否定）＋topos（場所）からトマス・モアが1516年に造語した語。「どこにも存在しない場所」が原義。『ユートピア』（1516年）で描いた理想社会から、実現不可能な理想郷・完璧な社会を指す語として定着した。",
      derivatives: [
        { word: "utopian", desc: "ユートピア的な・理想主義的な" },
        { word: "dystopia", desc: "ディストピア（dys+topos：悪い場所）" }
      ],
      family: [
        { word: "topology", desc: "位相幾何学（topos+logos）" },
        { word: "dystopia", desc: "ディストピア（対義語）" }
      ],
      compounds: [
        { phrase: "utopian vision", desc: "理想郷のビジョン" },
        { phrase: "techno-utopia", desc: "テクノロジーによる理想社会" }
      ]
    },
    "anthropocene": {
      origin: "ギリシャ語 anthropos（人間）＋kainos（新しい）から。地質学者Paul Crutzenが2000年に提唱した新しい地質時代の名称。人間活動が地球の地質・生態系・気候に大きな影響を与えている現代を指す概念。まだ公式な地質時代としては議論中。",
      derivatives: [
        { word: "Anthropocenic", desc: "人新世の（形容詞）" }
      ],
      family: [
        { word: "anthropology", desc: "人類学（anthropos+logos）" },
        { word: "Holocene", desc: "完新世（現在の正式な地質時代）" },
        { word: "Pleistocene", desc: "更新世" }
      ],
      compounds: [
        { phrase: "Anthropocene epoch", desc: "人新世の時代区分" },
        { phrase: "Anthropocene crisis", desc: "人新世の危機" }
      ]
    },
    "decarbonize": {
      origin: "英語 de-（除去）＋carbon（炭素）＋-ize（動詞化）の合成語。気候変動対策の文脈で2000年代以降に普及した語。エネルギーシステムや産業から二酸化炭素排出を削減・除去することを指す。",
      derivatives: [
        { word: "decarbonization", desc: "脱炭素化" },
        { word: "decarbonized", desc: "脱炭素化された" }
      ],
      family: [
        { word: "carbon", desc: "炭素（ラテン語 carbo：炭から）" },
        { word: "carbon neutral", desc: "カーボンニュートラル" },
        { word: "net zero", desc: "ネットゼロ（脱炭素の目標）" }
      ],
      compounds: [
        { phrase: "decarbonize the economy", desc: "経済の脱炭素化" },
        { phrase: "decarbonization pathway", desc: "脱炭素化の道筋" }
      ]
    },
    "pollutant": {
      origin: "ラテン語 polluere（汚す・汚染する）から。po-（変形）＋luere（洗う）とも、または * pollus（汚れた）から。pollute（汚染する）＋-ant（行為者・物質）。環境を汚染する有害な物質・物体を指す名詞。",
      derivatives: [
        { word: "pollute", desc: "汚染する（動詞）" },
        { word: "pollution", desc: "汚染・公害" }
      ],
      family: [
        { word: "pollute", desc: "汚染する" },
        { word: "pollution", desc: "汚染" },
        { word: "contaminant", desc: "汚染物質（類義語）" }
      ],
      compounds: [
        { phrase: "air pollutant", desc: "大気汚染物質" },
        { phrase: "persistent pollutant", desc: "難分解性汚染物質" }
      ]
    },
    "acupuncture": {
      origin: "ラテン語 acus（針）＋punctura（刺すこと）から。pungo（刺す）に由来。「針で刺す」が原義。中国で2,000年以上前に発展した伝統医学の治療法で、特定のツボ（経穴）に針を刺して気の流れを調整する。",
      derivatives: [
        { word: "acupuncturist", desc: "鍼灸師" },
        { word: "acupressure", desc: "指圧（acus+pressure）" }
      ],
      family: [
        { word: "puncture", desc: "穴を開ける・パンクする" },
        { word: "punctuation", desc: "句読点（pungo から）" },
        { word: "compunction", desc: "良心の呵責（com+pungo）" }
      ],
      compounds: [
        { phrase: "acupuncture point", desc: "経穴・ツボ" },
        { phrase: "acupuncture needle", desc: "鍼" }
      ]
    },
    "simplicity": {
      origin: "ラテン語 simplicitas（単純さ・無邪気さ）から。simplex（一つに折った・単純な）に由来し、semel（一度）＋plicare（折る）が語根。「一度しか折っていない＝単純な」が原義。複雑さを排除した美しさや機能性を表す。",
      derivatives: [
        { word: "simple", desc: "単純な" },
        { word: "simplify", desc: "簡略化する" },
        { word: "simplification", desc: "簡略化" }
      ],
      family: [
        { word: "duplex", desc: "二重の（duo+plicare）" },
        { word: "complex", desc: "複雑な（com+plicare）" },
        { word: "explicit", desc: "明示的な（ex+plicare）" }
      ],
      compounds: [
        { phrase: "elegant simplicity", desc: "洗練されたシンプルさ" },
        { phrase: "the beauty of simplicity", desc: "シンプルさの美しさ" }
      ]
    },
    "wellbeing": {
      origin: "英語 well（良い・健康に）＋being（存在・状態）の複合語。古英語 wel（良く）に由来。「良い状態にあること」が原義。心身・社会・経済・精神的な健康と幸福の総合的状態を指す。WHO の「健康」定義にも通じる概念。",
      derivatives: [
        { word: "subjective wellbeing", desc: "主観的幸福感" },
        { word: "financial wellbeing", desc: "経済的幸福" }
      ],
      family: [
        { word: "wellness", desc: "ウェルネス（wellbeing に近い概念）" },
        { word: "welfare", desc: "福祉・生活保護（well+fare）" },
        { word: "being", desc: "存在・状態" }
      ],
      compounds: [
        { phrase: "employee wellbeing", desc: "従業員の幸福・健康" },
        { phrase: "mental wellbeing", desc: "精神的幸福" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch M (business mgmt + culture/media + env2 + lifestyle2 from data-mixed-54)');
