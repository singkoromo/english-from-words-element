const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "apse": {
      origin: "ギリシャ語 hapsis（留め金・アーチ）から。ラテン語 absis。教会建築の東端に設けられる半円形または多角形の後陣。初期キリスト教会に起源。",
      derivatives: ["apsidal", "absidal"],
      family: ["arch forms"],
      compounds: ["apsidal chapel", "apse mosaic"]
    },
    "architrave": {
      origin: "イタリア語 architrave。ギリシャ語 archi-（主要な）＋ラテン語 trabs（梁・横木）。古典建築で柱の上に直接置かれる主要な横架材。エンタブラチャーの最下部。",
      derivatives: ["archivolt", "entablature"],
      family: ["archi-", "trab-"],
      compounds: ["architrave molding", "door architrave"]
    },
    "arris": {
      origin: "フランス語 arête（稜・とがった部分）から。ラテン語 arista（穂先）。建築で二つの平面が出会う鋭い稜線または角。",
      derivatives: ["edge", "ridge"],
      family: ["sharp edges"],
      compounds: ["arris gutter", "arris tile"]
    },
    "ashlar": {
      origin: "古フランス語 aisselier（薄い板・割り材）から。ラテン語 axilla（小板）。精密に切り出され四角に仕上げた石材、またはその積み方。",
      derivatives: ["ashlar masonry", "coursed ashlar"],
      family: ["stonework"],
      compounds: ["ashlar facing", "random ashlar", "coursed ashlar"]
    },
    "baldachin": {
      origin: "イタリア語 baldacchino。バグダッド（Baldac / Baldacco）産の豪華な絹織物に由来。後に祭壇・玉座・聖体を覆う装飾的な天蓋構造を指す。",
      derivatives: ["baldacchino", "canopy"],
      family: ["canopy structures"],
      compounds: ["altar baldachin", "bernini baldachin"]
    },
    "balusters": {
      origin: "フランス語 balustre（ザクロの花の萼）から。イタリア語 balaustro。花のような膨らみを持つ短い柱形。手すりを支える連続した小柱。",
      derivatives: ["balustrade", "banister"],
      family: ["railing components"],
      compounds: ["stone balusters", "baluster column", "turned balusters"]
    },
    "bartisan": {
      origin: "スコットランド語 bratticing（板張り防護）が変化した語。城壁や塔の上部から張り出した小型の半塔または防御用突出部。",
      derivatives: ["battlement", "turret"],
      family: ["castle elements"],
      compounds: ["corner bartisan", "parapet bartisan"]
    },
    "bastion": {
      origin: "イタリア語 bastione（大規模な建造物）から。フランス語 bastir / bâtir（建てる）に由来。城壁から五角形に突き出した防衛用の稜堡。",
      derivatives: ["battery", "fortification"],
      family: ["military architecture"],
      compounds: ["angle bastion", "bastion fort", "defensive bastion"]
    },
    "bracket": {
      origin: "フランス語 braguette（ブリーチズのひだ）から。または brague（束）。壁面から水平に突き出し、上部の重量を支える支持部材。",
      derivatives: ["corbel", "cantilever"],
      family: ["supporting elements"],
      compounds: ["wall bracket", "bracket shelf", "bracket support"]
    },
    "campanile": {
      origin: "イタリア語 campana（鐘）から。ラテン語 campana（カンパーニャ地方の鐘）。教会または広場に独立して建つ鐘楼。ピサの斜塔が有名。",
      derivatives: ["bell tower", "belfry"],
      family: ["camp-", "bell"],
      compounds: ["free-standing campanile", "san marco campanile"]
    },
    "cantilever": {
      origin: "英語 cant（斜め・突き出た）＋lever（梁・レバー）。支点の一端のみで支持され、もう一端が空中に張り出す梁構造。フランク・ロイド・ライトが多用。",
      derivatives: ["cantilevered", "cantilever bridge"],
      family: ["structural elements"],
      compounds: ["cantilever bridge", "cantilever beam", "cantilever construction"]
    },
    "catenary": {
      origin: "ラテン語 catena（鎖）から。重力下で自由に垂れ下がる均一な鎖が描く自然の懸垂曲線。ガウディはこの逆形を構造アーチに応用した。",
      derivatives: ["chain curve", "catenary arch"],
      family: ["caten-", "chain"],
      compounds: ["catenary arch", "catenary curve", "inverted catenary"]
    },
    "chancel": {
      origin: "ラテン語 cancelli（格子・柵）から。信徒席（nave）と聖域を分ける格子に由来。聖職者と合唱隊が使用する祭壇周辺の区画。",
      derivatives: ["chancellor", "cancel"],
      family: ["cancel-", "lattice"],
      compounds: ["chancel arch", "chancel screen", "chancel rail"]
    },
    "chevron": {
      origin: "フランス語 chevron（垂木・ヤギの脚）から。ラテン語 capra（ヤギ）。V字形または山形のパターン。建築装飾・紋章・軍隊の階級章に使用。",
      derivatives: ["chevron pattern", "herringbone"],
      family: ["capra-", "goat"],
      compounds: ["chevron pattern", "chevron molding", "chevron arch"]
    },
    "clerestory": {
      origin: "中英語 clere（明るい・透明な）＋story（階）。ゴシック大聖堂の身廊上部に設けられた高い窓の列。室内を明るくするために採光を確保。",
      derivatives: ["clear story", "clearstory"],
      family: ["fenestration"],
      compounds: ["clerestory windows", "clerestory level", "clerestory lighting"]
    },
    "coving": {
      origin: "英語 cove（小湾・くぼみ）から。老英語 cofa（小部屋）に由来。天井と壁面が曲線的に接合する凹型の成形部分または装飾。",
      derivatives: ["cove ceiling", "soffit"],
      family: ["curved moldings"],
      compounds: ["cove molding", "cove ceiling", "coving cornice"]
    },
    "diaper": {
      origin: "中世ラテン語 diasprus（模様入り布）から。ギリシャ語 diaspros（全体的に白い）。菱形や四角形を繰り返す幾何学的な建築表面装飾。",
      derivatives: ["diaper work", "diaper pattern"],
      family: ["surface ornament"],
      compounds: ["diaper pattern", "diaper brickwork", "stone diaper"]
    },
    "dormer": {
      origin: "フランス語 dormir（眠る）から。dormer window は「眠る窓」。屋根の傾斜面から垂直に突き出た窓付きの小屋根構造。",
      derivatives: ["dormer window", "roof window"],
      family: ["dorm-", "sleep"],
      compounds: ["dormer window", "gabled dormer", "shed dormer"]
    },
    "drum": {
      origin: "英語 drum（太鼓）から転用。太鼓に似た円筒形の建築要素。ドームを支える壁体、または円柱を構成する積み重ねた石材を指す。",
      derivatives: ["cylinder", "tholobate"],
      family: ["cylindrical forms"],
      compounds: ["dome drum", "drum wall", "column drum"]
    },
    "entablature": {
      origin: "フランス語 entablement（台盤の上）から。古典建築で柱頭の上に置かれる水平部分全体。アーキトレーブ・フリーズ・コーニスの三層から構成される。",
      derivatives: ["architrave", "frieze", "cornice"],
      family: ["classical orders"],
      compounds: ["doric entablature", "entablature profile"]
    },
    "fanlight": {
      origin: "英語 fan（扇）＋light（明かり取り窓）。ドア上部に設けられた扇形または半円形のガラス窓。18世紀英国建築に多用。",
      derivatives: ["transom light", "semicircular window"],
      family: ["window types"],
      compounds: ["fanlight window", "door fanlight", "georgian fanlight"]
    },
    "fascia": {
      origin: "ラテン語 fascia（帯・包帯・束）から。建築でアーキトレーブの水平帯状部分、またはビルの看板取付面を指す多義語。",
      derivatives: ["fascist", "fasces"],
      family: ["fasc-", "band"],
      compounds: ["fascia board", "fascia sign", "fascia architrave"]
    },
    "fenestration": {
      origin: "ラテン語 fenestra（窓）から。建物の外観における窓の位置・サイズ・形状・数の計画と配置。建築設計の重要な採光・換気要素。",
      derivatives: ["defenestration", "fenestrated"],
      family: ["fenest-", "window"],
      compounds: ["fenestration pattern", "building fenestration"]
    },
    "gable": {
      origin: "古フランス語 gable（頂点）から。中期英語 gable。屋根の傾斜によって形成される建物端部の三角形の壁面。ゴシック・ノルマン建築に特徴的。",
      derivatives: ["gabled", "gable end"],
      family: ["roof elements"],
      compounds: ["gable end", "gable roof", "pediment gable"]
    },
    "groin": {
      origin: "古英語 grynde（くぼんだ溝）から。二つのヴォールトが直角に交わることで形成される稜線または角。グロイン・ヴォールトはロマネスク建築に多い。",
      derivatives: ["groin vault", "cross vault"],
      family: ["vault construction"],
      compounds: ["groin vault", "groin rib", "groined ceiling"]
    },
    "hipped": {
      origin: "英語 hip（屋根の棟・隅棟）から。四方向全てが傾斜する屋根形式。頂部に水平な棟があり四面に傾斜する寄棟屋根。",
      derivatives: ["hip roof", "hip rafter"],
      family: ["roof types"],
      compounds: ["hipped roof", "hip and valley roof"]
    },
    "impost": {
      origin: "ラテン語 imponere（上に置く）から。フランス語 imposte。アーチや円弧の出発点を支える水平の部材または壁面の出っ張り。",
      derivatives: ["import", "impose"],
      family: ["im-", "pon-"],
      compounds: ["impost block", "impost molding", "impost capital"]
    },
    "intrados": {
      origin: "スペイン語 intrados。ラテン語 intra-（内側）＋dos（背・裏）。アーチの内側（凹側）の曲面。外側の曲面 extrados と対をなす語。",
      derivatives: ["extrados", "soffit"],
      family: ["arch geometry"],
      compounds: ["arch intrados", "vault intrados"]
    },
    "jamb": {
      origin: "古フランス語 jambe（脚・脛）から。ラテン語 gamba（脚）。扉・窓の開口部両側の垂直な部材。石造または木造で仕上げられる。",
      derivatives: ["jamb stone", "door jamb"],
      family: ["gamba-", "leg"],
      compounds: ["door jamb", "window jamb", "jamb stone"]
    },
    "lancet": {
      origin: "フランス語 lance（槍）の指小形 lancette（小槍）から。槍の穂先のような細く尖ったアーチ形の窓。ゴシック建築初期の特徴的な窓型。",
      derivatives: ["lancet arch", "pointed arch"],
      family: ["lance-", "spear"],
      compounds: ["lancet window", "lancet arch", "lancet style"]
    },
    "lantern": {
      origin: "ラテン語 lanterna（提灯・灯台）から。ドームや塔屋の頂部に設けられた採光・換気のための小塔状構造。内部に光を導く役割。",
      derivatives: ["lanternslide", "magic lantern"],
      family: ["light structures"],
      compounds: ["dome lantern", "lantern tower", "lantern light"]
    },
    "lunette": {
      origin: "フランス語 lunette（小さな月）から。lune（月）の縮小形。半円形・三日月形の窓、壁面の半円形装飾、または半円形の壁面区画。",
      derivatives: ["moon", "lunation"],
      family: ["lun-", "moon"],
      compounds: ["lunette window", "lunette fresco", "fanlight lunette"]
    },
    "mansard": {
      origin: "フランスの建築家 François Mansart（1598〜1666）の名から。上部が緩い勾配、下部が急な勾配の二段屋根。居住空間を屋根内に確保できる。",
      derivatives: ["mansard roof", "mansard window"],
      family: ["roof types"],
      compounds: ["mansard roof", "french mansard", "mansard story"]
    },
    "merlon": {
      origin: "イタリア語 merlone（燕尾形の突起）から。ラテン語 merulus（ツグミ）とも関連。城壁の胸壁に並ぶ凹凸の突き出た部分。銃眼の間の固体部分。",
      derivatives: ["battlement", "crenellation"],
      family: ["defensive elements"],
      compounds: ["merlon battlement", "merlon crenellation"]
    },
    "metope": {
      origin: "ギリシャ語 metope（間の穴）。meta-（間に）＋ope（穴・開口部）。ドーリス式フリーズで三連板（トリグリフ）の間に置かれる四角い板状の区画。",
      derivatives: ["triglyphon", "frieze"],
      family: ["classical orders"],
      compounds: ["doric metope", "metope relief", "triglyphs and metopes"]
    },
    "motte": {
      origin: "フランス語 motte（土の塊・土盛り）から。ノルマン征服後の英国で普及した城形式「モット＆ベイリー」の人工的な土盛りの丘。",
      derivatives: ["motte and bailey", "mound"],
      family: ["castle forms"],
      compounds: ["motte and bailey", "motte castle"]
    },
    "narthex": {
      origin: "ギリシャ語 narthex（フェンネルの茎・筒状の容器）から。初期キリスト教会で信者と非信者を分けるために設けた教会前廊または玄関ホール。",
      derivatives: ["vestibule", "exonarthex"],
      family: ["church elements"],
      compounds: ["inner narthex", "outer narthex", "narthex vestibule"]
    },
    "newel": {
      origin: "古フランス語 nouel（核・中心）から。ラテン語 nodellus（小さな節）。らせん階段の中央を貫く垂直の支柱、または手すりの端部を支える柱。",
      derivatives: ["newel post", "central post"],
      family: ["stair elements"],
      compounds: ["newel post", "newel stair", "newel cap"]
    },
    "oculus": {
      origin: "ラテン語 oculus（目）から。ドームの頂部または壁面に設けられた円形の開口部または窓。パンテオンの天窓が最も有名な例。",
      derivatives: ["oculist", "ocular"],
      family: ["ocul-", "eye"],
      compounds: ["oculus window", "dome oculus", "pantheon oculus"]
    },
    "oriel": {
      origin: "古フランス語 oriol（廊下・小部屋）から。建物の上階の壁面から外側に張り出した出窓。下部は壁面に支持されるか、ブラケットで支える。",
      derivatives: ["bay window", "bow window"],
      family: ["window types"],
      compounds: ["oriel window", "corner oriel", "oriel bay"]
    },
    "pavilion": {
      origin: "フランス語 pavillon（テント・蝶）から。ラテン語 papilio（蝶・天幕）。蝶の羽を広げた形のテントが語源。独立した軽構造の建物全般を指す。",
      derivatives: ["pavilion roof", "garden pavilion"],
      family: ["papilio-", "butterfly"],
      compounds: ["garden pavilion", "exhibition pavilion", "hospital pavilion"]
    },
    "pier": {
      origin: "中期英語 pere / 古フランス語 piere（石）から。ラテン語 petra（岩石）。建物を支える大型の垂直支持体、または橋梁の橋脚。",
      derivatives: ["pillar", "column"],
      family: ["pietr-", "stone"],
      compounds: ["pier column", "bridge pier", "nave pier"]
    },
    "pilaster": {
      origin: "イタリア語 pilastro（小柱）から。ラテン語 pila（柱・支柱）。壁面に付属する扁平な角柱状の装飾。柱の形式を持つが構造的機能は低い。",
      derivatives: ["pillar", "engaged column"],
      family: ["pil-", "pillar"],
      compounds: ["pilaster strip", "ionic pilaster", "pilaster capital"]
    },
    "pillar": {
      origin: "ラテン語 pila（柱・土台）から。独立して建つ垂直の支持体で、円形または角形。柱頭・柱身・柱礎を持つ column とは区別されることもある。",
      derivatives: ["pier", "column"],
      family: ["pil-", "support"],
      compounds: ["pillar box", "stone pillar", "support pillar"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch Q (Architecture2 from data-mixed-55: apse-pillar, 44 words)');
