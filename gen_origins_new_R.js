const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "plinth": {
      origin: "ギリシャ語 plinthos（レンガ・方形の石）から。ラテン語 plinthus。柱・台座・建物の最下部にある平たい方形の台石。",
      derivatives: ["socle", "base"],
      family: ["base elements"],
      compounds: ["plinth block", "column plinth", "plinth course"]
    },
    "quoin": {
      origin: "フランス語 coin（角・くさび）から。ラテン語 cuneus（くさび）。建物の外角に置かれる大きな石材で、構造の強化と装飾を兼ねる。",
      derivatives: ["coin", "coign"],
      family: ["cune-", "wedge"],
      compounds: ["quoin stone", "rusticated quoins", "quoin corner"]
    },
    "rafter": {
      origin: "古英語 ræfter（横梁）から。スカンジナビア語系の語。屋根の頂上から軒桁まで傾斜して伸び屋根荷重を支える木製構造材。",
      derivatives: ["common rafter", "hip rafter"],
      family: ["roof framing"],
      compounds: ["rafter tail", "rafter beam", "roof rafter"]
    },
    "rustication": {
      origin: "ラテン語 rusticus（田舎風の・粗い）から。rus（田舎）に由来。石の表面を粗く仕上げてジョイントを深く刻み、重厚な外観を演出する技法。",
      derivatives: ["rusticated", "rustic"],
      family: ["rus-", "rural"],
      compounds: ["rusticated masonry", "banded rustication", "rustication joints"]
    },
    "sill": {
      origin: "古英語 syll（基礎梁・土台材）から。古ノルド語 syll（梁）に関連。窓や扉の開口部下端に水平に設置する部材。水切りの役割も持つ。",
      derivatives: ["window sill", "door sill"],
      family: ["threshold elements"],
      compounds: ["window sill", "sill plate", "sill course"]
    },
    "soffit": {
      origin: "イタリア語 soffitto（天井）から。ラテン語 suffixus（下に固定された）。sub-（下）＋figere（固定）。梁・アーチ・軒の下面または天井面。",
      derivatives: ["ceiling", "intrados"],
      family: ["under surfaces"],
      compounds: ["soffit board", "arch soffit", "eave soffit"]
    },
    "squinch": {
      origin: "古英語 scuncheon（窓の内壁の斜面）から。sconce（壁のくぼみ）が変化した語。正方形の平面から多角形や円形へ移行するために角に設けた小アーチ。",
      derivatives: ["pendentive", "trumpet arch"],
      family: ["transitional structures"],
      compounds: ["squinch arch", "squinch corner"]
    },
    "strut": {
      origin: "オランダ語 strotten（張る・突っ張る）またはドイツ語 strotzen（膨れ上がる）から。圧縮荷重を受け持ち他の部材を支える傾斜または垂直の構造材。",
      derivatives: ["brace", "prop"],
      family: ["compression members"],
      compounds: ["strut bar", "diagonal strut", "knee strut"]
    },
    "tracery": {
      origin: "英語 trace（線を引く）から派生した名詞 tracery。ゴシック建築の窓に使われる細い石の装飾的な格子模様。板状トレーサリーから棒状トレーサリーへ発展した。",
      derivatives: ["plate tracery", "bar tracery"],
      family: ["gothic decoration"],
      compounds: ["window tracery", "geometric tracery", "flowing tracery"]
    },
    "trefoil": {
      origin: "ラテン語 trifolium（三つの葉）から。tri-（三）＋folium（葉）。三枚葉クローバーの形をした装飾モチーフ。ゴシック建築の窓・彫刻に多用。",
      derivatives: ["quatrefoil", "cinquefoil"],
      family: ["foil ornaments"],
      compounds: ["trefoil arch", "trefoil window", "trefoil motif"]
    },
    "triforium": {
      origin: "ラテン語 tri-（三）＋foris（扉・開口）。三つの開口部を持つアーチとされるが語源は諸説あり。大聖堂の側廊上部と上階窓の間の回廊状空間。",
      derivatives: ["gallery", "blind triforium"],
      family: ["church elements"],
      compounds: ["triforium gallery", "triforium arcade"]
    },
    "tympanum": {
      origin: "ラテン語 tympanum（太鼓）から。ギリシャ語 tympanon（太鼓）。教会正面ポータルのアーチと横材の間の半円形壁面。彫刻で飾られることが多い。",
      derivatives: ["pediment", "lunette"],
      family: ["tympan-", "drum"],
      compounds: ["portal tympanum", "tympanum relief", "gable tympanum"]
    },
    "undercroft": {
      origin: "英語 under（下）＋croft（囲まれた土地・小部屋）。中英語。地上より低い位置または地下に設けられた貯蔵・礼拝用の空間。中世修道院に多い。",
      derivatives: ["crypt", "basement"],
      family: ["subterranean spaces"],
      compounds: ["undercroft vault", "monastic undercroft"]
    },
    "voussoir": {
      origin: "フランス語 voussoir。ラテン語 volvere（転がる・巻く）から。アーチを構成するくさび形の石材。キーストーン（要石）を頂点に左右対称に組まれる。",
      derivatives: ["keystone", "wedge stone"],
      family: ["arch construction"],
      compounds: ["voussoir arch", "radiating voussoirs"]
    },
    "wainscot": {
      origin: "中世オランダ語 wagenschot（荷車用の厚板）から。wagon（荷車）＋schot（仕切り板）。壁の下部（腰高さまで）を覆う木製パネルの内装。",
      derivatives: ["wainscoting", "dado panel"],
      family: ["interior finishing"],
      compounds: ["wainscot paneling", "raised panel wainscot"]
    },
    "ziggurat": {
      origin: "アッカド語 ziqqurratu（高い場所・山頂）から。古代メソポタミア（現イラク）の段状ピラミッド型神殿。バベルの塔のモデルとされる。",
      derivatives: ["stepped pyramid", "temple tower"],
      family: ["ancient architecture"],
      compounds: ["mesopotamian ziggurat", "ur ziggurat"]
    },
    "agape": {
      origin: "ギリシャ語 agape（愛・愛宴）から。agapan（愛する）。自己犠牲的な無条件の愛。エロス（官能的愛）・フィリア（友愛）と対比されるキリスト教的愛の概念。",
      derivatives: ["agapic love", "caritas"],
      family: ["greek love types"],
      compounds: ["agape feast", "agape love"]
    },
    "anthropocentrism": {
      origin: "ギリシャ語 anthropos（人間）＋kentron（中心）＋-ism。人間を宇宙・道徳・環境の中心と見なす哲学的立場。環境倫理学で批判的文脈で多用される。",
      derivatives: ["anthropocentric", "anthropocentrist"],
      family: ["anthrop-", "centr-"],
      compounds: ["anthropocentric worldview", "anti-anthropocentrism"]
    },
    "aporia": {
      origin: "ギリシャ語 aporia（出口のない状態）から。a-（否定）＋poros（通路・道）。解決できない哲学的問題。プラトン対話篇でソクラテスが導く哲学的困惑状態。",
      derivatives: ["aporetic", "porosity"],
      family: ["a-", "por-"],
      compounds: ["socratic aporia", "aporetic dialogue"]
    },
    "archai": {
      origin: "ギリシャ語 arche（始まり・根本原理）の複数形 archai。ソクラテス以前の哲学者（タレスら）が探求した万物の根本原理の複数形として使用される。",
      derivatives: ["arche", "archetype"],
      family: ["arch-", "origin"],
      compounds: ["the archai", "first principles"]
    },
    "causa-sui": {
      origin: "ラテン語 causa（原因）＋sui（自分自身の）の合成語。外部原因を持たず自らの原因によって存在するもの。スピノザが神の本質として用いた概念。",
      derivatives: ["self-caused", "uncaused cause"],
      family: ["causa-", "sui-"],
      compounds: ["causa sui argument", "god as causa sui"]
    },
    "cognitivism": {
      origin: "ラテン語 cognoscere（知る）から。co-（共に）＋gnoscere（知る）。道徳判断や美的判断が客観的な真偽を持つ命題であるとする哲学・心理学の立場。",
      derivatives: ["cognitive", "non-cognitivism"],
      family: ["cogni-", "know"],
      compounds: ["moral cognitivism", "ethical cognitivism"]
    },
    "compatibilism": {
      origin: "ラテン語 compatibilis（共に成立できる）から。com-（共に）＋pati（耐える・容認）。自由意志と因果的決定論が論理的に矛盾しないとする哲学的立場。",
      derivatives: ["compatibilist", "soft determinism"],
      family: ["compat-", "together"],
      compounds: ["compatibilist free will", "hard vs soft determinism"]
    },
    "correlationism": {
      origin: "ラテン語 correlatio（相互関係）から。フランスの哲学者カンタン・メイヤスーが批判概念として命名。思考と存在は常にペアとして相関すると主張する立場。",
      derivatives: ["correlational", "post-correlationalism"],
      family: ["co-", "relat-"],
      compounds: ["meillassoux correlationism", "anti-correlationism"]
    },
    "dasein": {
      origin: "ドイツ語 Dasein（そこにある・現存在）。da-（そこに・ここに）＋sein（ある・存在）。ハイデガーが『存在と時間』で人間の存在様式を指すために使った術語。",
      derivatives: ["in-der-welt-sein", "mitsein"],
      family: ["existential concepts"],
      compounds: ["dasein analysis", "authentic dasein"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch R (Architecture2 cont. + Philosophy part 1: plinth-dasein, 41 words)');
