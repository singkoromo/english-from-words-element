const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "gravlax": {
      origin: "スウェーデン語 grav（埋める）＋lax（サーモン）。中世に漁師が魚を砂浜に埋めて発酵させたことに由来する塩漬けサーモン料理。",
      derivatives: ["cured", "nordic cuisine"],
      family: ["gravad lax"],
      compounds: ["gravlax sauce", "gravlax platter"]
    },
    "gruyere": {
      origin: "スイス・フリブール州グリュイエール地区の地名。12世紀から製造される硬質チーズで、地名がそのまま料理名となった典型例。",
      derivatives: ["gruyère cheese", "swiss cheese"],
      family: ["emmental", "comté"],
      compounds: ["gruyere fondue", "croque monsieur"]
    },
    "guanciale": {
      origin: "イタリア語 guancia（頬）から。豚の頬肉を塩漬けにした食材で、カルボナーラやアマトリチャーナの正統食材として知られる。",
      derivatives: ["pancetta", "jowl bacon"],
      family: ["cured meats"],
      compounds: ["guanciale pasta", "guanciale carbonara"]
    },
    "hollandaise": {
      origin: "フランス語「オランダ風の」。17世紀にフランスで発展したバターと卵黄のソース。名前はオランダのバター品質への賛辞とされる。",
      derivatives: ["béarnaise", "mousseline"],
      family: ["mother sauces", "emulsion sauces"],
      compounds: ["hollandaise sauce", "eggs benedict"]
    },
    "hummus": {
      origin: "アラビア語 hummus（ひよこ豆）。中東全域で古代から食べられてきたひよこ豆のペーストで、タヒニ・レモン・にんにくを合わせる。",
      derivatives: ["tahini", "falafel"],
      family: ["levantine cuisine", "meze"],
      compounds: ["hummus bi tahini", "hummus plate"]
    },
    "kumquat": {
      origin: "広東語 gam gwat（金橘）の転訛。17世紀にヨーロッパに紹介された小型柑橘で、皮ごと食べられる独特の果実。",
      derivatives: ["citrus", "mandarin"],
      family: ["rutaceae family"],
      compounds: ["kumquat jam", "kumquat marmalade"]
    },
    "lavash": {
      origin: "アルメニア語 lavash。数千年の歴史を持つ薄焼きパンで、2014年にユネスコ無形文化遺産に登録。中東・コーカサス地方の主食。",
      derivatives: ["flatbread", "cracker"],
      family: ["unleavened breads"],
      compounds: ["lavash wrap", "lavash cracker"]
    },
    "linguine": {
      origin: "イタリア語 linguine（小さな舌たち）。lingua（舌）の縮小複数形。断面が楕円形の平麺で、ジェノバ地方のパスタ。",
      derivatives: ["fettuccine", "tagliatelle"],
      family: ["pasta", "tongue"],
      compounds: ["linguine alle vongole", "linguine pesto"]
    },
    "manchego": {
      origin: "スペイン・ラ・マンチャ地方の地名から。セルバンテスの『ドン・キホーテ』の舞台でもある地域で作られるメンブリーノ羊のチーズ。",
      derivatives: ["queso manchego", "spanish cheese"],
      family: ["aged cheeses"],
      compounds: ["manchego con membrillo", "manchego tapas"]
    },
    "masala": {
      origin: "ヒンディー語・ウルドゥー語 masalah（スパイス混合物）。アラビア語 masalih（原料）に由来。インド料理の香辛料ブレンドの総称。",
      derivatives: ["garam masala", "chai masala"],
      family: ["spice blends", "indian cuisine"],
      compounds: ["masala chai", "chicken tikka masala", "masala dosa"]
    },
    "mezze": {
      origin: "アラビア語 mazza / トルコ語 meze（食前酒のつまみ）。ペルシャ語 maza（味・風味）に由来。地中海・中東の前菜盛り合わせ文化。",
      derivatives: ["antipasto", "tapas"],
      family: ["appetizers", "shared plates"],
      compounds: ["mezze platter", "mezze spread"]
    },
    "mirepoix": {
      origin: "フランス・ミルプワ公爵 Charles-Pierre-Gaston de Lévis-Mirepoix（18世紀）に由来。玉ねぎ・セロリ・にんじんの香味野菜炒め。",
      derivatives: ["soffritto", "holy trinity"],
      family: ["aromatic base", "french cuisine"],
      compounds: ["mirepoix base", "classic mirepoix"]
    },
    "miso": {
      origin: "日本語「味噌」。古代中国の醤（ひしお）が奈良時代に日本に伝わり発展。大豆・米・麦などを麹で発酵させた調味料。",
      derivatives: ["shiro miso", "aka miso"],
      family: ["fermented foods", "japanese cuisine"],
      compounds: ["miso soup", "miso ramen", "miso glazed"]
    },
    "morel": {
      origin: "フランス語 morille / オランダ語 morille。ゲルマン語系の色彩語に由来するとされる蜂の巣状のキノコ。春の珍味として珍重される。",
      derivatives: ["chanterelle", "porcini"],
      family: ["ascomycetes fungi"],
      compounds: ["morel mushroom", "morel risotto"]
    },
    "mortadella": {
      origin: "ラテン語 myrtatum（ミルテの実入り）またはイタリア語 mortaio（乳鉢）に由来。ボローニャ発祥のイタリア産ソーセージ。",
      derivatives: ["bologna sausage", "salumi"],
      family: ["cured meats"],
      compounds: ["mortadella sandwich", "mortadella pizza"]
    },
    "moussaka": {
      origin: "アラビア語 musaqqa'a（冷やされた）。オスマン帝国を通じてバルカン半島・中東に広まったナスと挽肉のグラタン料理。",
      derivatives: ["pastitsio", "lasagna"],
      family: ["casserole dishes", "mediterranean cuisine"],
      compounds: ["greek moussaka", "moussaka recipe"]
    },
    "naan": {
      origin: "ペルシャ語 nān（パン）。14世紀の文献に登場する南アジア・中央アジアの発酵パンで、タンドール窯で焼く薄い平焼きパン。",
      derivatives: ["roti", "paratha"],
      family: ["leavened breads", "south asian cuisine"],
      compounds: ["naan bread", "garlic naan", "peshwari naan"]
    },
    "ossobuco": {
      origin: "イタリア語 osso（骨）＋buco（穴）。骨の穴という意味で、骨付き仔牛すね肉の煮込み料理。ミラノの郷土料理として有名。",
      derivatives: ["braised veal", "milanese cuisine"],
      family: ["braised meats", "italian cuisine"],
      compounds: ["ossobuco alla milanese", "ossobuco risotto"]
    },
    "pancetta": {
      origin: "イタリア語 pancetta（小さなお腹）。pancia（腹）の縮小形。豚のバラ肉を塩漬けにした食材。ベーコンのイタリア版。",
      derivatives: ["guanciale", "bacon"],
      family: ["cured meats", "salumi"],
      compounds: ["pancetta pasta", "pancetta wrapped"]
    },
    "panko": {
      origin: "日本語「パン粉」。ポルトガル語 pão（パン）由来の「パン」に粉を付けた日本語。粗めのパン粉で揚げ物に独特のサクサク感を与える。",
      derivatives: ["breadcrumbs", "tempura"],
      family: ["coatings", "japanese cuisine"],
      compounds: ["panko breaded", "panko crusted", "panko shrimp"]
    },
    "passata": {
      origin: "イタリア語 passata（こしたもの）。passare（通す・こす）の過去分詞。トマトをこして種と皮を除いたソース状のトマト製品。",
      derivatives: ["tomato sauce", "puree"],
      family: ["tomato products", "italian cuisine"],
      compounds: ["passata di pomodoro", "tomato passata"]
    },
    "pate": {
      origin: "フランス語 pâté（パイ生地に包んだもの）。pâte（生地・ペースト）から派生。レバーや肉を細かくした料理の総称。",
      derivatives: ["terrine", "rillette"],
      family: ["charcuterie", "french cuisine"],
      compounds: ["pâté de foie gras", "country pâté", "pâté en croûte"]
    },
    "pecorino": {
      origin: "イタリア語 pecorino（羊の）。pecora（羊）から派生。羊のミルクで作られるイタリアの硬質チーズ。ロマーノやサルドが有名。",
      derivatives: ["romano", "sardo"],
      family: ["sheep milk cheeses"],
      compounds: ["pecorino romano", "cacio e pepe", "pecorino toscano"]
    },
    "pesto": {
      origin: "イタリア語 pesto（たたきつぶしたもの）。pestare（すりつぶす）の過去分詞。バジル・松の実・パルメザン・オリーブオイルのソース。",
      derivatives: ["pistou", "basil sauce"],
      family: ["herb sauces", "ligurian cuisine"],
      compounds: ["pesto genovese", "pesto pasta", "pesto alla trapanese"]
    },
    "pilaf": {
      origin: "トルコ語 pilav / ペルシャ語 pilāv / ヒンディー語 pulāo。中央アジア発祥のバター・ブイヨンで炊いたご飯料理。シルクロードで広まった。",
      derivatives: ["pulao", "risotto"],
      family: ["rice dishes", "middle eastern cuisine"],
      compounds: ["rice pilaf", "chicken pilaf", "pilaf rice"]
    },
    "polenta": {
      origin: "ラテン語 polenta（オオムギ粉）。古代ローマの主食。現代ではトウモロコシ粉を使用。北イタリアの伝統的スローフード。",
      derivatives: ["grits", "cornmeal"],
      family: ["grain porridges", "italian cuisine"],
      compounds: ["polenta taragna", "fried polenta", "polenta cake"]
    },
    "porcini": {
      origin: "イタリア語 porcini（小さな豚たち）。porco（豚）の縮小複数形。太い柄の形が子豚に似ていることから。cepeとも呼ばれる高級キノコ。",
      derivatives: ["cep", "boletus"],
      family: ["boletaceae fungi"],
      compounds: ["porcini risotto", "porcini pasta", "dried porcini"]
    },
    "prosciutto": {
      origin: "イタリア語 prosciutto（乾燥させたもの）。ラテン語 perexsuctum（よく乾かされた）から。塩漬け後乾燥熟成させた生ハムの総称。",
      derivatives: ["jamon serrano", "jamon iberico"],
      family: ["dry-cured ham", "salumi"],
      compounds: ["prosciutto di parma", "prosciutto crudo", "prosciutto cotto"]
    },
    "quenelle": {
      origin: "フランス語 quenelle / アルザス語 knödel（団子）に由来。楕円形にまとめた魚・肉・セモリナのすり身団子。フランス料理の技法。",
      derivatives: ["dumpling", "knödel"],
      family: ["dumplings", "french cuisine"],
      compounds: ["quenelle de brochet", "chocolate quenelle"]
    },
    "quiche": {
      origin: "フランス語 quiche / アルザス＝ロレーヌ地方の方言 küche（ケーキ）。ドイツ語 Kuchen に由来。パイ生地に卵・クリームを流した料理。",
      derivatives: ["tart", "flan"],
      family: ["savory pies", "french cuisine"],
      compounds: ["quiche lorraine", "quiche au fromage"]
    },
    "ravioli": {
      origin: "イタリア語 ravioli。方言 ravvolgere（包む）またはラテン語 rapa（カブ）に由来するとされる。具材を包んだ四角いパスタ。",
      derivatives: ["tortellini", "agnolotti"],
      family: ["stuffed pasta", "italian cuisine"],
      compounds: ["ravioli di ricotta", "lobster ravioli"]
    },
    "rillette": {
      origin: "フランス語 rillettes（細切り肉）。旧フランス語 rille（豚の薄切り）から。豚・鴨・ガチョウなどを脂で煮てほぐしたテリーヌ状の保存食。",
      derivatives: ["confiture", "pâté"],
      family: ["charcuterie", "french cuisine"],
      compounds: ["rillettes de porc", "rillettes du mans"]
    },
    "romesco": {
      origin: "カタルーニャ語 romesco。スペイン・タラゴナ地方発祥のナッツとトマトベースのソース。漁師料理に添えるために作られた。",
      derivatives: ["catalan sauce", "nut sauce"],
      family: ["spanish cuisine", "nut-based sauces"],
      compounds: ["romesco sauce", "calçots amb romesco"]
    },
    "roulade": {
      origin: "フランス語 roulade（巻いたもの）。rouler（巻く）から派生。肉・スポンジケーキなどを薄く伸ばして具材を巻いた料理の総称。",
      derivatives: ["roll", "involtini"],
      family: ["rolled dishes", "french cuisine"],
      compounds: ["beef roulade", "chocolate roulade", "swiss roll"]
    },
    "saltimbocca": {
      origin: "イタリア語 saltimbocca（口に跳び込む）。saltare（跳ぶ）＋in（中に）＋bocca（口）。子牛とプロシュートとセージを重ねたローマ料理。",
      derivatives: ["scaloppine", "piccata"],
      family: ["veal dishes", "roman cuisine"],
      compounds: ["saltimbocca alla romana", "chicken saltimbocca"]
    },
    "semifreddo": {
      origin: "イタリア語 semifreddo（半冷たい）。semi（半）＋freddo（冷たい）。完全に凍らせない冷たいデザートで、ムースとアイスの中間の食感。",
      derivatives: ["parfait", "bombe"],
      family: ["frozen desserts", "italian cuisine"],
      compounds: ["semifreddo al cioccolato", "hazelnut semifreddo"]
    },
    "stroganoff": {
      origin: "ロシアの貴族 Stroganov 家の名前に由来。19世紀のレシピ記録あり。サワークリームソースで牛肉を煮込んだロシア料理。",
      derivatives: ["beef stew", "cream sauce"],
      family: ["russian cuisine", "cream-based dishes"],
      compounds: ["beef stroganoff", "mushroom stroganoff"]
    },
    "tagliatelle": {
      origin: "イタリア語 tagliatelle（切られた麺）。tagliare（切る）から派生。ボローニャ名産の平打ち麺。ラグーボロネーゼと組み合わせるのが正統。",
      derivatives: ["fettuccine", "pappardelle"],
      family: ["flat pasta", "emilian cuisine"],
      compounds: ["tagliatelle al ragù", "tagliatelle al tartufo"]
    },
    "tapas": {
      origin: "スペイン語 tapa（蓋）。griego語 tapas（複数形）。ワインの上に虫除けとして乗せたパンが起源とされる説が有名。スペインの小皿料理文化。",
      derivatives: ["pintxos", "mezze"],
      family: ["appetizers", "spanish cuisine"],
      compounds: ["tapas bar", "tapas platter", "tapas menu"]
    },
    "tapenade": {
      origin: "プロバンス語 tapeno（ケッパー）から。olives・capers・anchoviesを合わせたプロバンス地方のペースト。19世紀にマルセイユで考案。",
      derivatives: ["olive paste", "spread"],
      family: ["provençal cuisine", "spreads"],
      compounds: ["tapenade provençale", "tapenade crostini"]
    },
    "tartine": {
      origin: "フランス語 tartine（バターを塗ったパン）。tartiner（塗る）から派生。薄切りパンにトッピングをのせたオープンサンドイッチ。",
      derivatives: ["open sandwich", "bruschetta"],
      family: ["french cuisine", "bread dishes"],
      compounds: ["tartine bread", "country tartine"]
    },
    "terrine": {
      origin: "フランス語 terrine（土製の容器）。ラテン語 terra（土）から。陶製型で作るパテ状の料理またはその容器自体を指す。",
      derivatives: ["pâté", "galantine"],
      family: ["charcuterie", "french cuisine"],
      compounds: ["terrine de campagne", "foie gras terrine", "fish terrine"]
    },
    "tortellini": {
      origin: "イタリア語 tortellini（小さなリング）。tortello の縮小複数形。ボローニャとモデナの伝統パスタ。ヴィーナスのへそを模した形とされる。",
      derivatives: ["tortelloni", "cappelletti"],
      family: ["stuffed pasta", "emilian cuisine"],
      compounds: ["tortellini in brodo", "tortellini panna"]
    },
    "vermicelli": {
      origin: "イタリア語 vermicelli（小さなワーム）。verme（ワーム）の縮小複数形。細いスパゲッティの一種。アジアでは米粉の細麺にも使用される。",
      derivatives: ["spaghettini", "capellini"],
      family: ["thin pasta"],
      compounds: ["vermicelli soup", "rice vermicelli", "vermicelli pudding"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch O (French culinary part 2: gravlax-vermicelli, 44 words)');
